var D=Object.defineProperty;var G=(o,r,s)=>r in o?D(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var b=(o,r,s)=>G(o,typeof r!="symbol"?r+"":r,s);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const p="color: hotpink; background-color: black; border-radius: 0.25em";function $(o,...r){for(const s of r)try{return s()}catch{}return o}let x=$(0,()=>JSON.parse(sessionStorage.LOG_LEVEL));globalThis.setLogLevel=o=>{sessionStorage.LOG_LEVEL=JSON.stringify(o),x=o};globalThis.getLogLevel=()=>x;function R(...o){x>=1&&console.log(...o)}function g(...o){x>=2&&console.group(...o)}function v(){x>=2&&console.groupEnd()}function M(...o){x>=3&&console.log(...o)}const E=new Map,w=[];class V extends HTMLElement{constructor(){super();b(this,"props");b(this,"init");b(this,"parentComp");b(this,"kills",[]);b(this,"onError");b(this,"wasConnected",!1)}get debugName(){var s;return((this.init&&E.get(this.init))??"c-mp")+((s=this.props)!=null&&s.debugName?`(${this.props.debugName})`:"")}connectedCallback(){var n,a;if(this.wasConnected)throw new Error("[swczjp] Component was already connected.");if(!this.isConnected)return;this.wasConnected=!0,this.parentComp=w.at(-1)??((n=this.parentElement)==null?void 0:n.closest("c-mp")),g(`☀️ Component connected: %c${this.debugName}`,p,this,"inside",this.parentComp??this.parentNode);const s=this.init?E.get(this.init)??this.init.name:"Comp",i=this.props&&"debugName"in this.props&&typeof this.props.debugName=="string"?`${s}(${this.props.debugName})`:s;this.setAttribute("is",i),w.push(this);try{(a=this.init)==null||a.call(this,this.props,this)}catch(c){this.handleError(c)}finally{w.pop(),v()}}handleError(s){let i=!1;if(this.onError)try{g(`🎯 Handling error: %c${name}`,p),this.onError(s),i=!0}catch(n){console.error(n)}finally{v()}i||(this.parentComp?(g(`🔍 Looking for error handler: %c${name}`,p),this.parentComp.handleError(s),v()):(g(`⚠️ Failed to handle error: %c${name}`,p),console.error(s),this.remove(),v()))}disconnectedCallback(){var s;if(this.wasConnected){for(g(`🌑 Component disconnected: %c${this.debugName}`,p,this,"from",this.parentComp??this.parentNode),this.parentComp=void 0;this.kills.length;)(s=this.kills.shift())==null||s();this.innerHTML="",this.wasConnected=!1,v()}}}customElements.define("c-mp",V);function S(o,r){return O("c-mp",{props:r,init:o})}function N(o,r){return E.set(r,o),r}const y=[];function z(o,r){let s={name:o,rerun:m,chain:0},i,n=!1,a=!1;function c(){a||(a=!0,d(),M(`💀 Killed effect: %c${o}`,p))}function d(){g(`🧹 Cleaning up effect: %c${o}`,p),s.rerun=void 0;try{i==null||i()}catch(h){l?l.handleError(h):console.error(h)}finally{i=void 0}v()}function m(){if(a||n)return;const h=I();n=!0,queueMicrotask(()=>{if(!a){n=!1,g(`– Effect microtask: %c${o}`,p),d();try{s={name:o,rerun:m,chain:h},g(`▶️ Effect run: %c${o}`,p),y.push(s),i=r()}catch(f){l?l.handleError(f):console.error(f)}finally{y.pop(),v(),v()}}})}const l=w.at(-1);if(!l)throw new Error(`[svhdq6] No active context for effect: ${o}`);l.kills.push(c);try{m()}catch(h){throw l.handleError(h),h}return m}function I(){const o=y.at(-1),r=((o==null?void 0:o.chain)??0)+1;if(r>500)throw new Error(`[svhnon] Infinite effect recursion: ${name}`);return r}function q(o,r){try{return g(`🚧 Untrack start: %c${o}`,p),y.push({name:`${o} (untrack)`,chain:I()}),r()}finally{y.pop(),v()}}function O(o,r){if(typeof o=="function")return S(o,r);{const s=document.createElement(o);if(r){const i=w.at(-1);for(const[n,a]of Object.entries(r))if(n==="className"&&typeof a=="function")z(`${i==null?void 0:i.debugName}.${o}.${n}`,()=>{const c=a(s);Array.isArray(c)?s.className=c.filter(Boolean).join(" "):typeof c=="string"?s.className=c:s.className=""});else if(n==="bindElement"&&typeof a=="function")try{a(s)}catch(c){console.error(c)}else typeof a=="function"&&!n.startsWith("on")&&!o.includes("-")?z(`${i==null?void 0:i.debugName}.${o}.${n}`,()=>{s[n]=a()}):n==="children"||(s[n]=a)}return Array.isArray(r.children)?s.append(...r.children):r.children&&s.append(r.children),s}}const J=N("Fragment",(o,r)=>(r.append(...o.children),r)),e=O,t=O,W=""+new URL("altmetric-BQLqRJL0.svg",import.meta.url).href,K=""+new URL("clockss-C6qEWFv6.webp",import.meta.url).href,U=""+new URL("compuscript-PdrrAIH7.webp",import.meta.url).href,Y="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20200%2067.9'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%234F5858;}%20.st1{fill:%233EB1C8;}%20.st2{fill:%23D8D2C4;}%20.st3{fill:%23FFC72C;}%20.st4{fill:%23EF3340;}%20%3c/style%3e%3cg%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M76.1,37.5c-0.4-2.6-2.9-4.6-5.8-4.6c-5.2,0-7.2,4.4-7.2,9.1c0,4.4,2,8.9,7.2,8.9c3.6,0,5.6-2.4,6-5.9H82%20c-0.6,6.6-5.1,10.8-11.6,10.8c-8.2,0-13-6.1-13-13.7c0-7.9,4.8-14,13-14c5.8,0,10.7,3.4,11.4,9.5H76.1z'/%3e%3cpath%20class='st0'%20d='M84,35.9h5v3.6h0.1c1-2.4,3.6-4.1,6.1-4.1c0.4,0,0.8,0.1,1.1,0.2v4.9c-0.5-0.1-1.3-0.2-1.9-0.2%20c-3.9,0-5.2,2.8-5.2,6.1v8.6H84V35.9z'/%3e%3cpath%20class='st0'%20d='M106.4,35.4c6,0,9.9,4,9.9,10.1c0,6.1-3.9,10.1-9.9,10.1c-6,0-9.9-4-9.9-10.1%20C96.5,39.4,100.4,35.4,106.4,35.4z%20M106.4,51.6c3.6,0,4.7-3.1,4.7-6.1c0-3.1-1.1-6.1-4.7-6.1c-3.6,0-4.6,3.1-4.6,6.1%20C101.8,48.6,102.8,51.6,106.4,51.6z'/%3e%3cpath%20class='st0'%20d='M122.4,48.9c0,2.3,2,3.2,4,3.2c1.5,0,3.4-0.6,3.4-2.4c0-1.6-2.2-2.1-6-3c-3-0.7-6.1-1.7-6.1-5.1%20c0-4.9,4.2-6.1,8.3-6.1c4.2,0,8,1.4,8.4,6.1h-5c-0.1-2-1.7-2.6-3.6-2.6c-1.2,0-2.9,0.2-2.9,1.8c0,1.9,3,2.1,6,2.9%20c3.1,0.7,6.1,1.8,6.1,5.4c0,5-4.4,6.7-8.7,6.7c-4.4,0-8.8-1.7-9-6.7H122.4z'/%3e%3cpath%20class='st0'%20d='M141.6,48.9c0,2.3,2,3.2,4,3.2c1.5,0,3.4-0.6,3.4-2.4c0-1.6-2.2-2.1-6-3c-3-0.7-6.1-1.7-6.1-5.1%20c0-4.9,4.2-6.1,8.3-6.1c4.2,0,8,1.4,8.4,6.1h-5c-0.1-2-1.7-2.6-3.6-2.6c-1.2,0-2.9,0.2-2.9,1.8c0,1.9,3,2.1,6,2.9%20c3.1,0.7,6.1,1.8,6.1,5.4c0,5-4.4,6.7-8.7,6.7c-4.4,0-8.8-1.7-9-6.7H141.6z'/%3e%3cpath%20class='st0'%20d='M156.1,35.9h5v3.6h0.1c1-2.4,3.6-4.1,6.1-4.1c0.4,0,0.8,0.1,1.1,0.2v4.9c-0.5-0.1-1.3-0.2-1.9-0.2%20c-3.9,0-5.2,2.8-5.2,6.1v8.6h-5.3V35.9z'/%3e%3cpath%20class='st0'%20d='M174.2,46.8c0.1,3.3,1.8,4.9,4.7,4.9c2.1,0,3.8-1.3,4.1-2.5h4.6c-1.5,4.5-4.6,6.4-9,6.4%20c-6,0-9.8-4.1-9.8-10.1c0-5.7,4-10.1,9.8-10.1c6.5,0,9.7,5.5,9.3,11.4H174.2z%20M182.7,43.5c-0.5-2.7-1.6-4.1-4.2-4.1%20c-3.3,0-4.3,2.6-4.4,4.1H182.7z'/%3e%3cpath%20class='st0'%20d='M190.9,39.5h-3.1v-3.5h3.1v-1.5c0-3.4,2.1-5.8,6.4-5.8c0.9,0,1.9,0.1,2.8,0.1v3.9c-0.6-0.1-1.3-0.1-1.9-0.1%20c-1.4,0-2,0.6-2,2.2v1.1h3.6v3.5h-3.6v15.6h-5.3V39.5z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cpolygon%20class='st1'%20points='0,67.9%200,47.4%2016.8,41.9%2046.6,52.1%20'/%3e%3cpolygon%20class='st2'%20points='29.8,26.1%200,36.4%2016.8,41.9%2046.6,31.7%20'/%3e%3cpolygon%20class='st0'%20points='16.8,41.9%2046.6,31.7%2046.6,52.1%20'/%3e%3cpolygon%20class='st3'%20points='46.6,0.2%2046.6,20.6%2029.8,26.1%200,15.9%20'/%3e%3cpolygon%20class='st4'%20points='29.8,26.1%200,36.4%200,15.9%20'/%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%201854%20400'%3e%3cpath%20fill='%23982e0a'%20d='M275.861%20400c110.457%200%20200-89.543%20200-200V0c-110.457%200-200%2089.543-200%20200z'%20class='logo__leaf'%3e%3c/path%3e%3cpath%20fill='%23fd5a3b'%20d='M137.93%20400c110.457%200%20200-89.543%20200-200V0c-110.457%200-200%2089.543-200%20200z'%20class='logo__leaf'%3e%3c/path%3e%3cpath%20fill='%23fa9a87'%20d='M0%20400c110.457%200%20200-89.543%20200-200V0C89.543%200%200%2089.543%200%20200z'%20class='logo__leaf'%3e%3c/path%3e%3cg%20fill='currentColor'%3e%3cpath%20d='M576%207.692v384.616h131.868c103.297%200%20158.242-51.099%20158.242-156.044v-72.528c0-104.945-54.945-156.044-158.242-156.044zm72.527%2065.934h60.44c62.088%200%2084.615%2031.869%2084.615%2087.912v76.924c0%2056.044-22.527%2087.912-84.615%2087.912h-60.44zM910.182%20159.341v81.318c0%20101.099%2059.89%20159.341%20158.238%20159.341%2098.36%200%20158.25-58.242%20158.25-159.341v-81.318C1226.67%2060.989%201166.78%200%201068.42%200c-98.348%200-158.238%2060.989-158.238%20159.341zm72.527-3.297c0-52.198%2030.221-91.209%2085.711-91.209%2053.85%200%2085.72%2036.813%2085.72%2091.209v87.912c0%2053.297-25.83%2091.209-85.72%2091.209-58.24%200-85.711-35.714-85.711-91.209zM1353.64%207.692l-106.59%20384.616h74.72l23.08-85.715h134.06l23.08%2085.715h74.73L1470.12%207.692zm8.24%20232.967%2046.7-172.527h6.6l46.7%20172.527zM1853.37%207.692h-72.52v269.231c0%2036.264-18.69%2057.143-51.1%2057.143-34.62%200-54.4-21.429-54.4-57.143v-36.264h-72.53v36.264c0%2077.473%2050%20123.077%20129.12%20123.077%2075.28%200%20121.43-43.407%20121.43-123.077z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",X=""+new URL("oaspa-BaCwBDKR.svg",import.meta.url).href,Q="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20viewBox='0%200%20221%2081.400002'%20version='1.1'%20id='svg4'%20sodipodi:docname='orcid.svg'%20width='221'%20height='81.400002'%20inkscape:version='1.4.2%20(ebf0e94,%202025-05-08)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs4'%20/%3e%3csodipodi:namedview%20id='namedview4'%20pagecolor='%23505050'%20bordercolor='%23eeeeee'%20borderopacity='1'%20inkscape:showpageshadow='0'%20inkscape:pageopacity='0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20showgrid='false'%20inkscape:zoom='1.9197469'%20inkscape:cx='131.2673'%20inkscape:cy='138.82038'%20inkscape:current-layer='svg4'%20/%3e%3cg%20fill='none'%20fill-rule='nonzero'%20id='g4'%3e%3cpath%20fill='%23a6a8ab'%20d='M%2026.922,15%20C%2043.418,15%2054,26.975%2054,41%2054,54.708%2043.885,66.999%2026.922,66.999%2010.427,67.156%200,54.866%200,41.157%200,26.975%2010.738,15%2026.922,15%20Z%20m%200,45.538%20c%2011.205,0%2019.608,-8.194%2019.608,-19.381%200,-11.188%20-8.248,-19.381%20-19.608,-19.381%20-11.204,0%20-19.452,8.193%20-19.452,19.38%200,11.03%208.248,19.382%2019.452,19.382%20z%20M%2075.687,16%20c%2010.18,0%2016.602,5.435%2016.602,13.975%200,5.745%20-2.976,10.093%20-8.458,12.267%204.542,2.95%207.362,7.609%2011.277,13.82%202.193,3.416%203.446,5.124%206.892,9.938%20H%2093.386%20L%2086.65,55.752%20C%2079.916,45.503%2076.94,44.26%2073.18,44.26%20H%2070.204%20V%2066%20H%2063%20V%2016%20Z%20m%20-5.482,21.74%20h%204.699%20c%207.83,0%2010.024,-4.038%209.867,-8.075%200,-4.659%20-2.82,-7.61%20-9.867,-7.61%20h%20-4.7%20V%2037.74%20Z%20m%2076.331,-10.643%20c%20-6.185,-3.614%20-11.443,-5.342%20-17.165,-5.342%20-11.443,0%20-19.948,8.17%20-19.948,19.324%200,11.31%208.196,19.166%2020.103,19.166%205.567,0%2011.752,-2.043%2017.474,-5.656%20v%208.012%20C%20142.052,65.271%20136.794,67%20128.907,67%20110.196,67%20102,52.39%20102,41.707%20102,26.31%20113.443,15%20129.371,15%20c%205.103,0%2010.361,1.257%2017.165,4.085%20z'%20id='path1'%20/%3e%3cpath%20fill='%23a5cd39'%20d='m%20175,16%20h%2019.36%20C%20212.791,16%20221,29.199%20221,41%20221,53.888%20210.933,66%20194.515,66%20H%20175%20Z%20m%207.125,43.478%20h%2011.46%20c%2016.263,0%2019.98,-12.422%2019.98,-18.633%200,-10.093%20-6.35,-18.634%20-20.289,-18.634%20H%20182.28%20v%2037.267%20h%20-0.154%20z'%20id='path2'%20/%3e%3cg%20fill='%23a5cd39'%20id='g3'%3e%3cpath%20d='m%20164.114,66%20h%20-7.228%20V%2015.4%20h%207.228%20v%2028.129%20z%20m%201.1,-61.286%20c%200,2.672%20-2.2,4.715%20-4.714,4.715%20-2.671,0%20-4.714,-2.2%20-4.714,-4.715%200,-2.514%202.2,-4.714%204.714,-4.714%202.671,0%204.714,2.2%204.714,4.714%20z'%20id='path3'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",C=Symbol("unwrapped");function A(o,r,s){if(typeof r!="object"||r==null)throw new Error("[svh9tl] Object or array required.");return r=T(r),new Proxy(r,{has(i,n){var a;return n===C?!0:((a=s==null?void 0:s.has)==null||a.call(s,o,i,n),Reflect.has(i,n))},get(i,n,a){var d;if(n===C)return i;(d=s==null?void 0:s.get)==null||d.call(s,o,i,n);const c=Reflect.get(i,n,a);return c!=null&&typeof c=="object"?A(o+"."+n.toString(),c,s):c},set(i,n,a,c){var h,f;let d=!0,m=n in i,l=i[n];return a=T(a),Object.is(l,a)||(d=Reflect.set(i,n,a,c),(h=s==null?void 0:s.set)==null||h.call(s,o,i,n,a)),!m&&Array.isArray(i)&&((f=s==null?void 0:s.set)==null||f.call(s,o,i,"length",i.length)),d},deleteProperty(i,n){var c;let a=!0;return n in i&&(a=Reflect.deleteProperty(i,n),(c=s==null?void 0:s.delete)==null||c.call(s,o,i,n)),a}})}function T(o){return o!=null&&typeof o=="object"&&C in o&&(o=o[C]),o}const L=new WeakMap;function B(o,r,s,i,n){let a=L.get(s);if(!a)return;let c=a.get(i);if(!c)return;const d=Array.from(c);if(d.length){R(`${r==="SET"?"✏️":"🗑️"} State ${r}: %c${o}.${i.toString()}`,p,"=",n);for(let m=0;m<d.length;m++){const l=d[m];l.rerun?l.rerun():c.delete(l)}}}function F(o,r,s){const i=y.at(-1);if(!i)return;M(`🔌 State GET: %c${o}.${s.toString()}`,p);let n=L.get(r);n||(n=new Map,L.set(r,n));let a=n.get(s);a||(a=new Set,n.set(s,a)),a.add(i)}const ee={has(o,r,s){F(o,r,s)},get(o,r,s){F(o,r,s)},set(o,r,s,i){B(o,"SET",r,s,i)},delete(o,r,s){B(o,"DELETE",r,s,void 0)}};function oe(o,r){var i;const s=((i=w.at(-1))==null?void 0:i.debugName)??"-";return A(`${s}.${o}`,r,ee)}const se=N("For",(o,r)=>{let s;const i=new Map;return z(r.debugName,()=>{var m;const n=o.each()??[],a=new Set(i.keys()),c=[];for(let l=0,h=n.length;l<h;l++){const f=n[l],k=((m=o.getKey)==null?void 0:m.call(o,f,l))??l;c.push(k),a.delete(k)}M(`🧹 Redundant keys ${r.debugName}:`,a);for(const l of a){const h=i.get(l);h&&h.elem.remove(),i.delete(l)}n.length===0?!s&&o.empty&&(s=S(te,{debugName:o.debugName,empty:o.empty}),r.append(s)):s&&(s.remove(),s=void 0);let d;for(let l=0,h=n.length;l<h;l++){const f=n[l],k=c[l];let u=i.get(k);q(r.debugName,()=>{var P;if(u)u.state.index=l;else{const H=oe(`${r.debugName}`,{index:l,item:f});u={elem:S(re,{debugName:o.debugName,state:H,render:o.render}),state:H},i.set(k,u)}d?d.nextElementSibling!==u.elem&&d.after(u.elem):((P=u.elem.parentElement)==null?void 0:P.firstElementChild)!==u.elem&&r.prepend(u.elem),d=u.elem})}}),r}),re=N("ForItem",({state:o,render:r},s)=>(s.append(r(o)),s)),te=N("ForEmpty",(o,r)=>(r.append(o.empty()),r));let ne=new Set;function j(o,...r){const s=String.raw(o,r);if(ne.has(s))return;const i=document.createElement("style");i.append(s),ie(w.at(-1)).append(i)}function ie(o){for(;;){if(!o)return document.head;if(o.shadowRoot)return o.shadowRoot;o=o.parentElement}}const ae=N("FooterComp",(o,r)=>(r.append(t("footer",{className:"so-main-footer",children:[e("div",{className:"so-main-footer-top",children:t("div",{className:"so-container",children:[e("div",{className:"so-col so--a-24 so--c-8 so-print-n",children:t("div",{className:"so-layout-section",children:[e("h3",{children:"Navigation"}),t("p",{children:[e("a",{href:"http://blog.scienceopen.com",children:"Blog"}),e("br",{}),e("a",{href:"http://about.scienceopen.com",children:"About"}),e("br",{}),e("a",{href:"./search",children:"Search"}),e("br",{}),e("a",{href:"https://www.scienceopen.com/hosted-documents?list=years",children:"Archive"})]}),t("p",{children:[e("a",{href:"http://about.scienceopen.com/copyright-notice/",children:"Copyright Notice"}),e("br",{}),e("a",{className:"so-feedback-link",children:"Feedback"}),e("br",{}),e("a",{href:"http://about.scienceopen.com/contact/",children:"Contact"}),e("br",{}),e("a",{href:"http://about.scienceopen.com/impressum/",children:"Impressum"}),e("br",{}),e("a",{href:"http://about.scienceopen.com/wp-content/uploads/2018/04/ScienceOpen_TermsConditions_2018.pdf",children:"Terms"}),e("br",{}),e("a",{className:"so-cookie-policy",href:"http://about.scienceopen.com/privacy-policy/",children:"Privacy Policy"}),e("br",{}),e("a",{className:"so-change-cookie-consent",children:"Change cookie consent: analytics cookies accepted"})]})]})}),e("div",{className:"so-col so--a-24 so--c-16",children:e("address",{children:t("div",{className:"so-col-row so--no-padding",children:[e("div",{className:"so-col so--a-24 so-m-b-20",children:t("p",{className:"so-m-t-10",children:[e("strong",{children:"ScienceOpen, Inc."}),e("br",{}),t("a",{className:"so-e",children:["info",e("span",{className:"so-n",children:"o83ooc"}),"@",e("span",{className:"so-n",children:"o83ons"}),"scienceopen.com"]})]})}),t("div",{className:"so-col so--c-12 so-m-b-20",children:[e("p",{children:e("strong",{children:"Online services"})}),e("p",{children:e("strong",{children:"Boston"})}),t("p",{children:["131 Hartwell Ave., Suite 210",e("br",{}),"Lexington, MA 02421",e("br",{}),"USA"]}),e("p",{children:"Phone: +1 781-222-5200"})]}),t("div",{className:"so-col so--c-12 so-m-b-20",children:[e("p",{children:e("strong",{children:"Publisher"})}),e("p",{children:e("strong",{children:"Berlin"})}),t("p",{children:["Pappelallee 78/79",e("br",{}),"10437 Berlin",e("br",{}),"Germany"]}),e("p",{children:"Phone: +49-30-609-8490-277"})]})]})})})]})}),e("div",{className:"so-main-footer-bottom",children:e("div",{className:"so-container",children:t("div",{className:"so-col so--a-24 so-floats",children:[e("div",{className:"so-floats-start",children:e("p",{children:"© 2025 ScienceOpen – All rights reserved."})}),e("div",{className:"so-floats-end so-print-n",children:t("p",{className:"so-b3-container so--0",children:[t("a",{href:"https://twitter.com/Science_Open",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--twitter"}),e("span",{className:"so-sr",children:"ScienceOpen on Twitter"})]}),e("br",{className:"so-n"}),t("a",{href:"https://www.youtube.com/user/ScienceOpen",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--youtube"}),e("span",{className:"so-sr",children:"ScienceOpen on YouTube"})]}),e("br",{className:"so-n"}),t("a",{href:"http://www.linkedin.com/company/scienceopen-inc-",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--linkedin"}),e("span",{className:"so-sr",children:"ScienceOpen on LinkedIn"})]}),e("br",{className:"so-n"}),t("a",{href:"https://plus.google.com/118031329666957125433/posts",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--google-plus"}),e("span",{className:"so-sr",children:"ScienceOpen on Google+"})]}),e("br",{className:"so-n"}),t("a",{href:"https://www.facebook.com/scienceopen",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--facebook"}),e("span",{className:"so-sr",children:"ScienceOpen on Facebook"})]})]})})]})})})]})),r)),ce=N("HeaderComp",(o,r)=>(j`
		.so-header-row {
			display: flex;
			justify-content: space-between;
			width: 100%;
			max-width: calc(1400rem / 16);
			margin: 0 auto;

			@container (width >= 36rem) {
				padding: 0 var(--so--rem--10);
			}
		}
		.so-header-buttons {
			flex: 1 0 0;
			display: flex;
			overflow: hidden;
			justify-content: end;
			white-space: nowrap;
		}
		.so-header-button-wrapper {
			display: flex;
			align-items: safe center;
			padding: 0 var(--so--padding--button--x);
		}
		.so-b3 {
			&.so--header {
				flex: 0 0 auto;
				color: var(--so--color--text);
				font-size: var(--so--font-size--h5);
				font-weight: var(--so--font-weight--bold);
				display: flex;
				flex-flow: row;
				gap: var(--so--rem--5);
				align-items: safe center;

				& > svg {
					width: var(--so--font-size--h4);
					height: var(--so--font-size--h4);
				}

				& .so--header--highlight {
					border-top: 0.2em solid transparent;
					border-bottom: 0.2em solid var(--so--green--4);
				}
			}
			&.so--share-your-work {
				display: flex;
				gap: var(--so--rem--5);
				align-items: safe center;
				text-transform: uppercase;
				font-weight: var(--so--font-weight--bold);
				line-height: 1em;
			}
		}
		.so-icon {
			&.so--x1-5 {
				font-size: calc(var(--so--font-size--h6) * 1.5);
			}
		}
	`,r.append(e("div",{className:"so-main-header",children:t("div",{className:"so-header-row",children:[e("a",{className:"so-b3 so--borderless so--roundless so-header-button-home-link",href:"./",children:t("span",{className:"so-icon so--logo",children:[e("span",{className:"so-logo-green"}),e("span",{className:"so-logo-dark"}),e("span",{className:"so-logo-light"}),t("span",{className:"so-sr",children:["ScienceOpen: ",e("small",{children:"research and publishing network"})]})]})}),t("div",{className:"so-header-buttons",children:[e("button",{className:"so-b3 so--header so--long so--borderless so--roundless",innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>`}),t("button",{className:"so-b3 so--header so--long so--borderless so--roundless",children:["Join for ",e("span",{className:"so--header--highlight",children:"free"})]}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless",children:"Log in"}),e("div",{className:"so-header-button-wrapper",children:t("button",{className:"so-b3 so--share-your-work so--tall so--green-4",children:[t("div",{children:["Share",e("br",{}),"your",e("br",{}),"work"]}),e("div",{className:"so-icon so--plus"})]})}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless so-light-dark",title:"Toggle light / dark mode",innerHTML:'<svg width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path></svg>'}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless so-access",title:"Toggle accessible mode",children:e("img",{src:"./content/access-2.svg",width:16,height:16,alt:"Toggle accessible mode"})}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless",innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>`})]})]})})),r)),le=N("AppComp",(o,r)=>(j`
		.so-video-wrapper {
			position: relative;
			background-color: #1c3030;
			overflow: hidden;
			min-height: calc(720rem / 16);

			& > .so-video,
			& > .so-video-gradient {
				position: absolute;
				top: 0;
				left: 50%;
				aspect-ratio: 16 / 9;
				width: 100%;
				max-width: calc(1400rem / 16);
				min-width: calc(1280rem / 16);
				transform: translateX(-50%);
			}

			& > .so-video {
				display: block;
				padding: 0;
			}

			& > .so-video-overlay {
				position: absolute;
				inset: 0;
				background-image: url('./content/overlay.svg');
				background-position: center;
				background-repeat: repeat;
				background-size: 0.5rem 0.5rem;
			}
			& > .so-video-gradient {
				display: none;

				@container (width > 87.5rem) {
					display: block;
					background: linear-gradient(
						to right,
						#1c3030,
						transparent 10%,
						transparent 90%,
						#1c3030
					);
				}
			}
			& > .so-video-content {
				position: absolute;
				inset: 0;
				display: flex;
				align-items: safe center;
				justify-content: safe center;
				padding: var(--so--rem--30);

				& > .so-video-card {
					display: flex;
					flex-flow: column;
					gap: var(--so--rem--30);
					background-color: white;
					border-radius: var(--so--border-radius--window);
					padding: var(--so--rem--30);
					width: 100%;
					max-width: 35rem;
					text-align: center;

					& p {
						font-size: var(--so--font-size--h5);
					}

					& h1 {
						font-size: var(--so--font-size--h1);
						line-height: 1em;

						@container (width >= 26rem) {
							font-size: var(--so--font-size--h0);
						}
						@container (width >= 36rem) {
							font-size: var(--so--font-size--h00);
						}

						& b {
							/* background: linear-gradient(
								to right,
								var(--so--green--5),
								var(--so--green--3)
							);
							background-clip: text;
							-webkit-text-fill-color: transparent; */
							color: var(--so--green--5);
							font-family: var(--so--font-family--normal);
							font-weight: 700;
						}
					}
				}
			}
		}
		.so-flex-row {
			display: flex;

			&.so--5 {
				gap: calc(5rem / 16);
			}
		}
		.so-flex-col {
			display: flex;
			flex-flow: column;

			&.so--10 {
				gap: calc(10rem / 16);
			}
			&.so--20 {
				gap: calc(20rem / 16);
			}
		}
		.so-flex-0-0-auto {
			flex: 0 0 auto;
		}
		.so-numbers {
			display: flex;
			flex-flow: row wrap;
			gap: var(--so--rem--1);
			align-items: safe center;
			justify-content: safe center;
		}
		.so-number-card {
			flex: 1 1 auto;
			padding: var(--so--rem--10);
			font-size: var(--so--font-size--h3);
			line-height: 1.25em;

			& > b {
				font-size: var(--so--font-size--h1);
				font-weight: 900;
			}
		}
		.so-text-input {
			&.so--home {
				padding-top: var(--so--rem--10);
				padding-bottom: var(--so--rem--10);
				border-radius: calc(var(--so--border-radius--normal) * 2);
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				& + button {
					border-radius: calc(var(--so--border-radius--normal) * 2);
					border-top-left-radius: 0;
					border-bottom-left-radius: 0;
				}
			}
		}
		::selection {
			-webkit-text-fill-color: black;
		}

		.so-b3 {
			&.so--hp {
				/* background: linear-gradient(
					to right,
					var(--so--blue--7),
					var(--so--blue--5)
				); */
				background: var(--so--blue--6);
				color: var(--so--color--inverted);
				font-size: var(--so--font-size--h5);
				font-weight: 700;
				padding: calc(var(--so--padding--button--top) * 2)
					calc(var(--so--padding--button--x) * 2)
					calc(var(--so--padding--button--bottom) * 2);
				border-radius: calc(var(--so--border-radius--normal) * 2);
			}
			&.so--cta {
				/* background: linear-gradient(
					to right,
					var(--so--green--7),
					var(--so--green--5)
				); */
				background: var(--so--green--6);
				color: var(--so--color--inverted);
				font-size: var(--so--font-size--h5);
				font-weight: 700;
				padding: calc(var(--so--padding--button--top) * 2)
					calc(var(--so--padding--button--x) * 2)
					calc(var(--so--padding--button--bottom) * 2);
				border-radius: calc(var(--so--border-radius--normal) * 2);
			}
		}

		.so-home-title {
			font-family: var(--so--font-family--normal);
			font-weight: 700;
			line-height: 1.1em;
			width: fit-content;
			margin-left: auto;
			margin-right: auto;

			h2& {
				font-size: var(--so--font-size--h0);
			}

			&.so--secondary {
				font-size: var(--so--font-size--h3);
				font-weight: var(--so--font-weight--semibold);
			}

			& .so-home-title-highlight {
				/* background: linear-gradient(
					to right,
					var(--so--green--5),
					var(--so--green--3)
				);
				background-clip: text;
				-webkit-text-fill-color: transparent; */
				color: var(--so--green--5);
				font-family: var(--so--font-family--normal);
				font-weight: 700;
			}

			& .so-home-title-highlight-2 {
				/* background: linear-gradient(
					to right,
					var(--so--blue--7),
					var(--so--blue--5)
				);
				background-clip: text;
				-webkit-text-fill-color: transparent; */
				color: var(--so--blue--6);
				font-family: var(--so--font-family--normal);
				font-weight: 700;
			}
		}

		.so-home-cards {
			display: grid;
			gap: var(--so--rem--20);
			grid-template-columns: 1fr;
			width: 100%;
			max-width: 57rem;
			margin: 0 auto var(--so--rem--30);

			@container (width >= 45rem) {
				grid-template-columns: 1fr 1fr;
			}

			& > div {
				display: flex;
				flex-flow: column;
				align-items: safe center;
				justify-content: safe center;
				box-shadow: var(--so--box-shadow--2);
				padding: var(--so--rem--20);

				&:nth-child(odd) {
					border-top-right-radius: var(--so--border-radius--window);
					border-bottom-left-radius: var(--so--border-radius--window);
				}
				&:nth-child(even) {
					border-top-left-radius: var(--so--border-radius--window);
					border-bottom-right-radius: var(--so--border-radius--window);
				}

				&.so--green {
					/* background: radial-gradient(
						circle at top left,
						var(--so--green--7),
						var(--so--green--5)
					); */
					background: var(--so--green--1);
					border: var(--so--border-width--1) solid
						var(--so--border-color--secondary);
					text-align: center;

					& h3 {
						color: var(--so--green--6);
					}
				}
			}
		}

		.so-home-columns {
			display: grid;
			grid-template-columns: 1fr;
			width: 100%;
			gap: var(--so--rem--20);
			margin-bottom: var(--so--rem--30);

			@container (width >= 63.375rem) {
				grid-template-columns: 1fr 1fr 1fr;
			}

			& > div {
				display: flex;
				flex-flow: column;
				align-items: safe center;
				justify-content: space-between;
				box-shadow: var(--so--box-shadow--2);
				padding: var(--so--rem--20);
				background: var(--so--background-color--emphasis);

				&:nth-child(1) {
					border-top-right-radius: var(--so--border-radius--window);
					border-bottom-left-radius: var(--so--border-radius--window);
				}
				&:nth-child(3) {
					border-top-left-radius: var(--so--border-radius--window);
					border-bottom-right-radius: var(--so--border-radius--window);
				}
			}
		}

		ul.so-hp {
			list-style-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m2 2h6v6h-6z" fill="%230880c7"/%3E%3C/svg%3E');
		}

		.so-home-profile-wrapper {
			background: var(--so--background-color--secondary);
			overflow: hidden;
			aspect-ratio: 1;
			width: 100%;
			max-width: calc(128rem / 16);
			border-radius: 50%;
			border: var(--so--border--normal);

			&.so--up-center {
				position: relative;
				top: calc(-64rem / 16);
				margin: 0 auto calc(-64rem / 16);
			}

			& > img {
				width: 100%;
				min-width: 100%;
				min-height: 100%;
			}
		}

		.so-logos {
			display: flex;
			flex-flow: row wrap;
			align-items: safe center;
			justify-content: safe center;
			gap: var(--so--rem--30);
			/* background: var(--so--background-color--emphasis);
			box-shadow: var(--so--box-shadow--2); */
			padding: 0 var(--so--rem--10);
			margin-top: var(--so--rem--20);

			& img {
				flex: 1 1 auto;
				width: 100%;
				max-width: calc((100% - var(--so--rem--30) * 2) / 3);
				@container (width >= 36rem) {
					max-width: calc((100% - var(--so--rem--30) * 3) / 4);
				}
				@container (width >= 45rem) {
					max-width: calc((100% - var(--so--rem--30) * 4) / 5);
				}
				@container (width >= 63.375rem) {
					max-width: calc((100% - var(--so--rem--30) * 5) / 6);
				}
				@container (width >= 75rem) {
					max-width: calc((100% - var(--so--rem--30) * 6) / 7);
				}
				/* @container (width >= 87.5rem) {} */
			}
		}

		.so-main-section {
			&.so--spaced {
				margin-top: var(--so--rem--30);
				/* margin-bottom: var(--so--rem--30); */
			}
			&.so--white {
				&.so--spaced {
					padding-top: var(--so--rem--30);
					padding-bottom: var(--so--rem--30);
				}
			}
		}
	`,r.append(t(J,{children:[t("div",{className:"so-main-bg",children:[e(ce,{}),t("div",{className:"so-main-wrapper",children:[e("div",{className:"so-main-section so--white so-p-t-0",children:t("div",{className:"so-video-wrapper",children:[e("video",{className:"so-video",src:"./content/video.webm",autoplay:!matchMedia("(prefers-reduced-motion)").matches,loop:!0,muted:!0,poster:"./content/video.webp"}),e("div",{className:"so-video-gradient"}),e("div",{className:"so-video-overlay",children:" "}),e("div",{className:"so-video-content",children:t("div",{className:"so-video-card",children:[t("h1",{className:"so-m-0",children:["Welcome to ",e("b",{children:"ScienceOpen"})]}),e("p",{className:"so-m-0",children:"The framework that connects every stage of your research communication — from early results to peer‑reviewed publication."}),t("div",{className:"so-numbers",children:[t("div",{className:"so-number-card",children:[e("b",{children:"100m"}),e("br",{}),"Publications"]}),e("div",{className:"so-vr"}),t("div",{className:"so-number-card",children:[e("b",{children:"250+"}),e("br",{}),"Partner Journals"]}),e("div",{className:"so-vr"}),t("div",{className:"so-number-card",children:[e("b",{children:"1,000"}),e("br",{}),"Collections"]})]}),t("div",{className:"so-flex-row",children:[e("input",{className:"so-text-input so--home",placeholder:"Search on ScienceOpen...",size:1}),e("button",{className:"so-b3 so--green-4 so--large-font so-flex-0-0-auto",innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>`})]}),t("p",{children:["We also offer",e("br",{}),e("a",{className:"so-b3 so--hp",children:"hosting & publishing solutions"}),e("br",{}),"for journals, institutions, and conferences"]})]})})]})}),e("div",{className:"so-main-section so--spaced",children:e("div",{className:"so-container",children:e("div",{className:"so-col so--c-12 so--c-push-6",children:t("div",{className:"so-box so--0",children:[e("div",{className:"so-home-profile-wrapper so--up-center",children:e("img",{src:"./content/alexander-grossmann.webp"})}),t("div",{className:"so-p-20",children:[e("p",{className:"so-d-h5",children:"“In a fragmented publishing landscape, we offer researchers a coherent, open system that supports visibility, credibility, and lasting impact.”"}),e("p",{className:"so-ta-r",children:"— Prof. Dr. Alexander Grossmann, Co-Founder of ScienceOpen"})]})]})})})}),e("div",{className:"so-main-section so--white so--spaced",children:e("div",{className:"so-container",children:e("div",{className:"so-col",children:t("div",{className:"so-flex-col so--20",children:[t("h2",{className:"so-home-title ",children:["Shape the Future of Research Publishing",e("br",{}),e("span",{className:"so-home-title-highlight",children:"— Your Way."})]}),t("div",{className:"so-home-cards",children:[t("div",{children:[e("h3",{className:"so-home-title",children:"ScienceOpen Preprints"}),t("ul",{children:[t("li",{children:["Post your recent papers for ",e("b",{children:"free"})," and"," ",e("b",{children:"open access"})]}),e("li",{children:"Get a DOI to make your work citable"}),e("li",{children:"Kick off the peer review process by inviting your peers"})]}),t("p",{children:[e("a",{className:"so-b3 so--cta",children:"Publish your preprint"})," ",e("b",{className:"so-color-green-4",children:"FREE"})]})]}),t("div",{className:"so--green",children:[e("h3",{className:"so-home-title",children:"Open. Scalable. Discoverable."}),e("p",{children:"Ideal for sharing early results, building dialogue, and gaining recognition — all while staying flexible for future publication."})]}),t("div",{className:"so--green",children:[e("h3",{className:"so-home-title",children:"From the conference wall to the world."}),e("p",{children:"Turn your poster into a lasting research output — citable, discoverable, and accessible far beyond the conference."})]}),t("div",{children:[e("h3",{className:"so-home-title",children:"ScienceOpen Posters"}),t("ul",{children:[t("li",{children:["Publish your scientific posters – ",e("b",{children:"free"})," and"," ",e("b",{children:"open access"})]}),e("li",{children:"Get a DOI to make your poster citable"}),e("li",{children:"Invite Reviewers to gain feedback from the community"})]}),t("p",{children:[e("a",{className:"so-b3 so--cta",children:"Publish your poster"})," ",e("b",{className:"so-color-green-4",children:"FREE"})]})]}),t("div",{children:[e("h3",{className:"so-home-title",children:"ScienceOpen Partner Journals"}),t("ul",{children:[e("li",{children:"Choose from over 250 journals open for submission"}),e("li",{children:"Increase visibility through indexing (e.g. Google Scholar, Scopus, PubMed Central)"}),e("li",{children:"Publish with transparent, citable peer review"})]}),e("p",{children:e("a",{className:"so-b3 so--cta",children:"Publish your article"})})]}),t("div",{className:"so--green",children:[e("h3",{className:"so-home-title",children:"Built for trust. Designed for impact."}),e("p",{children:"ScienceOpen offers a publishing experience where rigorous peer review, professional presentation, and global indexing come together — for research that’s meant to stay. Choose your Journal to publish today!"})]})]})]})})})}),e("div",{className:"so-main-section so--spaced",children:e("div",{className:"so-container",children:e("div",{className:"so-col",children:t("div",{className:"so-flex-col so--20",children:[t("h2",{className:"so-home-title ",children:["Empowering Journals,",e("br",{}),"Institutions"," ",e("span",{className:"so-home-title-highlight-2",children:"&"})," ","Conferences"]}),t("div",{className:"so-home-columns",children:[t("div",{children:[e("h3",{className:"so-home-title",children:"Institutional Solutions"}),t("ul",{className:"so-hp",children:[e("li",{children:"Branded publications space to showcase your institution’s research excellence"}),t("li",{children:[" ","Transparent impact tracking through advanced usage and citation metrics"]}),e("li",{children:"Flexible support for preprints, proceedings, and policy papers"})]}),t("p",{className:"so-ta-c",children:[e("a",{className:"so-b3 so--hp",children:"See our solutions"})," "]})]}),t("div",{children:[e("h3",{className:"so-home-title",children:"Journal Publishing"}),t("ul",{className:"so-hp",children:[e("li",{children:"Increase your journal’s visibility, discoverability, and academic reputation"}),t("li",{children:[" ","Streamlined editorial tools to manage submissions and peer review efficiently"]}),e("li",{children:"Modern publishing infrastructure with full OA support (DOI, XML, indexing)"})]}),t("p",{className:"so-ta-c",children:[e("a",{className:"so-b3 so--hp",children:"Learn about journal publishing"})," "]})]}),t("div",{children:[e("h3",{className:"so-home-title",children:"Conference Publishing"}),t("ul",{className:"so-hp",children:[e("li",{children:"Open-access publication of posters, abstracts, and proceedings with DOIs"}),e("li",{children:"Foster engagement through discoverability, sharing, and optional review features"}),t("li",{children:[" ","Extend the life and reach of your conference content"]})]}),t("p",{className:"so-ta-c",children:[e("a",{className:"so-b3 so--hp",children:"Learn about conference publishing"})," "]})]})]})]})})})}),e("div",{className:"so-main-section",children:e("div",{className:"so-container",children:e("div",{className:"so-col",children:t("div",{className:"so-flex-col so--20",children:[t("h2",{className:"so-home-title ",children:["You still have questions?",e("br",{}),e("span",{className:"so-home-title-highlight",children:"Do not hesitate to contact us!"})]}),t("div",{className:"so-home-columns",children:[t("div",{children:[t("h3",{className:"so-home-title so-ta-c",children:["about",e("br",{}),e("span",{className:"so-home-title-highlight",children:"SO Research, Posters & Preprints"})]}),e("div",{className:"so-home-profile-wrapper",children:e("img",{src:"./content/borg.webp"})}),e("p",{className:"so-ta-c so-m-t--20",children:e("a",{className:"so-b3 so--cta",children:"Contact Enno Borg"})})]}),t("div",{children:[t("h3",{className:"so-home-title so-ta-c",children:["about",e("br",{}),e("span",{className:"so-home-title-highlight-2",children:"Conferences"})]}),e("div",{className:"so-home-profile-wrapper",children:e("img",{src:"./content/bender.webp"})}),e("p",{className:"so-ta-c so-m-t--20",children:e("a",{className:"so-b3 so--hp",children:"Contact Georg Benter"})})]}),t("div",{children:[t("h3",{className:"so-home-title so-ta-c",children:["about",e("br",{}),e("span",{className:"so-home-title-highlight-2",children:"B2B Publishing & Hosting"})]}),e("div",{className:"so-home-profile-wrapper",children:e("img",{src:"./content/stuart-cooper.webp"})}),e("p",{className:"so-ta-c so-m-t--20",children:e("a",{className:"so-b3 so--hp",children:"Contact Stuart Cooper"})})]})]})]})})})}),e("div",{className:"so-main-section so--white so--spaced",children:e("div",{className:"so-container",children:t("div",{className:"so-col so-p-b-40",children:[e("h2",{className:"so-home-title so--secondary",children:"Our partners"}),e("div",{className:"so-logos",children:e(se,{each:()=>[Q,Z,W,X,Y,U,K],render:s=>e("img",{src:()=>s.item})})})]})})})]})]}),e(ae,{})]})),r));var _;(_=document.getElementById("app"))==null||_.append(e(le,{}));
