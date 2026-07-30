<div align="center">

<img src="https://raw.githubusercontent.com/azyy00/farmer-website/main/public/og-image.png" alt="Communication Challenges in Agricultural Programs" width="820" />

# 🌾 Communication Challenges in Agricultural Programs

**A single-page research site on communication in agricultural outreach, for the community, the office, and the panel.**

*A qualitative study of how the Local Agricultural Office of Goa, Camarines Sur, reaches its farmers, and where that communication breaks down.*

<br />

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-bacom--researchs--site.vercel.app-E61919?style=for-the-badge&logo=vercel&logoColor=white)](https://bacom-researchs-site.vercel.app/)

<br />

![React](https://img.shields.io/badge/React-18-0A0A0A?style=for-the-badge&logo=react&logoColor=E61919)
![Vite](https://img.shields.io/badge/Vite-5-0A0A0A?style=for-the-badge&logo=vite&logoColor=E61919)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2-0A0A0A?style=for-the-badge&logo=chakraui&logoColor=E61919)
![GSAP](https://img.shields.io/badge/GSAP-3-0A0A0A?style=for-the-badge&logo=greensock&logoColor=E61919)
![Vercel](https://img.shields.io/badge/Vercel-deployed-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/status-live-E61919?style=for-the-badge)

</div>

---

## Overview

The whole study reads as one continuous scrolling document. The former routes
(Methodology, Results, Conclusion, Researchers, Contact) are now anchored
sections; the navigation scrolls to each and tracks the active section. Old
paths such as `/results` redirect to the matching anchor.

The study was conducted by **Madelo B. Biando** (Lead Researcher),
**Apple Mae R. Castor**, and **Apple Jewel S. Borais**, under the guidance of
adviser **Ruth Daphne Prila Pesimo**, for the Bachelor of Arts in Communication,
Partido State University.

## Design system

A Swiss Industrial brutalist system, defined centrally in `src/theme.js`:

- One light substrate: documentation paper `#F4F4F0`, carbon ink `#0A0A0A`, and
  a single hazard-red `#E61919` accent. Light only, no dark mode.
- Archivo Black for macro headers (uppercase, tight tracking), Archivo for body,
  JetBrains Mono for telemetry and labels. All self-hosted via `@fontsource`.
- Square corners throughout, hard offset shadows instead of soft blur, and a
  faint mechanical grain over the document.
- Numbered structural rules introduce each section as an operational unit.

## Motion

GSAP (`gsap` + `@gsap/react`) drives the motion layer: a staggered hero
load-in, scroll-triggered section reveals, and image scale-and-fade on the field
plates. All motion is disabled under `prefers-reduced-motion`.

## Content and media

- An aerial field video plays behind the hero as a degraded survey plate
  (ink scrim + 1-bit dither), with a static poster fallback for reduced motion.
- The Results section presents the communication-strategy and challenge tables,
  with participant quotes in Bicol alongside English translations.
- The contact form validates input and hands the composed message to the
  visitor's own email client (no backend required).

## Features

| | |
|---|---|
| **Single-scroll layout** | Anchor navigation with active-section tracking |
| **Brutalist design system** | Self-hosted Archivo / JetBrains Mono type stack |
| **GSAP motion** | Scroll reveals and staggered hero, reduced-motion safe |
| **Media** | Video hero with poster fallback; hard-bordered photo plates |
| **Contact** | Working mailto form with client-side validation |
| **SEO** | Per-page metadata, Open Graph, sitemap, robots.txt |
| **Performance** | WebP imagery, route code-splitting |

## Built with

![React](https://img.shields.io/badge/React-0A0A0A?style=flat-square&logo=react&logoColor=E61919)
![Vite](https://img.shields.io/badge/Vite-0A0A0A?style=flat-square&logo=vite&logoColor=E61919)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-0A0A0A?style=flat-square&logo=chakraui&logoColor=E61919)
![React Router](https://img.shields.io/badge/React_Router-0A0A0A?style=flat-square&logo=reactrouter&logoColor=E61919)
![GSAP](https://img.shields.io/badge/GSAP-0A0A0A?style=flat-square&logo=greensock&logoColor=E61919)
![Emotion](https://img.shields.io/badge/Emotion-0A0A0A?style=flat-square&logo=styledcomponents&logoColor=E61919)

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

Deployed on **Vercel** from the `main` branch. Pushing to `main` triggers a
production build.

## Copyright

(c) 2024 Madelo B. Biando, Apple Mae R. Castor, Apple Jewel S. Borais. All
rights reserved. This research website and its contents are protected by
copyright law; no part may be reproduced, distributed, or transmitted in any
form without the prior written permission of the copyright holder.

Website development (c) 2024 Anthony B. Azuela.

For permissions requests: **biandomadelo847@gmail.com** · **0910 968 1266**

<div align="center">

---

**Bachelor of Arts in Communication · Partido State University**

</div>
