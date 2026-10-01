# Pengyu Jie — portfolio

Software Engineer portfolio in a GTA-loading-screen style. Static HTML/CSS/JS, no build step, no framework,
no animation library.

**Live:** https://pengyujie.pages.dev (primary, Cloudflare Pages) · mirror https://jaygarland.github.io
(GitHub Pages, this repo's `main`). The old https://rajayoux.github.io only shows a "moved" notice.

## Run locally

```sh
python -m http.server 8137      # from the repo root → http://localhost:8137/
```

## Deploy

Both hosts serve the repo root of `main`.

```sh
git push jaygarland main        # GitHub Pages mirror (JayGarland/JayGarland.github.io) — rebuilds itself
# Cloudflare Pages is a direct upload (not git-connected yet): export the tracked tree, then deploy
git archive main | tar -x -C ../cf-site
npx wrangler pages deploy ../cf-site --project-name pengyujie --branch main
```

`_headers` sets Cloudflare caching (art 7 days, CSS/JS 1 hour) — it is ignored by GitHub Pages (Jekyll skips
`_` files). Because CSS/JS cache for an hour, verify a fresh deploy with a hard refresh or private window.

## Structure

| Path | What |
|---|---|
| `index.html` | the whole page: hero (loading card + break-out subject + story panel + nav), collage tiles, footer, dialogs |
| `assets/css/gta/tokens.css` | design tokens exported from the Figma variables — the single source for colour, space, type, motion |
| `assets/css/gta/components.css` | GTA UI components: Button·Instructional, Menu Bar Item, Selector, Plate, Info Panel, Help Text, Menu Row, Pause Tab, Notification, Device |
| `assets/css/gta/site.css` | layout: desktop = the 1440 × 2240 Figma frame at its own px, scaled as a whole with `zoom` (1024–1440); mobile (< 1024) = single fluid column of angled tiles |
| `assets/js/gta/i18n.js` | EN / FR / ZH dictionary (legacy keys kept; redesign keys appended) |
| `assets/js/gta/site.js` | language, theme, scaling, sticky nav, hero cycle (pause, Scene B loading), dialogs, iFruit menu, D/C/E shortcuts, scroll-spy |
| `assets/img/gta/` | exported art (AVIF + WebP, full + `-800` variants; `hero-L0-sky-m` is a phone crop) |
| `_headers` | Cloudflare response headers |
| legacy files (`assets/css/*.css`, `assets/js/portfolio.js`, …) | the pre-2026-10 site; not loaded by `index.html`, kept so old asset URLs still resolve |

## How the hero cycle works (read before touching motion)

- **Scene A** loops alone (7 s: 6 s linear move, 0.5 s dip to black, 0.5 s back). **Scene B** art is fetched
  after `load` (`data-src`/`data-srcset`), then `site.js` adds `.cycle-ab` → a 14 s A→B cycle. The first 6.5 s
  of both cycles are identical, so the switch happens at the same moment in time (B follows the first A).
- Scenes swap only at the frame where the dip is fully black (46.43 % / 96.43 % of 14 s). The story panel,
  logotype and nav never move or fade.
- Desktop keyframes: `cycle-*` / `cycle2-*`; mobile poster: `m-*` / `m2-*`. They share some names, so crossing
  1024 px would desync layers — `site.js` restarts every layer together on a breakpoint change
  (`.cycle-restart`). Keep that if you add layers.
- Pause control (WCAG 2.2.2) on both layouts; `prefers-reduced-motion: reduce` = static Scene A, Scene B never
  downloads.
- **Adding Scene C:** art as background + one cutout subject (style rules live in the private design repo);
  export AVIF/WebP (+ `-800`); add markup like `.hero-scene-b` / `.hero-breakout-b`; extend the cycle to 21 s
  (all percentages change — recompute against 7 s per scene); keep the B-loading pattern.

## Conventions

- Figma is the spec; values come from tokens, never hard-coded colours. Components keep their own spacing.
- Desktop geometry is written in the 1440 frame's px — don't convert to %; the whole stage is zoomed.
- Every visible string has an i18n key in all three languages; check with the key-coverage snippet below.
- Only exported, publishable files belong in this public repo — never source art, reference photos or notes.

## QA (what "done" was measured against)

- Screenshots vs Figma at 1440 Night/Day and 390 mobile; no horizontal overflow from 320 to 1920 px.
- axe: 0 violations (desktop, mobile, both dialogs, ZH). Keyboard: every control reachable with a visible ring.
- Lighthouse (gzip host): desktop 97 / 100 / 100 / 100; mobile ≈ 83 / 100 / 100 / 100 (lab LCP ≈ 4 s on
  simulated slow 4G — the known gap vs the 2.5 s target).

```sh
# i18n key coverage
node -e "const fs=require('fs');const I=new Function(fs.readFileSync('assets/js/gta/i18n.js','utf8')+';return I18N')();const k=[...new Set([...fs.readFileSync('index.html','utf8').matchAll(/data-i18n(?:-alt|-label|-title)?=\"([^\"]+)\"/g)].map(m=>m[1]))];for(const l of ['en','fr','zh'])console.log(l,k.filter(x=>I[l][x]==null))"
```
