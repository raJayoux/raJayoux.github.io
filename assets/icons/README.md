# Icons — GTA blips (locked 2026-09-30)

Source of truth: Figma `cv-website-re-design` → page "Homepage · Candidate · GTA-mimic" → "Icons · GTA blips · LOCKED".

- `svg/*.svg` — 20 glyphs, 24px grid, `currentColor` (colour via CSS `color`), filled silhouettes + 2.5px round strokes.
- `sprite.svg` — same glyphs as `<symbol id="i-NAME">`; use `<svg class="icon" aria-hidden="true"><use href="/assets/icons/sprite.svg#i-work"/></svg>`.
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180), `icon-512.png` — "pj" monogram (Pricedown outlined artwork, free desktop EULA: fixed artwork OK, no web-font embedding) on player colour #173DD8 → #2B1232.
- GitHub / LinkedIn marks: Simple Icons (CC0), used only to link to jie's own profiles.

```html
<link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/icons/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png">
```
