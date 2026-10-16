/* ============================================================================
   APPROVALS — every video/reel for SteadyWorks and Steady Flow waits here until
   Lewis (the only approver) approves it, asks for changes, or rejects it.
   Data: Supabase `content_items` (owner-only RLS). Previews: private storage
   bucket `content-previews` at <user id>/<C###>.mp4 and <C###>_cover.jpg, played
   through short-lived signed URLs. "Upload previews" takes files named by their
   C### id (e.g. Claudius/approvals/media/) and puts them in the right place.
   ============================================================================ */

const AP_BUCKET = 'content-previews';
const AP_BIZ = {steadyworks:'SteadyWorks', steadyflow:'Steady Flow'};
const AP_TABS = [
  ['waiting','Waiting', s=>s==='awaiting approval'],
  ['changes','Changes requested', s=>s==='changes requested'],
  ['approved','Approved', s=>s==='approved'],
  ['done','Edited / scheduled / posted', s=>['edited','scheduled','posted'].includes(s)],
  ['rejected','Rejected', s=>s==='rejected'],
  ['all','All', ()=>true]
];
const AP = {loaded:false, loading:false, error:null, items:[], urls:{}, urlsExp:0, signing:false, tab:'waiting', biz:'all', noteFor:null, uploading:null};

/* ---------- pure helpers (exposed for tests) ---------- */
function apWaiting(items){ return (items||[]).filter(i=>i.status==='awaiting approval').length; }
// Soonest slot first; 'tbc' / 'reserve' / empty go last, then by id.
function apSort(items){
  const key = i => /^\d{4}-\d{2}-\d{2}/.test(i.slot||'') ? i.slot : '9999-'+(i.slot||'');
  return items.slice().sort((a,b)=> key(a)<key(b) ? -1 : key(a)>key(b) ? 1 : String(a.id).localeCompare(String(b.id)));
}
// 'C010.mp4' → {id:'C010', kind:'video', ext:'mp4'} · 'C010_cover.jpg' → kind 'cover'
function apParseFile(name){
  const m = /^([CE]\d{3})(_cover)?\.(mp4|mov|jpe?g|png)$/i.exec(String(name||'').trim());
  if(!m) return null;
  const ext = m[3].toLowerCase().replace('jpeg','jpg');
  const isImg = ['jpg','png'].includes(ext);
  if(!!m[2] !== isImg) return null; // covers are images, previews are videos
  return {id:m[1].toUpperCase(), kind: isImg ? 'cover' : 'video', ext};
}
function apSlotTxt(slot){
  if(!slot) return 'Slot tbc';
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/.exec(slot);
  if(!m) return slot==='reserve' ? 'Reserve' : 'Slot '+slot;
  const d = new Date(+m[1], +m[2]-1, +m[3]);
  return d.toLocaleDateString('en-GB',{weekday:'short', day:'numeric', month:'short'}) + (m[4] ? ` · ${m[4]}:${m[5]}` : '');
}

/* ---------- backend ---------- */
async function apLoad(){
  if(AP.loading) return; AP.loading = true; AP.error = null;
  try{
    if(!CURRENT_USER_ID) throw new Error('Sign in to see Approvals.');
    const {data, error} = await sb.from('content_items').select('*').order('id');
    if(error) throw error;
    AP.items = data || []; AP.loaded = true; AP.urlsExp = 0;
  }catch(e){ AP.error = e.message || String(e); console.warn('Approvals load failed', e); }
  AP.loading = false;
  if(currentRoute==='approvals') apRefresh();
  else if(currentRoute==='dashboard') renderPage();
  if(typeof renderNav==='function') renderNav();
}
function apReload(){ AP.loaded = false; AP.error = null; apLoad(); }
// One signed URL per preview/cover, valid for an hour; re-signed when close to expiry.
async function apSign(){
  if(AP.signing || (AP.urlsExp && Date.now() < AP.urlsExp)) return;
  const paths = [...new Set(AP.items.flatMap(i=>[i.preview_url, i.cover_url]).filter(Boolean))];
  if(!paths.length) return;
  AP.signing = true;
  try{
    const {data, error} = await sb.storage.from(AP_BUCKET).createSignedUrls(paths, 3600);
    if(error) throw error;
    AP.urls = {}; (data||[]).forEach(r=>{ if(r.signedUrl && !r.error) AP.urls[r.path] = r.signedUrl; });
    AP.urlsExp = Date.now() + 50*60*1000;
  }catch(e){ console.warn('Approvals: preview links failed', e); AP.urlsExp = Date.now() + 60*1000; }
  AP.signing = false; apRefresh();
}
async function apUpdate(id, patch){
  const {data, error} = await sb.from('content_items').update(patch).eq('id', id).select().maybeSingle();
  if(error || !data) throw (error || new Error('Not saved'));
  const i = AP.items.findIndex(x=>x.id===id); if(i>=0) AP.items[i] = data;
  return data;
}

/* ---------- actions ---------- */
async function apDecide(id, status){
  const box = document.getElementById('ap-note-'+id);
  const note = box ? box.value.trim() : '';
  if(status==='changes requested' && !note){ AP.noteFor = id; apRefresh(); toast('Say what needs changing first','✍️'); const b = document.getElementById('ap-note-'+id); if(b) b.focus(); return; }
  const patch = {status, decided_at: new Date().toISOString()};
  if(note) patch.lewis_note = note;
  try{
    await apUpdate(id, patch); AP.noteFor = null;
    toast(status==='approved' ? `${id} approved` : status==='rejected' ? `${id} rejected` : `Changes requested on ${id}`, status==='approved' ? '✅' : '✓');
  }catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  apRefresh(); renderNav();
}
async function apUndo(id){
  try{ await apUpdate(id, {status:'awaiting approval', decided_at:null}); toast(`${id} back to waiting`,'↩️'); }
  catch(e){ toast('Not saved — check your connection and try again.','⚠️'); }
  apRefresh(); renderNav();
}
function apToggleNote(id){ AP.noteFor = AP.noteFor===id ? null : id; apRefresh(); const b = document.getElementById('ap-note-'+id); if(b) b.focus(); }
function apSetTab(t){ AP.tab = t; apRefresh(); }
function apSetBiz(b){ AP.biz = b; apRefresh(); }
async function apCopyCaption(id){
  const it = AP.items.find(x=>x.id===id); if(!it || !it.caption) return;
  try{ await navigator.clipboard.writeText(it.caption); toast('Caption copied','📋'); }
  catch(e){ toast('Couldn\'t copy, select the text instead','⚠️'); }
}
function apOpenUpload(){ const inp = document.getElementById('ap-file'); if(inp) inp.click(); }
async function apUploadFiles(input){
  const files = [...(input.files||[])]; input.value = '';
  if(!files.length) return;
  const known = new Set(AP.items.map(i=>i.id));
  const plan = [], skipped = [];
  files.forEach(f=>{ const p = apParseFile(f.name); if(p && known.has(p.id)) plan.push({f, p}); else skipped.push(f.name); });
  if(!plan.length){ toast('No files matched a C### item (name them like C010.mp4 or C010_cover.jpg)','⚠️'); return; }
  let ok = 0, failed = [];
  for(let n=0; n<plan.length; n++){
    const {f, p} = plan[n];
    AP.uploading = `Uploading ${n+1} of ${plan.length}: ${f.name}`; apRefresh();
    const path = `${CURRENT_USER_ID}/${p.id}${p.kind==='cover' ? '_cover' : ''}.${p.ext}`;
    const type = f.type || ({mp4:'video/mp4', mov:'video/quicktime', jpg:'image/jpeg', png:'image/png'})[p.ext];
    const {error} = await sb.storage.from(AP_BUCKET).upload(path, f, {upsert:true, contentType:type, cacheControl:'3600'});
    if(error){ failed.push(f.name+': '+error.message); continue; }
    const col = p.kind==='cover' ? 'cover_url' : 'preview_url';
    const it = AP.items.find(x=>x.id===p.id);
    if(it && it[col]!==path){ try{ await apUpdate(p.id, {[col]: path}); }catch(e){ failed.push(f.name+': saved, but not linked'); continue; } }
    ok++;
  }
  AP.uploading = null; AP.urlsExp = 0;
  toast(`${ok} file${ok===1?'':'s'} uploaded${failed.length ? `, ${failed.length} failed` : ''}${skipped.length ? `, ${skipped.length} skipped` : ''}`, failed.length ? '⚠️' : '✅');
  if(failed.length) console.warn('Approvals upload problems:', failed);
  if(skipped.length) console.info('Approvals upload skipped (no matching C### item):', skipped);
  apRefresh();
}
function apRefresh(){
  if(currentRoute!=='approvals') return;
  const c = document.getElementById('content'); if(!c) return;
  // keep any half-typed note and the playing position of videos out of harm's way
  const noteBox = AP.noteFor && document.getElementById('ap-note-'+AP.noteFor); const keep = noteBox ? noteBox.value : '';
  c.innerHTML = view_approvals();
  const nb = AP.noteFor && document.getElementById('ap-note-'+AP.noteFor); if(nb && keep && !nb.value) nb.value = keep;
}

/* ---------- dashboard + nav hooks ---------- */
// Count for the Priorities strip and the nav badge; loads in the background the first time.
function apWaitingCount(){
  if(!AP.loaded){ if(!AP.loading && !AP.error && CURRENT_USER_ID) setTimeout(apLoad, 0); return 0; }
  return apWaiting(AP.items);
}

/* ---------- views ---------- */
function view_approvals(){
  apInjectStyle();
  if(!AP.loaded){
    if(!AP.loading && !AP.error) setTimeout(apLoad, 0);
    if(AP.error) return `<div class="card ap-wrap"><div class="empty-state">Couldn't load Approvals: ${esc(AP.error)}<br><br><button class="btn btn-gold" onclick="apReload()">Try again</button></div></div>`;
    return `<div class="empty-state">Loading videos…</div>`;
  }
  if(!AP.urlsExp || Date.now() >= AP.urlsExp) setTimeout(apSign, 0);
  const inBiz = AP.items.filter(i=>AP.biz==='all' || i.business===AP.biz);
  const tab = AP_TABS.find(t=>t[0]===AP.tab) || AP_TABS[0];
  const list = apSort(inBiz.filter(i=>tab[2](i.status)));
  const chips = AP_TABS.map(([k,l,f])=>{ const n = inBiz.filter(i=>f(i.status)).length;
    return `<button class="ap-chip ${AP.tab===k?'on':''}" onclick="apSetTab('${k}')">${l}<span>${n}</span></button>`; }).join('');
  const biz = [['all','Both brands'],['steadyworks','SteadyWorks'],['steadyflow','Steady Flow']]
    .map(([k,l])=>`<button class="ap-chip sm ${AP.biz===k?'on':''}" onclick="apSetBiz('${k}')">${l}</button>`).join('');
  return `<div class="ap-wrap">
    <input type="file" id="ap-file" multiple accept="video/mp4,video/quicktime,image/jpeg,image/png" style="display:none" onchange="apUploadFiles(this)">
    ${AP.uploading ? `<div class="ap-uploading">⏳ ${esc(AP.uploading)}</div>` : ''}
    <div class="ap-chips">${chips}</div>
    <div class="ap-chips">${biz}</div>
    ${list.map(apCardHtml).join('') || `<div class="card"><div class="empty-state">${AP.tab==='waiting' ? '✅ Nothing waiting for your approval.' : 'Nothing here.'}</div></div>`}
  </div>`;
}
function afterRender_approvals(){}

function apCardHtml(i){
  const vurl = i.preview_url && AP.urls[i.preview_url], curl = i.cover_url && AP.urls[i.cover_url];
  const media = vurl
    ? `<video class="ap-video" controls playsinline preload="none" ${curl ? `poster="${esc(curl)}"` : ''} src="${esc(vurl)}"></video>`
    : `<div class="ap-video ap-novideo">${AP.signing || !AP.urlsExp ? 'Loading preview…' : `No preview uploaded yet.<br><small>Use “Upload previews” and pick ${esc(i.id)}.mp4 (and ${esc(i.id)}_cover.jpg)</small>`}</div>`;
  const waiting = i.status==='awaiting approval' || i.status==='changes requested';
  const noteOpen = AP.noteFor===i.id;
  const stLabel = {'awaiting approval':'Waiting','changes requested':'Changes requested',approved:'Approved',rejected:'Rejected',edited:'Edited',scheduled:'Scheduled',posted:'Posted'}[i.status] || i.status;
  return `<article class="card ap-card">
    <div class="ap-media">${media}</div>
    <div class="ap-body">
      <div class="ap-top"><span class="ap-id">${esc(i.id)}</span><span class="ap-biz ${esc(i.business)}">${esc(AP_BIZ[i.business]||i.business)}</span><span class="ap-acct">${esc(i.account||'')}</span><span class="ap-st s-${esc(i.status.replace(/ /g,'-'))}">${esc(stLabel)}</span></div>
      <div class="ap-title">${esc(i.title)}</div>
      <div class="ap-slot">📅 ${esc(apSlotTxt(i.slot))}</div>
      ${i.recommendation ? `<div class="ap-rec"><b>Claudius:</b> ${esc(i.recommendation)}</div>` : ''}
      ${i.qc_notes ? `<details class="ap-qc"><summary>QC notes</summary><div>${esc(i.qc_notes)}</div></details>` : ''}
      ${i.caption ? `<div class="ap-cap-h"><span>Caption</span><button class="ap-link" onclick="apCopyCaption('${esc(i.id)}')">Copy</button></div><div class="ap-cap">${esc(i.caption)}</div>` : ''}
      ${i.lewis_note && !noteOpen ? `<div class="ap-note">You: ${esc(i.lewis_note)}</div>` : ''}
      ${noteOpen ? `<textarea id="ap-note-${esc(i.id)}" class="ap-input" rows="2" placeholder="What needs changing? (also saved with Approve/Reject)">${esc(i.lewis_note||'')}</textarea>` : ''}
      ${waiting ? `<div class="ap-btns">
          <button class="btn ap-yes" onclick="apDecide('${esc(i.id)}','approved')">Approve</button>
          ${noteOpen ? `<button class="btn ap-chg" onclick="apDecide('${esc(i.id)}','changes requested')">Send changes</button>` : `<button class="btn ap-chg" onclick="apToggleNote('${esc(i.id)}')">Request changes</button>`}
          <button class="btn ap-no" onclick="apDecide('${esc(i.id)}','rejected')">Reject</button>
        </div>`
      : `<div class="ap-decided">${i.decided_at ? `Decided ${new Date(i.decided_at).toLocaleDateString('en-GB',{day:'numeric', month:'short'})}` : ''}${['approved','rejected'].includes(i.status) ? ` <button class="ap-link" onclick="apUndo('${esc(i.id)}')">Undo</button>` : ''}</div>`}
    </div>
  </article>`;
}

function apInjectStyle(){
  if(document.getElementById('ap-style')) return;
  const s = document.createElement('style'); s.id = 'ap-style';
  s.textContent = `
  .ap-wrap{max-width:980px;margin:0 auto;display:flex;flex-direction:column;gap:14px;}
  .ap-chips{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;-webkit-overflow-scrolling:touch;}
  .ap-chip{flex:none;display:inline-flex;gap:7px;align-items:center;background:var(--card);border:1px solid var(--border);color:var(--text-soft);border-radius:20px;padding:8px 14px;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;min-height:38px;}
  .ap-chip span{background:var(--card-alt);border-radius:12px;padding:1px 8px;font-size:12px;color:var(--text);}
  .ap-chip.on{border-color:var(--gold);color:var(--text);background:rgba(225,29,42,.12);}
  .ap-chip.sm{padding:6px 12px;font-size:12px;min-height:32px;}
  .ap-uploading{background:var(--card-alt);border:1px solid var(--warning);color:#FCD34D;border-radius:10px;padding:10px 14px;font-weight:700;font-size:13px;}
  .ap-card{display:grid;grid-template-columns:260px 1fr;gap:18px;padding:16px;}
  .ap-media{min-width:0;}
  .ap-video{width:100%;aspect-ratio:9/16;max-height:470px;background:#000;border-radius:12px;display:block;object-fit:contain;}
  .ap-novideo{aspect-ratio:auto;min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--text-soft);font-size:13px;padding:16px;box-sizing:border-box;background:var(--card-alt);border:1px dashed var(--border);gap:6px;}
  .ap-body{min-width:0;display:flex;flex-direction:column;gap:8px;}
  .ap-top{display:flex;flex-wrap:wrap;gap:6px;align-items:center;}
  .ap-id,.ap-biz,.ap-acct,.ap-st{font-size:11px;font-weight:800;padding:2px 8px;border-radius:20px;background:var(--card-alt);border:1px solid var(--border);color:var(--text-soft);}
  .ap-id{color:var(--text);} .ap-biz.steadyworks{color:var(--gold-light);} .ap-biz.steadyflow{color:var(--teal);}
  .ap-st.s-awaiting-approval{color:#FCD34D;border-color:rgba(245,158,11,.5);} .ap-st.s-approved{color:#4ADE80;border-color:rgba(34,197,94,.5);}
  .ap-st.s-rejected{color:#FCA5A5;border-color:rgba(239,68,68,.5);} .ap-st.s-changes-requested{color:#FDBA74;border-color:rgba(249,115,22,.5);}
  .ap-title{font-size:17px;font-weight:800;line-height:1.3;}
  .ap-slot{font-size:13px;font-weight:700;color:var(--text-soft);}
  .ap-rec{font-size:13px;line-height:1.4;padding:8px 10px;border-radius:8px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);}
  .ap-qc{font-size:12.5px;color:var(--text-soft);line-height:1.45;} .ap-qc summary{cursor:pointer;font-weight:700;color:var(--text);} .ap-qc div{margin-top:6px;}
  .ap-cap-h{display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--text-soft);margin-top:4px;}
  .ap-cap{font-size:13.5px;line-height:1.45;white-space:pre-wrap;background:var(--card-alt);border:1px solid var(--border);border-radius:10px;padding:10px 12px;max-height:220px;overflow:auto;}
  .ap-link{background:none;border:0;color:var(--gold-light);font-weight:800;font-size:13px;cursor:pointer;padding:4px 0;font-family:inherit;letter-spacing:0;text-transform:none;}
  .ap-note{font-size:13px;padding:6px 10px;border-left:3px solid var(--gold);background:var(--card-alt);border-radius:6px;}
  .ap-input{width:100%;box-sizing:border-box;background:var(--input-bg);border:1px solid var(--border);border-radius:10px;color:var(--text);padding:10px 12px;font-size:15px;}
  .ap-btns{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:6px;}
  .ap-btns .btn{flex:1;min-width:90px;min-height:44px;justify-content:center;font-weight:800;white-space:normal;line-height:1.15;padding-left:8px;padding-right:8px;}
  .ap-yes{background:var(--success);color:#04130a;} .ap-chg{background:transparent;border:1px solid rgba(249,115,22,.6);color:#FDBA74;} .ap-no{background:transparent;border:1px solid rgba(239,68,68,.6);color:#FCA5A5;}
  .ap-decided{font-size:13px;color:var(--text-soft);margin-top:auto;}
  @media(max-width:700px){
    .ap-card{grid-template-columns:1fr;padding:12px;gap:12px;}
    .ap-video{max-height:70vh;}
  }`;
  document.head.appendChild(s);
}

// Exposed for tests.
window.AP_LOGIC = {apWaiting, apSort, apParseFile, apSlotTxt};
