import { defineBrowserCommand } from '@vitest/browser-playwright';

export const gestureCommands = {
	dragHeader: defineBrowserCommand(
		async (
			{ page, iframe, context },
			selector: string,
			dx: number,
			dy: number,
			{
				release = true,
				touch = false,
			}: { release?: boolean; touch?: boolean } = {},
		) => {
			const box = await iframe.locator(selector).boundingBox();
			if (!box) throw new Error(`No visible drag target: ${selector}`);
			const width = await iframe
				.locator(selector)
				.evaluate((el) => el.getBoundingClientRect().width);
			const scale = box.width / width;
			const x = box.x + box.width / 2;
			const y = box.y + box.height / 2;
			if (touch) {
				const cdp = await context.newCDPSession(page);
				await cdp.send('Input.dispatchTouchEvent', {
					type: 'touchStart',
					touchPoints: [{ x, y }],
				});
				for (let step = 1; step <= 10; step++) {
					await cdp.send('Input.dispatchTouchEvent', {
						type: 'touchMove',
						touchPoints: [
							{
								x: x + (dx * scale * step) / 10,
								y: y + (dy * scale * step) / 10,
							},
						],
					});
				}
				await cdp.send('Input.dispatchTouchEvent', {
					type: 'touchEnd',
					touchPoints: [],
				});
				await cdp.detach();
				return;
			}
			await page.mouse.move(x, y);
			await page.mouse.down();
			await page.mouse.move(x + dx * scale, y + dy * scale, { steps: 10 });
			if (release) await page.mouse.up();
		},
	),
	releasePointer: defineBrowserCommand(async ({ page }) => {
		await page.mouse.up();
	}),
	reducedMotion: defineBrowserCommand(async ({ page }, reduce: boolean) => {
		await page.emulateMedia({
			reducedMotion: reduce ? 'reduce' : 'no-preference',
		});
	}),
};

declare module 'vitest/browser' {
	interface BrowserCommands {
		dragHeader(
			selector: string,
			dx: number,
			dy: number,
			options?: { release?: boolean; touch?: boolean },
		): Promise<void>;
		releasePointer(): Promise<void>;
		reducedMotion(reduce: boolean): Promise<void>;
	}
}
