# Mikolo Simplified — Web (Contribution Management)

Next.js 14 (App Router) + TypeScript + Tailwind frontend for the Contribution Management module of Mikolo Simplified, Uganda's ceremony operating system.

## Stack

- Next.js 14 / React 18 / TypeScript
- Tailwind CSS with a custom Ugandan-ceremony-inspired palette (gomesi maroon, gold sash, barkcloth brown, millet green)
- Fonts: **Marcellus** (headings) + **Inter Tight** (body), loaded via `next/font/google`
- Recharts for dashboards/reports, lucide-react for icons

## Local setup

```bash
cp .env.example .env.local
# set NEXT_PUBLIC_API_URL to your backend, e.g. http://localhost:4000

npm install
npm run dev   # http://localhost:3000
```

Sign in with the seeded backend account (`admin@mikolo.ug` / `Password123!`) or register a new account — the first account created on a fresh backend becomes an admin automatically.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **Add New Project** → import the repo.
3. Set the environment variable `NEXT_PUBLIC_API_URL` to your deployed Render API URL (e.g. `https://mikolo-simplified-api.onrender.com`).
4. Deploy — Vercel auto-detects Next.js, no extra config needed.

> Note: `next/font/google` fetches font files at build time, so the build machine needs outbound internet access to `fonts.googleapis.com` / `fonts.gstatic.com`. Vercel's build environment has this by default.

## Pages

| Route | Purpose |
|---|---|
| `/login`, `/register` | Auth |
| `/dashboard` | Collection progress (sash progress bar), totals, trend + category charts |
| `/contributors` | Full contributor database: search, filter, sort, add, CSV import/export |
| `/contributors/[id]` | Contributor profile: pledges, payment history, receipts, thank-you log |
| `/reports` | Target vs. pledged vs. collected, category/side/method breakdowns |
| `/reconciliation` | Payments awaiting reconciliation + duplicate-contributor review |

## Design notes

The signature visual motif is the **sash progress bar** (`.sash-track` / `.sash-fill` in `globals.css`) — a diagonally-striped gold ribbon that fills like the sash worn at a kwanjula, turning green when a goal is fully met. It's used for every collection-progress indicator across the dashboard and reports.
