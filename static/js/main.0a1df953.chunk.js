(this.webpackJsonpspinner=this.webpackJsonpspinner||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(5),o=n.n(l),i=n(6),s=n(1);!function(e){e.first="ease-in",e.last="ease-out",e.mid="linear",e.firstAndLast="ease-in-out"}(a||(a={}));var u,d=function(e){var t=e.disabled,n=e.initialMove,l=e.onCardIndexChanged,o=Object(r.useRef)(0),i=Object(r.useRef)(!1),s=Object(r.useRef)(null),u=Object(r.useMemo)((function(){return f(e.data)}),[e.data]),d=Object(r.useCallback)((function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.firstAndLast,n=s.current,r=o.current,c=Math.floor(u.length/2),l=0,i=r;i<n.children.length+r;i++){var d=i%u.length;i<0&&(d+=u.length);var f=n.children[d%u.length];f.style.transition="top ".concat(e,"s ").concat(t),Math.abs((i-r)%(u.length-1))<2?(f.style.transition="top ".concat(e,"s ").concat(t),f.style.visibility="visible"):(f.style.transition="",f.style.visibility="hidden"),f.style.top="".concat(l>c?-234*c-234*(c+c%2-l):234*l,"px"),l++}}),[u.length]),m=function(){for(var e=1;h(o.current+e);)if(++e===u.length+1)return;b(e)},g=function(){for(var e=-1;h(o.current+e);)if(--e===u.length-1)return;b(e)},v=Object(r.useCallback)((function(){l(function(){var e=o.current%u.length,t=s.current.children[e];return parseInt(t.getAttribute("original-index"),10)}())}),[u.length,l]),b=Object(r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!i.current)if(1===e||-1===e)o.current+=e,o.current<0&&(o.current=u.length+o.current),i.current=!0,d(.2,a.firstAndLast),setTimeout((function(){return i.current=!1}),200),v();else{var t=o.current+e;i.current=!0;var n=setInterval((function(){if(o.current===t)return i.current=!1,void clearInterval(n);o.current+=e/Math.abs(e);var r=a.mid,c=.2;t-o.current===Math.abs(e)-1?(r=a.first,c/=.75):o.current===t&&(r=a.last,c/=.75),d(c,r),v()}),200)}}),[v,u.length,d]),h=function(e){return e<1&&(e=+u.length),e%=u.length,s.current.children[e].classList.contains("disabled")};Object(r.useEffect)((function(){d(),b(n)}),[n,b,d]),Object(r.useEffect)((function(){if(t&&t.length){for(var e=s.current,n=0;n<e.children.length;n++){var a=e.children[n],r=parseInt(a.getAttribute("original-index"),10);-1!==t.indexOf(r)?a.classList.add("disabled"):a.classList.remove("disabled")}b(1)}}),[t,b]);return c.a.createElement("div",{className:"ring ".concat(e.className),ref:s,onClick:function(e){var t=e.target.parentNode;e.clientY-t.getBoundingClientRect().top>1?m():g()}},u.map((function(t){return n=t,e.image?c.a.createElement("div",{key:n,className:"item",style:{backgroundImage:"url(".concat(n,")")},"original-index":e.data.indexOf(n)}):c.a.createElement("div",{key:n,className:"item","original-index":e.data.indexOf(n)},n.replace(/&shy;/gi,"\xad"));var n})))},f=function(e){for(var t,n=Object.assign([],e),a=n.length;0!==a;){var r=Math.floor(Math.random()*a);t=n[a-=1],n[a]=n[r],n[r]=t}return n},m=(n(12),function(e){var t=e.correct,n=e.onClick,a=e.onRing0IndexChanged,r=e.onRing1IndexChanged,l=e.onRing2IndexChanged;return c.a.createElement("div",{className:"spinner",onClick:n},c.a.createElement(d,{className:"ring1",disabled:t,initialMove:6,data:e.data.risks,onCardIndexChanged:a,image:!0}),c.a.createElement(d,{className:"ring2",initialMove:9,data:e.data.events,onCardIndexChanged:r}),c.a.createElement(d,{className:"ring3",initialMove:14,data:e.data.effects,onCardIndexChanged:l}))}),g=(n(13),n(14),function(e){return c.a.createElement("button",{className:"green button check",onClick:e.onClick},"Check")}),v=[0,0,0],b=function(e,t){switch(t.type){case"updateRing0":return Object.assign(v,e,{0:t.index});case"updateRing1":return Object.assign(v,e,{1:t.index});case"updateRing2":return Object.assign(v,e,{2:t.index})}};n(15);!function(e){e.correct="correct",e.wrong="wrong"}(u||(u={}));var h=function(e){return c.a.createElement("div",{className:"feedback ".concat(e.mode)},c.a.createElement("span",null,e.mode),c.a.createElement("button",{className:"grey button continue",onClick:e.onContinue},"Continue"))};n(16);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=c.a.createElement("defs",null,c.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),w=c.a.createElement("title",null,"Back"),y=c.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),x=c.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),j=c.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),k=c.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),N=c.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),C=c.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),R=function(e){var t=e.svgRef,n=e.title,a=E(e,["svgRef","title"]);return c.a.createElement("svg",p({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),O,void 0===n?w:n?c.a.createElement("title",null,n):null,y,x,j,k,N,C)},T=c.a.forwardRef((function(e,t){return c.a.createElement(R,p({svgRef:t},e))})),A=(n.p,function(e){var t=e.gameDataReceived,n=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};return Object(r.useEffect)((function(){window.setGameData=function(e){n({type:"setGameData",data:e})},window.setLevelScore=function(e,t,a){var r,c,l=(null===(r=window.GAMEDATA)||void 0===r?void 0:r.levelsCompleted)||[],o=l.findIndex((function(t){return t.level===e}));o>-1?l[o].score>t&&(l[o].score=t):l.push({level:e,score:t,maxScore:a});var i={levelsCompleted:l,settings:(null===(c=window.GAMEDATA)||void 0===c?void 0:c.settings)||{}};n({type:"setGameData",data:i})},window.GAMEDATA=null,window.getGameData=function(){return window.GAMEDATA},window.addEventListener("message",(function(e){e.data.hasOwnProperty("userId")&&(window.GAMEDATA=e.data,t(e.data))}),!1)}),[t]),c.a.createElement("div",{className:"close"},c.a.createElement(T,{onClick:function(){n({type:"exit"})}}))}),M=(n(17),function(e){return c.a.createElement("div",{className:"basedialog ".concat(e.className)},e.children)});function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=c.a.createElement("defs",null,c.a.createElement("style",null,"\n            .star-empty {\n                fill: #f8f8f8;\n                stroke: #b0b0b0;\n                stroke-width: 3px;\n            }\n        ")),D=c.a.createElement("path",{className:"star-empty",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z",transform:"translate(3.223 3.354)"}),G=function(e){var t=e.svgRef,n=e.title,a=I(e,["svgRef","title"]);return c.a.createElement("svg",S({width:141.478,height:134.378,viewBox:"0 0 141.478 134.378",ref:t},a),n?c.a.createElement("title",null,n):null,L,D)},P=c.a.forwardRef((function(e,t){return c.a.createElement(G,S({svgRef:t},e))})),B=(n.p,n(18),function(e){return c.a.createElement(M,{className:"intro-dialog"},c.a.createElement("div",{className:"top"},c.a.createElement("h1",null,e.headerText)),c.a.createElement("div",{className:"center"},c.a.createElement("section",null,e.descriptionText)),c.a.createElement("div",{className:"bottom"},c.a.createElement(P,{className:"star"}),c.a.createElement("span",{className:"stars-to-gain"},e.starsToGainText),c.a.createElement("button",{className:"green button start",onClick:e.onStart},e.startText)))});function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var W,Z=c.a.createElement("defs",null,c.a.createElement("style",null,"\n            .star-full {\n                fill: #fcda00;\n            }\n        ")),_=c.a.createElement("path",{className:"star-full",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z"}),F=function(e){var t=e.svgRef,n=e.title,a=H(e,["svgRef","title"]);return c.a.createElement("svg",J({width:135.033,height:128.282,viewBox:"0 0 135.033 128.282",ref:t},a),n?c.a.createElement("title",null,n):null,Z,_)},Y=c.a.forwardRef((function(e,t){return c.a.createElement(F,J({svgRef:t},e))})),$=(n.p,n(19),function(e){var t=e.total,n=e.mistakes,a=Math.max(t-n,0);Object(r.useEffect)((function(){window.setLevelScore&&window.setLevelScore(1,a,t)}),[a,t]);return c.a.createElement(M,{className:"complete-dialog"},c.a.createElement("div",{className:"block"},c.a.createElement("h1",null,e.headerText)),c.a.createElement("div",{className:"block score"},e.scoreText.replace("{0}",a.toString()).replace("{1}",t.toString())),c.a.createElement("div",{className:"block stars"},function(){for(var e=[],n=0;n<t;n++)e.push(c.a.createElement("div",{key:"star".concat(n)},c.a.createElement(P,null),n<a&&c.a.createElement(Y,{className:"full"})));return e}()),c.a.createElement("div",{className:"bottom"},c.a.createElement("button",{className:"green button",onClick:e.onTryAgain},e.tryAgainText),c.a.createElement("button",{className:"red button",onClick:e.onExit},e.exitText)))}),q=(n(20),function(){return c.a.createElement("div",{className:"loading-background"},c.a.createElement("div",{className:"white-block"},c.a.createElement("div",{className:"outset"}),c.a.createElement("div",{className:"blue-block"})),c.a.createElement("div",{className:"subtext"},"Stay curious"))});!function(e){e[e.intro=0]="intro",e[e.normal=2]="normal",e[e.wrong=4]="wrong",e[e.correct=8]="correct",e[e.complete=16]="complete"}(W||(W={}));var z=function(){var e,t=Object(r.useState)(W.intro),n=Object(s.a)(t,2),a=n[0],l=n[1],o=Object(r.useState)(),d=Object(s.a)(o,2),f=d[0],p=d[1],E=Object(r.useState)({}),O=Object(s.a)(E,2),w=O[0],y=O[1],x=Object(r.useState)([]),j=Object(s.a)(x,2),k=j[0],N=j[1],C=Object(r.useState)(2),R=Object(s.a)(C,2),T=R[0],M=R[1],S=Object(r.useReducer)(b,v),I=Object(s.a)(S,2),L=I[0],D=I[1],G=Object(r.useState)(!0),P=Object(s.a)(G,2),J=P[0],H=P[1],Z=Object(r.useCallback)((function(e){D({type:"updateRing0",index:e})}),[]),_=Object(r.useCallback)((function(e){D({type:"updateRing1",index:e})}),[]),F=Object(r.useCallback)((function(e){D({type:"updateRing2",index:e})}),[]);Object(r.useEffect)((function(){var e=setTimeout((function(){window.GAME_DATA||(console.log("no bridge found, fetching fallback"),fetch("".concat("/spinner","/config/spinner.json")).then((function(e){e.json().then((function(e){K(e),H(!1)}))})))}),300);return function(){clearTimeout(e)}}),[]);var Y=function(){l(W.normal)},z=function(){l(W.normal)},K=function(e){p(e.content),H(!1);var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});y(t)};return Object(r.useEffect)((function(){a===W.normal&&k.length>0&&l(W.complete)}),[k,a]),c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{gameDataReceived:K}),J&&c.a.createElement(q,null),c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"app-center"},a===W.intro&&!!f&&c.a.createElement(B,{onStart:z,headerText:w["intro-header"],descriptionText:w["intro-description"],starsToGainText:null===(e=w["intro-stars-to-gain"])||void 0===e?void 0:e.replace("{0}",f.risks.length.toString()),startText:w["intro-start"]}),a===W.complete&&c.a.createElement($,{onTryAgain:function(){l(W.normal),M(0),N([])},onExit:z,total:(null===f||void 0===f?void 0:f.risks.length)||0,mistakes:T,headerText:w["complete-header"],scoreText:w["complete-score"],tryAgainText:w["complete-try-again"],exitText:w["complete-exit"]}),f&&!!(a&(W.normal|W.wrong|W.correct))&&c.a.createElement(m,{data:f,correct:k,onClick:function(){l(W.normal)},onRing0IndexChanged:Z,onRing1IndexChanged:_,onRing2IndexChanged:F}),a===W.normal&&c.a.createElement(g,{onClick:function(){L[0]===L[1]&&L[1]===L[2]?(l(W.correct),N([].concat(Object(i.a)(k),[L[0]]))):(l(W.wrong),M(T+1))}}),a===W.correct&&c.a.createElement(h,{mode:u.correct,onContinue:Y}),a===W.wrong&&c.a.createElement(h,{mode:u.wrong,onContinue:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.0a1df953.chunk.js.map