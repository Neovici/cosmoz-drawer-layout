import{i as e}from"./preload-helper-usAeo7Bx.js";import{W as t}from"./iframe-CxPht1pR.js";import{i as n,n as r,r as i,t as a}from"./cosmoz-side-panel-DPPx29xt.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),i(),r(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`DrawerLayout`,component:`cosmoz-drawer-layout`,tags:[`autodocs`],argTypes:{breakpoint:{control:`number`,description:`Width breakpoint (px) for side/overlay switch. 0 = always side mode.`},leftDrawerOpen:{control:`boolean`,description:`Opens the left drawer (overlay mode)`},rightDrawerOpen:{control:`boolean`,description:`Opens the right drawer (overlay mode)`}},args:{breakpoint:1024,leftDrawerOpen:!1,rightDrawerOpen:!1,onClose:o()}},c=e=>{let t=e.currentTarget;t.removeAttribute(`left-drawer-open`),t.removeAttribute(`right-drawer-open`)},l=e=>t=>{let n=t.currentTarget.closest(`.story-app`)?.querySelector(`cosmoz-drawer-layout`);n&&n.toggleAttribute(e,!n.hasAttribute(e))},u=l(`left-drawer-open`),d=l(`right-drawer-open`),f=e=>t`
    <cosmoz-drawer-layout
        breakpoint=${e.breakpoint}
        ?left-drawer-open=${e.leftDrawerOpen}
        ?right-drawer-open=${e.rightDrawerOpen}
        @close=${t=>e.onClose(t.detail)}
        style="height: 400px; border: 1px solid #ddd;"
    >
        <cosmoz-side-panel slot="left">
            <div style="padding: 16px;">Left Drawer Content</div>
        </cosmoz-side-panel>
        <div style="padding: 16px;">Main Content Area</div>
        <cosmoz-side-panel slot="right">
            <div style="padding: 16px;">Right Drawer Content</div>
        </cosmoz-side-panel>
    </cosmoz-drawer-layout>
`,p={render:f},m={args:{breakpoint:0,leftDrawerOpen:!0,rightDrawerOpen:!1},render:f},h=e=>{let t=e.currentTarget.closest(`.finance-story`);t&&t.classList.add(`is-nav-collapsed`)},g=e=>{let t=e.currentTarget.closest(`.finance-story`);t&&t.classList.remove(`is-nav-collapsed`)},_={parameters:{layout:`fullscreen`},render:()=>t`
        <style>
            .finance-story {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                --cosmoz-drawer-layout-left-drawer-width: min(260px, 80cqw);
                --cosmoz-drawer-layout-right-drawer-width: min(420px, 100cqw);
                background: var(--cz-color-bg-secondary, #f9fafb);
                color: var(--cz-color-text-primary, #181d27);
                font-family: var(--cz-font-body, system-ui, sans-serif);
                box-sizing: border-box;
            }

            .finance-story.is-nav-collapsed {
                --cosmoz-drawer-layout-left-drawer-width: 60px;
            }

            .finance-story cosmoz-side-panel[slot='left']::part(panel) {
                background: var(--fin-nav-bg, #101828);
            }

            .finance-story cosmoz-side-panel[slot='left'] {
                color: var(--cz-color-white, #fff);
                min-height: 100vh;
            }

            .finance-story cosmoz-side-panel[slot='right']::part(panel) {
                background: transparent;
            }

            /* ─── Left Nav ─── */

            .fin-nav {
                background: var(--fin-nav-bg, #101828);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                height: 100%;
                overflow: hidden;
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
                transition: padding 0.2s ease;
            }

            .fin-nav-brand {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .fin-nav-logo {
                align-items: center;
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-white, #fff);
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                font-weight: var(--cz-font-weight-bold, 700);
                height: 36px;
                justify-items: center;
                min-width: 36px;
                width: 36px;
            }

            .fin-nav-brand-text {
                font-size: var(--cz-text-lg, 1.125rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                letter-spacing: -0.01em;
            }

            .fin-nav-list {
                display: flex;
                flex-direction: column;
                gap: 2px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .fin-nav-item {
                align-items: center;
                background: transparent;
                border: 0;
                border-radius: var(--cz-radius-xl, 0.75rem);
                color: rgb(255 255 255 / 0.7);
                cursor: pointer;
                display: flex;
                font: inherit;
                font-size: var(--cz-text-sm, 0.875rem);
                font-weight: var(--cz-font-weight-medium, 500);
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: left;
                transition:
                    background 0.15s ease,
                    color 0.15s ease;
                width: 100%;
            }

            .fin-nav-item:hover {
                background: rgb(255 255 255 / 0.08);
                color: rgb(255 255 255 / 0.95);
            }

            .fin-nav-item.active {
                background: rgb(255 255 255 / 0.12);
                color: var(--cz-color-white, #fff);
                font-weight: var(--cz-font-weight-semibold, 600);
            }

            .fin-nav-icon {
                align-items: center;
                flex: none;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 22px;
                justify-items: center;
                width: 22px;
            }

            .fin-nav-spacer {
                flex: 1;
            }

            .fin-nav-collapse-btn,
            .fin-nav-expand-btn {
                align-items: center;
                background: rgb(255 255 255 / 0.06);
                border: 0;
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: rgb(255 255 255 / 0.6);
                cursor: pointer;
                display: flex;
                font: inherit;
                font-size: var(--cz-text-sm, 0.875rem);
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                padding: calc(var(--cz-spacing, 0.25rem) * 2)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                transition:
                    background 0.15s ease,
                    color 0.15s ease;
                width: 100%;
            }

            .fin-nav-collapse-btn:hover,
            .fin-nav-expand-btn:hover {
                background: rgb(255 255 255 / 0.1);
                color: rgb(255 255 255 / 0.85);
            }

            .fin-nav-expand-btn {
                display: none;
            }

            /* ─── Collapsed Nav ─── */

            .finance-story.is-nav-collapsed .fin-nav {
                padding: calc(var(--cz-spacing, 0.25rem) * 5)
                    calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .finance-story.is-nav-collapsed .fin-nav-brand-text,
            .finance-story.is-nav-collapsed .fin-nav-label,
            .finance-story.is-nav-collapsed .fin-nav-collapse-label {
                display: none;
                opacity: 0;
                transition:
                    display 0.15s ease allow-discrete,
                    opacity 0.15s ease;
            }

            .finance-story.is-nav-collapsed .fin-nav-item {
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .finance-story.is-nav-collapsed .fin-nav-collapse-btn {
                display: none;
            }

            .finance-story.is-nav-collapsed .fin-nav-expand-btn {
                display: flex;
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .finance-story.is-nav-collapsed .fin-nav-expand-label {
                display: none;
            }

            /* ─── Main Content ─── */

            .fin-main {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 6);
                min-height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                width: 100%;
            }

            .fin-topbar {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                justify-content: space-between;
            }

            .fin-topbar-left {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
            }

            .fin-topbar-left h1,
            .fin-topbar-left p {
                margin: 0;
            }

            .fin-topbar-left h1 {
                font-size: var(--cz-text-xl, 1.25rem);
                letter-spacing: -0.02em;
            }

            .fin-topbar-left p {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                margin-top: calc(var(--cz-spacing, 0.25rem));
            }

            .fin-hamburger {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-xl, 1.25rem);
                height: 40px;
                justify-items: center;
                transition:
                    box-shadow 0.15s ease,
                    background 0.15s ease;
                width: 40px;
            }

            .fin-hamburger:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
            }

            .fin-topbar-right {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .fin-icon-btn {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-full, 9999px);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 40px;
                justify-items: center;
                position: relative;
                transition:
                    box-shadow 0.15s ease,
                    transform 0.15s ease;
                width: 40px;
            }

            .fin-icon-btn:hover {
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                transform: translateY(-1px);
            }

            .fin-notif-badge {
                background: var(--cz-color-bg-error-solid, #d92d20);
                border: 2px solid var(--cz-color-bg-primary, #fff);
                border-radius: var(--cz-radius-full, 9999px);
                height: 10px;
                position: absolute;
                right: 6px;
                top: 6px;
                width: 10px;
            }

            .fin-avatar {
                align-items: center;
                background: var(--cz-color-bg-brand, #dee6f6);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-brand, #496dac);
                display: inline-grid;
                font-weight: var(--cz-font-weight-bold, 700);
                font-size: var(--cz-text-sm, 0.875rem);
                height: 40px;
                justify-items: center;
                width: 40px;
            }

            /* ─── Stat Cards ─── */

            .fin-stats {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }

            .fin-stat {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .fin-stat h3,
            .fin-stat p,
            .fin-stat h2 {
                margin: 0;
            }

            .fin-stat-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .fin-stat-value {
                font-size: var(--cz-text-2xl, 1.5rem);
                font-weight: var(--cz-font-weight-bold, 700);
                letter-spacing: -0.02em;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .fin-stat-change {
                align-items: center;
                display: inline-flex;
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                gap: calc(var(--cz-spacing, 0.25rem));
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 2);
                border-radius: var(--cz-radius-full, 9999px);
            }

            .fin-stat-change.up {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .fin-stat-change.down {
                background: var(--cz-color-bg-error, #fef3f2);
                color: var(--cz-color-text-error, #b42318);
            }

            /* ─── Chart Area ─── */

            .fin-chart-section {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .fin-chart-section h3,
            .fin-chart-section p {
                margin: 0;
            }

            .fin-chart-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .fin-chart-header h3 {
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            .fin-chart-mocked {
                background:
                    linear-gradient(
                        135deg,
                        var(--cz-color-brand-50, #dee6f6) 0%,
                        transparent 40%
                    ),
                    linear-gradient(
                        60deg,
                        rgb(73 109 172 / 0.18),
                        rgb(73 109 172 / 0.04) 60%,
                        transparent 60%
                    );
                border: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                border-radius: var(--cz-radius-xl, 0.75rem);
                height: 180px;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
                position: relative;
                overflow: hidden;
            }

            .fin-chart-bar-group {
                align-items: flex-end;
                bottom: 12px;
                display: flex;
                gap: 6px;
                left: 16px;
                position: absolute;
                right: 16px;
            }

            .fin-chart-bar {
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-radius: 3px 3px 0 0;
                flex: 1;
                opacity: 0.7;
            }

            .fin-chart-bar:nth-child(odd) {
                background: linear-gradient(
                    180deg,
                    var(--cz-color-bg-brand-solid, #496dac),
                    rgb(73 109 172 / 0.5)
                );
            }

            /* ─── Transactions ─── */

            .fin-txn-section {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .fin-txn-section h3 {
                margin: 0 0 calc(var(--cz-spacing, 0.25rem) * 5);
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            .fin-txn-row {
                align-items: center;
                border-bottom: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                padding: calc(var(--cz-spacing, 0.25rem) * 4) 0;
            }

            .fin-txn-row:last-child {
                border-bottom: 0;
            }

            .fin-txn-icon {
                align-items: center;
                border-radius: var(--cz-radius-lg, 0.625rem);
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 40px;
                justify-items: center;
                width: 40px;
            }

            .fin-txn-icon.income {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .fin-txn-icon.expense {
                background: var(--cz-color-bg-error, #fef3f2);
                color: var(--cz-color-text-error, #b42318);
            }

            .fin-txn-details {
                flex: 1;
            }

            .fin-txn-details p {
                margin: 0;
            }

            .fin-txn-name {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .fin-txn-date {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
            }

            .fin-txn-amount {
                font-weight: var(--cz-font-weight-semibold, 600);
            }

            .fin-txn-amount.income {
                color: var(--cz-color-text-success, #067647);
            }

            .fin-txn-amount.expense {
                color: var(--cz-color-text-error, #b42318);
            }

            /* ─── Notifications Drawer ─── */

            .fin-notif-panel {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .fin-notif-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .fin-notif-header h2,
            .fin-notif-header p {
                margin: 0;
            }

            .fin-notif-header h2 {
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            .fin-notif-count {
                background: var(--cz-color-bg-error-solid, #d92d20);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-white, #fff);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .fin-notif-list {
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .fin-notif-item {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-xl, 0.75rem);
                cursor: pointer;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                padding: calc(var(--cz-spacing, 0.25rem) * 3);
                transition:
                    background 0.15s ease,
                    box-shadow 0.15s ease;
            }

            .fin-notif-item:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
            }

            .fin-notif-item.unread {
                border-left: 3px solid var(--cz-color-bg-brand-solid, #496dac);
            }

            .fin-notif-dot {
                align-items: center;
                display: inline-grid;
                font-size: var(--cz-text-sm, 0.875rem);
                height: 36px;
                justify-items: center;
                width: 36px;
                border-radius: var(--cz-radius-full, 9999px);
                flex-shrink: 0;
            }

            .fin-notif-dot.payment {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .fin-notif-dot.alert {
                background: var(--cz-color-bg-warning, #fffaeb);
                color: var(--cz-color-bg-warning-solid, #dc6803);
            }

            .fin-notif-dot.info {
                background: var(--cz-color-bg-brand, #dee6f6);
                color: var(--cz-color-text-brand, #496dac);
            }

            .fin-notif-body {
                flex: 1;
            }

            .fin-notif-body p {
                margin: 0;
            }

            .fin-notif-title {
                font-weight: var(--cz-font-weight-medium, 500);
                color: var(--cz-color-text-secondary, #535862);
            }

            .fin-notif-time {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            /* ─── Utility ─── */

            .fin-muted {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            @media (max-width: 768px) {
                .fin-stats {
                    grid-template-columns: 1fr;
                }

                .fin-main {
                    padding: calc(var(--cz-spacing, 0.25rem) * 5);
                }

                .fin-topbar {
                    flex-wrap: wrap;
                }
            }
        </style>

        <div class="story-app finance-story">
            <cosmoz-drawer-layout
                breakpoint="1200"
                left-drawer-open
                @close=${c}
            >
                <cosmoz-side-panel slot="left">
                    <nav class="fin-nav" aria-label="Finance navigation">
                        <div class="fin-nav-brand">
                            <span class="fin-nav-logo">F</span>
                            <span class="fin-nav-brand-text">Finova</span>
                        </div>

                        <ul class="fin-nav-list">
                            <li>
                                <button class="fin-nav-item active" type="button">
                                    <span class="fin-nav-icon">&#9632;</span>
                                    <span class="fin-nav-label">Dashboard</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#8644;</span>
                                    <span class="fin-nav-label">Transactions</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#9674;</span>
                                    <span class="fin-nav-label">Investments</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#9733;</span>
                                    <span class="fin-nav-label">Goals</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#9881;</span>
                                    <span class="fin-nav-label">Settings</span>
                                </button>
                            </li>
                        </ul>

                        <span class="fin-nav-spacer"></span>

                        <button
                            class="fin-nav-collapse-btn"
                            type="button"
                            @click=${h}
                        >
                            <span class="fin-nav-icon">&#8592;</span>
                            <span class="fin-nav-collapse-label">Collapse</span>
                        </button>
                        <button
                            class="fin-nav-expand-btn"
                            type="button"
                            @click=${g}
                        >
                            <span class="fin-nav-icon">&#8594;</span>
                            <span class="fin-nav-expand-label">Expand</span>
                        </button>
                    </nav>
                </cosmoz-side-panel>

                <main class="fin-main">
                    <header class="fin-topbar">
                        <div class="fin-topbar-left">
                            <button
                                class="fin-hamburger"
                                type="button"
                                @click=${u}
                                aria-label="Toggle navigation menu"
                            >
                                &#9776;
                            </button>
                            <div>
                                <h1>Good morning, Alex</h1>
                                <p class="fin-muted">
                                    Here's your financial overview for today.
                                </p>
                            </div>
                        </div>
                        <div class="fin-topbar-right">
                            <button
                                class="fin-icon-btn"
                                type="button"
                                @click=${d}
                                aria-label="Open notifications"
                            >
                                &#128276;
                                <span class="fin-notif-badge"></span>
                            </button>
                            <div class="fin-avatar">AK</div>
                        </div>
                    </header>

                    <section class="fin-stats">
                        <div class="fin-stat">
                            <p class="fin-stat-label">Total Balance</p>
                            <h2 class="fin-stat-value">$48,290</h2>
                            <span class="fin-stat-change up">&#8593; 12.4%</span>
                        </div>
                        <div class="fin-stat">
                            <p class="fin-stat-label">Monthly Income</p>
                            <h2 class="fin-stat-value">$7,840</h2>
                            <span class="fin-stat-change up">&#8593; 3.2%</span>
                        </div>
                        <div class="fin-stat">
                            <p class="fin-stat-label">Monthly Expenses</p>
                            <h2 class="fin-stat-value">$4,120</h2>
                            <span class="fin-stat-change down">&#8595; 1.8%</span>
                        </div>
                        <div class="fin-stat">
                            <p class="fin-stat-label">Savings Rate</p>
                            <h2 class="fin-stat-value">47.4%</h2>
                            <span class="fin-stat-change up">&#8593; 5.1%</span>
                        </div>
                    </section>

                    <section class="fin-chart-section">
                        <div class="fin-chart-header">
                            <h3>Revenue Trend</h3>
                        </div>
                        <div class="fin-chart-mocked">
                            <div class="fin-chart-bar-group">
                                <div class="fin-chart-bar" style="height: 45%;"></div>
                                <div class="fin-chart-bar" style="height: 62%;"></div>
                                <div class="fin-chart-bar" style="height: 38%;"></div>
                                <div class="fin-chart-bar" style="height: 74%;"></div>
                                <div class="fin-chart-bar" style="height: 55%;"></div>
                                <div class="fin-chart-bar" style="height: 88%;"></div>
                                <div class="fin-chart-bar" style="height: 70%;"></div>
                                <div class="fin-chart-bar" style="height: 52%;"></div>
                                <div class="fin-chart-bar" style="height: 82%;"></div>
                                <div class="fin-chart-bar" style="height: 65%;"></div>
                                <div class="fin-chart-bar" style="height: 91%;"></div>
                                <div class="fin-chart-bar" style="height: 78%;"></div>
                            </div>
                        </div>
                    </section>

                    <section class="fin-txn-section">
                        <h3>Recent Transactions</h3>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon income">&#8593;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Salary deposit</p>
                                <p class="fin-txn-date">Jun 1, 2026</p>
                            </div>
                            <span class="fin-txn-amount income">+$7,840.00</span>
                        </div>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon expense">&#8595;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Rent payment</p>
                                <p class="fin-txn-date">Jun 1, 2026</p>
                            </div>
                            <span class="fin-txn-amount expense">-$2,100.00</span>
                        </div>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon expense">&#8595;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Groceries</p>
                                <p class="fin-txn-date">May 30, 2026</p>
                            </div>
                            <span class="fin-txn-amount expense">-$186.50</span>
                        </div>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon income">&#8593;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Freelance project</p>
                                <p class="fin-txn-date">May 28, 2026</p>
                            </div>
                            <span class="fin-txn-amount income">+$1,200.00</span>
                        </div>
                    </section>
                </main>

                <cosmoz-side-panel slot="right">
                    <aside class="fin-notif-panel" aria-label="Notifications">
                        <div class="fin-notif-header">
                            <h2>Notifications</h2>
                            <span class="fin-notif-count">4 new</span>
                        </div>

                        <div class="fin-notif-list">
                            <div class="fin-notif-item unread">
                                <span class="fin-notif-dot payment">&#10003;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Payment received</p>
                                    <p class="fin-notif-time">2 min ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item unread">
                                <span class="fin-notif-dot alert">&#9888;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Spending limit alert</p>
                                    <p class="fin-notif-time">18 min ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item">
                                <span class="fin-notif-dot info">&#8505;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Investment maturity</p>
                                    <p class="fin-notif-time">1 hour ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item">
                                <span class="fin-notif-dot payment">&#10003;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Transfer completed</p>
                                    <p class="fin-notif-time">3 hours ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item">
                                <span class="fin-notif-dot info">&#8505;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Monthly report ready</p>
                                    <p class="fin-notif-time">Yesterday</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </cosmoz-side-panel>
            </cosmoz-drawer-layout>
        </div>
    `},v=e=>{let t=e.currentTarget.closest(`.story-app`)?.querySelector(`cosmoz-drawer-layout`);t&&t.removeAttribute(`left-drawer-open`)},y={parameters:{layout:`fullscreen`},render:()=>t`
        <style>
            .invoice-story {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                --cosmoz-drawer-layout-left-drawer-width: min(480px, 100cqw);
                --cosmoz-drawer-layout-right-drawer-width: min(380px, 100cqw);
                background: var(--cz-color-bg-secondary, #f9fafb);
                color: var(--cz-color-text-primary, #181d27);
                font-family: var(--cz-font-body, system-ui, sans-serif);
                box-sizing: border-box;
            }

            .invoice-story cosmoz-side-panel {
                --cosmoz-side-panel-border-radius: 12px;
            }

            /* ─── Document Viewer (left) ─── */

            .inv-doc-viewer {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-doc-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .inv-doc-header h2 {
                font-size: var(--cz-text-base, 1rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                letter-spacing: -0.01em;
                margin: 0;
            }

            .inv-doc-close {
                align-items: center;
                background: transparent;
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 32px;
                justify-items: center;
                width: 32px;
            }

            .inv-doc-close:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
            }

            .inv-doc-page {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-xl, 0.75rem);
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                flex: 1;
                min-height: 0;
                overflow: hidden;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                position: relative;
            }

            .inv-doc-page-header {
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-radius: var(--cz-radius-lg, 0.625rem)
                    var(--cz-radius-lg, 0.625rem) 0 0;
                color: var(--cz-color-white, #fff);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                letter-spacing: 0.06em;
                margin: calc(var(--cz-spacing, 0.25rem) * -8);
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 5);
                padding: calc(var(--cz-spacing, 0.25rem) * 3)
                    calc(var(--cz-spacing, 0.25rem) * 6);
                text-transform: uppercase;
            }

            .inv-doc-line {
                background: var(--cz-color-bg-secondary, #f9fafb);
                border-radius: 3px;
                height: 8px;
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .inv-doc-line.title {
                background: var(--cz-color-text-tertiary, #535862);
                width: 55%;
            }

            .inv-doc-line.subtitle {
                width: 40%;
            }

            .inv-doc-line.body {
                width: 85%;
            }

            .inv-doc-line.body.short {
                width: 60%;
            }

            .inv-doc-line.table-head {
                background: var(--cz-color-bg-brand, #dee6f6);
                width: 35%;
            }

            .inv-doc-line.table-row {
                width: 70%;
            }

            .inv-doc-line.total {
                background: var(--cz-color-text-tertiary, #535862);
                width: 30%;
            }

            .inv-doc-spacer {
                flex: 1;
            }

            .inv-doc-page-nav {
                align-items: center;
                display: flex;
                justify-content: center;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .inv-doc-page-nav span {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-doc-page-dot {
                background: var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-full, 9999px);
                height: 8px;
                width: 8px;
            }

            .inv-doc-page-dot.active {
                background: var(--cz-color-bg-brand-solid, #496dac);
            }

            /* ─── Main Content ─── */

            .inv-main {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 6);
                min-height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                width: 100%;
            }

            .inv-topbar {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-back-btn {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 36px;
                justify-items: center;
                width: 36px;
            }

            .inv-back-btn:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
            }

            .inv-breadcrumb {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-breadcrumb a {
                color: var(--cz-color-text-brand, #496dac);
                text-decoration: none;
            }

            .inv-breadcrumb a:hover {
                text-decoration: underline;
            }

            .inv-status-badge {
                background: var(--cz-color-bg-warning, #fffaeb);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-bg-warning-solid, #dc6803);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                margin-left: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 1.5)
                    calc(var(--cz-spacing, 0.25rem) * 3);
            }

            /* ─── Invoice Header ─── */

            .inv-header-card {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .inv-header-card h1,
            .inv-header-card p {
                margin: 0;
            }

            .inv-header-top {
                align-items: flex-start;
                display: flex;
                justify-content: space-between;
            }

            .inv-header-top h1 {
                font-size: var(--cz-text-xl, 1.25rem);
                letter-spacing: -0.02em;
            }

            .inv-header-meta {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .inv-header-amount {
                color: var(--cz-color-text-primary, #181d27);
                font-size: var(--cz-text-2xl, 1.5rem);
                font-weight: var(--cz-font-weight-bold, 700);
                letter-spacing: -0.02em;
                text-align: right;
            }

            .inv-header-amount-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-medium, 500);
            }

            /* ─── Bill From / Bill To ─── */

            .inv-parties {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            }

            .inv-party {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-party-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .inv-party-name {
                font-weight: var(--cz-font-weight-semibold, 600);
            }

            .inv-party-detail {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                margin-top: calc(var(--cz-spacing, 0.25rem));
            }

            .inv-party-detail p {
                margin: 0;
            }

            /* ─── Line Items ─── */

            .inv-table-card {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .inv-table-card h3 {
                font-size: var(--cz-text-base, 1rem);
                letter-spacing: -0.01em;
                margin: 0 0 calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-table {
                border-collapse: collapse;
                width: 100%;
            }

            .inv-table th {
                border-bottom: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 2)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: left;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .inv-table th:last-child {
                text-align: right;
            }

            .inv-table td {
                border-bottom: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                padding: calc(var(--cz-spacing, 0.25rem) * 3)
                    calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-table td:last-child {
                text-align: right;
            }

            .inv-table tr:last-child td {
                border-bottom: 0;
            }

            .inv-item-name {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .inv-item-desc {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-item-qty {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-item-amount {
                font-weight: var(--cz-font-weight-semibold, 600);
                white-space: nowrap;
            }

            /* ─── Totals ─── */

            .inv-totals {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                grid-template-columns: auto minmax(60px, auto);
                justify-content: flex-end;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-total-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-total-value {
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: right;
            }

            .inv-total-row-final {
                border-top: 2px solid var(--cz-color-border-secondary, #e9eaeb);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .inv-total-row-final .inv-total-label,
            .inv-total-row-final .inv-total-value {
                color: var(--cz-color-text-primary, #181d27);
                font-size: var(--cz-text-base, 1rem);
                font-weight: var(--cz-font-weight-bold, 700);
                padding-top: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            /* ─── Action Bar ─── */

            .inv-actions {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                padding: calc(var(--cz-spacing, 0.25rem) * 4)
                    calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-btn {
                align-items: center;
                border: 1px solid var(--cz-color-border-primary, #d5d7da);
                border-radius: var(--cz-radius-full, 9999px);
                cursor: pointer;
                display: inline-flex;
                font: inherit;
                font-weight: var(--cz-font-weight-semibold, 600);
                font-size: var(--cz-text-sm, 0.875rem);
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5)
                    calc(var(--cz-spacing, 0.25rem) * 4);
                transition:
                    box-shadow 0.15s ease,
                    transform 0.15s ease;
            }

            .inv-btn:hover {
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                transform: translateY(-1px);
            }

            .inv-btn-secondary {
                background: var(--cz-color-bg-primary, #fff);
                color: var(--cz-color-text-secondary, #414651);
            }

            .inv-btn-approve {
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-color: var(--cz-color-bg-brand-solid, #496dac);
                color: var(--cz-color-white, #fff);
            }

            .inv-btn-approve:hover {
                background: #3d5f99;
            }

            /* ─── History Panel (right) ─── */

            .inv-history-panel {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 6);
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .inv-history-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .inv-history-header h2,
            .inv-history-header p {
                margin: 0;
            }

            .inv-history-header h2 {
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            /* ─── Status Timeline ─── */

            .inv-timeline {
                display: grid;
                gap: 0;
            }

            .inv-timeline-step {
                align-items: start;
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                grid-template-columns: 28px 1fr;
                padding-bottom: calc(var(--cz-spacing, 0.25rem) * 4);
                position: relative;
            }

            .inv-timeline-step:last-child {
                padding-bottom: 0;
            }

            .inv-timeline-marker {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }

            .inv-timeline-dot {
                align-items: center;
                border-radius: var(--cz-radius-full, 9999px);
                display: inline-grid;
                flex-shrink: 0;
                font-size: var(--cz-text-xs, 0.75rem);
                height: 24px;
                justify-items: center;
                width: 24px;
                z-index: 1;
            }

            .inv-timeline-dot.done {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .inv-timeline-dot.current {
                background: var(--cz-color-bg-brand, #dee6f6);
                color: var(--cz-color-text-brand, #496dac);
                box-shadow: 0 0 0 3px var(--cz-color-bg-brand, #dee6f6);
            }

            .inv-timeline-dot.pending {
                background: var(--cz-color-bg-tertiary, #f2f4f7);
                color: var(--cz-color-text-tertiary, #535862);
            }

            .inv-timeline-line {
                background: var(--cz-color-border-secondary, #e9eaeb);
                flex: 1;
                width: 2px;
            }

            .inv-timeline-step.done .inv-timeline-line {
                background: var(--cz-color-text-success, #067647);
            }

            .inv-timeline-step:last-child .inv-timeline-line {
                display: none;
            }

            .inv-timeline-content p {
                margin: 0;
            }

            .inv-timeline-title {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .inv-timeline-date {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 0.5);
            }

            /* ─── Activity Feed ─── */

            .inv-activity-title {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .inv-activity-list {
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-activity-item {
                align-items: flex-start;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-activity-avatar {
                align-items: center;
                background: var(--cz-color-bg-brand, #dee6f6);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-brand, #496dac);
                flex-shrink: 0;
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-bold, 700);
                height: 32px;
                width: 32px;
                display: inline-grid;
                justify-items: center;
            }

            .inv-activity-body {
                flex: 1;
            }

            .inv-activity-body p {
                margin: 0;
            }

            .inv-activity-name {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .inv-activity-action {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-activity-time {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 0.5);
            }

            /* ─── Utility ─── */

            .inv-muted {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            @media (max-width: 768px) {
                .inv-parties {
                    grid-template-columns: 1fr;
                }

                .inv-main {
                    padding: calc(var(--cz-spacing, 0.25rem) * 5);
                }

                .inv-actions {
                    flex-wrap: wrap;
                }
            }
        </style>

        <div class="story-app invoice-story">
            <cosmoz-drawer-layout breakpoint="1200" @close=${c}>
                <cosmoz-side-panel slot="left" bordered>
                    <div class="inv-doc-viewer">
                        <div class="inv-doc-header">
                            <h2>INV-2026-0482.pdf</h2>
                            <button
                                class="inv-doc-close"
                                type="button"
                                @click=${v}
                                aria-label="Close document viewer"
                            >
                                &#10005;
                            </button>
                        </div>
                        <div class="inv-doc-page">
                            <div class="inv-doc-page-header">Acme Corp &mdash; Invoice</div>
                            <div class="inv-doc-line title"></div>
                            <div class="inv-doc-line subtitle"></div>
                            <div
                                style="margin-top: calc(var(--cz-spacing, 0.25rem) * 4);"
                            ></div>
                            <div class="inv-doc-line table-head"></div>
                            <div class="inv-doc-line table-row"></div>
                            <div class="inv-doc-line table-row"></div>
                            <div class="inv-doc-line table-row"></div>
                            <div
                                style="margin-top: calc(var(--cz-spacing, 0.25rem) * 3);"
                            ></div>
                            <div class="inv-doc-line body"></div>
                            <div class="inv-doc-line body short"></div>
                            <div class="inv-doc-spacer"></div>
                            <div class="inv-doc-line total"></div>
                        </div>
                        <div class="inv-doc-page-nav">
                            <div class="inv-doc-page-dot active"></div>
                            <div class="inv-doc-page-dot"></div>
                            <div class="inv-doc-page-dot"></div>
                            <span>Page 1 of 3</span>
                        </div>
                    </div>
                </cosmoz-side-panel>

                <main class="inv-main">
                    <header class="inv-topbar">
                        <button class="inv-back-btn" type="button" aria-label="Go back">
                            &#8592;
                        </button>
                        <span class="inv-breadcrumb">
                            <a href="#">Invoices</a> &rsaquo; INV-2026-0482
                        </span>
                        <span class="inv-status-badge">&#9203; Pending Approval</span>
                    </header>

                    <section class="inv-header-card">
                        <div class="inv-header-top">
                            <div>
                                <h1>Invoice INV-2026-0482</h1>
                                <p class="inv-muted">
                                    Issued June 2, 2026 &middot; Due June 30, 2026
                                </p>
                            </div>
                            <div style="text-align: right;">
                                <div class="inv-header-amount-label">Amount Due</div>
                                <div class="inv-header-amount">$14,382.50</div>
                            </div>
                        </div>
                    </section>

                    <section class="inv-parties">
                        <div class="inv-party">
                            <div class="inv-party-label">From</div>
                            <div class="inv-party-name">Acme Corporation</div>
                            <div class="inv-party-detail">
                                <p>123 Commerce Blvd</p>
                                <p>San Francisco, CA 94102</p>
                                <p>billing@acmecorp.com</p>
                            </div>
                        </div>
                        <div class="inv-party">
                            <div class="inv-party-label">Bill To</div>
                            <div class="inv-party-name">Nebula Systems Ltd</div>
                            <div class="inv-party-detail">
                                <p>456 Innovation Drive</p>
                                <p>Austin, TX 73301</p>
                                <p>ap@nebulasystems.io</p>
                            </div>
                        </div>
                    </section>

                    <section class="inv-table-card">
                        <h3>Line Items</h3>
                        <table class="inv-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Rate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="inv-item-name">
                                            Platform license &mdash; annual
                                        </div>
                                        <div class="inv-item-desc">Enterprise tier, 50 seats</div>
                                    </td>
                                    <td class="inv-item-qty">1</td>
                                    <td class="inv-item-qty">$9,600.00</td>
                                    <td class="inv-item-amount">$9,600.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="inv-item-name">Consulting &amp; onboarding</div>
                                        <div class="inv-item-desc">40 hours @ $85/hr</div>
                                    </td>
                                    <td class="inv-item-qty">40</td>
                                    <td class="inv-item-qty">$85.00</td>
                                    <td class="inv-item-amount">$3,400.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="inv-item-name">Premium support add-on</div>
                                        <div class="inv-item-desc">24/7 coverage, 1-year term</div>
                                    </td>
                                    <td class="inv-item-qty">1</td>
                                    <td class="inv-item-qty">$1,200.00</td>
                                    <td class="inv-item-amount">$1,200.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="inv-totals">
                            <span class="inv-total-label">Subtotal</span>
                            <span class="inv-total-value">$14,200.00</span>
                            <span class="inv-total-label">Tax (8.25%)</span>
                            <span class="inv-total-value">$1,171.50</span>
                            <span class="inv-total-label">Discount</span>
                            <span
                                class="inv-total-value"
                                style="color: var(--cz-color-text-success, #067647);"
                                >-$989.00</span
                            >
                            <div
                                class="inv-total-row-final"
                                style="grid-column: 1 / -1;"
                            ></div>
                            <span class="inv-total-label">Total Due</span>
                            <span class="inv-total-value">$14,382.50</span>
                        </div>
                    </section>

                    <div class="inv-actions">
                        <button
                            class="inv-btn inv-btn-secondary"
                            type="button"
                            @click=${u}
                        >
                            &#128196; View Document
                        </button>
                        <button
                            class="inv-btn inv-btn-secondary"
                            type="button"
                            @click=${d}
                        >
                            &#128340; History
                        </button>
                        <span style="flex: 1;"></span>
                        <button class="inv-btn inv-btn-approve" type="button">
                            &#10003; Approve
                        </button>
                    </div>
                </main>

                <cosmoz-side-panel slot="right" bordered>
                    <aside class="inv-history-panel" aria-label="Invoice history">
                        <div class="inv-history-header">
                            <h2>History &amp; Activity</h2>
                        </div>

                        <div class="inv-activity-title">Status</div>
                        <div class="inv-timeline">
                            <div class="inv-timeline-step done">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot done">&#10003;</span>
                                    <div class="inv-timeline-line"></div>
                                </div>
                                <div class="inv-timeline-content">
                                    <p class="inv-timeline-title">Draft created</p>
                                    <p class="inv-timeline-date">May 28, 2026 &middot; 4:12 PM</p>
                                </div>
                            </div>
                            <div class="inv-timeline-step done">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot done">&#10003;</span>
                                    <div class="inv-timeline-line"></div>
                                </div>
                                <div class="inv-timeline-content">
                                    <p class="inv-timeline-title">Sent to Nebula Systems</p>
                                    <p class="inv-timeline-date">May 29, 2026 &middot; 9:30 AM</p>
                                </div>
                            </div>
                            <div class="inv-timeline-step">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot current">&#9679;</span>
                                    <div class="inv-timeline-line"></div>
                                </div>
                                <div class="inv-timeline-content">
                                    <p class="inv-timeline-title">Under review</p>
                                    <p class="inv-timeline-date">Jun 1, 2026 &middot; 11:45 AM</p>
                                </div>
                            </div>
                            <div class="inv-timeline-step">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot pending">&#9675;</span>
                                </div>
                                <div class="inv-timeline-content">
                                    <p
                                        class="inv-timeline-title"
                                        style="color: var(--cz-color-text-tertiary, #535862);"
                                    >
                                        Pending approval
                                    </p>
                                    <p class="inv-timeline-date">Awaiting sign-off</p>
                                </div>
                            </div>
                        </div>

                        <div class="inv-activity-title">Activity</div>
                        <div class="inv-activity-list">
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">SK</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Sara K.</span>
                                        <span class="inv-activity-action"
                                            >marked as &ldquo;under review&rdquo;</span
                                        >
                                    </p>
                                    <p class="inv-activity-time">2 hours ago</p>
                                </div>
                            </div>
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">MB</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Marco B.</span>
                                        <span class="inv-activity-action"
                                            >updated payment terms to Net 30</span
                                        >
                                    </p>
                                    <p class="inv-activity-time">Yesterday at 3:20 PM</p>
                                </div>
                            </div>
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">JL</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Jon L.</span>
                                        <span class="inv-activity-action"
                                            >sent invoice via email</span
                                        >
                                    </p>
                                    <p class="inv-activity-time">May 29 at 9:30 AM</p>
                                </div>
                            </div>
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">SK</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Sara K.</span>
                                        <span class="inv-activity-action">created draft</span>
                                    </p>
                                    <p class="inv-activity-time">May 28 at 4:12 PM</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </cosmoz-side-panel>
            </cosmoz-drawer-layout>
        </div>
    `},b={parameters:{layout:`fullscreen`},render:()=>t`
        <style>
            .pizza-story {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                --cosmoz-drawer-layout-left-drawer-width: min(320px, 88cqw);
                --cosmoz-drawer-layout-right-drawer-width: min(460px, 94cqw);
                --cosmoz-drawer-layout-backdrop-color: rgb(10 13 18 / 0.28);
                background:
                    radial-gradient(
                        circle at 20% 10%,
                        rgb(254 240 199 / 0.8),
                        transparent 24rem
                    ),
                    var(--cz-color-bg-secondary, #fafafa);
                color: var(--cz-color-text-primary, #181d27);
                font-family: var(--cz-font-body, system-ui, sans-serif);
                box-sizing: border-box;
            }

            .pizza-story cosmoz-side-panel[slot='left']::part(panel) {
                border-right: 1px solid var(--cz-color-border-secondary, #e9eaeb);
            }

            .pizza-story cosmoz-side-panel[slot='right']::part(panel) {
                border-left: 1px solid var(--cz-color-border-secondary, #e9eaeb);
            }

            .pizza-menu,
            .pizza-map-panel {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .pizza-menu {
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-restaurant {
                background:
                    linear-gradient(135deg, rgb(122 39 26 / 0.92), rgb(220 104 3 / 0.9)),
                    var(--cz-color-bg-warning-solid, #dc6803);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-lg, 0 12px 16px rgb(10 13 18 / 0.08));
                color: var(--cz-color-white, #fff);
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-restaurant p,
            .pizza-restaurant h3,
            .pizza-order-title p,
            .pizza-order-title h2,
            .pizza-section h3,
            .pizza-section p,
            .pizza-card p,
            .pizza-card h3,
            .pizza-map-panel p,
            .pizza-map-panel h2,
            .pizza-map-card p,
            .pizza-map-card h3 {
                margin: 0;
            }

            .pizza-menu-list {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .pizza-menu-button {
                align-items: center;
                background: transparent;
                border: 0;
                border-radius: var(--cz-radius-xl, 0.75rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: grid;
                font: inherit;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                grid-template-columns: 38px 1fr;
                padding: calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: left;
                transition:
                    background 0.2s ease,
                    transform 0.2s ease;
            }

            .pizza-menu-button:hover,
            .pizza-menu-button.active {
                background: var(--cz-color-bg-warning, #fffaeb);
                transform: translateX(2px);
            }

            .pizza-menu-icon {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                display: inline-grid;
                height: 38px;
                justify-items: center;
                width: 38px;
            }

            .pizza-main {
                box-sizing: border-box;
                min-height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                width: 100%;
            }

            .pizza-hero {
                align-items: center;
                background:
                    linear-gradient(
                        135deg,
                        rgb(255 255 255 / 0.94),
                        rgb(255 250 235 / 0.96)
                    ),
                    var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-3XL, 1.25rem);
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: minmax(0, 1fr) auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .pizza-eyebrow,
            .pizza-muted {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .pizza-order-title h2 {
                font-size: var(--cz-text-display-sm, 1.875rem);
                letter-spacing: -0.03em;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .pizza-actions {
                display: flex;
                flex-wrap: wrap;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                justify-content: flex-end;
            }

            .pizza-button,
            .pizza-button-secondary {
                border-radius: var(--cz-radius-full, 9999px);
                cursor: pointer;
                font: inherit;
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5)
                    calc(var(--cz-spacing, 0.25rem) * 4);
                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease,
                    background 0.2s ease;
            }

            .pizza-button {
                background: var(--cz-color-bg-warning-solid, #dc6803);
                border: 1px solid var(--cz-color-bg-warning-solid, #dc6803);
                box-shadow: var(--cz-shadow-xs-skeumorphic, var(--cz-shadow-xs, none));
                color: var(--cz-color-white, #fff);
            }

            .pizza-button-secondary {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-primary, #d5d7da);
                color: var(--cz-color-text-secondary, #414651);
            }

            .pizza-button:hover,
            .pizza-button-secondary:hover {
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                transform: translateY(-1px);
            }

            .pizza-grid {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-section,
            .pizza-card,
            .pizza-map-card {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-timeline {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-step {
                align-items: start;
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                grid-template-columns: 30px 1fr;
            }

            .pizza-dot {
                background: var(--cz-color-bg-warning-solid, #dc6803);
                border: 4px solid var(--cz-color-bg-warning, #fffaeb);
                border-radius: var(--cz-radius-full, 9999px);
                height: 18px;
                margin-top: 2px;
                width: 18px;
            }

            .pizza-dot.pending {
                background: var(--cz-color-bg-quaternary, #e9eaeb);
            }

            .pizza-items {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-item,
            .pizza-total-row {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                justify-content: space-between;
            }

            .pizza-item {
                border-bottom: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                padding-bottom: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .pizza-pill {
                background: var(--cz-color-bg-success, #ecfdf3);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-success, #067647);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 1.5)
                    calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .pizza-map-panel {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-rows: auto minmax(280px, 1fr) auto;
            }

            .pizza-map {
                background:
                    linear-gradient(
                        90deg,
                        transparent 47%,
                        rgb(255 255 255 / 0.86) 47% 53%,
                        transparent 53%
                    ),
                    linear-gradient(
                        27deg,
                        transparent 40%,
                        rgb(255 255 255 / 0.86) 40% 46%,
                        transparent 46%
                    ),
                    linear-gradient(
                        150deg,
                        transparent 55%,
                        rgb(255 255 255 / 0.75) 55% 61%,
                        transparent 61%
                    ),
                    linear-gradient(
                        135deg,
                        var(--cz-color-brand-50, #dee6f6),
                        var(--cz-color-warning-50, #fffaeb)
                    );
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-3XL, 1.25rem);
                min-height: 330px;
                overflow: hidden;
                position: relative;
            }

            .pizza-route {
                border: 5px dashed var(--cz-color-warning-600, #dc6803);
                border-bottom: 0;
                border-left: 0;
                border-radius: 0 var(--cz-radius-4XL, 1.5rem) 0 0;
                height: 44%;
                left: 24%;
                position: absolute;
                top: 34%;
                transform: rotate(-10deg);
                width: 52%;
            }

            .pizza-pin {
                align-items: center;
                background: var(--cz-color-bg-warning-solid, #dc6803);
                border: 4px solid var(--cz-color-white, #fff);
                border-radius: var(--cz-radius-full, 9999px);
                box-shadow: var(--cz-shadow-lg, 0 12px 16px rgb(10 13 18 / 0.08));
                color: var(--cz-color-white, #fff);
                display: inline-grid;
                height: 48px;
                justify-items: center;
                position: absolute;
                width: 48px;
            }

            .pizza-pin.restaurant {
                left: 19%;
                top: 62%;
            }

            .pizza-pin.home {
                background: var(--cz-color-bg-brand-solid, #496dac);
                right: 16%;
                top: 23%;
            }

            .pizza-driver {
                align-items: center;
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                grid-template-columns: 52px 1fr auto;
            }

            .pizza-driver-avatar {
                align-items: center;
                background: var(--cz-color-bg-brand, #dee6f6);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-brand, #496dac);
                display: inline-grid;
                font-weight: var(--cz-font-weight-bold, 700);
                height: 52px;
                justify-items: center;
                width: 52px;
            }

            @media (max-width: 880px) {
                .pizza-hero,
                .pizza-grid {
                    grid-template-columns: 1fr;
                }

                .pizza-actions {
                    justify-content: flex-start;
                }

                .pizza-main {
                    padding: calc(var(--cz-spacing, 0.25rem) * 5);
                }
            }
        </style>

        <div class="story-app pizza-story">
            <cosmoz-drawer-layout @close=${c}>
                <cosmoz-side-panel slot="left">
                    <aside class="pizza-menu" aria-label="Order menu">
                        <section class="pizza-restaurant">
                            <p>Now preparing</p>
                            <h3>Luigi's Corner Pizza</h3>
                            <p>Order #4821 - 2.4 miles away</p>
                        </section>

                        <nav class="pizza-menu-list">
                            <button class="pizza-menu-button active" type="button">
                                <span class="pizza-menu-icon">1</span>
                                <span
                                    ><strong>Track order</strong><br /><span class="pizza-muted"
                                        >Live kitchen and delivery steps</span
                                    ></span
                                >
                            </button>
                            <button class="pizza-menu-button" type="button">
                                <span class="pizza-menu-icon">2</span>
                                <span
                                    ><strong>Delivery note</strong><br /><span class="pizza-muted"
                                        >Gate code and drop-off details</span
                                    ></span
                                >
                            </button>
                            <button class="pizza-menu-button" type="button">
                                <span class="pizza-menu-icon">3</span>
                                <span
                                    ><strong>Contact driver</strong><br /><span
                                        class="pizza-muted"
                                        >Available after pickup</span
                                    ></span
                                >
                            </button>
                            <button class="pizza-menu-button" type="button">
                                <span class="pizza-menu-icon">4</span>
                                <span
                                    ><strong>Receipt</strong><br /><span class="pizza-muted"
                                        >Payment, taxes, and tip</span
                                    ></span
                                >
                            </button>
                        </nav>
                    </aside>
                </cosmoz-side-panel>

                <main class="pizza-main">
                    <section class="pizza-hero">
                        <div class="pizza-order-title">
                            <p class="pizza-eyebrow">Arriving around 7:42 PM</p>
                            <h2>Your pizza is in the oven</h2>
                            <p class="pizza-muted">
                                Marco is preparing your order before it heads across Midtown.
                            </p>
                        </div>
                        <div class="pizza-actions">
                            <button
                                class="pizza-button-secondary"
                                type="button"
                                @click=${u}
                            >
                                Order menu
                            </button>
                            <button
                                class="pizza-button"
                                type="button"
                                @click=${d}
                            >
                                Show map
                            </button>
                        </div>
                    </section>

                    <section class="pizza-grid">
                        <article class="pizza-section">
                            <p class="pizza-muted">Order progress</p>
                            <h3>Almost ready for pickup</h3>
                            <div class="pizza-timeline">
                                <div class="pizza-step">
                                    <span class="pizza-dot"></span>
                                    <span
                                        ><strong>Order confirmed</strong><br /><span
                                            class="pizza-muted"
                                            >Accepted at 7:06 PM.</span
                                        ></span
                                    >
                                </div>
                                <div class="pizza-step">
                                    <span class="pizza-dot"></span>
                                    <span
                                        ><strong>Baking now</strong><br /><span class="pizza-muted"
                                            >Finishing in the deck oven.</span
                                        ></span
                                    >
                                </div>
                                <div class="pizza-step">
                                    <span class="pizza-dot pending"></span>
                                    <span
                                        ><strong>Out for delivery</strong><br /><span
                                            class="pizza-muted"
                                            >Driver heads your way after pickup.</span
                                        ></span
                                    >
                                </div>
                            </div>
                        </article>

                        <article class="pizza-card">
                            <p class="pizza-muted">Order details</p>
                            <h3>Family dinner</h3>
                            <div class="pizza-items">
                                <div class="pizza-item">
                                    <span
                                        ><strong>1x Pepperoni Grande</strong><br /><span
                                            class="pizza-muted"
                                            >Extra basil, well done</span
                                        ></span
                                    >
                                    <strong>$21.00</strong>
                                </div>
                                <div class="pizza-item">
                                    <span
                                        ><strong>1x Burrata Margherita</strong><br /><span
                                            class="pizza-muted"
                                            >Add chili oil</span
                                        ></span
                                    >
                                    <strong>$19.50</strong>
                                </div>
                                <div class="pizza-item">
                                    <span
                                        ><strong>Garlic knots</strong><br /><span
                                            class="pizza-muted"
                                            >Parmesan and marinara</span
                                        ></span
                                    >
                                    <strong>$7.00</strong>
                                </div>
                                <div class="pizza-total-row">
                                    <span class="pizza-pill">Paid with Apple Pay</span
                                    ><strong>$56.84</strong>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>

                <cosmoz-side-panel slot="right">
                    <aside class="pizza-map-panel" aria-label="Delivery map">
                        <div>
                            <p class="pizza-muted">Delivery map</p>
                            <h2>Midtown route</h2>
                        </div>
                        <div class="pizza-map" aria-hidden="true">
                            <div class="pizza-route"></div>
                            <div class="pizza-pin restaurant">P</div>
                            <div class="pizza-pin home">H</div>
                        </div>
                        <section class="pizza-map-card">
                            <div class="pizza-driver">
                                <div class="pizza-driver-avatar">DR</div>
                                <div>
                                    <h3>Drew is assigned</h3>
                                    <p class="pizza-muted">Pickup estimate: 6 minutes</p>
                                </div>
                                <span class="pizza-pill">2.4 mi</span>
                            </div>
                        </section>
                    </aside>
                </cosmoz-side-panel>
            </cosmoz-drawer-layout>
        </div>
    `},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: renderBasic
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    breakpoint: 0,
    leftDrawerOpen: true,
    rightDrawerOpen: false
  },
  render: renderBasic
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
        <style>
            .finance-story {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                --cosmoz-drawer-layout-left-drawer-width: min(260px, 80cqw);
                --cosmoz-drawer-layout-right-drawer-width: min(420px, 100cqw);
                background: var(--cz-color-bg-secondary, #f9fafb);
                color: var(--cz-color-text-primary, #181d27);
                font-family: var(--cz-font-body, system-ui, sans-serif);
                box-sizing: border-box;
            }

            .finance-story.is-nav-collapsed {
                --cosmoz-drawer-layout-left-drawer-width: 60px;
            }

            .finance-story cosmoz-side-panel[slot='left']::part(panel) {
                background: var(--fin-nav-bg, #101828);
            }

            .finance-story cosmoz-side-panel[slot='left'] {
                color: var(--cz-color-white, #fff);
                min-height: 100vh;
            }

            .finance-story cosmoz-side-panel[slot='right']::part(panel) {
                background: transparent;
            }

            /* ─── Left Nav ─── */

            .fin-nav {
                background: var(--fin-nav-bg, #101828);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                height: 100%;
                overflow: hidden;
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
                transition: padding 0.2s ease;
            }

            .fin-nav-brand {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .fin-nav-logo {
                align-items: center;
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-white, #fff);
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                font-weight: var(--cz-font-weight-bold, 700);
                height: 36px;
                justify-items: center;
                min-width: 36px;
                width: 36px;
            }

            .fin-nav-brand-text {
                font-size: var(--cz-text-lg, 1.125rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                letter-spacing: -0.01em;
            }

            .fin-nav-list {
                display: flex;
                flex-direction: column;
                gap: 2px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .fin-nav-item {
                align-items: center;
                background: transparent;
                border: 0;
                border-radius: var(--cz-radius-xl, 0.75rem);
                color: rgb(255 255 255 / 0.7);
                cursor: pointer;
                display: flex;
                font: inherit;
                font-size: var(--cz-text-sm, 0.875rem);
                font-weight: var(--cz-font-weight-medium, 500);
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: left;
                transition:
                    background 0.15s ease,
                    color 0.15s ease;
                width: 100%;
            }

            .fin-nav-item:hover {
                background: rgb(255 255 255 / 0.08);
                color: rgb(255 255 255 / 0.95);
            }

            .fin-nav-item.active {
                background: rgb(255 255 255 / 0.12);
                color: var(--cz-color-white, #fff);
                font-weight: var(--cz-font-weight-semibold, 600);
            }

            .fin-nav-icon {
                align-items: center;
                flex: none;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 22px;
                justify-items: center;
                width: 22px;
            }

            .fin-nav-spacer {
                flex: 1;
            }

            .fin-nav-collapse-btn,
            .fin-nav-expand-btn {
                align-items: center;
                background: rgb(255 255 255 / 0.06);
                border: 0;
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: rgb(255 255 255 / 0.6);
                cursor: pointer;
                display: flex;
                font: inherit;
                font-size: var(--cz-text-sm, 0.875rem);
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                padding: calc(var(--cz-spacing, 0.25rem) * 2)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                transition:
                    background 0.15s ease,
                    color 0.15s ease;
                width: 100%;
            }

            .fin-nav-collapse-btn:hover,
            .fin-nav-expand-btn:hover {
                background: rgb(255 255 255 / 0.1);
                color: rgb(255 255 255 / 0.85);
            }

            .fin-nav-expand-btn {
                display: none;
            }

            /* ─── Collapsed Nav ─── */

            .finance-story.is-nav-collapsed .fin-nav {
                padding: calc(var(--cz-spacing, 0.25rem) * 5)
                    calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .finance-story.is-nav-collapsed .fin-nav-brand-text,
            .finance-story.is-nav-collapsed .fin-nav-label,
            .finance-story.is-nav-collapsed .fin-nav-collapse-label {
                display: none;
                opacity: 0;
                transition:
                    display 0.15s ease allow-discrete,
                    opacity 0.15s ease;
            }

            .finance-story.is-nav-collapsed .fin-nav-item {
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .finance-story.is-nav-collapsed .fin-nav-collapse-btn {
                display: none;
            }

            .finance-story.is-nav-collapsed .fin-nav-expand-btn {
                display: flex;
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .finance-story.is-nav-collapsed .fin-nav-expand-label {
                display: none;
            }

            /* ─── Main Content ─── */

            .fin-main {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 6);
                min-height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                width: 100%;
            }

            .fin-topbar {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                justify-content: space-between;
            }

            .fin-topbar-left {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
            }

            .fin-topbar-left h1,
            .fin-topbar-left p {
                margin: 0;
            }

            .fin-topbar-left h1 {
                font-size: var(--cz-text-xl, 1.25rem);
                letter-spacing: -0.02em;
            }

            .fin-topbar-left p {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                margin-top: calc(var(--cz-spacing, 0.25rem));
            }

            .fin-hamburger {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-xl, 1.25rem);
                height: 40px;
                justify-items: center;
                transition:
                    box-shadow 0.15s ease,
                    background 0.15s ease;
                width: 40px;
            }

            .fin-hamburger:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
            }

            .fin-topbar-right {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .fin-icon-btn {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-full, 9999px);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 40px;
                justify-items: center;
                position: relative;
                transition:
                    box-shadow 0.15s ease,
                    transform 0.15s ease;
                width: 40px;
            }

            .fin-icon-btn:hover {
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                transform: translateY(-1px);
            }

            .fin-notif-badge {
                background: var(--cz-color-bg-error-solid, #d92d20);
                border: 2px solid var(--cz-color-bg-primary, #fff);
                border-radius: var(--cz-radius-full, 9999px);
                height: 10px;
                position: absolute;
                right: 6px;
                top: 6px;
                width: 10px;
            }

            .fin-avatar {
                align-items: center;
                background: var(--cz-color-bg-brand, #dee6f6);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-brand, #496dac);
                display: inline-grid;
                font-weight: var(--cz-font-weight-bold, 700);
                font-size: var(--cz-text-sm, 0.875rem);
                height: 40px;
                justify-items: center;
                width: 40px;
            }

            /* ─── Stat Cards ─── */

            .fin-stats {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }

            .fin-stat {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .fin-stat h3,
            .fin-stat p,
            .fin-stat h2 {
                margin: 0;
            }

            .fin-stat-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .fin-stat-value {
                font-size: var(--cz-text-2xl, 1.5rem);
                font-weight: var(--cz-font-weight-bold, 700);
                letter-spacing: -0.02em;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .fin-stat-change {
                align-items: center;
                display: inline-flex;
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                gap: calc(var(--cz-spacing, 0.25rem));
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 2);
                border-radius: var(--cz-radius-full, 9999px);
            }

            .fin-stat-change.up {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .fin-stat-change.down {
                background: var(--cz-color-bg-error, #fef3f2);
                color: var(--cz-color-text-error, #b42318);
            }

            /* ─── Chart Area ─── */

            .fin-chart-section {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .fin-chart-section h3,
            .fin-chart-section p {
                margin: 0;
            }

            .fin-chart-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .fin-chart-header h3 {
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            .fin-chart-mocked {
                background:
                    linear-gradient(
                        135deg,
                        var(--cz-color-brand-50, #dee6f6) 0%,
                        transparent 40%
                    ),
                    linear-gradient(
                        60deg,
                        rgb(73 109 172 / 0.18),
                        rgb(73 109 172 / 0.04) 60%,
                        transparent 60%
                    );
                border: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                border-radius: var(--cz-radius-xl, 0.75rem);
                height: 180px;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
                position: relative;
                overflow: hidden;
            }

            .fin-chart-bar-group {
                align-items: flex-end;
                bottom: 12px;
                display: flex;
                gap: 6px;
                left: 16px;
                position: absolute;
                right: 16px;
            }

            .fin-chart-bar {
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-radius: 3px 3px 0 0;
                flex: 1;
                opacity: 0.7;
            }

            .fin-chart-bar:nth-child(odd) {
                background: linear-gradient(
                    180deg,
                    var(--cz-color-bg-brand-solid, #496dac),
                    rgb(73 109 172 / 0.5)
                );
            }

            /* ─── Transactions ─── */

            .fin-txn-section {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .fin-txn-section h3 {
                margin: 0 0 calc(var(--cz-spacing, 0.25rem) * 5);
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            .fin-txn-row {
                align-items: center;
                border-bottom: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                padding: calc(var(--cz-spacing, 0.25rem) * 4) 0;
            }

            .fin-txn-row:last-child {
                border-bottom: 0;
            }

            .fin-txn-icon {
                align-items: center;
                border-radius: var(--cz-radius-lg, 0.625rem);
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 40px;
                justify-items: center;
                width: 40px;
            }

            .fin-txn-icon.income {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .fin-txn-icon.expense {
                background: var(--cz-color-bg-error, #fef3f2);
                color: var(--cz-color-text-error, #b42318);
            }

            .fin-txn-details {
                flex: 1;
            }

            .fin-txn-details p {
                margin: 0;
            }

            .fin-txn-name {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .fin-txn-date {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
            }

            .fin-txn-amount {
                font-weight: var(--cz-font-weight-semibold, 600);
            }

            .fin-txn-amount.income {
                color: var(--cz-color-text-success, #067647);
            }

            .fin-txn-amount.expense {
                color: var(--cz-color-text-error, #b42318);
            }

            /* ─── Notifications Drawer ─── */

            .fin-notif-panel {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .fin-notif-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .fin-notif-header h2,
            .fin-notif-header p {
                margin: 0;
            }

            .fin-notif-header h2 {
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            .fin-notif-count {
                background: var(--cz-color-bg-error-solid, #d92d20);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-white, #fff);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .fin-notif-list {
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .fin-notif-item {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-xl, 0.75rem);
                cursor: pointer;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                padding: calc(var(--cz-spacing, 0.25rem) * 3);
                transition:
                    background 0.15s ease,
                    box-shadow 0.15s ease;
            }

            .fin-notif-item:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
            }

            .fin-notif-item.unread {
                border-left: 3px solid var(--cz-color-bg-brand-solid, #496dac);
            }

            .fin-notif-dot {
                align-items: center;
                display: inline-grid;
                font-size: var(--cz-text-sm, 0.875rem);
                height: 36px;
                justify-items: center;
                width: 36px;
                border-radius: var(--cz-radius-full, 9999px);
                flex-shrink: 0;
            }

            .fin-notif-dot.payment {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .fin-notif-dot.alert {
                background: var(--cz-color-bg-warning, #fffaeb);
                color: var(--cz-color-bg-warning-solid, #dc6803);
            }

            .fin-notif-dot.info {
                background: var(--cz-color-bg-brand, #dee6f6);
                color: var(--cz-color-text-brand, #496dac);
            }

            .fin-notif-body {
                flex: 1;
            }

            .fin-notif-body p {
                margin: 0;
            }

            .fin-notif-title {
                font-weight: var(--cz-font-weight-medium, 500);
                color: var(--cz-color-text-secondary, #535862);
            }

            .fin-notif-time {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            /* ─── Utility ─── */

            .fin-muted {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            @media (max-width: 768px) {
                .fin-stats {
                    grid-template-columns: 1fr;
                }

                .fin-main {
                    padding: calc(var(--cz-spacing, 0.25rem) * 5);
                }

                .fin-topbar {
                    flex-wrap: wrap;
                }
            }
        </style>

        <div class="story-app finance-story">
            <cosmoz-drawer-layout
                breakpoint="1200"
                left-drawer-open
                @close=\${closeDrawer}
            >
                <cosmoz-side-panel slot="left">
                    <nav class="fin-nav" aria-label="Finance navigation">
                        <div class="fin-nav-brand">
                            <span class="fin-nav-logo">F</span>
                            <span class="fin-nav-brand-text">Finova</span>
                        </div>

                        <ul class="fin-nav-list">
                            <li>
                                <button class="fin-nav-item active" type="button">
                                    <span class="fin-nav-icon">&#9632;</span>
                                    <span class="fin-nav-label">Dashboard</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#8644;</span>
                                    <span class="fin-nav-label">Transactions</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#9674;</span>
                                    <span class="fin-nav-label">Investments</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#9733;</span>
                                    <span class="fin-nav-label">Goals</span>
                                </button>
                            </li>
                            <li>
                                <button class="fin-nav-item" type="button">
                                    <span class="fin-nav-icon">&#9881;</span>
                                    <span class="fin-nav-label">Settings</span>
                                </button>
                            </li>
                        </ul>

                        <span class="fin-nav-spacer"></span>

                        <button
                            class="fin-nav-collapse-btn"
                            type="button"
                            @click=\${collapseFinanceNav}
                        >
                            <span class="fin-nav-icon">&#8592;</span>
                            <span class="fin-nav-collapse-label">Collapse</span>
                        </button>
                        <button
                            class="fin-nav-expand-btn"
                            type="button"
                            @click=\${expandFinanceNav}
                        >
                            <span class="fin-nav-icon">&#8594;</span>
                            <span class="fin-nav-expand-label">Expand</span>
                        </button>
                    </nav>
                </cosmoz-side-panel>

                <main class="fin-main">
                    <header class="fin-topbar">
                        <div class="fin-topbar-left">
                            <button
                                class="fin-hamburger"
                                type="button"
                                @click=\${toggleLeftDrawer}
                                aria-label="Toggle navigation menu"
                            >
                                &#9776;
                            </button>
                            <div>
                                <h1>Good morning, Alex</h1>
                                <p class="fin-muted">
                                    Here's your financial overview for today.
                                </p>
                            </div>
                        </div>
                        <div class="fin-topbar-right">
                            <button
                                class="fin-icon-btn"
                                type="button"
                                @click=\${toggleRightDrawer}
                                aria-label="Open notifications"
                            >
                                &#128276;
                                <span class="fin-notif-badge"></span>
                            </button>
                            <div class="fin-avatar">AK</div>
                        </div>
                    </header>

                    <section class="fin-stats">
                        <div class="fin-stat">
                            <p class="fin-stat-label">Total Balance</p>
                            <h2 class="fin-stat-value">$48,290</h2>
                            <span class="fin-stat-change up">&#8593; 12.4%</span>
                        </div>
                        <div class="fin-stat">
                            <p class="fin-stat-label">Monthly Income</p>
                            <h2 class="fin-stat-value">$7,840</h2>
                            <span class="fin-stat-change up">&#8593; 3.2%</span>
                        </div>
                        <div class="fin-stat">
                            <p class="fin-stat-label">Monthly Expenses</p>
                            <h2 class="fin-stat-value">$4,120</h2>
                            <span class="fin-stat-change down">&#8595; 1.8%</span>
                        </div>
                        <div class="fin-stat">
                            <p class="fin-stat-label">Savings Rate</p>
                            <h2 class="fin-stat-value">47.4%</h2>
                            <span class="fin-stat-change up">&#8593; 5.1%</span>
                        </div>
                    </section>

                    <section class="fin-chart-section">
                        <div class="fin-chart-header">
                            <h3>Revenue Trend</h3>
                        </div>
                        <div class="fin-chart-mocked">
                            <div class="fin-chart-bar-group">
                                <div class="fin-chart-bar" style="height: 45%;"></div>
                                <div class="fin-chart-bar" style="height: 62%;"></div>
                                <div class="fin-chart-bar" style="height: 38%;"></div>
                                <div class="fin-chart-bar" style="height: 74%;"></div>
                                <div class="fin-chart-bar" style="height: 55%;"></div>
                                <div class="fin-chart-bar" style="height: 88%;"></div>
                                <div class="fin-chart-bar" style="height: 70%;"></div>
                                <div class="fin-chart-bar" style="height: 52%;"></div>
                                <div class="fin-chart-bar" style="height: 82%;"></div>
                                <div class="fin-chart-bar" style="height: 65%;"></div>
                                <div class="fin-chart-bar" style="height: 91%;"></div>
                                <div class="fin-chart-bar" style="height: 78%;"></div>
                            </div>
                        </div>
                    </section>

                    <section class="fin-txn-section">
                        <h3>Recent Transactions</h3>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon income">&#8593;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Salary deposit</p>
                                <p class="fin-txn-date">Jun 1, 2026</p>
                            </div>
                            <span class="fin-txn-amount income">+$7,840.00</span>
                        </div>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon expense">&#8595;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Rent payment</p>
                                <p class="fin-txn-date">Jun 1, 2026</p>
                            </div>
                            <span class="fin-txn-amount expense">-$2,100.00</span>
                        </div>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon expense">&#8595;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Groceries</p>
                                <p class="fin-txn-date">May 30, 2026</p>
                            </div>
                            <span class="fin-txn-amount expense">-$186.50</span>
                        </div>
                        <div class="fin-txn-row">
                            <span class="fin-txn-icon income">&#8593;</span>
                            <div class="fin-txn-details">
                                <p class="fin-txn-name">Freelance project</p>
                                <p class="fin-txn-date">May 28, 2026</p>
                            </div>
                            <span class="fin-txn-amount income">+$1,200.00</span>
                        </div>
                    </section>
                </main>

                <cosmoz-side-panel slot="right">
                    <aside class="fin-notif-panel" aria-label="Notifications">
                        <div class="fin-notif-header">
                            <h2>Notifications</h2>
                            <span class="fin-notif-count">4 new</span>
                        </div>

                        <div class="fin-notif-list">
                            <div class="fin-notif-item unread">
                                <span class="fin-notif-dot payment">&#10003;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Payment received</p>
                                    <p class="fin-notif-time">2 min ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item unread">
                                <span class="fin-notif-dot alert">&#9888;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Spending limit alert</p>
                                    <p class="fin-notif-time">18 min ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item">
                                <span class="fin-notif-dot info">&#8505;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Investment maturity</p>
                                    <p class="fin-notif-time">1 hour ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item">
                                <span class="fin-notif-dot payment">&#10003;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Transfer completed</p>
                                    <p class="fin-notif-time">3 hours ago</p>
                                </div>
                            </div>
                            <div class="fin-notif-item">
                                <span class="fin-notif-dot info">&#8505;</span>
                                <div class="fin-notif-body">
                                    <p class="fin-notif-title">Monthly report ready</p>
                                    <p class="fin-notif-time">Yesterday</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </cosmoz-side-panel>
            </cosmoz-drawer-layout>
        </div>
    \`
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
        <style>
            .invoice-story {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                --cosmoz-drawer-layout-left-drawer-width: min(480px, 100cqw);
                --cosmoz-drawer-layout-right-drawer-width: min(380px, 100cqw);
                background: var(--cz-color-bg-secondary, #f9fafb);
                color: var(--cz-color-text-primary, #181d27);
                font-family: var(--cz-font-body, system-ui, sans-serif);
                box-sizing: border-box;
            }

            .invoice-story cosmoz-side-panel {
                --cosmoz-side-panel-border-radius: 12px;
            }

            /* ─── Document Viewer (left) ─── */

            .inv-doc-viewer {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-doc-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .inv-doc-header h2 {
                font-size: var(--cz-text-base, 1rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                letter-spacing: -0.01em;
                margin: 0;
            }

            .inv-doc-close {
                align-items: center;
                background: transparent;
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 32px;
                justify-items: center;
                width: 32px;
            }

            .inv-doc-close:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
            }

            .inv-doc-page {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-xl, 0.75rem);
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                flex: 1;
                min-height: 0;
                overflow: hidden;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                position: relative;
            }

            .inv-doc-page-header {
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-radius: var(--cz-radius-lg, 0.625rem)
                    var(--cz-radius-lg, 0.625rem) 0 0;
                color: var(--cz-color-white, #fff);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                letter-spacing: 0.06em;
                margin: calc(var(--cz-spacing, 0.25rem) * -8);
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 5);
                padding: calc(var(--cz-spacing, 0.25rem) * 3)
                    calc(var(--cz-spacing, 0.25rem) * 6);
                text-transform: uppercase;
            }

            .inv-doc-line {
                background: var(--cz-color-bg-secondary, #f9fafb);
                border-radius: 3px;
                height: 8px;
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .inv-doc-line.title {
                background: var(--cz-color-text-tertiary, #535862);
                width: 55%;
            }

            .inv-doc-line.subtitle {
                width: 40%;
            }

            .inv-doc-line.body {
                width: 85%;
            }

            .inv-doc-line.body.short {
                width: 60%;
            }

            .inv-doc-line.table-head {
                background: var(--cz-color-bg-brand, #dee6f6);
                width: 35%;
            }

            .inv-doc-line.table-row {
                width: 70%;
            }

            .inv-doc-line.total {
                background: var(--cz-color-text-tertiary, #535862);
                width: 30%;
            }

            .inv-doc-spacer {
                flex: 1;
            }

            .inv-doc-page-nav {
                align-items: center;
                display: flex;
                justify-content: center;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .inv-doc-page-nav span {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-doc-page-dot {
                background: var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-full, 9999px);
                height: 8px;
                width: 8px;
            }

            .inv-doc-page-dot.active {
                background: var(--cz-color-bg-brand-solid, #496dac);
            }

            /* ─── Main Content ─── */

            .inv-main {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 6);
                min-height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                width: 100%;
            }

            .inv-topbar {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-back-btn {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: inline-grid;
                font-size: var(--cz-text-lg, 1.125rem);
                height: 36px;
                justify-items: center;
                width: 36px;
            }

            .inv-back-btn:hover {
                background: var(--cz-color-bg-secondary, #f9fafb);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
            }

            .inv-breadcrumb {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-breadcrumb a {
                color: var(--cz-color-text-brand, #496dac);
                text-decoration: none;
            }

            .inv-breadcrumb a:hover {
                text-decoration: underline;
            }

            .inv-status-badge {
                background: var(--cz-color-bg-warning, #fffaeb);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-bg-warning-solid, #dc6803);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                margin-left: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 1.5)
                    calc(var(--cz-spacing, 0.25rem) * 3);
            }

            /* ─── Invoice Header ─── */

            .inv-header-card {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .inv-header-card h1,
            .inv-header-card p {
                margin: 0;
            }

            .inv-header-top {
                align-items: flex-start;
                display: flex;
                justify-content: space-between;
            }

            .inv-header-top h1 {
                font-size: var(--cz-text-xl, 1.25rem);
                letter-spacing: -0.02em;
            }

            .inv-header-meta {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .inv-header-amount {
                color: var(--cz-color-text-primary, #181d27);
                font-size: var(--cz-text-2xl, 1.5rem);
                font-weight: var(--cz-font-weight-bold, 700);
                letter-spacing: -0.02em;
                text-align: right;
            }

            .inv-header-amount-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-medium, 500);
            }

            /* ─── Bill From / Bill To ─── */

            .inv-parties {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            }

            .inv-party {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-party-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .inv-party-name {
                font-weight: var(--cz-font-weight-semibold, 600);
            }

            .inv-party-detail {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                margin-top: calc(var(--cz-spacing, 0.25rem));
            }

            .inv-party-detail p {
                margin: 0;
            }

            /* ─── Line Items ─── */

            .inv-table-card {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .inv-table-card h3 {
                font-size: var(--cz-text-base, 1rem);
                letter-spacing: -0.01em;
                margin: 0 0 calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-table {
                border-collapse: collapse;
                width: 100%;
            }

            .inv-table th {
                border-bottom: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 2)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: left;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .inv-table th:last-child {
                text-align: right;
            }

            .inv-table td {
                border-bottom: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                padding: calc(var(--cz-spacing, 0.25rem) * 3)
                    calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-table td:last-child {
                text-align: right;
            }

            .inv-table tr:last-child td {
                border-bottom: 0;
            }

            .inv-item-name {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .inv-item-desc {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-item-qty {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-item-amount {
                font-weight: var(--cz-font-weight-semibold, 600);
                white-space: nowrap;
            }

            /* ─── Totals ─── */

            .inv-totals {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                grid-template-columns: auto minmax(60px, auto);
                justify-content: flex-end;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-total-label {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-total-value {
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 1)
                    calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: right;
            }

            .inv-total-row-final {
                border-top: 2px solid var(--cz-color-border-secondary, #e9eaeb);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .inv-total-row-final .inv-total-label,
            .inv-total-row-final .inv-total-value {
                color: var(--cz-color-text-primary, #181d27);
                font-size: var(--cz-text-base, 1rem);
                font-weight: var(--cz-font-weight-bold, 700);
                padding-top: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            /* ─── Action Bar ─── */

            .inv-actions {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                padding: calc(var(--cz-spacing, 0.25rem) * 4)
                    calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .inv-btn {
                align-items: center;
                border: 1px solid var(--cz-color-border-primary, #d5d7da);
                border-radius: var(--cz-radius-full, 9999px);
                cursor: pointer;
                display: inline-flex;
                font: inherit;
                font-weight: var(--cz-font-weight-semibold, 600);
                font-size: var(--cz-text-sm, 0.875rem);
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5)
                    calc(var(--cz-spacing, 0.25rem) * 4);
                transition:
                    box-shadow 0.15s ease,
                    transform 0.15s ease;
            }

            .inv-btn:hover {
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                transform: translateY(-1px);
            }

            .inv-btn-secondary {
                background: var(--cz-color-bg-primary, #fff);
                color: var(--cz-color-text-secondary, #414651);
            }

            .inv-btn-approve {
                background: var(--cz-color-bg-brand-solid, #496dac);
                border-color: var(--cz-color-bg-brand-solid, #496dac);
                color: var(--cz-color-white, #fff);
            }

            .inv-btn-approve:hover {
                background: #3d5f99;
            }

            /* ─── History Panel (right) ─── */

            .inv-history-panel {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 6);
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .inv-history-header {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .inv-history-header h2,
            .inv-history-header p {
                margin: 0;
            }

            .inv-history-header h2 {
                font-size: var(--cz-text-lg, 1.125rem);
                letter-spacing: -0.01em;
            }

            /* ─── Status Timeline ─── */

            .inv-timeline {
                display: grid;
                gap: 0;
            }

            .inv-timeline-step {
                align-items: start;
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                grid-template-columns: 28px 1fr;
                padding-bottom: calc(var(--cz-spacing, 0.25rem) * 4);
                position: relative;
            }

            .inv-timeline-step:last-child {
                padding-bottom: 0;
            }

            .inv-timeline-marker {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }

            .inv-timeline-dot {
                align-items: center;
                border-radius: var(--cz-radius-full, 9999px);
                display: inline-grid;
                flex-shrink: 0;
                font-size: var(--cz-text-xs, 0.75rem);
                height: 24px;
                justify-items: center;
                width: 24px;
                z-index: 1;
            }

            .inv-timeline-dot.done {
                background: var(--cz-color-bg-success, #ecfdf3);
                color: var(--cz-color-text-success, #067647);
            }

            .inv-timeline-dot.current {
                background: var(--cz-color-bg-brand, #dee6f6);
                color: var(--cz-color-text-brand, #496dac);
                box-shadow: 0 0 0 3px var(--cz-color-bg-brand, #dee6f6);
            }

            .inv-timeline-dot.pending {
                background: var(--cz-color-bg-tertiary, #f2f4f7);
                color: var(--cz-color-text-tertiary, #535862);
            }

            .inv-timeline-line {
                background: var(--cz-color-border-secondary, #e9eaeb);
                flex: 1;
                width: 2px;
            }

            .inv-timeline-step.done .inv-timeline-line {
                background: var(--cz-color-text-success, #067647);
            }

            .inv-timeline-step:last-child .inv-timeline-line {
                display: none;
            }

            .inv-timeline-content p {
                margin: 0;
            }

            .inv-timeline-title {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .inv-timeline-date {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 0.5);
            }

            /* ─── Activity Feed ─── */

            .inv-activity-title {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .inv-activity-list {
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-activity-item {
                align-items: flex-start;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .inv-activity-avatar {
                align-items: center;
                background: var(--cz-color-bg-brand, #dee6f6);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-brand, #496dac);
                flex-shrink: 0;
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-bold, 700);
                height: 32px;
                width: 32px;
                display: inline-grid;
                justify-items: center;
            }

            .inv-activity-body {
                flex: 1;
            }

            .inv-activity-body p {
                margin: 0;
            }

            .inv-activity-name {
                font-weight: var(--cz-font-weight-medium, 500);
            }

            .inv-activity-action {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .inv-activity-time {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-xs, 0.75rem);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 0.5);
            }

            /* ─── Utility ─── */

            .inv-muted {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            @media (max-width: 768px) {
                .inv-parties {
                    grid-template-columns: 1fr;
                }

                .inv-main {
                    padding: calc(var(--cz-spacing, 0.25rem) * 5);
                }

                .inv-actions {
                    flex-wrap: wrap;
                }
            }
        </style>

        <div class="story-app invoice-story">
            <cosmoz-drawer-layout breakpoint="1200" @close=\${closeDrawer}>
                <cosmoz-side-panel slot="left" bordered>
                    <div class="inv-doc-viewer">
                        <div class="inv-doc-header">
                            <h2>INV-2026-0482.pdf</h2>
                            <button
                                class="inv-doc-close"
                                type="button"
                                @click=\${closeLeftDrawer}
                                aria-label="Close document viewer"
                            >
                                &#10005;
                            </button>
                        </div>
                        <div class="inv-doc-page">
                            <div class="inv-doc-page-header">Acme Corp &mdash; Invoice</div>
                            <div class="inv-doc-line title"></div>
                            <div class="inv-doc-line subtitle"></div>
                            <div
                                style="margin-top: calc(var(--cz-spacing, 0.25rem) * 4);"
                            ></div>
                            <div class="inv-doc-line table-head"></div>
                            <div class="inv-doc-line table-row"></div>
                            <div class="inv-doc-line table-row"></div>
                            <div class="inv-doc-line table-row"></div>
                            <div
                                style="margin-top: calc(var(--cz-spacing, 0.25rem) * 3);"
                            ></div>
                            <div class="inv-doc-line body"></div>
                            <div class="inv-doc-line body short"></div>
                            <div class="inv-doc-spacer"></div>
                            <div class="inv-doc-line total"></div>
                        </div>
                        <div class="inv-doc-page-nav">
                            <div class="inv-doc-page-dot active"></div>
                            <div class="inv-doc-page-dot"></div>
                            <div class="inv-doc-page-dot"></div>
                            <span>Page 1 of 3</span>
                        </div>
                    </div>
                </cosmoz-side-panel>

                <main class="inv-main">
                    <header class="inv-topbar">
                        <button class="inv-back-btn" type="button" aria-label="Go back">
                            &#8592;
                        </button>
                        <span class="inv-breadcrumb">
                            <a href="#">Invoices</a> &rsaquo; INV-2026-0482
                        </span>
                        <span class="inv-status-badge">&#9203; Pending Approval</span>
                    </header>

                    <section class="inv-header-card">
                        <div class="inv-header-top">
                            <div>
                                <h1>Invoice INV-2026-0482</h1>
                                <p class="inv-muted">
                                    Issued June 2, 2026 &middot; Due June 30, 2026
                                </p>
                            </div>
                            <div style="text-align: right;">
                                <div class="inv-header-amount-label">Amount Due</div>
                                <div class="inv-header-amount">$14,382.50</div>
                            </div>
                        </div>
                    </section>

                    <section class="inv-parties">
                        <div class="inv-party">
                            <div class="inv-party-label">From</div>
                            <div class="inv-party-name">Acme Corporation</div>
                            <div class="inv-party-detail">
                                <p>123 Commerce Blvd</p>
                                <p>San Francisco, CA 94102</p>
                                <p>billing@acmecorp.com</p>
                            </div>
                        </div>
                        <div class="inv-party">
                            <div class="inv-party-label">Bill To</div>
                            <div class="inv-party-name">Nebula Systems Ltd</div>
                            <div class="inv-party-detail">
                                <p>456 Innovation Drive</p>
                                <p>Austin, TX 73301</p>
                                <p>ap@nebulasystems.io</p>
                            </div>
                        </div>
                    </section>

                    <section class="inv-table-card">
                        <h3>Line Items</h3>
                        <table class="inv-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Rate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="inv-item-name">
                                            Platform license &mdash; annual
                                        </div>
                                        <div class="inv-item-desc">Enterprise tier, 50 seats</div>
                                    </td>
                                    <td class="inv-item-qty">1</td>
                                    <td class="inv-item-qty">$9,600.00</td>
                                    <td class="inv-item-amount">$9,600.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="inv-item-name">Consulting &amp; onboarding</div>
                                        <div class="inv-item-desc">40 hours @ $85/hr</div>
                                    </td>
                                    <td class="inv-item-qty">40</td>
                                    <td class="inv-item-qty">$85.00</td>
                                    <td class="inv-item-amount">$3,400.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="inv-item-name">Premium support add-on</div>
                                        <div class="inv-item-desc">24/7 coverage, 1-year term</div>
                                    </td>
                                    <td class="inv-item-qty">1</td>
                                    <td class="inv-item-qty">$1,200.00</td>
                                    <td class="inv-item-amount">$1,200.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="inv-totals">
                            <span class="inv-total-label">Subtotal</span>
                            <span class="inv-total-value">$14,200.00</span>
                            <span class="inv-total-label">Tax (8.25%)</span>
                            <span class="inv-total-value">$1,171.50</span>
                            <span class="inv-total-label">Discount</span>
                            <span
                                class="inv-total-value"
                                style="color: var(--cz-color-text-success, #067647);"
                                >-$989.00</span
                            >
                            <div
                                class="inv-total-row-final"
                                style="grid-column: 1 / -1;"
                            ></div>
                            <span class="inv-total-label">Total Due</span>
                            <span class="inv-total-value">$14,382.50</span>
                        </div>
                    </section>

                    <div class="inv-actions">
                        <button
                            class="inv-btn inv-btn-secondary"
                            type="button"
                            @click=\${toggleLeftDrawer}
                        >
                            &#128196; View Document
                        </button>
                        <button
                            class="inv-btn inv-btn-secondary"
                            type="button"
                            @click=\${toggleRightDrawer}
                        >
                            &#128340; History
                        </button>
                        <span style="flex: 1;"></span>
                        <button class="inv-btn inv-btn-approve" type="button">
                            &#10003; Approve
                        </button>
                    </div>
                </main>

                <cosmoz-side-panel slot="right" bordered>
                    <aside class="inv-history-panel" aria-label="Invoice history">
                        <div class="inv-history-header">
                            <h2>History &amp; Activity</h2>
                        </div>

                        <div class="inv-activity-title">Status</div>
                        <div class="inv-timeline">
                            <div class="inv-timeline-step done">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot done">&#10003;</span>
                                    <div class="inv-timeline-line"></div>
                                </div>
                                <div class="inv-timeline-content">
                                    <p class="inv-timeline-title">Draft created</p>
                                    <p class="inv-timeline-date">May 28, 2026 &middot; 4:12 PM</p>
                                </div>
                            </div>
                            <div class="inv-timeline-step done">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot done">&#10003;</span>
                                    <div class="inv-timeline-line"></div>
                                </div>
                                <div class="inv-timeline-content">
                                    <p class="inv-timeline-title">Sent to Nebula Systems</p>
                                    <p class="inv-timeline-date">May 29, 2026 &middot; 9:30 AM</p>
                                </div>
                            </div>
                            <div class="inv-timeline-step">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot current">&#9679;</span>
                                    <div class="inv-timeline-line"></div>
                                </div>
                                <div class="inv-timeline-content">
                                    <p class="inv-timeline-title">Under review</p>
                                    <p class="inv-timeline-date">Jun 1, 2026 &middot; 11:45 AM</p>
                                </div>
                            </div>
                            <div class="inv-timeline-step">
                                <div class="inv-timeline-marker">
                                    <span class="inv-timeline-dot pending">&#9675;</span>
                                </div>
                                <div class="inv-timeline-content">
                                    <p
                                        class="inv-timeline-title"
                                        style="color: var(--cz-color-text-tertiary, #535862);"
                                    >
                                        Pending approval
                                    </p>
                                    <p class="inv-timeline-date">Awaiting sign-off</p>
                                </div>
                            </div>
                        </div>

                        <div class="inv-activity-title">Activity</div>
                        <div class="inv-activity-list">
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">SK</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Sara K.</span>
                                        <span class="inv-activity-action"
                                            >marked as &ldquo;under review&rdquo;</span
                                        >
                                    </p>
                                    <p class="inv-activity-time">2 hours ago</p>
                                </div>
                            </div>
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">MB</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Marco B.</span>
                                        <span class="inv-activity-action"
                                            >updated payment terms to Net 30</span
                                        >
                                    </p>
                                    <p class="inv-activity-time">Yesterday at 3:20 PM</p>
                                </div>
                            </div>
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">JL</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Jon L.</span>
                                        <span class="inv-activity-action"
                                            >sent invoice via email</span
                                        >
                                    </p>
                                    <p class="inv-activity-time">May 29 at 9:30 AM</p>
                                </div>
                            </div>
                            <div class="inv-activity-item">
                                <div class="inv-activity-avatar">SK</div>
                                <div class="inv-activity-body">
                                    <p>
                                        <span class="inv-activity-name">Sara K.</span>
                                        <span class="inv-activity-action">created draft</span>
                                    </p>
                                    <p class="inv-activity-time">May 28 at 4:12 PM</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </cosmoz-side-panel>
            </cosmoz-drawer-layout>
        </div>
    \`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
        <style>
            .pizza-story {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                --cosmoz-drawer-layout-left-drawer-width: min(320px, 88cqw);
                --cosmoz-drawer-layout-right-drawer-width: min(460px, 94cqw);
                --cosmoz-drawer-layout-backdrop-color: rgb(10 13 18 / 0.28);
                background:
                    radial-gradient(
                        circle at 20% 10%,
                        rgb(254 240 199 / 0.8),
                        transparent 24rem
                    ),
                    var(--cz-color-bg-secondary, #fafafa);
                color: var(--cz-color-text-primary, #181d27);
                font-family: var(--cz-font-body, system-ui, sans-serif);
                box-sizing: border-box;
            }

            .pizza-story cosmoz-side-panel[slot='left']::part(panel) {
                border-right: 1px solid var(--cz-color-border-secondary, #e9eaeb);
            }

            .pizza-story cosmoz-side-panel[slot='right']::part(panel) {
                border-left: 1px solid var(--cz-color-border-secondary, #e9eaeb);
            }

            .pizza-menu,
            .pizza-map-panel {
                background: var(--cz-color-bg-primary, #fff);
                box-sizing: border-box;
                height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .pizza-menu {
                display: flex;
                flex-direction: column;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-restaurant {
                background:
                    linear-gradient(135deg, rgb(122 39 26 / 0.92), rgb(220 104 3 / 0.9)),
                    var(--cz-color-bg-warning-solid, #dc6803);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-lg, 0 12px 16px rgb(10 13 18 / 0.08));
                color: var(--cz-color-white, #fff);
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-restaurant p,
            .pizza-restaurant h3,
            .pizza-order-title p,
            .pizza-order-title h2,
            .pizza-section h3,
            .pizza-section p,
            .pizza-card p,
            .pizza-card h3,
            .pizza-map-panel p,
            .pizza-map-panel h2,
            .pizza-map-card p,
            .pizza-map-card h3 {
                margin: 0;
            }

            .pizza-menu-list {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 2);
            }

            .pizza-menu-button {
                align-items: center;
                background: transparent;
                border: 0;
                border-radius: var(--cz-radius-xl, 0.75rem);
                color: var(--cz-color-text-secondary, #414651);
                cursor: pointer;
                display: grid;
                font: inherit;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                grid-template-columns: 38px 1fr;
                padding: calc(var(--cz-spacing, 0.25rem) * 3);
                text-align: left;
                transition:
                    background 0.2s ease,
                    transform 0.2s ease;
            }

            .pizza-menu-button:hover,
            .pizza-menu-button.active {
                background: var(--cz-color-bg-warning, #fffaeb);
                transform: translateX(2px);
            }

            .pizza-menu-icon {
                align-items: center;
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-lg, 0.625rem);
                display: inline-grid;
                height: 38px;
                justify-items: center;
                width: 38px;
            }

            .pizza-main {
                box-sizing: border-box;
                min-height: 100%;
                overflow: auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 8);
                width: 100%;
            }

            .pizza-hero {
                align-items: center;
                background:
                    linear-gradient(
                        135deg,
                        rgb(255 255 255 / 0.94),
                        rgb(255 250 235 / 0.96)
                    ),
                    var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-3XL, 1.25rem);
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: minmax(0, 1fr) auto;
                padding: calc(var(--cz-spacing, 0.25rem) * 6);
            }

            .pizza-eyebrow,
            .pizza-muted {
                color: var(--cz-color-text-tertiary, #535862);
                font-size: var(--cz-text-sm, 0.875rem);
            }

            .pizza-order-title h2 {
                font-size: var(--cz-text-display-sm, 1.875rem);
                letter-spacing: -0.03em;
                margin-top: calc(var(--cz-spacing, 0.25rem) * 1);
            }

            .pizza-actions {
                display: flex;
                flex-wrap: wrap;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                justify-content: flex-end;
            }

            .pizza-button,
            .pizza-button-secondary {
                border-radius: var(--cz-radius-full, 9999px);
                cursor: pointer;
                font: inherit;
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 2.5)
                    calc(var(--cz-spacing, 0.25rem) * 4);
                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease,
                    background 0.2s ease;
            }

            .pizza-button {
                background: var(--cz-color-bg-warning-solid, #dc6803);
                border: 1px solid var(--cz-color-bg-warning-solid, #dc6803);
                box-shadow: var(--cz-shadow-xs-skeumorphic, var(--cz-shadow-xs, none));
                color: var(--cz-color-white, #fff);
            }

            .pizza-button-secondary {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-primary, #d5d7da);
                color: var(--cz-color-text-secondary, #414651);
            }

            .pizza-button:hover,
            .pizza-button-secondary:hover {
                box-shadow: var(--cz-shadow-sm, 0 1px 3px rgb(10 13 18 / 0.1));
                transform: translateY(-1px);
            }

            .pizza-grid {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-section,
            .pizza-card,
            .pizza-map-card {
                background: var(--cz-color-bg-primary, #fff);
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-2XL, 1rem);
                box-shadow: var(--cz-shadow-xs, 0 1px 2px rgb(10 13 18 / 0.05));
                padding: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-timeline {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 4);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-step {
                align-items: start;
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                grid-template-columns: 30px 1fr;
            }

            .pizza-dot {
                background: var(--cz-color-bg-warning-solid, #dc6803);
                border: 4px solid var(--cz-color-bg-warning, #fffaeb);
                border-radius: var(--cz-radius-full, 9999px);
                height: 18px;
                margin-top: 2px;
                width: 18px;
            }

            .pizza-dot.pending {
                background: var(--cz-color-bg-quaternary, #e9eaeb);
            }

            .pizza-items {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                margin-top: calc(var(--cz-spacing, 0.25rem) * 5);
            }

            .pizza-item,
            .pizza-total-row {
                align-items: center;
                display: flex;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                justify-content: space-between;
            }

            .pizza-item {
                border-bottom: 1px solid var(--cz-color-border-tertiary, #f5f5f5);
                padding-bottom: calc(var(--cz-spacing, 0.25rem) * 3);
            }

            .pizza-pill {
                background: var(--cz-color-bg-success, #ecfdf3);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-success, #067647);
                font-size: var(--cz-text-xs, 0.75rem);
                font-weight: var(--cz-font-weight-semibold, 600);
                padding: calc(var(--cz-spacing, 0.25rem) * 1.5)
                    calc(var(--cz-spacing, 0.25rem) * 2.5);
            }

            .pizza-map-panel {
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 5);
                grid-template-rows: auto minmax(280px, 1fr) auto;
            }

            .pizza-map {
                background:
                    linear-gradient(
                        90deg,
                        transparent 47%,
                        rgb(255 255 255 / 0.86) 47% 53%,
                        transparent 53%
                    ),
                    linear-gradient(
                        27deg,
                        transparent 40%,
                        rgb(255 255 255 / 0.86) 40% 46%,
                        transparent 46%
                    ),
                    linear-gradient(
                        150deg,
                        transparent 55%,
                        rgb(255 255 255 / 0.75) 55% 61%,
                        transparent 61%
                    ),
                    linear-gradient(
                        135deg,
                        var(--cz-color-brand-50, #dee6f6),
                        var(--cz-color-warning-50, #fffaeb)
                    );
                border: 1px solid var(--cz-color-border-secondary, #e9eaeb);
                border-radius: var(--cz-radius-3XL, 1.25rem);
                min-height: 330px;
                overflow: hidden;
                position: relative;
            }

            .pizza-route {
                border: 5px dashed var(--cz-color-warning-600, #dc6803);
                border-bottom: 0;
                border-left: 0;
                border-radius: 0 var(--cz-radius-4XL, 1.5rem) 0 0;
                height: 44%;
                left: 24%;
                position: absolute;
                top: 34%;
                transform: rotate(-10deg);
                width: 52%;
            }

            .pizza-pin {
                align-items: center;
                background: var(--cz-color-bg-warning-solid, #dc6803);
                border: 4px solid var(--cz-color-white, #fff);
                border-radius: var(--cz-radius-full, 9999px);
                box-shadow: var(--cz-shadow-lg, 0 12px 16px rgb(10 13 18 / 0.08));
                color: var(--cz-color-white, #fff);
                display: inline-grid;
                height: 48px;
                justify-items: center;
                position: absolute;
                width: 48px;
            }

            .pizza-pin.restaurant {
                left: 19%;
                top: 62%;
            }

            .pizza-pin.home {
                background: var(--cz-color-bg-brand-solid, #496dac);
                right: 16%;
                top: 23%;
            }

            .pizza-driver {
                align-items: center;
                display: grid;
                gap: calc(var(--cz-spacing, 0.25rem) * 3);
                grid-template-columns: 52px 1fr auto;
            }

            .pizza-driver-avatar {
                align-items: center;
                background: var(--cz-color-bg-brand, #dee6f6);
                border-radius: var(--cz-radius-full, 9999px);
                color: var(--cz-color-text-brand, #496dac);
                display: inline-grid;
                font-weight: var(--cz-font-weight-bold, 700);
                height: 52px;
                justify-items: center;
                width: 52px;
            }

            @media (max-width: 880px) {
                .pizza-hero,
                .pizza-grid {
                    grid-template-columns: 1fr;
                }

                .pizza-actions {
                    justify-content: flex-start;
                }

                .pizza-main {
                    padding: calc(var(--cz-spacing, 0.25rem) * 5);
                }
            }
        </style>

        <div class="story-app pizza-story">
            <cosmoz-drawer-layout @close=\${closeDrawer}>
                <cosmoz-side-panel slot="left">
                    <aside class="pizza-menu" aria-label="Order menu">
                        <section class="pizza-restaurant">
                            <p>Now preparing</p>
                            <h3>Luigi's Corner Pizza</h3>
                            <p>Order #4821 - 2.4 miles away</p>
                        </section>

                        <nav class="pizza-menu-list">
                            <button class="pizza-menu-button active" type="button">
                                <span class="pizza-menu-icon">1</span>
                                <span
                                    ><strong>Track order</strong><br /><span class="pizza-muted"
                                        >Live kitchen and delivery steps</span
                                    ></span
                                >
                            </button>
                            <button class="pizza-menu-button" type="button">
                                <span class="pizza-menu-icon">2</span>
                                <span
                                    ><strong>Delivery note</strong><br /><span class="pizza-muted"
                                        >Gate code and drop-off details</span
                                    ></span
                                >
                            </button>
                            <button class="pizza-menu-button" type="button">
                                <span class="pizza-menu-icon">3</span>
                                <span
                                    ><strong>Contact driver</strong><br /><span
                                        class="pizza-muted"
                                        >Available after pickup</span
                                    ></span
                                >
                            </button>
                            <button class="pizza-menu-button" type="button">
                                <span class="pizza-menu-icon">4</span>
                                <span
                                    ><strong>Receipt</strong><br /><span class="pizza-muted"
                                        >Payment, taxes, and tip</span
                                    ></span
                                >
                            </button>
                        </nav>
                    </aside>
                </cosmoz-side-panel>

                <main class="pizza-main">
                    <section class="pizza-hero">
                        <div class="pizza-order-title">
                            <p class="pizza-eyebrow">Arriving around 7:42 PM</p>
                            <h2>Your pizza is in the oven</h2>
                            <p class="pizza-muted">
                                Marco is preparing your order before it heads across Midtown.
                            </p>
                        </div>
                        <div class="pizza-actions">
                            <button
                                class="pizza-button-secondary"
                                type="button"
                                @click=\${toggleLeftDrawer}
                            >
                                Order menu
                            </button>
                            <button
                                class="pizza-button"
                                type="button"
                                @click=\${toggleRightDrawer}
                            >
                                Show map
                            </button>
                        </div>
                    </section>

                    <section class="pizza-grid">
                        <article class="pizza-section">
                            <p class="pizza-muted">Order progress</p>
                            <h3>Almost ready for pickup</h3>
                            <div class="pizza-timeline">
                                <div class="pizza-step">
                                    <span class="pizza-dot"></span>
                                    <span
                                        ><strong>Order confirmed</strong><br /><span
                                            class="pizza-muted"
                                            >Accepted at 7:06 PM.</span
                                        ></span
                                    >
                                </div>
                                <div class="pizza-step">
                                    <span class="pizza-dot"></span>
                                    <span
                                        ><strong>Baking now</strong><br /><span class="pizza-muted"
                                            >Finishing in the deck oven.</span
                                        ></span
                                    >
                                </div>
                                <div class="pizza-step">
                                    <span class="pizza-dot pending"></span>
                                    <span
                                        ><strong>Out for delivery</strong><br /><span
                                            class="pizza-muted"
                                            >Driver heads your way after pickup.</span
                                        ></span
                                    >
                                </div>
                            </div>
                        </article>

                        <article class="pizza-card">
                            <p class="pizza-muted">Order details</p>
                            <h3>Family dinner</h3>
                            <div class="pizza-items">
                                <div class="pizza-item">
                                    <span
                                        ><strong>1x Pepperoni Grande</strong><br /><span
                                            class="pizza-muted"
                                            >Extra basil, well done</span
                                        ></span
                                    >
                                    <strong>$21.00</strong>
                                </div>
                                <div class="pizza-item">
                                    <span
                                        ><strong>1x Burrata Margherita</strong><br /><span
                                            class="pizza-muted"
                                            >Add chili oil</span
                                        ></span
                                    >
                                    <strong>$19.50</strong>
                                </div>
                                <div class="pizza-item">
                                    <span
                                        ><strong>Garlic knots</strong><br /><span
                                            class="pizza-muted"
                                            >Parmesan and marinara</span
                                        ></span
                                    >
                                    <strong>$7.00</strong>
                                </div>
                                <div class="pizza-total-row">
                                    <span class="pizza-pill">Paid with Apple Pay</span
                                    ><strong>$56.84</strong>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>

                <cosmoz-side-panel slot="right">
                    <aside class="pizza-map-panel" aria-label="Delivery map">
                        <div>
                            <p class="pizza-muted">Delivery map</p>
                            <h2>Midtown route</h2>
                        </div>
                        <div class="pizza-map" aria-hidden="true">
                            <div class="pizza-route"></div>
                            <div class="pizza-pin restaurant">P</div>
                            <div class="pizza-pin home">H</div>
                        </div>
                        <section class="pizza-map-card">
                            <div class="pizza-driver">
                                <div class="pizza-driver-avatar">DR</div>
                                <div>
                                    <h3>Drew is assigned</h3>
                                    <p class="pizza-muted">Pickup estimate: 6 minutes</p>
                                </div>
                                <span class="pizza-pill">2.4 mi</span>
                            </div>
                        </section>
                    </aside>
                </cosmoz-side-panel>
            </cosmoz-drawer-layout>
        </div>
    \`
}`,...b.parameters?.docs?.source}}},x=[`Default`,`AlwaysSideMode`,`FinanceDashboard`,`InvoiceOverview`,`PizzaOrderMap`]}))();export{m as AlwaysSideMode,p as Default,_ as FinanceDashboard,y as InvoiceOverview,b as PizzaOrderMap,x as __namedExportsOrder,s as default};