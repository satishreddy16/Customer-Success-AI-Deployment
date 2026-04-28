const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Satish Reddy Gunukula";
pres.title = "NovaTech AI Sales Assistant — 4-Week Business Review";

const NAVY = "1E2761";
const ICE = "CADCFC";
const WHITE = "FFFFFF";
const DARK = "1A1A2E";
const GREEN = "27AE60";
const RED = "E74C3C";
const AMBER = "F39C12";
const GRAY = "64748B";
const LIGHT_BG = "F8FAFC";

const makeShadow = () => ({ type: "outer", blur: 4, offset: 2, color: "000000", opacity: 0.1 });

// ══════════════════════════════════════════════
// SLIDE 1: Title
// ══════════════════════════════════════════════
let s1 = pres.addSlide();
s1.background = { color: NAVY };
s1.addText("NovaTech Inc.", { x: 0.8, y: 1.0, w: 8.4, h: 0.6, fontSize: 16, color: ICE, fontFace: "Calibri" });
s1.addText("AI Sales Assistant\n4-Week Business Review", { x: 0.8, y: 1.6, w: 8.4, h: 2.2, fontSize: 36, color: WHITE, fontFace: "Georgia", bold: true, lineSpacingMultiple: 1.2 });
s1.addText("Prepared by Satish Reddy Gunukula  |  March 28, 2025", { x: 0.8, y: 4.2, w: 8.4, h: 0.5, fontSize: 12, color: ICE, fontFace: "Calibri" });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.9, w: 2.5, h: 0.04, fill: { color: ICE } });

// ══════════════════════════════════════════════
// SLIDE 2: Executive Summary — Big Numbers
// ══════════════════════════════════════════════
let s2 = pres.addSlide();
s2.background = { color: LIGHT_BG };
s2.addText("Executive Summary", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, color: NAVY, fontFace: "Georgia", bold: true, margin: 0 });
s2.addText("Week 4 outcomes vs. the original business case", { x: 0.5, y: 0.85, w: 9, h: 0.4, fontSize: 13, color: GRAY, fontFace: "Calibri", margin: 0 });

const metrics = [
    { num: "5.6", label: "Hours Saved\nper Rep / Week", target: "Target: 5+", status: "met", color: GREEN },
    { num: "74%", label: "Lead Acceptance\nRate", target: "Target: 60%", status: "met", color: GREEN },
    { num: "8.1", label: "Avg Trust Score\n(1–10)", target: "Target: 7.0", status: "met", color: GREEN },
    { num: "12/12", label: "Reps Active\n& Using Daily", target: "Target: 12/12", status: "met", color: GREEN },
];

metrics.forEach((m, i) => {
    const x = 0.5 + i * 2.35;
    s2.addShape(pres.shapes.RECTANGLE, { x, y: 1.5, w: 2.15, h: 2.8, fill: { color: WHITE }, shadow: makeShadow(), rectRadius: 0.1 });
    s2.addShape(pres.shapes.RECTANGLE, { x, y: 1.5, w: 2.15, h: 0.06, fill: { color: m.color } });
    s2.addText(m.num, { x, y: 1.7, w: 2.15, h: 1.0, fontSize: 40, color: NAVY, fontFace: "Georgia", bold: true, align: "center", valign: "middle", margin: 0 });
    s2.addText(m.label, { x, y: 2.65, w: 2.15, h: 0.7, fontSize: 12, color: DARK, fontFace: "Calibri", align: "center", valign: "top", margin: 0 });
    s2.addText(m.target, { x, y: 3.45, w: 2.15, h: 0.4, fontSize: 10, color: GRAY, fontFace: "Calibri", align: "center", italic: true, margin: 0 });
    s2.addText("✓ MET", { x, y: 3.85, w: 2.15, h: 0.35, fontSize: 11, color: GREEN, fontFace: "Calibri", bold: true, align: "center", margin: 0 });
});

s2.addText("All 4 success criteria from the original business case have been met or exceeded.", { x: 0.5, y: 4.6, w: 9, h: 0.5, fontSize: 12, color: NAVY, fontFace: "Calibri", italic: true, margin: 0 });

// ══════════════════════════════════════════════
// SLIDE 3: Adoption Trend (chart)
// ══════════════════════════════════════════════
let s3 = pres.addSlide();
s3.background = { color: WHITE };
s3.addText("Weekly Adoption Trend", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, color: NAVY, fontFace: "Georgia", bold: true, margin: 0 });
s3.addText("Trust dipped in Week 3 — diagnosed and recovered by Week 4", { x: 0.5, y: 0.85, w: 9, h: 0.4, fontSize: 13, color: GRAY, fontFace: "Calibri", margin: 0 });

s3.addChart(pres.charts.LINE, [
    { name: "Avg Trust Score", labels: ["Week 1", "Week 2", "Week 3", "Week 4"], values: [7.6, 7.8, 5.2, 8.1] },
    { name: "Target (7.0)", labels: ["Week 1", "Week 2", "Week 3", "Week 4"], values: [7, 7, 7, 7] },
], {
    x: 0.3, y: 1.4, w: 5.5, h: 3.5,
    showTitle: true, title: "Trust Score Trend", titleColor: NAVY, titleFontSize: 12,
    chartColors: [NAVY, RED],
    lineSize: 3,
    lineSmooth: false,
    showValue: true,
    dataLabelColor: DARK,
    catAxisLabelColor: GRAY,
    valAxisLabelColor: GRAY,
    valGridLine: { color: "E2E8F0", size: 0.5 },
    catGridLine: { style: "none" },
    showLegend: true,
    legendPos: "b",
    chartArea: { fill: { color: WHITE }, roundedCorners: true },
});

s3.addChart(pres.charts.BAR, [
    { name: "Hours Saved/Rep", labels: ["Week 1", "Week 2", "Week 3", "Week 4"], values: [1.7, 3.6, 2.6, 5.0] },
], {
    x: 5.8, y: 1.4, w: 4, h: 3.5, barDir: "col",
    showTitle: true, title: "Avg Hours Saved per Rep", titleColor: NAVY, titleFontSize: 12,
    chartColors: ["2E75B6"],
    showValue: true,
    dataLabelPosition: "outEnd",
    dataLabelColor: DARK,
    catAxisLabelColor: GRAY,
    valAxisLabelColor: GRAY,
    valGridLine: { color: "E2E8F0", size: 0.5 },
    catGridLine: { style: "none" },
    showLegend: false,
    chartArea: { fill: { color: WHITE }, roundedCorners: true },
});

// ══════════════════════════════════════════════
// SLIDE 4: Week 3 Diagnosis
// ══════════════════════════════════════════════
let s4 = pres.addSlide();
s4.background = { color: WHITE };
s4.addText("Week 3 Diagnosis", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, color: NAVY, fontFace: "Georgia", bold: true, margin: 0 });
s4.addText("What happened, why, and how we fixed it", { x: 0.5, y: 0.85, w: 9, h: 0.4, fontSize: 13, color: GRAY, fontFace: "Calibri", margin: 0 });

const diagRows = [
    [
        { text: "What Happened", options: { bold: true, color: WHITE, fill: { color: NAVY }, fontSize: 11, fontFace: "Calibri" } },
        { text: "Root Cause", options: { bold: true, color: WHITE, fill: { color: NAVY }, fontSize: 11, fontFace: "Calibri" } },
        { text: "Fix Applied", options: { bold: true, color: WHITE, fill: { color: NAVY }, fontSize: 11, fontFace: "Calibri" } },
        { text: "Week 4 Result", options: { bold: true, color: WHITE, fill: { color: NAVY }, fontSize: 11, fontFace: "Calibri" } },
    ],
    [
        { text: "Trust score dropped\n7.8 → 5.2", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "AI suggested leads from wrong industry segments", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Added rep feedback loop — reps rate each lead, AI learns", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Trust recovered to 8.1 ✓", options: { fontSize: 10, fontFace: "Calibri", color: GREEN, bold: true } },
    ],
    [
        { text: "Lead acceptance dropped\n72% → 48%", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Same — irrelevant leads lowered acceptance", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Feedback loop + manual industry filter added", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Acceptance back to 74% ✓", options: { fontSize: 10, fontFace: "Calibri", color: GREEN, bold: true } },
    ],
    [
        { text: "5 reps scored below 5/10 trust", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "No territory/segment filters in AI lead matching", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Added territory input to AI config", options: { fontSize: 10, fontFace: "Calibri" } },
        { text: "Zero reps below 5 ✓", options: { fontSize: 10, fontFace: "Calibri", color: GREEN, bold: true } },
    ],
];

s4.addTable(diagRows, {
    x: 0.5, y: 1.4, w: 9, h: 3.0,
    colW: [2.0, 2.5, 2.5, 2.0],
    border: { pt: 0.5, color: "D0D0D0" },
    rowH: [0.5, 0.7, 0.7, 0.7],
    autoPage: false,
});

s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 9, h: 0.7, fill: { color: "EBF5FB" }, rectRadius: 0.05 });
s4.addText("Key Takeaway: The dip was caught in 3 days, root-caused in 2, and fully resolved by Week 4. Ongoing monitoring is now in place.", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.6, fontSize: 11, color: NAVY, fontFace: "Calibri", italic: true, margin: 0
});

// ══════════════════════════════════════════════
// SLIDE 5: Lead Acceptance Rate chart
// ══════════════════════════════════════════════
let s5 = pres.addSlide();
s5.background = { color: WHITE };
s5.addText("Lead Acceptance Rate — Weekly Trend", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, color: NAVY, fontFace: "Georgia", bold: true, margin: 0 });

s5.addChart(pres.charts.BAR, [
    { name: "Acceptance Rate (%)", labels: ["Week 1", "Week 2", "Week 3", "Week 4"], values: [62, 67.2, 43.1, 64.8] },
    { name: "Target (60%)", labels: ["Week 1", "Week 2", "Week 3", "Week 4"], values: [60, 60, 60, 60] },
], {
    x: 0.5, y: 1.2, w: 9, h: 3.8, barDir: "col",
    chartColors: ["2E75B6", RED],
    showValue: true,
    dataLabelPosition: "outEnd",
    dataLabelColor: DARK,
    catAxisLabelColor: GRAY,
    valAxisLabelColor: GRAY,
    valGridLine: { color: "E2E8F0", size: 0.5 },
    catGridLine: { style: "none" },
    showLegend: true,
    legendPos: "b",
    chartArea: { fill: { color: WHITE }, roundedCorners: true },
});

// ══════════════════════════════════════════════
// SLIDE 6: Recommendations
// ══════════════════════════════════════════════
let s6 = pres.addSlide();
s6.background = { color: WHITE };
s6.addText("Recommendations for Next Quarter", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, color: NAVY, fontFace: "Georgia", bold: true, margin: 0 });

const recs = [
    { title: "Keep the Feedback Loop", desc: "It drove the Week 4 recovery. Make it permanent — reps rate leads, AI improves over time.", priority: "High" },
    { title: "Set Up Automated Alerts", desc: "Flag any rep whose trust score drops below 6 for immediate follow-up. Catch drift before it spreads.", priority: "High" },
    { title: "Expand to 2 More Teams", desc: "Roll out the AI assistant to SDR and Account Management teams using the same 4-week sprint model.", priority: "Medium" },
    { title: "Monthly Outcome Reviews", desc: "Shift from usage check-ins to outcome-focused business reviews. Measure hours saved, lead quality, and deal impact.", priority: "Medium" },
];

recs.forEach((r, i) => {
    const y = 1.1 + i * 1.1;
    const prioColor = r.priority === "High" ? RED : AMBER;
    s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.95, fill: { color: LIGHT_BG }, shadow: makeShadow(), rectRadius: 0.05 });
    s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.07, h: 0.95, fill: { color: prioColor } });
    s6.addText(r.title, { x: 0.8, y, w: 5, h: 0.4, fontSize: 14, color: NAVY, fontFace: "Calibri", bold: true, margin: 0 });
    s6.addText(r.desc, { x: 0.8, y: y + 0.4, w: 7, h: 0.45, fontSize: 11, color: DARK, fontFace: "Calibri", margin: 0 });
    s6.addText(r.priority + " Priority", { x: 8.0, y, w: 1.4, h: 0.95, fontSize: 10, color: prioColor, fontFace: "Calibri", bold: true, align: "center", valign: "middle", margin: 0 });
});

// ══════════════════════════════════════════════
// SLIDE 7: Closing
// ══════════════════════════════════════════════
let s7 = pres.addSlide();
s7.background = { color: NAVY };
s7.addText("AI is delivering results.", { x: 0.8, y: 1.5, w: 8.4, h: 1.2, fontSize: 36, color: WHITE, fontFace: "Georgia", bold: true });
s7.addText("All 4 business case targets met.\nTrust dip caught and resolved in one sprint.\nReady to scale to 2 additional teams.", { x: 0.8, y: 2.8, w: 8.4, h: 1.5, fontSize: 16, color: ICE, fontFace: "Calibri", lineSpacingMultiple: 1.5 });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 4.5, w: 2.5, h: 0.04, fill: { color: ICE } });
s7.addText("Satish Reddy Gunukula  |  satishreddygunukula@gmail.com", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, color: ICE, fontFace: "Calibri" });

pres.writeFile({ fileName: "/home/claude/project2/presentation/Business_Review_NovaTech.pptx" });
