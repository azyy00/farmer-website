# Communication Challenges in Agricultural Programs

A single-page research website presenting a qualitative study of the
communication strategies and challenges in the implementation of agricultural
programs by the Local Agricultural Office (LAO) in Goa, Partido, Camarines Sur.

Live site: https://bacom-researchs-site.vercel.app/

## Project overview

The study was conducted by:

- Madelo B. Biando (Lead Researcher)
- Apple Mae R. Castor (Researcher)
- Apple Jewel S. Borais (Researcher)

Under the guidance of Ruth Daphne Prila Pesimo (Adviser), for the Bachelor of
Arts in Communication, Partido State University.

## The site

The whole study reads as one continuous scrolling document. The former routes
(Methodology, Results, Conclusion, Researchers, Contact) are now anchored
sections; the navigation scrolls to each and tracks the active section. Old
paths such as `/results` redirect to the matching anchor.

### Design system

The interface uses a Swiss Industrial brutalist system, defined centrally in
`src/theme.js`:

- One light substrate: documentation paper `#F4F4F0`, carbon ink `#0A0A0A`, and
  a single hazard-red `#E61919` accent. Light only, no dark mode.
- Archivo Black for macro headers (uppercase, tight tracking), Archivo for body,
  JetBrains Mono for telemetry and labels. All self-hosted via `@fontsource`.
- Square corners throughout, hard offset shadows instead of soft blur, and a
  faint mechanical grain over the document.
- Numbered structural rules introduce each section as an operational unit.

### Motion

GSAP (`gsap` + `@gsap/react`) drives the motion layer: a staggered hero
load-in, scroll-triggered section reveals, and image scale-and-fade on the field
plates. All motion is disabled under `prefers-reduced-motion`.

### Content and media

- An aerial field video plays behind the hero as a degraded survey plate
  (ink scrim + 1-bit dither), with a static poster fallback for reduced motion.
- The Results section presents the communication-strategy and challenge tables,
  with participant quotes in Bicol alongside English translations.
- The contact form validates input and hands the composed message to the
  visitor's own email client (no backend required).

## Features

- Single continuous-scroll layout with anchor navigation and active tracking
- Brutalist design system with a self-hosted type stack
- GSAP scroll-reveal motion, reduced-motion safe
- Video hero with poster fallback; hard-bordered photographic plates
- Working contact form via mailto, with client-side validation
- Per-page metadata, Open Graph tags, sitemap and robots.txt
- WebP imagery, route code-splitting, tinted-favicon branding

## Built with

- React + Vite
- Chakra UI + Emotion
- React Router
- GSAP + @gsap/react
- @fontsource (Archivo Black, Archivo, JetBrains Mono)

## Development

```bash
npm install
npm run dev      # local dev server on port 3000
npm run lint     # eslint, no warnings allowed
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

### Images

Photographs under `src/assets/` are stored as WebP and sized to the largest
dimensions the layout actually displays. The hero video lives in `public/` with
a WebP poster. Add new media the same way; a multi-megabyte source will
otherwise dominate the page weight.

## Deployment

Deployed on Vercel from the `main` branch. Pushing to `main` triggers a
production build.

## Copyright

(c) 2024 Madelo B. Biando, Apple Mae R. Castor, Apple Jewel S. Borais. All
rights reserved.

This research website and its contents are protected by copyright law. No part
may be reproduced, distributed, or transmitted in any form without the prior
written permission of the copyright holder.

Research content (c) 2024 Madelo B. Biando, Apple Mae R. Castor, Apple Jewel S.
Borais. Website development (c) 2024 Anthony B. Azuela.

For permissions requests, contact:

- Email: biandomadelo847@gmail.com
- Phone: 0910 968 1266

---

Bachelor of Arts in Communication, Partido State University
