/* Freedom Institute: threat-model panel */
(function(){
"use strict";
var $=window.FI.$, $$=window.FI.$$, esc=window.FI.esc;
/* ============ THREAT TOOL ============ */
var tState={profile:"journalist",tier:"pressured"};
var PRIOS={
  journalist:[
    ["Where source metadata lives","Who can see that you and a source spoke, even when the words are encrypted."],
    ["Device seizure posture","What a powered-off device gives up, and what survives a border inspection."],
    ["Provider response to legal demand","What the provider holds and what it has actually handed over when asked."],
    ["Account recovery paths","The recovery phone or email is usually the weakest link in the chain."],
    ["Local network observation","What your ISP and any campus or hotel network can infer from traffic shape."]
  ],
  organiser:[
    ["Group membership exposure","Who can enumerate the members of a group, including the platform itself."],
    ["Real-time location leakage","Presence, typing, and delivery receipts place people at a time and a place."],
    ["Circumvention legality","Whether using the tool is itself the offence in your jurisdiction."],
    ["Backup and cloud sync","Encrypted chats routinely land unencrypted in someone else's backup."],
    ["Provider response to legal demand","What the provider holds and what it has handed over when asked."]
  ],
  citizen:[
    ["Third-party trackers","How many parties receive your activity without you choosing them."],
    ["Default settings","Products are configured for the business model, not for you."],
    ["Retention period","How long the record of you outlives your use of the service."],
    ["Data export and deletion","Whether you can get your data out and have it actually removed."],
    ["Account recovery paths","The recovery phone or email is usually the weakest link in the chain."]
  ]
};
var TIER_ADD={
  open:null,
  pressured:["Failure behaviour under filtering","What the tool does when it cannot connect; some fall back to plaintext without telling you."],
  closed:["Traffic that looks like circumvention","Blocking is one risk; being identified as someone evading it is the other."]
};
var TIER_RISK={open:["r-lo","Baseline exposure"],pressured:["r-md","Elevated exposure"],closed:["r-hi","Severe exposure"]};
function renderTool(){
  var list=PRIOS[tState.profile].slice(0,4);
  var add=TIER_ADD[tState.tier];
  if(add)list.unshift(add);
  list=list.slice(0,5);
  $("#prioList").innerHTML=list.map(function(i){return '<li><span><span class="t">'+esc(i[0])+'</span><span class="s">'+esc(i[1])+'</span></span></li>'}).join("");
  var r=TIER_RISK[tState.tier];
  var pill=$("#riskPill");pill.className="riskpill "+r[0];pill.textContent=r[1];
}
function wireOpts(sel,key){
  $$(sel+" .opt").forEach(function(b){
    b.addEventListener("click",function(){
      $$(sel+" .opt").forEach(function(x){x.classList.remove("on")});
      b.classList.add("on");tState[key]=b.dataset.v;renderTool();
    });
  });
}
wireOpts("#optProfile","profile");wireOpts("#optTier","tier");
renderTool();


})();
