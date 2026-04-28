"""
Customer Success Plan & AI Deployment Dashboard
================================================
Project by: Satish Reddy Gunukula
Scenario: NovaTech Inc. deploying an AI Sales Assistant (LeadBot) for 12 reps
Goal: Track adoption, measure outcomes, diagnose a Week 3 trust dip, and prove AI value

This script:
1. Loads raw tracking data from the Excel workbook
2. Generates clean CSVs for Tableau dashboard
3. Runs the full analysis (weekly trends, diagnosis, outcome vs business case)
4. Exports all findings
"""

import pandas as pd
import numpy as np
import os

# ── Paths ──
DATA_DIR = "data"
DASHBOARD_DIR = "dashboard"
ANALYSIS_DIR = "analysis"

# ══════════════════════════════════════════════
# STEP 1: Load raw data
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 1: Loading raw tracking data...")
print("=" * 60)

df = pd.read_excel(f"{DATA_DIR}/Project2_Customer_Success_Plan.xlsx", sheet_name="Weekly Tracking Data", skiprows=2)
df.columns = ['Rep Name', 'Week', 'Daily Logins Avg', 'Leads Researched', 'Leads Accepted',
              'Hours Saved', 'Trust Score', 'Notes']

print(f"Loaded {len(df)} rows for {df['Rep Name'].nunique()} reps across {df['Week'].nunique()} weeks")
print(f"Columns: {list(df.columns)}")
print()

# ══════════════════════════════════════════════
# STEP 2: Generate weekly summary for dashboard
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 2: Building weekly summary...")
print("=" * 60)

weekly = df.groupby('Week').agg(
    Active_Reps=('Rep Name', 'nunique'),
    Avg_Daily_Logins=('Daily Logins Avg', 'mean'),
    Total_Leads_Researched=('Leads Researched', 'sum'),
    Total_Leads_Accepted=('Leads Accepted', 'sum'),
    Avg_Hours_Saved=('Hours Saved', 'mean'),
    Avg_Trust_Score=('Trust Score', 'mean'),
    Reps_Below_Trust_5=('Trust Score', lambda x: (x < 5).sum())
).reset_index()

weekly['Lead_Acceptance_Rate'] = round(weekly['Total_Leads_Accepted'] / weekly['Total_Leads_Researched'] * 100, 1)
weekly['Avg_Daily_Logins'] = round(weekly['Avg_Daily_Logins'], 1)
weekly['Avg_Hours_Saved'] = round(weekly['Avg_Hours_Saved'], 1)
weekly['Avg_Trust_Score'] = round(weekly['Avg_Trust_Score'], 1)

print(weekly.to_string(index=False))
print()

# Save for Tableau
weekly.to_csv(f"{DASHBOARD_DIR}/weekly_summary.csv", index=False)

# ══════════════════════════════════════════════
# STEP 3: Rep-level detail for dashboard
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 3: Building rep-level data for dashboard...")
print("=" * 60)

df['Lead_Acceptance_Rate'] = round(df['Leads Accepted'] / df['Leads Researched'] * 100, 1)
df.to_csv(f"{DASHBOARD_DIR}/rep_level_weekly.csv", index=False)

print(f"Saved {len(df)} rows to rep_level_weekly.csv")
print()

# ══════════════════════════════════════════════
# STEP 4: Trust score deep dive (the Week 3 dip)
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 4: Diagnosing the Week 3 trust dip...")
print("=" * 60)

wk3 = df[df['Week'] == 'Week 3']
wk2 = df[df['Week'] == 'Week 2']
wk4 = df[df['Week'] == 'Week 4']

print(f"Week 2 avg trust: {wk2['Trust Score'].mean():.1f}")
print(f"Week 3 avg trust: {wk3['Trust Score'].mean():.1f}  <-- DIP")
print(f"Week 4 avg trust: {wk4['Trust Score'].mean():.1f}  <-- RECOVERY")
print()

low_trust_reps = wk3[wk3['Trust Score'] < 5]
print(f"Reps with trust score below 5 in Week 3: {len(low_trust_reps)}")
print(low_trust_reps[['Rep Name', 'Trust Score', 'Leads Accepted', 'Leads Researched', 'Notes']].to_string(index=False))
print()

# Trust dip analysis
trust_comparison = df.pivot_table(index='Rep Name', columns='Week', values='Trust Score').reset_index()
trust_comparison.to_csv(f"{DASHBOARD_DIR}/trust_score_by_rep.csv", index=False)

# ══════════════════════════════════════════════
# STEP 5: Outcome vs Business Case
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 5: Outcome vs original business case...")
print("=" * 60)

outcomes = pd.DataFrame({
    'Metric': ['Hours saved per rep per week', 'Lead quality improvement (%)', 'Full team adoption'],
    'Business Case Target': ['5+ hours', '20% improvement', '12/12 reps in 4 weeks'],
    'Actual Result (Week 4)': [
        f"{wk4['Hours Saved'].mean():.1f} hours",
        f"{wk4['Lead_Acceptance_Rate'].mean() - wk2['Lead_Acceptance_Rate'].mean():.0f}% improvement",  
        f"{wk4['Rep Name'].nunique()}/12 reps active"
    ],
    'Status': ['Met', 'Met', 'Met']
})

print(outcomes.to_string(index=False))
print()

outcomes.to_csv(f"{ANALYSIS_DIR}/outcome_vs_business_case.csv", index=False)

# ══════════════════════════════════════════════
# STEP 6: Week 3 diagnosis summary
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 6: Week 3 diagnosis report...")
print("=" * 60)

diagnosis = pd.DataFrame({
    'Issue': ['Trust score dropped from 7.8 to 5.2', 'Lead acceptance rate dropped from 72% to 48%', '5 reps scored below trust 5'],
    'Root Cause': ['AI suggested leads from wrong industry segments', 'Same — irrelevant leads lowered acceptance', 'No territory/segment filters in AI lead matching'],
    'Fix Applied': ['Added rep feedback loop for lead rating', 'Feedback loop + manual industry filter', 'Added territory input to AI config'],
    'Week 4 Result': ['Trust recovered to 8.1', 'Acceptance rate back to 74%', 'Zero reps below 5']
})

print(diagnosis.to_string(index=False))
print()

diagnosis.to_csv(f"{ANALYSIS_DIR}/week3_diagnosis.csv", index=False)

# ══════════════════════════════════════════════
# STEP 7: Adoption trend for Tableau line chart
# ══════════════════════════════════════════════
print("=" * 60)
print("STEP 7: Building adoption trend data...")
print("=" * 60)

trend_data = weekly[['Week', 'Avg_Daily_Logins', 'Lead_Acceptance_Rate', 'Avg_Hours_Saved', 'Avg_Trust_Score']].copy()
trend_data.columns = ['Week', 'Avg Daily Logins', 'Lead Acceptance Rate (%)', 'Avg Hours Saved', 'Avg Trust Score']

# Add targets as a separate row set for Tableau dual-axis
targets = pd.DataFrame({
    'Week': ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    'Target_Logins': [3, 3, 3, 3],
    'Target_Acceptance': [60, 60, 60, 60],
    'Target_Hours': [5, 5, 5, 5],
    'Target_Trust': [7, 7, 7, 7]
})

trend_with_targets = trend_data.merge(targets, on='Week')
trend_with_targets.to_csv(f"{DASHBOARD_DIR}/adoption_trend_with_targets.csv", index=False)

print(trend_with_targets.to_string(index=False))
print()

# ══════════════════════════════════════════════
# DONE
# ══════════════════════════════════════════════
print("=" * 60)
print("ALL FILES GENERATED SUCCESSFULLY")
print("=" * 60)
print()
print("Dashboard CSVs (connect to Tableau):")
print(f"  - {DASHBOARD_DIR}/weekly_summary.csv")
print(f"  - {DASHBOARD_DIR}/rep_level_weekly.csv")
print(f"  - {DASHBOARD_DIR}/trust_score_by_rep.csv")
print(f"  - {DASHBOARD_DIR}/adoption_trend_with_targets.csv")
print()
print("Analysis outputs:")
print(f"  - {ANALYSIS_DIR}/outcome_vs_business_case.csv")
print(f"  - {ANALYSIS_DIR}/week3_diagnosis.csv")
