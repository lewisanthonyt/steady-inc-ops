// MARKER-TEST-4SEP-2247
/* ===================== STEADYWORKS — OPS PLATFORM ===================== */

/* ---------- DATA LAYER ---------- */
const STORE_KEY = 'steadyworks_ops_data_v1';

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" style="width:100%;height:100%;display:block;">
  <defs>
    <radialGradient id="glow" cx="50%" cy="48%" r="60%">
      <stop offset="0%" stop-color="#333333" /><stop offset="55%" stop-color="#101010" /><stop offset="100%" stop-color="#000000" />
    </radialGradient>
    <clipPath id="circleClip"><circle cx="300" cy="320" r="163" /></clipPath>
  </defs>
  <rect x="0" y="0" width="600" height="600" fill="url(#glow)" />
  <circle cx="300" cy="320" r="178" fill="#050505" />
  <circle cx="300" cy="320" r="163" fill="#E11D2A" />
  <g clip-path="url(#circleClip)"><g stroke="#0a0a0a" stroke-width="7" stroke-linecap="round">
    <line x1="300.0" y1="260.0" x2="300.0" y2="60.0" /><line x1="310.4" y1="260.9" x2="345.1" y2="63.9" />
    <line x1="320.5" y1="263.6" x2="388.9" y2="75.7" /><line x1="330.0" y1="268.0" x2="430.0" y2="94.8" />
    <line x1="338.6" y1="274.0" x2="467.1" y2="120.8" /><line x1="346.0" y1="281.4" x2="499.2" y2="152.9" />
    <line x1="352.0" y1="290.0" x2="525.2" y2="190.0" /><line x1="356.4" y1="299.5" x2="544.3" y2="231.1" />
    <line x1="359.1" y1="309.6" x2="556.1" y2="274.9" /><line x1="360.0" y1="320.0" x2="560.0" y2="320.0" />
    <line x1="359.1" y1="330.4" x2="556.1" y2="365.1" /><line x1="356.4" y1="340.5" x2="544.3" y2="408.9" />
    <line x1="352.0" y1="350.0" x2="525.2" y2="450.0" /><line x1="346.0" y1="358.6" x2="499.2" y2="487.1" />
    <line x1="338.6" y1="366.0" x2="467.1" y2="519.2" /><line x1="330.0" y1="372.0" x2="430.0" y2="545.2" />
    <line x1="320.5" y1="376.4" x2="388.9" y2="564.3" /><line x1="310.4" y1="379.1" x2="345.1" y2="576.1" />
    <line x1="300.0" y1="380.0" x2="300.0" y2="580.0" /><line x1="289.6" y1="379.1" x2="254.9" y2="576.1" />
    <line x1="279.5" y1="376.4" x2="211.1" y2="564.3" /><line x1="270.0" y1="372.0" x2="170.0" y2="545.2" />
    <line x1="261.4" y1="366.0" x2="132.9" y2="519.2" /><line x1="254.0" y1="358.6" x2="100.8" y2="487.1" />
    <line x1="248.0" y1="350.0" x2="74.8" y2="450.0" /><line x1="243.6" y1="340.5" x2="55.7" y2="408.9" />
    <line x1="240.9" y1="330.4" x2="43.9" y2="365.1" /><line x1="240.0" y1="320.0" x2="40.0" y2="320.0" />
    <line x1="240.9" y1="309.6" x2="43.9" y2="274.9" /><line x1="243.6" y1="299.5" x2="55.7" y2="231.1" />
    <line x1="248.0" y1="290.0" x2="74.8" y2="190.0" /><line x1="254.0" y1="281.4" x2="100.8" y2="152.9" />
    <line x1="261.4" y1="274.0" x2="132.9" y2="120.8" /><line x1="270.0" y1="268.0" x2="170.0" y2="94.8" />
    <line x1="279.5" y1="263.6" x2="211.1" y2="75.7" /><line x1="289.6" y1="260.9" x2="254.9" y2="63.9" />
  </g></g>
  <path d="M 250 470 L 262 340 L 332 332 L 358 462 Z" fill="#0a0a0a" />
  <g fill="#0a0a0a"><path d="M 222 300 Q 214 252 258 233 Q 282 220 312 224 Q 340 216 366 232 Q 404 236 412 278 Q 418 318 392 344 Q 372 360 340 358 L 252 352 Q 220 338 222 300 Z" />
    <line x1="262" y1="232" x2="264" y2="346" stroke="#E11D2A" stroke-width="5" /><line x1="298" y1="222" x2="300" y2="350" stroke="#E11D2A" stroke-width="5" />
    <line x1="335" y1="226" x2="337" y2="352" stroke="#E11D2A" stroke-width="5" /><line x1="370" y1="240" x2="372" y2="348" stroke="#E11D2A" stroke-width="5" /></g>
  <path d="M 232 320 Q 210 330 215 360 Q 222 382 250 380 L 262 350 Q 248 332 232 320 Z" fill="#0a0a0a" />
  <g transform="rotate(-32 300 300)"><rect x="20" y="282" width="300" height="36" rx="11" fill="#E11D2A" stroke="#0a0a0a" stroke-width="7"/>
    <circle cx="48" cy="300" r="9" fill="#0a0a0a"/><rect x="300" y="290" width="34" height="20" rx="4" fill="#0a0a0a"/></g>
  <g transform="translate(355,160) rotate(-32)"><rect x="0" y="0" width="150" height="78" rx="14" fill="#E11D2A" stroke="#0a0a0a" stroke-width="7"/>
    <rect x="92" y="-20" width="58" height="118" rx="16" fill="#161616" stroke="#0a0a0a" stroke-width="7"/><rect x="14" y="20" width="62" height="36" rx="6" fill="#0a0a0a"/></g>
</svg>`;

function defaultData(){
  return {
    settings:{
      businessName:'SteadyWorks Ltd',
      regNo:'',
      address:'',
      phone:'',
      email:'',
      vatRate:20,
      vatRegistered:true,
      annualTarget:1000000,
      monthlyTargets:Array(12).fill(83333),
      sfMonthlyTarget:5000,
      sfWeeklyEmailTarget:50,
      sfWeeklyCallTarget:15,
      rates:{
        labour:45, callout:75, emergencyCallout:150, dayRate:380, markup:15
      },
      defaultRetentionPct:5,
      defectsPeriodDays:90,
      terms:'Payment due within 14 days of invoice date. Late payments may incur a 5% surcharge.'
    },
    jobs:[],
    leads:[],
    quotes:[],
    invoices:[],
    customers:[],
    employees:[],
    subcontractors:[],
    expenses:[],
    compliance:[],
    events:[],
    templates:{quote:[], invoice:[], followup:[
      {id:'tpl-fu-email', channel:'email', name:'Missed your call (email)', subject:'Sorry we missed your call', body:'Hi {{name}},\n\nSorry we missed your call earlier — we were out on a job. Could you let us know a good time to call back, or what you need help with, and we\'ll get straight to it?\n\nThanks,\n'+ 'SteadyWorks Ltd'},
      {id:'tpl-fu-sms', channel:'sms', name:'Missed your call (text)', subject:'', body:'Hi {{name}}, sorry we missed your call — this is SteadyWorks. What can we help with, or what\'s a good time to call you back?'},
      {id:'tpl-fu-review-email', channel:'email', name:'Request a review (email)', subject:'How did we do?', body:'Hi {{name}},\n\nThanks again for choosing SteadyWorks. If you were happy with the work, it would mean a lot if you could leave us a quick review:\n\n[your Google review link here]\n\nIt only takes a minute and really helps us out.\n\nThanks,\nSteadyWorks Ltd'},
      {id:'tpl-fu-review-sms', channel:'sms', name:'Request a review (text)', subject:'', body:'Hi {{name}}, thanks for choosing SteadyWorks! If you were happy with the work, a quick review would really help us out: [your Google review link here]'},
      {id:'tpl-fu-quote-email', channel:'email', name:'Following up on a quote (email)', subject:'Following up on your quote', body:'Hi {{name}},\n\nJust checking in on the quote we sent over — happy to answer any questions or adjust anything if needed.\n\nLet me know if you\'d like to go ahead, or if there\'s a better time to chat.\n\nThanks,\nSteadyWorks Ltd'},
      {id:'tpl-fu-quote-sms', channel:'sms', name:'Following up on a quote (text)', subject:'', body:'Hi {{name}}, just checking in on the quote we sent over — any questions, or would you like to go ahead? This is SteadyWorks.'},
      {id:'tpl-fu-appt-email', channel:'email', name:'Confirming an appointment (email)', subject:'Confirming your appointment', body:'Hi {{name}},\n\nJust confirming we\'ve got you booked in. We\'ll text/call ahead on the day, but let us know if anything changes on your end.\n\nThanks,\nSteadyWorks Ltd'},
      {id:'tpl-fu-appt-sms', channel:'sms', name:'Confirming an appointment (text)', subject:'', body:'Hi {{name}}, confirming your appointment with SteadyWorks. We\'ll be in touch ahead of time — let us know if anything changes.'},
      {id:'tpl-fu-checkin-email', channel:'email', name:'General check-in (email)', subject:'Just checking in', body:'Hi {{name}},\n\nIt\'s been a little while since we last spoke — just checking in to see if you still need any help, or if your plans have changed.\n\nHappy to pick things back up whenever suits.\n\nThanks,\nSteadyWorks Ltd'},
      {id:'tpl-fu-checkin-sms', channel:'sms', name:'General check-in (text)', subject:'', body:'Hi {{name}}, just checking in to see if you still need any help, or if your plans have changed. This is SteadyWorks — happy to pick things back up whenever suits.'}
    ]},
    followUps:[],
    sfClients:[],
    sfQuotes:[],
    sfInvoices:[],
    sfActivity:[],
    sfExpenses:[],
    sfCompliance:[],
    budgets:{},
    geocodeCache:{},
    counters:{job:0, quote:0, invoice:0, variation:0, sfQuote:0, sfInvoice:0},
    activityLog:[],
    paintPipeline:[],
    paintPipelineSettings:{
      weeklyProfitTarget: 2500,
      marketingSpendWeekly: 300,
      marginLaneLow: 20,
      marginLaneHigh: 35,
      defaultDepositPct: 25,
      reinvestmentPct: 10,
      fabSplitPct: 50
    }
  };
}
function logActivity(action, detail){
  DB.activityLog = DB.activityLog||[];
  DB.activityLog.unshift({id:uid(), action, detail, at:new Date().toISOString()});
  if(DB.activityLog.length>300) DB.activityLog = DB.activityLog.slice(0,300);
}

let DB = load();

function load(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw){
      const defaults = defaultData();
      const stored = JSON.parse(raw);
      const merged = Object.assign(defaults, stored);
      // templates is a nested object — make sure newly-added template kinds
      // (e.g. followup) survive merging into older saved data.
      merged.templates = Object.assign({}, defaults.templates, stored.templates||{});
      // within each template kind, add any new default templates (by id)
      // that aren't already present in the user's saved list, so new
      // built-in templates (e.g. review requests) reach existing users.
      Object.keys(defaults.templates).forEach(kind=>{
        const storedList = (stored.templates && stored.templates[kind]) || [];
        const storedIds = new Set(storedList.map(t=>t.id));
        const missing = defaults.templates[kind].filter(t=>!storedIds.has(t.id));
        merged.templates[kind] = storedList.concat(missing);
      });
      // one-time: give existing installs a few example Follow Ups rows so
      // the new tab isn't empty on first look. Only runs once, ever —
      // guarded by demoFollowUpsSeeded so deleting the examples sticks.
      if(!merged.demoFollowUpsSeeded){
        if(!merged.followUps || merged.followUps.length===0){
          const today = new Date();
          const off = days=>{ const x=new Date(today); x.setDate(x.getDate()+days); return x.toISOString().slice(0,10); };
          const sampleCustomer = (merged.customers && merged.customers[0]) || {name:'Margaret Ellison', phone:'07700 900123', email:'m.ellison@example.com'};
          merged.followUps = [
            {id:uid(), source:'Missed Call', name:'Unknown caller', phone:'07700 900999', email:'', status:'new', notes:'', createdAt:off(0)},
            {id:uid(), source:'Missed Call', name:'Robert Tanner', phone:'07811 998822', email:'', status:'contacted', notes:'Left voicemail — called back about a quote, waiting to hear when they want to go ahead.', createdAt:off(-1)},
            {id:uid(), source:'Manual', name:sampleCustomer.name, phone:sampleCustomer.phone, email:sampleCustomer.email||'', status:'done', notes:'Job completed — sent a review request, said they\'d leave one this week.', createdAt:off(-3)}
          ];
        }
        merged.demoFollowUpsSeeded = true;
      }
      return merged;
    }
  }catch(e){}
  return defaultData();
}
function save(){
  localStorage.setItem(STORE_KEY, JSON.stringify(DB));
  pushCloudState();
}

/* ---------- CLOUD SYNC (whole-app state, so it's not stuck on one browser) ---------- */
const CLOUD_STATE_BUSINESS = 'steadyworks_full_state';
let cloudSyncTimer = null;

// Array fields that get merged-by-id on every push, rather than blindly
// overwritten. This is what stops a stale background tab from wiping out
// records that were added elsewhere (another tab, another device, or a
// direct fix) since this tab last loaded its data.
const ARRAY_MERGE_KEYS = ['jobs','leads','quotes','invoices','customers','employees','subcontractors','expenses','compliance','events','followUps','sfClients','sfQuotes','sfInvoices','sfActivity','sfExpenses','sfCompliance','activityLog','paintPipeline'];

function mergeArraysById(cloudArr, localArr){
  if(!Array.isArray(cloudArr)) cloudArr = [];
  if(!Array.isArray(localArr)) localArr = [];
  const map = new Map();
  cloudArr.forEach(item=>{ if(item && item.id!=null) map.set(item.id, item); });
  localArr.forEach(item=>{ if(item && item.id!=null) map.set(item.id, item); }); // local wins on conflicting ids
  const seen = new Set();
  const ordered = [];
  cloudArr.forEach(item=>{ if(item && item.id!=null && !seen.has(item.id)){ ordered.push(map.get(item.id)); seen.add(item.id); } });
  localArr.forEach(item=>{ if(item && item.id!=null && !seen.has(item.id)){ ordered.push(map.get(item.id)); seen.add(item.id); } });
  return ordered;
}

// Builds what should actually be pushed to the cloud: local's non-list
// fields (settings, counters, templates, etc.) plus every list field
// merged with whatever is currently in the cloud, so this push can only
// ever add/update records — never silently delete something that exists
// in the cloud but isn't in this tab's (possibly stale) memory.
function mergeDbForPush(cloudData, localDb){
  const merged = Object.assign({}, localDb);
  if(cloudData && typeof cloudData === 'object'){
    ARRAY_MERGE_KEYS.forEach(key=>{
      merged[key] = mergeArraysById(cloudData[key], localDb[key]);
    });
  }
  return merged;
}

function pushCloudState(){
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(async ()=>{
    try{
      const { data: existing } = await sb.from('app_settings').select('data').eq('business', CLOUD_STATE_BUSINESS).maybeSingle();
      const merged = mergeDbForPush(existing && existing.data, DB);
      DB = merged;
      localStorage.setItem(STORE_KEY, JSON.stringify(DB));
      await sb.from('app_settings').upsert(
        {business: CLOUD_STATE_BUSINESS, data: DB, updated_at: new Date().toISOString()},
        {onConflict:'business'}
      );
    }catch(e){ console.warn('Cloud sync failed (still saved locally):', e); }
  }, 800); // debounce so rapid edits don't spam the network
}
async function pullCloudState(){
  try{
    const { data, error } = await sb.from('app_settings').select('data,updated_at').eq('business', CLOUD_STATE_BUSINESS).maybeSingle();
    if(error || !data || !data.data) return false;
    const defaults = defaultData();
    DB = Object.assign(defaults, data.data);
    DB.templates = Object.assign({}, defaults.templates, data.data.templates||{});
    localStorage.setItem(STORE_KEY, JSON.stringify(DB));
    return true;
  }catch(e){ console.warn('Cloud pull failed, using local copy:', e); return false; }
}

/* ---------- WEBSITE ENQUIRY SYNC (Supabase) ---------- */
// Same project the public website's contact form writes to — see index.html.
const SUPABASE_URL = 'https://ytvefdanywtgntvviuwo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_zfUO2z0HiKywpgMqBIhKeQ_ka_7oAbl';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function syncLeadsFromSupabase(showToast){
  try{
    const { data: rows, error } = await sb.from('leads').select('*').eq('synced', false).order('created_at', {ascending:true});
    if(error) throw error;
    if(!rows.length){ if(showToast) toast('No new enquiries'); return; }
    rows.forEach(r=>{
      DB.leads.push({
        id: uid(),
        name: r.name || 'Website Enquiry',
        stage: 'New Lead',
        phone: r.phone || '',
        email: r.email || '',
        source: r.source || 'Website',
        value: Number(r.value)||0,
        notes: [r.service ? ('Service: '+r.service) : '', r.message||'', r.notes||''].filter(Boolean).join('\n\n'),
        createdAt: (r.created_at||'').slice(0,10) || new Date().toISOString().slice(0,10),
        supabaseId: r.id
      });
    });
    save();
    if(currentRoute==='leads') renderPage();
    toast(`${rows.length} new enquir${rows.length===1?'y':'ies'} added to Leads`);
    // mark as synced in the background so they aren't pulled in again
    const ids = rows.map(r=>r.id);
    sb.from('leads').update({synced:true}).in('id', ids).then(()=>{}).catch(()=>{});
  }catch(e){
    if(showToast) toast('Could not check for new enquiries — check your connection');
  }
}

function samePhone(a,b){
  const norm = s => (s||'').replace(/[^\d]/g,'').replace(/^0/,'44').replace(/^44/,'');
  return Boolean(a) && Boolean(b) && norm(a)===norm(b);
}

async function syncCallsFromSupabase(showToast){
  try{
    const { data: rows, error } = await sb.from('calls').select('*').eq('followed_up', false).order('created_at', {ascending:true});
    if(error) throw error;
    const existingIds = new Set(DB.followUps.map(f=>f.supabaseId).filter(Boolean));
    const newRows = (rows||[]).filter(r=>!existingIds.has(r.id));
    if(!newRows.length){ if(showToast) toast('No new missed calls'); return; }
    newRows.forEach(r=>{
      const match = DB.customers.find(c=>samePhone(c.phone, r.from_number));
      DB.followUps.push({
        id: uid(),
        source: 'Missed Call',
        name: match ? match.name : (r.from_number || 'Unknown caller'),
        phone: r.from_number || '',
        email: match ? (match.email||'') : '',
        status: 'new',
        notes: '',
        createdAt: (r.created_at||'').slice(0,10) || new Date().toISOString().slice(0,10),
        supabaseId: r.id
      });
    });
    save();
    if(currentRoute==='followups') renderPage();
    toast(`${newRows.length} new missed call${newRows.length===1?'':'s'} added to Follow Ups`);
  }catch(e){
    if(showToast) toast('Could not check for new calls — check your connection');
  }
}

function uid(){ return Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

function nextJobNumber(){
  DB.counters.job++;
  return 'SW-' + new Date().getFullYear() + '-' + String(DB.counters.job).padStart(3,'0');
}
function nextQuoteNumber(){
  DB.counters.quote++;
  return 'Q-' + new Date().getFullYear() + '-' + String(DB.counters.quote).padStart(3,'0');
}
function nextInvoiceNumber(){
  DB.counters.invoice++;
  return 'INV-' + new Date().getFullYear() + '-' + String(DB.counters.invoice).padStart(3,'0');
}
function nextSfQuoteNumber(){
  DB.counters.sfQuote = (DB.counters.sfQuote||0) + 1;
  return 'SFQ-' + new Date().getFullYear() + '-' + String(DB.counters.sfQuote).padStart(3,'0');
}
function nextSfInvoiceNumber(){
  DB.counters.sfInvoice = (DB.counters.sfInvoice||0) + 1;
  return 'SFINV-' + new Date().getFullYear() + '-' + String(DB.counters.sfInvoice).padStart(3,'0');
}

function fmt(n){
  n = Number(n)||0;
  return '£' + n.toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function fmtDate(d){
  if(!d) return '—';
  const dt = new Date(d);
  if(isNaN(dt)) return d;
  return dt.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
}
function daysUntil(d){
  if(!d) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(d); target.setHours(0,0,0,0);
  return Math.round((target-today)/86400000);
}
function toast(msg, icon){
  const t = document.getElementById('toast');
  t.innerHTML = (icon||'✓') + ' ' + msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}
function esc(s){ return (s==null?'':String(s)).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ---------- SEED DATA (first run demo content) ---------- */
function seedData(){
  const d = defaultData();
  const customers = [
    {id:uid(), name:'Margaret Ellison', phone:'07700 900123', email:'m.ellison@example.com', address:'14 Oakfield Road, Stratford, E15 2QP', propertyType:'Residential', leadSource:'Referral', notes:'Long-standing client, prefers morning appointments.'},
    {id:uid(), name:'Greenway Property Group', phone:'0208 555 5589', email:'maintenance@greenwaypg.co.uk', address:'Unit 7, Riverside Business Park, Romford, RM1 3AB', propertyType:'Commercial', leadSource:'Website', notes:'Manages 30+ rental properties — recurring work.'},
    {id:uid(), name:'David & Sarah Kemp', phone:'07811 223344', email:'kempfamily@example.com', address:'22 Birchwood Lane, Ilford, IG1 4JL', propertyType:'Residential', leadSource:'Google', notes:''},
    {id:uid(), name:'Eastfield Primary School', phone:'0208 555 2211', email:'site@eastfieldprimary.sch.uk', address:'Northgate Road, Barking, IG11 6HX', propertyType:'Commercial', leadSource:'Tender', notes:'Annual compliance & boiler service contract.'},
    {id:uid(), name:'James Okafor', phone:'07955 667788', email:'j.okafor@example.com', address:'5 Mill Terrace, Leyton, E10 5PQ', propertyType:'Residential', leadSource:'Facebook', notes:''}
  ];
  d.customers = customers;

  const engineers = ['Tom Bracewell','Liam O\'Sullivan','Karol Nowak','Dean Whitfield'];
  d.employees = [
    {id:uid(), name:'Tom Bracewell', role:'Lead Gas Engineer', phone:'07700 111222', email:'tom@steadyworksltd.com', quals:'Gas Safe, ACS', vehicle:'Transit Custom — FA01 BLD', holidaysUsed:6, holidaysTotal:25, availability:'Available'},
    {id:uid(), name:"Liam O'Sullivan", role:'Plumber & Heating Engineer', phone:'07700 222333', email:'liam@steadyworksltd.com', quals:'Gas Safe, WaterSafe', vehicle:'Transit Custom — FA02 BLD', holidaysUsed:11, holidaysTotal:25, availability:'On Site'},
    {id:uid(), name:'Karol Nowak', role:'General Builder', phone:'07700 333444', email:'karol@steadyworksltd.com', quals:'CSCS, First Aid', vehicle:'Sprinter — FA03 BLD', holidaysUsed:4, holidaysTotal:25, availability:'Available'},
    {id:uid(), name:'Dean Whitfield', role:'Apprentice Engineer', phone:'07700 444555', email:'dean@steadyworksltd.com', quals:'CSCS (Trainee)', vehicle:'Pool car', holidaysUsed:2, holidaysTotal:20, availability:'Available'}
  ];

  const today = new Date();
  function offset(days){ const x=new Date(today); x.setDate(x.getDate()+days); return x.toISOString().slice(0,10); }

  d.subcontractors = [
    {id:uid(), name:'Pavel Dryline Ltd', trade:'Plastering', phone:'07700 991122', email:'office@pavelplaster.co.uk', dayRate:220, insuranceExpiry:offset(140), notes:'Two-man crew, usually 2 days notice needed.'},
    {id:uid(), name:'Reilly Groundworks', trade:'Groundworks', phone:'07700 882233', email:'jobs@reillygroundworks.co.uk', dayRate:340, insuranceExpiry:offset(25), notes:'Used for extension foundations & drainage.'},
    {id:uid(), name:'AC Scaffolding Services', trade:'Scaffolding', phone:'07700 773344', email:'hire@acscaffolding.co.uk', dayRate:0, insuranceExpiry:offset(-5), notes:'Quote per job, not day rate. Insurance needs renewing.'}
  ];

  d.jobs = [
    {id:uid(), jobNumber:'SW-'+today.getFullYear()+'-001', customerId:customers[0].id, customerName:customers[0].name, address:customers[0].address, propertyType:'Residential', status:'completed', priority:'Medium', assignedTo:'Tom Bracewell', startDate:offset(-30), endDate:offset(-28), expectedRevenue:1250, actualRevenue:1250, notes:[{type:'Site',text:'Boiler replacement — Worcester Bosch 2000 combi installed.',date:offset(-28)}], photos:[], timeline:[{e:'Quote Created',d:offset(-35)},{e:'Quote Accepted',d:offset(-32)},{e:'Job Started',d:offset(-30)},{e:'Invoice Sent',d:offset(-28)},{e:'Payment Received',d:offset(-25)},{e:'Job Closed',d:offset(-25)}],
      costLines:[
        {id:uid(), category:'Materials', desc:'Worcester Bosch 2000 combi boiler & fittings', budget:950, actual:980},
        {id:uid(), category:'Labour', desc:'Install — 1 day, 2 engineers', budget:200, actual:200},
        {id:uid(), category:'Plant', desc:'Flue & access equipment hire', budget:30, actual:30}
      ],
      documents:[{id:uid(), name:'RAMS — Gas Appliance Installation', category:'RAMS', expiryDate:offset(305)}],
      variations:[],
      phases:[]},
    {id:uid(), jobNumber:'SW-'+today.getFullYear()+'-002', customerId:customers[1].id, customerName:customers[1].name, address:customers[1].address, propertyType:'Commercial', status:'active', priority:'High', assignedTo:"Liam O'Sullivan", startDate:offset(-3), endDate:offset(4), expectedRevenue:4200, actualRevenue:0, notes:[{type:'Engineer',text:'Communal heating system fault — diagnosing pump failure across 3 units.',date:offset(-2)}], photos:[], timeline:[{e:'Quote Created',d:offset(-10)},{e:'Quote Accepted',d:offset(-6)},{e:'Job Started',d:offset(-3)}],
      costLines:[
        {id:uid(), category:'Materials', desc:'Circulation pumps x3 + pipework', budget:1440, actual:1510},
        {id:uid(), category:'Labour', desc:'Diagnosis & install — engineer day rate x4', budget:1520, actual:1680},
        {id:uid(), category:'Subcontractor', desc:'', budget:0, actual:0}
      ],
      documents:[{id:uid(), name:'RAMS — Communal Plant Room Access', category:'RAMS', expiryDate:offset(20)},{id:uid(), name:'Public Liability Certificate (site copy)', category:'Insurance', expiryDate:offset(185)}],
      variations:[{id:uid(), desc:'Additional isolation valves found seized — replace all 3 risers', amount:680, status:'Approved', date:offset(-1)}],
      phases:[
        {id:uid(), name:'Diagnosis', status:'completed', startDate:offset(-3), endDate:offset(-2), signedOff:true},
        {id:uid(), name:'Pump replacement', status:'active', startDate:offset(-1), endDate:offset(2), signedOff:false},
        {id:uid(), name:'Commissioning & handover', status:'scheduled', startDate:offset(3), endDate:offset(4), signedOff:false}
      ]},
    {id:uid(), jobNumber:'SW-'+today.getFullYear()+'-003', customerId:customers[2].id, customerName:customers[2].name, address:customers[2].address, propertyType:'Residential', status:'scheduled', priority:'Medium', assignedTo:'Karol Nowak', startDate:offset(5), endDate:offset(9), expectedRevenue:3100, actualRevenue:0, notes:[], photos:[], timeline:[{e:'Quote Created',d:offset(-4)},{e:'Quote Accepted',d:offset(-1)}],
      costLines:[
        {id:uid(), category:'Materials', desc:'Bathroom suite, tiles & adhesive', budget:1650, actual:0},
        {id:uid(), category:'Labour', desc:'Strip-out, plumbing & tiling — 4 days', budget:900, actual:0}
      ],
      documents:[],
      variations:[],
      phases:[
        {id:uid(), name:'Strip-out', status:'scheduled', startDate:offset(5), endDate:offset(5), signedOff:false},
        {id:uid(), name:'First fix plumbing', status:'scheduled', startDate:offset(6), endDate:offset(7), signedOff:false},
        {id:uid(), name:'Tiling & second fix', status:'scheduled', startDate:offset(8), endDate:offset(9), signedOff:false}
      ]},
    {id:uid(), jobNumber:'SW-'+today.getFullYear()+'-004', customerId:customers[3].id, customerName:customers[3].name, address:customers[3].address, propertyType:'Commercial', status:'invoiced', priority:'Low', assignedTo:'Tom Bracewell', startDate:offset(-14), endDate:offset(-12), expectedRevenue:890, actualRevenue:890, notes:[], photos:[], timeline:[{e:'Quote Created',d:offset(-20)},{e:'Quote Accepted',d:offset(-16)},{e:'Job Started',d:offset(-14)},{e:'Invoice Sent',d:offset(-11)}],
      costLines:[{id:uid(), category:'Labour', desc:'Annual service — 4 units', budget:340, actual:355}],
      documents:[{id:uid(), name:'RAMS — Boiler Servicing', category:'RAMS', expiryDate:offset(-2)}],
      variations:[],
      phases:[]},
    {id:uid(), jobNumber:'SW-'+today.getFullYear()+'-005', customerId:customers[4].id, customerName:customers[4].name, address:customers[4].address, propertyType:'Residential', status:'on-hold', priority:'Medium', assignedTo:'Dean Whitfield', startDate:offset(2), endDate:offset(6), expectedRevenue:1600, actualRevenue:0, notes:[{type:'Customer',text:'Customer requested delay until materials confirmed.',date:offset(-1)}], photos:[], timeline:[{e:'Quote Created',d:offset(-8)},{e:'Quote Accepted',d:offset(-5)}],
      costLines:[{id:uid(), category:'Materials', desc:'Kitchen pipework relocation kit', budget:480, actual:0}],
      documents:[],
      variations:[],
      phases:[]}
  ];

  d.leads = [
    {id:uid(), name:'Patricia Onyeka', phone:'07700 555111', email:'p.onyeka@example.com', source:'Google', stage:'New Lead', value:0, notes:'Enquiry about full bathroom refit', createdAt:offset(-1)},
    {id:uid(), name:'Riverside Apartments Ltd', phone:'0208 555 7766', email:'facilities@riverside-apts.co.uk', source:'Referral', stage:'Contacted', value:0, notes:'Annual gas safety checks for 18 units', createdAt:offset(-3)},
    {id:uid(), name:'Robert Tanner', phone:'07811 998822', email:'r.tanner@example.com', source:'Facebook', stage:'Quoted', value:2400, notes:'Extension heating & plumbing first fix', createdAt:offset(-6)},
    {id:uid(), name:'Alicia Ferreira', phone:'07922 334455', email:'a.ferreira@example.com', source:'Website', stage:'Won', value:1850, notes:'Kitchen plumbing relocation', createdAt:offset(-9)},
    {id:uid(), name:'Stratford Lettings Co', phone:'0208 555 4432', email:'ops@stratfordlettings.co.uk', source:'Tender', stage:'Scheduled', value:5600, notes:'Void property turnaround — 4 flats', createdAt:offset(-11)}
  ];

  d.quotes = [
    {id:uid(), quoteNumber:'Q-'+today.getFullYear()+'-001', jobId:d.jobs[1].id, customerId:customers[1].id, customerName:customers[1].name, status:'sent', type:'Itemised', items:[{desc:'Circulation pump replacement',qty:1,unit:'ea',rate:480},{desc:'Labour — diagnosis & install',qty:6,unit:'hrs',rate:45},{desc:'Pipework & fittings',qty:1,unit:'set',rate:220}], vatRate:20, validUntil:offset(7), notes:'', createdAt:offset(-10)},
    {id:uid(), quoteNumber:'Q-'+today.getFullYear()+'-002', jobId:null, customerId:null, customerName:'Robert Tanner', status:'sent', type:'Fixed Price', items:[{desc:'Extension heating & plumbing first fix — fixed price',qty:1,unit:'job',rate:2400}], vatRate:20, validUntil:offset(10), notes:'', createdAt:offset(-6)},
    {id:uid(), quoteNumber:'Q-'+today.getFullYear()+'-003', jobId:d.jobs[2].id, customerId:customers[2].id, customerName:customers[2].name, status:'approved', type:'Itemised', items:[{desc:'Bathroom strip-out',qty:1,unit:'job',rate:450},{desc:'New suite — supply & fit',qty:1,unit:'ea',rate:1650},{desc:'Tiling labour',qty:18,unit:'m2',rate:35}], vatRate:20, validUntil:offset(-1), notes:'', createdAt:offset(-9)}
  ];

  d.invoices = [
    {id:uid(), invoiceNumber:'INV-'+today.getFullYear()+'-001', jobId:d.jobs[0].id, customerId:customers[0].id, customerName:customers[0].name, status:'paid', items:[{desc:'Worcester Bosch 2000 combi boiler — supply & install',qty:1,unit:'ea',rate:1050},{desc:'Labour',qty:4,unit:'hrs',rate:50}], vatRate:20, dueDate:offset(-15), amountPaid:1500, notes:'', createdAt:offset(-28)},
    {id:uid(), invoiceNumber:'INV-'+today.getFullYear()+'-002', jobId:d.jobs[3].id, customerId:customers[3].id, customerName:customers[3].name, status:'overdue', items:[{desc:'Annual boiler service — 4 units',qty:4,unit:'ea',rate:185}], vatRate:20, retentionPct:0, dueDate:offset(-5), amountPaid:0, notes:'', createdAt:offset(-12)},
    {id:uid(), invoiceNumber:'INV-'+today.getFullYear()+'-003', jobId:null, customerId:customers[4].id, customerName:customers[4].name, status:'sent', items:[{desc:'Emergency callout — burst pipe',qty:1,unit:'ea',rate:150},{desc:'Pipe repair materials & labour',qty:1,unit:'job',rate:280}], vatRate:20, retentionPct:0, dueDate:offset(9), amountPaid:0, notes:'', createdAt:offset(-2)},
    {id:uid(), invoiceNumber:'INV-'+today.getFullYear()+'-004', jobId:d.jobs[1].id, customerId:customers[1].id, customerName:customers[1].name, status:'sent', items:[{desc:'Circulation pump replacement — communal heating',qty:1,unit:'job',rate:3160}], vatRate:20, retentionPct:5, dueDate:offset(14), amountPaid:0, notes:'5% retention held until defects period ends.', createdAt:offset(-1)}
  ];

  d.expenses = [
    {id:uid(), category:'Materials', desc:'Plumbing supplies — Wolseley', amount:340.50, date:offset(-4)},
    {id:uid(), category:'Fuel', desc:'Diesel — fleet', amount:185.00, date:offset(-6)},
    {id:uid(), category:'Vehicles', desc:'Transit service & MOT', amount:295.00, date:offset(-15)},
    {id:uid(), category:'Insurance', desc:'Public liability renewal', amount:1200.00, date:offset(-20)},
    {id:uid(), category:'Software', desc:'Accounting software subscription', amount:29.00, date:offset(-2)},
    {id:uid(), category:'Advertising', desc:'Google Ads', amount:220.00, date:offset(-8)}
  ];

  d.compliance = [
    {id:uid(), name:'Tom Bracewell — Gas Safe Registration', category:'Certification', issuer:'Gas Safe Register', issueDate:offset(-200), expiryDate:offset(45)},
    {id:uid(), name:'Public Liability Insurance', category:'Insurance', issuer:'Aviva', issueDate:offset(-180), expiryDate:offset(185)},
    {id:uid(), name:"Liam O'Sullivan — WaterSafe Accreditation", category:'Certification', issuer:'WaterSafe', issueDate:offset(-300), expiryDate:offset(20)},
    {id:uid(), name:'RAMS — Working at Height', category:'RAMS', issuer:'Internal', issueDate:offset(-60), expiryDate:offset(305)},
    {id:uid(), name:'Employers Liability Insurance', category:'Insurance', issuer:'Aviva', issueDate:offset(-180), expiryDate:offset(-3)},
    {id:uid(), name:'Karol Nowak — Driving Licence', category:'Driving Licence', issuer:'DVLA', issueDate:offset(-1000), expiryDate:offset(900)}
  ];

  d.events = [
    {id:uid(), title:'Site visit — Greenway Property Group', date:offset(0), type:'Site Visit', assignedTo:"Liam O'Sullivan"},
    {id:uid(), title:'Job start — Kemp extension', date:offset(5), type:'Job', assignedTo:'Karol Nowak'},
    {id:uid(), title:'Boiler service — Eastfield Primary', date:offset(12), type:'Job', assignedTo:'Tom Bracewell'},
    {id:uid(), title:'Quote follow-up — Robert Tanner', date:offset(2), type:'Quote', assignedTo:'Office'},
    {id:uid(), title:'Annual compliance inspection', date:offset(18), type:'Inspection', assignedTo:'Office'}
  ];

  d.templates = {
    quote:[
      {id:uid(), name:'Standard Boiler Service', type:'Fixed Price', vatRate:20, notes:d.settings.terms,
        items:[{desc:'Annual boiler service & safety check',qty:1,unit:'job',rate:90}]},
      {id:uid(), name:'Emergency Callout', type:'Emergency Callout', vatRate:20, notes:'Payment due on completion of works.',
        items:[{desc:'Emergency callout — first hour',qty:1,unit:'hr',rate:120},{desc:'Additional hour',qty:1,unit:'hr',rate:75}]}
    ],
    invoice:[
      {id:uid(), name:'Standard Job Invoice', vatRate:20, notes:d.settings.terms,
        items:[{desc:'Labour',qty:1,unit:'day',rate:280},{desc:'Materials',qty:1,unit:'job',rate:0}]}
    ],
    followup: d.templates.followup
  };

  d.followUps = [
    {id:uid(), source:'Missed Call', name:'Unknown caller', phone:'07700 900999', email:'', status:'new', notes:'', createdAt:offset(0)},
    {id:uid(), source:'Missed Call', name:'Robert Tanner', phone:'07811 998822', email:'r.tanner@example.com', status:'contacted', notes:'Left voicemail — called back about the extension quote, waiting to hear when he wants to go ahead.', createdAt:offset(-1)},
    {id:uid(), source:'Manual', name:customers[0].name, phone:customers[0].phone, email:customers[0].email, status:'done', notes:'Boiler service completed — sent a review request, she said she\'d leave one this week.', createdAt:offset(-3)}
  ];

  d.counters = {job:5, quote:3, invoice:4, variation:1};
  localStorage.setItem(STORE_KEY, JSON.stringify(d));
  return d;
}

/* ---------- ROUTER ---------- */
const ROUTES = [
  {id:'dashboard', label:'Dashboard', section:'overview'},
  {id:'tasks', label:'Tasks', section:'overview'},
  {id:'goals', label:'Goals & Roadmap', section:'overview'},
  {id:'calendar', label:'Calendar', section:'overview'},
  {id:'budget', label:'Budget', section:'overview'},
  {id:'sw-dashboard', label:'Dashboard', section:'steadyworks'},
  {id:'leads', label:'Leads', section:'steadyworks'},
  {id:'followups', label:'Follow Ups', section:'steadyworks'},
  {id:'jobs', label:'Jobs', section:'steadyworks'},
  {id:'job-sources', label:'Job Sources', section:'steadyworks'},
  {id:'quotes', label:'Quotes', section:'steadyworks'},
  {id:'invoices', label:'Invoices', section:'steadyworks'},
  {id:'customers', label:'Customers', section:'steadyworks'},
  {id:'subcontractors', label:'Subcontractors', section:'steadyworks'},
  {id:'expenses', label:'Expenses', section:'steadyworks'},
  {id:'compliance', label:'Compliance', section:'steadyworks'},
  {id:'reports', label:'Reports', section:'steadyworks'},
  {id:'sf-dashboard', label:'Dashboard', section:'steadyflow'},
  {id:'sf-clients', label:'Clients', section:'steadyflow'},
  {id:'sf-quotes', label:'Quotes', section:'steadyflow'},
  {id:'sf-invoices', label:'Invoices', section:'steadyflow'},
  {id:'team', label:'Team', section:'steadyflow'},
  {id:'sf-expenses', label:'Expenses', section:'steadyflow'},
  {id:'sf-compliance', label:'Compliance', section:'steadyflow'},
  {id:'pipeline', label:'Quote-to-Job Pipeline', section:'collaborations'},
  {id:'activity', label:'Activity Log', section:'system'},
  {id:'bugs', label:'Bugs', section:'system'},
  {id:'settings', label:'Settings', section:'system'}
];
const SECTION_LABELS = {
  overview: 'STEADY INC',
  steadyworks: 'STEADYWORKS · PLUMBING',
  steadyflow: 'STEADYFLOW · MARKETING',
  collaborations: 'COLLABORATIONS',
  system: 'SYSTEM'
};
const SECTION_ACCENT = { overview:'var(--gold-light)', steadyworks:'var(--gold-light)', steadyflow:'var(--teal)', collaborations:'#A78BFA', system:'#999' };
const ICONS = {
  dashboard:'🏠', tasks:'✅', goals:'🎯', budget:'🧮', 'sw-dashboard':'📊', 'sf-dashboard':'📊', 'sf-clients':'💻', 'sf-quotes':'📝', 'sf-invoices':'🧾', 'sf-expenses':'💷', 'sf-compliance':'🛡️', leads:'📥', followups:'📞', jobs:'🛠️', 'job-sources':'📍', quotes:'📝', invoices:'🧾', calendar:'📅',
  customers:'👥', team:'👷', subcontractors:'🦺', expenses:'💷', compliance:'🛡️', reports:'📈', activity:'🕐', bugs:'🐞', settings:'⚙️', pipeline:'🎨'
};

let currentRoute = 'dashboard';
let currentParam = null;

function navigate(route, param){
  currentRoute = isRouteAllowed(route) ? route : 'pipeline';
  currentParam = param || null;
  renderNav();
  renderPage();
  window.scrollTo(0,0);
  closeMobileNav();
}
function closeMobileNav(){
  document.getElementById('sidebar').classList.remove('open');
  const bd = document.getElementById('sidebar-backdrop');
  if(bd) bd.style.display = 'none';
}

let NAV_COLLAPSED = {};
try{ NAV_COLLAPSED = JSON.parse(localStorage.getItem('steadyworks_nav_collapsed')||'{}'); }catch(e){ NAV_COLLAPSED = {}; }
function toggleNavSection(section){
  NAV_COLLAPSED[section] = !NAV_COLLAPSED[section];
  localStorage.setItem('steadyworks_nav_collapsed', JSON.stringify(NAV_COLLAPSED));
  renderNav();
}
function renderNav(){
  const nav = document.getElementById('nav');
  let lastSection = null;
  const visibleRoutes = ROUTES.filter(r=>isRouteAllowed(r.id));
  nav.innerHTML = visibleRoutes.map(r=>{
    let sectionHeader = '';
    if(r.section !== lastSection){
      lastSection = r.section;
      const collapsed = !!NAV_COLLAPSED[r.section];
      sectionHeader = `<div class="nav-section-label" style="color:${SECTION_ACCENT[r.section]};opacity:.85;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" onclick="toggleNavSection('${r.section}')">
        <span>${SECTION_LABELS[r.section]}</span><span style="transition:transform .15s;transform:rotate(${collapsed?'-90':'0'}deg);">▾</span>
      </div>`;
    }
    if(NAV_COLLAPSED[r.section]) return sectionHeader;
    let badge = '';
    if(r.id==='invoices'){
      const overdue = DB.invoices.filter(i=>i.status==='overdue').length;
      if(overdue) badge = `<span class="nav-badge">${overdue}</span>`;
    }
    if(r.id==='compliance'){
      const exp = DB.compliance.filter(c=>{const dd=daysUntil(c.expiryDate); return dd!==null && dd<30;}).length;
      if(exp) badge = `<span class="nav-badge">${exp}</span>`;
    }
    if(r.id==='subcontractors'){
      const exp = DB.subcontractors.filter(s=>{const dd=daysUntil(s.insuranceExpiry); return dd!==null && dd<30;}).length;
      if(exp) badge = `<span class="nav-badge">${exp}</span>`;
    }
    if(r.id==='jobs'){
      const missing = DB.jobs.filter(j=>!['completed','invoiced','cancelled'].includes(j.status) && jobMissingDocs(j)).length;
      if(missing) badge = `<span class="nav-badge">${missing}</span>`;
    }
    if(r.id==='followups'){
      const open = DB.followUps.filter(f=>f.status!=='done').length;
      if(open) badge = `<span class="nav-badge">${open}</span>`;
    }
    if(r.id==='sf-clients'){
      const leadCt = DB.sfClients.filter(c=>c.status==='lead').length;
      if(leadCt) badge = `<span class="nav-badge" style="background:var(--teal);color:#001a1a;">${leadCt}</span>`;
    }
    if(r.id==='sf-invoices'){
      const overdue = (DB.sfInvoices||[]).filter(i=>i.status==='overdue').length;
      if(overdue) badge = `<span class="nav-badge">${overdue}</span>`;
    }
    if(r.id==='sf-compliance'){
      const exp = (DB.sfCompliance||[]).filter(c=>{const dd=daysUntil(c.expiryDate); return dd!==null && dd<30;}).length;
      if(exp) badge = `<span class="nav-badge">${exp}</span>`;
    }
    if(r.id==='bugs' && BUGS_CACHE){
      const open = BUGS_CACHE.filter(b=>b.status!=='fixed').length;
      if(open) badge = `<span class="nav-badge">${open}</span>`;
    }
    const sectionClass = r.section==='steadyflow' ? 'nav-item-teal' : r.section==='collaborations' ? 'nav-item-purple' : '';
    return `${sectionHeader}<div class="nav-item ${currentRoute===r.id?'active':''} ${sectionClass}" onclick="navigate('${r.id}')">
      <span class="nav-icon">${ICONS[r.id]}</span>${r.label}${badge}
    </div>`;
  }).join('');
}
function jobMissingDocs(j){
  const docs = j.documents||[];
  const hasValidRams = docs.some(d=>d.category==='RAMS' && (daysUntil(d.expiryDate)===null || daysUntil(d.expiryDate)>=0));
  return !hasValidRams;
}

const PAGE_META = {
  dashboard:['Dashboard','Steady Inc — combined performance across every business'],
  tasks:['Tasks','Day-by-day checklist across SteadyWorks, SteadyFlow, Cookbook & Animation'],
  goals:['Goals & Roadmap','Long-term goals and revenue targets, month by month'],
  budget:['Budget','Plan spend by category and track it against your income targets'],
  'sw-dashboard':['SteadyWorks Dashboard','Plumbing business performance at a glance'],
  'sf-dashboard':['SteadyFlow Dashboard','Marketing agency performance at a glance'],
  'sf-clients':['SteadyFlow Clients','Marketing agency prospects & clients — website/marketing packages'],
  'sf-quotes':['SteadyFlow Quotes','Build, send and track quotations for SteadyFlow clients'],
  'sf-invoices':['SteadyFlow Invoices','Billing, payments and outstanding balances for SteadyFlow clients'],
  'sf-expenses':['SteadyFlow Expenses','Costs, subscriptions and ad spend for SteadyFlow'],
  'sf-compliance':['SteadyFlow Compliance','Contracts, insurance and renewals for SteadyFlow'],
  leads:['Leads','Pipeline of new enquiries and opportunities'],
  followups:['Follow Ups','Missed calls and client follow-up'],
  jobs:['Jobs','All active and historic job records'],
  'job-sources':['Job Sources','Where your leads and jobs are actually coming from'],
  pipeline:['Quote-to-Job Pipeline','SteadyWorks × Fabs — one board from first quote to paid job'],
  quotes:['Quotes','Build, send and track quotations'],
  invoices:['Invoices','Billing, payments and outstanding balances'],
  calendar:['Calendar','Shared across all companies — job schedule plus merged Google Calendars'],
  customers:['Customers','Client database and history'],
  team:['Team','Team members, roles and availability — shared across Steady Inc'],
  subcontractors:['Subcontractors','Trades, day rates and insurance status'],
  expenses:['Expenses','Costs, materials and overheads'],
  compliance:['Compliance','Certificates, insurance and renewals'],
  reports:['Reports','Business performance reporting'],
  activity:['Activity Log','A record of what was created, changed and deleted, and when'],
  bugs:['Bugs','Known issues and updates needed — logged now, fixed later'],
  settings:['Settings','Company details, rates and preferences']
};

function renderPage(){
  const meta = PAGE_META[currentRoute] || ['',''];
  document.getElementById('page-title').textContent = meta[0];
  document.getElementById('page-sub').textContent = meta[1];
  const content = document.getElementById('content');
  const actions = document.getElementById('topbar-actions');
  actions.innerHTML = CURRENT_PROFILE.role==='partner' ? '' : '<button class="btn btn-ghost" aria-label="Search everything" title="Search (Cmd+K)" onclick="openGlobalSearch()">🔍 Search <span class="small muted search-shortcut-hint" style="margin-left:4px;">⌘K</span></button>';
  try{
    const fn = window['view_' + currentRoute.replace('-','_')];
    if(typeof fn === 'function'){ content.innerHTML = fn(); afterRender(currentRoute); }
    else content.innerHTML = '<div class="empty-state">Page not found.</div>';
  }catch(err){
    content.innerHTML = `<div class="empty-state">Error rendering page: ${esc(err.message)}</div>`;
    console.error(err);
  }
}

function afterRender(route){
  const hooks = {
    dashboard: afterRender_dashboard,
    'sw-dashboard': afterRender_sw_dashboard,
    jobs: afterRender_jobs,
    leads: afterRender_leads,
    calendar: afterRender_calendar,
    reports: afterRender_reports,
    'sf-dashboard': afterRender_sf_dashboard,
    pipeline: afterRender_pipeline
  };
  if(hooks[route]) hooks[route]();
  // topbar action buttons
  const actions = document.getElementById('topbar-actions');
  const map = {
    tasks: `<button class="btn btn-gold" onclick="openTaskModal()">+ New Task</button>`,
    goals: `<button class="btn btn-gold" onclick="openGoalModal()">+ New Goal</button>`,
    leads: `<button class="btn btn-ghost" onclick="syncLeadsFromSupabase(true)">🔄 Check for New Enquiries</button><button class="btn btn-gold" onclick="openLeadModal()">+ New Lead</button>`,
    followups: `<button class="btn btn-ghost" onclick="openFollowupTemplatesModal()">Templates</button><button class="btn btn-ghost" onclick="syncCallsFromSupabase(true)">🔄 Check for New Calls</button><button class="btn btn-gold" onclick="openFollowUpModal()">+ Log Missed Call</button>`,
    jobs: `<button class="btn btn-gold" onclick="openJobModal()">+ New Job</button>`,
    quotes: `<button class="btn btn-ghost" onclick="openTemplatesModal('quote')">Templates</button><button class="btn btn-gold" onclick="openQuoteModal()">+ New Quote</button>`,
    invoices: `<button class="btn btn-ghost" onclick="openTemplatesModal('invoice')">Templates</button><button class="btn btn-gold" onclick="openInvoiceModal()">+ New Invoice</button>`,
    'sf-dashboard': `<button class="btn btn-gold" onclick="openSfActivityModal()">+ Log Today's Activity</button>`,
    'sf-quotes': `<button class="btn btn-gold" onclick="openSfQuoteModal()">+ New Quote</button>`,
    'sf-invoices': `<button class="btn btn-gold" onclick="openSfInvoiceModal()">+ New Invoice</button>`,
    'sf-expenses': `<button class="btn btn-gold" onclick="openSfExpenseModal()">+ New Expense</button>`,
    'sf-compliance': `<button class="btn btn-gold" onclick="openSfComplianceModal()">+ Add Document</button>`,
    customers: `<button class="btn btn-ghost" onclick="openImportContactsModal('customer')">📇 Import Contacts</button> <button class="btn btn-gold" onclick="openCustomerModal()">+ New Customer</button>`,
    team: `<button class="btn btn-gold" onclick="openEmployeeModal()">+ Add Team Member</button>`,
    subcontractors: `<button class="btn btn-ghost" onclick="openImportContactsModal('subcontractor')">📇 Import Contacts</button> <button class="btn btn-gold" onclick="openSubcontractorModal()">+ Add Subcontractor</button>`,
    expenses: `<button class="btn btn-gold" onclick="openExpenseModal()">+ New Expense</button>`,
    compliance: `<button class="btn btn-gold" onclick="openComplianceModal()">+ Add Document</button>`,
    calendar: `<button class="btn btn-gold" onclick="openEventModal()">+ New Event</button>`,
    'sf-clients': `<button class="btn btn-gold" onclick="openSfClientModal()">+ New Client / Lead</button>`,
    bugs: `<button class="btn btn-gold" onclick="openBugModal()">+ Log Bug</button>`,
    pipeline: `<button class="btn btn-ghost" onclick="openPipelineSettingsModal()">⚙️ Settings</button> <button class="btn btn-gold" onclick="openPipelineQuickAdd()">+ New Quote</button>`,
  };
  if(map[route]) actions.innerHTML += map[route];
}

/* ---------- TASKS & GOALS (Supabase-backed, shared across SteadyWorks + SteadyFlow) ---------- */
let TASKS_CACHE = null, GOALS_CACHE = null, TASKS_FILTER = 'all';

async function loadTasks(){
  try{
    const { data, error } = await sb.from('tasks').select('*').order('due_date', {ascending:true});
    if(error){ window._tasksLoadError = error.message || 'Unknown error'; TASKS_CACHE = []; }
    else { TASKS_CACHE = data || []; window._tasksLoadError = null; }
  }catch(e){ window._tasksLoadError = (e && e.message) || 'Network error'; TASKS_CACHE = []; }
  return TASKS_CACHE;
}
async function loadGoals(){
  try{
    const { data, error } = await sb.from('goals_projects').select('*').order('target_date', {ascending:true});
    if(error){ window._goalsLoadError = error.message || 'Unknown error'; GOALS_CACHE = []; }
    else { GOALS_CACHE = data || []; window._goalsLoadError = null; }
  }catch(e){ window._goalsLoadError = (e && e.message) || 'Network error'; GOALS_CACHE = []; }
  return GOALS_CACHE;
}
function refreshIfCurrent(route){ if(currentRoute===route) renderPage(); }

/* ---------- BUGS (Supabase-backed, shared across SteadyWorks + SteadyFlow) ---------- */
let BUGS_CACHE = null;
async function loadBugs(){
  try{
    const { data, error } = await sb.from('bugs').select('*').order('created_at', {ascending:false});
    if(error){ window._bugsLoadError = error.message || 'Unknown error'; BUGS_CACHE = []; }
    else { BUGS_CACHE = data || []; window._bugsLoadError = null; }
  }catch(e){ window._bugsLoadError = (e && e.message) || 'Network error'; BUGS_CACHE = []; }
  renderNav();
  return BUGS_CACHE;
}
const BUG_SEVERITIES = ['low','medium','high'];
const BUG_STATUSES = ['open','in_progress','fixed'];
function bugExampleCard(){
  return `<div class="card mb-10" style="border:1px dashed #C9A227;background:rgba(201,162,39,.06);">
    <div class="flex-between">
      <strong>Invoice PDF cuts off long client names <span class="pill" style="background:rgba(201,162,39,.18);color:#E8C468;">Example</span></strong>
      <span class="pill priority-med">Medium</span>
    </div>
    <p class="small muted mt-10">SteadyFlow · Reported by Lewis · Not real — this is what a logged bug looks like.</p>
  </div>`;
}
function view_bugs(){
  if(BUGS_CACHE===null){
    if(!window._bugsLoading){
      window._bugsLoading = true;
      loadBugs().then(()=>{ window._bugsLoading = false; refreshIfCurrent('bugs'); });
    }
    return `${bugExampleCard()}<div class="empty-state">Loading bugs…</div>`;
  }
  if(window._bugsLoadError){
    return `${bugExampleCard()}<div class="empty-state">Couldn't load bugs: ${esc(window._bugsLoadError)}<br><button class="btn btn-ghost mt-10" onclick="BUGS_CACHE=null; window._bugsLoadError=null; renderPage();">Try again</button></div>`;
  }
  const open = BUGS_CACHE.filter(b=>b.status!=='fixed').sort((a,b)=>{
    const sevRank = {high:0, medium:1, low:2};
    return (sevRank[a.severity]??1) - (sevRank[b.severity]??1);
  });
  const fixed = BUGS_CACHE.filter(b=>b.status==='fixed');

  const sevPillClass = (s)=> s==='high' ? 'priority-high' : s==='low' ? 'st-completed' : 'priority-med';
  const rowHtml = (b)=>`
    <div class="flex-between" style="padding:10px 4px;border-bottom:1px solid var(--border);gap:10px;">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:600;font-size:13.5px;${b.status==='fixed'?'text-decoration:line-through;color:#999;':''}">${esc(b.title)}</div>
        <div class="small muted mt-10">${esc(b.description||'')}</div>
        <div class="small muted" style="margin-top:4px;">${BIZ_LABEL[b.business]||b.business||'Both'} · ${fmtDate(b.created_at)}</div>
      </div>
      <span class="pill ${sevPillClass(b.severity)}">${(b.severity||'medium').toUpperCase()}</span>
      <select onchange="updateBugStatus('${b.id}', this.value)" style="width:auto;padding:6px 8px;font-size:12px;">
        ${BUG_STATUSES.map(s=>`<option value="${s}" ${b.status===s?'selected':''}>${s.replace('_',' ')}</option>`).join('')}
      </select>
      <button class="icon-btn" aria-label="Edit bug" onclick="openBugModal('${b.id}')">✎</button>
      <button class="icon-btn" aria-label="Delete bug" onclick="deleteBug('${b.id}')">✕</button>
    </div>`;

  return `
  ${bugExampleCard()}
  <div class="grid grid-2">
    <div class="card"><div class="card-title">Open / In Progress <span class="small muted">${open.length}</span></div>${open.map(rowHtml).join('')||'<div class="empty-state small">Nothing outstanding — nice.</div>'}</div>
    <div class="card"><div class="card-title">Fixed <span class="small muted">${fixed.length}</span></div>${fixed.map(rowHtml).join('')||'<div class="empty-state small">Nothing fixed yet.</div>'}</div>
  </div>`;
}
function openBugModal(id){
  const b = id ? BUGS_CACHE.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${b?'Edit Bug':'Log a Bug'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Title</label><input id="f-bugTitle" type="text" value="${b?esc(b.title):''}" placeholder="What's broken or needs updating?"></div>
      <div class="form-row">
        <div class="form-group"><label>Business</label><select id="f-bugBusiness">
          <option value="both" ${!b||b.business==='both'?'selected':''}>Both</option>
          <option value="steadyworks" ${b&&b.business==='steadyworks'?'selected':''}>SteadyWorks</option>
          <option value="steadyflow" ${b&&b.business==='steadyflow'?'selected':''}>SteadyFlow</option>
        </select></div>
        <div class="form-group"><label>Severity</label><select id="f-bugSeverity">${BUG_SEVERITIES.map(s=>`<option value="${s}" ${b&&b.severity===s?'selected':(!b&&s==='medium'?'selected':'')}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join('')}</select></div>
      </div>
      <div class="form-group"><label>Status</label><select id="f-bugStatus">${BUG_STATUSES.map(s=>`<option value="${s}" ${b&&b.status===s?'selected':''}>${s.replace('_',' ')}</option>`).join('')}</select></div>
      <div class="form-group"><label>Description</label><textarea id="f-bugDescription">${b?esc(b.description||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${b?`<button class="btn btn-danger" onclick="deleteBug('${b.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveBug('${b?b.id:''}')">${b?'Save Changes':'Log Bug'}</button>
    </div>`);
}
async function saveBug(id){
  const title = document.getElementById('f-bugTitle').value.trim();
  if(!title){ toast('A title is required', '⚠️'); return; }
  const data = {
    title,
    business: document.getElementById('f-bugBusiness').value,
    severity: document.getElementById('f-bugSeverity').value,
    status: document.getElementById('f-bugStatus').value,
    description: document.getElementById('f-bugDescription').value.trim()||null
  };
  closeModal();
  if(id){ await sb.from('bugs').update(data).eq('id',id); toast('Bug updated'); }
  else{ await sb.from('bugs').insert(data); toast('Bug logged'); }
  BUGS_CACHE = null; renderPage();
}
async function updateBugStatus(id, status){
  await sb.from('bugs').update({status}).eq('id',id);
  BUGS_CACHE = null; renderPage();
}
function deleteBug(id){
  confirmDelete('Delete this bug?', "This can't be undone.", async ()=>{
    closeModal(); await sb.from('bugs').delete().eq('id',id); BUGS_CACHE = null; renderPage(); toast('Bug deleted','🗑️');
  });
}

const BIZ_LABEL = {steadyworks:'SteadyWorks', steadyflow:'SteadyFlow', cookbook:'Cookbook', animation:'Animation', ugc:'UGC', both:'Both'};
const BIZ_COLOR = {steadyworks:'st-won', steadyflow:'st-quoted', cookbook:'st-scheduled', animation:'priority-med', ugc:'st-new', both:'st-active'};

function exampleTaskRow(title, done, business, dateLabel){
  return `
    <div class="flex-between" style="padding:10px 4px;border-bottom:1px solid var(--border);gap:10px;">
      <div class="flex" style="gap:10px;align-items:flex-start;flex:1;">
        <input type="checkbox" ${done?'checked':''} disabled style="margin-top:3px;width:16px;height:16px;opacity:.5;">
        <div>
          <div style="font-weight:600;font-size:13.5px;${done?'text-decoration:line-through;color:#999;':''}">${esc(title)}</div>
          <div class="small muted">${dateLabel}</div>
        </div>
      </div>
      <span class="pill ${BIZ_COLOR[business]||'st-draft'}">${BIZ_LABEL[business]||business}</span>
    </div>`;
}
function tasksExampleBlock(){
  return `<div class="card" style="border:1px dashed #C9A227;background:rgba(201,162,39,.08);margin-bottom:18px;">
    <div class="card-title">Example <span class="pill" style="background:rgba(201,162,39,.18);color:#E8C468;">Sample — not real data</span></div>
    <p class="small muted mb-10">This is what a task row looks like — tick the box to mark done, filter by business above, real items load below.</p>
    ${exampleTaskRow('Call MyJobQuote to top up lead credits', false, 'steadyworks', 'Mon 13 Jul · Week 1')}
    ${exampleTaskRow('Post SteadyFlow outreach batch (10 emails)', false, 'steadyflow', 'Tue 14 Jul · Week 1')}
    ${exampleTaskRow('Record cookbook intro voiceover', true, 'cookbook', 'Sun 12 Jul · Week 1')}
  </div>`;
}
/* ---------- FOCUS SCORE (prioritization framework) ----------
   score = impact*3 + urgency*3 + effort bonus (quick wins nudged up) + deadline bonus (imminent due dates nudged up)
   Top 3 = shown big. Today's Queue = next 6 (top 3 + queue = 9 for the day). Rest = collapsed. */
function taskScore(t){
  const impact = Number(t.impact)||2;
  const urgency = Number(t.urgency)||2;
  const effort = t.effort || 'medium';
  const effortBonus = effort==='quick' ? 2 : effort==='long' ? 0 : 1;
  let deadlineBonus = 0;
  if(t.due_date){
    const dd = daysUntil(t.due_date);
    if(dd!==null){
      if(dd<0) deadlineBonus = 6;
      else if(dd===0) deadlineBonus = 4;
      else if(dd<=3) deadlineBonus = 2;
      else if(dd<=7) deadlineBonus = 1;
    }
  }
  return (impact*3) + (urgency*3) + effortBonus + deadlineBonus;
}
function view_tasks(){
  const businesses = ['all','steadyworks','steadyflow','cookbook','animation','ugc'];
  if(TASKS_CACHE===null){
    if(!window._tasksLoading){
      window._tasksLoading = true;
      loadTasks().then(()=>{ window._tasksLoading = false; refreshIfCurrent('tasks'); });
    }
    return `${tasksExampleBlock()}<div class="empty-state">Loading your real tasks from the plan…</div>`;
  }
  if(window._tasksLoadError){
    return `${tasksExampleBlock()}<div class="empty-state">Couldn't load your tasks: ${esc(window._tasksLoadError)}<br><button class="btn btn-ghost mt-10" onclick="TASKS_CACHE=null; window._tasksLoadError=null; renderPage();">Try again</button></div>`;
  }
  const filtered = TASKS_FILTER==='all' ? TASKS_CACHE : TASKS_CACHE.filter(t=>t.business===TASKS_FILTER);
  const todoSorted = filtered.filter(t=>t.status!=='done').map(t=>Object.assign({}, t, {_score:taskScore(t)})).sort((a,b)=>b._score-a._score);
  const done = filtered.filter(t=>t.status==='done').sort((a,b)=>new Date(b.due_date||t.created_at||0)-new Date(a.due_date||0));

  const top3 = todoSorted.slice(0,3);
  const queue = todoSorted.slice(3,9);
  const rest = todoSorted.slice(9);
  const showAll = !!window._tasksShowAll;
  const showAllDone = !!window._tasksShowAllDone;

  const scorePill = (t)=> `<span class="pill" style="background:rgba(201,162,39,.18);color:#E8C468;" title="Focus Score — higher means do it sooner">🔥 ${t._score}</span>`;

  const topCardHtml = (t, rank)=> `
    <div class="card" style="border:1px solid var(--gold);background:rgba(201,162,39,.06);">
      <div class="flex-between" style="margin-bottom:10px;">
        <span class="pill" style="background:var(--gold);color:#1A1A1A;font-weight:800;">#${rank} PRIORITY</span>
        ${scorePill(t)}
      </div>
      <div class="flex" style="gap:10px;align-items:flex-start;">
        <input type="checkbox" onchange="toggleTask('${t.id}')" style="margin-top:3px;width:18px;height:18px;flex-shrink:0;">
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:15px;">${esc(t.title)}</div>
          <div class="small muted" style="margin-top:3px;">${t.due_date?fmtDate(t.due_date):'No date'}${t.week_number?(' · Week '+t.week_number):''}</div>
        </div>
      </div>
      <div class="flex-between" style="margin-top:10px;">
        <span class="pill ${BIZ_COLOR[t.business]||'st-draft'}">${BIZ_LABEL[t.business]||t.business}</span>
        <span><button class="icon-btn" aria-label="Edit task" onclick="openTaskModal('${t.id}')">✎</button><button class="icon-btn" aria-label="Delete task" onclick="deleteTask('${t.id}')">✕</button></span>
      </div>
    </div>`;

  const rowHtml = (t)=> `
    <div class="flex-between" style="padding:10px 4px;border-bottom:1px solid var(--border);gap:10px;">
      <div class="flex" style="gap:10px;align-items:flex-start;flex:1;min-width:0;">
        <input type="checkbox" ${t.status==='done'?'checked':''} onchange="toggleTask('${t.id}')" style="margin-top:3px;width:16px;height:16px;flex-shrink:0;">
        <div style="min-width:0;">
          <div style="font-weight:600;font-size:13.5px;${t.status==='done'?'text-decoration:line-through;color:#999;':''}">${esc(t.title)}</div>
          <div class="small muted">${t.due_date?fmtDate(t.due_date):'No date'}${t.week_number?(' · Week '+t.week_number):''}</div>
        </div>
      </div>
      ${t._score!==undefined?scorePill(t):''}
      <span class="pill ${BIZ_COLOR[t.business]||'st-draft'}">${BIZ_LABEL[t.business]||t.business}</span>
      <button class="icon-btn" aria-label="Edit task" onclick="openTaskModal('${t.id}')">✎</button>
      <button class="icon-btn" aria-label="Delete task" onclick="deleteTask('${t.id}')">✕</button>
    </div>`;

  const doneToShow = done.slice(0, showAllDone ? done.length : 5);

  return `
  <div class="tabs">
    ${businesses.map(b=>`<button class="tab-btn ${TASKS_FILTER===b?'active':''}" onclick="setTasksFilter('${b}')">${b==='all'?'All':BIZ_LABEL[b]}</button>`).join('')}
  </div>
  ${tasksExampleBlock()}

  ${todoSorted.length===0 ? '<div class="empty-state mb-20">Nothing on your plate — click "+ New Task" above to add one.</div>' : `
  <div class="card-title" style="margin-bottom:10px;">🎯 Top 3 Priorities</div>
  <div class="grid grid-3" style="margin-bottom:20px;align-items:start;">${top3.map((t,i)=>topCardHtml(t,i+1)).join('') || '<div class="empty-state small">Nothing left — nice work.</div>'}</div>

  ${queue.length? `
  <div class="card" style="margin-bottom:14px;">
    <div class="card-title">Today's Queue <span class="small muted">Next ${queue.length} — with the Top 3, that's ${top3.length+queue.length} for today</span></div>
    ${queue.map(rowHtml).join('')}
  </div>`:''}

  ${rest.length? `
  <div class="mb-20">
    <button class="btn btn-ghost btn-sm" onclick="window._tasksShowAll=${!showAll};renderPage();">${showAll?'▲ Hide the rest':'▼ Show all '+rest.length+' remaining ('+ (rest.length) +' not urgent right now)'}</button>
    ${showAll? `<div class="card mt-10">${rest.map(rowHtml).join('')}</div>` : ''}
  </div>`:''}
  `}

  <div class="card">
    <div class="card-title">Done <span class="small muted">${done.length}</span></div>
    ${doneToShow.length ? doneToShow.map(rowHtml).join('') : '<div class="empty-state small">Nothing here.</div>'}
    ${done.length>5? `<button class="btn btn-ghost btn-sm mt-10" onclick="window._tasksShowAllDone=${!showAllDone};renderPage();">${showAllDone?'▲ Show fewer':'▼ Show all '+done.length+' done'}</button>`:''}
  </div>`;
}
function setTasksFilter(b){ TASKS_FILTER = b; renderPage(); }
async function toggleTask(id){
  const t = TASKS_CACHE.find(x=>x.id===id);
  if(!t) return;
  const newStatus = t.status==='done' ? 'todo' : 'done';
  t.status = newStatus;
  renderPage();
  const { error } = await sb.from('tasks').update({status:newStatus}).eq('id', id);
  if(error){ toast('Could not save — check connection'); t.status = newStatus==='done'?'todo':'done'; renderPage(); }
}

const TASK_BUSINESSES = ['steadyworks','steadyflow','cookbook','animation','ugc'];
function openTaskModal(id){
  const t = (id && TASKS_CACHE) ? TASKS_CACHE.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${t?'Edit Task':'New Task'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Title</label><input id="f-title" type="text" value="${t?esc(t.title):''}"></div>
      <div class="form-row">
        <div class="form-group"><label>Business</label><select id="f-business">${TASK_BUSINESSES.map(b=>`<option value="${b}" ${t&&t.business===b?'selected':''}>${BIZ_LABEL[b]}</option>`).join('')}</select></div>
        <div class="form-group"><label>Status</label><select id="f-status">
          <option value="todo" ${t&&t.status==='todo'?'selected':''}>To Do</option>
          <option value="done" ${t&&t.status==='done'?'selected':''}>Done</option>
        </select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Due Date</label><input id="f-dueDate" type="date" value="${t&&t.due_date?t.due_date:''}"></div>
        <div class="form-group"><label>Week Number</label><input id="f-weekNumber" type="number" value="${t&&t.week_number?t.week_number:''}"></div>
      </div>
      <div class="divider"></div>
      <p class="small muted" style="margin-bottom:10px;">Quick prioritization — this decides where it lands in your queue.</p>
      <div class="form-row">
        <div class="form-group"><label>Impact</label><select id="f-impact">
          <option value="1" ${t&&Number(t.impact)===1?'selected':''}>Low — nice to have</option>
          <option value="2" ${!t||Number(t.impact)===2?'selected':''}>Medium — helps the business</option>
          <option value="3" ${t&&Number(t.impact)===3?'selected':''}>High — real difference</option>
        </select></div>
        <div class="form-group"><label>Urgency</label><select id="f-urgency">
          <option value="1" ${t&&Number(t.urgency)===1?'selected':''}>Low — no rush</option>
          <option value="2" ${!t||Number(t.urgency)===2?'selected':''}>Medium — this week</option>
          <option value="3" ${t&&Number(t.urgency)===3?'selected':''}>High — today / ASAP</option>
        </select></div>
      </div>
      <div class="form-group"><label>Effort</label><select id="f-effort">
        <option value="quick" ${t&&t.effort==='quick'?'selected':''}>Quick win — under 30 min</option>
        <option value="medium" ${!t||t.effort==='medium'?'selected':''}>Medium — 30 min to 2 hrs</option>
        <option value="long" ${t&&t.effort==='long'?'selected':''}>Long — 2 hrs+</option>
      </select></div>
      <div class="form-group"><label>Description (optional)</label><textarea id="f-description">${t?esc(t.description||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${t?`<button class="btn btn-danger" onclick="deleteTask('${t.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveTask('${t?t.id:''}')">${t?'Save Changes':'Create Task'}</button>
    </div>`);
}
async function saveTask(id){
  const title = document.getElementById('f-title').value.trim();
  if(!title){ toast('Task title is required','⚠️'); document.getElementById('f-title').focus(); return; }
  const data = {
    title,
    business: document.getElementById('f-business').value,
    status: document.getElementById('f-status').value,
    due_date: document.getElementById('f-dueDate').value || null,
    week_number: document.getElementById('f-weekNumber').value ? Number(document.getElementById('f-weekNumber').value) : null,
    impact: Number(document.getElementById('f-impact').value)||2,
    urgency: Number(document.getElementById('f-urgency').value)||2,
    effort: document.getElementById('f-effort').value || 'medium',
    description: document.getElementById('f-description').value.trim() || null
  };
  closeModal();
  if(id){
    const { error } = await sb.from('tasks').update(data).eq('id', id);
    if(error){ toast('Could not save — check connection','⚠️'); return; }
    toast('Task updated');
  } else {
    const { error } = await sb.from('tasks').insert(Object.assign({source:'manual'}, data));
    if(error){ toast('Could not create task — check connection','⚠️'); return; }
    toast('Task created');
  }
  TASKS_CACHE = null;
  await loadTasks();
  renderPage();
}
function deleteTask(id){
  confirmDelete('Delete this task?', "This can't be undone.", async ()=>{
    closeModal();
    const { error } = await sb.from('tasks').delete().eq('id', id);
    if(error){ toast('Could not delete — check connection','⚠️'); return; }
    TASKS_CACHE = TASKS_CACHE ? TASKS_CACHE.filter(t=>t.id!==id) : TASKS_CACHE;
    renderPage();
    toast('Task deleted','🗑️');
  });
}

function goalExampleCard(){
  return `<div class="card" style="border:1px dashed #C9A227;background:rgba(201,162,39,.08);">
    <div class="card-title">Reach £10,000/month combined <span class="pill" style="background:rgba(201,162,39,.18);color:#E8C468;">Example</span></div>
    <div class="small muted" style="margin-bottom:10px;">Illustrates the format — real goals (with linked tasks and live progress) load alongside this.</div>
    <div class="flex-between small" style="margin-bottom:6px;">
      <span>Target: 11 Sep 2026</span>
      <span>£10,000/mo</span>
    </div>
    <div class="progress-bar"><div class="progress-bar-fill" style="width:40%;"></div></div>
    <div class="small muted" style="margin-top:6px;">8/20 tasks done · 40%</div>
  </div>`;
}
function view_goals(){
  if(GOALS_CACHE===null || TASKS_CACHE===null){
    if(!window._goalsLoading){
      window._goalsLoading = true;
      Promise.all([loadGoals(), TASKS_CACHE===null?loadTasks():Promise.resolve()]).then(()=>{ window._goalsLoading = false; refreshIfCurrent('goals'); });
    }
    return `<div class="grid grid-3">${goalExampleCard()}</div><div class="empty-state">Loading your real goals from the plan…</div>`;
  }
  if(window._goalsLoadError || window._tasksLoadError){
    return `<div class="grid grid-3">${goalExampleCard()}</div><div class="empty-state">Couldn't load your goals: ${esc(window._goalsLoadError||window._tasksLoadError)}<br><button class="btn btn-ghost mt-10" onclick="GOALS_CACHE=null; TASKS_CACHE=null; window._goalsLoadError=null; window._tasksLoadError=null; renderPage();">Try again</button></div>`;
  }
  const cards = GOALS_CACHE.map(g=>{
    const linked = TASKS_CACHE.filter(t=>t.goal_id===g.id);
    const doneCt = linked.filter(t=>t.status==='done').length;
    const pct = linked.length ? Math.round(doneCt/linked.length*100) : 0;
    return `<div class="card">
      <div class="card-title flex-between">
        <span>${esc(g.name)} <span class="pill ${BIZ_COLOR[g.business]||'st-draft'}">${BIZ_LABEL[g.business]||g.business}</span></span>
        <span><button class="icon-btn" aria-label="Edit goal" onclick="openGoalModal('${g.id}')">✎</button><button class="icon-btn" aria-label="Delete goal" onclick="deleteGoal('${g.id}')">✕</button></span>
      </div>
      <div class="small muted" style="margin-bottom:10px;">${esc(g.description||'')}</div>
      <div class="flex-between small" style="margin-bottom:6px;">
        <span>${g.target_date?('Target: '+fmtDate(g.target_date)):''}</span>
        <span>${g.revenue_target?('£'+Number(g.revenue_target).toLocaleString()+'/mo'):''}</span>
      </div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>
      <div class="small muted" style="margin-top:6px;">${doneCt}/${linked.length} tasks done · ${pct}%</div>
    </div>`;
  }).join('') || '<div class="empty-state">No goals yet — click "+ New Goal" above to add one.</div>';
  return `<div class="grid grid-3">${goalExampleCard()}${cards}</div>`;
}
const GOAL_BUSINESSES = ['steadyworks','steadyflow','cookbook','animation','ugc','both'];
function openGoalModal(id){
  const g = (id && GOALS_CACHE) ? GOALS_CACHE.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${g?'Edit Goal':'New Goal'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Goal Name</label><input id="f-name" type="text" value="${g?esc(g.name):''}" placeholder="e.g. Reach £10,000/month combined"></div>
      <div class="form-row">
        <div class="form-group"><label>Business</label><select id="f-business">${GOAL_BUSINESSES.map(b=>`<option value="${b}" ${g&&g.business===b?'selected':''}>${BIZ_LABEL[b]||b}</option>`).join('')}</select></div>
        <div class="form-group"><label>Status</label><select id="f-status">
          <option value="active" ${g&&g.status==='active'?'selected':''}>Active</option>
          <option value="done" ${g&&g.status==='done'?'selected':''}>Done</option>
          <option value="paused" ${g&&g.status==='paused'?'selected':''}>Paused</option>
        </select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Target Date</label><input id="f-targetDate" type="date" value="${g&&g.target_date?g.target_date:''}"></div>
        <div class="form-group"><label>Revenue Target (£/mo, optional)</label><input id="f-revenueTarget" type="number" value="${g&&g.revenue_target!=null?g.revenue_target:''}"></div>
      </div>
      <div class="form-group"><label>Description</label><textarea id="f-description">${g?esc(g.description||''):''}</textarea></div>
      <div class="form-group"><label>Notes (optional)</label><textarea id="f-notes">${g?esc(g.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${g?`<button class="btn btn-danger" onclick="deleteGoal('${g.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveGoal('${g?g.id:''}')">${g?'Save Changes':'Create Goal'}</button>
    </div>`);
}
async function saveGoal(id){
  const name = document.getElementById('f-name').value.trim();
  if(!name){ toast('Goal name is required','⚠️'); document.getElementById('f-name').focus(); return; }
  const data = {
    name,
    business: document.getElementById('f-business').value,
    status: document.getElementById('f-status').value,
    target_date: document.getElementById('f-targetDate').value || null,
    revenue_target: document.getElementById('f-revenueTarget').value ? Number(document.getElementById('f-revenueTarget').value) : null,
    description: document.getElementById('f-description').value.trim() || null,
    notes: document.getElementById('f-notes').value.trim() || null
  };
  closeModal();
  if(id){
    const { error } = await sb.from('goals_projects').update(data).eq('id', id);
    if(error){ toast('Could not save — check connection','⚠️'); return; }
    toast('Goal updated');
  } else {
    const { error } = await sb.from('goals_projects').insert(data);
    if(error){ toast('Could not create goal — check connection','⚠️'); return; }
    toast('Goal created');
  }
  GOALS_CACHE = null;
  await loadGoals();
  renderPage();
}
function deleteGoal(id){
  confirmDelete('Delete this goal?', "This can't be undone. Linked tasks won't be deleted, but they'll no longer show progress against this goal.", async ()=>{
    closeModal();
    const { error } = await sb.from('goals_projects').delete().eq('id', id);
    if(error){ toast('Could not delete — check connection','⚠️'); return; }
    GOALS_CACHE = GOALS_CACHE ? GOALS_CACHE.filter(g=>g.id!==id) : GOALS_CACHE;
    renderPage();
    toast('Goal deleted','🗑️');
  });
}
function fmtDate(d){ try{ return new Date(d).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}); }catch(e){ return d; } }

/* ---------- SHARED: TARGET / GOAL PROGRESS BARS (used on both dashboards) ---------- */
function progressBarCard(title, footer, pct){
  const safePct = Math.max(0, Math.min(100, Math.round(pct||0)));
  return `<div class="card">
    <div class="card-title">${title}</div>
    <div class="progress-bar" style="margin-top:6px;"><div class="progress-bar-fill" style="width:${safePct}%;"></div></div>
    <div class="flex-between small muted" style="margin-top:6px;">
      <span>${footer}</span>
      <span style="font-weight:700;color:var(--gold);">${safePct}%</span>
    </div>
  </div>`;
}
function dashboardGoalsHtml(bizKey, routeName){
  if(GOALS_CACHE===null || TASKS_CACHE===null){
    if(!window._goalsLoading){
      window._goalsLoading = true;
      Promise.all([GOALS_CACHE===null?loadGoals():Promise.resolve(), TASKS_CACHE===null?loadTasks():Promise.resolve()]).then(()=>{ window._goalsLoading = false; refreshIfCurrent(routeName); });
    }
    return `<div class="card"><div class="card-title">Goals Progress</div><div class="empty-state small">Loading goals…</div></div>`;
  }
  if(window._goalsLoadError || window._tasksLoadError){
    return `<div class="card"><div class="card-title">Goals Progress</div><div class="empty-state small">Couldn't load goals — <a style="color:var(--gold);cursor:pointer;" onclick="navigate('goals')">check the Goals page</a>.</div></div>`;
  }
  const goals = bizKey==='all' ? GOALS_CACHE.slice() : GOALS_CACHE.filter(g=> g.business===bizKey || g.business==='both');
  if(!goals.length){
    return `<div class="card"><div class="card-title">Goals Progress <a class="small" style="color:var(--gold);font-weight:700;" onclick="navigate('goals')">Manage goals →</a></div><div class="empty-state small">No goals set for this business yet — <a style="color:var(--gold);cursor:pointer;" onclick="navigate('goals')">add one on the Goals page</a>.</div></div>`;
  }
  return goals.map(g=>{
    const linked = TASKS_CACHE.filter(t=>t.goal_id===g.id);
    const doneCt = linked.filter(t=>t.status==='done').length;
    const pct = linked.length ? Math.round(doneCt/linked.length*100) : 0;
    const footer = doneCt+'/'+linked.length+' tasks done'+(g.revenue_target?(' · £'+Number(g.revenue_target).toLocaleString()+'/mo target'):'');
    const title = esc(g.name)+(g.target_date?` <span class="small muted" style="font-weight:400;">· Target ${fmtDate(g.target_date)}</span>`:'');
    return progressBarCard(title, footer, pct);
  }).join('');
}

/* ---------- STEADYFLOW DASHBOARD ---------- */
function sfTodayStr(){ return new Date().toISOString().slice(0,10); }
function sfDaysAgoStr(n){ const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); }
function view_sf_dashboard(){
  DB.sfActivity = DB.sfActivity||[];
  DB.sfQuotes = DB.sfQuotes||[];
  DB.sfInvoices = DB.sfInvoices||[];

  const activeClients = DB.sfClients.filter(c=>c.status==='active').length;
  const leadCt = DB.sfClients.filter(c=>c.status==='lead').length;
  const mrrTotal = DB.sfClients.filter(c=>c.status==='active').reduce((s,c)=>s+(Number(c.mrr)||0),0);
  const outstanding = DB.sfInvoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0);

  const weekStart = sfDaysAgoStr(6);
  const weekEntries = DB.sfActivity.filter(a=>a.date>=weekStart);
  const weekEmails = weekEntries.reduce((s,a)=>s+(Number(a.emails)||0),0);
  const weekCalls = weekEntries.reduce((s,a)=>s+(Number(a.calls)||0),0);

  const quotesSent = DB.sfQuotes.filter(q=>['sent','approved','declined','expired'].includes(q.status)).length;
  const quotesWon = DB.sfQuotes.filter(q=>q.status==='approved').length;
  const conversionRate = quotesSent? Math.round((quotesWon/quotesSent)*100) : 0;

  const kpis = [
    {label:'Active Clients', value:activeClients, icon:'💻', bg:'#EFF6FF'},
    {label:'Leads', value:leadCt, icon:'🎯', bg:'#FDF2F8'},
    {label:'MRR (active)', value:fmt(mrrTotal), icon:'💰', bg:'#FFF7ED'},
    {label:'Outstanding Invoices', value:fmt(outstanding), icon:'🧾', bg:'#FEF2F2'},
    {label:'Emails This Week', value:weekEmails, icon:'✉️', bg:'#F0FDF4'},
    {label:'Calls This Week', value:weekCalls, icon:'📞', bg:'#F5F3FF'},
    {label:'Quote Conversion', value:conversionRate+'%', icon:'✅', bg:'#ECFDF5'},
    {label:'Total Clients (all time)', value:DB.sfClients.length, icon:'📇', bg:'#FFFBEB'}
  ];
  const kpiHtml = kpis.map(k=>`
    <div class="card kpi-card">
      <div class="kpi-icon" style="background:${k.bg}">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
    </div>`).join('');

  const recentActivity = DB.sfActivity.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,14);
  const activityRows = recentActivity.map(a=>`
    <tr>
      <td>${fmtDate(a.date)}</td>
      <td>${a.emails||0}</td>
      <td>${a.calls||0}</td>
      <td class="small muted">${esc(a.notes||'')}</td>
      <td><button class="icon-btn" aria-label="Edit activity" onclick="openSfActivityModal('${a.date}')">✎</button><button class="icon-btn" aria-label="Delete activity" onclick="deleteSfActivity('${a.date}')">✕</button></td>
    </tr>`).join('');

  const sfMonthlyTarget = DB.settings.sfMonthlyTarget||0;
  const mrrPct = sfMonthlyTarget ? (mrrTotal/sfMonthlyTarget*100) : 0;
  const weeklyEmailTarget = DB.settings.sfWeeklyEmailTarget||0;
  const emailPct = weeklyEmailTarget ? (weekEmails/weeklyEmailTarget*100) : 0;
  const weeklyCallTarget = DB.settings.sfWeeklyCallTarget||0;
  const callPct = weeklyCallTarget ? (weekCalls/weeklyCallTarget*100) : 0;

  return `
  <div class="grid grid-4" style="margin-bottom:20px;">${kpiHtml}</div>

  <div class="grid grid-3" style="margin-bottom:20px;align-items:start;">
    ${progressBarCard('MRR Target', fmt(mrrTotal)+' of '+fmt(sfMonthlyTarget)+' target', mrrPct)}
    ${progressBarCard('Weekly Email Target', weekEmails+' of '+weeklyEmailTarget+' emails', emailPct)}
    ${progressBarCard('Weekly Call Target', weekCalls+' of '+weeklyCallTarget+' calls', callPct)}
  </div>
  <div class="grid grid-3" style="margin-bottom:20px;align-items:start;">
    ${dashboardGoalsHtml('steadyflow','sf-dashboard')}
  </div>

  <div class="grid grid-2" style="margin-bottom:20px;">
    <div class="card">
      <div class="card-title">Daily Outreach — Emails &amp; Calls <span class="muted small">Last 14 days</span></div>
      <div style="position:relative;height:220px;width:100%;"><canvas id="sfChartActivity"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Client Pipeline</div>
      <div style="position:relative;height:220px;width:100%;"><canvas id="sfChartClients"></canvas></div>
    </div>
  </div>
  <div class="grid grid-2" style="margin-bottom:20px;">
    <div class="card">
      <div class="card-title">Quote Conversion</div>
      <div style="position:relative;height:200px;width:100%;"><canvas id="sfChartQuotes"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Clients by Package</div>
      <div style="position:relative;height:200px;width:100%;"><canvas id="sfChartPackages"></canvas></div>
    </div>
  </div>
  <div class="card">
    <div class="card-title">Recent Daily Activity <span class="small muted">${DB.sfActivity.length} days logged</span></div>
    <table>
      <thead><tr><th>Date</th><th>Emails</th><th>Calls</th><th>Notes</th><th></th></tr></thead>
      <tbody>${activityRows || '<tr><td colspan="5" class="muted" style="text-align:center;padding:30px;">No outreach logged yet — use the button above to log today.</td></tr>'}</tbody>
    </table>
  </div>`;
}
function afterRender_sf_dashboard(){
  DB.sfActivity = DB.sfActivity||[];
  const days = [];
  for(let i=13;i>=0;i--) days.push(sfDaysAgoStr(i));
  const labels = days.map(d=>fmtDate(d));
  const emailsData = days.map(d=>{ const a = DB.sfActivity.find(x=>x.date===d); return a?(Number(a.emails)||0):0; });
  const callsData = days.map(d=>{ const a = DB.sfActivity.find(x=>x.date===d); return a?(Number(a.calls)||0):0; });
  chartSafe('sfChartActivity','line',{
    labels, datasets:[
      {label:'Emails', data:emailsData, borderColor:'#00E5CC', backgroundColor:'rgba(0,229,204,0.12)', fill:true, tension:.35},
      {label:'Calls', data:callsData, borderColor:'#E11D2A', backgroundColor:'rgba(225,29,42,0.12)', fill:true, tension:.35}
    ]
  },{ plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:11}}}} });

  const statusCounts = {lead:0, active:0, paused:0};
  DB.sfClients.forEach(c=>{ if(statusCounts[c.status]!==undefined) statusCounts[c.status]++; });
  chartSafe('sfChartClients','doughnut',{
    labels:['Lead','Active','Paused'],
    datasets:[{data:[statusCounts.lead, statusCounts.active, statusCounts.paused], backgroundColor:['#7DD3FC','#22C55E','#F59E0B']}]
  },{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}});

  const qStatuses = ['draft','sent','approved','declined','expired'];
  const qCounts = qStatuses.map(s=>(DB.sfQuotes||[]).filter(q=>q.status===s).length);
  chartSafe('sfChartQuotes','doughnut',{
    labels:['Draft','Sent','Approved','Declined','Expired'],
    datasets:[{data:qCounts, backgroundColor:['#D1D5DB','#7DD3FC','#22C55E','#EF4444','#FCA5A5']}]
  },{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}});

  const pkgCounts = {};
  DB.sfClients.forEach(c=>{ const p = c.package||'Not set'; pkgCounts[p] = (pkgCounts[p]||0)+1; });
  chartSafe('sfChartPackages','bar',{
    labels:Object.keys(pkgCounts), datasets:[{label:'Clients', data:Object.values(pkgCounts), backgroundColor:'#00E5CC', borderRadius:6}]
  },{indexAxis:'y', plugins:{legend:{display:false}}});
}
function openSfActivityModal(date){
  const d = date || sfTodayStr();
  const existing = (DB.sfActivity||[]).find(a=>a.date===d);
  openModal(`
    <div class="modal-head"><h2>${existing?'Edit Activity — ':'Log Activity — '}${fmtDate(d)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <input type="hidden" id="f-activityDate" value="${d}">
      <div class="form-row">
        <div class="form-group"><label>Emails Sent</label><input id="f-emails" type="number" min="0" value="${existing?existing.emails:0}"></div>
        <div class="form-group"><label>Calls Made</label><input id="f-calls" type="number" min="0" value="${existing?existing.calls:0}"></div>
      </div>
      <div class="form-group"><label>Notes (optional)</label><textarea id="f-activityNotes">${existing?esc(existing.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${existing?`<button class="btn btn-danger" onclick="deleteSfActivity('${d}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSfActivity()">${existing?'Save Changes':'Log Activity'}</button>
    </div>`);
}
function saveSfActivity(){
  const date = document.getElementById('f-activityDate').value;
  const data = {
    date,
    emails: Number(document.getElementById('f-emails').value)||0,
    calls: Number(document.getElementById('f-calls').value)||0,
    notes: document.getElementById('f-activityNotes').value.trim()
  };
  DB.sfActivity = DB.sfActivity||[];
  const existing = DB.sfActivity.find(a=>a.date===date);
  if(existing) Object.assign(existing, data);
  else DB.sfActivity.push(Object.assign({id:uid()}, data));
  save(); closeModal(); renderPage();
  toast('Activity logged for '+fmtDate(date));
}
function deleteSfActivity(date){
  confirmDelete('Delete activity for '+fmtDate(date)+'?', "This can't be undone.", ()=>{
    DB.sfActivity = (DB.sfActivity||[]).filter(a=>a.date!==date);
    save(); closeModal(); renderPage();
    toast('Activity entry deleted','🗑️');
  });
}

/* ---------- STEADYFLOW CLIENTS (merged in from the old SteadyFlow dashboard.html) ---------- */
const SF_STATUS_CLS = {lead:'st-new', active:'st-won', paused:'st-onhold'};
// Kept in sync with the live packages on steadyflowmarketing.agency
const SF_PACKAGES = [
  'Starter Website — £555',
  'Growth Website — £780',
  'Professional Website — £1,200',
  'Business OS — Essential — £690',
  'Business OS — Business Manager — £990',
  'Business OS — AI Automation — £1,395',
  'Retainer — Social Starter — £199/mo',
  'Retainer — Growth — £669/mo',
  'Retainer — Full Marketing — £1,099/mo',
  'Bundle (Website + Business OS, 8% off)',
  'UGC Content Creation',
  'Custom'
];
let SF_FILTER = 'all';

function view_sf_clients(){
  const list = SF_FILTER==='all' ? DB.sfClients : DB.sfClients.filter(c=>c.status===SF_FILTER);
  const mrrTotal = DB.sfClients.filter(c=>c.status==='active').reduce((s,c)=>s+(Number(c.mrr)||0),0);
  const rows = list.map(c=>`
    <tr class="row-link" onclick="openSfClientModal('${c.id}')">
      <td><strong>${esc(c.name)}</strong><div class="small muted">${esc(c.biz||'')}</div></td>
      <td class="small">${esc(c.package||'')}</td>
      <td>£${Number(c.mrr)||0}/mo</td>
      <td><span class="pill ${SF_STATUS_CLS[c.status]||'st-draft'}">${c.status}</span></td>
      <td class="small">${c.callDate?fmtDate(c.callDate):'—'}</td>
    </tr>`).join('') || `<tr><td colspan="5"><div class="empty-state small">No clients yet — add your first lead or client.</div></td></tr>`;
  return `
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Active Clients</div><div class="kpi-value">${DB.sfClients.filter(c=>c.status==='active').length}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Leads</div><div class="kpi-value">${DB.sfClients.filter(c=>c.status==='lead').length}</div></div>
    <div class="card kpi-card"><div class="kpi-label">MRR (active)</div><div class="kpi-value">£${mrrTotal}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Total in system</div><div class="kpi-value">${DB.sfClients.length}</div></div>
  </div>
  <div class="tabs">
    ${['all','lead','active','paused'].map(s=>`<button class="tab-btn ${SF_FILTER===s?'active':''}" onclick="setSfFilter('${s}')">${s==='all'?'All':s[0].toUpperCase()+s.slice(1)}</button>`).join('')}
  </div>
  <div class="card">
    <table><thead><tr><th>Client</th><th>Package</th><th>MRR</th><th>Status</th><th>Next call</th></tr></thead>
    <tbody>${rows}</tbody></table>
  </div>`;
}
function setSfFilter(s){ SF_FILTER = s; renderPage(); }
function openSfClientModal(id){
  const c = id ? DB.sfClients.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${c?'Edit Client':'New Client / Lead'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Contact Name</label><input id="sf-name" type="text" value="${c?esc(c.name):''}"></div>
        <div class="form-group"><label>Business Name</label><input id="sf-biz" type="text" value="${c?esc(c.biz||''):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="sf-phone" type="text" value="${c?esc(c.phone||''):''}"></div>
        <div class="form-group"><label>Email</label><input id="sf-email" type="email" value="${c?esc(c.email||''):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Website</label><input id="sf-website" type="text" value="${c?esc(c.website||''):''}"></div>
        <div class="form-group"><label>Niche / Trade</label><input id="sf-niche" type="text" value="${c?esc(c.niche||''):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Package</label>
          <select id="sf-package">
            ${SF_PACKAGES.map(p=>`<option ${c&&c.package===p?'selected':''}>${p}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>MRR / Value (£)</label><input id="sf-mrr" type="number" value="${c?c.mrr||0:0}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Status</label>
          <select id="sf-status">
            <option value="lead" ${c&&c.status==='lead'?'selected':''}>Lead</option>
            <option value="active" ${c&&c.status==='active'?'selected':''}>Active</option>
            <option value="paused" ${c&&c.status==='paused'?'selected':''}>Paused</option>
          </select>
        </div>
        <div class="form-group"><label>Next Call / Follow-up</label><input id="sf-callDate" type="date" value="${c?c.callDate||'':''}"></div>
      </div>
      <div class="form-group"><label>Notes</label><textarea id="sf-notes">${c?esc(c.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${c?`<button class="btn btn-danger" onclick="deleteSfClient('${c.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSfClient('${c?c.id:''}')">${c?'Save Changes':'Add Client'}</button>
    </div>`);
}
function saveSfClient(id){
  const data = {
    name: document.getElementById('sf-name').value.trim()||'Unnamed',
    biz: document.getElementById('sf-biz').value.trim(),
    phone: document.getElementById('sf-phone').value.trim(),
    email: document.getElementById('sf-email').value.trim(),
    website: document.getElementById('sf-website').value.trim(),
    niche: document.getElementById('sf-niche').value.trim(),
    package: document.getElementById('sf-package').value,
    mrr: Number(document.getElementById('sf-mrr').value)||0,
    status: document.getElementById('sf-status').value,
    callDate: document.getElementById('sf-callDate').value,
    notes: document.getElementById('sf-notes').value.trim()
  };
  if(id){
    const c = DB.sfClients.find(x=>x.id===id);
    Object.assign(c, data);
  } else {
    DB.sfClients.push(Object.assign({id:uid(), createdAt:new Date().toISOString().slice(0,10)}, data));
  }
  save(); closeModal(); renderPage(); renderNav();
  toast(id?'Client updated':'Client added ✓');
}
function deleteSfClient(id){
  const c = DB.sfClients.find(x=>x.id===id);
  confirmDelete('Remove '+(c?c.name:'this client')+'?', "This can't be undone.", ()=>{
    DB.sfClients = DB.sfClients.filter(x=>x.id!==id);
    save(); closeModal(); renderPage(); renderNav();
    toast('Removed','🗑️');
  });
}

/* ---------- STEADYFLOW QUOTES ---------- */
const SF_QUOTE_STATUSES = ['draft','sent','approved','declined','expired'];
function view_sf_quotes(){
  const rows = (DB.sfQuotes||[]).slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(q=>{
    const t = calcQuoteTotal(q);
    return `<tr class="row-link" onclick="openSfQuoteModal('${q.id}')">
      <td><strong>${esc(q.quoteNumber)}</strong></td>
      <td>${esc(q.clientName)}</td>
      <td>${statusPill(q.status)}</td>
      <td>${fmt(t.total)}</td>
      <td>${fmtDate(q.validUntil)}</td>
    </tr>`;
  }).join('');
  return `<div class="card"><table>
    <thead><tr><th>Quote #</th><th>Client</th><th>Status</th><th>Total (inc. VAT)</th><th>Valid Until</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="5" class="muted" style="text-align:center;padding:30px;">No SteadyFlow quotes yet — create your first quote</td></tr>'}</tbody>
  </table></div>`;
}
function openSfQuoteModal(id){
  const q = id ? (DB.sfQuotes||[]).find(x=>x.id===id) : null;
  const items = q ? q.items.slice() : [{desc:'',qty:1,unit:'ea',rate:0}];
  window._editingItems = items;
  openModal(`
    <div class="modal-head"><h2>${q?'Edit Quote '+esc(q.quoteNumber):'New SteadyFlow Quote'}</h2><div class="flex gap-8"><button class="icon-btn" title="Calculator" onclick="toggleCalculator()" style="font-size:18px;">🧮</button><button class="modal-close" onclick="closeModal()">✕</button></div></div>
    <div class="modal-body">
      ${!q?`<p class="small muted mb-10">Quote number will be auto-generated (next: <strong>SFQ-${new Date().getFullYear()}-${String((DB.counters.sfQuote||0)+1).padStart(3,'0')}</strong>)</p>`:''}
      <div class="form-row">
        <div class="form-group"><label>Client</label>
          <select id="f-sfclient">
            <option value="">— Type new client below —</option>
            ${DB.sfClients.map(c=>`<option value="${c.id}" ${q&&q.clientId===c.id?'selected':''}>${esc(c.name)}${c.biz?' — '+esc(c.biz):''}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>Client Name (if new)</label><input id="f-clientName" type="text" value="${q?esc(q.clientName):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Status</label><select id="f-status">${SF_QUOTE_STATUSES.map(s=>`<option value="${s}" ${q&&q.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="form-group"><label>VAT Rate (%)</label><input id="f-vatRate" type="number" value="${q?q.vatRate:20}"></div>
      </div>
      <div class="form-group"><label>Valid Until</label><input id="f-validUntil" type="date" value="${q?q.validUntil:''}"></div>
      <label>Line Items</label>
      <table class="line-items-table" id="line-items-table"><thead><tr><th>Description</th><th style="width:60px;">Qty</th><th style="width:70px;">Unit</th><th style="width:90px;">Rate £</th><th style="width:90px;">Total</th><th></th></tr></thead>
        <tbody id="line-items-body"></tbody>
      </table>
      <button class="btn btn-ghost btn-sm mt-10" onclick="addLineItem()">+ Add Line Item</button>
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Notes / Terms</label><textarea id="f-notes">${q?esc(q.notes||''):'Payment due within 14 days of invoice date.'}</textarea></div>
    </div>
    <div class="modal-foot">
      ${q?`<button class="btn btn-danger" onclick="deleteSfQuote('${q.id}')">Delete</button>`:''}
      ${q?`<button class="btn btn-ghost" onclick="printDoc('sf-quote','${q.id}')">PDF / Print</button>`:''}
      ${q?`<button class="btn btn-dark" onclick="convertSfQuoteToInvoice('${q.id}')">Convert to Invoice</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSfQuote('${q?q.id:''}')">${q?'Save Changes':'Create Quote'}</button>
    </div>
  `);
  renderLineItems();
}
function saveSfQuote(id){
  const clientSelect = document.getElementById('f-sfclient').value;
  const client = clientSelect ? DB.sfClients.find(c=>c.id===clientSelect) : null;
  const clientNameVal = client ? client.name : document.getElementById('f-clientName').value.trim();
  if(!clientNameVal){ toast('Client is required','⚠️'); return; }
  const validItems = window._editingItems.filter(i=>i.desc||i.qty||i.rate);
  if(!validItems.length){ toast('Add at least one line item','⚠️'); return; }
  const data = {
    clientId: client ? client.id : null,
    clientName: clientNameVal,
    status: document.getElementById('f-status').value,
    vatRate: Number(document.getElementById('f-vatRate').value)||0,
    validUntil: document.getElementById('f-validUntil').value,
    notes: document.getElementById('f-notes').value,
    items: validItems
  };
  DB.sfQuotes = DB.sfQuotes||[];
  if(id){ Object.assign(DB.sfQuotes.find(q=>q.id===id), data); toast('Quote updated'); }
  else {
    const quoteNumber = nextSfQuoteNumber();
    DB.sfQuotes.push(Object.assign({id:uid(), quoteNumber, createdAt:new Date().toISOString().slice(0,10)}, data));
    logActivity('SteadyFlow quote created', quoteNumber+' — '+data.clientName);
    toast('Quote '+quoteNumber+' created');
  }
  save(); closeModal(); renderPage();
}
function deleteSfQuote(id){
  const q0 = (DB.sfQuotes||[]).find(x=>x.id===id);
  confirmDelete('Delete '+(q0?q0.quoteNumber:'this quote')+'?', "This can't be undone.", ()=>{
    DB.sfQuotes = DB.sfQuotes.filter(q=>q.id!==id); save(); closeModal(); renderPage(); toast('Quote deleted','🗑️');
  });
}
function convertSfQuoteToInvoice(qid){
  const q = (DB.sfQuotes||[]).find(x=>x.id===qid);
  if(!q) return;
  const invoiceNumber = nextSfInvoiceNumber();
  const due = new Date(); due.setDate(due.getDate()+14);
  DB.sfInvoices = DB.sfInvoices||[];
  DB.sfInvoices.push({
    id:uid(), invoiceNumber, clientId:q.clientId||null, clientName:q.clientName,
    status:'draft', items:q.items.slice(), vatRate:q.vatRate, dueDate:due.toISOString().slice(0,10),
    amountPaid:0, notes:q.notes, createdAt:new Date().toISOString().slice(0,10)
  });
  save(); closeModal();
  toast('Invoice '+invoiceNumber+' created from quote');
  navigate('sf-invoices');
}

/* ---------- STEADYFLOW INVOICES ---------- */
const SF_INVOICE_STATUSES = ['draft','sent','paid','partial','overdue'];
function view_sf_invoices(){
  const list = DB.sfInvoices||[];
  const totals = {
    outstanding: list.filter(i=>i.status!=='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0),
    paid: list.filter(i=>i.status==='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0),
    overdue: list.filter(i=>i.status==='overdue').reduce((s,i)=>s+calcInvoiceTotal(i).total,0)
  };
  const rows = list.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(inv=>{
    const t = calcInvoiceTotal(inv);
    return `<tr class="row-link" onclick="openSfInvoiceModal('${inv.id}')">
      <td><strong>${esc(inv.invoiceNumber)}</strong></td>
      <td>${esc(inv.clientName)}</td>
      <td>${statusPill(inv.status)}</td>
      <td>${fmt(t.total)}</td>
      <td>${fmt(inv.amountPaid||0)}</td>
      <td>${fmtDate(inv.dueDate)}</td>
    </tr>`;
  }).join('');
  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Outstanding</div><div class="kpi-value">${fmt(totals.outstanding)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Paid (all time)</div><div class="kpi-value">${fmt(totals.paid)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Overdue</div><div class="kpi-value" style="color:var(--danger);">${fmt(totals.overdue)}</div></div>
  </div>
  <div class="card"><table>
    <thead><tr><th>Invoice #</th><th>Client</th><th>Status</th><th>Total</th><th>Paid</th><th>Due Date</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No SteadyFlow invoices yet</td></tr>'}</tbody>
  </table></div>`;
}
function openSfInvoiceModal(id){
  const inv = id ? (DB.sfInvoices||[]).find(x=>x.id===id) : null;
  const items = inv ? inv.items.slice() : [{desc:'',qty:1,unit:'ea',rate:0}];
  window._editingItems = items;
  openModal(`
    <div class="modal-head"><h2>${inv?'Edit Invoice '+esc(inv.invoiceNumber):'New SteadyFlow Invoice'}</h2><div class="flex gap-8"><button class="icon-btn" title="Calculator" onclick="toggleCalculator()" style="font-size:18px;">🧮</button><button class="modal-close" onclick="closeModal()">✕</button></div></div>
    <div class="modal-body">
      ${!inv?`<p class="small muted mb-10">Invoice number will be auto-generated (next: <strong>SFINV-${new Date().getFullYear()}-${String((DB.counters.sfInvoice||0)+1).padStart(3,'0')}</strong>)</p>`:''}
      <div class="form-row">
        <div class="form-group"><label>Client</label>
          <select id="f-sfclient">
            <option value="">— Type new client below —</option>
            ${DB.sfClients.map(c=>`<option value="${c.id}" ${inv&&inv.clientId===c.id?'selected':''}>${esc(c.name)}${c.biz?' — '+esc(c.biz):''}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>Client Name (if new)</label><input id="f-clientName" type="text" value="${inv?esc(inv.clientName):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Status</label><select id="f-status">${SF_INVOICE_STATUSES.map(s=>`<option value="${s}" ${inv&&inv.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="form-group"><label>VAT Rate (%)</label><input id="f-vatRate" type="number" value="${inv?inv.vatRate:20}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Due Date</label><input id="f-dueDate" type="date" value="${inv?inv.dueDate:''}"></div>
        <div class="form-group"><label>Amount Paid (£)</label><input id="f-amountPaid" type="number" value="${inv?inv.amountPaid:0}"></div>
      </div>
      <label>Line Items</label>
      <table class="line-items-table" id="line-items-table"><thead><tr><th>Description</th><th style="width:60px;">Qty</th><th style="width:70px;">Unit</th><th style="width:90px;">Rate £</th><th style="width:90px;">Total</th><th></th></tr></thead>
        <tbody id="line-items-body"></tbody>
      </table>
      <button class="btn btn-ghost btn-sm mt-10" onclick="addLineItem()">+ Add Line Item</button>
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Notes / Payment Terms</label><textarea id="f-notes">${inv?esc(inv.notes):'Payment due within 14 days of invoice date.'}</textarea></div>
    </div>
    <div class="modal-foot">
      ${inv?`<button class="btn btn-danger" onclick="deleteSfInvoice('${inv.id}')">Delete</button>`:''}
      ${inv?`<button class="btn btn-ghost" onclick="printDoc('sf-invoice','${inv.id}')">PDF / Print</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSfInvoice('${inv?inv.id:''}')">${inv?'Save Changes':'Create Invoice'}</button>
    </div>
  `);
  renderLineItems();
}
function saveSfInvoice(id){
  const clientSelect = document.getElementById('f-sfclient').value;
  const client = clientSelect ? DB.sfClients.find(c=>c.id===clientSelect) : null;
  const clientNameVal = client ? client.name : document.getElementById('f-clientName').value.trim();
  if(!clientNameVal){ toast('Client is required','⚠️'); return; }
  const validItems = window._editingItems.filter(i=>i.desc||i.qty||i.rate);
  if(!validItems.length){ toast('Add at least one line item','⚠️'); return; }
  const dueDateVal = document.getElementById('f-dueDate').value;
  if(!dueDateVal){ toast('Due date is required','⚠️'); return; }
  const data = {
    clientId: client ? client.id : null,
    clientName: clientNameVal,
    status: document.getElementById('f-status').value,
    vatRate: Number(document.getElementById('f-vatRate').value)||0,
    dueDate: dueDateVal,
    amountPaid: Number(document.getElementById('f-amountPaid').value)||0,
    notes: document.getElementById('f-notes').value,
    items: validItems
  };
  DB.sfInvoices = DB.sfInvoices||[];
  if(id){ Object.assign(DB.sfInvoices.find(i=>i.id===id), data); toast('Invoice updated'); }
  else {
    const invoiceNumber = nextSfInvoiceNumber();
    DB.sfInvoices.push(Object.assign({id:uid(), invoiceNumber, createdAt:new Date().toISOString().slice(0,10)}, data));
    logActivity('SteadyFlow invoice created', invoiceNumber+' — '+data.clientName);
    toast('Invoice '+invoiceNumber+' created');
  }
  save(); closeModal(); renderPage(); renderNav();
}
function deleteSfInvoice(id){
  const inv0 = (DB.sfInvoices||[]).find(x=>x.id===id);
  confirmDelete('Delete '+(inv0?inv0.invoiceNumber:'this invoice')+'?', "This can't be undone.", ()=>{
    DB.sfInvoices = DB.sfInvoices.filter(i=>i.id!==id); save(); closeModal(); renderPage(); renderNav(); toast('Invoice deleted','🗑️');
  });
}

/* ---------- MODAL HELPERS ---------- */
function openModal(html, lg){
  document.getElementById('modal-root').innerHTML = `<div class="modal-overlay open" id="active-modal" onclick="if(event.target===this) closeModal()">
    <div class="modal ${lg?'modal-lg':''}">${html}</div>
  </div>`;
}
function closeModal(){
  document.getElementById('modal-root').innerHTML = '';
}
function openGlobalSearch(){
  openModal(`
    <div class="modal-body" style="padding-top:4px;">
      <input id="global-search-input" type="text" placeholder="Search jobs, invoices, customers, quotes, leads…" style="width:100%;font-size:16px;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--input-bg);color:var(--text);" oninput="runGlobalSearch(this.value)">
      <div id="global-search-results" style="margin-top:14px;max-height:400px;overflow-y:auto;"><div class="small muted" style="padding:8px 2px;">Type to search across jobs, invoices, customers, quotes, leads…</div></div>
    </div>
  `);
  setTimeout(()=>{ const el = document.getElementById('global-search-input'); if(el) el.focus(); }, 30);
}
function globalSearchIndex(){
  const items = [];
  (DB.jobs||[]).forEach(j=>items.push({type:'Job', label:j.jobNumber+' — '+j.customerName, sub:j.address||'', go:()=>{closeModal(); navigate('jobs', j.id);}}));
  (DB.invoices||[]).forEach(i=>items.push({type:'Invoice', label:i.invoiceNumber+' — '+i.customerName, sub:i.status||'', go:()=>{closeModal(); navigate('invoices'); openInvoiceModal(i.id);}}));
  (DB.customers||[]).forEach(c=>items.push({type:'Customer', label:c.name, sub:c.phone||c.email||'', go:()=>{closeModal(); navigate('customers'); openCustomerModal(c.id);}}));
  (DB.quotes||[]).forEach(q=>items.push({type:'Quote', label:q.quoteNumber+' — '+q.customerName, sub:q.status||'', go:()=>{closeModal(); navigate('quotes'); openQuoteModal(q.id);}}));
  (DB.leads||[]).forEach(l=>items.push({type:'Lead', label:l.name, sub:l.stage||'', go:()=>{closeModal(); navigate('leads'); openLeadModal(l.id);}}));
  (DB.sfClients||[]).forEach(c=>items.push({type:'SteadyFlow Client', label:c.name, sub:c.status||'', go:()=>{closeModal(); navigate('sf-clients'); openSfClientModal(c.id);}}));
  (DB.sfQuotes||[]).forEach(q=>items.push({type:'SteadyFlow Quote', label:q.quoteNumber+' — '+q.clientName, sub:q.status||'', go:()=>{closeModal(); navigate('sf-quotes'); openSfQuoteModal(q.id);}}));
  (DB.sfInvoices||[]).forEach(i=>items.push({type:'SteadyFlow Invoice', label:i.invoiceNumber+' — '+i.clientName, sub:i.status||'', go:()=>{closeModal(); navigate('sf-invoices'); openSfInvoiceModal(i.id);}}));
  return items;
}
function runGlobalSearch(q){
  const box = document.getElementById('global-search-results');
  const query = (q||'').trim().toLowerCase();
  if(!query){ box.innerHTML = '<div class="small muted" style="padding:8px 2px;">Type to search across jobs, invoices, customers, quotes, leads…</div>'; return; }
  const results = globalSearchIndex().filter(item=>(item.label+' '+item.sub).toLowerCase().includes(query)).slice(0,20);
  window._globalSearchResults = results;
  box.innerHTML = results.length ? results.map((r,i)=>`
    <div class="row-link" style="padding:10px 8px;border-bottom:1px solid var(--border);cursor:pointer;" onclick="window._globalSearchResults[${i}].go()">
      <span class="pill" style="margin-right:8px;">${esc(r.type)}</span><strong>${esc(r.label)}</strong>
      ${r.sub?`<div class="small muted" style="margin-top:2px;">${esc(r.sub)}</div>`:''}
    </div>`).join('') : '<div class="empty-state small">No matches</div>';
}
function confirmDelete(title, message, action){
  window._confirmDeleteAction = action;
  openModal(`
    <div class="modal-head"><h2>${esc(title)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p>${esc(message)}</p></div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-danger" onclick="window._confirmDeleteAction && window._confirmDeleteAction(); window._confirmDeleteAction=null;">Yes, delete it</button>
    </div>
  `);
}

/* ---------- AUTH ---------- */
function toggleSignup(){
  const box = document.getElementById('signup-fields');
  const btn = document.getElementById('signup-toggle-btn');
  const showing = box.style.display === 'block';
  box.style.display = showing ? 'none' : 'block';
  btn.textContent = showing ? 'First time here? Create your account' : 'Already have an account? Just sign in above';
}
function loginError(msg){
  const el = document.getElementById('login-error');
  el.textContent = msg; el.style.display = 'block';
}
async function doSignIn(){
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if(!email || !password) return loginError('Enter your email and password.');
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if(error) return loginError(error.message);
}
async function doSignUp(){
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if(!email || !password) return loginError('Enter an email and password first.');
  if(password.length < 8) return loginError('Password should be at least 8 characters.');
  const { error } = await sb.auth.signUp({ email, password });
  if(error) return loginError(error.message);
  loginError('Account created — check your email if confirmation is required, otherwise you\'re signed in.');
}
async function doSignOut(){
  await sb.auth.signOut();
}
function showLogin(){
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app-root').style.display = 'none';
}
function showApp(session){
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-root').style.display = 'block';
  const emailEl = document.getElementById('session-email');
  if(emailEl) emailEl.textContent = session.user.email;
  bootApp(session);
}

/* ---------- ROLE / ACCESS SCOPE ----------
   Most logins are full "owner" staff access (unchanged, everything visible).
   A "partner" profile (e.g. Fabs, once created) only ever sees the pages
   listed in its scope — enforced both in the nav and in navigate() itself,
   not just by hiding a menu item. Real data isolation for partner rows
   still lives in Postgres RLS on the paint_pipeline_* tables, this is the
   UI-side half of it. No partner accounts exist yet — every login today
   resolves to 'owner' unless a profiles row says otherwise.
   */
let CURRENT_PROFILE = {role:'owner', scope:null};
let CURRENT_USER_ID = null;
let CURRENT_USER_EMAIL = null;
const PARTNER_ALLOWED_ROUTES = {pipeline:true}; // scope for a 'partner' role — pipeline only, for now
async function loadUserProfile(userId){
  try{
    const {data} = await sb.from('profiles').select('*').eq('id', userId).maybeSingle();
    if(data) return {role: data.role||'owner', scope: data.scope||null};
  }catch(e){ console.warn('Profile lookup failed, defaulting to full access:', e); }
  return {role:'owner', scope:null};
}
function isRouteAllowed(route){
  if(CURRENT_PROFILE.role!=='partner') return true;
  return !!PARTNER_ALLOWED_ROUTES[route];
}

/* ---------- INIT ---------- */
let appBooted = false;
async function bootApp(session){
  if(appBooted) return;
  appBooted = true;
  document.getElementById('content').innerHTML = '<div class="empty-state">Loading your data…</div>';
  CURRENT_USER_ID = session && session.user ? session.user.id : null;
  CURRENT_USER_EMAIL = session && session.user ? session.user.email : null;
  CURRENT_PROFILE = session && session.user ? await loadUserProfile(session.user.id) : {role:'owner', scope:null};
  await loadPaintPipelineData();
  subscribePaintPipelineRealtime();
  if(CURRENT_PROFILE.role==='partner'){
    currentRoute = 'pipeline';
  } else {
    const gotCloudCopy = await pullCloudState();
    if(!gotCloudCopy) pushCloudState(); // first run on this account — seed the cloud from whatever's local
  }
  renderNav();
  renderPage();
  document.getElementById('sidebar-toggle').onclick = ()=>{
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-backdrop').style.display = document.getElementById('sidebar').classList.contains('open') ? 'block' : 'none';
  };
  document.addEventListener('keydown', (e)=>{
    if(CURRENT_PROFILE.role==='partner') return;
    if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); openGlobalSearch(); }
  });
  if(CURRENT_PROFILE.role!=='partner'){
    syncLeadsFromSupabase(false);
    syncCallsFromSupabase(false);
    setInterval(()=>{ syncLeadsFromSupabase(false); syncCallsFromSupabase(false); }, 60000);
  }
}

function startApp(){
  sb.auth.getSession().then(({ data: { session } })=>{
    if(session) showApp(session); else showLogin();
  });
  sb.auth.onAuthStateChange((event, session)=>{
    if(session) showApp(session);
    else { appBooted = false; showLogin(); }
  });
}

document.addEventListener('DOMContentLoaded', startApp);

/* ===================== DASHBOARD ===================== */
function calcInvoiceTotal(inv){
  const sub = inv.items.reduce((s,i)=>s+(i.qty*i.rate),0);
  const vat = inv.vatRate ? sub*(inv.vatRate/100) : 0;
  const total = sub+vat;
  const retentionPct = Number(inv.retentionPct)||0;
  const retention = total*(retentionPct/100);
  const dueNow = total-retention;
  return {sub, vat, total, retentionPct, retention, dueNow};
}
function calcQuoteTotal(q){
  const sub = q.items.reduce((s,i)=>s+(i.qty*i.rate),0);
  const vat = q.vatRate ? sub*(q.vatRate/100) : 0;
  return {sub, vat, total: sub+vat};
}

/* ---------- MESSAGE OF THE DAY (rotates daily, no repeats two days running) ---------- */
const MOTD_QUOTES = [
  "Nobody's coming to save you. Get up and go build it.",
  "Discipline is choosing between what you want now and what you want most.",
  "The job doesn't quote itself — go get it.",
  "Comfort is the enemy of everything you say you want.",
  "You don't get to be tired today. Today is a work day.",
  "Excuses don't pay invoices. Action does.",
  "Nobody remembers the day you almost started.",
  "Small wins, every single day — that's the whole game.",
  "The competition isn't outworking you. Don't let them start.",
  "Do the hard call first. Everything after gets easier.",
  "You don't rise to your goals, you fall to your habits — so fix the habits.",
  "One more email. One more call. That's the difference.",
  "Nobody built a business on a good day. They built it on the bad ones they showed up for anyway.",
  "Your future self is watching what you do in the next hour.",
  "Stop waiting for motivation. Discipline shows up when motivation doesn't.",
  "The plan means nothing without the follow-through. Go follow through.",
  "Every job done right is an advert you didn't pay for.",
  "Slow is fine. Stopped is not.",
  "You're either building the business or building an excuse. Pick one.",
  "Today's effort is tomorrow's invoice.",
  "Nobody is coming to do the outreach for you. Send the email.",
  "Win the morning, win the day.",
  "The version of you that hits target isn't lucky — they just didn't quit in June.",
  "Uncomfortable and consistent beats comfortable and occasional, every time."
];
function motdForToday(){
  const start = new Date(new Date().getFullYear(),0,0);
  const dayOfYear = Math.floor((new Date()-start)/86400000);
  return MOTD_QUOTES[dayOfYear % MOTD_QUOTES.length];
}
function motdBanner(){
  return `<div class="card" style="margin-bottom:20px;background:linear-gradient(120deg, rgba(225,29,42,.14), rgba(0,169,157,.12));border:1px solid var(--border);">
    <div class="small muted" style="letter-spacing:1.5px;font-weight:800;margin-bottom:8px;">⚡ MESSAGE OF THE DAY</div>
    <div style="font-size:20px;font-weight:800;line-height:1.4;">"${esc(motdForToday())}"</div>
  </div>`;
}

/* ---------- PRODUCTIVITY STREAK (consecutive days with logged activity, across both businesses) ---------- */
function currentStreak(){
  const days = new Set((DB.activityLog||[]).map(a=>(a.at||'').slice(0,10)).filter(Boolean));
  (DB.sfActivity||[]).forEach(a=>{ if((Number(a.emails)||0)>0 || (Number(a.calls)||0)>0) days.add(a.date); });
  let streak = 0;
  let cursor = new Date();
  while(true){
    const ds = cursor.toISOString().slice(0,10);
    if(days.has(ds)){ streak++; cursor.setDate(cursor.getDate()-1); }
    else break;
  }
  return streak;
}

/* ---------- STEADY INC — COMBINED OVERVIEW DASHBOARD ---------- */
function view_dashboard(){
  const now = new Date(); const thisMonth = now.getMonth(), thisYear = now.getFullYear();

  const swPaid = DB.invoices.filter(i=>i.status==='paid');
  const swMonthRevenue = swPaid.filter(i=>{ const d=new Date(i.createdAt); return d.getMonth()===thisMonth && d.getFullYear()===thisYear; }).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const swYtdRevenue = swPaid.filter(i=> new Date(i.createdAt).getFullYear()===thisYear).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const swOutstanding = DB.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0);

  const sfPaid = (DB.sfInvoices||[]).filter(i=>i.status==='paid');
  const sfMonthRevenue = sfPaid.filter(i=>{ const d=new Date(i.createdAt); return d.getMonth()===thisMonth && d.getFullYear()===thisYear; }).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const sfYtdRevenue = sfPaid.filter(i=> new Date(i.createdAt).getFullYear()===thisYear).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const sfOutstanding = (DB.sfInvoices||[]).filter(i=>i.status!=='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const sfMrr = (DB.sfClients||[]).filter(c=>c.status==='active').reduce((s,c)=>s+(Number(c.mrr)||0),0);

  const combinedMonthRevenue = swMonthRevenue + sfMonthRevenue;
  const combinedYtdRevenue = swYtdRevenue + sfYtdRevenue;
  const combinedOutstanding = swOutstanding + sfOutstanding;
  const streak = currentStreak();
  const goalsCount = GOALS_CACHE ? GOALS_CACHE.length : null;

  const kpis = [
    {label:'Combined Revenue This Month', value:fmt(combinedMonthRevenue), delta:'SteadyWorks + SteadyFlow', up:true, icon:'💰', bg:'#FFF7ED'},
    {label:'Combined YTD Revenue', value:fmt(combinedYtdRevenue), delta:'Year to date', up:true, icon:'📈', bg:'#F0FDF4'},
    {label:'Combined Outstanding', value:fmt(combinedOutstanding), delta:'Across both businesses', up:false, icon:'🧾', bg:'#FEF2F2'},
    {label:'Day Streak', value:streak+(streak===1?' day':' days'), delta: streak>0?'Keep it going 🔥':'Log something today', up:streak>0, icon:'🔥', bg:'#FFFBEB'},
    {label:'Active Goals', value: goalsCount===null?'…':goalsCount, delta:'Across both businesses', up:true, icon:'🎯', bg:'#EFF6FF'},
    {label:'SteadyFlow MRR', value:fmt(sfMrr), delta:'Active clients', up:true, icon:'💻', bg:'#F5F3FF'}
  ];
  const kpiHtml = kpis.map(k=>`
    <div class="card kpi-card">
      <div class="kpi-icon" style="background:${k.bg}">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <span class="kpi-delta ${k.up?'up':'down'}">${k.up?'▲':'▼'} ${k.delta}</span>
    </div>`).join('');

  return `
  ${motdBanner()}
  <div class="grid grid-3" style="margin-bottom:20px;">${kpiHtml}</div>

  <div class="grid grid-2" style="margin-bottom:20px;align-items:start;">
    <div class="card" style="cursor:pointer;" onclick="navigate('sw-dashboard')">
      <div class="card-title">🛠️ SteadyWorks <span class="small" style="color:var(--gold);font-weight:700;">Open dashboard →</span></div>
      <div class="grid grid-2" style="gap:10px;">
        <div><div class="small muted">Revenue this month</div><div style="font-size:20px;font-weight:800;">${fmt(swMonthRevenue)}</div></div>
        <div><div class="small muted">Outstanding</div><div style="font-size:20px;font-weight:800;">${fmt(swOutstanding)}</div></div>
      </div>
    </div>
    <div class="card" style="cursor:pointer;" onclick="navigate('sf-dashboard')">
      <div class="card-title">💻 SteadyFlow <span class="small" style="color:var(--teal);font-weight:700;">Open dashboard →</span></div>
      <div class="grid grid-2" style="gap:10px;">
        <div><div class="small muted">MRR (active)</div><div style="font-size:20px;font-weight:800;">${fmt(sfMrr)}</div></div>
        <div><div class="small muted">Outstanding</div><div style="font-size:20px;font-weight:800;">${fmt(sfOutstanding)}</div></div>
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:20px;">
    <div class="card-title">Revenue — Combined <span class="muted small">Last 6 months</span></div>
    <div style="position:relative;height:220px;width:100%;"><canvas id="chartCombinedRevenue"></canvas></div>
  </div>

  <div class="grid grid-3" style="margin-bottom:20px;align-items:start;">
    ${dashboardGoalsHtml('all','dashboard')}
  </div>
  `;
}
function afterRender_dashboard(){
  const months = [];
  const now = new Date();
  for(let i=5;i>=0;i--){ months.push(new Date(now.getFullYear(), now.getMonth()-i, 1)); }
  const labels = months.map(d=>d.toLocaleDateString('en-GB',{month:'short'}));
  const swByMonth = months.map(d=> DB.invoices.filter(inv=>inv.status==='paid').filter(inv=>{
    const id=new Date(inv.createdAt); return id.getMonth()===d.getMonth() && id.getFullYear()===d.getFullYear();
  }).reduce((s,inv)=>s+calcInvoiceTotal(inv).total,0));
  const sfByMonth = months.map(d=> (DB.sfInvoices||[]).filter(inv=>inv.status==='paid').filter(inv=>{
    const id=new Date(inv.createdAt); return id.getMonth()===d.getMonth() && id.getFullYear()===d.getFullYear();
  }).reduce((s,inv)=>s+calcInvoiceTotal(inv).total,0));
  chartSafe('chartCombinedRevenue','bar',{
    labels, datasets:[
      {label:'SteadyWorks', data:swByMonth, backgroundColor:'#E11D2A', borderRadius:6, stack:'rev'},
      {label:'SteadyFlow', data:sfByMonth, backgroundColor:'#00A99D', borderRadius:6, stack:'rev'}
    ]
  },{ plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:11}}}}, scales:{x:{stacked:true}, y:{stacked:true, ticks:{callback:v=>'£'+(v/1000)+'k'}}} });
}

function view_sw_dashboard(){
  const now = new Date();
  const thisMonth = now.getMonth(), thisYear = now.getFullYear();

  const paidInvoices = DB.invoices.filter(i=>i.status==='paid');
  const monthRevenue = paidInvoices.filter(i=>{
    const d = new Date(i.createdAt); return d.getMonth()===thisMonth && d.getFullYear()===thisYear;
  }).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);

  const ytdRevenue = paidInvoices.filter(i=> new Date(i.createdAt).getFullYear()===thisYear)
    .reduce((s,i)=>s+calcInvoiceTotal(i).total,0);

  const target = DB.settings.monthlyTargets[thisMonth] || (DB.settings.annualTarget/12);
  const pctTarget = target? Math.round((monthRevenue/target)*100) : 0;

  const outstanding = DB.invoices.filter(i=>i.status!=='paid')
    .reduce((s,i)=>s+calcInvoiceTotal(i).total,0);

  const overdueAmt = DB.invoices.filter(i=>i.status==='overdue')
    .reduce((s,i)=>s+calcInvoiceTotal(i).total,0);

  const totalExpenses = DB.expenses.filter(e=>{
    const d = new Date(e.date); return d.getMonth()===thisMonth && d.getFullYear()===thisYear;
  }).reduce((s,e)=>s+Number(e.amount),0);

  // Painting & decorating jobs from the Quote-to-Job Pipeline (SteadyWorks × Fabs)
  // are subcontracted out, so their contribution to profit here is only
  // SteadyWorks's share — after the reinvestment reserve comes off the top
  // and what's left is split with Fabs (paintSplit() handles both steps).
  const paintThisMonth = paintRecords().filter(r=>{
    const d = new Date(r.dateAccepted); return !isNaN(d) && d.getMonth()===thisMonth && d.getFullYear()===thisYear;
  });
  const paintSwShareThisMonth = paintThisMonth.reduce((s,r)=>s+paintSplit(r).swShare,0);
  const paintReinvestThisMonth = paintThisMonth.reduce((s,r)=>s+paintSplit(r).reinvestment,0);

  const profit = monthRevenue - totalExpenses + paintSwShareThisMonth;

  const quotesSent = DB.quotes.filter(q=>['sent','approved','declined','expired'].includes(q.status)).length;
  const quotesWon = DB.quotes.filter(q=>q.status==='approved').length;
  const conversionRate = quotesSent? Math.round((quotesWon/quotesSent)*100) : 0;

  const jobValues = DB.jobs.map(j=>j.expectedRevenue||0).filter(v=>v>0);
  const avgJobValue = jobValues.length? Math.round(jobValues.reduce((a,b)=>a+b,0)/jobValues.length) : 0;

  const jobsThisMonth = DB.jobs.filter(j=>{const d=new Date(j.startDate); return d.getMonth()===thisMonth && d.getFullYear()===thisYear;}).length;
  const completedJobs = DB.jobs.filter(j=>j.status==='completed' || j.status==='invoiced').length;
  const newLeads = DB.leads.filter(l=>{const d=new Date(l.createdAt); const dd=Math.round((now-d)/86400000); return dd<=30;}).length;

  const kpis = [
    {label:'Revenue This Month', value:fmt(monthRevenue), delta: pctTarget+'% of target', up: pctTarget>=80, icon:'💰', bg:'#FFF7ED'},
    {label:'YTD Revenue', value:fmt(ytdRevenue), delta:'Year to date', up:true, icon:'📈', bg:'#F0FDF4'},
    {label:'Outstanding Invoices', value:fmt(outstanding), delta: fmt(overdueAmt)+' overdue', up:false, icon:'🧾', bg:'#FEF2F2'},
    {label:'Profit (this month)', value:fmt(profit), delta: profit>=0?'Healthy margin':'Below cost', up: profit>=0, icon:'📊', bg:'#F5F3FF'},
    {label:'Quote Conversion', value:conversionRate+'%', delta: quotesWon+' of '+quotesSent+' won', up: conversionRate>=40, icon:'✅', bg:'#ECFDF5'},
    {label:'Average Job Value', value:fmt(avgJobValue), delta:'Across all jobs', up:true, icon:'🛠️', bg:'#FFFBEB'},
    {label:'Jobs This Month', value:jobsThisMonth, delta: completedJobs+' completed total', up:true, icon:'📦', bg:'#EFF6FF'},
    {label:'New Leads (30d)', value:newLeads, delta:'Pipeline activity', up:true, icon:'🎯', bg:'#FDF2F8'},
    {label:'Painting × Fabs — Your Share', value:fmt(paintSwShareThisMonth), delta: fmt(paintReinvestThisMonth)+' held in reserve', up:true, icon:'🎨', bg:'#F5F3FF'}
  ];

  const kpiHtml = kpis.map(k=>`
    <div class="card kpi-card">
      <div class="kpi-icon" style="background:${k.bg}">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <span class="kpi-delta ${k.up?'up':'down'}">${k.up?'▲':'▼'} ${k.delta}</span>
    </div>`).join('');

  // upcoming workload (next 14 days)
  const upcoming = DB.jobs.filter(j=>{
    const dd = daysUntil(j.startDate);
    return dd!==null && dd>=0 && dd<=14 && !['completed','cancelled'].includes(j.status);
  }).sort((a,b)=>new Date(a.startDate)-new Date(b.startDate)).slice(0,6);

  const upcomingHtml = upcoming.length ? upcoming.map(j=>`
    <tr class="row-link" onclick="navigate('jobs','${j.id}')">
      <td><strong>${esc(j.jobNumber)}</strong></td>
      <td>${esc(j.customerName)}</td>
      <td>${fmtDate(j.startDate)}</td>
      <td>${esc(j.assignedTo)}</td>
      <td>${statusPill(j.status)}</td>
    </tr>`).join('') : `<tr><td colspan="5" class="muted" style="text-align:center;padding:20px;">No upcoming jobs in the next 14 days</td></tr>`;

  const monthLabel = now.toLocaleDateString('en-GB',{month:'long'});

  return `
  <div class="grid grid-4" style="margin-bottom:20px;">${kpiHtml}</div>

  <div class="grid grid-3" style="margin-bottom:20px;align-items:start;">
    ${progressBarCard('Monthly Revenue Target', fmt(monthRevenue)+' of '+fmt(target)+' — '+monthLabel, pctTarget)}
    ${dashboardGoalsHtml('steadyworks','sw-dashboard')}
  </div>

  <div class="grid grid-2" style="margin-bottom:20px;">
    <div class="card">
      <div class="card-title">Revenue: Target vs Actual <span class="muted small">Last 6 months</span></div>
      <div style="position:relative;height:220px;width:100%;"><canvas id="chartTargetActual"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Cashflow Forecast <span class="muted small">Next 6 weeks</span></div>
      <div style="position:relative;height:220px;width:100%;"><canvas id="chartCashflow"></canvas></div>
    </div>
  </div>

  <div class="grid grid-3" style="margin-bottom:20px;">
    <div class="card">
      <div class="card-title">Jobs Completed <span class="muted small">By month</span></div>
      <div style="position:relative;height:200px;width:100%;"><canvas id="chartJobs"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Quote Conversion</div>
      <div style="position:relative;height:200px;width:100%;"><canvas id="chartConversion"></canvas></div>
    </div>
    <div class="card">
      <div class="card-title">Leads by Source</div>
      <div style="position:relative;height:200px;width:100%;"><canvas id="chartLeadSource"></canvas></div>
    </div>
  </div>

  <div class="grid grid-2" style="margin-bottom:20px;align-items:start;">
    <div class="card">
      <div class="card-title">Upcoming Workload <a class="small" style="color:var(--gold);font-weight:700;" onclick="navigate('jobs')">View all jobs →</a></div>
      <table>
        <thead><tr><th>Job #</th><th>Customer</th><th>Start</th><th>Engineer</th><th>Status</th></tr></thead>
        <tbody>${upcomingHtml}</tbody>
      </table>
    </div>
    <div class="card">
      <div class="card-title">Today's Jobs <span class="muted small" id="dash-map-count"></span></div>
      <div id="dash-map" style="height:280px;border-radius:10px;overflow:hidden;background:var(--card-alt);position:relative;"></div>
    </div>
  </div>
  `;
}

function statusPill(status){
  const map = {
    'new':'st-new','contacted':'st-contacted','quoted':'st-quoted','won':'st-won','scheduled':'st-scheduled',
    'active':'st-active','in-progress':'st-progress','completed':'st-completed','invoiced':'st-invoiced',
    'paid':'st-paid','overdue':'st-overdue','draft':'st-draft','sent':'st-sent','approved':'st-won',
    'declined':'st-declined','on-hold':'st-onhold','cancelled':'st-cancelled','expired':'st-expired',
    'partial':'st-onhold'
  };
  const cls = map[status] || 'st-draft';
  const label = status.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  return `<span class="pill ${cls}"><span class="pill-dot" style="background:currentColor;"></span>${label}</span>`;
}
function priorityPill(p){
  const cls = p==='High' ? 'priority-high' : p==='Low' ? 'priority-low' : 'priority-med';
  return `<span class="pill ${cls}">${esc(p)}</span>`;
}

function afterRender_sw_dashboard(){
  const months = [];
  const now = new Date();
  for(let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push(d);
  }
  const labels = months.map(d=>d.toLocaleDateString('en-GB',{month:'short'}));
  const actuals = months.map(d=>{
    return DB.invoices.filter(inv=>inv.status==='paid').filter(inv=>{
      const id = new Date(inv.createdAt); return id.getMonth()===d.getMonth() && id.getFullYear()===d.getFullYear();
    }).reduce((s,inv)=>s+calcInvoiceTotal(inv).total,0);
  });
  const targets = months.map(d=> DB.settings.monthlyTargets[d.getMonth()] || (DB.settings.annualTarget/12));

  chartSafe('chartTargetActual','bar',{
    labels, datasets:[
      {label:'Target', data:targets, backgroundColor:'rgba(17,17,17,0.08)', borderRadius:6},
      {label:'Actual', data:actuals, backgroundColor:'#E11D2A', borderRadius:6}
    ]
  },{ plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:11}}}}, scales:{y:{ticks:{callback:v=>'£'+(v/1000)+'k'}}} });

  // cashflow forecast: outstanding invoices grouped by due week
  const weeks = []; const weekLabels = [];
  for(let i=0;i<6;i++){ weeks.push(i); weekLabels.push('Wk '+(i+1)); }
  const cashflow = weeks.map(w=>{
    const start = new Date(); start.setDate(start.getDate()+w*7);
    const end = new Date(start); end.setDate(end.getDate()+7);
    return DB.invoices.filter(inv=>inv.status!=='paid').filter(inv=>{
      const dd = new Date(inv.dueDate); return dd>=start && dd<end;
    }).reduce((s,inv)=>s+calcInvoiceTotal(inv).total,0);
  });
  chartSafe('chartCashflow','line',{
    labels:weekLabels, datasets:[{label:'Expected Inflow', data:cashflow, borderColor:'#22C55E', backgroundColor:'rgba(34,197,94,0.12)', fill:true, tension:.35}]
  },{ plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>'£'+v}}} });

  const jobsCompleted = months.map(d=> DB.jobs.filter(j=>{
    if(!['completed','invoiced'].includes(j.status)) return false;
    const jd = new Date(j.endDate||j.startDate); return jd.getMonth()===d.getMonth() && jd.getFullYear()===d.getFullYear();
  }).length);
  chartSafe('chartJobs','bar',{ labels, datasets:[{label:'Jobs', data:jobsCompleted, backgroundColor:'#1A1A1A', borderRadius:6}] },
    {plugins:{legend:{display:false}}});

  const qStatuses = ['draft','sent','approved','declined','expired'];
  const qCounts = qStatuses.map(s=>DB.quotes.filter(q=>q.status===s).length);
  chartSafe('chartConversion','doughnut',{
    labels:['Draft','Sent','Approved','Declined','Expired'],
    datasets:[{data:qCounts, backgroundColor:['#D1D5DB','#7DD3FC','#22C55E','#EF4444','#FCA5A5']}]
  },{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}});

  const sources = {};
  DB.leads.forEach(l=>{ sources[l.source] = (sources[l.source]||0)+1; });
  chartSafe('chartLeadSource','pie',{
    labels:Object.keys(sources), datasets:[{data:Object.values(sources), backgroundColor:['#E11D2A','#1A1A1A','#22C55E','#F59E0B','#7C3AED','#0EA5E9']}]
  },{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}});

  renderDashboardMap();
}

/* ---------- TODAY'S JOBS MAP ---------- */
let _lastGeocodeAt = 0;
async function geocodeAddress(address){
  if(!address || !address.trim()) return null;
  const key = address.trim().toLowerCase();
  if(DB.geocodeCache[key]) return DB.geocodeCache[key];
  const wait = 1100 - (Date.now() - _lastGeocodeAt);
  if(wait > 0) await new Promise(r=>setTimeout(r, wait));
  _lastGeocodeAt = Date.now();
  try{
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`;
    const res = await fetch(url);
    if(!res.ok) return null;
    const results = await res.json();
    if(!results.length) return null;
    const coords = { lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon) };
    DB.geocodeCache[key] = coords;
    save();
    return coords;
  }catch(e){ return null; }
}
async function renderDashboardMap(){
  const mapEl = document.getElementById('dash-map');
  const countEl = document.getElementById('dash-map-count');
  if(!mapEl) return;

  const todays = DB.jobs.filter(j=>{
    if(j.status==='cancelled') return false;
    const start = daysUntil(j.startDate);
    const end = j.endDate ? daysUntil(j.endDate) : start;
    if(start===null) return false;
    return start<=0 && end>=0;
  });

  if(!todays.length){
    mapEl.innerHTML = '<div class="muted small" style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;padding:20px;">No jobs scheduled for today</div>';
    if(countEl) countEl.textContent = '';
    return;
  }
  if(countEl) countEl.textContent = todays.length + (todays.length===1?' job':' jobs');

  if(window._dashMap){ window._dashMap.remove(); window._dashMap = null; }
  mapEl.innerHTML = '';
  const map = L.map('dash-map', { zoomControl:true, attributionControl:true });
  window._dashMap = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:18, attribution:'© OpenStreetMap contributors'
  }).addTo(map);

  const points = [];
  for(const j of todays){
    const coords = await geocodeAddress(j.address);
    if(!coords) continue;
    points.push(coords);
    const marker = L.marker([coords.lat, coords.lng]).addTo(map);
    marker.bindPopup(`<strong>${esc(j.jobNumber)}</strong><br>${esc(j.customerName)}<br>${esc(j.assignedTo||'Unassigned')}<br><a href="#" onclick="navigate('jobs','${j.id}');return false;">View job →</a>`);
  }

  if(points.length){
    map.fitBounds(points.map(p=>[p.lat,p.lng]), {padding:[30,30], maxZoom:14});
  } else {
    // fallback: couldn't geocode anything, center on East London
    map.setView([51.5560, 0.0500], 11);
    mapEl.insertAdjacentHTML('beforeend', '<div class="muted small" style="position:absolute;bottom:8px;left:8px;background:#fff;padding:4px 8px;border-radius:6px;">Couldn\'t locate today\'s job addresses</div>');
  }
  setTimeout(()=>map.invalidateSize(), 50);
}

if(window.Chart){
  Chart.defaults.color = '#9A9CA5';
  Chart.defaults.borderColor = '#262A38';
}
window._charts = window._charts || {};
function chartSafe(canvasId, type, data, options){
  const el = document.getElementById(canvasId);
  if(!el) return;
  if(window._charts[canvasId]) window._charts[canvasId].destroy();
  window._charts[canvasId] = new Chart(el, {type, data, options: Object.assign({responsive:true, maintainAspectRatio:false}, options||{})});
}

/* ===================== LEADS (KANBAN) ===================== */
const LEAD_STAGES = ['New Lead','Contacted','Quoted','Won','Scheduled','In Progress','Completed','Invoice Sent','Paid'];

function view_leads(){
  const cols = LEAD_STAGES.map(stage=>{
    const items = DB.leads.filter(l=>l.stage===stage);
    const total = items.reduce((s,l)=>s+(Number(l.value)||0),0);
    return `<div class="kanban-col" data-stage="${esc(stage)}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="dropLead(event,'${esc(stage)}')">
      <div class="kanban-col-head"><span>${esc(stage)} (${items.length})</span><span>${fmt(total)}</span></div>
      ${items.map(l=>`
        <div class="kanban-card" draggable="true" ondragstart="dragLead(event,'${l.id}')" onclick="openLeadModal('${l.id}')">
          <div class="kc-name">${esc(l.name)}</div>
          <div class="kc-meta">${esc(l.source)} · ${l.value?fmt(l.value):'No value set'}</div>
          ${l.depositStatus?`<div class="kc-meta">Deposit: ${esc(l.depositStatus)}</div>`:''}
        </div>`).join('') || '<div class="muted small" style="padding:8px 4px;">No leads</div>'}
    </div>`;
  }).join('');
  return `<div class="kanban">${cols}</div>`;
}
function afterRender_leads(){}

let _dragLeadId = null;
function dragLead(ev,id){ _dragLeadId = id; ev.target.classList.add('dragging'); }
function dropLead(ev, stage){
  ev.currentTarget.classList.remove('drag-over');
  const lead = DB.leads.find(l=>l.id===_dragLeadId);
  if(lead){ lead.stage = stage; save(); renderPage(); toast('Lead moved to '+stage); }
}

function openLeadModal(id){
  const lead = id ? DB.leads.find(l=>l.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${lead?'Edit Lead':'New Lead'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Name / Company</label><input id="f-name" type="text" value="${lead?esc(lead.name):''}"></div>
        <div class="form-group"><label>Stage</label><select id="f-stage">${LEAD_STAGES.map(s=>`<option ${lead&&lead.stage===s?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="f-phone" type="text" value="${lead?esc(lead.phone):''}"></div>
        <div class="form-group"><label>Email</label><input id="f-email" type="email" value="${lead?esc(lead.email):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Lead Source</label><select id="f-source">${['Website','Google','Facebook','Referral','Tender','Repeat Customer','SMS','Email & WhatsApp','Other'].map(s=>`<option ${lead&&lead.source===s?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="form-group"><label>Quote Value (£)</label><input id="f-value" type="number" value="${lead?lead.value:''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Quote Ref</label><input id="f-quoteref" type="text" placeholder="e.g. SW-20260823-001" value="${lead&&lead.quoteRef?esc(lead.quoteRef):''}"></div>
        <div class="form-group"><label>Job Type</label><select id="f-jobtype">${['Labour only','Labour & materials'].map(s=>`<option ${lead&&lead.jobType===s?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Deposit %</label><input id="f-depositpct" type="number" value="${lead&&lead.depositPct!=null?lead.depositPct:''}" placeholder="e.g. 40"></div>
        <div class="form-group"><label>Deposit Status</label><select id="f-depositstatus">${['Not taken','Awaiting','Taken','Paid'].map(s=>`<option ${lead&&lead.depositStatus===s?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      <div class="form-group"><label>Scheduled Date</label><input id="f-scheduled" type="date" value="${lead&&lead.scheduledDate?lead.scheduledDate:''}"></div>
      <div class="form-group"><label>Notes <span class="small muted">(address, contact method, anything else from the original quote)</span></label><textarea id="f-notes">${lead?esc(lead.notes):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${lead?`<button class="btn btn-danger" onclick="deleteLead('${lead.id}')">Delete</button>`:''}
      ${lead?`<button class="btn btn-dark" onclick="convertLeadToJob('${lead.id}')">Convert to Job</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveLead('${lead?lead.id:''}')">${lead?'Save Changes':'Create Lead'}</button>
    </div>
  `);
}
function saveLead(id){
  const data = {
    name: document.getElementById('f-name').value.trim() || 'Unnamed Lead',
    stage: document.getElementById('f-stage').value,
    phone: document.getElementById('f-phone').value,
    email: document.getElementById('f-email').value,
    source: document.getElementById('f-source').value,
    value: Number(document.getElementById('f-value').value)||0,
    quoteRef: document.getElementById('f-quoteref').value.trim(),
    jobType: document.getElementById('f-jobtype').value,
    depositPct: document.getElementById('f-depositpct').value ? Number(document.getElementById('f-depositpct').value) : null,
    depositStatus: document.getElementById('f-depositstatus').value,
    scheduledDate: document.getElementById('f-scheduled').value,
    notes: document.getElementById('f-notes').value
  };
  if(id){ Object.assign(DB.leads.find(l=>l.id===id), data); toast('Lead updated'); }
  else { DB.leads.push(Object.assign({id:uid(), createdAt:new Date().toISOString().slice(0,10)}, data)); toast('Lead created'); }
  save(); closeModal(); renderPage();
}
function deleteLead(id){
  const l0 = DB.leads.find(x=>x.id===id);
  confirmDelete('Delete '+(l0?l0.name:'this lead')+'?', "This can't be undone.", ()=>{
    DB.leads = DB.leads.filter(l=>l.id!==id); save(); closeModal(); renderPage(); toast('Lead deleted','🗑️');
  });
}
function convertLeadToJob(id){
  const lead = DB.leads.find(l=>l.id===id);
  if(!lead) return;
  closeModal();
  openJobModal(null, {customerName:lead.name, leadId:lead.id, source:lead.source});
  toast('Building job from lead…');
}

/* ===================== FOLLOW UPS ===================== */
function followupStatusPill(status){
  const map = {new:['New','st-new'], contacted:['Contacted','st-quoted'], done:['Done','st-completed']};
  const [label, cls] = map[status] || map.new;
  return `<span class="pill ${cls}"><span class="pill-dot" style="background:currentColor;"></span>${label}</span>`;
}
function view_followups(){
  const rows = DB.followUps.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(f=>`
    <tr>
      <td><strong>${esc(f.name||'Unknown caller')}</strong>${f.source==='Missed Call'?'<div class="small muted">📞 Missed Call</div>':'<div class="small muted">Manual</div>'}</td>
      <td>${esc(f.phone||'—')}</td>
      <td>${esc(f.email||'—')}</td>
      <td>${fmtDate(f.createdAt)}</td>
      <td>${followupStatusPill(f.status)}</td>
      <td style="white-space:nowrap;">
        ${f.phone?`<a class="icon-btn" href="tel:${esc(f.phone)}" title="Call">📞</a>`:''}
        <button class="icon-btn" onclick="openFollowUpContactModal('${f.id}','email')" title="Email">✉️</button>
        ${f.phone?`<button class="icon-btn" onclick="openFollowUpContactModal('${f.id}','sms')" title="Text">💬</button>`:''}
        <button class="icon-btn" onclick="openFollowUpModal('${f.id}')" title="Edit">✎</button>
        ${f.status!=='done'?`<button class="icon-btn" onclick="markFollowUpDone('${f.id}')" title="Mark Done">✓</button>`:''}
        <button class="icon-btn" onclick="deleteFollowUp('${f.id}')" title="Delete">✕</button>
      </td>
    </tr>`).join('');
  return `
  <div class="card">
    <table>
      <thead><tr><th>Caller</th><th>Phone</th><th>Email</th><th>Received</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No follow-ups yet — missed calls will land here automatically, or log one manually</td></tr>'}</tbody>
    </table>
  </div>`;
}
function openFollowUpModal(id){
  const f = id ? DB.followUps.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${f?'Edit Follow-up':'Log Missed Call'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Name (if known)</label><input id="f-name" type="text" value="${f?esc(f.name):''}" placeholder="Unknown caller"></div>
        <div class="form-group"><label>Status</label><select id="f-status">
          <option value="new" ${f&&f.status==='new'?'selected':''}>New</option>
          <option value="contacted" ${f&&f.status==='contacted'?'selected':''}>Contacted</option>
          <option value="done" ${f&&f.status==='done'?'selected':''}>Done</option>
        </select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="f-phone" type="text" value="${f?esc(f.phone):''}"></div>
        <div class="form-group"><label>Email</label><input id="f-email" type="email" value="${f?esc(f.email):''}"></div>
      </div>
      <div class="form-group"><label>Notes</label><textarea id="f-notes">${f?esc(f.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${f?`<button class="btn btn-danger" onclick="deleteFollowUp('${f.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveFollowUp('${f?f.id:''}')">${f?'Save Changes':'Log Missed Call'}</button>
    </div>
  `);
}
function saveFollowUp(id){
  const data = {
    name: document.getElementById('f-name').value.trim() || 'Unknown caller',
    status: document.getElementById('f-status').value,
    phone: document.getElementById('f-phone').value.trim(),
    email: document.getElementById('f-email').value.trim(),
    notes: document.getElementById('f-notes').value
  };
  if(id){ Object.assign(DB.followUps.find(f=>f.id===id), data); toast('Follow-up updated'); }
  else { DB.followUps.push(Object.assign({id:uid(), source:'Manual', createdAt:new Date().toISOString().slice(0,10)}, data)); toast('Missed call logged'); }
  save(); closeModal(); renderPage();
}
function deleteFollowUp(id){
  confirmDelete('Remove this follow-up?', "This can't be undone.", ()=>{
    DB.followUps = DB.followUps.filter(f=>f.id!==id);
    save(); closeModal(); renderPage(); toast('Follow-up removed','🗑️');
  });
}
function markFollowUpDone(id){
  const f = DB.followUps.find(x=>x.id===id);
  if(!f) return;
  f.status = 'done';
  save(); renderPage(); toast('Marked as done');
  if(f.supabaseId) sb.from('calls').update({followed_up:true}).eq('id', f.supabaseId).then(()=>{}).catch(()=>{});
}
function mergeTemplate(str, f){
  return (str||'').replace(/\{\{\s*name\s*\}\}/gi, f.name||'there').replace(/\{\{\s*phone\s*\}\}/gi, f.phone||'');
}
function openFollowUpContactModal(id, channel){
  const f = DB.followUps.find(x=>x.id===id);
  if(!f) return;
  const templates = ((DB.templates && DB.templates.followup) || []).filter(t=>t.channel===channel);
  const first = templates[0];
  window._fuContact = {id, channel};
  openModal(`
    <div class="modal-head"><h2>${channel==='email'?'Email':'Text'} ${esc(f.name)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      ${!f.phone && channel==='sms' ? '<p class="muted small">No phone number on file.</p>' : ''}
      ${!f.email && channel==='email' ? '<p class="muted small">No email on file — add one first by editing this follow-up.</p>' : ''}
      <div class="form-group"><label>Template</label>
        <select id="f-template" onchange="fuApplyTemplate()">
          ${templates.length?templates.map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join(''):'<option value="">No templates yet</option>'}
        </select>
      </div>
      ${channel==='email'?`<div class="form-group"><label>Subject</label><input id="f-subject" type="text" value="${first?esc(mergeTemplate(first.subject,f)):''}"></div>`:''}
      <div class="form-group"><label>Message</label><textarea id="f-body" style="min-height:140px;">${first?esc(mergeTemplate(first.body,f)):''}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="fuSendContact()">${channel==='email'?'Open in Email App':'Open in Messages App'}</button>
    </div>
  `);
}
function fuApplyTemplate(){
  const {id, channel} = window._fuContact;
  const f = DB.followUps.find(x=>x.id===id);
  const tplId = document.getElementById('f-template').value;
  const t = ((DB.templates && DB.templates.followup) || []).find(x=>x.id===tplId);
  if(!t) return;
  if(channel==='email') document.getElementById('f-subject').value = mergeTemplate(t.subject, f);
  document.getElementById('f-body').value = mergeTemplate(t.body, f);
}
function fuSendContact(){
  const {id, channel} = window._fuContact;
  const f = DB.followUps.find(x=>x.id===id);
  const body = document.getElementById('f-body').value;
  let uri;
  if(channel==='email'){
    if(!f.email){ toast('No email address on file — add one by editing this follow-up first.', '⚠️'); return; }
    const subject = document.getElementById('f-subject').value;
    // NOTE: the address itself must not be percent-encoded (mailto: addresses
    // aren't escaped — encoding the @ as %40 breaks some mail clients).
    uri = `mailto:${f.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    if(!f.phone){ toast('No phone number on file — add one by editing this follow-up first.', '⚠️'); return; }
    const digits = f.phone.replace(/[^\d+]/g,'');
    uri = `sms:${digits}?body=${encodeURIComponent(body)}`;
  }
  // copy the message as a fallback in case the OS has no mail/SMS app
  // registered to handle the link (common on desktop browsers) — the
  // link click otherwise just appears to do nothing.
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(body).catch(()=>{});
  }
  window.location.href = uri;
  toast(`Opening your ${channel==='email'?'email':'messages'} app — message also copied to clipboard as a backup.`);
  if(f.status==='new'){ f.status='contacted'; save(); }
  closeModal(); renderPage();
}
function openFollowupTemplatesModal(){
  if(!DB.templates) DB.templates = {quote:[], invoice:[], followup:[]};
  if(!DB.templates.followup) DB.templates.followup = [];
  const list = DB.templates.followup;
  openModal(`
    <div class="modal-head"><h2>Follow-up Templates</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Use <code>{{name}}</code> and <code>{{phone}}</code> as merge fields — they're filled in automatically when you send.</p>
      <table><thead><tr><th>Name</th><th>Channel</th><th></th></tr></thead>
      <tbody>${list.map(t=>`<tr>
        <td><strong>${esc(t.name)}</strong></td>
        <td>${t.channel==='email'?'Email':'Text'}</td>
        <td><button class="icon-btn" aria-label="Edit template" onclick="openFollowupTemplateEditorModal('${t.id}')">✎</button><button class="icon-btn" aria-label="Delete template" onclick="deleteFollowupTemplate('${t.id}')">✕</button></td>
      </tr>`).join('') || `<tr><td colspan="3" class="muted" style="text-align:center;padding:20px;">No templates yet.</td></tr>`}</tbody></table>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Close</button>
      <button class="btn btn-gold" onclick="openFollowupTemplateEditorModal()">+ New Template</button>
    </div>`);
}
function openFollowupTemplateEditorModal(id){
  if(!DB.templates) DB.templates = {quote:[], invoice:[], followup:[]};
  if(!DB.templates.followup) DB.templates.followup = [];
  const t = id ? DB.templates.followup.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${t?'Edit Template':'New Follow-up Template'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Template Name</label><input id="f-name" type="text" value="${t?esc(t.name):''}" placeholder="e.g. Missed your call (email)"></div>
        <div class="form-group"><label>Channel</label><select id="f-channel">
          <option value="email" ${t&&t.channel==='email'?'selected':''}>Email</option>
          <option value="sms" ${t&&t.channel==='sms'?'selected':''}>Text (SMS)</option>
        </select></div>
      </div>
      <div class="form-group"><label>Subject (email only)</label><input id="f-subject" type="text" value="${t?esc(t.subject||''):''}"></div>
      <div class="form-group"><label>Message</label><textarea id="f-body" style="min-height:140px;">${t?esc(t.body||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${t?`<button class="btn btn-danger" onclick="deleteFollowupTemplate('${t.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="openFollowupTemplatesModal()">← Back</button>
      <button class="btn btn-gold" onclick="saveFollowupTemplate('${t?t.id:''}')">${t?'Save Changes':'Create Template'}</button>
    </div>`);
}
function saveFollowupTemplate(id){
  const data = {
    name: document.getElementById('f-name').value.trim() || 'Untitled Template',
    channel: document.getElementById('f-channel').value,
    subject: document.getElementById('f-subject').value,
    body: document.getElementById('f-body').value
  };
  if(id){ Object.assign(DB.templates.followup.find(t=>t.id===id), data); toast('Template updated'); }
  else { DB.templates.followup.push(Object.assign({id:uid()}, data)); toast('Template created'); }
  save(); openFollowupTemplatesModal();
}
function deleteFollowupTemplate(id){
  confirmDelete('Delete this template?', "This can't be undone.", ()=>{
    DB.templates.followup = DB.templates.followup.filter(t=>t.id!==id);
    save(); openFollowupTemplatesModal(); toast('Template deleted','🗑️');
  });
}

/* ===================== JOBS ===================== */
function view_jobs(detailId){
  if(currentParam) return view_jobDetail(currentParam);
  const mode = window._jobsViewMode || 'list';
  const rows = DB.jobs.slice().sort((a,b)=>new Date(b.startDate)-new Date(a.startDate)).map(j=>`
    <tr class="row-link" onclick="navigate('jobs','${j.id}')">
      <td><strong>${esc(j.jobNumber)}</strong></td>
      <td>${esc(j.customerName)}</td>
      <td>${esc(j.propertyType||'—')}</td>
      <td>${statusPill(j.status)}</td>
      <td>${priorityPill(j.priority||'Medium')}</td>
      <td>${esc(j.assignedTo||'—')}</td>
      <td>${fmtDate(j.startDate)}</td>
      <td>${fmt(j.expectedRevenue)}</td>
      <td>${esc(j.source||'—')}</td>
    </tr>`).join('');
  return `
  <div style="display:flex;gap:8px;margin-bottom:14px;">
    <button class="btn ${mode==='list'?'btn-gold':'btn-ghost'}" onclick="toggleJobsView('list')">📋 List</button>
    <button class="btn ${mode==='map'?'btn-gold':'btn-ghost'}" onclick="toggleJobsView('map')">🗺️ Map</button>
  </div>
  <div class="card" id="jobs-list-view" style="${mode==='map'?'display:none;':''}">
    <table>
      <thead><tr><th>Job #</th><th>Customer</th><th>Type</th><th>Status</th><th>Priority</th><th>Engineer</th><th>Start</th><th>Value</th><th>Source</th></tr></thead>
      <tbody>${rows || '<tr><td colspan="9" class="muted" style="text-align:center;padding:30px;">No jobs yet — create your first job</td></tr>'}</tbody>
    </table>
  </div>
  <div class="card" id="jobs-map-view" style="${mode==='list'?'display:none;':''}">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
      <span class="small muted" id="jobs-map-count"></span>
      <span class="small muted" style="display:flex;gap:12px;flex-wrap:wrap;">
        <span><span class="pill-dot" style="background:#7DD3FC;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Scheduled</span>
        <span><span class="pill-dot" style="background:#E11D2A;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Active</span>
        <span><span class="pill-dot" style="background:#22C55E;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Completed</span>
        <span><span class="pill-dot" style="background:#1A1A1A;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Invoiced</span>
        <span><span class="pill-dot" style="background:#9CA3AF;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Cancelled</span>
      </span>
    </div>
    <div id="jobs-map" style="height:520px;border-radius:10px;overflow:hidden;background:var(--card-alt);position:relative;"></div>
  </div>`;
}
function toggleJobsView(mode){
  window._jobsViewMode = mode;
  renderPage();
}
function afterRender_jobs(){
  if((window._jobsViewMode||'list')==='map') renderJobsMap();
}
const JOB_STATUS_COLORS = {
  scheduled:'#7DD3FC', active:'#E11D2A', 'in-progress':'#E11D2A',
  completed:'#22C55E', invoiced:'#1A1A1A', cancelled:'#9CA3AF'
};
async function renderJobsMap(){
  const mapEl = document.getElementById('jobs-map');
  const countEl = document.getElementById('jobs-map-count');
  if(!mapEl) return;

  const jobsWithAddr = DB.jobs.filter(j=>j.address && j.address.trim());
  if(!jobsWithAddr.length){
    mapEl.innerHTML = '<div class="muted small" style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;padding:20px;">No jobs with addresses yet</div>';
    if(countEl) countEl.textContent = '';
    return;
  }
  if(countEl) countEl.textContent = `Locating ${jobsWithAddr.length} job${jobsWithAddr.length===1?'':'s'}…`;

  if(window._jobsMap){ window._jobsMap.remove(); window._jobsMap = null; }
  mapEl.innerHTML = '';
  const map = L.map('jobs-map', { zoomControl:true, attributionControl:true });
  window._jobsMap = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:18, attribution:'© OpenStreetMap contributors'
  }).addTo(map);

  const points = [];
  for(const j of jobsWithAddr){
    // bail out early if the user has since switched away from the map view
    if((window._jobsViewMode||'list')!=='map') return;
    const coords = await geocodeAddress(j.address);
    if(!coords) continue;
    points.push(coords);
    const color = JOB_STATUS_COLORS[j.status] || '#7C3AED';
    const marker = L.circleMarker([coords.lat, coords.lng], {
      radius:8, color:'#fff', weight:2, fillColor:color, fillOpacity:0.95
    }).addTo(map);
    marker.bindPopup(`<strong>${esc(j.jobNumber)}</strong><br>${esc(j.customerName)}<br>${statusPill(j.status)}<br>${esc(j.assignedTo||'Unassigned')}<br>${fmtDate(j.startDate)}<br><a href="#" onclick="navigate('jobs','${j.id}');return false;">View job →</a>`);
    if(countEl) countEl.textContent = `Plotted ${points.length} of ${jobsWithAddr.length} job${jobsWithAddr.length===1?'':'s'}…`;
  }

  if((window._jobsViewMode||'list')!=='map') return;
  if(countEl) countEl.textContent = `${points.length} of ${jobsWithAddr.length} job${jobsWithAddr.length===1?'':'s'} plotted`;

  if(points.length){
    map.fitBounds(points.map(p=>[p.lat,p.lng]), {padding:[30,30], maxZoom:14});
  } else {
    map.setView([51.5560, 0.0500], 11);
  }
  setTimeout(()=>map.invalidateSize(), 50);
}

function view_jobDetail(id){
  const j = DB.jobs.find(x=>x.id===id);
  if(!j) return '<div class="empty-state">Job not found. <a onclick="navigate(\'jobs\')" style="color:var(--gold);cursor:pointer;">Back to jobs</a></div>';
  j.costLines = j.costLines||[]; j.documents = j.documents||[]; j.variations = j.variations||[]; j.phases = j.phases||[];
  const jobQuotes = DB.quotes.filter(q=>q.jobId===j.id);
  const jobInvoices = DB.invoices.filter(inv=>inv.jobId===j.id);
  const costBudget = j.costLines.reduce((s,c)=>s+(Number(c.budget)||0),0);
  const costActual = j.costLines.reduce((s,c)=>s+(Number(c.actual)||0),0);
  const approvedVarTotal = j.variations.filter(v=>v.status!=='Rejected').reduce((s,v)=>s+(Number(v.amount)||0),0);
  const margin = (j.expectedRevenue + approvedVarTotal) - costActual;
  setTimeout(()=>{ document.getElementById('page-title').textContent = j.jobNumber; document.getElementById('page-sub').textContent = j.customerName; },0);

  return `
  <div class="flex-between mb-10">
    <button class="btn btn-ghost btn-sm" onclick="navigate('jobs')">← All Jobs</button>
    <div class="flex gap-8">
      <button class="btn btn-ghost btn-sm" onclick="openJobModal('${j.id}')">Edit Job</button>
      <button class="btn btn-dark btn-sm" onclick="openQuoteModal(null,'${j.id}')">+ Quote</button>
      <button class="btn btn-gold btn-sm" onclick="openInvoiceModal(null,'${j.id}')">+ Invoice</button>
    </div>
  </div>

  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card"><div class="kpi-label">Status</div>${statusPill(j.status)}</div>
    <div class="card"><div class="kpi-label">Priority</div>${priorityPill(j.priority||'Medium')}</div>
    <div class="card"><div class="kpi-label">Revenue (+ variations)</div><div class="kpi-value">${fmt(j.expectedRevenue+approvedVarTotal)}</div></div>
    <div class="card"><div class="kpi-label">Cost vs Margin</div><div class="kpi-value" style="color:${margin>=0?'#15803D':'#B91C1C'};">${fmt(margin)}</div><span class="small muted">${fmt(costActual)} actual cost of ${fmt(costBudget)} budget</span></div>
  </div>
  ${jobMissingDocs(j) && !['completed','invoiced','cancelled'].includes(j.status) ? `<div class="card" style="border-color:#F59E0B;background:rgba(245,158,11,.12);margin-bottom:18px;"><strong>⚠️ No valid RAMS on file for this job</strong><p class="small muted mt-10">Add a current RAMS document in the Documents tab before work proceeds.</p></div>` : ''}

  <div class="tabs" id="job-tabs">
    <button class="tab-btn active" data-tab="overview" onclick="switchJobTab(this,'overview')">Overview</button>
    <button class="tab-btn" data-tab="phases" onclick="switchJobTab(this,'phases')">Phases (${j.phases.length})</button>
    <button class="tab-btn" data-tab="costs" onclick="switchJobTab(this,'costs')">Costs (${j.costLines.length})</button>
    <button class="tab-btn" data-tab="variations" onclick="switchJobTab(this,'variations')">Variations (${j.variations.length})</button>
    <button class="tab-btn" data-tab="quotes" onclick="switchJobTab(this,'quotes')">Quotes (${jobQuotes.length})</button>
    <button class="tab-btn" data-tab="invoices" onclick="switchJobTab(this,'invoices')">Invoices (${jobInvoices.length})</button>
    <button class="tab-btn" data-tab="documents" onclick="switchJobTab(this,'documents')">Documents (${j.documents.length})</button>
    <button class="tab-btn" data-tab="photos" onclick="switchJobTab(this,'photos')">Photos & Files (${j.photos.length})</button>
    <button class="tab-btn" data-tab="notes" onclick="switchJobTab(this,'notes')">Notes (${j.notes.length})</button>
    <button class="tab-btn" data-tab="timeline" onclick="switchJobTab(this,'timeline')">Timeline</button>
  </div>

  <div id="jobtab-overview" class="job-tab-pane">
    <div class="grid grid-2">
      <div class="card">
        <div class="card-title">Customer & Site</div>
        <p><strong>${esc(j.customerName)}</strong></p>
        <p class="muted small mt-10">${esc(j.address)}</p>
        <p class="muted small mt-10">Property type: ${esc(j.propertyType||'—')}</p>
        <div class="divider"></div>
        <p class="small"><strong>Assigned Engineer:</strong> ${esc(j.assignedTo||'Unassigned')}</p>
        <p class="small mt-10"><strong>Job Source:</strong> ${esc(j.source||'—')}</p>
        <p class="small mt-10"><strong>Start:</strong> ${fmtDate(j.startDate)} &nbsp; <strong>End:</strong> ${fmtDate(j.endDate)}</p>
      </div>
      <div class="card">
        <div class="card-title">Financials</div>
        <div class="flex-between small"><span class="muted">Expected Revenue</span><strong>${fmt(j.expectedRevenue)}</strong></div>
        <div class="divider"></div>
        <div class="flex-between small"><span class="muted">Approved Variations</span><strong>${fmt(approvedVarTotal)}</strong></div>
        <div class="divider"></div>
        <div class="flex-between small"><span class="muted">Actual Cost</span><strong>${fmt(costActual)}</strong></div>
        <div class="divider"></div>
        <div class="flex-between small"><span class="muted">Linked Quotes</span><strong>${jobQuotes.length}</strong></div>
        <div class="flex-between small mt-10"><span class="muted">Linked Invoices</span><strong>${jobInvoices.length}</strong></div>
      </div>
    </div>
  </div>

  <div id="jobtab-phases" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Job Phases</div><button class="btn btn-dark btn-sm" onclick="openPhaseModal('${j.id}')">+ Add Phase</button></div>
      <table><thead><tr><th>Phase</th><th>Status</th><th>Start</th><th>End</th><th>Signed Off</th><th></th></tr></thead>
      <tbody>${j.phases.map(p=>`<tr>
        <td><strong>${esc(p.name)}</strong></td>
        <td>${statusPill(p.status)}</td>
        <td>${fmtDate(p.startDate)}</td>
        <td>${fmtDate(p.endDate)}</td>
        <td><input type="checkbox" ${p.signedOff?'checked':''} onchange="togglePhaseSignOff('${j.id}','${p.id}')"></td>
        <td><button class="icon-btn" aria-label="Edit phase" onclick="openPhaseModal('${j.id}','${p.id}')">✎</button><button class="icon-btn" aria-label="Delete phase" onclick="deletePhase('${j.id}','${p.id}')">✕</button></td>
      </tr>`).join('') || '<tr><td colspan="6" class="muted" style="text-align:center;padding:20px;">No phases — add stages like groundworks, first fix, second fix to track a multi-stage build.</td></tr>'}</tbody></table>
    </div>
  </div>

  <div id="jobtab-costs" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Cost Lines — Budget vs Actual</div><button class="btn btn-dark btn-sm" onclick="openCostLineModal('${j.id}')">+ Add Cost Line</button></div>
      <table><thead><tr><th>Category</th><th>Description</th><th>Budget</th><th>Actual</th><th>Variance</th><th></th></tr></thead>
      <tbody>${j.costLines.map(c=>{const v=(Number(c.budget)||0)-(Number(c.actual)||0); return `<tr>
        <td><span class="tag-chip">${esc(c.category)}</span></td>
        <td>${esc(c.desc||'—')}</td>
        <td>${fmt(c.budget)}</td>
        <td>${fmt(c.actual)}</td>
        <td style="color:${v>=0?'#15803D':'#B91C1C'};font-weight:700;">${v>=0?'+':''}${fmt(v)}</td>
        <td><button class="icon-btn" aria-label="Edit cost line" onclick="openCostLineModal('${j.id}','${c.id}')">✎</button><button class="icon-btn" aria-label="Delete cost line" onclick="deleteCostLine('${j.id}','${c.id}')">✕</button></td>
      </tr>`}).join('') || '<tr><td colspan="6" class="muted" style="text-align:center;padding:20px;">No cost lines yet — break the job down into materials, labour, subcontractor and plant costs.</td></tr>'}</tbody>
      <tfoot><tr><td colspan="2" style="font-weight:700;">Totals</td><td style="font-weight:700;">${fmt(costBudget)}</td><td style="font-weight:700;">${fmt(costActual)}</td><td style="font-weight:700;color:${(costBudget-costActual)>=0?'#15803D':'#B91C1C'};">${(costBudget-costActual)>=0?'+':''}${fmt(costBudget-costActual)}</td><td></td></tr></tfoot></table>
      ${DB.subcontractors.length?`<div class="divider"></div><button class="btn btn-ghost btn-sm" onclick="openSubDayModal('${j.id}')">+ Log Subcontractor Day</button>`:''}
    </div>
  </div>

  <div id="jobtab-variations" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Variations / Change Orders</div><button class="btn btn-dark btn-sm" onclick="openVariationModal('${j.id}')">+ Add Variation</button></div>
      <table><thead><tr><th>Description</th><th>Date</th><th>Amount</th><th>Status</th><th></th></tr></thead>
      <tbody>${j.variations.map(v=>`<tr>
        <td>${esc(v.desc)}</td>
        <td>${fmtDate(v.date)}</td>
        <td>${fmt(v.amount)}</td>
        <td>${statusPill(v.status.toLowerCase())}</td>
        <td><button class="icon-btn" aria-label="Edit variation" onclick="openVariationModal('${j.id}','${v.id}')">✎</button><button class="icon-btn" aria-label="Delete variation" onclick="deleteVariation('${j.id}','${v.id}')">✕</button></td>
      </tr>`).join('') || '<tr><td colspan="5" class="muted" style="text-align:center;padding:20px;">No variations logged — record any scope changes here so they don\'t get missed on the final invoice.</td></tr>'}</tbody></table>
      ${j.variations.some(v=>v.status==='Approved')?`<div class="divider"></div><button class="btn btn-gold btn-sm" onclick="invoiceApprovedVariations('${j.id}')">Invoice Approved Variations</button>`:''}
    </div>
  </div>

  <div id="jobtab-quotes" class="job-tab-pane" style="display:none;">
    <div class="card">
      <table><thead><tr><th>Quote #</th><th>Type</th><th>Status</th><th>Total</th><th>Valid Until</th></tr></thead>
      <tbody>${jobQuotes.map(q=>{const t=calcQuoteTotal(q);return `<tr class="row-link" onclick="openQuoteModal('${q.id}')"><td><strong>${esc(q.quoteNumber)}</strong></td><td>${esc(q.type)}</td><td>${statusPill(q.status)}</td><td>${fmt(t.total)}</td><td>${fmtDate(q.validUntil)}</td></tr>`}).join('') || '<tr><td colspan="5" class="muted" style="text-align:center;padding:20px;">No quotes linked to this job</td></tr>'}</tbody></table>
    </div>
  </div>

  <div id="jobtab-invoices" class="job-tab-pane" style="display:none;">
    <div class="card">
      <table><thead><tr><th>Invoice #</th><th>Status</th><th>Total</th><th>Due</th></tr></thead>
      <tbody>${jobInvoices.map(inv=>{const t=calcInvoiceTotal(inv);return `<tr class="row-link" onclick="openInvoiceModal('${inv.id}')"><td><strong>${esc(inv.invoiceNumber)}</strong></td><td>${statusPill(inv.status)}</td><td>${fmt(t.total)}</td><td>${fmtDate(inv.dueDate)}</td></tr>`}).join('') || '<tr><td colspan="4" class="muted" style="text-align:center;padding:20px;">No invoices linked to this job</td></tr>'}</tbody></table>
    </div>
  </div>

  <div id="jobtab-documents" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Site Documents — RAMS & Compliance</div><button class="btn btn-dark btn-sm" onclick="openJobDocModal('${j.id}')">+ Add Document</button></div>
      <table><thead><tr><th>Category</th><th>Name</th><th>Expiry</th><th>Status</th><th></th></tr></thead>
      <tbody>${j.documents.map(d=>{const days=daysUntil(d.expiryDate);let st='Current',cls='st-won';if(days!==null){ if(days<0){st='Expired';cls='st-overdue';} else if(days<14){st='Expiring soon';cls='st-onhold';} }return `<tr>
        <td><span class="tag-chip">${esc(d.category)}</span></td>
        <td>${esc(d.name)}</td>
        <td>${d.expiryDate?fmtDate(d.expiryDate):'No expiry'}</td>
        <td><span class="pill ${cls}"><span class="pill-dot" style="background:currentColor;"></span>${st}</span></td>
        <td><button class="icon-btn" aria-label="Edit document" onclick="openJobDocModal('${j.id}','${d.id}')">✎</button><button class="icon-btn" aria-label="Delete document" onclick="deleteJobDoc('${j.id}','${d.id}')">✕</button></td>
      </tr>`}).join('') || '<tr><td colspan="5" class="muted" style="text-align:center;padding:20px;">No documents yet — add a RAMS, method statement or insurance certificate for this job.</td></tr>'}</tbody></table>
    </div>
  </div>

  <div id="jobtab-photos" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Photos, Drawings & Certificates</div><label class="btn btn-ghost btn-sm" style="cursor:pointer;">Upload <input type="file" multiple accept="image/*,.pdf" style="display:none" onchange="uploadJobPhoto('${j.id}',this.files)"></label></div>
      <div class="grid grid-4">
        ${j.photos.map((p,i)=>`<div><div class="file-thumb">${p.data?`<img src="${p.data}">`:'📄'}</div><div class="small mt-10" style="word-break:break-all;">${esc(p.name)}</div></div>`).join('') || '<p class="muted small">No files uploaded yet.</p>'}
      </div>
    </div>
  </div>

  <div id="jobtab-notes" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="form-row" style="margin-bottom:10px;">
        <select id="note-type"><option>Site</option><option>Customer</option><option>Engineer</option><option>Variation</option></select>
        <input id="note-text" type="text" placeholder="Add a note…">
      </div>
      <button class="btn btn-dark btn-sm mb-10" onclick="addJobNote('${j.id}')">Add Note</button>
      <div class="divider"></div>
      ${j.notes.slice().reverse().map(n=>`<div class="mb-10"><span class="tag-chip">${esc(n.type)}</span> <span class="muted small">${fmtDate(n.date)}</span><p class="small mt-10">${esc(n.text)}</p></div>`).join('') || '<p class="muted small">No notes yet.</p>'}
    </div>
  </div>

  <div id="jobtab-timeline" class="job-tab-pane" style="display:none;">
    <div class="card">
      ${j.timeline.map(t=>`<div class="flex gap-8 mb-10"><span style="color:var(--gold);">●</span><strong class="small">${esc(t.e)}</strong><span class="muted small">— ${fmtDate(t.d)}</span></div>`).join('') || '<p class="muted small">No timeline events yet.</p>'}
    </div>
  </div>
  `;
}
function switchJobTab(btn, tab){
  document.querySelectorAll('#job-tabs .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.job-tab-pane').forEach(p=>p.style.display='none');
  document.getElementById('jobtab-'+tab).style.display='block';
}
function addJobNote(jobId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const text = document.getElementById('note-text').value.trim();
  if(!text) return;
  j.notes.push({type:document.getElementById('note-type').value, text, date:new Date().toISOString().slice(0,10)});
  save(); navigate('jobs', jobId); toast('Note added');
}
function uploadJobPhoto(jobId, files){
  const j = DB.jobs.find(x=>x.id===jobId);
  let remaining = files.length;
  Array.from(files).forEach(f=>{
    const reader = new FileReader();
    reader.onload = e=>{
      j.photos.push({name:f.name, data: f.type.startsWith('image/')? e.target.result : null});
      remaining--;
      if(remaining===0){ save(); navigate('jobs', jobId); toast('Files uploaded'); }
    };
    reader.readAsDataURL(f);
  });
}

/* ===================== JOB COSTING ===================== */
const COST_CATEGORIES = ['Materials','Labour','Subcontractor','Plant'];
function openCostLineModal(jobId, costId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const c = costId ? j.costLines.find(x=>x.id===costId) : null;
  openModal(`
    <div class="modal-head"><h2>${c?'Edit Cost Line':'Add Cost Line'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${COST_CATEGORIES.map(cat=>`<option ${c&&c.category===cat?'selected':''}>${cat}</option>`).join('')}</select></div>
        <div class="form-group"><label>Description</label><input id="f-desc" type="text" value="${c?esc(c.desc):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Budget (£)</label><input id="f-budget" type="number" value="${c?c.budget:0}"></div>
        <div class="form-group"><label>Actual (£)</label><input id="f-actual" type="number" value="${c?c.actual:0}"></div>
      </div>
    </div>
    <div class="modal-foot">
      ${c?`<button class="btn btn-danger" onclick="deleteCostLine('${jobId}','${c.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveCostLine('${jobId}','${c?c.id:''}')">${c?'Save Changes':'Add Cost Line'}</button>
    </div>`);
}
function saveCostLine(jobId, costId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const data = {category:document.getElementById('f-category').value, desc:document.getElementById('f-desc').value,
    budget:Number(document.getElementById('f-budget').value)||0, actual:Number(document.getElementById('f-actual').value)||0};
  if(costId){ Object.assign(j.costLines.find(c=>c.id===costId), data); toast('Cost line updated'); }
  else { j.costLines.push(Object.assign({id:uid()}, data)); toast('Cost line added'); }
  save(); closeModal(); navigate('jobs', jobId);
}
function deleteCostLine(jobId, costId){
  confirmDelete('Remove this cost line?', "This can't be undone.", ()=>{
    const j = DB.jobs.find(x=>x.id===jobId);
    j.costLines = j.costLines.filter(c=>c.id!==costId);
    save(); closeModal(); navigate('jobs', jobId); toast('Cost line removed','🗑️');
  });
}
function openSubDayModal(jobId){
  openModal(`
    <div class="modal-head"><h2>Log Subcontractor Day</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Subcontractor</label><select id="f-sub">${DB.subcontractors.map(s=>`<option value="${s.id}">${esc(s.name)} — ${esc(s.trade)} (${fmt(s.dayRate)}/day)</option>`).join('')}</select></div>
      <div class="form-row">
        <div class="form-group"><label>Days</label><input id="f-days" type="number" step="0.5" value="1"></div>
        <div class="form-group"><label>Date</label><input id="f-date" type="date" value="${new Date().toISOString().slice(0,10)}"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSubDay('${jobId}')">Add Cost Line</button>
    </div>`);
}
function saveSubDay(jobId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const sub = DB.subcontractors.find(s=>s.id===document.getElementById('f-sub').value);
  const days = Number(document.getElementById('f-days').value)||0;
  const date = document.getElementById('f-date').value;
  const cost = (sub.dayRate||0)*days;
  j.costLines.push({id:uid(), category:'Subcontractor', desc:`${sub.name} — ${days} day${days!==1?'s':''} (${fmtDate(date)})`, budget:cost, actual:cost});
  save(); closeModal(); navigate('jobs', jobId); toast('Subcontractor day logged');
}

/* ===================== VARIATIONS ===================== */
const VARIATION_STATUSES = ['Pending','Approved','Rejected','Invoiced'];
function openVariationModal(jobId, varId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const v = varId ? j.variations.find(x=>x.id===varId) : null;
  openModal(`
    <div class="modal-head"><h2>${v?'Edit Variation':'Add Variation'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Description</label><input id="f-desc" type="text" value="${v?esc(v.desc):''}" placeholder="e.g. Customer requested upgrade to combi boiler"></div>
      <div class="form-row">
        <div class="form-group"><label>Amount (£)</label><input id="f-amount" type="number" value="${v?v.amount:0}"></div>
        <div class="form-group"><label>Date</label><input id="f-date" type="date" value="${v?v.date:new Date().toISOString().slice(0,10)}"></div>
      </div>
      <div class="form-group"><label>Status</label><select id="f-status">${VARIATION_STATUSES.map(s=>`<option ${v&&v.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
    </div>
    <div class="modal-foot">
      ${v?`<button class="btn btn-danger" onclick="deleteVariation('${jobId}','${v.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveVariation('${jobId}','${v?v.id:''}')">${v?'Save Changes':'Add Variation'}</button>
    </div>`);
}
function saveVariation(jobId, varId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const data = {desc:document.getElementById('f-desc').value.trim()||'Variation', amount:Number(document.getElementById('f-amount').value)||0,
    date:document.getElementById('f-date').value, status:document.getElementById('f-status').value};
  if(varId){ Object.assign(j.variations.find(v=>v.id===varId), data); toast('Variation updated'); }
  else { DB.counters.variation++; j.variations.push(Object.assign({id:uid()}, data)); toast('Variation added'); }
  save(); closeModal(); navigate('jobs', jobId);
}
function deleteVariation(jobId, varId){
  confirmDelete('Remove this variation?', "This can't be undone.", ()=>{
    const j = DB.jobs.find(x=>x.id===jobId);
    j.variations = j.variations.filter(v=>v.id!==varId);
    save(); closeModal(); navigate('jobs', jobId); toast('Variation removed','🗑️');
  });
}
function invoiceApprovedVariations(jobId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const approved = j.variations.filter(v=>v.status==='Approved');
  if(!approved.length){ toast('No approved variations to invoice'); return; }
  const invoiceNumber = nextInvoiceNumber();
  DB.invoices.push({
    id:uid(), invoiceNumber, jobId:j.id, customerId:j.customerId||null, customerName:j.customerName,
    status:'draft', items: approved.map(v=>({desc:v.desc, qty:1, unit:'job', rate:v.amount})),
    vatRate: DB.settings.vatRate, retentionPct:0, dueDate:'', amountPaid:0, notes:DB.settings.terms,
    createdAt:new Date().toISOString().slice(0,10)
  });
  approved.forEach(v=>v.status='Invoiced');
  save(); navigate('jobs', jobId); toast('Invoice '+invoiceNumber+' created for approved variations');
}

/* ===================== JOB DOCUMENTS ===================== */
function openJobDocModal(jobId, docId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const d = docId ? j.documents.find(x=>x.id===docId) : null;
  openModal(`
    <div class="modal-head"><h2>${d?'Edit Document':'Add Job Document'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Document Name</label><input id="f-name" type="text" value="${d?esc(d.name):''}" placeholder="e.g. RAMS — Boiler replacement"></div>
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${COMPLIANCE_CATEGORIES.map(cat=>`<option ${d&&d.category===cat?'selected':''}>${cat}</option>`).join('')}</select></div>
        <div class="form-group"><label>Expiry Date (optional)</label><input id="f-expiryDate" type="date" value="${d?d.expiryDate||'':''}"></div>
      </div>
    </div>
    <div class="modal-foot">
      ${d?`<button class="btn btn-danger" onclick="deleteJobDoc('${jobId}','${d.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveJobDoc('${jobId}','${d?d.id:''}')">${d?'Save Changes':'Add Document'}</button>
    </div>`);
}
function saveJobDoc(jobId, docId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const data = {name:document.getElementById('f-name').value.trim()||'Untitled Document', category:document.getElementById('f-category').value,
    expiryDate:document.getElementById('f-expiryDate').value||null};
  if(docId){ Object.assign(j.documents.find(d=>d.id===docId), data); toast('Document updated'); }
  else { j.documents.push(Object.assign({id:uid()}, data)); toast('Document added'); }
  save(); closeModal(); navigate('jobs', jobId); renderNav();
}
function deleteJobDoc(jobId, docId){
  confirmDelete('Remove this document?', "This can't be undone.", ()=>{
    const j = DB.jobs.find(x=>x.id===jobId);
    j.documents = j.documents.filter(d=>d.id!==docId);
    save(); closeModal(); navigate('jobs', jobId); renderNav(); toast('Document removed','🗑️');
  });
}

/* ===================== JOB PHASES ===================== */
const PHASE_STATUSES = ['planned','in-progress','on-hold','completed'];
function openPhaseModal(jobId, phaseId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const p = phaseId ? j.phases.find(x=>x.id===phaseId) : null;
  openModal(`
    <div class="modal-head"><h2>${p?'Edit Phase':'Add Phase'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Phase Name</label><input id="f-name" type="text" value="${p?esc(p.name):''}" placeholder="e.g. Groundworks, First Fix, Second Fix"></div>
      <div class="form-row">
        <div class="form-group"><label>Start Date</label><input id="f-startDate" type="date" value="${p?p.startDate||'':''}"></div>
        <div class="form-group"><label>End Date</label><input id="f-endDate" type="date" value="${p?p.endDate||'':''}"></div>
      </div>
      <div class="form-group"><label>Status</label><select id="f-status">${PHASE_STATUSES.map(s=>`<option value="${s}" ${p&&p.status===s?'selected':''}>${s.replace(/-/g,' ')}</option>`).join('')}</select></div>
    </div>
    <div class="modal-foot">
      ${p?`<button class="btn btn-danger" onclick="deletePhase('${jobId}','${p.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="savePhase('${jobId}','${p?p.id:''}')">${p?'Save Changes':'Add Phase'}</button>
    </div>`);
}
function savePhase(jobId, phaseId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const data = {name:document.getElementById('f-name').value.trim()||'Phase', startDate:document.getElementById('f-startDate').value,
    endDate:document.getElementById('f-endDate').value, status:document.getElementById('f-status').value};
  if(phaseId){ Object.assign(j.phases.find(p=>p.id===phaseId), data); toast('Phase updated'); }
  else { j.phases.push(Object.assign({id:uid(), signedOff:false}, data)); toast('Phase added'); }
  save(); closeModal(); navigate('jobs', jobId);
}
function deletePhase(jobId, phaseId){
  confirmDelete('Remove this phase?', "This can't be undone.", ()=>{
    const j = DB.jobs.find(x=>x.id===jobId);
    j.phases = j.phases.filter(p=>p.id!==phaseId);
    save(); closeModal(); navigate('jobs', jobId); toast('Phase removed','🗑️');
  });
}
function togglePhaseSignOff(jobId, phaseId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const p = j.phases.find(x=>x.id===phaseId);
  p.signedOff = !p.signedOff;
  if(p.signedOff) p.status='completed';
  save(); navigate('jobs', jobId); toast(p.signedOff?'Phase signed off':'Sign-off removed');
}

const JOB_STATUSES = ['scheduled','active','on-hold','completed','invoiced','cancelled'];
const SOURCE_OPTIONS = ['Website','Google','MyJobQuote','Checkatrade','Facebook','Referral','Tender','Repeat Customer','Other'];
function openJobModal(id, prefill){
  const j = id ? DB.jobs.find(x=>x.id===id) : null;
  const p = prefill || {};
  openModal(`
    <div class="modal-head"><h2>${j?'Edit Job '+esc(j.jobNumber):'New Job'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      ${!j?`<p class="small muted mb-10">Job number will be auto-generated on save (next: <strong>SW-${new Date().getFullYear()}-${String(DB.counters.job+1).padStart(3,'0')}</strong>).</p>`:''}
      <div class="form-row">
        <div class="form-group"><label>Customer Name</label><input id="f-customerName" type="text" value="${j?esc(j.customerName):esc(p.customerName||'')}"></div>
        <div class="form-group"><label>Property Type</label><select id="f-propertyType"><option>Residential</option><option>Commercial</option></select></div>
      </div>
      <div class="form-group"><label>Site Address</label><input id="f-address" type="text" value="${j?esc(j.address):''}"></div>
      <div class="form-row">
        <div class="form-group"><label>Status</label><select id="f-status">${JOB_STATUSES.map(s=>`<option value="${s}" ${j&&j.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="form-group"><label>Priority</label><select id="f-priority">${['Low','Medium','High'].map(s=>`<option ${j&&j.priority===s?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Assigned Engineer</label><select id="f-assignedTo"><option value="">Unassigned</option>${DB.employees.map(e=>`<option ${j&&j.assignedTo===e.name?'selected':''}>${esc(e.name)}</option>`).join('')}</select></div>
        <div class="form-group"><label>Expected Revenue (£)</label><input id="f-expectedRevenue" type="number" value="${j?j.expectedRevenue:''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Job Source</label><select id="f-source">${SOURCE_OPTIONS.map(s=>`<option ${(j?j.source:p.source)===s?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="form-group"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Start Date</label><input id="f-startDate" type="date" value="${j?j.startDate:''}"></div>
        <div class="form-group"><label>Completion Date</label><input id="f-endDate" type="date" value="${j?j.endDate:''}"></div>
      </div>
    </div>
    <div class="modal-foot">
      ${j?`<button class="btn btn-danger" onclick="deleteJob('${j.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveJob('${j?j.id:''}','${p.leadId||''}')">${j?'Save Changes':'Create Job'}</button>
    </div>
  `);
  if(j){ document.getElementById('f-propertyType').value = j.propertyType||'Residential'; }
}
function saveJob(id, leadId){
  const customerNameVal = document.getElementById('f-customerName').value.trim();
  if(!customerNameVal){ toast('Customer name is required','⚠️'); document.getElementById('f-customerName').focus(); return; }
  const data = {
    customerName: customerNameVal,
    propertyType: document.getElementById('f-propertyType').value,
    address: document.getElementById('f-address').value,
    status: document.getElementById('f-status').value,
    priority: document.getElementById('f-priority').value,
    assignedTo: document.getElementById('f-assignedTo').value,
    expectedRevenue: Number(document.getElementById('f-expectedRevenue').value)||0,
    startDate: document.getElementById('f-startDate').value,
    endDate: document.getElementById('f-endDate').value,
    source: document.getElementById('f-source').value
  };
  if(id){
    Object.assign(DB.jobs.find(j=>j.id===id), data);
    toast('Job updated');
    save(); closeModal(); navigate('jobs', id);
  } else {
    const jobNumber = nextJobNumber();
    const job = Object.assign({id:uid(), jobNumber, customerId:null, actualRevenue:0, notes:[], photos:[],
      timeline:[{e:'Job Created', d:new Date().toISOString().slice(0,10)}]}, data);
    DB.jobs.push(job);
    if(leadId){ const lead = DB.leads.find(l=>l.id===leadId); if(lead) lead.stage='Scheduled'; }
    save(); closeModal();
    logActivity('Job created', jobNumber+' — '+job.customerName);
    toast('Job '+jobNumber+' created');
    navigate('jobs', job.id);
  }
}
function deleteJob(id){
  const j0 = DB.jobs.find(x=>x.id===id);
  confirmDelete('Delete '+(j0?j0.jobNumber:'this job')+'?', "This can't be undone. All notes, documents and cost lines on this job will be deleted too.", ()=>{
    logActivity('Job deleted', j0?j0.jobNumber+' — '+j0.customerName:id);
    DB.jobs = DB.jobs.filter(j=>j.id!==id); save(); closeModal(); navigate('jobs'); toast('Job deleted','🗑️');
  });
}

/* ===================== JOB SOURCES (where the work actually comes from) ===================== */
function view_job_sources(){
  const sources = SOURCE_OPTIONS.concat(['Not set']);
  const rows = sources.map(s=>{
    const leads = DB.leads.filter(l=>(l.source||'Not set')===s);
    const jobs = DB.jobs.filter(j=>(j.source||'Not set')===s);
    const pipelineValue = jobs.reduce((sum,j)=>sum+(Number(j.expectedRevenue)||0),0);
    const wonValue = jobs.reduce((sum,j)=>sum+(Number(j.actualRevenue)||0),0);
    return {s, leadCt:leads.length, jobCt:jobs.length, pipelineValue, wonValue};
  }).filter(r=>r.leadCt>0 || r.jobCt>0);
  const totalJobs = DB.jobs.length;
  const totalPipeline = rows.reduce((s,r)=>s+r.pipelineValue,0);
  const bodyRows = rows.slice().sort((a,b)=>b.pipelineValue-a.pipelineValue).map(r=>`
    <tr>
      <td><strong>${esc(r.s)}</strong></td>
      <td>${r.leadCt}</td>
      <td>${r.jobCt}</td>
      <td>${totalJobs?Math.round(r.jobCt/totalJobs*100):0}%</td>
      <td>${fmt(r.pipelineValue)}</td>
      <td>${fmt(r.wonValue)}</td>
    </tr>`).join('');
  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Total Jobs</div><div class="kpi-value">${totalJobs}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Sources In Use</div><div class="kpi-value">${rows.length}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Total Pipeline Value</div><div class="kpi-value">${fmt(totalPipeline)}</div></div>
  </div>
  <div class="card">
    <div class="card-title">Where jobs come from</div>
    <p class="small muted mb-10">Set on each lead and each job (Job Source field) — this rolls both up so you can see which channels are actually worth the spend.</p>
    <table>
      <thead><tr><th>Source</th><th>Leads</th><th>Jobs</th><th>% of Jobs</th><th>Pipeline Value</th><th>Won (Actual) Value</th></tr></thead>
      <tbody>${bodyRows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No leads or jobs with a source set yet.</td></tr>'}</tbody>
    </table>
  </div>`;
}

/* ===================== QUOTES ===================== */
function view_quotes(){
  const rows = DB.quotes.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(q=>{
    const t = calcQuoteTotal(q);
    return `<tr class="row-link" onclick="openQuoteModal('${q.id}')">
      <td><strong>${esc(q.quoteNumber)}</strong></td>
      <td>${esc(q.customerName)}</td>
      <td>${esc(q.type)}</td>
      <td>${statusPill(q.status)}</td>
      <td>${fmt(t.total)}</td>
      <td>${fmtDate(q.validUntil)}</td>
    </tr>`;
  }).join('');
  return `<div class="card"><table>
    <thead><tr><th>Quote #</th><th>Customer</th><th>Type</th><th>Status</th><th>Total (inc. VAT)</th><th>Valid Until</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No quotes yet — create your first quote</td></tr>'}</tbody>
  </table></div>`;
}

const QUOTE_TYPES = ['Fixed Price','Itemised','Day Rate','Emergency Callout'];
const QUOTE_STATUSES = ['draft','sent','approved','declined','expired'];

function openQuoteModal(id, jobId){
  const q = id ? DB.quotes.find(x=>x.id===id) : null;
  const items = q ? q.items.slice() : [{desc:'',qty:1,unit:'ea',rate:0}];
  window._editingItems = items;
  const job = jobId ? DB.jobs.find(j=>j.id===jobId) : (q&&q.jobId? DB.jobs.find(j=>j.id===q.jobId) : null);
  openModal(`
    <div class="modal-head"><h2>${q?'Edit Quote '+esc(q.quoteNumber):'New Quote'}</h2><div class="flex gap-8"><button class="icon-btn" title="Calculator" onclick="toggleCalculator()" style="font-size:18px;">🧮</button><button class="modal-close" onclick="closeModal()">✕</button></div></div>
    <div class="modal-body">
      ${!q?`<p class="small muted mb-10">Quote number will be auto-generated (next: <strong>Q-${new Date().getFullYear()}-${String(DB.counters.quote+1).padStart(3,'0')}</strong>)</p>`:''}
      <div class="form-row">
        <div class="form-group"><label>Load Template</label>
          <select id="f-template" onchange="applyTemplateToForm('quote', this.value)">
            <option value="">— none —</option>
            ${DB.templates.quote.map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group" style="display:flex;align-items:end;"><button class="btn btn-ghost" style="width:100%;" onclick="saveCurrentAsTemplate('quote')">💾 Save as Template</button></div>
      </div>
      <div class="divider"></div>
      <div class="form-row">
        <div class="form-group"><label>Customer</label>
          <select id="f-customer">
            <option value="">— Type new customer below —</option>
            ${DB.customers.map(c=>`<option value="${c.id}" ${ (q&&q.customerId===c.id)||(job&&job.customerId===c.id) ?'selected':''}>${esc(c.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>Customer Name (if new)</label><input id="f-customerName" type="text" value="${q?esc(q.customerName):(job?esc(job.customerName):'')}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Quote Type</label><select id="f-type">${QUOTE_TYPES.map(t=>`<option ${q&&q.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
        <div class="form-group"><label>Status</label><select id="f-status">${QUOTE_STATUSES.map(s=>`<option value="${s}" ${q&&q.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>VAT Rate (%)</label><input id="f-vatRate" type="number" value="${q?q.vatRate:DB.settings.vatRate}"></div>
        <div class="form-group"><label>Valid Until</label><input id="f-validUntil" type="date" value="${q?q.validUntil:''}"></div>
      </div>
      <label>Line Items</label>
      <table class="line-items-table" id="line-items-table"><thead><tr><th>Description</th><th style="width:60px;">Qty</th><th style="width:70px;">Unit</th><th style="width:90px;">Rate £</th><th style="width:90px;">Total</th><th></th></tr></thead>
        <tbody id="line-items-body"></tbody>
      </table>
      <button class="btn btn-ghost btn-sm mt-10" onclick="addLineItem()">+ Add Line Item</button>
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Notes / Terms</label><textarea id="f-notes">${q?esc(q.notes):DB.settings.terms}</textarea></div>
    </div>
    <div class="modal-foot">
      ${q?`<button class="btn btn-danger" onclick="deleteQuote('${q.id}')">Delete</button>`:''}
      ${q?`<button class="btn btn-ghost" onclick="printDoc('quote','${q.id}')">PDF / Print</button>`:''}
      ${q&&q.status!=='approved'?`<button class="btn btn-dark" onclick="convertQuoteToJob('${q.id}')">Convert to Job</button>`:''}
      ${q?`<button class="btn btn-dark" onclick="convertQuoteToInvoice('${q.id}')">Convert to Invoice</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveQuote('${q?q.id:''}','${jobId||(q?q.jobId||'':'')}')">${q?'Save Changes':'Create Quote'}</button>
    </div>
  `);
  renderLineItems();
}

function renderLineItems(){
  const body = document.getElementById('line-items-body');
  body.innerHTML = window._editingItems.map((it,i)=>`
    <tr>
      <td><input type="text" value="${esc(it.desc)}" oninput="updateLineItem(${i},'desc',this.value)"></td>
      <td><input type="number" value="${it.qty}" oninput="updateLineItem(${i},'qty',this.value)"></td>
      <td><input type="text" value="${esc(it.unit)}" oninput="updateLineItem(${i},'unit',this.value)"></td>
      <td><input type="number" value="${it.rate}" oninput="updateLineItem(${i},'rate',this.value)"></td>
      <td style="font-weight:700;padding-top:14px;">${fmt(it.qty*it.rate)}</td>
      <td><button class="icon-btn" aria-label="Remove line item" onclick="removeLineItem(${i})">✕</button></td>
    </tr>`).join('');
  updateTotals();
}
function addLineItem(){ window._editingItems.push({desc:'',qty:1,unit:'ea',rate:0}); renderLineItems(); }
function removeLineItem(i){ window._editingItems.splice(i,1); renderLineItems(); }
function updateLineItem(i,field,val){
  window._editingItems[i][field] = (field==='qty'||field==='rate') ? Number(val)||0 : val;
  renderLineItems();
}
function updateTotals(){
  const vatRate = Number(document.getElementById('f-vatRate')?.value)||0;
  const sub = window._editingItems.reduce((s,i)=>s+(i.qty*i.rate),0);
  const vat = sub*(vatRate/100);
  const total = sub+vat;
  const retentionField = document.getElementById('f-retentionPct');
  let retentionHtml = '';
  if(retentionField){
    const pct = Number(retentionField.value)||0;
    const retention = total*(pct/100);
    if(pct>0){
      retentionHtml = `
        <div class="small">Retention held (${pct}%): <strong>-${fmt(retention)}</strong></div>
        <div class="small">Due now: <strong>${fmt(total-retention)}</strong></div>`;
    }
  }
  document.getElementById('line-items-totals').innerHTML = `
    <div class="small">Subtotal: <strong>${fmt(sub)}</strong></div>
    <div class="small">VAT (${vatRate}%): <strong>${fmt(vat)}</strong></div>
    <div style="font-size:17px;font-weight:800;margin-top:4px;">Total: ${fmt(total)}</div>${retentionHtml}`;
}

function saveQuote(id, jobId){
  const custSelect = document.getElementById('f-customer').value;
  const customer = custSelect ? DB.customers.find(c=>c.id===custSelect) : null;
  const customerNameVal = customer ? customer.name : document.getElementById('f-customerName').value.trim();
  if(!customerNameVal){ toast('Customer is required','⚠️'); return; }
  const validItems = window._editingItems.filter(i=>i.desc||i.qty||i.rate);
  if(!validItems.length){ toast('Add at least one line item','⚠️'); return; }
  const data = {
    customerId: customer ? customer.id : null,
    customerName: customerNameVal,
    type: document.getElementById('f-type').value,
    status: document.getElementById('f-status').value,
    vatRate: Number(document.getElementById('f-vatRate').value)||0,
    validUntil: document.getElementById('f-validUntil').value,
    notes: document.getElementById('f-notes').value,
    items: validItems,
    jobId: jobId || null
  };
  if(id){ Object.assign(DB.quotes.find(q=>q.id===id), data); toast('Quote updated'); }
  else {
    const quoteNumber = nextQuoteNumber();
    DB.quotes.push(Object.assign({id:uid(), quoteNumber, createdAt:new Date().toISOString().slice(0,10)}, data));
    logActivity('Quote created', quoteNumber+' — '+data.customerName);
    toast('Quote '+quoteNumber+' created');
  }
  save(); closeModal(); renderPage();
}
function deleteQuote(id){
  const q0 = DB.quotes.find(x=>x.id===id);
  confirmDelete('Delete '+(q0?q0.quoteNumber:'this quote')+'?', "This can't be undone.", ()=>{
    DB.quotes = DB.quotes.filter(q=>q.id!==id); save(); closeModal(); renderPage(); toast('Quote deleted','🗑️');
  });
}

function convertQuoteToJob(qid){
  const q = DB.quotes.find(x=>x.id===qid);
  if(!q) return;
  q.status='approved'; 
  const jobNumber = nextJobNumber();
  const t = calcQuoteTotal(q);
  const job = {id:uid(), jobNumber, customerId:q.customerId, customerName:q.customerName, address:'', propertyType:'Residential',
    status:'scheduled', priority:'Medium', assignedTo:'', startDate:'', endDate:'', expectedRevenue:t.total, actualRevenue:0,
    notes:[], photos:[], timeline:[{e:'Quote Created',d:q.createdAt},{e:'Quote Accepted',d:new Date().toISOString().slice(0,10)}]};
  q.jobId = job.id;
  DB.jobs.push(job);
  save(); closeModal();
  toast('Job '+jobNumber+' created from quote');
  navigate('jobs', job.id);
}
function convertQuoteToInvoice(qid){
  const q = DB.quotes.find(x=>x.id===qid);
  if(!q) return;
  const invoiceNumber = nextInvoiceNumber();
  const due = new Date(); due.setDate(due.getDate()+14);
  const inv = {id:uid(), invoiceNumber, jobId:q.jobId||null, customerId:q.customerId, customerName:q.customerName,
    status:'draft', items: q.items.slice(), vatRate:q.vatRate, dueDate:due.toISOString().slice(0,10), amountPaid:0,
    notes:q.notes, createdAt:new Date().toISOString().slice(0,10)};
  DB.invoices.push(inv);
  save(); closeModal();
  toast('Invoice '+invoiceNumber+' created from quote');
  navigate('invoices');
}

/* ===================== INVOICES ===================== */
let INVOICE_SELECTED = new Set();
function view_invoices(){
  const due7 = DB.invoices.filter(i=>{const dd=daysUntil(i.dueDate); return i.status!=='paid' && dd!==null && dd>=0 && dd<=7;}).length;
  const totals = {
    outstanding: DB.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0),
    paid: DB.invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0),
    overdue: DB.invoices.filter(i=>i.status==='overdue').reduce((s,i)=>s+calcInvoiceTotal(i).total,0),
  };
  const retained = DB.invoices.filter(i=>(Number(i.retentionPct)||0)>0).reduce((s,i)=>s+calcInvoiceTotal(i).retention,0);
  const sorted = DB.invoices.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  // drop any stale selections for invoices that no longer exist
  INVOICE_SELECTED = new Set([...INVOICE_SELECTED].filter(id=>sorted.some(i=>i.id===id)));
  const allSelected = sorted.length>0 && sorted.every(i=>INVOICE_SELECTED.has(i.id));
  const rows = sorted.map(inv=>{
    const t = calcInvoiceTotal(inv);
    return `<tr class="row-link" onclick="openInvoiceModal('${inv.id}')">
      <td onclick="event.stopPropagation();"><input type="checkbox" ${INVOICE_SELECTED.has(inv.id)?'checked':''} onchange="toggleInvoiceSelect('${inv.id}')"></td>
      <td><strong>${esc(inv.invoiceNumber)}</strong></td>
      <td>${esc(inv.customerName)}</td>
      <td>${statusPill(inv.status)}</td>
      <td>${fmt(t.total)}</td>
      <td>${t.retentionPct?`${t.retentionPct}% (${fmt(t.retention)})`:'—'}</td>
      <td>${fmt(inv.amountPaid||0)}</td>
      <td>${fmtDate(inv.dueDate)}</td>
    </tr>`;
  }).join('');
  return `
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Outstanding</div><div class="kpi-value">${fmt(totals.outstanding)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Paid (all time)</div><div class="kpi-value">${fmt(totals.paid)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Overdue</div><div class="kpi-value" style="color:var(--danger);">${fmt(totals.overdue)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Held in Retention</div><div class="kpi-value">${fmt(retained)}</div></div>
  </div>
  ${INVOICE_SELECTED.size>0?`
  <div class="card" style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:rgba(0,229,204,.08);border-color:var(--teal-dim);">
    <strong class="small">${INVOICE_SELECTED.size} selected</strong>
    <button class="btn btn-ghost btn-sm" onclick="bulkMarkInvoices('sent')">Mark as Sent</button>
    <button class="btn btn-ghost btn-sm" onclick="bulkMarkInvoices('paid')">Mark as Paid</button>
    <button class="btn btn-danger btn-sm" onclick="bulkDeleteInvoices()">Delete Selected</button>
    <button class="btn btn-ghost btn-sm" style="margin-left:auto;" onclick="INVOICE_SELECTED.clear(); renderPage();">Clear</button>
  </div>`:''}
  <div class="card"><table>
    <thead><tr><th style="width:34px;"><input type="checkbox" ${allSelected?'checked':''} onchange="toggleAllInvoicesSelect(this.checked)" aria-label="Select all invoices"></th><th>Invoice #</th><th>Customer</th><th>Status</th><th>Total</th><th>Retention</th><th>Paid</th><th>Due Date</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="8" class="muted" style="text-align:center;padding:30px;">No invoices yet</td></tr>'}</tbody>
  </table></div>`;
}
function toggleInvoiceSelect(id){
  if(INVOICE_SELECTED.has(id)) INVOICE_SELECTED.delete(id); else INVOICE_SELECTED.add(id);
  renderPage();
}
function toggleAllInvoicesSelect(checked){
  if(checked) DB.invoices.forEach(i=>INVOICE_SELECTED.add(i.id));
  else INVOICE_SELECTED.clear();
  renderPage();
}
function bulkMarkInvoices(status){
  const ids = [...INVOICE_SELECTED];
  ids.forEach(id=>{ const inv = DB.invoices.find(i=>i.id===id); if(inv) inv.status = status; });
  logActivity('Bulk invoice update', ids.length+' invoice(s) marked '+status);
  save(); INVOICE_SELECTED.clear(); renderPage();
  toast(ids.length+' invoice(s) marked '+status);
}
function bulkDeleteInvoices(){
  const ids = [...INVOICE_SELECTED];
  confirmDelete('Delete '+ids.length+' invoice(s)?', "This can't be undone.", ()=>{
    logActivity('Bulk invoice delete', ids.length+' invoice(s) deleted');
    DB.invoices = DB.invoices.filter(i=>!ids.includes(i.id));
    save(); closeModal(); INVOICE_SELECTED.clear(); renderPage();
    toast(ids.length+' invoice(s) deleted','🗑️');
  });
}

const INVOICE_STATUSES = ['draft','sent','paid','partial','overdue'];

function openInvoiceModal(id, jobId){
  const inv = id ? DB.invoices.find(x=>x.id===id) : null;
  const items = inv ? inv.items.slice() : [{desc:'',qty:1,unit:'ea',rate:0}];
  window._editingItems = items;
  const job = jobId ? DB.jobs.find(j=>j.id===jobId) : (inv&&inv.jobId? DB.jobs.find(j=>j.id===inv.jobId) : null);
  openModal(`
    <div class="modal-head"><h2>${inv?'Edit Invoice '+esc(inv.invoiceNumber):'New Invoice'}</h2><div class="flex gap-8"><button class="icon-btn" title="Calculator" onclick="toggleCalculator()" style="font-size:18px;">🧮</button><button class="modal-close" onclick="closeModal()">✕</button></div></div>
    <div class="modal-body">
      ${!inv?`<p class="small muted mb-10">Invoice number will be auto-generated (next: <strong>INV-${new Date().getFullYear()}-${String(DB.counters.invoice+1).padStart(3,'0')}</strong>)</p>`:''}
      <div class="form-row">
        <div class="form-group"><label>Load Template</label>
          <select id="f-template" onchange="applyTemplateToForm('invoice', this.value)">
            <option value="">— none —</option>
            ${DB.templates.invoice.map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group" style="display:flex;align-items:end;"><button class="btn btn-ghost" style="width:100%;" onclick="saveCurrentAsTemplate('invoice')">💾 Save as Template</button></div>
      </div>
      <div class="divider"></div>
      <div class="form-row">
        <div class="form-group"><label>Customer</label>
          <select id="f-customer">
            <option value="">— Type new customer below —</option>
            ${DB.customers.map(c=>`<option value="${c.id}" ${(inv&&inv.customerId===c.id)||(job&&job.customerId===c.id)?'selected':''}>${esc(c.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label>Customer Name (if new)</label><input id="f-customerName" type="text" value="${inv?esc(inv.customerName):(job?esc(job.customerName):'')}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Status</label><select id="f-status">${INVOICE_STATUSES.map(s=>`<option value="${s}" ${inv&&inv.status===s?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="form-group"><label>VAT Rate (%)</label><input id="f-vatRate" type="number" value="${inv?inv.vatRate:DB.settings.vatRate}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Due Date</label><input id="f-dueDate" type="date" value="${inv?inv.dueDate:''}"></div>
        <div class="form-group"><label>Amount Paid (£)</label><input id="f-amountPaid" type="number" value="${inv?inv.amountPaid:0}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Retention % (held until defects period ends)</label><input id="f-retentionPct" type="number" step="0.5" value="${inv?(Number(inv.retentionPct)||0):0}" onchange="updateTotals()"></div>
        <div></div>
      </div>
      <label>Line Items</label>
      <table class="line-items-table" id="line-items-table"><thead><tr><th>Description</th><th style="width:60px;">Qty</th><th style="width:70px;">Unit</th><th style="width:90px;">Rate £</th><th style="width:90px;">Total</th><th></th></tr></thead>
        <tbody id="line-items-body"></tbody>
      </table>
      <button class="btn btn-ghost btn-sm mt-10" onclick="addLineItem()">+ Add Line Item</button>
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Notes / Payment Terms</label><textarea id="f-notes">${inv?esc(inv.notes):DB.settings.terms}</textarea></div>
    </div>
    <div class="modal-foot">
      ${inv?`<button class="btn btn-danger" onclick="deleteInvoice('${inv.id}')">Delete</button>`:''}
      ${inv&&(Number(inv.retentionPct)||0)>0?`<button class="btn btn-ghost" onclick="releaseRetention('${inv.id}')">Release Retention</button>`:''}
      ${inv?`<button class="btn btn-ghost" onclick="printDoc('invoice','${inv.id}')">PDF / Print</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveInvoice('${inv?inv.id:''}','${jobId||(inv?inv.jobId||'':'')}')">${inv?'Save Changes':'Create Invoice'}</button>
    </div>
  `);
  renderLineItems();
}
function saveInvoice(id, jobId){
  const custSelect = document.getElementById('f-customer').value;
  const customer = custSelect ? DB.customers.find(c=>c.id===custSelect) : null;
  const customerNameVal = customer ? customer.name : document.getElementById('f-customerName').value.trim();
  if(!customerNameVal){ toast('Customer is required','⚠️'); return; }
  const validItems = window._editingItems.filter(i=>i.desc||i.qty||i.rate);
  if(!validItems.length){ toast('Add at least one line item','⚠️'); return; }
  const dueDateVal = document.getElementById('f-dueDate').value;
  if(!dueDateVal){ toast('Due date is required','⚠️'); return; }
  const data = {
    customerId: customer ? customer.id : null,
    customerName: customerNameVal,
    status: document.getElementById('f-status').value,
    vatRate: Number(document.getElementById('f-vatRate').value)||0,
    dueDate: dueDateVal,
    amountPaid: Number(document.getElementById('f-amountPaid').value)||0,
    retentionPct: Number(document.getElementById('f-retentionPct').value)||0,
    notes: document.getElementById('f-notes').value,
    items: validItems,
    jobId: jobId || null
  };
  if(id){ Object.assign(DB.invoices.find(i=>i.id===id), data); toast('Invoice updated'); }
  else {
    const invoiceNumber = nextInvoiceNumber();
    DB.invoices.push(Object.assign({id:uid(), invoiceNumber, createdAt:new Date().toISOString().slice(0,10)}, data));
    logActivity('Invoice created', invoiceNumber+' — '+data.customerName);
    toast('Invoice '+invoiceNumber+' created');
  }
  save(); closeModal(); renderPage();
}
function deleteInvoice(id){
  const inv0 = DB.invoices.find(x=>x.id===id);
  confirmDelete('Delete '+(inv0?inv0.invoiceNumber:'this invoice')+'?', "This can't be undone.", ()=>{
    logActivity('Invoice deleted', inv0?inv0.invoiceNumber+' — '+inv0.customerName:id);
    DB.invoices = DB.invoices.filter(i=>i.id!==id); save(); closeModal(); renderPage(); toast('Invoice deleted','🗑️');
  });
}
function releaseRetention(id){
  const inv = DB.invoices.find(i=>i.id===id);
  if(!inv) return;
  inv.retentionPct = 0;
  save(); closeModal(); renderPage();
  toast('Retention released — full balance now due');
}

/* ===================== QUOTE & INVOICE TEMPLATES ===================== */
function applyTemplateToForm(kind, templateId){
  if(!templateId) return;
  const t = (DB.templates[kind]||[]).find(x=>x.id===templateId);
  if(!t) return;
  window._editingItems = t.items.map(i=>Object.assign({},i));
  renderLineItems();
  const vatField = document.getElementById('f-vatRate'); if(vatField) vatField.value = t.vatRate;
  const notesField = document.getElementById('f-notes'); if(notesField) notesField.value = t.notes||'';
  if(kind==='quote' && t.type){ const typeField = document.getElementById('f-type'); if(typeField) typeField.value = t.type; }
  updateTotals();
  toast('Template applied — adjust as needed');
}
function saveCurrentAsTemplate(kind){
  const items = (window._editingItems||[]).filter(i=>i.desc||i.qty||i.rate).map(i=>Object.assign({},i));
  if(!items.length){ toast('Add at least one line item first'); return; }
  const name = prompt('Save this as a template called:');
  if(!name || !name.trim()) return;
  const data = {
    name: name.trim(),
    vatRate: Number(document.getElementById('f-vatRate')?.value)||DB.settings.vatRate,
    notes: document.getElementById('f-notes')?.value || '',
    items
  };
  if(kind==='quote') data.type = document.getElementById('f-type')?.value;
  DB.templates[kind].push(Object.assign({id:uid()}, data));
  save();
  const sel = document.getElementById('f-template');
  if(sel) sel.innerHTML = `<option value="">— none —</option>${DB.templates[kind].map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join('')}`;
  toast('Template "'+data.name+'" saved');
}
function openTemplatesModal(kind){
  const list = DB.templates[kind]||[];
  const label = kind==='quote' ? 'Quote' : 'Invoice';
  openModal(`
    <div class="modal-head"><h2>${label} Templates</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Save a set of line items as a reusable template, then load it from the "Load Template" dropdown when creating a new ${label.toLowerCase()}.</p>
      <table><thead><tr><th>Name</th><th>Items</th><th>VAT</th><th></th></tr></thead>
      <tbody>${list.map(t=>`<tr>
        <td><strong>${esc(t.name)}</strong></td>
        <td>${t.items.length}</td>
        <td>${t.vatRate}%</td>
        <td><button class="icon-btn" aria-label="Edit template" onclick="openTemplateEditorModal('${kind}','${t.id}')">✎</button><button class="icon-btn" aria-label="Delete template" onclick="deleteTemplate('${kind}','${t.id}')">✕</button></td>
      </tr>`).join('') || `<tr><td colspan="4" class="muted" style="text-align:center;padding:20px;">No templates yet.</td></tr>`}</tbody></table>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Close</button>
      <button class="btn btn-gold" onclick="openTemplateEditorModal('${kind}')">+ New Template</button>
    </div>`);
}
function openTemplateEditorModal(kind, id){
  const list = DB.templates[kind];
  const t = id ? list.find(x=>x.id===id) : null;
  window._editingItems = t ? t.items.map(i=>Object.assign({},i)) : [{desc:'',qty:1,unit:'ea',rate:0}];
  const label = kind==='quote' ? 'Quote' : 'Invoice';
  openModal(`
    <div class="modal-head"><h2>${t?'Edit Template':'New '+label+' Template'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Template Name</label><input id="f-name" type="text" value="${t?esc(t.name):''}" placeholder="e.g. Standard Boiler Service"></div>
      <div class="form-row">
        ${kind==='quote'?`<div class="form-group"><label>Quote Type</label><select id="f-type">${QUOTE_TYPES.map(qt=>`<option ${t&&t.type===qt?'selected':''}>${qt}</option>`).join('')}</select></div>`:'<div></div>'}
        <div class="form-group"><label>VAT Rate (%)</label><input id="f-vatRate" type="number" value="${t?t.vatRate:DB.settings.vatRate}"></div>
      </div>
      <label>Line Items</label>
      <table class="line-items-table" id="line-items-table"><thead><tr><th>Description</th><th style="width:60px;">Qty</th><th style="width:70px;">Unit</th><th style="width:90px;">Rate £</th><th style="width:90px;">Total</th><th></th></tr></thead>
        <tbody id="line-items-body"></tbody>
      </table>
      <button class="btn btn-ghost btn-sm mt-10" onclick="addLineItem()">+ Add Line Item</button>
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Default Notes</label><textarea id="f-notes">${t?esc(t.notes||''):DB.settings.terms}</textarea></div>
    </div>
    <div class="modal-foot">
      ${t?`<button class="btn btn-danger" onclick="deleteTemplate('${kind}','${t.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="openTemplatesModal('${kind}')">← Back</button>
      <button class="btn btn-gold" onclick="saveTemplate('${kind}','${t?t.id:''}')">${t?'Save Changes':'Create Template'}</button>
    </div>`);
  renderLineItems();
}
function saveTemplate(kind, id){
  const data = {
    name: document.getElementById('f-name').value.trim()||'Untitled Template',
    vatRate: Number(document.getElementById('f-vatRate').value)||0,
    notes: document.getElementById('f-notes').value,
    items: window._editingItems.filter(i=>i.desc||i.qty||i.rate)
  };
  if(kind==='quote') data.type = document.getElementById('f-type').value;
  if(id){ Object.assign(DB.templates[kind].find(t=>t.id===id), data); toast('Template updated'); }
  else { DB.templates[kind].push(Object.assign({id:uid()}, data)); toast('Template created'); }
  save(); openTemplatesModal(kind);
}
function deleteTemplate(kind, id){
  confirmDelete('Delete this template?', "This can't be undone.", ()=>{
    DB.templates[kind] = DB.templates[kind].filter(t=>t.id!==id);
    save(); openTemplatesModal(kind); toast('Template deleted','🗑️');
  });
}

/* ===================== CALCULATOR WIDGET ===================== */
document.addEventListener('focusin', e=>{
  if(e.target && e.target.tagName==='INPUT' && e.target.type==='number') window._lastFocusedInput = e.target;
});
function toggleCalculator(){
  const existing = document.getElementById('calc-widget');
  if(existing){ existing.remove(); return; }
  window._calcExpr = '';
  const el = document.createElement('div');
  el.id = 'calc-widget';
  el.className = 'calc-widget';
  el.innerHTML = `
    <div class="calc-head">Calculator <button class="modal-close" onclick="toggleCalculator()">✕</button></div>
    <input id="calc-display" class="calc-display" readonly value="0">
    <div class="calc-grid">
      <button onclick="calcClear()">C</button><button onclick="calcBackspace()">⌫</button><button onclick="calcInput('%')">%</button><button onclick="calcInput('÷')">÷</button>
      <button onclick="calcInput('7')">7</button><button onclick="calcInput('8')">8</button><button onclick="calcInput('9')">9</button><button onclick="calcInput('×')">×</button>
      <button onclick="calcInput('4')">4</button><button onclick="calcInput('5')">5</button><button onclick="calcInput('6')">6</button><button onclick="calcInput('−')">−</button>
      <button onclick="calcInput('1')">1</button><button onclick="calcInput('2')">2</button><button onclick="calcInput('3')">3</button><button onclick="calcInput('+')">+</button>
      <button onclick="calcInput('0')" style="grid-column:span 2;">0</button><button onclick="calcInput('.')">.</button><button class="calc-eq" onclick="calcEquals()">=</button>
    </div>
    <button class="btn btn-gold btn-sm" style="width:100%;margin-top:8px;" onclick="calcInsert()">Insert into field</button>`;
  document.body.appendChild(el);
}
function calcRefreshDisplay(){ document.getElementById('calc-display').value = window._calcExpr || '0'; }
function calcInput(val){ window._calcExpr = (window._calcExpr||'') + val; calcRefreshDisplay(); }
function calcClear(){ window._calcExpr = ''; calcRefreshDisplay(); }
function calcBackspace(){ window._calcExpr = (window._calcExpr||'').slice(0,-1); calcRefreshDisplay(); }
function calcEquals(){
  try{
    const expr = (window._calcExpr||'0').replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/%/g,'/100');
    if(!/^[0-9+\-*/.() ]+$/.test(expr)) throw new Error('invalid');
    const result = Function('"use strict";return ('+expr+')')();
    window._calcExpr = String(Math.round(result*100)/100);
  }catch(e){ window._calcExpr = 'Error'; }
  calcRefreshDisplay();
}
function calcInsert(){
  const val = document.getElementById('calc-display').value;
  if(val==='Error') return;
  if(window._lastFocusedInput && document.body.contains(window._lastFocusedInput)){
    window._lastFocusedInput.value = val;
    window._lastFocusedInput.dispatchEvent(new Event('input', {bubbles:true}));
    toast('Inserted into field');
  } else {
    toast('Click a number field first, then Insert');
  }
}

function printDoc(kind, id){
  const isQuote = kind==='quote' || kind==='sf-quote';
  const isSf = kind==='sf-quote' || kind==='sf-invoice';
  let doc;
  if(kind==='quote') doc = DB.quotes.find(q=>q.id===id);
  else if(kind==='invoice') doc = DB.invoices.find(i=>i.id===id);
  else if(kind==='sf-quote') doc = (DB.sfQuotes||[]).find(q=>q.id===id);
  else doc = (DB.sfInvoices||[]).find(i=>i.id===id);
  const t = isQuote ? calcQuoteTotal(doc) : calcInvoiceTotal(doc);
  const number = isQuote ? doc.quoteNumber : doc.invoiceNumber;
  const toName = isSf ? doc.clientName : doc.customerName;
  const businessName = isSf ? 'SteadyFlow Marketing' : DB.settings.businessName;
  const accent = isSf ? '#00A99D' : '#E11D2A';
  const logoSrc = isSf ? 'assets/sf-logo.png' : 'assets/logo.png';
  const accentSoft = isSf ? '#E6F7F5' : '#FDECEC';
  const w = window.open('','_blank');
  w.document.write(`
    <html><head><title>${number}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Manrope',Arial,sans-serif;padding:40px;color:#1A1A1A;-webkit-font-smoothing:antialiased;}
      h1{color:${accent};font-size:24px;font-weight:800;letter-spacing:.2px;margin:0;}
      h2{color:${accent};font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 4px;}
      table{width:100%;border-collapse:collapse;margin-top:20px;}
      th{padding:9px 8px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:${accent};background:${accentSoft};}
      td{padding:9px 8px;border-bottom:1px solid #eee;text-align:left;font-size:13.5px;font-weight:500;}
      .tot{text-align:right;margin-top:14px;font-size:14.5px;font-weight:500;color:#444;}
      .tot strong{color:${accent};}
      .head{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid ${accent};padding-bottom:14px;}
      .head-left{display:flex;align-items:center;gap:18px;}
      .head-right{text-align:right;}
      .doc-number{color:${accent};font-weight:700;font-size:15px;}
      .logo-box{width:110px;height:110px;flex-shrink:0;border-radius:14px;overflow:hidden;}
      .logo-box img{width:100%;height:100%;object-fit:cover;}
      .to-line{font-weight:600;color:#111;}
    </style></head><body>
    <div class="head"><div class="head-left"><div class="logo-box"><img src="${logoSrc}" alt="${esc(businessName)}"></div><div><h1>${esc(businessName)}</h1>${isSf?'':`<div style="font-weight:500;">${esc(DB.settings.address)}</div><div style="font-weight:500;">${esc(DB.settings.phone)} · ${esc(DB.settings.email)}</div>`}</div></div>
    <div class="head-right"><h2>${isQuote?'QUOTE':'INVOICE'}</h2><div class="doc-number">${number}</div><div style="font-weight:500;">${fmtDate(doc.createdAt)}</div></div></div>
    <p style="margin-top:24px;font-weight:500;">To: <span class="to-line">${esc(toName)}</span></p>
    <table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Total</th></tr></thead>
    <tbody>${doc.items.map(i=>`<tr><td>${esc(i.desc)}</td><td>${i.qty}</td><td>${esc(i.unit)}</td><td>${fmt(i.rate)}</td><td>${fmt(i.qty*i.rate)}</td></tr>`).join('')}</tbody></table>
    <div class="tot">Subtotal: ${fmt(t.sub)}<br>VAT (${doc.vatRate}%): ${fmt(t.vat)}<br><strong style="font-size:19px;">Total: ${fmt(t.total)}</strong></div>
    <p style="margin-top:30px;font-size:12px;color:#666;">${esc(doc.notes||'')}</p>
    </body></html>`);
  w.document.close(); w.print();
}

/* ===================== CALENDAR ===================== */
let calCursor = new Date();
let calMode = 'due';

/* ---------- Due/upcoming aggregator — pulls real dates from every module ---------- */
function gcalUrl(title, dateStr, details, location){
  if(!dateStr) return '#';
  const start = dateStr.replace(/-/g,'');
  const endDate = new Date(dateStr); endDate.setDate(endDate.getDate()+1);
  const end = endDate.toISOString().slice(0,10).replace(/-/g,'');
  const params = new URLSearchParams({
    action:'TEMPLATE', text:title, dates:`${start}/${end}`, details: details||'', location: location||''
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
function buildDueItems(){
  const items = [];
  (DB.jobs||[]).forEach(j=>{
    if(!j.startDate || ['completed','cancelled','invoiced'].includes(j.status)) return;
    items.push({date:j.startDate, type:'Job', title:(j.jobNumber||'Job')+' — '+j.customerName, details:'Job start. Status: '+j.status, location:j.address||'', goRoute:'jobs', goId:j.id});
  });
  (DB.invoices||[]).forEach(i=>{
    if(!i.dueDate || i.status==='paid') return;
    const total = calcInvoiceTotal(i).total;
    items.push({date:i.dueDate, type:'Invoice Due', title:(i.invoiceNumber||'Invoice')+' — '+i.customerName+' ('+fmt(total)+')', details:'Invoice due. Status: '+i.status, location:'', goRoute:'invoices', goId:i.id});
  });
  (DB.quotes||[]).forEach(q=>{
    if(!q.validUntil || !['draft','sent'].includes(q.status)) return;
    items.push({date:q.validUntil, type:'Quote Expiry', title:(q.quoteNumber||'Quote')+' — '+q.customerName+' expires', details:'Quote valid until this date.', location:'', goRoute:'quotes', goId:q.id});
  });
  (paintRecords()||[]).forEach(r=>{
    if(!r.scheduledStart || ['lost','paid'].includes(r.stage)) return;
    items.push({date:r.scheduledStart, type:'Pipeline Job', title:'Pipeline — '+(r.clientName||'Unnamed'), details:'Painting/decorating job start ('+(r.jobType==='personal'?'Personal':'Joint w/ Fabs')+').', location:'', goRoute:'pipeline', goId:r.id});
  });
  (DB.leads||[]).forEach(l=>{
    if(!l.scheduledDate) return;
    items.push({date:l.scheduledDate, type:'Lead Scheduled', title:l.name+' — scheduled', details:'Lead/quote scheduled date.'+(l.notes?('\n\n'+l.notes):''), location:'', goRoute:'leads', goId:l.id});
  });
  items.sort((a,b)=>new Date(a.date)-new Date(b.date));
  return items;
}
function view_dueItems(){
  const items = buildDueItems();
  const today = new Date(); today.setHours(0,0,0,0);
  const in7 = new Date(today); in7.setDate(in7.getDate()+7);
  const in30 = new Date(today); in30.setDate(in30.getDate()+30);
  const buckets = {overdue:[], week:[], month:[], later:[]};
  items.forEach(it=>{
    const d = new Date(it.date);
    if(isNaN(d)) return;
    if(d<today) buckets.overdue.push(it);
    else if(d<=in7) buckets.week.push(it);
    else if(d<=in30) buckets.month.push(it);
    else buckets.later.push(it);
  });
  function row(it){
    const canDeepLink = it.goRoute==='jobs';
    return `<tr class="row-link" onclick="${it.goRoute?`navigate('${it.goRoute}'${canDeepLink&&it.goId?`,'${it.goId}'`:''})`:''}">
      <td>${fmtDate(it.date)}</td>
      <td><span class="tag-chip" style="background:${eventColor(it.type)}22;color:${eventColor(it.type)};">${esc(it.type)}</span></td>
      <td>${esc(it.title)}</td>
      <td><a class="btn btn-ghost btn-sm" href="${gcalUrl(it.title, it.date, it.details, it.location)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">+ Google Calendar</a></td>
    </tr>`;
  }
  function section(label, list, emptyMsg){
    return `<div class="card mt-10">
      <div class="card-title">${label} <span class="small muted">(${list.length})</span></div>
      <table><tbody>${list.length ? list.map(row).join('') : `<tr><td colspan="4" class="muted" style="text-align:center;padding:14px;">${emptyMsg}</td></tr>`}</tbody></table>
    </div>`;
  }
  return `
  ${section('⚠️ Overdue', buckets.overdue, 'Nothing overdue')}
  ${section('This Week', buckets.week, 'Nothing due in the next 7 days')}
  ${section('Next 30 Days', buckets.month, 'Nothing else due in the next 30 days')}
  ${buckets.later.length ? section('Later', buckets.later, '') : ''}
  `;
}
function setCalMode(m){ calMode = m; renderPage(); }
const CAL_TABS = `<div class="flex gap-8 mb-10">
  <button class="btn ${calMode==='due'?'btn-gold':'btn-ghost'} btn-sm" onclick="setCalMode('due')">⏰ Due &amp; Upcoming</button>
  <button class="btn ${calMode==='internal'?'btn-gold':'btn-ghost'} btn-sm" onclick="setCalMode('internal')">📋 Job Calendar</button>
  <button class="btn ${calMode==='google'?'btn-gold':'btn-ghost'} btn-sm" onclick="setCalMode('google')">📆 Google Calendar</button>
</div>`;
const GOOGLE_CAL_IDS = ['l.thomas@steadyflowmarketing.agency'];
function view_calendar(){
  if(calMode==='due'){
    return `${CAL_TABS}${view_dueItems()}`;
  }
  if(calMode==='google'){
    const src = GOOGLE_CAL_IDS.map(id=>`src=${encodeURIComponent(id)}`).join('&');
    return `${CAL_TABS}
    <div class="card" style="padding:0;overflow:hidden;">
      <iframe src="https://calendar.google.com/calendar/embed?${src}&ctz=Europe%2FLondon" style="border:0;width:100%;height:680px;display:block;" scrolling="no"></iframe>
    </div>
    <p class="small muted mt-10">Live view of ${GOOGLE_CAL_IDS.map(esc).join(' + ')}. If it shows as empty or private, stay signed into that Google account in this browser, or in Google Calendar settings → Access permissions, turn on "Make available to public" (read-only) so it always loads here regardless of who's viewing.</p>`;
  }
  const y = calCursor.getFullYear(), m = calCursor.getMonth();
  const firstDay = new Date(y,m,1);
  const startOffset = (firstDay.getDay()+6)%7; // Monday=0
  const daysInMonth = new Date(y,m+1,0).getDate();
  const today = new Date();

  const allEvents = DB.events.concat(
    DB.jobs.map(j=>({id:'job-'+j.id, title:j.jobNumber+' — '+j.customerName, date:j.startDate, type:'Job', assignedTo:j.assignedTo, jobId:j.id})),
    buildDueItems().filter(it=>it.type!=='Job').map(it=>({id:it.type+'-'+it.title, title:it.title, date:it.date, type:it.type}))
  );

  let cells = '';
  for(let i=0;i<startOffset;i++){
    const d = new Date(y,m,1-(startOffset-i));
    cells += `<div class="cal-cell other-month"><div class="cal-daynum">${d.getDate()}</div></div>`;
  }
  for(let day=1; day<=daysInMonth; day++){
    const dateStr = new Date(y,m,day).toISOString().slice(0,10);
    const isToday = today.getFullYear()===y && today.getMonth()===m && today.getDate()===day;
    const evs = allEvents.filter(e=>e.date===dateStr);
    cells += `<div class="cal-cell ${isToday?'today':''}">
      <div class="cal-daynum">${day}</div>
      ${evs.slice(0,3).map(e=>`<div class="cal-event" style="background:${eventColor(e.type)}33;color:${eventColor(e.type)};" onclick="${e.jobId?`navigate('jobs','${e.jobId}')`:(DB.events.find(x=>x.id===e.id)?`openEventModal('${e.id}')`:`setCalMode('due')`)}" title="${esc(e.title)}">${esc(e.title)}</div>`).join('')}
      ${evs.length>3?`<div class="small muted">+${evs.length-3} more</div>`:''}
    </div>`;
  }
  const totalCells = startOffset+daysInMonth;
  const trailing = (7-(totalCells%7))%7;
  for(let i=1;i<=trailing;i++){
    cells += `<div class="cal-cell other-month"><div class="cal-daynum">${i}</div></div>`;
  }

  return `
  ${CAL_TABS}
  <div class="flex-between mb-10">
    <div class="flex gap-8">
      <button class="btn btn-ghost btn-sm" onclick="calNav(-1)">← Prev</button>
      <button class="btn btn-ghost btn-sm" onclick="calNav(0)">Today</button>
      <button class="btn btn-ghost btn-sm" onclick="calNav(1)">Next →</button>
    </div>
    <h2 style="font-size:18px;font-weight:800;">${firstDay.toLocaleDateString('en-GB',{month:'long',year:'numeric'})}</h2>
    <div class="flex gap-8 small" style="flex-wrap:wrap;">
      <span class="tag-chip" style="background:${eventColor('Job')}22;color:${eventColor('Job')};">● Job</span>
      <span class="tag-chip" style="background:${eventColor('Site Visit')}22;color:${eventColor('Site Visit')};">● Site Visit</span>
      <span class="tag-chip" style="background:${eventColor('Invoice Due')}22;color:${eventColor('Invoice Due')};">● Invoice Due</span>
      <span class="tag-chip" style="background:${eventColor('Quote Expiry')}22;color:${eventColor('Quote Expiry')};">● Quote Expiry</span>
      <span class="tag-chip" style="background:${eventColor('Pipeline Job')}22;color:${eventColor('Pipeline Job')};">● Pipeline Job</span>
      <span class="tag-chip" style="background:${eventColor('Lead Scheduled')}22;color:${eventColor('Lead Scheduled')};">● Lead Scheduled</span>
    </div>
  </div>
  <div class="cal-grid">
    ${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="cal-dow">${d}</div>`).join('')}
    ${cells}
  </div>`;
}
function eventColor(type){
  return {Job:'#E11D2A','Site Visit':'#0EA5E9',Quote:'#7C3AED',Inspection:'#EF4444','Invoice Due':'#F59E0B','Quote Expiry':'#7C3AED','Pipeline Job':'#A78BFA','Lead Scheduled':'#22C55E'}[type] || '#1A1A1A';
}
function calNav(dir){
  if(dir===0) calCursor = new Date();
  else calCursor = new Date(calCursor.getFullYear(), calCursor.getMonth()+dir, 1);
  renderPage();
}
function afterRender_calendar(){}

function openEventModal(id){
  const ev = id ? DB.events.find(e=>e.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${ev?'Edit Event':'New Calendar Event'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Title</label><input id="f-title" type="text" value="${ev?esc(ev.title):''}"></div>
      <div class="form-row">
        <div class="form-group"><label>Date</label><input id="f-date" type="date" value="${ev?ev.date:''}"></div>
        <div class="form-group"><label>Type</label><select id="f-evtype">${['Site Visit','Job','Quote','Inspection'].map(t=>`<option ${ev&&ev.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
      </div>
      <div class="form-group"><label>Assigned To</label><select id="f-evassigned"><option value="Office">Office</option>${DB.employees.map(e=>`<option ${ev&&ev.assignedTo===e.name?'selected':''}>${esc(e.name)}</option>`).join('')}</select></div>
    </div>
    <div class="modal-foot">
      ${ev?`<button class="btn btn-danger" onclick="deleteEvent('${ev.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveEvent('${ev?ev.id:''}')">${ev?'Save':'Create Event'}</button>
    </div>`);
}
function saveEvent(id){
  const data = {title:document.getElementById('f-title').value.trim()||'Untitled Event', date:document.getElementById('f-date').value, type:document.getElementById('f-evtype').value, assignedTo:document.getElementById('f-evassigned').value};
  if(id){ Object.assign(DB.events.find(e=>e.id===id), data); toast('Event updated'); }
  else { DB.events.push(Object.assign({id:uid()}, data)); toast('Event created'); }
  save(); closeModal(); renderPage();
}
function deleteEvent(id){
  confirmDelete('Delete this event?', "This can't be undone.", ()=>{
    DB.events = DB.events.filter(e=>e.id!==id); save(); closeModal(); renderPage(); toast('Event deleted','🗑️');
  });
}

/* ===================== CUSTOMERS ===================== */
function view_customers(){
  if(currentParam) return view_customerDetail(currentParam);
  const rows = DB.customers.map(c=>{
    const jobs = DB.jobs.filter(j=>j.customerId===c.id || j.customerName===c.name);
    const spend = DB.invoices.filter(i=>(i.customerId===c.id||i.customerName===c.name)&&i.status==='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
    return `<tr class="row-link" onclick="navigate('customers','${c.id}')">
      <td><div class="flex gap-8"><div class="avatar">${esc(c.name.slice(0,2).toUpperCase())}</div><strong>${esc(c.name)}</strong></div></td>
      <td>${esc(c.propertyType)}</td>
      <td>${esc(c.phone)}</td>
      <td>${esc(c.leadSource)}</td>
      <td>${jobs.length}</td>
      <td>${fmt(spend)}</td>
    </tr>`;
  }).join('');
  return `<div class="card"><table>
    <thead><tr><th>Customer</th><th>Type</th><th>Phone</th><th>Source</th><th>Jobs</th><th>Lifetime Spend</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No customers yet</td></tr>'}</tbody>
  </table></div>`;
}
function view_customerDetail(id){
  const c = DB.customers.find(x=>x.id===id);
  if(!c) return '<div class="empty-state">Customer not found.</div>';
  const jobs = DB.jobs.filter(j=>j.customerId===c.id || j.customerName===c.name);
  const quotes = DB.quotes.filter(q=>q.customerId===c.id || q.customerName===c.name);
  const invoices = DB.invoices.filter(i=>i.customerId===c.id || i.customerName===c.name);
  const spend = invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  setTimeout(()=>{document.getElementById('page-title').textContent=c.name;},0);
  return `
  <button class="btn btn-ghost btn-sm mb-10" onclick="navigate('customers')">← All Customers</button>
  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card">
      <div class="card-title">Contact Info <button class="icon-btn" aria-label="Edit customer" onclick="openCustomerModal('${c.id}')">✎</button></div>
      <p class="small"><strong>Phone:</strong> ${esc(c.phone)}</p>
      <p class="small mt-10"><strong>Email:</strong> ${esc(c.email)}</p>
      <p class="small mt-10"><strong>Address:</strong> ${esc(c.address)}</p>
      <p class="small mt-10"><strong>Property Type:</strong> ${esc(c.propertyType)}</p>
      <p class="small mt-10"><strong>Lead Source:</strong> ${esc(c.leadSource)}</p>
      ${c.notes?`<div class="divider"></div><p class="small">${esc(c.notes)}</p>`:''}
    </div>
    <div class="card">
      <div class="card-title">Summary</div>
      <div class="flex-between small"><span class="muted">Lifetime Spend</span><strong>${fmt(spend)}</strong></div>
      <div class="divider"></div>
      <div class="flex-between small"><span class="muted">Total Jobs</span><strong>${jobs.length}</strong></div>
      <div class="divider"></div>
      <div class="flex-between small"><span class="muted">Quotes Sent</span><strong>${quotes.length}</strong></div>
      <div class="divider"></div>
      <div class="flex-between small"><span class="muted">Invoices</span><strong>${invoices.length}</strong></div>
    </div>
  </div>
  <div class="card">
    <div class="card-title">Job History</div>
    <table><thead><tr><th>Job #</th><th>Status</th><th>Start</th><th>Value</th></tr></thead>
    <tbody>${jobs.map(j=>`<tr class="row-link" onclick="navigate('jobs','${j.id}')"><td><strong>${esc(j.jobNumber)}</strong></td><td>${statusPill(j.status)}</td><td>${fmtDate(j.startDate)}</td><td>${fmt(j.expectedRevenue)}</td></tr>`).join('') || '<tr><td colspan="4" class="muted" style="text-align:center;padding:20px;">No job history</td></tr>'}</tbody></table>
  </div>`;
}
function openCustomerModal(id){
  const c = id ? DB.customers.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${c?'Edit Customer':'New Customer'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Name</label><input id="f-name" type="text" value="${c?esc(c.name):''}"></div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="f-phone" type="text" value="${c?esc(c.phone):''}"></div>
        <div class="form-group"><label>Email</label><input id="f-email" type="email" value="${c?esc(c.email):''}"></div>
      </div>
      <div class="form-group"><label>Address</label><input id="f-address" type="text" value="${c?esc(c.address):''}"></div>
      <div class="form-row">
        <div class="form-group"><label>Property Type</label><select id="f-propertyType"><option ${c&&c.propertyType==='Residential'?'selected':''}>Residential</option><option ${c&&c.propertyType==='Commercial'?'selected':''}>Commercial</option></select></div>
        <div class="form-group"><label>Lead Source</label><select id="f-leadSource">${['Website','Google','Facebook','Referral','Tender','Other'].map(s=>`<option ${c&&c.leadSource===s?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      <div class="form-group"><label>Notes</label><textarea id="f-notes">${c?esc(c.notes):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${c?`<button class="btn btn-danger" onclick="deleteCustomer('${c.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveCustomer('${c?c.id:''}')">${c?'Save Changes':'Create Customer'}</button>
    </div>`);
}
function saveCustomer(id){
  const nameVal = document.getElementById('f-name').value.trim();
  if(!nameVal){ toast('Customer name is required','⚠️'); document.getElementById('f-name').focus(); return; }
  const data = {name:nameVal, phone:document.getElementById('f-phone').value, email:document.getElementById('f-email').value,
    address:document.getElementById('f-address').value, propertyType:document.getElementById('f-propertyType').value, leadSource:document.getElementById('f-leadSource').value, notes:document.getElementById('f-notes').value};
  if(id){ Object.assign(DB.customers.find(c=>c.id===id), data); toast('Customer updated'); }
  else { DB.customers.push(Object.assign({id:uid()}, data)); logActivity('Customer created', data.name); toast('Customer created'); }
  save(); closeModal(); renderPage();
}
function deleteCustomer(id){
  const c0 = DB.customers.find(x=>x.id===id);
  confirmDelete('Delete '+(c0?c0.name:'this customer')+'?', "This can't be undone. Job/invoice history stays, but the customer record itself will be gone.", ()=>{
    logActivity('Customer deleted', c0?c0.name:id);
    DB.customers = DB.customers.filter(c=>c.id!==id); save(); closeModal(); navigate('customers'); toast('Customer deleted','🗑️');
  });
}

/* ===================== TEAM ===================== */
function view_team(){
  const cards = DB.employees.map(e=>`
    <div class="card">
      <div class="flex gap-8 mb-10"><div class="avatar" style="width:42px;height:42px;font-size:13px;">${esc(e.name.split(' ').map(n=>n[0]).join(''))}</div>
        <div><strong>${esc(e.name)}</strong><div class="small muted">${esc(e.role)}</div></div>
        <button class="icon-btn" style="margin-left:auto;" aria-label="Edit team member" onclick="openEmployeeModal('${e.id}')">✎</button>
      </div>
      <p class="small"><strong>Qualifications:</strong> ${esc(e.quals)}</p>
      <p class="small mt-10"><strong>Vehicle:</strong> ${esc(e.vehicle)}</p>
      <p class="small mt-10"><strong>Phone:</strong> ${esc(e.phone)}</p>
      <div class="divider"></div>
      <div class="flex-between small mb-10"><span>Availability</span><span class="pill ${e.availability==='Available'?'st-won':e.availability==='On Site'?'st-active':'st-onhold'}">${esc(e.availability)}</span></div>
      <div class="small muted mb-10">Holiday used: ${e.holidaysUsed} / ${e.holidaysTotal} days</div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${Math.min(100,(e.holidaysUsed/e.holidaysTotal)*100)}%"></div></div>
    </div>`).join('');
  return `<div class="grid grid-3">${cards || '<div class="empty-state">No team members yet</div>'}</div>`;
}
function openEmployeeModal(id){
  const e = id ? DB.employees.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${e?'Edit Team Member':'New Team Member'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Name</label><input id="f-name" type="text" value="${e?esc(e.name):''}"></div>
        <div class="form-group"><label>Role</label><input id="f-role" type="text" value="${e?esc(e.role):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="f-phone" type="text" value="${e?esc(e.phone):''}"></div>
        <div class="form-group"><label>Email</label><input id="f-email" type="email" value="${e?esc(e.email):''}"></div>
      </div>
      <div class="form-group"><label>Qualifications / Training</label><input id="f-quals" type="text" value="${e?esc(e.quals):''}"></div>
      <div class="form-group"><label>Vehicle Assigned</label><input id="f-vehicle" type="text" value="${e?esc(e.vehicle):''}"></div>
      <div class="form-row">
        <div class="form-group"><label>Holidays Used</label><input id="f-holidaysUsed" type="number" value="${e?e.holidaysUsed:0}"></div>
        <div class="form-group"><label>Holiday Allowance</label><input id="f-holidaysTotal" type="number" value="${e?e.holidaysTotal:25}"></div>
      </div>
      <div class="form-group"><label>Availability</label><select id="f-availability">${['Available','On Site','On Leave'].map(s=>`<option ${e&&e.availability===s?'selected':''}>${s}</option>`).join('')}</select></div>
    </div>
    <div class="modal-foot">
      ${e?`<button class="btn btn-danger" onclick="deleteEmployee('${e.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveEmployee('${e?e.id:''}')">${e?'Save Changes':'Add Team Member'}</button>
    </div>`);
}
function saveEmployee(id){
  const data = {name:document.getElementById('f-name').value.trim()||'Unnamed', role:document.getElementById('f-role').value, phone:document.getElementById('f-phone').value,
    email:document.getElementById('f-email').value, quals:document.getElementById('f-quals').value, vehicle:document.getElementById('f-vehicle').value,
    holidaysUsed:Number(document.getElementById('f-holidaysUsed').value)||0, holidaysTotal:Number(document.getElementById('f-holidaysTotal').value)||25,
    availability:document.getElementById('f-availability').value};
  if(id){ Object.assign(DB.employees.find(e=>e.id===id), data); toast('Team member updated'); }
  else { DB.employees.push(Object.assign({id:uid()}, data)); toast('Team member added'); }
  save(); closeModal(); renderPage();
}
function deleteEmployee(id){
  const e0 = DB.employees.find(x=>x.id===id);
  confirmDelete('Remove '+(e0?e0.name:'this team member')+'?', "This can't be undone.", ()=>{
    DB.employees = DB.employees.filter(e=>e.id!==id); save(); closeModal(); renderPage(); toast('Removed','🗑️');
  });
}

/* ===================== SUBCONTRACTORS ===================== */
function view_subcontractors(){
  const cards = DB.subcontractors.map(s=>{
    const days = daysUntil(s.insuranceExpiry);
    let insCls='st-won', insLabel='Valid';
    if(days!==null){ if(days<0){insCls='st-overdue';insLabel='Expired';} else if(days<30){insCls='st-onhold';insLabel='Expiring soon';} }
    const jobsUsing = DB.jobs.filter(j=>(j.costLines||[]).some(c=>c.category==='Subcontractor' && c.desc && c.desc.includes(s.name))).length;
    return `
    <div class="card">
      <div class="flex gap-8 mb-10"><div class="avatar" style="width:42px;height:42px;font-size:13px;">${esc(s.name.split(' ').map(n=>n[0]).join('').slice(0,2))}</div>
        <div><strong>${esc(s.name)}</strong><div class="small muted">${esc(s.trade)}</div></div>
        <button class="icon-btn" style="margin-left:auto;" aria-label="Edit subcontractor" onclick="openSubcontractorModal('${s.id}')">✎</button>
      </div>
      <p class="small"><strong>Day Rate:</strong> ${s.dayRate?fmt(s.dayRate):'Quote per job'}</p>
      <p class="small mt-10"><strong>Phone:</strong> ${esc(s.phone)} &nbsp; <strong>Email:</strong> ${esc(s.email)}</p>
      <p class="small mt-10 muted">${esc(s.notes||'')}</p>
      <div class="divider"></div>
      <div class="flex-between small mb-10"><span>Insurance (${fmtDate(s.insuranceExpiry)})</span><span class="pill ${insCls}"><span class="pill-dot" style="background:currentColor;"></span>${insLabel}</span></div>
      <div class="small muted">Used on ${jobsUsing} job${jobsUsing!==1?'s':''}</div>
    </div>`;
  }).join('');
  return `<div class="grid grid-3">${cards || '<div class="empty-state">No subcontractors yet</div>'}</div>`;
}
function openSubcontractorModal(id){
  const s = id ? DB.subcontractors.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${s?'Edit Subcontractor':'New Subcontractor'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Company / Name</label><input id="f-name" type="text" value="${s?esc(s.name):''}"></div>
        <div class="form-group"><label>Trade</label><input id="f-trade" type="text" value="${s?esc(s.trade):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="f-phone" type="text" value="${s?esc(s.phone):''}"></div>
        <div class="form-group"><label>Email</label><input id="f-email" type="email" value="${s?esc(s.email):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Day Rate (£, 0 = quote per job)</label><input id="f-dayRate" type="number" value="${s?s.dayRate:0}"></div>
        <div class="form-group"><label>Insurance Expiry</label><input id="f-insuranceExpiry" type="date" value="${s?s.insuranceExpiry||'':''}"></div>
      </div>
      <div class="form-group"><label>Notes</label><textarea id="f-notes">${s?esc(s.notes):''}</textarea></div>
    </div>
    <div class="modal-foot">
      ${s?`<button class="btn btn-danger" onclick="deleteSubcontractor('${s.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSubcontractor('${s?s.id:''}')">${s?'Save Changes':'Add Subcontractor'}</button>
    </div>`);
}
function saveSubcontractor(id){
  const data = {name:document.getElementById('f-name').value.trim()||'Unnamed', trade:document.getElementById('f-trade').value,
    phone:document.getElementById('f-phone').value, email:document.getElementById('f-email').value,
    dayRate:Number(document.getElementById('f-dayRate').value)||0, insuranceExpiry:document.getElementById('f-insuranceExpiry').value||null,
    notes:document.getElementById('f-notes').value};
  if(id){ Object.assign(DB.subcontractors.find(s=>s.id===id), data); toast('Subcontractor updated'); }
  else { DB.subcontractors.push(Object.assign({id:uid()}, data)); toast('Subcontractor added'); }
  save(); closeModal(); renderPage(); renderNav();
}
function deleteSubcontractor(id){
  const s0 = DB.subcontractors.find(x=>x.id===id);
  confirmDelete('Remove '+(s0?s0.name:'this subcontractor')+'?', "This can't be undone.", ()=>{
    DB.subcontractors = DB.subcontractors.filter(s=>s.id!==id); save(); closeModal(); renderPage(); renderNav(); toast('Removed','🗑️');
  });
}

/* ===================== CONTACT IMPORT ===================== */
let IMPORT_ROWS = [];
function parseVCardFile(text){
  const blocks = text.split(/BEGIN:VCARD/i).slice(1);
  return blocks.map(block=>{
    const fnMatch = block.match(/^FN:(.*)$/im);
    const telMatch = block.match(/^TEL[^:]*:(.*)$/im);
    const noteMatch = block.match(/^NOTE:(.*)$/im);
    return {
      name: fnMatch ? fnMatch[1].trim() : '',
      phone: telMatch ? telMatch[1].trim() : '',
      note: noteMatch ? noteMatch[1].trim() : ''
    };
  }).filter(r=>r.name || r.phone);
}
function openImportContactsModal(defaultType){
  IMPORT_ROWS = [];
  openModal(`
    <div class="modal-head"><h2>Import Contacts</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Upload a .vcf file exported from your phone's contacts. Anything with "Client" in the name is auto-tagged as a Customer — review and adjust before importing.</p>
      <input id="import-file-input" type="file" accept=".vcf,text/vcard" onchange="handleImportFile(this,'${defaultType||'customer'}')">
      <div id="import-review" style="margin-top:16px;"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button id="import-run-btn" class="btn btn-gold" style="display:none;" onclick="runImportContacts()">Import Selected</button>
    </div>`, true);
}
function handleImportFile(input, defaultType){
  const file = input.files && input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e)=>{
    IMPORT_ROWS = parseVCardFile(e.target.result).map(r=>{
      const isClient = /client/i.test(r.name);
      return Object.assign(r, {selected: isClient, type: isClient ? 'customer' : (defaultType==='subcontractor'?'subcontractor':'skip')});
    });
    renderImportReview();
  };
  reader.readAsText(file);
}
function renderImportReview(){
  const box = document.getElementById('import-review');
  const btn = document.getElementById('import-run-btn');
  if(!box) return;
  if(!IMPORT_ROWS.length){ box.innerHTML = '<p class="small muted">No contacts found in that file.</p>'; if(btn) btn.style.display='none'; return; }
  const selectedCount = IMPORT_ROWS.filter(r=>r.selected && r.type!=='skip').length;
  box.innerHTML = `
    <p class="small muted mb-10">${IMPORT_ROWS.length} contacts found — ${selectedCount} selected to import.</p>
    <div style="max-height:340px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
      <table style="width:100%;">
        <thead><tr><th style="width:36px;"></th><th>Name</th><th>Phone</th><th>Import as</th></tr></thead>
        <tbody>
          ${IMPORT_ROWS.map((r,i)=>`
            <tr>
              <td><input type="checkbox" ${r.selected?'checked':''} onchange="IMPORT_ROWS[${i}].selected=this.checked; renderImportReview();"></td>
              <td><input type="text" value="${esc(r.name)}" style="width:100%;" onchange="IMPORT_ROWS[${i}].name=this.value;"></td>
              <td><input type="text" value="${esc(r.phone)}" style="width:100%;" onchange="IMPORT_ROWS[${i}].phone=this.value;"></td>
              <td>
                <select onchange="IMPORT_ROWS[${i}].type=this.value; renderImportReview();">
                  <option value="customer" ${r.type==='customer'?'selected':''}>Customer</option>
                  <option value="subcontractor" ${r.type==='subcontractor'?'selected':''}>Subcontractor</option>
                  <option value="skip" ${r.type==='skip'?'selected':''}>Skip</option>
                </select>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  if(btn) btn.style.display = 'inline-block';
}
function runImportContacts(){
  const rows = IMPORT_ROWS.filter(r=>r.selected && r.type!=='skip');
  if(!rows.length){ toast('Nothing selected to import','⚠️'); return; }
  let custCount = 0, subCount = 0;
  rows.forEach(r=>{
    const importNote = (r.note?r.note+' — ':'')+'Imported from phone contacts';
    if(r.type==='customer'){
      DB.customers.push({id:uid(), name:r.name||'Unnamed', phone:r.phone, email:'', address:'', propertyType:'Residential', leadSource:'Other', notes:importNote});
      custCount++;
    } else if(r.type==='subcontractor'){
      DB.subcontractors.push({id:uid(), name:r.name||'Unnamed', trade:'', phone:r.phone, email:'', dayRate:0, insuranceExpiry:null, notes:importNote});
      subCount++;
    }
  });
  logActivity('Contacts imported', `${custCount} customer(s), ${subCount} subcontractor(s)`);
  save(); closeModal(); renderPage(); renderNav();
  toast(`Imported ${custCount} customer${custCount===1?'':'s'}${subCount?`, ${subCount} subcontractor${subCount===1?'':'s'}`:''}`);
}

/* ===================== EXPENSES ===================== */
const EXPENSE_CATEGORIES = ['Materials','Fuel','Vehicles','Tools','Subcontractors','Advertising','Software','Insurance','Miscellaneous'];
/* ===================== BUDGET ===================== */
function view_budget(){
  const now = new Date();
  const thisMonth = now.getMonth(), thisYear = now.getFullYear();
  const monthExpenses = DB.expenses.filter(e=>{const d=new Date(e.date); return d.getMonth()===thisMonth && d.getFullYear()===thisYear;});
  const spentByCat = {};
  monthExpenses.forEach(e=>{ spentByCat[e.category] = (spentByCat[e.category]||0) + Number(e.amount); });

  const target = DB.settings.monthlyTargets[thisMonth] || (DB.settings.annualTarget/12);
  const paidInvoices = DB.invoices.filter(i=>i.status==='paid');
  const monthRevenue = paidInvoices.filter(i=>{const d=new Date(i.createdAt); return d.getMonth()===thisMonth && d.getFullYear()===thisYear;}).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const pctTarget = target? Math.round((monthRevenue/target)*100) : 0;

  const totalBudget = EXPENSE_CATEGORIES.reduce((s,c)=>s+Number(DB.budgets[c]||0),0);
  const totalSpent = Object.values(spentByCat).reduce((a,b)=>a+b,0);
  const remaining = totalBudget - totalSpent;

  const rows = EXPENSE_CATEGORIES.map(cat=>{
    const budget = Number(DB.budgets[cat]||0);
    const spent = spentByCat[cat]||0;
    const pct = budget? Math.round((spent/budget)*100) : (spent?100:0);
    const over = budget>0 && spent>budget;
    const barColor = over? 'var(--danger)' : (pct>85? '#F59E0B' : 'var(--teal)');
    return `<tr>
      <td><span class="tag-chip">${esc(cat)}</span></td>
      <td><input type="number" value="${budget||''}" placeholder="0" style="width:100px;" onchange="setBudget('${cat}', this.value)"></td>
      <td>${fmt(spent)}</td>
      <td>
        <div style="background:#eee;border-radius:6px;height:8px;width:100%;max-width:160px;overflow:hidden;">
          <div style="background:${barColor};height:100%;width:${Math.min(pct,100)}%;"></div>
        </div>
        <span class="small muted">${budget? pct+'%' : 'no budget set'}</span>
      </td>
      <td style="color:${over?'var(--danger)':'inherit'};">${budget? fmt(budget-spent) : '—'}</td>
    </tr>`;
  }).join('');

  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Income Target (this month)</div><div class="kpi-value">${fmt(target)}</div><div class="small muted mt-10">${fmt(monthRevenue)} received · ${pctTarget}%</div></div>
    <div class="card kpi-card"><div class="kpi-label">Total Budgeted (expenses)</div><div class="kpi-value">${fmt(totalBudget)}</div><div class="small muted mt-10">${fmt(totalSpent)} spent this month</div></div>
    <div class="card kpi-card"><div class="kpi-label">Remaining Budget</div><div class="kpi-value" style="color:${remaining<0?'var(--danger)':'inherit'};">${fmt(remaining)}</div></div>
  </div>
  <div class="card">
    <div class="card-title">Category Budgets — ${now.toLocaleString('en-GB',{month:'long',year:'numeric'})}</div>
    <p class="small muted mb-10">Set a monthly budget per expense category — actual spend pulls automatically from Expenses.</p>
    <table>
      <thead><tr><th>Category</th><th>Monthly Budget (£)</th><th>Spent</th><th>Progress</th><th>Remaining</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}
function setBudget(cat, value){
  DB.budgets[cat] = Number(value)||0;
  save(); renderPage();
}

function view_expenses(){
  const now = new Date();
  const monthExpenses = DB.expenses.filter(e=>{const d=new Date(e.date); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();});
  const total = monthExpenses.reduce((s,e)=>s+Number(e.amount),0);
  const monthRevenue = DB.invoices.filter(i=>i.status==='paid').filter(i=>{const d=new Date(i.createdAt); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();}).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const margin = monthRevenue ? Math.round(((monthRevenue-total)/monthRevenue)*100) : 0;

  const byCategory = {};
  monthExpenses.forEach(e=>{byCategory[e.category]=(byCategory[e.category]||0)+Number(e.amount);});

  const rows = DB.expenses.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).map(e=>`
    <tr>
      <td><span class="tag-chip">${esc(e.category)}</span></td>
      <td>${esc(e.desc)}</td>
      <td>${fmtDate(e.date)}</td>
      <td>${fmt(e.amount)}</td>
      <td><button class="icon-btn" aria-label="Edit expense" onclick="openExpenseModal('${e.id}')">✎</button><button class="icon-btn" aria-label="Delete expense" onclick="deleteExpense('${e.id}')">✕</button></td>
    </tr>`).join('');

  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Monthly Expenses</div><div class="kpi-value">${fmt(total)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Net Profit (this month)</div><div class="kpi-value">${fmt(monthRevenue-total)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Profit Margin</div><div class="kpi-value">${margin}%</div></div>
  </div>
  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card"><div class="card-title">Spend by Category (this month)</div><div style="position:relative;height:220px;width:100%;"><canvas id="chartExpenseCat"></canvas></div></div>
    <div class="card">
      <div class="card-title">Category Breakdown</div>
      ${Object.entries(byCategory).map(([cat,amt])=>`<div class="flex-between small mb-10"><span>${esc(cat)}</span><strong>${fmt(amt)}</strong></div>`).join('') || '<p class="muted small">No expenses recorded this month.</p>'}
    </div>
  </div>
  <div class="card"><table>
    <thead><tr><th>Category</th><th>Description</th><th>Date</th><th>Amount</th><th></th></tr></thead>
    <tbody>${rows || '<tr><td colspan="5" class="muted" style="text-align:center;padding:30px;">No expenses logged yet</td></tr>'}</tbody>
  </table></div>
  <script>setTimeout(()=>{
    const cats=${JSON.stringify(Object.keys(byCategory))}; const vals=${JSON.stringify(Object.values(byCategory))};
    chartSafe('chartExpenseCat','doughnut',{labels:cats.length?cats:['No data'],datasets:[{data:vals.length?vals:[1],backgroundColor:['#E11D2A','#1A1A1A','#22C55E','#F59E0B','#EF4444','#7C3AED','#0EA5E9','#EC4899','#84CC16']}]},{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}});
  },0)</script>`;
}
function openExpenseModal(id){
  const e = id ? DB.expenses.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${e?'Edit Expense':'New Expense'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${EXPENSE_CATEGORIES.map(c=>`<option ${e&&e.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label>Amount (£)</label><input id="f-amount" type="number" value="${e?e.amount:''}"></div>
      </div>
      <div class="form-group"><label>Description</label><input id="f-desc" type="text" value="${e?esc(e.desc):''}"></div>
      <div class="form-group"><label>Date</label><input id="f-date" type="date" value="${e?e.date:new Date().toISOString().slice(0,10)}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveExpense('${e?e.id:''}')">${e?'Save Changes':'Add Expense'}</button>
    </div>`);
}
function saveExpense(id){
  const amountVal = Number(document.getElementById('f-amount').value)||0;
  if(amountVal<=0){ toast('Enter an amount greater than £0','⚠️'); document.getElementById('f-amount').focus(); return; }
  const data = {category:document.getElementById('f-category').value, amount:amountVal, desc:document.getElementById('f-desc').value, date:document.getElementById('f-date').value};
  if(id){ Object.assign(DB.expenses.find(e=>e.id===id), data); toast('Expense updated'); }
  else { DB.expenses.push(Object.assign({id:uid()}, data)); toast('Expense added'); }
  save(); closeModal(); renderPage();
}
function deleteExpense(id){
  confirmDelete('Delete this expense?', "This can't be undone.", ()=>{
    DB.expenses = DB.expenses.filter(e=>e.id!==id); save(); renderPage(); toast('Expense deleted','🗑️');
  });
}

/* ===================== COMPLIANCE ===================== */
const COMPLIANCE_CATEGORIES = ['Certification','Insurance','RAMS','Method Statement','COSHH','Driving Licence','Training Record','Warranty','Contract','Health & Safety'];
function complianceStatus(c){
  const dd = daysUntil(c.expiryDate);
  if(dd===null) return {label:'No Expiry', cls:'st-draft'};
  if(dd<0) return {label:'Expired', cls:'st-expired'};
  if(dd<30) return {label:'Expiring Soon', cls:'st-expiring'};
  return {label:'Valid', cls:'st-valid'};
}
function view_compliance(){
  const expiring = DB.compliance.filter(c=>{const dd=daysUntil(c.expiryDate); return dd!==null && dd<30;});
  const rows = DB.compliance.slice().sort((a,b)=>new Date(a.expiryDate||'2999-01-01')-new Date(b.expiryDate||'2999-01-01')).map(c=>{
    const s = complianceStatus(c);
    return `<tr>
      <td><strong>${esc(c.name)}</strong></td>
      <td><span class="tag-chip">${esc(c.category)}</span></td>
      <td>${esc(c.issuer)}</td>
      <td>${fmtDate(c.expiryDate)}</td>
      <td><span class="pill ${s.cls}">${s.label}</span></td>
      <td><button class="icon-btn" aria-label="Edit compliance document" onclick="openComplianceModal('${c.id}')">✎</button><button class="icon-btn" aria-label="Delete compliance document" onclick="deleteCompliance('${c.id}')">✕</button></td>
    </tr>`;
  }).join('');
  return `
  ${expiring.length?`<div class="card" style="border-color:#F59E0B;background:rgba(245,158,11,.12);margin-bottom:18px;">
    <strong>⚠️ ${expiring.length} document${expiring.length>1?'s':''} expiring within 30 days or already expired</strong>
    <p class="small muted mt-10">${expiring.map(c=>esc(c.name)).join(' · ')}</p>
  </div>`:''}
  <div class="card"><table>
    <thead><tr><th>Document</th><th>Category</th><th>Issuer</th><th>Expiry</th><th>Status</th><th></th></tr></thead>
    <tbody>${rows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No compliance documents stored yet</td></tr>'}</tbody>
  </table></div>`;
}
function openComplianceModal(id){
  const c = id ? DB.compliance.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${c?'Edit Document':'Add Compliance Document'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Document Name</label><input id="f-name" type="text" value="${c?esc(c.name):''}" placeholder="e.g. Tom Bracewell — Gas Safe Registration"></div>
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${COMPLIANCE_CATEGORIES.map(cat=>`<option ${c&&c.category===cat?'selected':''}>${cat}</option>`).join('')}</select></div>
        <div class="form-group"><label>Issuer</label><input id="f-issuer" type="text" value="${c?esc(c.issuer):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Issue Date</label><input id="f-issueDate" type="date" value="${c?c.issueDate:''}"></div>
        <div class="form-group"><label>Expiry Date</label><input id="f-expiryDate" type="date" value="${c?c.expiryDate:''}"></div>
      </div>
    </div>
    <div class="modal-foot">
      ${c?`<button class="btn btn-danger" onclick="deleteCompliance('${c.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveCompliance('${c?c.id:''}')">${c?'Save Changes':'Add Document'}</button>
    </div>`);
}
function saveCompliance(id){
  const data = {name:document.getElementById('f-name').value.trim()||'Untitled Document', category:document.getElementById('f-category').value,
    issuer:document.getElementById('f-issuer').value, issueDate:document.getElementById('f-issueDate').value, expiryDate:document.getElementById('f-expiryDate').value};
  if(id){ Object.assign(DB.compliance.find(c=>c.id===id), data); toast('Document updated'); }
  else { DB.compliance.push(Object.assign({id:uid()}, data)); toast('Document added'); }
  save(); closeModal(); renderPage(); renderNav();
}
function deleteCompliance(id){
  confirmDelete('Delete this compliance document?', "This can't be undone.", ()=>{
    DB.compliance = DB.compliance.filter(c=>c.id!==id); save(); renderPage(); renderNav(); toast('Document deleted','🗑️');
  });
}

/* ===================== STEADYFLOW EXPENSES ===================== */
const SF_EXPENSE_CATEGORIES = ['Software & Subscriptions','Ad Spend','Freelancers & Contractors','Content Production','Stock Assets','Training','Travel','Office & Admin','Miscellaneous'];
function view_sf_expenses(){
  DB.sfExpenses = DB.sfExpenses||[];
  const now = new Date();
  const monthExpenses = DB.sfExpenses.filter(e=>{const d=new Date(e.date); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();});
  const total = monthExpenses.reduce((s,e)=>s+Number(e.amount),0);
  const monthRevenue = (DB.sfInvoices||[]).filter(i=>i.status==='paid').filter(i=>{const d=new Date(i.createdAt); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();}).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const margin = monthRevenue ? Math.round(((monthRevenue-total)/monthRevenue)*100) : 0;

  const byCategory = {};
  monthExpenses.forEach(e=>{byCategory[e.category]=(byCategory[e.category]||0)+Number(e.amount);});

  const rows = DB.sfExpenses.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).map(e=>`
    <tr>
      <td><span class="tag-chip">${esc(e.category)}</span></td>
      <td>${esc(e.desc)}</td>
      <td>${fmtDate(e.date)}</td>
      <td>${fmt(e.amount)}</td>
      <td><button class="icon-btn" aria-label="Edit expense" onclick="openSfExpenseModal('${e.id}')">✎</button><button class="icon-btn" aria-label="Delete expense" onclick="deleteSfExpense('${e.id}')">✕</button></td>
    </tr>`).join('');

  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Monthly Expenses</div><div class="kpi-value">${fmt(total)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Net Profit (this month)</div><div class="kpi-value">${fmt(monthRevenue-total)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Profit Margin</div><div class="kpi-value">${margin}%</div></div>
  </div>
  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card"><div class="card-title">Spend by Category (this month)</div><div style="position:relative;height:220px;width:100%;"><canvas id="chartSfExpenseCat"></canvas></div></div>
    <div class="card">
      <div class="card-title">Category Breakdown</div>
      ${Object.entries(byCategory).map(([cat,amt])=>`<div class="flex-between small mb-10"><span>${esc(cat)}</span><strong>${fmt(amt)}</strong></div>`).join('') || '<p class="muted small">No expenses recorded this month.</p>'}
    </div>
  </div>
  <div class="card"><table>
    <thead><tr><th>Category</th><th>Description</th><th>Date</th><th>Amount</th><th></th></tr></thead>
    <tbody>${rows || '<tr><td colspan="5" class="muted" style="text-align:center;padding:30px;">No expenses logged yet</td></tr>'}</tbody>
  </table></div>
  <script>setTimeout(()=>{
    const cats=${JSON.stringify(Object.keys(byCategory))}; const vals=${JSON.stringify(Object.values(byCategory))};
    chartSafe('chartSfExpenseCat','doughnut',{labels:cats.length?cats:['No data'],datasets:[{data:vals.length?vals:[1],backgroundColor:['#00A99D','#1A1A1A','#22C55E','#F59E0B','#EF4444','#7C3AED','#0EA5E9','#EC4899','#84CC16']}]},{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}});
  },0)</script>`;
}
function openSfExpenseModal(id){
  const e = id ? DB.sfExpenses.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${e?'Edit Expense':'New Expense'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${SF_EXPENSE_CATEGORIES.map(c=>`<option ${e&&e.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label>Amount (£)</label><input id="f-amount" type="number" value="${e?e.amount:''}"></div>
      </div>
      <div class="form-group"><label>Description</label><input id="f-desc" type="text" value="${e?esc(e.desc):''}"></div>
      <div class="form-group"><label>Date</label><input id="f-date" type="date" value="${e?e.date:new Date().toISOString().slice(0,10)}"></div>
    </div>
    <div class="modal-foot">
      ${e?`<button class="btn btn-danger" onclick="deleteSfExpense('${e.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSfExpense('${e?e.id:''}')">${e?'Save Changes':'Add Expense'}</button>
    </div>`);
}
function saveSfExpense(id){
  const amountVal = Number(document.getElementById('f-amount').value)||0;
  if(amountVal<=0){ toast('Enter an amount greater than £0','⚠️'); document.getElementById('f-amount').focus(); return; }
  const data = {category:document.getElementById('f-category').value, amount:amountVal, desc:document.getElementById('f-desc').value, date:document.getElementById('f-date').value};
  DB.sfExpenses = DB.sfExpenses||[];
  if(id){ Object.assign(DB.sfExpenses.find(e=>e.id===id), data); toast('Expense updated'); }
  else { DB.sfExpenses.push(Object.assign({id:uid()}, data)); toast('Expense added'); }
  save(); closeModal(); renderPage();
}
function deleteSfExpense(id){
  confirmDelete('Delete this expense?', "This can't be undone.", ()=>{
    DB.sfExpenses = (DB.sfExpenses||[]).filter(e=>e.id!==id); save(); renderPage(); toast('Expense deleted','🗑️');
  });
}

/* ===================== STEADYFLOW COMPLIANCE ===================== */
const SF_COMPLIANCE_CATEGORIES = ['Contract','NDA','Insurance','Domain & Hosting','Software License','Data Protection','Other'];
function view_sf_compliance(){
  DB.sfCompliance = DB.sfCompliance||[];
  const expiring = DB.sfCompliance.filter(c=>{const dd=daysUntil(c.expiryDate); return dd!==null && dd<30;});
  const rows = DB.sfCompliance.slice().sort((a,b)=>new Date(a.expiryDate||'2999-01-01')-new Date(b.expiryDate||'2999-01-01')).map(c=>{
    const s = complianceStatus(c);
    return `<tr>
      <td><strong>${esc(c.name)}</strong></td>
      <td><span class="tag-chip">${esc(c.category)}</span></td>
      <td>${esc(c.issuer)}</td>
      <td>${fmtDate(c.expiryDate)}</td>
      <td><span class="pill ${s.cls}">${s.label}</span></td>
      <td><button class="icon-btn" aria-label="Edit compliance document" onclick="openSfComplianceModal('${c.id}')">✎</button><button class="icon-btn" aria-label="Delete compliance document" onclick="deleteSfCompliance('${c.id}')">✕</button></td>
    </tr>`;
  }).join('');
  return `
  ${expiring.length?`<div class="card" style="border-color:#F59E0B;background:rgba(245,158,11,.12);margin-bottom:18px;">
    <strong>⚠️ ${expiring.length} document${expiring.length>1?'s':''} expiring within 30 days or already expired</strong>
    <p class="small muted mt-10">${expiring.map(c=>esc(c.name)).join(' · ')}</p>
  </div>`:''}
  <div class="card"><table>
    <thead><tr><th>Document</th><th>Category</th><th>Issuer</th><th>Expiry</th><th>Status</th><th></th></tr></thead>
    <tbody>${rows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:30px;">No compliance documents stored yet</td></tr>'}</tbody>
  </table></div>`;
}
function openSfComplianceModal(id){
  const c = id ? DB.sfCompliance.find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${c?'Edit Document':'Add Compliance Document'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Document Name</label><input id="f-name" type="text" value="${c?esc(c.name):''}" placeholder="e.g. Client Services Agreement — Acme Ltd"></div>
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${SF_COMPLIANCE_CATEGORIES.map(cat=>`<option ${c&&c.category===cat?'selected':''}>${cat}</option>`).join('')}</select></div>
        <div class="form-group"><label>Issuer</label><input id="f-issuer" type="text" value="${c?esc(c.issuer):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Issue Date</label><input id="f-issueDate" type="date" value="${c?c.issueDate:''}"></div>
        <div class="form-group"><label>Expiry Date</label><input id="f-expiryDate" type="date" value="${c?c.expiryDate:''}"></div>
      </div>
    </div>
    <div class="modal-foot">
      ${c?`<button class="btn btn-danger" onclick="deleteSfCompliance('${c.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveSfCompliance('${c?c.id:''}')">${c?'Save Changes':'Add Document'}</button>
    </div>`);
}
function saveSfCompliance(id){
  const data = {name:document.getElementById('f-name').value.trim()||'Untitled Document', category:document.getElementById('f-category').value,
    issuer:document.getElementById('f-issuer').value, issueDate:document.getElementById('f-issueDate').value, expiryDate:document.getElementById('f-expiryDate').value};
  DB.sfCompliance = DB.sfCompliance||[];
  if(id){ Object.assign(DB.sfCompliance.find(c=>c.id===id), data); toast('Document updated'); }
  else { DB.sfCompliance.push(Object.assign({id:uid()}, data)); toast('Document added'); }
  save(); closeModal(); renderPage(); renderNav();
}
function deleteSfCompliance(id){
  confirmDelete('Delete this compliance document?', "This can't be undone.", ()=>{
    DB.sfCompliance = (DB.sfCompliance||[]).filter(c=>c.id!==id); save(); renderPage(); renderNav(); toast('Document deleted','🗑️');
  });
}

/* ===================== REPORTS ===================== */
/* ===================== ACTIVITY LOG ===================== */
function view_activity(){
  const log = DB.activityLog||[];
  const rows = log.map(a=>`
    <tr>
      <td class="small muted" style="white-space:nowrap;">${fmtDateTime(a.at)}</td>
      <td><strong>${esc(a.action)}</strong></td>
      <td class="small muted">${esc(a.detail||'')}</td>
    </tr>`).join('');
  return `
  <div class="card">
    <div class="card-title">Recent activity <span class="small muted">${log.length} logged</span></div>
    <p class="small muted mb-10">Records job, invoice, quote and customer creation/deletion so there's a trail of what changed and when. Kept locally, most recent 300 events.</p>
    <table>
      <thead><tr><th>When</th><th>Action</th><th>Detail</th></tr></thead>
      <tbody>${rows || '<tr><td colspan="3" class="muted" style="text-align:center;padding:30px;">Nothing logged yet — this fills in as you create and delete records.</td></tr>'}</tbody>
    </table>
  </div>`;
}
function fmtDateTime(iso){
  try{
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) + ' ' + d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
  }catch(e){ return iso||'—'; }
}

function view_reports(){
  return `
  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card"><div class="card-title">Revenue by Month</div><div style="position:relative;height:220px;width:100%;"><canvas id="repRevenue"></canvas></div></div>
    <div class="card"><div class="card-title">Engineer Performance — Revenue Generated</div><div style="position:relative;height:220px;width:100%;"><canvas id="repEngineer"></canvas></div></div>
  </div>
  <div class="grid grid-2" style="margin-bottom:18px;">
    <div class="card"><div class="card-title">Lead Source Effectiveness</div><div style="position:relative;height:220px;width:100%;"><canvas id="repLeadSrc"></canvas></div></div>
    <div class="card"><div class="card-title">Most Profitable Job Types</div><div style="position:relative;height:220px;width:100%;"><canvas id="repJobType"></canvas></div></div>
  </div>
  <div class="card">
    <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Monthly Director's Report</div><button class="btn btn-dark btn-sm" onclick="generateMonthlyReport()">Generate End-of-Month Report</button></div>
    <div id="monthly-report-output"></div>
  </div>`;
}
function afterRender_reports(){
  const now = new Date(); const months=[];
  for(let i=11;i>=0;i--){ months.push(new Date(now.getFullYear(), now.getMonth()-i,1)); }
  const labels = months.map(d=>d.toLocaleDateString('en-GB',{month:'short'}));
  const rev = months.map(d=>DB.invoices.filter(i=>i.status==='paid').filter(i=>{const id=new Date(i.createdAt);return id.getMonth()===d.getMonth()&&id.getFullYear()===d.getFullYear();}).reduce((s,i)=>s+calcInvoiceTotal(i).total,0));
  chartSafe('repRevenue','bar',{labels,datasets:[{label:'Revenue',data:rev,backgroundColor:'#E11D2A',borderRadius:6}]},{plugins:{legend:{display:false}}});

  const engPerf = {};
  DB.jobs.forEach(j=>{ if(j.assignedTo) engPerf[j.assignedTo]=(engPerf[j.assignedTo]||0)+(j.actualRevenue||j.expectedRevenue||0); });
  chartSafe('repEngineer','bar',{labels:Object.keys(engPerf),datasets:[{label:'Revenue',data:Object.values(engPerf),backgroundColor:'#1A1A1A',borderRadius:6}]},{indexAxis:'y',plugins:{legend:{display:false}}});

  const srcWin = {}; const srcTotal = {};
  DB.leads.forEach(l=>{ srcTotal[l.source]=(srcTotal[l.source]||0)+1; if(l.stage==='Won'||l.stage==='Paid') srcWin[l.source]=(srcWin[l.source]||0)+1; });
  const srcLabels = Object.keys(srcTotal);
  chartSafe('repLeadSrc','bar',{labels:srcLabels,datasets:[
    {label:'Total Leads',data:srcLabels.map(s=>srcTotal[s]),backgroundColor:'#E8E6E1',borderRadius:6},
    {label:'Won',data:srcLabels.map(s=>srcWin[s]||0),backgroundColor:'#22C55E',borderRadius:6}
  ]},{plugins:{legend:{position:'bottom'}}});

  const typeRev = {Residential:0,Commercial:0};
  DB.jobs.forEach(j=>{ typeRev[j.propertyType] = (typeRev[j.propertyType]||0)+(j.actualRevenue||j.expectedRevenue||0); });
  chartSafe('repJobType','doughnut',{labels:Object.keys(typeRev),datasets:[{data:Object.values(typeRev),backgroundColor:['#E11D2A','#1A1A1A']}]},{plugins:{legend:{position:'bottom'}}});
}
function generateMonthlyReport(){
  const now = new Date();
  const rev = DB.invoices.filter(i=>i.status==='paid').filter(i=>{const d=new Date(i.createdAt);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();}).reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  const exp = DB.expenses.filter(e=>{const d=new Date(e.date);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();}).reduce((s,e)=>s+Number(e.amount),0);
  const jobsCompleted = DB.jobs.filter(j=>['completed','invoiced'].includes(j.status)).length;
  const newLeads = DB.leads.length;
  const outstanding = DB.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+calcInvoiceTotal(i).total,0);
  document.getElementById('monthly-report-output').innerHTML = `
    <div class="divider"></div>
    <h3 style="font-size:15px;margin-bottom:10px;">${now.toLocaleDateString('en-GB',{month:'long',year:'numeric'})} Summary</h3>
    <p class="small">Revenue collected: <strong>${fmt(rev)}</strong> &nbsp;|&nbsp; Expenses: <strong>${fmt(exp)}</strong> &nbsp;|&nbsp; Net profit: <strong>${fmt(rev-exp)}</strong></p>
    <p class="small mt-10">Jobs completed to date: <strong>${jobsCompleted}</strong> &nbsp;|&nbsp; Active leads in pipeline: <strong>${newLeads}</strong> &nbsp;|&nbsp; Outstanding invoices: <strong>${fmt(outstanding)}</strong></p>
    <p class="small mt-10 muted">Report generated ${fmtDate(now.toISOString())} for SteadyWorks Ltd.</p>`;
  toast('Report generated');
}

/* ===================== SETTINGS ===================== */
function view_settings(){
  const s = DB.settings;
  return `
  <div class="grid grid-2">
    <div class="card">
      <div class="card-title">Company Details</div>
      <div class="form-group"><label>Business Name</label><input id="s-businessName" type="text" value="${esc(s.businessName)}"></div>
      <div class="form-group"><label>Company Reg. No.</label><input id="s-regNo" type="text" value="${esc(s.regNo)}"></div>
      <div class="form-group"><label>Address</label><input id="s-address" type="text" value="${esc(s.address)}"></div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="s-phone" type="text" value="${esc(s.phone)}"></div>
        <div class="form-group"><label>Email</label><input id="s-email" type="email" value="${esc(s.email)}"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Tax & Default Rates</div>
      <div class="form-row">
        <div class="form-group"><label>VAT Rate (%)</label><input id="s-vatRate" type="number" value="${s.vatRate}"></div>
        <div class="form-group"><label>Annual Revenue Target (£)</label><input id="s-annualTarget" type="number" value="${s.annualTarget}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Standard Labour Rate (£/hr)</label><input id="s-labour" type="number" value="${s.rates.labour}"></div>
        <div class="form-group"><label>Standard Callout (£)</label><input id="s-callout" type="number" value="${s.rates.callout}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Emergency Callout (£)</label><input id="s-emergencyCallout" type="number" value="${s.rates.emergencyCallout}"></div>
        <div class="form-group"><label>Day Rate (£)</label><input id="s-dayRate" type="number" value="${s.rates.dayRate}"></div>
      </div>
      <div class="form-group"><label>Standard Markup (%)</label><input id="s-markup" type="number" value="${s.rates.markup}"></div>
    </div>
  </div>
  <div class="card mt-10">
    <div class="card-title">SteadyFlow Targets</div>
    <div class="form-row">
      <div class="form-group"><label>Monthly MRR Target (£)</label><input id="s-sfMonthlyTarget" type="number" value="${s.sfMonthlyTarget||0}"></div>
      <div class="form-group"><label>Weekly Email Target</label><input id="s-sfWeeklyEmailTarget" type="number" value="${s.sfWeeklyEmailTarget||0}"></div>
      <div class="form-group"><label>Weekly Call Target</label><input id="s-sfWeeklyCallTarget" type="number" value="${s.sfWeeklyCallTarget||0}"></div>
    </div>
  </div>
  <div class="card mt-10">
    <div class="card-title">Default Quote / Invoice Terms</div>
    <textarea id="s-terms" style="min-height:90px;">${esc(s.terms)}</textarea>
  </div>
  <div class="flex" style="justify-content:flex-end;margin-top:16px;">
    <button class="btn btn-gold" onclick="saveSettings()">Save Settings</button>
  </div>`;
}
function saveSettings(){
  Object.assign(DB.settings, {
    businessName: document.getElementById('s-businessName').value,
    regNo: document.getElementById('s-regNo').value,
    address: document.getElementById('s-address').value,
    phone: document.getElementById('s-phone').value,
    email: document.getElementById('s-email').value,
    vatRate: Number(document.getElementById('s-vatRate').value)||0,
    annualTarget: Number(document.getElementById('s-annualTarget').value)||0,
    sfMonthlyTarget: Number(document.getElementById('s-sfMonthlyTarget').value)||0,
    sfWeeklyEmailTarget: Number(document.getElementById('s-sfWeeklyEmailTarget').value)||0,
    sfWeeklyCallTarget: Number(document.getElementById('s-sfWeeklyCallTarget').value)||0,
    terms: document.getElementById('s-terms').value,
    rates: {
      labour: Number(document.getElementById('s-labour').value)||0,
      callout: Number(document.getElementById('s-callout').value)||0,
      emergencyCallout: Number(document.getElementById('s-emergencyCallout').value)||0,
      dayRate: Number(document.getElementById('s-dayRate').value)||0,
      markup: Number(document.getElementById('s-markup').value)||0
    }
  });
  DB.settings.monthlyTargets = Array(12).fill(DB.settings.annualTarget/12);
  save();
  toast('Settings saved');
}

/* ===================== PAINT PIPELINE (SteadyWorks × Fabs) ===================== */
const PAINT_QUOTE_STAGES = [
  {id:'draft', label:'Draft'},
  {id:'sent', label:'Sent'},
  {id:'followup', label:'Follow-up'},
  {id:'accepted', label:'Accepted'}
];
const PAINT_JOB_STAGES = [
  {id:'scheduled', label:'Scheduled'},
  {id:'inprogress', label:'In Progress'},
  {id:'completed', label:'Completed'},
  {id:'paid', label:'Paid'}
];
const PAINT_LOST_STAGE = {id:'lost', label:'Lost / Declined'};
const PAINT_STAGE_MAP = {};
PAINT_QUOTE_STAGES.concat(PAINT_JOB_STAGES, [PAINT_LOST_STAGE]).forEach(st=>{ PAINT_STAGE_MAP[st.id] = st.label; });
const PAINT_TRADES = ['Painter','Plasterer','Electrician','Plumber','Tiler','Carpenter','Roofer','Labourer','Other'];
const PAINT_LEAD_SOURCES = ['Referral','Instagram','Google','Repeat client','Other'];
const PAINT_DEPOSIT_STATUSES = [
  {id:'not_taken', label:'Not taken'},
  {id:'taken', label:'Deposit taken'},
  {id:'balance_paid', label:'Balance paid'}
];

/* ---------- PAINT PIPELINE — its own Supabase tables, not the shared DB blob ----------
   This is deliberate: it's the one part of Steady Inc a non-staff outside
   collaborator (Fabs) may eventually get their own restricted login to,
   with real database-level access control (RLS), not just a hidden nav
   item. Living in its own tables also means it can never be wiped by the
   whole-DB-blob overwrite bug the rest of the app had to work around. */
const PAINT_PIPELINE_OWNER_ID = 'ba2f4f82-30a4-4e7a-acab-533a336d2cb4'; // l.thomas@steadyflowmarketing.agency — fixed so both owner and partner logins write rows visible to each other under RLS
let PAINT_JOBS_CACHE = [];
let PAINT_SETTINGS_CACHE = {weeklyProfitTarget:2500, marketingSpendWeekly:300, marginLaneLow:20, marginLaneHigh:35, defaultDepositPct:25, reinvestmentPct:10, fabSplitPct:50, ownerId:PAINT_PIPELINE_OWNER_ID, partnerId:null};
let PAINT_NOTES_CACHE = [];
let PAINT_SPEND_CACHE = [];
let PAINT_DATA_LOADED = false;

function paintSettings(){ return PAINT_SETTINGS_CACHE; }
function paintRecords(){ return PAINT_JOBS_CACHE; }
function paintNotes(){ return PAINT_NOTES_CACHE; }
function paintSpend(){ return PAINT_SPEND_CACHE; }
function paintStageLabel(id){ return PAINT_STAGE_MAP[id] || id; }
function paintSpendInWeek(weekStart){
  return paintSpend().filter(s=>paintInWeek(s.spend_date, weekStart)).reduce((sum,s)=>sum+(Number(s.amount)||0),0);
}
function paintSpendTotal(){
  return paintSpend().reduce((sum,s)=>sum+(Number(s.amount)||0),0);
}
function paintSpendBySource(){
  const totals = {};
  paintSpend().forEach(s=>{ const src = s.source||'Other'; totals[src] = (totals[src]||0) + (Number(s.amount)||0); });
  return totals;
}

function paintJobRowToRecord(row){
  return {
    id: row.id,
    clientName: row.client_name || 'Unnamed',
    quoteValue: Number(row.quote_value)||0,
    materialsCost: Number(row.materials_cost)||0,
    tradeCosts: row.trade_costs || [],
    depositPct: Number(row.deposit_pct)||0,
    depositStatus: row.deposit_status || 'not_taken',
    leadSource: row.lead_source || '',
    dateQuoted: row.date_quoted || '',
    dateAccepted: row.date_accepted || '',
    scheduledStart: row.scheduled_start || '',
    completedDate: row.completed_date || '',
    notes: row.notes || '',
    stage: row.stage || 'draft',
    jobType: row.job_type || 'joint'
  };
}
function paintSettingsRowToObject(row){
  return {
    weeklyProfitTarget: Number(row.weekly_profit_target)||0,
    marketingSpendWeekly: Number(row.marketing_spend_weekly)||0,
    marginLaneLow: Number(row.margin_lane_low)||0,
    marginLaneHigh: Number(row.margin_lane_high)||0,
    defaultDepositPct: Number(row.default_deposit_pct)||0,
    reinvestmentPct: Number(row.reinvestment_pct)||0,
    fabSplitPct: Number(row.fab_split_pct)!=null ? Number(row.fab_split_pct) : 50,
    ownerId: row.owner_id,
    partnerId: row.partner_id
  };
}
async function loadPaintPipelineData(){
  try{
    const [{data: jobRows, error: jobsErr}, {data: settingsRow, error: settingsErr}, {data: noteRows, error: notesErr}, {data: spendRows, error: spendErr}] = await Promise.all([
      sb.from('paint_pipeline_jobs').select('*').order('created_at', {ascending:true}),
      sb.from('paint_pipeline_settings').select('*').eq('id',1).maybeSingle(),
      sb.from('paint_pipeline_notes').select('*').order('created_at', {ascending:false}),
      sb.from('paint_pipeline_marketing_spend').select('*').order('spend_date', {ascending:false})
    ]);
    if(!jobsErr && jobRows) PAINT_JOBS_CACHE = jobRows.map(paintJobRowToRecord);
    if(!settingsErr && settingsRow) PAINT_SETTINGS_CACHE = paintSettingsRowToObject(settingsRow);
    if(!notesErr && noteRows) PAINT_NOTES_CACHE = noteRows;
    if(!spendErr && spendRows) PAINT_SPEND_CACHE = spendRows;
    PAINT_DATA_LOADED = true;
  }catch(e){ console.warn('Paint pipeline load failed:', e); }
}
let _paintRealtimeChannel = null;
function subscribePaintPipelineRealtime(){
  if(_paintRealtimeChannel) return;
  _paintRealtimeChannel = sb.channel('paint-pipeline-changes')
    .on('postgres_changes', {event:'*', schema:'public', table:'paint_pipeline_jobs'}, payload=>{
      if(payload.eventType==='DELETE'){
        PAINT_JOBS_CACHE = PAINT_JOBS_CACHE.filter(r=>r.id!==payload.old.id);
      } else {
        const rec = paintJobRowToRecord(payload.new);
        const idx = PAINT_JOBS_CACHE.findIndex(r=>r.id===rec.id);
        if(idx>-1) PAINT_JOBS_CACHE[idx] = rec; else PAINT_JOBS_CACHE.push(rec);
      }
      if(currentRoute==='pipeline' || currentRoute==='sw-dashboard' || currentRoute==='dashboard') renderPage();
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'paint_pipeline_settings'}, payload=>{
      if(payload.new) PAINT_SETTINGS_CACHE = paintSettingsRowToObject(payload.new);
      if(currentRoute==='pipeline') renderPage();
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'paint_pipeline_notes'}, payload=>{
      if(payload.eventType==='DELETE'){
        PAINT_NOTES_CACHE = PAINT_NOTES_CACHE.filter(n=>n.id!==payload.old.id);
      } else if(!PAINT_NOTES_CACHE.find(n=>n.id===payload.new.id)){
        PAINT_NOTES_CACHE.unshift(payload.new);
      }
      if(currentRoute==='pipeline') renderPage();
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'paint_pipeline_marketing_spend'}, payload=>{
      if(payload.eventType==='DELETE'){
        PAINT_SPEND_CACHE = PAINT_SPEND_CACHE.filter(s=>s.id!==payload.old.id);
      } else if(!PAINT_SPEND_CACHE.find(s=>s.id===payload.new.id)){
        PAINT_SPEND_CACHE.unshift(payload.new);
      }
      if(currentRoute==='pipeline' || currentRoute==='sw-dashboard') renderPage();
    })
    .subscribe();
}
async function addPaintSpend(){
  const dateEl = document.getElementById('ms-date'), amtEl = document.getElementById('ms-amount'), srcEl = document.getElementById('ms-source'), noteEl = document.getElementById('ms-notes');
  const amount = Number(amtEl.value)||0;
  if(amount<=0){ toast('Enter an amount first'); return; }
  const row = {
    owner_id: PAINT_PIPELINE_OWNER_ID,
    spend_date: dateEl.value || new Date().toISOString().slice(0,10),
    amount,
    source: srcEl.value,
    notes: noteEl.value.trim()
  };
  const {data, error} = await sb.from('paint_pipeline_marketing_spend').insert(row).select().single();
  if(error){ toast('Could not log that spend — check your connection'); return; }
  if(!PAINT_SPEND_CACHE.find(s=>s.id===data.id)) PAINT_SPEND_CACHE.unshift(data);
  amtEl.value = ''; noteEl.value = '';
  renderPage();
  toast('Marketing spend logged');
}
function deletePaintSpend(id){
  confirmDelete('Delete this spend entry?', "This can't be undone.", async ()=>{
    PAINT_SPEND_CACHE = PAINT_SPEND_CACHE.filter(s=>s.id!==id);
    closeModal(); renderPage();
    const {error} = await sb.from('paint_pipeline_marketing_spend').delete().eq('id', id);
    if(error) toast('Delete failed to sync — check your connection');
  });
}
async function postPaintNote(){
  const box = document.getElementById('paint-note-input');
  if(!box) return;
  const body = box.value.trim();
  if(!body) return;
  box.disabled = true;
  const row = {
    author_id: CURRENT_USER_ID,
    author_email: CURRENT_USER_EMAIL,
    author_role: CURRENT_PROFILE.role,
    body
  };
  const {data, error} = await sb.from('paint_pipeline_notes').insert(row).select().single();
  box.disabled = false;
  if(error){ toast('Could not post that note — check your connection'); return; }
  if(!PAINT_NOTES_CACHE.find(n=>n.id===data.id)) PAINT_NOTES_CACHE.unshift(data);
  box.value = '';
  renderPage();
}
async function deletePaintNote(id){
  confirmDelete('Delete this note?', "This can't be undone.", async ()=>{
    PAINT_NOTES_CACHE = PAINT_NOTES_CACHE.filter(n=>n.id!==id);
    closeModal(); renderPage();
    const {error} = await sb.from('paint_pipeline_notes').delete().eq('id', id);
    if(error) toast('Delete failed to sync — check your connection');
  });
}

function paintLabourTotal(rec){
  return (rec.tradeCosts||[]).reduce((s,t)=> s + (Number(t.days)||0)*(Number(t.dayRate)||0), 0);
}
function paintDaysTotal(rec){
  return (rec.tradeCosts||[]).reduce((s,t)=> s + (Number(t.days)||0), 0);
}
function paintCalc(rec){
  const labour = paintLabourTotal(rec);
  const materials = Number(rec.materialsCost)||0;
  const value = Number(rec.quoteValue)||0;
  const margin = value - materials - labour;
  const pct = value>0 ? (margin/value*100) : 0;
  return {labour, materials, value, margin, pct, days: paintDaysTotal(rec)};
}
// Joint jobs are subcontracted out with Fabs — margin isn't take-home, it's what's left
// to (a) top up a reinvestment reserve for lead-gen/equipment/marketing,
// then (b) split between SteadyWorks and Fabs on the joint venture.
// Personal jobs are SteadyWorks-only — no reserve taken automatically, no Fabs share.
function paintSplit(rec){
  const c = paintCalc(rec);
  const s = paintSettings();
  if((rec.jobType||'joint')==='personal'){
    return Object.assign({}, c, {reinvestment:0, splittable:c.margin, swShare:c.margin, fabsShare:0});
  }
  const reinvestPct = Number(s.reinvestmentPct)||0;
  const swPct = Number(s.fabSplitPct)!=null ? Number(s.fabSplitPct) : 50;
  const reinvestment = c.margin * reinvestPct/100;
  const splittable = c.margin - reinvestment;
  const swShare = splittable * swPct/100;
  const fabsShare = splittable - swShare;
  return Object.assign({}, c, {reinvestment, splittable, swShare, fabsShare});
}
const PAINT_JOB_TYPES = [{id:'joint', label:'Joint (with Fabs)'}, {id:'personal', label:'Personal (SteadyWorks only)'}];
let PAINT_TYPE_FILTER = 'joint';
function paintFilteredRecords(){
  const recs = paintRecords();
  if(PAINT_TYPE_FILTER==='all') return recs;
  return recs.filter(r=>(r.jobType||'joint')===PAINT_TYPE_FILTER);
}
function setPaintTypeFilter(type){ PAINT_TYPE_FILTER = type; renderPage(); }

/* ---------- week helpers (Mon-start, last 8 weeks incl. current) ---------- */
function paintStartOfWeek(d){
  const x = new Date(d); const day = (x.getDay()+6)%7;
  x.setHours(0,0,0,0); x.setDate(x.getDate()-day);
  return x;
}
function paintLast8WeekStarts(){
  const weeks = [];
  const thisWeekStart = paintStartOfWeek(new Date());
  for(let i=7;i>=0;i--){ const d = new Date(thisWeekStart); d.setDate(d.getDate()-7*i); weeks.push(d); }
  return weeks;
}
function paintWeekLabel(d){ return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short'}); }
function paintInWeek(dateStr, weekStart){
  if(!dateStr) return false;
  const d = new Date(dateStr);
  if(isNaN(d)) return false;
  const end = new Date(weekStart); end.setDate(end.getDate()+7);
  return d>=weekStart && d<end;
}

/* ---------- PAGE ---------- */
let PAINT_SHOW_LOST = true;

function view_pipeline(){
  const recs = paintFilteredRecords();
  const s = paintSettings();
  const profitLabel = PAINT_TYPE_FILTER==='personal' ? 'Profit (this wk)' : PAINT_TYPE_FILTER==='all' ? 'Total Profit (this wk)' : 'Joint Profit (this wk)';

  const pipelineValue = recs.filter(r=>!['lost','paid'].includes(r.stage)).reduce((sum,r)=>sum+(Number(r.quoteValue)||0),0);
  const marginable = recs.filter(r=>['accepted','scheduled','inprogress','completed','paid'].includes(r.stage) && Number(r.quoteValue)>0);
  const avgMarginPct = marginable.length ? marginable.reduce((s2,r)=>s2+paintCalc(r).pct,0)/marginable.length : 0;
  const decided = recs.filter(r=>['accepted','scheduled','inprogress','completed','paid','lost'].includes(r.stage));
  const won = decided.filter(r=>r.stage!=='lost').length;
  const conversionRate = decided.length ? (won/decided.length*100) : 0;

  const weeks = paintLast8WeekStarts();
  const thisWeekStart = weeks[weeks.length-1];
  const thisWeekAccepted = recs.filter(r=>paintInWeek(r.dateAccepted, thisWeekStart));
  const thisWeekRevenue = thisWeekAccepted.reduce((s2,r)=>s2+(Number(r.quoteValue)||0),0);
  const thisWeekCosts = thisWeekAccepted.reduce((s2,r)=>{const c=paintCalc(r); return s2+c.materials+c.labour;},0);
  const thisWeekMarketingSpend = paintSpendInWeek(thisWeekStart);
  const thisWeekProfit = thisWeekRevenue - thisWeekCosts - thisWeekMarketingSpend;
  const thisWeekReinvestment = thisWeekAccepted.reduce((s2,r)=>s2+paintSplit(r).reinvestment,0);
  const thisWeekSwShare = thisWeekAccepted.reduce((s2,r)=>s2+paintSplit(r).swShare,0);
  const thisWeekFabsShare = thisWeekAccepted.reduce((s2,r)=>s2+paintSplit(r).fabsShare,0);

  const laneMarkerPct = Math.max(0, Math.min(100, avgMarginPct));

  const collected = recs.filter(r=>paintInWeek(r.dateAccepted, thisWeekStart) && r.depositStatus==='taken').reduce((s2,r)=>s2+((Number(r.quoteValue)||0)*(Number(r.depositPct)||0)/100),0)
    + recs.filter(r=>r.depositStatus==='balance_paid' && paintInWeek(r.completedDate||r.dateAccepted, thisWeekStart)).reduce((s2,r)=>s2+(Number(r.quoteValue)||0),0);
  const owed = recs.filter(r=>['scheduled','inprogress','completed'].includes(r.stage)).reduce((s2,r)=>s2+paintCalc(r).labour,0);
  const marketing = thisWeekMarketingSpend;
  const cfMax = Math.max(collected, owed, marketing, thisWeekReinvestment, 1);
  const spendBySource = paintSpendBySource();
  const totalSpendAllTime = paintSpendTotal();

  function kanbanCol(stage, muted, divider){
    const items = recs.filter(r=>r.stage===stage.id);
    const total = items.reduce((s2,r)=>s2+(Number(r.quoteValue)||0),0);
    return `<div class="kanban-col ${muted?'lost-col':''} ${divider?'job-divider':''}" data-stage="${stage.id}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="dropPaint(event,'${stage.id}')">
      <div class="kanban-col-head"><span>${esc(stage.label)} (${items.length})</span><span>${fmt(total)}</span></div>
      ${items.map(r=>{
        const c = paintCalc(r);
        return `<div class="kanban-card" draggable="true" ondragstart="dragPaint(event,'${r.id}')" onclick="openPaintRecordModal('${r.id}')" title="${esc(r.clientName||'Unnamed')}">
          <div class="kc-name">${esc(r.clientName||'Unnamed')}${PAINT_TYPE_FILTER==='all'?` <span class="small muted">${(r.jobType||'joint')==='personal'?'· Personal':'· Joint'}</span>`:''}</div>
          <div class="kc-meta">${fmt(c.value)} · ${c.pct.toFixed(0)}%</div>
          ${r.leadSource?`<div class="kc-meta">${esc(r.leadSource)}</div>`:''}
        </div>`;
      }).join('') || '<div class="muted small" style="padding:8px 4px;">Empty</div>'}
    </div>`;
  }

  const quoteCols = PAINT_QUOTE_STAGES.map(st=>kanbanCol(st,false)).join('');
  const jobCols = PAINT_JOB_STAGES.map((st,i)=>kanbanCol(st,false,i===0)).join('');
  const lostCol = PAINT_SHOW_LOST ? kanbanCol(PAINT_LOST_STAGE, true) : '';
  const totalCols = PAINT_QUOTE_STAGES.length + PAINT_JOB_STAGES.length + (PAINT_SHOW_LOST?1:0);

  const notes = paintNotes();
  const notesHtml = notes.length ? notes.map(n=>{
    const isOwner = n.author_role==='owner';
    const who = n.author_email===CURRENT_USER_EMAIL ? 'You' : (isOwner ? 'SteadyWorks' : 'Fabs');
    return `<div class="paint-note">
      <div class="paint-note-head">
        <span class="pill ${isOwner?'st-won':'st-scheduled'}">${esc(who)}</span>
        <span class="small muted">${esc(n.author_email||'')} · ${fmtDate(n.created_at)}</span>
        <button class="icon-btn" style="margin-left:auto;" onclick="deletePaintNote('${n.id}')" title="Delete note">✕</button>
      </div>
      <div class="paint-note-body">${esc(n.body)}</div>
    </div>`;
  }).join('') : '<div class="muted small" style="padding:10px 4px;">No notes yet — leave one below for whoever\'s on the other side of this job.</div>';

  return `
  ${motdBanner()}
  <div class="card paint-masthead">
    <img src="assets/logo.png" onerror="this.style.display='none'" alt="SteadyWorks">
    <span class="pm-x">×</span>
    <img src="assets/fab-logo.png" onerror="this.style.display='none'" alt="Fully Active Building Services">
  </div>

  <div class="card mt-10 flex-between" style="flex-wrap:wrap;gap:8px;">
    <div class="small muted">Viewing: <strong>${PAINT_TYPE_FILTER==='joint'?'Joint jobs (with Fabs)':PAINT_TYPE_FILTER==='personal'?'Personal jobs (SteadyWorks only)':'All jobs'}</strong></div>
    <div class="seg-toggle">
      <button class="seg-btn ${PAINT_TYPE_FILTER==='joint'?'active':''}" onclick="setPaintTypeFilter('joint')">Joint</button>
      <button class="seg-btn ${PAINT_TYPE_FILTER==='personal'?'active':''}" onclick="setPaintTypeFilter('personal')">Personal</button>
      <button class="seg-btn ${PAINT_TYPE_FILTER==='all'?'active':''}" onclick="setPaintTypeFilter('all')">All</button>
    </div>
  </div>

  <div class="card mt-10">
    <div class="card-title">Average Margin — Active &amp; Recent Jobs<span class="small muted">${avgMarginPct.toFixed(1)}%</span></div>
    <div class="margin-lane" style="--lane-low:${s.marginLaneLow}%;--lane-high:${s.marginLaneHigh}%;">
      <div class="margin-lane-marker" style="left:${laneMarkerPct}%;"></div>
    </div>
    <div class="flex-between small muted mt-10"><span>Thin lane (&lt;${s.marginLaneLow}%)</span><span>Healthy lane (&gt;${s.marginLaneHigh}%)</span></div>
  </div>

  <div class="grid grid-4 mt-10">
    <div class="card kpi-card"><div class="kpi-label">Pipeline Value</div><div class="kpi-value">${fmt(pipelineValue)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Avg Margin</div><div class="kpi-value">${avgMarginPct.toFixed(1)}%</div></div>
    <div class="card kpi-card"><div class="kpi-label">${profitLabel}</div><div class="kpi-value">${fmt(thisWeekProfit)}</div><div class="kpi-delta ${thisWeekProfit>=s.weeklyProfitTarget?'up':'down'}">Target ${fmt(s.weeklyProfitTarget)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Conversion Rate</div><div class="kpi-value">${conversionRate.toFixed(0)}%</div></div>
  </div>

  <div class="grid grid-3 mt-10">
    <div class="card kpi-card"><div class="kpi-label">Reinvestment Reserve (this wk)</div><div class="kpi-value" style="color:#A78BFA;">${fmt(thisWeekReinvestment)}</div><div class="kpi-delta up">${s.reinvestmentPct||0}% off every job</div></div>
    <div class="card kpi-card"><div class="kpi-label">SteadyWorks Share (this wk)</div><div class="kpi-value" style="color:#22C55E;">${fmt(thisWeekSwShare)}</div><div class="kpi-delta up">${s.fabSplitPct!=null?s.fabSplitPct:50}% of remainder</div></div>
    <div class="card kpi-card"><div class="kpi-label">Fabs Share (this wk)</div><div class="kpi-value" style="color:#7DD3FC;">${fmt(thisWeekFabsShare)}</div><div class="kpi-delta up">${100-(s.fabSplitPct!=null?s.fabSplitPct:50)}% of remainder</div></div>
  </div>

  <div class="grid grid-2 mt-10">
    <div class="card"><div class="card-title">Pipeline Value Funnel</div><div style="height:280px;"><canvas id="chartPaintFunnel"></canvas></div></div>
    <div class="card"><div class="card-title">Revenue vs Profit — Last 8 Weeks</div><div style="height:280px;"><canvas id="chartPaintRevenueProfit"></canvas></div></div>
    <div class="card"><div class="card-title">Margin % Trend</div><div style="height:240px;"><canvas id="chartPaintMarginTrend"></canvas></div></div>
    <div class="card"><div class="card-title">Trade Cost Breakdown — Active Jobs</div><div style="height:240px;"><canvas id="chartPaintTradeBreakdown"></canvas></div></div>
    <div class="card"><div class="card-title">Lead Source Performance</div><div style="height:240px;"><canvas id="chartPaintLeadSource"></canvas></div></div>
    <div class="card">
      <div class="card-title">Conversion — Quotes Sent vs Accepted</div>
      <div style="height:150px;"><canvas id="chartPaintConversion"></canvas></div>
      <div style="height:110px;margin-top:8px;"><canvas id="chartPaintConversionTrend"></canvas></div>
    </div>
  </div>

  <div class="card mt-10">
    <div class="card-title">Cash Flow Snapshot — This Week</div>
    <div class="cashflow-row"><div class="cf-label">Collected</div><div class="cf-track"><div class="cf-fill" style="width:${(collected/cfMax*100).toFixed(0)}%;background:#22C55E;"></div></div><div class="cf-value">${fmt(collected)}</div></div>
    <div class="cashflow-row"><div class="cf-label">Trade Costs Owed</div><div class="cf-track"><div class="cf-fill" style="width:${(owed/cfMax*100).toFixed(0)}%;background:${owed>collected?'#EF4444':'#F59E0B'};"></div></div><div class="cf-value">${fmt(owed)}</div></div>
    <div class="cashflow-row"><div class="cf-label">Marketing Spend</div><div class="cf-track"><div class="cf-fill" style="width:${(marketing/cfMax*100).toFixed(0)}%;background:var(--teal);"></div></div><div class="cf-value">${fmt(marketing)}</div></div>
    <div class="cashflow-row"><div class="cf-label">Reinvestment Reserve</div><div class="cf-track"><div class="cf-fill" style="width:${(thisWeekReinvestment/cfMax*100).toFixed(0)}%;background:#7C3AED;"></div></div><div class="cf-value">${fmt(thisWeekReinvestment)}</div></div>
    ${owed>collected?`<div class="cashflow-warning">⚠️ Trade costs owed this week (${fmt(owed)}) exceed collected revenue (${fmt(collected)}) — cash is exposed.</div>`:''}
  </div>

  <div class="card mt-10">
    <div class="flex-between mb-10">
      <div class="card-title" style="margin-bottom:0;">Marketing Spend Log</div>
      <span class="small muted">This week ${fmt(thisWeekMarketingSpend)} · target ${fmt(s.marketingSpendWeekly)}/wk · ${fmt(totalSpendAllTime)} logged all-time</span>
    </div>
    <div class="paint-note-form mb-10">
      <input id="ms-date" type="date" value="${new Date().toISOString().slice(0,10)}" style="max-width:150px;">
      <input id="ms-amount" type="number" placeholder="Amount £" style="max-width:110px;">
      <select id="ms-source" style="max-width:150px;">${PAINT_LEAD_SOURCES.map(x=>`<option>${x}</option>`).join('')}</select>
      <input id="ms-notes" type="text" placeholder="What was this for? (optional)" style="flex:1;">
      <button class="btn btn-gold btn-sm" onclick="addPaintSpend()">Add Entry</button>
    </div>
    ${Object.keys(spendBySource).length ? `<div class="flex" style="gap:8px;flex-wrap:wrap;margin-bottom:12px;">${Object.entries(spendBySource).map(([src,amt])=>`<span class="tag-chip">${esc(src)}: ${fmt(amt)}</span>`).join('')}</div>` : ''}
    <table>
      <thead><tr><th>Date</th><th>Amount</th><th>Source</th><th>Notes</th><th></th></tr></thead>
      <tbody>${paintSpend().length ? paintSpend().map(sp=>`
        <tr>
          <td>${fmtDate(sp.spend_date)}</td>
          <td>${fmt(sp.amount)}</td>
          <td>${esc(sp.source||'Other')}</td>
          <td class="small muted">${esc(sp.notes||'—')}</td>
          <td><button class="icon-btn" onclick="deletePaintSpend('${sp.id}')" title="Delete">✕</button></td>
        </tr>`).join('') : `<tr><td colspan="5" class="muted" style="text-align:center;padding:16px;">No spend logged yet</td></tr>`}</tbody>
    </table>
  </div>

  <div class="card mt-10">
    <div class="flex-between mb-10">
      <div class="card-title" style="margin-bottom:0;">Pipeline Board</div>
      <label class="small muted" style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" ${PAINT_SHOW_LOST?'checked':''} onchange="togglePaintLost(this.checked)"> Show Lost/Declined</label>
    </div>
    <div class="paint-kanban" style="grid-template-columns:repeat(${totalCols},minmax(0,1fr));">
      ${quoteCols}
      ${jobCols}
      ${lostCol}
    </div>
  </div>

  <div class="card mt-10">
    <div class="card-title">Collaboration Notes</div>
    <div class="paint-notes-list">${notesHtml}</div>
    <div class="paint-note-form">
      <textarea id="paint-note-input" placeholder="Leave a note for whoever's on the other side of this — visible to both SteadyWorks and Fabs."></textarea>
      <button class="btn btn-gold btn-sm" onclick="postPaintNote()">Post Note</button>
    </div>
  </div>`;
}

function afterRender_pipeline(){
  const recs = paintFilteredRecords();
  const s = paintSettings();

  const funnelStages = PAINT_QUOTE_STAGES.concat(PAINT_JOB_STAGES);
  chartSafe('chartPaintFunnel','bar',{
    labels: funnelStages.map(st=>st.label),
    datasets:[{label:'Value', data: funnelStages.map(st=>recs.filter(r=>r.stage===st.id).reduce((s2,r)=>s2+(Number(r.quoteValue)||0),0)), backgroundColor:'#E11D2A', borderRadius:6}]
  },{ indexAxis:'y', plugins:{legend:{display:false}}, scales:{x:{ticks:{callback:v=>'£'+v}}} });

  const weeks = paintLast8WeekStarts();
  const weekLabels = weeks.map(paintWeekLabel);
  const weeklyRevenue = [], weeklyProfit = [], weeklyMargin = [], weeklySwShare = [], weeklyFabsShare = [];
  weeks.forEach(w=>{
    const inWeek = recs.filter(r=>paintInWeek(r.dateAccepted, w));
    const revenue = inWeek.reduce((s2,r)=>s2+(Number(r.quoteValue)||0),0);
    const costs = inWeek.reduce((s2,r)=>{const c=paintCalc(r); return s2+c.materials+c.labour;},0);
    weeklyRevenue.push(revenue);
    weeklyProfit.push(revenue - costs - paintSpendInWeek(w));
    weeklySwShare.push(inWeek.reduce((s2,r)=>s2+paintSplit(r).swShare,0));
    weeklyFabsShare.push(inWeek.reduce((s2,r)=>s2+paintSplit(r).fabsShare,0));
    const withValue = inWeek.filter(r=>Number(r.quoteValue)>0);
    weeklyMargin.push(withValue.length ? withValue.reduce((s2,r)=>s2+paintCalc(r).pct,0)/withValue.length : null);
  });
  chartSafe('chartPaintRevenueProfit','bar',{
    labels: weekLabels,
    datasets:[
      {type:'bar', label:'Revenue', data:weeklyRevenue, backgroundColor:'rgba(225,29,42,0.35)', borderRadius:6},
      {type:'line', label:'Joint Profit', data:weeklyProfit, borderColor:'#F59E0B', backgroundColor:'rgba(245,158,11,0.15)', tension:.3, fill:false},
      {type:'line', label:'SteadyWorks Share', data:weeklySwShare, borderColor:'#22C55E', backgroundColor:'rgba(34,197,94,0.15)', tension:.3, fill:false},
      {type:'line', label:'Fabs Share', data:weeklyFabsShare, borderColor:'#7DD3FC', backgroundColor:'rgba(125,211,252,0.15)', tension:.3, fill:false}
    ]
  },{ plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:11}}}}, scales:{y:{ticks:{callback:v=>'£'+v}}} });

  chartSafe('chartPaintMarginTrend','line',{
    labels: weekLabels,
    datasets:[{label:'Avg Margin %', data:weeklyMargin, borderColor:'#00E5CC', backgroundColor:'rgba(0,229,204,0.15)', fill:true, tension:.35, spanGaps:true}]
  },{ plugins:{legend:{display:false}}, scales:{y:{ticks:{callback:v=>v+'%'}}} });

  const activeJobs = recs.filter(r=>['scheduled','inprogress','completed'].includes(r.stage));
  const tradeTotals = {};
  activeJobs.forEach(r=>(r.tradeCosts||[]).forEach(t=>{ tradeTotals[t.trade] = (tradeTotals[t.trade]||0) + (Number(t.days)||0)*(Number(t.dayRate)||0); }));
  chartSafe('chartPaintTradeBreakdown','doughnut',{
    labels: Object.keys(tradeTotals),
    datasets:[{data:Object.values(tradeTotals), backgroundColor:['#E11D2A','#00E5CC','#F59E0B','#7C3AED','#0EA5E9','#22C55E','#EC4899','#84CC16','#94A3B8']}]
  },{ plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}} });

  const sourceValue = {}, sourceWon = {}, sourceDecided = {};
  recs.forEach(r=>{
    const src = r.leadSource || 'Other';
    sourceValue[src] = (sourceValue[src]||0) + (Number(r.quoteValue)||0);
    if(['accepted','scheduled','inprogress','completed','paid','lost'].includes(r.stage)){
      sourceDecided[src] = (sourceDecided[src]||0)+1;
      if(r.stage!=='lost') sourceWon[src] = (sourceWon[src]||0)+1;
    }
  });
  const sourceSpend = paintSpendBySource();
  const sources = Array.from(new Set(Object.keys(sourceValue).concat(Object.keys(sourceSpend))));
  chartSafe('chartPaintLeadSource','bar',{
    labels: sources,
    datasets:[
      {type:'bar', label:'Quote Value Won', data: sources.map(src=>sourceValue[src]||0), backgroundColor:'#E11D2A', borderRadius:6, yAxisID:'y'},
      {type:'bar', label:'Spend', data: sources.map(src=>sourceSpend[src]||0), backgroundColor:'#7C3AED', borderRadius:6, yAxisID:'y'},
      {type:'line', label:'Win Rate %', data: sources.map(src=> sourceDecided[src] ? ((sourceWon[src]||0)/sourceDecided[src]*100) : 0), borderColor:'#00E5CC', backgroundColor:'#00E5CC', yAxisID:'y1', tension:.3}
    ]
  },{
    plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}},
    scales:{
      y:{position:'left', ticks:{callback:v=>'£'+v}},
      y1:{position:'right', grid:{drawOnChartArea:false}, ticks:{callback:v=>v+'%'}, min:0, max:100}
    }
  });

  const decidedAll = recs.filter(r=>['accepted','scheduled','inprogress','completed','paid','lost'].includes(r.stage));
  const wonAll = decidedAll.filter(r=>r.stage!=='lost').length;
  const lostAll = decidedAll.length - wonAll;
  chartSafe('chartPaintConversion','doughnut',{
    labels:['Won','Lost'],
    datasets:[{data:[wonAll,lostAll], backgroundColor:['#22C55E','#EF4444']}]
  },{ plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}} });

  const weeklyConversion = weeks.map(w=>{
    const decidedInWeek = recs.filter(r=>{
      if(!['accepted','scheduled','inprogress','completed','paid','lost'].includes(r.stage)) return false;
      const decidedDate = r.stage==='lost' ? r.dateQuoted : r.dateAccepted;
      return paintInWeek(decidedDate, w);
    });
    if(!decidedInWeek.length) return null;
    const wonInWeek = decidedInWeek.filter(r=>r.stage!=='lost').length;
    return (wonInWeek/decidedInWeek.length*100);
  });
  chartSafe('chartPaintConversionTrend','line',{
    labels: weekLabels,
    datasets:[{label:'Conversion %', data: weeklyConversion, borderColor:'#F59E0B', backgroundColor:'rgba(245,158,11,0.15)', fill:true, tension:.35, spanGaps:true, pointRadius:2}]
  },{ plugins:{legend:{display:false}}, scales:{y:{min:0,max:100,ticks:{callback:v=>v+'%'}}, x:{ticks:{display:false}}} });
}

let _dragPaintId = null;
function dragPaint(ev,id){ _dragPaintId = id; ev.target.classList.add('dragging'); }
async function dropPaint(ev, stageId){
  ev.currentTarget.classList.remove('drag-over');
  const rec = paintRecords().find(r=>r.id===_dragPaintId);
  if(!rec) return;
  const before = {dateAccepted:rec.dateAccepted, completedDate:rec.completedDate, depositStatus:rec.depositStatus};
  applyPaintStageTransition(rec, stageId);
  renderPage(); // optimistic — reflect the move immediately, don't wait on the network
  toast('Moved to '+paintStageLabel(stageId));
  const patch = {stage: rec.stage};
  if(rec.dateAccepted!==before.dateAccepted) patch.date_accepted = rec.dateAccepted || null;
  if(rec.completedDate!==before.completedDate) patch.completed_date = rec.completedDate || null;
  if(rec.depositStatus!==before.depositStatus) patch.deposit_status = rec.depositStatus;
  const {error} = await sb.from('paint_pipeline_jobs').update(patch).eq('id', rec.id);
  if(error){ toast('Could not save that move — check your connection'); }
}
function applyPaintStageTransition(rec, stageId){
  const today = new Date().toISOString().slice(0,10);
  if(stageId==='accepted' && !rec.dateAccepted) rec.dateAccepted = today;
  if(stageId==='scheduled' && !rec.dateAccepted) rec.dateAccepted = today;
  if(stageId==='completed' && !rec.completedDate) rec.completedDate = today;
  if(stageId==='paid' && rec.depositStatus!=='balance_paid') rec.depositStatus = 'balance_paid';
  rec.stage = stageId;
}
function togglePaintLost(checked){ PAINT_SHOW_LOST = checked; renderPage(); }

function openPipelineQuickAdd(){
  openModal(`
    <div class="modal-head"><h2>New Quote</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Client / Job Name</label><input id="qa-name" type="text" placeholder="e.g. Mrs Patel — 3 bed repaint"></div>
      <div class="form-row">
        <div class="form-group"><label>Quote Value (£)</label><input id="qa-value" type="number" value="0"></div>
        <div class="form-group"><label>Lead Source</label><select id="qa-source">${PAINT_LEAD_SOURCES.map(x=>`<option>${x}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Date Quoted</label><input id="qa-date" type="date" value="${new Date().toISOString().slice(0,10)}"></div>
        <div class="form-group"><label>Job Type</label><select id="qa-jobtype">${PAINT_JOB_TYPES.map(t=>`<option value="${t.id}" ${(PAINT_TYPE_FILTER==='personal'?'personal':'joint')===t.id?'selected':''}>${t.label}</option>`).join('')}</select></div>
      </div>
      <p class="small muted">Add trade costs, materials, deposit and notes after creating — this just gets it on the board fast.</p>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="savePaintQuickAdd()">Add to Draft</button>
    </div>
  `);
}
async function savePaintQuickAdd(){
  const row = {
    owner_id: PAINT_PIPELINE_OWNER_ID,
    client_name: document.getElementById('qa-name').value.trim() || 'Unnamed',
    quote_value: Number(document.getElementById('qa-value').value)||0,
    materials_cost: 0,
    trade_costs: [],
    deposit_pct: paintSettings().defaultDepositPct,
    deposit_status: 'not_taken',
    lead_source: document.getElementById('qa-source').value,
    date_quoted: document.getElementById('qa-date').value || new Date().toISOString().slice(0,10),
    notes: '',
    stage: 'draft',
    job_type: document.getElementById('qa-jobtype').value || 'joint'
  };
  const {data, error} = await sb.from('paint_pipeline_jobs').insert(row).select().single();
  if(error){ toast('Could not create that quote — check your connection'); return; }
  const rec = paintJobRowToRecord(data);
  if(!paintRecords().find(r=>r.id===rec.id)) paintRecords().push(rec);
  closeModal(); renderPage();
  toast('Quote added to Draft');
  openPaintRecordModal(rec.id);
}

let _paintTC = [];
function openPaintRecordModal(id){
  const rec = paintRecords().find(r=>r.id===id);
  if(!rec) return;
  _paintTC = (rec.tradeCosts||[]).map(t=>Object.assign({},t));
  openModal(`
    <div class="modal-head"><h2>${esc(rec.clientName||'Unnamed')}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Client / Job Name</label><input id="pf-name" type="text" value="${esc(rec.clientName||'')}"></div>
        <div class="form-group"><label>Stage</label><select id="pf-stage">
          <optgroup label="Quote">${PAINT_QUOTE_STAGES.map(st=>`<option value="${st.id}" ${rec.stage===st.id?'selected':''}>${st.label}</option>`).join('')}</optgroup>
          <optgroup label="Job">${PAINT_JOB_STAGES.map(st=>`<option value="${st.id}" ${rec.stage===st.id?'selected':''}>${st.label}</option>`).join('')}</optgroup>
          <option value="lost" ${rec.stage==='lost'?'selected':''}>Lost / Declined</option>
        </select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Quote Value (£)</label><input id="pf-quoteValue" type="number" value="${rec.quoteValue||0}" oninput="refreshPaintCalcSummary()"></div>
        <div class="form-group"><label>Materials Cost (£)</label><input id="pf-materialsCost" type="number" value="${rec.materialsCost||0}" oninput="refreshPaintCalcSummary()"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Job Type</label><select id="pf-jobtype" onchange="refreshPaintCalcSummary()">${PAINT_JOB_TYPES.map(t=>`<option value="${t.id}" ${(rec.jobType||'joint')===t.id?'selected':''}>${t.label}</option>`).join('')}</select></div>
        <div class="form-group"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Lead Source</label><select id="pf-source">${PAINT_LEAD_SOURCES.map(x=>`<option ${rec.leadSource===x?'selected':''}>${x}</option>`).join('')}</select></div>
        <div class="form-group"><label>Deposit %</label><input id="pf-depositPct" type="number" value="${rec.depositPct!=null?rec.depositPct:paintSettings().defaultDepositPct}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Deposit Status</label><select id="pf-depositStatus">${PAINT_DEPOSIT_STATUSES.map(d=>`<option value="${d.id}" ${rec.depositStatus===d.id?'selected':''}>${d.label}</option>`).join('')}</select></div>
        <div class="form-group"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Date Quoted</label><input id="pf-dateQuoted" type="date" value="${rec.dateQuoted||''}"></div>
        <div class="form-group"><label>Date Accepted</label><input id="pf-dateAccepted" type="date" value="${rec.dateAccepted||''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Scheduled Start</label><input id="pf-scheduledStart" type="date" value="${rec.scheduledStart||''}"></div>
        <div class="form-group"><label>Completed Date</label><input id="pf-completedDate" type="date" value="${rec.completedDate||''}"></div>
      </div>

      <div class="divider"></div>
      <div class="flex-between mb-10"><label style="margin-bottom:0;">Trade Cost Lines</label><button class="btn btn-ghost btn-sm" onclick="addPaintTCRow()">+ Add Trade</button></div>
      <div class="tc-row" style="margin-bottom:2px;">
        <label style="margin-bottom:0;">Trade</label><label style="margin-bottom:0;">Days</label><label style="margin-bottom:0;">Day Rate £</label><label style="margin-bottom:0;">Total</label><span></span>
      </div>
      <div id="paint-tc-rows"></div>

      <div id="paint-calc-summary" class="paint-calc-summary"></div>

      <div class="form-group mt-10"><label>Notes</label><textarea id="pf-notes">${esc(rec.notes||'')}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-danger" onclick="deletePaintRecord('${rec.id}')">Delete</button>
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="savePaintRecord('${rec.id}')">Save Changes</button>
    </div>
  `, true);
  renderPaintTCRows();
}
function renderPaintTCRows(){
  const el = document.getElementById('paint-tc-rows');
  if(!el) return;
  el.innerHTML = _paintTC.map((t,i)=>`
    <div class="tc-row">
      <select onchange="updatePaintTC(${i},'trade',this.value)">${PAINT_TRADES.map(tr=>`<option ${t.trade===tr?'selected':''}>${tr}</option>`).join('')}</select>
      <input type="number" placeholder="Days" value="${t.days||0}" oninput="updatePaintTC(${i},'days',this.value)">
      <input type="number" placeholder="Day Rate £" value="${t.dayRate||0}" oninput="updatePaintTC(${i},'dayRate',this.value)">
      <div class="small muted" style="text-align:right;">${fmt((Number(t.days)||0)*(Number(t.dayRate)||0))}</div>
      <button class="icon-btn" onclick="removePaintTCRow(${i})" title="Remove trade">✕</button>
    </div>`).join('') || '<div class="muted small" style="padding:6px 0;">No trade costs added yet</div>';
  refreshPaintCalcSummary();
}
function addPaintTCRow(){ _paintTC.push({id:uid(), trade:'Painter', days:1, dayRate:180}); renderPaintTCRows(); }
function removePaintTCRow(i){ _paintTC.splice(i,1); renderPaintTCRows(); }
function updatePaintTC(i, field, value){
  _paintTC[i][field] = (field==='trade') ? value : (Number(value)||0);
  const rows = document.getElementById('paint-tc-rows');
  if(rows && rows.children[i]){
    const totalEl = rows.children[i].querySelector('.small.muted');
    if(totalEl) totalEl.textContent = fmt((Number(_paintTC[i].days)||0)*(Number(_paintTC[i].dayRate)||0));
  }
  refreshPaintCalcSummary();
}
function refreshPaintCalcSummary(){
  const el = document.getElementById('paint-calc-summary');
  if(!el) return;
  const qvEl = document.getElementById('pf-quoteValue'), mcEl = document.getElementById('pf-materialsCost');
  const quoteValue = Number(qvEl ? qvEl.value : 0)||0;
  const materials = Number(mcEl ? mcEl.value : 0)||0;
  const labour = _paintTC.reduce((s,t)=>s+(Number(t.days)||0)*(Number(t.dayRate)||0),0);
  const days = _paintTC.reduce((s,t)=>s+(Number(t.days)||0),0);
  const margin = quoteValue - materials - labour;
  const pct = quoteValue>0 ? (margin/quoteValue*100) : 0;
  const ps = paintSettings();
  const jobTypeEl = document.getElementById('pf-jobtype');
  const isPersonal = jobTypeEl ? jobTypeEl.value==='personal' : false;
  const swPct = Number(ps.fabSplitPct)!=null ? Number(ps.fabSplitPct) : 50;
  const reinvestment = isPersonal ? 0 : margin * (Number(ps.reinvestmentPct)||0)/100;
  const splittable = margin - reinvestment;
  const swShare = isPersonal ? margin : splittable * swPct/100;
  const fabsShare = isPersonal ? 0 : splittable - swShare;
  el.innerHTML = `
    <div><div class="pcs-label">Labour Total</div><div class="pcs-value">${fmt(labour)}</div></div>
    <div><div class="pcs-label">Days On Site</div><div class="pcs-value">${days}</div></div>
    <div><div class="pcs-label">Margin</div><div class="pcs-value" style="color:${margin>=0?'var(--text)':'#EF4444'};">${fmt(margin)}</div></div>
    <div><div class="pcs-label">Margin %</div><div class="pcs-value" style="color:${pct>=ps.marginLaneHigh?'#22C55E':pct<ps.marginLaneLow?'#EF4444':'#F59E0B'};">${pct.toFixed(1)}%</div></div>
    ${isPersonal ? `<div><div class="pcs-label">Reinvestment</div><div class="pcs-value">— (personal job)</div></div>` : `<div><div class="pcs-label">Reinvestment (${ps.reinvestmentPct||0}%)</div><div class="pcs-value">${fmt(reinvestment)}</div></div>`}
    <div><div class="pcs-label">SteadyWorks Share</div><div class="pcs-value" style="color:#22C55E;">${fmt(swShare)}</div></div>
    <div><div class="pcs-label">Fabs Share</div><div class="pcs-value">${isPersonal ? '— (personal job)' : fmt(fabsShare)}</div></div>
    <div><div class="pcs-label">Split</div><div class="pcs-value">${isPersonal ? '100% / 0%' : swPct+'% / '+(100-swPct)+'%'}</div></div>
  `;
}
async function savePaintRecord(id){
  const rec = paintRecords().find(r=>r.id===id);
  if(!rec) return;
  const newStage = document.getElementById('pf-stage').value;
  Object.assign(rec, {
    clientName: document.getElementById('pf-name').value.trim() || 'Unnamed',
    quoteValue: Number(document.getElementById('pf-quoteValue').value)||0,
    materialsCost: Number(document.getElementById('pf-materialsCost').value)||0,
    tradeCosts: _paintTC.slice(),
    leadSource: document.getElementById('pf-source').value,
    depositPct: Number(document.getElementById('pf-depositPct').value)||0,
    depositStatus: document.getElementById('pf-depositStatus').value,
    dateQuoted: document.getElementById('pf-dateQuoted').value,
    dateAccepted: document.getElementById('pf-dateAccepted').value,
    scheduledStart: document.getElementById('pf-scheduledStart').value,
    completedDate: document.getElementById('pf-completedDate').value,
    notes: document.getElementById('pf-notes').value,
    jobType: document.getElementById('pf-jobtype').value || 'joint'
  });
  if(newStage !== rec.stage) applyPaintStageTransition(rec, newStage); else rec.stage = newStage;
  closeModal(); renderPage();
  toast('Saved');
  const {error} = await sb.from('paint_pipeline_jobs').update({
    client_name: rec.clientName,
    quote_value: rec.quoteValue,
    materials_cost: rec.materialsCost,
    trade_costs: rec.tradeCosts,
    lead_source: rec.leadSource,
    deposit_pct: rec.depositPct,
    deposit_status: rec.depositStatus,
    date_quoted: rec.dateQuoted || null,
    date_accepted: rec.dateAccepted || null,
    scheduled_start: rec.scheduledStart || null,
    completed_date: rec.completedDate || null,
    notes: rec.notes,
    stage: rec.stage,
    job_type: rec.jobType || 'joint'
  }).eq('id', id);
  if(error) toast('Saved locally, but the cloud sync failed — check your connection');
}
function deletePaintRecord(id){
  const rec = paintRecords().find(r=>r.id===id);
  confirmDelete('Delete '+(rec?rec.clientName:'this record')+'?', "This can't be undone.", async ()=>{
    PAINT_JOBS_CACHE = paintRecords().filter(r=>r.id!==id);
    closeModal(); renderPage(); toast('Deleted','🗑️');
    const {error} = await sb.from('paint_pipeline_jobs').delete().eq('id', id);
    if(error) toast('Delete failed to sync — check your connection');
  });
}

function openPipelineSettingsModal(){
  const s = paintSettings();
  openModal(`
    <div class="modal-head"><h2>Pipeline Settings</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Weekly Profit Target (£)</label><input id="ps-profitTarget" type="number" value="${s.weeklyProfitTarget}"></div>
        <div class="form-group"><label>Marketing Budget Target / Week (£)</label><input id="ps-marketing" type="number" value="${s.marketingSpendWeekly}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Margin Lane — Thin Below (%)</label><input id="ps-laneLow" type="number" value="${s.marginLaneLow}"></div>
        <div class="form-group"><label>Margin Lane — Healthy Above (%)</label><input id="ps-laneHigh" type="number" value="${s.marginLaneHigh}"></div>
      </div>
      <div class="form-group"><label>Default Deposit %</label><input id="ps-depositPct" type="number" value="${s.defaultDepositPct}"></div>
      <div class="divider"></div>
      <div class="form-row">
        <div class="form-group"><label>Reinvestment Reserve — off every job (%)</label><input id="ps-reinvest" type="number" value="${s.reinvestmentPct!=null?s.reinvestmentPct:10}"></div>
        <div class="form-group"><label>SteadyWorks Share of Remainder (%)</label><input id="ps-fabSplit" type="number" value="${s.fabSplitPct!=null?s.fabSplitPct:50}"></div>
      </div>
      <p class="small muted">Every job is subcontracted out, so margin isn't take-home. This reserve comes off the top of each job's margin first (funds more lead sourcing, tools, marketing), then what's left is split with Fabs — 50% is an even joint-venture split.</p>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="savePipelineSettings()">Save Settings</button>
    </div>
  `);
}
async function savePipelineSettings(){
  Object.assign(paintSettings(), {
    weeklyProfitTarget: Number(document.getElementById('ps-profitTarget').value)||0,
    marketingSpendWeekly: Number(document.getElementById('ps-marketing').value)||0,
    marginLaneLow: Number(document.getElementById('ps-laneLow').value)||0,
    marginLaneHigh: Number(document.getElementById('ps-laneHigh').value)||0,
    defaultDepositPct: Number(document.getElementById('ps-depositPct').value)||0,
    reinvestmentPct: Number(document.getElementById('ps-reinvest').value)||0,
    fabSplitPct: Number(document.getElementById('ps-fabSplit').value)||0
  });
  closeModal(); renderPage();
  toast('Pipeline settings saved');
  const s = paintSettings();
  const {error} = await sb.from('paint_pipeline_settings').update({
    weekly_profit_target: s.weeklyProfitTarget,
    marketing_spend_weekly: s.marketingSpendWeekly,
    margin_lane_low: s.marginLaneLow,
    margin_lane_high: s.marginLaneHigh,
    default_deposit_pct: s.defaultDepositPct,
    reinvestment_pct: s.reinvestmentPct,
    fab_split_pct: s.fabSplitPct,
    updated_at: new Date().toISOString()
  }).eq('id', 1);
  if(error) toast('Saved locally, but the cloud sync failed — check your connection');
}
