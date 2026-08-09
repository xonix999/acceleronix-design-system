# Acceleronix Design System

## Overview

Acceleronix is the end-to-end IoT partner trusted by global innovators to move faster with less complexity. From concept to global deployment, we handle design, connectivity, SIM/eSIM lifecycle, AI, cloud, and compliance so you launch faster, and scale smarter. This design system is extracted entirely from the company's own slide-template deck, **`Acceleronix_Style_Examples.pptx`** (provided as `uploads/DESIGN.md`, a structured extraction of that deck's fills, type runs, and layout — no other source was provided: no Figma link, no codebase, no separate logo/asset files). Treat `uploads/DESIGN.md` as the canonical source record; everything below derives from it.

The brand is a plain, confident corporate identity: white canvas, Arial in two weights only, near-black "ink" text, and a four-color violet→indigo→magenta→cyan rotation used to differentiate parallel items (timeline eras, numbered principles, pillar cards). See `uploads/DESIGN.md` for the full raw extraction including per-slide notes and a source-accuracy caveat on the brand's own printed color labels.

## Content Fundamentals

Evidence is limited to the deck's structural copy (there is no marketing/product prose in the source). Observed patterns:

- **Kicker labels are short, bold, and topical** — e.g. "Company Timeline," "Our Principles" — always purple, always tracked, sitting directly above the slide title.
- **Titles are short declarative phrases**, not full sentences (36pt bold).
- **Card copy is terse**: one bold headline, one muted supporting line. No paragraphs on cards.
- **The glossary table uses technical acronyms verbatim** (eSIM, eUICC, IMSI) — the brand doesn't spell out or soften technical terms.
- **No emoji anywhere in the source.**
- **Footer copy is a fixed, formal two-line pattern**: date (left), "Confidential · Under NDA" (right) — every slide, unchanged wording.
- Tone overall: plain, technical, confidential/internal-facing (NDA marking on every page) — not consumer-marketing voice.

## Visual Foundations

- **Colors**: Approved 10-swatch brand palette (white, blue, neon-blue, purple, neon-pink, midnight, green, orange, yellow, red) vs. a distinct *functional* set actually used in layouts — ink/ink-secondary/ink-mute/ink-faint text tones, a pale-lavender tint pair for tables, and the accent-violet/indigo/magenta/cyan rotation for color-coding parallel items. Full rules and hex values in `uploads/DESIGN.md` → Colors.
- **Type**: Arial only, weights 400 and 700 — no thin/light weight, no second typeface. One tracked role (eyebrow kicker, +0.7px). See `tokens/typography.css`.
- **Spacing**: 2/6/12/16/24/32/48px scale; ~20px card padding; 8px 16px tab padding.
- **Backgrounds**: flat white canvas is the default for content slides. **Two subtle full-bleed alternatives** exist (`uploads/Acceleronix_White_Bacground.pptx`) and can be used on any slide type, not just title slides: a faint purple line-mesh accent in the bottom-right corner, and a soft pastel blue/pink/purple gradient sweep — both nearly white, safe under dark text. See `guidelines/white-backgrounds.html` (plain white vs. both alternatives side by side), `slides/TitleSlideWhiteBgAlt.html` (line-mesh) and `slides/PillarSlideWhiteBgAlt.html` (gradient). **Cover/section slides are a distinct dark treatment** (`uploads/Acceleronix_Cover.pptx`): a near-black navy background image with a soft blue light streak and a purple diagonal band, white bold title, light-lavender (`#AFA9EC`) kicker and footer. See `slides/CoverSlide.html` and `assets/cover-background.png`.
- **Elevation**: one shadow only — `0 3px 9px rgba(58,46,90,0.18)` under white cards. No inner shadows, no glows.
- **Corners**: 4/8/12/18px scale plus a pill radius for circles/badges.
- **Cards**: white, rounded-md, single soft violet-tinted drop shadow. The signature "flag tab" card (timeline/principle cards) layers a rounded-top / square-bottom colored header band on top of the white card body — see `guidelines/flag-tab.html` and `components/cards/FlagTabCard.jsx`.
- **Hover/press states, animation/motion, blur/transparency**: not observable — the source is a static slide deck with no interaction states. Hover/press treatments on the general-purpose UI additions (Button, Switch, etc.) below use conservative, brand-consistent defaults (opacity/color shift) since the deck defines none.
- **Imagery color vibe**: not observable — no photography in the source deck.

## Iconography

No icon font, sprite sheet, or usable SVG/PNG icon set was successfully extracted from the source material — an attempted extraction from `Icons 2026-08-09.pptx` was removed (the source stores each icon as overlapping PNG fragments, and automated reconstruction wasn't reliable enough to keep). `components/core/IconCircle.jsx` demos with Lucide CDN icons (a stand-in, documented in its prompt.md) — swap in the brand's real icons if a clean set becomes available.

**Flags**: `assets/flags/` holds 212 country/region flag icons (extracted from `uploads/Flags.pptx`, each named by a slugified country label — see `assets/flags/manifest.json`). Fitting for a global-coverage company: use them in country-selector UI, coverage maps, or "supported markets" lists. See `guidelines/flags.html` for a sample.

## Logo

Extracted directly from `uploads/Acceleronix_Logo.pptx` — the mark and wordmark are authored there as vector outlines (PowerPoint freeform shapes, one subpath per letter/bar), not raster images, so the SVGs in `assets/` were built by converting those exact path coordinates, not redrawn from description.

- `assets/logo-mark.svg` — the ascending diagonal-bar triangle mark alone, flat `#96338F` (matches the brand's Purple swatch).
- `assets/logo-wordmark.svg` — "Δcceleronix" wordmark alone, flat `#42248A` (a logo-specific indigo, distinct from the functional `accent-indigo` token `#534AB7`), with the accent dot over the "i" in `#96338F`.
- `assets/logo-stacked.svg` — mark above wordmark (primary lockup, from the source file's own "Logo#2" slide).
- `assets/logo-horizontal.svg` — mark beside wordmark (alternate lockup, "Logo#3").

**Correction to `uploads/DESIGN.md`**: that extraction described the mark as a "violet-to-indigo gradient." The source file's actual shape fill is flat `#96338F`, no gradient — see `guidelines/logo-*.html` for the real render.

## Fonts

Arial is a system font — no webfont files were needed or embedded. Bilingual (EN/JP) slides in the source deck fall back to the system default CJK font, which this system does not attempt to pin.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadow.css`.
- `guidelines/` — 15 foundation specimen cards (Colors ×4, Type ×3, Spacing ×3, Brand ×5) shown in the Design System tab.
- `assets/` — real logo SVGs (mark, wordmark, two lockups), cover background photography (2 variants), social/contact icons (web, LinkedIn, email), and `flags/` (212 country/region flag icons, named by slug with a `manifest.json` label index).
- `components/core/` — `EyebrowKicker`, `PageIndexChip`, `FooterCaptionBar`, `IconCircle`, `NumberedBadge` (brand-specific page furniture).
- `components/cards/` — `PillarCard`, `FlagTabCard` (brand-specific card constructions).
- `components/data/` — `DataTable` (glossary/reference table).
- `components/forms/` — `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch` — **intentional additions**, not in the source deck; added so the brand can support software prototyping.
- `components/feedback/` — `Tag`, `Tooltip`, `Toast`, `Dialog` — **intentional additions**.
- `components/navigation/` — `Tabs` — **intentional addition**.
- `slides/` — 9 full 1280×720 sample slides: Cover (dark, from `Acceleronix_Cover.pptx`), Cover Alt (purple streak, from `Acceleronix_Cover_Final Slide.pptx`), Title, Timeline (flag-tab cards), Pillar row (3-up), Numbered principles (2×2), Reference table, Final/closing (dark, contact row), Final/closing Alt (light, from `Acceleronix_Final Slide.pptx`).
- `SKILL.md` — portable skill definition for use in Claude Code.

## Intentional Additions

Button, Input, Select, Checkbox, Radio, Switch, Tag, Tooltip, Toast, Dialog, and Tabs have no counterpart in the source deck (which defines slide furniture, not app UI). They were added as a minimal, brand-consistent primitive set — Arial type, ink/accent-violet coloring, the same radius and shadow scale — so this system can also back interactive prototypes.

## Caveats & Ask

- Source material is a text extraction of one slide deck plus one logo-lockup deck. No codebase, no Figma file, no icon set, and no product screens were provided.
- The brand's own "Colors" slide has internally inconsistent RGB/HEX labels (documented in `uploads/DESIGN.md`); the hex values used throughout this system were read from swatch fills, not the printed labels.
- **Please attach**: (1) the brand's actual icon set if one exists (icons are currently substituted from Lucide), (2) any product UI (app/website) if you'd like a matching UI kit — this system currently has no software product to recreate, only the slide-deck identity and logo.
