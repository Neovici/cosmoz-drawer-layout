---
'@neovici/cosmoz-drawer-layout': patch
---

Keep the desktop workspace clickable when a side drawer is open. The hidden-state filter no longer increases the backdrop selector's specificity above the desktop rule. Native modal backdrops remain excluded from the layout click layer.
