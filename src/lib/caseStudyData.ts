export const caseStudy1Data = [
  { subject: 1, x: 65, y: 115 },
  { subject: 2, x: 72, y: 122 },
  { subject: 3, x: 78, y: 120 },
  { subject: 4, x: 82, y: 130 },
  { subject: 5, x: 88, y: 128 },
  { subject: 6, x: 92, y: 135 },
  { subject: 7, x: 95, y: 140 },
  { subject: 8, x: 102, y: 138 },
  { subject: 9, x: 105, y: 145 },
  { subject: 10, x: 110, y: 142 },
].map(d => ({
  ...d,
  x2: d.x * d.x,
  y2: d.y * d.y,
  xy: d.x * d.y
}));

export const caseStudy1Totals = caseStudy1Data.reduce((acc, row) => ({
  subject: 'Σ',
  x: acc.x + row.x,
  y: acc.y + row.y,
  x2: acc.x2 + row.x2,
  y2: acc.y2 + row.y2,
  xy: acc.xy + row.xy
}), { subject: 'Σ', x: 0, y: 0, x2: 0, y2: 0, xy: 0 });

// Case Study: Simple Regression (Advertising Spend vs Sales)
export const regressionCaseStudyData = [
  { subject: 1, adSpend: 2.0, sales: 15.0 },
  { subject: 2, adSpend: 3.5, sales: 25.0 },
  { subject: 3, adSpend: 4.0, sales: 30.0 },
  { subject: 4, adSpend: 5.5, sales: 38.0 },
  { subject: 5, adSpend: 6.0, sales: 42.0 },
  { subject: 6, adSpend: 7.5, sales: 50.0 },
  { subject: 7, adSpend: 8.0, sales: 52.0 },
  { subject: 8, adSpend: 9.5, sales: 60.0 },
  { subject: 9, adSpend: 10.0, sales: 65.0 },
  { subject: 10, adSpend: 11.5, sales: 75.0 },
].map(d => ({
  ...d,
  x2: d.adSpend * d.adSpend,
  y2: d.sales * d.sales,
  xy: d.adSpend * d.sales
}));

export const regressionCaseStudyTotals = regressionCaseStudyData.reduce((acc, row) => ({
  subject: 'Σ',
  adSpend: acc.adSpend + row.adSpend,
  sales: acc.sales + row.sales,
  x2: acc.x2 + row.x2,
  y2: acc.y2 + row.y2,
  xy: acc.xy + row.xy
}), { subject: 'Σ', adSpend: 0, sales: 0, x2: 0, y2: 0, xy: 0 });
