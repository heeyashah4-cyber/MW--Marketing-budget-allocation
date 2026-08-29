# Marketing Budget Optimizer

Prepared by **Heeya Shah** for Mosaic Wellness.

Interactive dashboard on 3 years of daily channel data (10 channels × 1,095 days) and a ₹50L/month allocator. Email is capped at ₹15L, SMS at ₹12L.

**Live app:** [https://mw-marketing-budget-allocation.vercel.app/](https://mw-marketing-budget-allocation.vercel.app/)

## Numerical answer

**Expected monthly revenue (Approach 1): ₹2,65,68,802.44**

`Σ (allocation × avg ROAS)` on a proportional split of ₹50,00,000, using the simple mean of daily ROAS per channel. Caps do not bind.

| Channel | Allocation (₹) | Avg ROAS | Expected revenue (₹) |
|---|---:|---:|---:|
| Email | 11,14,246.17 | 9.29x | 1,03,49,138.81 |
| SMS | 7,29,656.07 | 6.08x | 44,37,908.16 |
| Affiliate | 6,58,399.57 | 5.49x | 36,13,441.14 |
| Organic Social | 5,19,645.50 | 4.33x | 22,50,900.23 |
| Google Search | 4,30,286.73 | 3.59x | 15,43,326.51 |
| Influencer | 4,30,059.95 | 3.58x | 15,41,700.10 |
| Instagram Reels | 3,99,829.62 | 3.33x | 13,32,575.51 |
| Meta Ads | 2,86,616.79 | 2.39x | 6,84,770.71 |
| YouTube | 2,64,541.96 | 2.21x | 5,83,352.46 |
| Google Display | 1,66,717.65 | 1.39x | 2,31,688.81 |
| **Total** | **50,00,000.00** | **5.31x blended** | **2,65,68,802.44** |

## Write-up

The source file is `marketing_daily.xlsx` — 10,950 rows, one per channel per day from 1 Jan 2023 to 30 Dec 2025. I did not invent a sample. `analysis.py` reads that file and prints every figure used in the app.

**Approach.** Average ROAS is the unweighted mean of the daily `roas` column (1,095 days per channel), not total revenue ÷ total spend. The assignment asks for expected monthly revenue as `Σ (allocation × avg ROAS)`. Approach 1 splits ₹50L in proportion to those averages, then applies Email ≤ ₹15L and SMS ≤ ₹12L by locking any overflow at the cap and re-splitting the rest. On this dataset neither cap binds, so the proportional split is the allocation. That is the number above.

Approach 2 is shown in the UI as a contrast: fill Email and SMS to their caps first (they are the top-2 ROAS channels and their spend–ROAS slopes are flat-to-positive), then split the remaining ₹23L by ROAS among the other eight. It earns more on paper (~₹2.98Cr) but concentrates 54% of spend in two channels. The submitted answer is Approach 1, because it matches the specified formula without extra assumptions.

**Patterns.** Email (9.29x) and SMS (6.08x) dominate. Google Display sits at 1.39x. Only Meta Ads shows real diminishing returns (spend–ROAS correlation −0.62). Everywhere else the slope is indistinguishable from noise, so a model that reallocates hard on “marginal ROAS” would be fitting noise. Weekday/weekend mix exists but does not flip the ranking. A theoretical ceiling that fills channels in ROAS order until the budget is gone would put everything into Email, SMS, and Affiliate and print ~₹3.39Cr — it assumes average ROAS holds at a completely different spend mix and zeros out seven channels. I do not recommend it.

**Design.** The app has three tabs: Overview (ROAS, diminishing-returns curves, seasonality), Channel Deep-dive, and Budget Allocator with sliders plus the two approaches. Reviewers can move spend and see expected revenue update as `allocation × avg ROAS`. I kept every channel alive in Approach 1 so the mix stays diversified; Meta Ads is small both because of its lower average and because that is the one place the history actually punishes extra spend.

## Reproduce the number

```bash
pip install -r requirements.txt
python analysis.py
```

Requires `marketing_daily.xlsx` in the same folder. The script prints the allocation table and `TOTAL EXPECTED REVENUE: Rs 26,568,802.44`.

## Run the dashboard

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (port 8080). Stack: Vite, TanStack Start, React, Chart.js, Tailwind CSS.
