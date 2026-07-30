# Brand and identity system

The visual identity for the research study "Communication Challenges in the
Implementation of Agricultural Programs by the Local Agricultural Office in Goa,
Partido, Camarines Sur."

A rendered board version of this document lives at `docs/brand-board.html` (open
it in a browser).

## The mark

A **metaphor fusion**: a broadcast / speech form holding a young shoot. The study
is about communication carrying agricultural support to farmers, so the mark puts
a sprout inside a speech container - the channel and what it delivers, in one
shape.

- One silhouette, works in a single colour.
- Legible from a 16px favicon to a full display lockup.
- Source of truth: `src/components/Logo.jsx` (`LogoMark` and the `Logo` lockup).
- Favicon: `public/favicon.svg`. Social card: `public/og-image.png`.

Clear space around the mark is one grain-height on every side. Never recolour the
sprout to anything other than the page ground, never add effects or outlines.

## Colour

One locked accent green, used identically across the whole site. Neutrals are
warmed slightly toward the accent so they never read as a cold, separate grey.
The full ramps are defined once in `src/theme.js`.

| Token | Hex | Use |
|---|---|---|
| primary.700 | `#284E30` | Deep accent, gradients |
| primary.600 | `#33633C` | Primary accent, brand green |
| primary.500 | `#457C4C` | Hover / secondary accent |
| primary.300 | `#8EBB8E` | Accent on dark grounds |
| primary.100 | `#DCEBDB` | Tints, quiet backgrounds |
| neutral.50 | `#FAFAF8` | Light ground |
| neutral.800 | `#2A2A26` | Dark surface |
| neutral.900 | `#1A1A17` | Dark ground |

`green.*` is aliased to `primary.*` in the theme so any legacy reference resolves
to the same ramp. Shadows are tinted with the accent hue, never pure black.

## Typography

- **Newsreader** (variable serif) - display and headings. Editorial, fits an
  academic study.
- **Outfit** (variable sans) - body, labels, and UI.

Both are self-hosted via `@fontsource` and bundled by Vite (`src/main.jsx`); no
third-party font request is made. Headings use tight negative tracking; body
copy sits at roughly a 65-character measure; numbers use tabular figures.

## Voice

Sentence case for interface copy; the study's formal section titles keep their
academic capitalisation. No exclamation marks in system messages. No em-dashes
anywhere in the interface - use a hyphen, comma, or two sentences.
