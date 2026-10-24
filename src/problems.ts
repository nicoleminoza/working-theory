// Canonical cross-case metadata. Source: docs/EXPERIENCE_ARCHITECTURE.md.
// Problem 01 has no separate short annotation; its full theory is used.

export type CaseId = "01" | "02" | "03";

export type Problem = {
  id: CaseId;
  line: string;
  meta: string;
  theory: string;
  /** Short row annotation shown on home once earned. Falls back to `theory`. */
  annotation?: string;
};

export const PROBLEMS: readonly Problem[] = [
  {
    id: "01",
    line: "The company needed one platform. Every team had a reason to say no.",
    meta: "Adobe · 2020–2024 →",
    theory:
      "A company-level strategy doesn’t become a team-level priority on its own.",
  },
  {
    id: "02",
    line: "The product was growing. The economics were breaking.",
    meta: "Adobe · 2019–2022 →",
    theory:
      "A business model only works if the product can measure what it values.",
    annotation: "The product has to measure what the business values.",
  },
  {
    id: "03",
    line: "The product was no longer something customers bought.",
    meta: "Adobe · 2018 →",
    theory:
      "Positioning starts before the story. It starts with deciding what job the product plays in the business.",
    annotation: "Positioning starts before the story.",
  },
];

export const CASE_IDS: readonly CaseId[] = PROBLEMS.map((p) => p.id);

export const PROBLEM_BY_ID = Object.fromEntries(
  PROBLEMS.map((p) => [p.id, p]),
) as Record<CaseId, Problem>;
