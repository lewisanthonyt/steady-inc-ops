/* Outreach desk: pure validation, import and follow-up rules. No network or sends. */
(function(root){
'use strict';
const Lead = typeof module!=='undefined' && module.exports ? require('./lead-core.js') : root.LeadCore;
const channels = ['email','call','linkedin','instagram'];
const legalTypes = ['ltd','llp','plc','public body','sole trader','partnership','unknown'];
const outcomes = ['no answer','voicemail','interested','call back','not interested','wrong number','do not call'];
const defaults = {sf:{email:180,call:18,linkedin:9,instagram:9},sw:{email:120,call:12,linkedin:6,instagram:6}};
function targets(settings,biz){ return Object.assign({},defaults[biz],(settings||{})[biz]); }
const text = v=>String(v==null?'':v).trim();
function profile(url, channel){
  try{ const u=new URL(url); const host=u.hostname.toLowerCase().replace(/^www\./,'');
    if(u.protocol!=='https:' || u.username || u.password || u.port || !u.pathname.replace(/\//g,'')) return '';
    if(channel==='linkedin' && !(host==='linkedin.com' || host.endsWith('.linkedin.com'))) return '';
    if(channel==='instagram' && host!=='instagram.com') return '';
    return 'https://'+host+u.pathname.replace(/\/+$/,'');
  }catch(e){ return ''; }
}
function keys(r){
  const out=Lead.dedupeKeys({name:r.organisation||r.to_name,phone:r.phone,website:r.website,postcode:r.postcode,companyNumber:r.company_number});
  if(text(r.to_email)){
    const email=text(r.to_email).toLowerCase(); out.push('email:'+email);
    const domain=email.split('@')[1];
    if(domain && !['gmail.com','googlemail.com','outlook.com','hotmail.com','yahoo.com','icloud.com','live.com','aol.com'].includes(domain)) out.push('dom:'+domain);
  }
  if(text(r.organisation)) out.push('org:'+text(r.organisation).toLowerCase().replace(/\s+/g,' '));
  if(r.profile_url){ const p=profile(r.profile_url,r.channel); if(p) out.push('profile:'+p.toLowerCase()); }
  return [...new Set(out)];
}
function duplicateKey(r){
  const identity=text(r.organisation).toLowerCase().replace(/\s+/g,' ') || text(r.to_email).toLowerCase() || Lead.normalisePhone(r.phone) || profile(r.profile_url,r.channel).toLowerCase() || text(r.to_name).toLowerCase();
  return [r.biz,r.channel||'email',identity,Number(r.step)||1].join('|');
}
function approvalErrors(r, suppressed){
  const errors=[]; const c=r.channel||'email';
  if(!['sf','sw'].includes(r.biz)) errors.push('Choose a business.');
  if(!channels.includes(c)) errors.push('Choose a supported channel.');
  if(suppressed) errors.push('On the do-not-contact list. No override is available.');
  if(!text(r.to_name) && !text(r.organisation)) errors.push('Add the prospect name or organisation.');
  if(!text(r.body)) errors.push('Add the draft body or call script.');
  if(c==='email'){
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(text(r.to_email))) errors.push('Add a valid email address.');
    if(!text(r.subject)) errors.push('Add an email subject.');
    if(!['ltd','llp','plc','public body'].includes(r.legal_type) && !text(r.override_note)) errors.push('Email blocked: '+(r.legal_type||'unknown')+' legal type. A manual override needs a reason.');
    const name=r.biz==='sw' ? /\bsteady\s*works\b/i : /\bsteady\s*flow\b/i;
    if(!name.test(r.body||'')) errors.push('Email body must identify '+(r.biz==='sw'?'SteadyWorks':'Steady Flow')+'.');
    if(!/(?:unsubscribe|opt[ -]out|reply[^\n]{0,60}(?:no thanks|stop|remove|not interested)|(?:let me know|reply)[^\n]{0,80}(?:won.t|will not|no further)[^\n]{0,30}(?:contact|follow|email))/i.test(r.body||'')) errors.push('Email body needs an opt-out line.');
  }
  if(c==='call' && Lead.normalisePhone(r.phone).length<10) errors.push('Add a valid phone number.');
  if(['linkedin','instagram'].includes(c) && !profile(r.profile_url,c)) errors.push('Add a valid HTTPS '+c+' profile URL.');
  if(c==='linkedin' && r.message_kind==='connection' && Array.from(r.body||'').length>300) errors.push('LinkedIn connection notes must be 300 characters or fewer.');
  return errors;
}
function completionErrors(r, suppressed){
  const errors=approvalErrors(r,suppressed);
  if(r.status!=='approved') errors.push('Approve this item first.');
  if(r.channel==='call' && !r.tps_checked) errors.push('Tick TPS/CTPS checked before recording a completed call.');
  return errors;
}
function followup(r,outcome,callback,now){
  if(!outcomes.includes(outcome)) throw Error('Choose a call outcome.');
  if(outcome==='call back' && (!/^\d{4}-\d{2}-\d{2}$/.test(callback||'') || callback<day(now))) throw Error('Choose a valid callback date today or later.');
  if(['not interested','wrong number','do not call'].includes(outcome) || (Number(r.step)>=3 && ['no answer','voicemail'].includes(outcome))) return null;
  const due=outcome==='call back' ? callback : day(new Date(new Date(now).getTime()+(outcome==='interested'?1:3)*86400000));
  return Object.assign({},r,{id:r.id+'-followup',parent_id:r.id,step:Math.min(3,(Number(r.step)||1)+1),status:'pending',outcome:null,note:'',approved_at:null,sent_at:null,done_at:null,replied_at:null,tps_checked:false,tps_checked_at:null,override_note:'',created_at:new Date(now).toISOString(),updated_at:new Date(now).toISOString(),due_date:due,batch_week:weekStart(due),body:(outcome==='interested'?'Follow up on the earlier call and ask what they would find useful.\n\n':'')+r.body});
}
function day(now){ return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now)); }
function weekStart(now){ const d=new Date(day(now)+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7)); return d.toISOString().slice(0,10); }
function parseBatch(input,existing,blocked,now){
  if(!input || input.version!==1 || !Array.isArray(input.items) || input.items.length>2000) throw Error('Expected version 1 and an items array (maximum 2,000).');
  const seen=new Set((existing||[]).map(duplicateKey)), ids=new Set((existing||[]).map(r=>r.id)), rows=[],skipped=[];
  input.items.forEach((raw,i)=>{
    try{
      if(!raw || typeof raw!=='object' || Array.isArray(raw)) throw Error('Item must be an object.');
      const allowed=['id','biz','channel','to_name','organisation','legal_type','contact_name','to_email','phone','profile_url','step','subject','body','why_prospect','source_url','batch_week','note','message_kind'];
      if(Object.keys(raw).some(k=>!allowed.includes(k))) throw Error('Unexpected field; import cannot set approval, outcome, TPS or owner.');
      if(allowed.filter(k=>k!=='step').some(k=>raw[k]!=null && typeof raw[k]!=='string') || typeof raw.step!=='number') throw Error('Text fields must be strings and step must be an integer.');
      const r={}; allowed.forEach(k=>{if(raw[k]!=null) r[k]=text(raw[k]);}); r.step=Number(raw.step);
      if(!/^[a-zA-Z0-9_-]{1,100}$/.test(r.id||'')) throw Error('ID must use 1–100 letters, digits, hyphens or underscores.');
      if(!['sf','sw'].includes(r.biz)||!channels.includes(r.channel)||!legalTypes.includes(r.legal_type)||![1,2,3].includes(r.step)) throw Error('Invalid business, channel, legal type or step.');
      if(!r.organisation||!r.to_name||!r.body||!r.why_prospect) throw Error('Prospect, organisation, body and why_prospect are required.');
      if(!/^\d{4}-\d{2}-\d{2}$/.test(r.batch_week||'') || weekStart(r.batch_week)!==r.batch_week) throw Error('batch_week must be a Monday date.');
      if(r.source_url && !/^https?:\/\//i.test(r.source_url)) throw Error('source_url must be HTTP or HTTPS.');
      if(r.channel==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(r.to_email||'')) throw Error('Invalid email.');
      if(r.channel==='call'&&Lead.normalisePhone(r.phone).length<10) throw Error('Invalid phone.');
      if(['linkedin','instagram'].includes(r.channel)&&!profile(r.profile_url,r.channel)) throw Error('Invalid profile URL.');
      r.message_kind=r.message_kind||'message'; if(!['connection','message'].includes(r.message_kind)) throw Error('Invalid message_kind.');
      const k=duplicateKey(r); if(ids.has(r.id)||seen.has(k)) throw Error('Duplicate item.');
      if(blocked(r)) throw Error('On the do-not-contact list.');
      ids.add(r.id); seen.add(k); rows.push(Object.assign(r,{status:'pending',created_at:new Date(now).toISOString(),updated_at:new Date(now).toISOString()}));
    }catch(e){ skipped.push({index:i+1,id:raw&&raw.id||'',reason:e.message}); }
  }); return {rows,skipped};
}
function weekly(rows,biz,now){
  const start=weekStart(now), end=new Date(start+'T12:00:00Z'); end.setUTCDate(end.getUTCDate()+7); const until=end.toISOString().slice(0,10);
  const inWeek=t=>t && day(t)>=start && day(t)<until, selected=(rows||[]).filter(r=>r.biz===biz);
  const counts=Object.fromEntries(channels.map(c=>[c,selected.filter(r=>(r.channel||'email')===c && (c==='call'?inWeek(r.done_at):inWeek(r.sent_at))).length]));
  return {counts,replies:selected.filter(r=>inWeek(r.replied_at)).length,outcomes:Object.fromEntries(outcomes.map(o=>[o,selected.filter(r=>r.outcome===o&&inWeek(r.done_at)).length]))};
}
function weeklySummary(rows,settings,now){
  const businesses=Object.fromEntries(['sf','sw'].map(b=>[b,Object.assign(weekly(rows,b,now),{targets:targets(settings,b)})]));
  const combined={counts:{},targets:{},replies:businesses.sf.replies+businesses.sw.replies};
  channels.forEach(c=>{ combined.counts[c]=businesses.sf.counts[c]+businesses.sw.counts[c]; combined.targets[c]=businesses.sf.targets[c]+businesses.sw.targets[c]; });
  return {businesses,combined};
}
const api={channels,legalTypes,outcomes,defaults,targets,weeklySummary,keys,duplicateKey,approvalErrors,completionErrors,followup,parseBatch,profile,day,weekStart,weekly};
if(typeof module!=='undefined' && module.exports) module.exports=api; else root.OutreachCore=api;
})(typeof globalThis!=='undefined'?globalThis:this);
