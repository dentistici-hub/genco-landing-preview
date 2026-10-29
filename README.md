# Genco landing (local draft)

Astro static site + Cloudflare Worker for the lead form. Part of the Profilo Marketing prospect folder, not in git.

```
npm install
npm run dev      # http://localhost:4323
npm run build    # dist/
npm run og       # regenerates public/og-image.jpg
```

Copy lives in `src/data/content.ts`, brand and contact settings in `src/data/site.ts`, schema in `src/lib/schema.ts`, placeholder illustrations in `src/components/Art.astro`. Open items: `../notes/landing-to-confirm.md`.
Deploy (when approved): `wrangler deploy` with the Worker secret `CRM_INGEST_TOKEN`, using the Genco Cloudflare account.
