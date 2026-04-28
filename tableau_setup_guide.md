# Tableau Dashboard Setup Guide

Step-by-step instructions to build the AI Deployment Dashboard in Tableau.

---

## Step 1: Connect Your Data

1. Open Tableau Desktop (or Tableau Public — it's free)
2. Click **"Text file"** on the Connect pane
3. Navigate to the `dashboard/` folder
4. Open `adoption_trend_with_targets.csv`
5. Repeat for the other 3 CSV files — you'll have 4 data sources

---

## Step 2: Build the Trust Score Line Chart

**Data source:** `adoption_trend_with_targets.csv`

1. Drag `Week` to **Columns**
2. Drag `Avg Trust Score` to **Rows**
3. Drag `Target_Trust` to **Rows** (it will create a second axis)
4. Right-click the second axis → **Dual Axis** → **Synchronize Axis**
5. Click on the `Target_Trust` mark → change to **Line** → make it dashed and red
6. Click on the `Avg Trust Score` mark → change color to navy blue, increase line thickness
7. Add a title: **"Trust Score Trend — Week 3 Dip & Recovery"**
8. Add data labels to the trust score line

**What to look for:** The clear dip from 7.8 to 5.2 in Week 3, then recovery to 8.1 in Week 4.

---

## Step 3: Build the Hours Saved Bar Chart

**Data source:** `adoption_trend_with_targets.csv`

1. Drag `Week` to **Columns**
2. Drag `Avg Hours Saved` to **Rows**
3. Change mark type to **Bar**
4. Add `Target_Hours` as a reference line (right-click axis → Add Reference Line → Constant = 5)
5. Color the bars blue, make the reference line red and dashed
6. Add data labels
7. Title: **"Average Hours Saved per Rep per Week"**

**What to look for:** Week 4 hits 5.0+ hours — meeting the business case target.

---

## Step 4: Build the Lead Acceptance Rate Chart

**Data source:** `adoption_trend_with_targets.csv`

1. Drag `Week` to **Columns**
2. Drag `Lead Acceptance Rate (%)` to **Rows**
3. Change to **Bar** chart
4. Add reference line at 60% (the target)
5. Color bars, add labels
6. Title: **"Lead Acceptance Rate — Weekly Trend"**

---

## Step 5: Build the Rep-Level Trust Heatmap

**Data source:** `trust_score_by_rep.csv`

1. Drag `Rep Name` to **Rows**
2. Drag all Week columns (Week 1, Week 2, Week 3, Week 4) to **Columns** using Measure Names/Values
3. Change mark type to **Square** or **Text**
4. Color by trust score value — use a Red-Yellow-Green color scale
5. Title: **"Trust Score by Rep — Weekly View"**

**What to look for:** The red cells in Week 3 for the 5 reps who lost trust.

---

## Step 6: Build KPI Summary Cards

**Data source:** `weekly_summary.csv`

1. Filter to `Week 4` only
2. Create 4 separate sheets, each showing one big number:
   - Active Reps: **12**
   - Avg Hours Saved: **5.6**
   - Lead Acceptance: **74%**
   - Avg Trust Score: **8.1**
3. Format each as a large number with a label below
4. Use green color for "Met" indicators

---

## Step 7: Combine into a Dashboard

1. Create a new **Dashboard** (Dashboard → New Dashboard)
2. Set size to **Automatic** or **1200 x 800**
3. Arrange your sheets:
   - **Top row:** 4 KPI cards side by side
   - **Middle left:** Trust Score Line Chart
   - **Middle right:** Hours Saved Bar Chart
   - **Bottom:** Rep-Level Heatmap
4. Add a title: **"NovaTech AI Sales Assistant — Deployment Dashboard"**
5. Add a subtitle: **"4-Week Sprint: March 3–28, 2025"**

---

## Step 8: Publish

- **Tableau Public:** Save → Server → Tableau Public → Save to Tableau Public
- This gives you a shareable link you can add to your portfolio and LinkedIn

---

## Tips

- Use consistent colors across all charts (navy for actuals, red for targets)
- Keep the dashboard clean — don't overcrowd
- Add a text box explaining the Week 3 dip story
- Test the filters — make sure Week filter works across all sheets
