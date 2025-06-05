var O=Object.defineProperty;var L=(s,r,i)=>r in s?O(s,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[r]=i;var u=(s,r,i)=>L(s,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const c="color: hotpink; background-color: black; border-radius: 0.25em";function P(s,...r){for(const i of r)try{return i()}catch{}return s}let g=P(0,()=>JSON.parse(sessionStorage.LOG_LEVEL));globalThis.setLogLevel=s=>{sessionStorage.LOG_LEVEL=JSON.stringify(s),g=s};globalThis.getLogLevel=()=>g;function d(...s){g>=2&&console.group(...s)}function h(){g>=2&&console.groupEnd()}function z(...s){g>=3&&console.log(...s)}const w=new Map,f=[];class I extends HTMLElement{constructor(){super();u(this,"props");u(this,"init");u(this,"parentComp");u(this,"kills",[]);u(this,"onError");u(this,"wasConnected",!1)}get debugName(){var i;return((this.init&&w.get(this.init))??"c-mp")+((i=this.props)!=null&&i.debugName?`(${this.props.debugName})`:"")}connectedCallback(){var n,a;if(this.wasConnected)throw new Error("[swczjp] Component was already connected.");if(!this.isConnected)return;this.wasConnected=!0,this.parentComp=f.at(-1)??((n=this.parentElement)==null?void 0:n.closest("c-mp")),d(`☀️ Component connected: %c${this.debugName}`,c,this,"inside",this.parentComp??this.parentNode);const i=this.init?w.get(this.init)??this.init.name:"Comp",t=this.props&&"debugName"in this.props&&typeof this.props.debugName=="string"?`${i}(${this.props.debugName})`:i;this.setAttribute("is",t),f.push(this);try{(a=this.init)==null||a.call(this,this.props,this)}catch(l){this.handleError(l)}finally{f.pop(),h()}}handleError(i){let t=!1;if(this.onError)try{d(`🎯 Handling error: %c${name}`,c),this.onError(i),t=!0}catch(n){console.error(n)}finally{h()}t||(this.parentComp?(d(`🔍 Looking for error handler: %c${name}`,c),this.parentComp.handleError(i),h()):(d(`⚠️ Failed to handle error: %c${name}`,c),console.error(i),this.remove(),h()))}disconnectedCallback(){var i;if(this.wasConnected){for(d(`🌑 Component disconnected: %c${this.debugName}`,c,this,"from",this.parentComp??this.parentNode),this.parentComp=void 0;this.kills.length;)(i=this.kills.shift())==null||i();this.innerHTML="",this.wasConnected=!1,h()}}}customElements.define("c-mp",I);function M(s,r){return y("c-mp",{props:r,init:s})}function v(s,r){return w.set(r,s),r}const N=[];function C(s,r){let i={name:s,rerun:b,chain:0},t,n=!1,a=!1;function l(){a||(a=!0,x(),z(`💀 Killed effect: %c${s}`,c))}function x(){d(`🧹 Cleaning up effect: %c${s}`,c),i.rerun=void 0;try{t==null||t()}catch(p){m?m.handleError(p):console.error(p)}finally{t=void 0}h()}function b(){if(a||n)return;const p=T();n=!0,queueMicrotask(()=>{if(!a){n=!1,d(`– Effect microtask: %c${s}`,c),x();try{i={name:s,rerun:b,chain:p},d(`▶️ Effect run: %c${s}`,c),N.push(i),t=r()}catch(k){m?m.handleError(k):console.error(k)}finally{N.pop(),h(),h()}}})}const m=f.at(-1);if(!m)throw new Error(`[svhdq6] No active context for effect: ${s}`);m.kills.push(l);try{b()}catch(p){throw m.handleError(p),p}return b}function T(){const s=N.at(-1),r=((s==null?void 0:s.chain)??0)+1;if(r>500)throw new Error(`[svhnon] Infinite effect recursion: ${name}`);return r}function y(s,r){if(typeof s=="function")return M(s,r);{const i=document.createElement(s);if(r){const t=f.at(-1);for(const[n,a]of Object.entries(r))if(n==="className"&&typeof a=="function")C(`${t==null?void 0:t.debugName}.${s}.${n}`,()=>{const l=a(i);Array.isArray(l)?i.className=l.filter(Boolean).join(" "):typeof l=="string"?i.className=l:i.className=""});else if(n==="bindElement"&&typeof a=="function")try{a(i)}catch(l){console.error(l)}else typeof a=="function"&&!n.startsWith("on")&&!s.includes("-")?C(`${t==null?void 0:t.debugName}.${s}.${n}`,()=>{i[n]=a()}):n==="children"||(i[n]=a)}return Array.isArray(r.children)?i.append(...r.children):r.children&&i.append(r.children),i}}const A=v("Fragment",(s,r)=>(r.append(...s.children),r)),e=y,o=y;let B=new Set;function S(s,...r){const i=String.raw(s,r);if(B.has(i))return;const t=document.createElement("style");t.append(i),H(f.at(-1)).append(t)}function H(s){for(;;){if(!s)return document.head;if(s.shadowRoot)return s.shadowRoot;s=s.parentElement}}const F=v("FooterComp",(s,r)=>(r.append(o("footer",{className:"so-main-footer",children:[e("div",{className:"so-main-footer-top",children:o("div",{className:"so-container",children:[e("div",{className:"so-col so--a-24 so--c-8 so-print-n",children:o("div",{className:"so-layout-section",children:[e("h3",{children:"Navigation"}),o("p",{children:[e("a",{href:"http://blog.scienceopen.com",children:"Blog"}),e("br",{}),e("a",{href:"http://about.scienceopen.com",children:"About"}),e("br",{}),e("a",{href:"./search",children:"Search"}),e("br",{}),e("a",{href:"https://www.scienceopen.com/hosted-documents?list=years",children:"Archive"})]}),o("p",{children:[e("a",{href:"http://about.scienceopen.com/copyright-notice/",children:"Copyright Notice"}),e("br",{}),e("a",{className:"so-feedback-link",children:"Feedback"}),e("br",{}),e("a",{href:"http://about.scienceopen.com/contact/",children:"Contact"}),e("br",{}),e("a",{href:"http://about.scienceopen.com/impressum/",children:"Impressum"}),e("br",{}),e("a",{href:"http://about.scienceopen.com/wp-content/uploads/2018/04/ScienceOpen_TermsConditions_2018.pdf",children:"Terms"}),e("br",{}),e("a",{className:"so-cookie-policy",href:"http://about.scienceopen.com/privacy-policy/",children:"Privacy Policy"}),e("br",{}),e("a",{className:"so-change-cookie-consent",children:"Change cookie consent: analytics cookies accepted"})]})]})}),e("div",{className:"so-col so--a-24 so--c-16",children:e("address",{children:o("div",{className:"so-col-row so--no-padding",children:[e("div",{className:"so-col so--a-24 so-m-b-20",children:o("p",{className:"so-m-t-10",children:[e("strong",{children:"ScienceOpen, Inc."}),e("br",{}),o("a",{className:"so-e",children:["info",e("span",{className:"so-n",children:"o83ooc"}),"@",e("span",{className:"so-n",children:"o83ons"}),"scienceopen.com"]})]})}),o("div",{className:"so-col so--c-12 so-m-b-20",children:[e("p",{children:e("strong",{children:"Online services"})}),e("p",{children:e("strong",{children:"Boston"})}),o("p",{children:["131 Hartwell Ave., Suite 210",e("br",{}),"Lexington, MA 02421",e("br",{}),"USA"]}),e("p",{children:"Phone: +1 781-222-5200"})]}),o("div",{className:"so-col so--c-12 so-m-b-20",children:[e("p",{children:e("strong",{children:"Publisher"})}),e("p",{children:e("strong",{children:"Berlin"})}),o("p",{children:["Pappelallee 78/79",e("br",{}),"10437 Berlin",e("br",{}),"Germany"]}),e("p",{children:"Phone: +49-30-609-8490-277"})]})]})})})]})}),e("div",{className:"so-main-footer-bottom",children:e("div",{className:"so-container",children:o("div",{className:"so-col so--a-24 so-floats",children:[e("div",{className:"so-floats-start",children:e("p",{children:"© 2025 ScienceOpen – All rights reserved."})}),e("div",{className:"so-floats-end so-print-n",children:o("p",{className:"so-b3-container so--0",children:[o("a",{href:"https://twitter.com/Science_Open",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--twitter"}),e("span",{className:"so-sr",children:"ScienceOpen on Twitter"})]}),e("br",{className:"so-n"}),o("a",{href:"https://www.youtube.com/user/ScienceOpen",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--youtube"}),e("span",{className:"so-sr",children:"ScienceOpen on YouTube"})]}),e("br",{className:"so-n"}),o("a",{href:"http://www.linkedin.com/company/scienceopen-inc-",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--linkedin"}),e("span",{className:"so-sr",children:"ScienceOpen on LinkedIn"})]}),e("br",{className:"so-n"}),o("a",{href:"https://plus.google.com/118031329666957125433/posts",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--google-plus"}),e("span",{className:"so-sr",children:"ScienceOpen on Google+"})]}),e("br",{className:"so-n"}),o("a",{href:"https://www.facebook.com/scienceopen",target:"_blank",className:"so-b3 so--footer so--transparent so--borderless so--short",children:[e("span",{className:"so-icon so--facebook"}),e("span",{className:"so-sr",children:"ScienceOpen on Facebook"})]})]})})]})})})]})),r)),$=v("HeaderComp",(s,r)=>(S`
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
			display: flex;
		}
		.so-header-button-wrapper {
			display: flex;
			align-items: safe center;
			padding: 0 var(--so--padding--button--x);
		}
		.so-b3 {
			&.so--header {
				/* color: var(--so--color--text); */
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
	`,r.append(e("div",{className:"so-main-header",children:o("div",{className:"so-header-row",children:[e("a",{className:"so-b3 so--borderless so--roundless so-header-button-home-link",href:"./",children:o("span",{className:"so-icon so--logo",children:[e("span",{className:"so-logo-green"}),e("span",{className:"so-logo-dark"}),e("span",{className:"so-logo-light"}),o("span",{className:"so-sr",children:["ScienceOpen: ",e("small",{children:"research and publishing network"})]})]})}),o("div",{className:"so-header-buttons",children:[e("button",{className:"so-b3 so--header so--long so--borderless so--roundless",innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>`}),o("button",{className:"so-b3 so--header so--long so--borderless so--roundless",children:["Join for ",e("span",{className:"so--header--highlight",children:"free"})]}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless",children:"Log in"}),e("div",{className:"so-header-button-wrapper",children:o("button",{className:"so-b3 so--share-your-work so--tall so--green-4",children:[o("div",{children:["Share",e("br",{}),"your",e("br",{}),"work"]}),e("div",{className:"so-icon so--plus"})]})}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless so-light-dark",title:"Toggle light / dark mode",innerHTML:'<svg width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path></svg>'}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless so-access",title:"Toggle accessible mode",children:e("img",{src:"/content/access-2.svg",width:16,height:16,alt:"Toggle accessible mode"})}),e("button",{className:"so-b3 so--header so--long so--borderless so--roundless",innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>`})]})]})})),r)),j=v("AppComp",(s,r)=>(S`
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
				background-image: url('/content/overlay.svg');
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
						font-size: var(--so--font-size--h00);
						line-height: 1em;

						& b {
							background: linear-gradient(
								to right,
								var(--so--green--5),
								var(--so--green--3)
							);
							background-clip: text;
							-webkit-text-fill-color: transparent;
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
				background: linear-gradient(
					to right,
					var(--so--blue--7),
					var(--so--blue--5)
				);
				color: var(--so--color--inverted);
				font-size: var(--so--font-size--h5);
				font-weight: 700;
				padding: calc(var(--so--padding--button--top) * 2)
					calc(var(--so--padding--button--x) * 2)
					calc(var(--so--padding--button--bottom) * 2);
				border-radius: calc(var(--so--border-radius--normal) * 2);
			}
			&.so--cta {
				background: linear-gradient(
					to right,
					var(--so--green--7),
					var(--so--green--5)
				);
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

			& .so-home-title-highlight {
				background: linear-gradient(
					to right,
					var(--so--green--5),
					var(--so--green--3)
				);
				background-clip: text;
				-webkit-text-fill-color: transparent;
				font-family: var(--so--font-family--normal);
				font-weight: 700;
			}

			& .so-home-title-highlight-2 {
				background: linear-gradient(
					to right,
					var(--so--blue--7),
					var(--so--blue--5)
				);
				background-clip: text;
				-webkit-text-fill-color: transparent;
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
					background: radial-gradient(
						circle at top left,
						var(--so--green--7),
						var(--so--green--5)
					);
					color: white;
					border: var(--so--border-width--1) solid
						var(--so--border-color--secondary);
					text-align: center;
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

			&.so--shadowless > div {
				box-shadow: var(--so--box-shadow--2--inset);
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
	`,r.append(o(A,{children:[o("div",{className:"so-main-bg",children:[e($,{}),o("div",{className:"so-main-wrapper",children:[e("div",{className:"so-main-section so--white so-p-t-0",children:o("div",{className:"so-video-wrapper",children:[e("video",{className:"so-video",src:"/content/video.webm",autoplay:!matchMedia("(prefers-reduced-motion)").matches,loop:!0,muted:!0,poster:"/content/video.webp"}),e("div",{className:"so-video-gradient"}),e("div",{className:"so-video-overlay",children:" "}),e("div",{className:"so-video-content",children:o("div",{className:"so-video-card",children:[o("h1",{className:"so-m-0",children:["Welcome to ",e("b",{children:"ScienceOpen"})]}),e("p",{className:"so-m-0",children:"The framework that connects every stage of your research communication — from early results to peer‑reviewed publication."}),o("div",{className:"so-numbers",children:[o("div",{className:"so-number-card",children:[e("b",{children:"100m"}),e("br",{}),"Publications"]}),e("div",{className:"so-vr"}),o("div",{className:"so-number-card",children:[e("b",{children:"250+"}),e("br",{}),"Partner Journals"]}),e("div",{className:"so-vr"}),o("div",{className:"so-number-card",children:[e("b",{children:"1,000"}),e("br",{}),"Collections"]})]}),o("div",{className:"so-flex-row",children:[e("input",{className:"so-text-input so--home",placeholder:"Search on ScienceOpen...",size:1}),e("button",{className:"so-b3 so--cta so--large-font so-flex-0-0-auto",innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>`})]}),o("p",{children:["We also offer",e("br",{}),e("a",{className:"so-b3 so--hp",children:"hosting & publishing solutions"}),e("br",{}),"for journals, institutions, and conferences"]})]})})]})}),e("div",{className:"so-main-section so-p-y-40",children:e("div",{className:"so-container",children:e("div",{className:"so-col so--c-12 so--c-push-6",children:o("div",{className:"so-box so--0",children:[e("div",{className:"so-home-profile-wrapper so--up-center",children:e("img",{src:"/content/alexander-grossmann.webp"})}),o("div",{className:"so-p-20",children:[e("p",{className:"so-d-h5",children:"“In a fragmented publishing landscape, we offer researchers a coherent, open system that supports visibility, credibility, and lasting impact.”"}),e("p",{className:"so-ta-r",children:"— Prof. Dr. Alexander Grossmann, Co-Founder of ScienceOpen"})]})]})})})}),e("div",{className:"so-main-section so--white",children:e("div",{className:"so-container",children:e("div",{className:"so-col",children:o("div",{className:"so-flex-col so--20",children:[o("h2",{className:"so-home-title ",children:["Shape the Future of Research Publishing",e("br",{}),e("span",{className:"so-home-title-highlight",children:"— Your Way."})]}),o("div",{className:"so-home-cards",children:[o("div",{children:[e("h3",{className:"so-home-title",children:"ScienceOpen Preprints"}),o("ul",{children:[o("li",{children:["Post your recent papers for ",e("b",{children:"free"})," and"," ",e("b",{children:"open access"})]}),e("li",{children:"Get a DOI to make your work citable"}),e("li",{children:"Kick off the peer review process by inviting your peers"})]}),o("p",{children:[e("a",{className:"so-b3 so--cta",children:"Publish your preprint"})," ",e("b",{className:"so-color-green-4",children:"FREE"})]})]}),o("div",{className:"so--green",children:[e("h3",{className:"so-home-title",children:"Open. Scalable. Discoverable."}),e("p",{children:"Ideal for sharing early results, building dialogue, and gaining recognition — all while staying flexible for future publication."})]}),o("div",{className:"so--green",children:[e("h3",{className:"so-home-title",children:"From the conference wall to the world."}),e("p",{children:"Turn your poster into a lasting research output — citable, discoverable, and accessible far beyond the conference."})]}),o("div",{children:[e("h3",{className:"so-home-title",children:"ScienceOpen Posters"}),o("ul",{children:[o("li",{children:["Publish your scientific posters – ",e("b",{children:"free"})," and"," ",e("b",{children:"open access"})]}),e("li",{children:"Get a DOI to make your poster citable"}),e("li",{children:"Invite Reviewers to gain feedback from the community"})]}),o("p",{children:[e("a",{className:"so-b3 so--cta",children:"Publish your poster"})," ",e("b",{className:"so-color-green-4",children:"FREE"})]})]}),o("div",{children:[e("h3",{className:"so-home-title",children:"ScienceOpen Partner Journals"}),o("ul",{children:[e("li",{children:"Choose from over 250 journals open for submission"}),e("li",{children:"Increase visibility through indexing (e.g. Google Scholar, Scopus, PubMed Central)"}),e("li",{children:"Publish with transparent, citable peer review"})]}),o("p",{children:[e("a",{className:"so-b3 so--cta",children:"Publish your article"})," ",e("b",{className:"so-color-green-4",children:"FREE"})]})]}),o("div",{className:"so--green",children:[e("h3",{className:"so-home-title",children:"Built for trust. Designed for impact."}),e("p",{children:"ScienceOpen offers a publishing experience where rigorous peer review, professional presentation, and global indexing come together — for research that’s meant to stay. Choose your Journal to publish today!"})]})]})]})})})}),e("div",{className:"so-main-section so-m-t-20",children:e("div",{className:"so-container",children:e("div",{className:"so-col",children:o("div",{className:"so-flex-col so--20",children:[o("h2",{className:"so-home-title ",children:["Empowering Journals,",e("br",{}),"Institutions"," ",e("span",{className:"so-home-title-highlight-2",children:"&"})," ","Conferences"]}),o("div",{className:"so-home-columns",children:[o("div",{children:[e("h3",{className:"so-home-title",children:"Institutional Solutions"}),o("ul",{className:"so-hp",children:[e("li",{children:"Branded publications space to showcase your institution’s research excellence"}),o("li",{children:[" ","Transparent impact tracking through advanced usage and citation metrics"]}),e("li",{children:"Flexible support for preprints, proceedings, and policy papers"})]}),o("p",{className:"so-ta-c",children:[e("a",{className:"so-b3 so--hp",children:"See our solutions"})," "]})]}),o("div",{children:[e("h3",{className:"so-home-title",children:"Journal Publishing"}),o("ul",{className:"so-hp",children:[e("li",{children:"Increase your journal’s visibility, discoverability, and academic reputation"}),o("li",{children:[" ","Streamlined editorial tools to manage submissions and peer review efficiently"]}),e("li",{children:"Modern publishing infrastructure with full OA support (DOI, XML, indexing)"})]}),o("p",{className:"so-ta-c",children:[e("a",{className:"so-b3 so--hp",children:"Learn about journal publishing"})," "]})]}),o("div",{children:[e("h3",{className:"so-home-title",children:"Conference Publishing"}),o("ul",{className:"so-hp",children:[e("li",{children:"Open-access publication of posters, abstracts, and proceedings with DOIs"}),e("li",{children:"Foster engagement through discoverability, sharing, and optional review features"}),o("li",{children:[" ","Extend the life and reach of your conference content"]})]}),o("p",{className:"so-ta-c",children:[e("a",{className:"so-b3 so--hp",children:"Learn about conference publishing"})," "]})]})]})]})})})}),e("div",{className:"so-main-section so--white",children:e("div",{className:"so-container",children:e("div",{className:"so-col",children:o("div",{className:"so-flex-col so--20",children:[o("h2",{className:"so-home-title ",children:["You still have questions?",e("br",{}),e("span",{className:"so-home-title-highlight",children:"Do not hesitate to contact us!"})]}),o("div",{className:"so-home-columns so--shadowless",children:[o("div",{children:[o("h3",{className:"so-home-title so-ta-c",children:["about",e("br",{}),e("span",{className:"so-home-title-highlight",children:"SO Research, Posters & Preprints"})]}),e("div",{className:"so-home-profile-wrapper",children:e("img",{src:"/content/borg.webp"})}),e("p",{className:"so-ta-c so-m-t--20",children:e("a",{className:"so-b3 so--cta",children:"Contact Enno Borg"})})]}),o("div",{children:[o("h3",{className:"so-home-title so-ta-c",children:["about",e("br",{}),e("span",{className:"so-home-title-highlight-2",children:"Conferences"})]}),e("div",{className:"so-home-profile-wrapper",children:e("img",{src:"/content/bender.webp"})}),e("p",{className:"so-ta-c so-m-t--20",children:e("a",{className:"so-b3 so--hp",children:"Contact Georg Benter"})})]}),o("div",{children:[o("h3",{className:"so-home-title so-ta-c",children:["about",e("br",{}),e("span",{className:"so-home-title-highlight-2",children:"B2B Publishing & Hosting"})]}),e("div",{className:"so-home-profile-wrapper",children:e("img",{src:"/content/stuart-cooper.webp"})}),e("p",{className:"so-ta-c so-m-t--20",children:e("a",{className:"so-b3 so--hp",children:"Contact Stuart Cooper"})})]})]})]})})})})]})]}),e(F,{})]})),r));var E;(E=document.getElementById("app"))==null||E.append(e(j,{}));
