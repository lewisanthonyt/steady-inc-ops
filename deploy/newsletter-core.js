/* Pure newsletter decisions. Never uses the legacy app_settings customer store. */
(function(root){
'use strict';
const text=v=>String(v==null?'':v).trim();
function eligibility(customer,business,blocked){
 const reasons=[];
 if(!['sw','sf'].includes(business))reasons.push('Choose a business.');
 if(customer.ambiguous)reasons.push('Duplicate CRM customer ID; fix the CRM link first.');
 if(customer.business!==business)reasons.push('Business not recorded or does not match this customer.');
 if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(text(customer.email)))reasons.push('No valid email.');
 if(customer.unsubscribed_at)reasons.push('Unsubscribed.');
 if(customer.marketing_ok!==true)reasons.push('Permission not recorded.');
 if(!text(customer.marketing_source))reasons.push('How they agreed is missing.');
 if(blocked)reasons.push('On the do-not-contact list.');
 if(!(customer.jobs||[]).some(j=>j.business===business&&['completed','paid'].includes(j.status)))reasons.push('No completed or paid job for this business.');
 return reasons;
}
function lastJob(customer,business){return (customer.jobs||[]).filter(j=>j.business===business&&['completed','paid'].includes(j.status)).slice().sort((a,b)=>text(b.date).localeCompare(text(a.date))||text(b.id).localeCompare(text(a.id)))[0]||null;}
function merge(template,fields){return text(template).replace(/\{([a-z_]+)\}/g,(match,key)=>Object.hasOwn(fields,key)?text(fields[key]):match);}
function errors(row,customer,blocked){
 const out=eligibility(customer||{},row.business,blocked);
 if(!text(row.subject)||/[\r\n]/.test(row.subject))out.push('Add a one-line subject.');
 if(!text(row.body))out.push('Add the email text.');
 if(/\{[a-z_]+\}/i.test(text(row.subject)+' '+text(row.body)))out.push('Fill in the remaining fields.');
 const name=row.business==='sw'?/\bsteady\s*works\b/i:/\bsteady\s*flow\b/i;
 if(!name.test(text(row.body)))out.push('Include the business name.');
 if(!/\b(unsubscribe|opt[ -]out)\b/i.test(text(row.body)))out.push('Keep a plain unsubscribe line.');
 return out;
}
function draft(template,customer,business,copy,facts,names){
 if(!template||template.business!==business)throw Error('Choose a template for this business.');
 const job=lastJob(customer,business),fields=Object.assign({},facts||{},{first_name:text(customer.first_name)||'there',last_job:job&&text(job.title)||'your last job',business_name:names[business]});
 for(const key of template.facts||[])if(!text(fields[key]))throw Error('Add confirmed '+key.replace(/_/g,' ')+'.');
 return {customer_id:String(customer.id),template_key:template.key,business,subject:merge(copy.subject,fields),body:merge(copy.body,fields),status:'pending'};
}
function linkedinDraft(template,prospect,copy){
 if(!template||template.business!==prospect.biz||!['ltd','llp'].includes(prospect.legal_type))throw Error('Choose a Ltd or LLP prospect for this business.');
 const fields={first_name:text(prospect.contact_name)||'there',company:text(prospect.organisation||prospect.to_name)};
 if(!fields.company)throw Error('Add the company name.');
 const row=Object.assign({},prospect,{channel:'linkedin',step:template.step,message_kind:template.message_kind,body:merge(copy,fields),subject:'',status:'pending',approved_at:null,sent_at:null,done_at:null,replied_at:null,outcome:null,parent_id:prospect.id});
 if(/\{[a-z_]+\}/i.test(row.body))throw Error('Fill in the remaining fields.');
 if(row.message_kind==='connection'&&Array.from(row.body).length>300)throw Error('The merged connection note is over 300 characters.');
 return row;
}
const api={eligibility,lastJob,merge,errors,draft,linkedinDraft};
if(typeof module==='object'&&module.exports)module.exports=api;
root.NewsletterCore=api;
})(typeof globalThis!=='undefined'?globalThis:this);
