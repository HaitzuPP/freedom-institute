/* Freedom Institute: timeline renderer. */
(function(){
"use strict";
var $=window.FI.$, $$=window.FI.$$, esc=window.FI.esc;
var ERAS=window.FI_HISTORY||[], SERIES=window.FI_SERIES||[], STATS=window.FI_STATS||[];
var ORD=["One","Two","Three","Four","Five","Six","Seven","Eight"];

/* ---------- stat strip ---------- */
var strip=$("#hstats");
if(strip) strip.innerHTML=STATS.map(function(s){
  return '<div class="hstat__c"><div class="hstat__v">'+esc(s.v)+'</div>'+
    '<div class="hstat__l">'+esc(s.k)+'</div><div class="hstat__d">'+esc(s.d)+'</div>'+
    '<a class="hstat__s" href="'+esc(s.src)+'" target="_blank" rel="noopener">'+esc(s.by)+' &#8599;</a></div>';
}).join("");

/* ---------- shutdown chart ---------- */
var chart=$("#chart");
if(chart&&SERIES.length){
  var W=760,H=210,padL=34,padB=30,padT=14;
  var max=Math.max.apply(null,SERIES.map(function(d){return d[1]}));
  var step=(W-padL)/SERIES.length, bw=Math.min(38,step*0.62);
  var ticks=[0,100,200,300].filter(function(t){return t<=max+40});
  var g=ticks.map(function(t){
    var y=padT+(H-padT-padB)*(1-t/(max*1.1));
    return '<line class="grid-l" x1="'+padL+'" x2="'+W+'" y1="'+y.toFixed(1)+'" y2="'+y.toFixed(1)+'"/>'+
           '<text class="lbl" x="0" y="'+(y+3).toFixed(1)+'">'+t+'</text>';
  }).join("");
  var bars=SERIES.map(function(d,i){
    var h=(H-padT-padB)*(d[1]/(max*1.1));
    var x=padL+i*step+(step-bw)/2, y=H-padB-h;
    return '<g><title>'+d[0]+': '+d[1]+' shutdowns</title>'+
      '<rect class="bar-r" x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+bw.toFixed(1)+'" height="'+h.toFixed(1)+'" rx="1.5"/>'+
      '<text class="val" x="'+(x+bw/2).toFixed(1)+'" y="'+(y-6).toFixed(1)+'" text-anchor="middle">'+d[1]+'</text>'+
      '<text class="lbl" x="'+(x+bw/2).toFixed(1)+'" y="'+(H-padB+16)+'" text-anchor="middle">'+String(d[0]).slice(2)+'</text></g>';
  }).join("");
  chart.innerHTML='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Documented internet shutdowns per year, 2016 to 2025, rising from 75 to 313">'+g+bars+'</svg>';
}

/* ---------- era navigation ---------- */
var nav=$("#eranav");
if(nav) nav.innerHTML=ERAS.map(function(e,i){
  return '<a href="#era'+(i+1)+'"><span class="y">'+esc(e.years)+'</span><span class="c">'+e.events.length+' events</span></a>';
}).join("");

/* ---------- eras and events ---------- */
function evHtml(ev,idx){
  var place=ev.place?'<span>'+esc(ev.place)+'</span>':"";
  return '<article class="ev'+(ev.key?" is-key":"")+'" id="ev'+idx+'">'+
    '<div class="ev__dot"></div>'+
    '<button class="ev__btn" type="button" aria-expanded="false" aria-controls="p'+idx+'">'+
      '<span class="ev__when">'+esc(ev.year)+place+'</span>'+
      '<span><span class="ev__h">'+esc(ev.h)+'</span><span class="ev__sum">'+esc(ev.sum||ev.body)+'</span></span>'+
      '<span class="ev__chev" aria-hidden="true"></span>'+
    '</button>'+
    '<div class="ev__panel" id="p'+idx+'">'+
      (ev.body?'<p>'+esc(ev.body)+'</p>':'')+
      '<div class="ev__why"><div class="k">Why it mattered</div><p>'+esc(ev.why)+'</p></div>'+
      (ev.srcUrl?'<a class="ev__src" href="'+esc(ev.srcUrl)+'" target="_blank" rel="noopener">'+esc(ev.srcTitle||"Source")+' &#8599;</a>':"")+
    '</div></article>';
}
var host=$("#eras"), n=0;
if(host) host.innerHTML=ERAS.map(function(e,i){
  var evs=e.events.map(function(ev){return evHtml(ev,++n)}).join("");
  return '<section class="era rv" id="era'+(i+1)+'">'+
    '<div class="era__head">'+
      '<div><div class="era__n">Era '+(ORD[i]||i+1).toLowerCase()+'</div>'+
        '<h2 class="era__t">'+esc(e.title)+'</h2>'+
        '<div class="era__y">'+esc(e.years)+' &middot; '+e.events.length+' entries</div></div>'+
      '<p class="era__f">'+esc(e.framing)+'</p>'+
    '</div>'+
    '<div class="evtools">'+
      '<button class="chip" type="button" data-expand="era'+(i+1)+'">Expand all</button>'+
      '<button class="chip" type="button" data-collapse="era'+(i+1)+'">Collapse</button>'+
      '<span class="dim mono" style="font-size:10px">'+e.events.filter(function(x){return x.key}).length+' pivotal</span>'+
    '</div>'+
    '<div class="evs">'+evs+'</div></section>';
}).join("");

/* ---------- open / close ---------- */
function toggle(art,open){
  var b=art.querySelector(".ev__btn");
  if(open===undefined)open=!art.hasAttribute("open");
  if(open){art.setAttribute("open","")}else{art.removeAttribute("open")}
  b.setAttribute("aria-expanded",open?"true":"false");
}
$$("#eras .ev__btn").forEach(function(b){
  b.addEventListener("click",function(){toggle(b.closest(".ev"))});
});
$$("#eras [data-expand]").forEach(function(b){
  b.addEventListener("click",function(){$$("#"+b.dataset.expand+" .ev").forEach(function(a){toggle(a,true)})});
});
$$("#eras [data-collapse]").forEach(function(b){
  b.addEventListener("click",function(){$$("#"+b.dataset.collapse+" .ev").forEach(function(a){toggle(a,false)})});
});

/* ---------- filter to the pivotal entries ---------- */
var keyOnly=$("#keyOnly");
if(keyOnly) keyOnly.addEventListener("click",function(){
  var on=this.classList.toggle("on");
  this.setAttribute("aria-pressed",on?"true":"false");
  $$("#eras .ev").forEach(function(a){a.style.display=(on&&!a.classList.contains("is-key"))?"none":""});
  window.FI.toast(on?"Showing the pivotal entries":"Showing all entries");
});

/* ---------- deep link ---------- */
if(location.hash&&/^#ev\d+$/.test(location.hash)){
  var t=document.querySelector(location.hash);
  if(t){toggle(t,true);setTimeout(function(){t.scrollIntoView({block:"center"})},120)}
}
/* observe the freshly injected sections for the reveal animation */
if("IntersectionObserver" in window){
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{threshold:.04});
  $$("#eras .rv").forEach(function(el){o.observe(el)});
  setTimeout(function(){$$("#eras .rv").forEach(function(el){el.classList.add("in")})},2500);
}else{$$("#eras .rv").forEach(function(el){el.classList.add("in")})}
})();
