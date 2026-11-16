/* Double Money: pure weekly calculations. No network, state mutation or payments. */
(function(root){
'use strict';
const defaults={target_profit:100000,start_date:'2026-11-16',deadline:null,reinvest_pct:50,tax_pct:25,contractor_margin_pct:40};
const channels=[{id:'myjobquote',business:'sw',name:'MyJobQuote',ladder_order:1,active:true,capped:false},{id:'ads',business:'sw',name:'Google LSA / Meta ads',ladder_order:2,active:true,capped:false},{id:'steadyflow',business:'sf',name:'Steady Flow acquisition',ladder_order:3,active:true,capped:false}];
const checklist=[['recorded','Profit and cash in recorded for last week'],['light','Light worked out for each channel'],['spend','Next week’s spend set by the rule or overflowed'],['tax','Profit moved to the tax pot'],['buffer','Buffer topped up'],['capacity','Capacity checked: contractor needed?'],['total','Running total towards the target updated']];
const round=v=>Math.round((v+Number.EPSILON)*100)/100;
function number(v,label){ if(v===''||v==null) return 0;const n=Number(v);if(!Number.isFinite(n))throw Error('Enter a valid '+label+'.');return n; }
function date(v){ if(!/^\d{4}-\d{2}-\d{2}$/.test(v||'') || new Date(v+'T12:00:00Z').toISOString().slice(0,10)!==v)throw Error('Enter a valid date.');return v; }
function day(now){ return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now)); }
function shift(v,n){const d=new Date(date(v)+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);}
function monday(v){const d=new Date(date(v)+'T12:00:00Z');return shift(v,-((d.getUTCDay()+6)%7));}
function settings(input){ const s=Object.assign({},defaults,input);['target_profit','reinvest_pct','tax_pct','contractor_margin_pct'].forEach(k=>{s[k]=number(s[k],k);});
 if(s.target_profit<=0)throw Error('Target profit must be positive.');
 for(const k of ['reinvest_pct','tax_pct','contractor_margin_pct'])if(s[k]<0||s[k]>100)throw Error('Percentages must be between 0 and 100.');
 if(s.reinvest_pct+s.tax_pct>100)throw Error('Reinvestment and tax cannot exceed 100% of profit.');
 date(s.start_date);if(monday(s.start_date)!==s.start_date)throw Error('Start date must be a Monday.');if(s.deadline)date(s.deadline);if(s.deadline&&s.deadline<s.start_date)throw Error('Deadline must be on or after the start date.');return s;
}
function week(input){const r=Object.assign({},input);date(r.week_start);if(monday(r.week_start)!==r.week_start)throw Error('Week start must be a Monday.');
 for(const k of ['spend','leads','quotes','wins','revenue','materials','labour','cash_received','hours_used']){r[k]=number(r[k],k);if(r[k]<0)throw Error(k+' cannot be negative.');}
 for(const k of ['leads','quotes','wins'])if(!Number.isInteger(r[k]))throw Error(k+' must be a whole number.');
 for(const k of ['booked_hours','available_hours']){r[k]=r[k]===''||r[k]==null?null:number(r[k],k);if(r[k]!=null&&r[k]<0)throw Error(k+' cannot be negative.');}
 if(r.cash_received>r.revenue)throw Error('Cash received cannot exceed this earning week’s revenue. Update the original earning week for late payments.');
 if(r.ticks!=null&&(typeof r.ticks!=='object'||Array.isArray(r.ticks)||Object.values(r.ticks).some(v=>typeof v!=='boolean')))throw Error('Checklist ticks must be boolean values.');
 r.profit=round(r.revenue-r.materials-r.labour-r.spend);r.ticks=Object.assign({},r.ticks);return r;
}
function multiple(r){return r.spend>0?r.profit/r.spend:null;}
function light(r){const m=multiple(r);return m==null?(r.profit>0?'green':r.profit<0?'red':'neutral'):m>=2?'green':m>=1?'amber':'red';}
function cash(r,s){
 // Conservative cash waterfall: delivery costs, acquisition principal, then profit.
 // Partial receipts are never treated as if the unpaid balance has arrived.
 const afterCosts=Math.max(0,r.cash_received-r.materials-r.labour), recovered=round(Math.min(r.spend,afterCosts));
 const receivedProfit=round(Math.min(Math.max(0,r.profit),Math.max(0,afterCosts-r.spend)));
 const reinvest=round(receivedProfit*s.reinvest_pct/100),tax=round(receivedProfit*s.tax_pct/100);
 return {spend_recovered:recovered,profit_received:receivedProfit,reinvest,tax_pot:tax,buffer:round(receivedProfit-reinvest-tax),cash_budget:round(recovered+reinvest)};
}
function capacity(rows){
 const totals=new Map();for(const r of rows){if(!totals.has(r.week_start))totals.set(r.week_start,{booked:0,available:0,known:true});const t=totals.get(r.week_start);if(r.booked_hours==null||r.available_hours==null)t.known=false;else{t.booked+=r.booked_hours;t.available+=r.available_hours;}}
 const dates=[...totals.keys()].sort(),last=dates.at(-1),prev=last&&shift(last,-7),a=totals.get(last),b=totals.get(prev);
 const ratio=t=>!t||!t.known?null:t.available===0?(t.booked>0?Infinity:0):t.booked/t.available;
 const utilisation=ratio(a),previous=ratio(b);return {known:utilisation!=null&&previous!=null,utilisation,previous,contractor_needed:utilisation!=null&&previous!=null&&utilisation>.8&&previous>.8};
}
function contractor(price,cost,input){const s=settings(input),p=number(price,'job price'),c=number(cost,'contractor cost');return {allowed:p>0&&c>=0&&c<=round(p*(1-s.contractor_margin_pct/100)),maximum_cost:round(Math.max(0,p)*(1-s.contractor_margin_pct/100))};}
function channelState(channel,rows,input){const s=settings(input),history=rows.filter(r=>r.channel_id===channel.id).map(week).sort((a,b)=>a.week_start.localeCompare(b.week_start));
 let reds=0,low=0,raised=false,paused=false,autoCapped=false,previous=null;
 for(const r of history){const adjacent=previous&&shift(previous.week_start,7)===r.week_start;
  if(!adjacent){reds=0;low=0;raised=false;}
  if(r.ticks.resume_channel){paused=false;reds=0;}
  if(r.ticks.review_cap){autoCapped=false;low=0;raised=false;}
  if(adjacent&&r.spend>previous.spend){raised=true;low=0;}
  const l=light(r);if(channel.id==='myjobquote'&&raised&&r.spend>0&&multiple(r)<1.5)autoCapped=true;reds=l==='red'?reds+1:0;
  if(raised&&r.spend>0){low=multiple(r)<2?low+1:0;if(low>=2&&channel.id!=='myjobquote')autoCapped=true;}
  if(reds>=2)paused=true;previous=r;
 }
 const r=history.at(-1);if(!r)return {channel,row:null,multiple:null,light:'neutral',paused:false,capped:!!channel.capped,base_spend:0,cash_budget:0,spend_recovered:0,profit_received:0,reinvest:0,tax_pot:0,buffer:0,transfer:0,reasons:['No entry for this week']};
 const funds=cash(r,s),l=channel.id==='myjobquote'&&multiple(r)>=1.5?'green':light(r),overCapacity=r.booked_hours!=null&&r.available_hours!=null&&r.booked_hours>r.available_hours;
 const capped=!!channel.capped||autoCapped||overCapacity,blocked=channel.active===false||paused||capped;
 let planned=l==='green'?funds.cash_budget:l==='amber'?Math.min(r.spend,funds.cash_budget):l==='red'?Math.min(round(r.spend/2),funds.cash_budget):0;
 if(channel.id==='myjobquote'&&multiple(r)>=1.5){const afterTax=round(funds.spend_recovered+funds.profit_received-funds.tax_pot);planned=Math.min(round(r.spend*2),afterTax);funds.reinvest=round(Math.max(0,planned-funds.spend_recovered));funds.buffer=round(Math.max(0,afterTax-planned));funds.cash_budget=planned;}
 const transfer=blocked?(paused?Math.min(r.spend,funds.cash_budget):planned):0;
 return Object.assign({channel,row:r,multiple:multiple(r),cost_per_lead:r.leads>0?round(r.spend/r.leads):null,cost_per_win:r.wins>0?round(r.spend/r.wins):null,light:l,paused,capped,auto_capped:autoCapped,red_streak:reds,base_spend:blocked?0:round(planned),transfer:round(transfer),reasons:[channel.active===false?'Inactive':null,paused?'Paused after two consecutive reds':null,channel.capped?'Manual cap: no more good leads':null,autoCapped?'Two returns below 2x after spend increased':null,overCapacity?'Booked hours exceed available hours':null].filter(Boolean)},funds);
}
function plan(channelRows,rows,input,weekStart){const s=settings(input);date(weekStart);if(monday(weekStart)!==weekStart)throw Error('Choose a Monday.');
 const ordered=channelRows.slice().sort((a,b)=>a.ladder_order-b.ladder_order),ids=new Set();for(const c of ordered){if(!/^[a-z0-9_-]+$/.test(c.id||'')||!Number.isInteger(c.ladder_order)||c.ladder_order<1)throw Error('Invalid channel ID or ladder order.');if(ids.has(c.id))throw Error('Duplicate channel.');ids.add(c.id);}
 const filtered=rows.filter(r=>r.week_start<=weekStart&&r.week_start>=s.start_date);const keys=new Set();for(const r of filtered){const k=r.channel_id+'|'+r.week_start;if(keys.has(k))throw Error('Duplicate channel week.');keys.add(k);week(r);}
 const results=ordered.map(c=>{const state=channelState(c,filtered,s);if(!state.row||state.row.week_start!==weekStart)return Object.assign({},state,{row:null,light:'neutral',multiple:null,base_spend:0,transfer:0,cash_budget:0,spend_recovered:0,profit_received:0,reinvest:0,tax_pot:0,buffer:0,reasons:['No entry for this week']});return state;});
 let overflow=0;const transfers=[];for(const r of results){r.overflow_in=0;r.next_spend=r.base_spend;
  // No current data: hold overflow for review, rather than guessing the channel can take it.
  const eligible=r.row&&r.channel.active!==false&&!r.paused&&!r.capped&&['green','neutral'].includes(r.light);
  if(eligible){r.overflow_in=overflow;r.next_spend=round(r.next_spend+overflow);overflow=0;}
  if(r.transfer){overflow=round(overflow+r.transfer);transfers.push({from:r.channel.id,amount:r.transfer});}
 }
 const capacityResult=capacity(filtered.filter(r=>r.week_start===weekStart||r.week_start===shift(weekStart,-7)).map(week));
 for(const c of ordered.filter(c=>c.active!==false))for(const w of [weekStart,shift(weekStart,-7)])if(!filtered.some(r=>r.channel_id===c.id&&r.week_start===w)){capacityResult.known=false;capacityResult.contractor_needed=false;}
 return {channels:results,unallocated:overflow,transfers,tax_pot:round(results.reduce((v,r)=>v+r.tax_pot,0)),buffer:round(results.reduce((v,r)=>v+r.buffer,0)),capital_held:round(results.reduce((v,r)=>v+Math.max(0,r.cash_budget-r.base_spend-r.transfer),0)),capacity:capacityResult};
}
function progress(rows,input,now){const s=settings(input);if(!s.deadline)return forecast(rows,s,now);const today=day(now),valid=rows.filter(r=>r.week_start>=s.start_date&&r.week_start<=monday(today)).map(week),keys=new Set();
 for(const r of valid){const k=r.channel_id+'|'+r.week_start;if(keys.has(k))throw Error('Duplicate channel week.');keys.add(k);}
 const total=round(valid.reduce((v,r)=>v+r.profit,0)),remaining=round(Math.max(0,s.target_profit-total));
 const duration=(new Date(s.deadline+'T12:00:00Z')-new Date(s.start_date+'T12:00:00Z'))/86400000+1;
 const elapsed=Math.max(0,Math.min(duration,(new Date(today+'T12:00:00Z')-new Date(s.start_date+'T12:00:00Z'))/86400000));
 const daysLeft=Math.max(0,(new Date(s.deadline+'T12:00:00Z')-new Date((today<s.start_date?s.start_date:today)+'T12:00:00Z'))/86400000+1);
 const expected=round(s.target_profit*elapsed/duration);
 return {total_profit:total,remaining,percent:Math.max(0,Math.min(100,total/s.target_profit*100)),expected_profit:expected,ahead:total>=expected,pace_difference:round(total-expected),weeks_remaining:daysLeft/7,weekly_pace:remaining===0?0:daysLeft>0?round(remaining/(daysLeft/7)):null,overdue:today>s.deadline&&remaining>0};
}
const businesses=[{business:'sf',name:'Steady Flow',owner_pay_target:0},{business:'sw',name:'SteadyWorks',owner_pay_target:250}];
const subscriptionNames=['GoHighLevel','Claude','ChatGPT / Codex','Netlify','Supabase','domains','Canva','Buffer','Higgsfield','phone','business insurance'];
const pots=['Main','Job Costs','Growth','Overheads','Tax','Owner Pay','Buffer','VAT'];
function nonnegative(v,label){const n=number(v,label);if(n<0)throw Error(label+' cannot be negative.');return round(n);}
function business(v){if(!['sf','sw'].includes(v))throw Error('Choose a business.');return v;}
function subscription(input){const r=Object.assign({},input);business(r.business);r.name=String(r.name||'').trim();if(!r.name)throw Error('Subscription name is required.');
 if(!['monthly','yearly','per use'].includes(r.billing_cycle))throw Error('Choose a billing cycle.');if(!['keep','review','cancel'].includes(r.status))throw Error('Choose a subscription status.');
 r.cost=r.cost==null||r.cost===''?null:nonnegative(r.cost,'Cost');if(r.next_renewal)date(r.next_renewal);else r.next_renewal=null;
 r.client_rebilled=!!r.client_rebilled;if(r.client_rebilled&&!String(r.client_name||'').trim())throw Error('Enter the client being rebilled.');return r;
}
function subscriptions(rows,biz,today){date(today);const selected=rows.map(subscription).filter(r=>!biz||r.business===biz),active=selected.filter(r=>r.status!=='cancel');
 const monthly=round(active.reduce((n,r)=>n+(r.cost==null?0:r.billing_cycle==='yearly'?r.cost/12:r.billing_cycle==='monthly'?r.cost:0),0));
 return {monthly,weekly:round(monthly*12/52),unknown:active.filter(r=>r.cost==null).length,per_use:active.filter(r=>r.billing_cycle==='per use').length,review:selected.filter(r=>r.status==='review'),renewals:active.filter(r=>r.next_renewal&&r.next_renewal>=today&&r.next_renewal<=shift(today,14))};
}
function payment(input){const p=Object.assign({},input);business(p.business);date(p.payment_date);if(!['job','website','monthly'].includes(p.payment_type))throw Error('Choose a payment type.');
 if((p.business==='sw'&&p.payment_type!=='job')||(p.business==='sf'&&p.payment_type==='job'))throw Error('Payment type does not match this business.');
 if(!channels.some(c=>c.id===p.channel_id&&(c.business|| (c.id==='steadyflow'?'sf':'sw'))===p.business))throw Error('Choose a channel for this business.');
 for(const k of ['amount','materials','labour','lead_cost'])p[k]=nonnegative(p[k],k);if(p.amount<=0)throw Error('Amount received must be positive.');return p;
}
function splitPayment(input,context){const p=payment(input),c=context||{};let available=p.amount;const take=w=>{const v=round(Math.min(available,Math.max(0,w)));available=round(available-v);return v;};
 const allocations=Object.fromEntries(pots.map(k=>[k,0]));
 // VAT is a separately enabled reserve. All remaining funds follow the final spec order.
 allocations.VAT=c.vat_enabled?take(round(p.amount*.2)):0;
 const net=round(p.amount-allocations.VAT),profit=round(net-p.materials-p.labour-p.lead_cost);
 allocations['Job Costs']=take(round(p.materials+p.labour));
 const recovered=take(p.lead_cost);allocations.Growth=recovered;
 allocations.Overheads=take(nonnegative(c.overheads_needed||0,'Overheads needed'));
 if(c.tax_pct!=null&&(Number(c.tax_pct)<0||Number(c.tax_pct)>100))throw Error('Tax percentage must be between 0 and 100.');const taxable=round(Math.max(0,profit-allocations.Overheads));allocations.Tax=take(round(taxable*(c.tax_pct==null?25:nonnegative(c.tax_pct,'Tax percentage'))/100));
 const businessRemaining=nonnegative(c.owner_needed==null?250:c.owner_needed,'Owner Pay remaining'),combinedRemaining=nonnegative(c.owner_total_needed==null?250:c.owner_total_needed,'Combined Owner Pay remaining');
 let ownerDue=Math.min(businessRemaining,combinedRemaining);
 allocations['Owner Pay']=take(ownerDue);
 const growthExtra=take(nonnegative(c.growth_needed||0,'Growth still needed'));allocations.Growth=round(recovered+growthExtra);allocations.Buffer=take(available);
 const m=p.lead_cost>0?profit/p.lead_cost:null,action=m==null?(profit>0?'double':'hold'):m>=(p.channel_id==='myjobquote'?1.5:2)?'double':m>=1?'hold':'halve';
 return {profit,taxable_profit:taxable,multiple:m,light:profit<0||action==='halve'?'red':action==='double'?'green':'amber',action,allocations,growth_recovered:recovered,growth_extra:growthExtra,owner_shortfall:round(Math.max(0,combinedRemaining-allocations['Owner Pay'])),cost_shortfall:round(Math.max(0,p.materials+p.labour-allocations['Job Costs'])),warnings:[profit<0?'This payment lost money.':null,combinedRemaining>allocations['Owner Pay']?'The £250 Owner Pay pot is not filled yet.':null].filter(Boolean)};
}
function activePayments(rows){return rows.filter(p=>p.voided_at==null);}
function paymentTotals(rows,weekStart,biz){const matching=activePayments(rows).filter(p=>monday(p.payment_date)===weekStart&&(!biz||p.business===biz));const allocations=Object.fromEntries(pots.map(k=>[k,0]));let growth_extra=0;
 for(const p of matching){for(const k of pots)allocations[k]=round(allocations[k]+Number((p.allocations||{})[k]||0));growth_extra=round(growth_extra+Number(p.growth_extra||0));}
 return {rows:matching,allocations,growth_extra,paid_out:allocations['Owner Pay'],amount:round(matching.reduce((n,p)=>n+Number(p.amount),0))};
}
function automaticGrowthTarget(rows,p,settingsInput){const s=settings(settingsInput),w=monday(p.payment_date),matching=activePayments(rows).filter(r=>r.business===p.business&&monday(r.payment_date)===w).concat(activePayments([p]));let target=0;
 for(const c of channels.filter(c=>c.business===p.business)){const selected=matching.filter(r=>r.channel_id===c.id),spend=round(selected.reduce((n,r)=>n+Number(r.lead_cost||0),0)),profit=round(selected.reduce((n,r)=>n+Number(r.amount||0)-Number(r.allocations&&r.allocations.VAT!=null?r.allocations.VAT:(s.vat_enabled?round(Number(r.amount||0)*.2):0))-Number(r.materials||0)-Number(r.labour||0)-Number(r.lead_cost||0),0)),m=spend>0?profit/spend:null;
  if(c.id==='myjobquote'&&m>=1.5)target=round(target+spend);else if((m==null&&profit>0)||m>=2)target=round(target+Math.max(0,profit)*s.reinvest_pct/100);
 }return target;
}
function splitContext(payments,subscriptionRows,businessRows,potRows,p,s){const w=monday(p.payment_date),own=paymentTotals(payments,w,p.business),all=paymentTotals(payments,w),b=businessRows.find(b=>b.business===p.business)||businesses.find(b=>b.business===p.business),over=subscriptions(subscriptionRows,p.business,p.payment_date),growth=potRows.find(r=>r.business===p.business&&r.week_start===w&&r.pot==='Growth');
 const target=growth&&growth.target_manual?Number(growth.target_amount):automaticGrowthTarget(payments,p,s);
 return {tax_pct:s.tax_pct,start_date:s.start_date,vat_enabled:!!s.vat_enabled,overheads_needed:round(Math.max(0,over.weekly-own.allocations.Overheads)),owner_needed:round(Math.max(0,Number(b.owner_pay_target)-own.paid_out)),owner_total_needed:round(Math.max(0,250-all.paid_out)),growth_needed:round(Math.max(0,target-own.growth_extra))};
}
function effectiveWeeks(rows,payments){const out=rows.map(r=>Object.assign({},r));const map=new Map(out.map(r=>[r.channel_id+'|'+r.week_start,r]));
 const topups=new Map(out.filter(r=>r.ticks&&r.ticks.lead_topups).map(r=>[r.channel_id+'|'+r.week_start,{baseline:Number(r.spend||0),receipts:0}]));
 for(const p of activePayments(payments)){payment(p);const w=monday(p.payment_date),key=p.channel_id+'|'+w;let r=map.get(key);if(!r){r={channel_id:p.channel_id,week_start:w};map.set(key,r);out.push(r);}const net=round(Number(p.amount)-Number((p.allocations||{}).VAT||0));
 const topup=topups.get(key);if(topup)topup.receipts=round(topup.receipts+Number(p.lead_cost));
 for(const [k,v] of Object.entries({revenue:net,cash_received:net,materials:Number(p.materials),labour:Number(p.labour),spend:topup?0:Number(p.lead_cost)}))r[k]=round(Number(r[k]||0)+v);
 }for(const [key,t] of topups)map.get(key).spend=round(Math.max(t.baseline,t.receipts));return out.map(week);
}
function scoreboard(rows,input,now){const s=settings(input),today=day(now),byWeek=new Map();for(const r of rows.filter(r=>r.week_start>=s.start_date&&r.week_start<=monday(today)).map(week))byWeek.set(r.week_start,round((byWeek.get(r.week_start)||0)+r.profit));
 let targetTotal=0,actualTotal=0;const targets=[];for(let i=0;targetTotal<s.target_profit&&i<30;i++){const target=round(Math.min(350*2**i,s.target_profit-targetTotal)),w=shift(s.start_date,i*7);targetTotal=round(targetTotal+target);actualTotal=round(actualTotal+(byWeek.get(w)||0));targets.push({week:i+1,week_start:w,target,running_target:targetTotal,actual:byWeek.get(w)||0,running_actual:actualTotal,warning:i===5||i===6?'Christmas / New Year: plan delivery and sales ahead.':''});}
 // Weekly totals only give a Monday lower-bound; flag a missed doubling once >10 days.
 const entries=[...byWeek].sort(([a],[b])=>a.localeCompare(b));let anchor=null,completed=[];
 for(const [w,profit] of entries){if(profit<=0)continue;if(!anchor){anchor={week:w,profit};continue;}if(profit>=anchor.profit*2){const days=Math.round((new Date(w)-new Date(anchor.week))/86400000);completed.push({from:anchor.week,to:w,days,late:days>10});anchor={week:w,profit};}}
 const daysSince=anchor?Math.floor((new Date(today)-new Date(anchor.week))/86400000):null;
 return {targets,doublings:completed,over_ten_days:completed.some(d=>d.late)||!!(anchor&&daysSince>10),days_since_doubling:daysSince};
}
function forecast(rows,input,now){const s=settings(input),today=day(now),current=monday(today),last=shift(current,-7),elapsed=Math.max(0,Math.floor((new Date(last)-new Date(s.start_date))/604800000)+1),valid=rows.filter(r=>r.week_start>=s.start_date&&r.week_start<=current).map(week),total=round(valid.reduce((n,r)=>n+r.profit,0)),closed=round(valid.filter(r=>r.week_start<=last).reduce((n,r)=>n+r.profit,0)),pace=elapsed?round(closed/elapsed):0,remaining=round(Math.max(0,s.target_profit-total));
 const keys=new Set();for(const r of valid){const key=r.channel_id+'|'+r.week_start;if(keys.has(key))throw Error('Duplicate channel week.');keys.add(key);}
 return {total_profit:total,remaining,percent:Math.max(0,Math.min(100,total/s.target_profit*100)),weekly_pace:remaining===0?0:pace,projected_finish:remaining===0?today:pace>0?shift(today,Math.ceil(remaining/pace*7)):null,paid_out:0};
}
function flowMilestones(rows,now){const today=day(now),current=monday(today),monthStart=today.slice(0,7)+'-01';const dated=rows.filter(r=>r.week_start<=current).sort((a,b)=>a.week_start.localeCompare(b.week_start));const monthly=dated.filter(r=>r.week_start>=monthStart),last=dated.at(-1)||{};
 return {monthly_sales:monthly.reduce((n,r)=>n+Number(r.sales||0),0),active_clients:Number(last.monthly_clients_active||0),qualifying_clients:Number(last.clients_500_plus||0),mrr:Number(last.mrr||0),sales_goal:20,client_goal:4,deadline:'2026-12-15'};
}

function fundedPlan(channelRows,manualRows,payments,subscriptionRows,businessRows,potRows,input,weekStart){payments=activePayments(payments);const s=settings(input),effective=effectiveWeeks(manualRows,payments),result=plan(channelRows,effective,s,weekStart),simulated=payments.slice(),budgets=new Map();
 // Saved receipt allocations are authoritative. Extra/unpaid weekly entries are
 // evaluated separately, with only their received cash available for this split.
 for(const c of channelRows){const saved=payments.filter(p=>p.channel_id===c.id&&monday(p.payment_date)===weekStart);budgets.set(c.id,round(saved.reduce((n,p)=>n+Number((p.allocations||{}).Growth||0),0)));}
 for(const c of channelRows.slice().sort((a,b)=>a.ladder_order-b.ladder_order)){const raw=manualRows.find(r=>r.channel_id===c.id&&r.week_start===weekStart);if(!raw)continue;const manual=Object.assign({},raw);if(raw.ticks&&raw.ticks.lead_topups)manual.spend=Math.max(0,Number(raw.spend)-payments.filter(p=>p.channel_id===c.id&&monday(p.payment_date)===weekStart).reduce((n,p)=>n+Number(p.lead_cost),0));const r=week(manual);if(r.cash_received<=0)continue;const b=c.business||(c.id==='steadyflow'?'sf':'sw'),state=result.channels.find(r=>r.channel.id===c.id),p={business:b,channel_id:c.id,payment_type:b==='sf'?'website':'job',payment_date:weekStart,amount:r.cash_received,materials:r.materials,labour:r.labour,lead_cost:r.spend};const ctx=splitContext(simulated,subscriptionRows,businessRows,potRows,p,s);
 // Apply the rule when no explicit extra-Growth target is set for manual rows.
 ctx.growth_needed=Math.max(ctx.growth_needed,Math.max(0,state.base_spend-state.spend_recovered));const split=splitPayment(p,ctx);budgets.set(c.id,round((budgets.get(c.id)||0)+split.allocations.Growth));simulated.push({...p,allocations:split.allocations,growth_extra:split.growth_extra});}
 const ownerFilled=paymentTotals(simulated,weekStart).paid_out>=250;let overflow=0;
 for(const r of result.channels){const budget=budgets.get(r.channel.id)||0;r.before_split_spend=r.next_spend;r.overflow_in=0;let desired=r.base_spend;if(!ownerFilled&&r.row)desired=Math.min(desired,r.row.spend);
 const allocations=Object.fromEntries(pots.map(k=>[k,round(simulated.filter(p=>p.channel_id===r.channel.id&&monday(p.payment_date)===weekStart).reduce((n,p)=>n+Number((p.allocations||{})[k]||0),0))]));r.tax_pot=allocations.Tax;r.buffer=allocations.Buffer;r.overheads=allocations.Overheads;r.owner_pay=allocations['Owner Pay'];
 const own=round(Math.min(desired,budget));if(r.channel.active===false||r.paused||r.capped){r.next_spend=0;overflow=round(overflow+Math.min(budget,Math.max(r.transfer,r.spend_recovered)));}else{const eligible=r.row&&['green','neutral'].includes(r.light);r.overflow_in=eligible?overflow:0;r.next_spend=round(own+r.overflow_in);if(eligible)overflow=0;}
 r.funded_growth=budget;r.owner_pay_filled=ownerFilled;}
 result.unallocated=overflow;result.tax_pot=round(result.channels.reduce((n,r)=>n+r.tax_pot,0));result.buffer=round(result.channels.reduce((n,r)=>n+r.buffer,0));result.capital_held=round(Math.max(0,[...budgets.values()].reduce((n,v)=>n+v,0)-result.channels.reduce((n,r)=>n+r.next_spend,0)-overflow));return result;
}

function voidPreview(rows,payouts,id,reason,owner){
 if(!owner)throw Error('Owner access is required.');const note=String(reason==null?'':reason).trim();if(!note||note.length>2000)throw Error('Enter a void reason (1–2000 characters).');
 const receipt=rows.find(p=>p.id===id&&p.owner_id===owner);if(!receipt)throw Error('Payment not found for this owner.');
 if(receipt.voided_at!=null){if(receipt.void_reason!==note)throw Error('Payment already voided; original reason retained.');return {receipt,reason:note,already_voided:true};}
 const w=monday(receipt.payment_date),remaining=paymentTotals(rows.filter(p=>p.owner_id===owner&&p.id!==id),w,receipt.business).paid_out,paid=round(payouts.filter(p=>p.owner_id===owner&&p.business===receipt.business&&monday(p.paid_date)===w).reduce((n,p)=>n+Number(p.amount),0));
 if(remaining<paid)throw Error('Cannot void: Owner Pay would fall below pay-outs already recorded that week.');
 return {receipt,reason:note,week_start:w,remaining_owner_pay:remaining,recorded_payouts:paid,already_voided:false};
}

// Presentation-only summaries. Existing saved allocations and spending rules stay authoritative.
const potColours={'Main':'#CBD5E1','Job Costs':'#94A3B8','Growth':'#2DD4BF','Overheads':'#A78BFA','Tax':'#FBBF24','Owner Pay':'#60A5FA','Buffer':'#4ADE80','VAT':'#F472B6'};
function budget(rows,biz,period,weekStart,today){const selected=activePayments(rows).filter(p=>(biz==='combined'||p.business===biz)&&p.payment_date<=today&&(period==='all'||monday(p.payment_date)===weekStart));
 return pots.filter(p=>p!=='Main').map(p=>({pot:p,colour:potColours[p],amount:round(selected.reduce((n,r)=>n+Number((r.allocations||{})[p]||0),0))}));
}
function friday(rows,payouts,biz,now){const today=day(now),w=monday(today),allPaid=round(payouts.filter(p=>monday(p.paid_date)===w&&p.paid_date<=today).reduce((n,p)=>n+Number(p.amount),0));
 const parts=businesses.filter(b=>biz==='combined'||biz===b.business).map(b=>{const allocated=paymentTotals(rows.filter(p=>p.payment_date<=today),w,b.business).paid_out,paid=round(payouts.filter(p=>p.business===b.business&&monday(p.paid_date)===w&&p.paid_date<=today).reduce((n,p)=>n+Number(p.amount),0));return {business:b.business,allocated,paid,available:round(Math.max(0,Math.min(allocated-paid,250-allPaid)))};});
 return {week_start:w,date:shift(w,4),parts,paid:round(parts.reduce((n,p)=>n+p.paid,0)),available:round(Math.min(Math.max(0,250-allPaid),parts.reduce((n,p)=>n+p.available,0)))};
}
function displayMoney(v){return new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',minimumFractionDigits:Number(v)%1===0?0:2,maximumFractionDigits:2}).format(v);}
function overview(channelRows,manualRows,payments,subscriptionsRows,businessRows,potRows,input,biz,now){const s=settings(input),today=day(now),w=monday(today),effective=effectiveWeeks(manualRows,payments.filter(p=>p.payment_date<=today)),channelIds=new Set(channelRows.filter(c=>biz==='combined'||c.business===biz||(c.business==null&&(c.id==='steadyflow'?'sf':'sw')===biz)).map(c=>c.id)),scoped=effective.filter(r=>channelIds.has(r.channel_id)&&r.week_start===w),combined=effective.filter(r=>r.week_start===w),score=scoreboard(effective,s,now),target=score.targets.find(t=>t.week_start===w),funded=fundedPlan(channelRows,manualRows,payments.filter(p=>p.payment_date<=today),subscriptionsRows,businessRows,potRows,s,w),visible=funded.channels.filter(c=>channelIds.has(c.channel.id));
 const spend=round(scoped.reduce((n,r)=>n+r.spend,0)),profit=round(scoped.reduce((n,r)=>n+r.profit,0)),combinedProfit=round(combined.reduce((n,r)=>n+r.profit,0)),days=Math.min(7,Math.max(0,Math.floor((new Date(today)-new Date(w))/86400000)+1)),paceTarget=target?round(target.target*days/7):null,hasData=combined.some(r=>r.spend||r.revenue||r.cash_received),reached=forecast(effective,s,now).remaining===0;
 const warning=funded.channels.some(c=>c.paused||c.row&&c.light==='red'),hold=funded.channels.some(c=>c.row&&c.light==='amber'),onPace=reached||target&&combinedProfit>=paceTarget;
 const status=warning?'red':!hasData?'neutral':hold?'amber':onPace?'green':combinedProfit<0?'red':'amber';
 const label=status==='neutral'?'Ready to start':status==='green'?'On track':status==='red'?'Needs attention':onPace?'Check lead spend':'Below pace';
 const paused=visible.find(c=>c.paused),next=visible.find(c=>c.next_spend>0);let action;
 if(funded.capacity.contractor_needed)action='Book a contractor before taking on more work.';
 else if(paused)action='Keep '+paused.channel.name+' paused'+(next?'; put '+displayMoney(next.next_spend)+' into '+next.channel.name+' next week.':' and review its last two weeks.');
 else if(next)action='Put '+displayMoney(next.next_spend)+' into '+next.channel.name+' next week.';
 else if(!hasData)action='Add a payment or lead top-up to start this week.';
 else if(visible.some(c=>c.row&&!c.owner_pay_filled))action='Fill this week’s Owner Pay before raising lead spend.';
 else if(funded.unallocated>0)action='Choose where to use '+displayMoney(funded.unallocated)+' left in Growth.';
 else action='Check payments and channel figures before adding more lead money.';
 return {week_start:w,spend,profit,target:target?target.target:null,pace_target:paceTarget,combined_profit:combinedProfit,status,label,action,plan:funded,has_data:hasData};
}
function chartSeries(rows,input,biz,channelRows,now){const s=settings(input),today=day(now),w=monday(today),ids=new Set(channelRows.filter(c=>biz==='combined'||c.business===biz||(c.business==null&&(c.id==='steadyflow'?'sf':'sw')===biz)).map(c=>c.id)),valid=rows.filter(r=>ids.has(r.channel_id)&&r.week_start>=s.start_date&&r.week_start<=w).map(week),score=scoreboard([],s,now),weeksSince=Math.max(0,Math.floor((new Date(w)-new Date(s.start_date))/604800000)),last=Math.max(score.targets.length-1,weeksSince),first=Math.max(0,last-51);let running=round(valid.filter(r=>r.week_start<shift(s.start_date,first*7)).reduce((n,r)=>n+r.profit,0));const points=[];
 for(let i=first;i<=last;i++){const start=shift(s.start_date,i*7),profit=round(valid.filter(r=>r.week_start===start).reduce((n,r)=>n+r.profit,0));if(start<=w)running=round(running+profit);const t=score.targets[i];points.push({week:i+1,week_start:start,label:'W'+(i+1),profit:start<=w?profit:null,cumulative:start<=w?running:null,target:t?t.running_target:s.target_profit,goal:s.target_profit});}
 return {points,has_data:valid.some(r=>r.revenue||r.spend||r.cash_received),trimmed:first>0};
}
function leadTopup(rawRows,payments,channelId,amount,weekStart){const n=nonnegative(amount,'Top-up');if(n<=0)throw Error('Enter a top-up above £0.');const old=rawRows.find(r=>r.channel_id===channelId&&r.week_start===weekStart),r=week(Object.assign({channel_id:channelId,week_start:weekStart},old));
 const receipts=round(activePayments(payments).filter(p=>p.channel_id===channelId&&monday(p.payment_date)===weekStart).reduce((v,p)=>v+Number(p.lead_cost),0));
 r.spend=round((r.ticks.lead_topups?r.spend:r.spend+receipts)+n);r.ticks.lead_topups=true;return week(r);
}

const api={potColours,budget,friday,overview,chartSeries,leadTopup,activePayments,voidPreview,automaticGrowthTarget,fundedPlan,businesses,subscriptionNames,pots,subscription,subscriptions,payment,splitPayment,paymentTotals,splitContext,effectiveWeeks,scoreboard,forecast,flowMilestones,defaults,channels,checklist,round,date,day,shift,monday,settings,week,multiple,light,cash,capacity,contractor,channelState,plan,progress};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GrowthCore=api;
})(typeof globalThis!=='undefined'?globalThis:this);
