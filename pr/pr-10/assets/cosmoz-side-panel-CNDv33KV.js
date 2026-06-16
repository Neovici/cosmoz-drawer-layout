import{i as e}from"./preload-helper-usAeo7Bx.js";import{B as t,G as n,H as r,W as i}from"./iframe-xn_TPffe.js";var a=e((()=>{}));function o(e){c=e}function s(){c=null,l=0}function ee(){return l++}var c,l,u=e((()=>{l=0})),d,f,p,m,h,g,_,v=e((()=>{d=Symbol(`haunted.phase`),f=Symbol(`haunted.hook`),p=Symbol(`haunted.update`),m=Symbol(`haunted.commit`),h=Symbol(`haunted.effects`),g=Symbol(`haunted.layoutEffects`),_=`haunted.context`})),te,ne=e((()=>{u(),v(),te=class{update;host;virtual;[f];[h];[g];constructor(e,t){this.update=e,this.host=t,this[f]=new Map,this[h]=[],this[g]=[]}run(e){o(this);let t=e();return s(),t}_runEffects(e){let t=this[e];o(this);for(let e of t)e.call(this);s()}runEffects(){this._runEffects(h)}runLayoutEffects(){this._runEffects(g)}teardown(){this[f].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),y,b=e((()=>{y=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function x(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=C(n)}}var S,C,w,T,re,E=e((()=>{ne(),v(),b(),S=100,C=Promise.resolve().then.bind(Promise.resolve()),w=x(),T=x(),re=class e{renderer;host;state;[d];_updateQueued;_active;_updateCount;_processing;static maxUpdates=S;constructor(e,t){this.renderer=e,this.host=t,this.state=new te(this.update.bind(this),t),this[d]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new y(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,w(()=>{let e=this.handlePhase(p);T(()=>{this.handlePhase(m,e),T(()=>{this.handlePhase(h),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[d]=e,e){case m:this.commit(t),this.runEffects(g);return;case p:return this.render();case h:return this.runEffects(h)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),ie,ae,oe,D,se=e((()=>{ie=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ae=e=>e?.map(e=>typeof e==`string`?ie(e):e),oe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),D=oe}));function ce(e){class t extends re{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:ee}=r||n||{},c=ae(e.styleSheets||ee);class l extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});c&&(n.adoptedStyleSheets=c),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,O(e),r)}}function u(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let d=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:u(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(l.prototype,d),l}return n}var O,le=e((()=>{E(),se(),O=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function ue(e,...t){let n=ee(),r=c[f],i=r.get(n);return i||(i=new e(n,c,...t),r.set(n,i)),i.update(...t)}function k(e){return ue.bind(null,e)}var A,j=e((()=>{u(),v(),A=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function M(e){return k(class extends A{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var N=e((()=>{j()}));function P(e,t){e[h].push(t)}var F,I=e((()=>{v(),N(),F=M(P)})),L,R,z=e((()=>{j(),v(),I(),L=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,R=k(class extends A{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,P(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};L(this.state.host).dispatchEvent(new CustomEvent(_,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function de(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(_,this)}disconnectedCallback(){this.removeEventListener(_,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(R(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var fe=e((()=>{v(),z()})),B,V=e((()=>{j(),B=k(class extends A{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),pe=e((()=>{V()}));function me(e,t){e[g].push(t)}var he=e((()=>{v(),N(),M(me)})),ge=e((()=>{j(),k(class extends A{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),_e=e((()=>{j(),k(class extends A{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),H,ve=e((()=>{j(),H=/([A-Z])/gu,k(class extends A{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(H,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e){let[t,n,r]=this.resolve(e);this.notify(n,r).defaultPrevented||Object.is(t,n)||(this.state.host[this.property]=n)}})})),ye=e((()=>{V()})),be=e((()=>{j(),k(class extends A{update(){return this.state.host}})}));function xe({render:e}){let t=ce(e);return{component:t,createContext:de(t)}}var U=e((()=>{le(),fe(),pe(),I(),he(),ge(),_e(),V(),z(),ve(),ye(),be(),j(),E(),ne(),b()})),W,G=e((()=>{W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6}}));function Se(e){this._$AN===void 0?this._$AM=e:(q(this),this._$AM=e,we(this))}function Ce(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)K(r[e],!1),q(r[e]);else r!=null&&(K(r,!1),q(r));else K(this,e)}var K,q,we,Te,Ee=e((()=>{t(),G(),K=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),K(e,t);return!0},q=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},we=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Te(t)}},Te=e=>{e.type==W.CHILD&&(e._$AP??=Ce,e._$AQ??=Se)}}));function De(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(J.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?De(e,t):e.teardown();break}else if(J.call(a.addedNodes,n.nextSibling)){i.disconnect(),De(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var J,Oe=e((()=>{G(),n(),Ee(),E(),J=Array.prototype.includes})),Y,ke,Ae=e((()=>{n(),U(),Oe(),{component:Y,createContext:ke}=xe({render:r})})),X=e((()=>{Ae(),U(),se(),U()})),je,Me=e((()=>{X(),je=k(class extends A{update(){return this.state.host}})})),Z,Ne=e((()=>{X(),Me(),Z=e=>{let t=je(),n=B(()=>new CSSStyleSheet,[]);F(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),F(()=>{n.replaceSync(e)},[e])}})),Pe,Q,Fe,Ie,Le=e((()=>{Ne(),X(),Pe=(e,t)=>{let n=parseInt(String(e??t),10);return Number.isNaN(n)?t:n},Q=`
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

	:host([left-drawer-open]) {
		--_left-drawer-current-width: var(--_left-drawer-width);
	}

	:host([right-drawer-open]) {
		--_right-drawer-current-width: var(--_right-drawer-width);
	}
`,Fe=e=>{let t=Pe(e.breakpoint,1460);return Z(D`
		${t>0?`@container (min-width: ${t}px) {${Q}}`:Q}
	`),i`
		<div class="wrapper">
			<slot name="left" class="side side-left" part="left-drawer"></slot>
			<div class="main-wrapper">
				<div
					class="click-layer"
					part="backdrop"
					@click=${()=>e.dispatchEvent(new CustomEvent(`close`))}
				></div>
				<slot class="main" part="main"></slot>
			</div>
			<slot name="right" class="side side-right" part="right-drawer"></slot>
		</div>
	`},Ie=D`
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
`,customElements.define(`cosmoz-drawer-layout`,Y(Fe,{styleSheets:[Ie],observedAttributes:[`breakpoint`]}))})),Re,$,ze=e((()=>{X(),Re=()=>i`<div class="wrapper" part="panel"><slot></slot></div>`,$=D`
	:host {
		display: block;
		box-sizing: border-box;
		height: 100%;
		container-name: var(--_drawer-mode);
		container-type: size;
	}

	.wrapper {
		background: var(--cz-color-bg-primary, #fff);
		height: 100%;
		overflow: auto;
	}
	.wrapper::-webkit-scrollbar {
		width: 4px;
	}
	.wrapper::-webkit-scrollbar-track {
		background: transparent;
		cursor: pointer;
	}
	.wrapper::-webkit-scrollbar-thumb,
	.wrapper::-webkit-scrollbar-thumb:hover {
		background: #aaa;
		cursor: pointer;
	}

	:host([bordered]) {
		padding: var(--cosmoz-side-panel-margin, 5px);
	}

	:host([bordered]) .wrapper {
		border-radius: var(--cosmoz-side-panel-border-radius, 16px);
		border-right: var(--cosmoz-side-panel-border-right, 1px solid #ebebeb);
		border-left: var(--cosmoz-side-panel-border-left, 1px solid #ebebeb);
		border-top: var(--cosmoz-side-panel-border-top, 1px solid #ebebeb);
		border-bottom: var(--cosmoz-side-panel-border-bottom, 1px solid #ebebeb);
	}

	@container overlay (min-width: 0) {
		:host([bordered]) .wrapper {
			border: none;
			border-radius: 0;
		}
	}
`,customElements.define(`cosmoz-side-panel`,Y(Re,{styleSheets:[$]}))}));export{a as i,Le as n,X as r,ze as t};