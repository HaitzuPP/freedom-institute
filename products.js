/* Freedom Institute: privacy product index */
(function(){
"use strict";
var $=window.FI.$, $$=window.FI.$$, esc=window.FI.esc, toast=window.FI.toast;
var lockBody=window.FI.lockBody, unlockBody=window.FI.unlockBody, trapTab=window.FI.trapTab;
function gclass(g){return "g-"+g.toLowerCase()}
function riskColour(v){return v<35?"var(--risk-lo)":v<65?"var(--risk-md)":"var(--risk-hi)"}
/* ============ DATA (illustrative) ============ */
var PRODUCTS=[
 {id:"v1",n:"Provider 01",cat:"vpn",catL:"VPN",f:{collection:["Email, payment token",82,"audited"],retention:["Session only",90,"audited"],access:["None claimed",80,"audited"],tracking:["None detected",95,"observed"],defaults:["Private by default",88,"observed"],control:["Full export and delete",84,"audited"]}},
 {id:"v2",n:"Provider 02",cat:"vpn",catL:"VPN",f:{collection:["Email, device ID, IP",34,"observed"],retention:["30 days",40,"observed"],access:["Full",20,"claimed"],tracking:["2 SDKs detected",22,"observed"],defaults:["Opt-in required",30,"observed"],control:["Delete on request",44,"claimed"]}},
 {id:"v3",n:"Provider 03",cat:"vpn",catL:"VPN",f:{collection:["Undisclosed",12,"unknown"],retention:["Undisclosed",12,"unknown"],access:["Undisclosed",12,"unknown"],tracking:["Not testable",18,"unknown"],defaults:["Unknown",15,"unknown"],control:["No stated process",14,"unknown"]}},
 {id:"v4",n:"Provider 04",cat:"vpn",catL:"VPN",f:{collection:["Email only",70,"observed"],retention:["7 days aggregate",62,"claimed"],access:["Support staff",48,"claimed"],tracking:["1 analytics SDK",46,"observed"],defaults:["Private by default",74,"observed"],control:["Self-serve delete",68,"observed"]}},
 {id:"m1",n:"Messenger 01",cat:"msg",catL:"Messaging",f:{collection:["Phone number",76,"audited"],retention:["Message queue only",92,"audited"],access:["None claimed",86,"audited"],tracking:["None detected",94,"observed"],defaults:["End-to-end by default",96,"audited"],control:["Full export and delete",82,"observed"]}},
 {id:"m2",n:"Messenger 02",cat:"msg",catL:"Messaging",f:{collection:["Contacts, metadata",26,"observed"],retention:["Indefinite",18,"observed"],access:["Full",18,"observed"],tracking:["4 SDKs detected",14,"observed"],defaults:["Opt-in encryption",28,"observed"],control:["Delete on request",36,"claimed"]}},
 {id:"m3",n:"Messenger 03",cat:"msg",catL:"Messaging",f:{collection:["Account handle",72,"observed"],retention:["90 days",58,"claimed"],access:["Metadata only",60,"claimed"],tracking:["None detected",88,"observed"],defaults:["End-to-end by default",84,"observed"],control:["Self-serve delete",70,"observed"]}},
 {id:"e1",n:"Mail 01",cat:"mail",catL:"Email",f:{collection:["Recovery address",74,"observed"],retention:["Until deletion",66,"observed"],access:["Metadata only",62,"claimed"],tracking:["None detected",90,"observed"],defaults:["Encrypted at rest",78,"audited"],control:["Full export",80,"observed"]}},
 {id:"e2",n:"Mail 02",cat:"mail",catL:"Email",f:{collection:["Full mailbox",16,"claimed"],retention:["Indefinite",16,"claimed"],access:["Full",14,"claimed"],tracking:["Ad profiling",10,"observed"],defaults:["Scanning enabled",12,"claimed"],control:["Delete on request",34,"claimed"]}},
 {id:"e3",n:"Mail 03",cat:"mail",catL:"Email",f:{collection:["Recovery address",70,"observed"],retention:["12 months logs",52,"observed"],access:["Support staff",50,"claimed"],tracking:["1 analytics SDK",48,"observed"],defaults:["Encrypted at rest",72,"claimed"],control:["Self-serve delete",66,"observed"]}},
 {id:"b1",n:"Browser 01",cat:"browser",catL:"Browser",f:{collection:["Crash reports",80,"audited"],retention:["90 days",74,"audited"],access:["None claimed",82,"audited"],tracking:["Blocked by default",96,"observed"],defaults:["Strict protection on",92,"observed"],control:["Granular controls",86,"observed"]}},
 {id:"b2",n:"Browser 02",cat:"browser",catL:"Browser",f:{collection:["Telemetry, sync data",30,"observed"],retention:["18 months",28,"observed"],access:["Full",22,"observed"],tracking:["Allowed by default",18,"observed"],defaults:["Protection opt-in",26,"observed"],control:["Settings only",40,"observed"]}}
];
var PFIELDS=[["collection","Data collected"],["retention","Retention"],["access","Provider access"],["tracking","Third-party tracking"],["defaults","Private by default"],["control","User control"]];
var STATE_RANK={audited:4,observed:3,claimed:2,unknown:1};
var STATE_NOTE={
  audited:"Confirmed by an independent audit we could read.",
  observed:"Measured by us directly against the running product.",
  claimed:"Stated by the provider and not independently confirmed.",
  unknown:"No disclosure and no way for us to test it."
};

/* ============ PRODUCT INDEX ============ */
var pState={cat:"all",q:"",verified:false,notrack:false,sort:"score",dir:-1};
var picks=[];
function pScore(p){
  var ks=Object.keys(p.f),t=0;
  ks.forEach(function(k){t+=p.f[k][1]});
  return Math.round(t/ks.length);
}
function pState_(p){
  var ranks=Object.keys(p.f).map(function(k){return STATE_RANK[p.f[k][2]]});
  var min=Math.min.apply(null,ranks);
  return min>=4?"audited":min>=3?"observed":min>=2?"claimed":"unknown";
}
function pRows(){
  return PRODUCTS.filter(function(p){
    if(pState.cat!=="all"&&p.cat!==pState.cat)return false;
    if(pState.q&&p.n.toLowerCase().indexOf(pState.q)<0&&p.catL.toLowerCase().indexOf(pState.q)<0)return false;
    if(pState.verified&&STATE_RANK[pState_(p)]<3)return false;
    if(pState.notrack&&p.f.tracking[1]<70)return false;
    return true;
  });
}
function renderProducts(){
  var list=pRows();
  list.sort(function(a,b){
    var k=pState.sort,x,y;
    if(k==="name"){x=a.n.toLowerCase();y=b.n.toLowerCase()}
    else if(k==="cat"){x=a.catL;y=b.catL}
    else if(k==="state"){x=STATE_RANK[pState_(a)];y=STATE_RANK[pState_(b)]}
    else if(k==="score"){x=pScore(a);y=pScore(b)}
    else{x=a.f[k]?a.f[k][1]:0;y=b.f[k]?b.f[k][1]:0}
    if(x<y)return -1*pState.dir; if(x>y)return 1*pState.dir; return 0;
  });
  $("#pBody").innerHTML=list.map(function(p){
    var st=pState_(p),sc=pScore(p);
    return '<tr data-id="'+p.id+'">'+
      '<td><span class="pick'+(picks.indexOf(p.id)>=0?" on":"")+'" data-pick="'+p.id+'" role="checkbox" tabindex="0" aria-checked="'+(picks.indexOf(p.id)>=0)+'" aria-label="Compare '+esc(p.n)+'">&#10003;</span></td>'+
      '<td><span class="entity"><span class="flag">'+p.id.toUpperCase()+'</span>'+esc(p.n)+'</span></td>'+
      '<td class="dim">'+p.catL+'</td>'+
      '<td class="num"><span class="ring">'+ringSvg(sc)+'<b>'+sc+'</b></span></td>'+
      '<td>'+esc(p.f.collection[0])+'</td>'+
      '<td>'+esc(p.f.retention[0])+'</td>'+
      '<td>'+esc(p.f.access[0])+'</td>'+
      '<td>'+esc(p.f.tracking[0])+'</td>'+
      '<td><span class="stat s-'+st.slice(0,3)+'" title="'+STATE_NOTE[st]+'">'+st+'</span></td>'+
    '</tr>';
  }).join("");
  $("#pEmpty").hidden=list.length>0;
  $("#pCount").textContent="Showing "+list.length+" of "+PRODUCTS.length;
  $$("#pBody [data-pick]").forEach(function(el){
    el.addEventListener("click",function(e){e.stopPropagation();togglePick(el.dataset.pick)});
    el.addEventListener("keydown",function(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();togglePick(el.dataset.pick)}});
  });
  $$("#pBody tr").forEach(function(tr){
    tr.addEventListener("click",function(){togglePick(tr.dataset.id)});
  });
}
function ringSvg(v){
  var r=9,c=2*Math.PI*r,off=c*(1-v/100);
  return '<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="'+r+'" fill="none" stroke="var(--grey)" stroke-width="3"/>'+
    '<circle cx="12" cy="12" r="'+r+'" fill="none" stroke="'+(v>=70?"var(--pos)":v>=45?"var(--risk-md)":"var(--risk-hi)")+'" stroke-width="3" stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+off.toFixed(1)+'" stroke-linecap="round"/></svg>';
}
function togglePick(id){
  var i=picks.indexOf(id);
  if(i>=0){picks.splice(i,1)}
  else{ if(picks.length>=3){toast("Three entries maximum");return} picks.push(id) }
  var keep=document.activeElement&&document.activeElement.dataset&&document.activeElement.dataset.pick;
  renderProducts();renderTray();
  if(keep){var el=$('[data-pick="'+keep+'"]'); if(el)el.focus()}
}
function renderTray(){
  var s=$("#slots"),html="";
  for(var i=0;i<3;i++){
    var p=picks[i]?PRODUCTS.filter(function(x){return x.id===picks[i]})[0]:null;
    html+='<span class="slot'+(p?" full":"")+'">'+(p?esc(p.n):"Empty")+'</span>';
  }
  s.innerHTML=html;
  $("#cmpGo").disabled=picks.length<2;
  $("#tray").classList.toggle("on",picks.length>0);
}
$("#cmpClear").addEventListener("click",function(){picks=[];renderProducts();renderTray()});
$("#cmpGo").addEventListener("click",openCompare);
function openCompare(){
  if(picks.length<2)return;
  var sel=picks.map(function(id){return PRODUCTS.filter(function(x){return x.id===id})[0]});
  var head='<tr><th>Dimension</th>'+sel.map(function(p){return '<th>'+esc(p.n)+'<br><span class="dim" style="text-transform:none;letter-spacing:0;font-family:var(--sans);font-size:12px">'+p.catL+'</span></th>'}).join("")+'</tr>';
  var body=PFIELDS.map(function(f){
    var vals=sel.map(function(p){return p.f[f[0]][1]});
    var best=Math.max.apply(null,vals);
    return '<tr><td>'+f[1]+'</td>'+sel.map(function(p,i){
      var cell=p.f[f[0]];
      return '<td'+(vals[i]===best&&sel.length>1?' class="best"':'')+'>'+esc(cell[0])+
        '<br><span class="stat s-'+cell[2].slice(0,3)+'" style="margin-top:5px">'+cell[2]+'</span></td>';
    }).join("")+'</tr>';
  }).join("");
  var scores='<tr><td>Composite</td>'+sel.map(function(p){var sc=pScore(p);return '<td><span class="ring">'+ringSvg(sc)+'<b>'+sc+'</b></span></td>'}).join("")+'</tr>';
  $("#cmpInner").innerHTML=
    '<div class="panel-head"><span class="title">Side by side</span>'+
      '<div class="controls"><button class="chip" id="cmpClose">Close</button></div></div>'+
    '<div class="scroller"><table>'+'<thead>'+head+'</thead><tbody>'+scores+body+'</tbody></table></div>'+
    '<div class="panel-foot"><span>Highlighted cell is the stronger position on that dimension.</span><span>Illustrative data.</span></div>';
  $("#cmpClose").addEventListener("click",closeCompare);
  cmpLastFocus=document.activeElement;
  $("#cmp").classList.add("on");lockBody();
  $("#cmpClose").focus();
}
function closeCompare(){
  var c=$("#cmp");
  if(!c.classList.contains("on"))return;
  c.classList.remove("on");unlockBody();
  if(cmpLastFocus&&cmpLastFocus.focus){try{cmpLastFocus.focus()}catch(e){}}
}
var cmpLastFocus=null;
$("#cmp").addEventListener("keydown",function(e){trapTab($("#cmp"),e)});
$("#cmp").addEventListener("click",function(e){if(e.target===$("#cmp"))closeCompare()});

$$("[data-cat]").forEach(function(b){
  b.addEventListener("click",function(){
    $$("[data-cat]").forEach(function(x){x.classList.remove("on")});
    b.classList.add("on");pState.cat=b.dataset.cat;renderProducts();
  });
});
$("#pSearch").addEventListener("input",function(e){pState.q=e.target.value.trim().toLowerCase();renderProducts()});
$("#fVerified").addEventListener("click",function(){pState.verified=!pState.verified;this.classList.toggle("on",pState.verified);this.setAttribute("aria-pressed",pState.verified);renderProducts()});
$("#fNoTrack").addEventListener("click",function(){pState.notrack=!pState.notrack;this.classList.toggle("on",pState.notrack);this.setAttribute("aria-pressed",pState.notrack);renderProducts()});
window.FI.wireSort("pTable",pState,function(){renderProducts()});


document.addEventListener("keydown",function(e){
  var tag=(e.target.tagName||"").toLowerCase();
  if(e.key==="Escape"){closeCompare();return}
  if(tag==="input"||tag==="textarea")return;
  if(e.key==="/"){e.preventDefault();$("#pSearch").focus();$("#pSearch").scrollIntoView({block:"center"})}
});
renderProducts();renderTray();

})();
