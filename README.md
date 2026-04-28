# Customer Success Plan & AI Deployment Dashboard

**Project by:** Satish Reddy Gunukula  
**Tools:** Python, Excel, Tableau, Google Slides  
**Status:** Complete

---

## Overview

A mock customer success project for **NovaTech Inc.**, a B2B SaaS company rolling out an **AI Sales Assistant (LeadBot)** to a team of 12 sales reps. The project tracks a 4-week deployment sprint from onboarding through outcome measurement, including diagnosing and resolving a mid-sprint adoption dip.

This is the kind of work an **Applied AI Coach** or **Customer Success Analyst** does tracking whether AI tools are actually delivering the business results they were promised to bring.

---

## The Business Scenario

**Customer:** NovaTech Inc. (B2B SaaS, 12 sales reps)  
**AI Tool:** LeadBot — an AI assistant that researches and suggests leads for sales reps  
**Business Case:** Save reps 5+ hours/week on lead research, improve lead quality by 20%  
**Timeline:** 4-week sprint (March 3–28, 2025)

### What Happened

- **Week 1–2:** Smooth onboarding. All 12 reps activated, usage ramping up, trust scores healthy.
- **Week 3:** Trust dipped sharply (7.8 → 5.2). Five reps stopped trusting AI-suggested leads. Lead acceptance dropped from 72% to 48%.
- **Diagnosis:** AI was suggesting leads from wrong industry segments. No territory filters existed.
- **Fix:** Added a rep feedback loop (reps rate each lead) + territory/industry filters in AI config.
- **Week 4:** Full recovery. Trust back to 8.1, acceptance at 74%, hours saved hit 5.6/week exceeding the target.

---

## Project Structure

```
├── README.md
├── analysis.py                  # Main analysis script — generates all CSVs and findings
├── data/
│   └── Project2_Customer_Success_Plan.xlsx   # Full workbook with 4 sheets
├── dashboard/
│   ├── weekly_summary.csv                    # Aggregated metrics by week (Tableau-ready)
│   ├── rep_level_weekly.csv                  # Per-rep data across 4 weeks
│   ├── trust_score_by_rep.csv                # Trust scores pivoted by rep × week
│   └── adoption_trend_with_targets.csv       # Trends with target lines for charts
├── analysis/
│   ├── outcome_vs_business_case.csv          # Final outcomes vs original targets
│   └── week3_diagnosis.csv                   # Root cause analysis of the trust dip
├── presentation/
│   ├── Business_Review_NovaTech.pptx         # 7-slide executive business review deck
│   └── build_deck.js                         # Script that generates the presentation
└── docs/
    └── tableau_setup_guide.md                # Step-by-step Tableau dashboard instructions
```

---

## Key Deliverables

### 1. Success Plan (Excel)
A structured 4-week plan with weekly goals, pass/fail criteria, risk tracking, and mitigation strategies. Located in the `Success Plan` sheet of the workbook.

### 2. Weekly Tracking Data (Excel + CSV)
Raw adoption data for all 12 reps across 4 weeks — logins, leads researched, leads accepted, hours saved, trust scores, and notes. The data has a built-in story: a Week 3 trust dip caused by irrelevant AI suggestions.

### 3. Dashboard Data (CSVs)
Four Tableau-ready CSV files for building the adoption dashboard:
- **weekly_summary.csv** : one row per week, all key metrics
- **rep_level_weekly.csv** : granular per-rep data for drill-downs
- **trust_score_by_rep.csv** :pivoted trust scores for heatmap
- **adoption_trend_with_targets.csv** : actuals vs targets for line charts

### 4. Analysis Outputs
- **outcome_vs_business_case.csv** : did the AI tool deliver what was promised?
- **week3_diagnosis.csv** : what went wrong, why, and how it was fixed

### 5. Business Review Presentation (PPTX)
A 7-slide executive deck covering:
1. Title slide
2. Executive summary with 4 big metrics (all targets met)
3. Adoption trend charts (trust + hours saved)
4. Week 3 diagnosis table
5. Lead acceptance rate chart
6. Recommendations for next quarter
7. Closing summary

---

## How to Run

```bash
# Install dependencies
pip install pandas openpyxl

# Run the analysis
python analysis.py
```

This generates all CSV files in the `dashboard/` and `analysis/` folders.

---

## Tableau Dashboard Setup

Connect to the CSV files in `dashboard/` and build:

1. **Trust Score Line Chart** — `adoption_trend_with_targets.csv` → Line chart with actual trust score + target reference line
2. **Hours Saved Bar Chart** — Same file → Bar chart showing weekly hours saved vs 5-hour target
3. **Lead Acceptance Rate** — Same file → Bar chart with 60% target line
4. **Rep-Level Heatmap** — `trust_score_by_rep.csv` → Highlight table showing each rep's trust score by week
5. **KPI Cards** — `weekly_summary.csv` filtered to Week 4 → Big number cards for final metrics

See `docs/tableau_setup_guide.md` for step-by-step instructions.

---

## Skills Demonstrated

- **Customer Success Planning** — Designing measurable deployment plans with clear targets
- **AI Deployment Tracking** — Monitoring adoption, usage, and outcome metrics weekly
- **Problem Diagnosis** — Catching a trust dip, identifying root cause, recommending a fix
- **Outcome Measurement** — Proving AI value through business results, not just usage stats
- **Business Reviews** — Presenting findings to executives with data-backed recommendations
- **Sprint-based Execution** — Running a structured 4-week deployment with weekly checkpoints
- **Data Analysis** — Python (pandas), Excel, Tableau dashboard design
- **Stakeholder Communication** — Translating technical AI performance into business language

---

## Contact

**Satish Reddy Gunukula**  
satishreddygunukula@gmail.com  
[LinkedIn](https://linkedin.com/in/satishreddy16)
