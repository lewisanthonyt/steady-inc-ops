/* ===================== STEADY INC — OPERATIONS PLATFORM ===================== */

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
      bank:{accountName:'', bankName:'', sortCode:'', accountNumber:''},
      paymentLink:'',
      paymentTermsDays:14,
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
    timesheets:[],
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
      {id:'tpl-fu-checkin-sms', channel:'sms', name:'General check-in (text)', subject:'', body:'Hi {{name}}, just checking in to see if you still need any help, or if your plans have changed. This is SteadyWorks — happy to pick things back up whenever suits.'},
      {id:'tpl-fu-invoice-email', channel:'email', name:'Invoice reminder (email)', subject:'Invoice {{number}} — {{amount}} outstanding', body:'Hi {{name}},\n\nJust a friendly reminder that invoice {{number}} for {{amount}} was due on {{date}}. If it\'s already been paid, thank you and please ignore this.\n\nOur bank details are on the invoice — let me know if you need another copy.\n\nThanks,\nSteadyWorks Ltd'},
      {id:'tpl-fu-invoice-sms', channel:'sms', name:'Invoice reminder (text)', subject:'', body:'Hi {{name}}, a quick reminder from SteadyWorks that invoice {{number}} for {{amount}} was due on {{date}}. If it\'s already paid, thank you! Any questions just reply here.'},
      {id:'tpl-fu-service-email', channel:'email', name:'Service due (email)', subject:'Your {{service}} is due', body:'Hi {{name}},\n\nYour {{service}} is due around {{date}}. Keeping it up to date keeps things running safely and protects your warranty.\n\nReply with a couple of days that suit and we\'ll get you booked in.\n\nThanks,\nSteadyWorks Ltd'},
      {id:'tpl-fu-service-sms', channel:'sms', name:'Service due (text)', subject:'', body:'Hi {{name}}, SteadyWorks here — your {{service}} is due around {{date}}. Reply with a day that suits and we\'ll book you in.'}
    ]},
    followUps:[],
    sfClients:[],
    sfQuotes:[],
    sfInvoices:[],
    sfActivity:[],
    sfExpenses:[],
    sfCompliance:[],
    budgets:{},
    assets:[],
    liabilities:[],
    geocodeCache:{},
    counters:{job:0, quote:0, invoice:0, variation:0, sfQuote:0, sfInvoice:0, po:0},
    activityLog:[],
    paintPipeline:[],
    sfProspects:[],
    swServices:[], priceBook:[], purchaseOrders:[],
    tgPayments:[], tgCycles:[], tgOverrides:[], tgAcqSpend:[], tgOwnerPay:[], tgExpansion:[], tgRewards:[], tgMissions:[], tgReviews:[], tgDecisions:[], tgAudit:[],
    targets: tgDefaults(),
    sfAcquisitionWeekly:{weekKey:'', clientsWon:0, emailsDone:0, callsDone:0, dmsDone:0, days:{}},
    _deleted:{},
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

// List fields that are merged by record id (never blindly overwritten) on every cloud push/pull.
const ARRAY_MERGE_KEYS = ['jobs','leads','quotes','invoices','customers','employees','subcontractors','timesheets','expenses','compliance','events','followUps','sfClients','sfQuotes','sfInvoices','sfActivity','sfExpenses','sfCompliance','sfProspects','swServices','priceBook','purchaseOrders','assets','liabilities','activityLog','paintPipeline','tgPayments','tgCycles','tgOverrides','tgAcqSpend','tgOwnerPay','tgExpansion','tgRewards','tgMissions','tgReviews','tgDecisions','tgAudit'];
let DB = load();

// Brings any stored/cloud copy up to the current schema without losing data:
// every list field is guaranteed to be an array, nested settings objects get
// new default keys filled in (stored values always win), and templates gain
// any new built-in templates by id. Safe to run repeatedly.
function normalizeDB(stored){
  const defaults = defaultData(); // pristine copy — never mutated below
  const src = (stored && typeof stored==='object') ? stored : {};
  const merged = Object.assign(defaultData(), src);
  ARRAY_MERGE_KEYS.concat(['timesheets']).forEach(k=>{ if(!Array.isArray(merged[k])) merged[k] = []; });
  ['settings','paintPipelineSettings','counters','budgets','geocodeCache','sfAcquisitionWeekly','_deleted','targets'].forEach(k=>{
    const d = defaultData()[k];
    merged[k] = Object.assign({}, d, (src[k] && typeof src[k]==='object' && !Array.isArray(src[k])) ? src[k] : {});
  });
  merged.settings.rates = Object.assign({}, defaultData().settings.rates, (src.settings && src.settings.rates) || {});
  merged.settings.bank = Object.assign({}, defaultData().settings.bank, (src.settings && src.settings.bank) || {});
  if(!Array.isArray(merged.settings.monthlyTargets) || merged.settings.monthlyTargets.length!==12){
    merged.settings.monthlyTargets = Array(12).fill((Number(merged.settings.annualTarget)||0)/12);
  }
  // templates is a nested object — make sure newly-added template kinds
  // (e.g. followup) and new built-in templates (by id) reach existing users.
  const storedTpl = (src.templates && typeof src.templates==='object') ? src.templates : {};
  merged.templates = Object.assign({}, defaults.templates, storedTpl);
  Object.keys(defaults.templates).forEach(kind=>{
    const storedList = Array.isArray(storedTpl[kind]) ? storedTpl[kind] : [];
    const storedIds = new Set(storedList.map(t=>t.id));
    const missing = defaults.templates[kind].filter(t=>!storedIds.has(t.id) && !merged._deleted[t.id]);
    merged.templates[kind] = storedList.concat(missing);
  });
  return merged;
}

function load(){
  let raw = null;
  try{ raw = localStorage.getItem(STORE_KEY); }catch(e){}
  if(raw){
    try{
      const merged = normalizeDB(JSON.parse(raw));
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
    }catch(e){
      // Unreadable local copy: park it under a backup key rather than letting
      // the next save overwrite it — the cloud copy is pulled on login anyway.
      try{ localStorage.setItem(STORE_KEY+'_corrupt_'+Date.now(), raw); }catch(e2){}
      console.warn('Local data could not be parsed — kept a backup copy and starting from the cloud copy.', e);
    }
  }
  return defaultData();
}

/* ---------- DELETION TRACKING ----------
   Saves merge local + cloud by id so a stale tab can never wipe records —
   but that also meant a deleted record came straight back from the cloud on
   the next save. Every save now diffs each list against the last-known ids
   and records a tombstone for anything removed; merges drop tombstoned ids.
   Tombstones expire after 120 days. */
let _knownIds = {};
function snapshotIds(){
  _knownIds = {};
  ARRAY_MERGE_KEYS.forEach(k=>{ _knownIds[k] = new Set((DB[k]||[]).map(x=>x&&x.id).filter(Boolean)); });
  _knownIds.__tpl = new Set();
  Object.values(DB.templates||{}).forEach(list=>(list||[]).forEach(t=>t&&t.id&&_knownIds.__tpl.add(t.id)));
}
function recordDeletions(){
  DB._deleted = DB._deleted || {};
  const now = new Date().toISOString();
  ARRAY_MERGE_KEYS.forEach(k=>{
    const prev = _knownIds[k]; if(!prev) return;
    const cur = new Set((DB[k]||[]).map(x=>x&&x.id).filter(Boolean));
    prev.forEach(id=>{ if(!cur.has(id)) DB._deleted[id] = now; });
  });
  if(_knownIds.__tpl){
    const curTpl = new Set();
    Object.values(DB.templates||{}).forEach(list=>(list||[]).forEach(t=>t&&t.id&&curTpl.add(t.id)));
    _knownIds.__tpl.forEach(id=>{ if(!curTpl.has(id)) DB._deleted[id] = now; });
  }
  const cutoff = Date.now() - 120*86400000;
  Object.keys(DB._deleted).forEach(id=>{ if(new Date(DB._deleted[id]).getTime() < cutoff) delete DB._deleted[id]; });
}
function writeLocal(){
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify(DB));
    return true;
  }catch(e){
    // Usually the browser's ~5MB quota (job photos are stored inline).
    // The cloud copy still gets pushed, so nothing is lost — but say so.
    console.warn('Local save failed:', e);
    if(!window._quotaWarned){ window._quotaWarned = true; toast('Browser storage is full — changes are still syncing to the cloud. Consider removing large photos.','⚠️'); }
    return false;
  }
}
function save(){
  recordDeletions();
  snapshotIds();
  writeLocal();
  pushCloudState();
}
snapshotIds();

/* ---------- CLOUD SYNC (whole-app state, so it's not stuck on one browser) ---------- */
const CLOUD_STATE_BUSINESS = 'steadyworks_full_state';
let cloudSyncTimer = null;

// Array fields that get merged-by-id on every push, rather than blindly
// overwritten. This is what stops a stale background tab from wiping out
// records that were added elsewhere (another tab, another device, or a
// direct fix) since this tab last loaded its data.

function mergeArraysById(cloudArr, localArr, deleted){
  if(!Array.isArray(cloudArr)) cloudArr = [];
  if(!Array.isArray(localArr)) localArr = [];
  deleted = deleted || {};
  const map = new Map();
  cloudArr.forEach(item=>{ if(item && item.id!=null) map.set(item.id, item); });
  localArr.forEach(item=>{ if(item && item.id!=null) map.set(item.id, item); }); // local wins on conflicting ids
  const seen = new Set();
  const ordered = [];
  const add = item=>{ if(item && item.id!=null && !seen.has(item.id) && !deleted[item.id]){ ordered.push(map.get(item.id)); seen.add(item.id); } };
  cloudArr.forEach(add);
  localArr.forEach(add);
  return ordered;
}
function mergeTombstones(a, b){ return Object.assign({}, (a&&typeof a==='object')?a:{}, (b&&typeof b==='object')?b:{}); }
// Number counters only ever go up — taking the max stops two devices issuing
// the same quote/invoice/job number off a stale counter.
function mergeCounters(a, b){
  const out = Object.assign({}, a||{}, b||{});
  Object.keys(out).forEach(k=>{ out[k] = Math.max(Number((a||{})[k])||0, Number((b||{})[k])||0); });
  return out;
}
function mergeTemplates(cloudTpl, localTpl, deleted){
  const out = Object.assign({}, cloudTpl||{}, localTpl||{});
  Object.keys(out).forEach(kind=>{ out[kind] = mergeArraysById((cloudTpl||{})[kind], (localTpl||{})[kind], deleted); });
  return out;
}

// Builds what should actually be pushed to the cloud: local's non-list
// fields (settings, counters, templates, etc.) plus every list field
// merged with whatever is currently in the cloud, so this push can only
// ever add/update records — never silently delete something that exists
// in the cloud but isn't in this tab's (possibly stale) memory.
function mergeDbForPush(cloudData, localDb){
  const merged = Object.assign({}, localDb);
  if(cloudData && typeof cloudData === 'object'){
    merged._deleted = mergeTombstones(cloudData._deleted, localDb._deleted);
    ARRAY_MERGE_KEYS.forEach(key=>{
      merged[key] = mergeArraysById(cloudData[key], localDb[key], merged._deleted);
    });
    merged.counters = mergeCounters(cloudData.counters, localDb.counters);
    merged.templates = mergeTemplates(cloudData.templates, localDb.templates, merged._deleted);
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
      snapshotIds();
      writeLocal();
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
    // Same safety net as pushCloudState: merge list fields by id (cloud ∪ local)
    // instead of blindly overwriting, so a periodic background pull can never
    // silently erase a record that was just added locally but hasn't been
    // pushed yet (this is exactly how a handful of SteadyWorks jobs went
    // missing before this fix — a pull landed mid-edit and wiped them).
    // Deletions made on either side are respected via the merged tombstones.
    recordDeletions(); // capture anything deleted locally since the last save
    const incoming = Object.assign({}, data.data);
    incoming._deleted = mergeTombstones(data.data._deleted, DB._deleted);
    ARRAY_MERGE_KEYS.forEach(key=>{
      incoming[key] = mergeArraysById(data.data[key], DB[key], incoming._deleted);
    });
    incoming.counters = mergeCounters(data.data.counters, DB.counters);
    incoming.templates = mergeTemplates(data.data.templates, DB.templates, incoming._deleted);
    // Local-only conveniences (acquisition planner ticks) shouldn't be
    // clobbered by an older cloud copy mid-week.
    if(DB.sfAcquisitionWeekly && (!incoming.sfAcquisitionWeekly || (incoming.sfAcquisitionWeekly.updatedAt||'') < (DB.sfAcquisitionWeekly.updatedAt||''))){
      incoming.sfAcquisitionWeekly = DB.sfAcquisitionWeekly;
    }
    DB = normalizeDB(incoming);
    snapshotIds();
    writeLocal();
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

function localDateStr(d){ d = d||new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
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
  return (n<0?'-':'') + '£' + Math.abs(n).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function fmtDate(d){
  if(!d) return '—';
  const dt = new Date(d);
  if(isNaN(dt)) return esc(String(d));
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
  {id:'targets', label:'Targets', section:'overview'},
  {id:'tasks', label:'Tasks', section:'overview'},
  {id:'goals', label:'Goals & Roadmap', section:'overview'},
  {id:'calendar', label:'Calendar', section:'overview'},
  {id:'budget', label:'Budget', section:'overview'},
  {id:'sw-dashboard', label:'Dashboard', section:'steadyworks'},
  {id:'sw-desk', label:'Commercial Desk', section:'steadyworks'},
  {id:'leads', label:'Leads', section:'steadyworks'},
  {id:'quotes', label:'Quotes', section:'steadyworks'},
  {id:'followups', label:'Follow Ups', section:'steadyworks'},
  {id:'jobs', label:'Jobs', section:'steadyworks'},
  {id:'job-sources', label:'Job Sources', section:'steadyworks'},
  {id:'pipeline', label:'Quote-to-Job Pipeline', section:'steadyworks'},
  {id:'invoices', label:'Invoices', section:'steadyworks'},
  {id:'customers', label:'Customers', section:'steadyworks'},
  {id:'services', label:'Service Plans', section:'steadyworks'},
  {id:'price-book', label:'Price Book', section:'steadyworks'},
  {id:'subcontractors', label:'Subcontractors', section:'steadyworks'},
  {id:'expenses', label:'Expenses', section:'steadyworks'},
  {id:'compliance', label:'Compliance', section:'steadyworks'},
  {id:'reports', label:'Reports', section:'steadyworks'},
  {id:'sf-dashboard', label:'Dashboard', section:'steadyflow'},
  {id:'sf-leads', label:'Lead Engine', section:'steadyflow'},
  {id:'sf-acquisition', label:'Acquisition', section:'steadyflow'},
  {id:'sf-clients', label:'Clients', section:'steadyflow'},
  {id:'sf-quotes', label:'Quotes', section:'steadyflow'},
  {id:'sf-invoices', label:'Invoices', section:'steadyflow'},
  {id:'team', label:'Team', section:'steadyflow'},
  {id:'timesheets', label:'Timesheets', section:'steadyflow'},
  {id:'sf-expenses', label:'Expenses', section:'steadyflow'},
  {id:'sf-compliance', label:'Compliance', section:'steadyflow'},
  {id:'accounting', label:'Snapshot', section:'accounting'},
  {id:'forecast', label:'Forecast', section:'accounting'},
  {id:'balance-sheet', label:'Balance Sheet', section:'accounting'},
  {id:'assets-liabilities', label:'Assets & Liabilities', section:'accounting'},
  {id:'activity', label:'Activity Log', section:'system'},
  {id:'bugs', label:'Bugs', section:'system'},
  {id:'settings', label:'Settings', section:'system'}
];
const SECTION_LABELS = {
  overview: 'STEADY INC',
  steadyworks: 'STEADYWORKS · PLUMBING',
  steadyflow: 'STEADYFLOW · MARKETING',
  collaborations: 'COLLABORATIONS',
  accounting: 'ACCOUNTING',
  system: 'SYSTEM'
};
const SECTION_ACCENT = { overview:'var(--gold-light)', steadyworks:'var(--gold-light)', steadyflow:'var(--teal)', collaborations:'#A78BFA', accounting:'#22C55E', system:'#999' };
const ICONS = {
  dashboard:'🏠', targets:'🏁', services:'🔁', 'price-book':'📒', tasks:'✅', goals:'🎯', budget:'🧮', 'sw-dashboard':'📊', 'sf-dashboard':'📊', 'sf-acquisition':'🎯', 'sf-leads':'🧭', 'sw-desk':'🏢', 'sf-clients':'💻', 'sf-quotes':'📝', 'sf-invoices':'🧾', 'sf-expenses':'💷', 'sf-compliance':'🛡️', leads:'📥', followups:'📞', jobs:'🛠️', 'job-sources':'📍', quotes:'📝', invoices:'🧾', calendar:'📅',
  customers:'👥', team:'👷', timesheets:'🕒', subcontractors:'🦺', expenses:'💷', compliance:'🛡️', reports:'📈', activity:'🕐', bugs:'🐞', settings:'⚙️', pipeline:'📝',
  accounting:'💰', forecast:'📈', 'balance-sheet':'⚖️', 'assets-liabilities':'🏦'
};

let currentRoute = 'dashboard';
let currentParam = null;

let _navFadeTimer = null;
function navigate(route, param){
  const prevRoute = currentRoute;
  // remember the open job tab only while you stay on the same job
  if(!(route==='jobs' && param && param===currentParam)) window._jobTab = null;
  currentRoute = isRouteAllowed(route) ? route : 'pipeline';
  currentParam = param || null;
  renderNav();
  closeMobileNav();
  const content = document.getElementById('content');
  clearTimeout(_navFadeTimer);
  // Same-module re-renders (e.g. saving inside a job) stay instant; moving
  // between modules dips the content to dark for 120ms, then fades back in.
  if(prevRoute===currentRoute || !content){
    if(content) content.classList.remove('content-out');
    renderPage(); window.scrollTo(0,0);
    return;
  }
  content.classList.add('content-out');
  _navFadeTimer = setTimeout(()=>{
    renderPage();
    window.scrollTo(0,0);
    requestAnimationFrame(()=>content.classList.remove('content-out'));
  }, 120);
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
// Pages used day to day. Everything else is one click away under "Show all pages",
// and any hidden page that needs attention (has a badge) still shows.
const NAV_CORE = new Set(['dashboard','targets','tasks','calendar','sw-dashboard','leads','quotes','followups','jobs','pipeline','invoices','customers','services','expenses',
  'sf-dashboard','sf-acquisition','sf-clients','sf-quotes','sf-invoices','sf-expenses','accounting','settings']);
let NAV_SIMPLE = true;
try{ NAV_SIMPLE = localStorage.getItem('steadyworks_nav_simple')!=='0'; }catch(e){}
function toggleNavSimple(){ NAV_SIMPLE = !NAV_SIMPLE; try{ localStorage.setItem('steadyworks_nav_simple', NAV_SIMPLE?'1':'0'); }catch(e){} renderNav(); }
function renderNav(){
  const nav = document.getElementById('nav');
  let lastSection = null, hiddenCt = 0;
  const simple = NAV_SIMPLE && CURRENT_PROFILE.role==='owner';
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
      const overdue = DB.invoices.filter(i=>invoiceStatus(i)==='overdue').length;
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
    if(r.id==='quotes'){
      const chase = DB.quotes.filter(swQuoteNeedsChase).length;
      if(chase) badge = `<span class="nav-badge" style="background:var(--warning);color:#1a1200;" title="Quotes waiting on a follow-up">${chase}</span>`;
    }
    if(r.id==='services'){
      const due = (DB.swServices||[]).filter(sv=>swServiceStatus(sv).due).length;
      if(due) badge = `<span class="nav-badge" style="background:var(--warning);color:#1a1200;" title="Services due or overdue">${due}</span>`;
    }
    if(r.id==='followups'){
      const open = DB.followUps.filter(f=>f.status!=='done').length;
      if(open) badge = `<span class="nav-badge">${open}</span>`;
    }
    if(r.id==='sf-clients'){
      const leadCt = DB.sfClients.filter(c=>c.status==='lead').length;
      if(leadCt) badge = `<span class="nav-badge" style="background:var(--teal);color:#001a1a;">${leadCt}</span>`;
    }
    if(r.id==='targets'){
      const waiting = new Set((DB.tgCycles||[]).filter(c=>c.achieved && !c.ack).map(c=>c.biz)).size;
      if(waiting) badge = `<span class="nav-badge" style="background:var(--success);color:#04130a;" title="Level complete — see what changes next">${waiting}</span>`;
    }
    if(r.id==='sf-acquisition'){
      const stale = (DB.sfProspects||[]).filter(acqIsStale).length;
      if(stale) badge = `<span class="nav-badge" style="background:var(--warning);color:#1a1200;" title="Prospects with no update for 7+ days">${stale}</span>`;
    }
    if(r.id==='sw-desk' && typeof swNavBadge==='function'){
      const due = swNavBadge();
      if(due) badge = `<span class="nav-badge" title="Commercial follow-ups due">${due}</span>`;
    }
    if(r.id==='sf-leads' && typeof leNavBadge==='function'){
      const due = leNavBadge();
      if(due) badge = `<span class="nav-badge" style="background:var(--teal);color:#001a1a;" title="Lead Engine follow-ups due">${due}</span>`;
    }
    if(r.id==='sf-invoices'){
      const overdue = (DB.sfInvoices||[]).filter(i=>invoiceStatus(i)==='overdue').length;
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
    if(simple && !NAV_CORE.has(r.id) && !badge && currentRoute!==r.id){ hiddenCt++; return sectionHeader; }
    const sectionClass = r.section==='steadyflow' ? 'nav-item-teal' : r.section==='collaborations' ? 'nav-item-purple' : '';
    return `${sectionHeader}<div class="nav-item ${currentRoute===r.id?'active':''} ${sectionClass}" onclick="navigate('${r.id}')">
      <span class="nav-icon">${ICONS[r.id]}</span>${r.label}${badge}
    </div>`;
  }).join('') + (CURRENT_PROFILE.role==='owner' ? `<div class="nav-more" onclick="toggleNavSimple()">${NAV_SIMPLE ? '＋ Show all pages <span>'+hiddenCt+' more</span>' : '－ Show everyday pages only'}</div>` : '');
}
function jobMissingDocs(j){
  const docs = j.documents||[];
  const hasValidRams = docs.some(d=>d.category==='RAMS' && (daysUntil(d.expiryDate)===null || daysUntil(d.expiryDate)>=0));
  return !hasValidRams;
}

const PAGE_META = {
  dashboard:['Dashboard','Steady Inc — combined performance across every business'],
  targets:['Targets','Target → actions → cash → reinvestment → capacity → next level'],
  tasks:['Tasks','Day-by-day checklist across SteadyWorks, SteadyFlow, Cookbook & Animation'],
  goals:['Goals & Roadmap','Long-term goals and revenue targets, month by month'],
  budget:['Budget','Plan spend by category and track it against your income targets'],
  'sw-dashboard':['SteadyWorks Dashboard','Plumbing business performance at a glance'],
  'sf-dashboard':['SteadyFlow Dashboard','Marketing agency performance at a glance'],
  'sw-desk':['Commercial Desk','Up to 3 organisations a day where a relationship could create repeat maintenance work'],
  'sf-leads':['Lead Engine','Up to 3 researched businesses worth contacting today — with the evidence behind every claim'],
  'sf-acquisition':['Acquisition','Win new website & marketing clients — pipeline, emails, pitches and your weekly plan'],
  'sf-clients':['SteadyFlow Clients','Marketing agency prospects & clients — website/marketing packages'],
  'sf-quotes':['SteadyFlow Quotes','Build, send and track quotations for SteadyFlow clients'],
  'sf-invoices':['SteadyFlow Invoices','Billing, payments and outstanding balances for SteadyFlow clients'],
  'sf-expenses':['SteadyFlow Expenses','Costs, subscriptions and ad spend for SteadyFlow'],
  'sf-compliance':['SteadyFlow Compliance','Contracts, insurance and renewals for SteadyFlow'],
  leads:['Leads','Pipeline of new enquiries and opportunities'],
  followups:['Follow Ups','Missed calls and client follow-up'],
  jobs:['Jobs','All active and historic job records'],
  'job-sources':['Job Sources','Where your leads and jobs are actually coming from'],
  pipeline:['Quote-to-Job Pipeline','Every SteadyWorks quote, start to finish — tag one as Joint when Fabs are collaborating on it'],
  quotes:['Quotes','Build, send, chase and win quotations'],
  invoices:['Invoices','Billing, payments and outstanding balances'],
  calendar:['Calendar','Shared across all companies — job schedule plus merged Google Calendars'],
  customers:['Customers','Client database and history'],
  'price-book':['Price Book','Your standard jobs, materials and rates — pick them straight into quotes and invoices'],
  services:['Service Plans','Annual boiler services, landlord gas safety and other repeat work — never miss a renewal'],
  team:['Team','Team members, roles and availability — shared across Steady Inc'],
  timesheets:['Timesheets','Weekly hours for the team — fill in on-site, print a blank sheet, or import a completed one'],
  subcontractors:['Subcontractors','Trades, day rates and insurance status'],
  expenses:['Expenses','Costs, materials and overheads'],
  compliance:['Compliance','Certificates, insurance and renewals'],
  reports:['Reports','Business performance reporting'],
  activity:['Activity Log','A record of what was created, changed and deleted, and when'],
  bugs:['Bugs','Known issues and updates needed — logged now, fixed later'],
  settings:['Settings','Company details, rates and preferences'],
  accounting:['Snapshot','A quick read on where Steady Inc stands right now — SteadyWorks + SteadyFlow combined'],
  forecast:['Forecast','A simple projection of where revenue is headed over the next few months'],
  'balance-sheet':['Balance Sheet','What Steady Inc owns versus what it owes'],
  'assets-liabilities':['Assets & Liabilities','What the business owns and owes — feeds the Balance Sheet']
};

function renderPage(){
  const meta = PAGE_META[currentRoute] || ['',''];
  document.getElementById('page-title').textContent = meta[0];
  document.getElementById('page-sub').textContent = meta[1];
  const content = document.getElementById('content');
  const actions = document.getElementById('topbar-actions');
  actions.innerHTML = (CURRENT_PROFILE.role==='partner'||CURRENT_PROFILE.role==='accountant') ? '' : '<button class="btn btn-ghost" aria-label="Search everything" title="Search (Cmd+K)" onclick="openGlobalSearch()">🔍 Search <span class="small muted search-shortcut-hint" style="margin-left:4px;">⌘K</span></button><button class="btn btn-ghost" onclick="openQuickAdd(event)" title="Add anything">＋ New</button>';
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
    pipeline: afterRender_pipeline,
    forecast: afterRender_forecast,
    expenses: afterRender_expenses,
    'sf-expenses': afterRender_sf_expenses,
    'sf-acquisition': afterRender_sf_acquisition,
    'sf-leads': typeof afterRender_sf_leads==='function' ? afterRender_sf_leads : null,
    'sw-desk': typeof afterRender_sw_desk==='function' ? afterRender_sw_desk : null,
    targets: afterRender_targets
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
    targets: `<button class="btn btn-ghost" onclick="tgOpenAcq()">+ Acquisition spend</button><button class="btn btn-gold" onclick="tgOpenPayment()">+ Money received</button>`,
    'sf-leads': `<button class="btn btn-ghost" onclick="leReload()">↻ Refresh</button><button class="btn btn-gold" onclick="openLeLeadModal()">+ Add Lead</button>`,
    'sw-desk': `<button class="btn btn-ghost" onclick="leReload()">↻ Refresh</button><button class="btn btn-gold" onclick="openSwOrgModal()">+ Add Organisation</button>`,
    'sf-acquisition': `<button class="btn btn-ghost" onclick="exportProspectsCSV()">⬇️ Export CSV</button><button class="btn btn-gold" onclick="openProspectModal()">+ Add Prospect</button>`,
    'sf-invoices': `<button class="btn btn-gold" onclick="openSfInvoiceModal()">+ New Invoice</button>`,
    'sf-expenses': `<button class="btn btn-ghost" onclick="openImportExpensesModal('sf')">📥 Import CSV</button> <button class="btn btn-gold" onclick="openSfExpenseModal()">+ New Expense</button>`,
    'sf-compliance': `<button class="btn btn-gold" onclick="openSfComplianceModal()">+ Add Document</button>`,
    accounting: `<button class="btn btn-gold" onclick="printAccountingReport('snapshot')">🖨️ Export PDF</button>`,
    forecast: `<button class="btn btn-gold" onclick="printAccountingReport('forecast')">🖨️ Export PDF</button>`,
    'balance-sheet': `<button class="btn btn-gold" onclick="printAccountingReport('balance-sheet')">🖨️ Export PDF</button>`,
    'assets-liabilities': `<button class="btn btn-ghost" onclick="openImportAssetsLiabilitiesModal('asset')">📥 Import Assets</button> <button class="btn btn-ghost" onclick="openImportAssetsLiabilitiesModal('liability')">📥 Import Liabilities</button> <button class="btn btn-ghost" onclick="openLiabilityModal()">+ New Liability</button> <button class="btn btn-gold" onclick="openAssetModal()">+ New Asset</button>`,
    services: `<button class="btn btn-gold" onclick="swOpenService()">+ New Service Plan</button>`,
    'price-book': `<button class="btn btn-ghost" onclick="pbExportCSV()">⬇️ Export CSV</button><button class="btn btn-gold" onclick="pbOpenItem()">+ New Item</button>`,
    customers: `<button class="btn btn-ghost" onclick="openImportContactsModal('customer')">📇 Import Contacts</button> <button class="btn btn-gold" onclick="openCustomerModal()">+ New Customer</button>`,
    team: `<button class="btn btn-gold" onclick="openEmployeeModal()">+ Add Team Member</button>`,
    timesheets: `<button class="btn btn-ghost" onclick="openPrintBlankTimesheetModal()">🖨️ Print Blank Sheet</button> <button class="btn btn-ghost" onclick="openImportTimesheetModal()">📥 Import Filled Sheet</button> <button class="btn btn-gold" onclick="openTimesheetModal()">+ New Timesheet</button>`,
    subcontractors: `<button class="btn btn-ghost" onclick="openImportContactsModal('subcontractor')">📇 Import Contacts</button> <button class="btn btn-gold" onclick="openSubcontractorModal()">+ Add Subcontractor</button>`,
    expenses: `<button class="btn btn-ghost" onclick="openImportExpensesModal('sw')">📥 Import CSV</button> <button class="btn btn-gold" onclick="openExpenseModal()">+ New Expense</button>`,
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
  return '';
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
  return '';
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
  const done = filtered.filter(t=>t.status==='done').sort((a,b)=>new Date(b.due_date||b.created_at||0)-new Date(a.due_date||a.created_at||0));

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
  return '';
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
function sfTodayStr(){ return localDateStr(); }
function sfDaysAgoStr(n){ const d=new Date(); d.setDate(d.getDate()-n); return localDateStr(d); }
function view_sf_dashboard(){
  DB.sfActivity = DB.sfActivity||[];
  DB.sfQuotes = DB.sfQuotes||[];
  DB.sfInvoices = DB.sfInvoices||[];

  const activeClients = DB.sfClients.filter(c=>c.status==='active').length;
  const leadCt = DB.sfClients.filter(c=>c.status==='lead').length;
  const mrrTotal = DB.sfClients.filter(c=>c.status==='active' && c.billingType!=='one-off').reduce((s,c)=>s+(Number(c.mrr)||0),0);
  const outstanding = DB.sfInvoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0);

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
    <div style="cursor:pointer;" onclick="navigate('sf-acquisition')">${progressBarCard('🎯 New Clients This Week <span class="small" style="color:var(--teal);font-weight:700;">Open Acquisition →</span>', acqWonThisWeek().length+' of '+ACQ_WEEKLY_TARGET+' won · '+acqActiveProspects().length+' active prospects', acqWonThisWeek().length/ACQ_WEEKLY_TARGET*100)}</div>
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
      <tbody>${activityRows || emptyRow(5,'No outreach logged yet.','+ Log Today\'s Activity','openSfActivityModal()')}</tbody>
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
  'Retainer — Essentials — £300/mo',
  'Retainer — Growth — £900/mo',
  'Retainer — Full Marketing — £1,500/mo',
  'Bundle (Website + Business OS, 8% off)',
  'UGC Content Creation',
  'Custom'
];
// Older package labels already saved on client records — still shown when a
// client is on one, but no longer offered for new clients.
const SF_LEGACY_PACKAGES = ['Retainer — Social Starter — £199/mo','Retainer — Growth — £669/mo','Retainer — Full Marketing — £1,099/mo'];
function sfPackageOptions(current){
  const list = SF_PACKAGES.slice();
  if(current && !list.includes(current)) list.unshift(current);
  return list.map(p=>`<option ${current===p?'selected':''}>${esc(p)}</option>`).join('');
}
let SF_FILTER = 'all';

let SF_CLIENT_SEARCH = '';
function sfClientRows(){
  const q = SF_CLIENT_SEARCH.trim().toLowerCase();
  const list = (SF_FILTER==='all' ? DB.sfClients : DB.sfClients.filter(c=>c.status===SF_FILTER))
    .filter(c=>!q || [c.name,c.biz,c.email,c.phone,c.niche,c.package].join(' ').toLowerCase().includes(q))
    .slice().sort((a,b)=>({active:0,lead:1,paused:2}[a.status]??3)-({active:0,lead:1,paused:2}[b.status]??3) || String(a.name).localeCompare(String(b.name)));
  if(!list.length){
    return DB.sfClients.length
      ? emptyRow(6,'No clients match that search or filter.')
      : emptyRow(6,'No clients yet — add your first lead or client. New prospects from outreach live in Acquisition until they sign.','+ New Client / Lead','openSfClientModal()');
  }
  return list.map(c=>{
    const dd = c.callDate ? daysUntil(c.callDate) : null;
    const callCls = dd!==null && dd<0 ? 'color:var(--danger);font-weight:700;' : dd===0 ? 'color:var(--warning);font-weight:700;' : '';
    return `<tr class="row-link" onclick="openSfClientModal('${c.id}')">
      <td><strong>${esc(c.name)}</strong><div class="small muted">${esc(c.biz||'')}${c.niche?' · '+esc(c.niche):''}</div></td>
      <td class="small">${esc(c.package||'—')}</td>
      <td>${c.billingType==='one-off' ? `${fmt(c.mrr)} <span class="small muted">one-off</span>` : `${fmt(c.mrr)}<span class="small muted">/mo</span>`}</td>
      <td><span class="pill ${SF_STATUS_CLS[c.status]||'st-draft'}"><span class="pill-dot" style="background:currentColor;"></span>${esc((c.status||'lead').replace(/^./,x=>x.toUpperCase()))}</span></td>
      <td class="small" style="${callCls}">${c.callDate?fmtDate(c.callDate):'—'}</td>
      <td class="small" onclick="event.stopPropagation()">${c.website?`<a href="${esc(/^https?:/i.test(c.website)?c.website:'https://'+c.website)}" target="_blank" rel="noopener" style="color:var(--teal);">Site ↗</a>`:''}${c.email?` <a href="mailto:${esc(c.email)}" style="color:var(--teal);margin-left:8px;">Email</a>`:''}</td>
    </tr>`;
  }).join('');
}
function setSfClientSearch(v){ SF_CLIENT_SEARCH = v; const b = document.getElementById('sf-clients-body'); if(b) b.innerHTML = sfClientRows(); }
function view_sf_clients(){
  const mrrTotal = DB.sfClients.filter(c=>c.status==='active' && c.billingType!=='one-off').reduce((s,c)=>s+(Number(c.mrr)||0),0);
  const count = st => st==='all' ? DB.sfClients.length : DB.sfClients.filter(c=>c.status===st).length;
  const dueCalls = DB.sfClients.filter(c=>{ const dd=daysUntil(c.callDate); return dd!==null && dd<=0 && c.status!=='paused'; }).length;
  return `
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Active Clients</div><div class="kpi-value">${count('active')}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Leads</div><div class="kpi-value">${count('lead')}</div></div>
    <div class="card kpi-card"><div class="kpi-label">MRR (active)</div><div class="kpi-value">${fmt(mrrTotal)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Calls Due / Overdue</div><div class="kpi-value" style="color:${dueCalls?'var(--warning)':'inherit'};">${dueCalls}</div></div>
  </div>
  <div class="toolbar">
    <div class="tabs" style="margin-bottom:0;border-bottom:none;">
      ${['all','lead','active','paused'].map(st=>`<button class="tab-btn ${SF_FILTER===st?'active':''}" onclick="setSfFilter('${st}')">${st==='all'?'All':st[0].toUpperCase()+st.slice(1)} <span class="small muted">${count(st)}</span></button>`).join('')}
    </div>
    <div class="spacer"></div>
    <div class="search-box">🔍<input type="text" placeholder="Search clients…" value="${esc(SF_CLIENT_SEARCH)}" oninput="setSfClientSearch(this.value)"></div>
  </div>
  <div class="card">
    <table><thead><tr><th>Client</th><th>Package</th><th>Value</th><th>Status</th><th>Next call</th><th></th></tr></thead>
    <tbody id="sf-clients-body">${sfClientRows()}</tbody></table>
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
            ${sfPackageOptions(c?c.package:'')}
          </select>
        </div>
        <div class="form-group"><label>Value (£ — per month for retainers)</label><input id="sf-mrr" type="number" min="0" value="${c?c.mrr||0:0}"></div>
      </div>
      <div class="form-row form-row-3">
        <div class="form-group"><label>Billing Type</label>
          <select id="sf-billingType">
            <option value="monthly" ${!c||c.billingType!=='one-off'?'selected':''}>Monthly retainer (recurring)</option>
            <option value="one-off" ${c&&c.billingType==='one-off'?'selected':''}>One-off project</option>
          </select>
        </div>
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
  if(!requireField('sf-name','Contact name is required') || !checkEmailField('sf-email')) return;
  const data = {
    name: document.getElementById('sf-name').value.trim(),
    biz: document.getElementById('sf-biz').value.trim(),
    phone: document.getElementById('sf-phone').value.trim(),
    email: document.getElementById('sf-email').value.trim(),
    website: document.getElementById('sf-website').value.trim(),
    niche: document.getElementById('sf-niche').value.trim(),
    package: document.getElementById('sf-package').value,
    mrr: Number(document.getElementById('sf-mrr').value)||0,
    billingType: document.getElementById('sf-billingType').value,
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
let SF_QUOTE_FILTER = 'all';
function setSfQuoteFilter(f){ SF_QUOTE_FILTER = f; renderPage(); }
function view_sf_quotes(){
  const all = DB.sfQuotes||[];
  const list = SF_QUOTE_FILTER==='all' ? all : all.filter(q=>q.status===SF_QUOTE_FILTER);
  const decided = all.filter(q=>['approved','declined','expired'].includes(q.status));
  const approved = all.filter(q=>q.status==='approved');
  const openVal = all.filter(q=>['draft','sent'].includes(q.status)).reduce((s,q)=>s+calcQuoteTotal(q).total,0);
  const wonVal = approved.reduce((s,q)=>s+calcQuoteTotal(q).total,0);
  const rows = list.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(q=>{
    const t = calcQuoteTotal(q);
    const client = q.clientId ? DB.sfClients.find(c=>c.id===q.clientId) : null;
    const expiring = ['draft','sent'].includes(q.status) && q.validUntil && daysUntil(q.validUntil)!==null && daysUntil(q.validUntil)<0;
    return `<tr class="row-link" onclick="openSfQuoteModal('${q.id}')">
      <td><strong>${esc(q.quoteNumber)}</strong></td>
      <td>${esc(q.clientName)}${client&&client.biz?`<div class="small muted">${esc(client.biz)}</div>`:''}</td>
      <td>${statusPill(expiring?'expired':q.status)}</td>
      <td>${fmt(t.total)}</td>
      <td>${fmtDate(q.validUntil)}</td>
    </tr>`;
  }).join('');
  const count = st => st==='all' ? all.length : all.filter(q=>q.status===st).length;
  return `
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Open Quotes</div><div class="kpi-value">${fmt(openVal)}</div><div class="small muted mt-10">${count('draft')+count('sent')} draft / sent</div></div>
    <div class="card kpi-card"><div class="kpi-label">Approved Value</div><div class="kpi-value" style="color:var(--success);">${fmt(wonVal)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Win Rate</div><div class="kpi-value">${decided.length?Math.round(approved.length/decided.length*100):0}%</div><div class="small muted mt-10">${approved.length} of ${decided.length} decided</div></div>
    <div class="card kpi-card"><div class="kpi-label">Total Quotes</div><div class="kpi-value">${all.length}</div></div>
  </div>
  <div class="tabs">
    ${['all'].concat(SF_QUOTE_STATUSES).map(st=>`<button class="tab-btn ${SF_QUOTE_FILTER===st?'active':''}" onclick="setSfQuoteFilter('${st}')">${st==='all'?'All':st[0].toUpperCase()+st.slice(1)} <span class="small muted">${count(st)}</span></button>`).join('')}
  </div>
  <div class="card"><table>
    <thead><tr><th>Quote #</th><th>Client</th><th>Status</th><th>Total (inc. VAT)</th><th>Valid Until</th></tr></thead>
    <tbody>${rows || (all.length ? emptyRow(5,'No quotes with that status.') : emptyRow(5,'No SteadyFlow quotes yet.','+ New Quote','openSfQuoteModal()'))}</tbody>
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
      ${lineItemAdders()}
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
  const validItems = window._editingItems.filter(i=>String(i.desc||'').trim() || Number(i.rate));
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
  if(q.status!=='approved') q.status = 'approved';
  logActivity('SteadyFlow invoice created', invoiceNumber+' — from '+q.quoteNumber);
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
let SF_INVOICE_FILTER = 'all';
function setSfInvoiceFilter(f){ SF_INVOICE_FILTER = f; renderPage(); }
function view_sf_invoices(){
  const list = DB.sfInvoices||[];
  const shown = SF_INVOICE_FILTER==='all' ? list : SF_INVOICE_FILTER==='unpaid' ? list.filter(i=>i.status!=='paid') : list.filter(i=>invoiceStatus(i)===SF_INVOICE_FILTER);
  const totals = {
    outstanding: list.filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0),
    paid: list.reduce((s,i)=>s+tgInvoiceReceived(i),0),
    overdue: list.filter(i=>invoiceStatus(i)==='overdue').reduce((s,i)=>s+invoiceOutstanding(i),0)
  };
  const rows = shown.slice().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(inv=>{
    const t = calcInvoiceTotal(inv);
    return `<tr class="row-link" onclick="openSfInvoiceModal('${inv.id}')">
      <td><strong>${esc(inv.invoiceNumber)}</strong></td>
      <td>${esc(inv.clientName)}</td>
      <td>${statusPill(invoiceStatus(inv))}</td>
      <td>${fmt(t.total)}</td>
      <td>${fmt(inv.amountPaid||0)}</td>
      <td>${fmtDate(inv.dueDate)}</td>
    </tr>`;
  }).join('');
  return `
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Outstanding</div><div class="kpi-value">${fmt(totals.outstanding)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Received (all time)</div><div class="kpi-value">${fmt(totals.paid)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Overdue</div><div class="kpi-value" style="color:var(--danger);">${fmt(totals.overdue)}</div></div>
  </div>
  <div class="tabs">
    ${[['all','All'],['unpaid','Unpaid'],['overdue','Overdue'],['paid','Paid'],['draft','Draft']].map(([k,l])=>`<button class="tab-btn ${SF_INVOICE_FILTER===k?'active':''}" onclick="setSfInvoiceFilter('${k}')">${l}</button>`).join('')}
  </div>
  <div class="card"><table>
    <thead><tr><th>Invoice #</th><th>Client</th><th>Status</th><th>Total</th><th>Paid</th><th>Due Date</th></tr></thead>
    <tbody>${rows || (list.length ? emptyRow(6,'No invoices in this view.') : emptyRow(6,'No SteadyFlow invoices yet — create one, or convert an approved quote.','+ New Invoice','openSfInvoiceModal()'))}</tbody>
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
      ${lineItemAdders()}
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
  const validItems = window._editingItems.filter(i=>String(i.desc||'').trim() || Number(i.rate));
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
  let inv, prevReceived = 0;
  if(id){ inv = DB.sfInvoices.find(i=>i.id===id); prevReceived = tgInvoiceReceived(inv); Object.assign(inv, data); toast('Invoice updated'); }
  else {
    const invoiceNumber = nextSfInvoiceNumber();
    inv = Object.assign({id:uid(), invoiceNumber, createdAt:new Date().toISOString().slice(0,10)}, data);
    DB.sfInvoices.push(inv);
    logActivity('SteadyFlow invoice created', invoiceNumber+' — '+data.clientName);
    toast('Invoice '+invoiceNumber+' created');
  }
  const pay = tgSyncInvoicePayment(DB, 'sf', inv, new Date(), {prevReceived});
  if(pay) setTimeout(()=>toast(gbp(pay.amount)+' received — counted toward SteadyFlow target','💷'), 900);
  save(); closeModal(); renderPage(); renderNav();
}
function deleteSfInvoice(id){
  const inv0 = (DB.sfInvoices||[]).find(x=>x.id===id);
  confirmDelete('Delete '+(inv0?inv0.invoiceNumber:'this invoice')+'?', "This can't be undone.", ()=>{
    DB.sfInvoices = DB.sfInvoices.filter(i=>i.id!==id); save(); closeModal(); renderPage(); renderNav(); toast('Invoice deleted','🗑️');
  });
}

/* ---------- QUICK ADD: the things you add most, from any page ---------- */
const QUICK_ADD = [
  ['📥','Lead','openLeadModal()'], ['📝','Quote','openQuoteModal()'], ['🛠️','Job','openJobModal()'], ['🧾','Invoice','openInvoiceModal()'],
  ['💷','Payment received','quickPayment()'], ['💸','Expense — SteadyWorks','openExpenseModal()'], ['💸','Expense — SteadyFlow','openSfExpenseModal()'],
  ['🎯','Prospect (SteadyFlow)','openProspectModal()'], ['👤','Customer','openCustomerModal()']
];
function openQuickAdd(ev){
  ev && ev.stopPropagation();
  const existing = document.getElementById('quick-add-menu');
  if(existing){ existing.remove(); return; }
  const btn = ev && ev.currentTarget, r = btn ? btn.getBoundingClientRect() : {right:innerWidth-20, bottom:70};
  const m = document.createElement('div');
  m.id = 'quick-add-menu'; m.className = 'quick-add-menu';
  m.style.top = (r.bottom+6)+'px'; m.style.right = Math.max(10, innerWidth - r.right)+'px';
  m.innerHTML = QUICK_ADD.map(([i,l,fn])=>`<button onclick="document.getElementById('quick-add-menu').remove(); ${fn}">${i} ${l}</button>`).join('');
  document.body.appendChild(m);
  setTimeout(()=>document.addEventListener('click', function close(e){ if(!m.contains(e.target)){ m.remove(); document.removeEventListener('click', close); } }), 0);
}
// Payment received: pick the unpaid invoice (dated, method, counted once) — or log other money.
function quickPayment(){
  const unpaid = DB.invoices.filter(i=>i.status!=='paid' && i.status!=='draft').sort((a,b)=>String(a.dueDate).localeCompare(String(b.dueDate)));
  openModal(`<div class="modal-head"><h2>💷 Payment received</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Which SteadyWorks invoice was paid?</p>
      ${unpaid.length ? unpaid.map(i=>`<div class="tg-exp-row row-link" style="cursor:pointer;" onclick="closeModal(); swOpenRecordPayment('${i.id}')"><div style="flex:1;"><strong>${esc(i.invoiceNumber)}</strong> · ${esc(i.customerName)}<div class="small muted">${fmt(invoiceOutstanding(i))} outstanding · due ${fmtDate(i.dueDate)}</div></div>${statusPill(invoiceStatus(i))}</div>`).join('') : '<p class="small muted">No unpaid SteadyWorks invoices.</p>'}
      <div class="divider"></div>
      <button class="btn btn-ghost btn-sm" onclick="closeModal(); tgOpenPayment()">Other money received (SteadyFlow, cash job, no invoice)…</button>
    </div>`);
}

/* ---------- MODAL HELPERS ---------- */
function openModal(html, lg){
  document.getElementById('modal-root').innerHTML = `<div class="modal-overlay open" id="active-modal" onclick="if(event.target===this) closeModal()">
    <div class="modal ${lg?'modal-lg':''}" role="dialog" aria-modal="true">${html}</div>
  </div>`;
  if(window.matchMedia && window.matchMedia('(pointer:fine)').matches){
    setTimeout(()=>{
      const f = document.querySelector('#active-modal .modal-body input:not([type=hidden]):not([type=checkbox]):not([disabled]), #active-modal .modal-body textarea');
      if(f && !document.activeElement.closest('#active-modal')) f.focus();
    }, 40);
  }
}
function closeModal(){
  document.getElementById('modal-root').innerHTML = '';
}
document.addEventListener('keydown', e=>{
  if(e.key!=='Escape') return;
  if(document.getElementById('active-modal')){ closeModal(); return; }
  const calc = document.getElementById('calc-widget'); if(calc) calc.remove();
});
// Light email sanity check for optional email fields — blank is allowed.
function checkEmailField(id){
  const el = document.getElementById(id);
  if(!el) return true;
  const v = el.value.trim();
  el.classList.remove('invalid');
  if(v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){
    el.classList.add('invalid'); el.focus();
    toast('That email address doesn\'t look right','⚠️');
    return false;
  }
  return true;
}
function requireField(id, msg){
  const el = document.getElementById(id);
  if(!el) return true;
  el.classList.remove('invalid');
  if(!el.value.trim()){ el.classList.add('invalid'); el.focus(); toast(msg,'⚠️'); return false; }
  return true;
}
// Table empty state with an optional call-to-action button.
function emptyRow(colspan, msg, btnLabel, onclick){
  return `<tr><td colspan="${colspan}" class="empty-cell">${msg}${btnLabel?`<br><button class="btn btn-gold btn-sm" onclick="${onclick}">${btnLabel}</button>`:''}</td></tr>`;
}
function emptyBlock(msg, btnLabel, onclick, icon){
  return `<div class="empty-state">${icon?`<div class="ic">${icon}</div>`:''}<div>${msg}</div>${btnLabel?`<button class="btn btn-gold btn-sm" onclick="${onclick}">${btnLabel}</button>`:''}</div>`;
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
  (DB.sfProspects||[]).forEach(p=>items.push({type:'Prospect', label:p.business+(p.contact?' — '+p.contact:''), sub:(p.status||'')+(p.type?' · '+p.type:''), go:()=>{closeModal(); navigate('sf-acquisition'); openProspectModal(p.id);}}));
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
function runConfirmedDelete(){
  const action = window._confirmDeleteAction;
  window._confirmDeleteAction = null;
  closeModal();
  if(action) action();
}
function confirmDelete(title, message, action){
  window._confirmDeleteAction = action;
  openModal(`
    <div class="modal-head"><h2>${esc(title)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p>${esc(message)}</p></div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-danger" onclick="runConfirmedDelete()">Yes, delete it</button>
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
  const ls = document.getElementById('login-screen');
  ls.style.display = 'flex';
  ls.classList.remove('enter'); void ls.offsetWidth; ls.classList.add('enter');
  document.getElementById('app-root').style.display = 'none';
}
function showApp(session){
  document.getElementById('login-screen').style.display = 'none';
  const root = document.getElementById('app-root');
  if(root.style.display!=='block'){ root.style.display = 'block'; root.classList.add('enter'); }
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
// An 'accountant' profile only ever sees the Accounting section. Unlike
// 'partner' (which never even fetches the shared cloud state), an accountant
// DOES need the full app_settings blob pulled down so the Snapshot/Forecast/
// Balance Sheet pages can add up real numbers across SteadyWorks + SteadyFlow —
// so this is a UI-level restriction, not a data-level one. A technically
// determined accountant could inspect network requests and see the raw JSON
// (customer names, job details, everything) even though the UI only ever
// renders them the four accounting pages. Fine for a trusted accountant;
// worth knowing if that's ever a concern.
const ACCOUNTANT_ALLOWED_ROUTES = {accounting:true, forecast:true, 'balance-sheet':true, 'assets-liabilities':true};
async function loadUserProfile(userId){
  try{
    const {data} = await sb.from('profiles').select('*').eq('id', userId).maybeSingle();
    if(data) return {role: data.role||'owner', scope: data.scope||null};
  }catch(e){ console.warn('Profile lookup failed, defaulting to full access:', e); }
  return {role:'owner', scope:null};
}
function isRouteAllowed(route){
  if(CURRENT_PROFILE.role==='partner') return !!PARTNER_ALLOWED_ROUTES[route];
  if(CURRENT_PROFILE.role==='accountant') return !!ACCOUNTANT_ALLOWED_ROUTES[route];
  return true;
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
  } else if(CURRENT_PROFILE.role==='accountant'){
    currentRoute = 'accounting';
    await pullCloudState(); // needs the shared numbers to add up the Snapshot/Forecast/Balance Sheet — see note above isRouteAllowed
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
    if(CURRENT_PROFILE.role==='partner' || CURRENT_PROFILE.role==='accountant') return;
    if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); openGlobalSearch(); }
  });
  if(CURRENT_PROFILE.role==='owner'){
    syncLeadsFromSupabase(false);
    syncCallsFromSupabase(false);
    setInterval(()=>{ syncLeadsFromSupabase(false); syncCallsFromSupabase(false); }, 60000);
  }
  if(CURRENT_PROFILE.role!=='partner'){
    // Pull the full shared state periodically too, so a change made on one
    // device (or by someone else logged in) shows up here without needing
    // a manual refresh. Skipped while a modal/form is open so it can't
    // clobber something you're mid-way through editing.
    setInterval(async ()=>{
      if(document.getElementById('active-modal')) return;
      const got = await pullCloudState();
      if(!got) return;
      renderNav();
      const ae = document.activeElement;
      const typing = ae && ae.closest && ae.closest('#content') && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName);
      if(!typing) renderPage();
    }, 45000);
  }
}

/* ---------- BOOT SPLASH (CSS-driven; JS only builds the letters and waits for the bar) ---------- */
let BOOT_SPLASH_DONE = false;
const _afterSplash = [];
function whenSplashDone(fn){ if(BOOT_SPLASH_DONE) fn(); else _afterSplash.push(fn); }
function finishBootSplash(){
  if(BOOT_SPLASH_DONE) return;
  BOOT_SPLASH_DONE = true;
  const el = document.getElementById('boot-splash');
  if(el){ el.classList.add('done'); setTimeout(()=>{ el.style.display = 'none'; }, 600); }
  _afterSplash.splice(0).forEach(fn=>{ try{ fn(); }catch(e){ console.error(e); } });
}
function initBootSplash(){
  const el = document.getElementById('boot-splash');
  if(!el){ BOOT_SPLASH_DONE = true; return; }
  const logo = document.getElementById('boot-logo');
  // Real brand logo; the old hand-drawn LOGO_SVG is only a fallback if the image can't load.
  if(logo) logo.innerHTML = `<span class="glow"></span><img src="assets/steady-inc-logo.png" alt="" onerror="this.outerHTML=LOGO_SVG">`;
  const word = document.getElementById('boot-word');
  const text = 'STEADY INC';
  if(word) word.innerHTML = text.split('').map((ch,i)=>`<span class="${ch===' '?'sp':''}" style="animation-delay:${(0.55+i*0.06).toFixed(2)}s">${ch===' '?'&nbsp;':ch}</span>`).join('');
  const sub = document.getElementById('boot-sub');
  if(sub) sub.style.animationDelay = (0.55+text.length*0.06+0.3).toFixed(2)+'s';
  const bar = document.getElementById('boot-progress-fill');
  if(bar) bar.addEventListener('animationend', finishBootSplash);
  setTimeout(finishBootSplash, 2600); // safety net if animations are disabled
}
initBootSplash();

function startApp(){
  sb.auth.getSession().then(({ data: { session } })=>{
    whenSplashDone(()=>{ if(session) showApp(session); else showLogin(); });
  });
  sb.auth.onAuthStateChange((event, session)=>{
    whenSplashDone(()=>{
      if(session) showApp(session);
      else { appBooted = false; showLogin(); }
    });
  });
}

document.addEventListener('DOMContentLoaded', startApp);


/* ===================== MONEY RECEIVED — one definition of revenue for the whole app ===================== */
/* Revenue = money that actually arrived, on the day it arrived (the Targets ledger).
   Invoices paid before the ledger existed (not yet imported) still count, dated by
   when they were paid if known, otherwise their invoice date — so nothing vanishes,
   and nothing is counted twice once it is imported. VAT inside each amount is
   estimated from the invoice it came from (manual / pipeline money: none known). */
function receivedEntries(db, biz){
  const out = [];
  const ratio = key => {
    const [kind, id] = String(key||'').split(':');
    const inv = kind==='inv' ? (db.invoices||[]).find(i=>i.id===id) : kind==='sfinv' ? (db.sfInvoices||[]).find(i=>i.id===id) : null;
    if(!inv) return 0;
    const t = calcInvoiceTotal(inv); return t.total ? t.vat/t.total : 0;
  };
  tgLivePayments(db).forEach(p=>{
    if(biz!=='all' && p.biz!==biz) return;
    const amt = Number(p.amount)||0;
    out.push({date:p.date, amount:amt, vat:amt*ratio(p.sourceKey), biz:p.biz});
  });
  const legacy = (list, kind) => (list||[]).forEach(inv=>{
    const key = (kind==='sf'?'sfinv:':'inv:')+inv.id;
    const missing = tgInvoiceReceived(inv) - tgLinkedTotal(db, key);
    if(missing <= 0.009) return;
    const t = calcInvoiceTotal(inv);
    const lastPay = (inv.payments||[]).slice(-1)[0];
    out.push({date: inv.paidAt || (lastPay && lastPay.date) || String(inv.createdAt||'').slice(0,10), amount:missing, vat: t.total ? missing*t.vat/t.total : 0, biz:kind, legacy:true});
  });
  if(biz!=='sf') legacy(db.invoices, 'sw');
  if(biz!=='sw') legacy(db.sfInvoices, 'sf');
  return out;
}
function receivedSum(biz, from, to){
  const e = receivedEntries(DB, biz).filter(x=>x.date && (!from || x.date>=from) && (!to || x.date<=to));
  const gross = e.reduce((s,x)=>s+x.amount,0), vat = e.reduce((s,x)=>s+x.vat,0);
  return {gross:Math.round(gross*100)/100, vat:Math.round(vat*100)/100, net:Math.round((gross-vat)*100)/100};
}
function monthStartStr(d){ return localDateStr(new Date(d.getFullYear(), d.getMonth(), 1)); }
function monthEndStr(d){ return localDateStr(new Date(d.getFullYear(), d.getMonth()+1, 0)); }
function receivedInMonth(biz, d){ return receivedSum(biz, monthStartStr(d), monthEndStr(d)).gross; }
function receivedTrailingAvg(biz, months){
  const now = new Date(); let t = 0;
  for(let i=0;i<months;i++) t += receivedInMonth(biz, new Date(now.getFullYear(), now.getMonth()-i, 1));
  return t/months;
}

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
// Remaining balance actually owed on an invoice — subtracts amountPaid so a
// 'partial' invoice (e.g. a deposit received) doesn't get counted as fully
// outstanding. Never negative. Use this everywhere "Outstanding" is summed.
// Display status: a sent/partial invoice past its due date is overdue even if
// nobody has flipped the status by hand. Stored status is left untouched.
function invoiceStatus(inv){
  if(!inv) return 'draft';
  if((inv.status==='sent' || inv.status==='partial') && inv.dueDate){
    const dd = daysUntil(inv.dueDate);
    if(dd!==null && dd<0) return 'overdue';
  }
  return inv.status || 'draft';
}
function invoiceOutstanding(inv){
  const total = calcInvoiceTotal(inv).total;
  const paid = Number(inv.amountPaid)||0;
  return Math.max(total - paid, 0);
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

  const yearStart = thisYear+'-01-01';
  const swMonthRevenue = receivedInMonth('sw', now);
  const swYtdRevenue = receivedSum('sw', yearStart, localDateStr(now)).gross;
  const swOutstanding = DB.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0);

  const sfMonthRevenue = receivedInMonth('sf', now);
  const sfYtdRevenue = receivedSum('sf', yearStart, localDateStr(now)).gross;
  const sfOutstanding = (DB.sfInvoices||[]).filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0);
  const sfMrr = (DB.sfClients||[]).filter(c=>c.status==='active' && c.billingType!=='one-off').reduce((s,c)=>s+(Number(c.mrr)||0),0);

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

  ${dashboardTargetsHtml()}
  <div class="card" style="margin-bottom:20px;">
    <div class="card-title">Revenue — Combined <span class="muted small">Last 6 months</span></div>
    <div style="position:relative;height:220px;width:100%;"><canvas id="chartCombinedRevenue"></canvas></div>
  </div>

  <div class="grid grid-3" style="margin-bottom:20px;align-items:start;">
    ${dashboardGoalsHtml('all','dashboard')}
  </div>
  `;
}
function dashboardTargetsHtml(){
  try{
    const now = new Date();
    return `<div class="grid grid-2" style="margin-bottom:20px;cursor:pointer;" onclick="setTgTab('overview')">${['sw','sf'].map(b=>{ const st = tgState(DB,b,now); return progressBarCard('🏁 '+TG_BIZ[b].name+' · Level '+st.level+' <span class="small" style="color:var(--teal);font-weight:700;">Targets →</span>', gbp(st.revenue)+' received of '+gbp(st.target)+' · '+tgPace(st,now).status, st.pct); }).join('')}</div>`;
  }catch(e){ return ''; }
}
function afterRender_dashboard(){
  const months = [];
  const now = new Date();
  for(let i=5;i>=0;i--){ months.push(new Date(now.getFullYear(), now.getMonth()-i, 1)); }
  const labels = months.map(d=>d.toLocaleDateString('en-GB',{month:'short'}));
  const swByMonth = months.map(d=>receivedInMonth('sw', d));
  const sfByMonth = months.map(d=>receivedInMonth('sf', d));
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

  const monthRevenue = receivedInMonth('sw', now);
  const ytdRevenue = receivedSum('sw', thisYear+'-01-01', localDateStr(now)).gross;

  const target = DB.settings.monthlyTargets[thisMonth] || (DB.settings.annualTarget/12);
  const pctTarget = target? Math.round((monthRevenue/target)*100) : 0;

  const outstanding = DB.invoices.filter(i=>i.status!=='paid')
    .reduce((s,i)=>s+invoiceOutstanding(i),0);

  const overdueAmt = DB.invoices.filter(i=>invoiceStatus(i)==='overdue')
    .reduce((s,i)=>s+invoiceOutstanding(i),0);

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

  // Same profit as Accounting (pipeline money is already in received revenue, so it isn't added again)
  const profit = accountingRollup().swProfitMTD;

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
  ${swMoneyWaitingHtml()}

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
  status = String(status||'draft');
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
  const actuals = months.map(d=>receivedInMonth('sw', d));
  const targets = months.map(d=> DB.settings.monthlyTargets[d.getMonth()] || (DB.settings.annualTarget/12));

  chartSafe('chartTargetActual','bar',{
    labels, datasets:[
      {label:'Target', data:targets, backgroundColor:'rgba(255,255,255,0.12)', borderRadius:6},
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
  chartSafe('chartJobs','bar',{ labels, datasets:[{label:'Jobs', data:jobsCompleted, backgroundColor:'#00A99D', borderRadius:6}] },
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
    labels:Object.keys(sources), datasets:[{data:Object.values(sources), backgroundColor:['#E11D2A','#00A99D','#22C55E','#F59E0B','#7C3AED','#0EA5E9']}]
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
  const hint = DB.leads.length ? '' : `<div class="card mb-10 flex-between" style="gap:10px;flex-wrap:wrap;"><span class="small muted">No leads yet — website enquiries land here automatically, or add one by hand. Drag cards between columns to move them along.</span><button class="btn btn-gold btn-sm" onclick="openLeadModal()">+ New Lead</button></div>`;
  return `${hint}<div class="kanban">${cols}</div>`;
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
      ${lead?`<button class="btn btn-ghost" onclick="convertLeadToQuote('${lead.id}')">📝 Create Quote</button>`:''}
      ${lead?`<button class="btn btn-dark" onclick="convertLeadToJob('${lead.id}')">Convert to Job</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveLead('${lead?lead.id:''}')">${lead?'Save Changes':'Create Lead'}</button>
    </div>
  `);
}
function saveLead(id){
  if(!requireField('f-name','Add a name or company for this lead') || !checkEmailField('f-email')) return;
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
function convertLeadToQuote(id){
  const lead = DB.leads.find(l=>l.id===id);
  if(!lead) return;
  closeModal();
  openQuoteModal(null, null, {leadId:lead.id, customerName:lead.name, notes:lead.notes});
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
  if(!checkEmailField('f-email')) return;
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
let SW_JOB_SEARCH = '', SW_JOB_FILTER = 'open';
function view_jobs(detailId){
  if(currentParam) return view_jobDetail(currentParam);
  const mode = window._jobsViewMode || 'list';
  const count = f => DB.jobs.filter(j=>swJobMatchesFilter(j,f)).length;
  const toolbar = `<div class="toolbar">
    <div class="seg-toggle">${[['list','📋 List'],['schedule','🗓️ Schedule'],['map','🗺️ Map']].map(([k,l])=>`<button class="seg-btn" style="${mode===k?'background:var(--gold);color:#fff;':''}" onclick="toggleJobsView('${k}')">${l}</button>`).join('')}</div>
    ${mode==='list'?`<div class="seg-toggle">${[['open','Open'],['scheduled','Scheduled'],['active','On site'],['completed','To invoice'],['all','All']].map(([k,l])=>`<button class="seg-btn" style="${SW_JOB_FILTER===k?'background:var(--card-alt);color:var(--text);':''}" onclick="SW_JOB_FILTER='${k}'; renderPage();">${l} <span class="muted">${count(k)}</span></button>`).join('')}</div>
    <div class="spacer"></div><div class="search-box">🔍<input type="text" placeholder="Search jobs, customers, addresses…" value="${esc(SW_JOB_SEARCH)}" oninput="SW_JOB_SEARCH=this.value; const b=document.getElementById('sw-jobs-body'); if(b) b.innerHTML=swJobRows();"></div>`:''}
  </div>`;
  if(mode==='schedule') return toolbar + swScheduleBoard();
  return `${toolbar}
  <div class="card" id="jobs-list-view" style="${mode==='map'?'display:none;':''}">
    <table>
      <thead><tr><th>Job #</th><th>Customer</th><th>Status</th><th>Priority</th><th>Engineer</th><th>Start</th><th>Value</th><th>Margin</th><th>Source</th></tr></thead>
      <tbody id="sw-jobs-body">${swJobRows()}</tbody>
    </table>
  </div>
  <div class="card" id="jobs-map-view" style="${mode!=='map'?'display:none;':''}">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
      <span class="small muted" id="jobs-map-count"></span>
      <span class="small muted" style="display:flex;gap:12px;flex-wrap:wrap;">
        <span><span class="pill-dot" style="background:#7DD3FC;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Scheduled</span>
        <span><span class="pill-dot" style="background:#E11D2A;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Active</span>
        <span><span class="pill-dot" style="background:#22C55E;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Completed</span>
        <span><span class="pill-dot" style="background:#818CF8;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Invoiced</span>
        <span><span class="pill-dot" style="background:#9CA3AF;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>Cancelled</span>
      </span>
    </div>
    <div id="jobs-map" style="height:520px;border-radius:10px;overflow:hidden;background:var(--card-alt);position:relative;"></div>
  </div>`;
}
function swJobMatchesFilter(j, f){
  if(f==='all') return true;
  if(f==='open') return !['completed','invoiced','cancelled'].includes(j.status);
  if(f==='completed') return j.status==='completed' && !swJobInvoiced(j);
  return j.status===f;
}
function swJobInvoiced(j){ return j.status==='invoiced' || DB.invoices.some(i=>i.jobId===j.id); }
function swJobMargin(j){
  const cost = (j.costLines||[]).reduce((s,c)=>s+(Number(c.actual)||Number(c.budget)||0),0);
  const vars = (j.variations||[]).filter(v=>v.status!=='Rejected').reduce((s,v)=>s+(Number(v.amount)||0),0);
  const value = (Number(j.expectedRevenue)||0) + vars;
  return {value, cost, margin:value-cost, pct: value ? (value-cost)/value*100 : null};
}
function swJobRows(){
  const q = SW_JOB_SEARCH.trim().toLowerCase();
  const list = DB.jobs.filter(j=>swJobMatchesFilter(j, SW_JOB_FILTER))
    .filter(j=>!q || [j.jobNumber,j.customerName,j.address,j.assignedTo,j.source].join(' ').toLowerCase().includes(q))
    .sort((a,b)=>String(b.startDate||'9999').localeCompare(String(a.startDate||'9999')));
  if(!list.length) return DB.jobs.length ? emptyRow(9,'No jobs match this view.') : emptyRow(9,'No jobs yet — create your first job, or win a quote.','+ New Job','openJobModal()');
  return list.map(j=>{ const m = swJobMargin(j); return `
    <tr class="row-link" onclick="navigate('jobs','${j.id}')">
      <td><strong>${esc(j.jobNumber)}</strong></td>
      <td>${esc(j.customerName)}<div class="small muted">${esc(j.address||'')}</div></td>
      <td>${statusPill(j.status)}${j.status==='completed'&&!swJobInvoiced(j)?' <span class="pill st-overdue" title="Completed but not invoiced">Invoice it</span>':''}</td>
      <td>${priorityPill(j.priority||'Medium')}</td>
      <td>${esc(j.assignedTo||'—')}</td>
      <td>${fmtDate(j.startDate)}</td>
      <td>${fmt(m.value)}</td>
      <td style="color:${m.pct==null||!m.cost?'var(--text-soft)':m.pct<20?'var(--danger)':m.pct<35?'var(--warning)':'var(--success)'};font-weight:700;">${m.cost?Math.round(m.pct)+'%':'—'}</td>
      <td>${esc(j.source||'—')}</td>
    </tr>`; }).join('');
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
  completed:'#22C55E', invoiced:'#818CF8', cancelled:'#9CA3AF'
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
  j.costLines = j.costLines||[]; j.documents = j.documents||[]; j.variations = j.variations||[]; j.phases = j.phases||[]; j.notes = j.notes||[]; j.photos = j.photos||[]; j.timeline = j.timeline||[];
  const jobQuotes = DB.quotes.filter(q=>q.jobId===j.id);
  const jobInvoices = DB.invoices.filter(inv=>inv.jobId===j.id);
  const costBudget = j.costLines.reduce((s,c)=>s+(Number(c.budget)||0),0);
  const costActual = j.costLines.reduce((s,c)=>s+(Number(c.actual)||0),0);
  const approvedVarTotal = j.variations.filter(v=>v.status!=='Rejected').reduce((s,v)=>s+(Number(v.amount)||0),0);
  const margin = (j.expectedRevenue + approvedVarTotal) - costActual;
  setTimeout(()=>{
    document.getElementById('page-title').textContent = j.jobNumber; document.getElementById('page-sub').textContent = j.customerName;
    if(window._jobTab && window._jobTab!=='overview'){ const b = document.querySelector('#job-tabs [data-tab="'+window._jobTab+'"]'); if(b) switchJobTab(b, window._jobTab); }
  },0);

  return `
  <div class="flex-between mb-10">
    <button class="btn btn-ghost btn-sm" onclick="navigate('jobs')">← All Jobs</button>
    <div class="flex gap-8">
      <button class="btn btn-ghost btn-sm" onclick="openJobModal('${j.id}')">Edit Job</button>
      ${!['completed','invoiced','cancelled'].includes(j.status)?`<button class="btn btn-success btn-sm" onclick="swMarkJobComplete('${j.id}')">✓ Mark Complete</button>`:''}
      <button class="btn btn-dark btn-sm" onclick="openQuoteModal(null,'${j.id}')">+ Quote</button>
      <button class="btn btn-gold btn-sm" onclick="swInvoiceFromJob('${j.id}')">+ Invoice</button>
    </div>
  </div>

  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card"><div class="kpi-label">Status</div>${statusPill(j.status)}</div>
    <div class="card"><div class="kpi-label">Priority</div>${priorityPill(j.priority||'Medium')}</div>
    <div class="card"><div class="kpi-label">Revenue (+ variations)</div><div class="kpi-value">${fmt(j.expectedRevenue+approvedVarTotal)}</div></div>
    <div class="card"><div class="kpi-label">Cost vs Margin</div><div class="kpi-value" style="color:${margin>=0?'var(--success)':'var(--danger)'};">${fmt(margin)}</div><span class="small muted">${fmt(costActual)} actual cost of ${fmt(costBudget)} budget</span></div>
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
    <button class="tab-btn" data-tab="sitesheet" onclick="switchJobTab(this,'sitesheet')">📱 Site Sheet${j.signoff?' ✓':''}</button>
    <button class="tab-btn" data-tab="materials" onclick="switchJobTab(this,'materials')">Materials & POs (${(DB.purchaseOrders||[]).filter(po=>po.jobId===j.id).length})</button>
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
        <td style="color:${v>=0?'var(--success)':'var(--danger)'};font-weight:700;">${v>=0?'+':''}${fmt(v)}</td>
        <td><button class="icon-btn" aria-label="Edit cost line" onclick="openCostLineModal('${j.id}','${c.id}')">✎</button><button class="icon-btn" aria-label="Delete cost line" onclick="deleteCostLine('${j.id}','${c.id}')">✕</button></td>
      </tr>`}).join('') || '<tr><td colspan="6" class="muted" style="text-align:center;padding:20px;">No cost lines yet — break the job down into materials, labour, subcontractor and plant costs.</td></tr>'}</tbody>
      <tfoot><tr><td colspan="2" style="font-weight:700;">Totals</td><td style="font-weight:700;">${fmt(costBudget)}</td><td style="font-weight:700;">${fmt(costActual)}</td><td style="font-weight:700;color:${(costBudget-costActual)>=0?'var(--success)':'var(--danger)'};">${(costBudget-costActual)>=0?'+':''}${fmt(costBudget-costActual)}</td><td></td></tr></tfoot></table>
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
      <tbody>${jobInvoices.map(inv=>{const t=calcInvoiceTotal(inv);return `<tr class="row-link" onclick="openInvoiceModal('${inv.id}')"><td><strong>${esc(inv.invoiceNumber)}</strong></td><td>${statusPill(invoiceStatus(inv))}</td><td>${fmt(t.total)}</td><td>${fmtDate(inv.dueDate)}</td></tr>`}).join('') || '<tr><td colspan="4" class="muted" style="text-align:center;padding:20px;">No invoices linked to this job</td></tr>'}</tbody></table>
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

  <div id="jobtab-sitesheet" class="job-tab-pane" style="display:none;">${swSiteSheetHtml(j)}</div>
  <div id="jobtab-materials" class="job-tab-pane" style="display:none;">${poJobPanelHtml(j)}</div>

  <div id="jobtab-photos" class="job-tab-pane" style="display:none;">
    <div class="card">
      <div class="flex-between mb-10"><div class="card-title" style="margin:0;">Photos, Drawings & Certificates</div><label class="btn btn-ghost btn-sm" style="cursor:pointer;">Upload <input type="file" multiple accept="image/*,.pdf" style="display:none" onchange="uploadJobPhoto('${j.id}',this.files)"></label></div>
      <div class="grid grid-4">
        ${j.photos.map((p,i)=>`<div><div class="file-thumb" style="cursor:${p.data?'zoom-in':'default'};" ${p.data?`onclick="swViewPhoto('${j.id}',${i})"`:''}>${p.data?`<img src="${p.data}">`:'📄'}</div><div class="small mt-10" style="word-break:break-all;">${p.label?`<span class="pill ${p.label==='Before'?'st-onhold':'st-won'}" style="padding:1px 7px;">${esc(p.label)}</span> `:''}${esc(p.name)} <button class="icon-btn" title="Remove" onclick="swRemovePhoto('${j.id}',${i})">✕</button></div></div>`).join('') || '<p class="muted small">No files uploaded yet.</p>'}
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
  window._jobTab = tab;
  if(tab==='sitesheet') swInitSignaturePad();
}
function addJobNote(jobId){
  const j = DB.jobs.find(x=>x.id===jobId);
  const text = document.getElementById('note-text').value.trim();
  if(!text){ toast('Type a note first','⚠️'); return; }
  j.notes = j.notes||[];
  j.notes.push({type:document.getElementById('note-type').value, text, date:new Date().toISOString().slice(0,10)});
  save(); navigate('jobs', jobId); toast('Note added');
}
function uploadJobPhoto(jobId, files, label){
  const j = DB.jobs.find(x=>x.id===jobId);
  if(!j || !files || !files.length) return;
  toast('Processing '+files.length+' file'+(files.length===1?'':'s')+'…','⏳');
  Promise.all(Array.from(files).map(f=> f.type.startsWith('image/') ? compressImage(f, 1280, 0.72).then(data=>({name:f.name, data})) : Promise.resolve({name:f.name, data:null})))
    .then(list=>{
      j.photos = j.photos||[];
      list.forEach(p=>j.photos.push(Object.assign(p, {id:uid(), label:label||'', date:localDateStr()})));
      save(); navigate('jobs', jobId); toast(list.length+' file'+(list.length===1?'':'s')+' added');
      if(label) setTimeout(()=>{ const b = document.querySelector('#job-tabs [data-tab="sitesheet"]'); if(b) b.click(); }, 50);
    });
}
// Shrinks phone photos (often 3–5MB) to ~150–300KB JPEGs so they fit in browser storage and sync quickly.
function compressImage(file, maxSize, quality){
  return new Promise(resolve=>{
    const reader = new FileReader();
    reader.onload = e=>{
      const img = new Image();
      img.onload = ()=>{
        const scale = Math.min(1, maxSize/Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width*scale); c.height = Math.round(img.height*scale);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        try{ resolve(c.toDataURL('image/jpeg', quality)); }catch(err){ resolve(e.target.result); }
      };
      img.onerror = ()=>resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
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
        <div class="form-group"><label>Priority</label><select id="f-priority">${['Low','Medium','High'].map(s=>`<option ${(j?j.priority:'Medium')===s?'selected':''}>${s}</option>`).join('')}</select></div>
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
  const lead = leadId ? DB.leads.find(l=>l.id===leadId) : null;
  const cust = swEnsureCustomer(customerNameVal, {address:data.address, propertyType:data.propertyType, phone:lead?lead.phone:'', email:lead?lead.email:'', source:data.source, from:'a job'});
  if(id){
    const j = DB.jobs.find(x=>x.id===id);
    const wasStatus = j.status;
    Object.assign(j, data);
    if(cust && !j.customerId) j.customerId = cust.id;
    const justCompleted = data.status==='completed' && wasStatus!=='completed';
    if(justCompleted){ j.timeline = j.timeline||[]; j.timeline.push({e:'Job Completed', d:localDateStr()}); if(!j.endDate || j.endDate > localDateStr()) j.endDate = localDateStr(); if(j.startDate && j.startDate > j.endDate) j.startDate = j.endDate; swServiceJobCompleted(j); }
    toast('Job updated');
    save(); closeModal(); navigate('jobs', id);
    if(justCompleted) setTimeout(()=>swJobCompleteModal(id), 200);
  } else {
    const jobNumber = nextJobNumber();
    const job = Object.assign({id:uid(), jobNumber, customerId:cust?cust.id:null, leadId:leadId||null, actualRevenue:0, notes:[], photos:[], costLines:[], documents:[], variations:[], phases:[],
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
let SW_QUOTE_FILTER = 'open';
function view_quotes(){
  const all = DB.quotes;
  const open = all.filter(q=>['draft','sent'].includes(q.status));
  const decided = all.filter(q=>['approved','declined','expired'].includes(q.status));
  const won = all.filter(q=>q.status==='approved');
  const chase = all.filter(swQuoteNeedsChase);
  const expiring = open.filter(q=>{ const d = daysUntil(q.validUntil); return d!==null && d>=0 && d<=7; });
  const val = list => list.reduce((s,q)=>s+calcQuoteTotal(q).total,0);
  const filters = [['open','Open'],['chase','Needs chasing'],['draft','Draft'],['sent','Sent'],['approved','Won'],['declined','Lost'],['all','All']];
  const match = q => SW_QUOTE_FILTER==='all' ? true : SW_QUOTE_FILTER==='open' ? ['draft','sent'].includes(q.status) : SW_QUOTE_FILTER==='chase' ? swQuoteNeedsChase(q) : SW_QUOTE_FILTER==='declined' ? ['declined','expired'].includes(q.status) : q.status===SW_QUOTE_FILTER;
  const rows = all.filter(match).slice().sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt))).map(q=>{
    const t = calcQuoteTotal(q);
    const age = swQuoteAge(q);
    const lastChase = (q.chases||[]).slice(-1)[0];
    return `<tr class="row-link" onclick="openQuoteModal('${q.id}')">
      <td><strong>${esc(q.quoteNumber)}</strong>${q.leadId?'<div class="small muted">from lead</div>':''}</td>
      <td>${esc(q.customerName)}</td>
      <td>${statusPill(q.status)}</td>
      <td>${fmt(t.total)}</td>
      <td class="small">${q.status==='sent'?`${age} day${age===1?'':'s'} ago${lastChase?`<div class="muted">chased ${fmtDate(lastChase.date)}</div>`:''}`:fmtDate(q.sentAt||q.createdAt)}</td>
      <td class="small">${q.validUntil?fmtDate(q.validUntil):'—'}</td>
      <td onclick="event.stopPropagation();" style="white-space:nowrap;">
        ${swQuoteNeedsChase(q)?`<button class="btn btn-ghost btn-sm" onclick="swOpenChase('quote','${q.id}')">📣 Chase</button>`:''}
        ${['draft','sent'].includes(q.status)&&!q.jobId?`<button class="btn btn-success btn-sm" onclick="convertQuoteToJob('${q.id}')">Won</button> <button class="icon-btn" title="Mark lost" onclick="swMarkQuoteLost('${q.id}')">✕</button>`:''}
      </td>
    </tr>`;
  }).join('');
  return `
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Open quotes</div><div class="kpi-value">${fmt(val(open))}</div><div class="small muted mt-10">${open.length} draft / sent</div></div>
    <div class="card kpi-card"><div class="kpi-label">Needs chasing</div><div class="kpi-value" style="color:${chase.length?'var(--warning)':'inherit'};">${chase.length}</div><div class="small muted mt-10">${fmt(val(chase))} waiting on a reply</div></div>
    <div class="card kpi-card"><div class="kpi-label">Win rate</div><div class="kpi-value">${decided.length?Math.round(won.length/decided.length*100):0}%</div><div class="small muted mt-10">${won.length} won of ${decided.length} decided</div></div>
    <div class="card kpi-card"><div class="kpi-label">Expiring this week</div><div class="kpi-value">${expiring.length}</div><div class="small muted mt-10">${fmt(val(expiring))}</div></div>
  </div>
  <div class="tabs">${filters.map(([k,l])=>`<button class="tab-btn ${SW_QUOTE_FILTER===k?'active':''}" onclick="SW_QUOTE_FILTER='${k}'; renderPage();">${l} <span class="small muted">${all.filter(q=>{ const o=SW_QUOTE_FILTER; SW_QUOTE_FILTER=k; const r=match(q); SW_QUOTE_FILTER=o; return r; }).length}</span></button>`).join('')}</div>
  <div class="card"><table>
    <thead><tr><th>Quote #</th><th>Customer</th><th>Status</th><th>Total (inc. VAT)</th><th>Sent</th><th>Valid until</th><th></th></tr></thead>
    <tbody>${rows || (all.length ? emptyRow(7,'No quotes in this view.') : emptyRow(7,'No quotes yet — create one, or turn a lead into a quote from the Leads board.','+ New Quote','openQuoteModal()'))}</tbody>
  </table></div>
  <p class="small muted mt-10">A sent quote needs chasing after 3 days without a follow-up. Chasing logs the date so it drops off the list for another 3 days.</p>`;
}
const QUOTE_TYPES = ['Fixed Price','Itemised','Day Rate','Emergency Callout'];
const QUOTE_STATUSES = ['draft','sent','approved','declined','expired'];

function openQuoteModal(id, jobId, prefill){
  const q = id ? DB.quotes.find(x=>x.id===id) : null;
  prefill = prefill || {};
  window._quoteLeadId = q ? (q.leadId||null) : (prefill.leadId||null);
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
        <div class="form-group"><label>Customer Name (if new)</label><input id="f-customerName" type="text" value="${q?esc(q.customerName):(job?esc(job.customerName):esc(prefill.customerName||''))}"></div>
      </div>
      ${!q && prefill.leadId?`<p class="small" style="color:var(--teal);margin-bottom:10px;">Linked to lead — saving moves it to Quoted, approving moves it to Won.</p>`:''}
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
      ${lineItemAdders()}
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Notes / Terms</label><textarea id="f-notes">${q?esc(q.notes):DB.settings.terms}</textarea></div>
    </div>
    <div class="modal-foot">
      ${q?`<button class="btn btn-danger" onclick="deleteQuote('${q.id}')">Delete</button>`:''}
      ${q?`<button class="btn btn-ghost" onclick="printDoc('quote','${q.id}')">PDF / Print</button>`:''}
      ${q&&['sent','draft'].includes(q.status)?`<button class="btn btn-ghost" onclick="closeModal(); swOpenChase('quote','${q.id}')">📣 Chase</button>`:''}
      ${q&&!q.jobId?`<button class="btn btn-dark" onclick="convertQuoteToJob('${q.id}')">✓ Won → Create Job</button>`:''}
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
// "+ Add Line Item" plus, on SteadyWorks documents, a price-book picker.
function lineItemAdders(){
  const sf = String(currentRoute||'').startsWith('sf-');
  const book = (DB.priceBook||[]).slice().sort((a,b)=>String(a.category).localeCompare(String(b.category))||String(a.name).localeCompare(String(b.name)));
  const cats = [...new Set(book.map(i=>i.category||'Other'))];
  return `<div class="flex gap-8 mt-10" style="flex-wrap:wrap;align-items:center;">
    <button class="btn btn-ghost btn-sm" onclick="addLineItem()">+ Add Line Item</button>
    ${!sf ? (book.length ? `<select style="width:auto;max-width:320px;" onchange="if(this.value){ pbAddToDoc(this.value); this.value=''; }"><option value="">📒 Add from price book…</option>${cats.map(c=>`<optgroup label="${esc(c)}">${book.filter(i=>(i.category||'Other')===c).map(i=>`<option value="${i.id}">${esc(i.name)} — ${fmt(i.rate)}/${esc(i.unit||'ea')}</option>`).join('')}</optgroup>`).join('')}</select>`
      : `<span class="small muted">Tip: set up a <a style="color:var(--teal);cursor:pointer;" onclick="closeModal(); navigate('price-book')">price book</a> to add standard jobs in one click.</span>`) : ''}
  </div>`;
}
function removeLineItem(i){ window._editingItems.splice(i,1); renderLineItems(); }
function updateLineItem(i,field,val){
  window._editingItems[i][field] = (field==='qty'||field==='rate') ? Number(val)||0 : val;
  // Don't call renderLineItems() here — it rebuilds every row's innerHTML on
  // every keystroke, which yanks focus out of the input after each
  // character (the "can only type one letter at a time" bug). Instead,
  // patch just the one computed cell and the totals summary in place.
  if(field==='qty' || field==='rate'){
    const row = document.querySelectorAll('#line-items-body tr')[i];
    if(row && row.children[4]) row.children[4].textContent = fmt(window._editingItems[i].qty * window._editingItems[i].rate);
  }
  updateTotals();
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
    <div style="font-size:17px;font-weight:800;margin-top:4px;">Total: ${fmt(total)}</div>${retentionHtml}${pbMarginHint(sub)}`;
}

function saveQuote(id, jobId){
  const custSelect = document.getElementById('f-customer').value;
  const customer = custSelect ? DB.customers.find(c=>c.id===custSelect) : null;
  const customerNameVal = customer ? customer.name : document.getElementById('f-customerName').value.trim();
  if(!customerNameVal){ toast('Customer is required','⚠️'); return; }
  const validItems = window._editingItems.filter(i=>String(i.desc||'').trim() || Number(i.rate));
  if(!validItems.length){ toast('Add at least one line item','⚠️'); return; }
  const lead = window._quoteLeadId ? DB.leads.find(l=>l.id===window._quoteLeadId) : null;
  const linkedCustomer = customer || swEnsureCustomer(customerNameVal, {phone:lead?lead.phone:'', email:lead?lead.email:'', source:lead?lead.source:'', from:'a quote'});
  const data = {
    customerId: linkedCustomer ? linkedCustomer.id : null,
    customerName: customerNameVal,
    type: document.getElementById('f-type').value,
    status: document.getElementById('f-status').value,
    vatRate: Number(document.getElementById('f-vatRate').value)||0,
    validUntil: document.getElementById('f-validUntil').value,
    notes: document.getElementById('f-notes').value,
    items: validItems,
    jobId: jobId || null,
    leadId: lead ? lead.id : null
  };
  let q;
  if(id){ q = DB.quotes.find(x=>x.id===id); swQuoteStatusChange(q, data.status); Object.assign(q, data); toast('Quote updated'); }
  else {
    const quoteNumber = nextQuoteNumber();
    q = Object.assign({id:uid(), quoteNumber, createdAt:localDateStr()}, data);
    swQuoteStatusChange(q, data.status, true);
    DB.quotes.push(q);
    logActivity('Quote created', quoteNumber+' — '+data.customerName);
    toast('Quote '+quoteNumber+' created');
  }
  swSyncLeadFromQuote(q);
  save(); closeModal(); renderPage(); renderNav();
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
  swQuoteStatusChange(q, 'approved');
  q.status='approved';
  const jobNumber = nextJobNumber();
  const t = calcQuoteTotal(q);
  const cust = q.customerId ? DB.customers.find(c=>c.id===q.customerId) : swEnsureCustomer(q.customerName, {from:'a quote'});
  const lead = q.leadId ? DB.leads.find(l=>l.id===q.leadId) : null;
  const job = {id:uid(), jobNumber, customerId:cust?cust.id:null, customerName:q.customerName, address:cust?cust.address||'':'', propertyType:cust?cust.propertyType||'Residential':'Residential',
    status:'scheduled', priority:'Medium', assignedTo:'', startDate:'', endDate:'', expectedRevenue:t.total, actualRevenue:0, quoteId:q.id, leadId:q.leadId||null, source:lead?lead.source:'',
    notes:[], photos:[], costLines:[], documents:[], variations:[], phases:[], timeline:[{e:'Quote Created',d:q.createdAt},{e:'Quote Accepted',d:localDateStr()}]};
  q.jobId = job.id;
  DB.jobs.push(job);
  swSyncLeadFromQuote(q);
  logActivity('Quote won', q.quoteNumber+' → '+jobNumber);
  save(); closeModal(); renderNav();
  toast('Job '+jobNumber+' created from quote');
  navigate('jobs', job.id);
}
function convertQuoteToInvoice(qid){
  const q = DB.quotes.find(x=>x.id===qid);
  if(!q) return;
  // Quote already has a job: build the invoice from the job, so approved variations
  // are included and marked invoiced, and the job moves on to Invoiced.
  if(q.jobId && DB.jobs.some(j=>j.id===q.jobId)){ closeModal(); swInvoiceFromJob(q.jobId); return; }
  const invoiceNumber = nextInvoiceNumber();
  const due = new Date(); due.setDate(due.getDate()+14);
  const inv = {id:uid(), invoiceNumber, jobId:q.jobId||null, quoteId:q.id, customerId:q.customerId, customerName:q.customerName,
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
    outstanding: DB.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0),
    paid: DB.invoices.reduce((s,i)=>s+tgInvoiceReceived(i),0),
    overdue: DB.invoices.filter(i=>invoiceStatus(i)==='overdue').reduce((s,i)=>s+invoiceOutstanding(i),0),
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
      <td>${statusPill(invoiceStatus(inv))}</td>
      <td>${fmt(t.total)}</td>
      <td>${t.retentionPct?`${t.retentionPct}% (${fmt(t.retention)})`:'—'}</td>
      <td>${fmt(inv.amountPaid||0)}</td>
      <td>${fmtDate(inv.dueDate)}</td>
      <td onclick="event.stopPropagation();" style="white-space:nowrap;">${inv.status!=='paid'?`<button class="icon-btn" title="Record payment" onclick="swOpenRecordPayment('${inv.id}')">💷</button>`:''}${inv.status!=='paid'&&inv.status!=='draft'?`<button class="icon-btn" title="Chase" onclick="swOpenChase('invoice','${inv.id}')">📣</button>`:''}</td>
    </tr>`;
  }).join('');
  return `
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Outstanding</div><div class="kpi-value">${fmt(totals.outstanding)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Received (all time)</div><div class="kpi-value">${fmt(totals.paid)}</div></div>
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
    <thead><tr><th style="width:34px;"><input type="checkbox" ${allSelected?'checked':''} onchange="toggleAllInvoicesSelect(this.checked)" aria-label="Select all invoices"></th><th>Invoice #</th><th>Customer</th><th>Status</th><th>Total</th><th>Retention</th><th>Paid</th><th>Due Date</th><th></th></tr></thead>
    <tbody>${rows || emptyRow(9,'No invoices yet.','+ New Invoice','openInvoiceModal()')}</tbody>
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
  ids.forEach(id=>{ const inv = DB.invoices.find(i=>i.id===id); if(inv){ const prevReceived = tgInvoiceReceived(inv); inv.status = status; tgSyncInvoicePayment(DB, 'sw', inv, new Date(), {prevReceived}); } });
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
  window._invoiceFromJobVariations = null;
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
        <div class="form-group"><label>Due Date</label><input id="f-dueDate" type="date" value="${inv?inv.dueDate:(()=>{ const d=new Date(); d.setDate(d.getDate()+(Number(DB.settings.paymentTermsDays)||14)); return localDateStr(d); })()}"></div>
        <div class="form-group"><label>Amount Paid (£)</label><input id="f-amountPaid" type="number" value="${inv?inv.amountPaid:0}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Retention % (held until defects period ends)</label><input id="f-retentionPct" type="number" step="0.5" value="${inv?(Number(inv.retentionPct)||0):0}" onchange="updateTotals()"></div>
        <div class="form-group"><label>Card payment link for this invoice (optional)</label><input id="f-payLink" type="text" placeholder="${esc(DB.settings.paymentLink||'Uses the default from Settings')}" value="${inv?esc(inv.paymentLink||''):''}"></div>
      </div>
      <label>Line Items</label>
      <table class="line-items-table" id="line-items-table"><thead><tr><th>Description</th><th style="width:60px;">Qty</th><th style="width:70px;">Unit</th><th style="width:90px;">Rate £</th><th style="width:90px;">Total</th><th></th></tr></thead>
        <tbody id="line-items-body"></tbody>
      </table>
      ${lineItemAdders()}
      <div class="divider"></div>
      <div id="line-items-totals" style="text-align:right;"></div>
      <div class="form-group mt-10"><label>Notes / Payment Terms</label><textarea id="f-notes">${inv?esc(inv.notes):DB.settings.terms}</textarea></div>
    </div>
    <div class="modal-foot">
      ${inv?`<button class="btn btn-danger" onclick="deleteInvoice('${inv.id}')">Delete</button>`:''}
      ${inv&&inv.status!=='paid'&&inv.status!=='draft'?`<button class="btn btn-ghost" onclick="closeModal(); swOpenChase('invoice','${inv.id}')">📣 Chase</button>`:''}
      ${inv&&inv.status!=='paid'?`<button class="btn btn-ghost" onclick="copyPayDetails('${inv.id}')">📋 Payment details</button>`:''}
      ${inv&&inv.status!=='paid'?`<button class="btn btn-success" onclick="closeModal(); swOpenRecordPayment('${inv.id}')">💷 Record Payment</button>`:''}
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
  const validItems = window._editingItems.filter(i=>String(i.desc||'').trim() || Number(i.rate));
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
    paymentLink: (document.getElementById('f-payLink')||{value:''}).value.trim(),
    notes: document.getElementById('f-notes').value,
    items: validItems,
    jobId: jobId || null
  };
  if(!data.customerId){ const c = swEnsureCustomer(customerNameVal, {from:'an invoice'}); if(c) data.customerId = c.id; }
  let inv, prevReceived = 0;
  if(id){ inv = DB.invoices.find(i=>i.id===id); prevReceived = tgInvoiceReceived(inv); Object.assign(inv, data); toast('Invoice updated'); }
  else {
    const invoiceNumber = nextInvoiceNumber();
    inv = Object.assign({id:uid(), invoiceNumber, createdAt:new Date().toISOString().slice(0,10)}, data);
    DB.invoices.push(inv);
    // invoice built from a finished job: its approved variations are now billed
    if(window._invoiceFromJobVariations && window._invoiceFromJobVariations===inv.jobId){
      const j = DB.jobs.find(x=>x.id===inv.jobId);
      if(j){ (j.variations||[]).filter(v=>v.status==='Approved').forEach(v=>v.status='Invoiced'); j.timeline = j.timeline||[]; j.timeline.push({e:'Invoice Sent', d:localDateStr()}); if(j.status==='completed') j.status='invoiced'; }
      window._invoiceFromJobVariations = null;
    }
    logActivity('Invoice created', invoiceNumber+' — '+data.customerName);
    toast('Invoice '+invoiceNumber+' created');
  }
  const pay = tgSyncInvoicePayment(DB, 'sw', inv, new Date(), {prevReceived});
  if(pay) setTimeout(()=>toast(gbp(pay.amount)+' received — counted toward SteadyWorks target','💷'), 900);
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
  const items = (window._editingItems||[]).filter(i=>String(i.desc||'').trim() || Number(i.rate)).map(i=>Object.assign({},i));
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
      ${lineItemAdders()}
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
    items: window._editingItems.filter(i=>String(i.desc||'').trim() || Number(i.rate))
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
  if(!doc){ toast('Could not find that document','⚠️'); return; }
  const t = isQuote ? calcQuoteTotal(doc) : calcInvoiceTotal(doc);
  const number = isQuote ? doc.quoteNumber : doc.invoiceNumber;
  const toName = isSf ? doc.clientName : doc.customerName;
  const businessName = isSf ? 'SteadyFlow Marketing' : DB.settings.businessName;
  const accent = isSf ? '#00A99D' : '#E11D2A';
  const logoSrc = isSf ? 'assets/sf-logo.svg' : 'assets/logo.png';
  const accentSoft = isSf ? '#E6F7F5' : '#FDECEC';
  const w = window.open('','_blank');
  if(!w){ toast('Allow pop-ups for this site to print / save as PDF','⚠️'); return; }
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
      .head-center{display:flex;flex-direction:column;align-items:center;text-align:center;border-bottom:3px solid ${accent};padding-bottom:14px;}
      .head-center .logo-box{margin:0 0 10px;}
      .head-center h2{margin-top:14px;}
    </style></head><body>
    ${kind==='quote' ? `
    <div class="head-center">
      <div class="logo-box"><img src="${logoSrc}" alt="${esc(businessName)}"></div>
      <h1>${esc(businessName)}</h1>
      <div style="font-weight:500;">${esc(DB.settings.address)}</div>
      <div style="font-weight:500;">${esc(DB.settings.phone)} · ${esc(DB.settings.email)}</div>
      <h2>QUOTE</h2>
      <div class="doc-number">${number}</div>
      <div style="font-weight:500;">${fmtDate(doc.createdAt)}</div>
    </div>
    ` : `
    <div class="head"><div class="head-left"><div class="logo-box"><img src="${logoSrc}" alt="${esc(businessName)}"></div><div><h1>${esc(businessName)}</h1>${isSf?'':`<div style="font-weight:500;">${esc(DB.settings.address)}</div><div style="font-weight:500;">${esc(DB.settings.phone)} · ${esc(DB.settings.email)}</div>`}</div></div>
    <div class="head-right"><h2>${isQuote?'QUOTE':'INVOICE'}</h2><div class="doc-number">${number}</div><div style="font-weight:500;">${fmtDate(doc.createdAt)}</div></div></div>
    `}
    <p style="margin-top:24px;font-weight:500;">To: <span class="to-line">${esc(toName)}</span></p>
    <table><thead><tr><th>Description</th><th>Qty</th><th>Unit</th><th>Rate</th><th>Total</th></tr></thead>
    <tbody>${doc.items.map(i=>`<tr><td>${esc(i.desc)}</td><td>${i.qty}</td><td>${esc(i.unit)}</td><td>${fmt(i.rate)}</td><td>${fmt(i.qty*i.rate)}</td></tr>`).join('')}</tbody></table>
    <div class="tot">Subtotal: ${fmt(t.sub)}<br>VAT (${doc.vatRate}%): ${fmt(t.vat)}<br><strong style="font-size:19px;">Total: ${fmt(t.total)}</strong>${!isQuote&&Number(doc.amountPaid)>0?`<br>Paid: ${fmt(doc.amountPaid)}<br><strong>Balance due: ${fmt(Math.max(0,t.total-Number(doc.amountPaid)))}</strong>`:''}${!isQuote&&doc.dueDate?`<br><span style="font-size:12.5px;">Due by ${fmtDate(doc.dueDate)}</span>`:''}</div>
    ${!isQuote && !isSf ? payDetailsPrintHtml(doc, accent, accentSoft) : ''}
    <p style="margin-top:30px;font-size:12px;color:#666;">${esc(doc.notes||'')}</p>
    </body></html>`);
  w.document.close(); w.print();
}

/* ===================== ACCOUNTING ===================== */
const ASSET_CATEGORIES = ['Cash & Bank','Equipment & Tools','Vehicles','Property','Investments','Other'];
const LIABILITY_CATEGORIES = ['Loans','Credit Cards','Tax Owed','Supplier Credit','Other'];

/* Cash basis, one definition across the app:
   revenue  = money received (inc VAT) — see receivedEntries()
   VAT      = VAT inside that money, estimated from the invoices it came from (only if VAT registered)
   costs    = logged expenses + acquisition spend + expansion spend (log ad spend in one place only)
   profit   = revenue ex VAT − costs
   cash     = money received − costs − owner pay taken   (VAT you've collected is still in here, and is owed) */
function accountingRollup(){
  const now = new Date(), today = localDateStr(now);
  const mStart = monthStartStr(now), yStart = now.getFullYear()+'-01-01', q3 = localDateStr(new Date(now.getFullYear(), now.getMonth()-2, 1));
  const vatReg = DB.settings.vatRegistered !== false;
  // costs = operating costs (expenses except ads) + acquisition (ad expenses + logged acquisition) + expansion spend
  const costsFor = (biz, from) => tgOpCosts(DB, biz, from||'1900-01-01', today) + tgAcqSpend(DB, biz, from||'1900-01-01', today) + tgExpansionSpent(DB, biz, from||'1900-01-01', today);
  const openStatuses = i => i.status!=='paid' && i.status!=='cancelled' && i.status!=='declined';
  const per = (biz, from) => {
    const rec = receivedSum(biz, from, today);
    const costs = costsFor(biz, from);
    const vat = vatReg ? rec.vat : 0;
    return {revenue:rec.gross, vat, net:rec.gross-vat, costs, profit:rec.gross-vat-costs};
  };
  const sw = {m:per('sw',mStart), y:per('sw',yStart), a:per('sw',null)}, sf = {m:per('sf',mStart), y:per('sf',yStart), a:per('sf',null)};
  const owner = tgOwnerPaid(DB, 'all', '1900-01-01', today);
  const sfMRR = (DB.sfClients||[]).filter(c=>c.status==='active' && c.billingType!=='one-off').reduce((s,c)=>s+Number(c.mrr||0),0);
  const swOutstanding = DB.invoices.filter(openStatuses).reduce((s,i)=>s+invoiceOutstanding(i),0);
  const sfOutstanding = (DB.sfInvoices||[]).filter(openStatuses).reduce((s,i)=>s+invoiceOutstanding(i),0);
  const legacyCount = receivedEntries(DB,'all').filter(e=>e.legacy).length;
  return {
    vatRegistered: vatReg, legacyCount,
    swRevenueMTD:sw.m.revenue, sfRevenueMTD:sf.m.revenue, revenueMTD:sw.m.revenue+sf.m.revenue,
    swRevenueYTD:sw.y.revenue, sfRevenueYTD:sf.y.revenue, revenueYTD:sw.y.revenue+sf.y.revenue,
    swRevenueAll:sw.a.revenue, sfRevenueAll:sf.a.revenue, revenueAll:sw.a.revenue+sf.a.revenue,
    vatMTD:sw.m.vat+sf.m.vat, vatYTD:sw.y.vat+sf.y.vat, vatAll:sw.a.vat+sf.a.vat,
    vatLast3m: vatReg ? receivedSum('all', q3, today).vat : 0,
    swExpMTD:sw.m.costs, sfExpMTD:sf.m.costs, expensesMTD:sw.m.costs+sf.m.costs,
    swExpYTD:sw.y.costs, sfExpYTD:sf.y.costs, expensesYTD:sw.y.costs+sf.y.costs,
    swExpAll:sw.a.costs, sfExpAll:sf.a.costs, expensesAll:sw.a.costs+sf.a.costs,
    swProfitMTD:sw.m.profit, sfProfitMTD:sf.m.profit, profitMTD:sw.m.profit+sf.m.profit,
    swProfitYTD:sw.y.profit, sfProfitYTD:sf.y.profit, profitYTD:sw.y.profit+sf.y.profit,
    netMTD:sw.m.net+sf.m.net, netYTD:sw.y.net+sf.y.net,
    acqAll: tgAcqSpend(DB,'all','1900-01-01',today), expansionAll: tgExpansionSpent(DB,'all','1900-01-01',today), ownerPayAll: owner,
    sfMRR, swOutstanding, sfOutstanding, outstandingAll: swOutstanding+sfOutstanding,
    cashPosition: (sw.a.revenue+sf.a.revenue) - (sw.a.costs+sf.a.costs) - owner
  };
}

function view_accounting(){
  const r = accountingRollup();
  const marginMTD = r.netMTD ? Math.round((r.profitMTD/r.netMTD)*100) : 0;
  return `
  <div class="card" style="background:rgba(34,197,94,.08);border-color:rgba(34,197,94,.3);margin-bottom:18px;">
    <p class="small muted"><strong style="color:var(--text);">Cash basis:</strong> revenue is money actually received (deposits, part and full payments, retainers), on the day it arrived. It's the same figure Targets uses.
    ${r.vatRegistered?'Profit is shown <strong style="color:var(--text);">ex VAT</strong>. The VAT you collect is owed to HMRC (estimated from your invoices).':'You\'re set as not VAT registered, so no VAT is taken off.'}
    Costs are logged expenses plus acquisition and expansion spend, so log ad spend in one place only. This isn't a bank balance or formal accounts.
    ${r.legacyCount?`<br><span style="color:var(--warning);">${r.legacyCount} older paid invoice${r.legacyCount===1?' is':'s are'} counted by invoice date because the payment date isn't known. <a style="color:var(--teal);cursor:pointer;" onclick="setTgTab('ledger'); setTimeout(tgOpenImport,200);">Import them with real dates →</a></span>`:''}</p>
  </div>
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Money received (this month)</div><div class="kpi-value">${fmt(r.revenueMTD)}</div><div class="small muted mt-10">SW ${fmt(r.swRevenueMTD)} · SF ${fmt(r.sfRevenueMTD)}${r.vatRegistered?' · inc '+fmt(r.vatMTD)+' VAT':''}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Costs (this month)</div><div class="kpi-value">${fmt(r.expensesMTD)}</div><div class="small muted mt-10">SW ${fmt(r.swExpMTD)} · SF ${fmt(r.sfExpMTD)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Profit (this month${r.vatRegistered?', ex VAT':''})</div><div class="kpi-value" style="color:${r.profitMTD<0?'var(--danger)':'inherit'};">${fmt(r.profitMTD)}</div><div class="small muted mt-10">${marginMTD}% margin · SW ${fmt(r.swProfitMTD)} · SF ${fmt(r.sfProfitMTD)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">SteadyFlow MRR</div><div class="kpi-value">${fmt(r.sfMRR)}</div><div class="small muted mt-10">Active recurring clients</div></div>
  </div>
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Money received (YTD)</div><div class="kpi-value">${fmt(r.revenueYTD)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Profit (YTD${r.vatRegistered?', ex VAT':''})</div><div class="kpi-value" style="color:${r.profitYTD<0?'var(--danger)':'inherit'};">${fmt(r.profitYTD)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">VAT collected (last 3 months)</div><div class="kpi-value">${r.vatRegistered?fmt(r.vatLast3m):'—'}</div><div class="small muted mt-10">${r.vatRegistered?'Estimate. Check against your VAT return.':'Not VAT registered'}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Owed to you</div><div class="kpi-value">${fmt(r.outstandingAll)}</div><div class="small muted mt-10">SW ${fmt(r.swOutstanding)} · SF ${fmt(r.sfOutstanding)}</div></div>
  </div>
  <div class="grid grid-2">
    <div class="card"><div class="card-title">Since tracking began</div>
      <div class="flex-between small mb-10"><span>Money received</span><strong>${fmt(r.revenueAll)}</strong></div>
      <div class="flex-between small mb-10"><span>Expenses, acquisition & expansion spend</span><strong>−${fmt(r.expensesAll)}</strong></div>
      <div class="flex-between small mb-10"><span>Owner pay taken</span><strong>−${fmt(r.ownerPayAll)}</strong></div>
      <div class="divider"></div>
      <div class="flex-between"><span>Tracked cash position</span><strong style="color:${r.cashPosition<0?'var(--danger)':'var(--success)'};">${fmt(r.cashPosition)}</strong></div>
      ${r.vatRegistered&&r.vatAll?`<div class="small muted mt-10">Includes about ${fmt(r.vatAll)} of VAT collected. Some of it may already be paid to HMRC.</div>`:''}
    </div>
    <div class="card"><div class="card-title">Jump to</div>
      <div class="mb-10"><a style="color:var(--gold);cursor:pointer;font-weight:600;" onclick="navigate('forecast')">📈 Forecast →</a></div>
      <div class="mb-10"><a style="color:var(--gold);cursor:pointer;font-weight:600;" onclick="navigate('balance-sheet')">⚖️ Balance Sheet →</a></div>
      <div class="mb-10"><a style="color:var(--gold);cursor:pointer;font-weight:600;" onclick="navigate('assets-liabilities')">🏦 Assets & Liabilities →</a></div>
      <div><a style="color:var(--gold);cursor:pointer;font-weight:600;" onclick="setTgTab('ledger')">💷 Money received ledger →</a></div>
    </div>
  </div>`;
}

// SteadyWorks: trailing 3-month average of money received. SteadyFlow: the higher of its
// trailing average received and current active MRR (MRR is already inside received money,
// so the two are never added together).
function forecastBasis(){
  const r = accountingRollup();
  const swAvg = receivedTrailingAvg('sw', 3);
  const sfAvg = receivedTrailingAvg('sf', 3);
  return {r, swAvg, sfAvg, sfMRR:r.sfMRR, sf:Math.max(sfAvg, r.sfMRR)};
}
function view_forecast(){
  const now = new Date();
  const fb = forecastBasis();
  const swAvg = fb.swAvg;
  const monthsAhead = 6;
  const rows = [];
  for(let i=1;i<=monthsAhead;i++){
    const d = new Date(now.getFullYear(), now.getMonth()+i, 1);
    rows.push({label: d.toLocaleString('en-GB',{month:'short',year:'numeric'}), sw: swAvg, sf: fb.sf, total: swAvg+fb.sf});
  }
  const totalForecast = rows.reduce((s,x)=>s+x.total,0);

  return `
  <div class="card" style="background:rgba(34,197,94,.08);border-color:rgba(34,197,94,.3);margin-bottom:18px;">
    <p class="small muted">A simple projection, not a model: SteadyWorks uses its average money received over the last 3 months. SteadyFlow uses whichever is higher, its 3-month average received or its current active MRR. Figures include VAT. Treat this as a rough steer, not a guarantee.</p>
  </div>
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">SteadyWorks (monthly run-rate)</div><div class="kpi-value">${fmt(swAvg)}</div><div class="small muted mt-10">3-month average received</div></div>
    <div class="card kpi-card"><div class="kpi-label">SteadyFlow (monthly run-rate)</div><div class="kpi-value">${fmt(fb.sf)}</div><div class="small muted mt-10">${fb.sfMRR>fb.sfAvg?'set by active MRR '+fmt(fb.sfMRR):'3-month average received · MRR '+fmt(fb.sfMRR)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Next ${monthsAhead} months (projected)</div><div class="kpi-value">${fmt(totalForecast)}</div></div>
  </div>
  <div class="card">
    <div class="card-title">${monthsAhead}-Month Revenue Forecast</div>
    <div style="position:relative;height:240px;width:100%;margin-bottom:18px;"><canvas id="chartForecast"></canvas></div>
    <table>
      <thead><tr><th>Month</th><th>SteadyWorks</th><th>SteadyFlow</th><th>Total</th></tr></thead>
      <tbody>${rows.map(x=>`<tr><td>${x.label}</td><td>${fmt(x.sw)}</td><td>${fmt(x.sf)}</td><td><strong>${fmt(x.total)}</strong></td></tr>`).join('')}</tbody>
    </table>
  </div>
  `;
}

function afterRender_forecast(){
  const now = new Date();
  const fb = forecastBasis();
  const labels=[], sw=[], sf=[];
  for(let i=1;i<=6;i++){ labels.push(new Date(now.getFullYear(), now.getMonth()+i, 1).toLocaleString('en-GB',{month:'short',year:'numeric'})); sw.push(Math.round(fb.swAvg)); sf.push(Math.round(fb.sf)); }
  chartSafe('chartForecast','bar',{labels,datasets:[{label:'SteadyWorks',data:sw,backgroundColor:'#E11D2A',borderRadius:6},{label:'SteadyFlow',data:sf,backgroundColor:'#00E5CC',borderRadius:6}]},{scales:{x:{stacked:true},y:{stacked:true,ticks:{callback:v=>'£'+v}}},plugins:{legend:{position:'bottom'}}});
}
function expenseCategoryChart(canvasId, list, firstColor){
  const now = new Date();
  const byCategory = {};
  (list||[]).filter(e=>{const d=new Date(e.date); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();})
    .forEach(e=>{ byCategory[e.category] = (byCategory[e.category]||0)+Number(e.amount||0); });
  const cats = Object.keys(byCategory), vals = Object.values(byCategory);
  chartSafe(canvasId,'doughnut',{labels:cats.length?cats:['No spend this month'],datasets:[{data:vals.length?vals:[1],borderWidth:0,backgroundColor:vals.length?[firstColor,'#00A99D','#22C55E','#F59E0B','#EF4444','#7C3AED','#0EA5E9','#EC4899','#84CC16']:['#262B3D']}]},{plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}},tooltip:{enabled:vals.length>0}}});
}
function afterRender_expenses(){ expenseCategoryChart('chartExpenseCat', DB.expenses, '#E11D2A'); }
function afterRender_sf_expenses(){ expenseCategoryChart('chartSfExpenseCat', DB.sfExpenses, '#00E5CC'); }

function view_balance_sheet(){
  const r = accountingRollup();
  const totalAssetsManual = (DB.assets||[]).reduce((s,a)=>s+Number(a.value||0),0);
  const vatOwed = r.vatRegistered ? r.vatLast3m : 0;
  const totalLiabilities = (DB.liabilities||[]).reduce((s,l)=>s+Number(l.value||0),0) + vatOwed;
  const totalAssets = totalAssetsManual + Math.max(r.cashPosition,0) + r.outstandingAll;
  const equity = totalAssets - totalLiabilities;

  const assetRows = (DB.assets||[]).slice().sort((a,b)=>(b.value||0)-(a.value||0)).map(a=>`<tr><td><span class="tag-chip">${esc(a.category)}</span></td><td>${esc(a.name)}</td><td>${fmt(a.value)}</td></tr>`).join('');
  const liabRows = (DB.liabilities||[]).slice().sort((a,b)=>(b.value||0)-(a.value||0)).map(l=>`<tr><td><span class="tag-chip">${esc(l.category)}</span></td><td>${esc(l.name)}</td><td>${fmt(l.value)}</td></tr>`).join('');

  return `
  <div class="card" style="background:rgba(34,197,94,.08);border-color:rgba(34,197,94,.3);margin-bottom:18px;">
    <p class="small muted">Assets = tracked cash position (if positive) + outstanding invoices owed to you + anything added on the Assets & Liabilities page. Liabilities = whatever's added there. Add real numbers on that page for an accurate picture — <a style="color:var(--gold);cursor:pointer;font-weight:600;" onclick="navigate('assets-liabilities')">go there →</a></p>
  </div>
  <div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Total Assets</div><div class="kpi-value">${fmt(totalAssets)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Total Liabilities</div><div class="kpi-value">${fmt(totalLiabilities)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Equity (Net Worth)</div><div class="kpi-value" style="color:${equity<0?'var(--danger)':'var(--success)'};">${fmt(equity)}</div></div>
  </div>
  <div class="grid grid-2">
    <div class="card"><div class="card-title">Assets</div>
      <div class="flex-between small mb-10"><span>Tracked cash position</span><strong>${fmt(Math.max(r.cashPosition,0))}</strong></div>
      <div class="flex-between small mb-10"><span>Outstanding invoices (receivable)</span><strong>${fmt(r.outstandingAll)}</strong></div>
      ${assetRows ? `<table style="margin-top:10px;"><thead><tr><th>Category</th><th>Name</th><th>Value</th></tr></thead><tbody>${assetRows}</tbody></table>` : '<p class="small muted mt-10">No other assets added yet.</p>'}
    </div>
    <div class="card"><div class="card-title">Liabilities</div>
      ${vatOwed?`<div class="flex-between small mb-10"><span>VAT collected, last 3 months <span class="muted">(estimate, check against your VAT return)</span></span><strong>${fmt(vatOwed)}</strong></div>`:''}
      ${liabRows ? `<table><thead><tr><th>Category</th><th>Name</th><th>Value</th></tr></thead><tbody>${liabRows}</tbody></table>` : (vatOwed?'':'<p class="small muted">No liabilities added yet — nice.</p>')}
    </div>
  </div>`;
}

function view_assets_liabilities(){
  const assets = (DB.assets||[]).slice().sort((a,b)=>(b.value||0)-(a.value||0));
  const liabilities = (DB.liabilities||[]).slice().sort((a,b)=>(b.value||0)-(a.value||0));
  const totalAssets = assets.reduce((s,a)=>s+Number(a.value||0),0);
  const totalLiabilities = liabilities.reduce((s,l)=>s+Number(l.value||0),0);

  const assetRows = assets.map(a=>`<tr><td><span class="tag-chip">${esc(a.category)}</span></td><td>${esc(a.name)}</td><td>${fmt(a.value)}</td><td>${esc(a.notes||'')}</td><td><button class="icon-btn" aria-label="Edit asset" onclick="openAssetModal('${a.id}')">✎</button><button class="icon-btn" aria-label="Delete asset" onclick="deleteAsset('${a.id}')">✕</button></td></tr>`).join('');
  const liabRows = liabilities.map(l=>`<tr><td><span class="tag-chip">${esc(l.category)}</span></td><td>${esc(l.name)}</td><td>${fmt(l.value)}</td><td>${esc(l.notes||'')}</td><td><button class="icon-btn" aria-label="Edit liability" onclick="openLiabilityModal('${l.id}')">✎</button><button class="icon-btn" aria-label="Delete liability" onclick="deleteLiability('${l.id}')">✕</button></td></tr>`).join('');

  return `
  <div class="card"><div class="card-title">Assets <span class="small muted">${fmt(totalAssets)} total</span></div>
    <table><thead><tr><th>Category</th><th>Name</th><th>Value</th><th>Notes</th><th></th></tr></thead>
    <tbody>${assetRows || '<tr><td colspan="5" class="muted" style="text-align:center;padding:20px;">Nothing added yet — equipment, vehicles, savings, property, whatever the business owns.</td></tr>'}</tbody></table>
  </div>
  <div class="card mt-10"><div class="card-title">Liabilities <span class="small muted">${fmt(totalLiabilities)} total</span></div>
    <table><thead><tr><th>Category</th><th>Name</th><th>Value</th><th>Notes</th><th></th></tr></thead>
    <tbody>${liabRows || '<tr><td colspan="5" class="muted" style="text-align:center;padding:20px;">Nothing added yet — loans, credit cards, tax owed, whatever the business owes.</td></tr>'}</tbody></table>
  </div>`;
}
function openAssetModal(id){
  const a = id ? (DB.assets||[]).find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${a?'Edit Asset':'New Asset'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${ASSET_CATEGORIES.map(c=>`<option ${a&&a.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label>Value (£)</label><input id="f-value" type="number" value="${a?a.value:''}"></div>
      </div>
      <div class="form-group"><label>Name</label><input id="f-name" type="text" value="${a?esc(a.name):''}" placeholder="e.g. Transit van, ISA savings"></div>
      <div class="form-group"><label>Notes</label><textarea id="f-notes">${a?esc(a.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveAsset('${a?a.id:''}')">${a?'Save Changes':'Add Asset'}</button>
    </div>`);
}
function saveAsset(id){
  const nameVal = document.getElementById('f-name').value.trim();
  if(!nameVal){ toast('Enter a name','⚠️'); document.getElementById('f-name').focus(); return; }
  const valueVal = Number(document.getElementById('f-value').value)||0;
  if(valueVal<=0){ toast('Enter a value greater than £0','⚠️'); document.getElementById('f-value').focus(); return; }
  DB.assets = DB.assets||[];
  const data = {category:document.getElementById('f-category').value, name:nameVal, value:valueVal, notes:document.getElementById('f-notes').value};
  if(id){ Object.assign(DB.assets.find(a=>a.id===id), data); toast('Asset updated'); }
  else { DB.assets.push(Object.assign({id:uid()}, data)); toast('Asset added'); }
  save(); closeModal(); renderPage();
}
function deleteAsset(id){
  confirmDelete('Delete this asset?', "This can't be undone.", ()=>{
    DB.assets = (DB.assets||[]).filter(a=>a.id!==id); save(); renderPage(); toast('Asset deleted','🗑️');
  });
}
function openLiabilityModal(id){
  const l = id ? (DB.liabilities||[]).find(x=>x.id===id) : null;
  openModal(`
    <div class="modal-head"><h2>${l?'Edit Liability':'New Liability'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Category</label><select id="f-category">${LIABILITY_CATEGORIES.map(c=>`<option ${l&&l.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label>Value (£)</label><input id="f-value" type="number" value="${l?l.value:''}"></div>
      </div>
      <div class="form-group"><label>Name</label><input id="f-name" type="text" value="${l?esc(l.name):''}" placeholder="e.g. Van finance, Business loan"></div>
      <div class="form-group"><label>Notes</label><textarea id="f-notes">${l?esc(l.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveLiability('${l?l.id:''}')">${l?'Save Changes':'Add Liability'}</button>
    </div>`);
}
function saveLiability(id){
  const nameVal = document.getElementById('f-name').value.trim();
  if(!nameVal){ toast('Enter a name','⚠️'); document.getElementById('f-name').focus(); return; }
  const valueVal = Number(document.getElementById('f-value').value)||0;
  if(valueVal<=0){ toast('Enter a value greater than £0','⚠️'); document.getElementById('f-value').focus(); return; }
  DB.liabilities = DB.liabilities||[];
  const data = {category:document.getElementById('f-category').value, name:nameVal, value:valueVal, notes:document.getElementById('f-notes').value};
  if(id){ Object.assign(DB.liabilities.find(l=>l.id===id), data); toast('Liability updated'); }
  else { DB.liabilities.push(Object.assign({id:uid()}, data)); toast('Liability added'); }
  save(); closeModal(); renderPage();
}
function deleteLiability(id){
  confirmDelete('Delete this liability?', "This can't be undone.", ()=>{
    DB.liabilities = (DB.liabilities||[]).filter(l=>l.id!==id); save(); renderPage(); toast('Liability deleted','🗑️');
  });
}

/* ---------- Generic CSV import helpers (bank exports, spreadsheets — headers vary a lot) ---------- */
function parseCSV(text){
  const lines = text.split(/\r\n|\n|\r/).filter(l=>l.trim().length);
  if(!lines.length) return [];
  const splitLine = (line)=>{
    const out = []; let cur=''; let inQuotes=false;
    for(let i=0;i<line.length;i++){
      const ch = line[i];
      if(ch==='"'){ inQuotes = !inQuotes; continue; }
      if(ch===',' && !inQuotes){ out.push(cur); cur=''; continue; }
      cur += ch;
    }
    out.push(cur);
    return out.map(s=>s.trim());
  };
  const headers = splitLine(lines[0]).map(h=>h.toLowerCase().trim());
  return lines.slice(1).map(line=>{
    const cells = splitLine(line);
    const row = {};
    headers.forEach((h,i)=>{ row[h] = cells[i]!==undefined ? cells[i] : ''; });
    return row;
  });
}
function csvFindCol(row, candidates){
  const keys = Object.keys(row);
  for(const cand of candidates){
    const found = keys.find(k=>k.includes(cand));
    if(found) return row[found];
  }
  return '';
}

/* ---------- Import Expenses from CSV (bank/spreadsheet export) ---------- */
let IMPORT_EXPENSE_ROWS = [];
function openImportExpensesModal(kind){
  IMPORT_EXPENSE_ROWS = [];
  openModal(`
    <div class="modal-head"><h2>Import Expenses (CSV)</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Upload a CSV export from your bank or a spreadsheet — needs a date, a description and an amount column (any reasonable header names work). Category defaults to Miscellaneous; adjust before importing.</p>
      <input id="import-expense-file" type="file" accept=".csv,text/csv" onchange="handleImportExpenseFile(this,'${kind}')">
      <div id="import-expense-review" style="margin-top:16px;"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button id="import-expense-run-btn" class="btn btn-gold" style="display:none;" onclick="runImportExpenses('${kind}')">Import Selected</button>
    </div>`, true);
}
function handleImportExpenseFile(input, kind){
  const file = input.files && input.files[0];
  if(!file) return;
  const cats = kind==='sf' ? SF_EXPENSE_CATEGORIES : EXPENSE_CATEGORIES;
  const reader = new FileReader();
  reader.onload = (e)=>{
    const rows = parseCSV(e.target.result);
    IMPORT_EXPENSE_ROWS = rows.map(r=>{
      const dateRaw = csvFindCol(r,['date']);
      const d = new Date(dateRaw);
      const dateStr = !isNaN(d) ? d.toISOString().slice(0,10) : new Date().toISOString().slice(0,10);
      const amountRaw = csvFindCol(r,['amount','value','debit','credit']).replace(/[^0-9.\-]/g,'');
      return {
        selected: true,
        date: dateStr,
        desc: csvFindCol(r,['desc','memo','note','narrative','detail']) || csvFindCol(r,['name']),
        amount: Math.abs(Number(amountRaw))||0,
        category: cats[cats.length-1]
      };
    }).filter(r=>r.amount>0);
    renderImportExpenseReview(kind);
  };
  reader.readAsText(file);
}
function renderImportExpenseReview(kind){
  const cats = kind==='sf' ? SF_EXPENSE_CATEGORIES : EXPENSE_CATEGORIES;
  const box = document.getElementById('import-expense-review');
  const btn = document.getElementById('import-expense-run-btn');
  if(!box) return;
  if(!IMPORT_EXPENSE_ROWS.length){ box.innerHTML = '<p class="small muted">No usable rows found — check the file has date and amount columns.</p>'; if(btn) btn.style.display='none'; return; }
  const selectedCount = IMPORT_EXPENSE_ROWS.filter(r=>r.selected).length;
  box.innerHTML = `
    <p class="small muted mb-10">${IMPORT_EXPENSE_ROWS.length} rows found — ${selectedCount} selected to import.</p>
    <div style="max-height:340px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
      <table style="width:100%;">
        <thead><tr><th style="width:36px;"></th><th>Date</th><th>Description</th><th>Category</th><th>Amount</th></tr></thead>
        <tbody>
          ${IMPORT_EXPENSE_ROWS.map((r,i)=>`
            <tr>
              <td><input type="checkbox" ${r.selected?'checked':''} onchange="IMPORT_EXPENSE_ROWS[${i}].selected=this.checked; renderImportExpenseReview('${kind}');"></td>
              <td><input type="date" value="${r.date}" style="width:130px;" onchange="IMPORT_EXPENSE_ROWS[${i}].date=this.value;"></td>
              <td><input type="text" value="${esc(r.desc)}" style="width:100%;" onchange="IMPORT_EXPENSE_ROWS[${i}].desc=this.value;"></td>
              <td><select onchange="IMPORT_EXPENSE_ROWS[${i}].category=this.value;">${cats.map(c=>`<option ${r.category===c?'selected':''}>${c}</option>`).join('')}</select></td>
              <td><input type="number" value="${r.amount}" style="width:90px;" onchange="IMPORT_EXPENSE_ROWS[${i}].amount=Number(this.value)||0;"></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  if(btn) btn.style.display = 'inline-block';
}
function runImportExpenses(kind){
  const rows = IMPORT_EXPENSE_ROWS.filter(r=>r.selected && r.amount>0);
  if(!rows.length){ toast('Nothing selected to import','⚠️'); return; }
  if(kind==='sf'){ DB.sfExpenses = DB.sfExpenses||[]; rows.forEach(r=>DB.sfExpenses.push({id:uid(), category:r.category, amount:r.amount, desc:r.desc||'Imported expense', date:r.date})); }
  else { DB.expenses = DB.expenses||[]; rows.forEach(r=>DB.expenses.push({id:uid(), category:r.category, amount:r.amount, desc:r.desc||'Imported expense', date:r.date})); }
  logActivity('Expenses imported', `${rows.length} expense(s) into ${kind==='sf'?'SteadyFlow':'SteadyWorks'}`);
  save(); closeModal(); renderPage();
  toast(`Imported ${rows.length} expense${rows.length===1?'':'s'}`);
}

/* ---------- Import Assets / Liabilities from CSV ---------- */
let IMPORT_AL_ROWS = [];
function openImportAssetsLiabilitiesModal(type){
  IMPORT_AL_ROWS = [];
  openModal(`
    <div class="modal-head"><h2>Import ${type==='liability'?'Liabilities':'Assets'} (CSV)</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">CSV needs a name and a value column — category and notes are optional and default sensibly.</p>
      <input id="import-al-file" type="file" accept=".csv,text/csv" onchange="handleImportALFile(this,'${type}')">
      <div id="import-al-review" style="margin-top:16px;"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button id="import-al-run-btn" class="btn btn-gold" style="display:none;" onclick="runImportAL('${type}')">Import Selected</button>
    </div>`, true);
}
function handleImportALFile(input, type){
  const file = input.files && input.files[0];
  if(!file) return;
  const cats = type==='liability' ? LIABILITY_CATEGORIES : ASSET_CATEGORIES;
  const reader = new FileReader();
  reader.onload = (e)=>{
    const rows = parseCSV(e.target.result);
    IMPORT_AL_ROWS = rows.map(r=>({
      selected: true,
      name: csvFindCol(r,['name','item','description']),
      value: Math.abs(Number(csvFindCol(r,['value','amount']).replace(/[^0-9.\-]/g,'')))||0,
      category: cats[cats.length-1],
      notes: csvFindCol(r,['notes','note'])
    })).filter(r=>r.name && r.value>0);
    renderImportALReview(type);
  };
  reader.readAsText(file);
}
function renderImportALReview(type){
  const cats = type==='liability' ? LIABILITY_CATEGORIES : ASSET_CATEGORIES;
  const box = document.getElementById('import-al-review');
  const btn = document.getElementById('import-al-run-btn');
  if(!box) return;
  if(!IMPORT_AL_ROWS.length){ box.innerHTML = '<p class="small muted">No usable rows found — check the file has name and value columns.</p>'; if(btn) btn.style.display='none'; return; }
  const selectedCount = IMPORT_AL_ROWS.filter(r=>r.selected).length;
  box.innerHTML = `
    <p class="small muted mb-10">${IMPORT_AL_ROWS.length} rows found — ${selectedCount} selected to import.</p>
    <div style="max-height:340px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
      <table style="width:100%;">
        <thead><tr><th style="width:36px;"></th><th>Name</th><th>Category</th><th>Value</th></tr></thead>
        <tbody>
          ${IMPORT_AL_ROWS.map((r,i)=>`
            <tr>
              <td><input type="checkbox" ${r.selected?'checked':''} onchange="IMPORT_AL_ROWS[${i}].selected=this.checked; renderImportALReview('${type}');"></td>
              <td><input type="text" value="${esc(r.name)}" style="width:100%;" onchange="IMPORT_AL_ROWS[${i}].name=this.value;"></td>
              <td><select onchange="IMPORT_AL_ROWS[${i}].category=this.value;">${cats.map(c=>`<option ${r.category===c?'selected':''}>${c}</option>`).join('')}</select></td>
              <td><input type="number" value="${r.value}" style="width:90px;" onchange="IMPORT_AL_ROWS[${i}].value=Number(this.value)||0;"></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  if(btn) btn.style.display = 'inline-block';
}
function runImportAL(type){
  const rows = IMPORT_AL_ROWS.filter(r=>r.selected && r.value>0);
  if(!rows.length){ toast('Nothing selected to import','⚠️'); return; }
  if(type==='liability'){ DB.liabilities = DB.liabilities||[]; rows.forEach(r=>DB.liabilities.push({id:uid(), category:r.category, name:r.name, value:r.value, notes:r.notes||''})); }
  else { DB.assets = DB.assets||[]; rows.forEach(r=>DB.assets.push({id:uid(), category:r.category, name:r.name, value:r.value, notes:r.notes||''})); }
  logActivity(`${type==='liability'?'Liabilities':'Assets'} imported`, `${rows.length} row(s)`);
  save(); closeModal(); renderPage();
  const label = type==='liability' ? (rows.length===1?'liability':'liabilities') : (rows.length===1?'asset':'assets');
  toast(`Imported ${rows.length} ${label}`);
}

/* ---------- Print/export an Accounting page as a PDF (browser print-to-PDF, same approach as printDoc) ---------- */
function printAccountingReport(kind){
  const r = accountingRollup();
  const now = new Date();
  const accent = '#22C55E';
  const accentSoft = '#E9FBF0';
  let title, bodyHtml;

  if(kind==='snapshot'){
    const profitMTD = r.profitMTD, profitYTD = r.profitYTD;
    title = 'Financial Snapshot';
    bodyHtml = `
      <table><thead><tr><th>Metric</th><th>SteadyWorks</th><th>SteadyFlow</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>Money received (this month)</td><td>${fmt(r.swRevenueMTD)}</td><td>${fmt(r.sfRevenueMTD)}</td><td><strong>${fmt(r.revenueMTD)}</strong></td></tr>
        ${r.vatRegistered?`<tr><td>of which VAT (estimate)</td><td></td><td></td><td>${fmt(r.vatMTD)}</td></tr>`:''}
        <tr><td>Costs (this month)</td><td>${fmt(r.swExpMTD)}</td><td>${fmt(r.sfExpMTD)}</td><td><strong>${fmt(r.expensesMTD)}</strong></td></tr>
        <tr><td>Profit (this month${r.vatRegistered?', ex VAT':''})</td><td>${fmt(r.swProfitMTD)}</td><td>${fmt(r.sfProfitMTD)}</td><td><strong>${fmt(profitMTD)}</strong></td></tr>
        <tr><td>Money received (YTD)</td><td>${fmt(r.swRevenueYTD)}</td><td>${fmt(r.sfRevenueYTD)}</td><td><strong>${fmt(r.revenueYTD)}</strong></td></tr>
        <tr><td>Profit (YTD${r.vatRegistered?', ex VAT':''})</td><td>${fmt(r.swProfitYTD)}</td><td>${fmt(r.sfProfitYTD)}</td><td><strong>${fmt(profitYTD)}</strong></td></tr>
        <tr><td>Owner pay taken (all time)</td><td></td><td></td><td>${fmt(r.ownerPayAll)}</td></tr>
        <tr><td>Outstanding invoices</td><td>${fmt(r.swOutstanding)}</td><td>${fmt(r.sfOutstanding)}</td><td><strong>${fmt(r.outstandingAll)}</strong></td></tr>
        <tr><td>SteadyFlow MRR</td><td></td><td></td><td><strong>${fmt(r.sfMRR)}</strong></td></tr>
        <tr><td>Tracked cash position</td><td></td><td></td><td><strong>${fmt(r.cashPosition)}</strong></td></tr>
      </tbody></table>`;
  } else if(kind==='balance-sheet'){
    const totalAssetsManual = (DB.assets||[]).reduce((s,a)=>s+Number(a.value||0),0);
    const vatOwed = r.vatRegistered ? r.vatLast3m : 0;
    const totalLiabilities = (DB.liabilities||[]).reduce((s,l)=>s+Number(l.value||0),0) + vatOwed;
    const totalAssets = totalAssetsManual + Math.max(r.cashPosition,0) + r.outstandingAll;
    const equity = totalAssets - totalLiabilities;
    title = 'Balance Sheet';
    bodyHtml = `
      <h2 style="margin-top:0;">Assets</h2>
      <table><tbody>
        <tr><td>Tracked cash position</td><td>${fmt(Math.max(r.cashPosition,0))}</td></tr>
        <tr><td>Outstanding invoices (receivable)</td><td>${fmt(r.outstandingAll)}</td></tr>
        ${(DB.assets||[]).map(a=>`<tr><td>${esc(a.name)} — ${esc(a.category)}</td><td>${fmt(a.value)}</td></tr>`).join('')}
        <tr><td><strong>Total Assets</strong></td><td><strong>${fmt(totalAssets)}</strong></td></tr>
      </tbody></table>
      <h2>Liabilities</h2>
      <table><tbody>
        ${vatOwed?`<tr><td>VAT collected, last 3 months (estimate)</td><td>${fmt(vatOwed)}</td></tr>`:''}
        ${(DB.liabilities||[]).map(l=>`<tr><td>${esc(l.name)} — ${esc(l.category)}</td><td>${fmt(l.value)}</td></tr>`).join('') || (vatOwed?'':'<tr><td colspan="2">None recorded</td></tr>')}
        <tr><td><strong>Total Liabilities</strong></td><td><strong>${fmt(totalLiabilities)}</strong></td></tr>
      </tbody></table>
      <h2>Equity</h2>
      <table><tbody><tr><td><strong>Net Worth</strong></td><td><strong>${fmt(equity)}</strong></td></tr></tbody></table>`;
  } else {
    title = 'Revenue Forecast';
    const fb = forecastBasis();
    const swAvg = fb.swAvg;
    const rowsHtml = [];
    for(let i=1;i<=6;i++){
      const d = new Date(now.getFullYear(), now.getMonth()+i, 1);
      const sf = fb.sf;
      rowsHtml.push(`<tr><td>${d.toLocaleString('en-GB',{month:'short',year:'numeric'})}</td><td>${fmt(swAvg)}</td><td>${fmt(sf)}</td><td><strong>${fmt(swAvg+sf)}</strong></td></tr>`);
    }
    bodyHtml = `<table><thead><tr><th>Month</th><th>SteadyWorks</th><th>SteadyFlow</th><th>Total</th></tr></thead><tbody>${rowsHtml.join('')}</tbody></table>`;
  }

  const w = window.open('','_blank');
  if(!w){ toast('Allow pop-ups for this site to print / save as PDF','⚠️'); return; }
  w.document.write(`
    <html><head><title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Manrope',Arial,sans-serif;padding:40px;color:#1A1A1A;-webkit-font-smoothing:antialiased;}
      h1{color:${accent};font-size:22px;font-weight:800;margin:0;}
      h2{color:${accent};font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:26px 0 8px;}
      table{width:100%;border-collapse:collapse;margin-top:10px;}
      th{padding:8px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:${accent};background:${accentSoft};}
      td{padding:8px;border-bottom:1px solid #eee;font-size:13.5px;}
      .head{border-bottom:3px solid ${accent};padding-bottom:14px;margin-bottom:10px;}
    </style></head><body>
    <div class="head"><h1>Steady Inc — ${title}</h1><div style="font-size:12px;color:#666;margin-top:4px;">Generated ${fmtDate(now.toISOString())}</div></div>
    ${bodyHtml}
    <p style="margin-top:30px;font-size:11px;color:#999;">Cash basis: money received (inc VAT) on the date received${r.vatRegistered?'; profit shown ex VAT, VAT figures are estimates from invoices':''}. Costs = logged expenses + acquisition + expansion spend. Not a substitute for formal accounts.</p>
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
    const dateStr = localDateStr(new Date(y,m,day));
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
  return {Job:'#E11D2A','Site Visit':'#0EA5E9',Quote:'#7C3AED',Inspection:'#EF4444','Invoice Due':'#F59E0B','Quote Expiry':'#7C3AED','Pipeline Job':'#A78BFA','Lead Scheduled':'#22C55E'}[type] || '#9CA0AE';
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
  if(!requireField('f-title','Give the event a title') || !requireField('f-date','Pick a date for the event')) return;
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
let SW_CUST_SEARCH = '';
function swCustomerStats(c){
  const jobs = DB.jobs.filter(j=>j.customerId===c.id || j.customerName===c.name);
  const invoices = DB.invoices.filter(i=>i.customerId===c.id || i.customerName===c.name);
  const spend = invoices.reduce((s,i)=>s+tgInvoiceReceived(i),0);
  const owed = invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0);
  const services = (DB.swServices||[]).filter(sv=>sv.customerId===c.id);
  const last = jobs.map(j=>j.endDate||j.startDate).filter(Boolean).sort().pop();
  return {jobs, invoices, spend, owed, services, last};
}
function swCustomerRows(){
  const q = SW_CUST_SEARCH.trim().toLowerCase();
  const list = DB.customers.filter(c=>!q || [c.name,c.phone,c.email,c.address].join(' ').toLowerCase().includes(q)).slice().sort((a,b)=>String(a.name).localeCompare(String(b.name)));
  if(!list.length) return DB.customers.length ? emptyRow(7,'No customers match that search.') : emptyRow(7,'No customers yet — they\'re added automatically when you quote, book or invoice someone new, or import from your phone.','+ New Customer','openCustomerModal()');
  return list.map(c=>{ const st = swCustomerStats(c); return `<tr class="row-link" onclick="navigate('customers','${c.id}')">
      <td><div class="flex gap-8" style="align-items:center;"><div class="avatar">${esc(String(c.name||'?').slice(0,2).toUpperCase())}</div><div><strong>${esc(c.name)}</strong><div class="small muted">${esc(c.address||'')}</div></div></div></td>
      <td>${esc(c.phone||'—')}</td>
      <td>${st.jobs.length}</td>
      <td>${st.last?fmtDate(st.last):'—'}</td>
      <td>${fmt(st.spend)}</td>
      <td style="color:${st.owed?'var(--warning)':'inherit'};">${st.owed?fmt(st.owed):'—'}</td>
      <td>${st.services.length?`<span class="pill st-scheduled">🔁 ${st.services.length}</span>`:''}</td>
    </tr>`; }).join('');
}
function view_customers(){
  if(currentParam) return view_customerDetail(currentParam);
  const repeat = DB.customers.filter(c=>swCustomerStats(c).jobs.length>1).length;
  return `<div class="grid grid-3" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Customers</div><div class="kpi-value">${DB.customers.length}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Repeat customers</div><div class="kpi-value">${repeat}</div><div class="small muted mt-10">2+ jobs</div></div>
    <div class="card kpi-card"><div class="kpi-label">On a service plan</div><div class="kpi-value">${new Set((DB.swServices||[]).filter(s=>s.status!=='paused').map(s=>s.customerId)).size}</div></div>
  </div>
  <div class="toolbar"><div class="search-box">🔍<input type="text" placeholder="Search name, phone, email, address…" value="${esc(SW_CUST_SEARCH)}" oninput="SW_CUST_SEARCH=this.value; const b=document.getElementById('sw-cust-body'); if(b) b.innerHTML=swCustomerRows();"></div></div>
  <div class="card"><table>
    <thead><tr><th>Customer</th><th>Phone</th><th>Jobs</th><th>Last job</th><th>Lifetime spend</th><th>Owed</th><th>Plans</th></tr></thead>
    <tbody id="sw-cust-body">${swCustomerRows()}</tbody>
  </table></div>`;
}
function view_customerDetail(id){
  const c = DB.customers.find(x=>x.id===id);
  if(!c) return '<div class="empty-state">Customer not found. <a onclick="navigate(\'customers\')" style="color:var(--gold);cursor:pointer;">Back to customers</a></div>';
  const st = swCustomerStats(c);
  const quotes = DB.quotes.filter(q=>q.customerId===c.id || q.customerName===c.name);
  setTimeout(()=>{ const t = document.getElementById('page-title'); if(t) t.textContent = c.name; },0);
  const phoneDigits = String(c.phone||'').replace(/[^\d+]/g,'');
  return `
  <div class="flex-between mb-10" style="flex-wrap:wrap;gap:8px;">
    <button class="btn btn-ghost btn-sm" onclick="navigate('customers')">← All Customers</button>
    <div class="flex gap-8" style="flex-wrap:wrap;">
      ${c.phone?`<a class="btn btn-ghost btn-sm" href="tel:${esc(phoneDigits)}">📞 Call</a><a class="btn btn-ghost btn-sm" href="sms:${esc(phoneDigits)}">💬 Text</a>`:''}
      ${c.email?`<a class="btn btn-ghost btn-sm" href="mailto:${esc(c.email)}">✉️ Email</a>`:''}
      <button class="btn btn-ghost btn-sm" onclick="swOpenService(null,'${c.id}')">🔁 Service plan</button>
      <button class="btn btn-dark btn-sm" onclick="swQuoteForCustomer('${c.id}')">+ Quote</button>
      <button class="btn btn-gold btn-sm" onclick="openJobModal(null,{customerName:'${esc(String(c.name).replace(/'/g,"\\'"))}'})">+ Job</button>
    </div>
  </div>
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Lifetime spend</div><div class="kpi-value">${fmt(st.spend)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Owed</div><div class="kpi-value" style="color:${st.owed?'var(--warning)':'inherit'};">${fmt(st.owed)}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Jobs</div><div class="kpi-value">${st.jobs.length}</div><div class="small muted mt-10">${st.last?'last '+fmtDate(st.last):'none yet'}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Quotes</div><div class="kpi-value">${quotes.length}</div><div class="small muted mt-10">${quotes.filter(q=>q.status==='approved').length} won</div></div>
  </div>
  <div class="grid grid-2" style="margin-bottom:18px;align-items:start;">
    <div class="card">
      <div class="card-title">Contact <button class="icon-btn" aria-label="Edit customer" onclick="openCustomerModal('${c.id}')">✎</button></div>
      <p class="small"><strong>Phone:</strong> ${esc(c.phone||'—')}</p>
      <p class="small mt-10"><strong>Email:</strong> ${esc(c.email||'—')}</p>
      <p class="small mt-10"><strong>Address:</strong> ${esc(c.address||'—')}</p>
      <p class="small mt-10"><strong>Property:</strong> ${esc(c.propertyType||'—')} · <strong>Source:</strong> ${esc(c.leadSource||'—')}</p>
      ${c.notes?`<div class="divider"></div><p class="small">${esc(c.notes)}</p>`:''}
    </div>
    <div class="card">
      <div class="card-title">Service plans</div>
      ${st.services.length ? st.services.map(sv=>{ const ss = swServiceStatus(sv); return `<div class="flex-between" style="padding:8px 0;border-bottom:1px solid var(--border);gap:8px;"><div><strong class="small">${esc(sv.type)}</strong><div class="small muted">next due ${fmtDate(sv.nextDue)} · ${fmt(sv.price)}</div></div><span class="pill ${ss.cls}">${ss.label}</span></div>`; }).join('') : `<p class="small muted">No service plan. Boiler services and landlord gas-safety checks come back every year, so set one up and it'll remind you when they're due.</p><button class="btn btn-ghost btn-sm mt-10" onclick="swOpenService(null,'${c.id}')">+ Add service plan</button>`}
    </div>
  </div>
  <div class="card mb-10">
    <div class="card-title">Jobs</div>
    <table><thead><tr><th>Job #</th><th>Status</th><th>Start</th><th>Value</th></tr></thead>
    <tbody>${st.jobs.map(j=>`<tr class="row-link" onclick="navigate('jobs','${j.id}')"><td><strong>${esc(j.jobNumber)}</strong></td><td>${statusPill(j.status)}</td><td>${fmtDate(j.startDate)}</td><td>${fmt(j.expectedRevenue)}</td></tr>`).join('') || emptyRow(4,'No jobs yet')}</tbody></table>
  </div>
  <div class="grid grid-2" style="align-items:start;">
    <div class="card"><div class="card-title">Quotes</div>
      <table><thead><tr><th>Quote #</th><th>Status</th><th>Total</th></tr></thead>
      <tbody>${quotes.map(q=>`<tr class="row-link" onclick="openQuoteModal('${q.id}')"><td><strong>${esc(q.quoteNumber)}</strong></td><td>${statusPill(q.status)}</td><td>${fmt(calcQuoteTotal(q).total)}</td></tr>`).join('') || emptyRow(3,'No quotes')}</tbody></table></div>
    <div class="card"><div class="card-title">Invoices</div>
      <table><thead><tr><th>Invoice #</th><th>Status</th><th>Total</th><th>Owed</th></tr></thead>
      <tbody>${st.invoices.map(i=>`<tr class="row-link" onclick="openInvoiceModal('${i.id}')"><td><strong>${esc(i.invoiceNumber)}</strong></td><td>${statusPill(invoiceStatus(i))}</td><td>${fmt(calcInvoiceTotal(i).total)}</td><td>${i.status==='paid'?'—':fmt(invoiceOutstanding(i))}</td></tr>`).join('') || emptyRow(4,'No invoices')}</tbody></table></div>
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
  if(!checkEmailField('f-email')) return;
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
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${e.holidaysTotal?Math.min(100,(e.holidaysUsed/e.holidaysTotal)*100):0}%"></div></div>
    </div>`).join('');
  return `<div class="grid grid-3">${cards || emptyBlock('No team members yet.','+ Add Team Member','openEmployeeModal()','👷')}</div>`;
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
  if(!requireField('f-name','Team member name is required') || !checkEmailField('f-email')) return;
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

/* ===================== TIMESHEETS ===================== */
function mondayOf(dateStr){
  const d = new Date(dateStr);
  const day = d.getDay(); // 0=Sun..6=Sat
  const diff = (day===0 ? -6 : 1-day);
  d.setDate(d.getDate()+diff);
  return d.toISOString().slice(0,10);
}
function weekDays(weekStart){
  const out = [];
  const d = new Date(weekStart);
  for(let i=0;i<7;i++){ const x=new Date(d); x.setDate(d.getDate()+i); out.push(x.toISOString().slice(0,10)); }
  return out;
}
function timesheetTotal(ts){
  return weekDays(ts.weekStart).reduce((s,day)=>s+Number((ts.days[day]&&ts.days[day].hours)||0),0);
}
function view_timesheets(){
  const list = [...(DB.timesheets||[])].sort((a,b)=>b.weekStart.localeCompare(a.weekStart));
  const rows = list.map(ts=>{
    const days = weekDays(ts.weekStart);
    const total = timesheetTotal(ts);
    return `<tr>
      <td>${esc(ts.employeeName)}</td>
      <td>${fmtDate(days[0])} – ${fmtDate(days[6])}</td>
      <td><strong>${total.toFixed(1)}h</strong></td>
      <td><span class="pill ${ts.status==='submitted'?'st-won':'st-onhold'}">${ts.status==='submitted'?'Submitted':'Draft'}</span></td>
      <td style="text-align:right;">
        <button class="icon-btn" aria-label="Edit timesheet" onclick="openTimesheetModal('${ts.id}')">✎</button>
        <button class="icon-btn" aria-label="Print timesheet" onclick="printTimesheet('${ts.id}')">🖨️</button>
        <button class="icon-btn" aria-label="Delete timesheet" onclick="deleteTimesheet('${ts.id}')">🗑️</button>
      </td>
    </tr>`;
  }).join('');
  return `
    <div class="card">
      <table><thead><tr><th>Team Member</th><th>Week</th><th>Total Hours</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows || emptyRow(5,'No timesheets yet — add one, print a blank sheet, or import a filled one.','+ New Timesheet','openTimesheetModal()')}</tbody>
      </table>
    </div>`;
}
function openTimesheetModal(id){
  const ts = id ? DB.timesheets.find(t=>t.id===id) : null;
  const employeeId = ts ? ts.employeeId : (DB.employees[0] ? DB.employees[0].id : '');
  const weekStart = ts ? ts.weekStart : mondayOf(new Date().toISOString().slice(0,10));
  openModal(`
    <div class="modal-head"><h2>${ts?'Edit Timesheet':'New Timesheet'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Team Member</label><select id="ts-employee" ${ts?'disabled':''} onchange="renderTimesheetGrid()">${DB.employees.map(e=>`<option value="${e.id}" ${employeeId===e.id?'selected':''}>${esc(e.name)}</option>`).join('') || '<option value="">Add a team member first</option>'}</select></div>
        <div class="form-group"><label>Week Starting (Monday)</label><input id="ts-weekstart" type="date" value="${weekStart}" ${ts?'disabled':''} onchange="document.getElementById('ts-weekstart').value=mondayOf(this.value); renderTimesheetGrid();"></div>
      </div>
      <div id="ts-grid"></div>
      <div class="form-group mt-10"><label>Status</label><select id="ts-status">${['draft','submitted'].map(s=>`<option value="${s}" ${(ts&&ts.status===s)?'selected':''}>${s==='draft'?'Draft':'Submitted'}</option>`).join('')}</select></div>
    </div>
    <div class="modal-foot">
      ${ts?`<button class="btn btn-danger" onclick="deleteTimesheet('${ts.id}')">Delete</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveTimesheet('${ts?ts.id:''}')">${ts?'Save Changes':'Create Timesheet'}</button>
    </div>`, true);
  window._tsEditing = ts ? JSON.parse(JSON.stringify(ts.days||{})) : {};
  renderTimesheetGrid();
}
function renderTimesheetGrid(){
  const grid = document.getElementById('ts-grid');
  if(!grid) return;
  const weekStartInput = document.getElementById('ts-weekstart');
  const weekStart = weekStartInput ? weekStartInput.value : mondayOf(new Date().toISOString().slice(0,10));
  const days = weekDays(weekStart);
  const dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  grid.innerHTML = `
    <table><thead><tr><th>Day</th><th>Hours</th><th>Notes</th></tr></thead>
    <tbody>
      ${days.map((d,i)=>{
        const existing = (window._tsEditing && window._tsEditing[d]) || {hours:0,note:''};
        return `<tr>
          <td>${dayNames[i]} <span class="small muted">${fmtDate(d)}</span></td>
          <td><input type="number" step="0.25" min="0" max="24" value="${existing.hours||0}" style="width:80px;" data-day="${d}" class="ts-hours-input" onchange="window._tsEditing['${d}']=window._tsEditing['${d}']||{}; window._tsEditing['${d}'].hours=Number(this.value)||0;"></td>
          <td><input type="text" value="${esc(existing.note||'')}" style="width:100%;" data-day="${d}" class="ts-note-input" onchange="window._tsEditing['${d}']=window._tsEditing['${d}']||{}; window._tsEditing['${d}'].note=this.value;"></td>
        </tr>`;
      }).join('')}
    </tbody></table>`;
}
function saveTimesheet(id){
  const employeeSel = document.getElementById('ts-employee');
  const employee = DB.employees.find(e=>e.id===employeeSel.value);
  if(!employee){ toast('Add a team member first','⚠️'); return; }
  const weekStart = mondayOf(document.getElementById('ts-weekstart').value);
  const status = document.getElementById('ts-status').value;
  const days = window._tsEditing || {};
  if(id){
    const ts = DB.timesheets.find(t=>t.id===id);
    Object.assign(ts, {days, status});
    toast('Timesheet updated');
  } else {
    DB.timesheets.push({id:uid(), employeeId:employee.id, employeeName:employee.name, weekStart, days, status});
    toast('Timesheet created');
  }
  logActivity('Timesheet saved', `${employee.name} — week of ${fmtDate(weekStart)}`);
  save(); closeModal(); renderPage();
}
function deleteTimesheet(id){
  const ts = DB.timesheets.find(t=>t.id===id);
  confirmDelete('Delete this timesheet?', "This can't be undone.", ()=>{
    DB.timesheets = DB.timesheets.filter(t=>t.id!==id); save(); closeModal(); renderPage(); toast('Timesheet deleted','🗑️');
  });
}

/* ---------- Print a BLANK timesheet to hand out / fill by hand ---------- */
function openPrintBlankTimesheetModal(){
  const weekStart = mondayOf(new Date().toISOString().slice(0,10));
  openModal(`
    <div class="modal-head"><h2>Print Blank Timesheet</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Team Member</label><select id="pb-employee">${DB.employees.map(e=>`<option value="${e.id}">${esc(e.name)}</option>`).join('') || '<option value="">Add a team member first</option>'}</select></div>
      <div class="form-group"><label>Week Starting (Monday)</label><input id="pb-weekstart" type="date" value="${weekStart}" onchange="this.value=mondayOf(this.value);"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="printBlankTimesheet()">🖨️ Print</button>
    </div>`);
}
function printBlankTimesheet(){
  const employee = DB.employees.find(e=>e.id===document.getElementById('pb-employee').value);
  const weekStart = mondayOf(document.getElementById('pb-weekstart').value);
  const days = weekDays(weekStart);
  const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const accent = '#00E5CC';
  const w = window.open('','_blank');
  if(!w){ toast('Allow pop-ups for this site to print / save as PDF','⚠️'); return; }
  w.document.write(`
    <html><head><title>Timesheet — ${employee?esc(employee.name):''}</title>
    <style>
      body{font-family:Arial,sans-serif;padding:40px;color:#1A1A1A;}
      h1{color:${accent};font-size:22px;font-weight:800;margin:0;}
      table{width:100%;border-collapse:collapse;margin-top:20px;}
      th{padding:10px;text-align:left;font-size:12px;text-transform:uppercase;background:#f0fdfb;color:${accent};border:1px solid #ddd;}
      td{padding:14px 10px;border:1px solid #ddd;font-size:14px;}
      .head{border-bottom:3px solid ${accent};padding-bottom:14px;margin-bottom:6px;}
      .sig{margin-top:40px;display:flex;gap:60px;}
      .sig div{flex:1;border-top:1px solid #999;padding-top:6px;font-size:12px;color:#666;}
    </style></head><body>
    <div class="head"><h1>Steady Inc — Weekly Timesheet</h1>
      <div style="font-size:13px;color:#666;margin-top:6px;">Employee: <strong>${employee?esc(employee.name):'_______________'}</strong> &nbsp;·&nbsp; Week: ${fmtDate(days[0])} – ${fmtDate(days[6])}</div>
    </div>
    <table><thead><tr><th style="width:110px;">Day</th><th style="width:90px;">Hours</th><th>Notes / Job</th></tr></thead>
    <tbody>${days.map((d,i)=>`<tr><td>${dayNames[i]}<br><span style="font-size:11px;color:#999;">${fmtDate(d)}</span></td><td></td><td></td></tr>`).join('')}
    <tr><td colspan="2" style="text-align:right;"><strong>Total Hours</strong></td><td></td></tr>
    </tbody></table>
    <div class="sig"><div>Employee Signature</div><div>Date</div></div>
    </body></html>`);
  w.document.close(); w.print();
  closeModal();
}
function printTimesheet(id){
  const ts = DB.timesheets.find(t=>t.id===id);
  if(!ts) return;
  const days = weekDays(ts.weekStart);
  const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const accent = '#00E5CC';
  const total = timesheetTotal(ts);
  const w = window.open('','_blank');
  if(!w){ toast('Allow pop-ups for this site to print / save as PDF','⚠️'); return; }
  w.document.write(`
    <html><head><title>Timesheet — ${esc(ts.employeeName)}</title>
    <style>
      body{font-family:Arial,sans-serif;padding:40px;color:#1A1A1A;}
      h1{color:${accent};font-size:22px;font-weight:800;margin:0;}
      table{width:100%;border-collapse:collapse;margin-top:20px;}
      th{padding:10px;text-align:left;font-size:12px;text-transform:uppercase;background:#f0fdfb;color:${accent};border:1px solid #ddd;}
      td{padding:10px;border:1px solid #ddd;font-size:14px;}
      .head{border-bottom:3px solid ${accent};padding-bottom:14px;margin-bottom:6px;}
    </style></head><body>
    <div class="head"><h1>Steady Inc — Weekly Timesheet</h1>
      <div style="font-size:13px;color:#666;margin-top:6px;">Employee: <strong>${esc(ts.employeeName)}</strong> &nbsp;·&nbsp; Week: ${fmtDate(days[0])} – ${fmtDate(days[6])} &nbsp;·&nbsp; Status: ${ts.status==='submitted'?'Submitted':'Draft'}</div>
    </div>
    <table><thead><tr><th style="width:110px;">Day</th><th style="width:90px;">Hours</th><th>Notes</th></tr></thead>
    <tbody>${days.map((d,i)=>{const e=ts.days[d]||{hours:0,note:''};return `<tr><td>${dayNames[i]}<br><span style="font-size:11px;color:#999;">${fmtDate(d)}</span></td><td>${Number(e.hours||0).toFixed(2)}</td><td>${esc(e.note||'')}</td></tr>`;}).join('')}
    <tr><td colspan="1" style="text-align:right;"><strong>Total Hours</strong></td><td colspan="2"><strong>${total.toFixed(2)}</strong></td></tr>
    </tbody></table>
    </body></html>`);
  w.document.close(); w.print();
}

/* ---------- Import a filled-in timesheet from CSV (Date, Hours, Notes) ---------- */
let IMPORT_TS_ROWS = [];
function openImportTimesheetModal(){
  IMPORT_TS_ROWS = [];
  const weekStart = mondayOf(new Date().toISOString().slice(0,10));
  openModal(`
    <div class="modal-head"><h2>Import Filled Timesheet (CSV)</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">CSV needs a date column and an hours column (a notes column is optional). Rows outside the selected week are ignored.</p>
      <div class="form-row">
        <div class="form-group"><label>Team Member</label><select id="it-employee">${DB.employees.map(e=>`<option value="${e.id}">${esc(e.name)}</option>`).join('') || '<option value="">Add a team member first</option>'}</select></div>
        <div class="form-group"><label>Week Starting (Monday)</label><input id="it-weekstart" type="date" value="${weekStart}" onchange="this.value=mondayOf(this.value); if(IMPORT_TS_ROWS.length) renderImportTimesheetReview();"></div>
      </div>
      <input id="import-ts-file" type="file" accept=".csv,text/csv" onchange="handleImportTimesheetFile(this)">
      <div id="import-ts-review" style="margin-top:16px;"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button id="import-ts-run-btn" class="btn btn-gold" style="display:none;" onclick="runImportTimesheet()">Import</button>
    </div>`, true);
}
function handleImportTimesheetFile(input){
  const file = input.files && input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e)=>{
    const rows = parseCSV(e.target.result);
    IMPORT_TS_ROWS = rows.map(r=>{
      const dateRaw = csvFindCol(r,['date']);
      const d = new Date(dateRaw);
      return {
        date: !isNaN(d) ? d.toISOString().slice(0,10) : '',
        hours: Number(csvFindCol(r,['hour','hrs']).replace(/[^0-9.\-]/g,''))||0,
        note: csvFindCol(r,['note','memo','job','desc'])
      };
    }).filter(r=>r.date);
    renderImportTimesheetReview();
  };
  reader.readAsText(file);
}
function renderImportTimesheetReview(){
  const box = document.getElementById('import-ts-review');
  const btn = document.getElementById('import-ts-run-btn');
  if(!box) return;
  const weekStart = mondayOf(document.getElementById('it-weekstart').value);
  const days = weekDays(weekStart);
  const inWeek = IMPORT_TS_ROWS.filter(r=>days.includes(r.date));
  if(!IMPORT_TS_ROWS.length){ box.innerHTML = '<p class="small muted">No usable rows found — check the file has date and hours columns.</p>'; if(btn) btn.style.display='none'; return; }
  box.innerHTML = `
    <p class="small muted mb-10">${IMPORT_TS_ROWS.length} rows found — ${inWeek.length} fall inside the selected week and will be imported.</p>
    <div style="max-height:300px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;">
      <table style="width:100%;"><thead><tr><th>Date</th><th>Hours</th><th>Notes</th><th>In week?</th></tr></thead>
        <tbody>${IMPORT_TS_ROWS.map(r=>`<tr><td>${fmtDate(r.date)}</td><td>${r.hours}</td><td>${esc(r.note)}</td><td>${days.includes(r.date)?'✅':'—'}</td></tr>`).join('')}</tbody>
      </table>
    </div>`;
  if(btn) btn.style.display = inWeek.length ? 'inline-block' : 'none';
}
function runImportTimesheet(){
  const employee = DB.employees.find(e=>e.id===document.getElementById('it-employee').value);
  if(!employee){ toast('Add a team member first','⚠️'); return; }
  const weekStart = mondayOf(document.getElementById('it-weekstart').value);
  const days = weekDays(weekStart);
  const inWeek = IMPORT_TS_ROWS.filter(r=>days.includes(r.date));
  if(!inWeek.length){ toast('No rows fall inside that week','⚠️'); return; }
  const dayData = {};
  inWeek.forEach(r=>{ dayData[r.date] = {hours:r.hours, note:r.note||''}; });
  let ts = DB.timesheets.find(t=>t.employeeId===employee.id && t.weekStart===weekStart);
  if(ts){ Object.assign(ts.days, dayData); }
  else { DB.timesheets.push({id:uid(), employeeId:employee.id, employeeName:employee.name, weekStart, days:dayData, status:'submitted'}); }
  logActivity('Timesheet imported', `${employee.name} — week of ${fmtDate(weekStart)} (${inWeek.length} day(s))`);
  save(); closeModal(); renderPage();
  toast(`Imported ${inWeek.length} day${inWeek.length===1?'':'s'} for ${employee.name}`);
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
  return `<div class="grid grid-3">${cards || emptyBlock('No subcontractors yet.','+ Add Subcontractor','openSubcontractorModal()','🦺')}</div>`;
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
  if(!requireField('f-name','Subcontractor name is required') || !checkEmailField('f-email')) return;
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
  const monthRevenue = receivedInMonth('sw', now);
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
        <div style="background:var(--card-alt);border-radius:6px;height:8px;width:100%;max-width:160px;overflow:hidden;">
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
  save(); renderPage(); toast(cat+' budget saved');
}

function view_expenses(){
  const now = new Date();
  const monthExpenses = DB.expenses.filter(e=>{const d=new Date(e.date); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();});
  const total = monthExpenses.reduce((s,e)=>s+Number(e.amount),0);
  const monthRevenue = receivedInMonth('sw', now);
  const acc = accountingRollup();
  const monthProfit = acc.swProfitMTD;
  const margin = monthRevenue ? Math.round(monthProfit/monthRevenue*100) : 0;

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
    <div class="card kpi-card"><div class="kpi-label">Profit (this month${acc.vatRegistered?', ex VAT':''})</div><div class="kpi-value" style="color:${monthProfit<0?'var(--danger)':'inherit'};">${fmt(monthProfit)}</div><div class="small muted mt-10">same figure as Accounting</div></div>
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
    <tbody>${rows || emptyRow(5,'No expenses logged yet.','+ New Expense','openExpenseModal()')}</tbody>
  </table></div>
  `;
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
  if(!requireField('f-date','Pick a date for the expense')) return;
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
    <tbody>${rows || emptyRow(6,'No compliance documents stored yet.','+ Add Document','openComplianceModal()')}</tbody>
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
  const monthRevenue = receivedInMonth('sf', now);
  const acc = accountingRollup();
  const monthProfit = acc.sfProfitMTD;
  const margin = monthRevenue ? Math.round(monthProfit/monthRevenue*100) : 0;

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
    <div class="card kpi-card"><div class="kpi-label">Profit (this month${acc.vatRegistered?', ex VAT':''})</div><div class="kpi-value" style="color:${monthProfit<0?'var(--danger)':'inherit'};">${fmt(monthProfit)}</div><div class="small muted mt-10">same figure as Accounting</div></div>
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
    <tbody>${rows || emptyRow(5,'No SteadyFlow expenses logged yet.','+ New Expense','openSfExpenseModal()')}</tbody>
  </table></div>
  `;
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
  if(!requireField('f-date','Pick a date for the expense')) return;
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
    <tbody>${rows || emptyRow(6,'No contracts or renewals stored yet.','+ Add Document','openSfComplianceModal()')}</tbody>
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
  const rev = months.map(d=>receivedInMonth('sw', d));
  chartSafe('repRevenue','bar',{labels,datasets:[{label:'Revenue',data:rev,backgroundColor:'#E11D2A',borderRadius:6}]},{plugins:{legend:{display:false}}});

  const engPerf = {};
  DB.jobs.forEach(j=>{ if(j.assignedTo) engPerf[j.assignedTo]=(engPerf[j.assignedTo]||0)+(j.actualRevenue||j.expectedRevenue||0); });
  chartSafe('repEngineer','bar',{labels:Object.keys(engPerf),datasets:[{label:'Revenue',data:Object.values(engPerf),backgroundColor:'#00A99D',borderRadius:6}]},{indexAxis:'y',plugins:{legend:{display:false}}});

  const srcWin = {}; const srcTotal = {};
  DB.leads.forEach(l=>{ srcTotal[l.source]=(srcTotal[l.source]||0)+1; if(l.stage==='Won'||l.stage==='Paid') srcWin[l.source]=(srcWin[l.source]||0)+1; });
  const srcLabels = Object.keys(srcTotal);
  chartSafe('repLeadSrc','bar',{labels:srcLabels,datasets:[
    {label:'Total Leads',data:srcLabels.map(s=>srcTotal[s]),backgroundColor:'#3A4058',borderRadius:6},
    {label:'Won',data:srcLabels.map(s=>srcWin[s]||0),backgroundColor:'#22C55E',borderRadius:6}
  ]},{plugins:{legend:{position:'bottom'}}});

  const typeRev = {Residential:0,Commercial:0};
  DB.jobs.forEach(j=>{ typeRev[j.propertyType] = (typeRev[j.propertyType]||0)+(j.actualRevenue||j.expectedRevenue||0); });
  chartSafe('repJobType','doughnut',{labels:Object.keys(typeRev),datasets:[{data:Object.values(typeRev),backgroundColor:['#E11D2A','#00A99D'],borderWidth:0}]},{plugins:{legend:{position:'bottom'}}});
}
function generateMonthlyReport(){
  const now = new Date();
  const rev = receivedInMonth('sw', now);
  const exp = DB.expenses.filter(e=>{const d=new Date(e.date);return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();}).reduce((s,e)=>s+Number(e.amount),0);
  const jobsCompleted = DB.jobs.filter(j=>['completed','invoiced'].includes(j.status)).length;
  const newLeads = DB.leads.length;
  const outstanding = DB.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+invoiceOutstanding(i),0);
  document.getElementById('monthly-report-output').innerHTML = `
    <div class="divider"></div>
    <h3 style="font-size:15px;margin-bottom:10px;">${now.toLocaleDateString('en-GB',{month:'long',year:'numeric'})} Summary</h3>
    <p class="small">Money received: <strong>${fmt(rev)}</strong> &nbsp;|&nbsp; Costs: <strong>${fmt(accountingRollup().swExpMTD)}</strong> &nbsp;|&nbsp; Profit${accountingRollup().vatRegistered?' (ex VAT)':''}: <strong>${fmt(accountingRollup().swProfitMTD)}</strong></p>
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
        <div class="form-group"><label>VAT registered?</label><select id="s-vatRegistered"><option value="yes" ${s.vatRegistered!==false?'selected':''}>Yes — show profit ex VAT</option><option value="no" ${s.vatRegistered===false?'selected':''}>No</option></select></div>
        <div class="form-group"><label>VAT Rate (%)</label><input id="s-vatRate" type="number" value="${s.vatRate}"></div>
      </div>
      <div class="form-row">
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
    <div class="card-title">Getting paid <span class="small muted">shown on SteadyWorks invoices and payment reminders</span></div>
    <div class="form-row">
      <div class="form-group"><label>Account name</label><input id="s-bankAccountName" type="text" value="${esc((s.bank||{}).accountName||'')}"></div>
      <div class="form-group"><label>Bank</label><input id="s-bankName" type="text" value="${esc((s.bank||{}).bankName||'')}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Sort code</label><input id="s-bankSort" type="text" inputmode="numeric" placeholder="00-00-00" value="${esc((s.bank||{}).sortCode||'')}"></div>
      <div class="form-group"><label>Account number</label><input id="s-bankAcc" type="text" inputmode="numeric" placeholder="8 digits" value="${esc((s.bank||{}).accountNumber||'')}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Card payment link (optional)</label><input id="s-payLink" type="text" placeholder="e.g. your Stripe, SumUp or Square payment link" value="${esc(s.paymentLink||'')}"></div>
      <div class="form-group"><label>Default payment terms (days)</label><input id="s-payDays" type="number" min="0" value="${s.paymentTermsDays!=null?s.paymentTermsDays:14}"></div>
    </div>
    <p class="small muted">The app doesn't take card payments itself. Paste a payment link from your card provider and it's added to invoices and reminders so customers can pay in one tap.</p>
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
  const sort = document.getElementById('s-bankSort').value.replace(/\D/g,''), acc = document.getElementById('s-bankAcc').value.replace(/\D/g,'');
  if(sort && sort.length!==6){ toast('Sort code should be 6 digits','⚠️'); document.getElementById('s-bankSort').classList.add('invalid'); return; }
  if(acc && acc.length!==8){ toast('Account number should be 8 digits','⚠️'); document.getElementById('s-bankAcc').classList.add('invalid'); return; }
  const link = document.getElementById('s-payLink').value.trim();
  if(link && !/^https:\/\//i.test(link)){ toast('Payment link should start with https://','⚠️'); document.getElementById('s-payLink').classList.add('invalid'); return; }
  Object.assign(DB.settings, {
    businessName: document.getElementById('s-businessName').value,
    regNo: document.getElementById('s-regNo').value,
    address: document.getElementById('s-address').value,
    phone: document.getElementById('s-phone').value,
    email: document.getElementById('s-email').value,
    vatRate: Number(document.getElementById('s-vatRate').value)||0,
    vatRegistered: document.getElementById('s-vatRegistered').value!=='no',
    annualTarget: Number(document.getElementById('s-annualTarget').value)||0,
    sfMonthlyTarget: Number(document.getElementById('s-sfMonthlyTarget').value)||0,
    sfWeeklyEmailTarget: Number(document.getElementById('s-sfWeeklyEmailTarget').value)||0,
    sfWeeklyCallTarget: Number(document.getElementById('s-sfWeeklyCallTarget').value)||0,
    terms: document.getElementById('s-terms').value,
    bank: {
      accountName: document.getElementById('s-bankAccountName').value.trim(),
      bankName: document.getElementById('s-bankName').value.trim(),
      sortCode: document.getElementById('s-bankSort').value.trim(),
      accountNumber: document.getElementById('s-bankAcc').value.trim()
    },
    paymentLink: document.getElementById('s-payLink').value.trim(),
    paymentTermsDays: Math.max(0, Number(document.getElementById('s-payDays').value)||0),
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
  toast('Note posted');
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
let PAINT_TYPE_FILTER = 'all';
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
  <div class="card flex-between" style="flex-wrap:wrap;gap:8px;">
    <div class="small muted">Viewing: <strong>${PAINT_TYPE_FILTER==='joint'?'Joint jobs (with Fabs)':PAINT_TYPE_FILTER==='personal'?'SteadyWorks only':'All quotes'}</strong></div>
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
  if(tgSyncPaintPayment(DB, rec, new Date(), before.depositStatus).length) save();
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
        <div class="form-group"><label>Job Type</label><select id="qa-jobtype">${PAINT_JOB_TYPES.map(t=>`<option value="${t.id}" ${(PAINT_TYPE_FILTER==='joint'?'joint':'personal')===t.id?'selected':''}>${t.label}</option>`).join('')}</select></div>
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
  const prevDepositStatus = rec.depositStatus;
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
  if(tgSyncPaintPayment(DB, rec, new Date(), prevDepositStatus).length) save();
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

/* ===================== STEADYFLOW — CLIENT ACQUISITION ===================== */
/* Lewis's daily tool for winning website/marketing clients (estate agents + trades).
   Data lives in the shared DB blob: DB.sfProspects (array, merged by id like every
   other list) and DB.sfAcquisitionWeekly (this week's planner ticks + counts). */
const ACQ_WEEKLY_TARGET = 4;
const ACQ_TYPES = ['Estate Agent','Plumber','Electrician','Roofer','Builder','Other'];
const ACQ_SOURCES = ['Cold Email','Cold Call','Facebook','Referral','LinkedIn','Lead Engine','Other'];
const ACQ_STATUSES = ['Not Contacted','Emailed','Called','Replied','Call Booked','Proposal Sent','Negotiating','Won','Lost','On Hold'];
const ACQ_CONTACT_STATUSES = ['Emailed','Called','Replied','Call Booked','Proposal Sent','Negotiating'];
const ACQ_COLUMNS = [
  {id:'prospect', label:'Prospect', statuses:['Not Contacted','On Hold'], set:'Not Contacted'},
  {id:'contacted', label:'Contacted', statuses:['Emailed','Called'], set:'Emailed'},
  {id:'replied', label:'Replied', statuses:['Replied'], set:'Replied'},
  {id:'booked', label:'Call Booked', statuses:['Call Booked'], set:'Call Booked'},
  {id:'proposal', label:'Proposal Sent', statuses:['Proposal Sent','Negotiating'], set:'Proposal Sent'},
  {id:'won', label:'Won', statuses:['Won'], set:'Won'},
  {id:'lost', label:'Lost', statuses:['Lost'], set:'Lost'}
];
// "Interested In" options. Business OS spans £690–£1,395 so pipeline value uses the middle tier.
const ACQ_PACKAGES = [
  {id:'starter', label:'Starter Website', oneOff:555, monthly:0, display:'£555'},
  {id:'growth-web', label:'Growth Website', oneOff:780, monthly:0, display:'£780'},
  {id:'pro-web', label:'Professional Website', oneOff:1200, monthly:0, display:'£1,200'},
  {id:'bos', label:'Business OS', oneOff:990, monthly:0, display:'£690–£1,395'},
  {id:'essentials', label:'Essentials Retainer', oneOff:0, monthly:300, display:'£300/mo'},
  {id:'growth-ret', label:'Growth Retainer', oneOff:0, monthly:900, display:'£900/mo'},
  {id:'full', label:'Full Marketing', oneOff:0, monthly:1500, display:'£1,500/mo'}
];
const ACQ_PLANNER = [
  {key:'emails', label:'Cold emails', target:30, icon:'✉️'},
  {key:'dms', label:'DMs', target:20, icon:'💬'},
  {key:'calls', label:'Calls', target:10, icon:'📞'}
];
const ACQ_DAYS = [['mon','Monday'],['tue','Tuesday'],['wed','Wednesday'],['thu','Thursday'],['fri','Friday']];

function acqPkg(id){ return ACQ_PACKAGES.find(p=>p.id===id) || null; }
// What a prospect is worth: {oneOff, monthly}. An edited Value overrides the package price.
function acqValue(p){
  const pkg = acqPkg(p.package);
  const v = Number(p.value);
  if(!pkg) return {oneOff: v>0?v:0, monthly:0};
  if(pkg.monthly) return {oneOff:0, monthly: v>0 ? v : pkg.monthly};
  return {oneOff: v>0 ? v : pkg.oneOff, monthly:0};
}
function acqValueLabel(p){
  const pkg = acqPkg(p.package), v = acqValue(p);
  if(v.monthly) return fmt(v.monthly).replace('.00','')+'/mo';
  if(pkg && pkg.id==='bos' && !(Number(p.value)>0)) return pkg.display;
  return v.oneOff ? fmt(v.oneOff).replace('.00','') : '—';
}
function acqWeekStart(d){ const x = new Date(d||new Date()); x.setHours(0,0,0,0); x.setDate(x.getDate()-((x.getDay()+6)%7)); return x; }
function acqWeekKey(){ return localDateStr(acqWeekStart()); }
function acqInThisWeek(dateStr){ if(!dateStr) return false; const d = new Date(dateStr+'T12:00:00'); return d>=acqWeekStart() && d < new Date(acqWeekStart().getTime()+7*86400000); }
function acqDaysSince(dateStr){ if(!dateStr) return null; const d = daysUntil(String(dateStr).slice(0,10)); return d===null ? null : -d; }
function acqProspects(){ DB.sfProspects = DB.sfProspects||[]; return DB.sfProspects; }
function acqActiveProspects(){ return acqProspects().filter(p=>p.status!=='Won' && p.status!=='Lost'); }
function acqWonThisWeek(){ return acqProspects().filter(p=>p.status==='Won' && acqInThisWeek(p.wonAt)); }
function acqIsStale(p){
  if(p.status==='Won' || p.status==='Lost') return false;
  const since = acqDaysSince(p.statusChangedAt || p.createdAt);
  return since!==null && since>7;
}
function acqColumnFor(p){ return ACQ_COLUMNS.find(c=>c.statuses.includes(p.status)) || ACQ_COLUMNS[0]; }
function acqSetStatus(p, status){
  if(!p || !ACQ_STATUSES.includes(status) || p.status===status) return false;
  const today = localDateStr();
  p.status = status;
  p.statusChangedAt = new Date().toISOString();
  p.updatedAt = p.statusChangedAt;
  if(ACQ_CONTACT_STATUSES.includes(status)) p.lastContacted = today;
  if(status==='Call Booked') p.callBookedAt = today;
  if(status==='Won'){ p.wonAt = p.wonAt || today; } else { p.wonAt = null; }
  return true;
}
// This week's planner state — rolls over to a fresh week automatically every Monday.
function acqWeekly(){
  const key = acqWeekKey();
  let w = DB.sfAcquisitionWeekly;
  if(!w || w.weekKey!==key){
    w = DB.sfAcquisitionWeekly = {weekKey:key, clientsWon:0, emailsDone:0, callsDone:0, dmsDone:0, days:{}, updatedAt:new Date().toISOString()};
  }
  w.days = w.days || {};
  w.clientsWon = acqWonThisWeek().length;
  const ticked = k => ACQ_DAYS.filter(([d])=>w.days[d] && w.days[d][k]).length;
  w.emailsDone = ticked('emails')*30; w.dmsDone = ticked('dms')*20; w.callsDone = ticked('calls')*10;
  return w;
}

/* ---------- PAGE SHELL ---------- */
let ACQ_TAB = 'pipeline';
try{ ACQ_TAB = localStorage.getItem('steadyworks_acq_tab') || 'pipeline'; }catch(e){}
const ACQ_TABS = [['pipeline','Pipeline'],['email','Email Drafts'],['list','Prospects List'],['offer','Offer Builder'],['planner','Weekly Planner']];
function setAcqTab(t){ ACQ_TAB = t; try{ localStorage.setItem('steadyworks_acq_tab', t); }catch(e){} renderPage(); }
function view_sf_acquisition(){
  if(!ACQ_TABS.some(([k])=>k===ACQ_TAB)) ACQ_TAB = 'pipeline';
  const tabs = `<div class="tabs">${ACQ_TABS.map(([k,l])=>`<button class="tab-btn ${ACQ_TAB===k?'active':''}" onclick="setAcqTab('${k}')">${l}${k==='list'?` <span class="small muted">${acqProspects().length}</span>`:''}</button>`).join('')}</div>`;
  const body = {pipeline:acqPipelineView, email:acqEmailView, list:acqListView, offer:acqOfferView, planner:acqPlannerView}[ACQ_TAB]();
  return tabs + body;
}
function afterRender_sf_acquisition(){
  if(ACQ_TAB==='list') renderAcqTable();
  if(ACQ_TAB==='email' && window._acqOut) acqRenderOutput();
  if(ACQ_TAB==='offer' && window._acqPitch) acqRenderPitch();
}

/* ---------- TAB: PIPELINE ---------- */
function acqStatsBar(){
  const now = new Date();
  const active = acqActiveProspects().length;
  const booked = acqProspects().filter(p=>acqInThisWeek(p.callBookedAt)).length;
  const wonMonth = acqProspects().filter(p=>{ if(p.status!=='Won' || !p.wonAt) return false; const d=new Date(p.wonAt+'T12:00:00'); return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear(); }).length;
  const mrr = acqProspects().filter(p=>p.status==='Won').reduce((s,p)=>s+acqValue(p).monthly,0);
  const card = (label, value, sub, icon) => `<div class="card kpi-card"><div class="kpi-icon">${icon}</div><div class="kpi-label">${label}</div><div class="kpi-value">${value}</div>${sub?`<div class="small muted mt-10">${sub}</div>`:''}</div>`;
  return `<div class="acq-stats">
    ${card('Total Active Prospects', active, acqProspects().filter(acqIsStale).length+' need a nudge', '🎯')}
    ${card('Calls Booked This Week', booked, '', '📞')}
    ${card('Won This Month', wonMonth, '', '🏆')}
    ${card('MRR from Won', fmt(mrr).replace('.00',''), 'Retainer clients', '💰')}
  </div>`;
}
function acqTargetCard(){
  const won = acqWonThisWeek().length;
  const pct = Math.min(100, won/ACQ_WEEKLY_TARGET*100);
  const dow = (new Date().getDay()+6)%7; // 0 = Monday
  const daysLeft = Math.max(0, 4-dow);
  const leftLabel = dow>=5 ? 'weekend — fresh count on Monday' : daysLeft>0 ? daysLeft+' working day'+(daysLeft===1?'':'s')+' left' : 'last working day';
  return `<div class="card mb-10">
    <div class="card-title">Weekly Target — ${ACQ_WEEKLY_TARGET} new clients <span class="small muted">Resets every Monday · ${leftLabel}</span></div>
    <div class="acq-target">
      <div class="acq-target-count" style="color:${won>=ACQ_WEEKLY_TARGET?'var(--success)':'var(--text)'};">${won} / ${ACQ_WEEKLY_TARGET}</div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%;${won>=ACQ_WEEKLY_TARGET?'background:var(--success);':''}"></div></div>
      <span class="small muted">${won>=ACQ_WEEKLY_TARGET?'Target hit 🔥':(ACQ_WEEKLY_TARGET-won)+' to go'}</span>
    </div>
  </div>`;
}
function acqPipelineView(){
  const list = acqProspects();
  const cols = ACQ_COLUMNS.map(col=>{
    const items = list.filter(p=>acqColumnFor(p).id===col.id).sort((a,b)=>String(b.statusChangedAt||b.createdAt).localeCompare(String(a.statusChangedAt||a.createdAt)));
    const monthly = items.reduce((s,p)=>s+acqValue(p).monthly,0), oneOff = items.reduce((s,p)=>s+acqValue(p).oneOff,0);
    const total = [oneOff?fmt(oneOff).replace('.00',''):'', monthly?fmt(monthly).replace('.00','')+'/mo':''].filter(Boolean).join(' + ') || '';
    return `<div class="kanban-col acq-col-${col.id}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="dropProspect(event,'${col.id}')">
      <div class="kanban-col-head"><span>${col.label} (${items.length})</span><span>${total}</span></div>
      ${items.map(p=>{
        const since = acqDaysSince(p.lastContacted);
        return `<div class="kanban-card acq-card" draggable="true" ondragstart="dragProspect(event,'${p.id}')" onclick="openProspectModal('${p.id}')">
          ${acqIsStale(p)?'<span class="acq-stale-dot" title="No status change for over 7 days"></span>':''}
          <div class="kc-name" style="padding-right:14px;">${esc(p.business)}</div>
          <div class="kc-meta">${esc(p.contact||'No contact name')}</div>
          <div class="kc-row"><span class="pill st-draft" style="padding:2px 8px;font-size:10.5px;">${esc(p.type||'Other')}</span><strong style="font-size:12px;">${acqValueLabel(p)}</strong></div>
          <div class="kc-meta" style="margin-top:6px;">${since===null?'Not contacted yet':since===0?'Contacted today':since+' day'+(since===1?'':'s')+' since contact'}${p.status==='On Hold'?' · <span style="color:var(--warning);">On hold</span>':''}</div>
        </div>`;
      }).join('') || '<div class="muted small" style="padding:8px 4px;">—</div>'}
    </div>`;
  }).join('');
  return `${acqStatsBar()}${acqTargetCard()}
  ${list.length ? `<div class="kanban acq-kanban">${cols}</div><p class="small muted mt-10">Drag cards between columns to update status. <span style="color:var(--warning);">●</span> = no status change for 7+ days.</p>`
    : `<div class="card">${emptyBlock('No prospects yet. Add the first business you want to win, then work it across the board.','+ Add Prospect','openProspectModal()','🎯')}</div>`}`;
}
let _dragProspectId = null;
function dragProspect(ev,id){ _dragProspectId = id; ev.target.classList.add('dragging'); }
function dropProspect(ev, colId){
  ev.currentTarget.classList.remove('drag-over');
  const p = acqProspects().find(x=>x.id===_dragProspectId);
  _dragProspectId = null;
  const col = ACQ_COLUMNS.find(c=>c.id===colId);
  if(!p || !col || col.statuses.includes(p.status)) return;
  acqSetStatus(p, col.set);
  if(p.status==='Won') logActivity('Prospect won', p.business);
  save(); renderPage(); renderNav();
  toast(p.status==='Won' ? p.business+' won 🎉' : 'Moved to '+col.label);
}

/* ---------- PROSPECT MODAL ---------- */
function openProspectModal(id){
  const p = id ? acqProspects().find(x=>x.id===id) : null;
  const pkgId = p ? p.package : 'starter';
  openModal(`
    <div class="modal-head"><h2>${p?esc(p.business):'Add Prospect'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Business Name *</label><input id="ap-business" type="text" value="${p?esc(p.business):''}" placeholder="e.g. Hartley & Co Estate Agents"></div>
        <div class="form-group"><label>Contact Name</label><input id="ap-contact" type="text" value="${p?esc(p.contact||''):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Type</label><select id="ap-type">${ACQ_TYPES.map(t=>`<option ${(p?p.type:'Estate Agent')===t?'selected':''}>${t}</option>`).join('')}</select></div>
        <div class="form-group"><label>Source</label><select id="ap-source">${ACQ_SOURCES.map(t=>`<option ${(p?p.source:'Cold Email')===t?'selected':''}>${t}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input id="ap-phone" type="tel" value="${p?esc(p.phone||''):''}"></div>
        <div class="form-group"><label>Email</label><input id="ap-email" type="email" value="${p?esc(p.email||''):''}"></div>
      </div>
      <div class="form-group"><label>Website URL</label><input id="ap-website" type="text" value="${p?esc(p.website||''):''}" placeholder="example.co.uk"></div>
      <div class="form-row">
        <div class="form-group"><label>Interested In</label><select id="ap-package" onchange="acqPackageChanged()">${ACQ_PACKAGES.map(k=>`<option value="${k.id}" ${pkgId===k.id?'selected':''}>${k.label} ${k.display}</option>`).join('')}</select></div>
        <div class="form-group"><label id="ap-value-label">Value (£${acqPkg(pkgId)&&acqPkg(pkgId).monthly?' / month':''})</label><input id="ap-value" type="number" min="0" value="${p&&Number(p.value)>0?p.value:''}" placeholder="${acqPkg(pkgId)?(acqPkg(pkgId).monthly||acqPkg(pkgId).oneOff):''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Status</label><select id="ap-status">${ACQ_STATUSES.map(st=>`<option ${(p?p.status:'Not Contacted')===st?'selected':''}>${st}</option>`).join('')}</select></div>
        <div class="form-group"><label>Last Contacted</label><input id="ap-lastContacted" type="date" value="${p&&p.lastContacted?p.lastContacted:''}"></div>
      </div>
      <div class="form-group"><label>Notes</label><textarea id="ap-notes" placeholder="Anything worth remembering — what you noticed, who you spoke to, objections…">${p?esc(p.notes||''):''}</textarea></div>
      <p class="small muted">Leave Value blank to use the package price. Status changes stamp "last contacted" automatically.</p>
    </div>
    <div class="modal-foot">
      ${p?`<button class="btn btn-danger" onclick="deleteProspect('${p.id}')">Delete</button>`:''}
      ${p?`<button class="btn btn-ghost" onclick="acqDraftFromProspect('${p.id}')">✉️ Draft Email</button>`:''}
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-gold" onclick="saveProspect('${p?p.id:''}')">${p?'Save Changes':'Add Prospect'}</button>
    </div>`);
}
function acqPackageChanged(){
  const pkg = acqPkg(document.getElementById('ap-package').value);
  const lbl = document.getElementById('ap-value-label'), inp = document.getElementById('ap-value');
  if(lbl) lbl.textContent = 'Value (£'+(pkg&&pkg.monthly?' / month':'')+')';
  if(inp){ inp.placeholder = pkg ? (pkg.monthly||pkg.oneOff) : ''; inp.value = ''; }
}
function saveProspect(id){
  if(!requireField('ap-business','Business name is required') || !checkEmailField('ap-email')) return;
  const val = id => document.getElementById(id).value;
  const website = val('ap-website').trim();
  const data = {
    business: val('ap-business').trim(),
    contact: val('ap-contact').trim(),
    type: val('ap-type'),
    source: val('ap-source'),
    phone: val('ap-phone').trim(),
    email: val('ap-email').trim(),
    website: website && !/^https?:\/\//i.test(website) ? 'https://'+website : website,
    package: val('ap-package'),
    value: Number(val('ap-value'))>0 ? Number(val('ap-value')) : null,
    notes: val('ap-notes').trim()
  };
  const status = val('ap-status');
  const lastContacted = val('ap-lastContacted');
  let p;
  if(id){
    p = acqProspects().find(x=>x.id===id);
    if(!p) return;
    Object.assign(p, data);
  } else {
    p = Object.assign({id:uid(), status:'Not Contacted', createdAt:localDateStr(), statusChangedAt:new Date().toISOString(), lastContacted:null, wonAt:null, callBookedAt:null}, data);
    acqProspects().push(p);
    logActivity('Prospect added', p.business);
  }
  const wasWon = p.status==='Won';
  acqSetStatus(p, status);
  if(lastContacted) p.lastContacted = lastContacted;
  p.updatedAt = new Date().toISOString();
  if(!wasWon && p.status==='Won') logActivity('Prospect won', p.business);
  save(); closeModal(); renderPage(); renderNav();
  toast(id ? (p.status==='Won'&&!wasWon ? p.business+' won 🎉' : 'Prospect updated') : 'Prospect added');
}
function deleteProspect(id){
  const p = acqProspects().find(x=>x.id===id);
  confirmDelete('Delete '+(p?p.business:'this prospect')+'?', "This can't be undone.", ()=>{
    DB.sfProspects = acqProspects().filter(x=>x.id!==id);
    save(); renderPage(); renderNav(); toast('Prospect deleted','🗑️');
  });
}

/* ---------- TAB: PROSPECTS LIST ---------- */
let ACQ_SEARCH = '';
let ACQ_SORT = {key:'updated', dir:-1};
const ACQ_TABLE_COLS = [
  ['business','Business'],['contact','Contact'],['type','Type'],['phone','Phone'],['email','Email'],['status','Status'],
  ['package','Package Interested In'],['source','Source'],['lastContacted','Last Contacted'],['value','Value'],['notes','Notes']
];
function acqListView(){
  return `
  <div class="toolbar">
    <div class="search-box">🔍<input type="text" placeholder="Search business, contact, notes…" value="${esc(ACQ_SEARCH)}" oninput="ACQ_SEARCH=this.value; renderAcqTable();"></div>
    <span class="small muted" id="acq-list-count"></span>
    <div class="spacer"></div>
    <button class="btn btn-ghost btn-sm" onclick="exportProspectsCSV()">⬇️ Export CSV</button>
    <button class="btn btn-gold btn-sm" onclick="openProspectModal()">+ Add Prospect</button>
  </div>
  <div class="card"><table class="acq-table">
    <thead><tr>${ACQ_TABLE_COLS.map(([k,l])=>`<th class="sortable ${ACQ_SORT.key===k?'sorted':''}" onclick="acqSortBy('${k}')">${l}${ACQ_SORT.key===k?(ACQ_SORT.dir>0?' ▲':' ▼'):''}</th>`).join('')}<th></th></tr></thead>
    <tbody id="acq-table-body"></tbody>
  </table></div>
  <p class="small muted mt-10">Row colours: <span style="color:#4ADE80;">won</span> · <span style="color:#FBBF24;">call booked</span> · <span style="color:#FCA5A5;">lost</span> · orange left edge = no update for 7+ days.</p>`;
}
function acqSortBy(k){ ACQ_SORT = {key:k, dir: ACQ_SORT.key===k ? -ACQ_SORT.dir : 1}; renderPage(); }
function acqSortValue(p, k){
  if(k==='value'){ const v = acqValue(p); return v.oneOff + v.monthly*12; }
  if(k==='status') return ACQ_STATUSES.indexOf(p.status);
  if(k==='package'){ const pkg = acqPkg(p.package); return pkg?pkg.label:''; }
  if(k==='updated') return p.updatedAt || p.statusChangedAt || p.createdAt || '';
  if(k==='lastContacted') return p.lastContacted || '';
  return String(p[k]||'').toLowerCase();
}
function acqFilteredSorted(){
  const q = ACQ_SEARCH.trim().toLowerCase();
  return acqProspects()
    .filter(p=>!q || [p.business,p.contact,p.type,p.email,p.phone,p.notes,p.source,p.status].join(' ').toLowerCase().includes(q))
    .slice().sort((a,b)=>{ const x=acqSortValue(a,ACQ_SORT.key), y=acqSortValue(b,ACQ_SORT.key); return (x>y?1:x<y?-1:0)*ACQ_SORT.dir; });
}
function renderAcqTable(){
  const body = document.getElementById('acq-table-body');
  if(!body) return;
  const rows = acqFilteredSorted();
  const countEl = document.getElementById('acq-list-count');
  if(countEl) countEl.textContent = rows.length+' of '+acqProspects().length;
  if(!rows.length){
    body.innerHTML = acqProspects().length ? emptyRow(12,'No prospects match that search.') : emptyRow(12,'No prospects yet.','+ Add Prospect','openProspectModal()');
    return;
  }
  body.innerHTML = rows.map(p=>{
    const cls = [p.status==='Won'?'acq-won':'', p.status==='Lost'?'acq-lost':'', p.status==='Call Booked'?'acq-booked':'', acqIsStale(p)?'acq-overdue':''].join(' ');
    const pkg = acqPkg(p.package);
    return `<tr class="${cls}">
      <td><strong>${esc(p.business)}</strong>${p.website?`<div class="small"><a href="${esc(p.website)}" target="_blank" rel="noopener" style="color:var(--teal);">${esc(p.website.replace(/^https?:\/\//i,'').replace(/\/$/,''))}</a></div>`:''}</td>
      <td>${esc(p.contact||'—')}</td>
      <td>${esc(p.type||'—')}</td>
      <td>${p.phone?`<a href="tel:${esc(p.phone)}" style="color:inherit;">${esc(p.phone)}</a>`:'—'}</td>
      <td>${p.email?`<a href="mailto:${esc(p.email)}" style="color:inherit;">${esc(p.email)}</a>`:'—'}</td>
      <td><select onchange="acqInlineStatus('${p.id}', this.value)">${ACQ_STATUSES.map(st=>`<option ${p.status===st?'selected':''}>${st}</option>`).join('')}</select></td>
      <td class="small">${pkg?esc(pkg.label):'—'}</td>
      <td class="small">${esc(p.source||'—')}</td>
      <td class="small">${p.lastContacted?fmtDate(p.lastContacted):'—'}</td>
      <td><strong>${acqValueLabel(p)}</strong></td>
      <td class="small muted"><div class="acq-notes" title="${esc(p.notes||'')}">${esc(p.notes||'—')}</div></td>
      <td><button class="icon-btn" aria-label="Edit prospect" onclick="openProspectModal('${p.id}')">✎</button><button class="icon-btn" aria-label="Delete prospect" onclick="deleteProspect('${p.id}')">✕</button></td>
    </tr>`;
  }).join('');
}
function acqInlineStatus(id, status){
  const p = acqProspects().find(x=>x.id===id);
  if(!p) return;
  const was = p.status;
  if(!acqSetStatus(p, status)) return;
  if(status==='Won' && was!=='Won') logActivity('Prospect won', p.business);
  save(); renderAcqTable(); renderNav();
  toast(status==='Won' ? p.business+' won 🎉' : p.business+' → '+status);
}
function csvCell(v){ v = v==null ? '' : String(v); return /[",\n\r]/.test(v) ? '"'+v.replace(/"/g,'""')+'"' : v; }
function exportProspectsCSV(){
  const rows = acqProspects();
  if(!rows.length){ toast('No prospects to export yet','⚠️'); return; }
  const head = ['Business','Contact','Type','Phone','Email','Website','Status','Package Interested In','Source','Last Contacted','Value (one-off £)','Value (monthly £)','Created','Won On','Notes'];
  const lines = [head.join(',')].concat(rows.map(p=>{
    const v = acqValue(p), pkg = acqPkg(p.package);
    return [p.business,p.contact,p.type,p.phone,p.email,p.website,p.status,pkg?pkg.label:'',p.source,p.lastContacted,v.oneOff||'',v.monthly||'',p.createdAt,p.wonAt,p.notes].map(csvCell).join(',');
  }));
  const blob = new Blob(['﻿'+lines.join('\r\n')], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'steadyflow-prospects-'+localDateStr()+'.csv';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 2000);
  toast('Exported '+rows.length+' prospect'+(rows.length===1?'':'s'));
}

/* ---------- TAB: EMAIL DRAFTS (template logic, no AI) ---------- */
const ACQ_GOALS = [
  ['cold','First cold outreach'],['noreply','Follow-up — no reply'],['aftercall','Follow-up after call'],
  ['proposal','Send proposal'],['proposalfu','Proposal follow-up'],['upsell','Upsell to retainer']
];
// Words/phrases the emails must never contain — swapped for plain English, including in typed input.
const ACQ_BANNED = [
  [/i hope this (e-?mail|message) finds you well[.,!]?\s*/gi,''],
  [/bespoke solutions?/gi,'custom work'],[/streamlined/gi,'simpler'],[/streamlining/gi,'simplifying'],[/streamline/gi,'simplify'],
  [/leveraging/gi,'using'],[/leverage/gi,'use'],[/seamlessly/gi,'smoothly'],[/seamless/gi,'smooth'],
  [/unlocking/gi,'opening up'],[/unlock/gi,'open up'],[/synergy|synergies/gi,'fit'],
  [/partnering with/gi,'working with'],[/partner with/gi,'work with'],[/excited to/gi,'keen to'],[/passionate/gi,'keen']
];
function acqClean(text){ let t = String(text||''); ACQ_BANNED.forEach(([re,sub])=>{ t = t.replace(re, sub); }); return t; }
// "Mills Plumbing's" but "Hartley & Co Estate Agents'"
function poss(name){ return /s$/i.test(name) ? name+"'" : name+"'s"; }
function acqWords(text){ return (String(text).match(/[A-Za-z0-9£'’&%-]+/g)||[]).length; }
const ACQ_SCENARIOS = [
  {title:'Cold email to estate agent with bad website', d:{name:'Sarah Hartley', business:'Hartley & Co Estate Agents', type:'Estate Agent', goal:'cold', noticed:'your property search is really hard to use on a phone and the valuation form is buried at the bottom of the page'}},
  {title:'Cold email to plumber with no website', d:{name:'Dave Mills', business:'Mills Plumbing & Heating', type:'Plumber', goal:'cold', noticed:'you have brilliant Google reviews but no website, just a Facebook page that was last updated in the spring'}},
  {title:'Follow-up after no reply', d:{name:'James Cole', business:'Cole Electrical', type:'Electrician', goal:'noreply', noticed:'your site takes about eight seconds to load on a phone and the call button doesn\'t work'}},
  {title:'Follow-up after discovery call', d:{name:'Priya Shah', business:'Shah Residential Lettings & Sales', type:'Estate Agent', goal:'aftercall', noticed:'most of your valuation requests still come in by phone because the online form keeps failing'}},
  {title:'Proposal follow-up', d:{name:'Mark Turner', business:'Turner Roofing', type:'Roofer', goal:'proposalfu', noticed:'there\'s still no way for someone to send photos of their roof when they ask for a quote'}},
  {title:'Upsell existing client to retainer', d:{name:'Lucy Grant', business:'Grant Building Services', type:'Builder', goal:'upsell', noticed:'the new project gallery is getting visits but your Google Business profile hasn\'t had a post since launch'}}
];
function acqDraftState(){
  if(!window._acqDraft) window._acqDraft = {prospectId:'', name:'', business:'', type:'Estate Agent', noticed:'', goal:'cold'};
  return window._acqDraft;
}
function acqDraftSet(k, v){ acqDraftState()[k] = v; }
function acqDraftFromProspect(id){
  const p = acqProspects().find(x=>x.id===id);
  if(!p) return;
  const goal = p.status==='Not Contacted' ? 'cold' : p.status==='Emailed'||p.status==='Called' ? 'noreply' : p.status==='Call Booked'||p.status==='Replied' ? 'aftercall' : (p.status==='Proposal Sent'||p.status==='Negotiating') ? 'proposalfu' : p.status==='Won' ? 'upsell' : 'cold';
  window._acqDraft = Object.assign(acqDraftState(), {prospectId:p.id, name:p.contact||'', business:p.business, type:ACQ_TYPES.includes(p.type)?p.type:'Other', goal});
  window._acqOut = null;
  closeModal();
  if(currentRoute!=='sf-acquisition'){ ACQ_TAB='email'; navigate('sf-acquisition'); } else setAcqTab('email');
  try{ localStorage.setItem('steadyworks_acq_tab','email'); }catch(e){}
}
function acqLoadScenario(i){
  const sc = ACQ_SCENARIOS[i]; if(!sc) return;
  window._acqDraft = Object.assign({prospectId:''}, sc.d);
  renderPage();
  acqGenerate(true);
}
function acqEmailView(){
  const d = acqDraftState();
  return `
  <div class="card-title">Ready-made scenarios <span class="small muted">Click to load and generate</span></div>
  <div class="acq-scenarios">
    ${ACQ_SCENARIOS.map((sc,i)=>`<button class="acq-scenario" onclick="acqLoadScenario(${i})"><div class="n">SCENARIO ${i+1}</div><div class="t">${esc(sc.title)}</div></button>`).join('')}
  </div>
  <div class="grid grid-2" style="align-items:start;">
    <div class="card">
      <div class="card-title">Email details</div>
      ${acqProspects().length?`<div class="form-group"><label>Load from a prospect (optional)</label><select onchange="if(this.value) acqDraftFromProspect(this.value)"><option value="">— Pick a prospect —</option>${acqProspects().slice().sort((a,b)=>String(a.business).localeCompare(String(b.business))).map(p=>`<option value="${p.id}" ${d.prospectId===p.id?'selected':''}>${esc(p.business)}${p.contact?' — '+esc(p.contact):''}</option>`).join('')}</select></div>`:''}
      <div class="form-row">
        <div class="form-group"><label>Prospect Name *</label><input id="ae-name" type="text" value="${esc(d.name)}" oninput="acqDraftSet('name',this.value)" placeholder="e.g. Sarah Hartley"></div>
        <div class="form-group"><label>Business Name *</label><input id="ae-business" type="text" value="${esc(d.business)}" oninput="acqDraftSet('business',this.value)"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Business Type</label><select id="ae-type" onchange="acqDraftSet('type',this.value)">${ACQ_TYPES.map(t=>`<option ${d.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
        <div class="form-group"><label>Email Goal</label><select id="ae-goal" onchange="acqDraftSet('goal',this.value)">${ACQ_GOALS.map(([k,l])=>`<option value="${k}" ${d.goal===k?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="form-group"><label>One thing I noticed about their business *</label><textarea id="ae-noticed" oninput="acqDraftSet('noticed',this.value)" placeholder="e.g. your property search doesn't work properly on a phone">${esc(d.noticed)}</textarea></div>
      <div class="flex gap-8" style="flex-wrap:wrap;">
        <button class="btn btn-gold" onclick="acqGenerate()">✨ Generate Email</button>
        <button class="btn btn-ghost" onclick="acqGenerateSms()">💬 Generate SMS Version</button>
      </div>
      <p class="small muted mt-10">Rules baked in: 120–180 words, opens with your observation, one line on what we do, a practical problem, a low-pressure ask. Buzzwords are swapped out automatically.</p>
    </div>
    <div class="card" id="acq-output">${emptyBlock('Fill in the details (or pick a scenario) and hit Generate.','','', '✉️')}</div>
  </div>`;
}
function acqObservation(raw){
  let t = acqClean(raw).trim().replace(/\s+/g,' ').replace(/[.!\s]+$/,'');
  t = t.replace(/^(i (just )?noticed( that)?|i saw( that)?|noticed( that)?|that)\s+/i,'');
  const first = t.split(' ')[0]||'';
  if(/^(your|you|you're|the|there|there's|it|it's|a|an|on|when|most|some|all|no|only|how|this|that|their|they|they're|nobody|none|every|its)$/i.test(first)) t = t.charAt(0).toLowerCase()+t.slice(1);
  return t;
}
function acqContext(type){
  const ea = type==='Estate Agent';
  const trade = {
    Plumber:{job:'a burst pipe', who:'plumbers'}, Electrician:{job:'a fuse board that keeps tripping', who:'electricians'},
    Roofer:{job:'a leak after a storm', who:'roofers'}, Builder:{job:'an extension they want quoting', who:'builders'},
    Other:{job:'a job that needs doing this week', who:'local businesses'}
  }[type] || {job:'a job that needs doing this week', who:'local businesses'};
  return {
    ea,
    audience: ea ? 'independent estate agents and local trades' : 'local '+trade.who+' and trades businesses',
    peers: ea ? 'independent agents' : trade.who,
    enquiry: ea ? 'valuation requests' : 'calls and quote requests',
    job: trade.job
  };
}
function acqProblem(ctx, noSite, short){
  if(ctx.ea){
    if(noSite) return short ? 'Without a site of your own, you sit next to every competitor on the portals.' : 'Most vendors look an agent up before they book a valuation, and without a site of your own you\'re relying on the portals, where you sit right next to every competitor in town.';
    return short ? 'Vendors check your site before booking a valuation, and a clunky one sends them elsewhere.' : 'Most vendors look you up before they book a valuation, and if the site feels slow or awkward on a phone, plenty of them quietly book the agent down the road instead. That\'s usually a quick fix: a faster site with a clear valuation form that lands straight in your inbox.';
  }
  if(noSite) return short ? 'People with '+ctx.job+' ring whoever looks established online first.' : 'When someone has '+ctx.job+', they search on their phone and ring the first business that looks established. Without a website, a lot of those calls go to whoever shows up first, even when your reviews are better.';
  return short ? 'People with '+ctx.job+' ring the first site that works on their phone.' : 'When someone has '+ctx.job+', they search on their phone, tap the first site that looks trustworthy and ring that number. If your site is slow or fiddly on a phone, that call goes to someone else, even when your reviews are better.';
}
function acqBuildEmail(d){
  const first = (d.name||'').trim().split(/\s+/)[0] || 'there';
  const biz = acqClean(d.business).trim();
  const obs = acqObservation(d.noticed);
  const ctx = acqContext(d.type);
  const noSite = /\b(no|don'?t have a|without a|haven'?t got a)\s+(website|site)\b|only (have )?a facebook|just a facebook/i.test(d.noticed||'');
  const P = {}; // paragraphs: opener, what we do + problem, optional extras, CTA
  const extras = [
    'We keep it simple: fixed prices, no long contracts, and you own everything we build.',
    'Happy to send over a couple of examples of work for similar '+ctx.peers+' first, if that\'s easier.',
    'It\'s usually a smaller job than people expect, and most of it can be done without taking up much of your time.'
  ];
  if(d.goal==='noreply'){
    P.open = `I had another look at ${biz} this morning, and the thing I mentioned last week still stands out: ${obs}.`;
    P.what = `As a quick reminder, I run Steadyflow, and we build websites and handle marketing for ${ctx.audience}.`;
    P.problem = acqProblem(ctx, noSite, false);
    P.cta = 'If it helps, I can record a two-minute video showing exactly what I\'d change, with no call needed. Just reply "yes" and I\'ll put it together. If now isn\'t the right time, no worries at all.';
  } else if(d.goal==='aftercall'){
    P.open = `Thanks for the chat earlier. I've been thinking about what we covered, especially that ${obs}.`;
    P.what = 'Just so it\'s all in one place: Steadyflow builds the site, sets up the enquiry forms and keeps the marketing ticking over, so it\'s one less job for you.';
    P.problem = acqProblem(ctx, noSite, false);
    P.cta = 'I\'ll put a short proposal together with fixed prices. Is there anything you\'d like me to include or leave out before I send it over?';
  } else if(d.goal==='proposal'){
    P.open = `While putting this together I had another look at ${biz}, and ${obs} is the first thing I'd fix.`;
    P.what = 'Attached is the proposal from Steadyflow covering the new website and the marketing to get it in front of the right people.';
    P.problem = `The aim is simple: more ${ctx.enquiry} coming straight to you, rather than going to whoever happens to rank above you this week.`;
    P.cta = 'Have a read when you get a minute. If anything doesn\'t fit, tell me and I\'ll adjust it, and I\'m happy to talk it through on a quick call if that\'s easier.';
  } else if(d.goal==='proposalfu'){
    P.open = `I was back on ${poss(biz)} site today, and the point I flagged is still there: ${obs}.`;
    P.what = 'Just checking the Steadyflow proposal landed okay. It covers the new site and the marketing to keep the enquiries coming in.';
    P.problem = `I know these things slip down the list when you're busy, but every month it stays as it is, ${ctx.enquiry} keep going to competitors who are easier to find.`;
    P.cta = 'Would a 10-minute call help to go through any questions? Or if the timing\'s wrong, just say so and I\'ll check back in a couple of months.';
  } else if(d.goal==='upsell'){
    P.open = `I was looking at ${poss(biz)} site this week and noticed ${obs}.`;
    P.what = 'Alongside building sites, Steadyflow runs monthly marketing for clients: regular posts, Google Business updates, review requests and a simple monthly report.';
    P.problem = 'A good site does its job when people can find it, but without regular activity it slowly slips down the search results and the enquiries tail off.';
    P.cta = 'Our Essentials plan is £300 a month on a rolling basis, with no long contract. Would you be open to a quick call to see whether it\'s worth it for you?';
    extras[0] = 'You\'d get one clear monthly update showing what was posted and how many enquiries came through.';
  } else {
    P.open = `I was looking at ${biz} this week and noticed ${obs}.`;
    P.what = `I run Steadyflow, a small studio that builds websites and handles marketing for ${ctx.audience}.`;
    P.problem = acqProblem(ctx, noSite, false);
    P.cta = 'Would a quick 10-minute call next week be useful? If it\'s not a priority right now, no problem at all, and I won\'t keep chasing.';
  }
  const greeting = `Hi ${first},`;
  const assemble = list => [greeting, P.open, P.what+' '+P.problem].concat(list.length?[list.join(' ')]:[]).concat([P.cta]).join('\n\n');
  const used = [];
  let text = assemble(used);
  for(const ex of extras){
    if(acqWords(text) >= 135) break;
    if(acqWords(assemble(used.concat([ex]))) <= 180){ used.push(ex); text = assemble(used); }
  }
  text = acqClean(text);
  const words = acqWords(text);
  const body = text + '\n\nCheers,\nLewis\nSteadyflow · l.thomas@steadyflowmarketing.agency';
  const subj = {
    cold:[`Quick question about ${biz}`, `${poss(biz)} website`, `Noticed something on ${poss(biz)} site`, `More ${ctx.ea?'valuations':'calls'} for ${biz}?`, `${first}, a quick idea`],
    noreply:[`Re: ${poss(biz)} website`, `Following up, ${first}`, `Worth a 2-minute video?`, `Still worth a look?`, `${biz}: one quick thing`],
    aftercall:[`Good to speak, ${first}`, `Next steps for ${biz}`, `Following up on our call`, `Proposal on its way`, `${biz}: what we covered`],
    proposal:[`Proposal for ${biz}`, `${biz}: your proposal from Steadyflow`, `Here's the plan for ${biz}`, `Proposal attached, ${first}`, `Website and marketing for ${biz}`],
    proposalfu:[`Did the proposal land okay?`, `${biz} proposal: any questions?`, `Quick check-in, ${first}`, `Re: Proposal for ${biz}`, `Still on your list?`],
    upsell:[`Keeping ${poss(biz)} site busy`, `A small idea for ${biz}`, `Getting more from your new website`, `${first}, quick thought on marketing`, `What's next for ${biz}`]
  }[d.goal] || [];
  return {body, words, subjects: subj.map(acqClean), cleaned: acqClean(d.noticed)!==String(d.noticed||'')};
}
function acqBuildSms(d){
  const first = (d.name||'').trim().split(/\s+/)[0] || 'there';
  const biz = acqClean(d.business).trim();
  const ctx = acqContext(d.type);
  const noSite = /\b(no|don'?t have a|without a)\s+(website|site)\b|facebook/i.test(d.noticed||'');
  let obs = acqObservation(d.noticed);
  const ask = {cold:'Worth a quick 10-min chat this week? No worries if not.', noreply:'Want me to send a 2-min video of what I\'d change? No worries if not.',
    aftercall:'Thanks for the chat. Proposal coming shortly, anything to add?', proposal:'Proposal\'s in your inbox. Happy to talk it through.',
    proposalfu:'Did the proposal land okay? Happy to answer any questions.', upsell:'Fancy a quick chat about keeping it busy each month? No pressure.'}[d.goal] || 'Worth a quick chat? No worries if not.';
  const build = (o, withProblem) => acqClean(`Hi ${first}, Lewis from Steadyflow. I noticed ${o} at ${biz}. ${withProblem?acqProblem(ctx,noSite,true)+' ':''}${ask}`);
  let sms = build(obs, true);
  if(acqWords(sms)>50) sms = build(obs, false);
  if(acqWords(sms)>50){ obs = obs.split(' ').slice(0,10).join(' ')+'…'; sms = build(obs, false); }
  return sms;
}
function acqGenerate(silent){
  const d = acqDraftState();
  const ok = requireField('ae-name','Add the prospect\'s name') && requireField('ae-business','Add the business name') && requireField('ae-noticed','Add one thing you noticed — the email opens with it');
  if(!ok) return;
  const out = acqBuildEmail(d);
  window._acqOut = Object.assign(window._acqOut||{}, out, {sms: window._acqOut && window._acqOut.forBiz===d.business ? window._acqOut.sms : null, forBiz:d.business});
  acqRenderOutput();
  if(!silent) toast('Email generated — '+out.words+' words');
}
function acqGenerateSms(){
  const d = acqDraftState();
  if(!requireField('ae-name','Add the prospect\'s name') || !requireField('ae-business','Add the business name') || !requireField('ae-noticed','Add one thing you noticed')) return;
  if(!window._acqOut || window._acqOut.forBiz!==d.business) window._acqOut = Object.assign(acqBuildEmail(d), {forBiz:d.business});
  window._acqOut.sms = acqBuildSms(d);
  acqRenderOutput();
  toast('SMS generated — '+acqWords(window._acqOut.sms)+' words');
}
function acqRenderOutput(){
  const box = document.getElementById('acq-output');
  const o = window._acqOut;
  if(!box || !o) return;
  const d = acqDraftState();
  const ok = o.words>=120 && o.words<=180;
  const prospect = d.prospectId ? acqProspects().find(p=>p.id===d.prospectId) : null;
  box.innerHTML = `
    <div class="card-title">Your email <span class="acq-wordcount ${ok?'ok':'bad'}">${o.words} words ${ok?'✓':'· aim for 120–180'}</span></div>
    ${o.cleaned?'<p class="small" style="color:var(--warning);margin-bottom:8px;">Swapped a buzzword out of your observation to keep it plain.</p>':''}
    <textarea id="acq-email-text" class="acq-email-out" oninput="window._acqOut.body=this.value">${esc(o.body)}</textarea>
    <div class="flex gap-8 mt-10" style="flex-wrap:wrap;">
      <button class="btn btn-gold btn-sm" onclick="acqCopy(document.getElementById('acq-email-text').value,'Email')">📋 Copy to Clipboard</button>
      ${prospect && prospect.email?`<a class="btn btn-ghost btn-sm" href="mailto:${esc(prospect.email)}?subject=${encodeURIComponent(o.subjects[0]||'')}&body=${encodeURIComponent(o.body)}">✉️ Open in Mail</a>`:''}
      ${prospect && ['Not Contacted','On Hold'].includes(prospect.status)?`<button class="btn btn-ghost btn-sm" onclick="acqMarkEmailed('${prospect.id}')">✓ Mark ${esc(prospect.business)} as Emailed</button>`:''}
    </div>
    <div class="divider"></div>
    <div class="card-title" style="margin-bottom:8px;">Subject line ideas</div>
    <ul class="acq-subjects" style="padding:0;">${o.subjects.map(sub=>`<li><span>${esc(sub)}</span><button class="icon-btn" title="Copy" onclick="acqCopy(${esc(JSON.stringify(sub))},'Subject line')">📋</button></li>`).join('')}</ul>
    ${o.sms?`<div class="divider"></div>
    <div class="card-title" style="margin-bottom:8px;">SMS version <span class="acq-wordcount ${acqWords(o.sms)<=50?'ok':'bad'}">${acqWords(o.sms)} words</span></div>
    <textarea id="acq-sms-text" style="min-height:90px;" oninput="window._acqOut.sms=this.value">${esc(o.sms)}</textarea>
    <button class="btn btn-ghost btn-sm mt-10" onclick="acqCopy(document.getElementById('acq-sms-text').value,'SMS')">📋 Copy SMS</button>`:''}`;
}
function acqCopy(text, label){
  const done = ()=>toast((label||'Text')+' copied to clipboard');
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(()=>acqCopyFallback(text, done));
  } else acqCopyFallback(text, done);
}
function acqCopyFallback(text, done){
  const ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); done(); }catch(e){ toast('Copy failed — select the text and copy manually','⚠️'); }
  ta.remove();
}
function acqMarkEmailed(id){
  const p = acqProspects().find(x=>x.id===id);
  if(!p || !acqSetStatus(p,'Emailed')) return;
  save(); acqRenderOutput(); renderNav();
  toast(p.business+' marked as Emailed');
}

/* ---------- TAB: OFFER BUILDER (decision tree) ---------- */
const ACQ_OFFER_PKGS = {
  'starter':{label:'Starter Website', oneOff:555}, 'growth-web':{label:'Growth Website', oneOff:780}, 'pro-web':{label:'Professional Website', oneOff:1200},
  'bos-essential':{label:'Business OS — Essential', oneOff:690}, 'bos-manager':{label:'Business OS — Business Manager', oneOff:990}, 'bos-ai':{label:'Business OS — AI Automation', oneOff:1395},
  'essentials':{label:'Essentials Retainer', monthly:300}, 'growth-ret':{label:'Growth Retainer', monthly:900}, 'full':{label:'Full Marketing', monthly:1500}
};
const ACQ_PROBLEMS = [['leads','Not enough leads'],['presence','Poor online presence'],['time','No time to market'],['competitors','Losing to competitors'],['starting','Just starting out'],['automate','Want to automate']];
function acqRecommend(i){
  const ea = i.type==='Estate Agent';
  const why = [];
  let pkgs;
  if(i.problem==='automate' && i.website==='decent'){
    pkgs = [ea ? 'bos-ai' : 'bos-manager'];
    why.push('Their website already does its job, so another site would be a hard sell. The real cost is time lost to admin and manual follow-up.');
    why.push(ea ? 'Agents juggle valuations, viewings and vendor updates, which is exactly what the AI Automation tier takes off their plate.' : 'Business Manager handles quotes, job tracking and follow-ups, which is where a busy trade loses hours every week.');
  } else if(i.website==='none'){
    const site = ea ? 'growth-web' : 'starter';
    const needsTraffic = i.social!=='decent' || i.problem==='leads' || i.problem==='competitors';
    pkgs = needsTraffic ? [site,'essentials'] : [site];
    why.push(ea ? 'With no website, vendors only find them on the portals, side by side with every competitor. Growth Website gives them listings and a proper valuation form, which Starter doesn\'t cover well enough for an agent.' : 'With no website, anyone searching for them finds competitors first. Starter Website is the quickest, lowest-risk way to fix that.');
    if(needsTraffic) why.push(i.social==='none' ? 'They\'ve got no social presence either, so a site on its own would sit there unseen. Bundling Essentials gets it posted about and found on Google from day one.' : 'Their social is weak, so pairing the site with Essentials means people actually see it.');
    else why.push('Their social is already decent, so they have an audience. They just need somewhere proper to send it. Keep it to the site and offer a retainer later.');
    if(i.problem==='automate'){ pkgs.push('bos-essential'); why.push('They want to automate, so add Business OS Essential to catch and follow up enquiries automatically.'); }
  } else if(i.website==='poor'){
    let site = ea ? ((i.problem==='competitors'||i.problem==='leads') ? 'pro-web' : 'growth-web') : (i.problem==='starting' ? 'starter' : 'growth-web');
    pkgs = [site];
    why.push(ea ? (site==='pro-web' ? (i.problem==='competitors' ? 'They\'re losing ground to competitors, and a poor site means vendors judge them on it.' : 'They need more instructions, and a poor site means vendors judge them on it before they ever book a valuation.')+' Professional Website gives them a polished site that can stand next to the big chains.' : 'Their current site is letting them down. Growth Website fixes the basics with fast listings and a clear valuation form.')
               : (site==='starter' ? 'They\'re just getting going, so keep the rebuild lean with Starter Website.' : 'Their site is putting customers off. Growth Website rebuilds it to load fast and get people ringing.'));
    if(i.social!=='decent'){ pkgs.push('essentials'); why.push('Their social is '+(i.social==='none'?'non-existent':'weak')+', so Essentials keeps the new site active and visible.'); }
    if(i.problem==='automate'){ pkgs.push('bos-essential'); why.push('Add Business OS Essential for the automation they asked about.'); }
  } else {
    if(i.social==='decent'){
      if(i.problem==='leads' || i.problem==='competitors'){ pkgs = [ea ? 'full' : 'growth-ret']; why.push('Site and social are both decent, so the gap is reach and consistency. '+(ea?'Full Marketing gives an agent the volume needed to win more valuations than the competition.':'Growth Retainer adds the regular activity and Google presence to turn a decent setup into steady enquiries.')); }
      else if(i.problem==='time'){ pkgs = ['growth-ret']; why.push('Their setup is fine. They just don\'t have time to run it. Growth Retainer hands the marketing over completely.'); }
      else { pkgs = ['essentials']; why.push('Things are in decent shape already, so lead with the lightest retainer and build trust before upselling.'); }
    } else {
      pkgs = [i.problem==='starting' ? 'essentials' : (ea && i.problem==='competitors' ? 'full' : 'growth-ret')];
      why.push('They already have a decent website, so don\'t pitch another one. The weak link is '+(i.social==='none'?'having no':'their weak')+' social presence, and nobody is being sent to the site.');
      why.push(pkgs[0]==='essentials' ? 'They\'re just starting out, so Essentials is the easy yes at £300/mo.' : pkgs[0]==='full' ? 'Agents losing to competitors need the full push, so lead with Full Marketing.' : 'Growth Retainer on its own is the right lead. It fixes the actual gap without asking them to rebuild anything.');
    }
  }
  return {pkgs, why};
}
function acqObjections(rec, i){
  const kinds = rec.pkgs.map(id=>id.startsWith('bos')?'bos':ACQ_OFFER_PKGS[id].monthly?'retainer':'site');
  const ea = i.type==='Estate Agent';
  const bank = {
    site:[
      ea ? ['"We get our instructions through Rightmove and Zoopla."','The portals show your properties, but vendors choose the agent. Most of them look you up before booking a valuation, and that\'s the moment your own site wins or loses it.']
         : ['"We get most of our work from word of mouth."','That\'s great, and it\'s exactly why the site matters. Even a referral googles you before ringing. A good site makes that recommendation stick instead of sending them to a competitor.'],
      ['"We can\'t afford it right now."', `It\'s a fixed one-off price${rec.pkgs.includes('starter')?' from £555':''}, no surprises. One extra ${ea?'instruction':'job'} usually covers it, and after that it\'s working for you every day.`],
      ['"I\'ve been burned by a web designer before."','Totally fair. Fixed price agreed upfront, live in a couple of weeks, and you own the site and domain outright. If you leave, everything goes with you.']
    ],
    retainer:[
      ['"We tried social media, it didn\'t do anything."','Usually that\'s because it was sporadic. Posting now and then won\'t do much. This is consistent, every week, tied to Google and your reviews, and you see the enquiries in a monthly report.'],
      ['"I don\'t want to be tied into a contract."','You\'re not. It\'s rolling monthly. If it isn\'t paying for itself you can stop, so the burden is on us to earn it every month.'],
      ['"How will I know it\'s working?"','You get one clear monthly update covering what went out, how many people found you and how many enquiries came through. No jargon.']
    ],
    bos:[
      ['"We\'ve got our own way of doing things."','Good, we build around it rather than replacing it. We map how you work now and automate the repetitive bits, nothing more.'],
      ['"My team won\'t use new software."','It\'s set up for them, we train them, and most of it runs in the background. Enquiries get answered and followed up without anyone remembering to do it.'],
      ['"Is it really worth the cost?"','Add up the hours spent chasing enquiries and admin each week. At even a few hours, it pays for itself within a couple of months, and it doesn\'t forget a follow-up.']
    ]
  };
  const order = Array.from(new Set(kinds));
  const out = [];
  bank[order[0]].forEach(x=>out.push(x));
  if(order[1]){ out[2] = bank[order[1]][0]; }
  return out.slice(0,3);
}
function acqBuildPitch(i){
  const rec = acqRecommend(i);
  const ea = i.type==='Estate Agent';
  const who = ea ? 'independent estate agents' : (i.type==='Other' ? 'local businesses' : 'local '+i.type.toLowerCase()+'s');
  const oneOff = rec.pkgs.reduce((s,id)=>s+(ACQ_OFFER_PKGS[id].oneOff||0),0);
  const monthly = rec.pkgs.reduce((s,id)=>s+(ACQ_OFFER_PKGS[id].monthly||0),0);
  const siteLine = {none:'your Google listing and socials', poor:'your website', decent:'your website, which is genuinely solid'}[i.website];
  const hook = {leads:'it isn\'t bringing many new enquiries in', presence:'you\'re quite hard to find when someone searches locally', time:'marketing looks like something you squeeze in when you can',
    competitors:'a couple of competitors nearby are showing up above you', starting:'you\'re just getting going, which is the best time to get this right', automate:'a lot of the enquiry follow-up looks manual'}[i.problem];
  const outcome = ea ? 'more valuation requests coming to you directly' : 'more calls and quote requests coming straight to your phone';
  const pkgNames = rec.pkgs.map(id=>ACQ_OFFER_PKGS[id].label);
  const priceLine = [oneOff?fmt(oneOff).replace('.00','')+' one-off':'', monthly?fmt(monthly).replace('.00','')+' a month':''].filter(Boolean).join(' plus ');
  return {
    rec, oneOff, monthly, total12: oneOff + monthly*12,
    opener: `"Hi [Name], it's Lewis from Steadyflow. I'll be quick, I know you're busy. I was looking at ${siteLine} and noticed ${hook}. I help ${who} with exactly that. Have you got two minutes, or is there a better time to call back?"`,
    objections: acqObjections(rec, i),
    pitch: `Most ${who} I speak to are great at the work itself but don't have the time to keep their online presence pulling its weight, and that's where enquiries leak away. What I'd suggest for you is ${pkgNames.join(' together with ')}. ${rec.pkgs.some(id=>!ACQ_OFFER_PKGS[id].monthly&&!id.startsWith('bos'))?'We build the site, get it fast and easy to use on a phone, and make sure every enquiry lands straight with you. ':''}${monthly?'Then each month we keep it active, posting, updating Google and asking happy customers for reviews, so people keep finding you. ':''}${rec.pkgs.some(id=>id.startsWith('bos'))?'We also automate the admin, so enquiries get answered and followed up without you chasing them. ':''}It's ${priceLine}, fixed, with no long contract, and the goal is simple: ${outcome}. Would it make sense to put a short proposal together for you?`
  };
}
function acqOfferState(){ if(!window._acqOffer) window._acqOffer = {type:'Estate Agent', website:'poor', social:'weak', problem:'leads'}; return window._acqOffer; }
function acqOfferView(){
  const o = acqOfferState();
  const sel = (id, opts, key) => `<select id="${id}" onchange="acqOfferState()['${key}']=this.value">${opts.map(([v,l])=>`<option value="${v}" ${o[key]===v?'selected':''}>${l}</option>`).join('')}</select>`;
  const priceRow = (l, p) => `<div class="row"><span>${l}</span><strong>${p}</strong></div>`;
  return `
  <div class="grid grid-2" style="align-items:start;">
    <div class="card">
      <div class="card-title">About the prospect</div>
      <div class="form-row">
        <div class="form-group"><label>Business type</label>${sel('ob-type', ACQ_TYPES.map(t=>[t,t]), 'type')}</div>
        <div class="form-group"><label>Do they have a website?</label>${sel('ob-website', [['none','No'],['poor','Yes, but poor'],['decent','Yes, decent']], 'website')}</div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Social media presence</label>${sel('ob-social', [['none','None'],['weak','Weak'],['decent','Decent']], 'social')}</div>
        <div class="form-group"><label>Their biggest problem</label>${sel('ob-problem', ACQ_PROBLEMS, 'problem')}</div>
      </div>
      <button class="btn btn-gold" onclick="acqBuildPitchClick()">🧭 Build My Pitch</button>
    </div>
    <div class="card acq-pitch" id="acq-pitch-out">${emptyBlock('Describe the prospect and hit Build My Pitch. You\'ll get the package to lead with, an opening line, objection handling and the 12-month value.','','','🧭')}</div>
  </div>
  <div class="card mt-10">
    <div class="card-title">Steadyflow pricing <span class="small muted">For reference on calls</span></div>
    <div class="acq-price-grid">
      <div><div class="small muted mb-10" style="font-weight:700;letter-spacing:.5px;">WEBSITES</div>${priceRow('Starter','£555')}${priceRow('Growth','£780')}${priceRow('Professional','£1,200')}</div>
      <div><div class="small muted mb-10" style="font-weight:700;letter-spacing:.5px;">BUSINESS OS</div>${priceRow('Essential','£690')}${priceRow('Business Manager','£990')}${priceRow('AI Automation','£1,395')}</div>
      <div><div class="small muted mb-10" style="font-weight:700;letter-spacing:.5px;">MONTHLY</div>${priceRow('Essentials','£300/mo')}${priceRow('Growth','£900/mo')}${priceRow('Full Marketing','£1,500/mo')}</div>
    </div>
  </div>`;
}
function acqBuildPitchClick(){
  window._acqPitch = acqBuildPitch(Object.assign({}, acqOfferState()));
  acqRenderPitch();
  toast('Pitch built');
}
function acqRenderPitch(){
  const box = document.getElementById('acq-pitch-out');
  const p = window._acqPitch;
  if(!box || !p) return;
  box.innerHTML = `
    <h4>Lead with</h4>
    <div>${p.rec.pkgs.map(id=>{ const k=ACQ_OFFER_PKGS[id]; return `<span class="acq-pkg">${esc(k.label)} · ${k.monthly?fmt(k.monthly).replace('.00','')+'/mo':fmt(k.oneOff).replace('.00','')}</span>`; }).join('')}</div>
    <h4>Why</h4>
    <ul style="padding-left:18px;">${p.rec.why.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>
    <h4>First 30 seconds of the call</h4>
    <p>${esc(p.opener)}</p>
    <h4>Top 3 objections</h4>
    <ol>${p.objections.map(([q,a])=>`<li><strong>${esc(q)}</strong><br><span class="muted">${esc(a)}</span></li>`).join('')}</ol>
    <h4>The pitch <span style="text-transform:none;letter-spacing:0;font-weight:500;">(read it out on the phone or in a meeting)</span></h4>
    <p>${esc(p.pitch)}</p>
    <div class="flex gap-8 mt-10"><button class="btn btn-ghost btn-sm" onclick="acqCopy(window._acqPitch.pitch,'Pitch')">📋 Copy pitch</button></div>
    <h4>12-month value to Steadyflow</h4>
    <div class="flex-between" style="flex-wrap:wrap;gap:8px;">
      <span class="small muted">${[p.oneOff?fmt(p.oneOff).replace('.00','')+' one-off':'', p.monthly?fmt(p.monthly).replace('.00','')+'/mo × 12 = '+fmt(p.monthly*12).replace('.00',''):''].filter(Boolean).join(' + ')}</span>
      <span style="font-size:24px;font-weight:800;color:var(--success);">${fmt(p.total12).replace('.00','')}</span>
    </div>`;
}

/* ---------- TAB: WEEKLY PLANNER ---------- */
function acqTogglePlanner(day, key){
  const w = acqWeekly();
  w.days[day] = w.days[day] || {};
  w.days[day][key] = !w.days[day][key];
  w.updatedAt = new Date().toISOString();
  acqWeekly();
  save(); renderPage();
  const act = ACQ_PLANNER.find(a=>a.key===key);
  toast(w.days[day][key] ? act.label+' done for '+ACQ_DAYS.find(d=>d[0]===day)[1] : act.label+' un-ticked', w.days[day][key]?'✓':'↺');
}
function acqPlannerMessage(won, dow, ticks){
  if(won>=ACQ_WEEKLY_TARGET) return ['good', `🔥 ${won} clients won this week — target smashed. Bank it, then line up next week's prospects.`];
  if(dow>=4 && won===0) return ['push', `🚨 It's Friday and no clients are signed yet. Stop prospecting new names: ring every Replied, Call Booked and Proposal Sent lead today and ask for the decision.`];
  if(dow>=2 && won===0) return ['warn', `⚠️ It's ${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][dow]} with 0 clients won. Prioritise follow-ups on warm leads before sending more cold emails.`];
  if(won>0) return ['', `${won} down, ${ACQ_WEEKLY_TARGET-won} to go. ${ticks>=dow*3+3?'Activity is on track, so keep the calls going.':'Keep the daily activity up. Calls convert fastest.'}`];
  return ['', ticks ? 'Good start. Activity creates the wins, so keep ticking the days off.' : 'New week, clean slate. 30 emails, 20 DMs and 10 calls a day gets you to 4 clients.'];
}
function acqPlannerView(){
  const w = acqWeekly();
  const dow = (new Date().getDay()+6)%7;
  const won = w.clientsWon;
  let ticks = 0;
  const days = ACQ_DAYS.map(([key,label],i)=>{
    const st = w.days[key] || {};
    const date = new Date(acqWeekStart().getTime()+i*86400000);
    const doneCt = ACQ_PLANNER.filter(a=>st[a.key]).length;
    ticks += doneCt;
    return `<div class="acq-day ${i===dow?'today':''} ${i<dow?'past':''}">
      <div class="flex-between"><h3>${label}</h3><span class="small muted">${date.toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</span></div>
      <div class="small muted">${doneCt}/3 done${i===dow?' · today':''}</div>
      ${ACQ_PLANNER.map(a=>`<label class="acq-task ${st[a.key]?'done':''}"><input type="checkbox" ${st[a.key]?'checked':''} onchange="acqTogglePlanner('${key}','${a.key}')"><span>${a.icon} ${a.target} ${a.key==='dms'?'DMs':a.label.toLowerCase()}</span></label>`).join('')}
    </div>`;
  }).join('');
  const [tone, msg] = acqPlannerMessage(won, Math.min(dow,4), ticks);
  const summary = ACQ_PLANNER.map(a=>{ const n = ACQ_DAYS.filter(([d])=>w.days[d]&&w.days[d][a.key]).length; return `<span class="tag-chip">${a.icon} ${a.label}: ${n}/5 days · ${n*a.target} sent</span>`; }).join('');
  return `
  <div class="card mb-10 flex-between" style="flex-wrap:wrap;gap:10px;">
    <div><div class="card-title" style="margin-bottom:4px;">Week of ${acqWeekStart().toLocaleDateString('en-GB',{day:'numeric',month:'long'})}</div><div class="small muted">Tick each activity once the day's target is done. Resets automatically every Monday.</div></div>
    <div>${summary}</div>
  </div>
  <div class="acq-week">${days}</div>
  <div class="card mt-10">
    <div class="card-title">Clients won this week</div>
    <div class="acq-target mb-10">
      <div class="acq-target-count" style="color:${won>=ACQ_WEEKLY_TARGET?'var(--success)':'var(--text)'};">${won} / ${ACQ_WEEKLY_TARGET}</div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${Math.min(100,won/ACQ_WEEKLY_TARGET*100)}%;${won>=ACQ_WEEKLY_TARGET?'background:var(--success);':''}"></div></div>
    </div>
    <div class="acq-banner ${tone}">${msg}</div>
    <p class="small muted mt-10">Counts prospects moved to <strong>Won</strong> since Monday — update them on the Pipeline or Prospects List tabs.</p>
  </div>`;
}

/* ===================== TARGETS — GROWTH & EXECUTION SYSTEM ===================== */
/* ENGINE. Every function below is pure: it takes the data (db) and the moment
   it is evaluated (now) as arguments and never touches the DOM, so results are
   deterministic and covered by tests/targets.test.html.

   Model (all arrays merge by id like the rest of the app):
     tgPayments   money actually received — the ONLY thing that counts as revenue
     tgCycles     closed weekly cycles — immutable snapshots (corrections are logged)
     tgOverrides  manual target overrides (calculated target is always kept too)
     tgAcqSpend   customer-acquisition spend
     tgOwnerPay   owner pay records (never revenue)
     tgExpansion  expansion investments + reward money moved into the pot
     tgRewards    personal rewards attached to levels / gates
     tgMissions   weekly missions
     tgReviews    expansion reviews
     tgDecisions  approve/dismiss decisions on recommendations
     tgAudit      audit trail for ledger edits and history corrections
   Settings live in db.targets. */

const TG_BIZ = {
  sw:{key:'sw', name:'SteadyWorks', short:'SW', color:'#E11D2A', unit:'job', units:'jobs', desc:'Plumbing, maintenance, property services & trade work'},
  sf:{key:'sf', name:'SteadyFlow', short:'SF', color:'#00E5CC', unit:'client', units:'clients', desc:'Web design, marketing, automation & digital services'}
};
const TG_PAYMENT_TYPES = [['deposit','Deposit'],['stage','Stage payment'],['final','Final payment'],['retainer','Retainer'],['other','Other income'],['refund','Refund / reversal']];
const TG_EXP_CATEGORIES = ['Marketing','Tools','Equipment','Vehicle','Software','Automation','Staff','Subcontractors','Freelancers','Training','Systems','Stock/materials','Other'];
const TG_ACQ_CHANNELS = ['Google Ads','Facebook / Instagram','Checkatrade / MyJobQuote','Cold email','Cold calling','LinkedIn','Leaflets / print','Referral reward','Directory listing','Other'];
// Expense categories already covered by acquisition spend — left out of operating costs so ad money isn't counted twice.
const TG_ACQ_EXPENSE_CATS = ['Advertising','Ad Spend'];

function tgDefaults(){
  return {
    weekStartDay:1, ownerPayWeekly:250, acqPct:20, growthPct:50, levelsPerGate:2, expansionPct:10,
    startTargets:{sw:500, sf:1000}, startedWeek:'', objective:'gross', road50kGoal:50000,
    capacity:{
      sw:{avgJobValue:'', conversion:'', jobsPerDay:1, workingDays:5, subcontractorJobs:0, adminHours:5, notes:''},
      sf:{avgClientValue:'', conversion:'', buildsPerWeek:2, hoursPerBuild:12, hoursPerWeek:40, freelancerBuilds:0, notes:''}
    },
    dailyDone:{}
  };
}
function tgSettings(db){
  const d = tgDefaults();
  const t = Object.assign(d, db.targets||{});
  t.startTargets = Object.assign({}, d.startTargets, (db.targets||{}).startTargets||{});
  const cap = (db.targets||{}).capacity||{};
  t.capacity = {sw:Object.assign({}, d.capacity.sw, cap.sw||{}), sf:Object.assign({}, d.capacity.sf, cap.sf||{})};
  t.dailyDone = t.dailyDone || {};
  db.targets = t;
  return t;
}
function tgArr(db, k){ if(!Array.isArray(db[k])) db[k] = []; return db[k]; }
function tgRound(n){ return Math.round((Number(n)||0)*100)/100; }

/* ---------- dates (local, 'YYYY-MM-DD') ---------- */
function tgDate(ds){ const [y,m,d] = String(ds).split('-').map(Number); return new Date(y, (m||1)-1, d||1, 12); }
function tgAddDays(ds, n){ const d = tgDate(ds); d.setDate(d.getDate()+n); return localDateStr(d); }
function tgToday(now){ return localDateStr(now||new Date()); }
function tgWeekStart(ds, startDay){ const d = tgDate(ds); const diff = (d.getDay() - (startDay==null?1:startDay) + 7) % 7; d.setDate(d.getDate()-diff); return localDateStr(d); }
function tgDaysBetween(a, b){ return Math.round((tgDate(b)-tgDate(a))/86400000); }
function tgInRange(ds, start, end){ return !!ds && ds>=start && ds<=end; }

/* ---------- revenue (received money only) ---------- */
function tgLivePayments(db){ return tgArr(db,'tgPayments').filter(p=>!p.removed); }
function tgRevenue(db, biz, start, end){
  return tgRound(tgLivePayments(db).filter(p=>(biz==='all'||p.biz===biz) && tgInRange(p.date,start,end)).reduce((s,p)=>s+(Number(p.amount)||0),0));
}
function tgRevenueByType(db, biz, start, end, type){
  return tgRound(tgLivePayments(db).filter(p=>(biz==='all'||p.biz===biz) && p.type===type && tgInRange(p.date,start,end)).reduce((s,p)=>s+(Number(p.amount)||0),0));
}
// Money already linked to one source record (invoice / pipeline job) — used to stop double counting.
function tgLinkedTotal(db, sourceKey, exceptId){
  return tgRound(tgLivePayments(db).filter(p=>p.sourceKey===sourceKey && p.id!==exceptId).reduce((s,p)=>s+(Number(p.amount)||0),0));
}
// How much an invoice has actually been paid: a 'paid' invoice counts as its full total.
function tgInvoiceReceived(inv){
  const total = calcInvoiceTotal(inv).total;
  const paid = Number(inv.amountPaid)||0;
  return tgRound(inv.status==='paid' ? Math.max(total, paid) : Math.min(paid, Math.max(total, paid)));
}
/* Creates (at most) one payment for the newly-received part of an invoice. The id
   encodes the cumulative amount received, so two devices syncing the same change
   produce the same record instead of a duplicate. */
function tgSyncInvoicePayment(db, kind, inv, now, opts){
  if(!inv || !inv.id) return null;
  opts = opts||{};
  const biz = kind==='sf' ? 'sf' : 'sw';
  const sourceKey = (kind==='sf'?'sfinv:':'inv:')+inv.id;
  const received = tgInvoiceReceived(inv);
  const linked = tgLinkedTotal(db, sourceKey);
  // With prevReceived (normal saves) only the change made in this save is new money —
  // anything paid before the ledger existed is left for the dated import instead.
  let delta = opts.prevReceived!=null ? tgRound(received - opts.prevReceived) : tgRound(received - linked);
  if(delta<0) delta = -Math.min(-delta, linked); // can only reverse money we've recorded
  if(Math.abs(delta) < 0.01) return null;
  const total = calcInvoiceTotal(inv).total;
  const id = 'pay-'+sourceKey.replace(':','-')+'-'+Math.round(received*100)+(opts.estimated?'-imp':'')+(delta<0?'-rev':'');
  if(tgArr(db,'tgPayments').some(p=>p.id===id)) return null;
  let type;
  if(delta<0) type = 'refund';
  else if(kind==='sf'){ const c = (db.sfClients||[]).find(x=>x.id===inv.clientId); type = c && c.billingType!=='one-off' ? 'retainer' : (received>=total-0.01 ? (linked>0?'final':'final') : (linked>0?'stage':'deposit')); }
  else type = received>=total-0.01 ? 'final' : (linked>0 ? 'stage' : 'deposit');
  const job = inv.jobId ? (db.jobs||[]).find(j=>j.id===inv.jobId) : null;
  const pay = {id, biz, amount:delta, date: opts.date || tgToday(now), type,
    customer: kind==='sf' ? (inv.clientName||'') : (inv.customerName||''),
    job: job ? job.jobNumber : (inv.invoiceNumber||''), sourceType: kind==='sf'?'SteadyFlow invoice':'Invoice', sourceKey,
    sourceLabel: inv.invoiceNumber||'', manual:false, estimated: !!opts.estimated, channel:'', notes: opts.note||'',
    createdAt: (now||new Date()).toISOString()};
  db.tgPayments.push(pay);
  return pay;
}
// Quote-to-Job Pipeline: deposit when marked taken, balance when marked paid. Fixed ids — never duplicated.
function tgSyncPaintPayment(db, rec, now, prevStatus){
  if(!rec || !rec.id) return [];
  // Only react to a status change made now — deposits taken before the ledger existed aren't re-dated to today.
  if(prevStatus===rec.depositStatus) return [];
  const made = [];
  const value = Number(rec.quoteValue)||0;
  const depAmt = tgRound(value*(Number(rec.depositPct)||0)/100);
  const sourceKey = 'paint:'+rec.id;
  const list = tgArr(db,'tgPayments');
  const add = (suffix, amount, type)=>{
    const id = 'pay-paint-'+suffix+'-'+rec.id;
    if(list.some(p=>p.id===id) || amount<=0) return;
    const p = {id, biz:'sw', amount:tgRound(amount), date:tgToday(now), type, customer:rec.clientName||'', job:'Pipeline — '+(rec.clientName||''),
      sourceType:'Quote-to-Job Pipeline', sourceKey, sourceLabel:rec.clientName||'', manual:false, estimated:false, channel:rec.leadSource||'',
      notes:(rec.jobType||'joint')==='joint'?'Joint job with Fabs — full amount received by SteadyWorks':'', createdAt:(now||new Date()).toISOString()};
    list.push(p); made.push(p);
  };
  const hadDeposit = prevStatus==='taken' || prevStatus==='balance_paid';
  if((rec.depositStatus==='taken' || rec.depositStatus==='balance_paid') && !hadDeposit) add('dep', depAmt, 'deposit');
  if(rec.depositStatus==='balance_paid' && prevStatus!=='balance_paid') add('fin', value - Math.max(tgLinkedTotal(db, sourceKey), hadDeposit?depAmt:0), 'final');
  return made;
}
// Validates a manual / edited payment. Returns an error string or ''.
function tgValidatePayment(db, p, editingId){
  const amt = Number(p.amount);
  if(!p.biz || !TG_BIZ[p.biz]) return 'Pick which business received this money';
  if(!p.date) return 'Add the date the money was received';
  if(!isFinite(amt) || amt===0) return 'Enter an amount';
  if(amt<0 && p.type!=='refund') return 'Negative amounts are only allowed for refunds / reversals';
  if(amt>0 && p.type==='refund') return 'Refunds should be entered as a negative amount';
  if(p.sourceKey){
    const cap = tgSourceCap(db, p.sourceKey);
    if(cap!=null && tgLinkedTotal(db, p.sourceKey, editingId) + amt > cap + 0.01) return 'That would count more than '+gbp(cap)+' against '+(p.sourceLabel||'this record')+' — it\'s already been recorded';
  }
  return '';
}
function tgSourceCap(db, sourceKey){
  const [kind, id] = String(sourceKey).split(':');
  if(kind==='inv'){ const inv = (db.invoices||[]).find(i=>i.id===id); return inv ? calcInvoiceTotal(inv).total : null; }
  if(kind==='sfinv'){ const inv = (db.sfInvoices||[]).find(i=>i.id===id); return inv ? calcInvoiceTotal(inv).total : null; }
  return null;
}

/* ---------- costs, owner pay ---------- */
// Acquisition spend = entries logged in Targets + any Expense in an advertising category.
// (Ad expenses are left out of operating costs, so nothing is counted twice.)
function tgAcqSpend(db, biz, start, end){
  const logged = tgArr(db,'tgAcqSpend').filter(a=>(biz==='all'||a.biz===biz) && tgInRange(a.date,start,end)).reduce((s,a)=>s+(Number(a.amount)||0),0);
  const ads = list => (list||[]).filter(e=>TG_ACQ_EXPENSE_CATS.includes(e.category) && tgInRange(String(e.date||'').slice(0,10),start,end)).reduce((s,e)=>s+(Number(e.amount)||0),0);
  return tgRound(logged + (biz==='sf'?0:ads(db.expenses)) + (biz==='sw'?0:ads(db.sfExpenses)));
}
function tgOpCosts(db, biz, start, end){
  const sum = list => (list||[]).filter(e=>tgInRange(String(e.date||'').slice(0,10),start,end) && !TG_ACQ_EXPENSE_CATS.includes(e.category)).reduce((s,e)=>s+(Number(e.amount)||0),0);
  return tgRound((biz==='sf'?0:sum(db.expenses)) + (biz==='sw'?0:sum(db.sfExpenses)));
}
function tgOwnerPaid(db, biz, start, end, statuses){
  statuses = statuses || ['taken','partial'];
  return tgRound(tgArr(db,'tgOwnerPay').filter(o=>(biz==='all'||o.biz===biz||(!o.biz&&biz==='all')) && statuses.includes(o.status) && tgInRange(o.date,start,end)).reduce((s,o)=>s+(Number(o.amount)||0),0));
}
function tgOwnerPayWeek(db, weekStart){
  const s = tgSettings(db);
  const end = tgAddDays(weekStart, 6);
  const taken = tgOwnerPaid(db, 'all', weekStart, end, ['taken','partial']);
  const scheduled = tgOwnerPaid(db, 'all', weekStart, end, ['scheduled']);
  const req = Number(s.ownerPayWeekly)||0;
  const status = taken>=req-0.01 && req>0 ? 'Taken' : taken>0 ? 'Partially taken' : scheduled>0 ? 'Scheduled' : 'Not taken';
  return {requirement:req, taken, scheduled, remaining:tgRound(Math.max(0, req-taken)), status};
}
function tgExpansionSpent(db, biz, start, end){ return tgRound(tgArr(db,'tgExpansion').filter(x=>x.kind!=='topup' && x.status==='spent' && (biz==='all'||x.biz===biz) && tgInRange(x.date,start,end)).reduce((s,x)=>s+(Number(x.amount)||0),0)); }
function tgRewardsClaimed(db, biz, start, end){ return tgRound(tgArr(db,'tgRewards').filter(r=>r.status==='claimed' && (biz==='all'||r.biz===biz||r.biz==='combined') && tgInRange(r.claimedAt,start,end)).reduce((s,r)=>s+(Number(r.cost)||0),0)); }

/* ---------- acquisition budget (20% is a ceiling, not an instruction) ---------- */
function tgAcquisition(db, biz, start, end){
  const s = tgSettings(db);
  const revenue = tgRevenue(db, biz, start, end);
  const spend = tgAcqSpend(db, biz, start, end);
  const entries = tgArr(db,'tgAcqSpend').filter(a=>(biz==='all'||a.biz===biz) && tgInRange(a.date,start,end));
  const leads = entries.reduce((x,a)=>x+(Number(a.leads)||0),0);
  const sales = entries.reduce((x,a)=>x+(Number(a.sales)||0),0);
  const channels = new Set(entries.map(a=>a.channel).filter(Boolean));
  const attributed = tgRound(tgLivePayments(db).filter(p=>(biz==='all'||p.biz===biz) && tgInRange(p.date,start,end) && p.channel && channels.has(p.channel)).reduce((x,p)=>x+(Number(p.amount)||0),0));
  const max = tgRound(Math.max(0,revenue) * (Number(s.acqPct)||0)/100);
  return {revenue, max, spend, unused:tgRound(Math.max(0, max-spend)), over:tgRound(Math.max(0, spend-max)),
    pct: revenue>0 ? spend/revenue*100 : null, leads, sales,
    costPerLead: leads ? tgRound(spend/leads) : null, costPerSale: sales ? tgRound(spend/sales) : null,
    attributed, roas: spend>0 && attributed>0 ? attributed/spend : null};
}

/* ---------- levels, targets, overrides ---------- */
function tgCyclesFor(db, biz){ return tgArr(db,'tgCycles').filter(c=>c.biz===biz).sort((a,b)=>a.startDate.localeCompare(b.startDate)); }
function tgLevelsCompleted(db, biz){ return tgCyclesFor(db, biz).filter(c=>c.levelCompleted).length; }
function tgCalcTarget(db, biz, level){
  const s = tgSettings(db);
  return tgRound((Number(s.startTargets[biz])||0) * Math.pow(1+(Number(s.growthPct)||0)/100, Math.max(0, level-1)));
}
function tgActiveOverride(db, biz, weekKey){
  return tgArr(db,'tgOverrides').filter(o=>o.biz===biz && o.active!==false && o.effectiveWeek<=weekKey && (!o.expires || o.expires>=weekKey))
    .sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)))[0] || null;
}
function tgStartedWeek(db, now){
  const s = tgSettings(db);
  if(!s.startedWeek) s.startedWeek = tgWeekStart(tgToday(now), s.weekStartDay);
  return s.startedWeek;
}
/* The open cycle runs from the day after the last closed cycle to the end of that
   week. After an early close (mid-week) it runs to the end of the FOLLOWING week,
   so no received money ever falls between two cycles or into two cycles. */
function tgOpenBounds(db, biz, now){
  const s = tgSettings(db);
  const closed = tgCyclesFor(db, biz);
  const last = closed[closed.length-1];
  const start = last ? tgAddDays(last.endDate, 1) : tgStartedWeek(db, now);
  const ws = tgWeekStart(start, s.weekStartDay);
  let end = tgAddDays(ws, 6);
  if(start!==ws) end = tgAddDays(end, 7);
  return {startDate:start, endDate:end, weekKey:ws};
}
function tgState(db, biz, now){
  const s = tgSettings(db);
  const b = tgOpenBounds(db, biz, now);
  const levelsDone = tgLevelsCompleted(db, biz);
  const level = levelsDone + 1;
  const calcTarget = tgCalcTarget(db, biz, level);
  const ov = tgActiveOverride(db, biz, b.weekKey);
  const target = ov ? tgRound(ov.amount) : calcTarget;
  const revenue = tgRevenue(db, biz, b.startDate, b.endDate);
  const per = Number(s.levelsPerGate)||2;
  return {biz, level, levelsDone, calcTarget, override:ov, target, revenue, ...b,
    pct: target>0 ? revenue/target*100 : 0, remaining: tgRound(Math.max(0, target-revenue)), surplus: tgRound(Math.max(0, revenue-target)),
    achieved: target>0 && revenue>=target-0.005, nextTarget: tgCalcTarget(db, biz, level+1),
    gatesUnlocked: Math.floor(levelsDone/per), levelsToGate: per - (levelsDone % per)};
}
// Where you should roughly be by now (calendar days, inclusive of today).
function tgPace(state, now){
  const today = tgToday(now);
  const total = tgDaysBetween(state.startDate, state.endDate) + 1;
  if(today < state.startDate) return {status:'NOT STARTED', daysLeft:total, expected:0, requiredDaily: tgRound(state.target/total)};
  const elapsed = Math.min(total, tgDaysBetween(state.startDate, today) + 1);
  const daysLeft = Math.max(0, total - elapsed + 1); // today still counts
  const expected = state.target * (elapsed/total);
  let status;
  if(state.achieved) status = 'TARGET ACHIEVED';
  else if(today > state.endDate) status = 'MISSED';
  else if(state.revenue >= expected*1.1) status = 'AHEAD';
  else if(state.revenue >= expected*0.85 || elapsed===1) status = 'ON PACE';
  else status = 'BEHIND';
  return {status, daysLeft, elapsed, total, expected:tgRound(expected), requiredDaily: daysLeft ? tgRound(state.remaining/daysLeft) : state.remaining};
}
function tgCycleSnapshot(db, biz, b, now, extra){
  const s = tgSettings(db);
  const levelsDone = tgLevelsCompleted(db, biz);
  const level = levelsDone + 1;
  const calcTarget = tgCalcTarget(db, biz, level);
  const ov = tgActiveOverride(db, biz, b.weekKey || tgWeekStart(b.startDate, s.weekStartDay));
  const target = ov ? tgRound(ov.amount) : calcTarget;
  const revenue = tgRevenue(db, biz, b.startDate, b.endDate);
  const acq = tgAcqSpend(db, biz, b.startDate, b.endDate);
  const ops = tgOpCosts(db, biz, b.startDate, b.endDate);
  const owner = tgOwnerPaid(db, biz, b.startDate, b.endDate);
  const exp = tgExpansionSpent(db, biz, b.startDate, b.endDate);
  const achieved = target>0 && revenue >= target-0.005;
  const per = Number(s.levelsPerGate)||2;
  const missions = tgArr(db,'tgMissions').filter(m=>m.biz===biz && m.weekKey>=tgWeekStart(b.startDate,s.weekStartDay) && m.weekKey<=b.endDate && !m.removed);
  const paymentsCt = tgLivePayments(db).filter(p=>p.biz===biz && tgInRange(p.date,b.startDate,b.endDate) && p.amount>0).length;
  return Object.assign({
    id:'cyc-'+biz+'-'+b.startDate, biz, startDate:b.startDate, endDate:b.endDate, level,
    calcTarget, overrideTarget: ov ? tgRound(ov.amount) : null, overrideId: ov ? ov.id : null, overrideReason: ov ? ov.reason : '',
    target, revenue, deposits: tgRevenueByType(db,biz,b.startDate,b.endDate,'deposit'), finals: tgRevenueByType(db,biz,b.startDate,b.endDate,'final'),
    acqSpend:acq, acqMax: tgRound(Math.max(0,revenue)*(Number(s.acqPct)||0)/100), opCosts:ops, ownerPay:owner, expansionSpend:exp,
    retained: tgRound(revenue - acq - ops - owner - exp), avgSale: paymentsCt ? tgRound(revenue/paymentsCt) : 0,
    missionsDone: missions.filter(m=>m.done).length, missionsTotal: missions.length,
    achieved, levelCompleted: achieved, nextTarget: achieved ? tgCalcTarget(db, biz, level+1) : calcTarget,
    gateUnlocked: achieved && ((levelsDone+1) % per === 0), gateNumber: achieved && ((levelsDone+1) % per === 0) ? (levelsDone+1)/per : null,
    expansionAccrued: tgRound(Math.max(0,revenue) * (Number(s.expansionPct)||0)/100),
    earlyClose:false, closedAt:(now||new Date()).toISOString(), ack: !achieved, corrections:[], notes:''
  }, extra||{});
}
// Closes every cycle whose end date has passed. Safe to call any number of times.
function tgCloseDueCycles(db, now){
  const closedNow = [];
  ['sw','sf'].forEach(biz=>{
    let guard = 0;
    while(guard++ < 520){
      const b = tgOpenBounds(db, biz, now);
      if(tgToday(now) <= b.endDate) break;
      const snap = tgCycleSnapshot(db, biz, b, now);
      if(tgArr(db,'tgCycles').some(c=>c.id===snap.id)) break; // already closed elsewhere
      db.tgCycles.push(snap); closedNow.push(snap);
    }
  });
  if(closedNow.length) tgUnlockRewards(db, now);
  return closedNow;
}
// Completing early is only offered once the target is actually hit.
function tgCloseEarly(db, biz, now){
  const st = tgState(db, biz, now);
  if(!st.achieved) return {error:'The target hasn\'t been reached yet'};
  const today = tgToday(now);
  const b = {startDate:st.startDate, endDate: today < st.endDate ? today : st.endDate, weekKey:st.weekKey};
  const snap = tgCycleSnapshot(db, biz, b, now, {earlyClose: today < st.endDate});
  if(tgArr(db,'tgCycles').some(c=>c.id===snap.id)) return {error:'This cycle is already closed'};
  db.tgCycles.push(snap);
  tgUnlockRewards(db, now);
  return {cycle:snap};
}

/* ---------- expansion pot ---------- */
function tgExpansionPot(db, biz){
  const s = tgSettings(db);
  const per = Number(s.levelsPerGate)||2;
  const cycles = biz==='all' ? tgArr(db,'tgCycles').slice() : tgCyclesFor(db, biz);
  // Money accrues every cycle but only becomes spendable once a gate is unlocked.
  let unlocked = 0, pending = 0;
  ['sw','sf'].filter(k=>biz==='all'||k===biz).forEach(k=>{
    const cs = tgCyclesFor(db,k);
    let lastGateIdx = -1;
    cs.forEach((c,i)=>{ if(c.gateUnlocked) lastGateIdx = i; });
    cs.forEach((c,i)=>{ if(i<=lastGateIdx) unlocked += Number(c.expansionAccrued)||0; else pending += Number(c.expansionAccrued)||0; });
  });
  const items = tgArr(db,'tgExpansion').filter(x=>biz==='all'||x.biz===biz);
  const topups = items.filter(x=>x.kind==='topup').reduce((t,x)=>t+(Number(x.amount)||0),0);
  const committed = items.filter(x=>x.kind!=='topup' && x.status==='approved').reduce((t,x)=>t+(Number(x.amount)||0),0);
  const spent = items.filter(x=>x.kind!=='topup' && x.status==='spent').reduce((t,x)=>t+(Number(x.amount)||0),0);
  const allowance = tgRound(unlocked + topups);
  return {allowance, accruing:tgRound(pending), committed:tgRound(committed), spent:tgRound(spent), remaining:tgRound(allowance - committed - spent),
    pendingRecs: items.filter(x=>x.kind!=='topup' && x.status==='pending').length,
    gates: cycles.filter(c=>c.gateUnlocked).length, perGate:per};
}

/* ---------- rewards ---------- */
function tgRewardUnlockedNow(db, r){
  const done = r.biz==='combined' ? Math.min(tgLevelsCompleted(db,'sw'), tgLevelsCompleted(db,'sf')) : tgLevelsCompleted(db, r.biz);
  const per = Number(tgSettings(db).levelsPerGate)||2;
  if(r.trigger==='gate') return Math.floor(done/per) >= (Number(r.requiredGate)||1);
  return done >= (Number(r.requiredLevel)||1);
}
function tgUnlockRewards(db, now){
  const out = [];
  tgArr(db,'tgRewards').forEach(r=>{
    if((r.status||'locked')==='locked' && tgRewardUnlockedNow(db, r)){ r.status='unlocked'; r.unlockedAt = tgToday(now); out.push(r); }
  });
  return out;
}
function tgRewardAction(db, id, action, now){
  const r = tgArr(db,'tgRewards').find(x=>x.id===id);
  if(!r) return {error:'Reward not found'};
  if((r.status||'locked')==='locked') return {error:'This reward is still locked — complete the required level first'};
  if(r.status==='claimed' || r.status==='moved') return {error:'This reward has already been '+(r.status==='claimed'?'claimed':'moved to expansion')};
  if(action==='claim'){ r.status='claimed'; r.claimedAt = tgToday(now); }
  else if(action==='save'){ r.status='saved'; }
  else if(action==='move'){
    r.status='moved'; r.movedAt = tgToday(now);
    tgArr(db,'tgExpansion').push({id:'exp-reward-'+r.id, kind:'topup', biz: r.biz==='combined'?'sw':r.biz, amount:Number(r.cost)||0, category:'Other',
      reason:'Reward "'+r.name+'" moved into the expansion pot', date:tgToday(now), status:'topup', createdAt:(now||new Date()).toISOString()});
  } else return {error:'Unknown action'};
  return {reward:r};
}

/* ---------- Road to £50K ---------- */
const TG_OBJECTIVES = {
  gross:{label:'Gross Revenue', how:'All money received (deposits, stage, final payments, retainers, other income), minus refunds.'},
  afterAcq:{label:'Revenue After Acquisition', how:'Money received minus customer-acquisition spend.'},
  profit:{label:'Profit', how:'Money received, minus VAT (if registered), acquisition, operating costs and expansion spend. Same figure as Accounting.'},
  retained:{label:'Cash Retained', how:'Money received minus all costs, owner pay and claimed rewards. What\'s actually left in the business (VAT still owed is in here).'}
};
function tgRoad(db, biz, start, end, objective){
  const rec = receivedEntries(db, biz).filter(x=>x.date && x.date>=start && x.date<=end);
  const gross = tgRound(rec.reduce((s,x)=>s+x.amount,0));
  const vat = (db.settings && db.settings.vatRegistered===false) ? 0 : tgRound(rec.reduce((s,x)=>s+x.vat,0));
  const acq = tgAcqSpend(db, biz, start, end);
  const ops = tgOpCosts(db, biz, start, end);
  const exp = tgExpansionSpent(db, biz, start, end);
  const owner = tgOwnerPaid(db, biz, start, end);
  const rewards = tgRewardsClaimed(db, biz, start, end);
  const afterAcq = tgRound(gross-acq), profit = tgRound(gross-vat-acq-ops-exp), retained = tgRound(gross-acq-ops-exp-owner-rewards);
  const value = {gross, afterAcq, profit, retained}[objective||'gross'];
  const goal = Number(tgSettings(db).road50kGoal)||50000;
  return {gross, vat, acq, afterAcq, ops, profit, exp, owner, rewards, retained, value, goal, pct: goal ? Math.max(0, value/goal*100) : 0};
}

/* ---------- Perfect Run projection (NOT a forecast) ---------- */
function tgProject(opts){
  const start = Number(opts.startTarget)||0, g = (Number(opts.growthPct)||0)/100, wins = Math.max(0, Math.floor(Number(opts.successWeeks)||0));
  const weeks = Math.max(1, Math.floor(Number(opts.weeks)||12)), per = Number(opts.levelsPerGate)||2, acqPct = (Number(opts.acqPct)||0)/100;
  const startLevel = Math.max(1, Number(opts.startLevel)||1);
  const rows = []; let cum = 0, target = start, level = startLevel, gates = 0;
  for(let w=1; w<=weeks; w++){
    const success = w<=wins;
    cum += success ? target : 0;
    const row = {week:w, level, target:tgRound(target), success, cumulative:tgRound(cum), acqAllowance: tgRound((success?target:0)*acqPct), gate:false};
    if(success){
      // completing level N unlocks a gate whenever N is a multiple of levels-per-gate
      if(level % per === 0){ gates++; row.gate = true; }
      level++; target = target*(1+g);
    }
    row.gates = gates;
    rows.push(row);
  }
  return rows;
}

/* ---------- capacity & bottlenecks ---------- */
function tgStage(level){ return level<=2 ? 'early' : level<=5 ? 'middle' : 'high'; }
function tgMetrics(db, biz, now){
  const s = tgSettings(db), cap = s.capacity[biz];
  const today = tgToday(now), fourWeeksAgo = tgAddDays(today, -28);
  if(biz==='sw'){
    const paid = (db.invoices||[]).filter(i=>i.status==='paid');
    const auto = paid.length ? paid.reduce((t,i)=>t+calcInvoiceTotal(i).total,0)/paid.length
      : ((db.jobs||[]).filter(j=>Number(j.expectedRevenue)>0).reduce((t,j,_,a)=>t+Number(j.expectedRevenue)/a.length,0) || 350);
    const decided = (db.quotes||[]).filter(q=>['approved','declined','expired'].includes(q.status));
    const autoConv = decided.length>=3 ? decided.filter(q=>q.status==='approved').length/decided.length : 0.4;
    const leadsPerWeek = ((db.leads||[]).filter(l=>tgInRange(l.createdAt,fourWeeksAgo,today)).length + (db.followUps||[]).filter(f=>tgInRange(f.createdAt,fourWeeksAgo,today)).length)/4;
    const quotesPerWeek = (db.quotes||[]).filter(q=>tgInRange(q.createdAt,fourWeeksAgo,today)).length/4;
    return {avgValue: Number(cap.avgJobValue)||tgRound(auto), avgAuto:!(Number(cap.avgJobValue)), conversion: (Number(cap.conversion)||0)/100 || autoConv, convAuto:!(Number(cap.conversion)),
      leadsPerWeek: tgRound(leadsPerWeek), quotesPerWeek: tgRound(quotesPerWeek),
      capacityUnits: (Number(cap.jobsPerDay)||0)*(Number(cap.workingDays)||0) + (Number(cap.subcontractorJobs)||0),
      openQuotes: (db.quotes||[]).filter(q=>q.status==='sent').length, subcontractors:(db.subcontractors||[]).length,
      activeJobs: (db.jobs||[]).filter(j=>['scheduled','active'].includes(j.status)).length};
  }
  const paid = (db.sfInvoices||[]).filter(i=>i.status==='paid');
  const auto = paid.length ? paid.reduce((t,i)=>t+calcInvoiceTotal(i).total,0)/paid.length : 780;
  const pros = db.sfProspects||[];
  const decided = pros.filter(p=>p.status==='Won'||p.status==='Lost');
  const autoConv = decided.length>=3 ? decided.filter(p=>p.status==='Won').length/decided.length : 0.5;
  const outreach = (db.sfActivity||[]).filter(a=>tgInRange(a.date,fourWeeksAgo,today)).reduce((t,a)=>t+(Number(a.emails)||0)+(Number(a.calls)||0),0)/4;
  const builds = (Number(cap.buildsPerWeek)||0) + (Number(cap.freelancerBuilds)||0);
  const hoursCap = (Number(cap.hoursPerBuild)||0) ? Math.floor((Number(cap.hoursPerWeek)||0)/(Number(cap.hoursPerBuild)||1)) : builds;
  return {avgValue: Number(cap.avgClientValue)||tgRound(auto), avgAuto:!(Number(cap.avgClientValue)), conversion:(Number(cap.conversion)||0)/100 || autoConv, convAuto:!(Number(cap.conversion)),
    outreachPerWeek: tgRound(outreach), leadsPerWeek: tgRound(pros.filter(p=>tgInRange(p.createdAt,fourWeeksAgo,today)).length/4),
    capacityUnits: Math.min(builds, Math.max(hoursCap,(Number(cap.freelancerBuilds)||0))) || builds,
    openProposals: pros.filter(p=>p.status==='Proposal Sent'||p.status==='Negotiating').length + (db.sfQuotes||[]).filter(q=>q.status==='sent').length,
    mrr: (db.sfClients||[]).filter(c=>c.status==='active'&&c.billingType!=='one-off').reduce((t,c)=>t+(Number(c.mrr)||0),0),
    freelancers: Number(cap.freelancerBuilds)||0};
}
// Weekly plan: what has to happen for a given target (pure arithmetic, shown as missions).
function tgPlan(db, biz, target, now){
  const m = tgMetrics(db, biz, now);
  const sales = Math.max(1, Math.ceil(target / Math.max(1, m.avgValue)));
  if(biz==='sw'){
    const quotes = Math.ceil(sales / Math.max(0.05, m.conversion));
    const leads = Math.ceil(quotes * 1.25);
    return {m, sales, quotes, leads, followUps: Math.max(m.openQuotes, Math.ceil(quotes/2)), pastCustomers: Math.max(5, sales*2), reviews: Math.max(2, sales), agents: Math.max(2, Math.ceil(sales/2))};
  }
  const proposals = Math.ceil(sales / Math.max(0.05, m.conversion));
  const calls = Math.ceil(proposals * 1.25);
  const conversations = calls * 2;
  return {m, sales, proposals, calls, conversations, outreach: conversations * 5, followUps: Math.max(m.openProposals, proposals)};
}
function tgCapacity(db, biz, now){
  const st = tgState(db, biz, now);
  const plan = tgPlan(db, biz, st.target, now);
  const next = tgPlan(db, biz, st.nextTarget, now);
  const m = plan.m;
  const rows = [];
  const row = (area, current, required, unit, kind)=>{
    const gap = tgRound(required - current);
    const status = current>=required ? 'OK' : (kind==='delivery' ? 'CAPACITY BOTTLENECK' : current>=required*0.75 ? 'Tight' : 'Gap');
    rows.push({area, current, required, gap, unit, status, kind});
  };
  if(biz==='sw'){
    row('Jobs per week (next level)', m.capacityUnits, next.sales, 'jobs', 'delivery');
    row('Qualified leads per week', m.leadsPerWeek, next.leads, 'leads', 'sales');
    row('Quotes sent per week', m.quotesPerWeek, next.quotes, 'quotes', 'sales');
    row('Quote conversion', Math.round(m.conversion*100), 40, '%', 'sales');
  } else {
    row('Builds / clients delivered per week (next level)', m.capacityUnits, next.sales, 'clients', 'delivery');
    row('Outreach per week', m.outreachPerWeek, next.outreach, 'touches', 'sales');
    row('New prospects per week', m.leadsPerWeek, next.conversations, 'prospects', 'sales');
    row('Proposal → close rate', Math.round(m.conversion*100), 40, '%', 'sales');
  }
  const delivery = rows.find(r=>r.kind==='delivery' && r.status==='CAPACITY BOTTLENECK');
  const salesGap = rows.filter(r=>r.kind==='sales' && r.status!=='OK').sort((a,b)=>(a.current/(a.required||1))-(b.current/(b.required||1)))[0];
  const bottleneck = delivery ? {type:'delivery', label:'CAPACITY BOTTLENECK', detail: delivery.area+': '+delivery.current+' vs '+delivery.required+' needed'}
    : salesGap ? {type:'sales', label:'SALES BOTTLENECK', detail: salesGap.area+': '+salesGap.current+' vs '+salesGap.required+' needed'}
    : {type:'none', label:'NO BOTTLENECK', detail:'Current setup can support the next target'};
  return {st, plan, next, m, rows, bottleneck, recs: tgRecommendations(db, biz, now, {st, plan, next, m, bottleneck})};
}
/* Recommendations change with the stage of growth: early levels lean on the owner's
   own effort, middle levels add systems/paid acquisition/subcontracting, higher
   levels add delegation, recurring revenue, people and reporting. Each has a stable
   key so approve/dismiss decisions stick. */
function tgRecommendations(db, biz, now, ctx){
  ctx = ctx || {};
  const st = ctx.st || tgState(db, biz, now);
  const m = ctx.m || tgMetrics(db, biz, now);
  const next = ctx.next || tgPlan(db, biz, st.nextTarget, now);
  const stage = tgStage(st.level);
  const acq = tgAcquisition(db, biz, tgAddDays(tgToday(now),-27), tgToday(now));
  const out = [];
  const add = (key, issue, action, benefit, cost, priority)=>out.push({key:biz+'-'+key, issue, action, benefit, cost, priority});
  if(biz==='sw'){
    if(m.capacityUnits < next.sales) add('subbie', `Next target needs ~${next.sales} jobs a week at ${gbp(m.avgValue)} average; you can deliver about ${m.capacityUnits}.`,
      'Add a reliable subcontractor before aggressively increasing lead generation. Trial them on one job this week.', `Lifts capacity by ~${Math.max(2, next.sales-m.capacityUnits)} jobs/week without you on the tools for all of it.`, 'Day rate only when used', 'High');
    if(m.leadsPerWeek < next.leads) add('leads', `You're averaging ${m.leadsPerWeek} leads a week; the next level needs ~${next.leads}.`,
      stage==='early' ? 'Message 10 past customers and 5 local letting agents this week asking for work and referrals.' : 'Put part of the acquisition allowance into one paid channel (Google Local Services or Checkatrade) and track cost per job.',
      'Fills the diary for the bigger target.', stage==='early' ? '£0' : 'Up to '+gbp(acq.max||0)+' (20% allowance)', 'High');
    if(m.conversion < 0.35) add('conv', `Only ${Math.round(m.conversion*100)}% of quotes convert.`, 'Follow up every open quote within 48 hours, add photos of similar work and a clear start date to each quote.', 'Each 10% lift in conversion is worth '+gbp(m.avgValue*Math.max(1,m.quotesPerWeek)*0.1)+'/week.', '£0', m.openQuotes>2?'High':'Medium');
    if(m.openQuotes>0) add('fu', `${m.openQuotes} quote${m.openQuotes===1?' is':'s are'} waiting on a reply.`, 'Ring each one today — ask what\'s stopping them going ahead.', 'Fastest money available: the work is already priced.', '£0', 'High');
    if(stage!=='early') add('admin', 'Admin and invoicing grow with every level and eat working days.', 'Batch quotes and invoices into one admin block, use templates for every common job, and send invoices the day work finishes.', 'Gets back 3–5 hours a week and speeds up cash.', '£0–£30/mo software', 'Medium');
    if(stage==='middle') add('agents', 'Repeat work from one-off homeowners is unpredictable.', 'Pitch two estate/letting agents or a property manager for maintenance work on a call-out rate.', 'Steady weekly volume that doesn\'t need new marketing.', '£0', 'Medium');
    if(stage==='high') add('team', 'You can\'t personally deliver this level — growth depends on other people.', 'Hire or retain a second engineer/regular subcontractor and move yourself to quoting, scheduling and quality checks.', 'Revenue stops being capped by your own hours.', 'Wages / day rates', 'High');
    add('reviews', 'Reviews and referrals drive the cheapest leads for trades.', 'Ask every finished customer for a Google review the same day, and hand over two business cards for referrals.', 'Lowers future cost per lead.', '£0', 'Low');
  } else {
    if(m.capacityUnits < next.sales) add('delivery', `Next target needs ~${next.sales} new clients a week at ${gbp(m.avgValue)} average; you can deliver about ${m.capacityUnits}.`,
      stage==='early' ? 'Turn your last build into a reusable template and use AI for first-draft copy before selling more.' : 'Bring in a freelance designer/developer for builds so you can stay on selling and directing.',
      'Raises builds per week before more sales create a backlog.', stage==='early'?'£0':'£150–£400 per build', 'High');
    if(m.outreachPerWeek < next.outreach) add('outreach', `You're averaging ${m.outreachPerWeek} outreach touches a week; the next level needs ~${next.outreach}.`,
      'Block 90 minutes each morning for outreach (emails, DMs, calls) before any build work.', 'Keeps the pipeline full for the bigger target.', '£0', 'High');
    if(m.openProposals>0) add('proposals', `${m.openProposals} proposal${m.openProposals===1?' is':'s are'} still open.`, 'Follow up every open proposal today with one specific question about their decision.', 'Closest money to the bank.', '£0', 'High');
    if(m.conversion < 0.35) add('conv', `Proposal close rate is ${Math.round(m.conversion*100)}%.`, 'Only send proposals after a discovery call, and lead with one fixed package rather than options.', 'Fewer wasted proposals, higher close rate.', '£0', 'Medium');
    if(stage!=='early' && m.mrr < st.target*2) add('recurring', `Recurring revenue is ${gbp(m.mrr)}/mo — every week starts from zero.`, 'Offer the Essentials retainer to every website client at handover.', 'Builds a monthly floor under the weekly target.', '£0', 'High');
    if(stage==='middle') add('automate', 'Onboarding and follow-ups are manual.', 'Automate onboarding forms, proposal follow-ups and invoice reminders.', 'Saves hours per client and stops leads going cold.', '£20–£60/mo tools', 'Medium');
    if(stage==='high') add('team', 'You can\'t sell, build and manage accounts alone at this level.', 'Hire an account manager / VA and a regular developer; move yourself to sales and direction.', 'Revenue stops being capped by your own hours.', 'Freelancer / staff costs', 'High');
    add('referrals', 'Referral partners are the cheapest source of good clients.', 'Agree a referral fee with two complementary businesses (accountants, printers, photographers).', 'Warm introductions convert far better than cold outreach.', '10% referral fee', 'Low');
  }
  const order = {High:0, Medium:1, Low:2};
  return out.sort((a,b)=>order[a.priority]-order[b.priority]).slice(0,5);
}
function tgDecision(db, key){ return tgArr(db,'tgDecisions').find(d=>d.key===key) || null; }

/* ---------- weekly missions ---------- */
function tgMissionTemplates(db, biz, target, level, now){
  const p = tgPlan(db, biz, target, now);
  const stage = tgStage(level);
  if(biz==='sw') return [
    {slug:'leads', title:`Respond to ${p.leads} qualified leads`, target:p.leads, auto:'sw-leads', priority:'High', category:'MONEY MAKING'},
    {slug:'quotes', title:`Send ${p.quotes} quotes`, target:p.quotes, auto:'sw-quotes', priority:'High', category:'MONEY MAKING'},
    {slug:'fu', title:`Follow up ${p.followUps} outstanding quotes`, target:p.followUps, priority:'High', category:'FOLLOW-UP'},
    {slug:'past', title:`Contact ${p.pastCustomers} previous customers`, target:p.pastCustomers, priority:'Medium', category:'MONEY MAKING'},
    {slug:'reviews', title:`Request ${p.reviews} reviews`, target:p.reviews, priority:'Low', category:'FOLLOW-UP'},
    {slug:'agents', title:`Contact ${p.agents} estate agents or property managers`, target:p.agents, priority:'Medium', category:'MONEY MAKING'}
  ].concat(stage==='middle' ? [{slug:'sub', title:'Line up one reliable subcontractor', target:1, priority:'Medium', category:'OPERATIONS'}]
         : stage==='high' ? [{slug:'delegate', title:'Delegate one job end-to-end without going on site', target:1, priority:'Medium', category:'OPERATIONS'}] : []);
  return [
    {slug:'outreach', title:`${p.outreach} targeted outreaches`, target:p.outreach, auto:'sf-outreach', priority:'High', category:'MONEY MAKING'},
    {slug:'conv', title:`${p.conversations} conversations`, target:p.conversations, auto:'sf-conversations', priority:'High', category:'MONEY MAKING'},
    {slug:'calls', title:`${p.calls} discovery calls`, target:p.calls, auto:'sf-calls', priority:'High', category:'MONEY MAKING'},
    {slug:'proposals', title:`${p.proposals} proposals`, target:p.proposals, auto:'sf-proposals', priority:'High', category:'MONEY MAKING'},
    {slug:'closes', title:`${p.sales} close${p.sales===1?'':'s'}`, target:p.sales, auto:'sf-closes', priority:'High', category:'MONEY MAKING'},
    {slug:'fu', title:'Follow up every open proposal', target:Math.max(1,p.followUps), priority:'High', category:'FOLLOW-UP'}
  ].concat(stage==='middle' ? [{slug:'template', title:'Turn one build into a reusable template / automation', target:1, priority:'Medium', category:'OPERATIONS'}]
         : stage==='high' ? [{slug:'delegate', title:'Hand one client build fully to a freelancer', target:1, priority:'Medium', category:'OPERATIONS'}] : []);
}
// Creates this week's missions once (stable ids, so edits stick and devices don't duplicate).
function tgEnsureMissions(db, biz, now){
  const st = tgState(db, biz, now);
  const wk = st.weekKey;
  const list = tgArr(db,'tgMissions');
  if(list.some(m=>m.biz===biz && m.weekKey===wk && m.generated)) return false;
  tgMissionTemplates(db, biz, st.target, st.level, now).forEach((t,i)=>{
    const id = 'm-'+biz+'-'+wk+'-'+t.slug;
    if(!list.some(m=>m.id===id)) list.push(Object.assign({id, biz, weekKey:wk, generated:true, order:i, done:false, progress:0, due:tgAddDays(wk,4), link:'', createdAt:(now||new Date()).toISOString()}, t));
  });
  return true;
}
// Progress pulled from real records where it's reliable; otherwise manual.
function tgAutoProgress(db, auto, weekStart, weekEnd){
  const inW = d => tgInRange(String(d||'').slice(0,10), weekStart, weekEnd);
  const pros = db.sfProspects||[];
  switch(auto){
    case 'sw-quotes': return (db.quotes||[]).filter(q=>inW(q.createdAt) && q.status!=='draft').length + (PAINT_JOBS_CACHE||[]).filter(r=>inW(r.dateQuoted) && r.stage!=='draft').length;
    case 'sw-leads': return (db.leads||[]).filter(l=>inW(l.createdAt) && l.stage!=='New Lead').length + (db.followUps||[]).filter(f=>inW(f.createdAt) && f.status!=='new').length;
    case 'sf-outreach': return Math.max((db.sfActivity||[]).filter(a=>inW(a.date)).reduce((t,a)=>t+(Number(a.emails)||0)+(Number(a.calls)||0),0), pros.filter(p=>inW(p.lastContacted)).length);
    case 'sf-conversations': return pros.filter(p=>['Replied','Call Booked','Proposal Sent','Negotiating','Won'].includes(p.status) && inW(p.statusChangedAt)).length;
    case 'sf-calls': return pros.filter(p=>inW(p.callBookedAt)).length;
    case 'sf-proposals': return Math.max((db.sfQuotes||[]).filter(q=>inW(q.createdAt) && q.status!=='draft').length, pros.filter(p=>p.status==='Proposal Sent' && inW(p.statusChangedAt)).length);
    case 'sf-closes': return pros.filter(p=>inW(p.wonAt)).length;
  }
  return null;
}
function tgMissionsFor(db, biz, weekKey){
  const s = tgSettings(db);
  const end = tgAddDays(weekKey, 6);
  return tgArr(db,'tgMissions').filter(m=>m.biz===biz && m.weekKey===weekKey && !m.removed).sort((a,b)=>(a.order||0)-(b.order||0)).map(m=>{
    const auto = m.auto ? tgAutoProgress(db, m.auto, weekKey, end) : null;
    const progress = Math.max(Number(m.progress)||0, auto||0);
    const complete = !!m.done || (m.target>0 && progress>=m.target);
    return Object.assign({}, m, {autoProgress:auto, progressShown:progress, complete, autoComplete: !m.done && auto!=null && m.target>0 && auto>=m.target});
  });
}

/* ---------- today's actions ---------- */
function tgDailyActions(db, now){
  const today = tgToday(now);
  const items = [];
  const add = (id, category, title, detail, impact, urgency, go)=>items.push({id, category, title, detail, impact, urgency, go});
  // money owed
  (db.invoices||[]).concat((db.sfInvoices||[]).map(i=>Object.assign({_sf:true}, i))).forEach(inv=>{
    if(invoiceStatus(inv)!=='overdue') return;
    const owed = invoiceOutstanding(inv);
    add('inv-'+inv.id, 'URGENT', `Chase ${inv.invoiceNumber} — ${gbp(owed)} overdue`, (inv.customerName||inv.clientName||'')+' · due '+fmtDate(inv.dueDate), owed, 3, inv._sf?"navigate('sf-invoices')":"navigate('invoices')");
  });
  (db.followUps||[]).filter(f=>f.status==='new').forEach(f=>add('fu-'+f.id, 'URGENT', `Call back ${f.name||'missed caller'}`, f.phone||'', 300, 3, "navigate('followups')"));
  // warm money
  (db.sfProspects||[]).filter(p=>p.status==='Call Booked').forEach(p=>add('pc-'+p.id, 'MONEY MAKING', `Prep & run call — ${p.business}`, 'Call booked · '+(acqPkg(p.package)||{label:''}).label, (acqValue(p).oneOff||acqValue(p).monthly*3), 2, "navigate('sf-acquisition')"));
  (db.sfProspects||[]).filter(p=>p.status==='Proposal Sent'||p.status==='Negotiating').forEach(p=>add('pp-'+p.id, 'FOLLOW-UP', `Follow up proposal — ${p.business}`, 'Proposal sent '+(acqDaysSince(p.statusChangedAt)||0)+' days ago', (acqValue(p).oneOff||acqValue(p).monthly*3), (acqDaysSince(p.statusChangedAt)||0)>=3?3:2, "navigate('sf-acquisition')"));
  (db.quotes||[]).filter(q=>q.status==='sent' && (typeof swQuoteNeedsChase!=='function' || swQuoteNeedsChase(q))).forEach(q=>add('q-'+q.id, 'FOLLOW-UP', `Follow up quote ${q.quoteNumber} — ${q.customerName}`, gbp(calcQuoteTotal(q).total), calcQuoteTotal(q).total, (daysUntil(q.validUntil)!==null && daysUntil(q.validUntil)<=3)?3:2, "navigate('quotes')"));
  (db.sfQuotes||[]).filter(q=>q.status==='sent').forEach(q=>add('sq-'+q.id, 'FOLLOW-UP', `Follow up proposal ${q.quoteNumber} — ${q.clientName}`, gbp(calcQuoteTotal(q).total), calcQuoteTotal(q).total, 2, "navigate('sf-quotes')"));
  (db.leads||[]).filter(l=>l.stage==='New Lead').forEach(l=>add('l-'+l.id, 'MONEY MAKING', `Contact new lead — ${l.name}`, (l.source||'')+(l.phone?' · '+l.phone:''), Number(l.value)||300, 3, "navigate('leads')"));
  (db.sfProspects||[]).filter(p=>p.status==='Not Contacted').slice(0,5).forEach(p=>add('pn-'+p.id, 'MONEY MAKING', `First contact — ${p.business}`, p.type||'', (acqValue(p).oneOff||acqValue(p).monthly*3)*0.3, 1, "navigate('sf-acquisition')"));
  (db.sfClients||[]).filter(c=>c.callDate && c.callDate<=today && c.status!=='paused').forEach(c=>add('sc-'+c.id, 'FOLLOW-UP', `Client call due — ${c.name}`, c.biz||'', Number(c.mrr)||200, 2, "navigate('sf-clients')"));
  (db.swServices||[]).filter(sv=>sv.status!=='paused').forEach(sv=>{ const d = daysUntil(sv.nextDue); if(d===null || d>14 || sv.bookedJobId) return; const lastRem = (sv.reminders||[]).slice(-1)[0];
    if(lastRem && -daysUntil(lastRem.date) < 7) return;
    add('sv-'+sv.id, 'MONEY MAKING', `Book ${sv.type.toLowerCase()} — ${sv.customerName}`, (d<0?'overdue by '+(-d)+' days':'due '+fmtDate(sv.nextDue))+' · '+gbp(sv.price), Number(sv.price)||90, d<0?3:2, "SW_SERVICE_FILTER='due'; navigate('services')"); });
  (db.jobs||[]).filter(j=>j.status==='completed' && !(db.invoices||[]).some(i=>i.jobId===j.id)).forEach(j=>add('ji-'+j.id, 'URGENT', `Invoice finished job ${j.jobNumber}`, j.customerName+' · '+gbp(j.expectedRevenue), Number(j.expectedRevenue)||0, 3, `swInvoiceFromJob('${j.id}')`));
  // delivery
  (db.jobs||[]).filter(j=>['scheduled','active'].includes(j.status)).forEach(j=>{
    if(j.endDate && j.endDate<today) add('jr-'+j.id, 'DELIVERY', `At-risk job ${j.jobNumber} — past its end date`, j.customerName, Number(j.expectedRevenue)||0, 3, `navigate('jobs','${j.id}')`);
    else if(j.startDate===today) add('js-'+j.id, 'DELIVERY', `Job starts today — ${j.jobNumber}`, j.customerName+' · '+(j.assignedTo||'Unassigned'), Number(j.expectedRevenue)||0, 3, `navigate('jobs','${j.id}')`);
  });
  (db.invoices||[]).concat(db.sfInvoices||[]).filter(i=>i.status==='draft').forEach(i=>add('id-'+i.id, 'MONEY MAKING', `Send draft invoice ${i.invoiceNumber}`, gbp(calcInvoiceTotal(i).total), calcInvoiceTotal(i).total, 2, (db.sfInvoices||[]).includes(i)?"navigate('sf-invoices')":"navigate('invoices')"));
  // operations / admin
  ['sw','sf'].forEach(biz=>{ const c = tgCapacity(db, biz, now); if(c.bottleneck.type==='delivery') add('cap-'+biz, 'OPERATIONS', TG_BIZ[biz].name+': '+c.bottleneck.label, c.bottleneck.detail, 0, 2, `setTgTab('${biz}')`); });
  (db.compliance||[]).concat(db.sfCompliance||[]).filter(c=>{ const d=daysUntil(c.expiryDate); return d!==null && d<=14; }).forEach(c=>add('cm-'+c.id, 'ADMIN', `Renew ${c.name}`, 'Expires '+fmtDate(c.expiryDate), 0, 1, "navigate('compliance')"));
  const behind = ['sw','sf'].some(b=>{ const st = tgState(db,b,now); return ['BEHIND'].includes(tgPace(st, now).status); });
  const catW = {URGENT:5, 'MONEY MAKING':4, 'FOLLOW-UP':3.5, DELIVERY:3, OPERATIONS:2, ADMIN:1};
  items.forEach(it=>{ it.score = catW[it.category]*10 + it.urgency*6 + Math.min(20, Math.log10(1+(Number(it.impact)||0))*5) - (behind && it.category==='ADMIN' ? 25 : 0); });
  items.sort((a,b)=>b.score-a.score);
  return {items, behind};
}

/* ===================== TARGETS — UI ===================== */
// GBP everywhere: whole pounds without pence, otherwise two decimals.
function gbp(n){
  n = Number(n)||0;
  const neg = n<0; n = Math.abs(n);
  const whole = Math.abs(n-Math.round(n))<0.005;
  return (neg?'-':'')+'£'+n.toLocaleString('en-GB',{minimumFractionDigits:whole?0:2, maximumFractionDigits:whole?0:2});
}
function tgAudit(entity, entityId, action, before, after, reason){
  const list = tgArr(DB,'tgAudit');
  list.unshift({id:uid(), at:new Date().toISOString(), by:CURRENT_USER_EMAIL||'', entity, entityId, action, before:before||null, after:after||null, reason:reason||''});
  if(list.length>500) DB.tgAudit = list.slice(0,500);
}
let TG_TAB = 'overview';
try{ TG_TAB = localStorage.getItem('steadyworks_tg_tab') || 'overview'; }catch(e){}
const TG_TABS = [['overview','Overview'],['sw','SteadyWorks'],['sf','SteadyFlow'],['ledger','Money'],['rewards','Rewards'],['history','History'],['projection','Projection'],['settings','Settings']];
function setTgTab(t){ TG_TAB = t; try{ localStorage.setItem('steadyworks_tg_tab', t); }catch(e){} if(currentRoute!=='targets') navigate('targets'); else { renderPage(); window.scrollTo(0,0); } }
// Housekeeping each time Targets renders: close finished weeks, create this week's missions, unlock rewards.
function tgPrepare(){
  const now = new Date();
  tgSettings(DB);
  let changed = false;
  const closed = tgCloseDueCycles(DB, now);
  if(closed.length) changed = true;
  if(tgEnsureMissions(DB,'sw',now)) changed = true;
  if(tgEnsureMissions(DB,'sf',now)) changed = true;
  if(tgUnlockRewards(DB, now).length) changed = true;
  if(changed) save();
  return closed;
}
function view_targets(){
  if(!TG_TABS.some(([k])=>k===TG_TAB)) TG_TAB = 'overview';
  let body;
  try{
    tgPrepare();
    body = {overview:tgOverviewView, sw:()=>tgBizView('sw'), sf:()=>tgBizView('sf'), combined:tgCombinedView, ledger:tgLedgerView, rewards:tgRewardsView, projection:tgProjectionView, history:tgHistoryView, settings:tgSettingsView}[TG_TAB]();
  }catch(err){
    console.error(err);
    body = `<div class="card">${emptyBlock('Something went wrong building this panel: '+esc(err.message)+'. Your data is untouched.','Try again','renderPage()','⚠️')}</div>`;
  }
  return `<div class="tabs">${TG_TABS.map(([k,l])=>`<button class="tab-btn ${TG_TAB===k?'active':''}" onclick="setTgTab('${k}')">${l}</button>`).join('')}</div>${body}`;
}
function afterRender_targets(){
  if(TG_TAB==='history') tgHistoryCharts();
  if(TG_TAB==='projection') tgProjectionRender();
}

/* ---------- shared pieces ---------- */
const TG_PACE_CLS = {'TARGET ACHIEVED':'good', 'AHEAD':'good', 'ON PACE':'ok', 'BEHIND':'bad', 'MISSED':'bad', 'NOT STARTED':'muted'};
function tgPill(text, tone){ return `<span class="tg-pill tg-${tone||'muted'}">${esc(text)}</span>`; }
function tgBar(pct, color, h){ return `<div class="tg-bar" style="${h?'height:'+h+'px;':''}"><div style="width:${Math.max(0,Math.min(100,pct)).toFixed(1)}%;${color?'background:'+color+';':''}"></div>${pct>100?'<span class="tg-bar-over"></span>':''}</div>`; }
function tgStat(label, value, sub, tone){ return `<div class="tg-stat"><div class="tg-stat-l">${label}</div><div class="tg-stat-v ${tone?'tg-t-'+tone:''}">${value}</div>${sub?`<div class="tg-stat-s">${sub}</div>`:''}</div>`; }
function tgLevelBadge(level, color){ return `<div class="tg-level" style="--c:${color}"><span>LEVEL</span><strong>${level}</strong></div>`; }

function tgTrackCard(biz){
  const now = new Date();
  const B = TG_BIZ[biz];
  const st = tgState(DB, biz, now);
  const pace = tgPace(st, now);
  const ms = tgMissionsFor(DB, biz, st.weekKey);
  const cap = tgCapacity(DB, biz, now);
  const pot = tgExpansionPot(DB, biz);
  return `<div class="card tg-track" style="--c:${B.color}">
    <div class="tg-track-head">
      ${tgLevelBadge(st.level, B.color)}
      <div style="flex:1;min-width:0;">
        <div class="tg-track-name">${B.name}</div>
        <div class="small muted">${fmtDate(st.startDate)} – ${fmtDate(st.endDate)}${st.override?` · <span style="color:var(--warning);">override: ${esc(st.override.reason)}</span>`:''}</div>
      </div>
      ${tgPill(pace.status, TG_PACE_CLS[pace.status])}
    </div>
    <div class="tg-big"><span>${gbp(st.revenue)}</span><small> / ${gbp(st.target)}</small></div>
    ${tgBar(st.pct, B.color, 12)}
    <div class="tg-row-stats">
      ${tgStat('Progress', Math.round(st.pct)+'%')}
      ${st.achieved ? tgStat('Surplus', gbp(st.surplus), '', 'good') : tgStat('Remaining', gbp(st.remaining))}
      ${tgStat('Need / day', st.achieved?'—':gbp(pace.requiredDaily), pace.daysLeft+' day'+(pace.daysLeft===1?'':'s')+' left')}
      ${tgStat('Next target', gbp(st.nextTarget))}
    </div>
    <div class="tg-chips">
      <span class="tg-chip">✅ Missions ${ms.filter(m=>m.complete).length}/${ms.length}</span>
      <span class="tg-chip">${st.levelsToGate===Number(tgSettings(DB).levelsPerGate)&&st.levelsDone>0?'🔓 Gate just unlocked':'🔒 Gate in '+st.levelsToGate+' level'+(st.levelsToGate===1?'':'s')} · pot ${gbp(pot.remaining)}</span>
      <span class="tg-chip ${cap.bottleneck.type==='delivery'?'tg-chip-bad':cap.bottleneck.type==='sales'?'tg-chip-warn':''}">⚙️ ${cap.bottleneck.label}</span>
    </div>
    <div class="flex gap-8 mt-10" style="flex-wrap:wrap;">
      <button class="btn btn-ghost btn-sm" onclick="setTgTab('${biz}')">Open ${B.name} →</button>
      ${st.achieved?`<button class="btn btn-gold btn-sm" onclick="tgCompleteEarly('${biz}')">🏁 Complete level now</button>`:''}
    </div>
  </div>`;
}

/* ---------- OVERVIEW ---------- */
function tgRoadState(){ if(!window._tgRoad) window._tgRoad = {biz:'all', from:'', to:'', objective: tgSettings(DB).objective||'gross'}; return window._tgRoad; }
function tgRoadCard(){
  const f = tgRoadState();
  const r = tgRoad(DB, f.biz, f.from||'1900-01-01', f.to||'2999-12-31', f.objective);
  const obj = TG_OBJECTIVES[f.objective];
  return `<div class="card tg-road">
    <div class="flex-between" style="flex-wrap:wrap;gap:10px;">
      <div><div class="tg-eyebrow">THE CHALLENGE</div><div class="tg-road-title">ROAD TO ${gbp(r.goal).toUpperCase()}</div></div>
      <div class="flex gap-8" style="flex-wrap:wrap;">
        <select onchange="tgRoadState().objective=this.value; tgSettings(DB).objective=this.value; save(); renderPage();" style="width:auto;">${Object.entries(TG_OBJECTIVES).map(([k,o])=>`<option value="${k}" ${f.objective===k?'selected':''}>${o.label}</option>`).join('')}</select>
        <select onchange="tgRoadState().biz=this.value; renderPage();" style="width:auto;"><option value="all" ${f.biz==='all'?'selected':''}>Combined</option><option value="sw" ${f.biz==='sw'?'selected':''}>SteadyWorks</option><option value="sf" ${f.biz==='sf'?'selected':''}>SteadyFlow</option></select>
        <input type="date" value="${f.from}" title="From" onchange="tgRoadState().from=this.value; renderPage();" style="width:auto;">
        <input type="date" value="${f.to}" title="To" onchange="tgRoadState().to=this.value; renderPage();" style="width:auto;">
      </div>
    </div>
    <div class="tg-road-num"><span>${gbp(r.value)}</span> <small>/ ${gbp(r.goal)}</small> <em>${r.pct.toFixed(1)}%</em></div>
    ${tgBar(r.pct, 'linear-gradient(90deg,var(--gold),var(--gold-light))', 18)}
    <div class="small muted mt-10"><strong style="color:var(--text);">${obj.label}:</strong> ${obj.how} This is ${f.objective==='gross'?'<strong>revenue, not profit</strong>':'<strong>after costs</strong>'}.</div>
    <div class="tg-road-break">
      ${tgStat('Gross received', gbp(r.gross))}
      ${tgStat('Acquisition', tgMinus(r.acq))}
      ${tgStat('After acquisition', gbp(r.afterAcq))}
      ${tgStat('Operating costs', tgMinus(r.ops))}
      ${tgStat('Expansion spend', tgMinus(r.exp))}
      ${tgStat('Owner pay', tgMinus(r.owner))}
      ${tgStat('Est. retained cash', gbp(r.retained), r.rewards?'after '+gbp(r.rewards)+' rewards':'', r.retained<0?'bad':'good')}
    </div>
  </div>`;
}
function tgMinus(n){ return n ? '−'+gbp(n) : gbp(0); }
function tgWeekRange(now){ const s = tgSettings(DB); const ws = tgWeekStart(tgToday(now), s.weekStartDay); return {start:ws, end:tgAddDays(ws,6)}; }
function tgCombinedStrip(){
  const now = new Date();
  const w = tgWeekRange(now);
  const rev = tgRevenue(DB,'all',w.start,w.end), acq = tgAcquisition(DB,'all',w.start,w.end), own = tgOwnerPayWeek(DB, w.start);
  const ops = tgOpCosts(DB,'all',w.start,w.end), exp = tgExpansionSpent(DB,'all',w.start,w.end), pot = tgExpansionPot(DB,'all');
  const retained = tgRound(rev - acq.spend - ops - own.taken - exp);
  const combinedTarget = tgState(DB,'sw',now).target + tgState(DB,'sf',now).target;
  return `<div class="tg-strip">
    <div class="card">${tgStat('Combined revenue (this week)', gbp(rev), 'of '+gbp(combinedTarget)+' combined target')}</div>
    <div class="card">${tgStat('Acquisition spend', gbp(acq.spend), 'max '+gbp(acq.max)+' · '+gbp(acq.unused)+' unused')}</div>
    <div class="card">${tgStat('Owner pay', gbp(own.taken)+' / '+gbp(own.requirement), own.status, own.status==='Taken'?'good':own.taken>0?'warn':'')}</div>
    <div class="card">${tgStat('Expansion pot', gbp(pot.remaining), pot.accruing?gbp(pot.accruing)+' accruing to next gate':'available to invest')}</div>
    <div class="card">${tgStat('Retained cash (this week)', gbp(retained), 'after acquisition, costs, owner pay & expansion', retained<0?'bad':'')}</div>
  </div>`;
}
function tgToday_summary(){
  const now = new Date();
  const {items, behind} = tgDailyActions(DB, now);
  const sw = tgState(DB,'sw',now), sf = tgState(DB,'sf',now);
  const remaining = sw.remaining + sf.remaining;
  const daysLeft = Math.max(tgPace(sw,now).daysLeft, 1);
  const count = pref => items.filter(i=>i.id.startsWith(pref)).length;
  const doneToday = (tgSettings(DB).dailyDone||{})[tgToday(now)] || [];
  const visible = items.filter(i=>!(behind && i.category==='ADMIN')).slice(0,10);
  const top = items.find(i=>!doneToday.includes(i.id));
  return `<div class="card">
    <div class="card-title">TODAY'S MONEY-MAKING MISSIONS <span class="small muted">What to do today to hit this week</span></div>
    <div class="tg-today-head">
      <div class="tg-today-top">${top?`<div class="tg-eyebrow">TODAY'S PRIORITY</div><div style="font-size:16px;font-weight:800;margin-top:4px;">${esc(top.title)}</div><div class="small muted">${esc(top.detail||'')}</div>`:'<div class="small muted">Nothing urgent in the data — use today for outreach.</div>'}</div>
      <div class="tg-today-stats">
        ${tgStat('Still required', gbp(remaining))}
        ${tgStat('Daily pace', gbp(tgRound(remaining/daysLeft)))}
        ${tgStat('Overdue follow-ups', count('fu-')+count('inv-')+count('sc-'))}
        ${tgStat('Open proposals', count('pp-')+count('q-')+count('sq-'))}
        ${tgStat('Uncontacted leads', count('l-')+count('pn-'))}
        ${tgStat('At-risk jobs', count('jr-'))}
        ${tgStat('Blockers', count('cap-'))}
      </div>
    </div>
    ${behind?'<div class="acq-banner warn mt-10">You\'re behind pace, so admin tasks are hidden until the money-making work is done.</div>':''}
    <div class="tg-actions mt-10">${visible.length ? visible.map(i=>{ const done = doneToday.includes(i.id); return `<div class="tg-action ${done?'done':''}">
      <input type="checkbox" ${done?'checked':''} onchange="tgToggleDaily('${i.id}')" aria-label="Mark done">
      <span class="tg-cat tg-cat-${i.category.replace(/[^A-Z]/g,'').toLowerCase()}">${i.category}</span>
      <div style="flex:1;min-width:0;"><div class="tg-action-t">${esc(i.title)}</div>${i.detail?`<div class="small muted">${esc(i.detail)}</div>`:''}</div>
      ${i.go?`<button class="btn btn-ghost btn-sm" onclick="${i.go}">Open</button>`:''}
    </div>`; }).join('') : emptyBlock('No actions pulled from your records today. Your weekly missions are below.','','','✅')}</div>
  </div>`;
}
function tgToggleDaily(id){
  const s = tgSettings(DB), d = tgToday();
  // keep only the last 7 days of ticks
  Object.keys(s.dailyDone).forEach(k=>{ if(k < tgAddDays(d,-7)) delete s.dailyDone[k]; });
  const list = s.dailyDone[d] = s.dailyDone[d] || [];
  const i = list.indexOf(id);
  if(i>-1) list.splice(i,1); else list.push(id);
  save(); renderPage(); toast(i>-1?'Marked not done':'Done — nice', i>-1?'↺':'✓');
}
function tgBottlenecks(){
  const now = new Date();
  return `<div class="card"><div class="card-title">OPERATIONAL BOTTLENECKS</div>
    ${['sw','sf'].map(biz=>{ const c = tgCapacity(DB,biz,now); const r = c.recs[0]; return `<div class="tg-bneck">
      <div class="flex-between" style="gap:8px;flex-wrap:wrap;"><strong>${TG_BIZ[biz].name}</strong>${tgPill(c.bottleneck.label, c.bottleneck.type==='delivery'?'bad':c.bottleneck.type==='sales'?'warn':'good')}</div>
      <div class="small muted" style="margin-top:4px;">${esc(c.bottleneck.detail)}</div>
      ${r?`<div class="small" style="margin-top:6px;"><strong>Next move:</strong> ${esc(r.action)}</div>`:''}
    </div>`; }).join('')}
  </div>`;
}
function tgNextExpansion(){
  const s = tgSettings(DB);
  const reviewsDue = tgReviewsDue();
  return `<div class="card"><div class="card-title">NEXT EXPANSION</div>
    ${['sw','sf'].map(biz=>{ const st = tgState(DB,biz,new Date()); const pot = tgExpansionPot(DB,biz); const per = Number(s.levelsPerGate)||2; const done = st.levelsDone % per; return `<div class="tg-bneck">
      <div class="flex-between"><strong>${TG_BIZ[biz].name}</strong><span class="small muted">Gate ${st.gatesUnlocked+1}</span></div>
      <div class="tg-gate-steps">${Array.from({length:per}).map((_,i)=>`<span class="${i<done?'on':''}"></span>`).join('')}<em>${st.levelsToGate} level${st.levelsToGate===1?'':'s'} to unlock</em></div>
      <div class="small muted">Pot available ${gbp(pot.remaining)} · ${gbp(pot.accruing)} accruing · ${pot.pendingRecs} pending recommendation${pot.pendingRecs===1?'':'s'}</div>
    </div>`; }).join('')}
    ${reviewsDue.length?reviewsDue.map(g=>`<div class="acq-banner good mt-10 flex-between" style="gap:8px;flex-wrap:wrap;"><span>🔓 ${TG_BIZ[g.biz].name}: Expansion Gate ${g.gateNumber} unlocked — review due</span><button class="btn btn-gold btn-sm" onclick="tgOpenReview('${g.id}')">Start review</button></div>`).join(''):''}
  </div>`;
}
function tgReviewsDue(){ return tgArr(DB,'tgCycles').filter(c=>c.gateUnlocked && !tgArr(DB,'tgReviews').some(r=>r.cycleId===c.id)); }
function tgOverviewView(){
  const pendingAll = tgArr(DB,'tgCycles').filter(c=>c.achieved && !c.ack).sort((a,b)=>a.startDate.localeCompare(b.startDate));
  const pendingLevelUps = ['sw','sf'].map(b=>pendingAll.filter(c=>c.biz===b).pop()).filter(Boolean);
  return `
  ${pendingLevelUps.map(c=>`<div class="card tg-levelup-banner" style="--c:${TG_BIZ[c.biz].color}"><div><div class="tg-eyebrow">LEVEL COMPLETE</div><strong>${TG_BIZ[c.biz].name} — Level ${c.level}</strong> · ${gbp(c.revenue)} received vs ${gbp(c.target)} (${Math.round(c.revenue/c.target*100)}%)</div><button class="btn btn-gold btn-sm" onclick="tgOpenLevelUp('${c.id}')">See what changes next →</button></div>`).join('')}
  ${tgRoadCard()}
  <div class="grid grid-2 mt-10" style="align-items:start;">${tgTrackCard('sw')}${tgTrackCard('sf')}</div>
  ${tgCombinedStrip()}
  ${tgToday_summary()}
  <div class="grid grid-2 mt-10" style="align-items:start;">${tgBottlenecks()}${tgNextExpansion()}</div>
  ${tgLivePayments(DB).length===0?`<div class="card mt-10">${emptyBlock('No received money recorded yet. Revenue appears here automatically when you mark invoices paid, or you can import invoices you\'ve already been paid for.','Import past paid invoices','tgOpenImport()','💷')}</div>`:''}`;
}

/* ---------- BUSINESS TRACK ---------- */
function tgLadder(biz){
  const st = tgState(DB, biz, new Date());
  const per = Number(tgSettings(DB).levelsPerGate)||2;
  const from = Math.max(1, st.level-2), to = st.level+3;
  let html = '';
  for(let L=from; L<=to; L++){
    const cyc = tgCyclesFor(DB,biz).filter(c=>c.levelCompleted && c.level===L)[0];
    const state = L<st.level ? 'done' : L===st.level ? 'current' : 'locked';
    html += `<div class="tg-step tg-step-${state}"><div class="tg-step-n">L${L}</div><div class="tg-step-t">${gbp(L===st.level?st.target:cyc?cyc.target:tgCalcTarget(DB,biz,L))}</div><div class="tg-step-s">${state==='done'?'✓ done':state==='current'?'now':'🔒'}</div></div>`;
    if(L % per === 0) html += `<div class="tg-gate ${L<st.level?'open':''}" title="Expansion gate">${L<st.level?'🔓':'🔒'}<span>Gate ${L/per}</span></div>`;
  }
  return `<div class="tg-ladder">${html}</div>`;
}
function tgBizView(biz){
  const now = new Date();
  const B = TG_BIZ[biz];
  const st = tgState(DB, biz, now);
  const pace = tgPace(st, now);
  const cap = tgCapacity(DB, biz, now);
  const acq = tgAcquisition(DB, biz, st.startDate, st.endDate);
  const pot = tgExpansionPot(DB, biz);
  const own = tgOwnerPayWeek(DB, st.weekKey);
  const cycles = tgCyclesFor(DB, biz).slice(-6).reverse();
  return `
  <div class="card mb-10 tg-biz-head" style="--c:${B.color}">
    ${tgLevelBadge(st.level, B.color)}
    <div style="flex:1;min-width:0;"><div class="tg-track-name">${B.name}</div><div class="small muted">${B.desc}</div></div>
    <div class="flex gap-8" style="flex-wrap:wrap;"><button class="btn btn-ghost btn-sm" onclick="tgOpenOverride('${biz}')">Override target</button><button class="btn btn-ghost btn-sm" onclick="tgOpenPayment(null,'${biz}')">+ Record money received</button></div>
  </div>
  ${tgLadder(biz)}
  <div class="grid grid-2 mt-10" style="align-items:start;">
    <div class="card">
      <div class="card-title">WEEKLY TARGET ${tgPill(pace.status, TG_PACE_CLS[pace.status])}</div>
      <div class="tg-big"><span>${gbp(st.revenue)}</span><small> / ${gbp(st.target)}</small></div>
      ${tgBar(st.pct, B.color, 14)}
      <div class="tg-row-stats">
        ${tgStat('Complete', Math.round(st.pct)+'%')}
        ${st.achieved?tgStat('Surplus', gbp(st.surplus),'', 'good'):tgStat('Remaining', gbp(st.remaining))}
        ${tgStat('Time left', pace.daysLeft+' day'+(pace.daysLeft===1?'':'s'), 'ends '+fmtDate(st.endDate))}
        ${tgStat('Required pace', st.achieved?'—':gbp(pace.requiredDaily)+'/day')}
      </div>
      <div class="small muted mt-10">Calculated target ${gbp(st.calcTarget)}${st.override?` · <strong style="color:var(--warning);">active override ${gbp(st.override.amount)}</strong> — ${esc(st.override.reason)} <a style="color:var(--teal);cursor:pointer;" onclick="tgEndOverride('${st.override.id}')">end override</a>`:''} · Next level target ${gbp(st.nextTarget)} (+${tgSettings(DB).growthPct}%)</div>
      ${st.achieved?`<div class="acq-banner good mt-10 flex-between" style="gap:8px;flex-wrap:wrap;"><span>🏁 TARGET ACHIEVED — the level completes when the week ends.</span><button class="btn btn-gold btn-sm" onclick="tgCompleteEarly('${biz}')">Complete now</button></div>`:''}
      <div class="divider"></div>
      <div class="card-title" style="margin-bottom:8px;">Owner pay this week <span class="small muted">combined, not revenue</span></div>
      <div class="tg-row-stats">${tgStat('Required', gbp(own.requirement))}${tgStat('Taken', gbp(own.taken))}${tgStat('Remaining', gbp(own.remaining))}${tgStat('Status', own.status, '', own.status==='Taken'?'good':own.taken>0?'warn':'')}</div>
      <button class="btn btn-ghost btn-sm mt-10" onclick="tgOpenOwnerPay()">+ Record owner pay</button>
    </div>
    ${tgMissionsCard(biz, st)}
  </div>
  ${tgCapacityCard(biz, cap)}
  <div class="grid grid-2 mt-10" style="align-items:start;">
    <div class="card">
      <div class="card-title">ACQUISITION BUDGET <span class="small muted">${tgSettings(DB).acqPct}% of received — a ceiling, not a target</span></div>
      <div class="tg-row-stats">${tgStat('Revenue received', gbp(acq.revenue))}${tgStat('Max budget', gbp(acq.max))}${tgStat('Actual spend', gbp(acq.spend), acq.over?'over by '+gbp(acq.over):'', acq.over?'bad':'')}${tgStat('Unused allowance', gbp(acq.unused), '', 'good')}</div>
      <div class="tg-row-stats">${tgStat('Acquisition %', acq.pct==null?'—':acq.pct.toFixed(1)+'%')}${tgStat('Cost per lead', acq.costPerLead==null?'—':gbp(acq.costPerLead), acq.leads?acq.leads+' leads logged':'log leads with spend')}${tgStat('Cost per sale', acq.costPerSale==null?'—':gbp(acq.costPerSale))}${tgStat('Return on spend', acq.roas==null?'—':acq.roas.toFixed(1)+'×', acq.roas==null?'unattributed':'from '+gbp(acq.attributed)+' attributed')}</div>
      <p class="small muted mt-10">Return on spend only counts payments tagged with the same channel as the spend. Anything else is shown as unattributed.</p>
      <button class="btn btn-ghost btn-sm mt-10" onclick="tgOpenAcq(null,'${biz}')">+ Log acquisition spend</button>
    </div>
    <div class="card">
      <div class="card-title">EXPANSION POT <span class="small muted">${st.levelsToGate} level${st.levelsToGate===1?'':'s'} to next gate</span></div>
      <div class="tg-row-stats">${tgStat('Allowance', gbp(pot.allowance), 'unlocked by gates')}${tgStat('Accruing', gbp(pot.accruing), tgSettings(DB).expansionPct+'% of revenue, locked')}${tgStat('Committed', gbp(pot.committed))}${tgStat('Remaining', gbp(pot.remaining), '', pot.remaining<0?'bad':'good')}</div>
      ${tgExpansionList(biz)}
      <button class="btn btn-ghost btn-sm mt-10" onclick="tgOpenExpansion(null,'${biz}')">+ Propose investment</button>
    </div>
  </div>
  <div class="card mt-10">
    <div class="card-title">RECENT CYCLES <a class="small" style="color:var(--teal);cursor:pointer;" onclick="setTgTab('history')">Full history →</a></div>
    <table><thead><tr><th>Week</th><th>Level</th><th>Target</th><th>Received</th><th>Result</th><th>Retained</th></tr></thead>
    <tbody>${cycles.map(c=>`<tr><td>${fmtDate(c.startDate)} – ${fmtDate(c.endDate)}</td><td>${c.level}</td><td>${gbp(c.target)}${c.overrideTarget!=null?' <span class="small muted">(override)</span>':''}</td><td>${gbp(c.revenue)}</td><td>${c.achieved?tgPill('Level complete','good'):tgPill('Missed — level repeats','bad')}${c.gateUnlocked?' '+tgPill('Gate '+c.gateNumber,'ok'):''}</td><td>${gbp(c.retained)}</td></tr>`).join('') || emptyRow(6,'No finished weeks yet. Your first cycle closes at the end of this week.')}</tbody></table>
  </div>`;
}
function tgMissionsCard(biz, st){
  const ms = tgMissionsFor(DB, biz, st.weekKey);
  const prCls = {High:'priority-high', Medium:'priority-med', Low:'priority-low'};
  return `<div class="card">
    <div class="card-title">WEEKLY MISSIONS <span class="small muted">${ms.filter(m=>m.complete).length}/${ms.length} done</span></div>
    ${ms.length ? ms.map((m,i)=>`<div class="tg-mission ${m.complete?'done':''}">
      <input type="checkbox" ${m.complete?'checked':''} ${m.autoComplete?'disabled title="Completed automatically from your records"':''} onchange="tgToggleMission('${m.id}')">
      <div style="flex:1;min-width:0;">
        <div class="tg-mission-t">${esc(m.title)}</div>
        <div class="small muted">${m.target>1?`${m.progressShown}/${m.target}${m.autoProgress!=null?' <span title="Counted from your records">· auto</span>':''} · `:''}due ${fmtDate(m.due)}${m.link?' · '+esc(m.link):''}</div>
        ${m.target>1?tgBar(m.progressShown/m.target*100, TG_BIZ[biz].color, 4):''}
      </div>
      <span class="pill ${prCls[m.priority]||'priority-low'}">${esc(m.priority||'Low')}</span>
      <span class="tg-mission-btns">
        <button class="icon-btn" title="Move up" ${i===0?'disabled':''} onclick="tgMoveMission('${m.id}',-1)">↑</button>
        <button class="icon-btn" title="Move down" ${i===ms.length-1?'disabled':''} onclick="tgMoveMission('${m.id}',1)">↓</button>
        <button class="icon-btn" title="Edit" onclick="tgOpenMission('${m.id}','${biz}')">✎</button>
      </span>
    </div>`).join('') : emptyBlock('No missions this week.','','','🎯')}
    <button class="btn btn-ghost btn-sm mt-10" onclick="tgOpenMission(null,'${biz}')">+ Add mission</button>
  </div>`;
}
function tgCapacityCard(biz, cap){
  return `<div class="card mt-10">
    <div class="flex-between" style="flex-wrap:wrap;gap:8px;margin-bottom:10px;">
      <div class="card-title" style="margin:0;">OPERATIONS / CAPACITY <span class="small muted" style="margin-left:6px;">stage: ${tgStage(cap.st.level)} · level ${cap.st.level} → ${cap.st.level+1}</span></div>
      <button class="btn btn-ghost btn-sm" onclick="tgOpenCapacity('${biz}')">Edit capacity inputs</button>
    </div>
    <div class="acq-banner ${cap.bottleneck.type==='delivery'?'push':cap.bottleneck.type==='sales'?'warn':'good'}"><strong>${cap.bottleneck.label}</strong> — ${esc(cap.bottleneck.detail)}</div>
    <table class="mt-10"><thead><tr><th>Area</th><th>Current</th><th>Needed for next target (${gbp(cap.st.nextTarget)})</th><th>Gap</th><th>Status</th></tr></thead>
    <tbody>${cap.rows.map(r=>`<tr><td>${esc(r.area)}</td><td>${r.current} ${r.unit}</td><td>${r.required} ${r.unit}</td><td>${r.gap>0?'+'+r.gap:'—'}</td><td>${tgPill(r.status, r.status==='OK'?'good':r.status==='Tight'?'warn':'bad')}</td></tr>`).join('')}</tbody></table>
    <p class="small muted mt-10">Average ${TG_BIZ[biz].unit} value ${gbp(cap.m.avgValue)}${cap.m.avgAuto?' (from your paid invoices)':' (your input)'} · conversion ${Math.round(cap.m.conversion*100)}%${cap.m.convAuto?' (from your records, or 40–50% default until you have 3+ decided)':' (your input)'} · required ${TG_BIZ[biz].units} = target ÷ average value · required leads = ${TG_BIZ[biz].units} ÷ conversion.</p>
    <div class="card-title mt-10" style="margin-bottom:6px;">Recommended actions</div>
    ${cap.recs.map(r=>tgRecRow(r)).join('')}
  </div>`;
}
function tgRecRow(r){
  const d = tgDecision(DB, r.key);
  const status = d ? (d.status==='approved'?'Approved':'Dismissed') : 'Open';
  return `<div class="tg-rec ${d&&d.status==='dismissed'?'dismissed':''}">
    <div style="flex:1;min-width:0;">
      <div class="small muted">${esc(r.issue)}</div>
      <div style="font-weight:700;margin:3px 0;">${esc(r.action)}</div>
      <div class="small muted">Benefit: ${esc(r.benefit)} · Cost: ${esc(r.cost||'—')}</div>
    </div>
    <div class="tg-rec-side">
      <span class="pill ${r.priority==='High'?'priority-high':r.priority==='Medium'?'priority-med':'priority-low'}">${r.priority}</span>
      ${tgPill(status, status==='Approved'?'good':status==='Dismissed'?'muted':'ok')}
      ${d?`<button class="icon-btn" title="Reopen" onclick="tgDecide('${r.key}','reopen')">↺</button>`:`<button class="btn btn-success btn-sm" onclick="tgDecide('${r.key}','approved')">Approve</button><button class="btn btn-ghost btn-sm" onclick="tgDecide('${r.key}','dismissed')">Dismiss</button>`}
    </div>
  </div>`;
}
function tgDecide(key, status){
  const list = tgArr(DB,'tgDecisions');
  const i = list.findIndex(d=>d.key===key);
  if(status==='reopen'){ if(i>-1) list.splice(i,1); }
  else if(i>-1) Object.assign(list[i], {status, at:new Date().toISOString()});
  else list.push({id:'dec-'+key, key, status, at:new Date().toISOString(), by:CURRENT_USER_EMAIL||''});
  save(); renderPage();
  toast(status==='approved'?'Approved — add it to this week\'s missions if it needs doing now':status==='dismissed'?'Dismissed':'Reopened');
}
function tgExpansionList(biz){
  const items = tgArr(DB,'tgExpansion').filter(x=>x.biz===biz).sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,6);
  if(!items.length) return '<p class="small muted mt-10">No investments yet. Proposals stay pending until you approve them. Nothing is spent automatically.</p>';
  const tone = {pending:'warn', approved:'ok', spent:'good', dismissed:'muted', topup:'good'};
  return `<div class="mt-10">${items.map(x=>`<div class="tg-exp-row"><div style="flex:1;min-width:0;"><strong>${esc(x.kind==='topup'?'Top-up':x.category)}</strong> · ${gbp(x.amount)}<div class="small muted">${esc(x.reason||'')}${x.result?' · result: '+esc(x.result):''}</div></div>${tgPill(x.kind==='topup'?'Added to pot':x.status, tone[x.kind==='topup'?'topup':x.status])}${x.kind!=='topup'?`<button class="icon-btn" title="Edit" onclick="tgOpenExpansion('${x.id}','${biz}')">✎</button>`:''}</div>`).join('')}</div>`;
}

/* ---------- COMBINED ---------- */
function tgCombinedView(){
  const now = new Date();
  const w = tgWeekRange(now);
  const sw = tgState(DB,'sw',now), sf = tgState(DB,'sf',now);
  const target = sw.target + sf.target, revenue = tgRevenue(DB,'all',w.start,w.end);
  const pct = target ? revenue/target*100 : 0;
  const acq = tgAcquisition(DB,'all',w.start,w.end);
  return `
  <div class="card">
    <div class="card-title">ALL BUSINESSES — THIS WEEK <span class="small muted">${fmtDate(w.start)} – ${fmtDate(w.end)} · levels stay separate</span></div>
    <div class="tg-big"><span>${gbp(revenue)}</span><small> / ${gbp(target)}</small></div>
    ${tgBar(pct, 'linear-gradient(90deg,var(--gold),var(--teal))', 14)}
    <div class="tg-row-stats">
      ${tgStat('SteadyWorks', gbp(sw.revenue)+' / '+gbp(sw.target), 'Level '+sw.level)}
      ${tgStat('SteadyFlow', gbp(sf.revenue)+' / '+gbp(sf.target), 'Level '+sf.level)}
      ${tgStat('Combined', Math.round(pct)+'%')}
      ${tgStat('Starting combined target', gbp((Number(tgSettings(DB).startTargets.sw)||0)+(Number(tgSettings(DB).startTargets.sf)||0)))}
    </div>
  </div>
  ${tgCombinedStrip()}
  <div class="grid grid-2 mt-10" style="align-items:start;">
    <div class="card"><div class="card-title">ACQUISITION — BOTH BUSINESSES</div>
      <div class="tg-row-stats">${tgStat('Max budget', gbp(acq.max))}${tgStat('Spent', gbp(acq.spend))}${tgStat('Unused', gbp(acq.unused),'', 'good')}${tgStat('Acquisition %', acq.pct==null?'—':acq.pct.toFixed(1)+'%')}</div></div>
    <div class="card"><div class="card-title">EXPANSION — BOTH BUSINESSES</div>
      ${(()=>{ const p = tgExpansionPot(DB,'all'); return `<div class="tg-row-stats">${tgStat('Allowance', gbp(p.allowance))}${tgStat('Committed', gbp(p.committed))}${tgStat('Spent', gbp(p.spent))}${tgStat('Remaining', gbp(p.remaining),'', 'good')}</div>`; })()}</div>
  </div>
  <div class="grid grid-2 mt-10" style="align-items:start;">${tgTrackCard('sw')}${tgTrackCard('sf')}</div>`;
}

/* ---------- LEDGER ---------- */
function tgLedgerState(){ if(!window._tgLedger) window._tgLedger = {biz:'all', show:'payments'}; return window._tgLedger; }
function tgLedgerView(){
  const f = tgLedgerState();
  const bizOk = x => f.biz==='all' || x.biz===f.biz || (f.biz!=='all' && !x.biz);
  const sec = [['payments','Money received'],['acq','Acquisition spend'],['owner','Owner pay'],['expansion','Expansion'],['audit','Audit trail']];
  let table = '';
  if(f.show==='payments'){
    const rows = tgArr(DB,'tgPayments').filter(p=>f.biz==='all'||p.biz===f.biz).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    const closedIn = p => tgArr(DB,'tgCycles').some(c=>c.biz===p.biz && tgInRange(p.date,c.startDate,c.endDate));
    table = `<table><thead><tr><th>Date</th><th>Business</th><th>Amount</th><th>Type</th><th>Customer</th><th>Job / project</th><th>Source</th><th>Notes</th><th></th></tr></thead><tbody>${rows.map(p=>`<tr style="${p.removed?'opacity:.45;':''}">
      <td>${fmtDate(p.date)}</td><td>${TG_BIZ[p.biz]?TG_BIZ[p.biz].short:'—'}</td><td><strong>${gbp(p.amount)}</strong></td><td>${esc((TG_PAYMENT_TYPES.find(t=>t[0]===p.type)||['',p.type])[1])}</td>
      <td>${esc(p.customer||'—')}</td><td class="small">${esc(p.job||'—')}</td>
      <td class="small">${p.manual?tgPill('Manual','warn'):esc(p.sourceType||'')}${p.estimated?' '+tgPill('Estimated date','muted'):''}${p.removed?' '+tgPill('Removed','muted'):''}${closedIn(p)?' '+tgPill('In closed week','muted'):''}</td>
      <td class="small muted">${esc(p.notes||'')}${p.channel?' · '+esc(p.channel):''}</td>
      <td>${p.removed?'':`<button class="icon-btn" title="Edit" onclick="tgOpenPayment('${p.id}')">✎</button>`}</td></tr>`).join('') || emptyRow(9,'No money recorded yet. Payments are added automatically when you raise "Amount Paid" or mark an invoice paid.','Import past paid invoices','tgOpenImport()')}</tbody></table>`;
  } else if(f.show==='acq'){
    const rows = tgArr(DB,'tgAcqSpend').filter(bizOk).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    table = `<table><thead><tr><th>Date</th><th>Business</th><th>Amount</th><th>Channel</th><th>Campaign</th><th>Supplier</th><th>Leads / sales</th><th>Related</th><th></th></tr></thead><tbody>${rows.map(a=>`<tr><td>${fmtDate(a.date)}</td><td>${TG_BIZ[a.biz].short}</td><td><strong>${gbp(a.amount)}</strong></td><td>${esc(a.channel||'—')}</td><td>${esc(a.campaign||'—')}</td><td>${esc(a.supplier||'—')}</td><td>${a.leads||0} / ${a.sales||0}</td><td class="small">${esc(a.related||'')}</td><td><button class="icon-btn" title="Edit" onclick="tgOpenAcq('${a.id}')">✎</button></td></tr>`).join('') || emptyRow(9,'No acquisition spend logged.','+ Log spend','tgOpenAcq()')}</tbody></table>`;
  } else if(f.show==='owner'){
    const rows = tgArr(DB,'tgOwnerPay').filter(bizOk).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    table = `<table><thead><tr><th>Date</th><th>Amount</th><th>Status</th><th>Paid from</th><th>Notes</th><th></th></tr></thead><tbody>${rows.map(o=>`<tr><td>${fmtDate(o.date)}</td><td><strong>${gbp(o.amount)}</strong></td><td>${esc({taken:'Taken',scheduled:'Scheduled',partial:'Partially taken',not:'Not taken'}[o.status]||o.status)}</td><td>${o.biz?TG_BIZ[o.biz].name:'Combined'}</td><td class="small muted">${esc(o.notes||'')}</td><td><button class="icon-btn" title="Edit" onclick="tgOpenOwnerPay('${o.id}')">✎</button></td></tr>`).join('') || emptyRow(6,'No owner pay recorded.','+ Record owner pay','tgOpenOwnerPay()')}</tbody></table>`;
  } else if(f.show==='expansion'){
    const rows = tgArr(DB,'tgExpansion').filter(bizOk).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    table = `<table><thead><tr><th>Date</th><th>Business</th><th>Category</th><th>Amount</th><th>Status</th><th>Reason / expected benefit</th><th>Result / ROI</th><th>Gate</th><th></th></tr></thead><tbody>${rows.map(x=>`<tr><td>${fmtDate(x.date)}</td><td>${TG_BIZ[x.biz]?TG_BIZ[x.biz].short:'—'}</td><td>${esc(x.kind==='topup'?'Top-up':x.category)}</td><td><strong>${gbp(x.amount)}</strong></td><td>${esc(x.kind==='topup'?'Added to pot':x.status)}</td><td class="small">${esc(x.reason||'')}${x.benefit?'<div class="muted">'+esc(x.benefit)+'</div>':''}</td><td class="small">${esc(x.result||'—')}</td><td>${x.gate||'—'}</td><td>${x.kind==='topup'?'':`<button class="icon-btn" title="Edit" onclick="tgOpenExpansion('${x.id}')">✎</button>`}</td></tr>`).join('') || emptyRow(9,'No expansion investments yet.','+ Propose investment','tgOpenExpansion()')}</tbody></table>`;
  } else {
    const rows = tgArr(DB,'tgAudit');
    table = `<table><thead><tr><th>When</th><th>Record</th><th>Action</th><th>Change</th><th>Reason</th><th>By</th></tr></thead><tbody>${rows.map(a=>`<tr><td class="small">${fmtDateTime(a.at)}</td><td class="small">${esc(a.entity)}</td><td>${esc(a.action)}</td><td class="small muted" style="max-width:340px;">${esc(tgDiffText(a.before,a.after))}</td><td class="small">${esc(a.reason||'')}</td><td class="small muted">${esc(a.by||'')}</td></tr>`).join('') || emptyRow(6,'No edits recorded yet.')}</tbody></table>`;
  }
  const addBtn = {payments:`<button class="btn btn-ghost btn-sm" onclick="tgOpenImport()">Import past paid invoices</button><button class="btn btn-gold btn-sm" onclick="tgOpenPayment()">+ Manual payment</button>`, acq:`<button class="btn btn-gold btn-sm" onclick="tgOpenAcq()">+ Log spend</button>`, owner:`<button class="btn btn-gold btn-sm" onclick="tgOpenOwnerPay()">+ Owner pay</button>`, expansion:`<button class="btn btn-gold btn-sm" onclick="tgOpenExpansion()">+ Propose investment</button>`, audit:''}[f.show];
  return `<div class="toolbar">
    <div class="seg-toggle">${sec.map(([k,l])=>`<button class="seg-btn ${f.show===k?'active':''}" style="${f.show===k?'background:var(--gold);color:#fff;':''}" onclick="tgLedgerState().show='${k}'; renderPage();">${l}</button>`).join('')}</div>
    <select style="width:auto;" onchange="tgLedgerState().biz=this.value; renderPage();"><option value="all">Both businesses</option><option value="sw" ${f.biz==='sw'?'selected':''}>SteadyWorks</option><option value="sf" ${f.biz==='sf'?'selected':''}>SteadyFlow</option></select>
    <div class="spacer"></div>${addBtn}
  </div>
  <div class="card">${table}</div>
  <p class="small muted mt-10">Only money actually received counts toward targets. Accepted quotes, unpaid invoices and pipeline value never do. Removing a payment keeps it in the audit trail.</p>`;
}
function tgDiffText(before, after){
  if(!before && after) return 'created';
  if(before && !after) return 'removed';
  if(!before || !after) return '';
  return Object.keys(after).filter(k=>JSON.stringify(before[k])!==JSON.stringify(after[k]) && !['updatedAt'].includes(k)).map(k=>`${k}: ${before[k]==null?'—':before[k]} → ${after[k]==null?'—':after[k]}`).join(' · ') || 'no change';
}

/* ---------- REWARDS ---------- */
function tgRewardsView(){
  const list = tgArr(DB,'tgRewards');
  const st = r => (r.status||'locked');
  const label = {locked:'LOCKED', unlocked:'REWARD UNLOCKED', saved:'SAVED FOR LATER', claimed:'CLAIMED', moved:'MOVED TO EXPANSION'};
  const tone = {locked:'muted', unlocked:'good', saved:'ok', claimed:'good', moved:'ok'};
  return `<div class="toolbar"><div class="small muted">Rewards are personal and separate from business expansion. Nothing is deducted unless you confirm a claim.</div><div class="spacer"></div><button class="btn btn-gold btn-sm" onclick="tgOpenReward()">+ Add reward</button></div>
  ${list.length ? `<div class="grid grid-3">${list.slice().sort((a,b)=>['unlocked','saved','locked','claimed','moved'].indexOf(st(a))-['unlocked','saved','locked','claimed','moved'].indexOf(st(b))).map(r=>{
    const s = st(r), bizName = r.biz==='combined'?'Both businesses':TG_BIZ[r.biz].name;
    const req = r.trigger==='gate' ? 'Expansion gate '+(r.requiredGate||1) : 'Level '+(r.requiredLevel||1)+' complete';
    const done = r.biz==='combined' ? Math.min(tgLevelsCompleted(DB,'sw'),tgLevelsCompleted(DB,'sf')) : tgLevelsCompleted(DB,r.biz);
    return `<div class="card tg-reward tg-reward-${s}">
      <div class="flex-between">${tgPill(label[s], tone[s])}<button class="icon-btn" title="Edit" onclick="tgOpenReward('${r.id}')">✎</button></div>
      <div class="tg-reward-icon">${s==='locked'?'🔒':s==='claimed'?'🏆':'🎁'}</div>
      <div style="font-size:16px;font-weight:800;">${esc(r.name)}</div>
      <div class="small muted">${esc(r.type||'')} · ${bizName} · ${req}</div>
      <div class="small muted">Est. cost ${gbp(r.cost)}${r.unlockedAt?' · unlocked '+fmtDate(r.unlockedAt):''}${r.claimedAt?' · claimed '+fmtDate(r.claimedAt):''}</div>
      ${s==='locked' && r.trigger!=='gate' ? tgBar(Math.min(100, done/(Number(r.requiredLevel)||1)*100), 'var(--gold)', 6) : ''}
      ${(s==='unlocked'||s==='saved')?`<div class="flex gap-8 mt-10" style="flex-wrap:wrap;"><button class="btn btn-gold btn-sm" onclick="tgRewardDo('${r.id}','claim')">Claim</button>${s==='unlocked'?`<button class="btn btn-ghost btn-sm" onclick="tgRewardDo('${r.id}','save')">Save for later</button>`:''}<button class="btn btn-ghost btn-sm" onclick="tgRewardDo('${r.id}','move')">Move money to expansion</button></div>`:''}
      ${r.notes?`<div class="small muted mt-10">${esc(r.notes)}</div>`:''}
    </div>`; }).join('')}</div>` : `<div class="card">${emptyBlock('No rewards set yet. Attach something you want to a level or an expansion gate, like a new tool, a day out, or eventually a van.','+ Add reward','tgOpenReward()','🎁')}</div>`}`;
}
function tgRewardDo(id, action){
  const r = tgArr(DB,'tgRewards').find(x=>x.id===id);
  if(!r) return;
  const msg = {claim:`Claim "${r.name}"? ${gbp(r.cost)} will be counted against retained cash.`, save:`Save "${r.name}" for later?`, move:`Move ${gbp(r.cost)} from "${r.name}" into the expansion pot instead? This can't be undone.`}[action];
  openModal(`<div class="modal-head"><h2>${action==='claim'?'Claim reward':action==='save'?'Save for later':'Move to expansion'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p>${esc(msg)}</p></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgRewardConfirm('${id}','${action}')">Confirm</button></div>`);
}
function tgRewardConfirm(id, action){
  const before = Object.assign({}, tgArr(DB,'tgRewards').find(x=>x.id===id));
  const res = tgRewardAction(DB, id, action, new Date());
  if(res.error){ toast(res.error,'⚠️'); return; }
  tgAudit('Reward', id, action, before, Object.assign({}, res.reward));
  save(); closeModal(); renderPage();
  toast({claim:'Reward claimed — enjoy it 🏆', save:'Saved for later', move:'Moved into the expansion pot'}[action]);
}

/* ---------- PROJECTION ---------- */
function tgProjState(){
  if(!window._tgProj){ const st = tgState(DB,'sf',new Date()); const s = tgSettings(DB); window._tgProj = {biz:'sf', startTarget:st.target, growthPct:s.growthPct, successWeeks:8, weeks:12}; }
  return window._tgProj;
}
function tgProjectionView(){
  const now = new Date();
  const p = tgProjState();
  const comp = ['sw','sf'].map(biz=>{ const st = tgState(DB,biz,now); const cap = tgCapacity(DB,biz,now); return `<div class="card tg-compound" style="--c:${TG_BIZ[biz].color}">
    <div class="flex-between"><strong>${TG_BIZ[biz].name}</strong>${tgLevelBadge(st.level, TG_BIZ[biz].color)}</div>
    <div class="tg-compound-flow">
      <div>${tgStat('Current target', gbp(st.target))}</div><span>→</span>
      <div>${tgStat('Next target', gbp(st.nextTarget))}</div><span>→</span>
      <div>${tgStat('Acquisition allowance', gbp(st.nextTarget*tgSettings(DB).acqPct/100), 'at next target')}</div>
    </div>
    <div class="tg-row-stats">${tgStat('Gates unlocked', st.gatesUnlocked)}${tgStat('Next gate in', st.levelsToGate+' lvl')}${tgStat('Capacity needed next', cap.next.sales+' '+TG_BIZ[biz].units+'/wk', 'you have ~'+cap.m.capacityUnits)}</div>
  </div>`; }).join('');
  return `<div class="grid grid-2" style="align-items:start;">${comp}</div>
  <div class="card mt-10">
    <div class="card-title">PERFECT RUN PROJECTION <span class="small" style="color:var(--warning);font-weight:700;">Not a forecast. It shows what happens if every target is hit.</span></div>
    <div class="form-row form-row-3" style="grid-template-columns:repeat(5,1fr);">
      <div class="form-group"><label>Business</label><select id="pj-biz" onchange="tgProjBiz(this.value)"><option value="sw" ${p.biz==='sw'?'selected':''}>SteadyWorks</option><option value="sf" ${p.biz==='sf'?'selected':''}>SteadyFlow</option></select></div>
      <div class="form-group"><label>Starting target (£)</label><input id="pj-start" type="number" min="0" value="${p.startTarget}" oninput="tgProjState().startTarget=this.value; tgProjectionRender();"></div>
      <div class="form-group"><label>Growth per level (%)</label><input id="pj-growth" type="number" min="0" value="${p.growthPct}" oninput="tgProjState().growthPct=this.value; tgProjectionRender();"></div>
      <div class="form-group"><label>Successful weeks</label><input id="pj-wins" type="number" min="0" value="${p.successWeeks}" oninput="tgProjState().successWeeks=this.value; tgProjectionRender();"></div>
      <div class="form-group"><label>Projection period (weeks)</label><input id="pj-weeks" type="number" min="1" max="104" value="${p.weeks}" oninput="tgProjState().weeks=this.value; tgProjectionRender();"></div>
    </div>
    <div style="position:relative;height:240px;"><canvas id="chartTgProjection"></canvas></div>
    <div id="tg-proj-table" class="mt-10"></div>
  </div>`;
}
function tgProjBiz(b){ const p = tgProjState(); p.biz = b; p.startTarget = tgState(DB,b,new Date()).target; renderPage(); }
function tgProjectionRender(){
  const p = tgProjState(), s = tgSettings(DB);
  const st = tgState(DB, p.biz, new Date());
  const rows = tgProject({startTarget:p.startTarget, growthPct:p.growthPct, successWeeks:Math.min(p.successWeeks,p.weeks), weeks:Math.min(104,p.weeks), levelsPerGate:s.levelsPerGate, acqPct:s.acqPct, startLevel:st.level});
  const box = document.getElementById('tg-proj-table');
  if(box){
    const last = rows[rows.length-1];
    box.innerHTML = `<div class="tg-row-stats">${tgStat('Projected level', last.level)}${tgStat('Projected weekly target', gbp(last.target))}${tgStat('Cumulative revenue', gbp(last.cumulative))}${tgStat('Expansion gates reached', last.gates)}</div>
    <p class="small muted mt-10"><strong>Assumptions:</strong> starts at level ${st.level} on ${gbp(p.startTarget)}. Each of the first ${Math.min(p.successWeeks,p.weeks)} weeks hits its target exactly, then the target grows ${p.growthPct}%. Later weeks repeat the level with £0 counted. Acquisition allowance is ${s.acqPct}% of each week's revenue, and a gate unlocks every ${s.levelsPerGate} levels. It ignores capacity limits, which the Operations panel covers.</p>
    <table class="mt-10"><thead><tr><th>Week</th><th>Level</th><th>Weekly target</th><th>Hit?</th><th>Cumulative revenue</th><th>Acq. allowance</th><th>Gate</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.week}</td><td>${r.level}</td><td>${gbp(r.target)}</td><td>${r.success?'✓':'—'}</td><td>${gbp(r.cumulative)}</td><td>${gbp(r.acqAllowance)}</td><td>${r.gate?'🔓 Gate '+r.gates:''}</td></tr>`).join('')}</tbody></table>`;
  }
  chartSafe('chartTgProjection','bar',{labels:rows.map(r=>'Wk '+r.week),datasets:[
    {type:'bar', label:'Weekly target', data:rows.map(r=>r.target), backgroundColor:TG_BIZ[p.biz].color+'99', borderRadius:5, yAxisID:'y'},
    {type:'line', label:'Cumulative revenue', data:rows.map(r=>r.cumulative), borderColor:'#F59E0B', backgroundColor:'rgba(245,158,11,.15)', tension:.3, yAxisID:'y1'}
  ]},{plugins:{legend:{position:'bottom'}}, scales:{y:{ticks:{callback:v=>'£'+v}}, y1:{position:'right', grid:{drawOnChartArea:false}, ticks:{callback:v=>'£'+v}}}});
}

/* ---------- HISTORY ---------- */
function tgHistState(){ if(!window._tgHist) window._tgHist = {biz:'all', from:'', to:'', level:'', result:'all', revType:'all'}; return window._tgHist; }
function tgHistRows(){
  const f = tgHistState();
  return tgArr(DB,'tgCycles').filter(c=>(f.biz==='all'||c.biz===f.biz) && (!f.from||c.endDate>=f.from) && (!f.to||c.startDate<=f.to) && (!f.level||String(c.level)===String(f.level)) && (f.result==='all'||(f.result==='hit'?c.achieved:!c.achieved)))
    .sort((a,b)=>a.startDate.localeCompare(b.startDate) || a.biz.localeCompare(b.biz));
}
function tgHistoryView(){
  const f = tgHistState();
  const rows = tgHistRows();
  const rev = c => f.revType==='deposits' ? c.deposits : f.revType==='finals' ? c.finals : c.revenue;
  return `<div class="toolbar">
    <select style="width:auto;" onchange="tgHistState().biz=this.value; renderPage();"><option value="all">Both businesses</option><option value="sw" ${f.biz==='sw'?'selected':''}>SteadyWorks</option><option value="sf" ${f.biz==='sf'?'selected':''}>SteadyFlow</option></select>
    <input type="date" value="${f.from}" title="From" style="width:auto;" onchange="tgHistState().from=this.value; renderPage();">
    <input type="date" value="${f.to}" title="To" style="width:auto;" onchange="tgHistState().to=this.value; renderPage();">
    <input type="number" min="1" placeholder="Level" value="${f.level}" style="width:90px;" onchange="tgHistState().level=this.value; renderPage();">
    <select style="width:auto;" onchange="tgHistState().result=this.value; renderPage();"><option value="all">All results</option><option value="hit" ${f.result==='hit'?'selected':''}>Targets hit</option><option value="miss" ${f.result==='miss'?'selected':''}>Missed</option></select>
    <select style="width:auto;" onchange="tgHistState().revType=this.value; renderPage();"><option value="all">All revenue</option><option value="deposits" ${f.revType==='deposits'?'selected':''}>Deposits only</option><option value="finals" ${f.revType==='finals'?'selected':''}>Final payments only</option></select>
  </div>
  ${rows.length ? `<div class="grid grid-2">
    <div class="card"><div class="card-title">Targets vs actual</div><div style="height:220px;position:relative;"><canvas id="chartTgTvA"></canvas></div></div>
    <div class="card"><div class="card-title">Revenue growth & retained cash</div><div style="height:220px;position:relative;"><canvas id="chartTgRetained"></canvas></div></div>
    <div class="card"><div class="card-title">Acquisition % of revenue</div><div style="height:200px;position:relative;"><canvas id="chartTgAcq"></canvas></div></div>
    <div class="card"><div class="card-title">Owner pay & expansion spend</div><div style="height:200px;position:relative;"><canvas id="chartTgOwner"></canvas></div></div>
    <div class="card"><div class="card-title">Average sale value</div><div style="height:200px;position:relative;"><canvas id="chartTgAvg"></canvas></div></div>
    <div class="card"><div class="card-title">Missions completed</div><div style="height:200px;position:relative;"><canvas id="chartTgMissions"></canvas></div></div>
  </div>` : ''}
  <div class="card mt-10"><table><thead><tr><th>Week</th><th>Business</th><th>Level</th><th>Target</th><th>${f.revType==='deposits'?'Deposits':f.revType==='finals'?'Final payments':'Received'}</th><th>Acq.</th><th>Op. costs</th><th>Owner pay</th><th>Expansion</th><th>Retained</th><th>Missions</th><th>Result</th><th></th></tr></thead>
  <tbody>${rows.slice().reverse().map(c=>`<tr>
    <td class="small">${fmtDate(c.startDate)} – ${fmtDate(c.endDate)}${c.earlyClose?' <span class="muted">(early)</span>':''}</td><td>${TG_BIZ[c.biz].short}</td><td>${c.level}</td>
    <td>${gbp(c.target)}${c.overrideTarget!=null?`<div class="small muted">calc ${gbp(c.calcTarget)} · override</div>`:''}</td><td><strong>${gbp(rev(c))}</strong></td><td>${gbp(c.acqSpend)}</td><td>${gbp(c.opCosts)}</td><td>${gbp(c.ownerPay)}</td><td>${gbp(c.expansionSpend)}</td><td>${gbp(c.retained)}</td>
    <td>${c.missionsDone}/${c.missionsTotal}</td><td>${c.achieved?tgPill('Level '+c.level+' complete','good'):tgPill('Missed','bad')}${c.gateUnlocked?' '+tgPill('Gate '+c.gateNumber,'ok'):''}${(c.corrections||[]).length?' '+tgPill('Corrected','warn'):''}</td>
    <td><button class="icon-btn" title="Correct this record" onclick="tgOpenCorrection('${c.id}')">✎</button></td></tr>`).join('') || emptyRow(13,'No finished cycles yet. Each week is saved here permanently when it ends.')}</tbody></table></div>
  <p class="small muted mt-10">Closed weeks can't be deleted. Corrections keep the original value and log who changed what and why.</p>`;
}
function tgHistoryCharts(){
  const rows = tgHistRows();
  if(!rows.length) return;
  const labels = rows.map(c=>TG_BIZ[c.biz].short+' '+fmtDate(c.startDate).slice(0,6));
  const col = rows.map(c=>TG_BIZ[c.biz].color);
  const o = {plugins:{legend:{position:'bottom',labels:{boxWidth:10,font:{size:10}}}}};
  chartSafe('chartTgTvA','bar',{labels,datasets:[{type:'bar',label:'Received',data:rows.map(c=>c.revenue),backgroundColor:col,borderRadius:5},{type:'line',label:'Target',data:rows.map(c=>c.target),borderColor:'#F59E0B',backgroundColor:'#F59E0B',tension:.2}]},o);
  chartSafe('chartTgRetained','line',{labels,datasets:[{label:'Received',data:rows.map(c=>c.revenue),borderColor:'#E11D2A',tension:.3},{label:'Retained cash',data:rows.map(c=>c.retained),borderColor:'#22C55E',backgroundColor:'rgba(34,197,94,.12)',fill:true,tension:.3}]},o);
  chartSafe('chartTgAcq','bar',{labels,datasets:[{label:'Acquisition %',data:rows.map(c=>c.revenue>0?tgRound(c.acqSpend/c.revenue*100):0),backgroundColor:'#7C3AED',borderRadius:5}]},Object.assign({},o,{scales:{y:{ticks:{callback:v=>v+'%'}}}}));
  chartSafe('chartTgOwner','bar',{labels,datasets:[{label:'Owner pay',data:rows.map(c=>c.ownerPay),backgroundColor:'#00A99D',borderRadius:5},{label:'Expansion spend',data:rows.map(c=>c.expansionSpend),backgroundColor:'#F59E0B',borderRadius:5}]},o);
  chartSafe('chartTgAvg','line',{labels,datasets:[{label:'Average sale',data:rows.map(c=>c.avgSale),borderColor:'#00E5CC',tension:.3}]},o);
  chartSafe('chartTgMissions','bar',{labels,datasets:[{label:'Done',data:rows.map(c=>c.missionsDone),backgroundColor:'#22C55E',borderRadius:5},{label:'Set',data:rows.map(c=>c.missionsTotal),backgroundColor:'#3A4058',borderRadius:5}]},o);
}

/* ---------- SETTINGS ---------- */
function tgSettingsView(){
  const s = tgSettings(DB);
  const hasCycles = tgArr(DB,'tgCycles').length>0;
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return `<div class="grid grid-2" style="align-items:start;">
    <div class="card"><div class="card-title">Targets & growth</div>
      <div class="form-row"><div class="form-group"><label>SteadyWorks starting target (£/week)</label><input id="ts-sw" type="number" min="0" value="${s.startTargets.sw}"></div><div class="form-group"><label>SteadyFlow starting target (£/week)</label><input id="ts-sf" type="number" min="0" value="${s.startTargets.sf}"></div></div>
      <div class="form-row"><div class="form-group"><label>Growth when a target is hit (%)</label><input id="ts-growth" type="number" min="0" value="${s.growthPct}"></div><div class="form-group"><label>Levels per expansion gate</label><input id="ts-gate" type="number" min="1" value="${s.levelsPerGate}"></div></div>
      <div class="form-row"><div class="form-group"><label>Week starts on</label><select id="ts-wsd" ${hasCycles?'disabled title="Fixed once weeks have been recorded"':''}>${days.map((d,i)=>`<option value="${i}" ${Number(s.weekStartDay)===i?'selected':''}>${d}</option>`).join('')}</select></div>
        <div class="form-group"><label>Tracking started (week)</label><input id="ts-started" type="date" value="${s.startedWeek}" ${hasCycles?'disabled title="Fixed once weeks have been recorded"':''}></div></div>
      <p class="small muted">Changing starting targets or growth only affects levels that haven't been played yet. Closed weeks keep the targets they had.</p>
    </div>
    <div class="card"><div class="card-title">Money rules</div>
      <div class="form-row"><div class="form-group"><label>Owner pay per week (£, combined)</label><input id="ts-owner" type="number" min="0" value="${s.ownerPayWeekly}"></div><div class="form-group"><label>Acquisition budget (% of received)</label><input id="ts-acq" type="number" min="0" max="100" value="${s.acqPct}"></div></div>
      <div class="form-row"><div class="form-group"><label>Expansion pot accrual (% of received)</label><input id="ts-exp" type="number" min="0" max="100" value="${s.expansionPct}"></div><div class="form-group"><label>Road-to goal (£)</label><input id="ts-goal" type="number" min="1" value="${s.road50kGoal}"></div></div>
      <p class="small muted">The expansion pot accrues each week but only unlocks at an expansion gate. Owner pay never grows with levels.</p>
    </div>
  </div>
  <div class="flex" style="justify-content:flex-end;margin-top:14px;"><button class="btn btn-gold" onclick="tgSaveSettings()">Save settings</button></div>`;
}
function tgSaveSettings(){
  const s = tgSettings(DB);
  const v = id => document.getElementById(id);
  const nums = {sw:Number(v('ts-sw').value), sf:Number(v('ts-sf').value), growth:Number(v('ts-growth').value), gate:Number(v('ts-gate').value), owner:Number(v('ts-owner').value), acq:Number(v('ts-acq').value), exp:Number(v('ts-exp').value), goal:Number(v('ts-goal').value)};
  if(Object.values(nums).some(n=>!isFinite(n) || n<0)){ toast('Values can\'t be negative','⚠️'); return; }
  if(nums.gate<1){ toast('A gate needs at least 1 level','⚠️'); return; }
  const before = JSON.parse(JSON.stringify(s));
  Object.assign(s, {startTargets:{sw:nums.sw, sf:nums.sf}, growthPct:nums.growth, levelsPerGate:Math.floor(nums.gate), ownerPayWeekly:nums.owner, acqPct:nums.acq, expansionPct:nums.exp, road50kGoal:nums.goal||50000});
  if(!tgArr(DB,'tgCycles').length){
    s.weekStartDay = Number(v('ts-wsd').value);
    if(v('ts-started').value) s.startedWeek = tgWeekStart(v('ts-started').value, s.weekStartDay);
  }
  tgAudit('Target settings', 'settings', 'updated', {startTargets:before.startTargets, growthPct:before.growthPct, ownerPayWeekly:before.ownerPayWeekly, acqPct:before.acqPct}, {startTargets:s.startTargets, growthPct:s.growthPct, ownerPayWeekly:s.ownerPayWeekly, acqPct:s.acqPct});
  save(); renderPage(); toast('Target settings saved');
}

/* ---------- TARGETS — FORMS & ACTIONS ---------- */
function tgBizSelect(id, val, allowCombined){
  return `<select id="${id}">${allowCombined?`<option value="" ${!val?'selected':''}>Combined / personal</option>`:''}${Object.values(TG_BIZ).map(b=>`<option value="${b.key}" ${val===b.key?'selected':''}>${b.name}</option>`).join('')}</select>`;
}
function tgNum(id){ const v = document.getElementById(id).value; return v==='' ? NaN : Number(v); }
function tgVal(id){ const el = document.getElementById(id); return el ? el.value.trim() : ''; }

/* payments (money received) */
function tgOpenPayment(id, biz){
  const p = id ? tgArr(DB,'tgPayments').find(x=>x.id===id) : null;
  const invOpts = DB.invoices.map(i=>({k:'inv:'+i.id, l:i.invoiceNumber+' — '+i.customerName+' ('+gbp(calcInvoiceTotal(i).total)+')', biz:'sw'}))
    .concat((DB.sfInvoices||[]).map(i=>({k:'sfinv:'+i.id, l:i.invoiceNumber+' — '+i.clientName+' ('+gbp(calcInvoiceTotal(i).total)+')', biz:'sf'})));
  openModal(`<div class="modal-head"><h2>${p?'Edit payment':'Record money received'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      ${p&&!p.manual?`<p class="small" style="color:var(--warning);margin-bottom:10px;">Created automatically from ${esc(p.sourceType)} ${esc(p.sourceLabel||'')}. Edits are logged in the audit trail.</p>`:'<p class="small muted mb-10">Only record money that has actually landed. This entry is labelled as manually entered.</p>'}
      <div class="form-row"><div class="form-group"><label>Business</label>${tgBizSelect('tp-biz', p?p.biz:(biz||'sw'))}</div><div class="form-group"><label>Amount (£)</label><input id="tp-amount" type="number" step="0.01" value="${p?p.amount:''}"></div></div>
      <div class="form-row"><div class="form-group"><label>Date received</label><input id="tp-date" type="date" value="${p?p.date:tgToday()}"></div><div class="form-group"><label>Payment type</label><select id="tp-type">${TG_PAYMENT_TYPES.map(([k,l])=>`<option value="${k}" ${(p?p.type:'deposit')===k?'selected':''}>${l}</option>`).join('')}</select></div></div>
      <div class="form-row"><div class="form-group"><label>Customer</label><input id="tp-customer" type="text" value="${p?esc(p.customer||''):''}"></div><div class="form-group"><label>Job / project</label><input id="tp-job" type="text" value="${p?esc(p.job||''):''}"></div></div>
      <div class="form-row"><div class="form-group"><label>Linked invoice (prevents double counting)</label><select id="tp-source" ${p&&!p.manual?'disabled':''}><option value="">— Not linked —</option>${invOpts.map(o=>`<option value="${o.k}" ${p&&p.sourceKey===o.k?'selected':''}>${esc(o.l)}</option>`).join('')}</select></div>
        <div class="form-group"><label>Channel it came from (for acquisition ROI)</label><select id="tp-channel"><option value="">— Unattributed —</option>${TG_ACQ_CHANNELS.map(c=>`<option ${p&&p.channel===c?'selected':''}>${c}</option>`).join('')}</select></div></div>
      <div class="form-group"><label>Notes</label><textarea id="tp-notes">${p?esc(p.notes||''):''}</textarea></div>
      ${p?`<div class="form-group"><label>Reason for this change *</label><input id="tp-reason" type="text" placeholder="e.g. Customer paid £50 less than invoiced"></div>`:''}
    </div>
    <div class="modal-foot">${p?`<button class="btn btn-danger" onclick="tgRemovePayment('${p.id}')">Remove</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSavePayment('${p?p.id:''}')">${p?'Save changes':'Record payment'}</button></div>`);
}
function tgSavePayment(id){
  const existing = id ? tgArr(DB,'tgPayments').find(x=>x.id===id) : null;
  const src = tgVal('tp-source');
  const data = {biz:tgVal('tp-biz'), amount:tgRound(tgNum('tp-amount')), date:tgVal('tp-date'), type:tgVal('tp-type'), customer:tgVal('tp-customer'), job:tgVal('tp-job'), channel:tgVal('tp-channel'), notes:tgVal('tp-notes')};
  if(existing && !existing.manual){ data.sourceKey = existing.sourceKey; data.sourceLabel = existing.sourceLabel; }
  else if(src){ data.sourceKey = src; const opt = document.querySelector('#tp-source option:checked'); data.sourceLabel = opt ? opt.textContent.split(' — ')[0] : ''; data.sourceType = src.startsWith('sf')?'SteadyFlow invoice':'Invoice'; }
  else { data.sourceKey = ''; data.sourceLabel=''; data.sourceType='Manual entry'; }
  if(data.sourceKey){
    const inv = data.sourceKey.startsWith('sfinv:') ? (DB.sfInvoices||[]).find(i=>'sfinv:'+i.id===data.sourceKey) : DB.invoices.find(i=>'inv:'+i.id===data.sourceKey);
    if(inv && (data.sourceKey.startsWith('sfinv:')?'sf':'sw')!==data.biz){ toast('That invoice belongs to '+(data.sourceKey.startsWith('sfinv:')?'SteadyFlow':'SteadyWorks'),'⚠️'); return; }
  }
  const err = tgValidatePayment(DB, data, id||null);
  if(err){ toast(err,'⚠️'); return; }
  if(existing){
    const reason = tgVal('tp-reason');
    if(!reason){ toast('Add a reason for the change — it goes in the audit trail','⚠️'); document.getElementById('tp-reason').classList.add('invalid'); return; }
    const before = Object.assign({}, existing);
    Object.assign(existing, data, {updatedAt:new Date().toISOString()});
    tgAudit('Payment', id, 'edited', before, Object.assign({}, existing), reason);
  } else {
    const p = Object.assign({id:'pay-man-'+uid(), manual:true, estimated:false, createdAt:new Date().toISOString()}, data);
    tgArr(DB,'tgPayments').push(p);
    tgAudit('Payment', p.id, 'created (manual)', null, Object.assign({}, p));
  }
  save(); closeModal(); renderPage(); toast(existing?'Payment updated':'Payment recorded — '+gbp(data.amount));
}
function tgRemovePayment(id){
  const p = tgArr(DB,'tgPayments').find(x=>x.id===id);
  if(!p) return;
  openModal(`<div class="modal-head"><h2>Remove payment?</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p>${gbp(p.amount)} from ${esc(p.customer||'—')} on ${fmtDate(p.date)} will stop counting toward targets. The record and this decision stay in the audit trail.</p>
    <div class="form-group mt-10"><label>Reason *</label><input id="tp-rm-reason" type="text" placeholder="e.g. Entered twice"></div></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="tgConfirmRemovePayment('${id}')">Remove</button></div>`);
}
function tgConfirmRemovePayment(id){
  const reason = tgVal('tp-rm-reason');
  if(!reason){ toast('Add a reason','⚠️'); return; }
  const p = tgArr(DB,'tgPayments').find(x=>x.id===id);
  const before = Object.assign({}, p);
  Object.assign(p, {removed:true, removedAt:new Date().toISOString(), removedReason:reason});
  tgAudit('Payment', id, 'removed', before, Object.assign({}, p), reason);
  save(); closeModal(); renderPage(); toast('Payment removed (kept in audit trail)','🗑️');
}
// One-off: bring in invoices you've already been paid for. Dated by invoice date and flagged "estimated".
function tgOpenImport(){
  const cands = DB.invoices.map(i=>({kind:'sw', inv:i})).concat((DB.sfInvoices||[]).map(i=>({kind:'sf', inv:i})))
    .map(c=>Object.assign(c, {key:(c.kind==='sf'?'sfinv:':'inv:')+c.inv.id, received:tgInvoiceReceived(c.inv)}))
    .map(c=>Object.assign(c, {missing:tgRound(c.received - tgLinkedTotal(DB, c.key))})).filter(c=>c.missing>0.009);
  window._tgImport = cands;
  openModal(`<div class="modal-head"><h2>Import past paid invoices</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">These invoices show money received that isn't in the ledger yet. Their exact payment dates weren't stored, so each is dated by invoice date and labelled <strong>estimated</strong>. Change any date before importing. Invoices already in the ledger are left out, so nothing gets counted twice.</p>
      ${cands.length?`<table><thead><tr><th></th><th>Invoice</th><th>Business</th><th>Received</th><th>Date received</th></tr></thead><tbody>${cands.map((c,i)=>`<tr><td><input type="checkbox" checked id="ti-c-${i}"></td><td>${esc(c.inv.invoiceNumber)} — ${esc(c.inv.customerName||c.inv.clientName||'')}</td><td>${TG_BIZ[c.kind].short}</td><td>${gbp(c.missing)}</td><td><input type="date" id="ti-d-${i}" value="${esc(String(c.inv.createdAt||tgToday()).slice(0,10))}" style="width:150px;"></td></tr>`).join('')}</tbody></table>`:emptyBlock('Nothing to import. Every paid invoice is already in the ledger.')}
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Close</button>${cands.length?'<button class="btn btn-gold" onclick="tgRunImport()">Import selected</button>':''}</div>`, true);
}
function tgRunImport(){
  let n = 0, total = 0;
  (window._tgImport||[]).forEach((c,i)=>{
    if(!document.getElementById('ti-c-'+i).checked) return;
    const date = document.getElementById('ti-d-'+i).value || String(c.inv.createdAt||'').slice(0,10) || tgToday();
    const p = tgSyncInvoicePayment(DB, c.kind, c.inv, new Date(), {date, estimated:true, note:'Imported from existing invoice — payment date estimated'});
    if(p){ n++; total += p.amount; tgAudit('Payment', p.id, 'imported', null, Object.assign({}, p)); }
  });
  save(); closeModal(); renderPage();
  toast(n ? `Imported ${n} payment${n===1?'':'s'} — ${gbp(total)}` : 'Nothing imported');
}

/* acquisition spend */
function tgOpenAcq(id, biz){
  const a = id ? tgArr(DB,'tgAcqSpend').find(x=>x.id===id) : null;
  openModal(`<div class="modal-head"><h2>${a?'Edit':'Log'} acquisition spend</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Already logged ads as an Expense (Advertising / Ad Spend)? Those count automatically, so don't log them here too. Use this for spend that isn't an expense, or to record the leads and sales a campaign produced.</p>
      <div class="form-row"><div class="form-group"><label>Business</label>${tgBizSelect('ta-biz', a?a.biz:(biz||'sf'))}</div><div class="form-group"><label>Amount (£)</label><input id="ta-amount" type="number" min="0" step="0.01" value="${a?a.amount:''}"></div></div>
      <div class="form-row"><div class="form-group"><label>Date</label><input id="ta-date" type="date" value="${a?a.date:tgToday()}"></div><div class="form-group"><label>Channel</label><select id="ta-channel">${TG_ACQ_CHANNELS.map(c=>`<option ${a&&a.channel===c?'selected':''}>${c}</option>`).join('')}</select></div></div>
      <div class="form-row"><div class="form-group"><label>Campaign</label><input id="ta-campaign" type="text" value="${a?esc(a.campaign||''):''}"></div><div class="form-group"><label>Supplier</label><input id="ta-supplier" type="text" value="${a?esc(a.supplier||''):''}"></div></div>
      <div class="form-row"><div class="form-group"><label>Leads it produced</label><input id="ta-leads" type="number" min="0" value="${a?a.leads||'':''}"></div><div class="form-group"><label>Sales it produced</label><input id="ta-sales" type="number" min="0" value="${a?a.sales||'':''}"></div></div>
      <div class="form-group"><label>Related lead, job or customer</label><input id="ta-related" type="text" value="${a?esc(a.related||''):''}"></div>
      <div class="form-group"><label>Notes</label><textarea id="ta-notes">${a?esc(a.notes||''):''}</textarea></div>
    </div>
    <div class="modal-foot">${a?`<button class="btn btn-danger" onclick="tgDeleteSimple('tgAcqSpend','${a.id}','acquisition spend')">Delete</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveAcq('${a?a.id:''}')">Save</button></div>`);
}
function tgSaveAcq(id){
  const amt = tgNum('ta-amount');
  if(!isFinite(amt) || amt<=0){ toast('Enter an amount above £0','⚠️'); return; }
  if(!tgVal('ta-date')){ toast('Add a date','⚠️'); return; }
  const leads = tgNum('ta-leads'), sales = tgNum('ta-sales');
  if((isFinite(leads)&&leads<0) || (isFinite(sales)&&sales<0)){ toast('Counts can\'t be negative','⚠️'); return; }
  const data = {biz:tgVal('ta-biz'), amount:tgRound(amt), date:tgVal('ta-date'), channel:tgVal('ta-channel'), campaign:tgVal('ta-campaign'), supplier:tgVal('ta-supplier'), leads:isFinite(leads)?leads:0, sales:isFinite(sales)?sales:0, related:tgVal('ta-related'), notes:tgVal('ta-notes')};
  const list = tgArr(DB,'tgAcqSpend');
  if(id){ const a = list.find(x=>x.id===id); tgAudit('Acquisition spend', id, 'edited', Object.assign({},a), data); Object.assign(a, data); }
  else list.push(Object.assign({id:'acq-'+uid(), createdAt:new Date().toISOString()}, data));
  save(); closeModal(); renderPage(); toast(id?'Spend updated':'Spend logged — '+gbp(data.amount));
}
function tgDeleteSimple(key, id, label){
  confirmDelete('Delete this '+label+'?', 'It will be recorded in the audit trail.', ()=>{
    const list = tgArr(DB,key);
    const x = list.find(r=>r.id===id);
    tgAudit(label, id, 'deleted', x?Object.assign({},x):null, null);
    DB[key] = list.filter(r=>r.id!==id);
    save(); renderPage(); toast('Deleted','🗑️');
  });
}

/* owner pay */
function tgOpenOwnerPay(id){
  const o = id ? tgArr(DB,'tgOwnerPay').find(x=>x.id===id) : null;
  const wk = tgOwnerPayWeek(DB, tgWeekStart(tgToday(), tgSettings(DB).weekStartDay));
  openModal(`<div class="modal-head"><h2>${o?'Edit':'Record'} owner pay</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">This week: ${gbp(wk.taken)} taken of ${gbp(wk.requirement)}. Owner pay never counts as revenue.</p>
      <div class="form-row"><div class="form-group"><label>Amount (£)</label><input id="to-amount" type="number" min="0" step="0.01" value="${o?o.amount:wk.remaining||''}"></div><div class="form-group"><label>Date</label><input id="to-date" type="date" value="${o?o.date:tgToday()}"></div></div>
      <div class="form-row"><div class="form-group"><label>Status</label><select id="to-status">${[['taken','Taken'],['scheduled','Scheduled'],['partial','Partially taken'],['not','Not taken']].map(([k,l])=>`<option value="${k}" ${(o?o.status:'taken')===k?'selected':''}>${l}</option>`).join('')}</select></div><div class="form-group"><label>Paid from</label>${tgBizSelect('to-biz', o?o.biz:'', true)}</div></div>
      <div class="form-group"><label>Notes</label><input id="to-notes" type="text" value="${o?esc(o.notes||''):''}"></div>
    </div>
    <div class="modal-foot">${o?`<button class="btn btn-danger" onclick="tgDeleteSimple('tgOwnerPay','${o.id}','owner pay')">Delete</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveOwnerPay('${o?o.id:''}')">Save</button></div>`);
}
function tgSaveOwnerPay(id){
  const amt = tgNum('to-amount');
  if(!isFinite(amt) || amt<0){ toast('Enter an amount (£0 or more)','⚠️'); return; }
  if(!tgVal('to-date')){ toast('Add a date','⚠️'); return; }
  const data = {amount:tgRound(amt), date:tgVal('to-date'), status:tgVal('to-status'), biz:tgVal('to-biz')||'', notes:tgVal('to-notes')};
  const list = tgArr(DB,'tgOwnerPay');
  if(id){ const o = list.find(x=>x.id===id); tgAudit('Owner pay', id, 'edited', Object.assign({},o), data); Object.assign(o, data); }
  else list.push(Object.assign({id:'own-'+uid(), createdAt:new Date().toISOString()}, data));
  save(); closeModal(); renderPage(); toast('Owner pay saved');
}

/* expansion investments — nothing is spent without approval */
function tgOpenExpansion(id, biz, prefill){
  const x = id ? tgArr(DB,'tgExpansion').find(r=>r.id===id) : null;
  const p = prefill||{};
  const b = x?x.biz:(p.biz||biz||'sw');
  const pot = tgExpansionPot(DB, b);
  openModal(`<div class="modal-head"><h2>${x?'Expansion investment':'Propose expansion investment'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">${TG_BIZ[b].name} pot: ${gbp(pot.remaining)} available, ${gbp(pot.accruing)} accruing. Investments start as <strong>pending</strong> and only count once you approve them, then mark them spent.</p>
      <div class="form-row"><div class="form-group"><label>Business</label>${tgBizSelect('tx-biz', b)}</div><div class="form-group"><label>Amount (£)</label><input id="tx-amount" type="number" min="0" step="0.01" value="${x?x.amount:(p.amount||'')}"></div></div>
      <div class="form-row"><div class="form-group"><label>Category</label><select id="tx-cat">${TG_EXP_CATEGORIES.map(c=>`<option ${(x?x.category:(p.category||'Marketing'))===c?'selected':''}>${c}</option>`).join('')}</select></div><div class="form-group"><label>Date</label><input id="tx-date" type="date" value="${x?x.date:tgToday()}"></div></div>
      <div class="form-group"><label>Reason *</label><input id="tx-reason" type="text" value="${esc(x?x.reason||'':(p.reason||''))}"></div>
      <div class="form-group"><label>Expected benefit</label><input id="tx-benefit" type="text" value="${esc(x?x.benefit||'':(p.benefit||''))}"></div>
      <div class="form-row"><div class="form-group"><label>Status</label><select id="tx-status">${[['pending','Pending approval'],['approved','Approved (committed)'],['spent','Spent'],['dismissed','Dismissed']].map(([k,l])=>`<option value="${k}" ${(x?x.status:'pending')===k?'selected':''}>${l}</option>`).join('')}</select></div><div class="form-group"><label>Related expansion gate</label><input id="tx-gate" type="number" min="1" value="${x?x.gate||'':(p.gate||'')}"></div></div>
      <div class="form-group"><label>Result / ROI</label><input id="tx-result" type="text" value="${x?esc(x.result||''):''}" placeholder="Fill in once you know — e.g. 3 extra jobs/week"></div>
    </div>
    <div class="modal-foot">${x&&['pending','dismissed'].includes(x.status)?`<button class="btn btn-danger" onclick="tgDeleteSimple('tgExpansion','${x.id}','expansion investment')">Delete</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveExpansion('${x?x.id:''}')">Save</button></div>`);
}
function tgSaveExpansion(id){
  const amt = tgNum('tx-amount');
  if(!isFinite(amt) || amt<=0){ toast('Enter an amount above £0','⚠️'); return; }
  if(!tgVal('tx-reason')){ toast('Add a reason','⚠️'); return; }
  const list = tgArr(DB,'tgExpansion');
  const x = id ? list.find(r=>r.id===id) : null;
  const data = {biz:tgVal('tx-biz'), amount:tgRound(amt), category:tgVal('tx-cat'), date:tgVal('tx-date')||tgToday(), reason:tgVal('tx-reason'), benefit:tgVal('tx-benefit'), status:tgVal('tx-status'), gate:tgVal('tx-gate'), result:tgVal('tx-result'), kind:'investment'};
  const movingToCommitted = ['approved','spent'].includes(data.status) && !(x && ['approved','spent'].includes(x.status));
  if(movingToCommitted){
    const pot = tgExpansionPot(DB, data.biz);
    if(data.amount > pot.remaining + 0.01){ toast(`Only ${gbp(pot.remaining)} is available in the ${TG_BIZ[data.biz].name} pot. Keep it pending until the next gate.`,'⚠️'); return; }
  }
  if(x){ tgAudit('Expansion investment', id, 'edited', Object.assign({},x), data); Object.assign(x, data, {approvedAt: movingToCommitted ? new Date().toISOString() : x.approvedAt}); }
  else { const n = Object.assign({id:'exp-'+uid(), createdAt:new Date().toISOString(), approvedAt: movingToCommitted?new Date().toISOString():null}, data); list.push(n); tgAudit('Expansion investment', n.id, 'created', null, Object.assign({},n)); }
  save(); closeModal(); renderPage(); toast('Investment saved'+(data.status==='pending'?' — awaiting your approval':''));
}

/* rewards */
function tgOpenReward(id){
  const r = id ? tgArr(DB,'tgRewards').find(x=>x.id===id) : null;
  const locked = !r || (r.status||'locked')==='locked';
  openModal(`<div class="modal-head"><h2>${r?'Edit reward':'Add reward'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row"><div class="form-group"><label>Reward *</label><input id="tr-name" type="text" value="${r?esc(r.name):''}" placeholder="e.g. New impact driver"></div><div class="form-group"><label>Type</label><select id="tr-type">${['Tool','Clothing','Meal or day out','Equipment','Personal purchase','Trip','Van','Major purchase'].map(t=>`<option ${r&&r.type===t?'selected':''}>${t}</option>`).join('')}</select></div></div>
      <div class="form-row"><div class="form-group"><label>Business</label><select id="tr-biz" ${locked?'':'disabled'}><option value="sw" ${r&&r.biz==='sw'?'selected':''}>SteadyWorks</option><option value="sf" ${r&&r.biz==='sf'?'selected':''}>SteadyFlow</option><option value="combined" ${r&&r.biz==='combined'?'selected':''}>Both (lower of the two levels)</option></select></div><div class="form-group"><label>Estimated cost (£)</label><input id="tr-cost" type="number" min="0" step="0.01" value="${r?r.cost||'':''}"></div></div>
      <div class="form-row"><div class="form-group"><label>Unlocks on</label><select id="tr-trigger" ${locked?'':'disabled'}><option value="level" ${!r||r.trigger!=='gate'?'selected':''}>Completing a level</option><option value="gate" ${r&&r.trigger==='gate'?'selected':''}>Reaching an expansion gate</option></select></div><div class="form-group"><label>Required level / gate number</label><input id="tr-req" type="number" min="1" value="${r?(r.trigger==='gate'?r.requiredGate:r.requiredLevel):2}" ${locked?'':'disabled'}></div></div>
      <div class="form-group"><label>Notes</label><input id="tr-notes" type="text" value="${r?esc(r.notes||''):''}"></div>
    </div>
    <div class="modal-foot">${r&&locked?`<button class="btn btn-danger" onclick="tgDeleteSimple('tgRewards','${r.id}','reward')">Delete</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveReward('${r?r.id:''}')">Save</button></div>`);
}
function tgSaveReward(id){
  if(!requireField('tr-name','Name the reward')) return;
  const cost = tgNum('tr-cost'), req = tgNum('tr-req');
  if(isFinite(cost) && cost<0){ toast('Cost can\'t be negative','⚠️'); return; }
  if(!isFinite(req) || req<1){ toast('Required level / gate must be 1 or more','⚠️'); return; }
  const list = tgArr(DB,'tgRewards');
  const r = id ? list.find(x=>x.id===id) : null;
  const data = {name:tgVal('tr-name'), type:tgVal('tr-type'), cost:isFinite(cost)?tgRound(cost):0, notes:tgVal('tr-notes')};
  if(!r || (r.status||'locked')==='locked'){
    const trigger = tgVal('tr-trigger');
    Object.assign(data, {biz:tgVal('tr-biz'), trigger, requiredLevel: trigger==='level'?Math.floor(req):null, requiredGate: trigger==='gate'?Math.floor(req):null});
  }
  if(r) Object.assign(r, data); else list.push(Object.assign({id:'rw-'+uid(), status:'locked', createdAt:new Date().toISOString()}, data));
  const unlocked = tgUnlockRewards(DB, new Date());
  save(); closeModal(); renderPage();
  toast(unlocked.length ? 'REWARD UNLOCKED — '+unlocked.map(x=>x.name).join(', ') : 'Reward saved', unlocked.length?'🎁':'✓');
}

/* overrides — the calculated target is always kept alongside */
function tgOpenOverride(biz){
  const st = tgState(DB, biz, new Date());
  openModal(`<div class="modal-head"><h2>Override ${TG_BIZ[biz].name} target</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">The calculated level-${st.level} target is <strong>${gbp(st.calcTarget)}</strong>. An override replaces it for the weeks you choose, and the calculated figure is still stored with every week.</p>
      <div class="form-row"><div class="form-group"><label>Override amount (£) *</label><input id="tv-amount" type="number" min="0" step="0.01"></div><div class="form-group"><label>Effective week (starting)</label><input id="tv-week" type="date" value="${st.weekKey}"></div></div>
      <div class="form-row"><div class="form-group"><label>Expires after week (optional)</label><input id="tv-exp" type="date"></div><div></div></div>
      <div class="form-group"><label>Reason *</label><input id="tv-reason" type="text" placeholder="e.g. Away on holiday Wed–Fri"></div>
      ${tgArr(DB,'tgOverrides').filter(o=>o.biz===biz).length?`<div class="divider"></div><div class="small muted">Previous overrides:<br>${tgArr(DB,'tgOverrides').filter(o=>o.biz===biz).map(o=>`${gbp(o.amount)} from ${fmtDate(o.effectiveWeek)}${o.expires?' to '+fmtDate(o.expires):''} — ${esc(o.reason)} · ${o.active===false?'ended':'active'} · by ${esc(o.createdBy||'—')} on ${fmtDate(o.createdAt)}`).join('<br>')}</div>`:''}
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveOverride('${biz}')">Apply override</button></div>`);
}
function tgSaveOverride(biz){
  const amt = tgNum('tv-amount');
  if(!isFinite(amt) || amt<=0){ toast('Enter an override amount above £0','⚠️'); return; }
  if(!requireField('tv-reason','An override needs a reason')) return;
  const s = tgSettings(DB);
  const wk = tgWeekStart(tgVal('tv-week')||tgToday(), s.weekStartDay);
  const exp = tgVal('tv-exp') ? tgWeekStart(tgVal('tv-exp'), s.weekStartDay) : '';
  if(exp && exp < wk){ toast('Expiry is before the effective week','⚠️'); return; }
  const o = {id:'ov-'+uid(), biz, amount:tgRound(amt), effectiveWeek:wk, expires:exp, reason:tgVal('tv-reason'), createdBy:CURRENT_USER_EMAIL||'', createdAt:new Date().toISOString(), active:true, calcTargetAtCreation: tgState(DB,biz,new Date()).calcTarget};
  tgArr(DB,'tgOverrides').push(o);
  tgAudit('Target override', o.id, 'created', null, Object.assign({},o), o.reason);
  save(); closeModal(); renderPage(); toast('Override applied');
}
function tgEndOverride(id){
  const o = tgArr(DB,'tgOverrides').find(x=>x.id===id);
  if(!o) return;
  const before = Object.assign({}, o);
  o.active = false; o.endedAt = new Date().toISOString();
  tgAudit('Target override', id, 'ended', before, Object.assign({},o));
  save(); renderPage(); toast('Override ended — back to the calculated target');
}

/* missions */
function tgToggleMission(id){
  const m = tgArr(DB,'tgMissions').find(x=>x.id===id);
  if(!m) return;
  m.done = !m.done; m.doneAt = m.done ? new Date().toISOString() : null;
  save(); renderPage(); toast(m.done?'Mission complete':'Mission reopened', m.done?'✓':'↺');
}
function tgMoveMission(id, dir){
  const m = tgArr(DB,'tgMissions').find(x=>x.id===id);
  if(!m) return;
  const list = tgMissionsFor(DB, m.biz, m.weekKey);
  const i = list.findIndex(x=>x.id===id), j = i+dir;
  if(j<0 || j>=list.length) return;
  list.splice(j, 0, list.splice(i,1)[0]);
  list.forEach((x,k)=>{ const real = DB.tgMissions.find(r=>r.id===x.id); if(real) real.order = k; });
  save(); renderPage();
}
function tgOpenMission(id, biz){
  const m = id ? tgArr(DB,'tgMissions').find(x=>x.id===id) : null;
  openModal(`<div class="modal-head"><h2>${m?'Edit mission':'Add mission'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Mission *</label><input id="tm-title" type="text" value="${m?esc(m.title):''}" placeholder="e.g. Ring every customer from last spring"></div>
      <div class="form-row"><div class="form-group"><label>Target count</label><input id="tm-target" type="number" min="1" value="${m?m.target:1}"></div><div class="form-group"><label>Progress so far</label><input id="tm-progress" type="number" min="0" value="${m?m.progress||0:0}"></div></div>
      <div class="form-row"><div class="form-group"><label>Due date</label><input id="tm-due" type="date" value="${m?m.due||'':tgAddDays(tgState(DB,biz,new Date()).weekKey,4)}"></div><div class="form-group"><label>Priority</label><select id="tm-pri">${['High','Medium','Low'].map(p=>`<option ${(m?m.priority:'High')===p?'selected':''}>${p}</option>`).join('')}</select></div></div>
      <div class="form-group"><label>Linked lead, customer, job or campaign</label><input id="tm-link" type="text" value="${m?esc(m.link||''):''}"></div>
      ${m&&m.auto?'<p class="small muted">Progress is also counted automatically from your records. Whichever figure is higher is shown.</p>':''}
    </div>
    <div class="modal-foot">${m?`<button class="btn btn-danger" onclick="tgRemoveMission('${m.id}')">Remove</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveMission('${m?m.id:''}','${biz}')">Save</button></div>`);
}
function tgSaveMission(id, biz){
  if(!requireField('tm-title','Describe the mission')) return;
  const target = tgNum('tm-target'), progress = tgNum('tm-progress');
  if(!isFinite(target) || target<1 || (isFinite(progress) && progress<0)){ toast('Target must be 1 or more and progress can\'t be negative','⚠️'); return; }
  const data = {title:tgVal('tm-title'), target:Math.floor(target), progress:isFinite(progress)?progress:0, due:tgVal('tm-due'), priority:tgVal('tm-pri'), link:tgVal('tm-link')};
  const list = tgArr(DB,'tgMissions');
  if(id) Object.assign(list.find(x=>x.id===id), data);
  else { const wk = tgState(DB,biz,new Date()).weekKey; list.push(Object.assign({id:'m-'+biz+'-'+wk+'-c'+uid(), biz, weekKey:wk, generated:false, done:false, order:tgMissionsFor(DB,biz,wk).length, category:'MONEY MAKING', createdAt:new Date().toISOString()}, data)); }
  save(); closeModal(); renderPage(); toast('Mission saved');
}
function tgRemoveMission(id){
  const m = tgArr(DB,'tgMissions').find(x=>x.id===id);
  if(!m) return;
  m.removed = true; // kept for weekly history; hidden from the list
  save(); closeModal(); renderPage(); toast('Mission removed','🗑️');
}

/* capacity inputs */
function tgOpenCapacity(biz){
  const c = tgSettings(DB).capacity[biz];
  const m = tgMetrics(DB, biz, new Date());
  const f = (id, label, val, hint) => `<div class="form-group"><label>${label}</label><input id="tc-${id}" type="number" min="0" step="any" value="${val===''||val==null?'':val}" placeholder="${hint||''}"></div>`;
  openModal(`<div class="modal-head"><h2>${TG_BIZ[biz].name} capacity inputs</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Leave average value and conversion blank to work them out from your records. Right now that's ${gbp(m.avgValue)} and ${Math.round(m.conversion*100)}%.</p>
      ${biz==='sw' ? `
      <div class="form-row">${f('avg','Average job value (£)',c.avgJobValue,'auto')}${f('conv','Quote conversion (%)',c.conversion,'auto')}</div>
      <div class="form-row">${f('jpd','Jobs you can complete per day',c.jobsPerDay)}${f('wd','Working days per week',c.workingDays)}</div>
      <div class="form-row">${f('sub','Extra jobs/week from subcontractors',c.subcontractorJobs)}${f('admin','Admin hours per week',c.adminHours)}</div>` : `
      <div class="form-row">${f('avg','Average client value (£)',c.avgClientValue,'auto')}${f('conv','Proposal close rate (%)',c.conversion,'auto')}</div>
      <div class="form-row">${f('bpw','Builds you can deliver per week',c.buildsPerWeek)}${f('hpb','Hours per build',c.hoursPerBuild)}</div>
      <div class="form-row">${f('hpw','Delivery hours available per week',c.hoursPerWeek)}${f('fl','Extra builds/week from freelancers',c.freelancerBuilds)}</div>`}
      <div class="form-group"><label>Notes</label><input id="tc-notes" type="text" value="${esc(c.notes||'')}" placeholder="e.g. van due MOT in May"></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveCapacity('${biz}')">Save</button></div>`);
}
function tgSaveCapacity(biz){
  const c = tgSettings(DB).capacity[biz];
  const read = id => { const v = document.getElementById('tc-'+id).value; return v==='' ? '' : Number(v); };
  const vals = biz==='sw' ? {avgJobValue:read('avg'), conversion:read('conv'), jobsPerDay:read('jpd'), workingDays:read('wd'), subcontractorJobs:read('sub'), adminHours:read('admin')}
                          : {avgClientValue:read('avg'), conversion:read('conv'), buildsPerWeek:read('bpw'), hoursPerBuild:read('hpb'), hoursPerWeek:read('hpw'), freelancerBuilds:read('fl')};
  if(Object.values(vals).some(v=>v!=='' && (!isFinite(v) || v<0))){ toast('Values can\'t be negative','⚠️'); return; }
  if(vals.conversion!=='' && vals.conversion>100){ toast('Conversion is a percentage (0–100)','⚠️'); return; }
  Object.assign(c, vals, {notes:tgVal('tc-notes')});
  save(); closeModal(); renderPage(); toast('Capacity inputs saved');
}

/* completing a level early, level-up screen, expansion review */
function tgCompleteEarly(biz){
  const st = tgState(DB, biz, new Date());
  openModal(`<div class="modal-head"><h2>Complete Level ${st.level} now?</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><p>${TG_BIZ[biz].name} has received ${gbp(st.revenue)} against ${gbp(st.target)}. Completing now locks this cycle in. Money received for the rest of this week then counts toward Level ${st.level+1}, which runs to the end of next week.</p></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Not yet</button><button class="btn btn-gold" onclick="tgConfirmEarly('${biz}')">Complete level</button></div>`);
}
function tgConfirmEarly(biz){
  const res = tgCloseEarly(DB, biz, new Date());
  if(res.error){ toast(res.error,'⚠️'); closeModal(); return; }
  tgAudit('Cycle', res.cycle.id, 'completed early', null, {level:res.cycle.level, revenue:res.cycle.revenue, target:res.cycle.target});
  tgEnsureMissions(DB, biz, new Date());
  save(); closeModal(); renderPage();
  tgOpenLevelUp(res.cycle.id);
}
function tgOpenLevelUp(cycleId){
  const c = tgArr(DB,'tgCycles').find(x=>x.id===cycleId);
  if(!c) return;
  const B = TG_BIZ[c.biz];
  const recs = tgRecommendations(DB, c.biz, new Date());
  const per = Number(tgSettings(DB).levelsPerGate)||2;
  const left = per - (c.level % per);
  openModal(`<div class="tg-levelup" style="--c:${B.color}">
      <div class="tg-eyebrow">LEVEL COMPLETE</div>
      <div class="tg-levelup-biz">${B.name.toUpperCase()}</div>
      <div class="tg-levelup-grid">
        ${tgStat('Target', gbp(c.target))}${tgStat('Received', gbp(c.revenue))}${tgStat('Achieved', Math.round(c.revenue/c.target*100)+'%','', 'good')}${tgStat('Next target', gbp(c.nextTarget))}
      </div>
      <div class="tg-levelup-gate">${c.gateUnlocked?'🔓 EXPANSION GATE '+c.gateNumber+' UNLOCKED':'Expansion gate: '+left+' level'+(left===1?'':'s')+' remaining'}</div>
    </div>
    <div class="modal-body">
      <div class="card-title">WHAT MUST CHANGE TO SUPPORT THE NEXT LEVEL?</div>
      ${recs.slice(0,5).map(r=>tgRecRow(r)).join('')}
    </div>
    <div class="modal-foot">${c.gateUnlocked&&!tgArr(DB,'tgReviews').some(r=>r.cycleId===c.id)?`<button class="btn btn-ghost" onclick="tgAckLevel('${c.id}'); tgOpenReview('${c.id}')">Start expansion review</button>`:''}<button class="btn btn-gold" onclick="tgAckLevel('${c.id}')">Onto Level ${c.level+1} →</button></div>`, true);
}
function tgAckLevel(id){
  const c = tgArr(DB,'tgCycles').find(x=>x.id===id);
  // acknowledging the latest level also clears any older unseen ones for that business
  if(c){ tgArr(DB,'tgCycles').filter(x=>x.biz===c.biz && x.achieved && !x.ack && x.startDate<=c.startDate).forEach(x=>x.ack = true); save(); }
  closeModal(); if(currentRoute==='targets') renderPage();
}
function tgReviewAssessment(biz){
  const now = new Date();
  const cap = tgCapacity(DB, biz, now);
  const m = cap.m;
  const areas = biz==='sw' ? [
    ['Sales and leads', m.leadsPerWeek>=cap.next.leads?'Strong':'Limiting', `${m.leadsPerWeek}/wk vs ${cap.next.leads} needed`],
    ['Labour', m.capacityUnits>=cap.next.sales?'OK':'Limiting', `${m.capacityUnits} jobs/wk capacity vs ${cap.next.sales} needed`],
    ['Transport', 'Check', 'Van reliability and a second vehicle once a second person is on the tools'],
    ['Tools', 'Check', 'Any job types you turn down for lack of kit?'],
    ['Materials', 'Check', 'Trade accounts and credit terms with suppliers'],
    ['Administration', Number(tgSettings(DB).capacity.sw.adminHours)>8?'Limiting':'OK', tgSettings(DB).capacity.sw.adminHours+' admin hours/week'],
    ['Systems', m.openQuotes>3?'Limiting':'OK', m.openQuotes+' quotes waiting on follow-up']
  ] : [
    ['Lead generation', m.outreachPerWeek>=cap.next.outreach?'Strong':'Limiting', `${m.outreachPerWeek}/wk outreach vs ${cap.next.outreach} needed`],
    ['Sales', m.conversion>=0.4?'Strong':'Limiting', Math.round(m.conversion*100)+'% close rate'],
    ['Production', m.capacityUnits>=cap.next.sales?'OK':'Limiting', `${m.capacityUnits} builds/wk vs ${cap.next.sales} needed`],
    ['Automation', 'Check', 'Onboarding, follow-ups and reporting still manual?'],
    ['Freelancers', m.freelancers>0?'OK':'Limiting', m.freelancers+' builds/wk from freelancers'],
    ['Client management', 'Check', 'Who answers clients when you\'re building?'],
    ['Recurring revenue', m.mrr>=tgState(DB,'sf',now).target?'Strong':'Limiting', gbp(m.mrr)+'/mo recurring']
  ];
  const limiting = areas.filter(a=>a[1]==='Limiting');
  const pot = tgExpansionPot(DB, biz);
  const share = limiting.length ? tgRound(pot.remaining/limiting.length) : 0;
  const catFor = {'Sales and leads':'Marketing', Labour:'Subcontractors', Transport:'Vehicle', Tools:'Tools', Materials:'Stock/materials', Administration:'Systems', Systems:'Software',
    'Lead generation':'Marketing', Sales:'Training', Production:'Freelancers', Automation:'Automation', Freelancers:'Freelancers', 'Client management':'Staff', 'Recurring revenue':'Marketing'};
  return {areas, allocations: limiting.map(a=>({area:a[0], category:catFor[a[0]]||'Other', amount:share})), pot};
}
function tgOpenReview(cycleId){
  const c = tgArr(DB,'tgCycles').find(x=>x.id===cycleId);
  if(!c) return;
  const a = tgReviewAssessment(c.biz);
  const recent = tgCyclesFor(DB, c.biz).slice(-Number(tgSettings(DB).levelsPerGate||2));
  window._tgReview = {cycleId, allocations:a.allocations};
  openModal(`<div class="modal-head"><h2>Expansion review — ${TG_BIZ[c.biz].name}, Gate ${c.gateNumber}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="card-title">WHAT GOT US HERE?</div>
      <p class="small muted mb-10">${recent.map(r=>`Level ${r.level}: ${gbp(r.revenue)} vs ${gbp(r.target)}, ${r.missionsDone}/${r.missionsTotal} missions`).join(' · ')}</p>
      <textarea id="rv-got" placeholder="What worked — channels, habits, specific clients…"></textarea>
      <div class="card-title mt-10">WHAT IS CURRENTLY LIMITING GROWTH?</div>
      <table><thead><tr><th>Area</th><th>Assessment</th><th>Evidence</th></tr></thead><tbody>${a.areas.map(r=>`<tr><td>${r[0]}</td><td>${tgPill(r[1], r[1]==='Limiting'?'bad':r[1]==='Check'?'warn':'good')}</td><td class="small muted">${esc(r[2])}</td></tr>`).join('')}</tbody></table>
      <textarea id="rv-limit" class="mt-10" placeholder="Your view of the real constraint…"></textarea>
      <div class="card-title mt-10">WHAT SHOULD WE INVEST IN NEXT? <span class="small muted">Pot available ${gbp(a.pot.remaining)}</span></div>
      ${a.allocations.length ? a.allocations.map((al,i)=>`<div class="tg-exp-row"><input type="checkbox" id="rv-al-${i}" checked><div style="flex:1;"><strong>${esc(al.area)}</strong> → ${esc(al.category)}</div><input type="number" min="0" id="rv-amt-${i}" value="${al.amount}" style="width:110px;"></div>`).join('') : '<p class="small muted">Nothing is flagged as limiting. Keep the pot for the next gate, or add your own investment below.</p>'}
      <textarea id="rv-next" class="mt-10" placeholder="Anything else to invest in, or notes on the plan…"></textarea>
      <p class="small muted mt-10">Ticked allocations are added as <strong>pending</strong> investments. Nothing is spent until you approve each one.</p>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Later</button><button class="btn btn-gold" onclick="tgSaveReview()">Save review</button></div>`, true);
}
function tgSaveReview(){
  const r = window._tgReview; if(!r) return;
  const c = tgArr(DB,'tgCycles').find(x=>x.id===r.cycleId);
  const chosen = r.allocations.map((al,i)=>Object.assign({}, al, {amount:Number(document.getElementById('rv-amt-'+i).value)||0, picked:document.getElementById('rv-al-'+i).checked})).filter(al=>al.picked && al.amount>0);
  chosen.forEach(al=>tgArr(DB,'tgExpansion').push({id:'exp-'+uid(), kind:'investment', biz:c.biz, amount:tgRound(al.amount), category:al.category, reason:'Expansion review, Gate '+c.gateNumber+': '+al.area, benefit:'Removes the '+al.area.toLowerCase()+' constraint', date:tgToday(), status:'pending', gate:c.gateNumber, createdAt:new Date().toISOString()}));
  tgArr(DB,'tgReviews').push({id:'rev-'+c.id, cycleId:c.id, biz:c.biz, gate:c.gateNumber, date:tgToday(), gotHere:tgVal('rv-got'), limiting:tgVal('rv-limit'), investNext:tgVal('rv-next'), assessment:tgReviewAssessment(c.biz).areas, allocations:chosen, createdAt:new Date().toISOString()});
  save(); closeModal(); renderPage();
  toast('Review saved'+(chosen.length?' — '+chosen.length+' investment'+(chosen.length===1?'':'s')+' awaiting approval':''));
}

/* history corrections — the original value is always kept */
function tgOpenCorrection(id){
  const c = tgArr(DB,'tgCycles').find(x=>x.id===id);
  if(!c) return;
  const fields = [['revenue','Received'],['target','Target'],['acqSpend','Acquisition spend'],['opCosts','Operating costs'],['ownerPay','Owner pay'],['expansionSpend','Expansion spend'],['notes','Notes']];
  openModal(`<div class="modal-head"><h2>Correct ${TG_BIZ[c.biz].name} week of ${fmtDate(c.startDate)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">Closed weeks are permanent. A correction records the old value, the new value and why. Level results don't change; if a level outcome was wrong, explain it in the notes.</p>
      <div class="form-row">${fields.slice(0,6).map(([k,l])=>`<div class="form-group"><label>${l} (£)</label><input id="hc-${k}" type="number" step="0.01" value="${c[k]}"></div>`).join('')}</div>
      <div class="form-group"><label>Notes</label><textarea id="hc-notes">${esc(c.notes||'')}</textarea></div>
      <div class="form-group"><label>Reason for correction *</label><input id="hc-reason" type="text"></div>
      ${(c.corrections||[]).length?`<div class="divider"></div><div class="small muted">${c.corrections.map(x=>`${fmtDateTime(x.at)}: ${esc(x.field)} ${esc(String(x.before))} → ${esc(String(x.after))} (${esc(x.reason)})`).join('<br>')}</div>`:''}
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="tgSaveCorrection('${id}')">Save correction</button></div>`, true);
}
function tgSaveCorrection(id){
  const c = tgArr(DB,'tgCycles').find(x=>x.id===id);
  const reason = tgVal('hc-reason');
  if(!reason){ toast('A correction needs a reason','⚠️'); return; }
  const changes = [];
  ['revenue','target','acqSpend','opCosts','ownerPay','expansionSpend'].forEach(k=>{
    const v = tgNum('hc-'+k);
    if(!isFinite(v)){ return; }
    if(v<0 && k!=='revenue'){ return; }
    if(Math.abs(v-(Number(c[k])||0))>0.004) changes.push({field:k, before:c[k], after:tgRound(v)});
  });
  const notes = tgVal('hc-notes');
  if(notes!==(c.notes||'')) changes.push({field:'notes', before:c.notes||'', after:notes});
  if(!changes.length){ toast('Nothing changed'); return; }
  c.corrections = c.corrections||[];
  changes.forEach(ch=>{ c.corrections.push(Object.assign({at:new Date().toISOString(), by:CURRENT_USER_EMAIL||'', reason}, ch)); c[ch.field] = ch.after; });
  c.retained = tgRound(c.revenue - c.acqSpend - c.opCosts - c.ownerPay - c.expansionSpend);
  tgAudit('Cycle', id, 'corrected', null, changes.reduce((o,ch)=>(o[ch.field]=ch.after,o),{}), reason);
  save(); closeModal(); renderPage(); toast('Correction recorded');
}

/* ===================== STEADYWORKS — WORKFLOW ===================== */
/* Joins up lead → quote → job → invoice → paid → review / repeat work. */

/* ---------- customers: every quote, job and invoice links to a customer record ---------- */
function swEnsureCustomer(name, extra){
  name = String(name||'').trim();
  if(!name) return null;
  extra = extra||{};
  let c = DB.customers.find(x=>String(x.name||'').trim().toLowerCase()===name.toLowerCase());
  if(!c){
    c = {id:uid(), name, phone:extra.phone||'', email:extra.email||'', address:extra.address||'', propertyType:extra.propertyType||'Residential',
      leadSource:extra.source||'Other', notes:'Added automatically from '+(extra.from||'a record')+'.', createdAt:localDateStr()};
    DB.customers.push(c);
    logActivity('Customer created', name+' (automatic)');
  } else {
    // fill gaps only — never overwrite details you've typed on the customer
    ['phone','email','address'].forEach(k=>{ if(!c[k] && extra[k]) c[k] = extra[k]; });
  }
  return c;
}
function swCustomerFor(rec){
  if(!rec) return null;
  return (rec.customerId && DB.customers.find(c=>c.id===rec.customerId)) || DB.customers.find(c=>c.name===rec.customerName) || null;
}
function swQuoteForCustomer(id){
  const c = DB.customers.find(x=>x.id===id);
  openQuoteModal(null, null, {customerName:c?c.name:''});
  if(c) setTimeout(()=>{ const sel = document.getElementById('f-customer'); if(sel) sel.value = c.id; }, 0);
}

/* ---------- quotes: sent date, chasing, won/lost, lead stage ---------- */
function swQuoteStatusChange(q, newStatus, isNew){
  if(newStatus==='sent' && (isNew || q.status!=='sent') && !q.sentAt) q.sentAt = localDateStr();
  if(newStatus==='approved' && (isNew || q.status!=='approved')) q.wonAt = localDateStr();
  if(['declined','expired'].includes(newStatus) && (isNew || q.status!==newStatus)) q.lostAt = localDateStr();
}
function swQuoteAge(q){ const d = daysUntil(q.sentAt||q.createdAt); return d===null ? 0 : -d; }
// A sent quote needs chasing 3+ days after it went out (or after the last chase).
function swQuoteNeedsChase(q){
  if(q.status!=='sent') return false;
  const last = (q.chases||[]).slice(-1)[0];
  const since = daysUntil(last ? last.date : (q.sentAt||q.createdAt));
  return since!==null && -since >= 3;
}
function swSyncLeadFromQuote(q){
  if(!q || !q.leadId) return;
  const lead = DB.leads.find(l=>l.id===q.leadId);
  if(!lead) return;
  const total = calcQuoteTotal(q).total;
  lead.quoteRef = q.quoteNumber; lead.value = Math.round(total*100)/100;
  const order = LEAD_STAGES.indexOf(lead.stage);
  if(q.status==='approved' && order < LEAD_STAGES.indexOf('Won')) lead.stage = 'Won';
  else if(['sent','draft'].includes(q.status) && order < LEAD_STAGES.indexOf('Quoted')) lead.stage = 'Quoted';
}
function swMarkQuoteLost(id){
  const q = DB.quotes.find(x=>x.id===id);
  if(!q) return;
  openModal(`<div class="modal-head"><h2>Mark ${esc(q.quoteNumber)} as lost?</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body"><div class="form-group"><label>Why was it lost? (helps you price and follow up better)</label><select id="ql-reason">${['Price too high','Went with someone else','Job cancelled / postponed','No response','Other'].map(r=>`<option>${r}</option>`).join('')}</select></div></div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-danger" onclick="swConfirmQuoteLost('${id}')">Mark lost</button></div>`);
}
function swConfirmQuoteLost(id){
  const q = DB.quotes.find(x=>x.id===id);
  swQuoteStatusChange(q, 'declined');
  q.status = 'declined'; q.lostReason = document.getElementById('ql-reason').value;
  logActivity('Quote lost', q.quoteNumber+' — '+q.lostReason);
  save(); closeModal(); renderPage(); renderNav(); toast('Marked as lost','✕');
}

/* ---------- chasing: quotes, invoices, services, reviews (email / SMS, uses Follow-up templates) ---------- */
function swMerge(str, vars){ return String(str||'').replace(/\{\{\s*(\w+)\s*\}\}/g, (m,k)=> vars[k]!=null ? vars[k] : m); }
function swChaseContext(kind, id){
  if(kind==='quote'){ const q = DB.quotes.find(x=>x.id===id); if(!q) return null; const c = swCustomerFor(q); const lead = q.leadId ? DB.leads.find(l=>l.id===q.leadId) : null;
    return {rec:q, title:'Chase quote '+q.quoteNumber, tplPrefix:'tpl-fu-quote', phone:(c&&c.phone)||(lead&&lead.phone)||'', email:(c&&c.email)||(lead&&lead.email)||'', vars:{name:(q.customerName||'').split(' ')[0], number:q.quoteNumber, amount:gbp(calcQuoteTotal(q).total), date:fmtDate(q.sentAt||q.createdAt)}}; }
  if(kind==='invoice'){ const i = DB.invoices.find(x=>x.id===id); if(!i) return null; const c = swCustomerFor(i);
    return {rec:i, title:'Chase invoice '+i.invoiceNumber, tplPrefix:'tpl-fu-invoice', phone:(c&&c.phone)||'', email:(c&&c.email)||'', vars:{name:(i.customerName||'').split(' ')[0], number:i.invoiceNumber, amount:gbp(invoiceOutstanding(i)), date:fmtDate(i.dueDate)}}; }
  if(kind==='service'){ const sv = (DB.swServices||[]).find(x=>x.id===id); if(!sv) return null; const c = DB.customers.find(x=>x.id===sv.customerId);
    return {rec:sv, title:'Service reminder — '+sv.customerName, tplPrefix:'tpl-fu-service', phone:sv.phone||(c&&c.phone)||'', email:sv.email||(c&&c.email)||'', vars:{name:(sv.customerName||'').split(' ')[0], service:String(sv.type||'service').toLowerCase(), date:fmtDate(sv.nextDue)}}; }
  if(kind==='review'){ const j = DB.jobs.find(x=>x.id===id); if(!j) return null; const c = swCustomerFor(j);
    return {rec:j, title:'Ask '+j.customerName+' for a review', tplPrefix:'tpl-fu-review', phone:(c&&c.phone)||'', email:(c&&c.email)||'', vars:{name:(j.customerName||'').split(' ')[0]}}; }
  return null;
}
function swOpenChase(kind, id){
  const ctx = swChaseContext(kind, id);
  if(!ctx){ toast('Record not found','⚠️'); return; }
  const channel = ctx.email ? 'email' : 'sms';
  window._swChase = {kind, id, channel};
  openModal(`<div class="modal-head"><h2>${esc(ctx.title)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="seg-toggle mb-10" style="display:inline-flex;">
        <button class="seg-btn" id="ch-btn-email" onclick="swChaseChannel('email')">✉️ Email</button>
        <button class="seg-btn" id="ch-btn-sms" onclick="swChaseChannel('sms')">💬 Text</button>
      </div>
      <div class="form-row"><div class="form-group"><label>Email</label><input id="ch-email" type="email" value="${esc(ctx.email)}"></div><div class="form-group"><label>Phone</label><input id="ch-phone" type="tel" value="${esc(ctx.phone)}"></div></div>
      <div class="form-group" id="ch-subject-wrap"><label>Subject</label><input id="ch-subject" type="text"></div>
      <div class="form-group"><label>Message</label><textarea id="ch-body" style="min-height:150px;"></textarea></div>
      <p class="small muted">Templates live under Follow Ups → Templates. Sending opens your email or messages app with this filled in. The message is also copied to your clipboard, and the chase is logged.</p>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="swLogChase(true)">Log as chased (phoned / in person)</button><button class="btn btn-gold" onclick="swSendChase()">Open & send</button></div>`);
  swChaseChannel(channel);
}
function swChaseChannel(channel){
  const st = window._swChase; st.channel = channel;
  const ctx = swChaseContext(st.kind, st.id);
  const tpl = ((DB.templates&&DB.templates.followup)||[]).find(t=>t.id===ctx.tplPrefix+'-'+channel) || ((DB.templates&&DB.templates.followup)||[]).find(t=>t.channel===channel);
  ['email','sms'].forEach(c=>{ const b = document.getElementById('ch-btn-'+c); if(b){ b.style.background = c===channel?'var(--gold)':''; b.style.color = c===channel?'#fff':''; } });
  document.getElementById('ch-subject-wrap').style.display = channel==='email' ? '' : 'none';
  document.getElementById('ch-subject').value = tpl ? swMerge(tpl.subject, ctx.vars) : '';
  let body = tpl ? swMerge(tpl.body, ctx.vars) : '';
  if(st.kind==='invoice'){ const extra = payDetailsText(ctx.rec, channel==='sms'); if(extra && !body.includes(extra.split('\n')[0])) body += (channel==='sms'?' ':'\n\n') + extra; }
  document.getElementById('ch-body').value = body;
}
function swSendChase(){
  const st = window._swChase;
  const body = document.getElementById('ch-body').value;
  let uri;
  if(st.channel==='email'){
    const email = document.getElementById('ch-email').value.trim();
    if(!email){ toast('Add an email address first','⚠️'); return; }
    uri = `mailto:${email}?subject=${encodeURIComponent(document.getElementById('ch-subject').value)}&body=${encodeURIComponent(body)}`;
  } else {
    const phone = document.getElementById('ch-phone').value.replace(/[^\d+]/g,'');
    if(!phone){ toast('Add a phone number first','⚠️'); return; }
    uri = `sms:${phone}?body=${encodeURIComponent(body)}`;
  }
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(body).catch(()=>{});
  swLogChase(false);
  window.location.href = uri;
}
function swLogChase(manual){
  const st = window._swChase;
  const ctx = swChaseContext(st.kind, st.id);
  const rec = ctx.rec;
  const entry = {date:localDateStr(), channel: manual ? 'manual' : st.channel};
  if(st.kind==='service'){ rec.reminders = rec.reminders||[]; rec.reminders.push(entry); }
  else if(st.kind==='review'){ rec.reviewRequestedAt = localDateStr(); }
  else { rec.chases = rec.chases||[]; rec.chases.push(entry); }
  // keep contact details you typed in the chase box
  const c = st.kind==='service' ? DB.customers.find(x=>x.id===rec.customerId) : swCustomerFor(rec);
  const email = document.getElementById('ch-email').value.trim(), phone = document.getElementById('ch-phone').value.trim();
  if(c){ if(!c.email && email) c.email = email; if(!c.phone && phone) c.phone = phone; }
  logActivity({quote:'Quote chased', invoice:'Invoice chased', service:'Service reminder sent', review:'Review requested'}[st.kind], (rec.quoteNumber||rec.invoiceNumber||rec.jobNumber||rec.customerName||'')+' · '+entry.channel);
  save(); closeModal(); renderPage(); renderNav();
  toast(manual ? 'Logged — it\'ll drop off the chase list for a few days' : 'Opening your '+(st.channel==='email'?'email':'messages')+' app — message copied too');
}

/* ---------- record a payment (real date + method → invoice + Targets ledger) ---------- */
function swOpenRecordPayment(id){
  const inv = DB.invoices.find(x=>x.id===id);
  if(!inv) return;
  const owed = tgRound(invoiceOutstanding(inv));
  const t = calcInvoiceTotal(inv);
  openModal(`<div class="modal-head"><h2>Record payment — ${esc(inv.invoiceNumber)}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="small muted mb-10">${esc(inv.customerName)} · total ${fmt(t.total)} · paid so far ${fmt(inv.amountPaid||0)} · <strong style="color:var(--text);">${fmt(owed)} outstanding</strong></p>
      <div class="form-row"><div class="form-group"><label>Amount received (£)</label><input id="rp-amount" type="number" min="0" step="0.01" value="${owed}"></div><div class="form-group"><label>Date received</label><input id="rp-date" type="date" value="${localDateStr()}"></div></div>
      <div class="form-row"><div class="form-group"><label>Method</label><select id="rp-method">${['Bank transfer','Card','Cash','Cheque','Other'].map(m=>`<option>${m}</option>`).join('')}</select></div><div class="form-group"><label>Reference / note</label><input id="rp-note" type="text" placeholder="optional"></div></div>
      ${(inv.payments||[]).length?`<div class="divider"></div><div class="small muted">Previous payments: ${(inv.payments||[]).map(p=>`${fmt(p.amount)} on ${fmtDate(p.date)} (${esc(p.method)})`).join(' · ')}</div>`:''}
      <p class="small muted mt-10">This counts toward your SteadyWorks target on the date you enter.</p>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-success" onclick="swSaveRecordPayment('${id}')">Record payment</button></div>`);
}
function swSaveRecordPayment(id){
  const inv = DB.invoices.find(x=>x.id===id);
  const amount = tgRound(Number(document.getElementById('rp-amount').value));
  const date = document.getElementById('rp-date').value;
  const owed = tgRound(invoiceOutstanding(inv));
  if(!(amount>0)){ toast('Enter the amount received','⚠️'); return; }
  if(amount > owed + 0.01){ toast('That\'s more than the '+fmt(owed)+' outstanding','⚠️'); return; }
  if(!date){ toast('Add the date it was received','⚠️'); return; }
  const prevReceived = tgInvoiceReceived(inv);
  const pid = uid();
  inv.payments = inv.payments||[];
  inv.payments.push({id:pid, amount, date, method:document.getElementById('rp-method').value, note:document.getElementById('rp-note').value.trim()});
  inv.amountPaid = tgRound((Number(inv.amountPaid)||0) + amount);
  const fullyPaid = inv.amountPaid >= calcInvoiceTotal(inv).total - 0.01;
  inv.status = fullyPaid ? 'paid' : 'partial';
  if(fullyPaid) inv.paidAt = date;
  // Ledger entry with the real date. Only the newly-received amount is added, so nothing is counted twice.
  const linked = tgLinkedTotal(DB, 'inv:'+inv.id);
  const newMoney = tgRound(tgInvoiceReceived(inv) - Math.max(prevReceived, linked));
  if(newMoney > 0.009){
    const job = inv.jobId ? DB.jobs.find(j=>j.id===inv.jobId) : null;
    tgArr(DB,'tgPayments').push({id:'pay-invrec-'+pid, biz:'sw', amount:newMoney, date, type: fullyPaid ? (linked>0||prevReceived>0?'final':'final') : (linked>0||prevReceived>0?'stage':'deposit'),
      customer:inv.customerName||'', job: job?job.jobNumber:inv.invoiceNumber, sourceType:'Invoice', sourceKey:'inv:'+inv.id, sourceLabel:inv.invoiceNumber, manual:false, estimated:false,
      channel:'', notes:document.getElementById('rp-method').value, createdAt:new Date().toISOString()});
  }
  if(fullyPaid && inv.jobId){ const j = DB.jobs.find(x=>x.id===inv.jobId); if(j){ j.actualRevenue = tgRound((Number(j.actualRevenue)||0) + amount); j.timeline = j.timeline||[]; j.timeline.push({e:'Payment Received', d:date}); } }
  logActivity('Payment recorded', inv.invoiceNumber+' — '+fmt(amount));
  save(); closeModal(); renderPage(); renderNav();
  toast(fullyPaid ? inv.invoiceNumber+' paid in full 🎉' : fmt(amount)+' recorded — '+fmt(invoiceOutstanding(inv))+' still owed', '💷');
}

/* ---------- finishing a job: invoice, review, next service ---------- */
function swMarkJobComplete(id){
  const j = DB.jobs.find(x=>x.id===id);
  if(!j) return;
  j.status = 'completed';
  if(!j.endDate || j.endDate > localDateStr()) j.endDate = localDateStr(); if(j.startDate && j.startDate > j.endDate) j.startDate = j.endDate; // finished today, even if planned later
  j.timeline = j.timeline||[]; j.timeline.push({e:'Job Completed', d:localDateStr()});
  swServiceJobCompleted(j);
  logActivity('Job completed', j.jobNumber+' — '+j.customerName);
  save(); renderPage(); renderNav();
  swJobCompleteModal(id);
}
function swJobCompleteModal(id){
  const j = DB.jobs.find(x=>x.id===id);
  if(!j) return;
  const invoiced = DB.invoices.filter(i=>i.jobId===j.id);
  const hasPlan = (DB.swServices||[]).some(sv=>sv.customerId===j.customerId && sv.status!=='paused');
  const m = swJobMargin(j);
  openModal(`<div class="modal-head"><h2>✅ ${esc(j.jobNumber)} complete</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p class="mb-10">${esc(j.customerName)} · ${fmt(m.value)}${m.cost?` · margin ${Math.round(m.pct)}%`:''}</p>
      <div class="card-title">Next steps</div>
      <div class="tg-rec"><div style="flex:1;"><strong>1. Get paid</strong><div class="small muted">${invoiced.length?invoiced.length+' invoice'+(invoiced.length===1?'':'s')+' already raised for this job':'No invoice yet. Invoicing the same day gets you paid fastest.'}</div></div><div class="tg-rec-side">${invoiced.length?`<button class="btn btn-ghost btn-sm" onclick="closeModal(); navigate('invoices')">View invoices</button>`:`<button class="btn btn-gold btn-sm" onclick="closeModal(); swInvoiceFromJob('${j.id}')">Create invoice</button>`}</div></div>
      <div class="tg-rec"><div style="flex:1;"><strong>2. Ask for a review</strong><div class="small muted">${j.reviewRequestedAt?'Requested '+fmtDate(j.reviewRequestedAt):'Happy customers are most likely to leave one today.'}</div></div><div class="tg-rec-side"><button class="btn btn-ghost btn-sm" onclick="closeModal(); swOpenChase('review','${j.id}')">Request review</button></div></div>
      <div class="tg-rec"><div style="flex:1;"><strong>3. Book the repeat work</strong><div class="small muted">${hasPlan?'This customer already has a service plan.':'Boilers, cylinders and landlord certificates come round every year. Set a reminder now.'}</div></div><div class="tg-rec-side">${hasPlan?'':`<button class="btn btn-ghost btn-sm" onclick="closeModal(); swOpenService(null,'${j.customerId||''}','${j.id}')">Add service plan</button>`}</div></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Done</button></div>`);
}
// Builds a draft invoice from the won quote (or the job value) plus approved variations not yet invoiced.
function swInvoiceFromJob(id){
  const j = DB.jobs.find(x=>x.id===id);
  if(!j) return;
  const quote = (j.quoteId && DB.quotes.find(q=>q.id===j.quoteId)) || DB.quotes.find(q=>q.jobId===j.id && q.status==='approved');
  const already = DB.invoices.filter(i=>i.jobId===j.id);
  let items;
  if(already.length) items = [];
  else if(quote) items = quote.items.map(i=>Object.assign({}, i));
  else items = [{desc:'Works completed — '+j.jobNumber+(j.address?' at '+j.address:''), qty:1, unit:'job', rate:tgRound((Number(j.expectedRevenue)||0)/(1+(Number(DB.settings.vatRate)||0)/100))}];
  (j.variations||[]).filter(v=>v.status==='Approved').forEach(v=>items.push({desc:'Variation: '+v.desc, qty:1, unit:'job', rate:Number(v.amount)||0}));
  if(!items.length) items.push({desc:'', qty:1, unit:'ea', rate:0});
  openInvoiceModal(null, j.id);
  window._editingItems = items;
  renderLineItems();
  const due = new Date(); due.setDate(due.getDate()+14);
  const dueEl = document.getElementById('f-dueDate'); if(dueEl && !dueEl.value) dueEl.value = localDateStr(due);
  if(quote){ const v = document.getElementById('f-vatRate'); if(v){ v.value = quote.vatRate; updateTotals(); } }
  window._invoiceFromJobVariations = j.id;
  toast(already.length ? 'This job already has '+already.length+' invoice'+(already.length===1?'':'s')+' — add only what\'s left' : quote ? 'Filled from '+quote.quoteNumber+' — check and save' : 'Filled from the job value — check and save');
}

/* ---------- service plans (annual services, landlord gas safety …) ---------- */
const SW_SERVICE_TYPES = ['Annual boiler service','Landlord gas safety (CP12)','Unvented cylinder service','Power flush','Back-flow / water safety check','Other'];
function swAddMonths(ds, n){ const d = tgDate(ds); const day = d.getDate(); d.setDate(1); d.setMonth(d.getMonth()+n); d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth()+1, 0).getDate())); return localDateStr(d); }
function swServiceStatus(sv){
  if(sv.status==='paused') return {label:'Paused', cls:'st-cancelled', due:false, days:null};
  const d = daysUntil(sv.nextDue);
  if(d===null) return {label:'No date', cls:'st-draft', due:false, days:null};
  if(sv.bookedJobId){ const j = DB.jobs.find(x=>x.id===sv.bookedJobId); if(j && !['completed','invoiced','cancelled'].includes(j.status)) return {label:'Booked '+fmtDate(j.startDate), cls:'st-scheduled', due:false, days:d}; }
  if(d<0) return {label:'Overdue '+(-d)+'d', cls:'st-overdue', due:true, days:d};
  if(d<=30) return {label:'Due in '+d+'d', cls:'st-onhold', due:true, days:d};
  return {label:'Due '+fmtDate(sv.nextDue), cls:'st-won', due:false, days:d};
}
let SW_SERVICE_FILTER = 'due';
function view_services(){
  const list = DB.swServices = DB.swServices||[];
  const active = list.filter(sv=>sv.status!=='paused');
  const st = sv => swServiceStatus(sv);
  const annual = active.reduce((s,sv)=>s+(Number(sv.price)||0)*12/Math.max(1,Number(sv.intervalMonths)||12),0);
  const due30 = active.filter(sv=>st(sv).due);
  const overdue = active.filter(sv=>(st(sv).days??1)<0 && st(sv).due);
  const match = sv => SW_SERVICE_FILTER==='all' ? true : SW_SERVICE_FILTER==='due' ? st(sv).due : SW_SERVICE_FILTER==='overdue' ? st(sv).due && st(sv).days<0 : SW_SERVICE_FILTER==='paused' ? sv.status==='paused' : SW_SERVICE_FILTER==='booked' ? /^Booked/.test(st(sv).label) : true;
  const rows = list.filter(match).slice().sort((a,b)=>String(a.nextDue).localeCompare(String(b.nextDue))).map(sv=>{
    const s = st(sv); const lastRem = (sv.reminders||[]).slice(-1)[0];
    return `<tr>
      <td><strong>${esc(sv.customerName)}</strong><div class="small muted">${esc(sv.address||'')}</div></td>
      <td>${esc(sv.type)}<div class="small muted">every ${sv.intervalMonths||12} months</div></td>
      <td>${fmtDate(sv.lastDone)}</td>
      <td>${fmtDate(sv.nextDue)}</td>
      <td><span class="pill ${s.cls}">${esc(s.label)}</span>${lastRem?`<div class="small muted">reminded ${fmtDate(lastRem.date)}</div>`:''}</td>
      <td>${fmt(sv.price)}</td>
      <td style="white-space:nowrap;">
        ${sv.status!=='paused'?`<button class="icon-btn" title="Send reminder" onclick="swOpenChase('service','${sv.id}')">📣</button><button class="icon-btn" title="Book a job" onclick="swBookService('${sv.id}')">📅</button><button class="icon-btn" title="Mark done" onclick="swServiceDone('${sv.id}')">✓</button>`:''}
        <button class="icon-btn" title="Edit" onclick="swOpenService('${sv.id}')">✎</button>
      </td></tr>`; }).join('');
  const filters = [['due','Due (30 days)'],['overdue','Overdue'],['booked','Booked'],['all','All'],['paused','Paused']];
  return `<div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card kpi-card"><div class="kpi-label">Active plans</div><div class="kpi-value">${active.length}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Due in 30 days</div><div class="kpi-value" style="color:${due30.length?'var(--warning)':'inherit'};">${due30.length}</div><div class="small muted mt-10">${fmt(due30.reduce((s,sv)=>s+(Number(sv.price)||0),0))} of work</div></div>
    <div class="card kpi-card"><div class="kpi-label">Overdue</div><div class="kpi-value" style="color:${overdue.length?'var(--danger)':'inherit'};">${overdue.length}</div></div>
    <div class="card kpi-card"><div class="kpi-label">Repeat revenue / year</div><div class="kpi-value">${fmt(annual)}</div><div class="small muted mt-10">from active plans</div></div>
  </div>
  <div class="tabs">${filters.map(([k,l])=>`<button class="tab-btn ${SW_SERVICE_FILTER===k?'active':''}" onclick="SW_SERVICE_FILTER='${k}'; renderPage();">${l}</button>`).join('')}</div>
  <div class="card"><table>
    <thead><tr><th>Customer</th><th>Service</th><th>Last done</th><th>Next due</th><th>Status</th><th>Price</th><th></th></tr></thead>
    <tbody>${rows || (list.length ? emptyRow(7,'Nothing in this view.') : emptyRow(7,'No service plans yet. Every boiler you install or service, and every landlord certificate, is guaranteed work next year. Add them here and you\'ll be reminded 30 days before they\'re due.','+ New Service Plan','swOpenService()'))}</tbody>
  </table></div>
  <p class="small muted mt-10">📣 sends a reminder by email or text · 📅 books it in as a job · ✓ marks it done and rolls the next due date forward. Completing a booked job rolls it forward automatically.</p>`;
}
function swOpenService(id, customerId, fromJobId){
  const sv = id ? (DB.swServices||[]).find(x=>x.id===id) : null;
  const c = sv ? DB.customers.find(x=>x.id===sv.customerId) : (customerId ? DB.customers.find(x=>x.id===customerId) : null);
  const job = fromJobId ? DB.jobs.find(x=>x.id===fromJobId) : null;
  const last = sv ? sv.lastDone : (job ? (job.endDate||localDateStr()) : localDateStr());
  openModal(`<div class="modal-head"><h2>${sv?'Edit service plan':'New service plan'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Customer *</label><select id="sv-cust"><option value="">— Pick a customer —</option>${DB.customers.slice().sort((a,b)=>String(a.name).localeCompare(String(b.name))).map(x=>`<option value="${x.id}" ${c&&c.id===x.id?'selected':''}>${esc(x.name)}</option>`).join('')}<option value="__new">+ New customer…</option></select></div>
        <div class="form-group"><label>Service</label><select id="sv-type">${SW_SERVICE_TYPES.map(t=>`<option ${(sv?sv.type:'Annual boiler service')===t?'selected':''}>${t}</option>`).join('')}</select></div>
      </div>
      <div class="form-group" id="sv-newname-wrap" style="display:none;"><label>New customer name</label><input id="sv-newname" type="text"></div>
      <div class="form-group"><label>Address (if different from customer)</label><input id="sv-address" type="text" value="${esc(sv?sv.address||'':(c?c.address||'':(job?job.address||'':'')))}"></div>
      <div class="form-row form-row-3">
        <div class="form-group"><label>Last done</label><input id="sv-last" type="date" value="${last||''}" onchange="swServiceRecalc()"></div>
        <div class="form-group"><label>Every (months)</label><input id="sv-interval" type="number" min="1" value="${sv?sv.intervalMonths||12:12}" oninput="swServiceRecalc()"></div>
        <div class="form-group"><label>Next due</label><input id="sv-next" type="date" value="${sv?sv.nextDue:swAddMonths(last||localDateStr(),12)}"></div>
      </div>
      <div class="form-row"><div class="form-group"><label>Price (£)</label><input id="sv-price" type="number" min="0" step="0.01" value="${sv?sv.price||'':90}"></div>
        <div class="form-group"><label>Status</label><select id="sv-status"><option value="active" ${!sv||sv.status!=='paused'?'selected':''}>Active</option><option value="paused" ${sv&&sv.status==='paused'?'selected':''}>Paused</option></select></div></div>
      <div class="form-group"><label>Notes (boiler make/model, access, landlord contact…)</label><textarea id="sv-notes">${sv?esc(sv.notes||''):''}</textarea></div>
      ${sv&&(sv.history||[]).length?`<div class="small muted">History: ${(sv.history||[]).map(h=>fmtDate(h.date)).join(' · ')}</div>`:''}
    </div>
    <div class="modal-foot">${sv?`<button class="btn btn-danger" onclick="swDeleteService('${sv.id}')">Delete</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="swSaveService('${sv?sv.id:''}','${fromJobId||''}')">Save</button></div>`);
  document.getElementById('sv-cust').onchange = e=>{ document.getElementById('sv-newname-wrap').style.display = e.target.value==='__new' ? '' : 'none'; const cc = DB.customers.find(x=>x.id===e.target.value); if(cc && !document.getElementById('sv-address').value) document.getElementById('sv-address').value = cc.address||''; };
}
function swServiceRecalc(){
  const last = document.getElementById('sv-last').value, n = Number(document.getElementById('sv-interval').value)||12;
  if(last) document.getElementById('sv-next').value = swAddMonths(last, n);
}
function swSaveService(id, fromJobId){
  let custId = document.getElementById('sv-cust').value;
  if(custId==='__new'){
    const nm = document.getElementById('sv-newname').value.trim();
    if(!nm){ toast('Enter the new customer\'s name','⚠️'); return; }
    custId = swEnsureCustomer(nm, {address:document.getElementById('sv-address').value.trim(), from:'a service plan'}).id;
  }
  const c = DB.customers.find(x=>x.id===custId);
  if(!c){ toast('Pick a customer','⚠️'); return; }
  const next = document.getElementById('sv-next').value;
  if(!next){ toast('Set the next due date','⚠️'); return; }
  const interval = Math.floor(Number(document.getElementById('sv-interval').value)||0);
  if(interval<1){ toast('Interval must be at least 1 month','⚠️'); return; }
  const price = Number(document.getElementById('sv-price').value)||0;
  if(price<0){ toast('Price can\'t be negative','⚠️'); return; }
  const data = {customerId:c.id, customerName:c.name, type:document.getElementById('sv-type').value, address:document.getElementById('sv-address').value.trim()||c.address||'',
    lastDone:document.getElementById('sv-last').value, intervalMonths:interval, nextDue:next, price, status:document.getElementById('sv-status').value, notes:document.getElementById('sv-notes').value.trim()};
  DB.swServices = DB.swServices||[];
  if(id) Object.assign(DB.swServices.find(x=>x.id===id), data);
  else DB.swServices.push(Object.assign({id:'svc-'+uid(), history:[], reminders:[], createdAt:new Date().toISOString(), sourceJobId:fromJobId||null}, data));
  save(); closeModal(); renderPage(); renderNav(); toast(id?'Service plan updated':'Service plan added — you\'ll be reminded before '+fmtDate(next));
}
function swDeleteService(id){
  confirmDelete('Delete this service plan?', 'Past history on it will be lost.', ()=>{
    DB.swServices = (DB.swServices||[]).filter(x=>x.id!==id); save(); renderPage(); renderNav(); toast('Service plan deleted','🗑️');
  });
}
function swServiceDone(id, dateOverride, jobId){
  const sv = (DB.swServices||[]).find(x=>x.id===id);
  if(!sv) return;
  const date = dateOverride || localDateStr();
  sv.history = sv.history||[]; sv.history.push({date, jobId:jobId||null});
  sv.lastDone = date; sv.nextDue = swAddMonths(date, Number(sv.intervalMonths)||12); sv.bookedJobId = null;
  if(!dateOverride){ save(); renderPage(); renderNav(); toast('Done — next due '+fmtDate(sv.nextDue)); }
}
// Completing a job booked from a service plan rolls that plan forward.
function swServiceJobCompleted(j){
  (DB.swServices||[]).filter(sv=>sv.bookedJobId===j.id || j.serviceId===sv.id).forEach(sv=>swServiceDone(sv.id, j.endDate||localDateStr(), j.id));
}
function swBookService(id){
  const sv = (DB.swServices||[]).find(x=>x.id===id);
  if(!sv) return;
  const c = DB.customers.find(x=>x.id===sv.customerId);
  const jobNumber = nextJobNumber();
  const start = sv.nextDue && sv.nextDue>=localDateStr() ? sv.nextDue : localDateStr();
  const job = {id:uid(), jobNumber, customerId:sv.customerId, customerName:sv.customerName, address:sv.address||(c&&c.address)||'', propertyType:(c&&c.propertyType)||'Residential',
    status:'scheduled', priority:'Medium', assignedTo:'', startDate:start, endDate:start, expectedRevenue:Number(sv.price)||0, actualRevenue:0, source:'Repeat Customer', serviceId:sv.id,
    notes:[{type:'Site', text:sv.type+(sv.notes?' — '+sv.notes:''), date:localDateStr()}], photos:[], costLines:[], documents:[], variations:[], phases:[], timeline:[{e:'Booked from service plan', d:localDateStr()}]};
  DB.jobs.push(job);
  sv.bookedJobId = job.id;
  logActivity('Service booked', sv.customerName+' — '+sv.type+' ('+jobNumber+')');
  save(); renderNav();
  toast(jobNumber+' booked for '+fmtDate(start)+' — set the engineer and time');
  navigate('jobs', job.id);
  setTimeout(()=>openJobModal(job.id), 250);
}

/* ---------- schedule board: who's where this week ---------- */
function swScheduleWeek(){ if(!window._swWeek) window._swWeek = tgWeekStart(localDateStr(), 1); return window._swWeek; }
function swScheduleNav(dir){ window._swWeek = dir===0 ? tgWeekStart(localDateStr(),1) : tgAddDays(swScheduleWeek(), 7*dir); renderPage(); }
function swScheduleBoard(){
  const ws = swScheduleWeek();
  const days = Array.from({length:7}, (_,i)=>tgAddDays(ws, i));
  const today = localDateStr();
  const people = DB.employees.map(e=>e.name).concat(['Unassigned']);
  const live = DB.jobs.filter(j=>j.startDate && j.status!=='cancelled');
  const onDay = (name, d) => live.filter(j=>(name==='Unassigned' ? !j.assignedTo || !DB.employees.some(e=>e.name===j.assignedTo) : j.assignedTo===name) && d>=j.startDate && d<=(j.endDate&&j.endDate>=j.startDate?j.endDate:j.startDate));
  const colour = {scheduled:'#7DD3FC', active:'#E11D2A', 'on-hold':'#F59E0B', completed:'#22C55E', invoiced:'#818CF8'};
  const unscheduled = DB.jobs.filter(j=>!j.startDate && !['completed','invoiced','cancelled'].includes(j.status));
  const weekJobs = new Set(); people.forEach(p=>days.slice(0,5).forEach(d=>onDay(p,d).forEach(j=>weekJobs.add(j.id))));
  let capInfo = '';
  try{ const cap = tgCapacity(DB,'sw',new Date()); capInfo = `${weekJobs.size} job${weekJobs.size===1?'':'s'} booked Mon–Fri · capacity about ${cap.m.capacityUnits} · ${cap.next.sales} needed for the next target level`; }catch(e){}
  return `<div class="card">
    <div class="flex-between mb-10" style="flex-wrap:wrap;gap:8px;">
      <div class="flex gap-8"><button class="btn btn-ghost btn-sm" onclick="swScheduleNav(-1)">← Prev</button><button class="btn btn-ghost btn-sm" onclick="swScheduleNav(0)">This week</button><button class="btn btn-ghost btn-sm" onclick="swScheduleNav(1)">Next →</button></div>
      <strong>Week of ${fmtDate(ws)}</strong>
      <span class="small muted">${capInfo}</span>
    </div>
    <div class="sw-sched" style="grid-template-columns:130px repeat(7,minmax(110px,1fr));">
      <div class="sw-sched-h"></div>${days.map((d,i)=>`<div class="sw-sched-h ${d===today?'today':''}">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]} <span class="muted">${tgDate(d).getDate()}</span></div>`).join('')}
      ${people.map(p=>`<div class="sw-sched-p">${esc(p)}</div>${days.map(d=>{ const js = onDay(p,d); return `<div class="sw-sched-c ${d===today?'today':''} ${js.length>1?'busy':''}">${js.map(j=>`<div class="sw-chip" style="--c:${colour[j.status]||'#9CA0AE'}" onclick="navigate('jobs','${j.id}')" title="${esc(j.jobNumber+' — '+j.customerName+(j.address?' · '+j.address:''))}"><strong>${esc(j.jobNumber.replace(/^SW-\d{4}-/,'#'))}</strong> ${esc(j.customerName)}</div>`).join('')}</div>`; }).join('')}`).join('')}
    </div>
    ${DB.employees.length?'':'<p class="small muted mt-10">Add team members under Team so each person gets their own row.</p>'}
  </div>
  <div class="card mt-10"><div class="card-title">Not scheduled yet <span class="small muted">${unscheduled.length}</span></div>
    ${unscheduled.length?unscheduled.map(j=>`<div class="flex-between" style="padding:8px 0;border-bottom:1px solid var(--border);gap:8px;"><div><strong>${esc(j.jobNumber)}</strong> · ${esc(j.customerName)} <span class="small muted">${fmt(j.expectedRevenue)}</span></div><button class="btn btn-ghost btn-sm" onclick="openJobModal('${j.id}')">Set date & engineer</button></div>`).join(''):'<p class="small muted">Every open job has a date.</p>'}
  </div>`;
}

/* ---------- SteadyWorks dashboard: money waiting on you ---------- */
function swMoneyWaitingHtml(){
  const chaseQ = DB.quotes.filter(swQuoteNeedsChase);
  const overdue = DB.invoices.filter(i=>invoiceStatus(i)==='overdue');
  const toInvoice = DB.jobs.filter(j=>j.status==='completed' && !swJobInvoiced(j));
  const services = (DB.swServices||[]).filter(sv=>swServiceStatus(sv).due);
  const card = (icon, label, n, amount, go, cta) => `<div class="card kpi-card row-link" style="cursor:pointer;" onclick="${go}"><div class="kpi-icon">${icon}</div><div class="kpi-label">${label}</div><div class="kpi-value" style="color:${n?'var(--warning)':'inherit'};">${n}</div><div class="small muted mt-10">${amount} · ${cta} →</div></div>`;
  return `<div class="card-title" style="margin-bottom:10px;">💷 Money waiting on you</div>
  <div class="grid grid-4" style="margin-bottom:20px;">
    ${card('📣','Quotes to chase', chaseQ.length, fmt(chaseQ.reduce((s,q)=>s+calcQuoteTotal(q).total,0)), "SW_QUOTE_FILTER='chase'; navigate('quotes')", 'Chase')}
    ${card('🧾','Overdue invoices', overdue.length, fmt(overdue.reduce((s,i)=>s+invoiceOutstanding(i),0)), "navigate('invoices')", 'Collect')}
    ${card('✅','Done, not invoiced', toInvoice.length, fmt(toInvoice.reduce((s,j)=>s+swJobMargin(j).value,0)), "SW_JOB_FILTER='completed'; window._jobsViewMode='list'; navigate('jobs')", 'Invoice')}
    ${card('🔁','Services due', services.length, fmt(services.reduce((s,sv)=>s+(Number(sv.price)||0),0)), "SW_SERVICE_FILTER='due'; navigate('services')", 'Book')}
  </div>`;
}

/* ===================== STEADYWORKS — PRICE BOOK ===================== */
let PB_SEARCH = '', PB_CAT = 'all';
const PB_CATEGORIES = ['Labour','Call-outs','Boilers & heating','Bathrooms','Kitchens','Leaks & repairs','Drainage','Materials','Certificates','Other'];
function pbItems(){ DB.priceBook = DB.priceBook||[]; return DB.priceBook; }
function pbUsage(id){ return DB.quotes.concat(DB.invoices).reduce((n,d)=>n+(d.items||[]).filter(i=>i.pbId===id).length,0); }
function pbRows(){
  const q = PB_SEARCH.trim().toLowerCase();
  const list = pbItems().filter(i=>(PB_CAT==='all'||i.category===PB_CAT) && (!q || [i.name,i.desc,i.category].join(' ').toLowerCase().includes(q)))
    .slice().sort((a,b)=>String(a.category).localeCompare(String(b.category))||String(a.name).localeCompare(String(b.name)));
  if(!list.length) return pbItems().length ? emptyRow(7,'No items match.') : emptyRow(7,'Your price book is empty. Add your standard jobs and materials once, then pick them into any quote or invoice in one click.','+ Add starter items from my rates','pbStarter()');
  return list.map(i=>{ const m = Number(i.cost)>0 && Number(i.rate)>0 ? (i.rate-i.cost)/i.rate*100 : null; return `<tr class="row-link" onclick="pbOpenItem('${i.id}')">
    <td><strong>${esc(i.name)}</strong>${i.desc?`<div class="small muted">${esc(i.desc)}</div>`:''}</td>
    <td><span class="tag-chip">${esc(i.category||'Other')}</span></td>
    <td>${esc(i.unit||'ea')}</td>
    <td><strong>${fmt(i.rate)}</strong></td>
    <td>${Number(i.cost)>0?fmt(i.cost):'—'}</td>
    <td style="font-weight:700;color:${m==null?'var(--text-soft)':m<20?'var(--danger)':m<35?'var(--warning)':'var(--success)'};">${m==null?'—':Math.round(m)+'%'}</td>
    <td class="small muted">${pbUsage(i.id)||'—'}</td></tr>`; }).join('');
}
function view_price_book(){
  const cats = [...new Set(pbItems().map(i=>i.category||'Other'))];
  return `<div class="toolbar">
    <div class="search-box">🔍<input type="text" placeholder="Search the price book…" value="${esc(PB_SEARCH)}" oninput="PB_SEARCH=this.value; const b=document.getElementById('pb-body'); if(b) b.innerHTML=pbRows();"></div>
    <select style="width:auto;" onchange="PB_CAT=this.value; renderPage();"><option value="all">All categories</option>${cats.map(c=>`<option ${PB_CAT===c?'selected':''}>${esc(c)}</option>`).join('')}</select>
    <div class="spacer"></div>
    ${pbItems().length?'':`<button class="btn btn-ghost btn-sm" onclick="pbStarter()">Add starter items from my rates</button>`}
  </div>
  <div class="card"><table>
    <thead><tr><th>Item</th><th>Category</th><th>Unit</th><th>Price (ex VAT)</th><th>Your cost</th><th>Margin</th><th>Used</th></tr></thead>
    <tbody id="pb-body">${pbRows()}</tbody>
  </table></div>
  <p class="small muted mt-10">Prices are ex VAT. VAT is added on the quote or invoice. Fill in "your cost" and quotes show an estimated margin as you build them.</p>`;
}
function pbOpenItem(id){
  const i = id ? pbItems().find(x=>x.id===id) : null;
  const markup = Number(DB.settings.rates.markup)||0;
  openModal(`<div class="modal-head"><h2>${i?'Edit price book item':'New price book item'}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Name *</label><input id="pb-name" type="text" value="${i?esc(i.name):''}" placeholder="e.g. Replace radiator valve"></div>
      <div class="form-group"><label>Description on quote (optional)</label><input id="pb-desc" type="text" value="${i?esc(i.desc||''):''}" placeholder="e.g. supply & fit, includes drain down and refill"></div>
      <div class="form-row form-row-3">
        <div class="form-group"><label>Category</label><select id="pb-cat">${PB_CATEGORIES.map(c=>`<option ${(i?i.category:'Leaks & repairs')===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label>Unit</label><input id="pb-unit" type="text" value="${i?esc(i.unit||'ea'):'ea'}" placeholder="ea / hr / job / m"></div>
        <div class="form-group"><label>Your cost (£, optional)</label><input id="pb-cost" type="number" min="0" step="0.01" value="${i&&Number(i.cost)>0?i.cost:''}" oninput="pbSuggest()"></div>
      </div>
      <div class="form-group"><label>Price to customer (£ ex VAT) *</label><input id="pb-rate" type="number" min="0" step="0.01" value="${i?i.rate:''}"><div class="small muted mt-10" id="pb-suggest"></div></div>
    </div>
    <div class="modal-foot">${i?`<button class="btn btn-danger" onclick="pbDelete('${i.id}')">Delete</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="pbSaveItem('${i?i.id:''}')">Save</button></div>`);
  window._pbMarkup = markup; pbSuggest();
}
function pbSuggest(){
  const c = Number(document.getElementById('pb-cost').value)||0, el = document.getElementById('pb-suggest');
  if(!el) return;
  el.innerHTML = c>0 ? `With your ${window._pbMarkup}% markup: <a style="color:var(--teal);cursor:pointer;" onclick="document.getElementById('pb-rate').value='${(c*(1+window._pbMarkup/100)).toFixed(2)}'">${fmt(c*(1+window._pbMarkup/100))}</a> (click to use)` : '';
}
function pbSaveItem(id){
  if(!requireField('pb-name','Name the item')) return;
  const rate = Number(document.getElementById('pb-rate').value), cost = Number(document.getElementById('pb-cost').value)||0;
  if(!(rate>=0) || document.getElementById('pb-rate').value===''){ toast('Enter the price to the customer','⚠️'); return; }
  if(cost<0){ toast('Cost can\'t be negative','⚠️'); return; }
  const data = {name:document.getElementById('pb-name').value.trim(), desc:document.getElementById('pb-desc').value.trim(), category:document.getElementById('pb-cat').value,
    unit:document.getElementById('pb-unit').value.trim()||'ea', rate:Math.round(rate*100)/100, cost:Math.round(cost*100)/100};
  if(id) Object.assign(pbItems().find(x=>x.id===id), data); else pbItems().push(Object.assign({id:'pb-'+uid()}, data));
  save(); closeModal(); renderPage(); toast(id?'Item updated':'Added to price book');
}
function pbDelete(id){ confirmDelete('Delete this price book item?', 'Quotes and invoices that already use it are not affected.', ()=>{ DB.priceBook = pbItems().filter(x=>x.id!==id); save(); renderPage(); toast('Item deleted','🗑️'); }); }
// Only uses your own rates from Settings — no invented prices.
function pbStarter(){
  const r = DB.settings.rates;
  const starters = [
    {name:'Labour', unit:'hr', rate:r.labour, category:'Labour', desc:''},
    {name:'Day rate', unit:'day', rate:r.dayRate, category:'Labour', desc:''},
    {name:'Call-out (first hour)', unit:'ea', rate:r.callout, category:'Call-outs', desc:''},
    {name:'Emergency call-out', unit:'ea', rate:r.emergencyCallout, category:'Call-outs', desc:'Out of hours'}
  ].filter(x=>Number(x.rate)>0);
  if(!starters.length){ toast('Set your rates in Settings first','⚠️'); return; }
  starters.forEach(x=>{ if(!pbItems().some(i=>i.name===x.name)) pbItems().push(Object.assign({id:'pb-'+uid(), cost:0}, x)); });
  save(); renderPage(); toast('Added '+starters.length+' items from your rates — now add your standard jobs');
}
function pbAddToDoc(id){
  const i = pbItems().find(x=>x.id===id);
  if(!i) return;
  const items = window._editingItems;
  if(items.length===1 && !items[0].desc && !Number(items[0].rate)) items.pop(); // replace the blank starter row
  items.push({desc:i.name+(i.desc?' — '+i.desc:''), qty:1, unit:i.unit||'ea', rate:Number(i.rate)||0, cost:Number(i.cost)||0, pbId:i.id});
  renderLineItems();
}
function pbMarginHint(sub){
  const items = (window._editingItems||[]).filter(i=>Number(i.qty)*Number(i.rate));
  const costed = items.filter(i=>Number(i.cost)>0);
  if(!costed.length) return '';
  const cost = costed.reduce((s,i)=>s+Number(i.qty)*Number(i.cost),0);
  const revenueCosted = costed.reduce((s,i)=>s+Number(i.qty)*Number(i.rate),0);
  const m = revenueCosted ? (revenueCosted-cost)/revenueCosted*100 : 0;
  return `<div class="small muted mt-10">Known costs ${fmt(cost)} on ${costed.length} of ${items.length} line${items.length===1?'':'s'} · est. margin <strong style="color:${m<20?'var(--danger)':m<35?'var(--warning)':'var(--success)'};">${Math.round(m)}%</strong></div>`;
}
function pbExportCSV(){
  if(!pbItems().length){ toast('Nothing to export yet','⚠️'); return; }
  const lines = [['Name','Description','Category','Unit','Price ex VAT','Your cost'].join(',')].concat(pbItems().map(i=>[i.name,i.desc,i.category,i.unit,i.rate,i.cost].map(csvCell).join(',')));
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿'+lines.join('\r\n')], {type:'text/csv;charset=utf-8'}));
  a.download = 'steadyworks-price-book-'+localDateStr()+'.csv'; document.body.appendChild(a); a.click(); a.remove();
  toast('Price book exported');
}

/* ===================== STEADYWORKS — PURCHASE ORDERS & MATERIALS ===================== */
const PO_STATUSES = [['draft','Draft'],['ordered','Ordered'],['received','Received'],['cancelled','Cancelled']];
function nextPoNumber(){ DB.counters.po = (Number(DB.counters.po)||0)+1; return 'PO-'+new Date().getFullYear()+'-'+String(DB.counters.po).padStart(3,'0'); }
function poTotals(po){
  const net = (po.items||[]).reduce((s,i)=>s+(Number(i.qty)||0)*(Number(i.unitCost)||0),0);
  const vat = net*(Number(po.vatRate)||0)/100;
  return {net:Math.round(net*100)/100, vat:Math.round(vat*100)/100, gross:Math.round((net+vat)*100)/100};
}
// The cost that hits the job: net if you're VAT registered (you reclaim the VAT), gross if not.
function poJobCost(po){ const t = poTotals(po); return DB.settings.vatRegistered===false ? t.gross : t.net; }
function poJobPanelHtml(j){
  const pos = (DB.purchaseOrders||[]).filter(po=>po.jobId===j.id).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));
  const matBudget = (j.costLines||[]).filter(c=>c.category==='Materials').reduce((s,c)=>s+(Number(c.budget)||0),0);
  const ordered = pos.filter(p=>p.status!=='cancelled').reduce((s,p)=>s+poJobCost(p),0);
  const received = pos.filter(p=>p.status==='received').reduce((s,p)=>s+poJobCost(p),0);
  const tone = {draft:'st-draft', ordered:'st-sent', received:'st-won', cancelled:'st-cancelled'};
  return `<div class="card">
    <div class="flex-between mb-10" style="flex-wrap:wrap;gap:8px;"><div class="card-title" style="margin:0;">Materials & purchase orders</div><button class="btn btn-dark btn-sm" onclick="poOpen(null,'${j.id}')">+ New PO</button></div>
    <div class="grid grid-3" style="gap:10px;margin-bottom:12px;">
      <div>${tgStat('Materials budget', fmt(matBudget), 'from cost lines')}</div>
      <div>${tgStat('On order', fmt(ordered-received))}</div>
      <div>${tgStat('Received', fmt(received), matBudget&&received>matBudget?'over budget by '+fmt(received-matBudget):'', matBudget&&received>matBudget?'bad':'')}</div>
    </div>
    <table><thead><tr><th>PO #</th><th>Supplier</th><th>Status</th><th>Items</th><th>Total</th><th></th></tr></thead>
    <tbody>${pos.map(po=>{ const t = poTotals(po); return `<tr class="row-link" onclick="poOpen('${po.id}')"><td><strong>${esc(po.poNumber)}</strong></td><td>${esc(po.supplier||'—')}</td><td><span class="pill ${tone[po.status]||'st-draft'}">${esc((PO_STATUSES.find(s=>s[0]===po.status)||['',po.status])[1])}</span></td><td>${(po.items||[]).length}</td><td>${fmt(t.gross)}</td>
      <td onclick="event.stopPropagation();" style="white-space:nowrap;">${po.status==='ordered'?`<button class="btn btn-success btn-sm" onclick="poReceive('${po.id}')">Received</button>`:''}<button class="icon-btn" title="Print / PDF" onclick="poPrint('${po.id}')">🖨️</button></td></tr>`; }).join('') || emptyRow(6,'No purchase orders for this job. Raise one when you order materials. Once received, it updates the job\'s materials cost and your expenses automatically.')}</tbody></table>
  </div>`;
}
function poOpen(id, jobId){
  const po = id ? (DB.purchaseOrders||[]).find(x=>x.id===id) : null;
  const job = DB.jobs.find(j=>j.id===(po?po.jobId:jobId));
  window._poItems = po ? po.items.map(i=>Object.assign({},i)) : [{desc:'', qty:1, unitCost:0}];
  const suppliers = [...new Set((DB.purchaseOrders||[]).map(p=>p.supplier).filter(Boolean))];
  openModal(`<div class="modal-head"><h2>${po?'Purchase order '+esc(po.poNumber):'New purchase order'}${job?' — '+esc(job.jobNumber):''}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label>Supplier *</label><input id="po-supplier" type="text" list="po-suppliers" value="${po?esc(po.supplier||''):''}" placeholder="e.g. Plumbase, Screwfix, City Plumbing"><datalist id="po-suppliers">${suppliers.map(x=>`<option value="${esc(x)}">`).join('')}</datalist></div>
        <div class="form-group"><label>Status</label><select id="po-status">${PO_STATUSES.map(([k,l])=>`<option value="${k}" ${(po?po.status:'ordered')===k?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Supplier ref / account</label><input id="po-ref" type="text" value="${po?esc(po.ref||''):''}"></div>
        <div class="form-group"><label>VAT rate (%)</label><input id="po-vat" type="number" min="0" value="${po?po.vatRate:DB.settings.vatRate}" oninput="poRenderItems()"></div>
      </div>
      <label>Items</label>
      <table class="line-items-table"><thead><tr><th>Description</th><th style="width:70px;">Qty</th><th style="width:100px;">Unit cost £</th><th style="width:90px;">Total</th><th></th></tr></thead><tbody id="po-items"></tbody></table>
      <button class="btn btn-ghost btn-sm mt-10" onclick="window._poItems.push({desc:'',qty:1,unitCost:0}); poRenderItems();">+ Add item</button>
      <div id="po-totals" style="text-align:right;" class="mt-10"></div>
      <div class="form-group mt-10"><label>Delivery / notes</label><textarea id="po-notes">${po?esc(po.notes||''):(job&&job.address?'Deliver to: '+esc(job.address):'')}</textarea></div>
      <label style="display:flex;align-items:center;gap:8px;font-weight:600;color:var(--text);"><input type="checkbox" id="po-expense" ${!po||po.logExpense!==false?'checked':''} style="width:auto;"> When received, also log it as a Materials expense</label>
    </div>
    <div class="modal-foot">${po&&po.status!=='received'?`<button class="btn btn-danger" onclick="poDelete('${po.id}')">Delete</button>`:''}${po?`<button class="btn btn-ghost" onclick="poPrint('${po.id}')">🖨️ Print / PDF</button>`:''}<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-gold" onclick="poSave('${po?po.id:''}','${job?job.id:''}')">Save</button></div>`, true);
  poRenderItems();
}
function poRenderItems(){
  const body = document.getElementById('po-items');
  if(!body) return;
  body.innerHTML = window._poItems.map((it,i)=>`<tr>
    <td><input type="text" value="${esc(it.desc)}" oninput="window._poItems[${i}].desc=this.value"></td>
    <td><input type="number" min="0" value="${it.qty}" oninput="window._poItems[${i}].qty=Number(this.value)||0; poRenderTotals()"></td>
    <td><input type="number" min="0" step="0.01" value="${it.unitCost}" oninput="window._poItems[${i}].unitCost=Number(this.value)||0; poRenderTotals()"></td>
    <td class="po-line-total" style="font-weight:700;padding-top:14px;">${fmt((Number(it.qty)||0)*(Number(it.unitCost)||0))}</td>
    <td><button class="icon-btn" onclick="window._poItems.splice(${i},1); poRenderItems();">✕</button></td></tr>`).join('');
  poRenderTotals();
}
function poRenderTotals(){
  const t = poTotals({items:window._poItems, vatRate:Number(document.getElementById('po-vat').value)||0});
  document.querySelectorAll('#po-items tr').forEach((tr,i)=>{ const c = tr.querySelector('.po-line-total'); const it = window._poItems[i]; if(c&&it) c.textContent = fmt((Number(it.qty)||0)*(Number(it.unitCost)||0)); });
  document.getElementById('po-totals').innerHTML = `<div class="small">Net ${fmt(t.net)} · VAT ${fmt(t.vat)}</div><div style="font-size:16px;font-weight:800;">Total ${fmt(t.gross)}</div>`;
}
function poSave(id, jobId){
  if(!requireField('po-supplier','Who are you ordering from?')) return;
  const items = window._poItems.filter(i=>i.desc || Number(i.unitCost));
  if(!items.length){ toast('Add at least one item','⚠️'); return; }
  if(items.some(i=>Number(i.qty)<0 || Number(i.unitCost)<0)){ toast('Quantities and costs can\'t be negative','⚠️'); return; }
  DB.purchaseOrders = DB.purchaseOrders||[];
  const data = {supplier:document.getElementById('po-supplier').value.trim(), ref:document.getElementById('po-ref').value.trim(), vatRate:Number(document.getElementById('po-vat').value)||0,
    items, notes:document.getElementById('po-notes').value.trim(), logExpense:document.getElementById('po-expense').checked};
  const newStatus = document.getElementById('po-status').value;
  let po;
  if(id){ po = DB.purchaseOrders.find(x=>x.id===id); Object.assign(po, data); }
  else { po = Object.assign({id:'po-'+uid(), poNumber:nextPoNumber(), jobId:jobId||null, status:'draft', createdAt:localDateStr()}, data); DB.purchaseOrders.push(po); logActivity('Purchase order raised', po.poNumber+' — '+po.supplier); }
  if(newStatus==='ordered' && !po.orderedAt) po.orderedAt = localDateStr();
  if(newStatus==='received' && po.status!=='received'){ po.status='ordered'; poApplyReceived(po); }
  else { po.status = newStatus; if(po.status==='received') poApplyReceived(po); }
  save(); closeModal(); if(po.jobId){ window._jobTab='materials'; navigate('jobs', po.jobId); } else renderPage();
  toast(id?'Purchase order updated':po.poNumber+' saved');
}
function poReceive(id){
  const po = (DB.purchaseOrders||[]).find(x=>x.id===id);
  if(!po) return;
  poApplyReceived(po);
  save(); window._jobTab='materials'; navigate('jobs', po.jobId); toast(po.poNumber+' received — job costs updated');
}
// Received: the job's Materials actual cost and (optionally) an expense are kept in step with the PO.
function poApplyReceived(po){
  po.status = 'received';
  po.receivedAt = po.receivedAt || localDateStr();
  const cost = poJobCost(po);
  const j = DB.jobs.find(x=>x.id===po.jobId);
  if(j){
    j.costLines = j.costLines||[];
    let line = po.costLineId && j.costLines.find(c=>c.id===po.costLineId);
    if(!line){ line = {id:'cl-'+po.id, category:'Materials', desc:po.poNumber+' — '+po.supplier, budget:0, actual:0}; j.costLines.push(line); po.costLineId = line.id; }
    line.actual = cost; line.desc = po.poNumber+' — '+po.supplier;
    j.timeline = j.timeline||[]; if(!j.timeline.some(t=>t.e==='Materials received: '+po.poNumber)) j.timeline.push({e:'Materials received: '+po.poNumber, d:po.receivedAt});
  }
  if(po.logExpense!==false){
    DB.expenses = DB.expenses||[];
    const eid = 'exp-po-'+po.id;
    let e = DB.expenses.find(x=>x.id===eid);
    if(!e){ e = {id:eid, category:'Materials'}; DB.expenses.push(e); }
    Object.assign(e, {amount:cost, desc:po.poNumber+' — '+po.supplier+(j?' ('+j.jobNumber+')':''), date:po.receivedAt});
  }
}
function poDelete(id){
  confirmDelete('Delete this purchase order?', 'Only draft, ordered or cancelled orders can be deleted.', ()=>{
    const po = (DB.purchaseOrders||[]).find(x=>x.id===id);
    DB.purchaseOrders = (DB.purchaseOrders||[]).filter(x=>x.id!==id);
    save(); if(po && po.jobId){ window._jobTab='materials'; navigate('jobs', po.jobId); } else renderPage(); toast('Purchase order deleted','🗑️');
  });
}
function poPrint(id){
  const po = (DB.purchaseOrders||[]).find(x=>x.id===id);
  if(!po) return;
  const j = DB.jobs.find(x=>x.id===po.jobId), t = poTotals(po), s = DB.settings;
  const w = window.open('','_blank');
  if(!w){ toast('Allow pop-ups for this site to print / save as PDF','⚠️'); return; }
  w.document.write(`<html><head><title>${esc(po.poNumber)}</title><style>
    body{font-family:Arial,sans-serif;padding:40px;color:#1A1A1A;} h1{color:#E11D2A;margin:0;font-size:22px;} table{width:100%;border-collapse:collapse;margin-top:20px;}
    th{background:#FDECEC;color:#E11D2A;text-align:left;padding:8px;font-size:11px;text-transform:uppercase;} td{padding:8px;border-bottom:1px solid #eee;font-size:13.5px;}
    .head{display:flex;justify-content:space-between;border-bottom:3px solid #E11D2A;padding-bottom:12px;} .tot{text-align:right;margin-top:14px;}</style></head><body>
    <div class="head"><div><h1>${esc(s.businessName)}</h1><div>${esc(s.address)}</div><div>${esc(s.phone)} · ${esc(s.email)}</div></div>
    <div style="text-align:right;"><h1>PURCHASE ORDER</h1><div><strong>${esc(po.poNumber)}</strong></div><div>${fmtDate(po.orderedAt||po.createdAt)}</div></div></div>
    <p><strong>Supplier:</strong> ${esc(po.supplier)}${po.ref?' · Ref '+esc(po.ref):''}${j?`<br><strong>Job:</strong> ${esc(j.jobNumber)} — ${esc(j.customerName)}`:''}</p>
    <table><thead><tr><th>Description</th><th>Qty</th><th>Unit cost</th><th>Total</th></tr></thead><tbody>${po.items.map(i=>`<tr><td>${esc(i.desc)}</td><td>${i.qty}</td><td>${fmt(i.unitCost)}</td><td>${fmt((Number(i.qty)||0)*(Number(i.unitCost)||0))}</td></tr>`).join('')}</tbody></table>
    <div class="tot">Net ${fmt(t.net)}<br>VAT (${po.vatRate}%) ${fmt(t.vat)}<br><strong style="font-size:18px;">Total ${fmt(t.gross)}</strong></div>
    ${po.notes?`<p style="margin-top:24px;white-space:pre-wrap;">${esc(po.notes)}</p>`:''}</body></html>`);
  w.document.close(); w.print();
}

/* ===================== STEADYWORKS — SITE SHEET (phone-friendly) ===================== */
const SW_SITE_CHECKS = [
  ['arrive','Arrived, introduced and confirmed the work with the customer'],
  ['isolate','Water / gas / power isolated where needed'],
  ['protect','Work area protected (dust sheets, floor covers)'],
  ['tested','Work completed and tested (no leaks, pressure / flue checks)'],
  ['clean','Area cleaned and waste removed'],
  ['walk','Customer shown the finished work and how to use it']
];
function swSiteSheetHtml(j){
  const ss = j.siteSheet || {};
  const ck = ss.checklist || {};
  const before = (j.photos||[]).map((p,i)=>Object.assign({i},p)).filter(p=>p.label==='Before');
  const after = (j.photos||[]).map((p,i)=>Object.assign({i},p)).filter(p=>p.label==='After');
  const done = SW_SITE_CHECKS.filter(([k])=>ck[k]).length;
  const thumbs = list => list.length ? `<div class="sw-thumbs">${list.map(p=>`<img src="${p.data}" alt="" onclick="swViewPhoto('${j.id}',${p.i})">`).join('')}</div>` : '<div class="small muted">None yet</div>';
  return `<div class="card sw-site">
    <div class="flex-between" style="flex-wrap:wrap;gap:8px;">
      <div class="card-title" style="margin:0;">Site sheet — ${esc(j.customerName)}</div>
      <button class="btn btn-ghost btn-sm" onclick="swPrintJobSheet('${j.id}')">🖨️ Job sheet / PDF</button>
    </div>
    <div class="small muted mb-10">${esc(j.address||'No address')} ${j.address?`· <a style="color:var(--teal);" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(j.address)}">Directions ↗</a>`:''}</div>
    <div class="flex gap-8 mb-10" style="flex-wrap:wrap;">
      <button class="btn ${ss.arrivedAt?'btn-ghost':'btn-gold'} sw-big" onclick="swSiteStamp('${j.id}','arrivedAt')">${ss.arrivedAt?'✓ Arrived '+fmtDateTime(ss.arrivedAt):'📍 I\'ve arrived'}</button>
      <button class="btn btn-ghost sw-big" onclick="swSiteStamp('${j.id}','leftAt')" ${ss.arrivedAt?'':'disabled'}>${ss.leftAt?'✓ Left '+fmtDateTime(ss.leftAt):'🚐 Leaving site'}</button>
    </div>
    <div class="card-title mt-10" style="margin-bottom:6px;">Checklist <span class="small muted">${done}/${SW_SITE_CHECKS.length}</span></div>
    ${SW_SITE_CHECKS.map(([k,l])=>`<label class="sw-check ${ck[k]?'done':''}"><input type="checkbox" ${ck[k]?'checked':''} onchange="swSiteCheck('${j.id}','${k}',this.checked)"><span>${l}</span></label>`).join('')}
    <div class="grid grid-2 mt-10" style="gap:12px;">
      <div><div class="flex-between"><strong class="small">Before photos</strong><label class="btn btn-ghost btn-sm" style="cursor:pointer;">📷 Add<input type="file" accept="image/*" capture="environment" multiple style="display:none" onchange="uploadJobPhoto('${j.id}',this.files,'Before')"></label></div>${thumbs(before)}</div>
      <div><div class="flex-between"><strong class="small">After photos</strong><label class="btn btn-ghost btn-sm" style="cursor:pointer;">📷 Add<input type="file" accept="image/*" capture="environment" multiple style="display:none" onchange="uploadJobPhoto('${j.id}',this.files,'After')"></label></div>${thumbs(after)}</div>
    </div>
    <div class="form-group mt-10"><label>Work carried out</label><textarea id="ss-notes" style="min-height:90px;" placeholder="What was done, parts fitted, anything to watch…">${esc(ss.notes||'')}</textarea>
      <button class="btn btn-ghost btn-sm mt-10" onclick="swSiteNotes('${j.id}')">Save notes</button></div>
    <div class="divider"></div>
    <div class="card-title">Customer sign-off</div>
    ${j.signoff ? `<div class="sw-signed"><img src="${j.signoff.signature}" alt="Customer signature"><div><strong>${esc(j.signoff.name)}</strong><div class="small muted">Signed ${fmtDateTime(j.signoff.at)}${j.signoff.satisfied?' · confirmed work completed to their satisfaction':''}</div>
        <button class="btn btn-ghost btn-sm mt-10" onclick="swClearSignoff('${j.id}')">Re-do sign-off</button></div></div>`
    : `<div class="form-group"><label>Customer name</label><input id="ss-name" type="text" value="${esc(j.customerName||'')}"></div>
      <label class="sw-check"><input type="checkbox" id="ss-satisfied" checked><span>I confirm the work has been completed to my satisfaction</span></label>
      <div class="sw-sigpad-wrap"><canvas id="ss-sig" class="sw-sigpad"></canvas><div class="sw-sigpad-hint">Sign here</div></div>
      <div class="flex gap-8 mt-10" style="flex-wrap:wrap;"><button class="btn btn-ghost btn-sm" onclick="swClearPad()">Clear</button><button class="btn btn-gold sw-big" onclick="swSaveSignoff('${j.id}')">✍️ Save sign-off</button></div>`}
  </div>`;
}
function swSiteSheet(j){ j.siteSheet = j.siteSheet || {checklist:{}}; j.siteSheet.checklist = j.siteSheet.checklist||{}; return j.siteSheet; }
function swSiteStamp(id, field){
  const j = DB.jobs.find(x=>x.id===id); if(!j) return;
  const ss = swSiteSheet(j);
  ss[field] = new Date().toISOString();
  j.timeline = j.timeline||[]; j.timeline.push({e: field==='arrivedAt'?'Engineer arrived on site':'Engineer left site', d:localDateStr()});
  if(field==='arrivedAt' && j.status==='scheduled') j.status = 'active';
  save(); window._jobTab='sitesheet'; navigate('jobs', id); toast(field==='arrivedAt'?'Arrival logged — job marked on site':'Departure logged');
}
function swSiteCheck(id, key, val){
  const j = DB.jobs.find(x=>x.id===id); if(!j) return;
  swSiteSheet(j).checklist[key] = val;
  save();
  const lbl = document.querySelector(`#jobtab-sitesheet input[onchange*="'${key}'"]`); if(lbl) lbl.parentElement.classList.toggle('done', val);
}
function swSiteNotes(id){
  const j = DB.jobs.find(x=>x.id===id); if(!j) return;
  swSiteSheet(j).notes = document.getElementById('ss-notes').value;
  save(); toast('Notes saved');
}
// Signature pad: pointer events work for finger, stylus and mouse.
function swInitSignaturePad(){
  const c = document.getElementById('ss-sig');
  if(!c || c._ready) return;
  const ratio = window.devicePixelRatio || 1;
  c.width = c.clientWidth*ratio; c.height = c.clientHeight*ratio;
  const ctx = c.getContext('2d');
  ctx.scale(ratio, ratio); ctx.fillStyle = '#F7F7F5'; ctx.fillRect(0,0,c.width,c.height);
  ctx.strokeStyle = '#111'; ctx.lineWidth = 2.2; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  let drawing = false, last = null;
  const pos = e => { const r = c.getBoundingClientRect(); return {x:e.clientX-r.left, y:e.clientY-r.top}; };
  c.addEventListener('pointerdown', e=>{ drawing = true; last = pos(e); c.setPointerCapture(e.pointerId); c._dirty = true; const h = c.parentElement.querySelector('.sw-sigpad-hint'); if(h) h.style.display='none'; e.preventDefault(); });
  c.addEventListener('pointermove', e=>{ if(!drawing) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(p.x,p.y); ctx.stroke(); last = p; e.preventDefault(); });
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>c.addEventListener(ev, ()=>{ drawing = false; }));
  c._ready = true;
}
function swClearPad(){
  const c = document.getElementById('ss-sig'); if(!c) return;
  c._ready = false; c._dirty = false;
  const fresh = c.cloneNode(false); c.parentNode.replaceChild(fresh, c);
  const h = fresh.parentElement.querySelector('.sw-sigpad-hint'); if(h) h.style.display='';
  swInitSignaturePad();
}
function swSaveSignoff(id){
  const j = DB.jobs.find(x=>x.id===id); if(!j) return;
  const c = document.getElementById('ss-sig');
  if(!requireField('ss-name','Add the customer\'s name')) return;
  if(!c || !c._dirty){ toast('Ask the customer to sign in the box first','⚠️'); return; }
  // shrink to a small JPEG so it stores and syncs easily
  const out = document.createElement('canvas'); out.width = 600; out.height = Math.round(600*c.height/c.width);
  const octx = out.getContext('2d'); octx.fillStyle = '#fff'; octx.fillRect(0,0,out.width,out.height); octx.drawImage(c, 0, 0, out.width, out.height);
  j.signoff = {name:document.getElementById('ss-name').value.trim(), satisfied:document.getElementById('ss-satisfied').checked, at:new Date().toISOString(), signature:out.toDataURL('image/jpeg', 0.8)};
  j.timeline = j.timeline||[]; j.timeline.push({e:'Customer signed off', d:localDateStr()});
  logActivity('Customer sign-off', j.jobNumber+' — '+j.signoff.name);
  save(); window._jobTab='sitesheet'; navigate('jobs', id);
  toast('Signed off — mark the job complete when you\'re ready');
}
function swClearSignoff(id){
  confirmDelete('Re-do the customer sign-off?', 'The current signature will be removed.', ()=>{ const j = DB.jobs.find(x=>x.id===id); if(j){ delete j.signoff; save(); window._jobTab='sitesheet'; navigate('jobs', id); } });
}
function swViewPhoto(jobId, i){
  const j = DB.jobs.find(x=>x.id===jobId); const p = j && (j.photos||[])[i];
  if(!p || !p.data) return;
  openModal(`<div class="modal-head"><h2>${esc(p.label?p.label+' — ':'')}${esc(p.name||'Photo')}</h2><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body" style="text-align:center;"><img src="${p.data}" alt="" style="max-width:100%;max-height:70vh;border-radius:10px;"><div class="small muted mt-10">${p.date?fmtDate(p.date):''}</div></div>`, true);
}
function swRemovePhoto(jobId, i){
  confirmDelete('Remove this file?', 'It will be deleted from the job.', ()=>{ const j = DB.jobs.find(x=>x.id===jobId); if(j){ j.photos.splice(i,1); save(); window._jobTab='photos'; navigate('jobs', jobId); } });
}
function swPrintJobSheet(id){
  const j = DB.jobs.find(x=>x.id===id); if(!j) return;
  const ss = j.siteSheet||{}, ck = ss.checklist||{}, s = DB.settings;
  const photos = (j.photos||[]).filter(p=>p.data && (p.label==='Before'||p.label==='After'));
  const w = window.open('','_blank');
  if(!w){ toast('Allow pop-ups for this site to print / save as PDF','⚠️'); return; }
  w.document.write(`<html><head><title>Job sheet ${esc(j.jobNumber)}</title><style>
    body{font-family:Arial,sans-serif;padding:36px;color:#1A1A1A;font-size:13.5px;} h1{color:#E11D2A;margin:0;font-size:22px;} h2{font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#E11D2A;margin:22px 0 8px;}
    .head{display:flex;justify-content:space-between;border-bottom:3px solid #E11D2A;padding-bottom:12px;} .grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 24px;}
    .ck{margin:4px 0;} .photos{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;} .photos figure{margin:0;} .photos img{width:100%;height:150px;object-fit:cover;border-radius:6px;} figcaption{font-size:11px;color:#666;}
    .sig{border:1px solid #ddd;border-radius:8px;padding:10px;display:inline-block;} .sig img{height:90px;display:block;}</style></head><body>
    <div class="head"><div><h1>${esc(s.businessName)}</h1><div>${esc(s.phone)} · ${esc(s.email)}</div></div><div style="text-align:right;"><h1>JOB SHEET</h1><strong>${esc(j.jobNumber)}</strong><div>${fmtDate(j.endDate||j.startDate)}</div></div></div>
    <h2>Job</h2><div class="grid"><div><strong>Customer:</strong> ${esc(j.customerName)}</div><div><strong>Engineer:</strong> ${esc(j.assignedTo||'—')}</div>
      <div><strong>Address:</strong> ${esc(j.address||'—')}</div><div><strong>On site:</strong> ${ss.arrivedAt?fmtDateTime(ss.arrivedAt):'—'} → ${ss.leftAt?fmtDateTime(ss.leftAt):'—'}</div></div>
    <h2>Work carried out</h2><div style="white-space:pre-wrap;">${esc(ss.notes||'—')}</div>
    <h2>Checklist</h2>${SW_SITE_CHECKS.map(([k,l])=>`<div class="ck">${ck[k]?'☑':'☐'} ${l}</div>`).join('')}
    ${photos.length?`<h2>Photos</h2><div class="photos">${photos.map(p=>`<figure><img src="${p.data}"><figcaption>${esc(p.label)} · ${p.date?fmtDate(p.date):''}</figcaption></figure>`).join('')}</div>`:''}
    <h2>Customer sign-off</h2>${j.signoff?`<div class="sig"><img src="${j.signoff.signature}"><div>${esc(j.signoff.name)} · ${fmtDateTime(j.signoff.at)}</div>${j.signoff.satisfied?'<div style="font-size:11px;color:#666;">Confirmed work completed to their satisfaction</div>':''}</div>`:'<div>Not signed</div>'}
    </body></html>`);
  w.document.close(); setTimeout(()=>w.print(), 300);
}

/* ===================== GETTING PAID — bank details & payment links ===================== */
function payLinkFor(inv){ return (inv && inv.paymentLink) || DB.settings.paymentLink || ''; }
function payDetailsText(inv, short){
  const b = DB.settings.bank||{}, link = payLinkFor(inv), ref = inv ? inv.invoiceNumber : '';
  const parts = [];
  if(b.sortCode && b.accountNumber) parts.push(short ? `Bank: ${b.accountName||DB.settings.businessName}, ${b.sortCode}, ${b.accountNumber}, ref ${ref}.` : `Pay by bank transfer:\n${b.accountName||DB.settings.businessName}${b.bankName?' ('+b.bankName+')':''}\nSort code ${b.sortCode} · Account ${b.accountNumber}\nReference: ${ref}`);
  if(link) parts.push(short ? `Pay by card: ${link}` : `Or pay by card: ${link}`);
  return parts.join(short?' ':'\n\n');
}
function payDetailsPrintHtml(doc, accent, soft){
  const b = DB.settings.bank||{}, link = payLinkFor(doc);
  if(!(b.sortCode && b.accountNumber) && !link) return '';
  return `<div style="margin-top:26px;padding:14px 16px;border-radius:10px;background:${soft};border-left:4px solid ${accent};font-size:13px;">
    <div style="font-weight:800;color:${accent};text-transform:uppercase;letter-spacing:1px;font-size:11.5px;margin-bottom:6px;">How to pay</div>
    ${b.sortCode&&b.accountNumber?`<div><strong>Bank transfer:</strong> ${esc(b.accountName||DB.settings.businessName)}${b.bankName?' · '+esc(b.bankName):''} · Sort code <strong>${esc(b.sortCode)}</strong> · Account <strong>${esc(b.accountNumber)}</strong> · Reference <strong>${esc(doc.invoiceNumber)}</strong></div>`:''}
    ${link?`<div style="margin-top:4px;"><strong>Pay by card:</strong> <a href="${esc(link)}" style="color:${accent};">${esc(link)}</a></div>`:''}
  </div>`;
}
function copyPayDetails(id){
  const inv = DB.invoices.find(x=>x.id===id);
  const text = payDetailsText(inv, false);
  if(!text){ toast('Add your bank details or a payment link in Settings first','⚠️'); return; }
  acqCopy(`${inv.invoiceNumber} — ${fmt(invoiceOutstanding(inv))} due ${fmtDate(inv.dueDate)}\n\n${text}`, 'Payment details');
}
