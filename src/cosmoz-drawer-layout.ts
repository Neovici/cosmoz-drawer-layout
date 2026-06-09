import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { component, css, html } from '@pionjs/pion';

type Props = {
	breakpoint?: string;
};

const parseBreakpoint = (value: string | undefined, fallback: number) => {
	const parsed = parseInt(String(value ?? fallback), 10);
	return Number.isNaN(parsed) ? fallback : parsed;
};

const sideModeRules = `
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
		--cosmoz-drawer-layout-gap: var(--cz-spacing);
	}

	:host([right-drawer-open]) {
		--_right-drawer-current-width: var(--_right-drawer-width);
		--cosmoz-drawer-layout-gap: var(--cz-spacing);
	}
`;

const CosmozDrawerLayout = (host: Element & Props) => {
	const breakpoint = parseBreakpoint(host.breakpoint, 1460);

	useStyleSheet(css`
		${breakpoint > 0
			? `@container (min-width: ${breakpoint}px) {${sideModeRules}}`
			: sideModeRules}
	`);

	return html`
		<div class="wrapper">
			<slot name="left" class="side side-left" part="left-drawer"></slot>
			<div class="main-wrapper">
				<div
					class="click-layer"
					part="backdrop"
					@click=${() => host.dispatchEvent(new CustomEvent('close'))}
				></div>
				<slot class="main" part="main"></slot>
			</div>
			<slot name="right" class="side side-right" part="right-drawer"></slot>
		</div>
	`;
};

const style = css`
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
		--cosmoz-drawer-layout-gap: var(--cz-spacing);
	}

	:host([right-drawer-open]) {
		--_right-drawer-current-width: var(--_right-drawer-width);
		--cosmoz-drawer-layout-gap: var(--cz-spacing);
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
`;

customElements.define(
	'cosmoz-drawer-layout',
	component(CosmozDrawerLayout, {
		styleSheets: [style],
		observedAttributes: ['breakpoint'],
	}),
);

export { CosmozDrawerLayout };
