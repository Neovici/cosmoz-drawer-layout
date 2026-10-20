import{i as e}from"./preload-helper-usAeo7Bx.js";import{dt as t,lt as n,mt as r,pt as i}from"./iframe-BUAwEfD1.js";var a=e((()=>{}));function o(e){l=e}function s(){l=null,u=0}function c(){return u++}var l,u,d=e((()=>{u=0})),f,p,m,h,g,_,v,y=e((()=>{f=Symbol(`haunted.phase`),p=Symbol(`haunted.hook`),m=Symbol(`haunted.update`),h=Symbol(`haunted.commit`),g=Symbol(`haunted.effects`),_=Symbol(`haunted.layoutEffects`),v=`haunted.context`})),b,ee=e((()=>{d(),y(),b=class{update;host;virtual;[p];[g];[_];constructor(e,t){this.update=e,this.host=t,this[p]=new Map,this[g]=[],this[_]=[]}run(e){o(this);let t=e();return s(),t}_runEffects(e){let t=this[e];o(this);for(let e of t)e.call(this);s()}runEffects(){this._runEffects(g)}runLayoutEffects(){this._runEffects(_)}teardown(){this[p].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),te,ne=e((()=>{te=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,x,S,C,w=e((()=>{ee(),y(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),x=re(),S=re(),C=class e{renderer;host;state;[f];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new b(this.update.bind(this),t),this[f]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new te(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,x(()=>{let e=this.handlePhase(m);S(()=>{this.handlePhase(h,e),S(()=>{this.handlePhase(g),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[f]=e,e){case h:this.commit(t),this.runEffects(_);return;case m:return this.render();case g:return this.runEffects(g)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),oe,se,ce,T,E=e((()=>{oe=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},se=e=>e?.map(e=>typeof e==`string`?oe(e):e),ce=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),T=ce}));function le(e){class t extends C{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=se(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,ue(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),r._scheduler?.update(),!0):(Reflect.set(e,t,n,r),r._scheduler?.update(),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var ue,de=e((()=>{w(),E(),ue=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function fe(e,...t){let n=c(),r=l[p],i=r.get(n);return i||(i=new e(n,l,...t),r.set(n,i)),i.update(...t)}function D(e){return fe.bind(null,e)}var O,k=e((()=>{d(),y(),O=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function A(e){return D(class extends O{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var j=e((()=>{k()}));function M(e,t){e[g].push(t)}var N,P=e((()=>{y(),j(),N=A(M)})),F,I,L=e((()=>{k(),y(),P(),F=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,I=D(class extends O{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,M(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};F(this.state.host).dispatchEvent(new CustomEvent(v,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function pe(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(v,this)}disconnectedCallback(){this.removeEventListener(v,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(I(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var me=e((()=>{y(),L()})),R,z=e((()=>{k(),R=D(class extends O{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),he=e((()=>{z()}));function ge(e,t){e[_].push(t)}var _e=e((()=>{y(),j(),A(ge)})),B,ve=e((()=>{k(),B=D(class extends O{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),ye=e((()=>{k(),D(class extends O{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),V,be=e((()=>{k(),V=/([A-Z])/gu,D(class extends O{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(V,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function xe(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Se(e){return R(()=>xe(e),[])}var Ce=e((()=>{z()})),we=e((()=>{k(),D(class extends O{update(){return this.state.host}})}));function Te({render:e}){let t=le(e);return{component:t,createContext:pe(t)}}var H=e((()=>{de(),me(),he(),P(),_e(),ve(),ye(),z(),L(),be(),Ce(),we(),k(),w(),ee(),ne()})),Ee,De=e((()=>{Ee={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6}}));function Oe(e){this._$AN===void 0?this._$AM=e:(W(this),this._$AM=e,Ae(this))}function ke(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)U(r[e],!1),W(r[e]);else r!=null&&(U(r,!1),W(r));else U(this,e)}var U,W,Ae,je,Me=e((()=>{n(),De(),U=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),U(e,t);return!0},W=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ae=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),je(t)}},je=e=>{e.type==Ee.CHILD&&(e._$AP??=ke,e._$AQ??=Oe)}}));function Ne(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(G.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?Ne(e,t):e.teardown();break}else if(G.call(a.addedNodes,n.nextSibling)){i.disconnect(),Ne(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var G,Pe=e((()=>{De(),r(),Me(),w(),G=Array.prototype.includes})),K,Fe,Ie=e((()=>{r(),H(),Pe(),{component:K,createContext:Fe}=Te({render:t})})),q=e((()=>{Ie(),H(),E(),H()})),Le,Re=e((()=>{q(),Le=D(class extends O{update(){return this.state.host}})})),ze,Be=e((()=>{q(),Re(),ze=e=>{let t=Le(),n=R(()=>new CSSStyleSheet,[]);N(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),N(()=>{n.replaceSync(e)},[e])}})),J,Ve,Y,X,He,Ue=e((()=>{q(),J=e=>{let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t instanceof HTMLElement?t:void 0},Ve=(e,t)=>{let n=t??null;for(;n;){if(n===e)return!0;n=n instanceof Element&&n.assignedSlot?n.assignedSlot:n instanceof ShadowRoot?n.host:n.parentNode}return!1},Y=e=>e.classList.contains(`side-left`)?`left-drawer-open`:`right-drawer-open`,X=(e,t)=>{let n=e.getBoundingClientRect();return t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom},He=(e,t,n,r)=>{let i=Se({pressedAt:0,openers:new WeakMap}).current;N(()=>{if(!t)return;let n=[...e.shadowRoot.querySelectorAll(`dialog.side`)],r=new AbortController;e.ownerDocument.addEventListener(`pointerdown`,e=>{i.pointer=e.composedPath().find(e=>e instanceof HTMLElement&&e.tabIndex>=0),i.pressedAt=performance.now()},{capture:!0,signal:r.signal});let a=()=>e.dispatchEvent(new CustomEvent(`close`));for(let t of n){let n=!1;t.addEventListener(`cancel`,e=>{e.preventDefault(),a()},{signal:r.signal}),t.addEventListener(`close`,()=>{let n=i.openers.get(t),r=J(e.ownerDocument);n?.isConnected&&(r===e.ownerDocument.body||Ve(t,r))&&n.focus({preventScroll:!0}),i.openers.delete(t),e.hasAttribute(Y(t))&&a()},{signal:r.signal}),`closedBy`in HTMLDialogElement.prototype||(t.addEventListener(`pointerdown`,e=>{n=e.target===t&&X(t,e)},{signal:r.signal}),t.addEventListener(`click`,e=>{n&&e.target===t&&X(t,e)&&a(),n=!1},{signal:r.signal}))}return()=>{r.abort();for(let e of n.reverse())e.open&&e.close()}},[e,t,i]),N(()=>{if(!t)return;let n=[...e.shadowRoot.querySelectorAll(`dialog.side`)];for(let t of[...n].reverse())t.open&&!e.hasAttribute(Y(t))&&t.close();for(let t of n)if(!t.open&&e.hasAttribute(Y(t))){let n=J(e.ownerDocument),r=(performance.now()-i.pressedAt<500?i.pointer:void 0)??n;r&&i.openers.set(t,r),t.showModal()}},[e,t,n,r,i])}})),We,Ge=e((()=>{q(),We=(e,t,n)=>{let[r,i]=B(!1);return N(()=>{if(!n)return;let t=()=>i(getComputedStyle(e.shadowRoot.querySelector(`.wrapper`)).getPropertyValue(`--_drawer-mode`).trim()===`overlay`),r=new ResizeObserver(t);return r.observe(e),t(),()=>r.disconnect()},[e,t,n]),r}})),Z,Q,Ke,qe=e((()=>{Z=(e,t,n)=>Math.min(n,Math.max(t,e)),Q=(e,t)=>t>.5?Z(e/t,120,280):220,Ke=e=>{let t=e.shadowRoot.querySelector(`.click-layer`),n,r,i=()=>{if(r?.cancel(),r=void 0,n){n.removeAttribute(`data-swiping`);for(let e of[`translate`,`--_drawer-swipe-progress`,`--cosmoz-drawer-layout-swipe-duration`])n.style.removeProperty(e)}n=void 0;for(let e of[`opacity`,`transition`,`transition-duration`])t.style.removeProperty(e)},a=e=>{let r=Z(e/n.offsetHeight,0,1);n.style.setProperty(`--_drawer-swipe-progress`,String(r)),t.style.opacity=String(1-r)};return{get active(){return!!n},begin(e){let o=n===e&&r&&parseFloat(getComputedStyle(e).translate.split(` `)[1])||0;return i(),n=e,n.setAttribute(`data-swiping`,``),t.style.transition=`none`,n.style.translate=`0 ${o}px`,a(o),o},move(e){n.style.translate=`0 ${e}px`,a(e)},finish(e,o=!1,s=0){let c=n,l=matchMedia(`(prefers-reduced-motion: reduce)`).matches,u=o?Q(c.offsetHeight-e,s):180,d=l?0:u;if(c.style.setProperty(`--cosmoz-drawer-layout-swipe-duration`,`${d}ms`),c.removeAttribute(`data-swiping`),t.style.removeProperty(`transition`),t.style.transitionDuration=`${d}ms`,a(o?c.offsetHeight:0),c.style.removeProperty(`translate`),!e||l){i();return}let f=c.animate([{translate:`0 ${e}px`},{translate:`0 0`}],{duration:d,easing:o?`cubic-bezier(.2, 0, .2, 1)`:`cubic-bezier(.2, .8, .2, 1)`});r=f,f.onfinish=()=>{r===f&&i()}},reset:i}}})),Je,Ye,Xe,Ze=e((()=>{q(),qe(),Je=[`a`,`button`,`input`,`select`,`textarea`,`summary`,`[contenteditable]:not([contenteditable="false"])`,`[role="button"]`,`[tabindex]:not([tabindex="-1"])`,`cosmoz-button`].join(`, `),Ye=e=>{let t=e.shadowRoot,n=new AbortController,r=Ke(e),i,a=t=>e.hasAttribute(t.classList.contains(`side-left`)?`left-drawer-open`:`right-drawer-open`),o=e=>getComputedStyle(e).getPropertyValue(`--_drawer-mode`).trim()===`overlay`,s=()=>{let e=i;return i=void 0,e?.panel.hasPointerCapture(e.pointerId)&&e.panel.releasePointerCapture(e.pointerId),e},c=()=>{let e=s();e&&r.finish(e.offset)},l=e=>{if(!e.isPrimary||e.button!==0||i)return;let n=e.composedPath(),s=n.findIndex(e=>e instanceof Element&&e.hasAttribute(`data-drawer-drag-handle`));if(s<0||n.slice(0,s+1).some(e=>e instanceof Element&&e.matches(Je)))return;let c=n.find(e=>e instanceof HTMLElement&&e.getRootNode()===t&&e.classList.contains(`side`));if(!c||!a(c)||!o(c))return;let l=r.begin(c);i={panel:c,pointerId:e.pointerId,x:e.clientX,y:e.clientY-l,offset:l,lastY:e.clientY,lastTime:e.timeStamp,lastMovingTime:e.timeStamp,velocity:0},c.setPointerCapture(e.pointerId)},u=e=>{if(!i||e.pointerId!==i.pointerId)return;let t=e.clientY-i.y,n=Math.abs(e.clientX-i.x);if(!i.offset&&Math.max(Math.abs(t),n)<8)return;if(!i.offset&&(t<0||n>t)){c();return}i.offset=Math.max(0,Math.min(t,i.panel.offsetHeight));let a=e.clientY-i.lastY;Math.abs(a)>=1&&(i.velocity=a/Math.max(8,e.timeStamp-i.lastTime),i.lastMovingTime=e.timeStamp),i.lastTime=e.timeStamp,i.lastY=e.clientY,r.move(i.offset)},d=t=>{if(!i||t.pointerId!==i.pointerId||(u(t),!i))return;let n=s(),c=t.timeStamp-n.lastMovingTime<=80?n.velocity:0,l=Math.min(160,Math.max(80,n.panel.offsetHeight/4));if((n.offset>=l||n.offset>=48&&c>=.5)&&a(n.panel)&&o(n.panel)){let t=e.dispatchEvent(new CustomEvent(`close`,{cancelable:!0}));r.finish(n.offset,t,c);return}r.finish(n.offset)},f=e=>{e.pointerId===i?.pointerId&&c()},p=()=>{s(),r.reset()},m=new MutationObserver(t=>{i&&!a(i.panel)&&c(),t.some(t=>t.attributeName===`breakpoint`||e.hasAttribute(t.attributeName))&&p()});m.observe(e,{attributes:!0,attributeFilter:[`left-drawer-open`,`right-drawer-open`,`breakpoint`]});let h=new ResizeObserver(()=>{(i||r.active)&&p()});h.observe(e);let g={signal:n.signal};return t.addEventListener(`pointerdown`,l,g),t.addEventListener(`pointermove`,u,g),t.addEventListener(`pointerup`,d,g),t.addEventListener(`pointercancel`,f,g),t.addEventListener(`lostpointercapture`,f,g),window.addEventListener(`blur`,c,g),()=>{n.abort(),m.disconnect(),h.disconnect(),p()}},Xe=(e,t)=>{N(()=>{if(t===`down`)return Ye(e)},[e,t])}})),Qe,$,$e,et,tt=e((()=>{Be(),q(),Ue(),Ge(),Ze(),Qe=(e,t)=>{let n=parseInt(String(e??t),10);return Number.isNaN(n)?t:n},$=`
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
`,$e=e=>{let t=Qe(e.breakpoint,1460);ze(T`
		${t>0?`@container (min-width: ${t}px) {${$}}`:$}
	`);let n=We(e,t,e.hasAttribute(`modal-overlay`)),r=e.hasAttribute(`modal-overlay`)&&n;Xe(e,e.swipeToClose),He(e,r,e.hasAttribute(`left-drawer-open`),e.hasAttribute(`right-drawer-open`));let a=t=>{let n=e.hasAttribute(`${t}-drawer-open`);return r?i` <dialog
					class="side side-${t}"
					part="${t}-drawer"
					?inert=${!n}
					aria-label=${(t===`left`?e.leftDrawerLabel:e.rightDrawerLabel)??``}
					closedby="any"
					autofocus
				>
					<slot name=${t}></slot>
				</dialog>`:i` <div
					class="side side-${t}"
					part="${t}-drawer"
					?inert=${!n}
				>
					<slot name=${t}></slot>
				</div>`};return i`
		<div class="wrapper">
			${a(`left`)}
			<div class="main-wrapper">
				<div
					class="click-layer"
					part="backdrop"
					?hidden=${r}
					@click=${()=>e.dispatchEvent(new CustomEvent(`close`))}
				></div>
				<slot class="main" part="main"></slot>
			</div>
			${a(`right`)}
		</div>
	`},et=T`
	dialog.side {
		inset: auto;
		top: 0;
		margin: 0;
		padding: 0;
		border: 0;
		color: inherit;
		max-height: none;
		overflow: hidden;
		transition:
			display var(--cosmoz-drawer-layout-swipe-duration, 220ms) allow-discrete,
			overlay var(--cosmoz-drawer-layout-swipe-duration, 220ms) allow-discrete;
	}
	dialog.side:not([open]) {
		display: none;
	}
	dialog.side::backdrop {
		background: var(--cosmoz-drawer-layout-backdrop-color, rgba(0, 0, 0, 0.3));
		opacity: calc(1 - var(--_drawer-swipe-progress, 0));
		transition: opacity var(--cosmoz-drawer-layout-swipe-duration, 180ms);
	}
	dialog.side:not([open])::backdrop {
		opacity: 0;
	}
	dialog.side[data-swiping]::backdrop {
		transition: none;
	}
	@starting-style {
		dialog.side[open]::backdrop {
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		dialog.side,
		dialog.side::backdrop {
			transition: none;
		}
	}
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

	:host(:is([left-drawer-open], [right-drawer-open]))
		.click-layer:not([hidden]) {
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
`,customElements.define(`cosmoz-drawer-layout`,K($e,{styleSheets:[et],observedAttributes:[`breakpoint`,`left-drawer-open`,`right-drawer-open`,`swipe-to-close`,`modal-overlay`,`left-drawer-label`,`right-drawer-label`]}))}));export{T as a,Ie as i,q as n,E as o,K as r,a as s,tt as t};