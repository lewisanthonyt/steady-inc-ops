/* ===================== STEADYWORKS — COMMERCIAL DESK (UI) ===================== */
/* "Up to 3 organisations a day where a relationship could create repeat maintenance work."
   Scoring: works-core.js (WorksCore) — a separate model from SteadyFlow's.
   Data: the shared Lead Engine store (LE / LeStore in steadyflow-leads.js) — LE.allLeads with
   scope 'sw', LE.sw.{opps,daily,touches,followups,settings}. Won relationships link to the
   existing SteadyWorks Customers / Jobs / Invoices, and revenue comes from the Targets ledger. */

const SWD_TABS = [['desk','Commercial Desk'],['prospects','Prospects'],['relationships','Relationships'],['accounts','Accounts'],['map','Territory'],['performance','Performance'],['settings','Settings']];
const SWD = {tab:'desk', scored:{}, filters:{type:'', cls:'', stage:'', service:'', minOpp:0, q:'', centre:'', centreLL:null, radius:0}, mapFilter:'all', perfDim:'Organisation type'};
try{ SWD.tab = localStorage.getItem('steadyworks_desk_tab') || 'desk'; }catch(e){}
const WC = window.WorksCore;

/* ---------- helpers ---------- */
const swSettings = ()=>LE.sw.settings || WC.defaultSettings();
const swLeads = ()=>LE.allLeads.filter(l=>(l.scope||['sf']).includes('sw'));
const swOpp = id=>LE.sw.opps.find(o=>o.lead_id===id) || null;
const swOppCtx = o=>o ? {stage:o.stage, orgType:o.org_type, lastContactedAt:o.last_contacted_at, replied:o.replied, customerId:o.customer_id, account:o.account||{}} : null;
const swToday = ()=>LE.sw.daily.filter(d=>d.day===leToday()).sort((a,b)=>a.rank-b.rank);
// leInvalidate() (shared store) also clears SteadyWorks' cache.
const _leInvalidateSf = leInvalidate;
leInvalidate = function(){ _leInvalidateSf(); SWD.scored = {}; SWD._ctx = null; };

function swCustomerForOpp(o){ return o && o.customer_id ? (DB.customers||[]).find(c=>c.id===o.customer_id) : null; }
function swJobPoints(){
  const accountCust = new Set(LE.sw.opps.filter(o=>o.customer_id).map(o=>o.customer_id));
  return (DB.jobs||[]).map(j=>{ const c = (DB.geocodeCache||{})[String(j.address||'').trim().toLowerCase()]; return c ? {lat:c.lat, lng:c.lng, account:accountCust.has(j.customerId), job:j} : null; }).filter(Boolean);
}
function swCapacityInputs(){
  let cap = {};
  try{ cap = tgSettings(DB).capacity.sw || {}; }catch(e){}
  const todayS = leToday(), in14 = localDateStr(new Date(Date.now()+14*86400000));
  const accounts = LE.sw.opps.filter(o=>['first-job','active-account'].includes(o.stage));
  // observed jobs per account per month, once there are accounts with history
  let observed = null;
  const hist = accounts.map(o=>swCustomerForOpp(o)).filter(Boolean).map(c=>WC.accountMetrics(c, DB.jobs||[], DB.invoices||[]));
  if(hist.filter(m=>m.jobs>=2).length>=2) observed = Math.round(hist.reduce((s,m)=>s+m.jobs,0)/hist.length/3*10)/10; // jobs over ~3 months
  const pipe = {};
  LE.sw.opps.filter(o=>['meeting','supplier-application','approved','capability-sent','first-job'].includes(o.stage)).forEach(o=>{ const e = o.score && o.score.entry; if(e) pipe[e] = (pipe[e]||0)+1; });
  return {capacityPerWeek:(Number(cap.jobsPerDay)||0)*(Number(cap.workingDays)||0)+(Number(cap.subcontractorJobs)||0),
    jobsNext14:(DB.jobs||[]).filter(j=>['scheduled','active'].includes(j.status) && (!j.startDate || (j.startDate>=todayS && j.startDate<=in14))).length,
    activeAccounts:accounts.length, observedJobsPerAccountMonth:observed, subcontractorTrades:(DB.subcontractors||[]).map(s=>s.trade||''),
    pipelineByService:pipe, emergencyAccounts:accounts.filter(o=>o.account && o.account.emergency).length};
}
function swCtx(){
  if(SWD._ctx) return SWD._ctx;
  const linked = new Set(LE.sw.opps.filter(o=>o.customer_id).map(o=>o.customer_id));
  SWD._ctx = {now:new Date(), jobPoints:swJobPoints(), capacity:WC.capacity(swCapacityInputs(), swSettings()),
    customerNames:new Set((DB.customers||[]).filter(c=>!linked.has(c.id)).map(c=>LE_CORE.normaliseName(c.name)))};
  return SWD._ctx;
}
function swScore(l){
  if(!SWD.scored[l.id]){ const o = swOpp(l.id); SWD.scored[l.id] = WC.scoreOrg(l, swSettings(), Object.assign({}, swCtx(), {opp:swOppCtx(o), isAccount:!!(o&&o.customer_id)})); }
  return SWD.scored[l.id];
}
function swStage(l){ const o = swOpp(l.id); if(o && WC.CONTACTED.includes(o.stage)) return o.stage; return WC.preContactStage(l, swScore(l)); }
function swStageLabel(id){ return (WC.STAGES.find(s=>s.id===id)||{label:id==='rejected'?'Rejected':id}).label; }
function swClsColor(c){ return c==='VERY HIGH'?'#FF6B4A' : c==='HIGH'?'var(--gold-light)' : c==='MEDIUM'?'var(--warning)' : 'var(--text-soft)'; }
function swFollowupsDue(){ const t = leToday(); return LE.sw.followups.filter(f=>!f.done_at && f.due_date<=t).map(f=>Object.assign({lead:leLead(f.lead_id)}, f)).filter(f=>f.lead).sort((a,b)=>a.due_date.localeCompare(b.due_date)); }
function swNavBadge(){ try{ return (LE.mode==='live'||LE.mode==='sandbox') ? swFollowupsDue().length : 0; }catch(e){ return 0; } }
function swSender(){ return {name:(DB.settings&&DB.settings.ownerName)||'Lewis', company:'SteadyWorks'}; }

/* ---------- page shell ---------- */
function setSwdTab(t){ SWD.tab = t; try{ localStorage.setItem('steadyworks_desk_tab', t); }catch(e){} renderPage(); }
function view_sw_desk(){
  if(!WC) return '<div class="empty-state">works-core.js didn\'t load.</div>';
  if(LE.mode==='loading'){ if(!LE.loadedAt) setTimeout(()=>leReload(), 0); return '<div class="card"><div class="muted">Loading Commercial Desk…</div></div>'; }
  if(LE.mode==='setup') return `<div class="sw-root">${leSetupView().replace('STEADYFLOW LEAD ENGINE','STEADYWORKS COMMERCIAL ENGINE').replace('Up to 3 businesses worth your time, every morning.','Up to 3 commercial relationships worth building, every morning.')}</div>`;
  if(LE.mode==='error') return `<div class="card"><div class="card-title">Commercial Desk couldn't load</div><p class="muted">${esc(LE.error)}</p><button class="btn btn-ghost mt-10" onclick="leReload()">Try again</button></div>`;
  const banner = LE.mode==='sandbox' ? `<div class="le-sandbox-banner">🧪 <strong>SANDBOX — MOCK DATA.</strong> Fictional organisations for trying the screens. Your real jobs, customers and capacity are still read for distance and capacity.
      <span class="spacer"></span><button class="btn btn-ghost btn-sm" onclick="leResetSandbox()">Reset</button><button class="btn btn-ghost btn-sm" onclick="leExitSandbox()">Exit sandbox</button></div>` : '';
  const due = swFollowupsDue().length;
  const tabs = `<div class="tabs">${SWD_TABS.map(([k,l])=>`<button class="tab-btn ${SWD.tab===k?'active':''}" onclick="setSwdTab('${k}')">${l}${k==='desk'&&due?` <span class="nav-badge" style="position:static;margin-left:4px;">${due}</span>`:''}</button>`).join('')}</div>`;
  const body = ({desk:swDeskView, prospects:swProspectsView, relationships:swRelView, accounts:swAccountsView, map:swMapView, performance:swPerfView, settings:swSettingsView}[SWD.tab] || swDeskView)();
  return `<div class="le-root sw-root">${banner}${tabs}${body}</div>`;
}
function afterRender_sw_desk(){ if(SWD.tab==='map') swDrawMap(); }

/* ===================== COMMERCIAL DESK ===================== */
function swDeskView(){
  const S = swSettings(), n = S.dailyQuantity;
  const items = swToday().map(d=>({d, lead:leLead(d.lead_id)})).filter(x=>x.lead);
  const done = items.filter(x=>x.d.actioned_at).length;
  const cap = swCtx().capacity;
  const g = swGrowth();
  const noBase = !(S.geo.base && S.geo.base.lat!=null);
  const head = `<div class="le-today-head">
    <div><div class="le-eyebrow">${leGreeting().toUpperCase()} · STEADYWORKS</div><h2 class="le-hero-title" style="margin:2px 0 0;">Today's ${n} new relationships</h2><div class="muted small">${new Date().toLocaleDateString('en-GB',{weekday:'long', day:'numeric', month:'long'})}</div></div>
    <div class="le-today-stats">
      <div><div class="le-stat-label">Capacity</div><div class="le-stat-val sw-cap-${cap.level}">${cap.utilisation==null?'Not set':cap.utilisation+'%'}</div><div class="small muted">${cap.level==='unknown'?'<a class="le-link" onclick="navigate(\'targets\')">set capacity</a>':cap.level.toUpperCase()}</div></div>
      <div><div class="le-stat-label">Growth stage</div><div class="le-stat-val">${g.stage}</div><div class="small muted">${esc(g.label)}</div></div>
      <div><div class="le-stat-label">Outreach</div><div class="le-stat-val">${done} / ${items.length||n}</div></div>
    </div></div>`;
  let main = '';
  if(noBase) main += `<div class="le-gate-fail"><strong>Set your base postcode</strong> in Settings so distance, travel time and territory can be scored. Until then nothing can qualify. <a class="le-link" onclick="setSwdTab('settings')">Settings →</a></div>`;
  if(cap.level==='red') main += `<div class="sw-cap-banner">⚠️ <strong>CONTRACTOR CAPACITY REQUIRED.</strong> Workload is at ${cap.utilisation}% of capacity. ${swSettings().capacity.guard==='limit'?'Only prospects whose entry service has a subcontractor bench can be selected until capacity is added.':'New recurring commitments may not be serviceable.'}</div>`;
  if(!items.length){
    main += `<div class="card le-empty"><div class="le-empty-icon">🏢</div><div><strong>No selection for today yet.</strong>
      <p class="muted small" style="margin:4px 0 10px;">Only organisations with corroborated maintenance evidence, within your territory, and passing every check can be selected. If one qualifies you'll see one.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-gold" onclick="swSelectNow()">Select from current research</button>
      ${LE.mode==='live'?`<button class="btn btn-ghost" onclick="swRunPipeline()">▶ Run today's research</button>`:''}<button class="btn btn-ghost" onclick="openSwOrgModal()">+ Add an organisation</button></div></div></div>`;
  } else {
    if(done===items.length) main += `<div class="le-complete">TODAY'S NEW BUSINESS OUTREACH COMPLETE ✓ <span class="muted small">— ${items.length} of ${items.length} actioned</span></div>`;
    main += items.map(x=>swBigCard(x.lead, x.d)).join('');
    if(items.length < n) main += `<div class="card le-short"><strong>Only ${items.length} organisation${items.length===1?'':'s'} met the bar today.</strong> <span class="muted">Quality over quantity — the rest are under Near misses.</span></div>`;
  }
  main += swNearMisses();
  return head + `<div class="le-today-grid"><div>${main}</div><div>${swTodoCard(items, cap)}${swFollowupCard()}${swActiveOppsCard()}${swAttentionCard()}${swCapacityCard(cap)}${swGrowthCard(g)}</div></div>`;
}
function swBigCard(l, d){
  const r = swScore(l), o = WC.outreach(l, r, swSender());
  const dm = r.contact.decisionMaker, acts = (d&&d.actions)||{};
  const btn = (k, label)=>`<button class="btn btn-sm ${acts[k]?'le-done':'btn-ghost'}" onclick="swMark('${l.id}','${k}')">${acts[k]?'✓ ':''}${label}</button>`;
  const mail = o.ok && r.channels.email && (l.email||(dm&&dm.email)) ? `mailto:${encodeURIComponent((dm&&dm.email)||l.email)}?subject=${encodeURIComponent(o.email.subject)}&body=${encodeURIComponent(o.email.body)}` : '';
  const sec = r.fit.expansion[0];
  return `<div class="card le-big sw-big ${l.mock?'le-mock':''}">
    <div class="le-big-top"><div class="le-rank">#${d?d.rank:'–'}</div>
      <div style="flex:1;min-width:0;"><div class="le-big-name">${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</div>
        <div class="muted small">${esc(r.typeLabel)} · ${esc(l.area||r.geo.area)}${r.geo.distance!=null?' · '+r.geo.distance+' mi (~'+r.geo.minutes+' min est.)':''}</div></div>
      <div class="le-scorebox"><div class="le-score" style="color:${swClsColor(r.relationship.cls)}">${r.opportunity}</div><div class="le-score-sub">relationship score · ${r.confidence}% confidence</div></div>
    </div>
    <div class="sw-potential"><span class="le-label">Relationship potential</span> <strong style="color:${swClsColor(r.relationship.cls)}">${r.relationship.cls}</strong>
      <span class="le-mini-scores" style="margin:0 0 0 8px;display:inline-flex;"><span>Demand ${r.demand.score}</span><span>Footprint ${r.footprint.score==null?'?':r.footprint.score}</span><span>Fit ${r.fit.score}</span><span>Route ${r.geo.score==null?'?':r.geo.score}</span></span></div>
    <div class="le-big-grid">
      <div><div class="le-label">Primary opportunity</div><div class="le-strong">${esc(r.fit.entry?r.fit.entry.label:'—')}</div>
        ${sec?`<div class="le-label mt-10">Secondary</div><div>${esc(sec.label)}</div>`:''}
        <div class="le-label mt-10">Potential services</div><div class="small">${r.fit.services.filter(s=>s.score>=70).slice(0,6).map(s=>esc(s.label.replace(/ \(.*\)/,''))).join(' · ')}</div>
        <div class="le-label mt-10">Relationship objective</div><div>${esc(r.goal.label)}</div>
        <div class="small muted">Contractor status: ${esc(r.contractorStatus)}</div></div>
      <div><div class="le-label">Why this company</div><ul class="le-why">${r.why.map(w=>`<li>${esc(w)}</li>`).join('')}</ul></div>
    </div>
    <div class="le-contact-row">
      <div><div class="le-label">Best contact</div>${dm?`<strong>${esc(dm.name)}</strong> <span class="muted small">${esc(dm.role||'')}</span> ${leStatusChip(dm.status)}<div class="small muted">Source: ${esc(dm.source||'—')}</div>`:'<span class="muted">No named contact — ask who manages contractors</span>'}
        <div class="small">${l.phone?'📞 '+esc(l.phone):''}${l.email?' · ✉️ '+esc(l.email):''}</div></div>
      <div><div class="le-label">Recommended approach</div>${esc(o.ok?o.approach:'Research first')}${l.phone&&!r.channels.tpsChecked?' <span class="le-chip le-chip-inf">TPS not checked</span>':''}</div>
    </div>
    ${o.ok?`<div class="le-opener"><div class="le-label">Call opener</div>${esc(o.call)}</div>`:`<div class="le-opener muted">${esc(o.reason)}</div>`}
    <div class="le-actions">
      <button class="btn btn-ghost btn-sm" onclick="openSwBrief('${l.id}')">📋 Dossier</button>
      ${l.phone?`<a class="btn btn-ghost btn-sm" href="tel:${esc(l.phone)}">📞 Call</a>`:''}${mail?`<a class="btn btn-ghost btn-sm" href="${mail}">✉️ Email</a>`:''}
      <span class="spacer"></span>
      ${btn('called','Call')}${btn('emailed','Email')}${r.channels.whatsapp?btn('whatsapp','WhatsApp'):''}${btn('linkedin','LinkedIn')}
      <button class="btn btn-ghost btn-sm" onclick="openSwNote('${l.id}')">+ Note</button>
      <button class="btn btn-ghost btn-sm" onclick="openSwFollowup('${l.id}')">⏰ Follow up</button>
      <button class="btn btn-ghost btn-sm" onclick="openSwDisqualify('${l.id}')">✖ Disqualify</button>
    </div></div>`;
}
function swNearMisses(){
  const today = new Set(swToday().map(d=>d.lead_id));
  const near = swLeads().filter(l=>!today.has(l.id) && !WC.CONTACTED.includes(swStage(l))).map(l=>({l, r:swScore(l)})).filter(x=>x.r.gate.nearMiss).sort((a,b)=>b.r.opportunity-a.r.opportunity).slice(0,5);
  if(!near.length) return '';
  return `<details class="card le-near"><summary><strong>Near misses (${near.length})</strong> <span class="muted small">— shown, not hidden</span></summary>
    ${near.map(x=>`<div class="le-near-row" onclick="openSwBrief('${x.l.id}')"><span>${esc(x.l.name)} ${x.l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</span><span class="muted small">${x.r.gate.failures.map(f=>esc(f.reason)).join(' · ')}</span><strong>${x.r.opportunity}</strong></div>`).join('')}</details>`;
}
// "Tell me what to do today" — not just data.
function swTodoCard(items, cap){
  const todo = [];
  items.filter(x=>!x.d.actioned_at).forEach(x=>todo.push({t:'Call '+x.lead.name+' (#'+x.d.rank+')', go:`openSwBrief('${x.lead.id}')`}));
  const fu = swFollowupsDue(); if(fu.length) todo.push({t:fu.length+' follow-up'+(fu.length===1?'':'s')+' due'+(fu.some(f=>f.due_date<leToday())?' — some overdue':''), go:"document.querySelector('.sw-fu')&&document.querySelector('.sw-fu').scrollIntoView({block:'center'})", urgent:fu.some(f=>f.due_date<leToday())});
  swActiveOpps().slice(0,3).forEach(x=>todo.push({t:x.next+' — '+x.lead.name, go:`openSwBrief('${x.lead.id}')`}));
  swAttention().slice(0,2).forEach(x=>todo.push({t:'Check in with '+x.lead.name+' ('+x.reason+')', go:`openSwBrief('${x.lead.id}')`}));
  cap.flags.slice(0,2).forEach(f=>todo.push({t:f.text, go:"setSwdTab('performance')", urgent:f.level==='red'}));
  return `<div class="card sw-todo"><div class="card-title">What to do today</div>${todo.length?todo.map(x=>`<div class="sw-todo-row ${x.urgent?'sw-urgent':''}" onclick="${x.go}">☐ ${esc(x.t)}</div>`).join(''):'<div class="muted small">Nothing outstanding. 👌</div>'}</div>`;
}
function swFollowupCard(){
  const due = swFollowupsDue(), t = leToday(), overdue = due.filter(f=>f.due_date<t);
  return `<div class="card le-fu sw-fu ${overdue.length?'le-fu-overdue':''}"><div class="card-title">Follow-ups due</div>
    ${overdue.length?`<div class="le-overdue-banner">⚠️ ${overdue.length} overdue</div>`:''}
    ${due.length?due.map(f=>{ const late = f.due_date<t ? Math.round((new Date(t)-new Date(f.due_date))/86400000) : 0;
      return `<div class="le-fu-row"><div style="min-width:0;"><div class="le-fu-name" onclick="openSwBrief('${f.lead.id}')">${esc(f.lead.name)}</div><div class="small muted">${late?`<span style="color:var(--danger);">${late}d overdue</span>`:'Due today'} · ${esc(swStageLabel(swStage(f.lead)))}${f.note?' · '+esc(f.note):''}</div></div>
        <div style="display:flex;gap:4px;"><button class="btn btn-ghost btn-sm" onclick="openSwOutcome('${f.lead.id}','${f.id}')">Log</button><button class="btn btn-ghost btn-sm" onclick="leFollowupDone('${f.id}')">✓</button></div></div>`; }).join(''):'<div class="muted small">Nothing due.</div>'}</div>`;
}
const SW_NEXT = {'meeting':'Prepare for / follow up the meeting','supplier-application':'Complete the supplier application','approved':'Ask for a first job — offer a quick reactive fix','capability-sent':'Follow up the capability pack','dm-found':'Send capability info to the decision maker','contact-made':'Find who manages contractors','follow-up':'Follow up'};
function swActiveOpps(){
  return swLeads().map(l=>({lead:l, stage:swStage(l), o:swOpp(l.id)})).filter(x=>SW_NEXT[x.stage]).map(x=>Object.assign(x, {next:SW_NEXT[x.stage], since:leDaysSinceTs(x.o&&x.o.last_contacted_at)})).sort((a,b)=>(b.since||0)-(a.since||0));
}
function leDaysSinceTs(ts){ return ts ? Math.floor((Date.now()-new Date(ts).getTime())/86400000) : null; }
function swActiveOppsCard(){
  const a = swActiveOpps().filter(x=>['meeting','supplier-application','approved','capability-sent'].includes(x.stage));
  return `<div class="card"><div class="card-title">Active opportunities <span class="small muted">meetings · applications · approvals</span></div>
    ${a.length?a.slice(0,6).map(x=>`<div class="le-fu-row"><div style="min-width:0;"><div class="le-fu-name" onclick="openSwBrief('${x.lead.id}')">${esc(x.lead.name)}</div><div class="small muted">${esc(swStageLabel(x.stage))} · ${esc(x.next)}${x.since!=null?' · last contact '+x.since+'d ago':''}</div></div></div>`).join(''):'<div class="muted small">None yet.</div>'}</div>`;
}
function swAttention(){
  return LE.sw.opps.filter(o=>['first-job','active-account'].includes(o.stage)).map(o=>{
    const lead = leLead(o.lead_id); if(!lead) return null;
    const c = swCustomerForOpp(o), m = c ? WC.accountMetrics(c, DB.jobs||[], DB.invoices||[]) : null;
    const lastC = leDaysSinceTs(o.last_contacted_at);
    const reason = lastC!=null && lastC>30 ? 'no contact for '+lastC+' days' : m && m.daysSinceJob!=null && m.daysSinceJob>60 ? 'no job for '+m.daysSinceJob+' days' : !c ? 'not linked to a customer record' : null;
    return reason ? {lead, o, reason} : null;
  }).filter(Boolean);
}
function swAttentionCard(){
  const a = swAttention();
  return `<div class="card"><div class="card-title">Accounts needing attention</div>${a.length?a.map(x=>`<div class="le-fu-row"><div><div class="le-fu-name" onclick="openSwBrief('${x.lead.id}')">${esc(x.lead.name)}</div><div class="small muted">${esc(x.reason)}</div></div></div>`).join(''):'<div class="muted small">All accounts in touch.</div>'}</div>`;
}
function swCapacityCard(cap){
  return `<div class="card sw-cap sw-cap-card-${cap.level}"><div class="card-title">Operational capacity</div>
    <div class="le-kv"><span>Weekly capacity</span><strong>${cap.weekly||'—'} jobs</strong></div>
    <div class="le-kv"><span>Booked + recurring load</span><strong>${cap.load} jobs/wk</strong></div>
    <div class="le-kv"><span>Utilisation</span><strong class="sw-cap-${cap.level}">${cap.utilisation==null?'—':cap.utilisation+'%'}</strong></div>
    <div class="le-kv"><span>Subcontractor bench</span><span>${cap.benchServices.length?cap.benchServices.map(WC.svcLabel).map(s=>s.replace(/ \(.*\)/,'')).slice(0,4).join(', '):'none'}</span></div>
    ${cap.flags.map(f=>`<div class="small sw-flag-${f.level}">• ${esc(f.text)}</div>`).join('')}
    ${cap.assumption?'<div class="small muted mt-10">Recurring load uses an assumed '+swSettings().capacity.assumedJobsPerAccountMonth+' jobs/account/month until accounts have history.</div>':''}</div>`;
}
function swGrowth(){
  const accounts = LE.sw.opps.filter(o=>['first-job','active-account'].includes(o.stage));
  const rec = accounts.filter(o=>o.account && o.account.recurring).length;
  const usedSubs = new Set((DB.jobs||[]).flatMap(j=>(j.costLines||[]).filter(c=>/sub/i.test(c.category||'')).map(c=>c.desc))).size;
  const insurance = (DB.compliance||[]).filter(c=>/insur/i.test(c.category||'') ).every(c=>!c.expiryDate || daysUntil(c.expiryDate)>=0) && (DB.compliance||[]).some(c=>/insur/i.test(c.category||''));
  return WC.growthStage({activeAccounts:accounts.length, recurringRevenueMonthly:rec, subcontractorsUsed:Math.max(usedSubs, (DB.subcontractors||[]).length>=2?2:0), insuranceCurrent:insurance}, swSettings());
}
function swGrowthCard(g){
  return `<div class="card"><div class="card-title">Growth stage ${g.stage} · ${esc(g.label)}</div>
    <div class="small"><strong>Focus:</strong> ${g.focus.map(esc).join(' · ')}</div>
    ${g.next?`<div class="le-sec-title mt-10">Ready for stage ${g.next.stage} — ${esc(g.next.label)}?</div>`:''}
    ${g.checks.map(c=>`<label class="le-toggle"><input type="checkbox" ${c.done?'checked':''} ${c.key==='rams'||c.key==='bench'?'disabled title="Worked out from your Compliance / Subcontractors pages"':`onchange="swToggleCapability('${c.key}', this.checked)"`}> ${esc(c.label)}</label>`).join('')}
    ${g.warning?`<div class="small" style="color:var(--warning);margin-top:6px;">${esc(g.warning)}</div>`:''}</div>`;
}
async function swToggleCapability(k, v){ const s = JSON.parse(JSON.stringify(swSettings())); s.capability[k] = v; LE.sw.settings = s; try{ await LeStore.saveSettings(LE.settings); }catch(e){ toast(e.message,'⚠️'); } leInvalidate(); renderPage(); }

/* ---------- desk actions ---------- */
const SW_CH = {called:'call', emailed:'email', whatsapp:'whatsapp', linkedin:'linkedin'};
async function swSetStage(l, stage, note){
  const o = swOpp(l.id);
  if(o && o.stage===stage) return o;
  const patch = {stage, org_type:(o&&o.org_type)||swScore(l).typeId};
  if(WC.CONTACTED.includes(stage)) patch.last_contacted_at = new Date().toISOString();
  if(['contact-made','dm-found','capability-sent','meeting','supplier-application','approved','first-job','active-account'].includes(stage)) patch.replied = true;
  const res = await LeStore.upsertOpp(l.id, patch);
  await LeStore.addTouch({lead_id:l.id, biz:'sw', channel:'note', outcome:'stage:'+stage, note:note||null});
  if(['first-job','active-account'].includes(stage) && !res.customer_id) await swLinkCustomer(l);
  return res;
}
async function swMark(leadId, channel){
  const l = leLead(leadId); if(!l) return;
  try{
    await LeStore.addTouch({lead_id:l.id, biz:'sw', channel:SW_CH[channel], outcome:'sent', offer:(swScore(l).fit.entry||{}).label});
    await LeStore.markDaily(l.id, channel, 'sw');
    const st = swStage(l);
    if(!WC.CONTACTED.includes(st)) await swSetStage(l, 'introduced');
    else await LeStore.upsertOpp(l.id, {last_contacted_at:new Date().toISOString()});
    leInvalidate(); logActivity('Commercial prospect contacted ('+channel+')', l.name);
    renderPage(); renderNav(); toast(l.name+' — '+channel+' logged');
    if(!LE.sw.followups.some(f=>f.lead_id===l.id && !f.done_at)) openSwFollowup(l.id, true);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
function openSwFollowup(leadId, suggested){
  const l = leLead(leadId), days = swSettings().followUpDays;
  openModal(`<div class="modal-head"><h2>${suggested?'Schedule the follow-up?':'Follow up'} — ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p class="muted small">Commercial relationships take repeated contact. Follow-ups never use one of today's new-relationship slots.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;">${days.map(n=>`<button class="btn btn-ghost" onclick="swSaveFollowup('${l.id}',${n})">In ${n} days</button>`).join('')}</div>
      <div class="form-row"><div class="form-group"><label>Or pick a date</label><input type="date" id="sw-fu-date" min="${leToday()}"></div><div class="form-group"><label>Note</label><input type="text" id="sw-fu-note" placeholder="e.g. Ask about the supplier form"></div></div></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">${suggested?'Not now':'Cancel'}</button><button class="btn btn-gold" onclick="swSaveFollowup('${l.id}')">Save</button></div>`);
}
async function swSaveFollowup(leadId, days){
  let due = (document.getElementById('sw-fu-date')||{}).value;
  if(days){ const d = new Date(); d.setDate(d.getDate()+days); due = localDateStr(d); }
  if(!due){ toast('Pick a date','⚠️'); return; }
  try{ await LeStore.addFollowup({lead_id:leadId, biz:'sw', due_date:due, note:((document.getElementById('sw-fu-note')||{}).value||'').trim()}); closeModal(); renderPage(); renderNav(); toast('Follow-up set for '+fmtDate(due)); }catch(e){ toast(e.message,'⚠️'); }
}
function openSwNote(leadId){
  const l = leLead(leadId);
  openModal(`<div class="modal-head"><h2>Note — ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><textarea id="sw-note" placeholder="Who you spoke to, how they onboard contractors, what they need…"></textarea></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="swSaveNote('${l.id}')">Save</button></div>`);
}
async function swSaveNote(leadId){ const t = document.getElementById('sw-note').value.trim(); if(!t) return; try{ await LeStore.addTouch({lead_id:leadId, biz:'sw', channel:'note', note:t}); closeModal(); renderPage(); toast('Note saved'); }catch(e){ toast(e.message,'⚠️'); } }
const SW_DQ_REASONS = ['Uses an in-house team only','Too far / outside territory','Too small','Not a real maintenance buyer','Wrong organisation type','Already has preferred contractors — not open','Asked not to be contacted','Other'];
function openSwDisqualify(leadId){
  const l = leLead(leadId);
  openModal(`<div class="modal-head"><h2>Disqualify ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><div class="form-group"><label>Reason (feeds the quality model)</label><select id="sw-dq">${SW_DQ_REASONS.map(r=>`<option>${r}</option>`).join('')}</select></div>
      <label class="le-toggle"><input type="checkbox" id="sw-dq-dnc"> Also add to do-not-contact (both SteadyWorks and SteadyFlow)</label></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="swDisqualify('${l.id}')">Disqualify</button></div>`);
}
async function swDisqualify(leadId){
  const l = leLead(leadId), reason = document.getElementById('sw-dq').value, dnc = document.getElementById('sw-dq-dnc').checked || /not to be contacted/.test(reason);
  try{
    await swSetStage(l, 'lost', 'Disqualified: '+reason);
    await LeStore.addTouch({lead_id:l.id, biz:'sw', channel:'note', outcome:'lost', reason});
    await LeStore.markDaily(l.id, 'disqualified', 'sw');
    if(dnc) await LeStore.suppress(l, reason);
    leInvalidate(); closeModal(); renderPage(); toast('Disqualified'+(dnc?' and suppressed':''),'✖');
  }catch(e){ toast(e.message,'⚠️'); }
}
const SW_OUTCOMES = [['no_answer','No answer'],['voicemail','Voicemail'],['reply','Replied / spoke to someone'],['dm-found','Found who manages contractors'],['capability-sent','Sent capability information'],['meeting','Meeting booked'],['supplier-application','Supplier application started'],['approved','Approved as contractor'],['first-job','First job won'],['active-account','Recurring account'],['not_interested','Not interested'],['dormant','Gone quiet (dormant)']];
const SW_OUTCOME_STAGE = {reply:'contact-made', 'dm-found':'dm-found', 'capability-sent':'capability-sent', meeting:'meeting', 'supplier-application':'supplier-application', approved:'approved', 'first-job':'first-job', 'active-account':'active-account', not_interested:'lost', dormant:'dormant'};
function openSwOutcome(leadId, followupId){
  const l = leLead(leadId);
  openModal(`<div class="modal-head"><h2>Log — ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><div class="form-row"><div class="form-group"><label>Channel</label><select id="sw-o-ch">${[['call','Call'],['email','Email'],['whatsapp','WhatsApp'],['linkedin','LinkedIn'],['walk-in','Walk-in'],['supplier-application','Supplier application'],['meeting','Meeting']].map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div>
      <div class="form-group"><label>What happened</label><select id="sw-o-out" onchange="document.getElementById('sw-o-why').style.display=this.value==='not_interested'?'':'none'">${SW_OUTCOMES.map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div></div>
      <div class="form-group" id="sw-o-why" style="display:none;"><label>Why?</label><select id="sw-o-reason">${SW_DQ_REASONS.map(r=>`<option>${r}</option>`).join('')}</select></div>
      <div class="form-group"><label>Note</label><textarea id="sw-o-note" placeholder="Who manages contractors? How are they onboarded? Do they need backup suppliers?"></textarea></div></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="swSaveOutcome('${l.id}','${followupId||''}')">Save</button></div>`);
}
async function swSaveOutcome(leadId, followupId){
  const l = leLead(leadId), v = id=>document.getElementById(id).value, out = v('sw-o-out');
  try{
    await LeStore.addTouch({lead_id:l.id, biz:'sw', channel:v('sw-o-ch'), outcome:out, note:v('sw-o-note').trim()||null, reason:out==='not_interested'?v('sw-o-reason'):null});
    if(SW_OUTCOME_STAGE[out]) await swSetStage(l, SW_OUTCOME_STAGE[out]);
    else await LeStore.upsertOpp(l.id, {last_contacted_at:new Date().toISOString(), stage: WC.CONTACTED.includes(swStage(l)) ? swStage(l) : 'introduced'});
    if(followupId) await LeStore.completeFollowup(followupId);
    leInvalidate(); closeModal(); renderPage(); renderNav(); toast(out==='first-job'?l.name+' — first job 🎉':'Logged');
    if(!['not_interested','dormant','active-account'].includes(out)) openSwFollowup(l.id, true);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
// Won → becomes (or links to) a SteadyWorks customer, so its jobs, invoices and payments flow back here.
async function swLinkCustomer(l){
  if(l.mock){ return; }
  const c = swEnsureCustomer(l.name, {phone:l.phone||'', email:l.email||'', address:[l.address,l.postcode].filter(Boolean).join(', '), propertyType:'Commercial', source:'Commercial Desk', from:'the Commercial Desk'});
  c.commercial = true; c.leadId = l.id; save();
  await LeStore.upsertOpp(l.id, {customer_id:c.id});
}
async function swSelectNow(){
  if(swToday().length){ toast('Today\'s selection is already set'); return; }
  const recent = new Set(LE.sw.daily.filter(d=>d.day>=localDateStr(new Date(Date.now()-3*86400000)) && !d.actioned_at).map(d=>d.lead_id));
  const sfToday = new Set(LE.daily.filter(d=>d.day===leToday()).map(d=>d.lead_id)); // never the same organisation in both lists
  const opps = {}; LE.sw.opps.forEach(o=>opps[o.lead_id] = swOppCtx(o));
  const eligible = swLeads().filter(l=>!WC.CONTACTED.includes(swStage(l)));
  const sel = WC.selectDaily(eligible, swSettings(), Object.assign({}, swCtx(), {opps, recentlySurfaced:recent, excludeIds:sfToday}));
  if(!sel.selected.length){ toast('Nothing passes every check yet — see Near misses','ℹ️'); renderPage(); return; }
  try{ await LeStore.setDaily(sel.selected.map(x=>({day:leToday(), lead_id:x.lead.id, rank:x.rank, lead_score:x.r.opportunity, confidence:x.r.confidence, reason:x.reason, actions:{}})), 'sw'); renderPage(); toast(sel.selected.length+' selected for today'); }
  catch(e){ toast(e.message,'⚠️'); }
}
async function swRunPipeline(){
  toast('Running SteadyWorks research — a couple of minutes…','⏳');
  const res = await LeStore.invoke('run', {biz:'sw'});
  if(!res.ok){ toast(res.error||'Run failed','⚠️'); return; }
  await leReload(); toast('Run '+(res.run?res.run.phase:'started'));
}

/* ===================== DOSSIER ===================== */
function openSwBrief(leadId){
  const l = leLead(leadId); if(!l) return;
  const r = swScore(l), o = WC.outreach(l, r, swSender()), opp = swOpp(l.id);
  const sfR = (l.scope||[]).includes('sf') || l.industry!=='other' ? leScore(l) : null;
  const ds = WC.dossier(l, r, sfR);
  const stage = swStage(l);
  const flags = WC.crossSellFlags(stage, r, sfR ? leStage(l) : null, sfR);
  const sec = (t, b)=>`<div class="le-sec"><div class="le-sec-title">${t}</div>${b}</div>`;
  const copy = id=>`<button class="btn btn-ghost btn-sm" onclick="leCopy('${id}')">Copy</button>`;
  const facts = Object.entries(l.facts||{}).filter(([k,f])=>f && k!=='website.contentHash' && k!=='sw.signals' && k!=='sw.pagesRead').sort((a,b)=>a[0].localeCompare(b[0]));
  const touches = LE.sw.touches.filter(t=>t.lead_id===l.id);
  const dm = r.contact.decisionMaker;
  openModal(`<div class="modal-head"><h2>${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
  <div class="modal-body le-brief sw-root">
    <div class="le-eyebrow">STEADYWORKS COMMERCIAL PROSPECT BRIEF</div>
    <div class="le-brief-top">
      <div class="le-scorebox"><div class="le-score" style="color:${swClsColor(r.relationship.cls)}">${r.opportunity}</div><div class="le-score-sub">opportunity</div></div>
      <div class="le-scorebox"><div class="le-score">${r.confidence}%</div><div class="le-score-sub">evidence confidence</div></div>
      <div class="le-scorebox"><div class="le-score" style="font-size:18px;color:${swClsColor(r.relationship.cls)}">${r.relationship.cls}</div><div class="le-score-sub">relationship potential</div></div>
      <div class="le-scorebox"><div class="le-score">${r.demand.score}</div><div class="le-score-sub">maintenance demand</div></div>
      <div class="le-scorebox"><div class="le-score">${r.geo.distance==null?'—':r.geo.distance}</div><div class="le-score-sub">miles · ${esc(r.geo.band||'')}</div></div>
    </div>
    <div class="small muted">Opportunity = relationship ${r.breakdown.relationship} + route ${r.breakdown.route} + contact ${r.breakdown.contact} + demand signals ${r.breakdown.demand} ${r.breakdown.penalties?r.breakdown.penalties+' penalties':''} · Stage: <strong>${esc(swStageLabel(stage))}</strong> · Research ${l.researchedAt?leAgo(l.researchedAt):'not run'}${r.confidenceDetail.criticalMissing.length?' · Missing: '+r.confidenceDetail.criticalMissing.join(', '):''}</div>
    ${!r.gate.pass?`<div class="le-gate-fail"><strong>Not eligible for Today's ${swSettings().dailyQuantity}:</strong> ${r.gate.failures.map(f=>esc(f.reason)).join(' · ')}</div>`:''}
    ${ds.crossBusiness?`<div class="le-ai-note">🔗 <strong>Shared intelligence:</strong> SteadyWorks ${ds.crossBusiness.sw} · SteadyFlow ${ds.crossBusiness.sf}. ${esc(ds.crossBusiness.note)}</div>`:''}
    ${flags.map(f=>`<div class="le-ai-note">💡 ${esc(f.text)}</div>`).join('')}
    <div class="le-brief-grid"><div>
      ${sec('Company', `<div class="le-kv"><span>Type</span><span>${esc(r.typeLabel)} <a class="le-link small" onclick="openSwOrgModal('${l.id}')">change</a></span></div><div class="le-kv"><span>Area</span><span>${esc(l.area||r.geo.area)} ${esc(l.postcode||'')}</span></div>
        <div class="le-kv"><span>Website</span><span>${l.website?`<a class="le-link" target="_blank" rel="noopener" href="${esc(/^https?:/.test(l.website)?l.website:'https://'+l.website)}">${esc(LE_CORE.normaliseDomain(l.website))}</a>`:'—'}</span></div>
        <div class="le-kv"><span>Branches / sites</span><span>${ds.company.branches||'—'}</span></div><div class="le-kv"><span>Company no.</span><span>${esc(l.companyNumber||'—')} <span class="small muted">${esc(l.subscriberType)} subscriber</span></span></div>
        <div class="le-kv"><span>Travel (estimate)</span><span>${r.geo.minutes!=null?'~'+r.geo.minutes+' min':'—'} · ${r.geo.nearJobs} SteadyWorks job${r.geo.nearJobs===1?'':'s'} within ${swSettings().geo.densityMiles} mi</span></div>`)}
      ${sec('What they do', esc(ds.whatTheyDo))}
      ${sec('Property / facility footprint', ds.footprint.length?ds.footprint.map(p=>`<div class="le-kv"><span>${esc(p.label)}</span><span>${esc(String(p.value))}</span></div>${p.note?`<div class="small muted">${esc(p.note)}</div>`:''}`).join(''):'<div class="muted small">No footprint evidence yet (properties, rooms, beds, sites).</div>')}
      ${sec('Why they may need us', `<ul class="le-why">${ds.whyNeedUs.map(w=>`<li>${esc(w)}</li>`).join('')||'<li class="muted">Not enough evidence</li>'}</ul>`)}
      ${sec('Maintenance signals ('+ds.signals.length+')', ds.signals.length?ds.signals.map(s=>`<div class="le-finding"><strong>${esc(s.label)}</strong> <span class="le-chip le-chip-likely">${esc(s.category)}</span><div class="small">“${esc(s.quote)}”</div><div class="small muted">${/^https?:/.test(s.source||'')?`<a class="le-link" target="_blank" rel="noopener" href="${esc(s.source)}">${esc(LE_CORE.normaliseDomain(s.source))}</a>`:esc(s.source||'')} · ${s.checkedAt?fmtDate(s.checkedAt):''}</div></div>`).join(''):'<div class="muted small">None found yet. Signals are combined — one keyword is never treated as proof.</div>')}
      ${sec('Services to pitch', `<div class="le-kv"><span>Best entry</span><strong>${esc(ds.services.primary?ds.services.primary.label:'—')}</strong></div><div class="le-kv"><span>Expansion</span><span>${ds.services.expansion.map(e=>esc(e.label.replace(/ \(.*\)/,''))).join(' → ')}</span></div><div class="small muted">Service fit ${r.fit.score}/100</div>`)}
    </div><div>
      ${sec('Relationship goal', `<strong>${esc(ds.goal)}</strong><div class="small muted">Current contractor status: ${esc(ds.contractorStatus)}${ds.contractorStatus==='UNKNOWN'?' — ask, don\'t assume':''}</div>`)}
      ${sec('Contact', `${dm?`<div class="le-kv"><span>Best person</span><span><strong>${esc(dm.name)}</strong> ${esc(dm.role||'')} ${leStatusChip(dm.status)}</span></div><div class="small muted">Source: ${esc(dm.source||'—')}</div>`:'<div class="muted small">No named contact — never guessed. First call: find who manages contractors.</div>'}
        <div class="le-kv"><span>Phone</span><span>${l.phone?esc(l.phone)+' '+leStatusChip('VERIFIED'):leStatusChip('UNKNOWN')}</span></div><div class="le-kv"><span>Email</span><span>${l.email?esc(l.email)+' '+leStatusChip(LE_CORE.emailIsGeneric(l.email)?'LIKELY':'VERIFIED'):leStatusChip('UNKNOWN')}</span></div>
        <div class="small muted">${esc(r.channels.note)}</div>`)}
      ${sec('Best approach', `<div>${esc(o.ok?o.approach:'Research first')}</div>${LE_CORE.val(l,'sw.supplierRoute')===true?'<div class="small">Supplier / contractor application route found on their site.</div>':''}`)}
      ${o.ok?sec('Call opener '+copy('sw-call'), `<div id="sw-call" class="le-copy">${esc(o.call)}</div>`):''}
      ${o.ok&&r.channels.email?sec('Email '+copy('sw-em'), `<div id="sw-em" class="le-copy"><strong>${esc(o.email.subject)}</strong>\n\n${esc(o.email.body)}</div>`):''}
      ${o.ok?sec('LinkedIn note '+copy('sw-li'), `<div id="sw-li" class="le-copy">${esc(o.linkedin)}</div>`):''}
      ${o.ok&&o.whatsapp?sec('WhatsApp '+copy('sw-wa'), `<div id="sw-wa" class="le-copy">${esc(o.whatsapp)}</div>`):''}
      ${sec('First contact is to find out', `<ul class="le-why">${WC.QUESTIONS.map(q=>`<li>${esc(q)}</li>`).join('')}</ul>`)}
      ${o.ok?sec('Follow-up strategy', `<ul class="le-why">${o.followUp.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>`):''}
    </div></div>
    ${sec('Sources ('+facts.length+' facts)', `<table class="le-evidence"><thead><tr><th>Fact</th><th>Value</th><th>Status</th><th>Conf.</th><th>Source</th><th>Checked</th></tr></thead><tbody>
      ${facts.map(([k,f])=>`<tr><td>${esc(LE_CORE.FACT_LABELS[k]||k.replace(/^sw\./,''))}</td><td>${esc(leFactText(f))}${f.note?`<div class="small muted">${esc(f.note)}</div>`:''}</td><td>${leStatusChip(f.status)}</td><td>${Math.round((f.confidence==null?0.8:f.confidence)*100)}%</td><td class="small">${/^https?:/.test(f.source||'')?`<a class="le-link" target="_blank" rel="noopener" href="${esc(f.source)}">${esc(LE_CORE.normaliseDomain(f.source))}</a>`:esc(f.source||'—')}</td><td class="small">${f.checkedAt?fmtDate(f.checkedAt):'—'}</td></tr>`).join('')}
    </tbody></table>`)}
    ${sec('Contact history', touches.length?touches.map(t=>`<div class="le-touch"><span>${fmtDate(t.at)}</span><span>${esc(t.channel)}${t.outcome?' · '+esc(String(t.outcome).replace(/^stage:/,'→ ').replace(/_/g,' ')):''}</span><span class="muted">${esc(t.note||t.reason||'')}</span></div>`).join(''):'<div class="muted small">No contact yet.</div>')}
  </div>
  <div class="modal-foot">
    <button class="btn btn-danger" onclick="openSwDisqualify('${l.id}')">Disqualify</button>
    <button class="btn btn-ghost" onclick="swDeleteLead('${l.id}')">Delete data</button>
    <button class="btn btn-ghost" onclick="openSwOrgModal('${l.id}')">Edit / add evidence</button>
    ${!(l.scope||[]).includes('sf') ? `<button class="btn btn-ghost" title="Score this organisation for SteadyFlow digital work too" onclick="leAddScope('${l.id}','sf')">+ SteadyFlow</button>` : ''}
    ${LE.mode==='live'?`<button class="btn btn-ghost" onclick="swResearchOne('${l.id}')">🔎 Research again</button>`:''}
    <button class="btn btn-ghost" onclick="openSwFollowup('${l.id}')">⏰ Follow up</button>
    <button class="btn btn-gold" onclick="openSwOutcome('${l.id}')">Log contact</button>
  </div>`, true);
}
async function swResearchOne(id){ toast('Researching maintenance pages…','⏳'); const r = await LeStore.invoke('research', {leadId:id, biz:'sw'}); if(!r.ok){ toast(r.error||'Failed','⚠️'); return; } await leReload(true); openSwBrief(id); toast('Research updated'); }
function swDeleteLead(id){
  const l = leLead(id);
  confirmDelete('Permanently delete '+l.name+'?', 'All research, contact history and follow-ups for this organisation are deleted (both businesses). A hashed do-not-contact entry is kept so it is never rediscovered.', async ()=>{
    try{ await LeStore.deleteLead(l, true); leInvalidate(); closeModal(); renderPage(); toast('Deleted','🗑️'); }catch(e){ toast(e.message,'⚠️'); }
  });
}
// Shown inside the SteadyFlow brief: the same organisation's SteadyWorks view.
function swCrossBlock(l){
  try{
    if(!WC || !(l.scope||[]).includes('sw')) return '';
    const r = swScore(l), sf = leScore(l), cb = WC.crossBusiness(r, sf);
    return `<div class="le-ai-note">🔗 <strong>Shared intelligence:</strong> SteadyWorks ${r.opportunity} (${r.relationship.cls}) · SteadyFlow ${sf.leadScore}. ${esc(cb.note)} <a class="le-link" onclick="closeModal();navigate('sw-desk');setTimeout(()=>openSwBrief('${l.id}'),200)">Open SteadyWorks brief</a></div>`;
  }catch(e){ return ''; }
}

/* ---------- add / edit organisation (manual evidence) ---------- */
function openSwOrgModal(id){
  const l = id ? leLead(id) : null, o = l ? swOpp(l.id) : null;
  const type = l ? swScore(l).typeId : 'property-management';
  const sigs = l ? WC.signalsOf(l).map(s=>s.key) : [];
  const dm = l && (l.contacts||[])[0] || {};
  const f = k=>l && l.facts && l.facts[k] ? l.facts[k].value : '';
  openModal(`<div class="modal-head"><h2>${l?'Edit '+esc(l.name):'Add an organisation'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
  <div class="modal-body">
    <div class="form-row"><div class="form-group"><label>Organisation name *</label><input type="text" id="sw-f-name" value="${l?esc(l.name):''}"></div>
      <div class="form-group"><label>Type</label><select id="sw-f-type">${WC.ORG_TYPES.map(t=>`<option value="${t.id}" ${type===t.id?'selected':''}>${esc(t.label)}</option>`).join('')}</select></div></div>
    <div class="form-row"><div class="form-group"><label>Website</label><input type="text" id="sw-f-web" value="${l?esc(l.website||''):''}"></div><div class="form-group"><label>Postcode</label><input type="text" id="sw-f-pc" value="${l?esc(l.postcode||''):''}"></div></div>
    <div class="form-row"><div class="form-group"><label>Phone (published)</label><input type="tel" id="sw-f-ph" value="${l?esc(l.phone||''):''}"></div><div class="form-group"><label>Email (published only)</label><input type="email" id="sw-f-em" value="${l?esc(l.email||''):''}"></div></div>
    <div class="form-row"><div class="form-group"><label>Companies House no.</label><input type="text" id="sw-f-ch" value="${l?esc(l.companyNumber||''):''}"></div>
      <div class="form-group"><label>Subscriber type (PECR)</label><select id="sw-f-sub">${[['corporate','Company'],['individual','Sole trader / partnership'],['unknown','Unknown']].map(([v,t])=>`<option value="${v}" ${(l?l.subscriberType:'unknown')===v?'selected':''}>${t}</option>`).join('')}</select></div></div>
    <div class="form-row"><div class="form-group"><label>Contact name</label><input type="text" id="sw-f-dm" value="${esc(dm.name||'')}" placeholder="Only a real, sourced name"></div><div class="form-group"><label>Role</label><input type="text" id="sw-f-role" value="${esc(dm.role||'')}" placeholder="e.g. Property Manager"></div></div>
    <div class="form-row"><div class="form-group"><label>Where you found the name</label><input type="text" id="sw-f-src" value="${esc(dm.source||'')}"></div><div class="form-group"><label>LinkedIn URL (manual)</label><input type="text" id="sw-f-li" value="${esc(dm.linkedin||'')}"></div></div>
    <div class="le-sec-title mt-10">Maintenance evidence you've seen yourself <span class="small muted">— saved with source "manual" and today's date</span></div>
    <div class="sw-sig-grid">${WC.SIGNALS.filter(s=>s.key!=='inhouse').map(s=>`<label class="le-toggle"><input type="checkbox" id="sw-s-${s.key}" ${sigs.includes(s.key)?'checked':''}> ${esc(s.label)}</label>`).join('')}</div>
    <div class="le-manual-grid mt-10">
      <div class="form-group"><label>Properties managed</label><input type="number" min="0" id="sw-n-portfolioSize" value="${f('sw.portfolioSize')}"></div>
      <div class="form-group"><label>Rooms</label><input type="number" min="0" id="sw-n-rooms" value="${f('sw.rooms')}"></div>
      <div class="form-group"><label>Beds</label><input type="number" min="0" id="sw-n-beds" value="${f('sw.beds')}"></div>
      <div class="form-group"><label>Sites / branches</label><input type="number" min="0" id="sw-n-sites" value="${f('sw.sites')}"></div>
      <div class="form-group"><label>Contractor status</label><select id="sw-f-cs">${['UNKNOWN','IN-HOUSE','OUTSOURCED','MIXED','EVIDENCE OF EXTERNAL CONTRACTORS'].map(x=>`<option ${(f('sw.contractorStatus')||'UNKNOWN')===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="form-group"><label>Hiring property / maintenance staff</label><select id="sw-f-hire"><option value="">Unknown</option><option value="1" ${f('sw.hiringPropertyRoles')===true?'selected':''}>Yes</option></select></div>
      <div class="form-group"><label>New branch / premises</label><select id="sw-f-branch"><option value="">Unknown</option><option value="1" ${f('sw.newBranch')===true?'selected':''}>Yes</option></select></div>
      <div class="form-group"><label>Companies House status</label><select id="sw-f-status"><option value="">Unknown</option>${['active','dissolved'].map(x=>`<option ${f('company.status')===x?'selected':''}>${x}</option>`).join('')}</select></div>
    </div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="swSaveOrg('${l?l.id:''}')">${l?'Save':'Add organisation'}</button></div>`, true);
}
async function swSaveOrg(id){
  if(!requireField('sw-f-name','Name is required')) return;
  const v = x=>(document.getElementById(x).value||'').trim();
  const l = id ? leLead(id) : null, now = new Date().toISOString();
  const facts = Object.assign({}, l ? l.facts : {});
  const manualSig = WC.SIGNALS.filter(s=>s.key!=='inhouse' && document.getElementById('sw-s-'+s.key).checked).map(s=>({key:s.key, label:s.label, category:s.category, weight:s.weight, services:s.services, snippet:'Checked manually by '+(CURRENT_USER_EMAIL||'you'), source:'manual', checkedAt:now, status:'VERIFIED', confidence:0.85}));
  const existing = WC.signalsOf(l||{facts:{}}).filter(s=>s.source!=='manual' && !manualSig.some(m=>m.key===s.key));
  const allSig = existing.concat(manualSig);
  if(allSig.length) facts['sw.signals'] = LE_CORE.makeFact(allSig, 'VERIFIED', 0.9, 'manual', now, allSig.length+' signals'); else delete facts['sw.signals'];
  [['portfolioSize','Properties managed'],['rooms','Rooms'],['beds','Beds'],['sites','Sites']].forEach(([k])=>{ const raw = v('sw-n-'+k), key = 'sw.'+k;
    if(raw==='') { if(facts[key] && facts[key].source==='manual') delete facts[key]; return; }
    if(!facts[key] || facts[key].source==='manual' || Number(facts[key].value)!==Number(raw)) facts[key] = LE_CORE.makeFact(Number(raw), 'LIKELY', 0.75, 'manual', now, 'Entered by you (what they told you / what their site says)'); });
  const cs = v('sw-f-cs'); facts['sw.contractorStatus'] = LE_CORE.makeFact(cs, cs==='UNKNOWN'?'UNKNOWN':'LIKELY', cs==='UNKNOWN'?0:0.8, 'manual', now);
  if(v('sw-f-hire')) facts['sw.hiringPropertyRoles'] = LE_CORE.makeFact(true, 'VERIFIED', 0.85, 'manual', now); else if(facts['sw.hiringPropertyRoles'] && facts['sw.hiringPropertyRoles'].source==='manual') delete facts['sw.hiringPropertyRoles'];
  if(v('sw-f-branch')) facts['sw.newBranch'] = LE_CORE.makeFact(true, 'VERIFIED', 0.8, 'manual', now);
  if(v('sw-f-status')) facts['company.status'] = LE_CORE.makeFact(v('sw-f-status'), 'VERIFIED', 0.95, 'manual', now, 'You checked Companies House');
  const contacts = (l ? (l.contacts||[]).slice(1) : []);
  if(v('sw-f-dm')) contacts.unshift({name:v('sw-f-dm'), role:v('sw-f-role'), status:v('sw-f-src')?'VERIFIED':'LIKELY', confidence:v('sw-f-src')?0.9:0.6, source:v('sw-f-src')||'manual', linkedin:v('sw-f-li'), checkedAt:now});
  let web = v('sw-f-web'); if(web && !/^https?:\/\//i.test(web)) web = 'https://'+web;
  if(web && !facts['website.reachable']) facts['website.reachable'] = LE_CORE.makeFact(true, 'LIKELY', 0.7, 'manual', now);
  const patch = {name:v('sw-f-name'), swType:v('sw-f-type'), website:web, postcode:v('sw-f-pc').toUpperCase(), phone:v('sw-f-ph'), email:v('sw-f-em'), companyNumber:v('sw-f-ch'), subscriberType:v('sw-f-sub'), facts, contacts,
    scope: Array.from(new Set(((l&&l.scope)||[]).concat(['sw'])))};
  if(patch.postcode && (!l || l.postcode!==patch.postcode)){
    try{ const j = await (await fetch('https://api.postcodes.io/postcodes/'+encodeURIComponent(patch.postcode))).json(); if(j && j.result){ patch.lat = j.result.latitude; patch.lng = j.result.longitude; patch.area = j.result.admin_district; } }catch(e){}
  }
  try{
    let lead;
    if(l){ await LeStore.updateLead(l.id, patch); lead = l; }
    else lead = await LeStore.insertLead(Object.assign({stage:'discovered', industry:WC.industryFromType(patch.swType), sources:['manual'], discoveredAt:now, researchedAt: allSig.length ? now : null, mock: LE.mode==='sandbox'}, patch));
    await LeStore.upsertOpp(lead.id, {org_type:patch.swType});
    leInvalidate(); closeModal(); renderPage(); toast(l?'Updated':'Organisation added');
    if(!l && LE.mode==='live' && web) swResearchOne(lead.id);
  }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}

/* ===================== PROSPECTS ===================== */
function swProspectsView(){
  const F = SWD.filters;
  const opt = (list, cur)=>list.map(([v,t])=>`<option value="${v}" ${String(cur)===String(v)?'selected':''}>${esc(t)}</option>`).join('');
  const list = swFiltered();
  return `<div class="card le-search"><div class="le-search-grid">
      <div class="form-group"><label>Organisation type</label><select onchange="SWD.filters.type=this.value;renderPage()"><option value="">All</option>${opt(WC.ORG_TYPES.map(t=>[t.id,t.label]), F.type)}</select></div>
      <div class="form-group"><label>Relationship potential</label><select onchange="SWD.filters.cls=this.value;renderPage()"><option value="">Any</option>${opt([['VERY HIGH','Very high'],['HIGH','High +'],['MEDIUM','Medium +']], F.cls)}</select></div>
      <div class="form-group"><label>Entry service</label><select onchange="SWD.filters.service=this.value;renderPage()"><option value="">Any</option>${opt(WC.SERVICES.map(s=>[s.id,s.label]), F.service)}</select></div>
      <div class="form-group"><label>Min opportunity</label><select onchange="SWD.filters.minOpp=Number(this.value);renderPage()">${opt([[0,'Any'],[50,'50+'],[65,'65+'],[80,'80+']], F.minOpp)}</select></div>
      <div class="form-group"><label>Near postcode / town</label><input type="text" value="${esc(F.centre)}" placeholder="e.g. RM1 or Romford" onchange="swSetCentre(this.value)"></div>
      <div class="form-group"><label>Radius</label><select onchange="SWD.filters.radius=Number(this.value);renderPage()">${opt([[0,'Any'],[2,'2 mi'],[5,'5 mi'],[10,'10 mi']], F.radius)}</select></div>
      <div class="form-group"><label>Stage</label><select onchange="SWD.filters.stage=this.value;renderPage()"><option value="">Open (not rejected)</option><option value="rejected" ${F.stage==='rejected'?'selected':''}>Rejected</option>${opt(WC.STAGES.map(s=>[s.id,s.label]), F.stage)}</select></div>
      <div class="form-group"><label>Search</label><input type="text" value="${esc(F.q)}" oninput="SWD.filters.q=this.value;clearTimeout(window._swQ);window._swQ=setTimeout(renderPage,250)"></div>
    </div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;"><span class="small muted">${list.length} organisation${list.length===1?'':'s'}</span><span class="spacer"></span>
      ${LE.mode==='live'?`<button class="btn btn-ghost btn-sm" onclick="swRunPipeline()">▶ Discover & research</button>`:''}<button class="btn btn-gold btn-sm" onclick="openSwOrgModal()">+ Add organisation</button></div>
    <p class="small muted" style="margin-top:6px;">Discovery: Companies House (by SIC code) and OpenStreetMap, filtered to your territory. Research reads each organisation's own repairs / landlord / supplier / careers pages — never portals or LinkedIn.</p></div>
    <div class="le-card-grid">${list.slice(0,120).map(swSmallCard).join('')||'<div class="card muted">No organisations match.</div>'}</div>`;
}
async function swSetCentre(v){
  SWD.filters.centre = v; SWD.filters.centreLL = null;
  if(v.trim()){ try{ const q = v.trim(); const url = /\d/.test(q) ? (q.length<=4 ? 'outcodes/'+encodeURIComponent(q) : 'postcodes/'+encodeURIComponent(q)) : 'places?q='+encodeURIComponent(q)+'&limit=1';
    const j = await (await fetch('https://api.postcodes.io/'+url)).json(); const r = Array.isArray(j.result)?j.result[0]:j.result; if(r) SWD.filters.centreLL = [r.latitude, r.longitude]; }catch(e){} }
  renderPage();
}
function swFiltered(){
  const F = SWD.filters, q = F.q.trim().toLowerCase(), rank = WC.CLASS_RANK;
  return swLeads().filter(l=>{
    const r = swScore(l), st = swStage(l);
    if(F.type && r.typeId!==F.type) return false;
    if(F.stage ? st!==F.stage : st==='rejected') return false;
    if(F.cls && (rank[r.relationship.cls]||0) < (rank[F.cls]||0)) return false;
    if(F.service && !(r.fit.entry && r.fit.entry.id===F.service)) return false;
    if(F.minOpp && r.opportunity<F.minOpp) return false;
    if(q && !(String(l.name).toLowerCase().includes(q) || String(l.website||'').toLowerCase().includes(q))) return false;
    if(F.radius && F.centreLL){ if(l.lat==null) return false; if(WC.miles(F.centreLL,[l.lat,l.lng])>F.radius) return false; }
    return true;
  }).sort((a,b)=>swScore(b).opportunity-swScore(a).opportunity);
}
function swSmallCard(l){
  const r = swScore(l), st = swStage(l);
  return `<div class="card le-small ${l.mock?'le-mock':''}" onclick="openSwBrief('${l.id}')">
    <div class="le-small-top"><span class="le-small-score" style="color:${swClsColor(r.relationship.cls)}">${r.opportunity}</span><span class="le-small-band">${r.relationship.cls}</span><span class="spacer"></span><span class="small muted">${r.confidence}% conf.</span></div>
    <div class="le-small-name">${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</div>
    <div class="small muted">${esc(r.typeLabel)} · ${esc(l.area||r.geo.area)}${r.geo.distance!=null?' · '+r.geo.distance+' mi':''}</div>
    <div class="le-small-metrics"><span>Demand ${r.demand.score}${r.demand.corroborated?'':' ⚠'}</span><span>Footprint ${r.footprint.score==null?'?':r.footprint.score}</span></div>
    <div class="le-small-opp"><span class="le-label">Entry</span> ${esc(r.fit.entry?r.fit.entry.label.replace(/ \(.*\)/,''):'—')}</div>
    <div class="small">${esc(r.goal.label)}</div>
    <div class="le-small-foot"><span class="le-stage-pill">${esc(swStageLabel(st))}</span>${r.disqualifications.length?`<span class="small" style="color:var(--danger);">${esc(r.disqualifications[0].reason)}</span>`:''}</div>
  </div>`;
}

/* ===================== RELATIONSHIPS (16-stage CRM) ===================== */
function swRelView(){
  const leads = swLeads();
  const cols = WC.STAGES.map(st=>{
    const items = leads.filter(l=>swStage(l)===st.id).sort((a,b)=>swScore(b).opportunity-swScore(a).opportunity);
    return `<div class="kanban-col ${st.id==='lost'||st.id==='dormant'?'lost-col':''}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="swDrop(event,'${st.id}')">
      <div class="kanban-col-head"><span>${st.label} (${items.length})</span></div>
      ${items.slice(0,50).map(l=>{ const r = swScore(l); return `<div class="kanban-card le-kcard" draggable="true" ondragstart="window._swDrag='${l.id}';this.classList.add('dragging')" onclick="openSwBrief('${l.id}')">
        <div class="kc-name">${esc(l.name)} ${l.mock?'<span class="le-chip le-chip-mock">MOCK</span>':''}</div><div class="kc-meta">${esc(r.typeLabel)} · ${esc(l.area||'')}</div>
        <div class="kc-row"><span style="color:${swClsColor(r.relationship.cls)};font-weight:800;">${r.opportunity}</span><span class="small muted">${esc(r.relationship.cls)}</span></div></div>`; }).join('')||'<div class="muted small" style="padding:8px 4px;">—</div>'}
    </div>`;
  }).join('');
  return `<div class="kanban le-kanban sw-kanban">${cols}</div><p class="small muted mt-10">A commercial relationship takes many touches — this is not the SteadyFlow sales pipeline. Moving a card to First Job or Active Account links it to a SteadyWorks customer so its jobs, invoices and payments feed Accounts and Targets.</p>`;
}
async function swDrop(ev, stageId){
  ev.currentTarget.classList.remove('drag-over');
  const l = leLead(window._swDrag); window._swDrag = null; if(!l) return;
  try{ await swSetStage(l, stageId, 'Moved on the board'); leInvalidate(); renderPage(); toast('Moved to '+swStageLabel(stageId)); }catch(e){ toast(e.message,'⚠️'); }
}

/* ===================== ACCOUNTS ===================== */
function swAccountsView(){
  const accts = LE.sw.opps.filter(o=>['first-job','active-account'].includes(o.stage) || o.customer_id).map(o=>({o, lead:leLead(o.lead_id)})).filter(x=>x.lead);
  if(!accts.length) return `<div class="card">${emptyBlock('No commercial accounts yet. When a relationship reaches First Job it appears here, linked to its SteadyWorks customer, jobs and invoices.','Open Relationships',"setSwdTab('relationships')",'🤝')}</div>`;
  return `<div class="le-card-grid sw-accounts">${accts.map(({o, lead})=>{
    const c = swCustomerForOpp(o), m = c ? WC.accountMetrics(c, DB.jobs||[], DB.invoices||[]) : null;
    const r = swScore(lead), used = (o.account&&o.account.servicesUsed)||[];
    const xs = WC.crossSell(r.typeId, used, swSettings());
    const sfFlags = WC.crossSellFlags(o.stage, r, null, (lead.scope||[]).includes('sf')||lead.industry!=='other' ? leScore(lead) : null);
    return `<div class="card sw-account ${lead.mock?'le-mock':''}">
      <div class="le-small-top"><strong class="le-small-name" style="margin:0;">${esc(lead.name)}</strong><span class="spacer"></span><span class="le-stage-pill">${esc(swStageLabel(o.stage))}</span></div>
      <div class="small muted">${esc(r.typeLabel)} · ${esc(lead.area||'')} · relationship <strong>${m?m.strength:'—'}</strong>${o.account&&o.account.recurring?' · recurring':''}</div>
      ${m?`<div class="sw-acct-grid"><div><span>Jobs</span><strong>${m.completed}/${m.jobs}</strong></div><div><span>Revenue</span><strong>${leMoney(m.revenue)}</strong></div><div><span>Profit</span><strong>${leMoney(m.profit)}${m.margin!=null?' ('+m.margin+'%)':''}</strong></div>
        <div><span>Avg pay</span><strong>${m.avgPayDays==null?'—':m.avgPayDays+'d'}</strong></div><div><span>Last job</span><strong>${m.lastJob?fmtDate(m.lastJob):'—'}</strong></div><div><span>Properties</span><strong>${m.properties.length}</strong></div></div>`
        :`<div class="le-gate-fail">Not linked to a customer yet. <a class="le-link" onclick="swLinkCustomerById('${lead.id}')">Create / link customer</a></div>`}
      <div class="small"><span class="le-label">Services used</span> ${used.length?used.map(WC.svcLabel).map(esc).join(' · '):'<span class="muted">not recorded</span>'}</div>
      ${xs.length?`<div class="small"><span class="le-label">Cross-sell</span> ${xs.map(s=>esc(s.label.replace(/ \(.*\)/,''))).join(' · ')}</div>`:''}
      ${sfFlags.map(f=>`<div class="small" style="color:var(--teal);">💡 ${esc(f.text)}</div>`).join('')}
      ${o.account&&o.account.issues?`<div class="small"><span class="le-label">Issues</span> ${esc(o.account.issues)}</div>`:''}
      <div class="small muted">Last contact ${o.last_contacted_at?leAgo(o.last_contacted_at):'never'}</div>
      <div class="le-small-actions"><button class="btn btn-ghost btn-sm" onclick="openSwAccount('${lead.id}')">Edit account</button><button class="btn btn-ghost btn-sm" onclick="openSwOutcome('${lead.id}')">Log contact</button><button class="btn btn-ghost btn-sm" onclick="openSwBrief('${lead.id}')">Dossier</button>${c?`<button class="btn btn-ghost btn-sm" onclick="navigate('customers')">Customer</button>`:''}</div>
    </div>`; }).join('')}</div>`;
}
async function swLinkCustomerById(id){ const l = leLead(id); await swLinkCustomer(l); leInvalidate(); renderPage(); toast(l.mock?'MOCK organisations are not added to your real customers':'Linked to customer '+l.name); }
function openSwAccount(id){
  const l = leLead(id), o = swOpp(id)||{}, a = o.account||{};
  openModal(`<div class="modal-head"><h2>Account — ${esc(l.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><div class="le-sec-title">Services used</div><div class="sw-sig-grid">${WC.SERVICES.map(s=>`<label class="le-toggle"><input type="checkbox" id="sw-a-${s.id}" ${(a.servicesUsed||[]).includes(s.id)?'checked':''}> ${esc(s.label)}</label>`).join('')}</div>
      <label class="le-toggle mt-10"><input type="checkbox" id="sw-a-rec" ${a.recurring?'checked':''}> Recurring account (regular work, not one-off)</label>
      <label class="le-toggle"><input type="checkbox" id="sw-a-em" ${a.emergency?'checked':''}> Expects emergency / fast response</label>
      <div class="form-group mt-10"><label>Issues</label><textarea id="sw-a-iss">${esc(a.issues||'')}</textarea></div>
      <div class="form-group"><label>Opportunities / notes</label><textarea id="sw-a-opp">${esc(a.notes||'')}</textarea></div></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="swSaveAccount('${id}')">Save</button></div>`);
}
async function swSaveAccount(id){
  const a = {servicesUsed:WC.SERVICES.filter(s=>document.getElementById('sw-a-'+s.id).checked).map(s=>s.id), recurring:document.getElementById('sw-a-rec').checked, emergency:document.getElementById('sw-a-em').checked,
    issues:document.getElementById('sw-a-iss').value.trim(), notes:document.getElementById('sw-a-opp').value.trim()};
  try{ await LeStore.upsertOpp(id, {account:a}); leInvalidate(); closeModal(); renderPage(); toast('Account saved'); }catch(e){ toast(e.message,'⚠️'); }
}

/* ===================== TERRITORY MAP ===================== */
const SW_MAP_FILTERS = [['all','All prospects'],['vh','Very high'],['ready','Ready to contact'],['accounts','Accounts'],['jobs','Show my jobs']];
function swMapView(){
  const G = swSettings().geo;
  return `<div class="le-chips">${SW_MAP_FILTERS.map(([k,t])=>`<button class="le-chipbtn ${SWD.mapFilter===k?'active':''}" onclick="SWD.mapFilter='${k}';renderPage()">${t}</button>`).join('')}</div>
    <div class="card" style="padding:0;overflow:hidden;"><div id="sw-map" style="height:580px;"></div></div>
    <p class="small muted mt-10">Rings: core ${G.coreMiles} mi · secondary ${G.secondaryMiles} mi · maximum ${G.maxMiles} mi from ${esc(G.basePostcode||'your base (not set)')}. Grey dots are your SteadyWorks jobs — prospects near them build density. Map data © OpenStreetMap; no Google data on this map.</p>`;
}
function swDrawMap(){
  const el = document.getElementById('sw-map'); if(!el || !window.L) return;
  const G = swSettings().geo, map = L.map('sw-map');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'© OpenStreetMap contributors'}).addTo(map);
  const pts = [];
  if(G.base && G.base.lat!=null){
    const b = [G.base.lat, G.base.lng]; pts.push(b);
    [[G.maxMiles,'#6B7280'],[G.secondaryMiles,'#F59E0B'],[G.coreMiles,'#E11D2A']].forEach(([mi,c])=>L.circle(b, {radius:mi*1609.34, color:c, weight:1, fillOpacity:0.03}).addTo(map));
    L.marker(b).addTo(map).bindPopup('Base: '+esc(G.basePostcode||''));
  }
  swJobPoints().forEach(p=>L.circleMarker([p.lat,p.lng], {radius:4, color:'#9CA0AE', fillOpacity:.6, weight:1}).addTo(map).bindPopup('Job: '+esc(p.job.customerName||'')+(p.account?' (account)':'')));
  swLeads().filter(l=>l.lat!=null).forEach(l=>{
    const r = swScore(l), st = swStage(l), f = SWD.mapFilter;
    if(st==='rejected' && f!=='all') return;
    if(f==='vh' && r.relationship.cls!=='VERY HIGH') return;
    if(f==='ready' && st!=='ready') return;
    if(f==='accounts' && !['first-job','active-account'].includes(st)) return;
    const color = ['first-job','active-account'].includes(st) ? '#22C55E' : r.relationship.cls==='VERY HIGH' ? '#FF6B4A' : r.relationship.cls==='HIGH' ? '#FF9A9F' : '#6B7280';
    L.circleMarker([l.lat,l.lng], {radius:r.relationship.cls==='VERY HIGH'?9:7, color, fillColor:color, fillOpacity:.8, weight:2}).addTo(map)
      .bindPopup(`<strong>${esc(l.name)}</strong>${l.mock?' (MOCK)':''}<br>${esc(r.typeLabel)} · ${r.opportunity} · ${esc(r.relationship.cls)}<br><a href="#" onclick="openSwBrief('${l.id}');return false;">Dossier</a>`);
    pts.push([l.lat,l.lng]);
  });
  if(pts.length) map.fitBounds(pts, {padding:[30,30], maxZoom:12}); else map.setView([51.56, 0.15], 10);
  setTimeout(()=>map.invalidateSize(), 60);
}

/* ===================== PERFORMANCE: targets, funnel, capacity, quality model ===================== */
function swRevenueSplit(start, end){
  const out = {residential:0, oneoff:0, recurring:0};
  const recurringCust = new Set(LE.sw.opps.filter(o=>o.customer_id && (o.account&&o.account.recurring || o.stage==='active-account')).map(o=>o.customer_id));
  let pays = [];
  try{ pays = tgLivePayments(DB).filter(p=>p.biz==='sw' && p.date>=start && p.date<=end); }catch(e){ pays = []; }
  pays.forEach(p=>{
    let cust = null, job = null;
    const [kind, id] = String(p.sourceKey||'').split(':');
    if(kind==='inv'){ const inv = (DB.invoices||[]).find(i=>i.id===id); if(inv){ job = (DB.jobs||[]).find(j=>j.id===inv.jobId); cust = (DB.customers||[]).find(c=>c.id===(inv.customerId||(job&&job.customerId))); } }
    if(!cust && p.customer) cust = (DB.customers||[]).find(c=>String(c.name||'').toLowerCase()===String(p.customer).toLowerCase());
    const commercial = (cust && (cust.commercial || cust.propertyType==='Commercial')) || (job && job.propertyType==='Commercial');
    const amt = Number(p.amount)||0;
    if(!commercial) out.residential += amt; else if(cust && recurringCust.has(cust.id)) out.recurring += amt; else out.oneoff += amt;
  });
  return out;
}
function swPerfView(){
  const today = leToday(), wk = localDateStr(new Date(Date.now()-((new Date().getDay()+6)%7)*86400000)), mo = today.slice(0,8)+'01';
  const W = swRevenueSplit(wk, today), M = swRevenueSplit(mo, today);
  const accounts = LE.sw.opps.filter(o=>['first-job','active-account'].includes(o.stage));
  const metrics = accounts.map(o=>swCustomerForOpp(o)).filter(Boolean).map(c=>WC.accountMetrics(c, DB.jobs||[], DB.invoices||[]));
  const totJobs = metrics.reduce((s,m)=>s+m.jobs,0), totRev = metrics.reduce((s,m)=>s+m.revenue,0), totProfit = metrics.reduce((s,m)=>s+m.profit,0);
  const pipeline = swLeads().filter(l=>['meeting','supplier-application','approved','capability-sent','dm-found'].includes(swStage(l))).length;
  let tgt = null; try{ tgt = tgState(DB,'sw'); }catch(e){}
  const kpi = (l,v,s)=>`<div class="card le-kpi"><div class="le-kpi-label">${l}</div><div class="le-kpi-val">${v}</div>${s?`<div class="small muted">${s}</div>`:''}</div>`;
  // relationship funnel from stage history
  const hist = {};
  LE.sw.touches.forEach(t=>{ if(String(t.outcome||'').startsWith('stage:')) (hist[t.lead_id] = hist[t.lead_id]||[]).push(t.outcome.slice(6)); });
  LE.sw.opps.forEach(o=>{ (hist[o.lead_id] = hist[o.lead_id]||[]).push(o.stage); });
  const funnel = WC.relationshipFunnel(Object.values(hist), swSettings().assumptions.minSampleForObserved);
  const cap = swCtx().capacity, g = swGrowth();
  // quality model: conversion by dimension
  const dims = [['Organisation type', l=>swScore(l).typeLabel], ['Relationship class', l=>swScore(l).relationship.cls], ['Entry service', l=>(swScore(l).fit.entry||{}).label||'—'], ['Area', l=>l.area||swScore(l).geo.area], ['Contractor status', l=>swScore(l).contractorStatus]];
  const dim = dims.find(d=>d[0]===SWD.perfDim) || dims[0];
  const rows = swLeads().map(l=>{ const h = hist[l.id]||[]; const contacted = LE.sw.touches.some(t=>t.lead_id===l.id && ['call','email','whatsapp','linkedin','walk-in'].includes(t.channel));
    return {key:dim[1](l), contacted, replied:h.some(s=>['contact-made','dm-found','capability-sent','meeting','supplier-application','approved','first-job','active-account'].includes(s)), meeting:h.some(s=>['meeting','supplier-application','approved','first-job','active-account'].includes(s)), won:h.some(s=>['first-job','active-account'].includes(s)), value:0}; });
  const seg = LE_CORE.conversionBy(rows, swSettings().assumptions.minSampleForObserved);
  const pct = x=>x==null?'—':Math.round(x*100)+'%';
  return `<div class="le-kpis le-kpis-4">
      ${kpi('This week — total', leMoney(W.residential+W.oneoff+W.recurring), tgt?'Target '+leMoney(tgt.target)+' · level '+tgt.level:'')}
      ${kpi('This week — commercial', leMoney(W.oneoff+W.recurring), 'recurring '+leMoney(W.recurring))}
      ${kpi('This month — commercial', leMoney(M.oneoff+M.recurring), 'residential '+leMoney(M.residential))}
      ${kpi('Recurring commercial (month)', leMoney(M.recurring), accounts.length+' active account'+(accounts.length===1?'':'s'))}
    </div>
    <div class="le-kpis le-kpis-4">
      ${kpi('Relationship pipeline', pipeline, 'decision maker → approved')}${kpi('Jobs / account', accounts.length?Math.round(totJobs/Math.max(1,metrics.length)*10)/10:'—')}
      ${kpi('Revenue / account', metrics.length?leMoney(totRev/metrics.length):'—')}${kpi('Profit / account', metrics.length?leMoney(totProfit/metrics.length):'—')}
    </div>
    <div class="grid grid-2">
      <div class="card"><div class="card-title">Relationship conversion <span class="small muted">no rates are invented — each needs ${swSettings().assumptions.minSampleForObserved}+ at the previous step</span></div>
        ${funnel.map(f=>`<div class="le-funnel-row"><div class="le-funnel-label">${esc(f.label)}</div><div class="le-funnel-bar"><div style="width:${Math.max(2, funnel[0].n?f.n/funnel[0].n*100:0)}%"></div></div><div class="le-funnel-n">${f.n}</div></div>
          ${f.rate!=null?`<div class="small muted" style="margin:-4px 0 8px;text-align:right;">${f.sufficient?pct(f.rate)+' ('+pct(f.ci[0])+'–'+pct(f.ci[1])+')':'rate: insufficient data ('+f.n+'/'+funnel[funnel.indexOf(f)-1].n+')'}</div>`:''}`).join('')}
      </div>
      <div class="card"><div class="card-title">Revenue split <span class="small muted">from your Targets ledger (money received)</span></div>
        ${[['Residential / direct', W.residential, M.residential],['Commercial one-off', W.oneoff, M.oneoff],['Commercial recurring', W.recurring, M.recurring]].map(([k,w,m])=>`<div class="le-kv"><span>${k}</span><span>${leMoney(w)} this week · <strong>${leMoney(m)}</strong> this month</span></div>`).join('')}
        <p class="small muted mt-10">Commercial = customer marked commercial (accounts are, automatically) or a Commercial job. Recurring = an account you've marked recurring or at Active Account.</p></div>
    </div>
    <div class="grid grid-2 mt-10">${swCapacityCard(cap)}${swGrowthCard(g)}</div>
    <div class="card mt-10"><div class="card-title">Commercial quality model <span class="small muted">rule-based today; learns as outcomes are logged</span></div>
      <div class="le-chips">${dims.map(d=>`<button class="le-chipbtn ${SWD.perfDim===d[0]?'active':''}" onclick="SWD.perfDim='${d[0]}';renderPage()">${d[0]}</button>`).join('')}</div>
      <table class="le-evidence"><thead><tr><th>${esc(dim[0])}</th><th>Contacted</th><th>Conversation rate</th><th>Supplier-stage rate (90% range)</th><th>Became account</th><th></th></tr></thead><tbody>
      ${seg.filter(s=>s.contacted).map(s=>`<tr><td>${esc(s.key)}</td><td>${s.contacted}</td><td>${pct(s.replyRate)}</td><td>${pct(s.meetingRate)} <span class="small muted">(${pct(s.ci[0])}–${pct(s.ci[1])})</span></td><td>${pct(s.winRate)}</td><td>${s.sufficient?'':'<span class="le-chip le-chip-unk">insufficient data</span>'}</td></tr>`).join('')||'<tr><td colspan="6" class="muted">No contacted organisations yet.</td></tr>'}
      </tbody></table>
      <p class="small muted mt-10">Annual account values are not estimated until accounts have real job history — relationship classes are used instead.</p></div>`;
}

/* ===================== SETTINGS ===================== */
function swSettingsView(){
  const s = swSettings(), T = s.thresholds, W = s.weights, R = s.rpWeights, G = s.geo, C = s.capacity;
  const num = (id, v, step, min, max)=>`<input type="number" id="${id}" value="${v}" step="${step||1}" ${min!=null?`min="${min}"`:''} ${max!=null?`max="${max}"`:''}>`;
  return `<div class="grid grid-2">
    <div class="card"><div class="card-title">Territory</div>
      <div class="form-row"><div class="form-group"><label>Base postcode</label><input type="text" id="sws-base" value="${esc(G.basePostcode||'')}" placeholder="e.g. IG1 1AA"></div><div class="form-group"><label>Located</label><div class="small" style="padding-top:10px;">${G.base&&G.base.lat!=null?G.base.lat.toFixed(4)+', '+G.base.lng.toFixed(4):'<span style="color:var(--warning);">not set</span>'}</div></div></div>
      <div class="form-row"><div class="form-group"><label>Core radius (mi)</label>${num('sws-core', G.coreMiles, 1, 1, 50)}</div><div class="form-group"><label>Secondary (mi)</label>${num('sws-sec', G.secondaryMiles, 1, 1, 80)}</div></div>
      <div class="form-row"><div class="form-group"><label>Maximum (mi)</label>${num('sws-max', G.maxMiles, 1, 1, 120)}</div><div class="form-group"><label>Density radius (mi)</label>${num('sws-dens', G.densityMiles, 0.5, 0.5, 10)}</div></div>
      <div class="form-row"><div class="form-group"><label>Average urban speed (mph, for travel estimates)</label>${num('sws-mph', G.mph, 1, 5, 40)}</div></div>
    </div>
    <div class="card"><div class="card-title">Today's selection & gate</div>
      <div class="form-row"><div class="form-group"><label>Organisations per day (max)</label>${num('sws-qty', s.dailyQuantity, 1, 1, 10)}</div><div class="form-group"><label>Max per type per day</label>${num('sws-div', s.diversity.maxPerType, 1, 1, 10)}</div></div>
      <div class="form-row"><div class="form-group"><label>Min opportunity</label>${num('sws-opp', T.opportunity, 1, 0, 100)}</div><div class="form-group"><label>Min confidence %</label>${num('sws-conf', T.confidence, 1, 0, 100)}</div></div>
      <div class="form-row"><div class="form-group"><label>Min maintenance demand</label>${num('sws-dem', T.minDemand, 1, 0, 100)}</div><div class="form-group"><label>Min relationship potential</label><select id="sws-rel">${['MEDIUM','HIGH','VERY HIGH'].map(x=>`<option ${T.minRelationship===x?'selected':''}>${x}</option>`).join('')}</select></div></div>
      <div class="form-row"><div class="form-group"><label>Contact cooldown (days)</label>${num('sws-cd', T.contactCooldownDays, 1, 0, 365)}</div><div class="form-group"><label>Research max age (days)</label>${num('sws-age', T.maxResearchAgeDays, 1, 1, 90)}</div></div>
    </div>
    <div class="card"><div class="card-title">Scoring weights <span class="small muted">each group must total 1.00</span></div>
      <div class="le-sec-title">Opportunity</div>
      <div class="form-row"><div class="form-group"><label>Relationship potential</label>${num('sww-rel', W.relationship, 0.05, 0, 1)}</div><div class="form-group"><label>Route / area value</label>${num('sww-route', W.route, 0.05, 0, 1)}</div></div>
      <div class="form-row"><div class="form-group"><label>Contactability</label>${num('sww-con', W.contact, 0.05, 0, 1)}</div><div class="form-group"><label>Demand / buying signals</label>${num('sww-dem', W.demand, 0.05, 0, 1)}</div></div>
      <div class="le-sec-title">Relationship potential (geometric)</div>
      <div class="form-row"><div class="form-group"><label>Maintenance demand</label>${num('swr-dem', R.demand, 0.05, 0, 1)}</div><div class="form-group"><label>Footprint / scale</label>${num('swr-fp', R.footprint, 0.05, 0, 1)}</div></div>
      <div class="form-row"><div class="form-group"><label>Service fit</label>${num('swr-fit', R.fit, 0.05, 0, 1)}</div><div class="form-group"><label>Business strength</label>${num('swr-str', R.strength, 0.05, 0, 1)}</div></div>
      <p class="small muted">Reasoning: docs/lead-engine/STEADYWORKS.md §3.</p></div>
    <div class="card"><div class="card-title">Capacity guard</div>
      <div class="form-group"><label>When capacity is red</label><select id="swc-guard"><option value="limit" ${C.guard==='limit'?'selected':''}>Only select prospects whose entry service has a subcontractor bench</option><option value="warn" ${C.guard==='warn'?'selected':''}>Warn only</option></select></div>
      <div class="form-row"><div class="form-group"><label>Amber at %</label>${num('swc-amber', C.amberPct, 1, 10, 200)}</div><div class="form-group"><label>Red at %</label>${num('swc-red', C.redPct, 1, 10, 300)}</div></div>
      <div class="form-group"><label>Assumed jobs per account per month (until real history)</label>${num('swc-jpa', C.assumedJobsPerAccountMonth, 0.5, 0, 20)}</div>
      <p class="small muted">Weekly capacity comes from <a class="le-link" onclick="navigate('targets')">Targets → SteadyWorks capacity</a>; subcontractor trades from your Subcontractors page.</p>
      <div class="form-group"><label>Follow-up intervals (days)</label><input type="text" id="sws-fu" value="${s.followUpDays.join(', ')}"></div>
      <label class="le-toggle"><input type="checkbox" id="sws-auto" ${s.pipeline.autoRun?'checked':''}> Run automatically each weekday morning</label></div>
    <div class="card"><div class="card-title">Organisation types</div>
      ${s.types.map(t=>`<label class="le-toggle"><input type="checkbox" id="swt-${t.id}" ${t.enabled?'checked':''}> ${esc(WC.orgType(t.id).label)} <span class="spacer"></span><span class="small muted">${WC.orgType(t.id).group}</span></label>`).join('')}
      <p class="small muted">Public procurement (councils, housing associations, NHS frameworks) is a separate opportunity type — phase 2 via Contracts Finder.</p></div>
    <div class="card"><div class="card-title">Services you offer <span class="small muted">never pitched if switched off</span></div>
      ${s.services.map(x=>`<label class="le-toggle"><input type="checkbox" id="swsv-${x.id}" ${x.offered!==false?'checked':''}> ${esc(WC.svcLabel(x.id))}</label>`).join('')}</div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;"><button class="btn btn-ghost" onclick="swResetSettings()">Reset to defaults</button><button class="btn btn-gold" onclick="swSaveSettings()">Save settings</button></div>`;
}
async function swSaveSettings(){
  const n = id=>Number(document.getElementById(id).value);
  const s = JSON.parse(JSON.stringify(swSettings()));
  const sumOk = (o, label)=>{ const t = Object.values(o).reduce((a,b)=>a+b,0); if(Math.abs(t-1)>0.011){ toast(label+' weights total '+t.toFixed(2)+' — need 1.00','⚠️'); return false; } return true; };
  const W = {relationship:n('sww-rel'), route:n('sww-route'), contact:n('sww-con'), demand:n('sww-dem')}, R = {demand:n('swr-dem'), footprint:n('swr-fp'), fit:n('swr-fit'), strength:n('swr-str')};
  if(!sumOk(W,'Opportunity') || !sumOk(R,'Relationship')) return;
  s.weights = W; s.rpWeights = R;
  const pc = document.getElementById('sws-base').value.trim().toUpperCase();
  if(pc && pc!==s.geo.basePostcode){
    try{ const j = await (await fetch('https://api.postcodes.io/postcodes/'+encodeURIComponent(pc))).json(); if(!j.result){ toast('Postcode not found','⚠️'); return; } s.geo.base = {lat:j.result.latitude, lng:j.result.longitude}; }
    catch(e){ toast('Couldn\'t look up the postcode','⚠️'); return; }
  }
  if(!pc) s.geo.base = null;
  Object.assign(s.geo, {basePostcode:pc, coreMiles:n('sws-core'), secondaryMiles:n('sws-sec'), maxMiles:n('sws-max'), densityMiles:n('sws-dens'), mph:n('sws-mph')});
  if(!(s.geo.coreMiles<=s.geo.secondaryMiles && s.geo.secondaryMiles<=s.geo.maxMiles)){ toast('Radii must go core ≤ secondary ≤ maximum','⚠️'); return; }
  s.dailyQuantity = Math.max(1, Math.round(n('sws-qty'))); s.diversity.maxPerType = Math.max(1, Math.round(n('sws-div')));
  Object.assign(s.thresholds, {opportunity:n('sws-opp'), confidence:n('sws-conf'), minDemand:n('sws-dem'), minRelationship:document.getElementById('sws-rel').value, contactCooldownDays:n('sws-cd'), maxResearchAgeDays:n('sws-age')});
  Object.assign(s.capacity, {guard:document.getElementById('swc-guard').value, amberPct:n('swc-amber'), redPct:n('swc-red'), assumedJobsPerAccountMonth:n('swc-jpa')});
  s.followUpDays = document.getElementById('sws-fu').value.split(',').map(x=>Math.round(Number(x))).filter(x=>x>0).slice(0,6);
  s.pipeline.autoRun = document.getElementById('sws-auto').checked;
  s.types.forEach(t=>{ t.enabled = document.getElementById('swt-'+t.id).checked; });
  s.services.forEach(x=>{ x.offered = document.getElementById('swsv-'+x.id).checked; });
  LE.sw.settings = s;
  try{ await LeStore.saveSettings(LE.settings); leInvalidate(); renderPage(); toast('SteadyWorks settings saved'); }catch(e){ toast('Couldn\'t save: '+(e.message||e),'⚠️'); }
}
function swResetSettings(){ confirmDelete('Reset SteadyWorks settings?', 'Territory, thresholds, weights, types and services go back to defaults.', async ()=>{ LE.sw.settings = WC.defaultSettings(); await LeStore.saveSettings(LE.settings); leInvalidate(); renderPage(); toast('Reset'); }); }
