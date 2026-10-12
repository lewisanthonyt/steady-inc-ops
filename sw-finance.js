/* ============================================================================
   STEADYWORKS FINANCE — bank statement → income, costs, salary, personal spend,
   rough profit (estimates). Data: Supabase tables bank_transactions / bank_rules,
   private to the login that imported them (owner_id = auth.uid()).
   Never stores account numbers, sort codes or IBANs.
   ============================================================================ */

const FIN = {loaded:false, loading:false, error:null, rows:[], rules:[], f:{period:'all', biz:'all', cat:'all', q:'', sub:'all'}, personalAs:'loan', openGroup:null, preview:null};
const FIN_BIZ = ['SteadyWorks','SteadyFlow','Personal','Internal','TO CONFIRM'];
const FIN_CATS = {
  SteadyWorks: ['Income','Materials & supplies','Subcontractors','Fuel','Travel','Vehicle','Utilities','Phone (EE)','Bank fees','Lead generation (MyJobQuote)','Software (Google Workspace)','Other business cost'],
  SteadyFlow:  ['Income','Software & AI tools','Travel','Other'],
  Personal:    ['Food & drink (cafés/takeaways)','Groceries','Travel','Utilities','Newsagents & convenience','Leisure','Other personal'],
  Internal:    ['Transfer between pots']
};

/* ---------- pure helpers ---------- */
const finBiz = r => r.override_business || r.business;
const finCat = r => r.override_category || r.category;
const finTaxYear = d => { const y = +d.slice(0,4); return d >= y+'-04-06' ? `${y}/${String(y+1).slice(2)}` : `${y-1}/${String(y).slice(2)}`; };
const finMonth = d => d.slice(0,7);
function finScrub(s){ // never keep bank identifiers or long references
  return String(s||'').replace(/\b[A-Z]{2}\d{2}(?:\s?[A-Z0-9]{4}){3,7}(?:\s?[A-Z0-9]{1,4})?\b/g,'[IBAN]').replace(/(?<!\d{4}-)\b\d{2}-\d{2}-\d{2}\b/g,'')
    .replace(/[A-Z]?\d{7,}/g,'[ref]').replace(/Revolut Bank UK Ltd \( revolut\.com \).*/,'').replace(/\s+/g,' ').trim();
}
function finHash(s){ let h1 = 0x811c9dc5, h2 = 0x01000193; for(let i=0;i<s.length;i++){ const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619); h2 = Math.imul(h2 ^ c, 2246822519); } return (h1>>>0).toString(36)+(h2>>>0).toString(36); }
function finRowId(r){ return finHash([r.date, r.sub_account, r.description, (+r.money_out||0).toFixed(2), (+r.money_in||0).toFixed(2), r.balance==null?'':(+r.balance).toFixed(2)].join('|')); }
function finPayeeKey(r){
  let d = String(r.description||'').toLowerCase().replace(/\[ref\]|\[iban\]/g,'').replace(/fx rate.*$/,'');
  if(r.type==='CAR' || r.type==='FEE') d = d.split(' • ')[0];
  return d.replace(/\d+/g,'').replace(/[^a-z&' ]+/g,' ').replace(/\s+/g,' ').trim();
}

/* ---------- auto-tagging (same rules as the first statement) ---------- */
const finHas = (d, ...res) => res.some(re => re.test(d));
function finAutoTag(r, rules){
  const d = r.description, ty = r.type, inn = +r.money_in||0, date = r.date, key = finPayeeKey(r);
  const rule = (rules||[]).find(x => x.pattern === key); if(rule) return [rule.business, rule.category, 'Your saved rule'];
  if(/^(To|From) (Main|Mats|steadyflow)\b/.test(d)) return ['Internal','Transfer between pots',''];
  if(finHas(d,/^To Steadyworks Ltd/,/^Transfer to Steadyworks Ltd refund/)) return ['Internal','Sent and refunded','Sent and refunded, nets to zero'];
  if(/^To Lewis Thomas • (Pay|Directors pay)/.test(d)) return ['SteadyWorks','Salary', /Fee: £0\.20/.test(d)?'Includes £0.20 Revolut transfer fee':''];
  if(/^From Lewis T\b/.test(d)) return ['SteadyWorks','Salary repayment','Money paid back to the company, netted against salary'];
  if(finHas(d,/^Lovable/,/^Higgsfield/,/^Anthropic/)) return ['SteadyFlow','Software & AI tools',''];
  if(/AURA KABARE/.test(d)) return ['SteadyFlow','Income','Aura Kabare, SFM invoice'];
  if(/OLUBUNMY OSSAI/.test(d)) return ['TO CONFIRM','Income','Possibly a SteadyFlow payment from "Yoma"'];
  if(/FULLY ACTIVE/.test(d) && (date==='2026-02-24'||date==='2026-07-31') && inn===300) return ['TO CONFIRM','Income','Fully Active £300. Is this the "Nathan" payment?'];
  if(/FULLY ACTIVE/.test(d) && date==='2026-08-13' && inn===50) return ['TO CONFIRM','Income','Fully Active £50. Actually from Fabs?'];
  if(/^From British Pound/.test(d)) return ['TO CONFIRM','Money in','Own money, a refund, or income?'];
  if(/ESKAE SHORNAKAY/.test(d)) return ['TO CONFIRM','Money in','Joint account with Lewis, repayment or income?'];
  if(/STRIPE PAYMENTS/.test(d)) return ['TO CONFIRM','Income','Stripe payout, SteadyWorks or SteadyFlow?'];
  if((ty==='MOA'||ty==='MOR') && inn>0) return ['SteadyWorks','Income',''];
  if(finHas(d,/Screwfix/i,/Wickes/i,/Toolstation/i,/^B & Q/i,/Brewers/i,/City Plumbing/i,/N & C Bldg/i,/Lawsons/i,/Water Mark/i,/K S J Plumbing/i)) return ['SteadyWorks','Materials & supplies',''];
  if(finHas(d,/Augustin Justin/,/Kyron Williams/,/Denzil Ofori/)) return ['SteadyWorks','Subcontractors',''];
  if(/Myjobquote/i.test(d)) return ['SteadyWorks','Lead generation (MyJobQuote)',''];
  if(ty==='FEE' || /^Revolut Business Fee/.test(d)) return ['SteadyWorks','Bank fees',''];
  if(/Google Gsuite/i.test(d)) return ['SteadyWorks','Software (Google Workspace)',''];
  if(/^(To )?Ee Limited/i.test(d)) return ['SteadyWorks','Phone (EE)',''];
  if(/Dvla/i.test(d)) return ['SteadyWorks','Vehicle',''];
  if(/Cuvva/i.test(d)) return ['SteadyWorks','Vehicle',''];
  if(finHas(d,/^Shell/,/^Bp /,/^Esso/,/^Mfg /,/Mayfield Service/,/Rontec/,/Tesco Pfs/,/Lee Service Station/,/Dagenham Service Stati/)) return ['SteadyWorks','Fuel',''];
  if(finHas(d,/^Ubr\*/,/^Uber \*trip/)) return ['TO CONFIRM','Travel','Uber ride, business or personal?'];
  if(finHas(d,/^Tfl/i,/Sstn?$/,/Undergrou/,/London Overground/)) return ['TO CONFIRM','Travel','TfL / rail, business or personal?'];
  if(finHas(d,/Zipcar/,/Enterprise Rent/)) return ['TO CONFIRM','Travel','Car hire, business or personal?'];
  if(finHas(d,/Sainsbury/i,/Asda/i,/Tesco Stores/i,/Morrisons/i,/Iceland/i,/Co-op/i,/One ?Stop/i,/Nisa/i,/Good Grocer/i,/Save Wise/i,/Fruit/i,/Market Fresh/i,/Superm/i,/Cash And Car/i,/^Welcome/)) return ['TO CONFIRM','Groceries','Business (site supplies) or personal?'];
  if(finHas(d,/British Gas/,/Octopus Energy/)) return ['TO CONFIRM','Utilities','Home energy or business premises?'];
  if(finHas(d,/Cash Concept/,/^B&m/,/Rev trading/,/^Simons/,/Latin Style/,/Nyx\*/,/Liberty Shopping/,/yallow Shop/)) return ['TO CONFIRM','Unknown','Business or personal?'];
  if(finHas(d,/Greggs/i,/Starbucks/i,/Costa/i,/Pret A Manger/i,/Caffe Nero/i,/Uber \* Eats/i,/Burger King/i,/Subway/i,/Brothers Fish/i,/Bistro/i,/Peppers And Spice/i,/Naked Chips/i,/One Love Caribbean/i,/Pizza/i,/kebab/i,/^Gdk /i,/Mattcup/i,/Cafe/i,/Bakery/i,/Happy Coff/i))
    return ['Personal','Food & drink (cafés/takeaways)',''];
  if(finHas(d,/News/i,/Wine/i,/Off Licens/i,/Pan Cent/i,/Just Drinks/i,/Food And W/i,/General Store/i,/Town Shop/i,/Ezee Shop/i,/Four Bros/i,/Best Moon/i,/Tollgate Local/i,/East Dulwich Store/i,/Mr Good Morning/i,/Station Grocery/i,/Boundry Food/i,/Azad Food/i,/Sumup \*ezze/i,/^Ppoint_/i))
    return ['Personal','Newsagents & convenience',''];
  if(finHas(d,/Colchester Zoo/,/Delta By Marriott/,/Golds Gym/)) return ['Personal','Leisure',''];
  if(/Herbal Store/.test(d)) return ['Personal','Other personal',''];
  return ['TO CONFIRM','Unknown','New payee, business or personal?'];
}

/* ---------- summary (mirrors finance/summary.md) ---------- */
function finSummary(rows){
  const S = {inc:{SteadyWorks:0, SteadyFlow:0}, swCost:{}, sfCost:0, sal:{}, rep:{}, pers:{}, conf:{n:0, out:0, in:0}, salFee:0, months:{}};
  const M = m => S.months[m] || (S.months[m] = {inc:0, cost:0, sal:0});
  rows.forEach(r=>{
    const b = finBiz(r), c = finCat(r), o = +r.money_out||0, i = +r.money_in||0, ty = finTaxYear(r.date), m = M(finMonth(r.date));
    if(b==='Internal') return;
    if(c==='Salary'){ const fee = /Fee: £0\.20/.test(r.description) ? .2 : 0; S.sal[ty] = (S.sal[ty]||0) + o - fee; S.salFee += fee; m.sal += o - fee; m.cost += fee; return; }
    if(c==='Salary repayment'){ S.rep[ty] = (S.rep[ty]||0) + i; m.sal -= i; return; }
    if(b==='TO CONFIRM'){ S.conf.n++; S.conf.out += o; S.conf.in += i; return; }
    if((b==='SteadyWorks'||b==='SteadyFlow') && i>0 && o===0){ S.inc[b] += i; m.inc += i; return; }
    if(b==='SteadyWorks'){ S.swCost[c] = (S.swCost[c]||0) + o - i; m.cost += o - i; return; }
    if(b==='SteadyFlow'){ S.sfCost += o - i; return; }
    if(b==='Personal'){ S.pers[c] = (S.pers[c]||0) + o - i; return; }
  });
  if(S.salFee) S.swCost['Bank fees'] = (S.swCost['Bank fees']||0) + S.salFee;
  const sum = o => Object.values(o).reduce((a,b)=>a+b,0);
  S.swCostTotal = sum(S.swCost); S.salTotal = sum(S.sal); S.repTotal = sum(S.rep); S.netSal = S.salTotal - S.repTotal; S.persTotal = sum(S.pers);
  S.profit = S.inc.SteadyWorks - S.swCostTotal - S.netSal; S.ct = Math.max(0, S.profit) * .19;
  return S;
}

/* ---------- backend ---------- */
async function finLoad(){
  if(FIN.loading) return; FIN.loading = true; FIN.error = null;
  try{
    if(!CURRENT_USER_ID) throw new Error('Sign in to see SteadyWorks Finance.');
    const all = []; for(let from = 0; ; from += 1000){
      const {data, error} = await sb.from('bank_transactions').select('*').eq('owner_id', CURRENT_USER_ID).order('date', {ascending:false}).range(from, from+999);
      if(error) throw error; all.push(...(data||[])); if(!data || data.length < 1000) break;
    }
    const rr = await sb.from('bank_rules').select('*').eq('owner_id', CURRENT_USER_ID); if(rr.error) throw rr.error;
    FIN.rows = all.map(r=>Object.assign(r, {money_out:+r.money_out||0, money_in:+r.money_in||0, balance: r.balance==null?null:+r.balance}));
    FIN.rules = rr.data || []; FIN.loaded = true;
  }catch(e){ FIN.error = e.message || String(e); console.warn('Finance load failed', e); }
  FIN.loading = false; if(['sw-finance','dashboard','sw-dashboard'].includes(currentRoute)) renderPage();
}
function finCanEdit(){ return CURRENT_PROFILE.role!=='accountant' && CURRENT_PROFILE.role!=='partner'; }

/* ---------- import ---------- */
function finParseCsv(text){
  const rows = []; let row = [], cell = '', q = false;
  for(let i=0;i<text.length;i++){ const ch = text[i];
    if(q){ if(ch==='"'){ if(text[i+1]==='"'){ cell+='"'; i++; } else q = false; } else cell += ch; }
    else if(ch==='"') q = true; else if(ch===','){ row.push(cell); cell=''; } else if(ch==='\n' || ch==='\r'){ if(ch==='\r' && text[i+1]==='\n') i++; row.push(cell); rows.push(row); row=[]; cell=''; } else cell += ch; }
  if(cell || row.length){ row.push(cell); rows.push(row); }
  const head = (rows.shift()||[]).map(h=>h.trim()); return rows.filter(r=>r.some(c=>c.trim())).map(r=>Object.fromEntries(head.map((h,k)=>[h, (r[k]||'').trim()])));
}
// Accepts this app's transactions.csv, or a raw Revolut Business CSV export (best effort; auto-tagged).
function finNormalise(recs){
  if(!recs.length) return {rows:[], format:'empty'};
  const k = Object.keys(recs[0]);
  if(k.includes('business') && k.includes('money_out')){
    return {format:'SteadyInk CSV', rows: recs.map(r=>({date:r.date, sub_account:r.sub_account||'Main', type:r.type||'', description:finScrub(r.description), money_out:+r.money_out||0, money_in:+r.money_in||0,
      balance: r.balance===''?null:+r.balance, business:r.business, category:r.category||'', note:r.note||''}))};
  }
  const pick = (r, ...names) => { for(const n of names){ const hit = Object.keys(r).find(x=>x.toLowerCase()===n.toLowerCase()); if(hit && r[hit]!=='') return r[hit]; } return ''; };
  if(k.some(x=>/^amount$/i.test(x)) && k.some(x=>/description/i.test(x))){
    const out = recs.filter(r=>!/^(DECLINED|REVERTED|FAILED|PENDING)$/i.test(pick(r,'State'))).map(r=>{
      const amt = +pick(r,'Amount'), fee = +pick(r,'Fee')||0, kind = pick(r,'Type').toUpperCase();
      const ty = kind.includes('CARD') ? 'CAR' : kind.includes('FEE') ? 'FEE' : kind.includes('TOPUP') ? 'MOA' : amt<0 ? 'MOS' : 'MOR';
      const desc = finScrub([pick(r,'Description'), pick(r,'Reference')].filter(Boolean).join(' • '));
      const row = {date: pick(r,'Date completed (UTC)','Date started (UTC)','Date').slice(0,10), sub_account: pick(r,'Account')||'Main', type:ty, description:desc,
        money_out: amt<0 ? Math.round((-amt+fee)*100)/100 : 0, money_in: amt>0 ? amt : 0, balance: pick(r,'Balance')===''?null:+pick(r,'Balance')};
      const [b,c,n] = finAutoTag(row, FIN.rules); return Object.assign(row, {business:b, category:c, note:n});
    }).filter(r=>r.date);
    return {format:'Revolut CSV (auto-tagged)', rows: out};
  }
  return {rows:[], format:'unknown'};
}
function finOpenImport(){
  openModal(`<div class="modal-head"><h3>Import bank transactions</h3></div>
    <p class="muted small" style="margin-bottom:12px;">Upload <b>transactions.csv</b> (from the statement work) or a <b>Revolut Business CSV export</b>. Re-importing the same statement never double-counts. Account numbers, sort codes and IBANs are stripped and never stored.</p>
    <input class="input" type="file" accept=".csv,text/csv" onchange="finReadFile(this)">
    <div id="fin-preview" style="margin-top:14px;"></div>`);
}
function finReadFile(input){
  const file = input.files && input.files[0]; if(!file) return;
  const rd = new FileReader();
  rd.onload = ()=>{
    const {rows, format} = finNormalise(finParseCsv(String(rd.result)));
    const box = document.getElementById('fin-preview');
    if(!rows.length){ box.innerHTML = `<div class="empty-state">Couldn't read that file (${esc(format)}). Use transactions.csv or a Revolut CSV export.</div>`; FIN.preview = null; return; }
    rows.forEach(r=>{ r.id = finRowId(r); });
    const have = new Set(FIN.rows.map(r=>r.id)); const fresh = rows.filter(r=>!have.has(r.id));
    const tin = rows.reduce((s,r)=>s+r.money_in,0), tout = rows.reduce((s,r)=>s+r.money_out,0);
    FIN.preview = fresh;
    box.innerHTML = `<div class="card" style="background:var(--card-alt);"><b>${esc(format)}</b> · ${rows.length} rows · in ${fmt(tin)} · out ${fmt(tout)}<br>
      <span class="muted small">${fresh.length} new · ${rows.length-fresh.length} already imported (skipped) · ${fresh.filter(r=>r.business==='TO CONFIRM').length} to confirm</span></div>
      <div class="flex-between" style="margin-top:14px;"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" ${fresh.length?'':'disabled'} onclick="finDoImport()">Import ${fresh.length} transactions</button></div>`;
  };
  rd.readAsText(file);
}
async function finDoImport(){
  const rows = FIN.preview || []; if(!rows.length) return;
  const payload = rows.map(r=>({owner_id:CURRENT_USER_ID, id:r.id, date:r.date, sub_account:r.sub_account, type:r.type, description:r.description, money_out:r.money_out, money_in:r.money_in,
    balance:r.balance, business:r.business, category:r.category, note:r.note}));
  for(let i=0;i<payload.length;i+=500){
    const {error} = await sb.from('bank_transactions').upsert(payload.slice(i,i+500), {onConflict:'owner_id,id', ignoreDuplicates:true});
    if(error){ toast('Import stopped: '+error.message,'⚠️'); return; }
  }
  closeModal(); toast(`Imported ${payload.length} transactions`,'✅'); FIN.preview = null; FIN.loaded = false; finLoad();
}

/* ---------- TO CONFIRM decisions ---------- */
function finGroups(){
  const g = {}; FIN.rows.filter(r=>finBiz(r)==='TO CONFIRM').forEach(r=>{ const k = finPayeeKey(r); (g[k] = g[k] || {key:k, rows:[], out:0, in:0, cat:finCat(r), note:r.note, label:r.description.split(' • ')[0]}); g[k].rows.push(r); g[k].out += r.money_out; g[k].in += r.money_in; });
  return Object.values(g).sort((a,b)=>(b.out+b.in)-(a.out+a.in));
}
async function finDecide(ids, business, category, remember, key){
  if(!finCanEdit() || !ids.length) return;
  const now = new Date().toISOString(), set = new Set(ids), prev = FIN.rows.filter(r=>set.has(r.id)).map(r=>[r, r.override_business, r.override_category]);
  FIN.rows.forEach(r=>{ if(set.has(r.id)){ r.override_business = business; r.override_category = category; } }); finRefresh();
  const {error} = await sb.from('bank_transactions').update({override_business:business, override_category:category, updated_at:now}).eq('owner_id', CURRENT_USER_ID).in('id', ids);
  if(error){ prev.forEach(([r,b,c])=>{ r.override_business = b; r.override_category = c; }); finRefresh(); toast('Not saved: '+error.message,'⚠️'); return; }
  if(remember && key){ const rr = await sb.from('bank_rules').upsert({owner_id:CURRENT_USER_ID, pattern:key, business, category}, {onConflict:'owner_id,pattern'}); if(!rr.error) FIN.rules = FIN.rules.filter(x=>x.pattern!==key).concat([{pattern:key, business, category}]); }
  toast(`${ids.length} marked ${business}`,'✅');
}
function finGroupDecide(idx, business){
  const g = finGroups()[idx]; if(!g) return;
  const sel = document.getElementById('fin-cat-'+idx), rem = document.getElementById('fin-rem-'+idx);
  finDecide(g.rows.map(r=>r.id), business, sel ? sel.value : finDefaultCat(business, g.cat), rem && rem.checked, g.key);
}
function finDefaultCat(business, cat){
  const base = String(cat||'').split(' (')[0]; const list = FIN_CATS[business] || [];
  return list.find(c=>c===cat) || list.find(c=>c.startsWith(base)) || (business==='Personal' ? 'Other personal' : business==='SteadyFlow' ? 'Other' : 'Other business cost');
}
async function finUndo(id){ const r = FIN.rows.find(x=>x.id===id); if(!r) return; finDecide([id], r.business, r.category, false); }

/* ---------- filters & export ---------- */
function finSet(k, v){ FIN.f[k] = v; finRefresh(); }
function finPeriodRows(){
  const p = FIN.f.period;
  return FIN.rows.filter(r=>(p==='all' || (p.startsWith('TY') ? finTaxYear(r.date)===p.slice(2) : finMonth(r.date)===p)) && (FIN.f.sub==='all' || r.sub_account===FIN.f.sub));
}
function finTableRows(){
  const q = FIN.f.q.toLowerCase();
  return finPeriodRows().filter(r=>(FIN.f.biz==='all' || finBiz(r)===FIN.f.biz) && (FIN.f.cat==='all' || finCat(r)===FIN.f.cat) && (!q || r.description.toLowerCase().includes(q)));
}
function finExport(){
  const cols = ['date','sub_account','type','description','money_out','money_in','balance','business','category','note'];
  const csv = [cols.join(',')].concat(finTableRows().map(r=>cols.map(c=>{ const v = c==='business' ? finBiz(r) : c==='category' ? finCat(r) : r[c]; const s = v==null ? '' : String(v); return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s; }).join(','))).join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], {type:'text/csv'})); a.download = 'steadyworks-finance-'+(FIN.f.period==='all'?'all':FIN.f.period)+'.csv'; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href), 2000);
}
function finRefresh(){ if(currentRoute==='sw-finance'){ const c = document.getElementById('content'); if(c){ c.innerHTML = view_sw_finance(); afterRender_sw_finance(); } } }

/* ---------- view ---------- */
function view_sw_finance(){
  finInjectStyle();
  if(!FIN.loaded){
    if(!FIN.loading && !FIN.error) setTimeout(finLoad, 0);
    return FIN.error ? `<div class="card"><div class="empty-state">${esc(FIN.error)}<br><br><button class="btn btn-gold" onclick="FIN.error=null;finLoad()">Try again</button></div></div>` : `<div class="empty-state">Loading finance…</div>`;
  }
  if(!FIN.rows.length) return `<div class="card fin-empty"><div class="fin-big">🏦</div><h3>No transactions yet</h3>
    <p class="muted">Import <b>finance/transactions.csv</b> (or a Revolut Business CSV export) to see income, costs, salary and profit.</p>
    ${finCanEdit()?`<button class="btn btn-gold" onclick="finOpenImport()">📥 Import CSV</button>`:''}</div>`;
  const PR = finPeriodRows(), S = finSummary(PR), g = gbp => fmt(gbp);
  const months = [...new Set(FIN.rows.map(r=>finMonth(r.date)))].sort().reverse(), tys = [...new Set(FIN.rows.map(r=>finTaxYear(r.date)))].sort().reverse();
  const subs = [...new Set(FIN.rows.map(r=>r.sub_account))];
  const cats = [...new Set(FIN.rows.map(finCat).filter(Boolean))].sort();
  const sel = (k, opts) => `<select class="input fin-sel" onchange="finSet('${k}', this.value)">${opts.map(([v,l])=>`<option value="${esc(v)}" ${FIN.f[k]===v?'selected':''}>${esc(l)}</option>`).join('')}</select>`;
  const filters = `<div class="fin-filters">
    ${sel('period', [['all','All dates']].concat(tys.map(y=>['TY'+y,'Tax year '+y]), months.map(m=>[m, new Date(m+'-01').toLocaleDateString('en-GB',{month:'short', year:'numeric'})])))}
    ${sel('biz', [['all','All businesses']].concat(FIN_BIZ.map(b=>[b,b])))}
    ${sel('cat', [['all','All categories']].concat(cats.map(c=>[c,c])))}
    ${sel('sub', [['all','All pots']].concat(subs.map(s=>[s,s])))}
    <input type="text" class="input fin-sel" placeholder="Search…" value="${esc(FIN.f.q)}" onchange="finSet('q', this.value)"></div>
    <div class="muted small" style="margin:-4px 0 14px;">Date and pot filters apply to everything. Business, category and search filter the transactions list and chart.</div>`;
  const kpi = (label, val, sub, cls='') => `<div class="card kpi-card ${cls}"><div class="kpi-label">${label}</div><div class="kpi-value">${val}</div><div class="small muted" style="margin-top:6px;">${sub}</div></div>`;
  const kpis = `<div class="grid grid-3" style="margin-bottom:16px;">
    ${kpi('SteadyWorks income', g(S.inc.SteadyWorks), 'SteadyFlow '+g(S.inc.SteadyFlow))}
    ${kpi('SteadyWorks costs', g(S.swCostTotal), 'SteadyFlow tools '+g(S.sfCost))}
    ${kpi('Net salary', g(S.netSal), 'Paid '+g(S.salTotal)+' · paid back '+g(S.repTotal))}
    ${kpi('Personal on company card', g(S.persTotal), FIN.personalAs==='loan'?'Treated as: director\'s loan':'Treated as: extra salary')}
    ${kpi('Rough profit <span class="fin-est">estimate</span>', g(S.profit), 'Income − costs − net salary', S.profit<0?'fin-neg':'')}
    ${kpi('Corporation tax 19% <span class="fin-est">estimate</span>', g(S.ct), 'Confirm with your accountant')}
  </div>`;
  const costRows = Object.entries(S.swCost).sort((a,b)=>b[1]-a[1]).map(([c,v])=>`<tr><td>${esc(c)}</td><td class="r">${g(v)}</td></tr>`).join('');
  const tyRows = Object.keys(Object.assign({}, S.sal, S.rep)).sort().map(y=>`<tr><td>${y}</td><td class="r">${g(S.sal[y]||0)}</td><td class="r">${g(S.rep[y]||0)}</td><td class="r"><b>${g((S.sal[y]||0)-(S.rep[y]||0))}</b></td></tr>`).join('');
  const persRows = Object.entries(S.pers).sort((a,b)=>b[1]-a[1]).map(([c,v])=>`<tr><td>${esc(c)}</td><td class="r">${g(v)}</td></tr>`).join('');
  const groups = finGroups();
  const queue = groups.length ? groups.slice(0,40).map((gr,i)=>{
    const open = FIN.openGroup===gr.key;
    return `<div class="fin-q">
      <div class="fin-q-top" onclick="FIN.openGroup=${open?'null':`'${esc(gr.key).replace(/'/g,"\\'")}'`};finRefresh()">
        <div><b>${esc(gr.label)}</b><div class="muted small">${gr.rows.length} × · ${esc(gr.note||gr.cat||'')}</div></div>
        <div class="fin-q-amt">${gr.out?'−'+g(gr.out):''}${gr.in?' +'+g(gr.in):''}</div></div>
      ${finCanEdit()?`<div class="fin-q-act">
        <button class="btn btn-ghost btn-sm" onclick="finGroupDecide(${i},'SteadyWorks')">SteadyWorks</button>
        <button class="btn btn-ghost btn-sm" onclick="finGroupDecide(${i},'SteadyFlow')">SteadyFlow</button>
        <button class="btn btn-ghost btn-sm" onclick="finGroupDecide(${i},'Personal')">Personal</button>
        <label class="small muted fin-rem"><input type="checkbox" id="fin-rem-${i}" checked> remember payee</label></div>`:''}
      ${open?`<div class="fin-q-rows">${gr.rows.map(r=>`<div class="fin-q-row"><span>${r.date}</span><span>${esc(r.description)}</span><span class="r">${r.money_out?'−'+g(r.money_out):'+'+g(r.money_in)}</span>
        ${finCanEdit()?`<span class="fin-q-mini"><button onclick="finDecide(['${r.id}'],'SteadyWorks',finDefaultCat('SteadyWorks','${esc(r.category)}'))">SW</button><button onclick="finDecide(['${r.id}'],'SteadyFlow',finDefaultCat('SteadyFlow','${esc(r.category)}'))">SF</button><button onclick="finDecide(['${r.id}'],'Personal',finDefaultCat('Personal','${esc(r.category)}'))">P</button></span>`:''}</div>`).join('')}</div>`:''}
    </div>`; }).join('') : `<div class="prio-clear">✅ Nothing left to confirm.</div>`;
  const TR = finTableRows();
  const table = `<div class="table-wrap"><table class="table fin-table"><thead><tr><th>Date</th><th>Description</th><th>Business</th><th>Category</th><th class="r">Out</th><th class="r">In</th></tr></thead><tbody>
    ${TR.slice(0,300).map(r=>`<tr class="${finBiz(r)==='TO CONFIRM'?'fin-tc':''}"><td>${r.date}</td><td>${esc(r.description)}<div class="muted small">${esc(r.sub_account)}${r.override_business?` · <a href="#" onclick="finUndo('${r.id}');return false;">undo your tag</a>`:''}</div></td>
      <td><span class="fin-badge b-${finBiz(r).replace(/\s/g,'')}">${esc(finBiz(r))}</span></td><td class="small">${esc(finCat(r)||'')}</td><td class="r">${r.money_out?g(r.money_out):''}</td><td class="r">${r.money_in?g(r.money_in):''}</td></tr>`).join('')}
  </tbody></table></div>${TR.length>300?`<div class="muted small" style="margin-top:8px;">Showing 300 of ${TR.length}. Narrow the filters or export the CSV.</div>`:''}`;
  return `${filters}${kpis}
  <div class="grid grid-2" style="margin-bottom:16px;align-items:start;">
    <div class="card"><div class="card-title">Income, costs & salary by month</div><div style="position:relative;height:240px;"><canvas id="finChart"></canvas></div></div>
    <div class="card"><div class="card-title">SteadyWorks costs by category</div><table class="table fin-mini"><tbody>${costRows||'<tr><td class="muted">None in this period</td></tr>'}</tbody></table></div>
  </div>
  <div class="grid grid-2" style="margin-bottom:16px;align-items:start;">
    <div class="card"><div class="card-title">Net salary by UK tax year</div>
      <table class="table fin-mini"><thead><tr><th>Tax year</th><th class="r">Paid</th><th class="r">Paid back</th><th class="r">Net</th></tr></thead><tbody>${tyRows||'<tr><td colspan="4" class="muted">None in this period</td></tr>'}</tbody></table>
      <p class="muted small" style="margin-top:8px;">Unless these went through payroll (PAYE/RTI), your accountant may treat them as director's loan drawings <span class="fin-est">estimate</span>.</p></div>
    <div class="card"><div class="card-title">Personal spending on the company card <span class="fin-toggle">
        <button class="${FIN.personalAs==='salary'?'on':''}" onclick="FIN.personalAs='salary';finRefresh()">Extra salary</button><button class="${FIN.personalAs==='loan'?'on':''}" onclick="FIN.personalAs='loan';finRefresh()">Director's loan</button></span></div>
      <table class="table fin-mini"><tbody>${persRows||'<tr><td class="muted">None in this period</td></tr>'}<tr><td><b>Total</b></td><td class="r"><b>${g(S.persTotal)}</b></td></tr></tbody></table>
      <p class="muted small" style="margin-top:8px;">This label only changes the wording. Decide salary vs loan with your accountant.</p></div>
  </div>
  <div class="card" style="margin-bottom:16px;"><div class="card-title">TO CONFIRM <span class="muted small">${S.conf.n} in this period · −${g(S.conf.out)} / +${g(S.conf.in)} · excluded from totals until decided</span></div>
    <div class="fin-queue">${queue}</div>${groups.length>40?`<div class="muted small" style="margin-top:8px;">Showing the 40 biggest payees of ${groups.length}.</div>`:''}</div>
  <div class="card"><div class="card-title">Transactions <span class="muted small">${TR.length} shown</span></div>${table}</div>`;
}

function afterRender_sw_finance(){
  if(!FIN.loaded || !FIN.rows.length || typeof chartSafe!=='function') return;
  const rows = finPeriodRows().filter(r=>(FIN.f.biz==='all' || finBiz(r)===FIN.f.biz) && (FIN.f.cat==='all' || finCat(r)===FIN.f.cat));
  const S = finSummary(rows), ms = Object.keys(S.months).sort();
  chartSafe('finChart','bar',{labels: ms.map(m=>new Date(m+'-01').toLocaleDateString('en-GB',{month:'short', year:'2-digit'})), datasets:[
    {label:'Income', data: ms.map(m=>Math.round(S.months[m].inc)), backgroundColor:'#22C55E', borderRadius:5},
    {label:'Business costs', data: ms.map(m=>Math.round(S.months[m].cost)), backgroundColor:'#E11D2A', borderRadius:5},
    {label:'Net salary', data: ms.map(m=>Math.round(S.months[m].sal)), backgroundColor:'#F59E0B', borderRadius:5}]},
    {plugins:{legend:{position:'bottom', labels:{boxWidth:10, font:{size:11}}}}, scales:{y:{ticks:{callback:v=>'£'+v}}}});
}

function finInjectStyle(){
  if(document.getElementById('fin-style')) return;
  const s = document.createElement('style'); s.id = 'fin-style';
  s.textContent = `
  .fin-filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;} .fin-sel{width:auto;min-width:140px;flex:1 1 140px;}
  .fin-est{font-size:10px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--warning);background:rgba(245,158,11,.12);border-radius:6px;padding:1px 6px;margin-left:4px;}
  .fin-neg .kpi-value{color:var(--danger);}
  .fin-mini td,.fin-mini th{padding:7px 8px;} .r{text-align:right;white-space:nowrap;}
  .fin-toggle{display:inline-flex;border:1px solid var(--border);border-radius:9px;overflow:hidden;} .fin-toggle button{background:none;border:0;color:var(--text-soft);font-size:11px;font-weight:700;padding:4px 8px;}
  .fin-toggle button.on{background:var(--gold);color:#fff;}
  .fin-queue{display:flex;flex-direction:column;gap:8px;}
  .fin-q{border:1px solid var(--border);border-radius:12px;background:var(--card-alt);padding:10px 12px;}
  .fin-q-top{display:flex;justify-content:space-between;gap:10px;cursor:pointer;} .fin-q-amt{font-weight:800;white-space:nowrap;}
  .fin-q-act{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px;} .fin-rem{display:inline-flex;align-items:center;gap:4px;margin-left:auto;}
  .fin-q-rows{margin-top:8px;border-top:1px solid var(--border);padding-top:6px;display:flex;flex-direction:column;gap:4px;max-height:260px;overflow:auto;}
  .fin-q-row{display:grid;grid-template-columns:86px minmax(0,1fr) auto auto;gap:8px;font-size:12px;align-items:center;}
  .fin-q-mini button{background:var(--input-bg);border:1px solid var(--border);color:var(--text);border-radius:6px;font-size:10px;font-weight:800;padding:2px 6px;margin-left:3px;}
  .fin-badge{font-size:11px;font-weight:800;border-radius:6px;padding:2px 7px;white-space:nowrap;}
  .b-SteadyWorks{background:rgba(225,29,42,.15);color:#FF8A92;} .b-SteadyFlow{background:rgba(0,229,204,.12);color:var(--teal);} .b-Personal{background:rgba(167,139,250,.15);color:#C4B5FD;}
  .b-Internal{background:rgba(255,255,255,.06);color:var(--text-soft);} .b-TOCONFIRM{background:rgba(245,158,11,.15);color:var(--warning);}
  .fin-tc td{background:rgba(245,158,11,.04);}
  .fin-bank{cursor:pointer;margin-bottom:20px;padding:16px;}
  .fin-bank-head{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:12px;font-weight:800;letter-spacing:1.3px;color:#C4B5FD;margin-bottom:12px;}
  .fin-bank-go{letter-spacing:0;font-weight:700;color:var(--text-soft);}
  .fin-bank-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;}
  .fin-bank-cell{background:var(--card-alt);border:1px solid var(--border);border-radius:12px;padding:10px 12px;}
  .fin-bank-cell .l{font-size:11px;color:var(--text-soft);font-weight:700;} .fin-bank-cell .v{font-size:19px;font-weight:900;margin-top:2px;font-variant-numeric:tabular-nums;}
  .fin-bank-cell .s{font-size:10.5px;color:var(--text-soft);margin-top:2px;}
  .fin-bank-cell.neg .v{color:var(--danger);} .fin-bank-cell.warn .v{color:var(--warning);}
  .fin-bank-check{margin-top:10px;font-size:12px;padding:8px 10px;border-radius:10px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);}
  .fin-bank-check.ok{background:rgba(34,197,94,.08);border-color:rgba(34,197,94,.3);}
  @media (max-width:1000px){ .fin-bank-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
  @media (max-width:520px){ .fin-bank-grid{grid-template-columns:repeat(2,minmax(0,1fr));} }
  .fin-empty{text-align:center;padding:40px 20px;} .fin-big{font-size:46px;margin-bottom:10px;}
  @media (max-width:640px){ .fin-q-row{grid-template-columns:1fr auto;} .fin-q-row span:nth-child(2){grid-column:1 / -1;} .fin-rem{margin-left:0;} }`;
  document.head.appendChild(s);
}

/* ---------- BANK CARD — real bank figures shown on the dashboards, next to the invoice figures ----------
   Not added to the invoice numbers: a paid invoice also arrives in the bank, so adding them would double count. */
function finBankCardHtml(){
  if(typeof CURRENT_USER_ID==='undefined' || !CURRENT_USER_ID || CURRENT_PROFILE.role==='partner') return '';
  if(!FIN.loaded){ if(!FIN.loading && !FIN.error) setTimeout(finLoad, 0); return ''; }
  if(!FIN.rows.length) return `<div class="card fin-bank" onclick="navigate('sw-finance')"><div class="fin-bank-head"><span>🏦 FROM YOUR BANK</span><span class="fin-bank-go">Import statement →</span></div>
    <div class="muted small">Import your Revolut statement to see real money in, costs, profit and a tax estimate here.</div></div>`;
  const today = localDateStr(new Date()), ty = finTaxYear(today), tyStart = (+ty.slice(0,4))+'-04-06';
  const rows = FIN.rows.filter(r=>finTaxYear(r.date)===ty), S = finSummary(rows);
  const last = FIN.rows.reduce((m,r)=>r.date>m?r.date:m, '');
  let invoiced = null; try{ invoiced = receivedSum('sw', tyStart, last||today).gross; }catch(e){}
  const diff = invoiced==null ? null : S.inc.SteadyWorks - invoiced;
  const conf = FIN.rows.filter(r=>finBiz(r)==='TO CONFIRM').length;
  const cell = (l,v,sub,cls='') => `<div class="fin-bank-cell ${cls}"><div class="l">${l}</div><div class="v">${v}</div>${sub?`<div class="s">${sub}</div>`:''}</div>`;
  return `<div class="card fin-bank fx-card fx-glow" style="--i:1;--fx-c:#A78BFA" onclick="navigate('sw-finance')">
    <div class="fin-bank-head"><span>🏦 FROM YOUR BANK · TAX YEAR ${ty}</span><span class="fin-bank-go">Statement to ${last ? fmtDate(last) : '—'} · Finance →</span></div>
    <div class="fin-bank-grid">
      ${cell('Money in', fmt(S.inc.SteadyWorks), 'SteadyWorks, received in bank')}
      ${cell('Business costs', fmt(S.swCostTotal), 'Materials, subbies, fuel…')}
      ${cell('Paid to you', fmt(S.netSal), 'Net of repayments')}
      ${cell('Profit <span class="fin-est">est.</span>', fmt(S.profit), 'In − costs − pay', S.profit<0?'neg':'')}
      ${cell('Tax to save <span class="fin-est">est.</span>', fmt(S.ct), 'Corporation tax 19%')}
      ${cell('Still to sort', conf, conf ? 'Tap to decide' : 'All sorted ✅', conf ? 'warn' : '')}
    </div>
    ${diff==null ? '' : `<div class="fin-bank-check ${Math.abs(diff)<1?'ok':''}">${Math.abs(diff)<1 ? '✅ Bank matches the invoices marked paid in SteadyInk this tax year.'
      : `🔎 Bank says <b>${fmt(S.inc.SteadyWorks)}</b> came in, invoices marked paid say <b>${fmt(invoiced)}</b> (${diff>0?'+':'−'}${fmt(Math.abs(diff))}). ${diff>0 ? 'Some payments may not be marked paid in Invoices yet.' : 'Some invoices marked paid may not have reached the bank.'}`}</div>`}
  </div>`;
}

window.FIN_LOGIC = {finAutoTag, finSummary, finTaxYear, finRowId, finPayeeKey, finParseCsv, finNormalise, finScrub};
