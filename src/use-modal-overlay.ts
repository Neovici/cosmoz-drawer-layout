import { useEffect, useRef } from '@pionjs/pion';

const focusedElement = (document: Document) => {
	let active = document.activeElement;
	while (active?.shadowRoot?.activeElement) {
		active = active.shadowRoot.activeElement;
	}
	return active instanceof HTMLElement ? active : undefined;
};

const containsFocus = (panel: HTMLElement, active?: HTMLElement) => {
	let node: Node | null = active ?? null;
	while (node) {
		if (node === panel) return true;
		if (node instanceof Element && node.assignedSlot) node = node.assignedSlot;
		else if (node instanceof ShadowRoot) node = node.host;
		else node = node.parentNode;
	}
	return false;
};

const openAttribute = (panel: HTMLElement) =>
	panel.classList.contains('side-left')
		? 'left-drawer-open'
		: 'right-drawer-open';

const outside = (panel: HTMLElement, event: MouseEvent) => {
	const rect = panel.getBoundingClientRect();
	return (
		event.clientX < rect.left ||
		event.clientX > rect.right ||
		event.clientY < rect.top ||
		event.clientY > rect.bottom
	);
};

/** Native modal dialogs own the focus loop, background inertness and return focus. */
export const useModalOverlay = (
	host: HTMLElement,
	enabled: boolean,
	leftOpen?: boolean,
	rightOpen?: boolean,
) => {
	const focus = useRef<{
		pointer?: HTMLElement;
		pressedAt: number;
		openers: WeakMap<HTMLDialogElement, HTMLElement>;
	}>({
		pressedAt: 0,
		openers: new WeakMap<HTMLDialogElement, HTMLElement>(),
	}).current!;
	useEffect(() => {
		if (!enabled) return;
		const panels = [
			...host.shadowRoot!.querySelectorAll<HTMLDialogElement>('dialog.side'),
		];
		const events = new AbortController();
		host.ownerDocument.addEventListener(
			'pointerdown',
			(event) => {
				focus.pointer = event
					.composedPath()
					.find(
						(node): node is HTMLElement =>
							node instanceof HTMLElement && node.tabIndex >= 0,
					);
				focus.pressedAt = performance.now();
			},
			{ capture: true, signal: events.signal },
		);
		const requestClose = () => host.dispatchEvent(new CustomEvent('close'));
		for (const panel of panels) {
			let pressedBackdrop = false;
			panel.addEventListener(
				'cancel',
				(event) => {
					event.preventDefault();
					requestClose();
				},
				{ signal: events.signal },
			);
			panel.addEventListener(
				'close',
				() => {
					const opener = focus.openers.get(panel);
					const active = focusedElement(host.ownerDocument);
					// Safari can leave a pointer-activated trigger unfocused before showModal().
					if (
						opener?.isConnected &&
						(active === host.ownerDocument.body || containsFocus(panel, active))
					) {
						opener.focus({ preventScroll: true });
					}
					focus.openers.delete(panel);
					if (host.hasAttribute(openAttribute(panel))) requestClose();
				},
				{ signal: events.signal },
			);
			if (!('closedBy' in HTMLDialogElement.prototype)) {
				panel.addEventListener(
					'pointerdown',
					(event) => {
						pressedBackdrop = event.target === panel && outside(panel, event);
					},
					{ signal: events.signal },
				);
				panel.addEventListener(
					'click',
					(event) => {
						if (
							pressedBackdrop &&
							event.target === panel &&
							outside(panel, event)
						) {
							requestClose();
						}
						pressedBackdrop = false;
					},
					{ signal: events.signal },
				);
			}
		}
		return () => {
			events.abort();
			for (const panel of panels.reverse()) if (panel.open) panel.close();
		};
	}, [host, enabled, focus]);

	useEffect(() => {
		if (!enabled) return;
		const panels = [
			...host.shadowRoot!.querySelectorAll<HTMLDialogElement>('dialog.side'),
		];
		for (const panel of [...panels].reverse()) {
			if (panel.open && !host.hasAttribute(openAttribute(panel))) panel.close();
		}
		for (const panel of panels) {
			if (!panel.open && host.hasAttribute(openAttribute(panel))) {
				const active = focusedElement(host.ownerDocument);
				const recentPointer =
					performance.now() - focus.pressedAt < 500 ? focus.pointer : undefined;
				const opener = recentPointer ?? active;
				if (opener) focus.openers.set(panel, opener);
				panel.showModal();
			}
		}
	}, [host, enabled, leftOpen, rightOpen, focus]);
};
