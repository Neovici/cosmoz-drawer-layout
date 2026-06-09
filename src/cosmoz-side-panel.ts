import { component, css, html } from '@pionjs/pion';

const CosmozSidePanel = () =>
	html`<div class="wrapper" part="panel"><slot></slot></div>`;

const style = css`
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
`;

customElements.define(
	'cosmoz-side-panel',
	component(CosmozSidePanel, { styleSheets: [style] }),
);

export { CosmozSidePanel };
