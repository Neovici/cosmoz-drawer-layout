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

| Part   | Description                                                   |
| ------ | ------------------------------------------------------------- |
| `main` | The main content slot wrapper. Selectable via `::part(main)`. |

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

A companion panel element styled by its parent `cosmoz-drawer-layout`. In overlay mode, borders and border-radius are automatically removed for full-bleed drawer appearance.

### Slots

| Slot      | Description    |
| --------- | -------------- |
| (default) | Panel content. |

### CSS Custom Properties

| Property                 | Default             | Description     |
| ------------------------ | ------------------- | --------------- |
| `--drawer-margin`        | `0 5px 0 0`         | Panel margin.   |
| `--drawer-border-radius` | `16px`              | Panel radius.   |
| `--drawer-border-right`  | `1px solid #ebebeb` | Right border.   |
| `--drawer-border-left`   | `1px solid #ebebeb` | Left border.    |
| `--drawer-border-top`    | `1px solid #ebebeb` | Top border.     |
| `--drawer-border-bottom` | `1px solid #ebebeb` | Bottom border.  |
| `--drawer-overflow`      | `auto`              | Panel overflow. |

### Styling drawers

Override CSS custom properties to customize drawer appearance:

```css
cosmoz-drawer-layout {
	--cosmoz-drawer-layout-left-drawer-width: min(260px, 80cqw);
	--cosmoz-drawer-layout-gap: 0;
}

cosmoz-side-panel {
	--drawer-margin: 0;
	--drawer-border-radius: 0;
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
