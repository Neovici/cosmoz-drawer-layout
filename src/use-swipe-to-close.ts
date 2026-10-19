import { useEffect } from '@pionjs/pion';

const controls = [
	'a',
	'button',
	'input',
	'select',
	'textarea',
	'summary',
	'[contenteditable]:not([contenteditable="false"])',
	'[role="button"]',
	'[tabindex]:not([tabindex="-1"])',
	'cosmoz-button',
].join(', ');

type Gesture = {
	panel: HTMLElement;
	pointerId: number;
	x: number;
	y: number;
	offset: number;
};

/** Downward dismissal from an explicitly marked header, including slotted shadow trees. */
export const swipeToClose = (host: HTMLElement) => {
	const root = host.shadowRoot!;
	const events = new AbortController();
	let gesture: Gesture | undefined;
	let animation: Animation | undefined;

	const isOpen = (panel: HTMLElement) =>
		host.hasAttribute(
			panel.classList.contains('side-left')
				? 'left-drawer-open'
				: 'right-drawer-open',
		);
	const overlay = (panel: HTMLElement) =>
		getComputedStyle(panel).getPropertyValue('--_drawer-mode').trim() ===
		'overlay';

	const settle = (panel: HTMLElement, offset: number) => {
		panel.style.removeProperty('translate');
		if (!offset || matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}
		// translate composes with the consumer's open/close transform transition.
		const settling = panel.animate(
			[{ translate: `0 ${offset}px` }, { translate: '0 0' }],
			{ duration: 180, easing: 'cubic-bezier(.2, .8, .2, 1)' },
		);
		animation = settling;
		settling.onfinish = () => {
			if (animation === settling) animation = undefined;
		};
	};

	const release = () => {
		const current = gesture;
		gesture = undefined;
		if (current?.panel.hasPointerCapture(current.pointerId)) {
			current.panel.releasePointerCapture(current.pointerId);
		}
		return current;
	};
	const cancel = () => {
		const current = release();
		if (current) settle(current.panel, current.offset);
	};
	const down = (event: PointerEvent) => {
		if (!event.isPrimary || event.button !== 0 || gesture) return;
		const path = event.composedPath();
		const handleIndex = path.findIndex(
			(node) =>
				node instanceof Element && node.hasAttribute('data-drawer-drag-handle'),
		);
		if (
			handleIndex < 0 ||
			path
				.slice(0, handleIndex + 1)
				.some((node) => node instanceof Element && node.matches(controls))
		) {
			return;
		}
		const panel = path.find(
			(node): node is HTMLElement =>
				node instanceof HTMLElement &&
				node.getRootNode() === root &&
				node.classList.contains('side'),
		);
		if (!panel || !isOpen(panel) || !overlay(panel)) return;
		const offset = animation
			? parseFloat(getComputedStyle(panel).translate.split(' ')[1]) || 0
			: 0;
		animation?.cancel();
		animation = undefined;
		panel.style.translate = `0 ${offset}px`;
		gesture = {
			panel,
			pointerId: event.pointerId,
			x: event.clientX,
			y: event.clientY - offset,
			offset,
		};
		panel.setPointerCapture(event.pointerId);
	};
	const move = (event: PointerEvent) => {
		if (!gesture || event.pointerId !== gesture.pointerId) return;
		const dy = event.clientY - gesture.y;
		const dx = Math.abs(event.clientX - gesture.x);
		if (!gesture.offset && Math.max(Math.abs(dy), dx) < 8) return;
		if (!gesture.offset && (dy < 0 || dx > dy)) {
			cancel();
			return;
		}
		gesture.offset = Math.max(0, Math.min(dy, gesture.panel.offsetHeight));
		gesture.panel.style.translate = `0 ${gesture.offset}px`;
	};
	const up = (event: PointerEvent) => {
		if (!gesture || event.pointerId !== gesture.pointerId) return;
		const current = release()!;
		settle(current.panel, current.offset);
		const threshold = Math.min(
			160,
			Math.max(80, current.panel.offsetHeight / 4),
		);
		if (
			current.offset >= threshold &&
			isOpen(current.panel) &&
			overlay(current.panel)
		) {
			host.dispatchEvent(new CustomEvent('close'));
		}
	};
	const interrupted = (event: PointerEvent) => {
		if (event.pointerId === gesture?.pointerId) cancel();
	};
	const reset = () => {
		const current = release();
		current?.panel.style.removeProperty('translate');
		animation?.cancel();
		animation = undefined;
	};
	const observer = new MutationObserver((records) => {
		if (gesture && !isOpen(gesture.panel)) cancel();
		if (
			records.some(
				(record) =>
					record.attributeName === 'breakpoint' ||
					host.hasAttribute(record.attributeName!),
			)
		) {
			reset();
		}
	});
	observer.observe(host, {
		attributes: true,
		attributeFilter: ['left-drawer-open', 'right-drawer-open', 'breakpoint'],
	});
	const resize = new ResizeObserver(() => {
		if (gesture || animation) reset();
	});
	resize.observe(host);
	const options = { signal: events.signal };
	root.addEventListener('pointerdown', down as EventListener, options);
	root.addEventListener('pointermove', move as EventListener, options);
	root.addEventListener('pointerup', up as EventListener, options);
	root.addEventListener('pointercancel', interrupted as EventListener, options);
	root.addEventListener(
		'lostpointercapture',
		interrupted as EventListener,
		options,
	);
	window.addEventListener('blur', cancel, options);
	return () => {
		events.abort();
		observer.disconnect();
		resize.disconnect();
		reset();
	};
};

export const useSwipeToClose = (host: HTMLElement, direction?: string) => {
	useEffect(() => {
		if (direction === 'down') return swipeToClose(host);
	}, [host, direction]);
};
