(this.webpackJsonpwikiplaydia=this.webpackJsonpwikiplaydia||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo-noback-256.8f258b77.png"},25:function(e,t,a){e.exports=a(63)},30:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(24),r=a.n(i),c=a(2),o=(a(30),a(3)),s=a(5),u=a(31).html2json,m=function(e){return[{title:e.lead.normalizedtitle,content:d(e.lead.sections[0].text)}].concat(Object(s.a)(e.remaining.sections.map((function(e){return{title:e.line,content:d(e.text)}})).filter((function(e){return e.content.length}))))},d=function(e){var t=document.createElement("div");return t.innerHTML=e,u(t.innerHTML).child.flat().filter((function(e){return!e.text||!e.text.includes("\n")})).map((function(e){return f(e)})).flat()},f=function e(t){var a,n,l,i;if(!t)return[];if(t.child&&(t.child=t.child.filter((function(e){return!e.text||!e.text.includes("\n")}))),"text"===t.node)return[Object(o.a)({},t,{tag:"text"})];switch(t.tag){case"a":return!(null===(a=t.attr)||void 0===a?void 0:a.href.startsWith("/wiki"))||(null===(n=t.attr)||void 0===n?void 0:n.href.startsWith("/wiki/Datei"))||(null===(l=t.attr)||void 0===l?void 0:l.href.startsWith("/wiki/Special:"))?[Object(o.a)({},t,{tag:"text",node:"text"})]:t.child[0].text?[{tag:"a",node:"element",text:t.child[0].text,child:[],link:null===(i=t.attr)||void 0===i?void 0:i.href.substr(6)}]:[];case"figure":return[];case"h1":case"h2":case"h3":case"h4":case"ul":case"li":case"td":case"tr":case"th":return[Object(o.a)({},t,{child:t.child?t.child.map((function(t){return e(t)})).flat():[]})];case"table":return[Object(o.a)({},t,{child:e(t.child[0])})];case"style":return[];default:return t.child?t.child.map((function(t){return e(t)})).flat():[]}},w=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];switch(t.tag){case"a":return t.link?n?l.a.createElement("span",{className:"w3-large",dangerouslySetInnerHTML:{__html:t.text}}):l.a.createElement("button",{className:"w3-btn-small w3-border w3-border-green w3-round w3-small",onClick:function(){return a(t.link)}},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.text}})):l.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.text}});case"text":return l.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.text}});case"ul":return l.a.createElement("ul",{className:""},t.child.filter((function(e){return e.child.length})).map((function(t){return e(t,a,n)})));case"h1":case"h2":case"h3":case"h4":case"li":case"td":case"tr":case"th":case"tbody":return t.child.length?l.a.createElement(t.tag,null,t.child.map((function(t){return e(t,a,n)}))):[];case"table":return l.a.createElement("div",{className:"w3-responsive"},l.a.createElement("table",{className:"w3-table-all"},t.child.map((function(t){return e(t,a,n)}))))}},g=a(9),h=a.n(g),p=(a(58),function(e){var t=e.section,a=e.loadNew,i=e.disabled,r=void 0!==i&&i,o=Object(n.useState)(!1),s=Object(c.a)(o,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){m(!1)}),[t]),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"w3-button section-header w3-border w3-margin-top",onClick:function(){return m(!u)}},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.title}})),u&&l.a.createElement("div",null,t.content.map((function(e){return l.a.createElement("span",null,w(e,a,r))}))))}),v=a(11),b=a.n(v),E=(a(59),function(e){var t=e.article,a=e.setArticle,i=e.setProgress;Object(n.useEffect)((function(){i(1),window.scrollTo({top:0,left:0})}),[t]);var r=function(e){i(0),window.scrollTo({top:0,left:0}),h.a.get("https://de.wikipedia.org/api/rest_v1/page/mobile-sections/"+e,{onDownloadProgress:function(e){return i(e.loaded/1e5)}}).then((function(e){a(m(e.data))})).catch((function(e){return console.log(e)}))};return t.length?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,t[0].title),t[0].content.map((function(e){return l.a.createElement("span",null,w(e,r))}))),t.slice(1).map((function(e){return l.a.createElement(p,{loadNew:r,section:e})}))):l.a.createElement("div",{className:"load-logo-container"},l.a.createElement("img",{className:"w3-image w3-opacity",width:150,height:150,src:b.a,alt:"Wikiplaydia Logo"}))}),k=function(e){var t=e.show,a=e.setShowGoal,n=e.article;return e.goal&&n.length&&t?l.a.createElement("div",{className:"w3-modal"},l.a.createElement("div",{className:"w3-modal-content w3-container w3-round w3-animate-opacity"},l.a.createElement("div",{onClick:function(){return a(!1)},className:"w3-red w3-button w3-round w3-card",style:{position:"fixed",top:20,right:20}},"Schlie\xdfen ",l.a.createElement("i",{className:"fas fa-window-close"})),l.a.createElement("div",null,l.a.createElement("h1",null,n[0].title),n[0].content.map((function(e){return l.a.createElement("span",null,w(e,(function(){}),!0))}))),n.slice(1).map((function(e){return l.a.createElement(p,{loadNew:function(){},section:e,disabled:!0})})))):null},N=(a(60),a(13)),S=function(){navigator.share?navigator.share({title:"Wikiplaydia",text:"Guck dir mal dieses Spiel an.",url:"https://beneluwi.github.io/wikiplaydia/"}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)})):navigator.clipboard.writeText("https://beneluwi.github.io/wikiplaydia/")},y=function(e){var t=e.startNewGame,a=e.setGameState,i=e.gameState,r=e.newGame,o=e.showGoal,s=e.setShowGoal,u=e.goal,m=Object(n.useState)(!1),d=Object(c.a)(m,2),f=d[0],w=d[1],g=Object(N.b)(f,null,{from:{height:0,width:200},enter:{height:200},leave:{height:0}});return l.a.createElement("div",null,l.a.createElement("div",{className:"w3-bar wikiplaydia-green"},l.a.createElement("button",{className:"w3-button w3-bar-item",onClick:function(){return w(!f)}},l.a.createElement("i",{className:"fa fa-ellipsis-h"})),l.a.createElement("span",{onClick:S,className:"w3-bar-item w3-right"},"Wikiplaydia"),l.a.createElement("button",{className:"w3-bar-item w3-button",onClick:function(){return s(!o)}},l.a.createElement("i",{className:"fa fa-info-circle"})," ",null===u||void 0===u?void 0:u.title),!r&&l.a.createElement("span",{className:"w3-bar-item"},"Klicks: ",i.clicks)),g.map((function(e){var n=e.item,i=(e.key,e.props);return n&&l.a.createElement(N.a.div,{className:"wikiplaydia-green sidebar",style:i},!r&&l.a.createElement("button",{onClick:function(){t(),w(!f)},className:"w3-bar-item w3-button"},l.a.createElement("i",{className:"fa fa-redo"}),"\xa0Neustarten"),l.a.createElement("button",{className:"w3-bar-item w3-button",onClick:function(){a(T),w(!f)}},l.a.createElement("i",{className:"fa fa-window-close"}),"\xa0Zur \xdcbersicht"),l.a.createElement("button",{className:"w3-bar-item w3-button",onClick:S},l.a.createElement("i",{className:"fa fa-share"}),"\xa0App teilen"))})),r&&l.a.createElement("button",{className:"letsgo-button w3-button w3-xlarge w3-round w3-card-4 w3-blue",onClick:t},"Starten! ",l.a.createElement("i",{className:"fa fa-arrow-circle-right"})))},O=function(e){var t=e.goal,a=e.setGameState,i=e.gameState,r=e.setProgress,s=Object(n.useState)([]),u=Object(c.a)(s,2),d=u[0],f=u[1],w=Object(n.useState)([]),g=Object(c.a)(w,2),p=g[0],v=g[1],b=Object(n.useState)(!1),N=Object(c.a)(b,2),S=N[0],O=N[1],j=Object(n.useState)(!0),x=Object(c.a)(j,2),G=x[0],W=x[1];Object(n.useEffect)((function(){r(1)}),[p]),Object(n.useEffect)((function(){r(0),h.a.get("https://de.wikipedia.org/api/rest_v1/page/mobile-sections/"+(null===t||void 0===t?void 0:t.title.replace(" ","_")),{onDownloadProgress:function(e){return r(e.loaded/1e5)}}).then((function(e){v(m(e.data))})).catch((function(e){return console.log(e)})),O(!0)}),[t]),Object(n.useEffect)((function(){d.length&&d[0].title===(null===t||void 0===t?void 0:t.title)&&a(Object(o.a)({},i,{win:!0}))}),[d]);return l.a.createElement("div",null,l.a.createElement(y,{gameState:i,newGame:G,setGameState:a,startNewGame:function(){r(0),W(!1),a(Object(o.a)({},i,{clicks:0,win:!1})),O(!1),h.a.get("https://de.wikipedia.org/api/rest_v1/page/random/mobile-sections",{onDownloadProgress:function(e){return r(e.loaded/1e5)}}).then((function(e){f(m(e.data))})).catch((function(e){return console.log(e)}))},showGoal:S,setShowGoal:O,goal:t}),l.a.createElement("div",{className:"w3-container"},l.a.createElement(E,{article:d,setArticle:function(e){a(Object(o.a)({},i,{clicks:i.clicks+1})),f(e)},setProgress:r}),l.a.createElement(k,{show:S,setShowGoal:O,article:p,goal:t})))},j=[{title:"Trier",level:1,score:0},{title:"Universit\xe4t Trier",level:2,score:0},{title:"Erdnuss",level:3,score:0},{title:"Auderath",level:3,score:0},{title:"Bon Jovi",level:3,score:0},{title:"Frank Sinatra",level:3,score:0},{title:"Poker",level:3,score:0},{title:"Dirty Dancing",level:3,score:0},{title:"Gordon Ramsay",level:3,score:0},{title:"Star Trek",level:3,score:0}],x=function(e){e.goal;var t=e.setGoal,a=e.setGameState,i=e.gameState,r=Object(n.useState)([]),s=Object(c.a)(r,2),u=s[0],m=s[1];Object(n.useEffect)((function(){if(localStorage.getItem("score")){var e=JSON.parse(localStorage.getItem("score"));e.length<j.length&&(e=j.map((function(t){var a=e.find((function(e){return e.title===t.title}));return Object(o.a)({},t,{score:a?a.score:0})}))),m(e)}else localStorage.setItem("score",JSON.stringify(j)),m(j)}),[i.playing]);return l.a.createElement("div",null,l.a.createElement("div",{className:"w3-bar wikiplaydia-green"},l.a.createElement("span",{className:"w3-right w3-bar-item"},"Wikiplaydia")),l.a.createElement("div",{className:"w3-container w3-animate-opacity"},l.a.createElement("span",{className:"w3-bar-item w3-right w3-margin-top"},l.a.createElement("img",{className:"w3-opacity",src:b.a,height:40,width:40,alt:"Wikiplaydia logo"})),l.a.createElement("h2",null,"Levelauswahl"),u.map((function(e){return l.a.createElement("div",{key:e.title,className:" w3-btn w3-round w3-border w3-border-green w3-margin",onClick:function(){return t(e),void a(C)}},e.title," ",e.score?l.a.createElement("span",null," ",l.a.createElement("i",{className:"far fa-check-circle w3-text-green"})," ",e.score," Klicks "):"")}))),l.a.createElement("div",{className:"w3-container w3-animate-opacity"},l.a.createElement("h2",null,"Wie funktionierts?"),l.a.createElement("ul",{className:"w3-ul"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-list"})," Level/Artikel ausw\xe4hlen"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-glasses"})," Kurz \xfcberfliegen und wichtige Punkte merken"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-rocket"})," Starten"),l.a.createElement("li",null,l.a.createElement("i",{className:"far fa-check-circle"})," Den Zielartikel \xfcber die Verlinkungen in den neuen Artikeln finden"))),l.a.createElement("div",{className:"w3-container w3-animate-opacity"},l.a.createElement("h2",null,"App teilen / Freunde einladen"),l.a.createElement("ul",{className:"w3-ul w3-large"},l.a.createElement("li",{className:"w3-btn",onClick:S},l.a.createElement("i",{className:"fa fa-share"})," Hier klicken, um die App zu teilen"))))},G=function(e){var t=e.goal,a=e.setGameState,i=e.gameState,r=Object(n.useState)([]),s=Object(c.a)(r,2),u=(s[0],s[1]);Object(n.useEffect)((function(){u(JSON.parse(localStorage.getItem("score")))}),[i.playing]);return l.a.createElement("div",{className:"w3-modal"},l.a.createElement("div",{className:"w3-modal-content w3-round w3-padding w3-animate-top"},l.a.createElement("h1",null,"Gewonnen!"),l.a.createElement("ul",null,l.a.createElement("li",null,null===t||void 0===t?void 0:t.title," gefunden!"),l.a.createElement("li",null,i.clicks," Klicks wurden ben\xf6tigt")),l.a.createElement("div",{onClick:function(){var e=JSON.parse(localStorage.getItem("score"));localStorage.setItem("score",JSON.stringify(e.map((function(e){return e.title===(null===t||void 0===t?void 0:t.title)?Object(o.a)({},e,{score:i.clicks}):e})))),a(T)},className:"w3-button wikiplaydia-green"},"Speichern und zur \xdcbersicht")))},W=function(e){var t=e.progress;return l.a.createElement("div",{className:"wikiplaydia-green",style:{top:0,height:5,width:"".concat(100*t,"%"),transition:"ease-in-out .4s"}})},C={playing:!0,clicks:0,win:!1},T={playing:!1,clicks:0,win:!1},L=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)({playing:!1,clicks:0,win:!1}),o=Object(c.a)(r,2),s=o[0],u=o[1],m=Object(n.useState)(1),d=Object(c.a)(m,2),f=d[0],w=d[1];return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),e.returnValue=""};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[]),l.a.createElement("div",{className:"w3-card wrapper"},l.a.createElement(W,{progress:f}),s.win&&l.a.createElement(G,{goal:a,gameState:s,setGameState:u}),l.a.createElement("div",null,s.playing?l.a.createElement(O,{goal:a,gameState:s,setGameState:u,setProgress:w}):l.a.createElement(x,{goal:a,setGoal:i,gameState:s,setGameState:u})))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(61),a(62);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/apps/wikiplaydia",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/apps/wikiplaydia","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.eb977905.chunk.js.map