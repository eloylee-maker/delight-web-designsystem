# DWDS Site — `site/`

Next.js 14 (App Router, TypeScript) site for the **delight.ai Web Design System**.
The IA mirrors [eBay Playbook](https://playbook.ebay.com/) — Get started · Foundations · Design system · Components · Resources.

## Local development

```bash
cd site
npm install
npm run dev          # http://localhost:3000
```

Build:

```bash
npm run build
npm run start
```

## File map

```
site/
├── app/
│   ├── layout.tsx           Topbar + Sidebar + Footer shell
│   ├── page.tsx             Home (eBay-style card grid)
│   ├── not-found.tsx
│   ├── [section]/page.tsx           Section index
│   └── [section]/[page]/page.tsx    Page view (live preview / coming-soon)
├── components/
│   ├── Topbar.tsx, Sidebar.tsx, Crumbs.tsx
│   ├── Card.tsx, CardGraphic.tsx
│   ├── PreviewFrame.tsx     Renders /preview/*.html in an iframe
│   ├── ComingSoon.tsx       Empty-state shell for unreleased pages
│   └── PageContent.tsx      Per-page bodies (tokens, anatomy, prose…)
├── lib/ia.ts                IA registry — single source of truth for nav
├── public/
│   ├── colors_and_type.css      Root tokens, @font-face, type utilities (used by /preview/*.html)
│   ├── ui_kits/web/components.css  Component CSS (buttons, tabs, form, footer…)
│   ├── fonts/               .otf files (Serrif, Helvetica Now Text, Gellix)
│   ├── assets/              Logos, brand marks
│   └── preview/             Static HTML previews from the parent repo
├── styles/globals.css       DWDS tokens + utility classes + site shell
├── package.json
├── tsconfig.json
├── next.config.js
└── vercel.json
```

## Vercel deploy

1. In Vercel, **New Project → Import** the `delight-web-designsystem` repo.
2. **Root Directory: `site`** (this is the only setting that matters).
3. Framework preset auto-detects as **Next.js**. Leave Build / Output / Install commands blank.
4. Click **Deploy**. The first build will take ~60s.
5. Subsequent pushes to `main` (or any branch's PR) auto-redeploy.

## Adding pages

Pages are driven by `lib/ia.ts`. To add or activate a page:

1. Edit the relevant `Section.pages` array. Set `status: 'live'` once the page has content.
2. Add a `preview: 'foo.html'` to embed a live preview from `/preview/`.
3. For custom prose/anatomy, add a branch in `components/PageContent.tsx`.

## Updating preview/*.html

The site serves `public/preview/*.html` directly. To pull updated previews from the parent repo:

```bash
# from repo root
cp preview/*.html site/public/preview/
```

…or set up a sync step in CI later. For now it's a manual one-liner.
