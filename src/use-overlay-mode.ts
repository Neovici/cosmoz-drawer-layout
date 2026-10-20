import { useEffect, useState } from '@pionjs/pion';

export const useOverlayMode = (
	host: HTMLElement,
	breakpoint: number,
	enabled: boolean,
) => {
	const [overlay, setOverlay] = useState(false);
	useEffect(() => {
		if (!enabled) return;
		const update = () =>
			setOverlay(
				getComputedStyle(host.shadowRoot!.querySelector('.wrapper')!)
					.getPropertyValue('--_drawer-mode')
					.trim() === 'overlay',
			);
		const observer = new ResizeObserver(update);
		observer.observe(host);
		update();
		return () => observer.disconnect();
	}, [host, breakpoint, enabled]);
	return overlay;
};
