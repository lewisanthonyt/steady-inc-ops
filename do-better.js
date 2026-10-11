/* ============================================================================
   DO BETTER — personal habit tracker for a phased plan.
   Data lives in Supabase tables (do_better_profile / _completions / _one_offs),
   private to each login via row-level security. Nothing here touches localStorage.
   To add, remove or re-phase a habit, edit DOB_ITEMS only.
   ============================================================================ */

// type: daily | scheduled (chosen weekdays, minDays) | interval (every N days from a chosen date) | oneoff (single toggle)
const DOB_ITEMS = [
  {id:'bed',     label:'In bed by 10pm',        note:'Tick the night it happened', type:'daily', week:1},
  {id:'wake',    label:'Up by 5am',             note:'Out of bed, not snoozing', type:'daily', week:1},
  {id:'smoke',   label:'3 cigarettes max',      note:'Tick if you held it', type:'daily', week:1},
  {id:'spend',   label:'Under £40 spent',       note:'Daily cap', type:'daily', week:1},
  {id:'fruit',   label:'Two fruit',             note:'Minimum', type:'daily', week:1},
  {id:'med',     label:'Stretch / meditate',    note:'10 minutes', type:'daily', week:3},
  {id:'read',    label:'10 pages',              note:'Any book', type:'daily', week:3},
  {id:'gym',     label:'Gym',                   note:'at least 5 days', type:'scheduled', minDays:5, week:1},
  {id:'review',  label:'Weekly review',         note:'money in/out, debts, plan next week', type:'scheduled', minDays:1, week:1},
  {id:'family',  label:'Call immediate family', type:'scheduled', minDays:1, week:3},
  {id:'save',    label:'Move 30% to savings',   type:'scheduled', minDays:1, week:5},
  {id:'friends', label:'Out with friends',      type:'scheduled', minDays:1, week:5},
  {id:'date',    label:'Date',                  note:'every 10 days', type:'interval', everyDays:10, week:5},
  {id:'audit',   label:'Every debt listed: who, how much, minimum, rate', type:'oneoff', week:1},
  {id:'order',   label:'Debt payoff order decided', type:'oneoff', week:5}
];
const DOB_PHASES = [{from:1,to:2,name:'Foundations'},{from:3,to:4,name:'Daily habits'},{from:5,to:6,name:'Systems & people'},{from:7,to:99,name:'Keep it going'}];
const DOB_WEEKS = 12;
const DOB_DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

const DOB = {loaded:false, loading:false, error:null, userId:null, profile:null, done:{}, oneOffs:{}, week:null, setup:false, draft:null};

/* ---------- dates (local, no timezone drift) ---------- */
function dobIso(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function dobParse(s){ const [y,m,d] = String(s).split('-').map(Number); return new Date(y, m-1, d); }
function dobAdd(d, n){ const x = new Date(d); x.setDate(x.getDate()+n); return x; }
function dobMonday(d){ const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); return dobAdd(x, -((x.getDay()+6)%7)); }
function dobToday(){ const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
// New plans start this Monday — or next Monday if opened on a Sunday, so day one isn't a week of misses.
function dobDefaultStart(){ return dobIso(dobMonday(dobAdd(dobToday(), 1))); }
function dobDaysBetween(a, b){ return Math.round((b - a)/86400000); }
function dobFmt(d){ return d.toLocaleDateString('en-GB',{weekday:'short', day:'numeric', month:'short'}); }

/* ---------- plan logic (pure) ---------- */
function dobCurrentWeek(start){ const w = Math.floor(dobDaysBetween(dobParse(start), dobToday())/7)+1; return Math.max(1, Math.min(DOB_WEEKS, w)); }
function dobPhase(week){ return (DOB_PHASES.find(p=>week>=p.from && week<=p.to)||DOB_PHASES[DOB_PHASES.length-1]).name; }
function dobWeekDates(start, week){ const m = dobAdd(dobParse(start), (week-1)*7); return DOB_DAYS.map((_,i)=>dobAdd(m, i)); }
function dobUnlocked(item, week){ return week >= item.week; }
function dobIsDue(item, date, schedule){
  if(item.type==='daily') return true;
  if(item.type==='scheduled') return (schedule[item.id]||[]).includes((date.getDay()+6)%7);
  if(item.type==='interval'){ const f = schedule[item.id+'_first']; if(!f) return false; const n = dobDaysBetween(dobParse(f), date); return n>=0 && n % item.everyDays===0; }
  return false;
}
function dobNextInterval(item, schedule){
  const f = schedule[item.id+'_first']; if(!f) return null;
  const first = dobParse(f), today = dobToday(); const n = dobDaysBetween(first, today);
  return n<=0 ? first : dobAdd(first, Math.ceil(n/item.everyDays)*item.everyDays);
}
// cell state: due | done | missed | off
function dobCellState(item, date, schedule, isDone){
  const due = dobIsDue(item, date, schedule);
  if(isDone) return 'done';
  if(!due) return 'off';
  return date < dobToday() ? 'missed' : 'due';
}
// Per-item and overall week stats. Score = Σ min(done, due) / Σ due over unlocked grid items.
function dobWeekStats(week, start, schedule, doneMap){
  const dates = dobWeekDates(start, week); const rows = {}; let num = 0, den = 0, missed = 0;
  DOB_ITEMS.filter(i=>i.type!=='oneoff' && dobUnlocked(i, week)).forEach(item=>{
    let due = 0, done = 0;
    dates.forEach(d=>{ const isDone = !!doneMap[dobIso(d)+'|'+item.id]; if(dobIsDue(item, d, schedule)) due++; if(isDone) done++;
      if(dobCellState(item, d, schedule, isDone)==='missed') missed++; });
    rows[item.id] = {due, done}; num += Math.min(done, due); den += due;
  });
  return {rows, pct: den ? Math.round(num/den*100) : 0, num, den, missed};
}
function dobScheduleGaps(schedule){
  const gaps = [];
  DOB_ITEMS.forEach(i=>{
    if(i.type==='scheduled'){ const n = (schedule[i.id]||[]).length; if(n < i.minDays) gaps.push(`${i.label}: pick ${i.minDays===1?'a day':'at least '+i.minDays+' days'}${n?` (${n} chosen)`:''}`); }
    if(i.type==='interval' && !schedule[i.id+'_first']) gaps.push(`${i.label}: pick the first date`);
  });
  return gaps;
}

/* ---------- backend ---------- */
async function dobLoad(){
  if(DOB.loading) return; DOB.loading = true; DOB.error = null;
  try{
    DOB.userId = CURRENT_USER_ID;
    if(!DOB.userId) throw new Error('Sign in to use Do Better.');
    const [p, c, o] = await Promise.all([
      sb.from('do_better_profile').select('*').eq('user_id', DOB.userId).maybeSingle(),
      sb.from('do_better_completions').select('date,item_id,done').eq('user_id', DOB.userId),
      sb.from('do_better_one_offs').select('item_id,done').eq('user_id', DOB.userId)
    ]);
    const err = p.error || c.error || o.error; if(err) throw err;
    DOB.profile = p.data ? {start_date: p.data.start_date, schedule: p.data.schedule || {}} : {start_date: dobDefaultStart(), schedule: {}, isNew: true};
    DOB.done = {}; (c.data||[]).forEach(r=>{ if(r.done) DOB.done[r.date+'|'+r.item_id] = true; });
    DOB.oneOffs = {}; (o.data||[]).forEach(r=>{ DOB.oneOffs[r.item_id] = !!r.done; });
    DOB.week = dobCurrentWeek(DOB.profile.start_date);
    DOB.setup = dobScheduleGaps(DOB.profile.schedule).length > 0;
    DOB.loaded = true;
  }catch(e){ DOB.error = e.message || String(e); console.warn('Do Better load failed', e); }
  DOB.loading = false;
  if(currentRoute==='do-better') renderPage();
  else { const m = document.getElementById('dob-mini'); if(m) m.outerHTML = dobMiniHtml(); }
}
async function dobSaveProfile(){
  const row = {user_id: DOB.userId, start_date: DOB.profile.start_date, schedule: DOB.profile.schedule, updated_at: new Date().toISOString()};
  const {error} = await sb.from('do_better_profile').upsert(row, {onConflict:'user_id'});
  if(error){ toast('Couldn\'t save your plan: '+error.message, '⚠️'); return false; }
  DOB.profile.isNew = false; return true;
}

/* ---------- actions ---------- */
async function dobToggle(itemId, date){
  const item = DOB_ITEMS.find(i=>i.id===itemId); if(!item || !dobUnlocked(item, DOB.week)) return;
  const key = date+'|'+itemId, next = !DOB.done[key];
  if(next) DOB.done[key] = true; else delete DOB.done[key];
  dobRefresh();
  const {error} = await sb.from('do_better_completions').upsert({user_id: DOB.userId, date, item_id: itemId, done: next, updated_at: new Date().toISOString()}, {onConflict:'user_id,date,item_id'});
  if(error){ if(next) delete DOB.done[key]; else DOB.done[key] = true; dobRefresh(); toast('Not saved — check your connection and try again.', '⚠️'); }
}
async function dobToggleOneOff(itemId){
  const item = DOB_ITEMS.find(i=>i.id===itemId); if(!item || !dobUnlocked(item, DOB.week)) return;
  const next = !DOB.oneOffs[itemId]; DOB.oneOffs[itemId] = next; dobRefresh();
  const {error} = await sb.from('do_better_one_offs').upsert({user_id: DOB.userId, item_id: itemId, done: next, updated_at: new Date().toISOString()}, {onConflict:'user_id,item_id'});
  if(error){ DOB.oneOffs[itemId] = !next; dobRefresh(); toast('Not saved — check your connection and try again.', '⚠️'); }
}
function dobWeekStep(n){ DOB.week = Math.max(1, Math.min(DOB_WEEKS, DOB.week + n)); dobRefresh(); }
function dobOpenSetup(){ DOB.draft = JSON.parse(JSON.stringify(DOB.profile.schedule||{})); DOB.setup = true; dobRefresh(); }
function dobDraftDay(itemId, day){
  const d = DOB.draft || (DOB.draft = JSON.parse(JSON.stringify(DOB.profile.schedule||{})));
  const list = new Set(d[itemId]||[]); list.has(day) ? list.delete(day) : list.add(day);
  d[itemId] = [...list].sort((a,b)=>a-b); dobRefresh();
}
function dobDraftDate(itemId, val){ const d = DOB.draft || (DOB.draft = {}); if(val) d[itemId+'_first'] = val; else delete d[itemId+'_first']; dobRefresh(); }
async function dobSaveSetup(){
  const d = DOB.draft || DOB.profile.schedule; if(dobScheduleGaps(d).length) return;
  const prev = DOB.profile.schedule; DOB.profile.schedule = d;
  if(await dobSaveProfile()){ DOB.setup = false; DOB.draft = null; toast('Days saved','✅'); } else DOB.profile.schedule = prev;
  dobRefresh();
}
function dobCancelSetup(){ if(dobScheduleGaps(DOB.profile.schedule).length) return; DOB.setup = false; DOB.draft = null; dobRefresh(); }
async function dobSetStart(val){
  if(!val) return; const mon = dobIso(dobMonday(dobParse(val)));
  const prev = DOB.profile.start_date; DOB.profile.start_date = mon;
  if(await dobSaveProfile()){ DOB.week = dobCurrentWeek(mon); toast('Start date set to Monday '+dobFmt(dobParse(mon)),'✅'); } else DOB.profile.start_date = prev;
  dobRefresh();
}
function dobRefresh(){
  if(currentRoute==='do-better'){ const c = document.getElementById('content'); if(c) c.innerHTML = view_do_better(); }
  const m = document.getElementById('dob-mini'); if(m) m.outerHTML = dobMiniHtml();
}

/* ---------- views ---------- */
function view_do_better(){
  dobInjectStyle();
  if(!DOB.loaded){
    if(!DOB.loading && !DOB.error) setTimeout(dobLoad, 0);
    if(DOB.error) return `<div class="card dob-wrap"><div class="empty-state">${esc(DOB.error)}<br><br><button class="btn btn-gold" onclick="DOB.error=null;dobLoad()">Try again</button></div></div>`;
    return `<div class="empty-state">Loading your plan…</div>`;
  }
  return DOB.setup ? dobSetupView() : dobTrackerView();
}

function dobSetupView(){
  const d = DOB.draft || (DOB.draft = JSON.parse(JSON.stringify(DOB.profile.schedule||{})));
  const gaps = dobScheduleGaps(d);
  const rows = DOB_ITEMS.filter(i=>i.type==='scheduled' || i.type==='interval').map(i=>{
    const head = `<div class="dob-set-head"><b>${esc(i.label)}</b><span class="muted small">${i.type==='scheduled' ? (i.minDays>1?`at least ${i.minDays} days`:'1 day or more') : 'first date, then every '+i.everyDays+' days'}${i.week>1?` · starts week ${i.week}`:''}</span></div>`;
    if(i.type==='interval') return `<div class="dob-set-row">${head}<input class="input dob-date-in" type="date" value="${esc(d[i.id+'_first']||'')}" onchange="dobDraftDate('${i.id}', this.value)"></div>`;
    const sel = new Set(d[i.id]||[]);
    return `<div class="dob-set-row">${head}<div class="dob-chips">${DOB_DAYS.map((n,k)=>`<button type="button" class="dob-chip ${sel.has(k)?'on':''}" aria-pressed="${sel.has(k)}" onclick="dobDraftDay('${i.id}',${k})">${n}</button>`).join('')}</div></div>`;
  }).join('');
  const canCancel = !dobScheduleGaps(DOB.profile.schedule).length;
  return `<div class="dob-wrap">
    <div class="card dob-card">
      <div class="dob-title">Set your days</div>
      <p class="muted small" style="margin:4px 0 14px;">Pick when each scheduled habit happens. You can change these any time.</p>
      ${rows}
      ${gaps.length ? `<div class="dob-missing"><b>Still to set:</b><ul>${gaps.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div>` : ''}
      <div class="dob-actions">
        ${canCancel ? `<button class="btn btn-ghost" onclick="dobCancelSetup()">Cancel</button>` : ''}
        <button class="btn btn-gold" ${gaps.length?'disabled':''} onclick="dobSaveSetup()">Save days</button>
      </div>
    </div>
  </div>`;
}

function dobTrackerView(){
  const P = DOB.profile, S = P.schedule, w = DOB.week, dates = dobWeekDates(P.start_date, w), today = dobIso(dobToday());
  const st = dobWeekStats(w, P.start_date, S, DOB.done);
  const header = `<div class="dob-days"><div class="dob-lbl-sp"></div>${dates.map((d,k)=>`<div class="dob-dh ${dobIso(d)===today?'today':''}"><span>${DOB_DAYS[k]}</span><b>${d.getDate()}</b></div>`).join('')}<div class="dob-tot-h">Week</div></div>`;
  const rowFor = item=>{
    const open = dobUnlocked(item, w), r = st.rows[item.id];
    let sub = item.note ? esc(item.note) : '';
    if(item.type==='interval' && open){ const nx = dobNextInterval(item, S); sub = nx ? 'next: '+dobFmt(nx) : sub; }
    if(!open) sub = 'Starts week '+item.week;
    const cells = dates.map(d=>{
      const iso = dobIso(d), isDone = !!DOB.done[iso+'|'+item.id], s = open ? dobCellState(item, d, S, isDone) : 'off';
      const lab = `${item.label}, ${dobFmt(d)}: ${{done:'done',due:'due',missed:'missed',off:'not scheduled'}[s]}`;
      return `<button type="button" class="dob-c ${s}" ${open?`onclick="dobToggle('${item.id}','${iso}')"`:'disabled'} aria-label="${esc(lab)}">${s==='done'?'✓':s==='missed'?'✕':''}</button>`;
    }).join('');
    const tot = !open || !r || r.due===0 ? '–' : `${r.done}/${r.due}`, hit = open && r && r.due>0 && r.done>=r.due;
    return `<div class="dob-row ${open?'':'locked'}"><div class="dob-lbl"><b>${esc(item.label)}</b>${sub?`<span>${sub}</span>`:''}</div>${cells}<div class="dob-tot ${hit?'hit':''}">${tot}</div></div>`;
  };
  const rows = `<div class="dob-sec">Every day</div>${header}` + DOB_ITEMS.filter(i=>i.type==='daily').map(rowFor).join('')
    + `<div class="dob-sec">Every week</div>${header}` + DOB_ITEMS.filter(i=>i.type==='scheduled'||i.type==='interval').map(rowFor).join('');
  const oneOffs = DOB_ITEMS.filter(i=>i.type==='oneoff').map(i=>{
    const open = dobUnlocked(i, w), on = !!DOB.oneOffs[i.id];
    return `<button type="button" class="dob-one ${on?'on':''} ${open?'':'locked'}" ${open?`onclick="dobToggleOneOff('${i.id}')"`:'disabled'} aria-pressed="${on}">
      <span class="dob-c ${on?'done':open?'due':'off'}">${on?'✓':''}</span><span><b>${esc(i.label)}</b>${open?'':`<small>Starts week ${i.week}</small>`}</span></button>`;
  }).join('');
  return `<div class="dob-wrap">
    <div class="card dob-card">
      <div class="dob-strap">Health · Wealth · Self · People</div>
      <div class="dob-week">
        <button class="dob-arrow" onclick="dobWeekStep(-1)" ${w<=1?'disabled':''} aria-label="Previous week">‹</button>
        <div class="dob-week-mid"><div class="dob-title">Week ${w}</div><div class="dob-phase">${esc(dobPhase(w))}</div></div>
        <button class="dob-arrow" onclick="dobWeekStep(1)" ${w>=DOB_WEEKS?'disabled':''} aria-label="Next week">›</button>
      </div>
      <div class="dob-prog"><div class="dob-bar"><i style="width:${st.pct}%"></i></div>
        <div class="dob-prog-txt"><b>${st.pct}%</b> of this week's due items done · <span class="${st.missed?'dob-miss':''}">${st.missed} missed so far</span></div></div>
      <div class="dob-grid">${rows}</div>
      <div class="dob-legend"><span><i class="dob-c due"></i>Due</span><span><i class="dob-c done">✓</i>Done</span><span><i class="dob-c missed">✕</i>Missed</span><span><i class="dob-c off"></i>Not scheduled</span></div>
      <div class="dob-sec">Once</div><div class="dob-ones">${oneOffs}</div>
      <div class="dob-foot">
        <button class="btn btn-ghost" onclick="dobOpenSetup()">Change days</button>
        <label class="small muted dob-start">Plan start (Monday of week 1)
          <input class="input" type="date" value="${esc(P.start_date)}" onchange="dobSetStart(this.value)"></label>
      </div>
      <p class="muted small" style="margin-top:10px;">Faded rows unlock in later weeks. Ticks save automatically.</p>
    </div>
  </div>`;
}

function afterRender_do_better(){}

/* ---------- Dashboard mini window: today's habits, tick without leaving the dashboard ---------- */
function dobMiniHtml(){
  dobInjectStyle();
  const shell = (body, cls='')=>`<div id="dob-mini" class="card dob-mini fx-card fx-glow ${cls}" style="--i:1">
    <div class="dob-mini-head"><span>💪 DO BETTER</span><button type="button" class="dob-mini-open" onclick="navigate('do-better')">Open →</button></div>${body}</div>`;
  if(!DOB.loaded){
    if(typeof CURRENT_USER_ID==='undefined' || !CURRENT_USER_ID) return '';
    if(!DOB.loading && !DOB.error) setTimeout(dobLoad, 0);
    return shell(DOB.error ? `<div class="muted small">Couldn't load your plan. <a href="#" onclick="DOB.error=null;dobLoad();return false;">Retry</a></div>` : `<div class="muted small">Loading today…</div>`);
  }
  if(dobScheduleGaps(DOB.profile.schedule).length)
    return shell(`<p class="dob-mini-quote">Do what you say, or don't say it.</p><button class="btn btn-gold" style="width:100%" onclick="DOB.setup=true;navigate('do-better')">Set your days to start →</button>`);
  const P = DOB.profile, S = P.schedule, today = dobToday(), iso = dobIso(today);
  const offset = dobDaysBetween(dobParse(P.start_date), today);
  if(offset < 0) return shell(`<p class="dob-mini-quote">Your plan starts ${dobFmt(dobParse(P.start_date))}.</p><div class="muted small">Do what you say, or don't say it.</div>`);
  const week = Math.min(DOB_WEEKS, Math.floor(offset/7)+1);
  const due = DOB_ITEMS.filter(i=>i.type!=='oneoff' && dobUnlocked(i, week) && dobIsDue(i, today, S));
  const done = due.filter(i=>DOB.done[iso+'|'+i.id]).length, pct = due.length ? done/due.length : 1;
  const st = dobWeekStats(week, P.start_date, S, DOB.done);
  const C = 2*Math.PI*30;
  const ring = `<svg class="dob-ring" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="30" class="trk"/><circle cx="36" cy="36" r="30" class="val" style="stroke-dasharray:${C};stroke-dashoffset:${(C*(1-pct)).toFixed(1)}"/></svg>
    <div class="dob-ring-txt"><b>${done}/${due.length}</b><small>today</small></div>`;
  const list = due.length ? due.map(i=>{ const on = !!DOB.done[iso+'|'+i.id];
    return `<button type="button" class="dob-mini-item ${on?'on':''}" onclick="dobToggle('${i.id}','${iso}')" aria-pressed="${on}"><span class="dob-c ${on?'done':'due'}">${on?'✓':''}</span><span>${esc(i.label)}</span></button>`; }).join('')
    : `<div class="muted small">Nothing due today.</div>`;
  return shell(`<div class="dob-mini-top"><div class="dob-ring-wrap ${pct>=1&&due.length?'full':''}">${ring}</div>
      <div><div class="dob-mini-week">Week ${week} · ${esc(dobPhase(week))}</div><div class="dob-mini-stat"><b>${st.pct}%</b> this week</div>
      <div class="dob-mini-stat ${st.missed?'miss':''}">${st.missed} missed so far</div></div></div>
    <div class="dob-mini-list">${list}</div>`, pct>=1&&due.length ? 'all-done' : '');
}

function dobInjectStyle(){
  if(document.getElementById('dob-style')) return;
  const s = document.createElement('style'); s.id = 'dob-style';
  s.textContent = `
  .dob-wrap{max-width:820px;margin:0 auto;}
  .dob-mini{display:flex;flex-direction:column;gap:12px;}
  .dob-mini-head{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:800;letter-spacing:1.5px;color:var(--warning);}
  .dob-mini-open{background:none;border:0;color:var(--gold-light);font-weight:800;font-size:13px;}
  .dob-mini-quote{font-weight:700;font-size:15px;}
  .dob-mini-top{display:flex;gap:14px;align-items:center;}
  .dob-ring-wrap{position:relative;width:72px;height:72px;flex:none;}
  .dob-ring{width:72px;height:72px;transform:rotate(-90deg);}
  .dob-ring .trk{fill:none;stroke:var(--input-bg);stroke-width:7;}
  .dob-ring .val{fill:none;stroke:var(--gold);stroke-width:7;stroke-linecap:round;transition:stroke-dashoffset .6s cubic-bezier(.2,.8,.2,1);filter:drop-shadow(0 0 6px rgba(225,29,42,.7));}
  .dob-ring-wrap.full .val{stroke:var(--warning);filter:drop-shadow(0 0 8px rgba(245,158,11,.8));}
  .dob-ring-txt{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;}
  .dob-ring-txt b{font-size:17px;font-weight:900;} .dob-ring-txt small{font-size:10px;color:var(--text-soft);margin-top:3px;}
  .dob-mini-week{font-size:12px;font-weight:800;color:var(--warning);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;}
  .dob-mini-stat{font-size:13px;color:var(--text-soft);} .dob-mini-stat b{color:var(--text);} .dob-mini-stat.miss{color:var(--gold-light);font-weight:700;}
  .dob-mini-list{display:flex;flex-direction:column;gap:6px;max-height:228px;overflow:auto;}
  .dob-mini-item{display:flex;align-items:center;gap:10px;background:var(--card-alt);border:1px solid var(--border);border-radius:10px;padding:6px 10px;color:var(--text);font-size:13px;font-weight:600;text-align:left;transition:transform .15s,border-color .15s;}
  .dob-mini-item:hover{border-color:var(--warning);transform:translateX(2px);}
  .dob-mini-item .dob-c{width:24px;height:24px;font-size:12px;}
  .dob-mini-item.on span:last-child{color:var(--text-soft);text-decoration:line-through;}
  .dob-mini.all-done{box-shadow:0 0 0 1px rgba(245,158,11,.5),0 0 36px rgba(245,158,11,.18);}
  .dob-card{padding:18px;}
  .dob-strap{text-align:center;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--text-soft);margin-bottom:10px;}
  .dob-title{font-size:26px;font-weight:800;letter-spacing:.3px;}
  .dob-phase{color:var(--warning);font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:1.2px;margin-top:2px;}
  .dob-week{display:flex;align-items:center;justify-content:space-between;gap:12px;}
  .dob-week-mid{text-align:center;}
  .dob-arrow{width:44px;height:44px;border-radius:12px;border:1px solid var(--border);background:var(--card-alt);color:var(--text);font-size:26px;line-height:1;}
  .dob-arrow:disabled{opacity:.3;cursor:default;}
  .dob-prog{margin:16px 0 18px;}
  .dob-bar{height:10px;border-radius:6px;background:var(--input-bg);overflow:hidden;}
  .dob-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--gold),var(--warning));border-radius:6px;transition:width .25s;}
  .dob-prog-txt{font-size:13px;color:var(--text-soft);margin-top:8px;}
  .dob-prog-txt b{color:var(--text);}
  .dob-miss{color:var(--gold-light);font-weight:700;}
  .dob-grid{display:flex;flex-direction:column;gap:6px;}
  .dob-days,.dob-row{display:grid;grid-template-columns:minmax(0,1fr) repeat(7,34px) 44px;align-items:center;gap:6px;}
  .dob-dh{text-align:center;font-size:11px;color:var(--text-soft);border-radius:8px;padding:3px 0;line-height:1.2;}
  .dob-dh span{display:block;} .dob-dh b{font-size:13px;color:var(--text);}
  .dob-dh.today{background:var(--gold);color:#fff;} .dob-dh.today b{color:#fff;}
  .dob-tot-h{font-size:11px;color:var(--text-soft);text-align:center;}
  .dob-row{padding:6px 0;border-top:1px solid var(--border);}
  .dob-lbl{min-width:0;} .dob-lbl b{display:block;font-size:14px;line-height:1.25;} .dob-lbl span{display:block;font-size:11px;color:var(--text-soft);}
  .dob-c{width:34px;height:34px;border-radius:50%;border:2px solid transparent;background:transparent;color:#fff;font-weight:900;font-size:15px;display:inline-flex;align-items:center;justify-content:center;padding:0;flex:none;}
  .dob-c.due{border-color:var(--warning);}
  .dob-c.done{background:var(--gold);border-color:var(--gold);}
  .dob-c.missed{border-color:var(--gold);color:var(--gold-light);}
  .dob-c.off{border:2px dashed #4a5068;}
  .dob-c:disabled{cursor:default;}
  .dob-tot{text-align:center;font-weight:800;font-size:13px;color:var(--text-soft);}
  .dob-tot.hit{color:var(--warning);}
  .dob-row.locked{opacity:.38;}
  .dob-legend{display:flex;flex-wrap:wrap;gap:14px;margin:14px 0 4px;font-size:12px;color:var(--text-soft);}
  .dob-legend span{display:inline-flex;align-items:center;gap:6px;} .dob-legend .dob-c{width:18px;height:18px;font-size:10px;}
  .dob-grid .dob-sec:first-child{margin-top:4px;}
  .dob-sec{margin:18px 0 8px;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--text-soft);}
  .dob-ones{display:flex;flex-direction:column;gap:8px;}
  .dob-one{display:flex;align-items:center;gap:12px;text-align:left;background:var(--card-alt);border:1px solid var(--border);border-radius:12px;padding:10px 12px;color:var(--text);}
  .dob-one b{font-size:14px;font-weight:700;} .dob-one small{display:block;color:var(--text-soft);font-size:11px;}
  .dob-one.locked{opacity:.38;cursor:default;}
  .dob-foot{display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end;justify-content:space-between;margin-top:20px;padding-top:14px;border-top:1px solid var(--border);}
  .dob-start{display:flex;flex-direction:column;gap:4px;} .dob-start .input{max-width:200px;}
  .dob-set-row{padding:12px 0;border-top:1px solid var(--border);}
  .dob-set-head{display:flex;flex-direction:column;margin-bottom:8px;}
  .dob-chips{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px;}
  .dob-chip{height:38px;border-radius:10px;border:1px solid var(--border);background:var(--input-bg);color:var(--text-soft);font-weight:700;font-size:13px;}
  .dob-chip.on{background:var(--gold);border-color:var(--gold);color:#fff;}
  .dob-date-in{max-width:220px;}
  .dob-missing{margin-top:12px;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.35);border-radius:12px;padding:10px 14px;font-size:13px;}
  .dob-missing ul{margin:6px 0 0 18px;}
  .dob-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:16px;}
  .dob-actions .btn:disabled{opacity:.45;cursor:not-allowed;}
  @media (max-width:560px){
    .dob-card{padding:14px;}
    .dob-days{grid-template-columns:repeat(7,minmax(0,1fr)) 40px;}
    .dob-days .dob-lbl-sp{display:none;}
    .dob-row{grid-template-columns:repeat(7,minmax(0,1fr)) 40px;row-gap:6px;}
    .dob-row .dob-lbl{grid-column:1 / -1;}
    .dob-c{width:100%;max-width:38px;aspect-ratio:1;height:auto;justify-self:center;}
    .dob-legend .dob-c{width:18px;height:18px;max-width:18px;}
    .dob-one .dob-c{width:30px;height:30px;max-width:30px;}
  }`;
  document.head.appendChild(s);
}

// Exposed for tests.
window.DOB_LOGIC = {dobMiniHtml, DOB_ITEMS, dobIsDue, dobCellState, dobWeekStats, dobScheduleGaps, dobNextInterval, dobCurrentWeek, dobPhase, dobWeekDates, dobMonday, dobIso, dobParse};
