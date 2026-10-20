import { useEffect } from '@pionjs/pion';
import { swipeFeedback } from './swipe-feedback';

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
	lastY: number;
	lastTime: number;
	lastMovingTime: number;
	velocity: number;
};

/** Downward dismissal from an explicitly marked header, including slotted shadow trees. */
export const swipeToClose = (host: HTMLElement) => {
	const root = host.shadowRoot!;
	const events = new AbortController();
	const feedback = swipeFeedback(host);
	let gesture: Gesture | undefined;

	const isOpen = (panel: HTMLElement) =>
		host.hasAttribute(
			panel.classList.contains('side-left')
				? 'left-drawer-open'
				: 'right-drawer-open',
		);
	const overlay = (panel: HTMLElement) =>
		getComputedStyle(panel).getPropertyValue('--_drawer-mode').trim() ===
		'overlay';

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
		if (current) feedback.finish(current.offset);
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
		const offset = feedback.begin(panel);
		gesture = {
			panel,
			pointerId: event.pointerId,
			x: event.clientX,
			y: event.clientY - offset,
			offset,
			lastY: event.clientY,
			lastTime: event.timeStamp,
			lastMovingTime: event.timeStamp,
			velocity: 0,
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
		const displacement = event.clientY - gesture.lastY;
		if (Math.abs(displacement) >= 1) {
			gesture.velocity =
				displacement / Math.max(8, event.timeStamp - gesture.lastTime);
			gesture.lastMovingTime = event.timeStamp;
		}
		gesture.lastTime = event.timeStamp;
		gesture.lastY = event.clientY;
		feedback.move(gesture.offset);
	};
	const up = (event: PointerEvent) => {
		if (!gesture || event.pointerId !== gesture.pointerId) return;
		move(event);
		if (!gesture) return;
		const current = release()!;
		const velocity =
			event.timeStamp - current.lastMovingTime <= 80 ? current.velocity : 0;
		const threshold = Math.min(
			160,
			Math.max(80, current.panel.offsetHeight / 4),
		);
		if (
			(current.offset >= threshold ||
				(current.offset >= 48 && velocity >= 0.5)) &&
			isOpen(current.panel) &&
			overlay(current.panel)
		) {
			const accepted = host.dispatchEvent(
				new CustomEvent('close', { cancelable: true }),
			);
			feedback.finish(current.offset, accepted, velocity);
			return;
		}
		feedback.finish(current.offset);
	};
	const interrupted = (event: PointerEvent) => {
		if (event.pointerId === gesture?.pointerId) cancel();
	};
	const reset = () => {
		release();
		feedback.reset();
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
		if (gesture || feedback.active) reset();
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
