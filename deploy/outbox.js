/* ============================================================================
   OUTBOX — outreach emails drafted by Claude / Claudius wait here for Lewis.
   Approve (edit first if needed) → "Send in Gmail" opens the email ready to go in the right
   business's Gmail, where that account's own signature is added → "Mark sent".
   Data: Supabase table outbound_emails (owner_id = auth.uid()).
   ============================================================================ */

const OB = {loaded:false, loading:false, error:null, rows:[], tab:'pending', biz:'all', open:null, owner:null, channel:'all', suppression:[], report:[], busy:false};
const OB_SITE = 'https://steadyink-os.netlify.app';
const OB_BIZ = {
  sw:{name:'SteadyWorks', color:'#E11D2A', defaultFrom:'steadyworksltd@gmail.com'},
  sf:{name:'Steady Flow', color:'#00ACB5', defaultFrom:'steadyflow.ma@gmail.com'}
};
const OC = OutreachCore;
const OB_TABS = [['pending','To approve'],['approved','Ready to send'],['sent','Sent'],['done','Done'],['rejected','Rejected']];

function obFrom(biz){ const s = (DB.settings && DB.settings.outboxSenders) || {}; return s[biz] || OB_BIZ[biz].defaultFrom; }
function obSetFrom(biz, v){
  obOwner();
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

/* ---------- owner-scoped data and suppression ---------- */
function obOwner(){ if(!CURRENT_USER_ID || CURRENT_PROFILE.role!=='owner') throw Error('Owner access is required.'); return CURRENT_USER_ID; }
async function obAll(table,owner){
  const rows=[]; for(let from=0;;from+=1000){
    const {data,error}=await sb.from(table).select('*').eq('owner_id',owner).order(table==='le_suppression'?'key_hash':'id').range(from,from+999);
    if(error) throw error; rows.push(...(data||[])); if(!data || data.length<1000) return rows;
  }
}
async function obHash(k){ const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(k)); return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join(''); }
async function obSuppressed(r,hashes){ return (await Promise.all(OC.keys(r).map(obHash))).some(k=>hashes.has(k)); }
async function obFreshSuppression(owner){ return new Set((await obAll('le_suppression',owner)).map(r=>r.key_hash)); }
async function obLoad(){
  if(OB.loading) return; OB.loading=true; OB.error=null;
  try{
    const owner=obOwner(); if(OB.owner!==owner){ OB.rows=[]; OB.loaded=false; }
    const [rows,hashes]=await Promise.all([obAll('outbound_emails',owner),obFreshSuppression(owner)]);
    if(obOwner()!==owner) return;
    OB.owner=owner; OB.rows=rows.sort((a,b)=>String(a.created_at).localeCompare(String(b.created_at))||String(a.id).localeCompare(String(b.id))).map(r=>Object.assign({channel:'email',step:1,legal_type:'unknown'},r)); OB.suppression=hashes;
    await Promise.all(OB.rows.map(async r=>{r._blocked=await obSuppressed(r,hashes);})); OB.loaded=true;
  }catch(e){ OB.error=e.message||String(e); OB.loaded=false; }
  finally{ OB.loading=false; }
  obRefresh(); if(typeof renderNav==='function') renderNav();
}
function obPendingCount(){
  if(!CURRENT_USER_ID || CURRENT_PROFILE.role!=='owner') return 0;
  if(OB.owner!==CURRENT_USER_ID || !OB.loaded){ if(!OB.loading&&!OB.error) setTimeout(obLoad,0); return 0; }
  return OB.rows.filter(r=>r.status==='pending').length;
}
function obRow(id){ return OB.owner===CURRENT_USER_ID ? OB.rows.find(r=>r.id===id) : null; }
async function obUpdate(id,patch,msg){
  const owner=obOwner(),r=obRow(id); if(!r) throw Error('Reload the desk first.');
  const {data,error}=await sb.from('outbound_emails').update(Object.assign({},patch,{updated_at:new Date().toISOString()})).eq('owner_id',owner).eq('id',id).eq('updated_at',r.updated_at).select('*').maybeSingle();
  if(error||!data) throw error||Error('This item changed in another tab. Reload before editing.');
  if(obOwner()!==owner) return false;
  Object.assign(r,data); if(msg) toast(msg,'✅'); return true;
}
async function obRun(fn){ if(OB.busy) return; OB.busy=true; try{ await fn(); }catch(e){ toast(e.message||'Not saved','⚠️'); }finally{ OB.busy=false; obRefresh(); } }
function obEdits(id){
  const r=obRow(id),p={}; if(!r) throw Error('Reload the desk first.');
  ['biz','channel','to_name','organisation','legal_type','contact_name','to_email','phone','profile_url','step','subject','body','why_prospect','source_url','batch_week','note','override_note','message_kind'].forEach(k=>{
    const el=document.getElementById('ob-'+k+'-'+id); if(el) p[k]=k==='step'?Number(el.value):el.value.trim();
  }); return p;
}
async function obCheck(r,completion){
  if(!r) throw Error('Reload the desk first.');
  if(completion){
    const {data,error}=await sb.from('outbound_emails').select('*').eq('owner_id',obOwner()).eq('id',r.id).maybeSingle();
    if(error) throw error;
    if(!data || data.status!=='approved' || data.updated_at!==r.updated_at) throw Error('This approval changed. Reload the desk first.');
  }
  const hashes=await obFreshSuppression(obOwner()); const blocked=await obSuppressed(r,hashes);
  const errors=completion?OC.completionErrors(r,blocked):OC.approvalErrors(r,blocked);
  if(errors.length) throw Error(errors.join(' '));
}
/* Editing an approved draft always removes its approval. No save/open race. */
function obSaveEdits(id){ return obRun(async()=>{ await obUpdate(id,Object.assign(obEdits(id),{status:'pending',approved_at:null}),'Saved for approval'); }); }
function obApprove(id){ return obRun(async()=>{ const r=Object.assign({},obRow(id),obEdits(id)); await obCheck(r,false); await obUpdate(id,Object.assign(obEdits(id),{status:'approved',approved_at:new Date().toISOString()}),'Approved'); }); }
function obReject(id){ const note=prompt('Why reject this draft?',''); if(note!==null) obRun(()=>obUpdate(id,{status:'rejected',note},'Rejected')); }
function obBack(id){ return obRun(()=>obUpdate(id,{status:'pending',approved_at:null},'Back to approval')); }
function obGmailUrl(r){ return 'https://mail.google.com/mail/?authuser='+encodeURIComponent(obFrom(r.biz))+'&view=cm&fs=1&to='+encodeURIComponent(r.to_email)+'&su='+encodeURIComponent(r.subject)+'&body='+encodeURIComponent(r.body+'\n'); }
function obOpenGmail(id){
  // Reserve a tab in the user gesture, then validate current suppression before navigating.
  if(OB.busy) return;
  const w=window.open('about:blank','_blank'); if(!w){ toast('Allow pop-ups to open Gmail','⚠️'); return; } w.opener=null;
  return obRun(async()=>{ try{const r=obRow(id); if(!r||r.channel!=='email') throw Error('Choose an approved email.'); await obCheck(r,true); w.location.href=obGmailUrl(r); OB.open=id;}catch(e){w.close();throw e;} });
}
function obOpenNext(){ const after=OB.open?OB.rows.findIndex(r=>r.id===OB.open):-1; const r=OB.rows.find((r,i)=>i>after&&r.status==='approved'&&r.channel==='email'&&(OB.biz==='all'||r.biz===OB.biz)&&r.id!==OB.open); if(r) obOpenGmail(r.id); else toast('No next approved email'); }
function obMarkSent(id){ return obRun(async()=>{ const r=obRow(id); if(r.channel==='call') throw Error('Use a call outcome.'); await obCheck(r,true); await obUpdate(id,{status:'sent',sent_at:new Date().toISOString()},'Marked sent'); }); }
function obCopy(id){ return obRun(async()=>{const r=obRow(id);await obCheck(r,true);await navigator.clipboard.writeText(r.body);toast('Copied');}); }
function obOpenProfile(id){
  if(OB.busy) return;
  const w=window.open('about:blank','_blank'); if(!w) return; w.opener=null;
  return obRun(async()=>{try{const r=obRow(id);await obCheck(r,true);w.location.href=OC.profile(r.profile_url,r.channel);}catch(e){w.close();throw e;}});
}
function obCall(id){ return obRun(async()=>{ const r=obRow(id);const box=document.getElementById('ob-tps-'+id); const checked=!!(box&&box.checked)||r.tps_checked;
  await obCheck(Object.assign({},r,{tps_checked:checked}),true);
  if(!r.tps_checked) await obUpdate(id,{tps_checked:true,tps_checked_at:new Date().toISOString()});
  window.location.href='tel:'+String(r.phone).replace(/[^\d+]/g,'');
}); }
function obCallOutcome(id,outcome){ return obRun(async()=>{
  const r=obRow(id),box=document.getElementById('ob-tps-'+id),checked=!!(box&&box.checked)||r.tps_checked;
  const row=Object.assign({},r,{tps_checked:checked}); await obCheck(row,true);
  const callback=document.getElementById('ob-callback-'+id).value;
  const next=OC.followup(row,outcome,callback,new Date());
  const hashes=await Promise.all(OC.keys(row).map(obHash));
  const {error}=await sb.rpc('outreach_complete_call',{p_id:id,p_outcome:outcome,p_callback:outcome==='call back'?callback:null,p_checked:checked,p_hashes:hashes});
  if(error) throw error; await obLoad(); toast(next?'Call recorded; new draft awaits approval':'Call recorded');
}); }
function obOptOut(id){ return obRun(async()=>{
  const r=obRow(id),hashes=await Promise.all(OC.keys(r).map(obHash));
  const {error}=await sb.rpc('outreach_opt_out',{p_id:id,p_hashes:hashes}); if(error) throw error;
  await obLoad(); toast('Added to the shared do-not-contact list');
}); }
function obReply(id){ if(obRow(id).replied_at){toast('Reply already recorded');return;} return obRun(()=>obUpdate(id,{replied_at:new Date().toISOString()},'Reply recorded')); }
function obTargets(biz,channel,value){ obOwner(); const n=Number(value); if(!Number.isInteger(n)||n<0||n>100000){toast('Use a whole target between 0 and 100,000','⚠️');return;}
  DB.settings.outreachTargets=Object.assign({},DB.settings.outreachTargets||{}); DB.settings.outreachTargets[biz]=Object.assign({},OC.targets(DB.settings.outreachTargets,biz),{[channel]:n});save();obRefresh();
}
function obImportFile(file){ if(!file) return; return obRun(async()=>{
  if(file.size>5*1024*1024) throw Error('Batch files must be smaller than 5 MB.');
  const input=JSON.parse(await file.text()),owner=obOwner(); const hashes=await obFreshSuppression(owner);
  const blocked=new Set(); if(input&&Array.isArray(input.items)) for(const r of input.items){if(r&&typeof r==='object'&&await obSuppressed(r,hashes)) blocked.add(r.id);}
  const existing=await obAll('outbound_emails',owner); const batch=OC.parseBatch(input,existing,r=>blocked.has(r.id),new Date());
  OB.report=batch.skipped; let imported=0;
  for(const row of batch.rows){
    if(obOwner()!==owner) throw Error('Account changed; import stopped.');
    if(await obSuppressed(row,await obFreshSuppression(owner))){OB.report.push({id:row.id,reason:'On the do-not-contact list.'});continue;}
    const {error}=await sb.from('outbound_emails').insert(Object.assign({owner_id:owner,dedupe_key:OC.duplicateKey(row)},row));
    if(error){OB.report.push({id:row.id,reason:error.code==='23505'?'Duplicate item.':error.message});}else imported++;
  }
  await obLoad();toast(imported+' imported; '+OB.report.length+' skipped');
}); }
/* ---------- view ---------- */
function obArg(v){ return esc(JSON.stringify(v)); }
function obVisible(){ return OB.rows.filter(r=>r.status===OB.tab&&(OB.biz==='all'||r.biz===OB.biz)&&(OB.channel==='all'||r.channel===OB.channel)); }
function obRefresh(){ if(currentRoute==='outbox'){const c=document.getElementById('content');if(c)c.innerHTML=view_outbox();} }
function obField(r,key,label,options){
  const edit=r.status==='pending', value=r[key]==null?'':r[key];
  return `<label class="ob-l" for="ob-${key}-${esc(r.id)}">${label}</label>`+(edit?(options?`<select class="input" id="ob-${key}-${esc(r.id)}">${options.map(v=>`<option ${String(value)===String(v)?'selected':''}>${esc(v)}</option>`).join('')}</select>`:`<${['body','note','why_prospect'].includes(key)?'textarea':'input'} class="input ob-body" id="ob-${key}-${esc(r.id)}" ${['body','note','why_prospect'].includes(key)?'rows="4"':'value="'+esc(value)+'"'}>${['body','note','why_prospect'].includes(key)?esc(value):''}${['body','note','why_prospect'].includes(key)?'</textarea>':''}`):`<div class="ob-pre">${esc(value)||'—'}</div>`);
}
function obCharacterCount(id){const r=obRow(id),el=document.getElementById('ob-body-'+id),kind=document.getElementById('ob-message_kind-'+id),out=document.getElementById('ob-count-'+id);if(out)out.textContent=Array.from(el?el.value:r.body||'').length+' characters'+(r.channel==='linkedin'?' · '+((kind?kind.value:r.message_kind)==='connection'?'connection note limit 300':'message guide about 1,000'):'');}
function obCard(r,i){
  const B=OB_BIZ[r.biz]||OB_BIZ.sf, a=obArg(r.id), pending=r.status==='pending', ready=r.status==='approved';
  const errors=OC.approvalErrors(r,r._blocked);
  return `<div class="card ob-card" style="--obc:${B.color}"><div class="ob-top"><span class="ob-n">${i+1}</span><div class="ob-who"><b>${esc(r.to_name||r.organisation||r.to_email)}</b><small>${esc(B.name)} · ${esc(r.channel)} · step ${r.step||1} · ${esc(r.batch_week||r.batch||'')}</small></div></div>
    ${errors.length?`<div class="ob-note">${errors.map(esc).join('<br>')}</div>`:''}
    <div class="ob-setup-grid">${[['biz','Business',['sf','sw']],['channel','Channel',OC.channels],['to_name','Prospect name'],['organisation','Organisation'],['legal_type','Legal type',OC.legalTypes],['contact_name','Role or contact name'],['to_email','Email'],['phone','Phone'],['profile_url','Profile URL'],['step','Step',[1,2,3]],['batch_week','Batch week (Monday)'],['source_url','Source URL']].map(f=>'<div>'+obField(r,...f)+'</div>').join('')}</div>
    ${obField(r,'why_prospect','Why this prospect')}${r.channel==='email'?obField(r,'subject','Draft subject'):''}
    ${r.channel==='linkedin'?obField(r,'message_kind','LinkedIn format',['connection','message']):''}
    ${obField(r,'body',r.channel==='call'?'Call script':'Draft body')}
    ${['linkedin','instagram'].includes(r.channel)?`<div id="ob-count-${esc(r.id)}" class="small muted">${Array.from(r.body||'').length} characters${r.channel==='linkedin'?' · connection note limit 300; message guide about 1,000':''}</div>`:''}
    ${obField(r,'note','Notes')}${r.channel==='email'?obField(r,'override_note','Manual legal-type override reason (optional)'):''}
    ${r.due_date?`<p>Follow-up due ${esc(r.due_date)}</p>`:''}
    ${r.outcome?`<p>Outcome: ${esc(r.outcome)}</p>`:''}
    <div class="ob-act">
      ${pending?`<button class="btn btn-gold" onclick="obApprove(${a})">Approve</button><button class="btn btn-ghost" onclick="obSaveEdits(${a})">Save edits</button><button class="btn btn-ghost" onclick="obReject(${a})">Reject</button>`:''}
      ${ready?`<button class="btn btn-ghost" onclick="obBack(${a})">Edit / back to approval</button>`:''}
      ${ready&&r.channel==='email'?`<button class="btn btn-gold" onclick="obOpenGmail(${a})">Send in Gmail</button><button class="btn btn-ghost" onclick="obMarkSent(${a})">Mark sent</button>`:''}
      ${ready&&['linkedin','instagram'].includes(r.channel)?`<button class="btn btn-gold" onclick="obCopy(${a})">Copy</button><a class="btn btn-ghost" href="${esc(OC.profile(r.profile_url,r.channel))}" target="_blank" rel="noopener noreferrer" onclick="event.preventDefault();obOpenProfile(${a})">Open profile</a><button class="btn btn-ghost" onclick="obMarkSent(${a})">Mark sent</button>`:''}
      ${ready&&r.channel==='call'?`<label><input type="checkbox" id="ob-tps-${esc(r.id)}" ${r.tps_checked?'checked':''}> TPS/CTPS checked</label><a href="tel:${esc(String(r.phone||'').replace(/[^\d+]/g,''))}" onclick="event.preventDefault();obCall(${a})">Call ${esc(r.phone)}</a><label>Callback date <input class="input" type="date" id="ob-callback-${esc(r.id)}" min="${OC.day(new Date())}"></label>${OC.outcomes.map(o=>`<button class="btn btn-ghost" onclick="obCallOutcome(${a},${obArg(o)})">${esc(o)}</button>`).join('')}`:''}
      ${['sent','done'].includes(r.status)?`<button class="btn btn-ghost" onclick="obReply(${a})">Record reply</button>`:''}
      <button class="btn btn-ghost" onclick="obOptOut(${a})">Record opt-out</button>
      ${r.status==='rejected'?`<button class="btn btn-ghost" onclick="obBack(${a})">Reconsider</button>`:''}
    </div><small class="muted">Created ${esc(r.created_at||'')} · Updated ${esc(r.updated_at||'')}${r.replied_at?' · Reply '+esc(r.replied_at):''}</small></div>`;
}
function obDashboard(){
  const summary=OC.weeklySummary(OB.rows,DB.settings.outreachTargets,new Date()),total=summary.combined;
  const cards=['sf','sw'].map(b=>{const w=summary.businesses[b];return `<div class="card"><h3>${OB_BIZ[b].name} this week</h3><p>Week starting ${OC.weekStart(new Date())} · Replies ${w.replies}</p>${OC.channels.map(c=>`<div>${c}: <b>${w.counts[c]} / ${w.targets[c]}</b> ${c==='call'?'done':'sent'}</div>`).join('')}<details><summary>Call outcomes</summary>${Object.entries(w.outcomes).map(([k,v])=>`<div>${k}: ${v}</div>`).join('')}</details></div>`;}).join('');
  return `<div class="card"><b>Combined this week</b> · ${OC.channels.map(c=>`${c}: <b>${total.counts[c]} / ${total.targets[c]}</b> ${c==='call'?'done':'sent'}`).join(' · ')} · Replies ${total.replies}</div><div class="ob-setup-grid">${cards}</div>`;
}
function view_outbox(){
  obInjectStyle(); if(!CURRENT_USER_ID||CURRENT_PROFILE.role!=='owner') return '<div class="card">Owner access is required.</div>';
  if(!OB.loaded||OB.owner!==CURRENT_USER_ID){if(!OB.loading&&!OB.error)setTimeout(obLoad,0);return `<div class="card">${OB.error?esc(OB.error):'Loading Outreach desk…'}<button class="btn btn-ghost" onclick="OB.error=null;obLoad()">Reload</button></div>`;}
  const list=obVisible();
  const settings=`<details class="card ob-setup"><summary>Outreach settings</summary><div class="ob-setup-grid">${['sf','sw'].map(b=>`<div><h3>${OB_BIZ[b].name}</h3><label>Gmail account<input class="input" value="${esc(obFrom(b))}" onchange="obSetFrom('${b}',this.value)"></label>${OC.channels.map(c=>`<label class="ob-l">Weekly ${c} target<input class="input" type="number" min="0" value="${OC.targets(DB.settings.outreachTargets,b)[c]}" onchange="obTargets('${b}','${c}',this.value)"></label>`).join('')}<button class="btn btn-ghost" onclick="obCopySignature('${b}')">Copy ${OB_BIZ[b].name} signature</button></div>`).join('')}</div></details>`;
  setTimeout(()=>{document.querySelectorAll('.ob-card textarea').forEach(el=>{if(el.id.startsWith('ob-body-'))el.oninput=()=>obCharacterCount(el.id.slice(8));});},0);
  return `${obDashboard()}${settings}<div class="ob-bar"><button class="btn btn-ghost" onclick="obLoad()">Reload</button><label class="btn btn-ghost">Import batch JSON<input type="file" accept="application/json,.json" onchange="obImportFile(this.files[0]);this.value=''" style="max-width:210px"></label><button class="btn btn-gold" onclick="obOpenNext()">Open next approved email</button></div>
  <p class="muted small">Review each draft before approval. Gmail and social profiles open for you to send manually. Calls require TPS/CTPS screening. Nothing is sent automatically.</p>
  ${OB.report.length?`<details class="card" open><summary>Import skipped ${OB.report.length} items</summary>${OB.report.map(r=>`<div>${esc(r.id||'Item '+r.index)}: ${esc(r.reason)}</div>`).join('')}</details>`:''}
  <div class="ob-bar"><div class="ob-tabs">${OB_TABS.map(([k,l])=>`<button class="${OB.tab===k?'on':''}" onclick="OB.tab='${k}';obRefresh()">${l} (${OB.rows.filter(r=>r.status===k).length})</button>`).join('')}</div><select class="input ob-bizsel" onchange="OB.biz=this.value;obRefresh()">${[['all','Both businesses'],['sf','Steady Flow'],['sw','SteadyWorks']].map(([v,l])=>`<option value="${v}" ${OB.biz===v?'selected':''}>${l}</option>`).join('')}</select><select class="input ob-bizsel" onchange="OB.channel=this.value;obRefresh()">${['all',...OC.channels].map(c=>`<option ${OB.channel===c?'selected':''}>${c}</option>`).join('')}</select></div>
  ${list.length?list.map(obCard).join(''):'<div class="card empty-state">Nothing in this queue.</div>'}`;
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
