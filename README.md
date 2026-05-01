# polymer-landing

Marketing site for Polymer — the Verifiable RPC Network. Two pages:

- `/` — protocol landing (`src/pages/index.astro`)
- `/proveapi.html` — ProveAPI landing (`src/pages/proveapi.astro`)

Built with [Astro](https://astro.build/) 6.x, deployed to Cloudflare Pages.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
```

Live reload on file changes.

## Build

```bash
npm run build        # outputs to ./dist
npm run preview      # serve dist/ locally
```

## Deploy

### Manual (wrangler)

```bash
npm run build
wrangler pages deploy dist --project-name=polymer-landing --branch=main
```

Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in env.

### Auto (Git → Cloudflare Pages)

Push to `main` triggers a production deploy. Other branches get preview URLs.

Cloudflare Pages settings:
- Build command: `npm run build`
- Build output: `dist`
- Production branch: `main`

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro      # HTML shell, fonts, WebGL hero canvas script
├── components/
│   ├── TopBar.astro          # nav with `currentPage` prop
│   └── Footer.astro          # logo + columns + foot-bar
├── pages/
│   ├── index.astro           # protocol page (Hidden Attack Surface, Request Flow, Trust Pillars)
│   └── proveapi.astro        # ProveAPI page (How it works, Use cases, Specs)
└── styles/
    ├── global.css            # design tokens, topbar, footer, base typography (loaded everywhere)
    └── proveapi.css          # ProveAPI-specific diagrams + overrides

public/
└── assets/
    └── polymer-mark.svg      # favicon + footer/topbar logo
```

## Editing the chrome

The topbar and footer are single source of truth in `src/components/TopBar.astro` and `Footer.astro`. Edit once, both pages update on next build.

`TopBar` takes a `currentPage` prop (`'protocol' | 'proveapi'`) which drives the `.has-current` and `.nav-current` indicators. Each page sets it via the `<BaseLayout currentPage="...">` prop.

## Sections

The protocol page has four anchored sections (see also the topbar nav):

| Anchor | Section | What's there |
|---|---|---|
| `#architecture` | §01 Protocol Architecture | Hero chip-die figure |
| `#attack` | §02 The Hidden Attack Surface | Kelp/LayerZero forensic |
| `#request` | §03 Request Flow | Per-request architecture diagram |
| `#pillars` | §04 Trust Pillars | Hardware/Cryptography/Public verifiability + verify badge |

Scroll-margin-top of 100px keeps the section header below the sticky topbar with breathing room.

## License

Proprietary. Polymer Labs.
