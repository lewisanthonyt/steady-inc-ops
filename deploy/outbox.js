/* ============================================================================
   OUTBOX — outreach emails drafted by Claude / Claudius wait here for Lewis.
   Approve (edit first if needed) → "Send in Gmail" opens the email ready to go in the right
   business's Gmail, where that account's own signature is added → "Mark sent".
   Data: Supabase table outbound_emails (owner_id = auth.uid()).
   ============================================================================ */

const OB = {loaded:false, loading:false, error:null, rows:[], tab:'pending', biz:'all', open:null};
const OB_SITE = 'https://steadyink-os.netlify.app';
const OB_BIZ = {
  sw:{name:'SteadyWorks', color:'#E11D2A', defaultFrom:'steadyworksltd@gmail.com'},
  sf:{name:'Steady Flow', color:'#00ACB5', defaultFrom:'steadyflow.ma@gmail.com'}
};
const OB_TABS = [['pending','To approve'],['approved','Ready to send'],['sent','Sent'],['rejected','Rejected']];

function obFrom(biz){ const s = (DB.settings && DB.settings.outboxSenders) || {}; return s[biz] || OB_BIZ[biz].defaultFrom; }
function obSetFrom(biz, v){
  v = String(v||'').trim();
  if(v && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ toast('That doesn\'t look like an email address','⚠️'); return; }
  DB.settings.outboxSenders = Object.assign({}, DB.settings.outboxSenders||{}, {[biz]: v || OB_BIZ[biz].defaultFrom});
  save(); obRefresh(); toast(OB_BIZ[biz].name+' emails will open in '+obFrom(biz));
}

/* ---------- the two signatures (Gmail adds them; shown here so you see the finished email) ---------- */
function obSignature(biz){
  if(biz==='sw') return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;border-collapse:collapse;">
  <tr><td style="padding:0 14px 0 0;vertical-align:top;"><img src="${OB_SITE}/assets/signatures/steadyworks-logo.png" width="58" height="58" alt="SteadyWorks" style="display:block;border:0;width:58px;height:58px;border-radius:50%;"></td>
  <td style="vertical-align:top;border-left:3px solid #D5000F;padding:0 0 0 14px;">
    <div style="font-size:16px;font-weight:bold;line-height:20px;color:#1a1a1a;">Lewis Thomas</div>
    <div style="font-size:12px;font-weight:bold;letter-spacing:1.5px;line-height:18px;color:#D5000F;">STEADYWORKS LTD</div>
    <div style="font-size:12px;line-height:18px;color:#666;">Plumbing &amp; property maintenance · East London &amp; Essex</div>
    <div style="font-size:13px;line-height:20px;padding-top:6px;"><span style="color:#D5000F;font-weight:bold;">M</span>&nbsp;<a href="tel:+447375383915" style="color:#1a1a1a;text-decoration:none;">07375 383915</a>
      &nbsp;&nbsp;<span style="color:#D5000F;font-weight:bold;">E</span>&nbsp;<a href="mailto:steadyworksltd@gmail.com" style="color:#1a1a1a;text-decoration:none;">steadyworksltd@gmail.com</a></div>
    <div style="font-size:13px;line-height:20px;"><a href="https://wa.me/447375383915" style="color:#1a8f3c;font-weight:bold;text-decoration:none;">WhatsApp us a photo for a free quote</a>
      &nbsp;·&nbsp;<a href="https://instagram.com/steadyworksltd" style="color:#1a1a1a;text-decoration:none;">Instagram @steadyworksltd</a></div>
  </td></tr></table>`;
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:520px;font-family:'Segoe UI',Arial,sans-serif;">
  <tr><td colspan="3" style="padding:0;height:3px;background:#00ACB5;font-size:0;line-height:0;">&nbsp;</td></tr>
  <tr><td style="padding:18px 20px 18px 0;vertical-align:middle;width:104px;"><a href="https://steadyflowmarketing.agency" style="text-decoration:none;"><img src="${OB_SITE}/assets/signatures/steadyflow-logo.png" alt="Steady Flow" width="100" height="100" style="display:block;width:100px;height:100px;border-radius:50%;border:0;"></a></td>
  <td style="width:2px;background:#00ACB5;padding:0;font-size:0;line-height:0;">&nbsp;</td>
  <td style="padding:18px 0 18px 20px;vertical-align:middle;">
    <div style="font-size:17px;font-weight:700;color:#161F27;letter-spacing:-0.3px;margin-bottom:2px;">Lewis Thomas</div>
    <div style="font-size:12px;color:#00ACB5;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">Growth Partner · Steadyflow</div>
    <table cellpadding="0" cellspacing="0" border="0">
      <tr><td style="padding:2px 0;"><a href="https://calendly.com/enquires-steadyflowmarketing/30min" style="font-size:12px;font-weight:700;color:#00ACB5;text-decoration:none;">📅 Book a call today →</a></td></tr>
      <tr><td style="padding:2px 0;"><span style="font-size:12px;color:#999;">✉</span> <a href="mailto:l.thomas@steadyflowmarketing.agency" style="font-size:12px;color:#555;text-decoration:none;">l.thomas@steadyflowmarketing.agency</a></td></tr>
      <tr><td style="padding:2px 0;"><span style="font-size:12px;color:#999;">✉</span> <a href="mailto:steadyflow.ma@gmail.com" style="font-size:12px;color:#555;text-decoration:none;">steadyflow.ma@gmail.com</a></td></tr>
      <tr><td style="padding:2px 0;"><span style="font-size:12px;color:#999;">🌐</span> <a href="https://steadyflowmarketing.agency" style="font-size:12px;color:#00ACB5;text-decoration:none;font-weight:600;">steadyflowmarketing.agency</a></td></tr>
    </table></td></tr>
  <tr><td colspan="3" style="padding:0;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0A0F14;border-radius:0 0 8px 8px;"><tr>
    <td style="padding:10px 16px;"><span style="color:#7FE3E8;font-size:11px;font-weight:500;letter-spacing:0.3px;">Lead-generation websites for trades businesses</span></td>
    <td style="padding:10px 16px;text-align:right;white-space:nowrap;"><a href="https://steadyflowmarketing.agency" style="display:inline-block;background:#00ACB5;color:#0A0F14;font-size:11px;font-weight:700;text-decoration:none;padding:5px 14px;border-radius:4px;">Book a free audit →</a></td>
  </tr></table></td></tr></table>`;
}
async function obCopySignature(biz){
  const html = obSignature(biz);
  try{
    await navigator.clipboard.write([new ClipboardItem({'text/html':new Blob([html],{type:'text/html'}), 'text/plain':new Blob(['Lewis Thomas · '+OB_BIZ[biz].name],{type:'text/plain'})})]);
    toast(OB_BIZ[biz].name+' signature copied, now paste it into Gmail','✍️');
  }catch(e){
    const w = window.open('', '_blank'); if(w){ w.document.write('<p style="font-family:Arial">Select everything below (Cmd+A), copy (Cmd+C), then paste into Gmail.</p>'+html); w.document.close(); }
  }
}

/* ---------- data ---------- */
async function obLoad(){
  if(OB.loading) return; OB.loading = true; OB.error = null;
  try{
    if(!CURRENT_USER_ID) throw new Error('Sign in to see the Outbox.');
    const {data, error} = await sb.from('outbound_emails').select('*').eq('owner_id', CURRENT_USER_ID).order('created_at', {ascending:true}).limit(2000);
    if(error) throw error;
    OB.rows = data || []; OB.loaded = true;
  }catch(e){ OB.error = e.message || String(e); }
  OB.loading = false;
  if(typeof renderNav==='function') renderNav();
  if(['outbox','dashboard'].includes(currentRoute)) renderPage();
}
function obPendingCount(){
  if(!OB.loaded){ if(!OB.loading && !OB.error && typeof CURRENT_USER_ID!=='undefined' && CURRENT_USER_ID) setTimeout(obLoad, 0); return 0; }
  return OB.rows.filter(r=>r.status==='pending').length;
}
function obRow(id){ return OB.rows.find(r=>r.id===id); }
async function obUpdate(id, patch, msg){
  const r = obRow(id); if(!r) return false;
  const before = Object.assign({}, r);
  Object.assign(r, patch, {updated_at:new Date().toISOString()}); obRefresh();
  const {error} = await sb.from('outbound_emails').update(Object.assign({}, patch, {updated_at:r.updated_at})).eq('owner_id', CURRENT_USER_ID).eq('id', id);
  if(error){ Object.assign(r, before); obRefresh(); toast('Not saved: '+error.message,'⚠️'); return false; }
  if(msg) toast(msg,'✅');
  if(typeof renderNav==='function') renderNav();
  return true;
}
function obEdits(id){
  const v = k => { const el = document.getElementById('ob-'+k+'-'+id); return el ? el.value.trim() : null; };
  const p = {};
  [['to','to_email'],['subject','subject'],['body','body']].forEach(([k,col])=>{ const x = v(k); if(x!==null && x!==obRow(id)[col]) p[col] = x; });
  if(p.to_email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(p.to_email)){ toast('Check the "To" address','⚠️'); return null; }
  return p;
}

/* ---------- actions ---------- */
function obSaveEdits(id){ const p = obEdits(id); if(p===null) return; if(!Object.keys(p).length){ toast('No changes to save','ℹ️'); return; } obUpdate(id, p, 'Changes saved'); }
function obApprove(id){ const p = obEdits(id); if(p===null) return; obUpdate(id, Object.assign(p, {status:'approved', approved_at:new Date().toISOString()}), 'Approved, it\'s in "Ready to send"'); }
function obReject(id){
  const why = prompt('Why reject it? (helps the next drafts)', ''); if(why===null) return;
  obUpdate(id, {status:'rejected', note:why || 'Rejected'}, 'Rejected');
}
function obBack(id){ obUpdate(id, {status:'pending', approved_at:null}, 'Moved back to "To approve"'); }
function obGmailUrl(r){
  return 'https://mail.google.com/mail/?authuser='+encodeURIComponent(obFrom(r.biz))+'&view=cm&fs=1&to='+encodeURIComponent(r.to_email)+'&su='+encodeURIComponent(r.subject)+'&body='+encodeURIComponent(r.body+'\n');
}
function obOpenGmail(id){ const r = obRow(id); if(!r) return; window.open(obGmailUrl(r), '_blank'); OB.open = id; obRefresh(); }
async function obMarkSent(id){
  const r = obRow(id); if(!r) return;
  const ok = await obUpdate(id, {status:'sent', sent_at:new Date().toISOString()}, 'Marked sent');
  if(ok && r.lead_id){ try{ await sb.from('le_leads').update({last_contacted_at:new Date().toISOString()}).eq('id', r.lead_id); }catch(e){} }
}
async function obApproveAll(){
  const list = obVisible().filter(r=>r.status==='pending'); if(!list.length) return;
  if(!confirm('Approve all '+list.length+' emails shown, as they are?')) return;
  const now = new Date().toISOString(), ids = list.map(r=>r.id);
  list.forEach(r=>{ r.status = 'approved'; r.approved_at = now; }); obRefresh();
  const {error} = await sb.from('outbound_emails').update({status:'approved', approved_at:now, updated_at:now}).eq('owner_id', CURRENT_USER_ID).in('id', ids);
  if(error){ toast('Not saved: '+error.message,'⚠️'); OB.loaded = false; obLoad(); return; }
  toast(ids.length+' approved','✅'); if(typeof renderNav==='function') renderNav();
}

/* ---------- view ---------- */
function obVisible(){ return OB.rows.filter(r=>r.status===OB.tab && (OB.biz==='all' || r.biz===OB.biz)); }
function obRefresh(){ if(currentRoute==='outbox'){ const c = document.getElementById('content'); if(c) c.innerHTML = view_outbox(); } }
function obCard(r, i){
  const B = OB_BIZ[r.biz], edit = r.status==='pending' || r.status==='approved';
  const rows = Math.min(22, Math.max(8, String(r.body).split('\n').length + 2));
  return `<div class="card ob-card" style="--obc:${B.color}">
    <div class="ob-top"><span class="ob-n">${i+1}</span>
      <div class="ob-who"><b>${esc(r.to_name || r.to_email)}</b><small>${esc(B.name)} · from ${esc(obFrom(r.biz))}${r.batch?' · '+esc(r.batch):''}</small></div>
      <span class="ob-biz">${esc(B.name)}</span></div>
    ${r.note ? `<div class="ob-note">📝 ${esc(r.note)}</div>` : ''}
    <label class="ob-l">To</label>${edit ? `<input type="text" class="input" id="ob-to-${r.id}" value="${esc(r.to_email)}">` : `<div>${esc(r.to_email)}</div>`}
    <label class="ob-l">Subject</label>${edit ? `<input type="text" class="input" id="ob-subject-${r.id}" value="${esc(r.subject)}">` : `<div><b>${esc(r.subject)}</b></div>`}
    <label class="ob-l">Message</label>${edit ? `<textarea class="input ob-body" id="ob-body-${r.id}" rows="${rows}">${esc(r.body)}</textarea>` : `<pre class="ob-pre">${esc(r.body)}</pre>`}
    <div class="ob-sig"><div class="ob-l">Signature (added by Gmail)</div><div class="ob-sig-box">${obSignature(r.biz)}</div></div>
    <div class="ob-act">
      ${r.status==='pending' ? `<button class="btn btn-gold" onclick="obApprove('${r.id}')">✅ Approve</button><button class="btn btn-ghost" onclick="obSaveEdits('${r.id}')">💾 Save edits</button><button class="btn btn-ghost" onclick="obReject('${r.id}')">❌ Reject</button>` : ''}
      ${r.status==='approved' ? `<button class="btn btn-gold" onclick="obSaveEdits('${r.id}');obOpenGmail('${r.id}')">✉️ Send in Gmail</button><button class="btn ${OB.open===r.id?'btn-gold':'btn-ghost'}" onclick="obMarkSent('${r.id}')">✓ Mark sent</button><button class="btn btn-ghost" onclick="obBack('${r.id}')">↩ Back to approval</button>` : ''}
      ${r.status==='sent' ? `<span class="muted small">Sent ${r.sent_at ? fmtDate(r.sent_at.slice(0,10)) : ''}</span>` : ''}
      ${r.status==='rejected' ? `<button class="btn btn-ghost" onclick="obBack('${r.id}')">↩ Reconsider</button>` : ''}
    </div>
  </div>`;
}
function view_outbox(){
  obInjectStyle();
  if(!OB.loaded){
    if(!OB.loading && !OB.error) setTimeout(obLoad, 0);
    return OB.error ? `<div class="card"><div class="empty-state">${esc(OB.error)}<br><br><button class="btn btn-gold" onclick="OB.error=null;obLoad()">Try again</button></div></div>` : `<div class="empty-state">Loading outbox…</div>`;
  }
  const count = s => OB.rows.filter(r=>r.status===s && (OB.biz==='all' || r.biz===OB.biz)).length;
  const list = obVisible();
  const tabs = OB_TABS.map(([k,l])=>`<button class="${OB.tab===k?'on':''}" onclick="OB.tab='${k}';OB.open=null;obRefresh()">${l} <span>${count(k)}</span></button>`).join('');
  const bizSel = `<select class="input ob-bizsel" onchange="OB.biz=this.value;obRefresh()">${[['all','Both businesses'],['sw','SteadyWorks'],['sf','Steady Flow']].map(([v,l])=>`<option value="${v}" ${OB.biz===v?'selected':''}>${l}</option>`).join('')}</select>`;
  const help = {pending:'Read each one. Edit anything, then Approve, or Reject with a reason.', approved:'"Send in Gmail" opens it ready to go in the right account, and Gmail adds that business\'s signature. Press Send there, then "Mark sent" here.',
    sent:'Sent emails. Follow-ups are tracked in Lead Engine.', rejected:'Rejected drafts, with your reasons. These help the next batch.'}[OB.tab];
  const setup = `<details class="card ob-setup"><summary>✍️ Signatures &amp; sending accounts <span class="muted small">set up once per Gmail account</span></summary>
    <div class="ob-setup-grid">${['sw','sf'].map(b=>`<div><div class="ob-l">${OB_BIZ[b].name} sends from</div>
      <input type="text" class="input" value="${esc(obFrom(b))}" onchange="obSetFrom('${b}', this.value)">
      <div class="ob-sig-box" style="margin-top:8px;">${obSignature(b)}</div>
      <button class="btn btn-ghost btn-sm" style="margin-top:8px;" onclick="obCopySignature('${b}')">📋 Copy ${OB_BIZ[b].name} signature</button></div>`).join('')}</div>
    <ol class="small ob-steps"><li>Click <b>Copy … signature</b> above.</li><li>Open Gmail signed in as that business's address → ⚙️ <b>See all settings</b> → <b>General</b> → <b>Signature</b> → <b>Create new</b> → paste (Cmd+V). The logo comes with it.</li>
      <li>Under <b>Signature defaults</b>, choose it for <b>new emails</b>, then <b>Save changes</b> at the bottom.</li><li>Repeat in the other account. Every email sent from here then carries the right signature.</li></ol></details>`;
  return `${setup}
  <div class="ob-bar"><div class="ob-tabs">${tabs}</div>${bizSel}${OB.tab==='pending' && list.length ? `<button class="btn btn-ghost btn-sm" onclick="obApproveAll()">✅ Approve all shown</button>` : ''}</div>
  <div class="muted small" style="margin:0 0 12px;">${help}</div>
  ${list.length ? list.map(obCard).join('') : `<div class="card"><div class="empty-state">${OB.tab==='pending' ? '✅ Nothing waiting for approval.' : 'Nothing here yet.'}</div></div>`}`;
}
function obInjectStyle(){
  if(document.getElementById('ob-style')) return;
  const s = document.createElement('style'); s.id = 'ob-style';
  s.textContent = `
  .ob-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:8px;} .ob-bizsel{width:auto;min-width:160px;}
  .ob-tabs{display:flex;flex-wrap:wrap;gap:6px;} .ob-tabs button{background:var(--input-bg);border:1px solid var(--border);color:var(--text-soft);border-radius:9px;padding:7px 12px;font-weight:700;font-size:12.5px;}
  .ob-tabs button.on{background:var(--gold);color:#fff;border-color:transparent;} .ob-tabs button span{opacity:.8;margin-left:4px;}
  .ob-card{border-left:4px solid var(--obc);margin-bottom:14px;}
  .ob-top{display:flex;gap:10px;align-items:center;margin-bottom:8px;} .ob-who{flex:1;min-width:0;} .ob-who small{display:block;color:var(--text-soft);font-size:12px;}
  .ob-n{width:28px;height:28px;border-radius:50%;background:var(--obc);color:#fff;display:grid;place-items:center;font-weight:800;flex:none;}
  .ob-biz{font-size:11px;font-weight:800;color:var(--obc);border:1px solid var(--obc);border-radius:6px;padding:2px 7px;white-space:nowrap;}
  .ob-l{display:block;font-size:11px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--text-soft);margin:10px 0 4px;}
  .ob-body{width:100%;font-family:inherit;line-height:1.5;resize:vertical;} .ob-pre{white-space:pre-wrap;font-family:inherit;margin:0;}
  .ob-note{font-size:12.5px;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.3);border-radius:8px;padding:6px 10px;}
  .ob-sig-box{background:#fff;border-radius:10px;padding:12px;overflow-x:auto;max-width:100%;}
  .ob-act{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:12px;}
  .ob-setup summary{cursor:pointer;font-weight:800;} .ob-setup{margin-bottom:14px;}
  .ob-setup-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:12px;} .ob-steps{margin:14px 0 0;padding-left:18px;line-height:1.6;}
  @media (max-width:800px){ .ob-setup-grid{grid-template-columns:1fr;} }`;
  document.head.appendChild(s);
}
