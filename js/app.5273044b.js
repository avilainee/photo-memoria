(()=>{"use strict";var e={2327:(e,t,r)=>{var o=r(8633),n=r(7732),a=r(4187),i=r(1347);const l={__name:"App",setup(e){return(e,t)=>{const r=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(r)}}},u=l,s=u;var c=r(180),d=r(455);const p=[{path:"/",component:()=>Promise.all([r.e(121),r.e(691)]).then(r.bind(r,691)),children:[{path:"",component:()=>Promise.all([r.e(121),r.e(478)]).then(r.bind(r,5478))},{path:"capture",name:"capture",component:()=>Promise.all([r.e(121),r.e(120)]).then(r.bind(r,7120))},{path:"download",name:"download",component:()=>Promise.all([r.e(121),r.e(738)]).then(r.bind(r,5738))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(121),r.e(28)]).then(r.bind(r,28))}],f=p,h=(0,c.Lo)((function(){const e=d.Bt,t=(0,d.aE)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/photo-memoria/")});return t}));async function m(e,t){const r=e(s);r.use(n.A,t);const o=(0,a.IG)("function"===typeof h?await h({}):h);return{app:r,router:o}}const v={config:{}};async function b({app:e,router:t}){e.use(t),e.mount("#q-app")}m(o.Ef,v).then(b)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{28:"ff402be2",120:"4afa4011",478:"27cd2971",691:"3f645c6c",738:"ba402af4"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{120:"b1115b5d",478:"efaf8f8c",738:"28f98d67"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="photobooth-project:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/photo-memoria/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,n,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc);var l=r=>{if(i.onerror=i.onload=null,"load"===r.type)n();else{var o=r&&r.type,l=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+l+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=l,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=l,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,null,n,a)})),n={524:0};r.f.miniCss=(e,t)=>{var r={120:1,478:1,738:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={524:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,u=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,u]=o,s=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(u)var c=u(r)}for(t&&t(o);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=globalThis["webpackChunkphotobooth_project"]=globalThis["webpackChunkphotobooth_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[121],(()=>r(2327)));o=r.O(o)})();