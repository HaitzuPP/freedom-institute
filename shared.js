/* Freedom Institute: shared page chrome. Safe to load on every page. */
(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
window.FI={$:$,$$:$$};

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
window.FI.esc=esc;

/* ---------- toast ---------- */
var toastT;
window.FI.toast=function(msg){
  var t=$("#toast"); if(!t)return;
  t.textContent=msg; t.classList.add("on");
  clearTimeout(toastT); toastT=setTimeout(function(){t.classList.remove("on")},2100);
};

/* ---------- theme ---------- */
var root=document.documentElement, tBtn=$("#theme"), tLabel=$("#themeLabel");
function store(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function recall(k){try{return localStorage.getItem(k)}catch(e){return null}}
function applyTheme(t){
  if(t==="dark"){root.setAttribute("data-theme","dark")}else{root.removeAttribute("data-theme")}
  if(tLabel)tLabel.textContent=(t==="dark")?"Light":"Dark";
  if(tBtn){
    tBtn.setAttribute("aria-pressed",t==="dark"?"true":"false");
    tBtn.setAttribute("aria-label",t==="dark"?"Switch to the light theme":"Switch to the dark theme");
  }
}
var systemDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");
applyTheme(recall("fi-theme") || (systemDark&&systemDark.matches?"dark":"light"));
if(tBtn){
  tBtn.addEventListener("click",function(){
    var next=root.getAttribute("data-theme")==="dark"?"light":"dark";
    applyTheme(next); store("fi-theme",next);
  });
}
if(systemDark&&systemDark.addEventListener){
  systemDark.addEventListener("change",function(e){ if(!recall("fi-theme")) applyTheme(e.matches?"dark":"light") });
}

/* ---------- clock ---------- */
var clock=$("#clock");
if(clock){
  var tick=function(){
    var d=new Date();
    clock.textContent=String(d.getUTCHours()).padStart(2,"0")+":"+String(d.getUTCMinutes()).padStart(2,"0")+" UTC";
  };
  tick(); setInterval(tick,10000);
}

/* ---------- mobile menu ---------- */
var burger=$("#burger"), menu=$("#menu");
if(burger&&menu){
  burger.addEventListener("click",function(){
    var o=menu.classList.toggle("open");
    this.setAttribute("aria-expanded",o?"true":"false");
  });
  menu.addEventListener("click",function(e){if(e.target.tagName==="A")menu.classList.remove("open")});
}

/* ---------- scroll progress ---------- */
var prog=$("#progress");
if(prog){
  window.addEventListener("scroll",function(){
    var h=document.documentElement;
    var p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);
    prog.style.width=(p*100).toFixed(2)+"%";
  },{passive:true});
}

/* ---------- reveal, scroll-spy, count-up ---------- */
if("IntersectionObserver" in window){
  var rvObs=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");rvObs.unobserve(e.target)}})
  },{threshold:.08});
  $$(".rv").forEach(function(el){rvObs.observe(el)});
  setTimeout(function(){$$(".rv").forEach(function(el){el.classList.add("in")})},2500);

  var spyLinks=$$(".rail a[data-spy]");
  if(spyLinks.length){
    var spyObs=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting) spyLinks.forEach(function(a){a.classList.toggle("active",a.dataset.spy===e.target.id)});
      });
    },{rootMargin:"-140px 0px -65% 0px"});
    spyLinks.forEach(function(a){var el=document.getElementById(a.dataset.spy); if(el)spyObs.observe(el)});
  }

  $$("[data-count]").forEach(function(el){
    el.textContent=Number(el.dataset.count).toLocaleString("en-US")+(el.dataset.suffix||"");
  });
  var counters=$$("[data-count]");
  if(counters.length){
    var mObs=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        mObs.unobserve(e.target);
        $$("[data-count]",e.target).forEach(function(el){
          var end=parseFloat(el.dataset.count), sfx=el.dataset.suffix||"", t0=performance.now(), dur=1100;
          (function step(t){
            var k=Math.min(1,(t-t0)/dur), e2=1-Math.pow(1-k,3);
            el.textContent=Math.round(end*e2).toLocaleString("en-US")+(k===1?sfx:"");
            if(k<1)requestAnimationFrame(step);
          })(t0);
        });
      });
    },{threshold:.3});
    $$("[data-countgroup]").forEach(function(g){mObs.observe(g)});
  }
}else{
  $$(".rv").forEach(function(el){el.classList.add("in")});
  $$("[data-count]").forEach(function(el){el.textContent=Number(el.dataset.count).toLocaleString("en-US")+(el.dataset.suffix||"")});
}

/* ---------- overlay utilities (drawer + modal) ---------- */
function on(sel){var e=$(sel);return !!(e&&e.classList.contains("on"))}
window.FI.anyOverlayOpen=function(){return on("#drawer")||on("#cmp")};
window.FI.lockBody=function(){document.body.classList.add("locked")};
window.FI.unlockBody=function(){if(!window.FI.anyOverlayOpen())document.body.classList.remove("locked")};
window.FI.trapTab=function(container,e){
  if(e.key!=="Tab"||!container)return;
  var f=$$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',container)
        .filter(function(el){return el.offsetParent!==null});
  if(!f.length)return;
  var first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
};

/* ---------- sortable table headers ---------- */
window.FI.wireSort=function(tableId,state,render){
  $$("#"+tableId+" thead th").forEach(function(th){
    var k=th.dataset.k;
    if(!k||k==="rank"||k==="trend"){th.setAttribute("scope","col");return}
    th.setAttribute("scope","col");
    var b=document.createElement("button");
    b.type="button"; b.className="sortbtn"; b.innerHTML=th.innerHTML;
    th.innerHTML=""; th.appendChild(b);
    b.addEventListener("click",function(){
      if(state.sort===k){state.dir*=-1}else{state.sort=k;state.dir=(k==="name"||k==="cat")?1:-1}
      $$("#"+tableId+" thead th").forEach(function(x){x.classList.remove("sorted");x.removeAttribute("aria-sort")});
      th.classList.add("sorted");
      th.setAttribute("aria-sort",state.dir===1?"ascending":"descending");
      render();
    });
  });
};

/* ---------- image fallback: a failed photo degrades to a clean plate ---------- */
function markFailed(img){
  img.setAttribute("data-failed","");
  var fig=img.closest(".shot");
  if(fig)fig.setAttribute("data-failed","");
}
$$(".shot img").forEach(function(img){
  img.addEventListener("error",function(){markFailed(img)});
  if(img.complete&&img.naturalWidth===0)markFailed(img);
});

/* ---------- newsletter ---------- */
var signup=$("#signup");
if(signup) signup.addEventListener("submit",function(e){e.preventDefault();this.reset();window.FI.toast("Concept page; no list yet")});
})();
