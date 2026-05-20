# Elevatum

A world-class premium fundraising advisory website for Elevatum — a high-end personal brand for a single angel investor and fundraising advisor.

## Run & Operate

- `pnpm --filter @workspace/elevatum run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- Build: esbuild (CJS bundle)

## Where things live

- Frontend: `artifacts/elevatum/src/`
- Pages: `artifacts/elevatum/src/pages/` (Home.tsx, Course.tsx)
- Components: `artifacts/elevatum/src/components/`
- Theme/CSS: `artifacts/elevatum/src/index.css`
- API Server: `artifacts/api-server/src/`
- DB Schema: `lib/db/src/schema/`
- API Spec: `lib/api-spec/openapi.yaml`

## Architecture decisions

- Presentation-first website — no backend needed for core pages
- Dark-only aesthetic (both :root and .dark use dark-mode values)
- Google Fonts: Plus Jakarta Sans + Instrument Serif loaded via @import at top of index.css
- Icons: react-icons/fi (Feather) + lucide-react
- Animations: Framer Motion (text reveal, scroll triggers, animated counters)
- Glassmorphism: backdrop-blur + semi-transparent panels throughout

## Product

Elevatum is a premium fundraising advisory personal brand site for a single angel investor. Features:
- Hero with animated metrics and text reveal
- Stats strip with animated counters
- About / investor bio section
- Client logo marquee
- Two premium offer cards (Capital Sprint + Co-Lead Fundraising)
- Results/case studies with metric counters
- 5-step process timeline
- Testimonials
- FAQ accordion
- Contact form
- Separate /course page for fundraising education program

## User preferences

- No emojis anywhere in the UI
- Premium icons from react-icons/fi (Feather) and lucide-react
- Glass effects (backdrop-blur, semi-transparent panels)
- Text reveal animations (Framer Motion clip-mask word reveal)
- Very premium dark aesthetic

## Gotchas

- @import url() for Google Fonts MUST be the absolute first line of index.css
- All `red` placeholder values in index.css must be replaced or the page renders broken
- Use wouter for routing, not react-router-dom
