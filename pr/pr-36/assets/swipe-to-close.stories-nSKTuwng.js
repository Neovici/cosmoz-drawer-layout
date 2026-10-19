import{i as e}from"./preload-helper-usAeo7Bx.js";import{pt as t}from"./iframe-BbCLH1SG.js";import{n,s as r,t as i}from"./cosmoz-drawer-layout-DrMfynRC.js";var a,o,s;e((()=>{r(),n(),i(),a={title:`DrawerLayout/Swipe to close`,tags:[`autodocs`]},o={render:()=>t`
        <style>
            .swipe-demo {
                width: 360px;
                max-width: 100%;
                height: 580px;
                font-family: var(--cz-font-body);
                color: var(--cz-color-text-primary);
                background: var(--cz-color-bg-primary);
            }
            .swipe-demo::part(left-drawer) {
                top: 80px;
                bottom: 0;
                height: auto;
                width: 100%;
                transform: translateY(100%);
                visibility: hidden;
                transition:
                    transform 220ms,
                    visibility 220ms;
                border-radius: var(--cz-radius-4xl) var(--cz-radius-4xl) 0 0;
                background: var(--cz-glass-sheen), var(--cz-color-bg-primary);
                box-shadow: var(--cz-shadow-glass);
                backdrop-filter: var(--cz-backdrop-filter-glass);
            }
            .swipe-demo[left-drawer-open]::part(left-drawer) {
                transform: translateY(0);
                visibility: visible;
            }
            .swipe-demo main {
                padding: 24px;
            }
            .swipe-demo section {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            .swipe-demo header {
                touch-action: none;
                -webkit-user-select: none;
                user-select: none;
                cursor: grab;
                padding: 12px 20px 16px;
            }
            .swipe-demo .grip {
                width: 40px;
                height: 4px;
                margin: 0 auto 16px;
                background: var(--cz-color-fg-quaternary);
                border-radius: var(--cz-radius-full);
            }
            .swipe-demo .heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .swipe-demo h2 {
                margin: 0;
                font-size: 20px;
            }
            .swipe-demo button {
                min-height: 44px;
                padding: 8px 16px;
                font: inherit;
                cursor: pointer;
                color: inherit;
                background: var(--cz-color-bg-glass);
                border: 1px solid var(--cz-color-border-glass);
                border-radius: var(--cz-radius-full);
            }
            .swipe-demo .content {
                flex: 1;
                overflow: auto;
                padding: 0 20px;
                overscroll-behavior: contain;
            }
            .swipe-demo .content p {
                padding-block: 20px;
            }
            @media (prefers-reduced-motion: reduce) {
                .swipe-demo::part(left-drawer) {
                    transition: none;
                }
            }
        </style>
        <cosmoz-drawer-layout
            class="swipe-demo"
            breakpoint="10000"
            swipe-to-close="down"
            left-drawer-open
            @close=${e=>e.currentTarget.removeAttribute(`left-drawer-open`)}
        >
            <main>
                <button
                    @click=${e=>e.currentTarget.closest(`cosmoz-drawer-layout`).setAttribute(`left-drawer-open`,``)}
                >
                    Open menu
                </button>
                <p>
                    Drag the header down to close. Short drags return the sheet to its
                    open position.
                </p>
            </main>
            <section slot="left">
                <header data-drawer-drag-handle>
                    <div class="grip" aria-hidden="true"></div>
                    <div class="heading">
                        <h2>Menu</h2>
                        <button
                            @click=${e=>e.currentTarget.closest(`cosmoz-drawer-layout`).removeAttribute(`left-drawer-open`)}
                        >
                            Close
                        </button>
                    </div>
                </header>
                <div class="content">
                    <p>This content scrolls independently of the header gesture.</p>
                    ${Array.from({length:12},(e,n)=>t`<p>Document ${n+1}</p>`)}
                </div>
            </section>
        </cosmoz-drawer-layout>
    `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .swipe-demo {
                width: 360px;
                max-width: 100%;
                height: 580px;
                font-family: var(--cz-font-body);
                color: var(--cz-color-text-primary);
                background: var(--cz-color-bg-primary);
            }
            .swipe-demo::part(left-drawer) {
                top: 80px;
                bottom: 0;
                height: auto;
                width: 100%;
                transform: translateY(100%);
                visibility: hidden;
                transition:
                    transform 220ms,
                    visibility 220ms;
                border-radius: var(--cz-radius-4xl) var(--cz-radius-4xl) 0 0;
                background: var(--cz-glass-sheen), var(--cz-color-bg-primary);
                box-shadow: var(--cz-shadow-glass);
                backdrop-filter: var(--cz-backdrop-filter-glass);
            }
            .swipe-demo[left-drawer-open]::part(left-drawer) {
                transform: translateY(0);
                visibility: visible;
            }
            .swipe-demo main {
                padding: 24px;
            }
            .swipe-demo section {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            .swipe-demo header {
                touch-action: none;
                -webkit-user-select: none;
                user-select: none;
                cursor: grab;
                padding: 12px 20px 16px;
            }
            .swipe-demo .grip {
                width: 40px;
                height: 4px;
                margin: 0 auto 16px;
                background: var(--cz-color-fg-quaternary);
                border-radius: var(--cz-radius-full);
            }
            .swipe-demo .heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .swipe-demo h2 {
                margin: 0;
                font-size: 20px;
            }
            .swipe-demo button {
                min-height: 44px;
                padding: 8px 16px;
                font: inherit;
                cursor: pointer;
                color: inherit;
                background: var(--cz-color-bg-glass);
                border: 1px solid var(--cz-color-border-glass);
                border-radius: var(--cz-radius-full);
            }
            .swipe-demo .content {
                flex: 1;
                overflow: auto;
                padding: 0 20px;
                overscroll-behavior: contain;
            }
            .swipe-demo .content p {
                padding-block: 20px;
            }
            @media (prefers-reduced-motion: reduce) {
                .swipe-demo::part(left-drawer) {
                    transition: none;
                }
            }
        </style>
        <cosmoz-drawer-layout
            class="swipe-demo"
            breakpoint="10000"
            swipe-to-close="down"
            left-drawer-open
            @close=\${(event: Event) => (event.currentTarget as HTMLElement).removeAttribute('left-drawer-open')}
        >
            <main>
                <button
                    @click=\${(event: Event) => (event.currentTarget as HTMLElement).closest('cosmoz-drawer-layout')!.setAttribute('left-drawer-open', '')}
                >
                    Open menu
                </button>
                <p>
                    Drag the header down to close. Short drags return the sheet to its
                    open position.
                </p>
            </main>
            <section slot="left">
                <header data-drawer-drag-handle>
                    <div class="grip" aria-hidden="true"></div>
                    <div class="heading">
                        <h2>Menu</h2>
                        <button
                            @click=\${(event: Event) => (event.currentTarget as HTMLElement).closest('cosmoz-drawer-layout')!.removeAttribute('left-drawer-open')}
                        >
                            Close
                        </button>
                    </div>
                </header>
                <div class="content">
                    <p>This content scrolls independently of the header gesture.</p>
                    \${Array.from({
    length: 12
  }, (_, index) => html\`<p>Document \${index + 1}</p>\`)}
                </div>
            </section>
        </cosmoz-drawer-layout>
    \`
}`,...o.parameters?.docs?.source}}},s=[`BottomSheet`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .swipe-demo {
                width: 360px;
                max-width: 100%;
                height: 580px;
                font-family: var(--cz-font-body);
                color: var(--cz-color-text-primary);
                background: var(--cz-color-bg-primary);
            }
            .swipe-demo::part(left-drawer) {
                top: 80px;
                bottom: 0;
                height: auto;
                width: 100%;
                transform: translateY(100%);
                visibility: hidden;
                transition:
                    transform 220ms,
                    visibility 220ms;
                border-radius: var(--cz-radius-4xl) var(--cz-radius-4xl) 0 0;
                background: var(--cz-glass-sheen), var(--cz-color-bg-primary);
                box-shadow: var(--cz-shadow-glass);
                backdrop-filter: var(--cz-backdrop-filter-glass);
            }
            .swipe-demo[left-drawer-open]::part(left-drawer) {
                transform: translateY(0);
                visibility: visible;
            }
            .swipe-demo main {
                padding: 24px;
            }
            .swipe-demo section {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            .swipe-demo header {
                touch-action: none;
                -webkit-user-select: none;
                user-select: none;
                cursor: grab;
                padding: 12px 20px 16px;
            }
            .swipe-demo .grip {
                width: 40px;
                height: 4px;
                margin: 0 auto 16px;
                background: var(--cz-color-fg-quaternary);
                border-radius: var(--cz-radius-full);
            }
            .swipe-demo .heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .swipe-demo h2 {
                margin: 0;
                font-size: 20px;
            }
            .swipe-demo button {
                min-height: 44px;
                padding: 8px 16px;
                font: inherit;
                cursor: pointer;
                color: inherit;
                background: var(--cz-color-bg-glass);
                border: 1px solid var(--cz-color-border-glass);
                border-radius: var(--cz-radius-full);
            }
            .swipe-demo .content {
                flex: 1;
                overflow: auto;
                padding: 0 20px;
                overscroll-behavior: contain;
            }
            .swipe-demo .content p {
                padding-block: 20px;
            }
            @media (prefers-reduced-motion: reduce) {
                .swipe-demo::part(left-drawer) {
                    transition: none;
                }
            }
        </style>
        <cosmoz-drawer-layout
            class="swipe-demo"
            breakpoint="10000"
            swipe-to-close="down"
            left-drawer-open
            @close=\${(event: Event) => (event.currentTarget as HTMLElement).removeAttribute('left-drawer-open')}
        >
            <main>
                <button
                    @click=\${(event: Event) => (event.currentTarget as HTMLElement).closest('cosmoz-drawer-layout')!.setAttribute('left-drawer-open', '')}
                >
                    Open menu
                </button>
                <p>
                    Drag the header down to close. Short drags return the sheet to its
                    open position.
                </p>
            </main>
            <section slot="left">
                <header data-drawer-drag-handle>
                    <div class="grip" aria-hidden="true"></div>
                    <div class="heading">
                        <h2>Menu</h2>
                        <button
                            @click=\${(event: Event) => (event.currentTarget as HTMLElement).closest('cosmoz-drawer-layout')!.removeAttribute('left-drawer-open')}
                        >
                            Close
                        </button>
                    </div>
                </header>
                <div class="content">
                    <p>This content scrolls independently of the header gesture.</p>
                    \${Array.from({
    length: 12
  }, (_, index) => html\`<p>Document \${index + 1}</p>\`)}
                </div>
            </section>
        </cosmoz-drawer-layout>
    \`
}`,...o.parameters?.docs?.source}}}}))();export{o as BottomSheet,s as __namedExportsOrder,a as default};