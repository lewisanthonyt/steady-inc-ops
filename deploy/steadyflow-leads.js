/* ===================== STEADYFLOW — LEAD ENGINE (UI) ===================== */
/* "Up to 3 businesses worth contacting today." Scoring lives in lead-core.js
   (LeadCore); research runs server-side in the `lead-engine` Edge Function.
   Data: its own Supabase tables (le_*), NOT the shared DB blob. On first contact a
   lead is linked to a DB.sfProspects record so the Acquisition pipeline, Targets and
   dashboards keep working off one CRM.
   If the le_* tables don't exist yet the page shows setup steps, plus a SANDBOX with
   clearly-labelled MOCK businesses so the screens can be tried safely. */

const LE_TABS = [['today',"Today's 3"],['leads','Leads'],['pipeline','Pipeline'],['funnel','Funnel'],['map','Map'],['performance','Performance'],['settings','Settings']];
// Shared store for both engines. LE.leads / daily / touches / followups / runs are SteadyFlow's view;
// LE.sw holds SteadyWorks' (steadyworks-desk.js). LE.allLeads is every organisation record.
const LE = {mode:'loading', error:'', settings:null, leads:[], allLeads:[], daily:[], touches:[], followups:[], runs:[], apiCalls:[], briefs:{}, providers:null,
  sw:{settings:null, opps:[], daily:[], touches:[], followups:[], runs:[], briefs:{}},
  scored:{}, loadedAt:0, tab:'today', filters:{industry:'', area:'', minScore:0, minStrength:0, service:'', stage:'', q:'', centre:'', radius:0, centreLL:null}, mapFilter:'all', busy:false};
try{ LE.tab = localStorage.getItem('steadyflow_le_tab') || 'today'; }catch(e){}
const LE_SANDBOX_KEY = 'steadyflow_le_sandbox_v2';
const LE_CORE = window.LeadCore;

/* ---------- small helpers ---------- */
const leToday = ()=>localDateStr();
const leMoney = n=>'£'+Math.round(Number(n)||0).toLocaleString('en-GB');
function leGreeting(){ const h = new Date().getHours(); return h<12?'Good morning':h<18?'Good afternoon':'Good evening'; }
function leBandColor(b){ return b==='HOT'?'#FF6B4A' : b==='STRONG'?'var(--teal)' : b==='WARM'?'var(--warning)' : 'var(--text-soft)'; }
function leBandIcon(b){ return b==='HOT'?'🔥' : b==='STRONG'?'⚡' : b==='WARM'?'🌤️' : '·'; }
function leStatusChip(st){
  const c = {VERIFIED:'le-chip-ok', LIKELY:'le-chip-likely', INFERRED:'le-chip-inf', UNKNOWN:'le-chip-unk'}[st] || 'le-chip-unk';
  return `<span class="le-chip ${c}">${esc(st||'UNKNOWN')}</span>`;
}
function leLead(id){ return LE.allLeads.find(l=>l.id===id) || LE.leads.find(l=>l.id===id); }
const leHasScope = (l, biz)=>(l.scope||['sf']).includes(biz);
// Splits the shared rows into each business's view.
function leDistribute(all, daily, touches, followups, runs){
  LE.allLeads = all; LE.leads = all.filter(l=>leHasScope(l,'sf'));
  const sw = r=>r.biz==='sw';
  LE.daily = daily.filter(r=>!sw(r)); LE.sw.daily = daily.filter(sw);
  LE.touches = touches.filter(r=>!sw(r)); LE.sw.touches = touches.filter(sw);
  LE.followups = followups.filter(r=>!sw(r)); LE.sw.followups = followups.filter(sw);
  LE.runs = runs.filter(r=>!sw(r)); LE.sw.runs = runs.filter(sw);
}
// Settings row holds both: SteadyFlow's at the top level, SteadyWorks' under .sw
function leSettingsPayload(){ const d = Object.assign({}, LE.settings); d.sw = LE.sw.settings; return d; }
function leScore(l){
  if(!LE.scored[l.id]) LE.scored[l.id] = LE_CORE.scoreLead(l, LE.settings, leCtx());
  return LE.scored[l.id];
}
function leInvalidate(){ LE.scored = {}; }
function leCtx(){
  const clientDomains = new Set((DB.sfClients||[]).map(c=>LE_CORE.normaliseDomain(c.website)).filter(Boolean));
  return {now:new Date(), clientDomains};
}
function leProspectFor(l){ return (DB.sfProspects||[]).find(p=>p.id===l.prospectId || (p.leadId && p.leadId===l.id)) || null; }
// Pipeline stage: the linked Acquisition prospect drives it once contacted.
function leStage(l){
  const p = leProspectFor(l);
  const fromAcq = p ? LE_CORE.stageFromAcqStatus(p.status) : null;
  if(fromAcq) return fromAcq;
  if(LE_CORE.POST_CONTACT.includes(l.stage)) return l.stage;
  return LE_CORE.preContactStage(l, leScore(l));
}
function leFactText(f){
  if(!f) return '—';
  const v = f.value;
  if(Array.isArray(v)) return v.length ? v.map(x=>x.network||x).join(', ') : 'none';
  if(v===true) return 'Yes'; if(v===false) return 'No';
  if(typeof v==='number' && v>0 && v<1) return Math.round(v*100)+'%';
  return String(v);
}
function leAgo(ts){ if(!ts) return '—'; const d = Math.floor((Date.now()-new Date(ts).getTime())/86400000); return d<=0?'today':d===1?'yesterday':d+' days ago'; }

/* ---------- storage: Supabase (live) or local sandbox ---------- */
function leIsMissingTable(err){ return err && (/relation .* does not exist|could not find the table|schema cache/i.test(err.message||'') || ['42P01','PGRST205','PGRST202'].includes(err.code)); }
const LeStore = {
  async load(){
    if(LE.mode==='sandbox') return leSandboxLoad();
    const uidNow = CURRENT_USER_ID;
    const [st, leads, daily, touches, fus, runs, calls, briefs, opps] = await Promise.all([
      sb.from('le_settings').select('data').maybeSingle(),
      sb.from('le_leads').select('*').order('updated_at',{ascending:false}).limit(5000),
      sb.from('le_daily').select('*').gte('day', localDateStr(new Date(Date.now()-30*86400000))),
      sb.from('le_touches').select('*').order('at',{ascending:false}).limit(5000),
      sb.from('le_followups').select('*').order('due_date',{ascending:true}).limit(2000),
      sb.from('le_runs').select('*').order('started_at',{ascending:false}).limit(30),
      sb.from('le_api_calls').select('provider,sku,cost_gbp,cache_hit,ok,at,lead_id').gte('at', new Date(Date.now()-62*86400000).toISOString()).limit(20000),
      sb.from('le_briefs').select('lead_id,biz,brief,model,created_at,cost_gbp'),
      sb.from('le_opportunities').select('*').limit(5000)
    ]);
    const firstErr = [st,leads,daily,touches,fus,runs,calls,briefs,opps].map(r=>r.error).find(Boolean);
    if(firstErr){ if(leIsMissingTable(firstErr)){ LE.mode = 'setup'; return; } throw firstErr; }
    LE.mode = 'live';
    const sdata = st.data ? Object.assign({}, st.data.data) : {};
    const swStored = sdata.sw; delete sdata.sw;
    LE.settings = LE_CORE.mergeSettings(sdata);
    LE.sw.settings = window.WorksCore ? WorksCore.mergeSettings(swStored) : (swStored||{});
    leDistribute((leads.data||[]).map(LE_CORE.rowToLead), daily.data||[], touches.data||[], fus.data||[], runs.data||[]);
    LE.apiCalls = calls.data||[];
    LE.briefs = Object.fromEntries((briefs.data||[]).filter(b=>b.biz!=='sw').map(b=>[b.lead_id, b]));
    LE.sw.briefs = Object.fromEntries((briefs.data||[]).filter(b=>b.biz==='sw').map(b=>[b.lead_id, b]));
    LE.sw.opps = opps.data||[];
    LE.ownerId = uidNow;
  },
  async saveSettings(s){
    LE.settings = s; leInvalidate();
    if(LE.mode==='sandbox') return leSandboxSave();
    const {error} = await sb.from('le_settings').upsert({owner_id:CURRENT_USER_ID, data:leSettingsPayload(), updated_at:new Date().toISOString()});
    if(error) throw error;
  },
  async updateLead(id, patch){
    const l = leLead(id); if(l) Object.assign(l, patch); leInvalidate();
    if(LE.mode==='sandbox') return leSandboxSave();
    const {error} = await sb.from('le_leads').update(LE_CORE.leadToRow(patch)).eq('id', id);
    if(error) throw error;
  },
  async insertLead(lead){
    lead.scope = lead.scope || ['sf'];
    if(LE.mode==='sandbox'){ lead.id = 'sbx-'+uid(); LE.allLeads.unshift(lead); if(leHasScope(lead,'sf')) LE.leads.unshift(lead); leSandboxSave(); return lead; }
    const row = Object.assign({owner_id:CURRENT_USER_ID}, LE_CORE.leadToRow(lead));
    const {data, error} = await sb.from('le_leads').insert(row).select('*').single();
    if(error) throw error;
    const l = LE_CORE.rowToLead(data); LE.allLeads.unshift(l); if(leHasScope(l,'sf')) LE.leads.unshift(l); return l;
  },
  // Permanent deletion (data-deletion requests). The suppression hash is kept so it's never rediscovered.
  async deleteLead(l, keepSuppressed){
    if(keepSuppressed) await this.suppress(l, 'Deleted on request');
    LE.allLeads = LE.allLeads.filter(x=>x.id!==l.id); LE.leads = LE.leads.filter(x=>x.id!==l.id);
    LE.sw.opps = LE.sw.opps.filter(o=>o.lead_id!==l.id);
    if(LE.mode==='sandbox') return leSandboxSave();
    const {error} = await sb.from('le_leads').delete().eq('id', l.id); if(error) throw error;
  },
  // SteadyWorks opportunity row (one per lead): stage, contractor status, linked customer, account notes.
  async upsertOpp(leadId, patch){
    let o = LE.sw.opps.find(x=>x.lead_id===leadId);
    if(!o){ o = {lead_id:leadId, biz:'sw', stage:'discovered', account:{}, rejected:[], created_at:new Date().toISOString()}; LE.sw.opps.push(o); }
    Object.assign(o, patch, {updated_at:new Date().toISOString()});
    if(LE.mode==='sandbox') return leSandboxSave(), o;
    const row = Object.assign({owner_id:CURRENT_USER_ID, lead_id:leadId, biz:'sw'}, patch);
    const {data, error} = await sb.from('le_opportunities').upsert(row, {onConflict:'lead_id,biz'}).select('*').single();
    if(error) throw error;
    Object.assign(o, data); return o;
  },
  async addTouch(t){
    t = Object.assign({id: LE.mode==='sandbox' ? 'sbx-'+uid() : undefined, biz:'sf', at:new Date().toISOString(), salesperson: CURRENT_USER_EMAIL||''}, t);
    if(LE.mode!=='sandbox'){ delete t.id; const {data, error} = await sb.from('le_touches').insert(t).select('*').single(); if(error) throw error; t = data; }
    (t.biz==='sw' ? LE.sw.touches : LE.touches).unshift(t); if(LE.mode==='sandbox') leSandboxSave(); return t;
  },
  async addFollowup(f){
    f = Object.assign({id: LE.mode==='sandbox' ? 'sbx-'+uid() : undefined, biz:'sf', created_at:new Date().toISOString(), done_at:null}, f);
    if(LE.mode!=='sandbox'){ delete f.id; const {data, error} = await sb.from('le_followups').insert(f).select('*').single(); if(error) throw error; f = data; }
    (f.biz==='sw' ? LE.sw.followups : LE.followups).push(f); if(LE.mode==='sandbox') leSandboxSave(); return f;
  },
  async completeFollowup(id){
    const f = LE.followups.concat(LE.sw.followups).find(x=>x.id===id); if(f) f.done_at = new Date().toISOString();
    if(LE.mode==='sandbox') return leSandboxSave();
    const {error} = await sb.from('le_followups').update({done_at:f.done_at}).eq('id', id); if(error) throw error;
  },
  async setDaily(rows, biz){
    biz = biz||'sf'; rows = rows.map(r=>Object.assign({biz}, r));
    const key = biz==='sw' ? 'sw' : null;
    const cur = key ? LE.sw.daily : LE.daily;
    if(LE.mode!=='sandbox'){ const {error} = await sb.from('le_daily').insert(rows.map(r=>Object.assign({owner_id:CURRENT_USER_ID}, r))); if(error) throw error; }
    const next = (LE.mode==='sandbox' ? cur.filter(d=>d.day!==leToday()) : cur).concat(rows);
    if(key) LE.sw.daily = next; else LE.daily = next;
    if(LE.mode==='sandbox') leSandboxSave();
  },
  async markDaily(leadId, channel, biz){
    biz = biz||'sf';
    const d = (biz==='sw'?LE.sw.daily:LE.daily).find(x=>x.day===leToday() && x.lead_id===leadId); if(!d) return;
    d.actions = Object.assign({}, d.actions||{}, {[channel]: new Date().toISOString()});
    d.actioned_at = d.actioned_at || new Date().toISOString();
    if(LE.mode==='sandbox') return leSandboxSave();
    const {error} = await sb.from('le_daily').update({actions:d.actions, actioned_at:d.actioned_at}).eq('biz', biz).eq('day', d.day).eq('lead_id', leadId); if(error) throw error;
  },
  async suppress(l, reason){
    const keys = LE_CORE.dedupeKeys(l);
    await this.updateLead(l.id, {suppressed:true});
    if(LE.mode==='sandbox') return;
    for(const k of keys){
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(k));
      const hash = Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
      await sb.from('le_suppression').upsert({owner_id:CURRENT_USER_ID, key_hash:hash, reason}, {onConflict:'owner_id,key_hash', ignoreDuplicates:true});
    }
  },
  async invoke(action, body){
    if(LE.mode==='sandbox') return {ok:false, error:'The research backend isn\'t connected in the sandbox.'};
    const {data, error} = await sb.functions.invoke('lead-engine', {body:Object.assign({action}, body||{})});
    if(error){
      let msg = error.message||String(error);
      if(/Failed to send|not found|404|FunctionsFetchError|FunctionsRelayError/i.test(msg)) msg = 'The lead-engine function isn\'t deployed yet (see docs/lead-engine/SETUP.md).';
      return {ok:false, error:msg};
    }
    return data||{ok:false};
  }
};

/* ---------- sandbox (MOCK data, this browser only) ---------- */
function leSandboxLoad(){
  let s = null;
  try{ s = JSON.parse(localStorage.getItem(LE_SANDBOX_KEY)||'null'); }catch(e){ s = null; }
  if(!s){
    const swMocks = window.WorksCore ? WorksCore.mockOrgs(new Date()) : [];
    const swSettings = window.WorksCore ? WorksCore.defaultSettings() : {};
    if(swSettings.geo){ swSettings.geo.basePostcode = 'IG1 1AA'; swSettings.geo.base = {lat:51.5590, lng:0.0741}; } // MOCK base so the sandbox can score distance
    s = {settings:LE_CORE.defaultSettings(), swSettings, leads:LE_CORE.mockLeads(new Date()).map(l=>Object.assign(l,{scope:['sf']})).concat(swMocks), opps:[], daily:[], touches:[], followups:[]};
  }
  LE.settings = LE_CORE.mergeSettings(s.settings);
  LE.sw.settings = window.WorksCore ? WorksCore.mergeSettings(s.swSettings) : {};
  LE.sw.opps = s.opps||[];
  leDistribute(s.leads, s.daily||[], s.touches||[], s.followups||[], []);
  LE.apiCalls = []; LE.briefs = {}; LE.sw.briefs = {};
}
function leSandboxSave(){
  try{ localStorage.setItem(LE_SANDBOX_KEY, JSON.stringify({settings:LE.settings, swSettings:LE.sw.settings, leads:LE.allLeads, opps:LE.sw.opps,
    daily:LE.daily.concat(LE.sw.daily), touches:LE.touches.concat(LE.sw.touches), followups:LE.followups.concat(LE.sw.followups)})); }catch(e){}
}
function leEnterSandbox(){ LE.mode = 'sandbox'; leInvalidate(); leSandboxLoad(); renderPage(); toast('Sandbox — MOCK data only, nothing is saved to your database','🧪'); }
function leResetSandbox(){ try{ localStorage.removeItem(LE_SANDBOX_KEY); }catch(e){} leSandboxLoad(); leInvalidate(); renderPage(); toast('Sandbox reset'); }
async function leExitSandbox(){ LE.mode = 'loading'; await leReload(); }

async function leReload(silent){
  try{ LE.error = ''; await LeStore.load(); }catch(e){ LE.error = e.message||String(e); LE.mode = LE.mode==='loading' ? 'error' : LE.mode; }
  LE.loadedAt = Date.now(); leInvalidate();
  if(currentRoute==='sf-leads') renderPage();
  if(!silent) renderNav();
}

/* ---------- page shell ---------- */
function setLeTab(t){ LE.tab = t; try{ localStorage.setItem('steadyflow_le_tab', t); }catch(e){} renderPage(); }
function view_sf_leads(){
  if(!LE_CORE) return '<div class="empty-state">lead-core.js didn\'t load.</div>';
  if(LE.mode==='loading'){ if(!LE.loadedAt) setTimeout(()=>leReload(), 0); return '<div class="card"><div class="muted">Loading Lead Engine…</div></div>'; }
  if(LE.mode==='setup') return leSetupView();
  if(LE.mode==='error') return `<div class="card"><div class="card-title">Lead Engine couldn't load</div><p class="muted">${esc(LE.error)}</p><button class="btn btn-ghost mt-10" onclick="leReload()">Try again</button></div>`;
  const banner = LE.mode==='sandbox' ? `<div class="le-sandbox-banner">🧪 <strong>SANDBOX — MOCK DATA.</strong> Fictional businesses for trying the screens. Nothing here is real or saved to your database.
      <span class="spacer"></span><button class="btn btn-ghost btn-sm" onclick="leResetSandbox()">Reset</button><button class="btn btn-ghost btn-sm" onclick="leExitSandbox()">Exit sandbox</button></div>` : '';
  const due = leFollowupsDue().length;
  const tabs = `<div class="tabs">${LE_TABS.map(([k,l])=>`<button class="tab-btn ${LE.tab===k?'active':''}" onclick="setLeTab('${k}')">${l}${k==='today'&&due?` <span class="nav-badge" style="position:static;margin-left:4px;">${due}</span>`:''}</button>`).join('')}</div>`;
  const body = ({today:leTodayView, leads:leLeadsView, pipeline:lePipelineView, funnel:leFunnelView, map:leMapView, performance:lePerformanceView, settings:leSettingsView}[LE.tab] || leTodayView)();
  return `<div class="le-root">${banner}${tabs}${body}</div>`;
}
function afterRender_sf_leads(){
  if(LE.tab==='map') leDrawMap();
}

function leSetupView(){
  return `<div class="le-hero card">
    <div class="le-eyebrow">STEADYFLOW LEAD ENGINE</div>
    <h2 class="le-hero-title">Up to 3 businesses worth your time, every morning.</h2>
    <p class="muted" style="max-width:640px;">The database tables for the Lead Engine haven't been created yet. Nothing has been changed in your live Supabase project — the migration is ready for you to review and apply.</p>
    <ol class="le-steps">
      <li>Apply <code>supabase/migrations/20261004120000_lead_engine.sql</code> (new <code>le_*</code> tables only — nothing existing is touched).</li>
      <li>Deploy the <code>lead-engine</code> Edge Function and add its secrets (Companies House key is free).</li>
      <li>Optional: schedule it with <code>supabase/cron.sql</code>.</li>
    </ol>
    <p class="small muted">Full steps: <code>docs/lead-engine/SETUP.md</code> · design & reasoning: <code>docs/lead-engine/ARCHITECTURE.md</code></p>
    <div class="mt-10" style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-gold" onclick="leEnterSandbox()">🧪 Explore with MOCK data</button>
      <button class="btn btn-ghost" onclick="LE.mode='loading';leReload()">I've applied it — check again</button>
    </div>
  </div>`;
}

/* ===================== TODAY'S 3 ===================== */
function leTodayRows(){ return LE.daily.filter(d=>d.day===leToday()).sort((a,b)=>a.rank-b.rank); }
function leFollowupsDue(){
  const t = leToday();
  return LE.followups.filter(f=>!f.done_at && f.due_date<=t).map(f=>Object.assign({lead:leLead(f.lead_id)}, f)).filter(f=>f.lead).sort((a,b)=>a.due_date.localeCompare(b.due_date));
}
function leTodayView(){
  const rows = leTodayRows();
  const n = LE.settings.dailyQuantity;
  const items = rows.map(d=>({d, lead:leLead(d.lead_id)})).filter(x=>x.lead);
  const value = items.reduce((s,x)=>s+(Number(x.d.deal_high)||0),0), low = items.reduce((s,x)=>s+(Number(x.d.deal_low)||0),0);
  const done = items.filter(x=>x.d.actioned_at).length;
  const dateLabel = new Date().toLocaleDateString('en-GB',{weekday:'long', day:'numeric', month:'long'});
  const head = `<div class="le-today-head">
    <div><div class="le-eyebrow">${leGreeting().toUpperCase()}</div><h2 class="le-hero-title" style="margin:2px 0 0;">Today's ${n}</h2><div class="muted small">${dateLabel}</div></div>
    <div class="le-today-stats">
      <div><div class="le-stat-label">Potential pipeline</div><div class="le-stat-val">${items.length? leMoney(low)+' – '+leMoney(value):'—'}</div>${!LE.settings.pricesConfirmed?'<div class="small muted">from placeholder prices · <a class="le-link" onclick="setLeTab(\'settings\')">set yours</a></div>':''}</div>
      <div><div class="le-stat-label">Outreach</div><div class="le-stat-val">${done} / ${items.length||n}</div></div>
    </div>
  </div>`;
  let main;
  if(!items.length){
    main = `<div class="card le-empty">
      <div class="le-empty-icon">🧭</div>
      <div><strong>No selection for today yet.</strong>
      <p class="muted small" style="margin:4px 0 10px;">Selection only uses leads that have been researched and pass every check in the quality gate. It never lowers the bar to fill ${n} slots.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-gold" onclick="leSelectNow()">Select from current research</button>
        ${LE.mode==='live'?`<button class="btn btn-ghost" onclick="leRunPipeline()">▶ Run today's research</button>`:''}
        <button class="btn btn-ghost" onclick="openLeLeadModal()">+ Add a lead manually</button>
      </div></div></div>`;
  } else {
    main = items.map(x=>leBigCard(x.lead, x.d)).join('');
    if(items.length < n) main += `<div class="card le-short"><strong>Only ${items.length} lead${items.length===1?'':'s'} met the bar today.</strong> <span class="muted">The rest fell short of a threshold, so they weren't added just to make up the numbers. See Near misses below.</span></div>`;
    if(done===items.length) main = `<div class="le-complete">TODAY'S OUTREACH COMPLETE ✓ <span class="muted small">— ${items.length} of ${items.length} contacted</span></div>` + main;
  }
  return head + `<div class="le-today-grid"><div>${main}${leNearMissBlock()}</div><div>${leFollowupBlock()}${leTargetMini()}</div></div>`;
}
function leBigCard(l, d){
  const r = leScore(l);
  const o = LE_CORE.outreach(l, r, LE.settings, {name:(DB.settings&&DB.settings.ownerName)||'Lewis', company:'SteadyFlow'});
  const dm = r.contact.decisionMaker;
  const acts = (d && d.actions) || {};
  const ch = r.channels;
  const doneBtn = (k, label)=>`<button class="btn btn-sm ${acts[k]?'le-done':'btn-ghost'}" onclick="leMark('${l.id}','${k}')">${acts[k]?'✓ ':''}${label}</button>`;
  const mail = (ch.email && (dm&&dm.email || l.email) && o.ok) ? `mailto:${encodeURIComponent(dm&&dm.email||l.email)}?subject=${encodeURIComponent(o.email.subject)}&body=${encodeURIComponent(o.email.body)}` : '';
  const wa = ch.whatsapp && o.whatsapp ? `https://wa.me/${LE_CORE.normalisePhone(l.phone).replace(/^0/,'44')}?text=${encodeURIComponent(o.whatsapp)}` : '';
  return `<div class="card le-big ${l.mock?'le-mock':''}">
    <div class="le-big-top">
      <div class="le-rank">#${d?d.rank:'–'}</div>
      <div style="flex:1;min-width:0;">
        <div class="le-big-name">${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</div>
        <div class="muted small">${esc(LE_CORE.industry(l.industry).label)} · ${esc(l.area||r.fit.area)}</div>
      </div>
      <div class="le-scorebox"><div class="le-score" style="color:${leBandColor(r.band)}">${leBandIcon(r.band)} ${r.leadScore}</div><div class="le-score-sub">${r.band} · ${r.confidence}% confidence</div></div>
    </div>
    <div class="le-big-grid">
      <div>
        <div class="le-label">Primary opportunity</div><div class="le-strong">${esc(r.offer||'—')}</div>
        ${r.secondaryService?`<div class="le-label mt-10">Secondary</div><div>${esc(r.secondaryOffer)}</div>`:''}
        <div class="le-label mt-10">Potential value</div><div>${esc(r.deal.label)}${r.deal.assumption?' <span class="small muted">(placeholder prices)</span>':''}</div>
        <div class="le-mini-scores">
          <span title="Website score (0–100)">Website ${r.website.score==null?'?':r.website.score}</span><span title="Need for the primary service">Need ${r.need.byService[r.primaryService]?r.need.byService[r.primaryService].score:0}</span>
          <span title="360 Opportunity">360 ${r.o360.score}</span><span title="Business strength">Strength ${r.strength.score==null?'?':r.strength.score}</span><span title="Commercial gap">Gap ${r.gap}</span>
        </div>
      </div>
      <div>
        <div class="le-label">Why now</div>
        <ul class="le-why">${r.whyNow.map(w=>`<li>${esc(w)}</li>`).join('') || '<li class="muted">—</li>'}</ul>
      </div>
    </div>
    <div class="le-contact-row">
      <div><div class="le-label">Best person</div>${dm?`<strong>${esc(dm.name)}</strong> <span class="muted small">${esc(dm.role||'')}</span> ${leStatusChip(dm.status)}`:'<span class="muted">No named contact yet</span>'}</div>
      <div><div class="le-label">Best approach</div>${esc(o.ok?o.bestApproach:'Research more first')}${!ch.tpsChecked&&l.phone?' <span class="le-chip le-chip-inf" title="Check the number against TPS/CTPS before cold calling">TPS not checked</span>':''}</div>
    </div>
    ${o.ok?`<div class="le-opener"><div class="le-label">Personalised opener</div>${esc(o.opener)}</div>`:`<div class="le-opener muted">${esc(o.reason)}</div>`}
    <div class="le-actions">
      <button class="btn btn-ghost btn-sm" onclick="openLeBrief('${l.id}')">📋 View research</button>
      ${l.phone?`<a class="btn btn-ghost btn-sm" href="tel:${esc(l.phone)}">📞 Call</a>`:''}
      ${mail?`<a class="btn btn-ghost btn-sm" href="${mail}">✉️ Email</a>`:''}
      ${wa?`<a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="${wa}">💬 WhatsApp</a>`:''}
      <span class="spacer"></span>
      ${doneBtn('called','Called')}${doneBtn('emailed','Emailed')}${ch.whatsapp?doneBtn('whatsapp','WhatsApp'):''}${doneBtn('dm','DM')}
      <button class="btn btn-ghost btn-sm" onclick="openLeNote('${l.id}')">+ Note</button>
      <button class="btn btn-ghost btn-sm" onclick="openLeFollowup('${l.id}')">⏰ Follow-up</button>
    </div>
  </div>`;
}
function leNearMissBlock(){
  const near = LE.leads.filter(l=>!LE_CORE.POST_CONTACT.includes(leStage(l)) && !leTodayRows().some(d=>d.lead_id===l.id)).map(l=>({l, r:leScore(l)})).filter(x=>x.r.gate.nearMiss).sort((a,b)=>b.r.leadScore-a.r.leadScore).slice(0,4);
  if(!near.length) return '';
  return `<details class="card le-near"><summary><strong>Near misses (${near.length})</strong> <span class="muted small">— strong leads that fell short of a threshold. They're shown here, not hidden.</span></summary>
    ${near.map(x=>`<div class="le-near-row" onclick="openLeBrief('${x.l.id}')"><span>${esc(x.l.name)} ${x.l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</span><span class="muted small">${x.r.gate.failures.map(f=>esc(f.reason)).join(' · ')}</span><strong>${x.r.leadScore}</strong></div>`).join('')}
  </details>`;
}
function leFollowupBlock(){
  const due = leFollowupsDue();
  const t = leToday();
  const overdue = due.filter(f=>f.due_date<t);
  return `<div class="card le-fu ${overdue.length?'le-fu-overdue':''}">
    <div class="card-title">Follow-ups due today <span class="small muted">separate from today's new leads</span></div>
    ${overdue.length?`<div class="le-overdue-banner">⚠️ ${overdue.length} overdue</div>`:''}
    ${due.length ? due.map(f=>{ const late = f.due_date<t ? Math.round((new Date(t)-new Date(f.due_date))/86400000) : 0;
      return `<div class="le-fu-row">
        <div style="min-width:0;"><div class="le-fu-name" onclick="openLeBrief('${f.lead.id}')">${esc(f.lead.name)}</div><div class="small muted">${late?`<span style="color:var(--danger);">${late} day${late===1?'':'s'} overdue</span>`:'Due today'}${f.note?' · '+esc(f.note):''}</div></div>
        <div style="display:flex;gap:4px;"><button class="btn btn-ghost btn-sm" title="Log what happened" onclick="openLeOutcome('${f.lead.id}','${f.id}')">Log</button><button class="btn btn-ghost btn-sm" title="Done" onclick="leFollowupDone('${f.id}')">✓</button></div>
      </div>`; }).join('') : '<div class="muted small">Nothing due. 👌</div>'}
  </div>`;
}

/* ---------- actions on Today's cards ---------- */
const LE_CH_TOUCH = {called:'call', emailed:'email', whatsapp:'whatsapp', dm:'dm'};
const LE_CH_ACQ = {called:'Called', emailed:'Emailed', whatsapp:'Emailed', dm:'Emailed'};
async function leMark(leadId, channel){
  const l = leLead(leadId); if(!l) return;
  try{
    await LeStore.addTouch({lead_id:l.id, channel:LE_CH_TOUCH[channel], outcome:'sent', offer:leScore(l).offer});
    await LeStore.markDaily(l.id, channel);
    const p = leLinkProspect(l, LE_CH_ACQ[channel]);
    await LeStore.updateLead(l.id, {lastContactedAt:new Date().toISOString(), stage: LE_CORE.POST_CONTACT.includes(l.stage)?l.stage:'contacted', prospectId:p?p.id:l.prospectId});
    logActivity('Lead contacted ('+channel+')', l.name);
    renderPage(); toast(l.name+' — marked '+channel);
    if(!LE.followups.some(f=>f.lead_id===l.id && !f.done_at)) openLeFollowup(l.id, true);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
// Creates or updates the linked Acquisition prospect so the existing CRM, Targets and dashboards see this lead.
function leLinkProspect(l, acqStatus){
  if(l.mock) return null; // sandbox data never touches the real CRM
  const r = leScore(l);
  let p = leProspectFor(l) || (DB.sfProspects||[]).find(x=>x.website && LE_CORE.normaliseDomain(x.website)===LE_CORE.normaliseDomain(l.website));
  const pkg = {website:'pro-web', 'property-site':'pro-web', optimisation:'growth-web', 'lead-gen':'growth-web', crm:'bos', whatsapp:'bos', 'local-seo':'essentials', marketing:'growth-ret', management:'essentials', '360':'pro-web'}[r.primaryService] || 'growth-web';
  if(!p){
    p = {id:uid(), business:l.name, contact:(r.contact.decisionMaker||{}).name||'', type: /agent|developer/.test(l.industry)?'Estate Agent':'Other', source:'Lead Engine',
      phone:l.phone||'', email:l.email||'', website:l.website||'', package:pkg, value: r.deal.mid||null,
      notes:'From Lead Engine — score '+r.leadScore+', '+r.confidence+'% confidence. '+(r.offer||''), status:'Not Contacted', createdAt:localDateStr(), statusChangedAt:new Date().toISOString(), lastContacted:null, wonAt:null, callBookedAt:null, leadId:l.id};
    acqProspects().push(p);
    logActivity('Prospect added', l.name+' (Lead Engine)');
  }
  p.leadId = l.id;
  if(acqStatus) acqSetStatus(p, acqStatus);
  save();
  return p;
}
function openLeFollowup(leadId, suggested){
  const l = leLead(leadId); if(!l) return;
  const days = LE.settings.followUpDays;
  openModal(`<div class="modal-head"><h2>${suggested?'Schedule the follow-up?':'Schedule follow-up'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p class="muted small">${esc(l.name)} — follow-ups never use up one of today's new-lead slots.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;">${days.map(n=>`<button class="btn btn-ghost" onclick="leSaveFollowup('${l.id}', ${n})">In ${n===30?'a month':n+' day'+(n===1?'':'s')}</button>`).join('')}</div>
      <div class="form-row"><div class="form-group"><label>Or pick a date</label><input type="date" id="le-fu-date" min="${leToday()}"></div><div class="form-group"><label>Note</label><input type="text" id="le-fu-note" placeholder="e.g. Ask about the new development"></div></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">${suggested?'Not now':'Cancel'}</button><button class="btn btn-gold" onclick="leSaveFollowup('${l.id}')">Save</button></div>`);
}
async function leSaveFollowup(leadId, days){
  const dateEl = document.getElementById('le-fu-date'), noteEl = document.getElementById('le-fu-note');
  let due = dateEl && dateEl.value;
  if(days){ const d = new Date(); d.setDate(d.getDate()+days); due = localDateStr(d); }
  if(!due){ toast('Pick a date','⚠️'); return; }
  try{ await LeStore.addFollowup({lead_id:leadId, due_date:due, note:noteEl?noteEl.value.trim():''}); closeModal(); renderPage(); toast('Follow-up set for '+fmtDate(due)); }
  catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
async function leFollowupDone(id){ try{ await LeStore.completeFollowup(id); renderPage(); toast('Follow-up done'); }catch(e){ toast(e.message,'⚠️'); } }
function openLeNote(leadId){
  const l = leLead(leadId);
  openModal(`<div class="modal-head"><h2>Note — ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><textarea id="le-note" placeholder="What happened, who you spoke to, what they said…"></textarea></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="leSaveNote('${l.id}')">Save note</button></div>`);
}
async function leSaveNote(leadId){
  const t = document.getElementById('le-note').value.trim(); if(!t) return;
  try{ await LeStore.addTouch({lead_id:leadId, channel:'note', note:t}); closeModal(); renderPage(); toast('Note saved'); }catch(e){ toast(e.message,'⚠️'); }
}
const LE_OUTCOMES = [['no_answer','No answer'],['voicemail','Voicemail'],['reply','Replied'],['interested','Interested'],['not_interested','Not interested'],['meeting','Meeting booked'],['proposal','Proposal sent'],['negotiating','Negotiating'],['won','Won'],['lost','Lost'],['follow_up_later','Follow up later']];
const LE_OUTCOME_STAGE = {reply:'replied', interested:'replied', meeting:'meeting', proposal:'proposal', negotiating:'negotiating', won:'won', lost:'lost', not_interested:'lost', follow_up_later:'later'};
const LE_LOSS_REASONS = ['Price','Timing','Already has a provider','Not a priority','No budget','Never replied','Wrong person','Other'];
function openLeOutcome(leadId, followupId){
  const l = leLead(leadId);
  openModal(`<div class="modal-head"><h2>Log outcome — ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row"><div class="form-group"><label>Channel</label><select id="le-o-ch">${[['call','Call'],['email','Email'],['whatsapp','WhatsApp'],['dm','DM'],['meeting','Meeting'],['proposal','Proposal']].map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div>
      <div class="form-group"><label>Outcome</label><select id="le-o-out" onchange="document.getElementById('le-o-why').style.display=/lost|not_interested/.test(this.value)?'':'none';document.getElementById('le-o-val').style.display=this.value==='won'?'':'none';">${LE_OUTCOMES.map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div></div>
      <div class="form-group" id="le-o-why" style="display:none;"><label>Why? (feeds the quality model)</label><select id="le-o-reason">${LE_LOSS_REASONS.map(r=>`<option>${r}</option>`).join('')}</select></div>
      <div class="form-group" id="le-o-val" style="display:none;"><label>Value won (£)</label><input id="le-o-value" type="number" min="0"></div>
      <div class="form-group"><label>Note</label><textarea id="le-o-note"></textarea></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="leSaveOutcome('${l.id}','${followupId||''}')">Save</button></div>`);
}
async function leSaveOutcome(leadId, followupId){
  const l = leLead(leadId);
  const v = id=>document.getElementById(id).value;
  const outcome = v('le-o-out');
  try{
    await LeStore.addTouch({lead_id:l.id, channel:v('le-o-ch'), outcome, note:v('le-o-note').trim(), reason:/lost|not_interested/.test(outcome)?v('le-o-reason'):null, value:outcome==='won'?Number(v('le-o-value'))||null:null, offer:leScore(l).offer});
    const stage = LE_OUTCOME_STAGE[outcome];
    const patch = {lastContactedAt:new Date().toISOString()};
    if(['reply','interested','meeting','proposal','negotiating','won'].includes(outcome)) patch.replied = true;
    if(stage) patch.stage = stage;
    const acq = stage ? (LE_CORE.PIPELINE_STAGES.find(s=>s.id===stage)||{}).acq : null;
    const p = leLinkProspect(l, acq);
    if(p){ patch.prospectId = p.id; if(outcome==='won' && Number(v('le-o-value'))>0){ p.value = Number(v('le-o-value')); save(); } }
    await LeStore.updateLead(l.id, patch);
    if(followupId) await LeStore.completeFollowup(followupId);
    closeModal(); renderPage(); renderNav(); toast(outcome==='won' ? l.name+' won 🎉' : 'Logged');
    if(['no_answer','voicemail','reply','interested','follow_up_later'].includes(outcome)) openLeFollowup(l.id, true);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}

/* ---------- selection ---------- */
async function leSelectNow(){
  if(leTodayRows().length){ toast('Today\'s selection is already set'); return; }
  const recent = new Set(LE.daily.filter(d=>d.day>=localDateStr(new Date(Date.now()-3*86400000)) && !d.actioned_at).map(d=>d.lead_id));
  const eligible = LE.leads.filter(l=>!LE_CORE.POST_CONTACT.includes(leStage(l)));
  const sel = LE_CORE.selectDaily(eligible, LE.settings, Object.assign(leCtx(), {recentlySurfaced:recent}));
  if(!sel.selected.length){ toast('Nothing passes the quality gate yet — see Near misses / Funnel','ℹ️'); renderPage(); return; }
  try{
    await LeStore.setDaily(sel.selected.map(x=>({day:leToday(), lead_id:x.lead.id, rank:x.rank, lead_score:x.r.leadScore, confidence:x.r.confidence, reason:x.reason, deal_low:x.r.deal.low, deal_high:x.r.deal.high, actions:{}})));
    renderPage(); toast(sel.selected.length+' lead'+(sel.selected.length===1?'':'s')+' selected for today');
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
async function leRunPipeline(){
  if(LE.busy) return; LE.busy = true; toast('Running research — this can take a couple of minutes…','⏳');
  const res = await LeStore.invoke('run');
  LE.busy = false;
  if(!res.ok){ toast(res.error||'Run failed','⚠️'); return; }
  await leReload();
  toast(res.run && res.run.phase==='done' ? 'Run finished' : 'Run in progress ('+(res.run?res.run.phase:'…')+') — more work continues in the background');
}

/* ===================== LEAD BRIEF (one page, < 60 seconds) ===================== */
function openLeBrief(leadId){
  const l = leLead(leadId); if(!l) return;
  const r = leScore(l);
  const sender = {name:(DB.settings&&DB.settings.ownerName)||'Lewis', company:'SteadyFlow'};
  const o = LE_CORE.outreach(l, r, LE.settings, sender);
  const ai = LE.briefs[l.id] ? LE.briefs[l.id].brief : null;
  const dm = r.contact.decisionMaker;
  const audit = LE_CORE.microAudit(l, r);
  const facts = Object.entries(l.facts||{}).filter(([k,f])=>f && k!=='website.contentHash').sort((a,b)=>a[0].localeCompare(b[0]));
  const touches = LE.touches.filter(t=>t.lead_id===l.id);
  const sec = (t, body)=>`<div class="le-sec"><div class="le-sec-title">${t}</div>${body}</div>`;
  const copyBtn = (id)=>`<button class="btn btn-ghost btn-sm" onclick="leCopy('${id}')">Copy</button>`;
  const contactLine = (label, value, status)=>value?`<div class="le-kv"><span>${label}</span><span>${esc(value)} ${leStatusChip(status)}</span></div>`:`<div class="le-kv"><span>${label}</span><span>${leStatusChip('UNKNOWN')}</span></div>`;
  const emailStatus = l.email ? (LE_CORE.emailIsGeneric(l.email)?'LIKELY':'VERIFIED') : 'UNKNOWN';
  const linkedIn = dm && dm.linkedin;
  const nextAction = !o.ok ? 'Run research — no verified observation to open with yet.' : leStage(l)==='ready' ? (o.bestApproach.split(' → ')[0]+' '+(dm?firstNameSafe(dm.name):'the business')+' using the opener below.') : 'Follow up as scheduled.';
  openModal(`<div class="modal-head"><h2>${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
  <div class="modal-body le-brief">
    <div class="le-brief-top">
      <div class="le-scorebox"><div class="le-score" style="color:${leBandColor(r.band)}">${leBandIcon(r.band)} ${r.leadScore}</div><div class="le-score-sub">${r.band} · lead score</div></div>
      <div class="le-scorebox"><div class="le-score">${r.confidence}%</div><div class="le-score-sub">confidence</div></div>
      <div class="le-scorebox"><div class="le-score">${r.website.score==null?'—':r.website.score}</div><div class="le-score-sub">website score${r.website.score==null?' (unknown)':''}</div></div>
      <div class="le-scorebox"><div class="le-score">${r.o360.score}</div><div class="le-score-sub">360 opportunity</div></div>
      <div class="le-scorebox"><div class="le-score">${r.gap}</div><div class="le-score-sub">commercial gap</div></div>
    </div>
    <div class="small muted">Score = gap ${r.breakdown.gap} + buying ${r.breakdown.buying} + contactability ${r.breakdown.contact} + fit ${r.breakdown.fit} ${r.breakdown.penalties?r.breakdown.penalties+' penalties':''} · Research ${l.researchedAt?leAgo(l.researchedAt):'not run'}${r.confidenceDetail.criticalMissing.length?' · Missing: '+r.confidenceDetail.criticalMissing.join(', '):''}</div>
    ${!r.gate.pass?`<div class="le-gate-fail"><strong>Not eligible for Today's ${LE.settings.dailyQuantity}:</strong> ${r.gate.failures.map(f=>esc(f.reason)).join(' · ')}</div>`:''}
    ${typeof swCrossBlock==='function'?swCrossBlock(l):''}
    ${ai?`<div class="le-ai-note">✨ AI brief available (${esc(LE.briefs[l.id].model||'')}) — every line below the scores is still built from the evidence table.</div>`:''}
    <div class="le-brief-grid">
      <div>
        ${sec('Company', `<div class="le-kv"><span>Industry</span><span>${esc(LE_CORE.industry(l.industry).label)}</span></div><div class="le-kv"><span>Area</span><span>${esc(l.area||r.fit.area)} ${esc(l.postcode||'')}</span></div>
          <div class="le-kv"><span>Website</span><span>${l.website?`<a class="le-link" target="_blank" rel="noopener" href="${esc(/^https?:/.test(l.website)?l.website:'https://'+l.website)}">${esc(LE_CORE.normaliseDomain(l.website))}</a>`:'—'}</span></div>
          <div class="le-kv"><span>Company no.</span><span>${l.companyNumber?esc(l.companyNumber):'—'} <span class="small muted">${esc(l.subscriberType)} subscriber</span></span></div>
          <div class="le-kv"><span>Discovered</span><span>${fmtDate(l.discoveredAt)} · checked ${leAgo(l.lastCheckedAt)}</span></div>`)}
        ${sec('What they do', ai&&ai.what_they_do?esc(ai.what_they_do.text):`${esc(LE_CORE.industry(l.industry).label.replace(/s$/,''))} in ${esc(l.area||r.fit.area)}.`)}
        ${sec('Why they are attractive', `<ul class="le-why">${(ai&&ai.why_attractive&&ai.why_attractive.length?ai.why_attractive.map(x=>x.text):r.whyNow).map(w=>`<li>${esc(w)}</li>`).join('')||'<li class="muted">Not enough evidence yet</li>'}</ul>`)}
        ${sec('What we found', r.findings.length?r.findings.map(f=>`<div class="le-finding"><div><strong>${esc(f.title)}</strong> ${f.verified?leStatusChip('VERIFIED'):f.inferred?leStatusChip('INFERRED'):leStatusChip('LIKELY')} <span class="small muted">${Math.round(f.confidence*100)}%</span></div>
          <div class="small">${esc(f.evidence)}</div><div class="small muted">→ ${esc(f.solution)} · ${f.sources.map(s=>/^https?:/.test(s)?`<a class="le-link" target="_blank" rel="noopener" href="${esc(s)}">source</a>`:esc(s)).join(', ')||'no source'} · ${f.checkedAt?fmtDate(f.checkedAt):''}</div></div>`).join(''):'<div class="muted small">No problems detected from the evidence so far.</div>')}
        ${sec('The opportunity', `<div class="le-kv"><span>Best service</span><span><strong>${esc(r.offer||'—')}</strong></span></div>${r.secondaryService?`<div class="le-kv"><span>Secondary</span><span>${esc(r.secondaryOffer)}</span></div>`:''}
          <div class="le-kv"><span>Estimated value</span><span>${esc(r.deal.label)} ${r.deal.assumption?'<span class="small muted">placeholder prices</span>':'<span class="small muted">your price list</span>'}</span></div>
          ${r.o360.packages.length?`<div class="le-kv"><span>360 packages</span><span>${r.o360.packages.map(esc).join(' · ')}</span></div>`:''}
          <div class="small muted mt-10">360: ${r.o360.reasons.map(esc).join(' · ')||'—'}</div>`)}
      </div>
      <div>
        ${sec('Decision maker & contact', `${dm?`<div class="le-kv"><span>Name</span><span><strong>${esc(dm.name)}</strong> ${esc(dm.role||'')} ${leStatusChip(dm.status)}</span></div><div class="small muted">Source: ${esc(dm.source||'—')}</div>`:'<div class="muted small">No decision maker identified — never guessed.</div>'}
          ${contactLine('Phone', l.phone, l.phone?'VERIFIED':'UNKNOWN')}${contactLine('Email', l.email, emailStatus)}${contactLine('Personal email', dm&&dm.email, dm&&dm.emailStatus)}
          ${linkedIn?`<div class="le-kv"><span>LinkedIn</span><span><a class="le-link" target="_blank" rel="noopener" href="${esc(linkedIn)}">profile</a></span></div>`:`<div class="le-kv"><span>LinkedIn</span><span><a class="le-link" onclick="openLeLeadModal('${l.id}')">add manually</a></span></div>`}`)}
        ${sec('Best channel & time', `<div>${esc(o.ok?o.bestApproach:'—')}</div><div class="small muted">${esc(r.channels.note)}</div>${l.phone&&!r.channels.tpsChecked?`<div class="small" style="color:var(--warning);">Check TPS/CTPS before calling · <a class="le-link" onclick="leTpsChecked('${l.id}')">mark checked</a></div>`:''}<div class="small mt-10">${esc(o.bestTime||'')}</div>`)}
        ${o.ok?sec('Personalised opener '+copyBtn('le-op'), `<div id="le-op" class="le-copy">${esc(ai&&ai.opener?ai.opener.text:o.opener)}</div>`):''}
        ${o.ok&&r.channels.email?sec('Email '+copyBtn('le-em'), `<div id="le-em" class="le-copy"><strong>${esc(ai?ai.email_subject:o.email.subject)}</strong>\n\n${esc(ai?ai.email_body:o.email.body)}</div>`):''}
        ${o.ok?sec('Call opener '+copyBtn('le-call'), `<div id="le-call" class="le-copy">${esc(ai&&ai.call_opener||o.call)}</div>`):''}
        ${o.ok?sec((r.channels.whatsapp?'WhatsApp / DM ':'DM ')+copyBtn('le-dm'), `<div id="le-dm" class="le-copy">${esc(r.channels.whatsapp?(ai&&ai.whatsapp||o.whatsapp):(ai&&ai.dm||o.dm))}</div>`):''}
        ${o.ok?sec('Likely objection', `<div><em>“${esc(ai&&ai.likely_objection||o.objection)}”</em></div><div class="small mt-10">${esc(ai&&ai.objection_response||o.objectionResponse)}</div>`):''}
        ${sec('Next action', `<strong>${esc(ai&&ai.next_action||nextAction)}</strong>`)}
      </div>
    </div>
    ${sec('Micro audit (prospect-facing) <button class="btn btn-ghost btn-sm" onclick="lePrintAudit(\''+l.id+'\')">🖨️ Print / PDF</button>', audit.items.length?`<div class="le-audit">${audit.items.map(i=>`<div class="le-audit-item"><div class="le-audit-n">${i.n}</div><div><strong>${esc(i.title)}</strong><div class="small">${esc(i.observed)}</div><div class="small muted">${esc(i.why)}</div></div></div>`).join('')}</div><div class="small muted">${esc(audit.note)}</div>`:'<div class="muted small">Needs verified findings first.</div>')}
    ${sec('Evidence ('+facts.length+' facts)', `<table class="le-evidence"><thead><tr><th>Fact</th><th>Value</th><th>Status</th><th>Conf.</th><th>Source</th><th>Checked</th></tr></thead><tbody>
      ${facts.map(([k,f])=>`<tr><td>${esc(LE_CORE.FACT_LABELS[k]||k)}</td><td>${esc(leFactText(f))}${f.note?`<div class="small muted">${esc(f.note)}</div>`:''}</td><td>${leStatusChip(f.status)}</td><td>${Math.round((f.confidence==null?0.8:f.confidence)*100)}%</td><td class="small">${/^https?:/.test(f.source||'')?`<a class="le-link" target="_blank" rel="noopener" href="${esc(f.source)}">${esc(LE_CORE.normaliseDomain(f.source))}</a>`:esc(f.source||'—')}</td><td class="small">${f.checkedAt?fmtDate(f.checkedAt):'—'}</td></tr>`).join('') || '<tr><td colspan="6" class="muted">No facts yet</td></tr>'}
    </tbody></table><div class="small muted">Google rating/reviews are shown live, never stored. <a class="le-link" onclick="leLivePlace('${l.id}')">Show live Google rating</a> <span id="le-live-place"></span></div>`)}
    ${sec('Contact history', touches.length?touches.map(t=>`<div class="le-touch"><span>${fmtDate(t.at)}</span><span>${esc(t.channel)}${t.outcome?' · '+esc(t.outcome.replace(/_/g,' ')):''}</span><span class="muted">${esc(t.note||t.reason||'')}</span></div>`).join(''):'<div class="muted small">No contact yet.</div>')}
  </div>
  <div class="modal-foot">
    <button class="btn btn-danger" onclick="leDoNotContact('${l.id}')">Do not contact</button>
    <button class="btn btn-ghost" onclick="openLeLeadModal('${l.id}')">Edit / add evidence</button>
    ${window.WorksCore && !(l.scope||['sf']).includes('sw') ? `<button class="btn btn-ghost" title="Score this organisation for SteadyWorks maintenance work too" onclick="leAddScope('${l.id}','sw')">+ SteadyWorks</button>` : ''}
    ${LE.mode==='live'?`<button class="btn btn-ghost" onclick="leResearchOne('${l.id}')">🔎 Research again</button><button class="btn btn-ghost" onclick="leBriefOne('${l.id}')">✨ AI brief</button>`:''}
    <button class="btn btn-ghost" onclick="openLeOutcome('${l.id}')">Log outcome</button>
    <button class="btn btn-gold" onclick="closeModal()">Done</button>
  </div>`, true);
}
// Shared intelligence: let one organisation be assessed by the other business too.
async function leAddScope(id, biz){
  const l = leLead(id); if(!l) return;
  const scope = Array.from(new Set((l.scope||['sf']).concat([biz])));
  const patch = {scope};
  if(biz==='sw' && !l.swType && window.WorksCore) patch.swType = WorksCore.typeFromIndustry(l.industry);
  try{
    await LeStore.updateLead(id, patch);
    if(biz==='sf' && !LE.leads.some(x=>x.id===id)) LE.leads.unshift(l);
    if(biz==='sw') await LeStore.upsertOpp(id, {org_type:patch.swType||l.swType});
    leInvalidate(); closeModal(); renderPage();
    toast(biz==='sw'?'Added to SteadyWorks — see Commercial Desk':'Added to SteadyFlow Lead Engine');
  }catch(e){ toast(e.message,'⚠️'); }
}
function firstNameSafe(n){ return String(n||'').split(/\s+/)[0]||''; }
function leCopy(id){ const el = document.getElementById(id); if(!el) return; navigator.clipboard.writeText(el.innerText).then(()=>toast('Copied'), ()=>toast('Copy failed','⚠️')); }
async function leTpsChecked(id){ await LeStore.updateLead(id, {tpsChecked:true}); openLeBrief(id); toast('Marked TPS/CTPS checked'); }
function leDoNotContact(id){
  const l = leLead(id);
  confirmDelete('Add '+l.name+' to do-not-contact?', 'They will never be selected again. The block is kept even if the lead is re-discovered later.', async ()=>{
    try{ await LeStore.suppress(l, 'Marked do-not-contact'); closeModal(); renderPage(); toast('Added to do-not-contact','🚫'); }catch(e){ toast(e.message,'⚠️'); }
  });
}
async function leResearchOne(id){
  toast('Researching — up to a minute…','⏳');
  const res = await LeStore.invoke('research', {leadId:id});
  if(!res.ok){ toast(res.error||'Research failed','⚠️'); return; }
  await leReload(true); openLeBrief(id); toast('Research updated');
}
async function leBriefOne(id){
  toast('Writing AI brief…','✨');
  const res = await LeStore.invoke('brief', {leadId:id});
  if(!res.ok){ toast(res.error||'Brief unavailable','⚠️'); return; }
  await leReload(true); openLeBrief(id); toast(res.cached?'Brief unchanged (evidence unchanged — no charge)':'AI brief ready');
}
async function leLivePlace(id){
  const el = document.getElementById('le-live-place'); if(el) el.textContent = ' loading…';
  const res = await LeStore.invoke('live-place', {leadId:id});
  if(el) el.innerHTML = res.ok ? ` <strong>${res.rating??'—'}★</strong> from ${res.reviews??'—'} reviews · <a class="le-link" target="_blank" rel="noopener" href="${esc(res.mapsUri||'#')}">Google Maps</a>` : ' '+esc(res.error||'unavailable');
}
function lePrintAudit(id){
  const l = leLead(id), r = leScore(l), a = LE_CORE.microAudit(l, r);
  const w = window.open('', '_blank'); if(!w){ toast('Allow pop-ups to print','⚠️'); return; }
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(l.name)} — 3 opportunities</title><style>
    body{font-family:-apple-system,'Segoe UI',Roboto,sans-serif;color:#0a0e1a;max-width:720px;margin:40px auto;padding:0 24px;line-height:1.5;}
    .eb{letter-spacing:2px;font-size:11px;color:#007A80;font-weight:700;} h1{font-size:26px;margin:6px 0 4px;} .sub{color:#555;margin-bottom:28px;}
    .it{display:flex;gap:18px;padding:18px 0;border-top:1px solid #e3e5ea;} .n{font-size:28px;font-weight:800;color:#00B3A1;min-width:44px;}
    h3{margin:0 0 4px;font-size:17px;} .ob{margin:0 0 6px;} .why{color:#555;margin:0 0 6px;font-size:14px;} .rec{font-size:14px;} .foot{margin-top:28px;font-size:12px;color:#777;border-top:1px solid #e3e5ea;padding-top:12px;}
  </style></head><body><div class="eb">STEADYFLOW</div><h1>${a.items.length} opportunit${a.items.length===1?'y':'ies'} we spotted</h1><div class="sub">${esc(l.name)}${l.website?' · '+esc(LE_CORE.normaliseDomain(l.website)):''}</div>
  ${a.items.map(i=>`<div class="it"><div class="n">${i.n}</div><div><h3>${esc(i.title)}</h3><p class="ob">${esc(i.observed)}</p><p class="why">${esc(i.why)}</p><div class="rec"><strong>What we'd do:</strong> ${esc(i.recommendation)}</div></div></div>`).join('')}
  <div class="foot">${esc(a.note)} Prepared by SteadyFlow.</div><script>setTimeout(()=>print(),300)<\/script></body></html>`);
  w.document.close();
}

/* ---------- add / edit a lead + manual evidence ---------- */
const LE_MANUAL_FACTS = [
  ['website.listingsCount','Listings on their own site','number'], ['website.tourCoverage','Listings with a 360 tour (0–100%)','pct'],
  ['website.mobileViewport','Works properly on mobile','bool'], ['website.hasWhatsapp','Has WhatsApp','bool'], ['website.hasBooking','Has online booking','bool'],
  ['website.hasContactForm','Has an enquiry form','bool'], ['website.hasPropertySearch','Has property search','bool'], ['google.reviewCount','Google reviews (you checked)','number'],
  ['google.rating','Google rating (you checked)','number'], ['company.branches','Branches','number'], ['website.teamSize','Team size','number'],
  ['signals.hiring','Hiring','bool'], ['signals.recentRebrand','Recently rebranded','bool'], ['signals.newDevelopment','New development / launch','bool'], ['signals.activeAds','Running ads','bool'], ['social.instagramActive','Instagram active (posted this month)','bool']
];
function openLeLeadModal(id){
  const l = id ? leLead(id) : null;
  const f = k=>l && l.facts && l.facts[k] ? l.facts[k].value : '';
  const dm = l && (l.contacts||[])[0] || {};
  openModal(`<div class="modal-head"><h2>${l?'Edit '+esc(l.name):'Add a lead'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="form-row"><div class="form-group"><label>Business name *</label><input type="text" id="le-f-name" value="${l?esc(l.name):''}"></div>
      <div class="form-group"><label>Industry</label><select id="le-f-ind">${LE_CORE.INDUSTRIES.map(i=>`<option value="${i.id}" ${(l?l.industry:'estate-agent')===i.id?'selected':''}>${esc(i.label)}</option>`).join('')}</select></div></div>
    <div class="form-row"><div class="form-group"><label>Website</label><input type="text" id="le-f-web" value="${l?esc(l.website||''):''}" placeholder="example.co.uk"></div>
      <div class="form-group"><label>Postcode</label><input type="text" id="le-f-pc" value="${l?esc(l.postcode||''):''}" placeholder="IG1 1AA"></div></div>
    <div class="form-row"><div class="form-group"><label>Phone (as published)</label><input type="text" id="le-f-ph" value="${l?esc(l.phone||''):''}"></div>
      <div class="form-group"><label>Email (only if they publish it)</label><input type="text" id="le-f-em" value="${l?esc(l.email||''):''}"></div></div>
    <div class="form-row"><div class="form-group"><label>Companies House number</label><input type="text" id="le-f-ch" value="${l?esc(l.companyNumber||''):''}"></div>
      <div class="form-group"><label>Subscriber type (PECR)</label><select id="le-f-sub">${[['corporate','Company (Ltd/LLP/PLC)'],['individual','Sole trader / partnership'],['unknown','Unknown']].map(([v,t])=>`<option value="${v}" ${(l?l.subscriberType:'unknown')===v?'selected':''}>${t}</option>`).join('')}</select></div></div>
    <div class="form-row"><div class="form-group"><label>Decision maker</label><input type="text" id="le-f-dm" value="${esc(dm.name||'')}" placeholder="Only a real, sourced name"></div>
      <div class="form-group"><label>Role</label><input type="text" id="le-f-role" value="${esc(dm.role||'')}"></div></div>
    <div class="form-row"><div class="form-group"><label>Where you found the name</label><input type="text" id="le-f-src" value="${esc(dm.source||'')}" placeholder="e.g. Companies House, their team page"></div>
      <div class="form-group"><label>LinkedIn URL (manual)</label><input type="text" id="le-f-li" value="${esc(dm.linkedin||'')}"></div></div>
    <div class="le-sec-title mt-10">Evidence you checked yourself <span class="small muted">— saved as VERIFIED, source "manual", dated today. Leave blank if you don't know.</span></div>
    <div class="le-manual-grid">${LE_MANUAL_FACTS.map(([k,label,type])=>{ const v = f(k);
      if(type==='bool') return `<div class="form-group"><label>${label}</label><select id="le-mf-${k.replace(/\./g,'_')}"><option value="">Unknown</option><option value="1" ${v===true?'selected':''}>Yes</option><option value="0" ${v===false?'selected':''}>No</option></select></div>`;
      return `<div class="form-group"><label>${label}</label><input type="number" min="0" step="any" id="le-mf-${k.replace(/\./g,'_')}" value="${v===''||v==null?'':type==='pct'?Math.round(v*100):v}"></div>`; }).join('')}</div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="leSaveLead('${l?l.id:''}')">${l?'Save':'Add lead'}</button></div>`, true);
}
async function leSaveLead(id){
  if(!requireField('le-f-name','Business name is required')) return;
  const v = x=>document.getElementById(x).value.trim();
  const l = id ? leLead(id) : null;
  const facts = Object.assign({}, l ? l.facts : {});
  const now = new Date().toISOString();
  LE_MANUAL_FACTS.forEach(([k,,type])=>{
    const raw = v('le-mf-'+k.replace(/\./g,'_'));
    if(raw===''){ if(facts[k] && facts[k].source==='manual') delete facts[k]; return; }
    const val = type==='bool' ? raw==='1' : type==='pct' ? Math.max(0,Math.min(100,Number(raw)))/100 : Number(raw);
    const prev = facts[k];
    if(prev && prev.source!=='manual' && JSON.stringify(prev.value)===JSON.stringify(val)) return; // unchanged automated fact — keep its source
    facts[k] = LE_CORE.makeFact(val, 'VERIFIED', 0.9, 'manual', now, 'Checked by '+(CURRENT_USER_EMAIL||'you'));
  });
  if(facts['website.tourCoverage'] && !facts['website.listingsSampled']) facts['website.listingsSampled'] = LE_CORE.makeFact(Math.max(1, Number(v('le-mf-website_listingsCount'))||5), 'VERIFIED', 0.8, 'manual', now, 'Listings you looked at');
  const contacts = (l ? (l.contacts||[]).slice(1) : []);
  if(v('le-f-dm')) contacts.unshift({name:v('le-f-dm'), role:v('le-f-role'), status: v('le-f-src') ? 'VERIFIED' : 'LIKELY', confidence: v('le-f-src')?0.9:0.6, source:v('le-f-src')||'manual', linkedin:v('le-f-li')||'', checkedAt:now});
  const patch = {name:v('le-f-name'), industry:v('le-f-ind'), website:v('le-f-web'), postcode:v('le-f-pc').toUpperCase(), phone:v('le-f-ph'), email:v('le-f-em'), companyNumber:v('le-f-ch'), subscriberType:v('le-f-sub'), facts, contacts};
  if(patch.website && !facts['website.reachable']) facts['website.reachable'] = LE_CORE.makeFact(true, 'LIKELY', 0.7, 'manual', now);
  if(patch.website && !/^https?:\/\//i.test(patch.website)) patch.website = 'https://'+patch.website;
  // geocode via postcodes.io (open data) for the map — never Google
  if(patch.postcode && (!l || l.postcode!==patch.postcode)){
    try{ const res = await fetch('https://api.postcodes.io/postcodes/'+encodeURIComponent(patch.postcode)); const j = await res.json(); if(j && j.result){ patch.lat = j.result.latitude; patch.lng = j.result.longitude; patch.area = j.result.admin_district; } }catch(e){}
  }
  try{
    if(l){ await LeStore.updateLead(l.id, patch); }
    else { const created = await LeStore.insertLead(Object.assign({stage:'discovered', sources:['manual'], discoveredAt:now, researchedAt: Object.keys(facts).length>=6 ? now : null, mock: LE.mode==='sandbox'}, patch)); id = created.id; }
    closeModal(); leInvalidate(); renderPage(); toast(l?'Lead updated':'Lead added');
    if(!l && LE.mode==='live' && patch.website) leResearchOne(id);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}

/* ===================== LEADS (discovery search + dashboard cards) ===================== */
function leDashCounts(){
  const t = leToday();
  const stages = LE.leads.map(l=>leStage(l));
  const cnt = s=>stages.filter(x=>x===s).length;
  return {hot: LE.leads.filter(l=>leScore(l).band==='HOT' && !LE_CORE.POST_CONTACT.includes(leStage(l)) && !LE_CORE.activeDisqualifications(l, leScore(l)).length).length,
    fresh: LE.leads.filter(l=>Date.now()-new Date(l.discoveredAt).getTime()<7*86400000).length,
    contacted: stages.filter(s=>['contacted','replied'].includes(s)).length, followToday: leFollowupsDue().length,
    meetings: cnt('meeting'), proposals: cnt('proposal')+cnt('negotiating'), won: cnt('won'), lost: cnt('lost')};
}
function leLeadsView(){
  const c = leDashCounts();
  const card = (label, val, icon, onclick)=>`<div class="card le-kpi" ${onclick?`onclick="${onclick}" style="cursor:pointer;"`:''}><div class="le-kpi-icon">${icon}</div><div class="le-kpi-label">${label}</div><div class="le-kpi-val">${val}</div></div>`;
  const F = LE.filters;
  const opt = (list, cur)=>list.map(([v,t])=>`<option value="${v}" ${String(cur)===String(v)?'selected':''}>${esc(t)}</option>`).join('');
  return `<div class="le-kpis">
      ${card('Hot leads', c.hot, '🔥', "LE.filters.minScore=80;renderPage()")}${card('New (7 days)', c.fresh, '🆕')}${card('Contacted', c.contacted, '📨', "LE.filters.stage='contacted';renderPage()")}${card('Follow-ups today', c.followToday, '⏰', "setLeTab('today')")}
      ${card('Meetings', c.meetings, '🤝', "LE.filters.stage='meeting';renderPage()")}${card('Proposals', c.proposals, '📝', "LE.filters.stage='proposal';renderPage()")}${card('Won', c.won, '🏆', "LE.filters.stage='won';renderPage()")}${card('Lost', c.lost, '✖', "LE.filters.stage='lost';renderPage()")}
    </div>
    <div class="card le-search">
      <div class="le-search-grid">
        <div class="form-group"><label>Industry</label><select onchange="LE.filters.industry=this.value;renderPage()"><option value="">All</option>${opt(LE_CORE.INDUSTRIES.map(i=>[i.id,i.label]), F.industry)}</select></div>
        <div class="form-group"><label>Location / postcode</label><input type="text" value="${esc(F.centre)}" placeholder="e.g. Ilford or IG1" onchange="leSetCentre(this.value)"></div>
        <div class="form-group"><label>Radius</label><select onchange="LE.filters.radius=Number(this.value);renderPage()">${opt([[0,'Any'],[2,'2 miles'],[5,'5 miles'],[10,'10 miles'],[20,'20 miles']], F.radius)}</select></div>
        <div class="form-group"><label>Min business quality</label><select onchange="LE.filters.minStrength=Number(this.value);renderPage()">${opt([[0,'Any'],[40,'40+'],[55,'55+'],[70,'70+']], F.minStrength)}</select></div>
        <div class="form-group"><label>Service opportunity</label><select onchange="LE.filters.service=this.value;renderPage()"><option value="">Any</option>${opt(LE_CORE.SERVICES.map(s=>[s.id,s.label]), F.service)}</select></div>
        <div class="form-group"><label>Min lead score</label><select onchange="LE.filters.minScore=Number(this.value);renderPage()">${opt([[0,'Any'],[50,'50+ warm'],[65,'65+ strong'],[80,'80+ hot']], F.minScore)}</select></div>
        <div class="form-group"><label>Stage</label><select onchange="LE.filters.stage=this.value;renderPage()"><option value="">Any</option><option value="rejected" ${F.stage==='rejected'?'selected':''}>Rejected</option>${opt(LE_CORE.PIPELINE_STAGES.map(s=>[s.id,s.label]), F.stage)}</select></div>
        <div class="form-group"><label>Search</label><input type="text" value="${esc(F.q)}" placeholder="name or website" oninput="LE.filters.q=this.value;clearTimeout(window._leQ);window._leQ=setTimeout(renderPage,250)"></div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
        <span class="small muted" id="le-count"></span><span class="spacer"></span>
        <button class="btn btn-ghost btn-sm" onclick="LE.filters={industry:'',area:'',minScore:0,minStrength:0,service:'',stage:'',q:'',centre:'',radius:0,centreLL:null};renderPage()">Clear</button>
        ${LE.mode==='live'?`<button class="btn btn-ghost btn-sm" onclick="leRunPipeline()">▶ Discover & research</button>`:''}
        <button class="btn btn-gold btn-sm" onclick="openLeLeadModal()">+ Add lead</button>
      </div>
      <p class="small muted" style="margin-top:6px;">Discovery runs server-side from Companies House and OpenStreetMap (legitimate sources, no scraping of portals). Industries and areas are set in Settings.</p>
    </div>
    <div class="le-card-grid">${leFilteredLeads().slice(0,120).map(leSmallCard).join('') || '<div class="card muted">No leads match these filters.</div>'}</div>`;
}
async function leSetCentre(v){
  LE.filters.centre = v; LE.filters.centreLL = null;
  if(v.trim()){
    try{
      const pc = /\d/.test(v) ? 'postcodes/'+encodeURIComponent(v.trim()) : 'places?q='+encodeURIComponent(v.trim())+'&limit=1';
      const j = await (await fetch('https://api.postcodes.io/'+(/\d/.test(v) && v.trim().length<=4 ? 'outcodes/'+encodeURIComponent(v.trim()) : pc))).json();
      const r = Array.isArray(j.result) ? j.result[0] : j.result;
      if(r) LE.filters.centreLL = [r.latitude, r.longitude];
      else toast('Couldn\'t find that place','⚠️');
    }catch(e){ toast('Location lookup failed','⚠️'); }
  }
  renderPage();
}
function leMiles(a, b){ const R = 3958.8, rad = x=>x*Math.PI/180; const dLat = rad(b[0]-a[0]), dLng = rad(b[1]-a[1]); const h = Math.sin(dLat/2)**2 + Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dLng/2)**2; return 2*R*Math.asin(Math.sqrt(h)); }
function leFilteredLeads(){
  const F = LE.filters, q = F.q.trim().toLowerCase();
  const out = LE.leads.filter(l=>{
    const r = leScore(l), st = leStage(l);
    if(F.industry && l.industry!==F.industry) return false;
    if(F.stage && st!==F.stage) return false;
    if(!F.stage && st==='rejected') return false;
    if(F.minScore && r.leadScore<F.minScore) return false;
    if(F.minStrength && (r.strength.score==null || r.strength.score<F.minStrength)) return false;
    if(F.service && !(r.need.byService[F.service] && r.need.byService[F.service].score>=50)) return false;
    if(q && !(String(l.name).toLowerCase().includes(q) || String(l.website||'').toLowerCase().includes(q))) return false;
    if(F.radius && F.centreLL){ if(l.lat==null) return false; if(leMiles(F.centreLL, [l.lat,l.lng]) > F.radius) return false; }
    else if(F.centre && !F.centreLL){ const c = F.centre.toLowerCase(); if(!(String(l.area||'').toLowerCase().includes(c) || String(l.postcode||'').toLowerCase().startsWith(c))) return false; }
    return true;
  }).sort((a,b)=>leScore(b).leadScore-leScore(a).leadScore);
  setTimeout(()=>{ const el = document.getElementById('le-count'); if(el) el.textContent = out.length+' lead'+(out.length===1?'':'s'); }, 0);
  return out;
}
function leSmallCard(l){
  const r = leScore(l), st = leStage(l);
  const lc = LE_CORE.val(l,'website.listingsCount');
  return `<div class="card le-small ${l.mock?'le-mock':''}" onclick="openLeBrief('${l.id}')">
    <div class="le-small-top"><span class="le-small-score" style="color:${leBandColor(r.band)}">${leBandIcon(r.band)} ${r.leadScore}</span><span class="le-small-band">${r.band}</span><span class="spacer"></span><span class="small muted">${r.confidence}% conf.</span></div>
    <div class="le-small-name">${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</div>
    <div class="small muted">${esc(LE_CORE.industry(l.industry).label)} · ${esc(l.area||r.fit.area)}</div>
    <div class="le-small-metrics"><span>Website ${r.website.score==null?'UNKNOWN':r.website.score+'/100'}</span><span>360 ${r.o360.score}/100</span></div>
    ${lc!=null?`<div class="small">${lc} listings${r.o360.absence===1?' · no 360 tours detected':''}</div>`:''}
    <div class="le-small-opp"><span class="le-label">Opportunity</span> ${r.primaryService && r.need.byService[r.primaryService].score>=LE.settings.thresholds.minNeed ? esc(r.offer) : '<span class="muted">No clear fit yet</span>'}</div>
    <div class="small">${esc(r.deal.label)}</div>
    <div class="le-small-foot"><span class="le-stage-pill">${esc((LE_CORE.PIPELINE_STAGES.find(s=>s.id===st)||{label:st==='rejected'?'Rejected':st}).label)}</span>
      ${(()=>{ const dq = LE_CORE.activeDisqualifications(l, r); return dq.length?`<span class="small" style="color:var(--danger);" title="${esc(dq.map(d=>d.reason).join(' · '))}">${esc(dq[0].reason)}</span>`:(!l.auditedAt&&!l.researchedAt?'<span class="small muted">not researched yet</span>':''); })()}</div>
    <div class="le-small-actions" onclick="event.stopPropagation()">
      <button class="btn btn-ghost btn-sm" onclick="openLeBrief('${l.id}')">View audit</button>
      <button class="btn btn-ghost btn-sm" onclick="openLeBrief('${l.id}');setTimeout(()=>{const e=document.getElementById('le-em')||document.getElementById('le-op');e&&e.scrollIntoView({block:'center'})},50)">Pitch</button>
      <button class="btn btn-ghost btn-sm" onclick="openLeOutcome('${l.id}')">Contact</button>
      <button class="btn btn-ghost btn-sm" onclick="openLeFollowup('${l.id}')">Follow-up</button>
    </div>
  </div>`;
}

/* ===================== PIPELINE (drag & drop) ===================== */
function lePipelineView(){
  const cols = LE_CORE.PIPELINE_STAGES.map(st=>{
    const items = LE.leads.filter(l=>leStage(l)===st.id).sort((a,b)=>leScore(b).leadScore-leScore(a).leadScore);
    const val = items.reduce((s,l)=>s+(leScore(l).deal.high||0),0);
    return `<div class="kanban-col ${st.id==='lost'?'lost-col':''}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="leDrop(event,'${st.id}')">
      <div class="kanban-col-head"><span>${st.label} (${items.length})</span><span>${val?leMoney(val):''}</span></div>
      ${items.slice(0,60).map(l=>{ const r = leScore(l); return `<div class="kanban-card le-kcard" draggable="true" ondragstart="window._leDrag='${l.id}';this.classList.add('dragging')" onclick="openLeBrief('${l.id}')">
        <div class="kc-name">${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</div>
        <div class="kc-meta">${esc(LE_CORE.industry(l.industry).label)} · ${esc(l.area||'')}</div>
        <div class="kc-row"><span style="color:${leBandColor(r.band)};font-weight:800;">${leBandIcon(r.band)} ${r.leadScore}</span><span class="small muted">${esc(r.offer||'')}</span></div>
      </div>`; }).join('') || '<div class="muted small" style="padding:8px 4px;">—</div>'}
      ${items.length>60?`<div class="small muted">+${items.length-60} more</div>`:''}
    </div>`;
  }).join('');
  return `<div class="kanban le-kanban">${cols}</div><p class="small muted mt-10">Drag to update. From "Contacted" onwards, cards stay in step with the SteadyFlow → Acquisition pipeline (one CRM, not two).</p>`;
}
async function leDrop(ev, stageId){
  ev.currentTarget.classList.remove('drag-over');
  const l = leLead(window._leDrag); window._leDrag = null; if(!l) return;
  const st = LE_CORE.PIPELINE_STAGES.find(s=>s.id===stageId);
  try{
    if(st.acq){ const p = leLinkProspect(l, st.acq); await LeStore.updateLead(l.id, {stage:stageId, prospectId:p?p.id:l.prospectId}); }
    else { const p = leProspectFor(l); if(p){ acqSetStatus(p,'Not Contacted'); save(); } await LeStore.updateLead(l.id, {stage:stageId}); }
    if(stageId==='won' || stageId==='lost') await LeStore.addTouch({lead_id:l.id, channel:'note', outcome:stageId, offer:leScore(l).offer});
    renderPage(); renderNav(); toast('Moved to '+st.label);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}

/* ===================== FUNNEL ===================== */
function leFunnelView(){
  const run = LE.runs[0];
  const f = LE_CORE.funnel(LE.leads, LE.settings, leCtx());
  const stages = f.stages.concat([{id:'selected', label:"Today's selection", n: leTodayRows().length}]);
  const max = Math.max(1, stages[0].n);
  const reasons = Object.entries(f.rejectionReasons).sort((a,b)=>b[1]-a[1]);
  const labels = {'closed':'Appears closed','duplicate':'Duplicate','existing-client':'Existing client','do-not-contact':'Do not contact','industry-off':'Industry switched off','recent-contact':'Contacted recently','no-contact-route':'No contact route','weak-presence':'Weak online presence','insufficient-evidence':'Insufficient evidence','too-small':'Too small'};
  return `<div class="grid grid-2">
    <div class="card"><div class="card-title">Qualification funnel <span class="small muted">expensive checks only run on the narrow end</span></div>
      ${stages.map(s=>`<div class="le-funnel-row"><div class="le-funnel-label">${esc(s.label)}</div><div class="le-funnel-bar"><div style="width:${Math.max(2, s.n/max*100)}%"></div></div><div class="le-funnel-n">${s.n}</div></div>`).join('')}
    </div>
    <div class="card"><div class="card-title">Why leads were rejected</div>
      ${reasons.length?`<table class="le-evidence"><tbody>${reasons.map(([k,n])=>`<tr><td>${esc(labels[k]||k)}</td><td style="text-align:right;"><strong>${n}</strong></td><td><a class="le-link" onclick="LE.filters.stage='rejected';setLeTab('leads')">view</a></td></tr>`).join('')}</tbody></table>`:'<div class="muted small">No rejections.</div>'}
      <p class="small muted mt-10">Every rejected lead keeps its reason on its profile.</p>
    </div>
  </div>
  <div class="card mt-10"><div class="card-title">Latest run ${run?`<span class="small muted">${fmtDate(run.started_at)} · ${esc(run.phase)} · ${esc(run.status)} · cost £${Number(run.cost_gbp||0).toFixed(2)}</span>`:''}</div>
    ${run?`${run.status==='budget_limited'?'<div class="le-gate-fail">Stopped at your spending cap — raise it in Settings or let it carry on tomorrow.</div>':''}<pre class="le-log">${esc((run.log||[]).slice(-40).join('\n')||'—')}</pre>`:`<div class="muted small">${LE.mode==='sandbox'?'The sandbox has no backend runs — the funnel above is computed from the MOCK leads.':'No runs yet. Use ▶ Run today\'s research on the Today tab, or turn on automatic runs in Settings.'}</div>`}
  </div>`;
}

/* ===================== MAP ===================== */
const LE_MAP_FILTERS = [['all','All'],['hot','HOT leads'],['estate','Estate agents'],['360','360 opportunities'],['web','Website opportunities'],['uncontacted','Not contacted'],['meetings','Meetings booked']];
function leMapView(){
  return `<div class="le-chips">${LE_MAP_FILTERS.map(([k,t])=>`<button class="le-chipbtn ${LE.mapFilter===k?'active':''}" onclick="LE.mapFilter='${k}';renderPage()">${t}</button>`).join('')}</div>
    <div class="card" style="padding:0;overflow:hidden;"><div id="le-map" style="height:560px;"></div></div>
    <p class="small muted mt-10">Pins use postcodes.io / OpenStreetMap coordinates. Google data is never placed on this map (Google's terms). Leads without a postcode aren't shown.</p>`;
}
function leMapPass(l){
  const r = leScore(l), st = leStage(l);
  switch(LE.mapFilter){
    case 'hot': return r.band==='HOT';
    case 'estate': return /agent/.test(l.industry);
    case '360': return r.o360.score>=60;
    case 'web': return ['website','optimisation','lead-gen'].some(s=>r.need.byService[s] && r.need.byService[s].score>=50);
    case 'uncontacted': return !LE_CORE.POST_CONTACT.includes(st);
    case 'meetings': return st==='meeting';
    default: return st!=='rejected';
  }
}
function leDrawMap(){
  const el = document.getElementById('le-map'); if(!el || !window.L) return;
  const map = L.map('le-map', {zoomControl:true, attributionControl:true});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'© OpenStreetMap contributors'}).addTo(map);
  const pts = [];
  LE.leads.filter(l=>l.lat!=null && l.lng!=null && leMapPass(l)).forEach(l=>{
    const r = leScore(l);
    const color = r.band==='HOT'?'#FF6B4A' : r.band==='STRONG'?'#00E5CC' : r.band==='WARM'?'#F59E0B' : '#6B7280';
    const m = L.circleMarker([l.lat, l.lng], {radius: r.band==='HOT'?9:7, color, fillColor:color, fillOpacity:.75, weight:2}).addTo(map);
    m.bindPopup(`<strong>${esc(l.name)}</strong>${l.mock?' (MOCK)':''}<br>${leBandIcon(r.band)} ${r.leadScore} · ${esc(r.offer||'')}<br><a href="#" onclick="openLeBrief('${l.id}');return false;">View research</a>`);
    pts.push([l.lat, l.lng]);
  });
  if(pts.length) map.fitBounds(pts, {padding:[30,30], maxZoom:13}); else map.setView([51.56, 0.15], 10);
  setTimeout(()=>map.invalidateSize(), 50);
}

/* ===================== PERFORMANCE / LEARNING / TARGETS ===================== */
function lePerfRows(dimFn){
  return LE.leads.map(l=>{
    const ts = LE.touches.filter(t=>t.lead_id===l.id);
    const contacted = ts.some(t=>['call','email','whatsapp','dm'].includes(t.channel));
    const has = o=>ts.some(t=>o.includes(t.outcome));
    const won = ts.find(t=>t.outcome==='won');
    return {lead:l, key: dimFn ? dimFn(l, ts) : '', contacted, replied: has(['reply','interested','meeting','proposal','negotiating','won']), meeting: has(['meeting','proposal','negotiating','won']), won: !!won, value: won ? Number(won.value)||0 : 0};
  });
}
function lePerformanceView(){
  const rows = lePerfRows();
  const contacted = rows.filter(r=>r.contacted);
  const won = rows.filter(r=>r.won);
  const open = LE.leads.filter(l=>!['won','lost','rejected'].includes(leStage(l)));
  const pipelineValue = open.filter(l=>LE_CORE.POST_CONTACT.includes(leStage(l))).reduce((s,l)=>s+(leScore(l).deal.mid||0),0);
  const avgScore = LE.leads.length ? Math.round(LE.leads.reduce((s,l)=>s+leScore(l).leadScore,0)/LE.leads.length) : 0;
  const potential = open.filter(l=>leScore(l).band==='HOT'||leScore(l).band==='STRONG').reduce((s,l)=>s+(leScore(l).deal.mid||0),0);
  const conv = contacted.length ? Math.round(won.length/contacted.length*100) : null;
  const kpi = (l,v,sub)=>`<div class="card le-kpi"><div class="le-kpi-label">${l}</div><div class="le-kpi-val">${v}</div>${sub?`<div class="small muted">${sub}</div>`:''}</div>`;
  const quotes = rows.filter(r=>LE.touches.some(t=>t.lead_id===r.lead.id && t.outcome==='proposal')).length;
  const roi = [['Leads discovered', LE.leads.length], ['Leads contacted', contacted.length], ['Replies', rows.filter(r=>r.replied).length], ['Meetings', rows.filter(r=>r.meeting).length], ['Quotes / proposals', quotes], ['Sales', won.length], ['Revenue', leMoney(won.reduce((s,r)=>s+r.value,0))]];
  const dims = [
    ['Score band', l=>leScore(l).band], ['Industry', l=>LE_CORE.industry(l.industry).label], ['Area', l=>l.area||leScore(l).fit.area], ['Primary problem', l=>(leScore(l).primaryFinding||{}).title||'—'],
    ['Offer', l=>leScore(l).offer||'—'], ['First channel', (l,ts)=>{ const f = ts.filter(t=>['call','email','whatsapp','dm'].includes(t.channel)).sort((a,b)=>String(a.at).localeCompare(String(b.at)))[0]; return f?f.channel:'—'; }],
    ['Lead source', l=>(l.sources||[])[0] ? (/companies|find-and-update/.test(l.sources[0])?'Companies House':/openstreetmap/.test(l.sources[0])?'OpenStreetMap':l.sources[0]==='manual'?'Manual':'Other') : '—'],
    ['Salesperson', (l,ts)=>(ts.find(t=>t.salesperson)||{}).salesperson||'—'], ['Month', (l,ts)=>{ const f = ts[ts.length-1]; return f?String(f.at).slice(0,7):'—'; }]
  ];
  if(!LE._perfDim) LE._perfDim = 'Score band';
  const dim = dims.find(d=>d[0]===LE._perfDim) || dims[0];
  const seg = LE_CORE.conversionBy(lePerfRows(dim[1]).map(r=>({key:r.key, contacted:r.contacted, replied:r.replied, meeting:r.meeting, won:r.won, value:r.value})), LE.settings.assumptions.minSampleForObserved);
  const pct = x=>Math.round(x*100)+'%';
  // costs
  const monthStart = localDateStr(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const spend = LE.apiCalls.filter(c=>String(c.at).slice(0,10)>=monthStart).reduce((s,c)=>s+(Number(c.cost_gbp)||0),0);
  const byProv = {}; LE.apiCalls.filter(c=>String(c.at).slice(0,10)>=monthStart).forEach(c=>{ const p = byProv[c.provider] = byProv[c.provider]||{calls:0, cost:0, cached:0}; p.calls++; p.cost += Number(c.cost_gbp)||0; if(c.cache_hit) p.cached++; });
  const cm = LE_CORE.costMetrics(spend, {discovered:LE.leads.filter(l=>String(l.discoveredAt).slice(0,10)>=monthStart).length, qualified:LE.leads.filter(l=>leStage(l)!=='rejected' && l.auditedAt).length, today:LE.daily.filter(d=>d.day>=monthStart).length, meetings:rows.filter(r=>r.meeting).length, customers:won.length});
  const by = (fn)=>{ const g = {}; LE.leads.forEach(l=>{ const k = fn(l); g[k] = (g[k]||0)+1; }); return Object.entries(g).sort((a,b)=>b[1]-a[1]).slice(0,8); };
  const bars = (list)=>{ const m = Math.max(1, ...list.map(x=>x[1])); return list.map(([k,n])=>`<div class="le-funnel-row"><div class="le-funnel-label">${esc(k)}</div><div class="le-funnel-bar"><div style="width:${n/m*100}%"></div></div><div class="le-funnel-n">${n}</div></div>`).join(''); };
  return `<div class="le-kpis le-kpis-4">${kpi('Pipeline value', leMoney(pipelineValue), 'contacted, not yet won/lost')}${kpi('Average lead score', avgScore)}${kpi('Estimated potential revenue', leMoney(potential), 'HOT + STRONG, mid of your price ranges')}${kpi('Conversion rate', conv==null?'—':conv+'%', contacted.length+' contacted')}</div>
  ${leTargetCard()}
  <div class="grid grid-3 mt-10">
    <div class="card"><div class="card-title">Leads by industry</div>${bars(by(l=>LE_CORE.industry(l.industry).label))}</div>
    <div class="card"><div class="card-title">Leads by location</div>${bars(by(l=>l.area||leScore(l).fit.area))}</div>
    <div class="card"><div class="card-title">Leads by service opportunity</div>${bars(by(l=>{ const r = leScore(l); return r.primaryService && r.need.byService[r.primaryService].score>=LE.settings.thresholds.minNeed ? r.offer : 'No clear fit yet'; }))}</div>
  </div>
  <div class="grid grid-2 mt-10">
    <div class="card"><div class="card-title">ROI funnel</div>${roi.map(([k,v])=>`<div class="le-kv"><span>${k}</span><strong>${v}</strong></div>`).join('')}</div>
    <div class="card"><div class="card-title">Cost (this month) <span class="small muted">cap £${LE.settings.budget.monthlyGBP}/month · £${LE.settings.budget.dailyGBP}/day</span></div>
      <div class="le-kv"><span>Total spend</span><strong>£${cm.total.toFixed(2)}</strong></div>
      ${[['per discovered lead',cm.perDiscovered],['per qualified lead',cm.perQualified],["per Today's lead",cm.perToday],['per meeting',cm.perMeeting],['per customer',cm.perCustomer]].map(([k,v])=>`<div class="le-kv"><span>Cost ${k}</span><span>${v==null?'—':'£'+v.toFixed(2)}</span></div>`).join('')}
      <div class="small muted mt-10">${Object.entries(byProv).map(([p,x])=>`${esc(p)}: ${x.calls} calls${x.cached?` (${x.cached} cached)`:''}, £${x.cost.toFixed(2)}`).join(' · ')||'No API calls logged yet.'}</div>
    </div>
  </div>
  <div class="card mt-10"><div class="card-title">SteadyFlow Lead Quality Model <span class="small muted">rule-based today · learns from outcomes once there's enough data</span></div>
    <div class="le-chips">${dims.map(d=>`<button class="le-chipbtn ${LE._perfDim===d[0]?'active':''}" onclick="LE._perfDim='${d[0]}';renderPage()">${d[0]}</button>`).join('')}</div>
    <table class="le-evidence"><thead><tr><th>${esc(dim[0])}</th><th>Contacted</th><th>Reply rate</th><th>Meeting rate (90% range)</th><th>Win rate</th><th>Value won</th><th></th></tr></thead><tbody>
      ${seg.filter(s=>s.contacted).map(s=>`<tr><td>${esc(s.key)}</td><td>${s.contacted}</td><td>${pct(s.replyRate)}</td><td>${pct(s.meetingRate)} <span class="small muted">(${pct(s.ci[0])}–${pct(s.ci[1])})</span></td><td>${pct(s.winRate)}</td><td>${leMoney(s.value)}</td><td>${s.sufficient?'':'<span class="le-chip le-chip-unk">insufficient data</span>'}</td></tr>`).join('') || `<tr><td colspan="7" class="muted">No contacted leads yet. Rates appear here as you log outcomes.</td></tr>`}
    </tbody></table>
    <p class="small muted mt-10">A segment needs ${LE.settings.assumptions.minSampleForObserved}+ contacted leads before its rate is trusted. Automatic re-weighting (calibration) stays locked until a segment has ${LE.settings.learning.minContacted}+ contacts and ${LE.settings.learning.minMeetings}+ meetings — no fake "AI learning" before then.</p>
  </div>`;
}
function leTargetInputs(){
  let target = 2000, targetSrc = 'example', avg = 750, avgSrc = 'example';
  try{ const st = tgState(DB,'sf'); if(st && st.target>0){ target = st.target; targetSrc = 'Targets · level '+st.level; } }catch(e){}
  try{ const m = tgMetrics(DB,'sf'); if(m && m.avgValue>0){ avg = m.avgValue; avgSrc = m.avgAuto ? 'auto from paid invoices / default' : 'your capacity setting'; } }catch(e){}
  const rates = LE_CORE.observedRates(lePerfRows().map(r=>({contacted:r.contacted, meeting:r.meeting, won:r.won})), LE.settings);
  return {target, targetSrc, avg, avgSrc, rates};
}
function leTargetCard(){
  const I = leTargetInputs();
  const base = {weeklyTarget:I.target, avgValue:I.avg, contactToMeeting:I.rates.contactToMeeting, meetingToWin:I.rates.meetingToWin, workingDays:LE.settings.assumptions.workingDays};
  const cur = LE_CORE.targetFeasibility(Object.assign({}, base, {dailyNew:LE.settings.dailyQuantity}));
  const pct = x=>x==null?'—':Math.round(x*100)+'%';
  const scen = [[LE.settings.dailyQuantity, I.avg], [5, I.avg], [LE.settings.dailyQuantity, Math.round(I.avg*1.5)], [8, Math.round(I.avg*1.5)]].map(([d,a])=>({d, a, t: LE_CORE.targetFeasibility(Object.assign({}, base, {dailyNew:d, avgValue:a}))}));
  return `<div class="card mt-10 le-target ${cur.sufficient?'le-target-ok':'le-target-bad'}"><div class="card-title">Is ${LE.settings.dailyQuantity} premium prospects a day enough? <span class="small muted">SteadyFlow target from your Targets page</span></div>
    <div class="le-target-grid">
      <div><div class="le-kv"><span>Weekly target</span><strong>${leMoney(I.target)}</strong></div><div class="small muted">${esc(I.targetSrc)}</div>
        <div class="le-kv mt-10"><span>Average project</span><strong>${leMoney(I.avg)}</strong></div><div class="small muted">${esc(I.avgSrc)}</div></div>
      <div><div class="le-kv"><span>Contact → meeting</span><strong>${pct(I.rates.contactToMeeting)}</strong></div><div class="small muted">${esc(I.rates.contactToMeetingSource)}</div>
        <div class="le-kv mt-10"><span>Meeting → sale</span><strong>${pct(I.rates.meetingToWin)}</strong></div><div class="small muted">${esc(I.rates.meetingToWinSource)}</div></div>
      <div><div class="le-kv"><span>Wins needed</span><strong>${cur.winsNeeded}</strong></div><div class="le-kv"><span>Meetings needed</span><strong>${cur.meetingsNeeded}</strong></div><div class="le-kv"><span>Quality contacts needed</span><strong>${cur.contactsNeeded}/week</strong></div></div>
      <div><div class="le-kv"><span>You'll make</span><strong>${cur.weeklyContacts}/week</strong></div><div class="le-kv"><span>Expected meetings</span><strong>${cur.expectedMeetings}</strong></div><div class="le-kv"><span>Expected wins</span><strong>${cur.expectedWins}</strong></div></div>
    </div>
    <div class="le-verdict">${cur.sufficient ? `✓ On these numbers, ${LE.settings.dailyQuantity}/day covers the target.` :
      `✗ Not statistically sufficient on its own: ${LE.settings.dailyQuantity}/day gives about ${Math.round(cur.coverage*100)}% of the wins needed. To work alone, premium leads would need a ${pct(cur.requiredContactToMeeting)} contact→meeting rate${cur.requiredContactToMeeting>0.4?', which isn\'t realistic':''}. Levers below.`}
      ${I.rates.contactToMeetingSource==='assumption'?' <span class="small muted">Rates are labelled assumptions until you\'ve logged '+LE.settings.assumptions.minSampleForObserved+'+ contacts.</span>':''}</div>
    <table class="le-evidence mt-10"><thead><tr><th>Scenario</th><th>Contacts/week</th><th>Expected wins</th><th>Expected revenue</th><th>Covers target?</th></tr></thead><tbody>
      ${scen.map(s=>`<tr><td>${s.d}/day at ${leMoney(s.a)} avg</td><td>${s.t.weeklyContacts}</td><td>${s.t.expectedWins}</td><td>${leMoney(s.t.expectedRevenue)}</td><td>${s.t.sufficient?'✓':Math.round(s.t.coverage*100)+'%'}</td></tr>`).join('')}
    </tbody></table>
    <p class="small muted">Follow-ups aren't counted as extra contacts here. Most replies come on touches 2–4, so a strong follow-up cadence is the cheapest lever after deal size.</p>
  </div>`;
}
function leTargetMini(){
  const I = leTargetInputs();
  const t = LE_CORE.targetFeasibility({weeklyTarget:I.target, avgValue:I.avg, contactToMeeting:I.rates.contactToMeeting, meetingToWin:I.rates.meetingToWin, workingDays:LE.settings.assumptions.workingDays, dailyNew:LE.settings.dailyQuantity});
  return `<div class="card le-target-mini" onclick="setLeTab('performance')" style="cursor:pointer;"><div class="card-title">Target check</div>
    <div class="small">${leMoney(I.target)}/week needs ~${t.contactsNeeded} quality contacts. ${LE.settings.dailyQuantity}/day gives ${t.weeklyContacts}.</div>
    <div class="small" style="margin-top:6px;color:${t.sufficient?'var(--success)':'var(--warning)'};">${t.sufficient?'On track on these numbers':'Covers ~'+Math.round(t.coverage*100)+'% of wins needed — see levers →'}</div>
    <div class="small muted">${I.rates.contactToMeetingSource==='assumption'?'Using assumed conversion rates':'Using your observed rates'}</div></div>`;
}

/* ===================== SETTINGS ===================== */
function leSettingsView(){
  const s = LE.settings, T = s.thresholds, W = s.weights, B = s.budget;
  const num = (id, val, step, min, max)=>`<input type="number" id="${id}" value="${val}" step="${step||1}" ${min!=null?`min="${min}"`:''} ${max!=null?`max="${max}"`:''}>`;
  const prov = LE.providers;
  return `<div class="grid grid-2">
    <div class="card"><div class="card-title">Daily selection & quality gate</div>
      <div class="form-row"><div class="form-group"><label>Leads per day (max)</label>${num('les-qty', s.dailyQuantity, 1, 1, 10)}</div><div class="form-group"><label>Max per industry per day</label>${num('les-div', s.diversity.maxPerIndustry, 1, 1, 10)}</div></div>
      <div class="form-row"><div class="form-group"><label>Min lead score</label>${num('les-ls', T.leadScore, 1, 0, 100)}</div><div class="form-group"><label>Min confidence %</label>${num('les-cf', T.confidence, 1, 0, 100)}</div></div>
      <div class="form-row"><div class="form-group"><label>Min business strength</label>${num('les-st', T.minStrength, 1, 0, 100)}</div><div class="form-group"><label>Min service fit (need)</label>${num('les-nd', T.minNeed, 1, 0, 100)}</div></div>
      <div class="form-row"><div class="form-group"><label>Research max age (days)</label>${num('les-age', T.maxResearchAgeDays, 1, 1, 90)}</div><div class="form-group"><label>Contact cooldown (days)</label>${num('les-cd', T.contactCooldownDays, 1, 0, 365)}</div></div>
      <p class="small muted">If fewer leads pass than the daily maximum, you get fewer. The bar is never lowered to fill slots.</p>
    </div>
    <div class="card"><div class="card-title">Scoring weights <span class="small muted">must add to 1.00</span></div>
      <div class="form-row"><div class="form-group"><label>Commercial gap</label>${num('lew-gap', W.gap, 0.05, 0, 1)}</div><div class="form-group"><label>Buying signals</label>${num('lew-buy', W.buying, 0.05, 0, 1)}</div></div>
      <div class="form-row"><div class="form-group"><label>Contactability</label>${num('lew-con', W.contact, 0.05, 0, 1)}</div><div class="form-group"><label>Location / fit</label>${num('lew-fit', W.fit, 0.05, 0, 1)}</div></div>
      <p class="small muted">Commercial gap = √(business strength × need), so a good business with a real gap scores highest. 360 opportunity sits inside need. Reasoning: docs/lead-engine/ARCHITECTURE.md §4.</p>
      <div class="form-row"><div class="form-group"><label>Follow-up intervals (days, comma separated)</label><input type="text" id="les-fu" value="${s.followUpDays.join(', ')}"></div></div>
    </div>
    <div class="card"><div class="card-title">Industries</div>
      ${s.industries.map(i=>`<label class="le-toggle"><input type="checkbox" id="lei-${i.id}" ${i.enabled?'checked':''}> ${esc(LE_CORE.industry(i.id).label)} <span class="spacer"></span><span class="small muted">priority</span> <input type="number" id="leip-${i.id}" value="${i.priority}" step="0.1" min="0" max="1" style="width:70px;"></label>`).join('')}
    </div>
    <div class="card"><div class="card-title">Locations</div>
      ${s.areas.map(a=>`<label class="le-toggle"><input type="checkbox" id="lea-${a.id}" ${a.enabled?'checked':''}> ${esc(a.label)} <span class="small muted">(${a.prefixes.join(', ')})</span><span class="spacer"></span><span class="small muted">priority</span> <input type="number" id="leap-${a.id}" value="${a.priority}" min="0" max="100" style="width:70px;"></label>`).join('')}
      <div class="form-group mt-10"><label>Priority for anywhere else</label>${num('les-defarea', s.defaultAreaPriority, 1, 0, 100)}</div>
    </div>
    <div class="card"><div class="card-title">Your prices <span class="small muted">${s.pricesConfirmed?'confirmed':'placeholders — please set'}</span></div>
      <table class="le-evidence"><thead><tr><th>Service</th><th>From £</th><th>To £</th><th>Monthly £</th></tr></thead><tbody>
      ${LE_CORE.SERVICES.map(x=>{ const v = LE_CORE.service(x.id, s); return `<tr><td>${esc(x.label)}</td><td><input type="number" id="lep-l-${x.id}" value="${v.low}" style="width:80px;"></td><td><input type="number" id="lep-h-${x.id}" value="${v.high}" style="width:80px;"></td><td><input type="number" id="lep-m-${x.id}" value="${v.monthly||0}" style="width:80px;"></td></tr>`; }).join('')}
      </tbody></table><p class="small muted">Only used for "estimated value". Saving marks them as your prices.</p>
    </div>
    <div class="card"><div class="card-title">Spend & automation</div>
      <div class="form-row"><div class="form-group"><label>Daily cap (£)</label>${num('les-bd', B.dailyGBP, 0.5, 0)}</div><div class="form-group"><label>Monthly cap (£)</label>${num('les-bm', B.monthlyGBP, 1, 0)}</div></div>
      <div class="form-group"><label>AI brief model</label><select id="les-model"><option value="claude-opus-5-5" ${B.briefModel==='claude-opus-5-5'?'selected':''}>Claude Opus 5.5 (best, ~£0.10/brief)</option><option value="claude-sonnet-5-5" ${B.briefModel==='claude-sonnet-5-5'?'selected':''}>Claude Sonnet 5.5 (~£0.05/brief)</option></select></div>
      <div class="form-row"><div class="form-group"><label>Candidates audited / run</label>${num('les-pool', s.pipeline.poolSize, 5, 5, 300)}</div><div class="form-group"><label>Deep-researched / run</label>${num('les-rt', s.pipeline.researchTop, 1, 1, 50)}</div></div>
      <label class="le-toggle"><input type="checkbox" id="les-auto" ${s.pipeline.autoRun?'checked':''}> Run automatically each weekday morning (needs supabase/cron.sql)</label>
      <div class="le-sec-title mt-10">Disqualify automatically</div>
      ${[['tooSmall','Businesses too small to afford the service'],['weakPresence','No working website and almost no reviews'],['excellentExisting','Already has a strong version of what we\'d pitch']].map(([k,t])=>`<label class="le-toggle"><input type="checkbox" id="lesd-${k}" ${s.disqualify[k]?'checked':''}> ${t}</label>`).join('')}
      <div class="le-sec-title mt-10">Conversion assumptions <span class="small muted">used until you have real data</span></div>
      <div class="form-row"><div class="form-group"><label>Contact → meeting %</label>${num('les-c2m', Math.round(s.assumptions.contactToMeeting*100), 1, 1, 100)}</div><div class="form-group"><label>Meeting → sale %</label>${num('les-m2w', Math.round(s.assumptions.meetingToWin*100), 1, 1, 100)}</div></div>
    </div>
  </div>
  <div class="card mt-10"><div class="card-title">Data providers</div>
    ${prov?Object.entries(prov).map(([k,v])=>`<span class="le-chip ${v?'le-chip-ok':'le-chip-unk'}">${esc(k.replace(/_/g,' '))}: ${v?'on':'off'}</span>`).join(' '):`<span class="small muted">${LE.mode==='live'?'<a class="le-link" onclick="leCheckProviders()">Check backend status</a>':'Backend not connected in sandbox.'}</span>`}
    <p class="small muted mt-10">API keys live only in Supabase Edge Function secrets, never in this page. See docs/lead-engine/SETUP.md.</p>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;"><button class="btn btn-ghost" onclick="leResetSettings()">Reset to defaults</button><button class="btn btn-gold" onclick="leSaveSettings()">Save settings</button></div>`;
}
async function leCheckProviders(){ const r = await LeStore.invoke('status'); if(r.ok){ LE.providers = r.providers; renderPage(); } else toast(r.error||'Backend unavailable','⚠️'); }
async function leSaveSettings(){
  const n = id=>Number(document.getElementById(id).value);
  const s = JSON.parse(JSON.stringify(LE.settings));
  s.dailyQuantity = Math.max(1, Math.round(n('les-qty'))); s.diversity.maxPerIndustry = Math.max(1, Math.round(n('les-div')));
  Object.assign(s.thresholds, {leadScore:n('les-ls'), confidence:n('les-cf'), minStrength:n('les-st'), minNeed:n('les-nd'), maxResearchAgeDays:n('les-age'), contactCooldownDays:n('les-cd')});
  const w = {gap:n('lew-gap'), buying:n('lew-buy'), contact:n('lew-con'), fit:n('lew-fit')};
  const sum = w.gap+w.buying+w.contact+w.fit;
  if(Math.abs(sum-1) > 0.011){ toast('Weights add up to '+sum.toFixed(2)+' — they need to total 1.00','⚠️'); return; }
  s.weights = w;
  s.followUpDays = document.getElementById('les-fu').value.split(',').map(x=>Math.round(Number(x))).filter(x=>x>0).slice(0,5);
  s.industries.forEach(i=>{ i.enabled = document.getElementById('lei-'+i.id).checked; i.priority = Math.max(0, Math.min(1, n('leip-'+i.id))); });
  s.areas.forEach(a=>{ a.enabled = document.getElementById('lea-'+a.id).checked; a.priority = Math.max(0, Math.min(100, n('leap-'+a.id))); });
  s.defaultAreaPriority = n('les-defarea');
  LE_CORE.SERVICES.forEach(x=>{ s.services[x.id] = {low:n('lep-l-'+x.id), high:n('lep-h-'+x.id), monthly:n('lep-m-'+x.id)}; });
  s.pricesConfirmed = true;
  Object.assign(s.budget, {dailyGBP:n('les-bd'), monthlyGBP:n('les-bm'), briefModel:document.getElementById('les-model').value});
  Object.assign(s.pipeline, {poolSize:n('les-pool'), researchTop:n('les-rt'), autoRun:document.getElementById('les-auto').checked});
  ['tooSmall','weakPresence','excellentExisting'].forEach(k=>{ s.disqualify[k] = document.getElementById('lesd-'+k).checked; });
  s.assumptions.contactToMeeting = n('les-c2m')/100; s.assumptions.meetingToWin = n('les-m2w')/100;
  try{ await LeStore.saveSettings(s); renderPage(); toast('Settings saved'); }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
function leResetSettings(){
  confirmDelete('Reset Lead Engine settings?', 'Thresholds, weights, industries, areas and prices go back to the defaults.', async ()=>{ await LeStore.saveSettings(LE_CORE.defaultSettings()); renderPage(); toast('Settings reset'); });
}

/* ---------- nav badge: follow-ups due ---------- */
function leNavBadge(){ try{ return LE.mode==='live'||LE.mode==='sandbox' ? leFollowupsDue().length : 0; }catch(e){ return 0; } }
// Load quietly after sign-in so the nav badge and Today's view are ready.
setTimeout(()=>{ if(typeof sb!=='undefined' && LE.mode==='loading' && !LE.loadedAt){ sb.auth.getSession().then(({data})=>{ if(data && data.session) leReload(true); }); } }, 2500);
