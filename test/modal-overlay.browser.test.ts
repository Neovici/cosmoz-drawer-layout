import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { commands, userEvent } from 'vitest/browser';
import '../src/cosmoz-drawer-layout';

let drawer: HTMLElement;
let trigger: HTMLButtonElement;
let closed = vi.fn();
const panel = () =>
	drawer.shadowRoot!.querySelector<HTMLDialogElement>('.side-left')!;
const content = () => drawer.querySelector<HTMLElement>('[slot="left"]')!;
const open = async () => {
	await userEvent.click(trigger);
	await expect.poll(() => panel().matches(':modal')).toBe(true);
};

beforeEach(async () => {
	document.body.innerHTML = `
		<style>
			cosmoz-drawer-layout { width: 320px; height: 600px; }
			cosmoz-drawer-layout::part(left-drawer) { width:320px; height:400px; top:80px; }
			[data-grip] { height:60px; touch-action:none; }
		</style>
		<button id="trigger">Open menu</button>
		<cosmoz-drawer-layout modal-overlay left-drawer-label="Menu" right-drawer-label="Assistant" breakpoint="10000" swipe-to-close="down">
			<section slot="left">
				<header data-drawer-drag-handle><div data-grip>Menu</div><button id="close">Close menu</button></header>
				<button id="nested-trigger">More information</button>
				<input aria-label="Search menu"><a href="#invoices">Invoices</a>
				<dialog id="nested"><button>Close nested</button></dialog>
			</section>
			<main><button id="background">Background action</button></main>
			<section slot="right"><button>Close assistant</button></section>
		</cosmoz-drawer-layout>`;
	drawer = document.querySelector('cosmoz-drawer-layout')!;
	trigger = document.querySelector('#trigger')!;
	trigger.addEventListener('click', () =>
		drawer.setAttribute('left-drawer-open', ''),
	);
	closed = vi.fn(() => drawer.removeAttribute('left-drawer-open'));
	drawer.addEventListener('close', closed);
	drawer
		.querySelector('#close')!
		.addEventListener('click', () =>
			drawer.removeAttribute('left-drawer-open'),
		);
	drawer
		.querySelector('#nested-trigger')!
		.addEventListener('click', () =>
			drawer.querySelector<HTMLDialogElement>('#nested')!.showModal(),
		);
	await expect.poll(() => panel() instanceof HTMLDialogElement).toBe(true);
});

afterEach(async () => {
	await commands.releasePointer();
	drawer.remove();
	document.body.innerHTML = '';
});

it('names the native dialog and skips background controls with Tab and Shift+Tab', async () => {
	await open();
	expect(panel().getAttribute('aria-label')).toBe('Menu');
	drawer.querySelector<HTMLButtonElement>('#background')!.focus();
	expect(document.activeElement).not.toBe(drawer.querySelector('#background'));
	for (let i = 0; i < 8; i++) {
		await userEvent.tab();
		expect(
			content().contains(document.activeElement) ||
				document.activeElement === document.body ||
				drawer.shadowRoot!.activeElement === panel(),
		).toBe(true);
	}
	for (let i = 0; i < 8; i++) {
		await userEvent.tab({ shift: true });
		expect(
			content().contains(document.activeElement) ||
				document.activeElement === document.body ||
				drawer.shadowRoot!.activeElement === panel(),
		).toBe(true);
	}
});

it('Escape closes through the controlled event and restores trigger focus', async () => {
	await open();
	await userEvent.keyboard('{Escape}');
	await expect.poll(() => panel().open).toBe(false);
	expect(closed).toHaveBeenCalledOnce();
	await expect.poll(() => document.activeElement).toBe(trigger);
	await open();
	await userEvent.click(drawer.querySelector('#close')!);
	await expect.poll(() => panel().open).toBe(false);
	await expect.poll(() => document.activeElement).toBe(trigger);
});

it('dims the native backdrop during dragging and restores focus after dismissal', async () => {
	await open();
	await commands.dragHeader('[slot="left"] [data-grip]', 0, 180, {
		release: false,
	});
	expect(
		parseFloat(getComputedStyle(panel(), '::backdrop').opacity),
	).toBeCloseTo(1 - 180 / 400, 2);
	await commands.releasePointer();
	await expect.poll(() => panel().open).toBe(false);
	await expect.poll(() => document.activeElement).toBe(trigger);
});

it('dismisses from the backdrop without activating the element behind it', async () => {
	await open();
	const clicked = vi.fn();
	trigger.addEventListener('click', clicked);
	await userEvent.click(trigger, { force: true });
	await expect.poll(() => panel().open).toBe(false);
	expect(clicked).not.toHaveBeenCalled();
	await expect.poll(() => document.activeElement).toBe(trigger);
});

it('leaves an outer drawer open when Escape closes its nested dialog', async () => {
	await open();
	await userEvent.click(drawer.querySelector('#nested-trigger')!);
	const nested = drawer.querySelector<HTMLDialogElement>('#nested')!;
	expect(nested.matches(':modal')).toBe(true);
	await userEvent.keyboard('{Escape}');
	await expect.poll(() => nested.open).toBe(false);
	expect(panel().matches(':modal')).toBe(true);
	expect(closed).not.toHaveBeenCalled();
});

it('releases modality when switching to desktop and keeps content state', async () => {
	await open();
	const input = drawer.querySelector<HTMLInputElement>('input')!;
	input.value = 'invoice';
	drawer.setAttribute('breakpoint', '0');
	await expect.poll(() => panel() instanceof HTMLDialogElement).toBe(false);
	trigger.focus();
	expect(document.activeElement).toBe(trigger);
	expect(drawer.querySelector('input')).toBe(input);
	expect(input.value).toBe('invoice');
	expect(drawer.shadowRoot!.querySelector(':modal')).toBe(null);
});
