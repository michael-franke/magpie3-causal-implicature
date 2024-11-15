(function(){var e={9631:function(e){e.exports=[{itemNr:1,itemName:"spaceColony",F1_informationSource:"direct",F2_listenerRole:"scientist",condition:"direct_scientist",listenerRelevance:"Test",context:"To survive on Xelifan-3, the colonists need constant supply of a plant called xeliherb, which grows sparsely and only on Xelifan-3.",speakerIntention:"A scientist has explored the planet and informed you (also as a scientist) that …",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop.",furtherContext:"However, the cultivation of <strong>ralocrop</strong> is costly (water, energy resources).",taskQuestion:"Based on the evidence you have, how likely are you to recommend that the colonists cultivate <strong>ralocrop</strong>?"},{itemNr:2,itemName:"spaceColony",F1_informationSource:"indirect",F2_listenerRole:"scientist",condition:"indirect_scientist",listenerRelevance:"Test",context:"To survive on Xelifan-3, the colonists need constant supply of a plant called xeliherb, which grows sparsely and only on Xelifan-3.",speakerIntention:"You (as a scientist) read the protocol from another scientist and found that …",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop.",furtherContext:"However, the cultivation of <strong>ralocrop</strong> is costly (water, energy resources).",taskQuestion:"Based on the evidence you have, how likely are you to recommend that the colonists cultivate <strong>ralocrop</strong>?"},{itemNr:3,itemName:"spaceColony",F1_informationSource:"direct",F2_listenerRole:"colonist",condition:"direct_colonist",listenerRelevance:"Test",context:"To survive on Xelifan-3, the colonists need constant supply of a plant called xeliherb, which grows sparsely and only on Xelifan-3.",speakerIntention:"A scientist has explored the planet and informed you (as a colonist) that …",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop.",furtherContext:"However, the cultivation of <strong>ralocrop</strong> is costly (water, energy resources).",taskQuestion:"Based on the evidence you have, how likely are you to decide to cultivate <strong>ralocrop</strong> in the fields available for your colony’s agriculture?"},{itemNr:4,itemName:"spaceColony",F1_informationSource:"indirect",F2_listenerRole:"colonist",condition:"direct_colonist",listenerRelevance:"Test",context:"To survive on Xelifan-3, the colonists need constant supply of a plant called xeliherb, which grows sparsely and only on Xelifan-3.",speakerIntention:"You (as a colonist) read the protocol from a scientist and found that …",criticalSentence:"... a high yield of xeliherb is associated with the presence of another plant called ralocrop.",furtherContext:"However, the cultivation of <strong>ralocrop</strong> is costly (water, energy resources).",taskQuestion:"Based on the evidence you have, how likely are you to decide to cultivate <strong>ralocrop</strong> in the fields available for your colony’s agriculture?"}]},5699:function(e,t,n){"use strict";var o=n(5471),i=n(4302),r=n.n(i),a=n(6093),s=function(){var e=this,t=e._self._c;return t("Experiment",{attrs:{title:"Decision-making experiment"}},[t("InstructionScreen",{attrs:{title:"Welcome"}},[e._v(" In this short experiment you will first read a description about a fictitious context in which you are supposed to make a decision based on some information you received from others. Please read the context information very carefully and make your decision deliberately. "),t("p"),e._v(" After your choice, we will ask you to explain your choice in a few words. ")]),e._l(e.items,(function(n,o){return[t("Screen",{attrs:{label:"background"}},[t("p",[t("strong",[e._v("Background:")]),e._v(" We are now at an age of great exploration and discovery. Humanity has reached the stars, venturing to distant planets in search of new frontiers and resources. One of these new worlds is a remote, resource-rich planet called "),t("strong",[e._v("Xelifan-3")]),e._v(".")]),t("p",[e._v("The year is 2184, and Xelifan-3 has become home to a small but determined group of colonists. Their survival depends on a rare plant known as "),t("strong",[e._v("Xeliherb")]),e._v(", a life-sustaining resource native to the planet. This unique plant has extraordinary properties, providing essential nutrients necessary for survival on the planet. Furthermore, it holds potential as a key ingredient in medicines capable of curing diseases, which has attracted significant interest from scientists around the galaxy.")]),t("p",[e._v("However, xeliherb grows only "),t("strong",[e._v("sparsely")]),e._v(", and its limited availability has made life on Xelifan-3 a constant struggle.")]),t("button",{on:{click:function(t){return e.$magpie.nextScreen()}}},[e._v("Next")])]),t("Screen",{key:o},["scientist"===n.F2_listenerRole?t("Slide",[t("p",[e._v(" You are one of the "),t("strong",[e._v("scientists")]),e._v(", part of an elite team tasked with uncovering the secrets of "),t("strong",[e._v("Xeliherb.")])]),t("p",[e._v(" Your mission centers on deep exploration of Xeliherb’s properties, with the hope of unlocking its potential for humanity’s future. Each piece of data and sample collected offers new insights into how Xeliherb grows, and what methods might increase its yield over time. From your remote research station, you analyze information sent by the colonists, using scientific expertise to develop techniques that may enhance Xeliherb’s growth and sustainability. ")]),t("p",[e._v(" However, there is sometimes tension between scientists and colonists. While the scientists pursue deeper understanding and growth strategies, the colonists are focused on immediate survival. Each group’s priorities affect how they view and interpret information about "),t("strong",[e._v("Xeliherb")]),e._v(". ")]),t("button",{on:{click:function(t){return e.$magpie.nextSlide()}}},[e._v("I'm ready!")])]):e._e(),"colonist"===n.F2_listenerRole?t("Slide",[t("p",[e._v(" You are one of the "),t("strong",[e._v("colonists")]),e._v(", part of a determined group that has braved the unknown to settle on Xelifan-3 in search of a new beginning. ")]),t("p",[e._v(" For the colony, survival depends on securing enough Xeliherb to meet daily needs. Living on the frontlines, you’re closely connected to the land, and every bit of Xeliherb collected is crucial. Your work revolves around locating new patches, gathering as much Xeliherb as possible, and ensuring a steady supply to support the community. The immediate priority is clear: there must be more Xeliherb. ")]),t("p",[e._v(" However, there is sometimes tension between scientists and colonists. While the scientists pursue deeper understanding and growth strategies, the colonists are focused on immediate survival. Each group’s priorities affect how they view and interpret information about "),t("strong",[e._v("Xeliherb")]),e._v(". ")]),t("button",{on:{click:function(t){return e.$magpie.nextSlide()}}},[e._v("I'm ready!")])]):e._e(),n?t("Slide",[t("p",[t("strong",[e._v(" As a "+e._s("scientist"===n.F2_listenerRole?"scientist":"colonist")+", what is one of your main objectives in working with the "+e._s("scientist"===n.F2_listenerRole?"colonists":"scientists")+"? (Please select one correct answer) ")])]),t("MultipleChoiceInput",{attrs:{response:e.$magpie.measurements.attentionCheck,randomize:!0,options:["Ensure that there is a steady supply of Xeliherb to meet daily survival needs","Explore the galaxy for new planets that could be suitable for future colonization","Ensure that all colonists are motivated and willing to contribute to community projects","Gather data to uncover patterns in Xeliherb growth that could inform future research"]},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"attentionCheck",t)}}}),void 0!==e.$magpie.measurements.attentionCheck?t("div",[e.$magpie.measurements.attentionCheck===e.correctAnswers[n.F2_listenerRole]?t("p",[e._v(" Correct answer! ")]):t("p",[e._v(" Please review your objectives again! ")]),e.$magpie.measurements.attentionCheck===e.correctAnswers[n.F2_listenerRole]?t("button",{on:{click:function(t){return e.$magpie.nextSlide()}}},[e._v(" Next ")]):t("button",{on:{click:function(t){return e.$magpie.nextScreen("background")}}},[e._v(" Read again. ")])]):e._e()],1):e._e(),"indirect"===n.F1_informationSource?t("Slide",[e._v(" Now, it is time to make a decision. "),t("br"),t("br"),e._v(" While navigating the challenges of life on Xelifan-3, a breakthrough occurs. One evening, a weathered journal is found in the ruins of an old research outpost, a relic from a science team that explored the planet decades ago. The journal is fragile and faded, but its contents are shocking. Here is "),t("strong",[e._v("what the science team wrote in their journal")]),e._v(": "),t("br"),t("br"),t("strong",[e._v("The presence of Xeliherb is associatied with another plant called Ralocrop.")]),t("br"),t("br"),t("strong",[e._v("Question:")]),e._v(" How likely are you to cultivate additional Ralocrop? "),t("SliderInput",{attrs:{left:"very unlikely",right:"very likely",response:e.$magpie.measurements.probs},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"probs",t)}}}),e._v(" "+e._s(e.$magpie.measurements.probs)+"% "),e.$magpie.measurements.probs?t("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v("Submit")]):e._e(),t("Record",{attrs:{data:{trialNR:o,itemNr:n.itemNr,itemName:n.itemName,condition:n.condition,informationSource:n.F1_informationSource,listenerRole:n.F2_listenerRole,attentionCheckResult:e.$magpie.measurements.attentionCheck===e.correctAnswers[n.F2_listenerRole]}}})],1):e._e(),"direct"===n.F1_informationSource?t("Slide",[e._v(" Now, it is time to make a decision. "),t("br"),t("br"),e._v(" While navigating the challenges of life on Xelifan-3, a breakthrough occurs. A member of your supporting science team, stationed at a remote research facility, shares an urgent discovery. Here is "),t("strong",[e._v("what the science team messaged to you")]),e._v(": "),t("br"),t("br"),t("strong",[e._v("The presence of Xeliherb is associatied with another plant called Ralocrop.")]),t("br"),t("br"),t("strong",[e._v("Question:")]),e._v(" How likely are you to cultivate additional Ralocrop? "),t("SliderInput",{attrs:{left:"very unlikely",right:"very likely",response:e.$magpie.measurements.probs},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"probs",t)}}}),e._v(" "+e._s(e.$magpie.measurements.probs)+"% "),e.$magpie.measurements.probs?t("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v("Submit")]):e._e(),t("Record",{attrs:{data:{trialNR:o,itemNr:n.itemNr,itemName:n.itemName,condition:n.condition,informationSource:n.F1_informationSource,listenerRole:n.F2_listenerRole,attentionCheckResult:e.$magpie.measurements.attentionCheck===e.correctAnswers[n.F2_listenerRole]}}})],1):e._e()],1)]})),t("PostTestScreen"),t("SubmitResultsScreen")],2)},l=[],c=n(9631),u=n.n(c),d=n(2543),h=n.n(d),p=h().sample(["colonist","scientist"]),f=h().sample(["direct","indirect"]);console.log("Hi, I'm Pilot 04! I currently live in root. Excited to go live!");var m={name:"App",data(){return{items:h().shuffle(u()).slice(0,1),listenerTyp:p,selectedTrial:null,source:f,correctAnswers:{colonist:"Ensure that there is a steady supply of Xeliherb to meet daily survival needs",scientist:"Gather data to uncover patterns in Xeliherb growth that could inform future research"},showFeedback:!1,feedbackMessage:"",feedbackColor:"red"}},computed:{_(){return h()}},methods:{getPreviousResponse:function(){return this.$magpie.trialData[1][0].response},selectTrial(e){this.selectedTrial=e,this.validateResponse()}}},v=m,g=n(1656),y=(0,g.A)(v,s,l,!1,null,null,null),b=y.exports,_={experimentId:"4",serverUrl:"https://magpie-cogsciprag.fly.dev",socketUrl:"wss://magpie-cogsciprag.fly.dev/socket",completionUrl:"https://app.prolific.co/submissions/complete?cc=C13NOKGZ",contactEmail:"hening.wang@outlook.com",mode:"directLink",language:"en"};o["default"].config.productionTip=!1,o["default"].use(r(),{prefix:"Canvas"}),o["default"].use(a.Ay,_),new o["default"]({render:e=>e(b)}).$mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".f8887490.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="magpie3-causal-implicature:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/magpie3-causal-implicature/experiments/pilot-indirectSource/"}(),function(){var e={524:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkmagpie3_causal_implicature"]=self["webpackChunkmagpie3_causal_implicature"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5699)}));o=n.O(o)})();
//# sourceMappingURL=app.6c58e2d6.js.map