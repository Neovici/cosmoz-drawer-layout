import{i as e}from"./preload-helper-usAeo7Bx.js";import{dt as t,lt as n,mt as r,pt as i}from"./iframe-BbCLH1SG.js";var a=e((()=>{}));function o(e){l=e}function s(){l=null,u=0}function c(){return u++}var l,u,d=e((()=>{u=0})),f,p,m,h,g,_,v,y=e((()=>{f=Symbol(`haunted.phase`),p=Symbol(`haunted.hook`),m=Symbol(`haunted.update`),h=Symbol(`haunted.commit`),g=Symbol(`haunted.effects`),_=Symbol(`haunted.layoutEffects`),v=`haunted.context`})),b,ee=e((()=>{d(),y(),b=class{update;host;virtual;[p];[g];[_];constructor(e,t){this.update=e,this.host=t,this[p]=new Map,this[g]=[],this[_]=[]}run(e){o(this);let t=e();return s(),t}_runEffects(e){let t=this[e];o(this);for(let e of t)e.call(this);s()}runEffects(){this._runEffects(g)}runLayoutEffects(){this._runEffects(_)}teardown(){this[p].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),te,ne=e((()=>{te=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function x(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=C(n)}}var S,C,w,T,re,E=e((()=>{ee(),y(),ne(),S=100,C=Promise.resolve().then.bind(Promise.resolve()),w=x(),T=x(),re=class e{renderer;host;state;[f];_updateQueued;_active;_updateCount;_processing;static maxUpdates=S;constructor(e,t){this.renderer=e,this.host=t,this.state=new b(this.update.bind(this),t),this[f]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new te(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,w(()=>{let e=this.handlePhase(m);T(()=>{this.handlePhase(h,e),T(()=>{this.handlePhase(g),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[f]=e,e){case h:this.commit(t),this.runEffects(_);return;case m:return this.render();case g:return this.runEffects(g)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),ie,ae,oe,D,O=e((()=>{ie=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ae=e=>e?.map(e=>typeof e==`string`?ie(e):e),oe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),D=oe}));function se(e){class t extends re{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ae(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,k(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),r._scheduler?.update(),!0):(Reflect.set(e,t,n,r),r._scheduler?.update(),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var k,ce=e((()=>{E(),O(),k=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function le(e,...t){let n=c(),r=l[p],i=r.get(n);return i||(i=new e(n,l,...t),r.set(n,i)),i.update(...t)}function A(e){return le.bind(null,e)}var j,M=e((()=>{d(),y(),j=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function N(e){return A(class extends j{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var P=e((()=>{M()}));function F(e,t){e[g].push(t)}var I,L=e((()=>{y(),P(),I=N(F)})),R,z,B=e((()=>{M(),y(),L(),R=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,z=A(class extends j{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,F(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};R(this.state.host).dispatchEvent(new CustomEvent(v,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function ue(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(v,this)}disconnectedCallback(){this.removeEventListener(v,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(z(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var de=e((()=>{y(),B()})),V,H=e((()=>{M(),V=A(class extends j{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),fe=e((()=>{H()}));function pe(e,t){e[_].push(t)}var me=e((()=>{y(),P(),N(pe)})),he=e((()=>{M(),A(class extends j{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),ge=e((()=>{M(),A(class extends j{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),U,_e=e((()=>{M(),U=/([A-Z])/gu,A(class extends j{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(U,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})})),ve=e((()=>{H()})),ye=e((()=>{M(),A(class extends j{update(){return this.state.host}})}));function be({render:e}){let t=se(e);return{component:t,createContext:ue(t)}}var W=e((()=>{ce(),de(),fe(),L(),me(),he(),ge(),H(),B(),_e(),ve(),ye(),M(),E(),ee(),ne()})),G,xe=e((()=>{G={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6}}));function Se(e){this._$AN===void 0?this._$AM=e:(q(this),this._$AM=e,we(this))}function Ce(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)K(r[e],!1),q(r[e]);else r!=null&&(K(r,!1),q(r));else K(this,e)}var K,q,we,Te,Ee=e((()=>{n(),xe(),K=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),K(e,t);return!0},q=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},we=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Te(t)}},Te=e=>{e.type==G.CHILD&&(e._$AP??=Ce,e._$AQ??=Se)}}));function De(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(J.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?De(e,t):e.teardown();break}else if(J.call(a.addedNodes,n.nextSibling)){i.disconnect(),De(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var J,Oe=e((()=>{xe(),r(),Ee(),E(),J=Array.prototype.includes})),Y,ke,Ae=e((()=>{r(),W(),Oe(),{component:Y,createContext:ke}=be({render:t})})),X=e((()=>{Ae(),W(),O(),W()})),je,Me=e((()=>{X(),je=A(class extends j{update(){return this.state.host}})})),Z,Ne=e((()=>{X(),Me(),Z=e=>{let t=je(),n=V(()=>new CSSStyleSheet,[]);I(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),I(()=>{n.replaceSync(e)},[e])}})),Pe,Fe,Ie,Le=e((()=>{X(),Pe=[`a`,`button`,`input`,`select`,`textarea`,`summary`,`[contenteditable]:not([contenteditable="false"])`,`[role="button"]`,`[tabindex]:not([tabindex="-1"])`,`cosmoz-button`].join(`, `),Fe=e=>{let t=e.shadowRoot,n=new AbortController,r,i,a=t=>e.hasAttribute(t.classList.contains(`side-left`)?`left-drawer-open`:`right-drawer-open`),o=e=>getComputedStyle(e).getPropertyValue(`--_drawer-mode`).trim()===`overlay`,s=(e,t)=>{e.style.removeProperty(`translate`),!(!t||matchMedia(`(prefers-reduced-motion: reduce)`).matches)&&(i=e.animate([{translate:`0 ${t}px`},{translate:`0 0`}],{duration:180,easing:`cubic-bezier(.2, .8, .2, 1)`}),i.onfinish=()=>{i=void 0})},c=()=>{let e=r;return r=void 0,e?.panel.hasPointerCapture(e.pointerId)&&e.panel.releasePointerCapture(e.pointerId),e},l=()=>{let e=c();e&&s(e.panel,e.offset)},u=e=>{if(!e.isPrimary||e.button!==0||r)return;let n=e.composedPath(),s=n.findIndex(e=>e instanceof Element&&e.hasAttribute(`data-drawer-drag-handle`));if(s<0||n.slice(0,s+1).some(e=>e instanceof Element&&e.matches(Pe)))return;let c=n.find(e=>e instanceof HTMLElement&&e.getRootNode()===t&&e.classList.contains(`side`));if(!c||!a(c)||!o(c))return;let l=i&&parseFloat(getComputedStyle(c).translate.split(` `)[1])||0;i?.cancel(),i=void 0,c.style.translate=`0 ${l}px`,r={panel:c,pointerId:e.pointerId,x:e.clientX,y:e.clientY-l,offset:l},c.setPointerCapture(e.pointerId)},d=e=>{if(!r||e.pointerId!==r.pointerId)return;let t=e.clientY-r.y,n=Math.abs(e.clientX-r.x);if(!(!r.offset&&Math.max(Math.abs(t),n)<8)){if(!r.offset&&(t<0||n>t)){l();return}r.offset=Math.max(0,Math.min(t,r.panel.offsetHeight)),r.panel.style.translate=`0 ${r.offset}px`}},f=t=>{if(!r||t.pointerId!==r.pointerId)return;let n=c();s(n.panel,n.offset);let i=Math.min(160,Math.max(80,n.panel.offsetHeight/4));n.offset>=i&&a(n.panel)&&o(n.panel)&&e.dispatchEvent(new CustomEvent(`close`))},p=e=>{e.pointerId===r?.pointerId&&l()},m=()=>{c()?.panel.style.removeProperty(`translate`),i?.cancel(),i=void 0},h=new MutationObserver(t=>{r&&!a(r.panel)&&l(),t.some(t=>t.attributeName===`breakpoint`||e.hasAttribute(t.attributeName))&&m()});h.observe(e,{attributes:!0,attributeFilter:[`left-drawer-open`,`right-drawer-open`,`breakpoint`]});let g=new ResizeObserver(()=>{r&&m()});g.observe(e);let _={signal:n.signal};return t.addEventListener(`pointerdown`,u,_),t.addEventListener(`pointermove`,d,_),t.addEventListener(`pointerup`,f,_),t.addEventListener(`pointercancel`,p,_),t.addEventListener(`lostpointercapture`,p,_),window.addEventListener(`blur`,l,_),()=>{n.abort(),h.disconnect(),g.disconnect(),m()}},Ie=(e,t)=>{I(()=>{if(t===`down`)return Fe(e)},[e,t])}})),Re,Q,ze,$,Be=e((()=>{Ne(),X(),Le(),Re=(e,t)=>{let n=parseInt(String(e??t),10);return Number.isNaN(n)?t:n},Q=`
	.wrapper {
		--_drawer-mode: side;
	}

	.side-left,
	.side-right {
		position: static;
		box-shadow: none;
		z-index: unset;
	}

	:host(:is([left-drawer-open], [right-drawer-open])) .click-layer {
		display: none;
	}
`,ze=e=>{let t=Re(e.breakpoint,1460);return Ie(e,e.swipeToClose),Z(D`
		${t>0?`@container (min-width: ${t}px) {${Q}}`:Q}
	`),i`
		<div class="wrapper">
			<div
				class="side side-left"
				part="left-drawer"
				?inert=${!e.hasAttribute(`left-drawer-open`)}
			>
				<slot name="left"></slot>
			</div>
			<div class="main-wrapper">
				<div
					class="click-layer"
					part="backdrop"
					@click=${()=>e.dispatchEvent(new CustomEvent(`close`))}
				></div>
				<slot class="main" part="main"></slot>
			</div>
			<div
				class="side side-right"
				part="right-drawer"
				?inert=${!e.hasAttribute(`right-drawer-open`)}
			>
				<slot name="right"></slot>
			</div>
		</div>
	`},$=D`
	.click-layer {
		position: absolute;
		z-index: 999;
		inset: 0;
		background: var(--cosmoz-drawer-layout-backdrop-color, rgba(0, 0, 0, 0.3));
		transition:
			display 0.2s allow-discrete,
			opacity 0.2s;
		display: none;
		opacity: 0;
	}

	:host(:is([left-drawer-open], [right-drawer-open])) .click-layer {
		display: block;
		opacity: 1;
	}

	@starting-style {
		:host(:is([left-drawer-open], [right-drawer-open])) .click-layer {
			opacity: 0;
		}
	}

	.main-wrapper {
		display: flex;
		flex: 1 1 auto;
		overflow: hidden auto;
		position: relative;
	}
	.main-wrapper::-webkit-scrollbar {
		width: 4px;
	}
	.main-wrapper::-webkit-scrollbar-track {
		background: transparent;
		cursor: pointer;
	}
	.main-wrapper::-webkit-scrollbar-thumb,
	.main-wrapper::-webkit-scrollbar-thumb:hover {
		background: #aaa;
		cursor: pointer;
	}
	:host {
		display: block;
		width: 100%;
		height: 100%;
		min-height: 0;

		contain: paint;
		container-type: inline-size;

		--_left-drawer-width: var(
			--cosmoz-drawer-layout-left-drawer-width,
			min(400px, 100cqw)
		);
		--_left-drawer-current-width: 0px;

		--_right-drawer-width: var(
			--cosmoz-drawer-layout-right-drawer-width,
			min(400px, 100cqw)
		);
		--_right-drawer-current-width: 0px;

		margin: 0 auto;
	}

	:host([left-drawer-open]) {
		--_left-drawer-current-width: var(--_left-drawer-width);
	}

	:host([right-drawer-open]) {
		--_right-drawer-current-width: var(--_right-drawer-width);
	}

	.wrapper {
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		--_drawer-mode: overlay;
	}

	.side {
		position: fixed;
		display: block;
		flex: none;
		min-width: 0;
		height: 100%;
		transition: width 0.2s ease-in-out;
		contain: paint;
		max-width: 100cqw;
		box-sizing: border-box;
		background: var(--cz-color-bg-primary, #fff);
		z-index: 1000;
	}

	.side-left {
		left: 0;
		width: var(--_left-drawer-current-width, 0);
		box-shadow:
			-6px 0px 16px rgba(16, 24, 40, 0.06),
			-1px 0px 8px rgba(16, 24, 40, 0.1);
	}

	.side-right {
		right: 0;
		order: 1;
		width: var(--_right-drawer-current-width, 0);
		box-shadow:
			6px 0px 16px rgba(16, 24, 40, 0.06),
			1px 0px 8px rgba(16, 24, 40, 0.1);
	}

	:host([left-drawer-open]) .side-left {
		margin-right: var(--cosmoz-drawer-layout-gap, var(--cz-spacing));
	}

	:host([right-drawer-open]) .side-right {
		margin-left: var(--cosmoz-drawer-layout-gap, var(--cz-spacing));
	}

	.main {
		display: flex;
		flex: 1 1 auto;
	}

	::slotted([slot='left']) {
		width: var(--_left-drawer-width);
		transition: width 0.2s ease-in-out;
	}

	::slotted([slot='right']) {
		width: var(--_right-drawer-width);
		transition: width 0.2s ease-in-out;
	}
`,customElements.define(`cosmoz-drawer-layout`,Y(ze,{styleSheets:[$],observedAttributes:[`breakpoint`,`left-drawer-open`,`right-drawer-open`,`swipe-to-close`]}))}));export{D as a,Ae as i,X as n,O as o,Y as r,a as s,Be as t};