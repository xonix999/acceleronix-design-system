---
version: 0.2
name: Acceleronix
description: Acceleronix's actual brand system, extracted from the company's slide-template deck (Acceleronix_Style_Examples.pptx) — a clean, corporate B2B identity for an IoT/eSIM connectivity company. It is built entirely on Arial (regular/bold only, no thin weights), a near-black "midnight ink" for body copy, and a rotating purple → indigo → magenta → cyan accent system used to differentiate parallel items (timeline eras, numbered principles, pillar cards). The signature mark is an ascending-bar triangle logotype paired with the wordmark "Δcceleronix." Cards are white with soft violet-tinted drop shadows and a color-block "flag tab" header; data tables run on a pale-lavender tint system. This replaces v0.1, which described an unrelated fintech "gradient mesh / Inter thin-weight" system that does not appear anywhere in the source deck.

colors:
  white: "#FFFFFF"
  blue: "#214099"
  neon-blue: "#009FE3"
  purple: "#96338F"
  neon-pink: "#E5007D"
  midnight: "#101124"
  green: "#00B050"
  orange: "#FF9F00"
  yellow: "#FFFB00"
  red: "#FF0000"
  ink: "#120E26"
  ink-secondary: "#3A2E6A"
  ink-mute: "#6B6688"
  ink-faint: "#B0A8C8"
  surface: "#FFFFFF"
  surface-tint: "#F0EDF8"
  surface-tint-strong: "#DDD6F0"
  divider: "#CECBF6"
  shadow-violet: "#3A2E5A"
  accent-violet: "#7030A0"
  accent-indigo: "#534AB7"
  accent-magenta: "#A33A99"
  accent-cyan: "#00AEEF"

typography:
  display-title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  card-heading:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  label-pill:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  eyebrow-kicker:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.7px
  table-header:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  table-term:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-muted:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  table-body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  page-index:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 6px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px

components:
  card-pillar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.card-heading}"
    rounded: "{rounded.md}"
    padding: 20px
  card-header-tab:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.white}"
    typography: "{typography.label-pill}"
    rounded: "{rounded.lg}"
    padding: 8px 16px
  badge-numbered-circle:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.white}"
    typography: "{typography.label-pill}"
    rounded: "{rounded.pill}"
    padding: 6px
  icon-circle:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: 12px
  eyebrow-kicker-label:
    backgroundColor: "transparent"
    textColor: "{colors.purple}"
    typography: "{typography.eyebrow-kicker}"
    padding: 0px
  table-header-row:
    backgroundColor: "{colors.ink-secondary}"
    textColor: "{colors.white}"
    typography: "{typography.table-header}"
    rounded: "{rounded.xs}"
    padding: 8px 12px
  table-row-tint:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.table-body}"
    padding: 8px 12px
  table-row-strong:
    backgroundColor: "{colors.surface-tint-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.table-body}"
    padding: 8px 12px
  page-index-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-faint}"
    typography: "{typography.page-index}"
    padding: 0px
  footer-caption-bar:
    backgroundColor: "transparent"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    padding: 0px
  timeline-connector:
    backgroundColor: "{colors.divider}"
    height: 2px
---

## Overview

Acceleronix's real deck system is a plain, confident corporate identity built for a B2B IoT/connectivity audience (the source deck covers eSIM/eUICC terminology and automotive-partnership case studies) — not the fintech "gradient mesh" aesthetic that the previous version of this document described. Every slide runs on a white canvas, Arial in exactly two weights (regular and bold — no thin/light styles appear anywhere in the file), and a near-black "midnight ink" (`{colors.ink}` — `#120E26`) for headlines and body copy. Structure is repetitive and disciplined: a small bold kicker label top-left, a large 36pt bold title beneath it, a faint page-index number top-right, and a two-line footer (date, left; "Confidential · Under NDA," right) in muted violet-gray.

Color is used functionally, not decoratively. The ten swatches on the brand's own "Colors" slides (`{colors.white}`, `{colors.blue}`, `{colors.neon-blue}`, `{colors.purple}`, `{colors.neon-pink}`, `{colors.midnight}`, `{colors.green}`, `{colors.orange}`, `{colors.yellow}`, `{colors.red}`) form the approved palette, but the working slides mostly draw from a second, unlabeled set of violet/indigo/magenta/cyan tints (`{colors.accent-violet}`, `{colors.accent-indigo}`, `{colors.accent-magenta}`, `{colors.accent-cyan}`) to color-code parallel items — the four eras of a timeline, four numbered principles, three pillar cards — one accent per item, cycling in the same order every time.

**Key Characteristics:**
- Arial-only type system in two weights (400 / 700) — no display serif, no thin weights, no letter-spacing tricks except a light +0.7px track on the small bold kicker label.
- One accent color per parallel item, cycling violet → indigo → magenta → cyan, used for icon circles, numbered badges, and card "flag tab" headers — never as body-text color.
- White `roundRect` cards with a soft violet-tinted drop shadow (`{colors.shadow-violet}` at ~18% opacity) — the brand's only depth device; there is no gradient backdrop anywhere in the deck.
- A recurring page anatomy: bold purple eyebrow kicker → 36pt bold black title → faint page-index chip top-right → two-line muted footer.
- Data tables (the eSIM glossary) run on a pale-lavender tint system (`{colors.surface-tint}` / `{colors.surface-tint-strong}`) with a deep-violet header row — a distinct, quieter palette from the bold accent rotation used elsewhere.
- Logomark: an ascending set of diagonal bars forming a triangle, in a violet-to-indigo gradient, paired with the wordmark "Δcceleronix" (the initial "A" rendered as a triangle/delta).

## Colors

### Approved Brand Palette

- **White** — `#FFFFFF`
- **Acceleronix Blue** — `#214099`
- **Neon Blue** — `#009FE3`
- **Acceleronix Purple** — `#96338F`
- **Neon Pink** — `#E5007D`
- **Acceleronix Midnight** — `#101124`
- **Acceleronix Green** — `#00B050`
- **Acceleronix Orange** — `#FF9F00`
- **Acceleronix Yellow** — `#FFFB00`
- **Acceleronix Red** — `#FF0000`

> **Note on source accuracy:** the deck's own "Colors" slides print RGB/HEX labels next to each swatch, but several of those printed labels are internally inconsistent (e.g. "Neon Pink" and "Midnight" are both captioned "RGB 59/137/217," and multiple HEX callouts don't match their own RGB callouts — evidently copy-paste errors in the source file). The ten hex values above were instead read directly from each swatch's actual fill color in the file, and are the values that should be treated as correct.

### Functional / Neutral Tokens

Used throughout the deck's actual content slides but not shown on the brand color slides — these are the working neutrals and secondary accents that make up real layouts:

| Token | Hex | Use |
|---|---|---|
| `{colors.ink}` | `#120E26` | Primary text — titles, body copy, table cells |
| `{colors.ink-secondary}` | `#3A2E6A` | Secondary text — table header fills, definition column |
| `{colors.ink-mute}` | `#6B6688` | Muted text — card body copy, footer caption |
| `{colors.ink-faint}` | `#B0A8C8` | Faint text — page-index numbers |
| `{colors.surface-tint}` | `#F0EDF8` | Pale lavender row/panel background |
| `{colors.surface-tint-strong}` | `#DDD6F0` | Light lavender row/panel background (table zebra) |
| `{colors.divider}` | `#CECBF6` | Thin connector lines (timeline rail) |
| `{colors.shadow-violet}` | `#3A2E5A` | Card drop-shadow color, used at ~18% opacity |
| `{colors.accent-violet}` | `#7030A0` | Rotation accent 1 — icon circles, card headers |
| `{colors.accent-indigo}` | `#534AB7` | Rotation accent 2 |
| `{colors.accent-magenta}` | `#A33A99` | Rotation accent 3 |
| `{colors.accent-cyan}` | `#00AEEF` | Rotation accent 4 |

### Usage Rules

- **Ink, not midnight, is the body-text color.** `{colors.midnight}` (`#101124`) is the swatch-sheet brand color; the deck's actual running text uses the very similar but distinct `{colors.ink}` (`#120E26`). Use `{colors.ink}` for real UI/body text.
- **The accent rotation is for differentiation, not branding.** Violet → indigo → magenta → cyan cycles once per set of parallel items (4 timeline eras, 4 numbered principles) — always in that order, always one color per item, never mixed within one item.
- **Purple is the kicker color.** The small bold eyebrow label at the top of every content slide is always `{colors.purple}` (`#96338F`), regardless of what accent colors appear in the body of that slide.
- **Lavender tints are for data, not marketing.** `{colors.surface-tint}` and `{colors.surface-tint-strong}` are reserved for tabular/reference content (the glossary table), not for cards or hero surfaces.

## Typography

### Font Family

The entire deck runs on **Arial** in two weights only: 400 (regular) and 700 (bold). There is no thin or light weight anywhere in the source file, and no secondary display typeface — headlines, labels, and body copy all share the same family, differentiated only by size, weight, and color. Bilingual (English/Japanese) slides fall back to the system's default CJK font for Japanese glyphs, since Arial does not cover Japanese.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-title}` | 48px (36pt) | 700 | 1.15 | Slide/section title |
| `{typography.card-heading}` | 21px (16pt) | 700 | 1.2 | Pillar-card / principle headline |
| `{typography.label-pill}` | 19px (14–15pt) | 700 | 1.2 | Timeline-node label on colored tab; numbered badge |
| `{typography.eyebrow-kicker}` | 16px (12pt) | 700 | 1.2 | Small purple category/kicker label, +0.7px tracking |
| `{typography.table-header}` | 17px (13pt) | 700 | 1.3 | Table header row (white on ink-secondary) |
| `{typography.table-term}` | 16px (12pt) | 700 | 1.3 | Table term/abbreviation column |
| `{typography.body}` | 15px (11.5pt) | 400 | 1.4 | Default body copy, table definitions |
| `{typography.body-muted}` | 17px (12.5pt) | 400 | 1.4 | Card supporting copy (muted ink-mute color) |
| `{typography.table-body}` | 15px (11.5pt) | 400 | 1.35 | Table cell text |
| `{typography.caption}` | 12px (9pt) | 400 | 1.3 | Footer date / confidentiality line |
| `{typography.page-index}` | 16px (12pt) | 400 | 1.2 | Faint page-number chip, top-right |

### Principles

- **Two weights, period.** Every text role is either 400 or 700 — never a thin or semi-bold in between. Weight, not tracking or italics, carries the hierarchy.
- **Bold carries color, regular stays neutral.** Bold text is where accent color appears (purple kickers, ink-secondary table headers); regular-weight body copy is always a neutral ink or muted tone.
- **One tracked role.** Letter-spacing is used exactly once in the whole system — the small eyebrow-kicker label — at a light +0.7px. Every other role sits at default tracking.
- **Body copy on cards is muted, not full-ink.** Card/pillar supporting text uses `{colors.ink-mute}` rather than `{colors.ink}`, keeping headlines the only full-contrast text on a card.

## Layout

### Canvas

- Standard 16:9 widescreen deck, 13.33in × 7.5in.
- Left content margin ≈ 0.43in; consistent across all slides.

### Spacing System

- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 6px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px.
- Card internal padding: ~20px.
- Tab/badge padding: 8px 16px.

### Page Anatomy (repeats on every content slide)

1. Logo, top-left.
2. `{typography.eyebrow-kicker}` label in `{colors.purple}`, directly under the logo.
3. `{typography.display-title}` headline in `{colors.ink}`, directly under the kicker.
4. `{typography.page-index}` number, top-right, in `{colors.ink-faint}`.
5. Content area (timeline, cards, or table).
6. Footer: date left, "Confidential · Under NDA" right, both in `{typography.caption}` / `{colors.ink-mute}`.

### Grid Patterns

- **Timeline**: 4 equal-width white cards in a row, each topped by a small colored dot on a `{colors.divider}` rail, with a colored "flag tab" header inside each card carrying the era label.
- **Numbered principles**: 2×2 grid of white cards, each with a numbered circle badge (accent-rotation color, white bold number) above a bold headline and muted body copy.
- **Pillar row**: 3 equal-width columns, each with an icon-in-circle mark above a bold headline and one line of muted supporting copy.
- **Reference table**: 3-column table (term / abbreviation-or-alt / definition), header row in `{colors.ink-secondary}` with white bold text, body rows alternating `{colors.surface-tint}` and `{colors.surface-tint-strong}`.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Page background, table cells |
| 1 | `box-shadow: rgba(58,46,90,0.18) 0 3px 9px` | Card lift — the brand's only shadow treatment |

There is no gradient-mesh or atmospheric backdrop anywhere in this deck — depth comes exclusively from a single soft violet-tinted drop shadow under white cards.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Table header row corners |
| `{rounded.sm}` | 8px | Small chips |
| `{rounded.md}` | 12px | Pillar/timeline cards |
| `{rounded.lg}` | 18px | Card "flag tab" color header |
| `{rounded.pill}` | 9999px | Icon circles, numbered badges |

### Signature Construction: the "Flag Tab" Card Header

Timeline and principle cards are built from three stacked shapes, not a single component: a full white rounded card (shadowed), a smaller accent-colored rounded rectangle pinned to the top acting as a label tab, and a thin accent-colored rectangle strip beneath it that squares off the tab's bottom corners against the white card underneath. The visual effect is a card with a rounded-top, square-bottom colored header band — achieved through layering rather than a single asymmetric-radius shape.

## Components

### Logo

**Wordmark + mark** — an ascending set of diagonal bars forming a triangle silhouette (violet-to-indigo gradient), set beside the wordmark "Δcceleronix," where the initial "A" is rendered as a solid triangle/delta in the same gradient. Appears in two forms in the source file: mark-plus-wordmark (primary) and mark-only (compact/watermark use).

### Cards

**`card-pillar`** — icon/headline/body card used for 3-up feature rows.
- Background `{colors.surface}`, rounded `{rounded.md}`, Level 1 shadow. Headline `{typography.card-heading}` in `{colors.ink}`, body `{typography.body-muted}` in `{colors.ink-mute}`.

**Timeline / principle card** — see "Flag Tab" construction above.
- White body, rounded `{rounded.md}`, Level 1 shadow, accent-rotation colored header tab (`{rounded.lg}` on the tab itself) with `{typography.label-pill}` white text.

### Badges

**`badge-numbered-circle`** — solid accent-rotation circle with a bold white number (01–04), used to order principle cards.

**`icon-circle`** — solid `{colors.purple}` (or rotation accent) circle containing a white pictogram, used above pillar-card headlines.

### Labels

**`eyebrow-kicker-label`** — small bold purple category tag above every slide title, +0.7px tracked.

**`page-index-chip`** — faint page number, top-right of every slide, in `{colors.ink-faint}`.

### Tables

**`table-header-row`** — `{colors.ink-secondary}` fill, white bold `{typography.table-header}` text.

**`table-row-tint`** / **`table-row-strong`** — alternating pale-lavender row backgrounds with `{colors.ink}` body text; term/abbreviation cells set bold, occasionally in `{colors.accent-violet}` to flag a key abbreviation.

### Footer

**`footer-caption-bar`** — two-line footer present on every slide: date bottom-left, "Confidential · Under NDA" bottom-right, both `{typography.caption}` in `{colors.ink-mute}`.

## Do's and Don'ts

### Do
- Use `{colors.ink}` (`#120E26`), not `{colors.midnight}` (`#101124`), for real body and headline text — they're close but distinct, and ink is what the deck actually runs on.
- Cycle the four rotation accents (violet, indigo, magenta, cyan) in that fixed order when color-coding a set of parallel items.
- Keep the eyebrow kicker purple and tracked — it's the one consistent wayfinding element across every slide.
- Reserve the pale-lavender tint system for tabular/reference content, not for marketing surfaces.
- Cap the type system at two weights (400 / 700) — this brand has no thin, light, or black weight anywhere in its source material.

### Don't
- Don't introduce a gradient-mesh backdrop, Inter font, or tabular-figure/`tnum` numeric styling — none of that appears anywhere in the source deck; it belonged to a prior, unrelated draft of this document.
- Don't trust the RGB/HEX text labels printed on the brand's own "Colors" slides without cross-checking — several are copy-paste errors that don't match their own swatch.
- Don't use an accent-rotation color as running body text — the rotation is for icons, badges, and card headers only.
- Don't mix accent-rotation colors within a single card or list item; each item gets exactly one.
- Don't add a third font weight or a display typeface — the brand's flatness (two Arial weights only) is deliberate and consistent across all nine slides of the source file.

## Iteration Guide

1. Treat the ten swatches on the brand's "Colors" slides as the only *approved* brand palette; treat the violet/indigo/magenta/cyan rotation and the ink/lavender neutrals as *functional* tokens seen in real usage, not brand colors to introduce elsewhere.
2. Reference tokens directly (`{colors.purple}`, `{typography.display-title}`, `{rounded.pill}`).
3. If new content types are added (e.g. a new card style), find the closest existing pattern in this file (pillar card, timeline card, table) before inventing a new one — the source deck reuses very few structural patterns.
4. Re-verify any new color or type value against the actual pptx XML fill/run properties, not just the deck's printed labels — see the accuracy note under Colors.
5. Default body text to `{typography.body}`; use `{typography.body-muted}` specifically for card supporting copy under a bold headline.
