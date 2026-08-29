"""
Marketing Budget Optimizer — analysis script
Mosaic Wellness · Prepared by Heeya Shah

Reproduces every number shown in index.html from the raw daily dataset:
  1. Average ROAS per channel (simple mean + spend-weighted)
  2. Diminishing-returns check (spend deciles + correlation + OLS fit)
  3. Weekday vs weekend, day-of-week, monthly, quarterly, yearly ROAS
  4. Proportional-by-ROAS budget allocation for Rs 50L/month, with caps
  5. Expected monthly revenue for that allocation
  6. Channel funnel metrics (CTR, CPC, CPA, AOV, CPM, conversion rate)
  7. Customer quality metrics (CAC, new-customer rate, revenue/new customer)
  8. Theoretical revenue ceiling (unconstrained-diversification comparison)

Run:
    pip install pandas numpy openpyxl
    python analysis.py

Input:
    marketing_daily.xlsx  — one row per (channel, day), 10 channels x 1,095 days
    Columns: date, day_of_week, channel, spend, revenue, roas, impressions,
             clicks, conversions, new_customers, ctr, cpc, cpa, aov
"""

import pandas as pd
import numpy as np
import json

DATA_FILE = "marketing_daily.xlsx"
TOTAL_BUDGET = 5_000_000          # Rs 50L / month
CAPS = {"Email": 1_500_000, "SMS": 1_200_000}


def load_data(path=DATA_FILE):
    df = pd.read_excel(path)
    df["date"] = pd.to_datetime(df["date"])
    df["month"] = df["date"].dt.month
    df["year"] = df["date"].dt.year
    df["quarter"] = df["date"].dt.quarter
    df["dow"] = df["date"].dt.dayofweek
    df["is_weekend"] = df["day_of_week"].isin(["Sat", "Sun"])
    return df


# ---------------------------------------------------------------------------
# 1. Average ROAS per channel
# ---------------------------------------------------------------------------
def average_roas(df):
    """Simple mean of daily ROAS per channel — the figure the allocation
    formula uses, per the assignment's stated method."""
    simple = df.groupby("channel")["roas"].mean()
    weighted = df.groupby("channel").apply(
        lambda g: g["revenue"].sum() / g["spend"].sum()
    )
    return simple, weighted


# ---------------------------------------------------------------------------
# 2. Diminishing returns
# ---------------------------------------------------------------------------
def diminishing_returns(df):
    """Spend-decile ROAS curve + correlation + OLS fit (roas = a + b*spend)
    for every channel."""
    results = {}
    for channel, g in df.groupby("channel"):
        g = g.copy()
        g["decile"] = pd.qcut(g["spend"], 10, labels=False, duplicates="drop")
        curve = g.groupby("decile").agg(
            mean_spend=("spend", "mean"), mean_roas=("roas", "mean")
        )
        corr = g["spend"].corr(g["roas"])
        b, a = np.polyfit(g["spend"], g["roas"], 1)  # roas = a + b*spend
        results[channel] = {
            "decile_curve": curve.round(3).to_dict(),
            "spend_roas_corr": round(corr, 4),
            "fit_a": a,
            "fit_b": b,
        }
    return results


# ---------------------------------------------------------------------------
# 3. Timing patterns
# ---------------------------------------------------------------------------
def timing_patterns(df):
    weekday_weekend = df.groupby(["channel", "is_weekend"])["roas"].mean().unstack()
    dow_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    day_of_week = {}
    for channel, g in df.groupby("channel"):
        day_of_week[channel] = {
            dow_names[d]: round(g[g["dow"] == d]["roas"].mean(), 3) for d in range(7)
        }
    monthly = df.groupby(["channel", "month"])["roas"].mean().unstack()
    quarterly = df.groupby(["channel", "quarter"])["roas"].mean().unstack()
    yearly = df.groupby(["channel", "year"])["roas"].mean().unstack()
    return weekday_weekend, day_of_week, monthly, quarterly, yearly


# ---------------------------------------------------------------------------
# 4 & 5. Budget allocation + expected revenue
# ---------------------------------------------------------------------------
def proportional_allocation(avg_roas, total_budget=TOTAL_BUDGET, caps=CAPS):
    """Split total_budget across channels in proportion to avg_roas,
    respecting per-channel caps via iterative re-normalisation."""
    channels = list(avg_roas.index)
    remaining_budget = total_budget
    capped = {}
    uncapped = set(channels)

    while True:
        roas_sum = sum(avg_roas[c] for c in uncapped)
        alloc = {c: remaining_budget * avg_roas[c] / roas_sum for c in uncapped}
        over = [c for c in uncapped if c in caps and alloc[c] > caps[c] + 1e-6]
        if not over:
            alloc.update(capped)
            return alloc
        for c in over:
            capped[c] = caps[c]
            remaining_budget -= caps[c]
            uncapped.remove(c)


def expected_revenue(allocation, avg_roas):
    return sum(allocation[c] * avg_roas[c] for c in allocation)


def theoretical_ceiling(avg_roas, total_budget=TOTAL_BUDGET, caps=CAPS):
    """Revenue-maximising corner solution if you ignore diversification
    and diminishing-returns risk entirely: rank by ROAS, fill each channel
    to its cap before moving to the next. Shown for comparison only —
    NOT the recommended allocation."""
    ranked = avg_roas.sort_values(ascending=False)
    alloc = {c: 0 for c in avg_roas.index}
    remaining = total_budget
    for c in ranked.index:
        cap = caps.get(c, total_budget)
        give = min(cap, remaining)
        alloc[c] = give
        remaining -= give
        if remaining <= 0:
            break
    return alloc


# ---------------------------------------------------------------------------
# 6. Funnel / efficiency metrics
# ---------------------------------------------------------------------------
def funnel_metrics(df):
    out = {}
    for channel, g in df.groupby("channel"):
        spend_sum = g["spend"].sum()
        revenue_sum = g["revenue"].sum()
        impr_sum = g["impressions"].sum()
        clicks_sum = g["clicks"].sum()
        conv_sum = g["conversions"].sum()
        out[channel] = {
            "avg_ctr": round(g["ctr"].mean(), 3),
            "avg_cpc": round(g["cpc"].mean(), 2),
            "avg_cpa": round(g["cpa"].mean(), 2),
            "avg_aov": round(g["aov"].mean(), 2),
            "avg_cpm": round(spend_sum / impr_sum * 1000, 2),
            "conversion_rate_pct": round(conv_sum / clicks_sum * 100, 3),
            "revenue_per_click": round(revenue_sum / clicks_sum, 2),
            "revenue_per_conversion": round(revenue_sum / conv_sum, 2),
            "total_impressions": int(impr_sum),
        }
    return out


# ---------------------------------------------------------------------------
# 7. Customer quality metrics
# ---------------------------------------------------------------------------
def customer_quality(df):
    out = {}
    for channel, g in df.groupby("channel"):
        spend_sum = g["spend"].sum()
        revenue_sum = g["revenue"].sum()
        conv_sum = g["conversions"].sum()
        newc_sum = g["new_customers"].sum()
        out[channel] = {
            "cac": round(spend_sum / newc_sum, 2),
            "new_customers_per_1000_spend": round(newc_sum / (spend_sum / 1000), 3),
            "new_customer_rate_pct": round(newc_sum / conv_sum * 100, 3),
            "revenue_per_new_customer": round(revenue_sum / newc_sum, 2),
        }
    return out


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    df = load_data()

    simple_roas, weighted_roas = average_roas(df)
    print("=" * 70)
    print("1. AVERAGE ROAS BY CHANNEL (simple mean, per assignment spec)")
    print("=" * 70)
    print(simple_roas.sort_values(ascending=False).round(4))

    allocation = proportional_allocation(simple_roas)
    revenue = expected_revenue(allocation, simple_roas)
    print("\n" + "=" * 70)
    print("2. PROPORTIONAL BUDGET ALLOCATION (Rs 50L/month, caps applied)")
    print("=" * 70)
    for c in sorted(allocation, key=lambda x: -simple_roas[x]):
        print(f"  {c:18s} Rs {allocation[c]:>13,.2f}  ->  Rs {allocation[c]*simple_roas[c]:>15,.2f} revenue")
    print(f"\n  TOTAL ALLOCATED:          Rs {sum(allocation.values()):,.2f}")
    print(f"  TOTAL EXPECTED REVENUE:   Rs {revenue:,.2f}   <-- required answer")

    ceiling_alloc = theoretical_ceiling(simple_roas)
    ceiling_revenue = expected_revenue(ceiling_alloc, simple_roas)
    print("\n" + "=" * 70)
    print("3. THEORETICAL CEILING (for comparison only, not recommended)")
    print("=" * 70)
    print(f"  Revenue if concentrated by rank: Rs {ceiling_revenue:,.2f}")
    print(f"  Proportional allocation captures {revenue/ceiling_revenue*100:.1f}% of this ceiling")

    dim = diminishing_returns(df)
    print("\n" + "=" * 70)
    print("4. DIMINISHING RETURNS (spend vs ROAS correlation per channel)")
    print("=" * 70)
    for c, v in sorted(dim.items(), key=lambda x: x[1]["spend_roas_corr"]):
        print(f"  {c:18s} corr = {v['spend_roas_corr']:+.4f}")

    print("\nFull JSON output written to analysis_output.json")
    output = {
        "avg_roas_simple": simple_roas.round(4).to_dict(),
        "avg_roas_weighted": weighted_roas.round(4).to_dict(),
        "allocation": {c: round(v, 2) for c, v in allocation.items()},
        "expected_monthly_revenue": round(revenue, 2),
        "theoretical_ceiling_revenue": round(ceiling_revenue, 2),
        "diminishing_returns": {c: v["spend_roas_corr"] for c, v in dim.items()},
        "funnel_metrics": funnel_metrics(df),
        "customer_quality": customer_quality(df),
    }
    with open("analysis_output.json", "w") as f:
        json.dump(output, f, indent=2)
