import '@neovici/cosmoz-tokens';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-drawer-layout';
import '../src/cosmoz-side-panel';

interface StoryArgs {
	drawerMode?: string;
}

const meta: Meta<StoryArgs> = {
	title: 'SidePanel',
	component: 'cosmoz-side-panel',
	tags: ['autodocs'],
	argTypes: {
		drawerMode: {
			control: 'select',
			options: ['overlay', 'side'],
			description:
				'Container mode — set via --_drawer-mode CSS custom property by the parent layout',
		},
	},
	args: {},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	argTypes: {
		drawerMode: { control: 'select', options: ['overlay', 'side'] },
	},
	args: {
		drawerMode: 'overlay',
	},
	render: (args) => html`
		<div style="width: 300px; height: 400px; border: 1px solid #ddd;">
			<cosmoz-side-panel style="--_drawer-mode: ${args.drawerMode}">
				<div style="padding: 16px;">Panel Content</div>
			</cosmoz-side-panel>
		</div>
	`,
};

export const Bordered: Story = {
	render: () => html`
		<div style="width: 300px; height: 400px; border: 1px solid #ddd;">
			<cosmoz-side-panel bordered>
				<div style="padding: 16px;">Bordered panel content</div>
			</cosmoz-side-panel>
		</div>
	`,
};

export const BorderedInDrawerLayout: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: () => html`
		<style>
			.bordered-layout-story {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: var(--cz-color-bg-secondary, #f9fafb);
				font-family: var(--cz-font-body, system-ui, sans-serif);
				box-sizing: border-box;
			}

			.bordered-layout-story p {
				margin: 0;
			}

			.bordered-layout-story cosmoz-side-panel {
				--cosmoz-side-panel-border-radius: 12px;
			}
		</style>

		<div class="story-app bordered-layout-story">
			<!--
				Using the "bordered" attribute activates card-like borders and radius.
				In overlay mode (viewport < breakpoint), borders and radius are
				automatically removed for a full-bleed appearance.
			-->
			<cosmoz-drawer-layout
				breakpoint="1024"
				left-drawer-open
				style="height: 100%;"
			>
				<cosmoz-side-panel slot="left" bordered>
					<div style="padding: 16px;">
						<p><strong>Bordered panel</strong></p>
						<p>
							This panel uses the <code>bordered</code> attribute for a
							card-like appearance. Resize the browser below 1024px to see
							borders disappear in overlay mode.
						</p>
					</div>
				</cosmoz-side-panel>
				<div style="padding: 16px;">
					<p>Main content area. Try resizing the window.</p>
				</div>
			</cosmoz-drawer-layout>
		</div>
	`,
};

export const CustomBorders: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: () => html`
		<style>
			.custom-borders-story {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: var(--cz-color-bg-secondary, #f9fafb);
				font-family: var(--cz-font-body, system-ui, sans-serif);
				box-sizing: border-box;
			}

			.custom-borders-story p {
				margin: 0;
			}

			.custom-borders-story cosmoz-side-panel[bordered] {
				--cosmoz-side-panel-border-radius: 8px;
				--cosmoz-side-panel-margin: 0;
				--cosmoz-side-panel-border-top: 0;
				--cosmoz-side-panel-border-bottom: 0;
			}

			.custom-borders-story cosmoz-side-panel[slot='left'][bordered] {
				--cosmoz-side-panel-border-right: 2px solid
					var(--cz-color-bg-brand-solid, #496dac);
				--cosmoz-side-panel-border-left: 0;
			}

			.custom-borders-story cosmoz-side-panel[slot='right'][bordered] {
				--cosmoz-side-panel-border-left: 2px solid
					var(--cz-color-bg-brand-solid, #496dac);
				--cosmoz-side-panel-border-right: 0;
			}
		</style>

		<div class="story-app custom-borders-story">
			<!--
				Custom borders via --cosmoz-side-panel-border-* CSS custom properties.
				These are only active when "bordered" is set. In overlay mode, the
				@container overlay rule still zeros borders and radius automatically.
			-->
			<cosmoz-drawer-layout
				breakpoint="1024"
				left-drawer-open
				right-drawer-open
				style="height: 100%;"
			>
				<cosmoz-side-panel slot="left" bordered>
					<div style="padding: 16px;">
						<p><strong>Left drawer</strong></p>
						<p>
							Customized brand-color border on the right edge. Resize below
							1024px to see it zeroed in overlay mode.
						</p>
					</div>
				</cosmoz-side-panel>
				<div style="padding: 16px;">
					<p>Main content</p>
				</div>
				<cosmoz-side-panel slot="right" bordered>
					<div style="padding: 16px;">
						<p><strong>Right drawer</strong></p>
						<p>Customized brand-color border on the left edge.</p>
					</div>
				</cosmoz-side-panel>
			</cosmoz-drawer-layout>
		</div>
	`,
};

export const PartStyling: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: () => html`
		<style>
			.part-styling-story {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: var(--cz-color-bg-secondary, #f9fafb);
				font-family: var(--cz-font-body, system-ui, sans-serif);
				box-sizing: border-box;
			}

			.part-styling-story p {
				margin: 0;
			}

			/*
				Use ::part(panel) for non-border styling like background.
				Do NOT set border properties via ::part(panel) if you want
				automatic overlay-mode zeroing — use the "bordered" attribute
				with --cosmoz-side-panel-border-* custom properties instead.
			*/
			.part-styling-story cosmoz-side-panel::part(panel) {
				background: var(--cz-color-bg-secondary, #f9fafb);
				border-right: 1px solid var(--cz-color-border-secondary, #e9eaeb);
			}
		</style>

		<div class="story-app part-styling-story">
			<cosmoz-drawer-layout
				breakpoint="1024"
				left-drawer-open
				style="height: 100%;"
			>
				<cosmoz-side-panel slot="left">
					<div style="padding: 16px;">
						<p><strong>Styled via ::part(panel)</strong></p>
						<p>
							This panel has no <code>bordered</code> attribute. Background and
							a divider border are applied via <code>::part(panel)</code>. These
							border overrides are NOT automatically zeroed in overlay mode.
						</p>
					</div>
				</cosmoz-side-panel>
				<div style="padding: 16px;">
					<p>Main content area</p>
				</div>
			</cosmoz-drawer-layout>
		</div>
	`,
};
