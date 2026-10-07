/* ===================== STEADYWORKS COMMERCIAL ENGINE — CORE ===================== */
/* Pure functions. Separate scoring model from SteadyFlow (lead-core.js) — only the
   evidence helpers (facts, dedupe, PECR channels, website parsing, stats) are shared.
   Loaded after lead-core.js in the browser and the Edge Function (globalThis.WorksCore).
   Reasoning for every weight: docs/lead-engine/STEADYWORKS.md §3. */
(function(root){
'use strict';
const LC = root.LeadCore;
if(!LC) throw new Error('works-core.js needs lead-core.js loaded first');
const {STATUS, fact, val, known, factConf, makeFact} = LC;
const VERSION = '1.0.0';
const clamp = (n, lo, hi)=>Math.max(lo, Math.min(hi, n));
const round = n=>Math.round(n);
const log01 = (n, cap)=>clamp(Math.log10(1+Math.max(0,n))/Math.log10(1+cap), 0, 1);

/* ---------- services SteadyWorks sells ---------- */
const SERVICES = [
  {id:'reactive-plumbing', label:'Reactive plumbing (leaks, taps, toilets)', entry:true},
  {id:'planned-plumbing', label:'Planned plumbing maintenance'},
  {id:'bathroom', label:'Bathroom repairs'},
  {id:'decorating', label:'Decorating / painting', entry:true},
  {id:'void', label:'Void property works'},
  {id:'refurb', label:'Minor refurbishment'},
  {id:'tiling', label:'Tiling'},
  {id:'flooring', label:'Flooring'},
  {id:'general', label:'General maintenance / handyman', entry:true},
  {id:'external', label:'External maintenance'},
  {id:'gardening', label:'Gardening'}
];
const svcLabel = id=>(SERVICES.find(s=>s.id===id)||{label:id}).label;

/* ---------- organisation types ----------
   prior: how likely this kind of organisation is to buy recurring maintenance BEFORE any
   evidence (0–1). Evidence on the website moves it; the prior alone can't reach the gate.
   svc: applicability of each service (0–1). roles: best contacts, in order. */
const P = (o)=>Object.assign({group:'property', sic:[], osm:[], svc:{}, roles:['Property Manager','Head of Property Management','Maintenance Manager','Operations Manager','Branch Manager','Director'], goal:'backup'}, o);
const FULL = {'reactive-plumbing':1,'planned-plumbing':0.6,bathroom:0.8,decorating:0.9,void:0.9,refurb:0.7,tiling:0.6,flooring:0.6,general:0.9,external:0.6,gardening:0.4};
const FACILITY = {'reactive-plumbing':1,'planned-plumbing':0.8,bathroom:0.6,decorating:0.8,void:0.2,refurb:0.6,tiling:0.5,flooring:0.6,general:0.9,external:0.7,gardening:0.5};
const ORG_TYPES = [
  P({id:'property-management', label:'Property management', prior:0.9, sic:['68320'], osm:['office=property_management'], svc:FULL}),
  P({id:'block-management', label:'Block management', prior:0.9, sic:['68320','98000'], svc:Object.assign({}, FULL, {void:0.3, external:0.9, gardening:0.7}), goal:'preferred'}),
  P({id:'letting-agent', label:'Letting agent', prior:0.75, sic:['68310','68320'], osm:['office=estate_agent','shop=estate_agent'], svc:FULL}),
  P({id:'estate-agent', label:'Estate agent (sales-led)', prior:0.35, sic:['68310'], osm:['office=estate_agent','shop=estate_agent'], svc:FULL}),
  P({id:'portfolio-landlord', label:'Portfolio landlord', prior:0.7, sic:['68209','68100'], svc:FULL, roles:['Director','Owner','Property Manager']}),
  P({id:'build-to-rent', label:'Build-to-rent operator', prior:0.85, sic:['68209'], svc:FULL, goal:'preferred'}),
  P({id:'serviced-accommodation', label:'Serviced accommodation', prior:0.8, sic:['55209','55900','68209'], osm:['tourism=apartment','tourism=guest_house'], svc:Object.assign({}, FULL, {void:0.5}), roles:['Operations Manager','Housekeeping Manager','Director','Owner']}),
  P({id:'student-accommodation', label:'Student accommodation', prior:0.85, sic:['55900','68209'], osm:['building=dormitory'], svc:FULL, goal:'preferred'}),
  P({id:'hotel', label:'Independent hotel', group:'commercial', prior:0.75, sic:['55100'], osm:['tourism=hotel'], svc:Object.assign({}, FACILITY, {bathroom:0.9, decorating:0.9}), roles:['General Manager','Maintenance Manager','Operations Manager','Owner'], goal:'emergency'}),
  P({id:'care-home', label:'Care home', group:'commercial', prior:0.8, sic:['87100','87300','87200'], osm:['amenity=nursing_home','social_facility=nursing_home'], svc:FACILITY, roles:['Home Manager','Maintenance Manager','Operations Manager','Registered Manager','Director'], goal:'partner'}),
  P({id:'nursery', label:'Nursery', group:'commercial', prior:0.55, sic:['88910'], osm:['amenity=kindergarten','amenity=childcare'], svc:FACILITY, roles:['Owner','Nursery Manager','Operations Manager','Director'], goal:'backup'}),
  P({id:'private-school', label:'Private school', group:'commercial', prior:0.7, sic:['85200','85310'], osm:['amenity=school'], svc:FACILITY, roles:['Bursar','Facilities Manager','Estates Manager','Business Manager'], goal:'partner'}),
  P({id:'office-operator', label:'Office / business centre', group:'commercial', prior:0.65, sic:['68209','82110','68320'], osm:['office=coworking','amenity=coworking_space'], svc:FACILITY, roles:['Facilities Manager','Centre Manager','Operations Manager','Director'], goal:'backup'}),
  P({id:'commercial-landlord', label:'Commercial landlord', group:'commercial', prior:0.8, sic:['68209','68100'], svc:FACILITY, roles:['Property Manager','Asset Manager','Director'], goal:'preferred'}),
  P({id:'retail', label:'Retail premises', group:'commercial', prior:0.4, sic:['47190','47110'], svc:FACILITY, roles:['Owner','Store Manager','Operations Manager'], goal:'emergency'}),
  P({id:'restaurant-group', label:'Restaurant / group', group:'commercial', prior:0.5, sic:['56101','56102'], osm:['amenity=restaurant'], svc:FACILITY, roles:['Operations Manager','Owner','General Manager'], goal:'emergency'}),
  P({id:'gym', label:'Gym', group:'commercial', prior:0.5, sic:['93130'], osm:['leisure=fitness_centre'], svc:Object.assign({}, FACILITY, {bathroom:0.9}), roles:['Operations Manager','General Manager','Owner'], goal:'emergency'}),
  P({id:'fm-company', label:'Facilities management company', group:'construction', prior:0.85, sic:['81100','81210','81220'], svc:FACILITY, roles:['Contract Manager','Operations Manager','Supply Chain Manager','Procurement','Facilities Manager','Director'], goal:'subcontractor'}),
  P({id:'main-contractor', label:'Main contractor / builder', group:'construction', prior:0.6, sic:['41201','41202'], osm:['craft=builder'], svc:Object.assign({}, FULL, {'reactive-plumbing':0.6, 'planned-plumbing':0.4}), roles:['Contracts Manager','Site Manager','Procurement','Director'], goal:'subcontractor'}),
  P({id:'refurb-contractor', label:'Refurbishment contractor', group:'construction', prior:0.6, sic:['43390','43341','43320'], svc:Object.assign({}, FULL, {'reactive-plumbing':0.5}), roles:['Contracts Manager','Director','Operations Manager'], goal:'subcontractor'}),
  P({id:'maintenance-company', label:'Maintenance company', group:'construction', prior:0.75, sic:['81100','43290','43999'], svc:FULL, roles:['Operations Manager','Contract Manager','Director'], goal:'subcontractor'}),
  // Public procurement is its own opportunity type — different qualification (tender rules), phase 2.
  P({id:'public-procurement', label:'Public procurement (tender)', group:'public', prior:0.7, svc:FULL, roles:['Procurement','Contract Manager'], goal:'approved'}),
  P({id:'other', label:'Other organisation', group:'commercial', prior:0.3, svc:FACILITY, roles:['Owner','Director','General Manager']})
];
function orgType(id){ return ORG_TYPES.find(t=>t.id===id) || ORG_TYPES[ORG_TYPES.length-1]; }
// Best guess at org type from the SteadyFlow industry when a lead came from there.
function typeFromIndustry(ind){
  return ({'letting-agent':'letting-agent','estate-agent':'estate-agent','developer':'main-contractor','commercial-agent':'commercial-landlord','serviced-accommodation':'serviced-accommodation',
    'hotel':'hotel','venue':'other','showroom':'retail','gym':'gym','salon':'retail','restaurant':'restaurant-group'})[ind] || 'other';
}

function industryFromType(typeId){
  return ({'letting-agent':'letting-agent','property-management':'letting-agent','estate-agent':'estate-agent','serviced-accommodation':'serviced-accommodation',
    'hotel':'hotel','gym':'gym','restaurant-group':'restaurant','commercial-landlord':'commercial-agent','retail':'showroom'})[typeId] || 'other';
}
const GOALS = {
  preferred:'Become a preferred local maintenance contractor',
  backup:'Become a backup reactive-maintenance contractor',
  overflow:'Become an overflow contractor for busy periods',
  emergency:'Become their emergency call-out contractor',
  subcontractor:'Join their subcontractor / supply-chain list',
  approved:'Become an approved supplier',
  partner:'Become their planned + reactive maintenance partner'
};

/* ---------- maintenance demand signals ----------
   Each is a phrase the organisation uses about ITSELF. A signal is evidence, not proof:
   demand needs at least two categories before it can score above 60. */
const S = (key, label, rx, category, weight, services)=>({key, label, rx, category, weight, services:services||[]});
const SIGNALS = [
  S('fully-managed','Fully managed lettings',/fully[\s-]managed|full(y)? management service/i,'management',0.75,['reactive-plumbing','general']),
  S('property-management','Property management service',/property management|managed propert(y|ies)|we manage (your|over|more than|around)/i,'management',0.7,['reactive-plumbing','general']),
  S('block-management','Block management',/block management|leasehold management|residents'? management compan|service charge/i,'management',0.75,['external','general','decorating']),
  S('landlord-services','Landlord services',/landlord services|for landlords|landlord packages?/i,'management',0.4,[]),
  S('managed-portfolio','Managed portfolio',/managed portfolio|portfolio management|portfolio of (over |more than )?\d/i,'management',0.6,[]),
  S('facilities-management','Facilities management',/facilities management|facility management|\bFM services/i,'management',0.7,['planned-plumbing','general']),
  S('maintenance-reporting','Maintenance / repair reporting',/report (a |your )?(repair|maintenance|fault|issue)|repair request|maintenance request|fixflo|arthur online|reapit maintenance/i,'maintenance',0.8,['reactive-plumbing','general']),
  S('24h-maintenance','24-hour maintenance',/24[\s/-]?(hour|hr|7)[\s-]*(emergency )?(maintenance|repairs?|call[\s-]?out|emergency)/i,'maintenance',0.7,['reactive-plumbing']),
  S('reactive-maintenance','Reactive maintenance',/reactive (maintenance|repairs?)/i,'maintenance',0.75,['reactive-plumbing','general']),
  S('planned-maintenance','Planned / preventive maintenance',/planned (preventative |preventive )?maintenance|ppm\b|preventative maintenance/i,'maintenance',0.7,['planned-plumbing']),
  S('repairs','Repairs handled for clients',/(arrange|handle|manage|organise|coordinate)s? (all )?(repairs|maintenance)/i,'maintenance',0.6,['reactive-plumbing','general']),
  S('tenant-portal','Tenant / resident portal',/tenant portal|resident portal|tenant app|online portal for tenants/i,'maintenance',0.45,[]),
  S('approved-contractors','Approved / trusted contractors',/approved (contractors|tradesmen|tradespeople|suppliers)|trusted (contractors|tradesmen|tradespeople)|our (network of )?(contractors|tradesmen|tradespeople)/i,'contractors',0.8,[]),
  S('supplier-route','Supplier / contractor application',/become (a|an approved) (supplier|contractor)|supplier (registration|application|portal)|contractor (registration|application|enquir)|join our (supply chain|contractor)/i,'contractors',0.9,[]),
  S('subcontractors','Uses subcontractors',/sub-?contractors?|supply chain partners/i,'contractors',0.6,[]),
  S('void-works','Void / turnaround works',/void (works|property|properties|turnaround|management)|between tenancies|end of tenancy (works|refurb)/i,'turnover',0.8,['void','decorating']),
  S('inspections','Property inspections',/property inspections?|periodic inspections?|mid[\s-]term inspections?/i,'turnover',0.5,['general']),
  S('check-in-out','Check-in / check-out / inventories',/check[\s-]?ins? (and|&|\/) check[\s-]?outs?|check[\s-]?out (reports?|inspections?|inventor)|inventor(y|ies) (and|&|reports?|services?|fees?|clerk)|property inventor(y|ies)/i,'turnover',0.45,['decorating']),
  S('refurbishment','Refurbishment activity',/refurbish(ment|ed|ing)|renovation projects?/i,'turnover',0.55,['refurb','decorating','tiling','flooring']),
  S('serviced-apartments','Serviced apartments / rooms',/serviced apartments?|guest rooms|en[\s-]?suite rooms|bedrooms? and suites/i,'facility',0.55,['bathroom','reactive-plumbing']),
  S('multiple-sites','Multiple sites / locations',/(\d+|several|multiple) (sites|locations|branches|offices|homes|nurseries|schools|hotels|centres|properties) across/i,'facility',0.6,['planned-plumbing']),
  S('developments','Developments / new builds',/(our|residential|managed|new[\s-]build) developments|developments (we|that we) (manage|look after|built)|new[\s-]build (homes|schemes|apartments)|apartment blocks? (we|that we) manage/i,'facility',0.35,['decorating','flooring']),
  S('premises','Commercial premises managed',/(commercial|office|retail|industrial) (premises|units|space)/i,'facility',0.45,['general']),
  S('role-property-manager','Property manager role',/property manager|head of property management|lettings? manager/i,'roles',0.45,[]),
  S('role-maintenance','Maintenance / facilities role',/maintenance (manager|coordinator|co-ordinator|team|operative)|facilities manager|estates manager|site manager/i,'roles',0.6,[]),
  S('inhouse','In-house maintenance team',/in[\s-]house (maintenance|team of (trades|engineers|operatives))|our own (maintenance|trades) team/i,'inhouse',0,[]),
  // Not demand: they SELL trades/maintenance (a competitor or a possible subcontracting partner, not a client).
  S('trades-provider','Provides trades / maintenance services itself',/(our|qualified|experienced|professional) (team of )?(plumbers|heating engineers|gas engineers|electricians|tradesmen|tradespeople|decorators)|gas safe registered (engineers|plumbers)|plumbing (and|&) heating (services|engineers|company)|we (are|'re) (a|an) (local )?(plumbing|building|maintenance|decorating|handyman) (company|firm|business)/i,'provider',0,[])
];
// A match inside a property advert ("potential for refurbishment", "new-build detached home") is about
// the property for sale, not the organisation — those occurrences are skipped.
const ADVERT_CONTEXT = /£\s?\d|\bbedroom|\bbed\b|\bSTPP\b|guide price|offers (in excess|over)|for sale|to let\b|pcm\b|per week|sq\.? ?ft|freehold|leasehold\b|chain free|read more/i;
const ADVERT_SENSITIVE = new Set(['refurbishment','developments','serviced-apartments','check-in-out','inspections','premises']);
// Extracts signals with the exact words found, so every claim can be checked.
function extractMaintenanceSignals(pages, at){
  at = at || new Date().toISOString();
  const found = {};
  (pages||[]).forEach(p=>{
    const text = p.text || LC.contentText(p.html||'');
    SIGNALS.forEach(s=>{
      if(found[s.key]) return;
      const rx = new RegExp(s.rx.source, s.rx.flags.includes('g') ? s.rx.flags : s.rx.flags+'g');
      for(const m of text.matchAll(rx)){
        const i = m.index||0;
        const snippet = text.slice(Math.max(0,i-70), Math.min(text.length, i+m[0].length+70)).replace(/\s+/g,' ').trim();
        if(ADVERT_SENSITIVE.has(s.key) && ADVERT_CONTEXT.test(text.slice(Math.max(0,i-120), Math.min(text.length, i+m[0].length+120)))) continue;
        found[s.key] = {key:s.key, label:s.label, category:s.category, weight:s.weight, services:s.services, snippet, source:p.url, checkedAt:at, status:STATUS.VERIFIED, confidence:0.9};
        break;
      }
    });
  });
  const signals = Object.values(found);
  const F = {};
  const src = (pages[0]||{}).url || '';
  F['sw.signals'] = makeFact(signals, STATUS.VERIFIED, 0.9, src, at, signals.length+' maintenance signals across '+pages.length+' pages');
  F['sw.pagesRead'] = makeFact(pages.map(p=>p.url), STATUS.VERIFIED, 1, src, at);
  // Self-reported footprint numbers → LIKELY ("stated on their website"), with the quote.
  const all = pages.map(p=>({url:p.url, text:p.text||LC.contentText(p.html||'')}));
  const grab = (rx, key, min, max, pick)=>{
    for(const p of all){ const m = p.text.match(rx); if(m){ const n = Number(String(pick(m)).replace(/,/g,'')); if(n>=min && n<=max){ const i = m.index||0;
      F[key] = makeFact(n, STATUS.LIKELY, 0.75, p.url, at, 'Stated on their website: "'+p.text.slice(Math.max(0,i-30), i+m[0].length+30).replace(/\s+/g,' ').trim()+'"'); return; } } }
  };
  grab(/(manage|managing|look after|looking after|portfolio of|responsible for)\s+(over |more than |around |approximately |some |nearly )?([\d,]{2,6})\+?\s*(residential |rental |managed )?(properties|homes|units|flats|apartments|tenancies|lettings|blocks)/i, 'sw.portfolioSize', 10, 100000, m=>m[3]);
  grab(/\b(\d{1,4})\s*(guest |en[\s-]?suite |luxury )?(bed)?rooms\b/i, 'sw.rooms', 8, 2000, m=>m[1]);
  grab(/\b(\d{2,4})[\s-]bed(ded)?\b(?! (house|flat|apartment|home for sale))/i, 'sw.beds', 10, 2000, m=>m[1]);
  grab(/\b(\d{1,3})\s+(branches|offices|locations|sites|care homes|homes|nurseries|schools|hotels|centres|venues|restaurants|gyms|clubs)\b/i, 'sw.sites', 2, 500, m=>m[1]);
  // Contractor status — only from their own wording.
  const has = k=>!!found[k];
  const ext = has('approved-contractors') || has('supplier-route') || has('subcontractors');
  const inh = has('inhouse');
  const status = inh && ext ? 'MIXED' : inh ? 'IN-HOUSE' : ext ? 'EVIDENCE OF EXTERNAL CONTRACTORS' : 'UNKNOWN';
  F['sw.contractorStatus'] = makeFact(status, status==='UNKNOWN'?STATUS.UNKNOWN:STATUS.LIKELY, status==='UNKNOWN'?0:0.75, src, at, status==='UNKNOWN'?'Nothing on their site says how repairs are staffed':'From their own wording');
  if(has('trades-provider')) F['sw.tradesProvider'] = makeFact(true, STATUS.VERIFIED, 0.85, found['trades-provider'].source, at, found['trades-provider'].snippet);
  if(has('supplier-route')) F['sw.supplierRoute'] = makeFact(true, STATUS.VERIFIED, 0.9, found['supplier-route'].source, at, found['supplier-route'].snippet);
  return {signals, facts:F};
}
// Pages worth reading on an organisation's site for maintenance evidence.
function maintenancePages(links, base){
  const host = LC.normaliseDomain(base);
  const same = (links||[]).filter(u=>LC.normaliseDomain(u)===host);
  // any path segment naming one of these topics, with or without .html/.php/.aspx
  const rx = /\/[^\/?#]*(landlord|property-management|management|services|lettings|maintenance|repair|tenant|resident|block|facilit|about|supplier|contractor|procurement|career|jobs|vacanc|our-homes|locations|sites|rooms|accommodation)[^\/?#]*(\.(html?|php|aspx?))?\/?(\?|#|$)/i;
  const skip = /\/(property|properties|listing|for-sale|to-rent|blog|news\/|tag|category|wp-content|login|account)(\/|-)/i;
  const scored = same.filter(u=>rx.test(u) && !skip.test(u)).map(u=>({u, s: /repair|maintenance|supplier|contractor|procurement|property-management|block/i.test(u)?3 : /landlord|services|management|facilit/i.test(u)?2 : 1}));
  return Array.from(new Set(scored.sort((a,b)=>b.s-a.s).map(x=>x.u))).slice(0,6);
}

/* ---------- settings ---------- */
function defaultSettings(){
  return {
    version:1, dailyQuantity:3,
    thresholds:{opportunity:80, confidence:80, minDemand:60, minRelationship:'HIGH', maxResearchAgeDays:14, contactCooldownDays:60, minKnownFacts:5},
    weights:{relationship:0.55, route:0.20, contact:0.15, demand:0.10},
    rpWeights:{demand:0.40, footprint:0.25, fit:0.20, strength:0.15},
    penalties:{outsideSecondary:10, singleCategory:8, contactedNoReply:5, verySmall:10, noDecisionMaker:4},
    diversity:{maxPerType:2},
    types: ORG_TYPES.filter(t=>t.group!=='public').map(t=>({id:t.id, enabled:['property-management','block-management','letting-agent','portfolio-landlord','build-to-rent','serviced-accommodation','student-accommodation','hotel','care-home','nursery','private-school','office-operator','commercial-landlord','fm-company','refurb-contractor','maintenance-company'].includes(t.id), priority:1})),
    geo:{basePostcode:'', base:null, coreMiles:8, secondaryMiles:15, maxMiles:25, densityMiles:3, mph:16, roadFactor:1.3,
      areas:[{id:'east-london', label:'East London', priority:100, prefixes:['E','IG']}, {id:'essex', label:'Essex', priority:100, prefixes:['RM','CM','SS','CO']}], defaultAreaPriority:50},
    services: SERVICES.map(s=>({id:s.id, offered:true})),
    capacity:{guard:'limit', amberPct:85, redPct:100, assumedJobsPerAccountMonth:2},
    capability:{pack:false, rates:false, slas:false, rams:false, bench:false, responseTracking:false, coordinator:false},
    assumptions:{minSampleForObserved:15},
    followUpDays:[2, 7, 21, 60],
    pipeline:{poolSize:60, enrichTop:25, researchTop:12, autoRun:false}
  };
}
function mergeSettings(stored){
  const d = defaultSettings(), s = Object.assign({}, d, stored||{});
  ['thresholds','weights','rpWeights','penalties','diversity','capacity','capability','assumptions','pipeline'].forEach(k=>{ s[k] = Object.assign({}, d[k], (stored&&stored[k])||{}); });
  s.geo = Object.assign({}, d.geo, (stored&&stored.geo)||{});
  if(!Array.isArray(s.geo.areas) || !s.geo.areas.length) s.geo.areas = d.geo.areas;
  const byId = l=>Object.fromEntries((l||[]).map(x=>[x.id,x]));
  const st = byId(stored&&stored.types), ss = byId(stored&&stored.services);
  s.types = d.types.map(t=>Object.assign({}, t, st[t.id]||{}));
  s.services = d.services.map(x=>Object.assign({}, x, ss[x.id]||{}));
  if(!Array.isArray(s.followUpDays) || !s.followUpDays.length) s.followUpDays = d.followUpDays;
  return s;
}

/* ---------- 1. maintenance demand ---------- */
function signalsOf(lead){ const f = fact(lead,'sw.signals'); return f && Array.isArray(f.value) ? f.value : []; }
function computeDemand(lead, typeId){
  const t = orgType(typeId);
  const sigs = signalsOf(lead).filter(s=>s.weight>0);
  const cats = {};
  sigs.forEach(s=>{ const w = s.weight*Math.min(1, s.confidence==null?0.9:s.confidence); if(!cats[s.category] || cats[s.category].w < w) cats[s.category] = {w, s}; });
  const catList = Object.keys(cats);
  const verifiedCats = catList.filter(c=>cats[c].s.status===STATUS.VERIFIED);
  let v = 1 - (1 - 0.45*t.prior) * catList.reduce((p,c)=>p*(1-cats[c].w), 1);
  let score = round(100*v);
  const corroborated = verifiedCats.length >= 2;
  if(!corroborated) score = Math.min(score, 60); // keywords alone are not proof
  return {score, prior:t.prior, categories:catList, corroborated, signals:sigs, top: catList.map(c=>cats[c].s)};
}

/* ---------- 2. footprint / scale (known parts only) ---------- */
function computeFootprint(lead){
  const parts = [];
  const add = (key, label, n, cap)=>{ if(n!=null) parts.push({key, label, value:n, points: round(100*log01(n, cap))}); };
  add('sw.portfolioSize','Properties managed', val(lead,'sw.portfolioSize'), 600);
  add('sw.rooms','Rooms', val(lead,'sw.rooms'), 150);
  add('sw.beds','Beds', val(lead,'sw.beds'), 120);
  add('sw.sites','Sites / branches', val(lead,'sw.sites') || val(lead,'company.branches'), 25);
  add('website.listingsCount','Active listings', val(lead,'website.listingsCount'), 120);
  if(!parts.length) return {score:null, parts};
  return {score: Math.max.apply(null, parts.map(p=>p.points)), parts};
}

/* ---------- 3. service fit + entry/expansion path ---------- */
function computeServiceFit(lead, typeId, settings, demand){
  const t = orgType(typeId);
  const offered = new Set((settings.services||[]).filter(s=>s.offered!==false).map(s=>s.id));
  const boost = {};
  (demand ? demand.signals : signalsOf(lead)).forEach(s=>s.services.forEach(id=>{ boost[id] = Math.max(boost[id]||0, s.weight*0.3); }));
  const scores = SERVICES.filter(s=>offered.has(s.id)).map(s=>({id:s.id, label:s.label, entry:!!s.entry, score: round(100*clamp((t.svc[s.id]==null?0.5:t.svc[s.id]) + (boost[s.id]||0), 0, 1))})).sort((a,b)=>b.score-a.score);
  const top = scores.slice(0,4);
  const score = top.length ? round(top.reduce((s,x)=>s+x.score,0)/top.length) : 0; // breadth of applicable services matters
  const entry = scores.filter(s=>s.entry)[0] || scores[0] || null;
  const expansion = scores.filter(s=>!entry || s.id!==entry.id).slice(0,3);
  return {score, services:scores, entry, expansion};
}

/* ---------- 4. business strength ---------- */
function computeStrength(lead){
  const parts = [];
  const age = val(lead,'company.ageYears'); if(age!=null) parts.push({label:'Company age', points: age<1?30 : age<3?55 : age<10?80 : 95});
  const rc = val(lead,'google.reviewCount'); if(rc!=null) parts.push({label:'Reviews', points: round(100*log01(rc,200))});
  const tm = val(lead,'website.teamSize'); if(tm!=null) parts.push({label:'Team size', points: tm<=2?40 : tm<=5?65 : tm<=15?85 : 95});
  const st = String(val(lead,'company.status')||''); if(st) parts.push({label:'Companies House status', points: /active/i.test(st)?80:10});
  if(!parts.length) return {score:null, parts};
  return {score: round(parts.reduce((s,p)=>s+p.points,0)/parts.length), parts};
}

/* ---------- 5. demand / buying signals ---------- */
const DEMAND_SIGNALS = [
  ['signals.hiring',20,'Hiring'], ['sw.hiringPropertyRoles',30,'Hiring property / maintenance staff'], ['signals.newOfficer',10,'New director appointed'],
  ['signals.newDevelopment',25,'New development'], ['sw.newBranch',25,'New branch / premises'], ['sw.portfolioGrowth',25,'Portfolio growing'],
  ['sw.supplierRoute',30,'Open supplier / contractor route'], ['sw.tender',35,'Live tender / contractor request'], ['sw.acquisition',20,'Acquisition / new contract'],
  ['sw.maintenanceComplaints',15,'Public complaints about repairs'], ['signals.newCompany',10,'Newly incorporated']
];
function computeDemandSignals(lead){
  const hits = [];
  DEMAND_SIGNALS.forEach(([k,pts,label])=>{ const f = fact(lead,k); if(f && f.value===true) hits.push({key:k, label: label+(f.status===STATUS.INFERRED?' (inferred)':''), points: f.status===STATUS.INFERRED?round(pts/2):pts, source:f.source, checkedAt:f.checkedAt, confidence:f.confidence}); });
  const g = fact(lead,'signals.listingGrowth'); if(g && Number(g.value)>=0.15) hits.push({key:'signals.listingGrowth', label:'Listings up '+round(g.value*100)+'%', points:15, source:g.source, checkedAt:g.checkedAt, confidence:g.confidence});
  return {score: Math.min(100, hits.reduce((s,h)=>s+h.points,0)), signals:hits};
}

/* ---------- 6. contactability ---------- */
function bestContact(lead, typeId){
  const t = orgType(typeId);
  const roles = t.roles.map(r=>r.toLowerCase());
  const rank = role=>{ const r = String(role||'').toLowerCase(); const i = roles.findIndex(x=>r.includes(x.toLowerCase())); return i<0 ? (/director|owner|founder|managing/.test(r)?roles.length : roles.length+2) : i; };
  const stat = c=>c.status===STATUS.VERIFIED?0 : c.status===STATUS.LIKELY?1 : 2;
  return (lead.contacts||[]).filter(c=>c && c.name).slice().sort((a,b)=>(rank(a.role)*3+stat(a)) - (rank(b.role)*3+stat(b)))[0] || null;
}
function computeContact(lead, typeId){
  const dm = bestContact(lead, typeId);
  const parts = [];
  if(dm){ const right = orgType(typeId).roles.some(r=>String(dm.role||'').toLowerCase().includes(r.toLowerCase()));
    parts.push({label:(right?'Right-role contact':'Named contact')+' ('+dm.status+')', points: dm.status===STATUS.VERIFIED ? (right?40:30) : dm.status===STATUS.LIKELY ? 20 : 0}); }
  if((lead.contacts||[]).some(c=>c.phone)) parts.push({label:'Direct phone', points:20}); else if(lead.phone) parts.push({label:'Business phone', points:15});
  if((lead.contacts||[]).some(c=>c.email && c.emailStatus===STATUS.VERIFIED)) parts.push({label:'Published personal email', points:20}); else if(lead.email) parts.push({label:'Published business email', points:12});
  if(val(lead,'sw.supplierRoute')===true) parts.push({label:'Supplier / contractor application route', points:15});
  if((lead.contacts||[]).some(c=>c.linkedin)) parts.push({label:'LinkedIn (manual)', points:5});
  return {score: Math.min(100, parts.reduce((s,p)=>s+p.points,0)), parts, decisionMaker:dm};
}

/* ---------- 7. geography: distance, travel estimate, density, route/area value ---------- */
function miles(a, b){ const R = 3958.8, rad = x=>x*Math.PI/180; const dLat = rad(b[0]-a[0]), dLng = rad(b[1]-a[1]); const h = Math.sin(dLat/2)**2 + Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dLng/2)**2; return 2*R*Math.asin(Math.sqrt(h)); }
function computeGeo(lead, settings, ctx){
  const G = settings.geo;
  const area = LC.postcodeArea(lead.postcode);
  const grp = LC.outsideTargetCounty(lead) ? null : G.areas.find(a=>a.prefixes.includes(area));
  const areaPri = grp ? grp.priority : G.defaultAreaPriority;
  const here = (lead.lat!=null && lead.lng!=null) ? [lead.lat, lead.lng] : null;
  const base = G.base && G.base.lat!=null ? [G.base.lat, G.base.lng] : null;
  if(!here) return {score:null, known:false, area: grp?grp.label:(area||'Unknown'), reason:'No location yet'};
  let dist = null, band = 'unknown', bandPts = null, minutes = null;
  if(base){
    dist = Math.round(miles(base, here)*10)/10;
    minutes = Math.round(dist*G.roadFactor/G.mph*60);
    band = dist<=G.coreMiles?'core' : dist<=G.secondaryMiles?'secondary' : dist<=G.maxMiles?'outer' : 'outside';
    bandPts = {core:100, secondary:70, outer:40, outside:0}[band];
  }
  const pts = (ctx && ctx.jobPoints) || [];
  const nearJobs = pts.filter(p=>miles(here, [p.lat,p.lng]) <= G.densityMiles);
  const nearAccounts = nearJobs.filter(p=>p.account).length;
  const density = Math.min(1, (nearJobs.length + 2*nearAccounts)/6);
  // No base set → area priority only (and a confidence hit).
  // Distance band carries most of it; density is a bonus (a new business has few jobs yet, so it can't be a requirement).
  const score = bandPts==null ? round(areaPri*0.7 + density*15) : round(bandPts*0.75 + areaPri*0.10 + density*100*0.15);
  return {score, known:true, hasBase:!!base, distance:dist, minutes, band, area: grp?grp.label:(area||'Outside core areas'), nearJobs:nearJobs.length, nearAccounts, density: round(density*100)};
}

/* ---------- 8. relationship potential (geometric mean over known parts) ---------- */
function relationshipPotential(parts, w){
  const items = [['demand',parts.demand], ['footprint',parts.footprint], ['fit',parts.fit], ['strength',parts.strength]].filter(([,v])=>v!=null);
  if(!items.length) return {score:0, cls:'LOW'};
  const wsum = items.reduce((s,[k])=>s+w[k],0);
  const g = Math.exp(items.reduce((s,[k,v])=>s + (w[k]/wsum)*Math.log(Math.max(1,v)), 0));
  const score = round(g);
  return {score, cls: score>=80?'VERY HIGH' : score>=65?'HIGH' : score>=50?'MEDIUM' : 'LOW', used: items.map(([k])=>k)};
}
const CLASS_RANK = {'LOW':0,'MEDIUM':1,'HIGH':2,'VERY HIGH':3};

function relationshipGoal(typeId, contractorStatus){
  const t = orgType(typeId);
  if(contractorStatus==='IN-HOUSE') return {id:'overflow', label:GOALS.overflow};
  if(contractorStatus==='MIXED') return {id:'overflow', label:GOALS.overflow};
  if(t.goal==='subcontractor') return {id:'subcontractor', label:GOALS.subcontractor};
  if(contractorStatus==='EVIDENCE OF EXTERNAL CONTRACTORS') return {id:'approved', label:GOALS.approved};
  return {id:t.goal, label:GOALS[t.goal]};
}

/* ---------- 9. disqualification ---------- */
function disqualify(lead, typeId, settings, ctx, geo){
  ctx = ctx||{};
  const out = [], add = (code, reason)=>out.push({code, reason});
  const st = String(val(lead,'company.status')||'').toLowerCase();
  if(/dissolved|liquidation|closed|administration|struck/.test(st)) add('closed','Business appears closed (Companies House: '+st+').');
  if(ctx.duplicateOf) add('duplicate','Duplicate of '+ctx.duplicateOf+'.');
  if(lead.suppressed || (ctx.suppressed && LC.dedupeKeys(lead).some(k=>ctx.suppressed.has(k)))) add('do-not-contact','On the do-not-contact list.');
  if(ctx.customerNames && ctx.customerNames.has(LC.normaliseName(lead.name)) && !ctx.isAccount) add('existing-client','Already a SteadyWorks customer — manage it under Accounts.');
  const ts = settings.types.find(x=>x.id===typeId); if(ts && ts.enabled===false) add('type-off','Organisation type switched off in settings.');
  const opp = ctx.opp||{};
  if(opp.lastContactedAt){ const d = LC.daysBetween(opp.lastContactedAt, ctx.now||new Date()); if(d!=null && d < settings.thresholds.contactCooldownDays) add('recent-contact','Contacted '+d+' days ago (cooldown '+settings.thresholds.contactCooldownDays+').'); }
  if(geo && geo.band==='outside') add('outside-area', geo.distance+' miles from base — beyond your '+settings.geo.maxMiles+'-mile maximum.');
  if(!lead.phone && !lead.email && !(lead.contacts||[]).some(c=>c.phone||c.email) && val(lead,'website.hasContactForm')!==true && val(lead,'sw.supplierRoute')!==true) add('no-contact-route','No phone, email, form or supplier route found.');
  const knownCount = Object.keys(lead.facts||{}).filter(k=>known(lead,k)).length;
  if(knownCount < settings.thresholds.minKnownFacts) add('insufficient-evidence','Only '+knownCount+' facts — not enough to judge.');
  if(val(lead,'sw.tradesProvider')===true && orgType(typeId).group!=='construction') add('trades-provider','Provides trades / maintenance itself — a competitor or possible subcontracting partner, not a client.');
  return out;
}

/* ---------- 10. the full SteadyWorks score ---------- */
function opportunityType(lead, opp){ return (opp && opp.orgType) || lead.swType || typeFromIndustry(lead.industry); }
function scoreOrg(lead, settings, ctx){
  settings = settings || defaultSettings(); ctx = ctx || {};
  const typeId = opportunityType(lead, ctx.opp);
  const t = orgType(typeId);
  const demand = computeDemand(lead, typeId);
  const footprint = computeFootprint(lead);
  const fit = computeServiceFit(lead, typeId, settings, demand);
  const strength = computeStrength(lead);
  const dsig = computeDemandSignals(lead);
  const contact = computeContact(lead, typeId);
  const geo = computeGeo(lead, settings, ctx);
  const rp = relationshipPotential({demand:demand.score, footprint:footprint.score, fit:fit.score, strength:strength.score}, settings.rpWeights);
  const W = settings.weights, Pn = settings.penalties;
  let raw = W.relationship*rp.score + W.route*(geo.score==null?0:geo.score) + W.contact*contact.score + W.demand*dsig.score;
  const pens = [];
  if(geo.band==='outer') pens.push({code:'outside-secondary', points:Pn.outsideSecondary, reason:'Beyond your '+settings.geo.secondaryMiles+'-mile secondary radius.'});
  if(demand.categories.length && !demand.corroborated) pens.push({code:'single-category', points:Pn.singleCategory, reason:'Maintenance evidence comes from only one kind of signal.'});
  if(ctx.opp && ctx.opp.lastContactedAt && !ctx.opp.replied) pens.push({code:'contacted-no-reply', points:Pn.contactedNoReply, reason:'Contacted before without a reply.'});
  if(footprint.score!=null && footprint.score<25 && demand.score<50) pens.push({code:'very-small', points:Pn.verySmall, reason:'Very small footprint and little maintenance demand.'});
  if(!contact.decisionMaker) pens.push({code:'no-decision-maker', points:Pn.noDecisionMaker, reason:'No named contact yet.'});
  raw -= pens.reduce((s,p)=>s+p.points,0);
  const opportunity = clamp(round(raw), 0, 100);
  const cs = val(lead,'sw.contractorStatus') || 'UNKNOWN';
  const goal = relationshipGoal(typeId, cs);
  const dq = disqualify(lead, typeId, settings, ctx, geo);
  const confidence = computeConfidence(lead, demand, footprint, geo, contact);
  const r = {leadId:lead.id, biz:'sw', typeId, typeLabel:t.label, group:t.group, opportunity, band: opportunity>=80?'HOT':opportunity>=65?'STRONG':opportunity>=50?'WARM':'LOW',
    confidence: confidence.score, confidenceDetail: confidence, relationship: rp, demand, footprint, fit, strength, demandSignals: dsig, contact, geo, penalties: pens,
    contractorStatus: cs, goal, disqualifications: dq, channels: LC.allowedChannels(lead),
    breakdown:{relationship: round(W.relationship*rp.score), route: round(W.route*(geo.score||0)), contact: round(W.contact*contact.score), demand: round(W.demand*dsig.score), penalties: -pens.reduce((s,p)=>s+p.points,0)}};
  r.gate = gate(lead, r, settings, ctx);
  r.why = whyThis(lead, r);
  return r;
}
function computeConfidence(lead, demand, footprint, geo, contact){
  const used = [];
  ['company.status','company.ageYears','sw.portfolioSize','sw.rooms','sw.beds','sw.sites','sw.contractorStatus'].forEach(k=>{ const f = fact(lead,k); if(f) used.push(factConf(f)); });
  demand.top.forEach(s=>used.push(Math.min(s.confidence==null?0.9:s.confidence, s.status===STATUS.VERIFIED?1:0.6)));
  const critical = [
    known(lead,'company.status') || known(lead,'website.reachable'),
    demand.corroborated,
    !!(geo.known && geo.hasBase),
    !!(lead.phone || lead.email || (lead.contacts||[]).some(c=>c.phone||c.email)),
    footprint.score!=null
  ];
  const coverage = critical.filter(Boolean).length/critical.length;
  const mean = used.length ? used.reduce((s,x)=>s+x,0)/used.length : 0;
  const knownCount = Object.keys(lead.facts||{}).filter(k=>known(lead,k)).length;
  const depth = Math.min(1, knownCount/10);
  return {score: round(100*mean*Math.sqrt(coverage)*(0.7+0.3*depth)), coverage, criticalMissing:['Business active','Corroborated maintenance evidence','Distance from base','Contact route','Footprint / scale'].filter((_,i)=>!critical[i])};
}
function gate(lead, r, settings, ctx){
  const T = settings.thresholds, fails = [];
  r.disqualifications.forEach(d=>fails.push({code:d.code, reason:d.reason, hard:true}));
  if(r.opportunity < T.opportunity) fails.push({code:'opportunity', reason:'Opportunity '+r.opportunity+' < '+T.opportunity, threshold:true});
  if(r.confidence < T.confidence) fails.push({code:'confidence', reason:'Confidence '+r.confidence+'% < '+T.confidence+'%', threshold:true});
  if(r.demand.score < T.minDemand) fails.push({code:'demand', reason:'Maintenance demand '+r.demand.score+' < '+T.minDemand, threshold:true});
  if(!r.demand.corroborated) fails.push({code:'uncorroborated', reason:'Maintenance evidence not corroborated (needs 2+ kinds of verified signal).'});
  if((CLASS_RANK[r.relationship.cls]||0) < (CLASS_RANK[T.minRelationship]||0)) fails.push({code:'relationship', reason:'Relationship potential '+r.relationship.cls+' (needs '+T.minRelationship+').', threshold:true});
  if(!r.geo.known || !r.geo.hasBase) fails.push({code:'no-geo', reason: r.geo.hasBase===false ? 'Set your base postcode in Settings to score distance.' : 'Location unknown.'});
  if(!(lead.phone || (r.channels.email && (lead.email || (lead.contacts||[]).some(c=>c.email))) || val(lead,'sw.supplierRoute')===true)) fails.push({code:'no-legal-channel', reason:'No contact channel allowed for this subscriber type.'});
  if(!lead.researchedAt) fails.push({code:'not-researched', reason:'Maintenance research hasn\'t run yet.'});
  else { const age = LC.daysBetween(lead.researchedAt, (ctx&&ctx.now)||new Date()); if(age!=null && age > T.maxResearchAgeDays) fails.push({code:'stale', reason:'Research is '+age+' days old.'}); }
  if(ctx && ctx.capacity && ctx.capacity.level==='red' && settings.capacity.guard==='limit'){
    const svc = r.fit.entry && r.fit.entry.id;
    if(!(ctx.capacity.benchServices||[]).includes(svc)) fails.push({code:'capacity', reason:'Capacity is red and there\'s no subcontractor bench for '+(r.fit.entry?r.fit.entry.label:'this work')+'.', threshold:true});
  }
  return {pass: fails.length===0, failures: fails, nearMiss: fails.length>0 && fails.every(f=>f.threshold)};
}
function whyThis(lead, r){
  const out = [];
  r.demand.top.slice(0,4).forEach(s=>out.push(s.label));
  r.footprint.parts.forEach(p=>out.push(p.label+': '+p.value+(fact(lead,p.key)&&fact(lead,p.key).status===STATUS.LIKELY?' (stated on their site)':'')));
  if(val(lead,'company.status')) out.push(/active/i.test(val(lead,'company.status'))?'Active business (Companies House)':'Companies House: '+val(lead,'company.status'));
  r.demandSignals.signals.slice(0,2).forEach(s=>out.push(s.label));
  if(r.geo.distance!=null) out.push(r.geo.distance+' miles from base ('+r.geo.band+' territory)'+(r.geo.nearJobs?' · '+r.geo.nearJobs+' SteadyWorks job'+(r.geo.nearJobs===1?'':'s')+' nearby':''));
  if(r.contact.decisionMaker) out.push('Contact: '+r.contact.decisionMaker.role);
  return Array.from(new Set(out)).slice(0,8);
}

/* ---------- 11. daily selection ---------- */
function selectDaily(leads, settings, ctx){
  settings = settings||defaultSettings(); ctx = ctx||{};
  const opps = ctx.opps || {};
  const scored = leads.map(l=>({lead:l, r: scoreOrg(l, settings, Object.assign({}, ctx, {opp: opps[l.id]||null}))}));
  const exclude = ctx.excludeIds || new Set(); // e.g. already in SteadyFlow's list today
  const recent = ctx.recentlySurfaced || new Set();
  const passers = scored.filter(x=>x.r.gate.pass && !exclude.has(x.lead.id)).sort((a,b)=>b.r.opportunity-a.r.opportunity || b.r.confidence-a.r.confidence);
  const selected = [], per = {};
  passers.filter(x=>!recent.has(x.lead.id)).concat(passers.filter(x=>recent.has(x.lead.id))).forEach(x=>{
    if(selected.length >= settings.dailyQuantity) return;
    if((per[x.r.typeId]||0) >= settings.diversity.maxPerType) return;
    per[x.r.typeId] = (per[x.r.typeId]||0)+1; selected.push(x);
  });
  selected.forEach((x,i)=>{ x.rank = i+1; x.reason = 'Relationship '+x.r.relationship.cls+' ('+x.r.relationship.score+') · demand '+x.r.demand.score+' · '+(x.r.geo.distance!=null?x.r.geo.distance+' mi':'location ?')+(x.r.contact.decisionMaker?' · '+x.r.contact.decisionMaker.role:''); });
  return {selected, passed: passers.length, considered: scored.length, nearMisses: scored.filter(x=>x.r.gate.nearMiss).sort((a,b)=>b.r.opportunity-a.r.opportunity).slice(0,5), scored};
}

/* ---------- 12. outreach (relationship-first, never a hard sell) ---------- */
function firstName(n){ return String(n||'').trim().split(/\s+/)[0]||''; }
function contextLine(lead, r){
  const s = r.demand.top.map(x=>x.key);
  const area = lead.area || r.geo.area || 'locally';
  if(s.includes('fully-managed') || s.includes('property-management')) return 'saw you handle fully managed lettings and property management around '+area;
  if(s.includes('block-management')) return 'saw you look after block management around '+area;
  if(s.includes('facilities-management')) return 'saw you deliver facilities management around '+area;
  if(r.typeId==='hotel') return 'was looking at independent hotels around '+area+(val(lead,'sw.rooms')?' and saw you run '+val(lead,'sw.rooms')+' rooms':'');
  if(r.typeId==='care-home') return 'was looking at care providers around '+area+(val(lead,'sw.beds')?' and saw your '+val(lead,'sw.beds')+'-bed home':'');
  if(r.group==='construction') return 'saw the refurbishment and maintenance work you deliver around '+area;
  return 'came across '+lead.name+' while looking at organisations around '+area;
}
const QUESTIONS = ['Who looks after contractors for repairs and maintenance?','How do you onboard new contractors — is there an application or approved list?',
  'Would a backup or overflow contractor be useful for busy periods or emergencies?','Can I send over our capability information (insurance, services, response times)?'];
function outreach(lead, r, sender){
  sender = sender || {name:'Lewis', company:'SteadyWorks'};
  const dm = r.contact.decisionMaker, fn = dm ? firstName(dm.name) : '';
  const hi = fn ? 'Hi '+fn : 'Hi';
  if(!r.demand.top.length) return {ok:false, reason:'No maintenance evidence to anchor a relevant message yet — research first.'};
  const ctxLine = contextLine(lead, r);
  const entry = r.fit.entry ? r.fit.entry.label.toLowerCase().replace(/ \(.*\)/,'') : 'maintenance';
  const ask = r.contractorStatus==='EVIDENCE OF EXTERNAL CONTRACTORS' ? 'I wanted to ask how you add local contractors to your approved list'
    : r.contractorStatus==='IN-HOUSE' || r.contractorStatus==='MIXED' ? 'I appreciate you have your own team — I wanted to ask whether you use outside contractors for overflow or out-of-hours work'
    : r.goal.id==='subcontractor' ? 'I wanted to ask whether you take on local subcontractors for '+entry+' and decorating'
    : 'I wanted to ask whether you keep a list of local contractors for '+entry+' and maintenance, or overflow work';
  const call = hi+', '+sender.name+' from '+sender.company+'. I '+ctxLine+'. '+ask+'? '+(fn?'':'Who would be the best person to speak to about that?');
  const subject = val(lead,'sw.supplierRoute')===true ? 'Contractor application — '+sender.company : 'Local '+entry+' & maintenance support — '+(lead.area||r.geo.area||'East London & Essex');
  const body = [hi+',','', 'I '+ctxLine+'. '+ask+'?','',
    sender.company+' covers '+r.fit.services.slice(0,4).map(s=>s.label.toLowerCase().replace(/ \(.*\)/,'')).join(', ')+' across East London and Essex. Happy to send our insurance, accreditation and response-time details so you have us on file.','',
    'Would it be useful if I sent that over, or is there someone else who manages contractors?','', sender.name, sender.company,'','If you\'d rather not hear from us again, just reply and say so.'].join('\n');
  const whatsapp = r.channels.whatsapp ? hi+' — '+sender.name+' from '+sender.company+'. I '+ctxLine+'. '+ask+'? (Happy to leave it there if not — just say.)' : null;
  const linkedin = hi+', I '+ctxLine+'. I run '+sender.company+' locally — '+r.fit.services.slice(0,3).map(s=>s.label.toLowerCase().replace(/ \(.*\)/,'')).join(', ')+'. Would be good to connect in case you ever need a reliable backup contractor.';
  const approach = [];
  if(lead.phone || (dm&&dm.phone)) approach.push('Call');
  approach.push('contractor introduction');
  if(r.channels.email && (lead.email || (dm&&dm.email))) approach.push('capability email');
  if(val(lead,'sw.supplierRoute')===true) approach.push('supplier application');
  return {ok:true, call, email:{subject, body}, whatsapp, linkedin, approach: approach.join(' → '), questions: QUESTIONS,
    followUp: ['Day 0 — call; if no answer, send the capability email','Day 2 — follow-up call; ask who manages contractors','Day 7 — send capability pack / complete any supplier application','Day 21 — check in: any overflow or void work coming up?','Day 60 — light touch; review whether to mark dormant']};
}

/* ---------- 13. dossier (one-page brief) ---------- */
function dossier(lead, r, sfResult){
  const sigs = r.demand.signals;
  return {
    company:{name:lead.name, type:r.typeLabel, area: lead.area||r.geo.area, website: lead.website, branches: val(lead,'sw.sites') || val(lead,'company.branches') || null},
    whatTheyDo: r.typeLabel+' in '+(lead.area||r.geo.area||'your area')+'.',
    footprint: r.footprint.parts.length ? r.footprint.parts.map(p=>({label:p.label, value:p.value, note:(fact(lead,p.key)||{}).note||''})) : [],
    whyNeedUs: r.why,
    signals: sigs.map(s=>({label:s.label, quote:s.snippet, source:s.source, checkedAt:s.checkedAt, category:s.category})),
    services:{primary: r.fit.entry, expansion: r.fit.expansion},
    goal: r.goal.label, contractorStatus: r.contractorStatus,
    contact: r.contact.decisionMaker, crossBusiness: sfResult ? crossBusiness(r, sfResult) : null
  };
}

/* ---------- 14. relationship CRM stages ---------- */
const STAGES = [
  {id:'discovered', label:'Discovered'}, {id:'researching', label:'Researching'}, {id:'qualified', label:'Qualified'}, {id:'ready', label:'Ready to Contact'},
  {id:'introduced', label:'Introduced', contacted:true}, {id:'contact-made', label:'Contact Made', contacted:true}, {id:'dm-found', label:'Decision Maker Found', contacted:true},
  {id:'capability-sent', label:'Capability Sent', contacted:true}, {id:'follow-up', label:'Follow Up', contacted:true}, {id:'meeting', label:'Meeting', contacted:true, active:true},
  {id:'supplier-application', label:'Supplier Application', contacted:true, active:true}, {id:'approved', label:'Approved Contractor', contacted:true, active:true},
  {id:'first-job', label:'First Job', contacted:true, account:true}, {id:'active-account', label:'Active Account', contacted:true, account:true},
  {id:'dormant', label:'Dormant', contacted:true}, {id:'lost', label:'Lost', contacted:true}
];
const CONTACTED = STAGES.filter(s=>s.contacted).map(s=>s.id);
function preContactStage(lead, r){ if(LC.activeDisqualifications(lead, r).length) return 'rejected'; if(r.gate.pass) return 'ready'; if(lead.researchedAt) return 'qualified'; if(lead.auditedAt) return 'researching'; return 'discovered'; }
// Conversion funnel from stage history (touches with outcome "stage:<id>").
const FUNNEL = [['contacted','Contacted',['introduced','contact-made','dm-found','capability-sent','follow-up','meeting','supplier-application','approved','first-job','active-account']],
  ['conversation','Conversation',['contact-made','dm-found','capability-sent','meeting','supplier-application','approved','first-job','active-account']],
  ['supplier','Supplier opportunity',['capability-sent','meeting','supplier-application','approved','first-job','active-account']],
  ['approved','Approved',['approved','first-job','active-account']], ['first-job','First job',['first-job','active-account']], ['recurring','Recurring account',['active-account']]];
function relationshipFunnel(stageHistories, minSample){
  minSample = minSample || 15;
  const counts = FUNNEL.map(([id,label,stages])=>({id, label, n: stageHistories.filter(h=>h.some(s=>stages.includes(s))).length}));
  return counts.map((c,i)=>{ const prev = i ? counts[i-1].n : null; return Object.assign(c, {rate: prev ? c.n/prev : null, ci: prev ? LC.wilson(c.n, prev) : null, sufficient: prev==null || prev>=minSample}); });
}

/* ---------- 15. accounts ---------- */
function accountMetrics(customer, jobs, invoices, now){
  now = now ? new Date(now) : new Date();
  const js = jobs.filter(j=>j.customerId===customer.id || (!j.customerId && String(j.customerName||'').trim().toLowerCase()===String(customer.name||'').trim().toLowerCase()));
  const done = js.filter(j=>['completed','invoiced'].includes(j.status));
  const inv = invoices.filter(i=>i.customerId===customer.id || js.some(j=>j.id===i.jobId));
  const total = i=>Number(i.total) || (Array.isArray(i.lineItems||i.items) ? (i.lineItems||i.items).reduce((s,x)=>s+(Number(x.qty||x.quantity||1)*Number(x.rate||x.price||x.unitPrice||0)),0) : 0);
  const revenue = done.reduce((s,j)=>s+(Number(j.actualRevenue)||Number(j.expectedRevenue)||0),0);
  const cost = done.reduce((s,j)=>s+(j.costLines||[]).reduce((t,c)=>t+(Number(c.actual)||Number(c.budget)||0),0),0);
  const paid = inv.filter(i=>i.paidAt && i.createdAt);
  const avgPayDays = paid.length ? round(paid.reduce((s,i)=>s+Math.max(0,(new Date(i.paidAt)-new Date(i.createdAt))/86400000),0)/paid.length) : null;
  const dates = js.map(j=>j.endDate||j.startDate).filter(Boolean).sort();
  const last = dates[dates.length-1] || null;
  const daysSince = last ? Math.floor((now - new Date(last))/86400000) : null;
  const props = Array.from(new Set(js.map(j=>String(j.address||'').trim()).filter(Boolean)));
  const recent = js.filter(j=>(j.startDate||'') >= new Date(now.getTime()-120*86400000).toISOString().slice(0,10)).length;
  const recurring = recent>=2;
  const strength = js.length===0 ? 'New' : recurring && (daysSince==null || daysSince<45) ? 'Strong' : daysSince!=null && daysSince>90 ? 'Cooling' : 'Building';
  return {jobs: js.length, completed: done.length, revenue: Math.round(revenue), profit: Math.round(revenue-cost), margin: revenue ? Math.round((revenue-cost)/revenue*100) : null,
    avgPayDays, lastJob:last, daysSinceJob:daysSince, properties: props, recurring, strength, revenuePerJob: done.length ? Math.round(revenue/done.length) : null};
}
function crossSell(typeId, servicesUsed, settings){
  const t = orgType(typeId);
  const used = new Set(servicesUsed||[]);
  return SERVICES.filter(s=>!used.has(s.id) && (t.svc[s.id]||0)>=0.7 && (settings.services||[]).some(x=>x.id===s.id && x.offered!==false)).sort((a,b)=>(t.svc[b.id]||0)-(t.svc[a.id]||0)).slice(0,4);
}

/* ---------- 16. capacity & growth stage ---------- */
// Inputs are plain numbers/arrays so the browser and the server can both call it.
function capacity(o, settings){
  const C = settings.capacity;
  const weekly = Math.max(0, Number(o.capacityPerWeek)||0);
  const booked = Number(o.jobsNext14)||0;
  const recurringLoad = (Number(o.activeAccounts)||0) * (o.observedJobsPerAccountMonth!=null ? o.observedJobsPerAccountMonth : C.assumedJobsPerAccountMonth) * 12/52;
  const load = booked/2 + recurringLoad;
  const util = weekly ? Math.round(load/weekly*100) : null;
  const level = util==null ? 'unknown' : util>=C.redPct ? 'red' : util>=C.amberPct ? 'amber' : 'green';
  const trades = o.subcontractorTrades||[];
  const benchServices = SERVICES.map(s=>s.id).filter(id=>{
    if(['reactive-plumbing','planned-plumbing','bathroom'].includes(id)) return trades.some(t=>/plumb|heating|gas/i.test(t));
    if(['decorating','void'].includes(id)) return trades.some(t=>/decor|paint/i.test(t));
    if(['tiling'].includes(id)) return trades.some(t=>/til/i.test(t));
    if(['flooring'].includes(id)) return trades.some(t=>/floor|carpet/i.test(t));
    if(['general','external','refurb'].includes(id)) return trades.some(t=>/handy|general|maint|build|carpent/i.test(t));
    if(id==='gardening') return trades.some(t=>/garden|landscap/i.test(t));
    return false; });
  const flags = [];
  const pipe = o.pipelineByService||{};
  if(level==='red' || level==='amber') flags.push({level, text:'Workload at '+util+'% of capacity — '+(level==='red'?'hold new recurring commitments until capacity is added.':'line up extra capacity before taking on more accounts.')});
  if((pipe['reactive-plumbing']||0)+(pipe['planned-plumbing']||0) >= 3 && !benchServices.includes('reactive-plumbing')) flags.push({level:'amber', text:'Plumbing pipeline growing with no plumbing subcontractor — consider onboarding another plumber.'});
  if((pipe.decorating||0)+(pipe.void||0) >= 3 && !benchServices.includes('decorating')) flags.push({level:'amber', text:'Decorating / void pipeline increasing — build a decorator subcontractor bench.'});
  if((o.emergencyAccounts||0) >= 2) flags.push({level:'amber', text:'Several accounts expect emergency response — consider dedicated reactive-maintenance coverage.'});
  if(!weekly) flags.push({level:'amber', text:'Set your weekly capacity in Targets → SteadyWorks capacity so this indicator can work.'});
  return {weekly, load: Math.round(load*10)/10, utilisation: util, level, flags, benchServices, recurringLoad: Math.round(recurringLoad*10)/10, assumption: o.observedJobsPerAccountMonth==null};
}
const GROWTH = [
  {stage:1, label:'Owner operated', focus:['3 quality relationships a day','Build the subcontractor database','Win the first recurring accounts'], checks:['bench']},
  {stage:2, label:'Regular commercial work', focus:['Standard commercial rates','Commercial capability pack','Job SLAs','Supplier documents (insurance, RAMS)','Subcontractor bench','Central scheduling'], checks:['pack','rates','slas','rams','bench']},
  {stage:3, label:'Multiple active accounts', focus:['Dedicated contractors','Job allocation','Commercial invoicing & account reporting','Response-time tracking','Quality control'], checks:['pack','rates','slas','rams','bench','responseTracking']},
  {stage:4, label:'Maintenance operation', focus:['Maintenance coordinator','Dedicated reactive team','Planned maintenance contracts','Account management','Supplier frameworks / larger FM contracts'], checks:['pack','rates','slas','rams','bench','responseTracking','coordinator']}
];
const CHECK_LABELS = {pack:'Commercial capability pack', rates:'Standard commercial rates', slas:'Job SLAs / response times', rams:'Supplier documents (insurance, RAMS) current', bench:'Subcontractor bench (2+ trades)', responseTracking:'Response-time tracking', coordinator:'Maintenance coordinator'};
function growthStage(o, settings){
  const a = Number(o.activeAccounts)||0, rec = Number(o.recurringRevenueMonthly)||0, subs = Number(o.subcontractorsUsed)||0;
  const stage = a>=10 ? 4 : (a>=5 || subs>=3) ? 3 : (a>=2 || rec>0) ? 2 : 1;
  const g = GROWTH[stage-1], next = GROWTH[stage] || null;
  const cap = Object.assign({}, settings.capability, {rams: settings.capability.rams || !!o.insuranceCurrent, bench: settings.capability.bench || subs>=2});
  const checks = (next||g).checks.map(k=>({key:k, label:CHECK_LABELS[k], done:!!cap[k]}));
  return {stage, label:g.label, focus:g.focus, next: next ? {stage:next.stage, label:next.label} : null, checks,
    warning: checks.filter(c=>!c.done).length && a>=1 ? 'Before more accounts: '+checks.filter(c=>!c.done).map(c=>c.label).join(' · ') : ''};
}

/* ---------- 17. shared intelligence with SteadyFlow ---------- */
function crossBusiness(swR, sfR){
  if(!sfR) return null;
  const sw = swR.opportunity, sf = sfR.leadScore;
  const entry = sw>=sf ? 'sw' : 'sf';
  return {sw, sf, entry, note: 'Lead with '+(entry==='sw'?'SteadyWorks ('+swR.goal.label.toLowerCase()+')':'SteadyFlow ('+(sfR.offer||'digital')+')')+'. Don\'t pitch both at once — raise the other once trust exists.'};
}
function crossSellFlags(swStage, swR, sfStage, sfR){
  const flags = [];
  if(['first-job','active-account'].includes(swStage) && sfR && sfR.leadScore>=65) flags.push({to:'sf', text:'Potential SteadyFlow introduction — '+(sfR.offer||'digital opportunity')+' (score '+sfR.leadScore+').'});
  if(sfStage==='won' && swR && (CLASS_RANK[swR.relationship.cls]||0)>=2) flags.push({to:'sw', text:'Potential SteadyWorks introduction — '+swR.goal.label.toLowerCase()+' (relationship '+swR.relationship.cls+').'});
  return flags;
}

/* ---------- 18. MOCK organisations (development / testing only) ---------- */
function mockOrgs(now){
  const t = new Date(now||Date.now()), ago = d=>new Date(t.getTime()-d*86400000).toISOString();
  const V = (v,c,s,n)=>makeFact(v, STATUS.VERIFIED, c==null?0.9:c, s||'https://example.com', ago(1), n);
  const L = (v,n)=>makeFact(v, STATUS.LIKELY, 0.75, 'https://example.com/about', ago(1), n);
  const sig = (keys, url)=>keys.map(k=>{ const s = SIGNALS.find(x=>x.key===k); return {key:k, label:s.label, category:s.category, weight:s.weight, services:s.services, snippet:'(MOCK) …'+s.label.toLowerCase()+'…', source:url||'https://example.com/services', checkedAt:ago(1), status:'VERIFIED', confidence:0.9}; });
  const base = o=>Object.assign({mock:true, scope:['sw'], discoveredAt:ago(8), lastCheckedAt:ago(1), auditedAt:ago(2), researchedAt:ago(1), subscriberType:'corporate', contacts:[], facts:{}}, o);
  return [
    base({id:'mock-sw-1', name:'MOCK Example Property Management', swType:'property-management', industry:'letting-agent', area:'Romford', postcode:'RM1 3AA', lat:51.5768, lng:0.1801, website:'https://example-pm.example.com', phone:'01708 000101', email:'maintenance@example-pm.example.com', companyNumber:'MOCKSW01',
      contacts:[{name:'Sarah Example', role:'Head of Property Management', status:'VERIFIED', confidence:0.85, source:'https://example-pm.example.com/team (mock)'}],
      facts:{'website.reachable':V(true),'company.status':V('active',0.98,'Companies House (mock)'),'company.ageYears':V(12,0.98,'Companies House (mock)'),'website.teamSize':V(11,0.65),
        'sw.signals':V(sig(['fully-managed','maintenance-reporting','24h-maintenance','approved-contractors','void-works','role-property-manager'])),'sw.portfolioSize':L(340,'Stated on their website: "we manage over 340 properties" (MOCK)'),
        'sw.contractorStatus':L('EVIDENCE OF EXTERNAL CONTRACTORS'),'sw.hiringPropertyRoles':V(true,0.85,'https://example-pm.example.com/careers')}}),
    base({id:'mock-sw-2', name:'MOCK Sample Block Managers', swType:'block-management', industry:'other', area:'Ilford', postcode:'IG1 1AA', lat:51.5590, lng:0.0741, website:'https://sample-block.example.com', phone:'020 0000 0102', email:'info@sample-block.example.com', companyNumber:'MOCKSW02',
      contacts:[{name:'Dev Sample', role:'Operations Manager', status:'VERIFIED', confidence:0.85, source:'Companies House (mock)'}],
      facts:{'website.reachable':V(true),'company.status':V('active',0.98),'company.ageYears':V(8,0.98),'sw.signals':V(sig(['block-management','planned-maintenance','reactive-maintenance','supplier-route','role-maintenance'])),
        'sw.portfolioSize':L(42,'Stated: "42 developments across East London" (MOCK)'),'sw.supplierRoute':V(true,0.9),'sw.contractorStatus':L('EVIDENCE OF EXTERNAL CONTRACTORS')}}),
    base({id:'mock-sw-3', name:'MOCK Demo Care Home', swType:'care-home', industry:'other', area:'Hornchurch', postcode:'RM11 1AA', lat:51.5566, lng:0.2180, website:'https://demo-care.example.com', phone:'01708 000103', companyNumber:'MOCKSW03',
      contacts:[{name:'Morgan Demo', role:'Home Manager', status:'VERIFIED', confidence:0.8, source:'CQC register (mock)'}],
      facts:{'website.reachable':V(true),'company.status':V('active',0.98),'company.ageYears':V(19,0.98),'sw.signals':V(sig(['planned-maintenance','role-maintenance','multiple-sites'])),'sw.beds':L(64,'Stated: "our 64-bed home" (MOCK)'),'sw.contractorStatus':makeFact('UNKNOWN','UNKNOWN',0,'')}}),
    base({id:'mock-sw-4', name:'MOCK Placeholder Estates (sales only)', swType:'estate-agent', industry:'estate-agent', area:'Barking', postcode:'IG11 7AA', lat:51.5396, lng:0.0810, website:'https://placeholder-estates.example.com', phone:'020 0000 0104',
      facts:{'website.reachable':V(true),'company.status':V('active',0.98),'company.ageYears':V(5,0.98),'sw.signals':V(sig(['landlord-services'])),'website.listingsCount':V(30,0.7)}}),
    base({id:'mock-sw-5', name:'MOCK Far Away FM Ltd', swType:'fm-company', industry:'other', area:'Reading', postcode:'RG1 1AA', lat:51.4543, lng:-0.9781, website:'https://far-fm.example.com', phone:'0118 000 0105', companyNumber:'MOCKSW05',
      facts:{'website.reachable':V(true),'company.status':V('active',0.98),'company.ageYears':V(15,0.98),'sw.signals':V(sig(['facilities-management','planned-maintenance','subcontractors'])),'sw.sites':L(120,'MOCK')}}),
    base({id:'mock-sw-6', name:'MOCK Test Serviced Apartments', swType:'serviced-accommodation', industry:'serviced-accommodation', area:'Stratford', postcode:'E15 1AA', lat:51.5413, lng:0.0034, website:'https://test-sa.example.com', phone:'020 0000 0106', email:'ops@test-sa.example.com', companyNumber:'MOCKSW06',
      contacts:[{name:'Riley Test', role:'Operations Manager', status:'VERIFIED', confidence:0.85, source:'https://test-sa.example.com/about (mock)'}],
      facts:{'website.reachable':V(true),'company.status':V('active',0.98),'company.ageYears':V(4,0.98),'sw.signals':V(sig(['serviced-apartments','repairs','check-in-out','refurbishment'])),'sw.rooms':L(38,'Stated: "38 serviced apartments" (MOCK)'),'sw.contractorStatus':makeFact('UNKNOWN','UNKNOWN',0,''),'sw.newBranch':V(true,0.8,'https://test-sa.example.com/news')}})
  ];
}

const WorksCore = {VERSION, SERVICES, ORG_TYPES, SIGNALS, STAGES, CONTACTED, GOALS, GROWTH, CHECK_LABELS, CLASS_RANK, QUESTIONS, svcLabel,
  orgType, typeFromIndustry, industryFromType, defaultSettings, mergeSettings, extractMaintenanceSignals, maintenancePages, signalsOf,
  computeDemand, computeFootprint, computeServiceFit, computeStrength, computeDemandSignals, bestContact, computeContact, miles, computeGeo,
  relationshipPotential, relationshipGoal, disqualify, opportunityType, scoreOrg, computeConfidence, gate, whyThis, selectDaily,
  outreach, dossier, preContactStage, relationshipFunnel, FUNNEL, accountMetrics, crossSell, capacity, growthStage, crossBusiness, crossSellFlags, mockOrgs};
root.WorksCore = WorksCore;
if(typeof module!=='undefined' && module.exports) module.exports = WorksCore;
})(typeof globalThis!=='undefined' ? globalThis : this);
