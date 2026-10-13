# MTP Concept — Solviq Demo Website

Independent concept demo by **Solviq**. This is an unofficial design concept and is not affiliated with or endorsed by Meat the Porkers Group.

## Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (restrained entrance motion)
- Lucide icons

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (static)
The build output is in `dist/`. Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

Example — Vercel:
```bash
npm i -g vercel
vercel
```

## Feature summary
- Sticky responsive header with mobile menu
- Hero, signature dishes, filterable menu, story, why-us, locations (placeholders), gallery with lightbox, demo enquiry form
- Demo enquiry form validates and shows a DEMO-ONLY confirmation; it does NOT submit anywhere
- `prefers-reduced-motion` is respected
- All food/location copy and prices are explicitly illustrative/unverified concept content

## What to replace for the real client site
- All Unsplash placeholder images -> verified food/venue photography
- Menu items, prices, stories -> verified MTP information
- Locations, addresses, hours, phones -> verified real data + real map links
- Enquiry form -> real booking/order backend (e.g. a reservations API or customer link)
- Remove `<meta name="robots" content="noindex, nofollow">` on launch
