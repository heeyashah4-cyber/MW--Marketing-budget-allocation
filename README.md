# Marketing Budget Optimizer

Three-year channel performance dashboard and a ₹50L/month budget allocator across 10 marketing channels (Email, SMS, Affiliate, Organic Social, Google Search, Influencer, Instagram Reels, Meta Ads, YouTube, Google Display).

Built for Mosaic Wellness.

## What it does

- **Overview** — average ROAS, diminishing returns, weekday vs weekend, monthly seasonality
- **Channel Deep-dive** — funnel, trends, and customer quality per channel
- **Budget Allocator**
  - **Approach 1** — split the ₹50L in proportion to 3-year average ROAS
  - **Approach 2** — fill Email and SMS to their caps first, then split the remainder by ROAS

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) — Vite is configured for that port.

```bash
npm run build
npm run preview
```

## Stack

Vite, TanStack Start, React, Chart.js, Tailwind CSS.
