# perfect-match

A single-page "business card" website for Biuro Matrymonialne Magnes — built to drive visitors to the official site [matrymonialne24.pl](https://matrymonialne24.pl).

Target domain: **kojarzeniepar.pl**.

> The visible page content is in Polish (target audience).
> Source code, comments and documentation are in English.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [Tailwind CSS 4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts, via `next/font`)
- [lucide-react](https://lucide.dev) — icons
- Hosting: GitHub Pages + GitHub Actions

## Local development

```bash
npm install
npm run dev
```

The site is served at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static output (HTML/CSS/JS) is written to the `out/` directory and can be served by any static host.

## Project structure

```
src/
  app/              # App Router (layout, page, sitemap, robots, icons)
  components/       # Reusable sections (Header, Hero, Promises, ...)
  content/site.ts   # All page copy lives here — edit this file, not the components
  lib/utils.ts      # Helpers (cn, SITE_URL, asset path, noOrphans)
public/             # Logos, icons, brand artwork
```

Every visible piece of text on the page is sourced from `src/content/site.ts`. To change a label, link or paragraph, edit a single value there.

## SEO

- Full metadata (Open Graph, Twitter Card, canonical URL)
- Schema.org JSON-LD: `LocalBusiness`, `Organization`, `WebSite`, `FAQPage`
- Auto-generated `robots.txt` and `sitemap.xml`
- Semantic HTML, `lang="pl-PL"`, WCAG AA contrast and focus styles
- Polish typography helper (`noOrphans`) that prevents 1–2 letter words from ending a line

## Deployment

See [`DEPLOY.md`](./DEPLOY.md).
