import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { component, css, html } from '@pionjs/pion';
import { useModalOverlay } from './use-modal-overlay';
import { useOverlayMode } from './use-overlay-mode';
import { useSwipeToClose } from './use-swipe-to-close';

type Props = {
	breakpoint?: string;
	leftDrawerOpen?: boolean;
	rightDrawerOpen?: boolean;
	swipeToClose?: string;
	modalOverlay?: boolean;
	leftDrawerLabel?: string;
	rightDrawerLabel?: string;
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
`;

const CosmozDrawerLayout = (host: HTMLElement & Props) => {
	const breakpoint = parseBreakpoint(host.breakpoint, 1460);

	useStyleSheet(css`
		${breakpoint > 0
			? `@container (min-width: ${breakpoint}px) {${sideModeRules}}`
			: sideModeRules}
	`);
	const overlay = useOverlayMode(
		host,
		breakpoint,
		host.hasAttribute('modal-overlay'),
	);
	const modal = host.hasAttribute('modal-overlay') && overlay;
	useSwipeToClose(host, host.swipeToClose);
	useModalOverlay(
		host,
		modal,
		host.hasAttribute('left-drawer-open'),
		host.hasAttribute('right-drawer-open'),
	);
	const panel = (side: 'left' | 'right') => {
		const open = host.hasAttribute(`${side}-drawer-open`);
		return modal
			? html` <dialog
					class="side side-${side}"
					part="${side}-drawer"
					?inert=${!open}
					aria-label=${(side === 'left'
						? host.leftDrawerLabel
						: host.rightDrawerLabel) ?? ''}
					closedby="any"
					autofocus
				>
					<slot name=${side}></slot>
				</dialog>`
			: html` <div
					class="side side-${side}"
					part="${side}-drawer"
					?inert=${!open}
				>
					<slot name=${side}></slot>
				</div>`;
	};

	return html`
		<div class="wrapper">
			${panel('left')}
			<div class="main-wrapper">
				<div
					class="click-layer"
					part="backdrop"
					?hidden=${modal}
					@click=${() => host.dispatchEvent(new CustomEvent('close'))}
				></div>
				<slot class="main" part="main"></slot>
			</div>
			${panel('right')}
		</div>
	`;
};

const style = css`
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
`;

customElements.define(
	'cosmoz-drawer-layout',
	component(CosmozDrawerLayout, {
		styleSheets: [style],
		observedAttributes: [
			'breakpoint',
			'left-drawer-open',
			'right-drawer-open',
			'swipe-to-close',
			'modal-overlay',
			'left-drawer-label',
			'right-drawer-label',
		],
	}),
);

export { CosmozDrawerLayout };
