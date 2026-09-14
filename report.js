/* Freedom Institute: report renderer. Driven by window.FI_REPORT. */
(function(){
"use strict";
var $=window.FI.$, $$=window.FI.$$, esc=window.FI.esc;
var R=window.FI_REPORT;
if(!R)return;

function srcLink(s,cls){
  if(!s||!s.u)return "";
  return '<a class="'+cls+'" href="'+esc(s.u)+'" target="_blank" rel="noopener">'+esc(s.t||"Source")+' &#8599;</a>';
}

/* ---------- head ---------- */
var head=$("#repHead");
if(head) head.innerHTML=
  '<div class="rep-meta mono">'+
    '<span class="pill key">'+esc(R.issue)+'</span>'+
    '<span class="pill">'+esc(R.period)+'</span>'+
    '<span>Freedom Institute research</span>'+
  '</div>'+
  '<h1>'+esc(R.title)+'</h1>'+
  '<p class="rep-stand">'+esc(R.standfirst)+'</p>'+
  '<div class="rep-status"><span class="mono" style="color:var(--warn);white-space:nowrap">Evidence basis</span><span>'+esc(R.status)+'</span></div>';

/* ---------- statistics ---------- */
var strip=$("#repStats");
if(strip) strip.innerHTML=R.stats.map(function(s){
  return '<div class="hstat__c"><div class="hstat__v">'+esc(s.v)+'</div>'+
    '<div class="hstat__l">'+esc(s.k)+'</div><div class="hstat__d">'+esc(s.d)+'</div>'+
    srcLink({t:s.by,u:s.src},"hstat__s")+'</div>';
}).join("");

/* ---------- contents ---------- */
var toc=$("#repToc");
if(toc) toc.innerHTML='<div class="h mono">In this report</div><ol>'+
  R.sections.map(function(s,i){
    var n=(s.entries&&s.entries.length)? s.entries.length+" entries" : (s.table? "Table":"");
    return '<li><a href="#s'+(i+1)+'"><span class="n">'+esc(s.n||("0"+(i+1)))+'</span>'+
      '<span class="t">'+esc(s.title)+'</span><span class="c">'+esc(n)+'</span></a></li>';
  }).join("")+'</ol>';

/* ---------- findings ---------- */
var finds=$("#repFindings");
if(finds) finds.innerHTML=R.findings.map(function(f){
  return '<div class="find"><p>'+esc(f)+'</p></div>';
}).join("");

/* ---------- sections ---------- */
function tableHtml(t){
  if(!t||!t.cols)return "";
  return '<div class="panel" style="margin-top:36px"><div class="scroller"><table>'+
    '<thead><tr>'+t.cols.map(function(c){return '<th scope="col">'+esc(c)+'</th>'}).join("")+'</tr></thead>'+
    '<tbody>'+t.rows.map(function(r){
      return '<tr>'+r.map(function(c,i){return '<td'+(i===0?' style="white-space:nowrap"':'')+'>'+esc(c)+'</td>'}).join("")+'</tr>';
    }).join("")+'</tbody></table></div></div>';
}
function entHtml(e){
  var flag=e.flag?'<span class="ent__flag f-'+esc(e.flag)+'">'+esc(e.flag)+'</span>':"";
  return '<div class="ent">'+
    '<div class="ent__top"><span class="ent__name">'+esc(e.name)+'</span>'+
      (e.meta?'<span class="ent__meta">'+esc(e.meta)+'</span>':"")+flag+'</div>'+
    '<dl>'+(e.fields||[]).map(function(f){
      return '<dt>'+esc(f[0])+'</dt><dd>'+esc(f[1])+'</dd>';
    }).join("")+'</dl>'+
    (e.note?'<div class="ent__note">'+esc(e.note)+'</div>':"")+
    srcLink(e.src,"ent__src")+
  '</div>';
}
var host=$("#repSections");
if(host) host.innerHTML=R.sections.map(function(s,i){
  var paras=(s.paras||[]).map(function(p){return '<p class="body">'+esc(p)+'</p>'}).join("");
  var ents=(s.entries&&s.entries.length)?'<div class="ents">'+s.entries.map(entHtml).join("")+'</div>':"";
  return '<section class="sec rv" id="s'+(i+1)+'">'+
    '<div class="wrap">'+
      '<div class="sec__n">'+esc(s.n||("0"+(i+1)))+' / '+esc(s.kicker||"")+'</div>'+
      '<h2 class="sec__t">'+esc(s.title)+'</h2>'+
      (s.intro?'<p class="sec__i">'+esc(s.intro)+'</p>':"")+
      paras+tableHtml(s.table)+ents+
    '</div></section>';
}).join("");

/* ---------- gaps ---------- */
var gaps=$("#repGaps");
if(gaps) gaps.innerHTML=R.gaps.map(function(g,i){
  return '<div class="gap"><span class="n">Limit '+String(i+1).padStart(2,"0")+'</span>'+esc(g)+'</div>';
}).join("");

/* ---------- method and sources ---------- */
var method=$("#repMethod");
if(method) method.innerHTML='<p class="body" style="max-width:70ch">'+esc(R.method)+'</p>';
var srcs=$("#repSources");
if(srcs) srcs.innerHTML='<div class="srclist">'+R.sources.map(function(s){
  return '<a href="'+esc(s.u)+'" target="_blank" rel="noopener">'+esc(s.t)+'</a>';
}).join("")+'</div>';
var cnt=$("#repSrcCount");
if(cnt) cnt.textContent=R.sources.length;

/* ---------- reveal the injected sections ---------- */
if("IntersectionObserver" in window){
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{threshold:.04});
  $$("#repSections .rv").forEach(function(el){o.observe(el)});
  setTimeout(function(){$$("#repSections .rv").forEach(function(el){el.classList.add("in")})},2500);
}else{$$("#repSections .rv").forEach(function(el){el.classList.add("in")})}

/* ---------- title and social tags follow the data ---------- */
if(R.title){
  document.title=R.title+" | Freedom Institute";
  var og=document.querySelector('meta[property="og:title"]'); if(og)og.setAttribute("content",R.title);
  var od=document.querySelector('meta[property="og:description"]'); if(od)od.setAttribute("content",R.standfirst);
}
})();
