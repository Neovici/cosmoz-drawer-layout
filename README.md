# @neovici/cosmoz-drawer-layout

A drawer layout web component with responsive side/overlay modes.

## Installation

```bash
npm install @neovici/cosmoz-drawer-layout
```

## Usage

### Import

```js
// Both components from the main entry point
import '@neovici/cosmoz-drawer-layout';

// Or import individually
import '@neovici/cosmoz-drawer-layout/cosmoz-drawer-layout';
import '@neovici/cosmoz-drawer-layout/cosmoz-side-panel';
```

### Basic

```html
<cosmoz-drawer-layout breakpoint="1024">
	<cosmoz-side-panel slot="left">
		<p>Left drawer content</p>
	</cosmoz-side-panel>
	<p>Main content</p>
	<cosmoz-side-panel slot="right">
		<p>Right drawer content</p>
	</cosmoz-side-panel>
</cosmoz-drawer-layout>
```

## cosmoz-drawer-layout

A responsive layout with left and right drawer slots that switch between **side mode** (drawers always visible) and **overlay mode** (drawers slide in/out with backdrop).

### Attributes

| Attribute           | Type     | Default | Description                                                          |
| ------------------- | -------- | ------- | -------------------------------------------------------------------- |
| `breakpoint`        | `string` | `1460`  | Viewport width (px) for side/overlay switch. `0` = always side mode. |
| `left-drawer-open`  | boolean  | —       | Opens the left drawer (overlay mode).                                |
| `right-drawer-open` | boolean  | —       | Opens the right drawer (overlay mode).                               |

### Events

| Event   | Detail | Description                                                                                                |
| ------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `close` | —      | Fired when the backdrop is clicked in overlay mode. Set `left-drawer-open`/`right-drawer-open` to `false`. |

### Slots

| Slot      | Description           |
| --------- | --------------------- |
| `left`    | Left drawer content.  |
| (default) | Main content area.    |
| `right`   | Right drawer content. |

### CSS Parts

| Part           | Description        |
| -------------- | ------------------ |
| `main`         | Main content slot. |
| `left-drawer`  | Left drawer slot.  |
| `right-drawer` | Right drawer slot. |
| `backdrop`     | Overlay backdrop.  |

### CSS Custom Properties

| Property                                    | Default              | Description                                       |
| ------------------------------------------- | -------------------- | ------------------------------------------------- |
| `--cosmoz-drawer-layout-left-drawer-width`  | `min(400px, 100cqw)` | Width of the left drawer.                         |
| `--cosmoz-drawer-layout-right-drawer-width` | `min(400px, 100cqw)` | Width of the right drawer.                        |
| `--cosmoz-drawer-layout-backdrop-color`     | `rgba(0, 0, 0, 0.3)` | Backdrop color in overlay mode.                   |
| `--cosmoz-drawer-layout-gap`                | `var(--cz-spacing)`  | Gap between drawer and main content in side mode. |

### Side mode vs overlay mode

- **Side mode** (viewport ≥ breakpoint): Drawers are positioned inline, always visible, with no backdrop.
- **Overlay mode** (viewport < breakpoint): Drawers slide in as fixed overlays with a backdrop. Clicking the backdrop dispatches a `close` event.
- **`breakpoint="0"`**: Always side mode, regardless of viewport size.

## cosmoz-side-panel

A companion panel element for use inside `cosmoz-drawer-layout` slots. By default it renders as a plain container with a white background. Add the `bordered` attribute for a card-like appearance with borders, border-radius, and margin.

In overlay mode (inside `cosmoz-drawer-layout`), borders and border-radius are automatically removed from `bordered` panels for a full-bleed drawer appearance.

### Attributes

| Attribute  | Type    | Description                                                                                                       |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `bordered` | boolean | Adds card-like borders, border-radius, and margin. In overlay mode, borders and radius are automatically removed. |

### Slots

| Slot      | Description    |
| --------- | -------------- |
| (default) | Panel content. |

### CSS Parts

| Part    | Description                                                                                                                                                                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `panel` | The panel wrapper. **Warning:** Setting border or border-radius via `::part(panel)` will suppress automatic overlay-mode zeroing. Use the `bordered` attribute with `--cosmoz-side-panel-*` custom properties for borders that zero automatically. |

### CSS Custom Properties

These properties only take effect when the `bordered` attribute is set.

| Property                            | Default             | Description    |
| ----------------------------------- | ------------------- | -------------- |
| `--cosmoz-side-panel-border-radius` | `16px`              | Panel radius.  |
| `--cosmoz-side-panel-border-right`  | `1px solid #ebebeb` | Right border.  |
| `--cosmoz-side-panel-border-left`   | `1px solid #ebebeb` | Left border.   |
| `--cosmoz-side-panel-border-top`    | `1px solid #ebebeb` | Top border.    |
| `--cosmoz-side-panel-border-bottom` | `1px solid #ebebeb` | Bottom border. |
| `--cosmoz-side-panel-margin`        | `0 5px 0 0`         | Panel margin.  |

### Styling drawers

For non-border customization (background, overflow, etc.), use `::part(panel)`:

```css
cosmoz-side-panel::part(panel) {
	background: var(--cz-color-bg-secondary, #f9fafb);
	overflow: hidden;
}
```

For side-specific divider borders, use `::part(panel)` on the slotted panel. These borders won't auto-zero in overlay mode — which is typically fine since a single divider line looks acceptable in both modes:

```css
cosmoz-side-panel[slot='left']::part(panel) {
	border-right: 1px solid var(--cz-color-border-secondary, #e9eaeb);
}
```

For card-like panels with borders that auto-zero in overlay mode, use the `bordered` attribute with CSS custom properties:

```css
cosmoz-side-panel[bordered] {
	--cosmoz-side-panel-border-radius: 8px;
	--cosmoz-side-panel-margin: 0;
	--cosmoz-side-panel-border-top: 0;
	--cosmoz-side-panel-border-bottom: 0;
}
```

## Development

```bash
npm install
npm run storybook:start   # Start Storybook on port 8000
npm run build             # Build to dist/
npm test                  # Run tests
npm run lint              # Type-check and lint
```

## License

Apache-2.0
