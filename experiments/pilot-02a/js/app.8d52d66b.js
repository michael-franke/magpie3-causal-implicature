(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},a=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1335a3e6":"3abed9a7"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,o[1](c)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/magpie3-causal-implicature/experiments/pilot-02a/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1:function(e,t){},2:function(e,t){},"4cb0":function(e,t){e.exports=[{itemNr:1,itemName:"spaceColony",condition:"association",context:"You are leading a group of colonists to a far away planet called Xelifan-3. To survive on Xelifan-3, the colonists need constant supply of the seeds of a plant called xeliherb, which grows sparsely and only on Xelifan-3. You will need to cultivate xeliherb to ensure survival of the colonists. Your science team have explored the planet and found that ... ",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop.",furtherContext:"However, the cultivation of ralocrop is costly (water, energy resources).",taskQuestion:"Based on the evidence reported by your science team, would you decide to cultivate both xeliherb and ralocrop on the fields available to your colony for agriculture, or would you only cultivate xeliherb?"},{itemNr:1,itemName:"spaceColony",condition:"intervention",context:"You are leading a group of colonists to a far away planet called Xelifan-3. To survive on Xelifan-3, the colonists need constant supply of the seeds of a plant called xeliherb, which grows sparsely and only on Xelifan-3. You will need to cultivate xeliherb to ensure survival of the colonists. Your science team have explored the planet and found that ... ",criticalSentence:"... a high yield of xeliherb was obtained whenever another plant called ralocrop was cultivated as well.",furtherContext:"However, the cultivation of ralocrop is costly (water, energy resources).",taskQuestion:"Based on the evidence reported by your science team, would you decide to cultivate both xeliherb and ralocrop on the fields available to your colony for agriculture, or would you only cultivate xeliherb?"},{itemNr:1,itemName:"spaceColony",condition:"commonCause",context:"You are leading a group of colonists to a far away planet called Xelifan-3. To survive on Xelifan-3, the colonists need constant supply of the seeds of a plant called xeliherb, which grows sparsely and only on Xelifan-3. You will need to cultivate xeliherb to ensure survival of the colonists. Your science team have explored the planet and found that ... ",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop. But they also found that ralocrop only grows on particularly fertile grounds.",furtherContext:"However, the cultivation of ralocrop is costly (water, energy resources).",taskQuestion:"Based on the evidence reported by your science team, would you decide to cultivate both xeliherb and ralocrop on the fields available to your colony for agriculture, or would you only cultivate xeliherb?"},{itemNr:1,itemName:"spaceColony",condition:"deniedCausation",context:"You are leading a group of colonists to a far away planet called Xelifan-3. To survive on Xelifan-3, the colonists need constant supply of the seeds of a plant called xeliherb, which grows sparsely and only on Xelifan-3. You will need to cultivate xeliherb to ensure survival of the colonists. Your science team have explored the planet and found that ... ",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop. But there is no evidence that the cultivation of ralocrop causes a better yield of xeliherb.",furtherContext:"However, the cultivation of ralocrop is costly (water, energy resources).",taskQuestion:"Based on the evidence reported by your science team, would you decide to cultivate both xeliherb and ralocrop on the fields available to your colony for agriculture, or would you only cultivate xeliherb?"}]},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=o("7591"),a=o.n(r),i=o("3665"),l=function(){var e=this,t=e._self._c;return t("Experiment",{attrs:{title:"Decision-making experiment"}},[t("InstructionScreen",{attrs:{title:"Welcome"}},[e._v(" In this short experiment you will first read a description about a fictitious context in which you are supposed to make an decision based on some information you received from others. Please read the context information very carefully and make your decision deliberately. "),t("p"),e._v(" After your choice, we will ask you to explain your choice in a few words. ")]),e._l(e.items,(function(o,n){return[t("Screen",{key:n},[t("Slide",[t("h2",[t("strong",[e._v("Context")])]),t("p",[e._v("You are leading a group of colonists to a far away planet called Xelifan-3. The information you received from Mission Control when you departed months ago is this:")]),t("div",{staticStyle:{"background-color":"#FF9999"}},[t("strong",[e._v("Information from Mission Control:")]),e._v(" "),t("br"),e._v(" To survive on Xelifan-3, you need constant supply of the seeds of a plant called xeliherb, which grows exclusively on Xelifan-3.")]),t("p",[e._v("Prior to arrival on Xeliherb-3 your Science Team has been sent ahead to explore the planet. You have since lost contact with the Science Team, but you did receive one short report. Here is what the Science Team reported:")]),t("div",{staticStyle:{"background-color":"#AAAAFF"}},[t("strong",[e._v("Information from Science Team:")]),e._v(" "),t("br"),e._v(" A high yield of xeliherb is associated with the presence of ralocrop. ")]),t("p",[e._v(" Ralocrop is another plant, which is not exclusive to Xelifan-3. It can be found throughout the galaxy and is well-known. It is also well-known that the cultivation of ralocrop is costly (water, energy resources). ")]),t("p",[t("strong",[e._v("Question:")]),e._v(" "+e._s(o.taskQuestion))]),t("ForcedChoiceInput",{attrs:{response:e.$magpie.measurements.response,options:["both xeliherb and ralocrop","only xeliherb"]},on:{"update:response":[function(t){return e.$set(e.$magpie.measurements,"response",t)},function(t){return e.$magpie.saveAndNextScreen()}]}}),t("Record",{attrs:{data:{trialNR:n,itemNr:o.itemNr,itemName:o.itemName,condition:o.condition}}})],1)],1),t("Screen",{key:n},[t("Slide",[t("p",[e._v(" Please give a short explanation for why you chose to cultivate "+e._s(e.getPreviousResponse())+"! ")]),t("TextareaInput",{attrs:{response:e.$magpie.measurements.justification},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"justification",t)}}}),e.$magpie.measurements.justification?t("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v(" Submit ")]):e._e(),t("Record",{attrs:{data:{trialNR:n+1,itemNr:o.itemNr,itemName:o.itemName,condition:o.condition}}})],1)],1),t("Screen",{key:n},[t("Slide",[t("p",[e._v(" Due to atmospheric conditions and technical problems you are about to lose contact to an outpost on the planet. You have only very little time to send a short message to the colonists in this outpost before all contact breaks off for potentially a long time. The colonists in the outpost know about xeliherb and its importance. They know the costs associated with cultivation of ralocrop. What they do not know is what your Science Team reported. You cannot forward the original report. Please type what you recall from the Science Team's report into the text box, so that the other colonists can make a decision like you did on their own! ")]),t("TextareaInput",{attrs:{response:e.$magpie.measurements.reproduction},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"reproduction",t)}}}),e.$magpie.measurements.reproduction?t("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v(" Submit ")]):e._e(),t("Record",{attrs:{data:{trialNR:n+2,itemNr:o.itemNr,itemName:o.itemName,condition:o.condition}}})],1)],1)]})),t("PostTestScreen"),t("SubmitResultsScreen")],2)},s=[],c=o("4cb0"),u=o.n(c),d=o("2ef0"),p=o.n(d);console.log("Hi, I'm Pilot 02a!");var h={name:"App",data(){return{items:u.a.slice(0,1)}},computed:{_(){return p.a}},methods:{getPreviousResponse:function(){return this.$magpie.trialData[1][0].response}}},f=h,m=o("2877"),y=Object(m["a"])(f,l,s,!1,null,null,null),v=y.exports,b={experimentId:"93",serverUrl:"https://mcmpact.ikw.uni-osnabrueck.de/magpie/",socketUrl:"wss://mcmpact.ikw.uni-osnabrueck.de/magpie/socket",completionUrl:"https://app.prolific.co/submissions/complete?cc=C13NOKGZ",contactEmail:"mchfranke@gmail.com",mode:"prolific",language:"en"};n["default"].config.productionTip=!1,n["default"].use(a.a,{prefix:"Canvas"}),n["default"].use(i["a"],b),new n["default"]({render:e=>e(v)}).$mount("#app")}});
//# sourceMappingURL=app.8d52d66b.js.map