const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));

export const swipeReleaseDuration = (remaining: number, velocity: number) =>
	velocity > 0.5 ? clamp(remaining / velocity, 120, 280) : 220;

/** Keep panel movement and both native and layout backdrops on the same release timing. */
export const swipeFeedback = (host: HTMLElement) => {
	const backdrop = host.shadowRoot!.querySelector<HTMLElement>('.click-layer')!;
	let panel: HTMLElement | undefined;
	let animation: Animation | undefined;
	const reset = () => {
		animation?.cancel();
		animation = undefined;
		if (panel) {
			panel.removeAttribute('data-swiping');
			for (const property of [
				'translate',
				'--_drawer-swipe-progress',
				'--cosmoz-drawer-layout-swipe-duration',
			]) {
				panel.style.removeProperty(property);
			}
		}
		panel = undefined;
		for (const property of ['opacity', 'transition', 'transition-duration']) {
			backdrop.style.removeProperty(property);
		}
	};
	const progress = (offset: number) => {
		const fraction = clamp(offset / panel!.offsetHeight, 0, 1);
		panel!.style.setProperty('--_drawer-swipe-progress', String(fraction));
		backdrop.style.opacity = String(1 - fraction);
	};
	return {
		get active() {
			return Boolean(panel);
		},
		begin(target: HTMLElement) {
			const offset =
				panel === target && animation
					? parseFloat(getComputedStyle(target).translate.split(' ')[1]) || 0
					: 0;
			reset();
			panel = target;
			panel.setAttribute('data-swiping', '');
			backdrop.style.transition = 'none';
			panel.style.translate = `0 ${offset}px`;
			progress(offset);
			return offset;
		},
		move(offset: number) {
			panel!.style.translate = `0 ${offset}px`;
			progress(offset);
		},
		finish(offset: number, dismissed = false, velocity = 0) {
			const target = panel!;
			const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
			const releaseDuration = dismissed
				? swipeReleaseDuration(target.offsetHeight - offset, velocity)
				: 180;
			const duration = reduced ? 0 : releaseDuration;
			target.style.setProperty(
				'--cosmoz-drawer-layout-swipe-duration',
				`${duration}ms`,
			);
			target.removeAttribute('data-swiping');
			backdrop.style.removeProperty('transition');
			backdrop.style.transitionDuration = `${duration}ms`;
			progress(dismissed ? target.offsetHeight : 0);
			target.style.removeProperty('translate');
			if (!offset || reduced) {
				reset();
				return;
			}
			const settling = target.animate(
				[{ translate: `0 ${offset}px` }, { translate: '0 0' }],
				{
					duration,
					easing: dismissed
						? 'cubic-bezier(.2, 0, .2, 1)'
						: 'cubic-bezier(.2, .8, .2, 1)',
				},
			);
			animation = settling;
			settling.onfinish = () => {
				if (animation === settling) reset();
			};
		},
		reset,
	};
};
