# Palm Beach Lounge

Single-page site for [palmbeachlounge.com](https://palmbeachlounge.com) — a Palm Beach salon and private atelier (jewelry, scent, table, dress). Invitation-first. No public catalog or checkout.

## Local

```bash
npm install
npm run dev
```

## Build

Static export to `out/` for GitHub Pages:

```bash
npm run build
```

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publish the export to GitHub Pages.

The custom domain is `palmbeachlounge.com` (`public/CNAME` and root `CNAME`). DNS and Pages are not configured by this repository yet — they come later.

A correspondence address is left unset in `src/lib/site.ts` (`contactEmail`) until one is supplied. Categories live in `src/lib/catalog.ts`; the `catalog` array is empty so real pieces can be added later without inventing inventory.
