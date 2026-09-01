export type Act = {
  title: string;
  start: number;
  end: number;
  color: 'primary' | 'secondary' | 'tertiary';
};

export const acts: Act[] = [
  { title: "The Setup", start: 1, end: 3, color: 'primary' },
  { title: "The Hook", start: 4, end: 6, color: 'secondary' },
  { title: "Definitions", start: 7, end: 8, color: 'primary' },
  { title: "Association", start: 9, end: 16, color: 'secondary' },
  { title: "Measurement", start: 17, end: 20, color: 'primary' },
  { title: "Case Study 1", start: 21, end: 26, color: 'tertiary' },
  { title: "Other Types", start: 27, end: 27, color: 'secondary' },
  { title: "Regression", start: 28, end: 33, color: 'primary' },
  { title: "Error Minimization", start: 34, end: 36, color: 'secondary' },
  { title: "Assumptions", start: 37, end: 38, color: 'primary' },
  { title: "Regression Case Study", start: 39, end: 50, color: 'tertiary' },
  { title: "Conclusion", start: 51, end: 52, color: 'secondary' },
];

export function getActForSection(sectionNum: number): Act | undefined {
  return acts.find(act => sectionNum >= act.start && sectionNum <= act.end);
}
