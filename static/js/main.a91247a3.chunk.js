(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(12),r=n.n(o),c=n(13),s=n(6),l=n(7),u=n(9),m=n(8),p=n(10),d=n(2),h=n(3),f=n(4);d.b.add(f.c,f.d);var v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,a=t.updatePosition;return e=t.currentPosition===n?i.a.createElement(h.a,{icon:"dot-circle"}):i.a.createElement(h.a,{icon:"circle"}),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(e){return a(n)}},e))}}]),t}(a.Component);n(24);d.b.add(f.a,f.b);var g=["img/dikaseva-34881-unsplash.jpg","img/mark-basarab-122141-unsplash.jpg","img/milada-vigerova-35578-unsplash.jpg","img/riccardo-chiarini-365677-unsplash.jpg","img/thomas-morse-349005-unsplash.jpg"],b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={position:0,timer:0},n.changeItem=function(e){switch(e){case"prev":n.setState({position:n.state.position-1,timer:0}),n.state.position<=0&&n.setState({position:g.length-1});break;case"next":n.setState({position:n.state.position+1,timer:0}),n.state.position>=g.length-1&&n.setState({position:0,timer:0})}},n.updatePosition=function(e){n.setState({position:e,timer:0})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState({timer:e.state.timer+1}),6===e.state.timer&&e.changeItem("next")},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.state.position;return i.a.createElement("div",{className:"App"},i.a.createElement("section",{className:"container","aria-label":"Image Carousel"},i.a.createElement("h1",null,"Image Carousel (React)"),i.a.createElement("a",{href:"/carousel-2.html"},"Javascript Verson")," ",i.a.createElement("br",null),i.a.createElement("div",{className:"carousel"},i.a.createElement("button",{className:"button-previous",onClick:function(t){return e.changeItem("prev")},"aria-label":"Left"},i.a.createElement(h.a,{icon:"angle-left"})),i.a.createElement("button",{className:"button-next",onClick:function(t){return e.changeItem("next")},"aria-label":"Right"},i.a.createElement(h.a,{icon:"angle-right"})),i.a.createElement("ul",{class:"indicators"},Object(c.a)(Array(g.length)).map(function(n,a){return i.a.createElement(v,{index:a,updatePosition:e.updatePosition,currentPosition:t})})),i.a.createElement("div",{class:"item"},g.map(function(e,n){return i.a.createElement("div",{class:t===n?"carousel-item fade active":"carousel-item fade"},i.a.createElement("img",{src:e,alt:"..."}))})))))}}]),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/carousel-live",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/carousel-live","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.a91247a3.chunk.js.map