import { afterEach, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../src/cosmoz-drawer-layout';

afterEach(() => {
	document.body.innerHTML = '';
});

it.each([
	[0, 'left'],
	[0, 'right'],
	[400, 'left'],
	[400, 'right'],
])('keeps the workspace usable with a %s breakpoint and %s drawer', async (breakpoint, side) => {
	document.body.innerHTML = `
		<cosmoz-drawer-layout breakpoint="${breakpoint}" ${side}-drawer-open
			style="width:700px;height:300px;--cosmoz-drawer-layout-left-drawer-width:160px;--cosmoz-drawer-layout-right-drawer-width:160px">
			<aside slot="left">Navigation</aside>
			<main><button>Workspace action</button></main>
			<aside slot="right">Assistant</aside>
		</cosmoz-drawer-layout>`;
	const drawer = document.querySelector('cosmoz-drawer-layout')!;
	const button = drawer.querySelector('button')!;
	const action = vi.fn();
	const close = vi.fn();
	button.addEventListener('click', action);
	drawer.addEventListener('close', close);
	await expect.poll(() => button.getBoundingClientRect().width).toBeGreaterThan(0);

	await userEvent.click(button);

	expect(action).toHaveBeenCalledOnce();
	expect(close).not.toHaveBeenCalled();
	expect(drawer.hasAttribute(`${side}-drawer-open`)).toBe(true);
});
