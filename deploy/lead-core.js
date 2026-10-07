/* ===================== STEADYFLOW LEAD ENGINE — CORE ===================== */
/* Pure functions only: no DOM, no network, no storage. Loaded by the browser
   (steadyworks-ops.html) and by the Supabase Edge Function (a copy lives in
   supabase/functions/_shared/lead-core.js — run scripts/sync-lead-core.sh after
   editing this file). Everything hangs off globalThis.LeadCore.

   Ground rules this file enforces:
   - A score is built only from FACTS. A fact is {value, status, confidence, source, checkedAt}.
   - status: VERIFIED (read directly from a source), LIKELY (strong but indirect),
     INFERRED (a judgement from indirect signals — always labelled), UNKNOWN (no data).
   - UNKNOWN never adds or removes points; it lowers Confidence instead.
   - Lead Score and Confidence are separate numbers. The quality gate needs both.
   See docs/lead-engine/ARCHITECTURE.md for the reasoning behind every weight. */
(function(root){
'use strict';

const VERSION = '1.0.0';
const STATUS = {VERIFIED:'VERIFIED', LIKELY:'LIKELY', INFERRED:'INFERRED', UNKNOWN:'UNKNOWN'};
// The most a fact can contribute to Confidence, whatever confidence it was stored with.
const STATUS_CAP = {VERIFIED:1, LIKELY:0.85, INFERRED:0.6, UNKNOWN:0};

/* ---------- catalogue: services ---------- */
// Prices are PLACEHOLDERS until set in Lead Engine → Settings. They only drive the
// "estimated value" range and are labelled as your price list, never as data.
const SERVICES = [
  {id:'website',     label:'Website design / rebuild',        low:780,  high:1500, monthly:0},
  {id:'optimisation',label:'Website optimisation',             low:350,  high:750,  monthly:0},
  {id:'property-site',label:'Property / listings website',     low:1200, high:2500, monthly:0},
  {id:'360',         label:'360° virtual tours',               low:600,  high:2000, monthly:0},
  {id:'local-seo',   label:'Google visibility & local SEO',    low:300,  high:600,  monthly:300},
  {id:'lead-gen',    label:'Lead capture & conversion',        low:450,  high:900,  monthly:0},
  {id:'crm',         label:'CRM & automated follow-up',        low:690,  high:1395, monthly:0},
  {id:'whatsapp',    label:'WhatsApp enquiry system',          low:250,  high:500,  monthly:0},
  {id:'marketing',   label:'Marketing',                        low:0,    high:0,    monthly:900},
  {id:'management',  label:'Ongoing website management',       low:0,    high:0,    monthly:150}
];
// Named packages used as the "suggested offer" for each primary service.
const OFFERS = {
  '360':'Property 360 Listing Package',
  'property-site':'Property Website + Search Upgrade',
  'website':'Website Rebuild',
  'optimisation':'Mobile Speed & Conversion Fix',
  'local-seo':'Google Visibility Sprint',
  'lead-gen':'Enquiry Conversion Upgrade',
  'crm':'Automated Follow-up System',
  'whatsapp':'WhatsApp Enquiry System',
  'marketing':'Growth Marketing Retainer',
  'management':'Website Care Plan'
};

/* ---------- catalogue: industries ----------
   a360: how much customers benefit from seeing the space before they visit (0–1).
   svc: applicability of each service to the industry (0–1, missing = 0.6).
   sic: Companies House SIC codes used for discovery. osm: OpenStreetMap tags. */
const INDUSTRIES = [
  {id:'estate-agent', label:'Estate agents', listings:true, a360:1.0, priority:1.0, sic:['68310'], osm:['shop=estate_agent','office=estate_agent'],
    svc:{'360':1,'property-site':1,'website':0.9,'optimisation':0.8,'local-seo':0.8,'lead-gen':0.9,'crm':0.8,'whatsapp':0.6,'marketing':0.7,'management':0.6}},
  {id:'letting-agent', label:'Letting agents', listings:true, a360:1.0, priority:1.0, sic:['68310','68320'], osm:['shop=estate_agent','office=estate_agent'],
    svc:{'360':1,'property-site':1,'website':0.9,'optimisation':0.8,'local-seo':0.8,'lead-gen':0.9,'crm':0.8,'whatsapp':0.7,'marketing':0.6,'management':0.6}},
  {id:'developer', label:'Property developers', listings:true, a360:1.0, priority:0.9, sic:['41100','41201','41202'], osm:[],
    svc:{'360':1,'property-site':0.9,'website':0.9,'optimisation':0.6,'local-seo':0.4,'lead-gen':0.8,'crm':0.7,'whatsapp':0.5,'marketing':0.8,'management':0.5}},
  {id:'commercial-agent', label:'Commercial property agents', listings:true, a360:0.9, priority:0.8, sic:['68310','68320'], osm:['office=estate_agent'],
    svc:{'360':0.9,'property-site':0.9,'website':0.8,'optimisation':0.7,'local-seo':0.6,'lead-gen':0.8,'crm':0.7,'whatsapp':0.4,'marketing':0.6,'management':0.5}},
  {id:'serviced-accommodation', label:'Serviced accommodation / Airbnb', listings:true, a360:0.95, priority:0.9, sic:['55209','55900','68209'], osm:['tourism=apartment','tourism=guest_house'],
    svc:{'360':0.95,'property-site':0.6,'website':0.9,'optimisation':0.8,'local-seo':0.8,'lead-gen':0.8,'crm':0.6,'whatsapp':0.8,'marketing':0.7,'management':0.6}},
  {id:'hotel', label:'Hotels', listings:false, a360:0.95, priority:0.85, sic:['55100'], osm:['tourism=hotel'],
    svc:{'360':0.95,'website':0.9,'optimisation':0.8,'local-seo':0.9,'lead-gen':0.7,'crm':0.6,'whatsapp':0.6,'marketing':0.8,'management':0.6}},
  {id:'venue', label:'Wedding & event venues', listings:false, a360:0.95, priority:0.9, sic:['82301','93290','56210'], osm:['amenity=events_venue','amenity=conference_centre'],
    svc:{'360':0.95,'website':0.9,'optimisation':0.8,'local-seo':0.8,'lead-gen':0.9,'crm':0.8,'whatsapp':0.7,'marketing':0.8,'management':0.6}},
  {id:'showroom', label:'Showrooms', listings:false, a360:0.85, priority:0.8, sic:['47591','47530','45111'], osm:['shop=kitchen','shop=bathroom_furnishing','shop=furniture','shop=car'],
    svc:{'360':0.85,'website':0.9,'optimisation':0.8,'local-seo':0.8,'lead-gen':0.9,'crm':0.7,'whatsapp':0.7,'marketing':0.7,'management':0.6}},
  {id:'gym', label:'Gyms', listings:false, a360:0.7, priority:0.6, sic:['93130'], osm:['leisure=fitness_centre'],
    svc:{'360':0.7,'website':0.8,'optimisation':0.8,'local-seo':0.9,'lead-gen':0.9,'crm':0.8,'whatsapp':0.7,'marketing':0.8,'management':0.6}},
  {id:'salon', label:'Salons', listings:false, a360:0.4, priority:0.5, sic:['96020'], osm:['shop=hairdresser','shop=beauty'],
    svc:{'360':0.4,'website':0.8,'optimisation':0.8,'local-seo':0.9,'lead-gen':0.8,'crm':0.7,'whatsapp':0.8,'marketing':0.7,'management':0.6}},
  {id:'restaurant', label:'Restaurants', listings:false, a360:0.5, priority:0.5, sic:['56101','56102'], osm:['amenity=restaurant'],
    svc:{'360':0.5,'website':0.8,'optimisation':0.8,'local-seo':0.9,'lead-gen':0.6,'crm':0.5,'whatsapp':0.6,'marketing':0.7,'management':0.6}},
  {id:'other', label:'Other (360-suitable)', listings:false, a360:0.6, priority:0.4, sic:[], osm:[], svc:{}}
];
// The 360 offer depends on what's being toured: listings (agents, developers, SA) vs a single venue/space.
function offerFor(serviceId, industryId){
  if(serviceId==='360') return industry(industryId).listings ? 'Property 360 Listing Package' : '360 Virtual Tour Package';
  return OFFERS[serviceId] || '';
}
function industry(id){ return INDUSTRIES.find(i=>i.id===id) || INDUSTRIES[INDUSTRIES.length-1]; }
function svcApplicability(ind, svcId){ const v = ind.svc[svcId]; return v==null ? 0.6 : v; }
function service(id, settings){
  const base = SERVICES.find(s=>s.id===id);
  const over = settings && settings.services && settings.services[id];
  return base ? Object.assign({}, base, over||{}) : null;
}

/* ---------- areas (UK postcode areas) ---------- */
const AREA_GROUPS = [
  {id:'east-london', label:'East London', priority:100, prefixes:['E','IG']},
  {id:'essex', label:'Essex', priority:100, prefixes:['RM','CM','SS','CO']},
  {id:'greater-london', label:'Greater London', priority:70, prefixes:['N','NW','SE','SW','W','WC','EC','BR','CR','DA','EN','HA','KT','SM','TW','UB','WD']},
];
function postcodeArea(pc){ const m = String(pc||'').trim().toUpperCase().match(/^([A-Z]{1,2})\d/); return m ? m[1] : ''; }

/* ---------- settings ---------- */
function defaultSettings(){
  return {
    version: 1,
    dailyQuantity: 3,
    thresholds: {leadScore:80, confidence:80, minStrength:55, minNeed:50, maxResearchAgeDays:14, contactCooldownDays:90, minKnownFacts:6},
    weights: {gap:0.60, buying:0.10, contact:0.20, fit:0.10},
    strengthWeights: {reviews:0.25, rating:0.15, listings:0.25, branches:0.10, age:0.15, team:0.10},
    penalties: {inferredOnly:8, contactedNoReply:5, weakActivity:12, noDecisionMaker:4},
    diversity: {maxPerIndustry:2},
    industries: INDUSTRIES.filter(i=>i.id!=='other').map(i=>({id:i.id, enabled:['estate-agent','letting-agent','developer','commercial-agent','serviced-accommodation','hotel','venue','showroom'].includes(i.id), priority:i.priority})),
    areas: AREA_GROUPS.map(a=>({id:a.id, label:a.label, priority:a.priority, prefixes:a.prefixes.slice(), enabled:a.id!=='greater-london'})),
    defaultAreaPriority: 40,
    services: {},              // per-service price overrides {id:{low,high,monthly}}
    pricesConfirmed: false,    // flips true once you've saved your own prices
    budget: {dailyGBP:1.5, monthlyGBP:30, briefModel:'claude-opus-5-5'},
    pipeline: {poolSize:50, enrichTop:20, researchTop:10, rediscoverDays:30, reauditDays:30, autoRun:false},
    followUpDays: [2, 7, 30],
    disqualify: {tooSmall:true, excellentExisting:true, weakPresence:true},
    assumptions: {contactToMeeting:0.15, meetingToWin:0.30, minSampleForObserved:20, workingDays:5},
    learning: {calibrationEnabled:false, minContacted:30, minMeetings:3}
  };
}
function mergeSettings(stored){
  const d = defaultSettings();
  const s = Object.assign({}, d, stored||{});
  ['thresholds','weights','strengthWeights','penalties','diversity','budget','pipeline','disqualify','assumptions','learning'].forEach(k=>{ s[k] = Object.assign({}, d[k], (stored&&stored[k])||{}); });
  // keep new industries/areas that didn't exist when settings were saved
  const byId = (list)=>Object.fromEntries((list||[]).map(x=>[x.id,x]));
  const si = byId(stored && stored.industries), sa = byId(stored && stored.areas);
  s.industries = d.industries.map(i=>Object.assign({}, i, si[i.id]||{}));
  s.areas = d.areas.map(a=>Object.assign({}, a, sa[a.id]||{}));
  s.services = Object.assign({}, (stored&&stored.services)||{});
  if(!Array.isArray(s.followUpDays) || !s.followUpDays.length) s.followUpDays = d.followUpDays;
  return s;
}

/* ---------- small helpers ---------- */
const clamp = (n, lo, hi)=>Math.max(lo, Math.min(hi, n));
const round = n=>Math.round(n);
const log01 = (n, cap)=>clamp(Math.log10(1+Math.max(0,n))/Math.log10(1+cap), 0, 1);
function daysBetween(a, b){ const A = new Date(a), B = new Date(b); if(isNaN(A)||isNaN(B)) return null; return Math.floor((B-A)/86400000); }
function todayStr(now){ const d = now ? new Date(now) : new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function normaliseDomain(url){
  if(!url) return '';
  let s = String(url).trim().toLowerCase();
  s = s.replace(/^[a-z]+:\/\//,'').replace(/^www\./,'');
  return s.split(/[\/?#]/)[0].replace(/:\d+$/,'');
}
function normalisePhone(p){
  let d = String(p||'').replace(/[^\d+]/g,'');
  if(d.startsWith('+44')) d = '0'+d.slice(3);
  else if(d.startsWith('0044')) d = '0'+d.slice(4);
  return d.replace(/\D/g,'');
}
function normaliseName(n){
  return String(n||'').toLowerCase().replace(/&/g,' and ').replace(/\b(ltd|limited|llp|plc|uk|the|estate agents?|lettings?|property|properties|group)\b/g,' ').replace(/[^a-z0-9]+/g,' ').trim();
}
// Keys used to spot the same business arriving from different providers.
function dedupeKeys(lead){
  const keys = [];
  if(lead.companyNumber) keys.push('ch:'+String(lead.companyNumber).toUpperCase());
  if(lead.placeId) keys.push('gp:'+lead.placeId);
  const dom = normaliseDomain(lead.website);
  if(dom) keys.push('dom:'+dom);
  const ph = normalisePhone(lead.phone);
  if(ph.length>=10) keys.push('tel:'+ph);
  const nm = normaliseName(lead.name);
  if(nm && lead.postcode) keys.push('np:'+nm+'|'+String(lead.postcode).replace(/\s+/g,'').toUpperCase().slice(0,-3));
  return keys;
}
// Groups leads that share any dedupe key. Returns {canonicalId: [duplicateIds]} — the oldest record wins.
function findDuplicates(leads){
  const owner = {}, dupes = {};
  const sorted = leads.slice().sort((a,b)=>String(a.discoveredAt||'').localeCompare(String(b.discoveredAt||'')));
  sorted.forEach(l=>{
    const keys = dedupeKeys(l);
    const hit = keys.map(k=>owner[k]).find(Boolean);
    if(hit && hit!==l.id){ (dupes[hit] = dupes[hit]||[]).push(l.id); }
    keys.forEach(k=>{ if(!owner[k]) owner[k] = hit||l.id; });
  });
  return dupes;
}

/* ---------- facts ---------- */
function fact(lead, key){ const f = lead && lead.facts && lead.facts[key]; return f && f.status!==STATUS.UNKNOWN && f.value!==undefined && f.value!==null ? f : null; }
function val(lead, key){ const f = fact(lead, key); return f ? f.value : undefined; }
function known(lead, key){ return !!fact(lead, key); }
function factConf(f){ if(!f) return 0; const c = f.confidence==null ? 0.8 : Number(f.confidence); return clamp(Math.min(c, STATUS_CAP[f.status]==null?0.8:STATUS_CAP[f.status]), 0, 1); }
function makeFact(value, status, confidence, source, checkedAt, note){
  return {value, status: status||STATUS.VERIFIED, confidence: confidence==null?0.9:confidence, source: source||'', checkedAt: checkedAt||new Date().toISOString(), note: note||''};
}
const FACT_LABELS = {
  'website.reachable':'Website reachable', 'website.https':'HTTPS', 'website.mobileViewport':'Mobile viewport', 'website.pagespeedMobile':'Mobile PageSpeed score',
  'website.designAge':'Design age', 'website.copyrightYear':'Footer copyright year', 'website.ctaCount':'Clear calls to action', 'website.hasContactForm':'Contact form',
  'website.hasWhatsapp':'WhatsApp link', 'website.hasBooking':'Online booking', 'website.hasPropertySearch':'Property search', 'website.listingsCount':'Listings on own website',
  'website.listingsSampled':'Listing pages checked', 'website.tourVendor':'360 / virtual tour provider', 'website.tourCoverage':'Listings with a 360 tour', 'website.hasAnalytics':'Analytics tag',
  'website.socialLinks':'Social links', 'website.brokenLinks':'Broken links', 'website.hasMetaDescription':'Meta description', 'website.hasH1':'H1 heading', 'website.hasLocalSchema':'LocalBusiness schema',
  'website.hasFloorplans':'Floorplans', 'website.hasVideo':'Video', 'website.teamSize':'People on team page', 'website.generator':'Site builder', 'website.renderedClientSide':'Page renders client-side',
  'google.reviewCount':'Google reviews', 'google.rating':'Google rating', 'company.status':'Companies House status', 'company.incorporated':'Incorporated', 'company.ageYears':'Company age (years)',
  'company.branches':'Branches', 'signals.hiring':'Hiring', 'signals.newOfficer':'New director (12 months)', 'signals.newCompany':'New company (18 months)', 'signals.newDomain':'New domain (12 months)',
  'signals.listingGrowth':'Listing growth', 'signals.recentRebrand':'Recent rebrand', 'signals.newDevelopment':'New development', 'signals.activeAds':'Active advertising', 'social.instagramActive':'Instagram active',
  'listings.avgPrice':'Average asking price (own site)'
};

/* ---------- 1. business strength ---------- */
function strengthComponents(lead){
  const ind = industry(lead.industry);
  const out = [];
  const add = (key, factKey, points, applicable)=>{ out.push({key, factKey, points: points==null?null:round(points), applicable: applicable!==false, fact: fact(lead, factKey)}); };
  const rc = val(lead,'google.reviewCount');
  add('reviews','google.reviewCount', rc==null?null: 100*log01(rc, 200));
  const rt = val(lead,'google.rating');
  add('rating','google.rating', (rt==null || rc==null || rc<5) ? null : rt>=4.7?100 : rt>=4.5?90 : rt>=4.2?75 : rt>=4.0?60 : rt>=3.5?35 : 15);
  const lc = val(lead,'website.listingsCount');
  add('listings','website.listingsCount', lc==null?null: 20+80*log01(lc, 80), ind.listings);
  const br = val(lead,'company.branches');
  add('branches','company.branches', br==null?null: br>=3?95 : br===2?75 : 50);
  const age = val(lead,'company.ageYears');
  add('age','company.ageYears', age==null?null: age<1?30 : age<3?55 : age<10?80 : 95);
  const tm = val(lead,'website.teamSize');
  add('team','website.teamSize', tm==null?null: tm<=2?40 : tm<=5?65 : tm<=15?85 : 95);
  return out;
}
function computeStrength(lead, settings){
  const w = settings.strengthWeights;
  const comps = strengthComponents(lead).filter(c=>c.applicable);
  let sum = 0, wsum = 0, applicableW = 0;
  comps.forEach(c=>{ const cw = w[c.key]||0; applicableW += cw; if(c.points!=null){ sum += c.points*cw; wsum += cw; } });
  return {score: wsum ? round(sum/wsum) : null, coverage: applicableW ? wsum/applicableW : 0, components: comps};
}

/* ---------- 2. problem detection ----------
   Each rule fires only when the facts it needs are KNOWN. It returns the problem,
   the evidence (built from the facts — nothing else), and the service that solves it. */
const PROBLEM_RULES = [
  {id:'no-mobile', service:'website', title:'Website isn\'t built for mobile', theme:'mobile',
    test:l=>val(l,'website.mobileViewport')===false ? {severity:0.9, facts:['website.mobileViewport'], evidence:'No mobile viewport tag on the homepage, so phones get the desktop layout shrunk down.'} : null},
  {id:'no-https', service:'website', title:'Site isn\'t secure (no HTTPS)', theme:'trust',
    test:l=>val(l,'website.https')===false ? {severity:0.6, facts:['website.https'], evidence:'The site loads over plain HTTP — browsers label it "Not secure".'} : null},
  {id:'slow-mobile', service:'optimisation', title:'Slow on mobile', theme:'mobile',
    test:l=>{ const s = val(l,'website.pagespeedMobile'); return s!=null && s<50 ? {severity: s<30?0.85:0.6, facts:['website.pagespeedMobile'], evidence:'Google PageSpeed mobile performance score: '+s+'/100.'} : null; }},
  {id:'dated-design', service:'website', title:'Design looks dated', theme:'first-impression',
    test:l=>{ const f = fact(l,'website.designAge'); if(!f || f.value!=='dated') return null; const yr = val(l,'website.copyrightYear');
      return {severity:0.5, facts:['website.designAge'].concat(yr?['website.copyrightYear']:[]), evidence:(f.note||'Several older-site signals')+(yr?' (footer copyright '+yr+')':'')+'.'}; }},
  {id:'weak-cta', service:'lead-gen', title:'Few clear calls to action', theme:'conversion',
    test:l=>{ const c = val(l,'website.ctaCount'); return c!=null && c<=1 ? {severity:c===0?0.7:0.5, facts:['website.ctaCount'], evidence:(c===0?'No':'Only one')+' clear call to action (book / call / valuation / enquire) found on the homepage.'} : null; }},
  {id:'no-form', service:'lead-gen', title:'No enquiry form', theme:'conversion',
    test:l=>val(l,'website.hasContactForm')===false ? {severity:0.5, facts:['website.hasContactForm'], evidence:'No enquiry or contact form found on the pages checked.'} : null},
  {id:'no-whatsapp', service:'whatsapp', title:'No WhatsApp enquiry route', theme:'conversion',
    test:l=>val(l,'website.hasWhatsapp')===false ? {severity:0.35, facts:['website.hasWhatsapp'], evidence:'No WhatsApp link or chat button on the pages checked.'} : null},
  {id:'no-booking', service:'crm', title:'No online booking', theme:'booking', industries:['hotel','venue','salon','gym','restaurant','serviced-accommodation','showroom'],
    test:l=>val(l,'website.hasBooking')===false ? {severity:0.6, facts:['website.hasBooking'], evidence:'No online booking or availability widget found — enquiries rely on phone or email.'} : null},
  {id:'no-property-search', service:'property-site', title:'Weak property search', theme:'listings', industries:['estate-agent','letting-agent','commercial-agent','developer'],
    test:l=>{ const lc = val(l,'website.listingsCount'); return val(l,'website.hasPropertySearch')===false && lc!=null && lc>=10 ? {severity:0.6, facts:['website.hasPropertySearch','website.listingsCount'], evidence:'Around '+lc+' listings on the site but no price/bedroom search filters found.'} : null; }},
  {id:'no-360', service:'360', title:'No immersive property viewing', theme:'viewing',
    test:l=>{ const cov = val(l,'website.tourCoverage'), n = val(l,'website.listingsSampled'), lc = val(l,'website.listingsCount');
      if(cov==null || !n) return null;
      if(cov===0) return {severity: 0.75+0.2*log01(lc||n, 60), facts:['website.tourCoverage','website.listingsSampled'].concat(lc!=null?['website.listingsCount']:[]), evidence:n+' listing page'+(n===1?'':'s')+' checked'+(lc!=null?' (of around '+lc+' on the site)':'')+' — no 360 or virtual-tour links detected.'};
      if(cov<0.3) return {severity:0.45, facts:['website.tourCoverage','website.listingsSampled'], evidence:'Only '+Math.round(cov*100)+'% of '+n+' listings checked have a virtual tour.'};
      return null; }},
  {id:'no-tour-venue', service:'360', title:'No virtual tour of the space', theme:'viewing', industries:['hotel','venue','showroom','gym','restaurant','salon','other'],
    test:l=>{ const v = fact(l,'website.tourVendor'); return v && v.value==='none' ? {severity:0.7, facts:['website.tourVendor'], evidence:'No 360 or virtual-tour embed found on the pages checked.'} : null; }},
  {id:'seo-basics', service:'local-seo', title:'SEO basics missing', theme:'visibility',
    test:l=>{ const md = val(l,'website.hasMetaDescription'), h1 = val(l,'website.hasH1'); const miss = [md===false?'meta description':null, h1===false?'H1 heading':null].filter(Boolean);
      return miss.length ? {severity:0.25*miss.length+0.2, facts:['website.hasMetaDescription','website.hasH1'].filter(k=>known(l,k)), evidence:'Homepage is missing: '+miss.join(', ')+'.'} : null; }},
  {id:'no-local-schema', service:'local-seo', title:'No local business markup', theme:'visibility',
    test:l=>val(l,'website.hasLocalSchema')===false ? {severity:0.25, facts:['website.hasLocalSchema'], evidence:'No LocalBusiness / RealEstateAgent structured data, which helps Google show business details.'} : null},
  {id:'few-reviews', service:'local-seo', title:'Thin Google review profile', theme:'visibility',
    test:l=>{ const rc = val(l,'google.reviewCount'); return rc!=null && rc<20 ? {severity:0.4, facts:['google.reviewCount'], evidence:rc+' Google reviews.'} : null; }},
  {id:'no-analytics', service:'crm', title:'No visible analytics', theme:'measurement',
    test:l=>val(l,'website.hasAnalytics')===false ? {severity:0.3, facts:['website.hasAnalytics'], evidence:'No analytics tag (Google Analytics / Tag Manager / similar) detected in the page source.'} : null},
  {id:'broken-links', service:'management', title:'Broken links', theme:'trust',
    test:l=>{ const b = val(l,'website.brokenLinks'); return b!=null && b>=3 ? {severity: b>=8?0.6:0.4, facts:['website.brokenLinks'], evidence:b+' broken links found on the pages checked.'} : null; }},
  {id:'no-social', service:'marketing', title:'No social links on site', theme:'visibility',
    test:l=>{ const s = val(l,'website.socialLinks'); return Array.isArray(s) && s.length===0 ? {severity:0.2, facts:['website.socialLinks'], evidence:'No social media links on the homepage.'} : null; }}
];
function detectFindings(lead){
  const ind = industry(lead.industry);
  const out = [];
  PROBLEM_RULES.forEach(r=>{
    if(r.industries && !r.industries.includes(ind.id)) return;
    let hit = null; try{ hit = r.test(lead); }catch(e){ hit = null; }
    if(!hit) return;
    const fs = hit.facts.map(k=>fact(lead,k)).filter(Boolean);
    const conf = fs.length ? Math.min.apply(null, fs.map(factConf)) : 0;
    const verified = fs.length>0 && fs.every(f=>f.status===STATUS.VERIFIED);
    out.push({id:r.id, service:r.service, title:r.title, theme:r.theme, severity:clamp(hit.severity,0,1), confidence:conf, verified,
      inferred: fs.some(f=>f.status===STATUS.INFERRED), evidence:hit.evidence, factKeys:hit.facts,
      sources: Array.from(new Set(fs.map(f=>f.source).filter(Boolean))), checkedAt: fs.map(f=>f.checkedAt).sort().slice(-1)[0]||null,
      solution: offerFor(r.service, ind.id)});
  });
  return out.sort((a,b)=>b.severity*b.confidence - a.severity*a.confidence);
}

/* ---------- 2b. website score (0–100, null = UNKNOWN until the site is audited) ---------- */
const WEBSITE_DEDUCTIONS = {'no-mobile':35, 'no-https':20, 'slow-mobile':25, 'dated-design':15, 'weak-cta':15, 'no-form':12, 'no-property-search':10, 'no-booking':10,
  'seo-basics':10, 'broken-links':10, 'no-local-schema':5, 'no-analytics':5, 'no-whatsapp':4, 'no-social':3};
function websiteScore(lead, findings){
  if(val(lead,'website.reachable')!==true) return {score:null, deductions:[]};
  const audited = ['website.mobileViewport','website.ctaCount','website.hasContactForm'].filter(k=>known(lead,k)).length;
  if(audited<2) return {score:null, deductions:[]};
  // A page that renders in the browser can't be read reliably by the fetcher — say UNKNOWN rather than guess.
  if(val(lead,'website.renderedClientSide')===true) return {score:null, deductions:[], note:'Site renders in the browser — needs a manual check'};
  const deductions = (findings||detectFindings(lead)).filter(f=>WEBSITE_DEDUCTIONS[f.id]).map(f=>({id:f.id, title:f.title, points: Math.round(WEBSITE_DEDUCTIONS[f.id]*(0.5+0.5*f.severity)*Math.max(f.confidence,0.6))}));
  return {score: clamp(100 - deductions.reduce((s,d)=>s+d.points,0), 0, 100), deductions};
}

/* ---------- 3. the 360 opportunity engine ---------- */
function compute360(lead){
  const ind = industry(lead.industry);
  const reasons = [];
  const app = ind.a360;
  const cov = val(lead,'website.tourCoverage');
  const vendor = val(lead,'website.tourVendor');
  let absence = null;
  const evid = fact(lead,'website.tourCoverage') || fact(lead,'website.tourVendor');
  if(cov!=null) absence = 1-clamp(cov,0,1);
  else if(vendor==='none') absence = 1;
  else if(vendor) absence = 0.2; // a tour provider is embedded somewhere on the site
  // "No tours" read from a thin / client-rendered page isn't trustworthy enough to score fully.
  const weakEvidence = absence!==null && absence>0.5 && evid && factConf(evid) < 0.6;
  const lc = val(lead,'website.listingsCount');
  const scale = ind.listings ? (lc!=null ? log01(lc, 60) : null) : 0.7; // venues: one space, still worth touring
  const invest = (val(lead,'website.hasFloorplans')===true || val(lead,'website.hasVideo')===true) ? 1.1 : 1;
  if(absence===null || weakEvidence){
    return {score: round(Math.min(60, 100*app*0.5)), capped:true, applicability:app, absence: weakEvidence ? absence : null, scale, existing:null, weakEvidence: !!weakEvidence,
      reasons:[weakEvidence ? 'No tours seen, but the page renders in the browser so this isn\'t confirmed — capped until listing pages are checked.' : 'Couldn\'t confirm whether tours are already used — capped until listing pages are checked.'], packages:[]};
  }
  const s = clamp(100*app*absence*(0.45+0.55*(scale==null?0.5:scale))*invest, 0, 100);
  if(lc!=null && ind.listings) reasons.push(lc+' listings on their own site');
  if(cov===0 || vendor==='none') reasons.push('No 360 / virtual tours detected');
  else if(cov!=null) reasons.push(Math.round(cov*100)+'% of checked listings have tours');
  if(invest>1) reasons.push('Already invests in presentation (floorplans / video)');
  const ap = val(lead,'listings.avgPrice'); if(ap) reasons.push('Average asking price on own site ~£'+Math.round(ap/1000)+'k');
  const packages = s>=50 ? (ind.listings ? ['Single-property 360','Multi-property bundle','Monthly agent package','Website + 360 integration'] : ['Full-venue 360 tour','360 + Google Business Profile tour','Website + 360 integration']) : [];
  return {score: round(s), capped: scale==null, applicability:app, absence, scale, existing: vendor && vendor!=='none' ? vendor : null, reasons, packages};
}

/* ---------- 4. need per service ---------- */
function computeNeed(lead, findings){
  const ind = industry(lead.industry);
  const by = {};
  SERVICES.forEach(s=>{ by[s.id] = {score:0, findings:[]}; });
  findings.forEach(f=>{ by[f.service].findings.push(f); });
  Object.keys(by).forEach(id=>{
    const fs = by[id].findings;
    const noisyOr = 1 - fs.reduce((p,f)=>p*(1-f.severity*f.confidence), 1);
    by[id].score = round(100*noisyOr*svcApplicability(ind, id));
  });
  const o360 = compute360(lead);
  by['360'].score = round(o360.score*svcApplicability(ind,'360')/Math.max(ind.a360,0.01));
  by['360'].o360 = o360;
  return {byService: by, o360};
}

/* ---------- 5. buying signals ---------- */
const BUYING_SIGNALS = [
  ['signals.hiring',25,'Hiring'], ['signals.newOfficer',15,'New director appointed'], ['signals.newCompany',20,'Newly incorporated'],
  ['signals.newDomain',20,'New website domain'], ['signals.recentRebrand',25,'Recently rebranded'], ['signals.newDevelopment',30,'New development / launch'],
  ['signals.activeAds',20,'Running ads'], ['social.instagramActive',15,'Active on Instagram']
];
function computeBuying(lead){
  const hits = [];
  BUYING_SIGNALS.forEach(([k,pts,label])=>{ const f = fact(lead,k); if(f && f.value===true) hits.push({key:k, label: label+(f.status===STATUS.INFERRED?' (inferred)':''), points: f.status===STATUS.INFERRED ? Math.round(pts/2) : pts, fact:f}); });
  const g = fact(lead,'signals.listingGrowth');
  if(g && Number(g.value)>=0.15) hits.push({key:'signals.listingGrowth', label:'Listings up '+Math.round(g.value*100)+'%', points:25, fact:g});
  return {score: Math.min(100, hits.reduce((s,h)=>s+h.points,0)), signals: hits};
}

/* ---------- 6. contactability ---------- */
function bestContact(lead){
  const list = (lead.contacts||[]).filter(c=>c && c.name);
  const rank = r=>{ const s = String(r||'').toLowerCase();
    return /founder|owner|managing director|\bmd\b|ceo|principal|proprietor/.test(s)?6 : /director/.test(s)?5 : /marketing (director|manager|lead|head)/.test(s)?4 : /branch manager|general manager|manager/.test(s)?3 : 1; };
  const stat = c=>c.status===STATUS.VERIFIED?2 : c.status===STATUS.LIKELY?1 : 0;
  return list.slice().sort((a,b)=>(rank(b.role)*3+stat(b)) - (rank(a.role)*3+stat(a)))[0] || null;
}
function computeContact(lead){
  const dm = bestContact(lead);
  const parts = [];
  if(dm) parts.push({label:'Named decision maker ('+(dm.status||'UNKNOWN')+')', points: dm.status===STATUS.VERIFIED?40 : dm.status===STATUS.LIKELY?25 : 0});
  const directPhone = (lead.contacts||[]).some(c=>c.phone);
  if(directPhone) parts.push({label:'Direct phone', points:20}); else if(lead.phone) parts.push({label:'Business phone', points:15});
  const personEmail = (lead.contacts||[]).find(c=>c.email && c.emailStatus===STATUS.VERIFIED);
  if(personEmail) parts.push({label:'Published personal email', points:25});
  else if(lead.email) parts.push({label: emailIsGeneric(lead.email)?'Generic inbox':'Published email', points:15});
  if((lead.contacts||[]).some(c=>c.linkedin)) parts.push({label:'LinkedIn profile (manual)', points:10});
  const soc = val(lead,'website.socialLinks');
  if(Array.isArray(soc) && soc.length) parts.push({label:'Social profiles', points:5});
  return {score: Math.min(100, parts.reduce((s,p)=>s+p.points,0)), parts, decisionMaker: dm};
}
function emailIsGeneric(e){ return /^(info|hello|enquiries|enquiry|contact|office|admin|sales|lettings|mail|bookings|reception|team)@/i.test(String(e||'')); }

/* ---------- 7. strategic fit ---------- */
// Postcode areas cross county lines (CO10 = Sudbury, Suffolk; CM23 = Bishop's Stortford, Herts).
// When the postcode lookup gave us the real county/region, a mismatch overrides the prefix match.
function outsideTargetCounty(lead){
  const c = val(lead,'geo.county'), reg = val(lead,'geo.region');
  if(!c && !reg) return false;
  if(reg==='London') return false;
  return !!c && !/essex/i.test(c);
}
function computeFit(lead, settings){
  const area = postcodeArea(lead.postcode);
  const outside = outsideTargetCounty(lead);
  const grp = outside ? null : (settings.areas.find(a=>a.enabled!==false && a.prefixes.includes(area)) || settings.areas.find(a=>a.prefixes.includes(area)));
  const areaPts = grp ? grp.priority : settings.defaultAreaPriority;
  const indSet = settings.industries.find(i=>i.id===lead.industry);
  const indP = indSet ? Number(indSet.priority) : industry(lead.industry).priority;
  return {score: round(areaPts*clamp(indP,0,1)), area: grp ? grp.label : outside ? val(lead,'geo.county')+' (outside target area)' : (area||'Unknown area'), known: !!area};
}

/* ---------- 8. hard disqualification ---------- */
function disqualify(lead, settings, ctx){
  ctx = ctx||{};
  const out = [];
  const add = (code, reason)=>out.push({code, reason});
  const st = String(val(lead,'company.status')||'').toLowerCase();
  if(/dissolved|liquidation|closed|administration|struck/.test(st) || val(lead,'business.closed')===true) add('closed', 'Business appears closed (Companies House status: '+(st||'closed')+').');
  if(ctx.duplicateOf) add('duplicate', 'Duplicate of an existing record ('+ctx.duplicateOf+').');
  if(lead.isClient || (ctx.clientDomains && ctx.clientDomains.has(normaliseDomain(lead.website)))) add('existing-client', 'Already a SteadyFlow client.');
  if(lead.suppressed || (ctx.suppressed && dedupeKeys(lead).some(k=>ctx.suppressed.has(k)))) add('do-not-contact', 'On the do-not-contact list.');
  const indSet = settings.industries.find(i=>i.id===lead.industry);
  if(indSet && indSet.enabled===false) add('industry-off', 'Industry switched off in settings.');
  if(lead.lastContactedAt){
    const d = daysBetween(lead.lastContactedAt, ctx.now||new Date());
    if(d!=null && d < settings.thresholds.contactCooldownDays) add('recent-contact', 'Contacted '+d+' day'+(d===1?'':'s')+' ago (cooldown '+settings.thresholds.contactCooldownDays+' days).');
  }
  if(!lead.phone && !lead.email && !(lead.contacts||[]).some(c=>c.phone||c.email) && val(lead,'website.hasContactForm')!==true) add('no-contact-route', 'No phone, email or contact form found.');
  const reachable = val(lead,'website.reachable'), rc = val(lead,'google.reviewCount');
  if(settings.disqualify.weakPresence && reachable===false && (rc==null || rc<5)) add('weak-presence', 'No working website and fewer than 5 Google reviews.');
  const knownCount = Object.keys(lead.facts||{}).filter(k=>known(lead,k)).length;
  if(knownCount < settings.thresholds.minKnownFacts) add('insufficient-evidence', 'Only '+knownCount+' verified facts — not enough to judge.');
  if(settings.disqualify.tooSmall){
    const tm = val(lead,'website.teamSize'), lc = val(lead,'website.listingsCount');
    if(tm!=null && tm<=1 && rc!=null && rc<5 && (lc==null || lc<3)) add('too-small', 'Looks too small to fund the service (1-person team, <5 reviews, <3 listings).');
  }
  return out;
}

/* ---------- 9. confidence ---------- */
function computeConfidence(lead, parts){
  const used = [];
  parts.strength.components.forEach(c=>{ if(c.fact) used.push(c.fact); });
  if(parts.primaryFinding) parts.primaryFinding.factKeys.forEach(k=>{ const f = fact(lead,k); if(f) used.push(f); });
  if(parts.primaryService==='360') ['website.tourCoverage','website.tourVendor','website.listingsCount'].forEach(k=>{ const f = fact(lead,k); if(f && used.indexOf(f)<0) used.push(f); });
  const critical = [
    known(lead,'website.reachable'),
    known(lead,'company.status') || known(lead,'google.reviewCount'),
    !!(parts.primaryFinding && parts.primaryFinding.verified) || (parts.primaryService==='360' && parts.o360 && !parts.o360.capped && parts.o360.absence!=null),
    !!(lead.phone || lead.email || (lead.contacts||[]).some(c=>c.phone||c.email)),
    !!postcodeArea(lead.postcode)
  ];
  const coverage = critical.filter(Boolean).length/critical.length;
  const mean = used.length ? used.reduce((s,f)=>s+factConf(f),0)/used.length : 0;
  // Depth: a handful of facts can't support a confident call, however reliable each one is.
  const knownCount = Object.keys(lead.facts||{}).filter(k=>known(lead,k)).length;
  const depth = Math.min(1, knownCount/12);
  return {score: round(100*mean*Math.sqrt(coverage)*(0.7+0.3*depth)), coverage, depth, knownFacts: knownCount, criticalMissing: ['Website check','Business activity','Verified problem evidence','Contact route','Location'].filter((_,i)=>!critical[i])};
}

/* ---------- 10. deal value (from YOUR price list) ---------- */
function dealValue(primaryId, secondaryId, settings){
  const p = service(primaryId, settings), s = secondaryId ? service(secondaryId, settings) : null;
  if(!p) return {low:0, high:0, monthly:0, label:'—', assumption:true};
  const low = p.low, high = p.high + (s ? s.high : 0);
  const monthly = (p.monthly||0) + (s && s.monthly ? s.monthly : 0);
  const fmtK = n=>'£'+Number(n).toLocaleString('en-GB');
  const parts = [];
  if(low||high) parts.push(low===high ? fmtK(low) : fmtK(low)+' – '+fmtK(high)+(s?'+':''));
  if(monthly) parts.push(fmtK(monthly)+'/mo');
  return {low, high, monthly, mid: round((low+high)/2), label: parts.join(' + ')||'—', assumption: !settings.pricesConfirmed};
}

/* ---------- 11. PECR channel rules ---------- */
function allowedChannels(lead){
  const corp = lead.subscriberType==='corporate';
  const publishedWa = val(lead,'website.hasWhatsapp')===true;
  return {
    phone: true, // subject to TPS/CTPS screening — flagged in the UI until checked
    email: corp,
    whatsapp: corp && publishedWa,
    dm: true,    // replying to a business's own public profile; keep it non-promotional
    tpsChecked: !!lead.tpsChecked,
    note: corp ? 'Corporate subscriber — B2B email allowed with clear ID and opt-out.' :
      lead.subscriberType==='individual' ? 'Sole trader / partnership — electronic marketing needs consent. Phone (TPS-screened) or post only.' :
      'Subscriber type unknown — treat as individual until a Companies House match confirms a company.'
  };
}

/* ---------- 12. the full score ---------- */
function scoreLead(lead, settings, ctx){
  settings = settings || defaultSettings();
  ctx = ctx || {};
  const now = ctx.now || new Date();
  const findings = detectFindings(lead);
  const need = computeNeed(lead, findings);
  const ind = industry(lead.industry);
  const ranked = Object.keys(need.byService).map(id=>({id, score:need.byService[id].score, value: (service(id, settings)||{}).high||0}))
    .filter(x=>x.score>0).sort((a,b)=>b.score-a.score || b.value-a.value);
  const primaryService = ranked[0] ? ranked[0].id : null;
  const secondaryService = ranked[1] ? ranked[1].id : null;
  const nPrimary = ranked[0] ? ranked[0].score : 0;
  const primaryFinding = primaryService ? (need.byService[primaryService].findings[0] || null) : null;
  const strength = computeStrength(lead, settings);
  const buying = computeBuying(lead);
  const contact = computeContact(lead);
  const fit = computeFit(lead, settings);
  const S = strength.score==null ? 0 : strength.score;
  const gap = round(Math.sqrt(S*nPrimary));
  const w = settings.weights;
  let raw = w.gap*gap + w.buying*buying.score + w.contact*contact.score + w.fit*fit.score;
  const pens = [];
  const P = settings.penalties;
  const pf = need.byService[primaryService] ? need.byService[primaryService].findings : [];
  if(pf.length && pf.every(f=>f.inferred)) pens.push({code:'inferred-only', points:P.inferredOnly, reason:'Primary problem is only inferred, not verified.'});
  if(lead.lastContactedAt && !lead.replied) pens.push({code:'contacted-no-reply', points:P.contactedNoReply, reason:'Contacted before without a reply.'});
  const rc = val(lead,'google.reviewCount'), lc = val(lead,'website.listingsCount');
  if((rc!=null && rc<5) && (lc==null || lc===0)) pens.push({code:'weak-activity', points:P.weakActivity, reason:'Little visible business activity (<5 reviews, no listings).'});
  if(!contact.decisionMaker || contact.decisionMaker.status===STATUS.UNKNOWN) pens.push({code:'no-decision-maker', points:P.noDecisionMaker, reason:'No verified decision maker yet.'});
  raw -= pens.reduce((s,p)=>s+p.points,0);
  const leadScore = clamp(round(raw), 0, 100);
  const confidence = computeConfidence(lead, {strength, primaryFinding, primaryService, o360:need.o360});
  const dq = disqualify(lead, settings, ctx);
  const deal = dealValue(primaryService, secondaryService, settings);
  const res = {
    leadId: lead.id, leadScore, band: band(leadScore), confidence: confidence.score, confidenceDetail: confidence,
    gap, strength, need, o360: need.o360, buying, contact, fit, penalties: pens, findings,
    primaryService, secondaryService, primaryFinding, offer: primaryService ? offerFor(primaryService, ind.id) : null, secondaryOffer: secondaryService ? offerFor(secondaryService, ind.id) : null,
    deal, disqualifications: dq, industry: ind.id, website: websiteScore(lead, findings),
    breakdown: {gap: round(w.gap*gap), buying: round(w.buying*buying.score), contact: round(w.contact*contact.score), fit: round(w.fit*fit.score), penalties: -pens.reduce((s,p)=>s+p.points,0)},
    channels: allowedChannels(lead)
  };
  res.gate = qualityGate(lead, res, settings, now);
  res.whyNow = whyNow(lead, res);
  return res;
}
function band(score){ return score>=80?'HOT' : score>=65?'STRONG' : score>=50?'WARM' : 'LOW'; }

/* ---------- 13. the final quality gate ---------- */
function qualityGate(lead, r, settings, now){
  const T = settings.thresholds;
  const fails = [];
  if(r.disqualifications.length) r.disqualifications.forEach(d=>fails.push({code:d.code, reason:d.reason, hard:true}));
  if(r.leadScore < T.leadScore) fails.push({code:'lead-score', reason:'Lead score '+r.leadScore+' < '+T.leadScore, threshold:true});
  if(r.confidence < T.confidence) fails.push({code:'confidence', reason:'Confidence '+r.confidence+'% < '+T.confidence+'%', threshold:true});
  if(!r.findings.some(f=>f.verified) && !(r.primaryService==='360' && r.o360.absence!=null && !r.o360.capped)) fails.push({code:'no-verified-problem', reason:'No problem backed by verified evidence.'});
  if(r.strength.score==null || r.strength.score < T.minStrength) fails.push({code:'weak-business', reason:'Business strength '+(r.strength.score==null?'unknown':r.strength.score)+' < '+T.minStrength+' (no strong commercial signal).', threshold:r.strength.score!=null});
  const nP = r.primaryService ? r.need.byService[r.primaryService].score : 0;
  if(nP < T.minNeed) fails.push({code:'no-service-fit', reason:'Best service fit '+nP+' < '+T.minNeed+'.', threshold:true});
  const ch = r.channels;
  if(!(lead.phone || (ch.email && (lead.email || (lead.contacts||[]).some(c=>c.email))))) fails.push({code:'no-legal-channel', reason:'No contact channel that is allowed for this subscriber type.'});
  if(!lead.researchedAt) fails.push({code:'not-researched', reason:'Deep research hasn\'t run yet.'});
  else { const age = daysBetween(lead.researchedAt, now); if(age!=null && age > T.maxResearchAgeDays) fails.push({code:'stale', reason:'Research is '+age+' days old (max '+T.maxResearchAgeDays+').'}); }
  return {pass: fails.length===0, failures: fails, nearMiss: fails.length>0 && fails.every(f=>f.threshold)};
}

/* ---------- 14. why this lead (plain-English bullets, facts only) ---------- */
function whyNow(lead, r){
  const out = [];
  const lc = val(lead,'website.listingsCount'); if(lc!=null) out.push(lc+' active listings on their site');
  if(r.o360.absence===1) out.push('No 360 tours detected');
  const rc = val(lead,'google.reviewCount'), rt = val(lead,'google.rating');
  if(rc!=null && rc>=40) out.push(rc+' Google reviews'+(rt?' ('+rt+'★)':''));
  r.buying.signals.forEach(s=>out.push(s.label));
  if(r.primaryFinding && r.primaryFinding.service!=='360') out.push(r.primaryFinding.title);
  const age = val(lead,'company.ageYears'); if(age!=null && age>=5) out.push('Established '+Math.floor(age)+'+ years');
  const br = val(lead,'company.branches'); if(br>=2) out.push(br+' branches');
  if(r.contact.decisionMaker && r.contact.decisionMaker.status===STATUS.VERIFIED) out.push('Decision maker identified');
  if(lead.independent===true) out.push('Independent agency');
  return out.slice(0,7);
}

/* ---------- 15. daily selection ---------- */
function selectDaily(leads, settings, ctx){
  settings = settings || defaultSettings();
  ctx = ctx || {};
  const scored = leads.map(l=>({lead:l, r: scoreLead(l, settings, ctx)}));
  const passers = scored.filter(x=>x.r.gate.pass).sort((a,b)=>b.r.leadScore-a.r.leadScore || b.r.confidence-a.r.confidence);
  const selected = [], perInd = {};
  const recent = ctx.recentlySurfaced || new Set(); // shown in the last few days but not actioned
  passers.filter(x=>!recent.has(x.lead.id)).concat(passers.filter(x=>recent.has(x.lead.id))).forEach(x=>{
    if(selected.length >= settings.dailyQuantity) return;
    const k = x.r.industry;
    if((perInd[k]||0) >= settings.diversity.maxPerIndustry) return;
    perInd[k] = (perInd[k]||0)+1;
    selected.push(x);
  });
  selected.forEach((x,i)=>{ x.rank = i+1; x.reason = selectionReason(x); });
  const nearMisses = scored.filter(x=>x.r.gate.nearMiss).sort((a,b)=>b.r.leadScore-a.r.leadScore).slice(0,5);
  const rejected = scored.filter(x=>x.r.disqualifications.length);
  return {selected, nearMisses, rejected, passed: passers.length, considered: scored.length,
    pipelineValue: selected.reduce((s,x)=>s+x.r.deal.high,0), pipelineLow: selected.reduce((s,x)=>s+x.r.deal.low,0)};
}
function selectionReason(x){
  const r = x.r;
  const bits = [];
  bits.push('Gap '+r.gap+' (strength '+(r.strength.score==null?'?':r.strength.score)+' × need '+(r.need.byService[r.primaryService]||{score:0}).score+')');
  if(r.buying.signals.length) bits.push(r.buying.signals.map(s=>s.label.toLowerCase()).join(', '));
  if(r.contact.decisionMaker) bits.push('reachable via '+(r.contact.decisionMaker.role||'named contact'));
  return bits.join(' · ');
}

/* ---------- 16. funnel summary (for the Funnel tab) ---------- */
function funnel(leads, settings, ctx){
  const scored = leads.map(l=>({lead:l, r: scoreLead(l, settings, ctx)}));
  const ok = x=>!activeDisqualifications(x.lead, x.r).length;
  const stages = [
    {id:'discovered', label:'Discovered', n: scored.length},
    {id:'filtered', label:'Passed hard filter', n: scored.filter(ok).length},
    {id:'audited', label:'Website audited', n: scored.filter(x=>ok(x) && (x.lead.auditedAt || known(x.lead,'website.reachable'))).length},
    {id:'strong', label:'Strong candidates (score ≥ 65)', n: scored.filter(x=>ok(x) && x.r.leadScore>=65).length},
    {id:'researched', label:'Deep researched', n: scored.filter(x=>ok(x) && x.lead.researchedAt).length},
    {id:'passed', label:'Passed quality gate', n: scored.filter(x=>x.r.gate.pass).length}
  ];
  const reasons = {};
  scored.forEach(x=>activeDisqualifications(x.lead, x.r).forEach(d=>{ reasons[d.code] = (reasons[d.code]||0)+1; }));
  return {stages, rejectionReasons: reasons, scored};
}

/* ---------- 17. outreach (template-based, evidence only) ---------- */
const OBSERVATIONS = {
  'no-360': (l,f)=>{ const lc = val(l,'website.listingsCount'); return (lc!=null ? 'you\'re marketing around '+lc+' properties' : 'you\'ve got a good number of properties on the site')+(val(l,'website.hasFloorplans')===true?' and already put real effort into presentation':'')+', but I couldn\'t see 360 walkthroughs on the listings I looked at'; },
  'no-tour-venue': ()=>'I couldn\'t find a virtual tour of the space on your site — and it\'s the kind of place people want to see before they book a visit',
  'no-property-search': l=>'with around '+val(l,'website.listingsCount')+' listings, there isn\'t a quick way to filter by price or bedrooms on the site',
  'no-mobile': ()=>'the site doesn\'t adapt to phones — it loads the desktop layout shrunk down',
  'slow-mobile': l=>'the site is slow on mobile (Google\'s PageSpeed test gives it '+val(l,'website.pagespeedMobile')+'/100)',
  'no-https': ()=>'the site still loads without HTTPS, so browsers flag it as "Not secure"',
  'dated-design': ()=>'the site looks like it hasn\'t had a refresh in a while',
  'weak-cta': ()=>'there isn\'t an obvious "book / call / get a valuation" button when you land on the homepage',
  'no-form': ()=>'there\'s no enquiry form, so every lead has to pick up the phone or open their email',
  'no-booking': ()=>'there\'s no way to check availability or book online — it all goes through phone or email',
  'no-whatsapp': ()=>'there\'s no WhatsApp option for quick enquiries',
  'seo-basics': ()=>'a couple of the basic Google signals are missing from the homepage',
  'few-reviews': l=>'you\'ve only got '+val(l,'google.reviewCount')+' Google reviews, which undersells the business',
  'no-local-schema': ()=>'Google isn\'t being given your business details in the structured way it looks for',
  'no-analytics': ()=>'I couldn\'t see any analytics on the site, so it\'s hard to know which pages bring in enquiries',
  'broken-links': l=>'there are '+val(l,'website.brokenLinks')+' broken links across the pages I checked',
  'no-social': ()=>'the site doesn\'t link out to your social profiles'
};
const SERVICE_PITCH = {
  '360':'I put together 360 walkthroughs for agents — happy to do one of your current listings free so you can see how it sits on your site',
  'property-site':'I build property sites with proper search and enquiry tracking — happy to sketch what yours could look like',
  'website':'I rebuild sites for local businesses around getting more enquiries — happy to show you a quick mock-up of your homepage',
  'optimisation':'I fix speed and mobile issues on existing sites without a full rebuild — happy to send over the three changes I\'d make first',
  'local-seo':'I help local businesses show up better on Google — happy to send a short list of quick wins',
  'lead-gen':'I set up enquiry capture so fewer visitors leave without getting in touch — happy to show you what I\'d change',
  'crm':'I set up simple booking and follow-up systems so enquiries don\'t slip through — happy to walk you through how it would work for you',
  'whatsapp':'I set up WhatsApp enquiry routes that feed straight into your follow-up — happy to show you an example',
  'marketing':'I run marketing for local businesses — happy to share a couple of ideas specific to you',
  'management':'I look after websites on a care plan so issues like this get caught early — happy to send a quick list'
};
const OBJECTIONS = {
  '360':['We already have good photos — buyers don\'t need tours.','Totally fair — photos do the heavy lifting. Tours tend to help with the serious buyers who want to rule a property in or out before a viewing, which can mean fewer wasted viewings. Worth trying on one listing to see if your vendors notice the difference?'],
  'property-site':['Our listings come from the portal feed — we don\'t need more on our own site.','The portals are great for reach, but your own site is where vendors judge you. A cleaner search and enquiry flow there is about winning instructions, not replacing the portals.'],
  'website':['We just had our site done / our provider handles it.','Makes sense — I\'m not suggesting starting over. I\'d just share the two or three things I noticed on mobile so you can raise them with your provider.'],
  'optimisation':['The site works fine for us.','It probably does on desktop — the gap is usually on phones. I can send the specific fixes so you can judge whether they\'re worth doing.'],
  'local-seo':['Most of our work comes from referrals.','Referrals are the best kind — and most referred customers still look you up on Google before they call. The point is making that check land well.'],
  'lead-gen':['We get enough enquiries.','Good position to be in. This is more about converting a few more of the visitors you\'re already paying to attract.'],
  'crm':['We manage bookings fine by phone.','It works until it\'s busy. The aim is just catching the after-hours enquiries that currently wait until morning.'],
  'whatsapp':['Customers can just call us.','Many will — but some only message. It\'s a low-effort extra route rather than a replacement.'],
  'marketing':['We\'ve tried marketing before and it didn\'t work.','That\'s common — usually because it wasn\'t tied to a measurable goal. I\'d start with one channel and clear numbers.'],
  'management':['Nobody really looks at the website.','That\'s often why small issues build up. A light care plan keeps it working without you thinking about it.']
};
function firstName(n){ const p = String(n||'').trim().split(/\s+/); return p[0] && !/^(mr|mrs|ms|dr|miss)\.?$/i.test(p[0]) ? p[0].replace(/,$/,'') : (p[1]||''); }
function bestTime(ind){
  return ({'estate-agent':'Tue–Thu, 9:30–11:00 (before viewings) — rule of thumb', 'letting-agent':'Tue–Thu, 9:30–11:00 — rule of thumb', 'hotel':'Mid-morning, 10:00–11:30 — rule of thumb',
    'venue':'Weekdays 10:00–12:00, avoid Mon after event weekends — rule of thumb', 'restaurant':'14:30–16:30 between services — rule of thumb', 'salon':'Tue–Wed mornings — rule of thumb',
    'gym':'Mid-morning weekdays — rule of thumb', 'developer':'Weekday mornings — rule of thumb'})[ind] || 'Weekday mornings — rule of thumb (no data yet)';
}
function bestApproach(lead, r){
  const ch = r.channels, dm = r.contact.decisionMaker;
  const steps = [];
  if(lead.phone || (dm && dm.phone)) steps.push('Phone');
  if(ch.email && (lead.email || (dm && dm.email))) steps.push('personalised email');
  if(ch.whatsapp) steps.push('WhatsApp');
  if(!steps.length) steps.push('Instagram / Facebook DM to the business page');
  return steps.join(' → ');
}
function outreach(lead, r, settings, sender){
  sender = sender || {name:'Lewis', company:'SteadyFlow'};
  const dm = r.contact.decisionMaker;
  const fn = dm && dm.status!==STATUS.UNKNOWN ? firstName(dm.name) : '';
  const hi = fn ? 'Hi '+fn : 'Hi there';
  const area = lead.area || r.fit.area || 'your area';
  const ind = industry(lead.industry);
  const verified = r.findings.filter(f=>f.verified && OBSERVATIONS[f.id]);
  const prim = (r.primaryFinding && OBSERVATIONS[r.primaryFinding.id] && r.primaryFinding.verified) ? r.primaryFinding : verified[0];
  const second = verified.find(f=>f!==prim && f.service!==(prim&&prim.service));
  const obs1 = prim ? OBSERVATIONS[prim.id](lead, prim) : null;
  const obs2 = second ? OBSERVATIONS[second.id](lead, second) : null;
  const pitch = SERVICE_PITCH[r.primaryService] || SERVICE_PITCH.website;
  const looking = 'while looking at '+ind.label.toLowerCase()+' around '+area;
  if(!obs1){
    return {ok:false, reason:'No verified observation to anchor a personal message — research more before contacting.', opener:'', email:null, call:'', whatsapp:'', dm:''};
  }
  const opener = hi+', I came across '+lead.name+' '+looking+'. I noticed '+obs1+'.';
  const subject = r.primaryService==='360' ? 'Your '+area+' listings — quick idea' : lead.name+' — quick thought on the website';
  const body = [
    hi+',', '',
    'I came across '+lead.name+' '+looking+'. I noticed '+obs1+(obs2?', and '+obs2:'')+'.', '',
    pitch+'.', '',
    'Would it be worth a 10-minute chat this week?', '',
    sender.name, sender.company,
    '',
    'P.S. If this isn\'t relevant, just reply "no thanks" and I won\'t follow up.'
  ].join('\n');
  const call = (fn?'Hi, is that '+fn+'? ':'Hi, could I speak to whoever looks after marketing? ')+'It\'s '+sender.name+' from '+sender.company+' — I\'ll be quick. I was looking at '+lead.name+' online and noticed '+obs1+'. '+pitch.replace(/^I /,'I ')+'. Is that something you\'d be open to looking at?';
  const wa = hi+' — '+sender.name+' from '+sender.company+' here. I noticed '+obs1+'. '+pitch+'. Would that be useful? (No worries if not — just say and I won\'t message again.)';
  const dmMsg = hi+'! Came across '+lead.name+' '+looking+'. Noticed '+obs1+' — '+pitch.split(' — ')[0].toLowerCase()+'. Happy to show you an example if useful.';
  const obj = OBJECTIONS[r.primaryService] || OBJECTIONS.website;
  return {ok:true, opener, email:{subject, body}, call, whatsapp: r.channels.whatsapp ? wa : null, dm: dmMsg,
    objection: obj[0], objectionResponse: obj[1], bestApproach: bestApproach(lead, r), bestTime: bestTime(ind.id),
    usedFindings: [prim, second].filter(Boolean).map(f=>f.id)};
}

/* ---------- 18. micro audit (prospect-facing, facts only) ---------- */
const THEME_TITLES = {viewing:'Property viewing experience', mobile:'Mobile experience', conversion:'Enquiry conversion', booking:'Booking & follow-up', listings:'Listing search & presentation',
  visibility:'Google & local visibility', trust:'Trust & site health', 'first-impression':'First impression', measurement:'Measuring what works'};
const THEME_WHY = {viewing:'Buyers and tenants shortlist online first. Letting them walk through a space before booking a viewing helps the serious ones commit.',
  mobile:'Most people first see your business on a phone, so this is where first impressions are made.',
  conversion:'Visitors who can\'t see an easy next step usually leave rather than call.',
  booking:'Enquiries that arrive out of hours wait until someone is free — some go elsewhere in the meantime.',
  listings:'Easy search keeps buyers on your own site instead of bouncing back to the portals.',
  visibility:'Google is usually the first check people make, even when they were referred.',
  trust:'Small technical issues quietly undermine trust in an otherwise strong brand.',
  'first-impression':'A site is often judged in seconds; an older look can undersell a strong business.',
  measurement:'Without measurement it\'s hard to know which marketing is paying for itself.'};
function microAudit(lead, r){
  const seen = new Set(), items = [];
  r.findings.filter(f=>f.verified).forEach(f=>{
    if(seen.has(f.theme) || items.length>=3) return;
    seen.add(f.theme);
    items.push({n: String(items.length+1).padStart(2,'0'), title: THEME_TITLES[f.theme]||f.title, observed: f.evidence, why: THEME_WHY[f.theme]||'', recommendation: offerFor(f.service, lead.industry), checkedAt: f.checkedAt, sources: f.sources});
  });
  return {business: lead.name, website: lead.website, items, note:'Based on public pages checked'+(lead.researchedAt?' on '+String(lead.researchedAt).slice(0,10):'')+'. No figures are estimated — everything listed was observed directly.'};
}

/* ---------- 19. targets feasibility ---------- */
function targetFeasibility(o){
  const target = Number(o.weeklyTarget)||0, avg = Math.max(1, Number(o.avgValue)||1);
  const c2m = clamp(Number(o.contactToMeeting)||0.0001, 0.0001, 1), m2w = clamp(Number(o.meetingToWin)||0.0001, 0.0001, 1);
  const days = Number(o.workingDays)||5, daily = Number(o.dailyNew)||0;
  const winsNeeded = Math.ceil(target/avg);
  const meetingsNeeded = Math.ceil(winsNeeded/m2w);
  const contactsNeeded = Math.ceil(meetingsNeeded/c2m);
  const weeklyContacts = daily*days;
  const expMeetings = weeklyContacts*c2m, expWins = expMeetings*m2w;
  const reqC2M = weeklyContacts ? winsNeeded/(weeklyContacts*m2w) : null;
  return {winsNeeded, meetingsNeeded, contactsNeeded, weeklyContacts,
    expectedMeetings: Math.round(expMeetings*10)/10, expectedWins: Math.round(expWins*100)/100, expectedRevenue: Math.round(expWins*avg),
    sufficient: expWins >= winsNeeded, coverage: winsNeeded ? expWins/winsNeeded : 1,
    requiredContactToMeeting: reqC2M, requiredDaily: Math.ceil(contactsNeeded/days),
    requiredAvgValue: expWins>0 ? Math.ceil(target/expWins) : null,
    weeksToTarget: expWins>0 ? Math.ceil(winsNeeded/expWins) : null};
}

/* ---------- 20. learning: conversion by segment (Wilson interval) ---------- */
function wilson(k, n, z){
  z = z||1.645; if(!n) return [0,0];
  const p = k/n, d = 1+z*z/n, c = p+z*z/(2*n), m = z*Math.sqrt(p*(1-p)/n + z*z/(4*n*n));
  return [Math.max(0,(c-m)/d), Math.min(1,(c+m)/d)];
}
// rows: [{key, contacted, replied, meeting, won, value}] — returns segments sorted by meeting rate.
function conversionBy(rows, minSample){
  minSample = minSample||20;
  const g = {};
  rows.forEach(r=>{ const k = r.key==null||r.key===''?'Unknown':String(r.key); const s = g[k] = g[k]||{key:k, contacted:0, replied:0, meetings:0, won:0, value:0};
    if(r.contacted){ s.contacted++; if(r.replied) s.replied++; if(r.meeting) s.meetings++; if(r.won){ s.won++; s.value += Number(r.value)||0; } } });
  return Object.values(g).map(s=>{ const ci = wilson(s.meetings, s.contacted);
    return Object.assign(s, {replyRate: s.contacted? s.replied/s.contacted:0, meetingRate: s.contacted? s.meetings/s.contacted:0, winRate: s.contacted? s.won/s.contacted:0,
      ci, sufficient: s.contacted>=minSample}); }).sort((a,b)=>b.meetingRate-a.meetingRate || b.contacted-a.contacted);
}
// Observed rates replace the assumptions only once there's enough data.
function observedRates(rows, settings){
  const A = settings.assumptions;
  const contacted = rows.filter(r=>r.contacted).length, meetings = rows.filter(r=>r.contacted && r.meeting).length, wins = rows.filter(r=>r.meeting && r.won).length;
  const c2mObs = contacted>=A.minSampleForObserved, m2wObs = meetings>=Math.max(5, Math.round(A.minSampleForObserved/4));
  return {contactToMeeting: c2mObs ? meetings/contacted : A.contactToMeeting, contactToMeetingSource: c2mObs ? 'observed (n='+contacted+')' : 'assumption',
    meetingToWin: m2wObs ? wins/meetings : A.meetingToWin, meetingToWinSource: m2wObs ? 'observed (n='+meetings+')' : 'assumption', contacted, meetings, wins};
}

/* ---------- 21. cost metrics ---------- */
function costMetrics(totalCost, counts){
  const per = n=>n ? Math.round(totalCost/n*100)/100 : null;
  return {total: Math.round(totalCost*100)/100, perDiscovered: per(counts.discovered), perQualified: per(counts.qualified), perToday: per(counts.today), perMeeting: per(counts.meetings), perCustomer: per(counts.customers)};
}

/* ---------- 22. website audit — HTML signal extraction (used server-side) ----------
   Regex only so it runs the same in Deno and Node. Presence is VERIFIED. Absence is
   VERIFIED only when the page has real server-rendered content; on thin JS-rendered
   pages, "not found" becomes INFERRED with low confidence. */
const TOUR_VENDORS = [
  ['Matterport',/matterport\.com|my\.matterport/i], ['Kuula',/kuula\.co/i], ['CloudPano',/cloudpano\.com/i], ['Giraffe360',/giraffe360/i], ['3DVista',/3dvista/i],
  ['iGUIDE',/youriguide\.com|goiguide/i], ['Ricoh360',/tours\.ricoh|theta360\.biz|ricoh360/i], ['EyeSpy360',/eyespy360/i], ['Panotour',/panotour|krpano/i],
  ['Vpix',/vpix\.net/i], ['Cupix',/cupix\.com/i], ['Asteroom',/asteroom/i], ['Klapty',/klapty\.com/i], ['Roundme',/roundme\.com/i], ['Google Street View tour',/google\.com\/maps\/embed\?pb=.*!4v.*!6m8/i]
];
const BOOKING_RX = /calendly\.com|resdiary|opentable|sevenrooms|fresha\.com|treatwell|mindbody|glofox|cloudbeds|littlehotelier|siteminder|simplybook|setmore|acuityscheduling|bookingbug|beds24|guesty|hostaway|lodgify|nightsbridge|tablein|designmynight|booking-widget|check-?availability/i;
const ANALYTICS_RX = /googletagmanager\.com|google-analytics\.com|gtag\(|plausible\.io|usefathom|clarity\.ms|hotjar\.com|connect\.facebook\.net\/[^"']*fbevents|matomo/i;
const CTA_RX = /(book (a |an |your )?(viewing|valuation|now|online|a visit|a tour)|get (a |your )?(free )?(valuation|quote|in touch)|request (a |your )?(valuation|callback|viewing|brochure)|arrange (a )?(viewing|valuation|visit)|enquire( now)?|call (us|now)|contact us|check availability|book now|instant valuation|schedule a (visit|tour))/ig;
// Main content only: drops nav menus, headers, footers and menu-like blocks, so a menu link
// ("Landlord services", "Tenant portal") on every page isn't mistaken for evidence.
function contentText(html){
  let h = String(html||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<noscript[\s\S]*?<\/noscript>/gi,' ');
  h = h.replace(/<(nav|header|footer)\b[\s\S]*?<\/\1>/gi,' ');
  // <ul>/<div> blocks whose class or id says menu / nav / dropdown
  h = h.replace(/<(ul|div)\b[^>]*(class|id)=["'][^"']*\b(menu|nav|navbar|navigation|dropdown|megamenu)\b[^"']*["'][^>]*>[\s\S]*?<\/\1>/gi,' ');
  return stripTags(h);
}
function stripTags(html){ return String(html||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/\s+/g,' ').trim(); }
function extractSignals(html, finalUrl, opts){
  opts = opts||{};
  const at = opts.checkedAt || new Date().toISOString();
  const src = finalUrl;
  const h = String(html||'');
  const text = stripTags(h);
  const thin = text.length < 600; // likely client-rendered — absence isn't trustworthy
  const F = {};
  const present = (k, v, note)=>{ F[k] = makeFact(v, STATUS.VERIFIED, 0.95, src, at, note); };
  const absent = (k, v, note)=>{ F[k] = thin ? makeFact(v, STATUS.INFERRED, 0.4, src, at, (note?note+' ':'')+'(page content is thin — may render in the browser)') : makeFact(v, STATUS.VERIFIED, 0.85, src, at, note); };
  const flag = (k, rx)=>{ if(rx.test(h)) present(k, true); else absent(k, false); };
  present('website.reachable', true);
  present('website.https', /^https:/i.test(finalUrl||''));
  flag('website.mobileViewport', /<meta[^>]+name=["']?viewport/i);
  flag('website.hasMetaDescription', /<meta[^>]+name=["']?description["']?[^>]+content=["'][^"']{20,}/i);
  flag('website.hasH1', /<h1[\s>]/i);
  flag('website.hasContactForm', /<form[\s\S]{0,4000}?(type=["']?(email|tel)|name=["']?(email|phone|message|enquiry))/i);
  flag('website.hasWhatsapp', /wa\.me\/|api\.whatsapp\.com|whatsapp:\/\/|web\.whatsapp\.com\/send/i);
  flag('website.hasBooking', BOOKING_RX);
  flag('website.hasAnalytics', ANALYTICS_RX);
  flag('website.hasLocalSchema', /"@type"\s*:\s*"(LocalBusiness|RealEstateAgent|Hotel|LodgingBusiness|EventVenue|Restaurant|HealthClub|BeautySalon|HairSalon|Store|AutoDealer|FurnitureStore|HomeAndConstructionBusiness|ProfessionalService|Organization)"/i);
  flag('website.hasFloorplans', /floor-?plan/i);
  flag('website.hasVideo', /youtube\.com\/embed|player\.vimeo|<video[\s>]/i);
  flag('website.hasPropertySearch', /name=["']?(min_?price|max_?price|minprice|maxprice|price_?min|price_?max|bedrooms|min_?beds|beds_?min|minimum_?bedrooms)|property[-\s]search/i);
  const ctas = (text.match(CTA_RX)||[]).map(s=>s.toLowerCase());
  F['website.ctaCount'] = thin ? makeFact(new Set(ctas).size, STATUS.INFERRED, 0.4, src, at, 'Thin page content') : makeFact(new Set(ctas).size, STATUS.VERIFIED, 0.8, src, at, 'Distinct call-to-action phrases on the homepage');
  const tour = TOUR_VENDORS.find(([,rx])=>rx.test(h));
  if(tour) present('website.tourVendor', tour[0]);
  else if(/virtual[-\s]tour|360[-\s]?(tour|view|walkthrough)/i.test(text)) present('website.tourVendor', 'Unnamed virtual tour', 'Mentions a virtual / 360 tour');
  else absent('website.tourVendor', 'none');
  const socials = [];
  [['Instagram',/instagram\.com\/(?!p\/|explore)[A-Za-z0-9_.]+/i],['Facebook',/facebook\.com\/(?!sharer|plugins|tr\?)[A-Za-z0-9_.-]+/i],['LinkedIn',/linkedin\.com\/company\/[A-Za-z0-9_-]+/i],['TikTok',/tiktok\.com\/@[A-Za-z0-9_.]+/i],['X',/(twitter|x)\.com\/(?!intent|share)[A-Za-z0-9_]+/i],['YouTube',/youtube\.com\/(c\/|channel\/|@)[A-Za-z0-9_-]+/i]]
    .forEach(([n,rx])=>{ const m = h.match(rx); if(m) socials.push({network:n, url:'https://'+m[0].replace(/^https?:\/\//,'')}); });
  if(socials.length) present('website.socialLinks', socials); else absent('website.socialLinks', []);
  const years = (text.match(/(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?(20\d{2}|19\d{2})/gi)||[]).map(s=>Number(s.match(/(19|20)\d{2}(?!.*(19|20)\d{2})/)[0]));
  if(years.length) present('website.copyrightYear', Math.max.apply(null, years));
  const gen = (h.match(/<meta[^>]+name=["']?generator["']?[^>]+content=["']([^"']+)/i)||[])[1] || (/wix\.com|wixstatic/i.test(h)?'Wix':/squarespace/i.test(h)?'Squarespace':/wp-content/i.test(h)?'WordPress':null);
  if(gen) present('website.generator', gen);
  // dated-design is a judgement — always INFERRED, with the reasons in the note.
  const cy = years.length ? Math.max.apply(null, years) : null;
  const nowY = new Date(at).getFullYear();
  const reasons = [];
  if(!/<meta[^>]+name=["']?viewport/i.test(h)) reasons.push('no mobile viewport');
  if(cy && cy <= nowY-5) reasons.push('copyright '+cy);
  if(/jquery[.-]1\.[0-9]/i.test(h)) reasons.push('jQuery 1.x');
  if((h.match(/<table/gi)||[]).length>=6 && !/<(main|section|header|nav)[\s>]/i.test(h)) reasons.push('table-based layout');
  if(/<font[\s>]|<center>|marquee/i.test(h)) reasons.push('legacy HTML tags');
  if(!thin) F['website.designAge'] = makeFact(reasons.length>=2 ? 'dated' : 'modern', STATUS.INFERRED, reasons.length>=2 ? 0.6 : 0.5, src, at, reasons.length ? 'Signals: '+reasons.join(', ') : 'No dated-design signals');
  if(thin) present('website.renderedClientSide', true);
  // contacts published on the page
  const emails = Array.from(new Set((h.match(/mailto:([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi)||[]).map(m=>m.slice(7).toLowerCase())));
  const phones = Array.from(new Set((h.match(/tel:([+0-9 ()-]{9,20})/gi)||[]).map(m=>m.slice(4).trim())));
  return {facts: F, emails, phones, links: extractLinks(h, finalUrl), thin};
}
function extractLinks(html, base){
  const out = [];
  const rx = /<a[^>]+href=["']([^"'#]+)["']/gi; let m;
  while((m = rx.exec(html))){ try{ const u = new URL(m[1], base); if(/^https?:$/.test(u.protocol)) out.push(u.href); }catch(e){} }
  return Array.from(new Set(out));
}
// Same-site links that look like individual listings / team pages / careers pages.
function classifyLinks(links, base){
  const host = normaliseDomain(base);
  const same = links.filter(u=>normaliseDomain(u)===host);
  const listing = same.filter(u=>/\/(property|properties|property-details|listing|listings|for-sale|to-rent|to-let|lettings|sales|homes?|developments?|plots?)\/[^\/?#]*[a-z0-9-]{6,}/i.test(u) && !/\/(search|results|page\/\d|category|tag)\b/i.test(u));
  return {listing: Array.from(new Set(listing)), team: same.filter(u=>/\/(team|our-team|meet-the-team|about|about-us|people|staff)\/?$/i.test(u)).slice(0,2),
    careers: same.filter(u=>/\/(careers|jobs|vacancies|join-us|work-with-us)\/?/i.test(u)).slice(0,1),
    search: same.filter(u=>/\/(search|properties|property-search|for-sale|to-rent|lettings|sales)\/?(\?|$)/i.test(u)).slice(0,2)};
}
// Rolls up the per-listing-page checks into coverage facts.
function summariseListingPages(pages, listingCount, at, source){
  const n = pages.length;
  if(!n) return {};
  const withTour = pages.filter(p=>p.tour).length;
  const F = {};
  F['website.listingsSampled'] = makeFact(n, STATUS.VERIFIED, 0.95, source, at);
  F['website.tourCoverage'] = makeFact(withTour/n, STATUS.VERIFIED, n>=5?0.9:0.75, source, at, withTour+' of '+n+' listing pages had a 360 / virtual tour');
  if(listingCount!=null) F['website.listingsCount'] = makeFact(listingCount, STATUS.VERIFIED, 0.8, source, at, 'Distinct listing links found on the search/results pages');
  const prices = pages.map(p=>p.price).filter(x=>x>10000);
  if(prices.length>=3) F['listings.avgPrice'] = makeFact(Math.round(prices.reduce((s,x)=>s+x,0)/prices.length), STATUS.VERIFIED, 0.75, source, at, 'Mean of '+prices.length+' asking prices on listing pages');
  return F;
}
function listingPageSignals(html){
  const h = String(html||'');
  const tour = TOUR_VENDORS.some(([,rx])=>rx.test(h)) || /virtual[-\s]tour|360[-\s]?(tour|view)/i.test(stripTags(h));
  const pm = stripTags(h).match(/£\s?([0-9]{2,3}(?:,[0-9]{3}){1,2})(?!\s*(pcm|pw|per|p\/m))/i);
  return {tour, price: pm ? Number(pm[1].replace(/,/g,'')) : null};
}
// Team page: count distinct person cards (name + role patterns). Conservative.
function teamSignals(html, at, source){
  const text = stripTags(html);
  const roles = text.match(/\b(Director|Managing Director|Founder|Owner|Partner|Branch Manager|Sales Manager|Lettings Manager|Negotiator|Property Manager|Valuer|Administrator|Marketing Manager|Head of [A-Z][a-z]+)\b/g)||[];
  const people = [];
  const rx = /([A-Z][a-z]+ [A-Z][a-z'-]+)\s*[-–|,]?\s*(Managing Director|Director|Founder|Owner|Partner|Branch Manager|Marketing Manager|Sales Manager|Lettings Manager)/g; let m;
  while((m = rx.exec(text)) && people.length<10){ people.push({name:m[1], role:m[2], status:STATUS.VERIFIED, confidence:0.8, source, checkedAt:at}); }
  const F = {};
  if(roles.length>=2) F['website.teamSize'] = makeFact(Math.min(roles.length, 60), STATUS.LIKELY, 0.65, source, at, 'Count of job titles on the team page');
  return {facts:F, people};
}

/* ---------- 23. database row mapping (shared by browser + Edge Function) ---------- */
function rowToLead(r){
  return {id:r.id, name:r.name, industry:r.industry, scope:r.scope||['sf'], swType:r.sw_type||null, area:r.area, address:r.address, postcode:r.postcode, lat:r.lat, lng:r.lng,
    website:r.website, phone:r.phone, email:r.email, companyNumber:r.company_number, placeId:r.place_id, subscriberType:r.subscriber_type||'unknown',
    independent:r.independent, stage:r.stage, facts:r.facts||{}, contacts:r.contacts||[], sources:r.sources||[], score:r.score||null, rejected:r.rejected||[],
    prospectId:r.prospect_id, suppressed:!!r.suppressed, isClient:!!r.is_client, tpsChecked:!!r.tps_checked, replied:!!r.replied,
    lastContactedAt:r.last_contacted_at, discoveredAt:r.discovered_at, lastCheckedAt:r.last_checked_at, auditedAt:r.audited_at, researchedAt:r.researched_at,
    mock:!!r.is_mock, createdAt:r.created_at, updatedAt:r.updated_at};
}
const ROW_MAP = {name:'name', industry:'industry', scope:'scope', swType:'sw_type', area:'area', address:'address', postcode:'postcode', lat:'lat', lng:'lng', website:'website', phone:'phone', email:'email',
  companyNumber:'company_number', placeId:'place_id', subscriberType:'subscriber_type', independent:'independent', stage:'stage', facts:'facts', contacts:'contacts', sources:'sources',
  score:'score', rejected:'rejected', prospectId:'prospect_id', suppressed:'suppressed', isClient:'is_client', tpsChecked:'tps_checked', replied:'replied',
  lastContactedAt:'last_contacted_at', lastCheckedAt:'last_checked_at', auditedAt:'audited_at', researchedAt:'researched_at'};
function leadToRow(patch){
  const out = {};
  Object.keys(patch||{}).forEach(k=>{ if(ROW_MAP[k]) out[ROW_MAP[k]] = patch[k]; });
  if('website' in (patch||{})) out.domain = normaliseDomain(patch.website) || null;
  return out;
}
// What gets cached in le_leads.score — enough for list views without re-scoring.
function scoreSummary(r){
  return {version:VERSION, leadScore:r.leadScore, confidence:r.confidence, band:r.band, gap:r.gap, strength:r.strength.score, need:r.primaryService?r.need.byService[r.primaryService].score:0,
    o360:r.o360.score, website:r.website.score, buying:r.buying.score, contact:r.contact.score, fit:r.fit.score, primaryService:r.primaryService, secondaryService:r.secondaryService,
    dealLow:r.deal.low, dealHigh:r.deal.high, pass:r.gate.pass, nearMiss:r.gate.nearMiss, failures:r.gate.failures.map(f=>f.code), computedAt:new Date().toISOString()};
}
// Stage the lead is in before first contact (after that, the linked sfProspect status drives it).
const PIPELINE_STAGES = [
  {id:'discovered', label:'Discovered'}, {id:'qualified', label:'Qualified'}, {id:'ready', label:'Ready to Contact'},
  {id:'contacted', label:'Contacted', acq:'Emailed'}, {id:'replied', label:'Replied', acq:'Replied'}, {id:'meeting', label:'Meeting Booked', acq:'Call Booked'},
  {id:'proposal', label:'Proposal Sent', acq:'Proposal Sent'}, {id:'negotiating', label:'Negotiating', acq:'Negotiating'}, {id:'won', label:'Won', acq:'Won'},
  {id:'lost', label:'Lost', acq:'Lost'}, {id:'later', label:'Follow Up Later', acq:'On Hold'}
];
const POST_CONTACT = ['contacted','replied','meeting','proposal','negotiating','won','lost','later'];
function stageFromAcqStatus(st){ return ({'Emailed':'contacted','Called':'contacted','Replied':'replied','Call Booked':'meeting','Proposal Sent':'proposal','Negotiating':'negotiating','Won':'won','Lost':'lost','On Hold':'later'})[st] || null; }
// Hard rejections apply at any time; evidence-based ones only once the website has been audited
// (before that, "not enough evidence" just means "not researched yet").
const EVIDENCE_DQ = ['insufficient-evidence','no-contact-route','weak-presence','too-small','trades-provider','no-website'];
function activeDisqualifications(lead, r){ return (lead.auditedAt || lead.researchedAt) ? r.disqualifications : r.disqualifications.filter(d=>!EVIDENCE_DQ.includes(d.code)); }
function preContactStage(lead, r){
  if(activeDisqualifications(lead, r).length) return 'rejected';
  if(r.gate.pass) return 'ready';
  if(lead.auditedAt || known(lead,'website.reachable')) return 'qualified';
  return 'discovered';
}

/* ---------- 24. MOCK data — development / testing only ----------
   Fictional businesses on example.com domains. Every record has mock:true and the
   UI labels them MOCK. Never written to the production tables. */
function mockLeads(now){
  const t = new Date(now||Date.now());
  const ago = d=>new Date(t.getTime()-d*86400000).toISOString();
  const V = (v,c,s,n)=>makeFact(v, STATUS.VERIFIED, c==null?0.9:c, s||'https://example.com', ago(1), n);
  const I = (v,c,n)=>makeFact(v, STATUS.INFERRED, c==null?0.55:c, 'https://example.com', ago(1), n);
  const base = (o)=>Object.assign({mock:true, discoveredAt:ago(6), lastCheckedAt:ago(1), researchedAt:ago(1), subscriberType:'corporate', contacts:[], facts:{}}, o);
  return [
    base({id:'mock-1', name:'MOCK Example Estates', industry:'estate-agent', area:'Ilford', postcode:'IG1 1AA', lat:51.5590, lng:0.0741, website:'https://example-estates.example.com', phone:'020 0000 0001', email:'info@example-estates.example.com', companyNumber:'MOCK0001', independent:true,
      contacts:[{name:'Jamie Example', role:'Director', status:'VERIFIED', confidence:0.95, source:'Companies House (mock)', phone:'', email:''}],
      facts:{'website.reachable':V(true),'website.https':V(true),'website.mobileViewport':V(true),'website.pagespeedMobile':V(41,0.95,'PageSpeed Insights (mock)'),'website.listingsCount':V(43,0.8),'website.listingsSampled':V(8),'website.tourCoverage':V(0,0.9,null,'0 of 8 listing pages had a tour'),'website.tourVendor':V('none',0.85),'website.hasFloorplans':V(true),'website.hasPropertySearch':V(true),'website.ctaCount':V(1,0.8),'website.hasContactForm':V(true),'website.hasWhatsapp':V(false,0.85),'website.hasAnalytics':V(true),'website.socialLinks':V([{network:'Instagram',url:'https://instagram.com/example'}]),'website.hasMetaDescription':V(true),'website.hasH1':V(true),'google.reviewCount':V(184,0.95,'Google Maps (mock)'),'google.rating':V(4.8,0.95,'Google Maps (mock)'),'company.status':V('active',0.98,'Companies House (mock)'),'company.ageYears':V(11,0.98,'Companies House (mock)'),'company.branches':V(1),'website.teamSize':V(7,0.65),'social.instagramActive':I(true,0.6,'Recent posts linked from site'),'signals.newOfficer':V(true,0.9,'Companies House (mock)')}}),
    base({id:'mock-2', name:'MOCK Sample Lettings', industry:'letting-agent', area:'Romford', postcode:'RM1 3AA', lat:51.5768, lng:0.1801, website:'http://sample-lettings.example.com', phone:'01708 000002', email:'lettings@sample-lettings.example.com', companyNumber:'MOCK0002',
      contacts:[{name:'Priya Sample', role:'Managing Director', status:'VERIFIED', confidence:0.95, source:'Companies House (mock)'}],
      facts:{'website.reachable':V(true),'website.https':V(false),'website.mobileViewport':V(false),'website.designAge':I('dated',0.6,'Signals: no mobile viewport, copyright 2017'),'website.copyrightYear':V(2017),'website.listingsCount':V(62,0.8),'website.listingsSampled':V(10),'website.tourCoverage':V(0),'website.tourVendor':V('none',0.85),'website.hasPropertySearch':V(false),'website.ctaCount':V(0,0.8),'website.hasContactForm':V(false),'website.hasWhatsapp':V(false),'website.hasAnalytics':V(false),'website.socialLinks':V([]),'google.reviewCount':V(96,0.95),'google.rating':V(4.5,0.95),'company.status':V('active',0.98),'company.ageYears':V(14,0.98),'company.branches':V(2),'website.teamSize':V(9,0.65),'signals.hiring':V(true,0.85,'https://sample-lettings.example.com/careers')}}),
    base({id:'mock-3', name:'MOCK Placeholder Developments', industry:'developer', area:'Chelmsford', postcode:'CM1 1AA', lat:51.7356, lng:0.4685, website:'https://placeholder-dev.example.com', phone:'01245 000003', email:'sales@placeholder-dev.example.com', companyNumber:'MOCK0003',
      contacts:[{name:'Alex Placeholder', role:'Founder', status:'VERIFIED', confidence:0.95, source:'Companies House (mock)'}],
      facts:{'website.reachable':V(true),'website.https':V(true),'website.mobileViewport':V(true),'website.pagespeedMobile':V(58),'website.listingsCount':V(18,0.8),'website.listingsSampled':V(6),'website.tourCoverage':V(0),'website.tourVendor':V('none',0.85),'website.hasFloorplans':V(true),'website.hasVideo':V(true),'website.hasPropertySearch':V(false),'website.ctaCount':V(2),'website.hasContactForm':V(true),'website.hasWhatsapp':V(false),'website.hasAnalytics':V(true),'website.socialLinks':V([{network:'Instagram',url:'https://instagram.com/example'}]),'google.reviewCount':V(38),'google.rating':V(4.6),'company.status':V('active',0.98),'company.ageYears':V(6,0.98),'website.teamSize':V(5,0.65),'signals.newDevelopment':V(true,0.85,'https://placeholder-dev.example.com/news')}}),
    base({id:'mock-4', name:'MOCK Demo Hall Venue', industry:'venue', area:'Brentwood', postcode:'CM14 4AA', lat:51.6205, lng:0.3054, website:'https://demo-hall.example.com', phone:'01277 000004', email:'events@demo-hall.example.com', companyNumber:'MOCK0004',
      contacts:[{name:'Sam Demo', role:'Owner', status:'VERIFIED', confidence:0.9, source:'Companies House (mock)'}],
      facts:{'website.reachable':V(true),'website.https':V(true),'website.mobileViewport':V(true),'website.pagespeedMobile':V(34),'website.tourVendor':V('none',0.85),'website.hasBooking':V(false),'website.ctaCount':V(1),'website.hasContactForm':V(true),'website.hasWhatsapp':V(false),'website.hasAnalytics':V(true),'website.hasVideo':V(true),'website.socialLinks':V([{network:'Instagram',url:'https://instagram.com/example'}]),'google.reviewCount':V(212),'google.rating':V(4.7),'company.status':V('active',0.98),'company.ageYears':V(9,0.98),'social.instagramActive':I(true,0.6)}}),
    base({id:'mock-5', name:'MOCK Test Hotel', industry:'hotel', area:'Southend-on-Sea', postcode:'SS1 1AA', lat:51.5383, lng:0.7120, website:'https://test-hotel.example.com', phone:'01702 000005', email:'stay@test-hotel.example.com', companyNumber:'MOCK0005',
      facts:{'website.reachable':V(true),'website.https':V(true),'website.mobileViewport':V(true),'website.tourVendor':V('Matterport',0.95),'website.hasBooking':V(true),'website.ctaCount':V(3),'website.hasContactForm':V(true),'google.reviewCount':V(540),'google.rating':V(4.3),'company.status':V('active',0.98),'company.ageYears':V(22,0.98)}}),
    base({id:'mock-6', name:'MOCK Tiny Lets', industry:'letting-agent', area:'Ilford', postcode:'IG2 6AA', lat:51.5762, lng:0.0882, website:'', phone:'07000 000006', subscriberType:'individual', researchedAt:null,
      facts:{'website.reachable':V(false),'google.reviewCount':V(2),'google.rating':V(5)}}),
    base({id:'mock-7', name:'MOCK Thin-Data Property Co', industry:'estate-agent', area:'Barking', postcode:'IG11 7AA', lat:51.5396, lng:0.0810, website:'https://thin-data.example.com', phone:'020 0000 0007', subscriberType:'unknown',
      facts:{'website.reachable':V(true),'website.https':V(true),'website.mobileViewport':V(true),'website.tourVendor':makeFact('none',STATUS.INFERRED,0.4,'https://thin-data.example.com',ago(1),'Page content is thin — may render in the browser'),'website.renderedClientSide':V(true),'google.reviewCount':V(61),'website.ctaCount':makeFact(0,STATUS.INFERRED,0.4,'',ago(1)),'company.status':V('active')}})
  ];
}

const LeadCore = {VERSION, STATUS, SERVICES, OFFERS, INDUSTRIES, AREA_GROUPS, FACT_LABELS, PROBLEM_RULES, TOUR_VENDORS, THEME_TITLES,
  industry, service, offerFor, defaultSettings, mergeSettings, postcodeArea, normaliseDomain, normalisePhone, normaliseName, dedupeKeys, findDuplicates,
  fact, val, known, factConf, makeFact, computeStrength, detectFindings, websiteScore, compute360, computeNeed, computeBuying, computeContact, bestContact, emailIsGeneric,
  computeFit, outsideTargetCounty, disqualify, computeConfidence, dealValue, allowedChannels, scoreLead, band, qualityGate, whyNow, selectDaily, funnel,
  outreach, microAudit, targetFeasibility, wilson, conversionBy, observedRates, costMetrics,
  extractSignals, extractLinks, classifyLinks, summariseListingPages, listingPageSignals, teamSignals, stripTags, contentText, mockLeads, todayStr, daysBetween,
  rowToLead, leadToRow, scoreSummary, preContactStage, activeDisqualifications, EVIDENCE_DQ, PIPELINE_STAGES, POST_CONTACT, stageFromAcqStatus};
root.LeadCore = LeadCore;
if(typeof module!=='undefined' && module.exports) module.exports = LeadCore;
})(typeof globalThis!=='undefined' ? globalThis : this);
