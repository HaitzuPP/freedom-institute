/* Freedom Institute: country grade explorer */
(function(){
"use strict";
var $=window.FI.$, $$=window.FI.$$, esc=window.FI.esc, toast=window.FI.toast;
var lockBody=window.FI.lockBody, unlockBody=window.FI.unlockBody, trapTab=window.FI.trapTab;
function gclass(g){return "g-"+g.toLowerCase()}
function riskColour(v){return v<35?"var(--risk-lo)":v<65?"var(--risk-md)":"var(--risk-hi)"}
/* ============ DATA (illustrative) ============ */
var COUNTRIES=[
 {c:"DE",n:"Germany",r:"emea",a:[8,4,5,12],s12:0,ev:612,cf:92,u:"Sep 2026",m:[0,0,0,0,0,0,0,0,0,0,0,0]},
 {c:"SE",n:"Sweden",r:"emea",a:[6,2,4,9],s12:0,ev:402,cf:86,u:"Sep 2026",m:[0,0,0,0,0,0,0,0,0,0,0,0]},
 {c:"JP",n:"Japan",r:"apac",a:[10,3,6,14],s12:0,ev:488,cf:88,u:"Sep 2026",m:[0,0,0,0,0,0,0,0,0,0,0,0]},
 {c:"US",n:"United States",r:"americas",a:[14,4,8,18],s12:0,ev:980,cf:90,u:"Sep 2026",m:[0,0,0,0,0,0,0,0,0,0,0,0]},
 {c:"BR",n:"Brazil",r:"americas",a:[22,12,10,26],s12:1,ev:531,cf:80,u:"Aug 2026",m:[0,0,0,1,0,0,0,0,0,0,0,0]},
 {c:"ZA",n:"South Africa",r:"emea",a:[20,10,12,24],s12:0,ev:288,cf:72,u:"Aug 2026",m:[0,0,0,0,0,0,0,0,0,0,0,0]},
 {c:"MX",n:"Mexico",r:"americas",a:[24,8,14,34],s12:0,ev:344,cf:70,u:"Jul 2026",m:[0,0,0,0,0,0,0,0,0,0,0,0]},
 {c:"MY",n:"Malaysia",r:"apac",a:[34,12,26,38],s12:1,ev:302,cf:66,u:"Aug 2026",m:[0,0,0,0,1,0,0,0,0,0,0,0]},
 {c:"MA",n:"Morocco",r:"emea",a:[30,16,34,36],s12:1,ev:264,cf:58,u:"Jul 2026",m:[0,0,1,0,0,0,0,0,0,0,0,0]},
 {c:"TH",n:"Thailand",r:"apac",a:[40,14,30,46],s12:2,ev:338,cf:64,u:"Aug 2026",m:[0,1,0,0,0,0,1,0,0,0,0,0]},
 {c:"KZ",n:"Kazakhstan",r:"emea",a:[44,28,38,50],s12:4,ev:296,cf:60,u:"Aug 2026",m:[1,0,0,1,0,1,0,0,1,0,0,0]},
 {c:"IN",n:"India",r:"apac",a:[46,62,44,52],s12:27,ev:1204,cf:71,u:"Sep 2026",m:[1,3,2,4,1,2,3,5,2,1,2,1]},
 {c:"ID",n:"Indonesia",r:"apac",a:[52,32,40,48],s12:3,ev:466,cf:68,u:"Aug 2026",m:[0,0,1,0,0,1,0,0,1,0,0,0]},
 {c:"TR",n:"Türkiye",r:"emea",a:[68,38,62,72],s12:6,ev:874,cf:74,u:"Sep 2026",m:[1,0,1,0,1,0,0,1,1,0,1,0]},
 {c:"PK",n:"Pakistan",r:"apac",a:[64,58,60,66],s12:12,ev:512,cf:66,u:"Aug 2026",m:[1,1,2,0,1,1,2,1,1,0,1,1]},
 {c:"EG",n:"Egypt",r:"emea",a:[70,34,66,76],s12:2,ev:398,cf:64,u:"Jul 2026",m:[0,0,0,1,0,0,0,0,1,0,0,0]},
 {c:"VN",n:"Vietnam",r:"apac",a:[66,26,58,74],s12:1,ev:354,cf:62,u:"Jul 2026",m:[0,0,0,0,0,1,0,0,0,0,0,0]},
 {c:"BY",n:"Belarus",r:"emea",a:[78,56,80,86],s12:5,ev:410,cf:70,u:"Sep 2026",m:[0,1,0,1,0,0,1,0,1,0,1,0]},
 {c:"RU",n:"Russia",r:"emea",a:[82,52,86,88],s12:14,ev:1690,cf:86,u:"Sep 2026",m:[1,2,1,1,2,1,1,2,1,1,0,1]},
 {c:"ET",n:"Ethiopia",r:"emea",a:[72,74,68,70],s12:18,ev:342,cf:48,u:"Jul 2026",m:[2,1,3,2,1,2,1,2,1,1,1,1]},
 {c:"IR",n:"Iran",r:"emea",a:[90,78,92,90],s12:31,ev:2118,cf:90,u:"Sep 2026",m:[3,2,4,3,2,3,2,4,3,2,2,1]},
 {c:"CN",n:"China",r:"apac",a:[94,44,95,88],s12:9,ev:2460,cf:93,u:"Sep 2026",m:[1,1,0,1,1,0,1,1,1,1,0,1]},
 {c:"MM",n:"Myanmar",r:"apac",a:[88,86,84,92],s12:44,ev:296,cf:44,u:"Jun 2026",m:[4,3,5,4,3,4,3,5,4,3,3,3]}
];
var AXES=["Blocking","Shutdowns","Circumvention","Expression penalty"];
var AXIS_NOTE=[
 "Reachability of sites, apps, and protocols measured from in-country vantage points.",
 "Full and partial network outages, including throttling below usable thresholds.",
 "Legal and technical restrictions on VPNs, Tor, and other circumvention tools.",
 "Arrests, prosecutions, and penalties recorded for online speech."
];
function band(v){return v<20?"Low":v<40?"Moderate":v<65?"Elevated":v<82?"High":"Severe"}
function circBand(v){return v<20?"Unrestricted":v<45?"Monitored":v<65?"Pressured":v<82?"Restricted":"Criminalised"}
function gradeOf(s){return s<20?"A":s<35?"B":s<52?"C":s<70?"D":"F"}
function evidenceLog(d){
  var out=[],i;
  var kinds=[
    ["Protocol reachability","Encrypted DNS blocked on "+(6+(d.a[0]%9))+" of 12 vantage points"],
    ["Throughput","Median throughput fell "+(20+(d.a[1]%50))+"% below baseline for "+(2+(d.a[1]%9))+" hours"],
    ["App availability","Circumvention app delisted from the local store, restored after "+(3+(d.a[2]%20))+" days"],
    ["Legal record","New penalty provision recorded for online expression, pending review"],
    ["Restoration","Service restored on all monitored vantage points, event closed"]
  ];
  var months=["Sep 2026","Aug 2026","Aug 2026","Jul 2026","Jun 2026"];
  var count=d.a[0]>60?5:d.a[0]>30?4:3;
  for(i=0;i<count;i++) out.push({w:months[i],k:kinds[i][0],t:kinds[i][1]});
  return out;
}

/* ============ GRADE EXPLORER ============ */
var W={blocking:30,shutdowns:25,circumvention:25,expression:20};
var DEFAULT_W={blocking:30,shutdowns:25,circumvention:25,expression:20};
var cState={region:"all",q:"",grade:"all",sort:"score",dir:-1};

function weightTotal(){return W.blocking+W.shutdowns+W.circumvention+W.expression}
function scoreOf(d){
  var w=[W.blocking,W.shutdowns,W.circumvention,W.expression];
  var tot=w[0]+w[1]+w[2]+w[3];
  if(!tot)return null;
  return (d.a[0]*w[0]+d.a[1]*w[1]+d.a[2]*w[2]+d.a[3]*w[3])/tot;
}
function rows(){
  return COUNTRIES.filter(function(d){
    if(cState.region!=="all"&&d.r!==cState.region)return false;
    if(cState.grade!=="all"&&(weightTotal()===0||gradeOf(scoreOf(d))!==cState.grade))return false;
    if(cState.q&&d.n.toLowerCase().indexOf(cState.q)<0&&d.c.toLowerCase().indexOf(cState.q)<0)return false;
    return true;
  });
}
function sortVal(d,k){
  switch(k){
    case "name":return d.n.toLowerCase();
    case "score":return scoreOf(d);
    case "blocking":return d.a[0];
    case "shutdowns12":return d.s12;
    case "circumvention":return d.a[2];
    case "evidence":return d.ev;
    case "confidence":return d.cf;
    default:return scoreOf(d);
  }
}
function sparkline(m){
  var max=Math.max.apply(null,m.concat([1])),w=62,h=18,step=w/(m.length-1);
  var pts=m.map(function(v,i){return (i*step).toFixed(1)+","+(h-(v/max)*(h-2)-1).toFixed(1)}).join(" ");
  var col=max>=3?"var(--risk-hi)":max>=1?"var(--risk-md)":"var(--muted)";
  return '<svg class="spark" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" aria-hidden="true"><polyline points="'+pts+'" fill="none" stroke="'+col+'" stroke-width="1.4" stroke-linejoin="round"/></svg>';
}
function renderDist(){
  var counts={A:0,B:0,C:0,D:0,F:0}, live=weightTotal()>0;
  if(live)COUNTRIES.forEach(function(d){counts[gradeOf(scoreOf(d))]++});
  var max=Math.max.apply(null,Object.keys(counts).map(function(k){return counts[k]}).concat([1]));
  var cols={A:"var(--ga-fg)",B:"var(--gb-fg)",C:"var(--gc-fg)",D:"var(--gd-fg)",F:"var(--gf-fg)"};
  var html='<button class="chip'+(cState.grade==="all"?" on":"")+'" data-grade="all" style="border-radius:2px">All grades</button>';
  html+=Object.keys(counts).map(function(g){
    var hgt=Math.max(8,Math.round((counts[g]/max)*26));
    return '<button type="button" data-grade="'+g+'"'+(cState.grade===g?' class="on"':'')+(live?'':' disabled')+' aria-pressed="'+(cState.grade===g)+'"><span class="col" style="height:'+hgt+'px;background:'+cols[g]+'"></span><span class="gl">'+g+'</span><span class="ct">'+(live?counts[g]:"\u2013")+'</span></button>';
  }).join("");
  $("#dist").innerHTML=html;
  $$("#dist [data-grade]").forEach(function(b){
    b.addEventListener("click",function(){
      cState.grade=(cState.grade===b.dataset.grade)?"all":b.dataset.grade;
      renderDist();renderCountries();
    });
  });
}
function renderCountries(){
  var list=rows();
  list.sort(function(a,b){
    var x=sortVal(a,cState.sort),y=sortVal(b,cState.sort);
    if(x<y)return -1*cState.dir; if(x>y)return 1*cState.dir; return 0;
  });
  $("#cBody").innerHTML=list.map(function(d,i){
    var s=scoreOf(d),g=(s===null)?null:gradeOf(s);
    var cbar=d.cf>=75?"":d.cf>=60?" low":" bad";
    return '<tr data-c="'+d.c+'">'+
      '<td class="rank">'+(i+1)+'</td>'+
      '<td><button type="button" class="entity rowbtn" data-open="'+d.c+'" aria-haspopup="dialog"><span class="flag">'+d.c+'</span>'+esc(d.n)+'</button></td>'+
      '<td>'+(g?'<span class="grade '+gclass(g)+'">'+g+'</span>':'<span class="dim mono" title="Set at least one weight above zero">n/a</span>')+'</td>'+
      '<td class="band">'+band(d.a[0])+'</td>'+
      '<td class="num">'+d.s12+'</td>'+
      '<td>'+sparkline(d.m)+'</td>'+
      '<td class="band">'+circBand(d.a[2])+'</td>'+
      '<td class="num">'+d.ev.toLocaleString("en-US")+'</td>'+
      '<td><span class="bar'+cbar+'" role="img" aria-label="Confidence '+d.cf+' percent"><i style="width:'+d.cf+'%"></i></span> <span class="mono dim" style="font-size:10.5px">'+d.cf+'%</span></td>'+
    '</tr>';
  }).join("");
  $("#cEmpty").hidden=list.length>0;
  $("#cCount").textContent="Showing "+list.length+" of "+COUNTRIES.length;
  $$("#cBody tr").forEach(function(tr){
    tr.addEventListener("click",function(){openDrawer(tr.dataset.c)});
  });
}
$$("[data-region]").forEach(function(b){
  b.addEventListener("click",function(){
    $$("[data-region]").forEach(function(x){x.classList.remove("on")});
    b.classList.add("on");cState.region=b.dataset.region;renderCountries();
  });
});
$("#cSearch").addEventListener("input",function(e){cState.q=e.target.value.trim().toLowerCase();renderCountries()});
window.FI.wireSort("cTable",cState,function(){renderCountries()});
$("#toggleWeights").addEventListener("click",function(){
  var w=$("#weights"); w.hidden=!w.hidden;
  this.classList.toggle("on",!w.hidden);
  this.setAttribute("aria-expanded",w.hidden?"false":"true");
});
function syncWeights(){
  W.blocking=+$("#wBlock").value;W.shutdowns=+$("#wShut").value;
  W.circumvention=+$("#wCirc").value;W.expression=+$("#wExpr").value;
  $("#vBlock").textContent=W.blocking;$("#vShut").textContent=W.shutdowns;
  $("#vCirc").textContent=W.circumvention;$("#vExpr").textContent=W.expression;
  var tot=W.blocking+W.shutdowns+W.circumvention+W.expression;
  var changed=JSON.stringify(W)!==JSON.stringify(DEFAULT_W);
  $("#wSummary").textContent=tot===0?"Every weight is zero; set at least one axis above zero."
    :(changed?"Custom weighting active. Grades below are yours, not ours.":"Weights normalise to 100. Grades and ranking update live.");
  renderDist();renderCountries();
}
["wBlock","wShut","wCirc","wExpr"].forEach(function(id){$("#"+id).addEventListener("input",syncWeights)});
$("#resetWeights").addEventListener("click",function(){
  $("#wBlock").value=30;$("#wShut").value=25;$("#wCirc").value=25;$("#wExpr").value=20;
  syncWeights();toast("Published weights restored");
});

/* drawer */
function openDrawer(code){
  var d=COUNTRIES.filter(function(x){return x.c===code})[0]; if(!d)return;
  var s=scoreOf(d),g=gradeOf(s);
  var axes=d.a.map(function(v,i){
    return '<div class="axis"><div class="row"><span>'+AXES[i]+'</span><b>'+Math.round(v)+' / 100</b></div>'+
      '<div class="track"><i style="width:'+v+'%;background:'+riskColour(v)+'"></i></div>'+
      '<div class="dim" style="font-size:12.5px;margin-top:6px">'+AXIS_NOTE[i]+'</div></div>';
  }).join("");
  var log=evidenceLog(d).map(function(e){
    return '<li><span class="when">'+e.w+'</span><span><b style="font-weight:500">'+esc(e.k)+'</b><br><span class="dim">'+esc(e.t)+'</span></span></li>';
  }).join("");
  $("#drawerInner").innerHTML=
    '<div class="drawer-head">'+
      '<span class="grade '+gclass(g)+'" style="width:44px;height:38px;font-size:16px">'+g+'</span>'+
      '<div><div style="font-family:var(--serif);font-size:24px;letter-spacing:-.015em">'+esc(d.n)+'</div>'+
      '<div class="mono dim" style="margin-top:4px">Composite '+s.toFixed(1)+' &middot; updated '+d.u+'</div></div>'+
      '<button class="x" id="drawerX" aria-label="Close">&times;</button>'+
    '</div>'+
    '<div class="drawer-body">'+
      '<div class="dsec"><div class="k mono">Axis scores (higher is worse)</div>'+axes+'</div>'+
      '<div class="dsec"><div class="k mono">Shutdown events, trailing 12 months</div>'+
        '<div style="display:flex;align-items:flex-end;gap:4px;height:72px;margin-bottom:10px">'+
        d.m.map(function(v){var max=Math.max.apply(null,d.m.concat([1]));
          return '<div title="'+v+' events" style="flex:1;height:'+Math.max(3,(v/max)*68)+'px;background:'+(v>2?"var(--risk-hi)":v>0?"var(--risk-md)":"var(--grey)")+';border-radius:2px 2px 0 0"></div>'}).join("")+
        '</div><div class="mono dim">'+d.s12+' events recorded &middot; oldest month left</div></div>'+
      '<div class="dsec"><div class="k mono">Coverage</div><dl class="kv">'+
        '<dt>Evidence records</dt><dd>'+d.ev.toLocaleString("en-US")+'</dd>'+
        '<dt>Confidence</dt><dd>'+d.cf+'%</dd>'+
        '<dt>Region</dt><dd>'+d.r.toUpperCase()+'</dd>'+
        '<dt>Last re-grade</dt><dd>'+d.u+'</dd></dl></div>'+
      '<div class="dsec"><div class="k mono">Evidence log</div><ul class="log">'+log+'</ul></div>'+
      '<p class="dim" style="font-size:12.5px">Illustrative data. Published entries link to raw measurement data and the vantage points that produced it.</p>'+
    '</div>';
  $("#drawerX").addEventListener("click",closeDrawer);
  lastFocus=document.activeElement;
  $("#drawer").classList.add("on");$("#scrim").classList.add("on");lockBody();
  $("#drawerX").focus();
}
var lastFocus=null;
function closeDrawer(){
  var d=$("#drawer");
  if(!d.classList.contains("on"))return;
  d.classList.remove("on");$("#scrim").classList.remove("on");unlockBody();
  if(lastFocus&&lastFocus.focus){try{lastFocus.focus()}catch(e){}}
}
$("#scrim").addEventListener("click",closeDrawer);


$("#drawer").addEventListener("keydown",function(e){trapTab($("#drawer"),e)});
document.addEventListener("keydown",function(e){
  var tag=(e.target.tagName||"").toLowerCase();
  if(e.key==="Escape"){closeDrawer();return}
  if(tag==="input"||tag==="textarea")return;
  if(e.key==="/"){e.preventDefault();$("#cSearch").focus();$("#cSearch").scrollIntoView({block:"center"})}
});
renderDist();renderCountries();

})();
