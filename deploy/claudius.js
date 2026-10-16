/* ============================================================================
   CLAUDIUS — the one screen Lewis and his AI manager share.
   Today (max 5 of Lewis's tasks) · Needs your decision · Scoreboard · Message
   Claudius · All tasks. Data: Supabase `tasks` (owner/priority/money_impact/
   next_action/archived_at/completed_at) and `claudius_messages`, private to each
   login via row-level security. Scoreboard reads the app's own invoices/quotes
   (DB) and the bank feed (sw-finance.js → FIN).
   ============================================================================ */

const CL_TARGET = 10000;
const CL_TODAY_MAX = 5;
const CL_BIZ = {steadyworks:'SteadyWorks', steadyflow:'Steady Flow', both:'Both'};
const CL = {loaded:false, loading:false, error:null, tasks:[], msgs:[], justDone:[], commentFor:null,
  showDecided:false, allOpen:false, f:{biz:'all', owner:'all', archived:false, done:false}};

/* ---------- small helpers ---------- */
function clToday(){ return localDateStr(new Date()); }
function clShort(d){ if(!d) return ''; const x = new Date(String(d).length===10 ? d+'T12:00:00' : d); return isNaN(x) ? '' : x.toLocaleDateString('en-GB',{day:'numeric', month:'short'}); }
function clDueTxt(t){
  if(!t.due_date) return '';
  const n = daysUntil(t.due_date+'T12:00:00');
  if(n===null) return '';
  if(n<0) return `<span class="cl-due over">${-n}d overdue</span>`;
  if(n===0) return `<span class="cl-due now">Today</span>`;
  if(n===1) return `<span class="cl-due soon">Tomorrow</span>`;
  return `<span class="cl-due">${clShort(t.due_date)}</span>`;
}
function clPri(p){ return p ? `<span class="cl-pri ${esc(p)}">${esc(p)}</span>` : ''; }
function clBizTag(b){ return `<span class="cl-biz ${esc(b)}">${esc(CL_BIZ[b] || b || '—')}</span>`; }
function clIsOpen(t){ return t.status!=='done' && !t.archived_at; }
function clOpenApprovalTaskIds(){ return new Set(CL.msgs.filter(m=>m.kind==='approval' && m.status==='open' && m.task_id).map(m=>m.task_id)); }

/* ---------- pure selection (exposed for tests) ---------- */
// Lewis's open tasks that are P1, due within 2 days, or overdue. Anything waiting on
// an open approval lives in "Needs your decision" instead, so it isn't shown twice.
function clTodayTasks(tasks, today, blocked){
  const lim = new Date(today+'T12:00:00'); lim.setDate(lim.getDate()+2); const limStr = localDateStr(lim);
  const pr = p => ({P1:1, P2:2, P3:3}[p] || 4);
  const pool = tasks.filter(t=>clIsOpen(t) && t.owner==='lewis' && !(blocked && blocked.has(t.id))
    && (t.priority==='P1' || (t.due_date && t.due_date<=limStr)));
  pool.sort((a,b)=> (a.due_date||'9999') < (b.due_date||'9999') ? -1 : (a.due_date||'9999') > (b.due_date||'9999') ? 1 : pr(a.priority)-pr(b.priority));
  return {shown: pool.slice(0, CL_TODAY_MAX), more: Math.max(0, pool.length - CL_TODAY_MAX)};
}
function clPace(amount, today){
  const d = new Date(today+'T12:00:00'), dim = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
  const expected = CL_TARGET * d.getDate() / dim;
  return {expected, pct: Math.min(100, amount/CL_TARGET*100), markPct: Math.min(100, expected/CL_TARGET*100), gap: amount - expected};
}

/* ---------- backend ---------- */
async function clLoad(){
  if(CL.loading) return; CL.loading = true; CL.error = null;
  try{
    if(!CURRENT_USER_ID) throw new Error('Sign in to see Claudius.');
    const [t, m] = await Promise.all([
      sb.from('tasks').select('*').order('due_date', {ascending:true, nullsFirst:false}),
      sb.from('claudius_messages').select('*').order('created_at', {ascending:false}).limit(300)
    ]);
    const err = t.error || m.error; if(err) throw err;
    CL.tasks = t.data || []; CL.msgs = m.data || []; CL.loaded = true;
  }catch(e){ CL.error = e.message || String(e); console.warn('Claudius load failed', e); }
  CL.loading = false;
  clRefresh();
}
// The scoreboard's bank line uses the same bank feed as SteadyWorks Finance.
function clEnsureBank(){
  if(typeof finLoad==='function' && !FIN.loaded && !FIN.loading && !FIN.error) setTimeout(()=>finLoad().then(clRefresh), 0);
}
function clReload(){ CL.loaded = false; CL.error = null; clLoad(); }
async function clUpdateTask(id, patch){
  const {data, error} = await sb.from('tasks').update(patch).eq('id', id).select().maybeSingle();
  if(error || !data) throw (error || new Error('Not saved'));
  const i = CL.tasks.findIndex(t=>t.id===id); if(i>=0) CL.tasks[i] = data;
  if(TASKS_CACHE) TASKS_CACHE = null; // the Tasks page re-fetches next time
  return data;
}
async function clUpdateMsg(id, patch){
  const {data, error} = await sb.from('claudius_messages').update(patch).eq('id', id).select().maybeSingle();
  if(error || !data) throw (error || new Error('Not saved'));
  const i = CL.msgs.findIndex(m=>m.id===id); if(i>=0) CL.msgs[i] = data;
  return data;
}

/* ---------- actions ---------- */
async function clDone(id){
  const t = CL.tasks.find(x=>x.id===id); if(!t || t.status==='done') return;
  const prev = {status:t.status, completed_at:t.completed_at, next_action:t.next_action};
  const now = new Date();
  try{
    await clUpdateTask(id, {status:'done', completed_at: now.toISOString(),
      next_action: `Done by Lewis ${clShort(now)}. Claudius: confirm the outcome and set the follow-up.`});
    CL.justDone = [{id, title:t.title, prev}].concat(CL.justDone.filter(j=>j.id!==id)).slice(0, 3);
    toast('Done — nice one','✅');
  }catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  clRefresh();
}
async function clUndoDone(id){
  const j = CL.justDone.find(x=>x.id===id);
  // put back what was there before ✓ Done; without that record, just reopen it
  const patch = {status: j && j.prev.status && j.prev.status!=='done' ? j.prev.status : 'todo', completed_at: null};
  if(j) patch.next_action = j.prev.next_action || null;
  try{ await clUpdateTask(id, patch);
    CL.justDone = CL.justDone.filter(x=>x.id!==id); toast('Back on the list','↩️');
  }catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  clRefresh();
}
async function clDecide(id, status){
  const box = document.getElementById('cl-reply-'+id);
  const reply = box ? box.value.trim() : '';
  const patch = {status, resolved_at: new Date().toISOString()};
  if(reply) patch.lewis_reply = reply;
  try{ await clUpdateMsg(id, patch); CL.commentFor = null; toast(status==='approved' ? 'Approved — Claudius will pick it up' : 'Rejected','✓'); }
  catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  clRefresh();
}
function clOpenComment(id){ CL.commentFor = CL.commentFor===id ? null : id; clRefresh(); const b = document.getElementById('cl-reply-'+id); if(b) b.focus(); }
async function clSaveComment(id){
  const box = document.getElementById('cl-reply-'+id); const reply = box ? box.value.trim() : '';
  if(!reply){ toast('Type a comment first','✍️'); return; }
  try{ await clUpdateMsg(id, {lewis_reply: reply}); CL.commentFor = null; toast('Comment saved for Claudius','💬'); }
  catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  clRefresh();
}
async function clReopen(id){
  try{ await clUpdateMsg(id, {status:'open', resolved_at:null}); toast('Reopened','↩️'); }
  catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  clRefresh();
}
async function clSend(){
  const box = document.getElementById('cl-msg'); const body = box ? box.value.trim() : '';
  if(!body) return;
  const btn = document.getElementById('cl-send'); if(btn) btn.disabled = true;
  const {data, error} = await sb.from('claudius_messages').insert({author:'lewis', kind:'message', body, status:'open'}).select().maybeSingle();
  if(error || !data){ if(btn) btn.disabled = false; toast('Not sent — check your connection and try again.','⚠️'); return; }
  CL.msgs.unshift(data); toast('Sent to Claudius — picked up on the next daily run','📨');
  clRefresh();
}
// Only Lewis's own messages that Claudius hasn't handled yet can be withdrawn.
async function clDeleteMsg(id){
  const m = CL.msgs.find(x=>x.id===id); if(!m || m.author!=='lewis' || m.status!=='open') return;
  if(!confirm('Delete this message? Claudius hasn\'t picked it up yet.')) return;
  const {error} = await sb.from('claudius_messages').delete().eq('id', id);
  if(error){ toast('Not deleted — check your connection and try again.','⚠️'); return; }
  CL.msgs = CL.msgs.filter(x=>x.id!==id); toast('Message deleted','🗑️'); clRefresh();
}
function clSetF(k, v){ CL.f[k] = v; clRefresh(); }
function clToggleAll(){ CL.allOpen = !CL.allOpen; clRefresh(); }
function clRefresh(){
  if(currentRoute!=='claudius') return;
  const c = document.getElementById('content'); if(!c) return;
  const draft = document.getElementById('cl-msg'); const keep = draft ? draft.value : '';
  c.innerHTML = view_claudius();
  const d2 = document.getElementById('cl-msg'); if(d2 && keep && !d2.value) d2.value = keep;
}

/* ---------- scoreboard data ---------- */
function clScore(key){
  const today = clToday(), mStart = today.slice(0,8)+'01';
  const sw = key==='steadyworks';
  const invs = (sw ? DB.invoices : DB.sfInvoices) || [];
  const invoiced = invs.filter(i=>i.status && i.status!=='draft' && i.status!=='cancelled' && String(i.createdAt||'').slice(0,10)>=mStart && String(i.createdAt||'').slice(0,10)<=today)
    .reduce((s,i)=>s+calcInvoiceTotal(i).total, 0);
  const collected = receivedSum(sw ? 'sw' : 'sf', mStart, today).gross;
  const quotes = ((sw ? DB.quotes : DB.sfQuotes) || []).filter(q=>q.status==='sent');
  const qVal = quotes.reduce((s,q)=>s+calcQuoteTotal(q).total, 0);
  let bank = null;
  if(typeof FIN!=='undefined' && FIN.loaded){
    const name = sw ? 'SteadyWorks' : 'SteadyFlow';
    const last = FIN.rows.reduce((m,r)=>r.date>m ? r.date : m, '');
    const inn = FIN.rows.filter(r=>finBiz(r)===name && r.date>=mStart && r.date<=today && r.money_in>0 && !r.money_out).reduce((s,r)=>s+r.money_in, 0);
    bank = {inn, last, stale: !last || daysUntil(last+'T12:00:00') < -3};
  }
  return {invoiced, collected, quotes: quotes.length, qVal, bank, pace: clPace(collected, today)};
}

/* ---------- views ---------- */
function view_claudius(){
  clInjectStyle();
  if(!CL.loaded){
    if(!CL.loading && !CL.error) setTimeout(clLoad, 0);
    if(CL.error) return `<div class="card cl-wrap"><div class="empty-state">Couldn't load Claudius: ${esc(CL.error)}<br><br><button class="btn btn-gold" onclick="clReload()">Try again</button></div></div>`;
    return `<div class="empty-state">Loading today…</div>`;
  }
  clEnsureBank();
  return `<div class="cl-wrap">${clTodayHtml()}${clDecisionsHtml()}${clScoreHtml()}${clMessageHtml()}${clAllHtml()}</div>`;
}
function afterRender_claudius(){}

function clTodayHtml(){
  const {shown, more} = clTodayTasks(CL.tasks, clToday(), clOpenApprovalTaskIds());
  const rows = shown.map(t=>`
    <div class="cl-task">
      <button class="cl-tick" onclick="clDone('${t.id}')" aria-label="Mark done: ${esc(t.title)}">✓</button>
      <div class="cl-task-main">
        <div class="cl-task-title">${esc(t.title)}</div>
        ${t.next_action ? `<div class="cl-next">${esc(t.next_action)}</div>` : ''}
        <div class="cl-meta">${clPri(t.priority)}${clBizTag(t.business)}${clDueTxt(t)}${t.money_impact ? `<span class="cl-money">${esc(t.money_impact)}</span>` : ''}</div>
      </div>
    </div>`).join('');
  const done = CL.justDone.map(j=>`<div class="cl-justdone"><span>✓ ${esc(j.title)}</span><button class="cl-link" onclick="clUndoDone('${j.id}')">Undo</button></div>`).join('');
  return `<section class="card cl-card">
    <div class="cl-h"><span>Today</span><small>${new Date().toLocaleDateString('en-GB',{weekday:'long', day:'numeric', month:'short'})}</small></div>
    ${rows || `<div class="cl-empty">Nothing urgent on your list. Check the decisions below.</div>`}
    ${done}
    ${more ? `<button class="cl-link cl-more" onclick="CL.allOpen=true;CL.f.owner='lewis';clRefresh();document.getElementById('cl-all').scrollIntoView({behavior:'smooth'})">+${more} more urgent in All tasks</button>` : ''}
  </section>`;
}

function clDecisionsHtml(){
  const open = CL.msgs.filter(m=>m.kind==='approval' && m.status==='open');
  const decided = CL.msgs.filter(m=>m.kind==='approval' && m.status!=='open').slice(0, 5);
  const card = m => `
    <div class="cl-ask">
      <div class="cl-ask-title">${esc(m.title || 'Decision needed')}</div>
      ${m.body ? `<div class="cl-ask-body">${esc(m.body)}</div>` : ''}
      ${m.lewis_reply && CL.commentFor!==m.id ? `<div class="cl-reply">You: ${esc(m.lewis_reply)}</div>` : ''}
      ${CL.commentFor===m.id ? `<textarea id="cl-reply-${m.id}" class="cl-input" rows="2" placeholder="Your comment for Claudius">${esc(m.lewis_reply||'')}</textarea>` : ''}
      <div class="cl-ask-btns">
        <button class="btn cl-yes" onclick="clDecide('${m.id}','approved')">Approve</button>
        <button class="btn cl-no" onclick="clDecide('${m.id}','rejected')">Reject</button>
        ${CL.commentFor===m.id ? `<button class="btn btn-ghost" onclick="clSaveComment('${m.id}')">Save comment</button>` : `<button class="btn btn-ghost" onclick="clOpenComment('${m.id}')">Comment</button>`}
      </div>
    </div>`;
  const dec = decided.map(m=>`<div class="cl-decided"><span class="cl-st ${m.status}">${m.status==='approved'?'Approved':m.status==='rejected'?'Rejected':'Done'}</span><span class="cl-decided-t">${esc(m.title||'')}</span>${m.status!=='done' ? `<button class="cl-link" onclick="clReopen('${m.id}')">Reopen</button>` : ''}</div>`).join('');
  return `<section class="card cl-card">
    <div class="cl-h"><span>Needs your decision</span>${open.length ? `<span class="cl-count">${open.length}</span>` : ''}</div>
    ${open.map(card).join('') || `<div class="cl-empty">Nothing waiting on you.</div>`}
    ${decided.length ? `<button class="cl-link cl-more" onclick="CL.showDecided=!CL.showDecided;clRefresh()">${CL.showDecided?'Hide':'Show'} recent decisions (${decided.length})</button>${CL.showDecided ? dec : ''}` : ''}
  </section>`;
}

function clScoreHtml(){
  const block = key => {
    const s = clScore(key), p = s.pace, ahead = p.gap >= 0;
    const bankLine = !s.bank
      ? (typeof FIN!=='undefined' && FIN.error ? `<div class="cl-stale">Bank feed couldn't load</div>` : `<div class="cl-sub">Bank feed loading…</div>`)
      : `<div class="cl-sub">Bank in this month: <b>${gbp(s.bank.inn)}</b></div>${s.bank.stale ? `<div class="cl-stale">⚠ Bank feed last updated ${s.bank.last ? clShort(s.bank.last) : 'never'}: bank figures are behind</div>` : ''}`;
    return `<div class="cl-score ${key}">
      <div class="cl-score-h">${esc(CL_BIZ[key])}</div>
      <div class="cl-score-big">${gbp(s.collected)} <small>collected of ${gbp(CL_TARGET)}</small></div>
      <div class="cl-bar" role="img" aria-label="${Math.round(p.pct)}% of target; pace marker at ${Math.round(p.markPct)}%"><i style="width:${p.pct}%"></i><b style="left:${p.markPct}%" title="Where you should be today: ${gbp(Math.round(p.expected))}"></b></div>
      <div class="cl-pace ${ahead?'ok':'bad'}">${ahead ? `${gbp(Math.round(p.gap))} ahead of pace` : `${gbp(Math.round(-p.gap))} behind pace`} <span>(${gbp(Math.round(p.expected))} by today)</span></div>
      <div class="cl-sub">Invoiced this month: <b>${gbp(Math.round(s.invoiced))}</b></div>
      <div class="cl-sub">Quotes awaiting reply: <b>${s.quotes}</b>${s.quotes ? ` · ${gbp(Math.round(s.qVal))}` : ''}</div>
      ${bankLine}
    </div>`;
  };
  return `<section class="card cl-card">
    <div class="cl-h"><span>Scoreboard</span><small>${new Date().toLocaleDateString('en-GB',{month:'long'})} to date</small></div>
    <div class="cl-scores">${block('steadyworks')}${block('steadyflow')}</div>
    <div class="cl-foot">Collected = money received in Steady Ink (Targets ledger + paid invoices). The line on the bar is where £10k/month pace says you should be today.</div>
  </section>`;
}

function clMessageHtml(){
  const mine = CL.msgs.filter(m=>m.author==='lewis' && m.kind==='message').slice(0, 3);
  const theirs = CL.msgs.filter(m=>m.author==='claudius' && m.kind!=='approval').slice(0, 5);
  return `<section class="card cl-card">
    <div class="cl-h"><span>Message Claudius</span></div>
    <textarea id="cl-msg" class="cl-input" rows="3" placeholder="Anything for Claudius: an answer, a new job, a change of plan…"></textarea>
    <div class="cl-send-row"><small class="muted">Claudius reads these on its daily run.</small><button id="cl-send" class="btn btn-gold" onclick="clSend()">Send</button></div>
    ${mine.map(m=>`<div class="cl-msg mine"><div class="cl-msg-meta">You · ${clShort(m.created_at)} · ${m.status==='open' ? 'not read yet' : 'seen by Claudius'}${m.status==='open' ? ` <button class="cl-link" onclick="clDeleteMsg('${m.id}')">Delete</button>` : ''}</div>${esc(m.body||'')}</div>`).join('')}
    <div class="cl-sub-h">Latest from Claudius</div>
    ${theirs.map(m=>`<div class="cl-msg"><div class="cl-msg-meta">Claudius · ${clShort(m.created_at)}</div>${m.title ? `<b>${esc(m.title)}</b><br>` : ''}${esc(m.body||'')}</div>`).join('') || `<div class="cl-empty">No updates yet.</div>`}
  </section>`;
}

function clAllHtml(){
  const f = CL.f;
  const list = CL.tasks.filter(t=>(f.archived || !t.archived_at) && (f.done || t.status!=='done')
    && (f.biz==='all' || (f.biz==='other' ? !CL_BIZ[t.business] : t.business===f.biz))
    && (f.owner==='all' || (f.owner==='none' ? !t.owner : t.owner===f.owner)));
  const openCt = CL.tasks.filter(clIsOpen).length;
  const sel = (k, opts) => `<select class="cl-sel" onchange="clSetF('${k}', this.value)">${opts.map(([v,l])=>`<option value="${v}" ${f[k]===v?'selected':''}>${l}</option>`).join('')}</select>`;
  const row = t => `<div class="cl-row ${t.archived_at?'arch':''} ${t.status==='done'?'done':''}">
      ${clIsOpen(t) ? `<button class="cl-tick sm" onclick="clDone('${t.id}')" aria-label="Mark done">✓</button>` : t.status==='done' ? `<button class="cl-tick sm on" onclick="clUndoDone('${t.id}')" aria-label="Mark not done" title="Undo">✓</button>` : `<span class="cl-tick sm ghost"></span>`}
      <div class="cl-task-main"><div class="cl-row-t">${esc(t.title)}</div>
      <div class="cl-meta">${clPri(t.priority)}${clBizTag(t.business)}${t.owner ? `<span class="cl-own">${esc(t.owner)}</span>` : ''}${clIsOpen(t) ? clDueTxt(t) : ''}${t.money_impact ? `<span class="cl-money">${esc(t.money_impact)}</span>` : ''}${t.archived_at ? `<span class="cl-own">archived</span>` : ''}</div></div>
    </div>`;
  const shown = list.slice(0, 150);
  return `<section class="card cl-card" id="cl-all">
    <button class="cl-h cl-toggle" onclick="clToggleAll()" aria-expanded="${CL.allOpen}"><span>All tasks <small>${openCt} open</small></span><span class="cl-chev ${CL.allOpen?'on':''}">▾</span></button>
    ${CL.allOpen ? `
      <div class="cl-filters">
        ${sel('biz', [['all','All businesses'],['steadyworks','SteadyWorks'],['steadyflow','Steady Flow'],['both','Both'],['other','Other']])}
        ${sel('owner', [['all','Anyone'],['lewis','Lewis'],['claudius','Claudius'],['none','No owner']])}
        <label class="cl-chk"><input type="checkbox" ${f.done?'checked':''} onchange="clSetF('done', this.checked)"> Done</label>
        <label class="cl-chk"><input type="checkbox" ${f.archived?'checked':''} onchange="clSetF('archived', this.checked)"> Archived</label>
      </div>
      ${shown.map(row).join('') || `<div class="cl-empty">No tasks match.</div>`}
      ${list.length > shown.length ? `<div class="cl-foot">Showing the first ${shown.length} of ${list.length}.</div>` : ''}` : ''}
  </section>`;
}

function clInjectStyle(){
  if(document.getElementById('cl-style')) return;
  const s = document.createElement('style'); s.id = 'cl-style';
  s.textContent = `
  .cl-wrap{max-width:720px;margin:0 auto;display:flex;flex-direction:column;gap:14px;}
  .cl-card{padding:16px;}
  .cl-h{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:13px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold-light);margin-bottom:12px;}
  .cl-h small{font-size:12px;letter-spacing:0;text-transform:none;font-weight:600;color:var(--text-soft);}
  .cl-toggle{width:100%;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:left;font-family:inherit;}
  .cl-chev{transition:transform .15s;transform:rotate(-90deg);} .cl-chev.on{transform:none;}
  .cl-count{background:var(--gold);color:#fff;border-radius:20px;padding:2px 9px;font-size:12px;letter-spacing:0;}
  .cl-empty{color:var(--text-soft);font-size:14px;padding:6px 0;}
  .cl-task{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-top:1px solid var(--border);}
  .cl-task:first-of-type{border-top:0;padding-top:4px;}
  .cl-tick{flex:none;width:44px;height:44px;border-radius:12px;border:2px solid var(--success);background:transparent;color:var(--success);font-size:20px;font-weight:900;cursor:pointer;transition:background .15s,transform .1s;}
  .cl-tick:hover{background:rgba(34,197,94,.14);} .cl-tick:active{transform:scale(.94);}
  .cl-tick.sm{width:34px;height:34px;font-size:15px;border-radius:9px;}
  .cl-tick.on{background:var(--success);color:#04130a;} .cl-tick.ghost{border-color:var(--border);cursor:default;display:inline-block;}
  .cl-task-main{flex:1;min-width:0;}
  .cl-task-title{font-weight:700;font-size:15px;line-height:1.35;}
  .cl-next{font-size:13px;color:var(--text-soft);margin-top:3px;line-height:1.4;}
  .cl-meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;align-items:center;}
  .cl-pri,.cl-biz,.cl-due,.cl-money,.cl-own{font-size:11px;font-weight:800;padding:2px 8px;border-radius:20px;background:var(--card-alt);border:1px solid var(--border);color:var(--text-soft);}
  .cl-pri.P1{background:rgba(225,29,42,.18);border-color:rgba(225,29,42,.5);color:#FCA5A5;}
  .cl-pri.P2{background:rgba(245,158,11,.14);border-color:rgba(245,158,11,.45);color:#FCD34D;}
  .cl-biz.steadyflow{color:var(--teal);} .cl-biz.steadyworks{color:var(--gold-light);}
  .cl-due.over{color:#FCA5A5;border-color:rgba(239,68,68,.5);} .cl-due.now{color:#FCD34D;border-color:rgba(245,158,11,.5);} .cl-due.soon{color:var(--text);}
  .cl-money{color:#4ADE80;border-color:rgba(34,197,94,.4);background:rgba(34,197,94,.1);}
  .cl-justdone{display:flex;justify-content:space-between;gap:10px;align-items:center;font-size:13px;color:var(--text-soft);padding:8px 0;border-top:1px dashed var(--border);}
  .cl-justdone span{text-decoration:line-through;}
  .cl-link{background:none;border:0;color:var(--gold-light);font-weight:800;font-size:13px;cursor:pointer;padding:6px 0;font-family:inherit;}
  .cl-more{display:block;margin-top:6px;}
  .cl-ask{padding:12px 0;border-top:1px solid var(--border);} .cl-ask:first-of-type{border-top:0;padding-top:2px;}
  .cl-ask-title{font-weight:700;font-size:15px;line-height:1.35;}
  .cl-ask-body{font-size:13px;color:var(--text-soft);margin-top:4px;line-height:1.45;}
  .cl-reply{font-size:13px;margin-top:6px;padding:6px 10px;border-left:3px solid var(--gold);background:var(--card-alt);border-radius:6px;}
  .cl-ask-btns{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;}
  .cl-ask-btns .btn{min-height:42px;flex:1;min-width:90px;justify-content:center;}
  .cl-yes{background:var(--success);color:#04130a;font-weight:800;} .cl-no{background:transparent;border:1px solid rgba(239,68,68,.6);color:#FCA5A5;font-weight:800;}
  .cl-decided{display:flex;gap:8px;align-items:center;font-size:13px;padding:6px 0;border-top:1px dashed var(--border);}
  .cl-decided-t{flex:1;min-width:0;color:var(--text-soft);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .cl-st{font-size:11px;font-weight:800;padding:2px 8px;border-radius:20px;} .cl-st.approved{background:rgba(34,197,94,.16);color:#4ADE80;} .cl-st.rejected{background:rgba(239,68,68,.16);color:#FCA5A5;} .cl-st.done{background:var(--card-alt);color:var(--text-soft);}
  .cl-input{width:100%;box-sizing:border-box;background:var(--input-bg);border:1px solid var(--border);border-radius:10px;color:var(--text);padding:10px 12px;font-size:15px;margin-top:8px;}
  .cl-send-row{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:8px;}
  .cl-send-row .btn{min-height:42px;min-width:96px;justify-content:center;}
  .cl-sub-h{font-size:11px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--text-soft);margin:16px 0 4px;}
  .cl-msg{font-size:14px;line-height:1.45;padding:10px 12px;background:var(--card-alt);border:1px solid var(--border);border-radius:10px;margin-top:8px;white-space:pre-wrap;}
  .cl-msg.mine{border-color:rgba(225,29,42,.35);}
  .cl-msg-meta{font-size:11px;color:var(--text-soft);font-weight:700;margin-bottom:3px;white-space:normal;} .cl-msg-meta .cl-link{font-size:11px;padding:0 0 0 6px;}
  .cl-scores{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .cl-score{background:var(--card-alt);border:1px solid var(--border);border-radius:12px;padding:14px;}
  .cl-score-h{font-weight:800;font-size:14px;margin-bottom:6px;} .cl-score.steadyflow .cl-score-h{color:var(--teal);} .cl-score.steadyworks .cl-score-h{color:var(--gold-light);}
  .cl-score-big{font-size:24px;font-weight:900;letter-spacing:-.5px;} .cl-score-big small{font-size:12px;font-weight:600;color:var(--text-soft);letter-spacing:0;}
  .cl-bar{position:relative;height:10px;border-radius:6px;background:var(--input-bg);margin:10px 0 6px;}
  .cl-bar i{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:linear-gradient(90deg,var(--gold),var(--gold-light));}
  .cl-score.steadyflow .cl-bar i{background:var(--teal);}
  .cl-bar b{position:absolute;top:-4px;bottom:-4px;width:3px;margin-left:-1px;background:var(--text);border-radius:2px;}
  .cl-pace{font-size:13px;font-weight:800;margin-bottom:8px;} .cl-pace.ok{color:#4ADE80;} .cl-pace.bad{color:#FCA5A5;} .cl-pace span{font-weight:600;color:var(--text-soft);}
  .cl-sub{font-size:13px;color:var(--text-soft);margin-top:3px;} .cl-sub b{color:var(--text);}
  .cl-stale{font-size:12px;font-weight:700;color:#FCD34D;margin-top:6px;}
  .cl-foot{font-size:12px;color:var(--text-soft);margin-top:10px;line-height:1.4;}
  .cl-filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;align-items:center;}
  .cl-sel{background:var(--input-bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:8px 10px;font-size:13px;}
  .cl-chk{font-size:13px;color:var(--text-soft);display:flex;gap:5px;align-items:center;}
  .cl-row{display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-top:1px solid var(--border);}
  .cl-row-t{font-size:14px;font-weight:600;line-height:1.35;}
  .cl-row.done .cl-row-t,.cl-row.arch .cl-row-t{color:var(--text-soft);} .cl-row.done .cl-row-t{text-decoration:line-through;}
  @media(max-width:640px){
    .cl-scores{grid-template-columns:1fr;}
    .cl-card{padding:14px;}
  }`;
  document.head.appendChild(s);
}

// Exposed for tests.
window.CL_LOGIC = {clTodayTasks, clPace};
