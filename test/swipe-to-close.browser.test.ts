import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { commands, server, userEvent } from 'vitest/browser';
import '../src/cosmoz-drawer-layout';

customElements.define(
	'test-sheet-header',
	class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open' }).innerHTML = `
			<style>
				header { touch-action: none; user-select: none; height: 70px; display: flex; }
				span { display: block; padding: 20px; flex: 1; }
			</style>
			<header data-drawer-drag-handle><span data-grip>Menu</span><button>Close</button></header>`;
		}
	},
);

let drawer: HTMLElement;
let closed: ReturnType<typeof vi.fn<() => void>>;
const panel = (side = 'left') =>
	drawer.shadowRoot!.querySelector<HTMLElement>(`.side-${side}`)!;
const grip = (side = 'left') =>
	`[slot="${side}"] test-sheet-header [data-grip]`;
const frame = () =>
	new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

beforeEach(async () => {
	document.body.innerHTML = `
		<style>
			cosmoz-drawer-layout { width: 320px; height: 600px; }
			cosmoz-drawer-layout::part(left-drawer), cosmoz-drawer-layout::part(right-drawer) {
				top: 80px; bottom: 0; height: auto; width: 320px;
				transform: translateY(100%); transition: transform 220ms;
			}
			cosmoz-drawer-layout[left-drawer-open]::part(left-drawer),
			cosmoz-drawer-layout[right-drawer-open]::part(right-drawer) { transform: translateY(0); }
			.scroll { height: 350px; overflow: auto; }
			@media (prefers-reduced-motion: reduce) {
				cosmoz-drawer-layout::part(left-drawer), cosmoz-drawer-layout::part(right-drawer) { transition: none; }
			}
		</style>
		<cosmoz-drawer-layout breakpoint="10000" swipe-to-close="down" left-drawer-open>
			${['left', 'right']
				.map(
					(side) => `
				<section slot="${side}">
					<test-sheet-header></test-sheet-header>
					<div class="scroll"><div style="height: 2000px">Scrollable content</div></div>
				</section>`,
				)
				.join('')}
			<main>Workspace</main>
		</cosmoz-drawer-layout>`;
	drawer = document.querySelector('cosmoz-drawer-layout')!;
	closed = vi.fn(() => {
		drawer.removeAttribute('left-drawer-open');
		drawer.removeAttribute('right-drawer-open');
	});
	drawer.addEventListener('close', closed);
	await expect.poll(() => panel()?.offsetHeight).toBeGreaterThan(0);
	await frame();
});

afterEach(async () => {
	await commands.releasePointer();
	await commands.reducedMotion(false);
	document.body.innerHTML = '';
});

describe('downward drawer dismissal', () => {
	it('dismisses a short fast flick but returns a slow or held drag', async () => {
		await commands.dragHeader(grip(), 0, 65, { durationMs: 500 });
		expect(closed).not.toHaveBeenCalled();
		await expect.poll(() => panel().getAnimations().length).toBe(0);
		await commands.dragHeader(grip(), 0, 65, { release: false });
		await commands.releasePointer(150);
		expect(closed).not.toHaveBeenCalled();
		await expect.poll(() => panel().getAnimations().length).toBe(0);
		await commands.dragHeader(grip(), 0, 65);
		expect(closed).toHaveBeenCalledOnce();
	});

	it('fades the backdrop with the drag and restores it on cancellation', async () => {
		const backdrop =
			drawer.shadowRoot!.querySelector<HTMLElement>('.click-layer')!;
		await commands.dragHeader(grip(), 0, 100, { release: false });
		expect(parseFloat(getComputedStyle(backdrop).opacity)).toBeCloseTo(
			1 - 100 / panel().offsetHeight,
			2,
		);
		await commands.releasePointer(150);
		await expect.poll(() => getComputedStyle(backdrop).opacity).toBe('1');
		expect(closed).not.toHaveBeenCalled();
	});

	it('allows a consumer to cancel flick dismissal', async () => {
		drawer.removeEventListener('close', closed);
		drawer.addEventListener('close', (event) => event.preventDefault(), {
			once: true,
		});
		await commands.dragHeader(grip(), 0, 65);
		await expect.poll(() => panel().getAnimations().length).toBe(0);
		expect(drawer.hasAttribute('left-drawer-open')).toBe(true);
		expect(panel().style.translate).toBe('');
	});
	it('requires opt-in and releases an active drag when disabled', async () => {
		await commands.dragHeader(grip(), 0, 100, { release: false });
		drawer.removeAttribute('swipe-to-close');
		await frame();
		await commands.releasePointer();
		expect(panel().style.translate).toBe('');
		await commands.dragHeader(grip(), 0, 180);
		expect(closed).not.toHaveBeenCalled();
		drawer.setAttribute('swipe-to-close', 'down');
		await frame();
		await commands.dragHeader(grip(), 0, 180);
		expect(closed).toHaveBeenCalledOnce();
	});

	it.each(['left', 'right'])(
		'follows a captured pointer and closes the %s drawer',
		async (side) => {
			if (side === 'right') {
				drawer.removeAttribute('left-drawer-open');
				drawer.setAttribute('right-drawer-open', '');
				await expect
					.poll(() => panel(side).getBoundingClientRect().top)
					.toBeCloseTo(80, 0);
			}
			const start = panel(side).getBoundingClientRect().top;
			await commands.dragHeader(grip(side), 0, 180, { release: false });
			expect(panel(side).getBoundingClientRect().top).toBeCloseTo(
				start + 180,
				0,
			);
			expect(closed).not.toHaveBeenCalled();
			await commands.releasePointer();
			await expect.poll(() => closed.mock.calls.length).toBe(1);
			await expect.poll(() => panel(side).style.translate).toBe('');
		},
	);

	it('snaps back after a short drag and can be dragged again', async () => {
		await commands.dragHeader(grip(), 0, 40);
		await expect
			.poll(() => panel().getBoundingClientRect().top)
			.toBeCloseTo(80, 0);
		expect(closed).not.toHaveBeenCalled();
		await commands.dragHeader(grip(), 0, 180);
		expect(closed).toHaveBeenCalledOnce();
	});

	it.each([
		[90, 20],
		[0, -40],
	])('ignores horizontal/upward gestures (%s, %s)', async (dx, dy) => {
		await commands.dragHeader(grip(), dx, dy);
		expect(panel().style.translate).toBe('');
		expect(closed).not.toHaveBeenCalled();
	});

	it('does not capture header buttons or drags in the content', async () => {
		const button = drawer
			.querySelector('[slot="left"] test-sheet-header')!
			.shadowRoot!.querySelector('button')!;
		const clicked = vi.fn();
		button.addEventListener('click', clicked);
		await userEvent.click(button);
		expect(clicked).toHaveBeenCalledOnce();
		await commands.dragHeader('[slot="left"] .scroll', 0, 180);
		expect(closed).not.toHaveBeenCalled();
		expect(panel().style.translate).toBe('');
	});

	it.each(['pointercancel', 'lostpointercapture'])(
		'snaps back on %s',
		async (type) => {
			let pointerId = 0;
			drawer.addEventListener(
				'pointerdown',
				(event) => {
					pointerId = event.pointerId;
				},
				{ once: true },
			);
			await commands.dragHeader(grip(), 0, 100, { release: false });
			panel().dispatchEvent(
				new PointerEvent(type, { pointerId, bubbles: true, composed: true }),
			);
			await commands.releasePointer();
			await expect
				.poll(() => panel().getBoundingClientRect().top)
				.toBeCloseTo(80, 0);
			expect(closed).not.toHaveBeenCalled();
		},
	);

	it('resets on resize and does not dismiss in desktop side mode', async () => {
		await commands.dragHeader(grip(), 0, 100, { release: false });
		drawer.setAttribute('style', 'width: 350px');
		await expect.poll(() => panel().style.translate).toBe('');
		await commands.releasePointer();
		drawer.setAttribute('breakpoint', '0');
		await expect
			.poll(() =>
				getComputedStyle(panel()).getPropertyValue('--_drawer-mode').trim(),
			)
			.toBe('side');
		await commands.dragHeader(grip(), 0, 180);
		expect(closed).not.toHaveBeenCalled();
	});

	it('cleans up when closed or disconnected during a gesture', async () => {
		await commands.dragHeader(grip(), 0, 100, { release: false });
		drawer.removeAttribute('left-drawer-open');
		await commands.releasePointer();
		drawer.setAttribute('left-drawer-open', '');
		await expect
			.poll(() => panel().getBoundingClientRect().top)
			.toBeCloseTo(80, 0);
		await commands.dragHeader(grip(), 0, 100, { release: false });
		drawer.remove();
		await frame();
		expect(panel().style.translate).toBe('');
		expect(closed).not.toHaveBeenCalled();
	});

	it('respects reduced motion and can reopen after dismissal', async () => {
		await commands.reducedMotion(true);
		await commands.dragHeader(grip(), 0, 180);
		expect(closed).toHaveBeenCalledOnce();
		expect(panel().getAnimations()).toHaveLength(0);
		drawer.setAttribute('left-drawer-open', '');
		await expect
			.poll(() => panel().getBoundingClientRect().top)
			.toBeCloseTo(80, 0);
		await commands.dragHeader(grip(), 0, 180);
		expect(closed).toHaveBeenCalledTimes(2);
	});

	it.skipIf(server.browser !== 'chromium')(
		'handles native touch and leaves content scrolling native',
		async () => {
			const scroll = drawer.querySelector<HTMLElement>(
				'[slot="left"] .scroll',
			)!;
			await commands.dragHeader('[slot="left"] .scroll', 0, -150, {
				touch: true,
			});
			await expect.poll(() => scroll.scrollTop).toBeGreaterThan(20);
			expect(closed).not.toHaveBeenCalled();
			await commands.dragHeader(grip(), 0, 180, { touch: true });
			expect(closed).toHaveBeenCalledOnce();
		},
	);
});
