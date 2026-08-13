# The Ledger — Business & Freelance Blog

> Field notes for founders and freelancers — validate ideas cheaply, price your work, and land your first ten customers.

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/chirag127/oriz-blog-business?style=flat)](https://github.com/chirag127/oriz-blog-business/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/chirag127/oriz-blog-business)](https://github.com/chirag127/oriz-blog-business/commits)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)

## What it is

**The Ledger** is a static blog of practical, cost-first business advice for solo founders and freelancers: validating a startup idea cheaply, pricing that actually works, and getting the first ten paying customers. No growth-hack fluff — just what moves the needle when you have no budget and no team.

Its identity is double-entry bookkeeping rendered as a design system: warm manila paper, ink-brown text, a pine credit-green accent, a ledger-red debit marker, and IBM Plex Mono tabular figures for every date and amount.

## Links

- **Live site:** https://business-blog.oriz.in
- **GHP landing:** https://chirag127.github.io/oriz-blog-business/
- **Repo:** https://github.com/chirag127/oriz-blog-business

## ⭐ Star CTA

If this is useful, please ⭐ star the repo — it helps others find it.

## How it flows

```mermaid
flowchart LR
    A["MDX posts<br/>src/content/blog"] --> B["Astro content<br/>collection (zod schema)"]
    B --> C["astro build<br/>SSG + Pagefind index"]
    C --> D["Static HTML/CSS/JS<br/>dist/"]
    D --> E["wrangler deploy<br/>(GitHub Actions on push)"]
    E --> F["Cloudflare edge<br/>business-blog.oriz.in"]
    F --> G["Reader"]
    subgraph Author_time
        A
        B
    end
    subgraph CI_build
        C
        D
    end
    subgraph Edge_free_tier
        E
        F
    end
```

## Features

- Astro **content collections** with a strict zod schema (title, description, pubDate, tags, series, canonical).
- **MDX** posts with GitHub-flavoured markdown and syntax highlighting (Shiki / Expressive Code).
- Client-side **Pagefind** search over the built static index — no server, no API key.
- **RSS / Atom / JSON** feeds and an XML sitemap.
- Series, tags, categories, and author pages; per-post reading time.
- Progressive Web App (offline-capable via Workbox / `vite-plugin-pwa`).
- React 19 islands for interactive bits (Clerk account UI, embeds); the rest ships as zero-JS static HTML.

## Tech stack

- **Astro 6** (static output) · **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`) · Fraunces + Space Grotesk + IBM Plex Mono
- **MDX** + remark/rehype (gfm, math, slug, KaTeX)
- **React 19** islands · **Pagefind** search · **Motion** animations
- **Biome** (lint/format) · **Vitest** + **Playwright** (unit + e2e)
- **pnpm** package manager · deployed with **Wrangler** to Cloudflare

## Repo structure

```
oriz-blog-business/
├── src/
│   ├── content/
│   │   ├── blog/              # MDX posts (the content collection)
│   │   └── config.ts          # zod schema for the blog collection
│   ├── components/            # blog/, chrome/, embeds/ — UI pieces
│   ├── layouts/               # page + post shells
│   ├── pages/                 # routes: blog/, tags/, categories/, series/, authors/, legal/, account/
│   ├── lib/                   # helpers (feeds, reading time, etc.)
│   ├── i18n/locales/          # translations
│   ├── data/                  # site data
│   └── styles/                # Tailwind + theme
├── astro.config.mjs           # site URL, integrations, redirects
├── package.json               # scripts + deps (pnpm)
├── docs/index.html            # GitHub Pages landing (redirects to live site)
└── .github/workflows/         # deploy.yml — build + publish to Cloudflare
```

## Screenshots

_No screenshot committed yet — see the live site: https://business-blog.oriz.in_

## Quick start

```bash
pnpm install
pnpm dev        # local dev server (astro dev)
pnpm build      # static build → dist/ (astro build)
pnpm preview    # preview the production build
```

Other scripts: `pnpm typecheck` (astro check), `pnpm lint` (biome), `pnpm test` (vitest), `pnpm test:e2e` (playwright).

## Configuration

All client-exposed config uses `PUBLIC_*` env vars (values live in the CI/secrets vault, never in the repo). Names and purpose only:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for the account UI island |
| `PUBLIC_ADSENSE_CLIENT` | Google AdSense client id |
| `PUBLIC_GA` | Google Analytics measurement id |
| `PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics beacon token |
| `PUBLIC_ALGOLIA_APP_ID` | Algolia app id (optional search backend) |
| `PUBLIC_ALGOLIA_SEARCH_KEY` | Algolia search-only key |
| `PUBLIC_ALGOLIA_INDEX_NAME` | Algolia index name |
| `PUBLIC_BUTTONDOWN_USERNAME` | Buttondown newsletter username |
| `PUBLIC_GISCUS_REPO` | Giscus comments repo |
| `PUBLIC_GISCUS_REPO_ID` | Giscus repo id |
| `PUBLIC_GISCUS_CATEGORY` | Giscus discussion category |
| `PUBLIC_GISCUS_CATEGORY_ID` | Giscus category id |
| `PUBLIC_BASE_PATH` | Base path override for the GHP landing |

## Part of the oriz family

One of ~80 sites in the [oriz](https://blog.oriz.in) family — a fleet of small, focused static sites sharing a build mechanism (`@chirag127/*` packages) while each keeps its own identity. Runs at **$0 on the Cloudflare free tier**.

## Contributing

Issues and PRs welcome — typo fixes, corrections, and new post ideas especially. Keep changes small and use conventional commits.

## License

MIT © Chirag Singhal

## Author

Chirag Singhal · chirag@oriz.in

## Status & roadmap

Stable and live. Ongoing: more posts, better cross-linking between sibling oriz blogs.

Conventional commits are the changelog.
