import { CASE_IDS, type CaseId } from "../problems";

const EARNED_KEY = "working-theory-earned-v3";
const HOME_Y_KEY = "working-theory:home-y";

/** Earned case IDs in the order the visitor earned them. Fails soft to []. */
export function loadEarned(): CaseId[] {
  try {
    const raw = JSON.parse(localStorage.getItem(EARNED_KEY) || "[]");
    if (!Array.isArray(raw)) return [];
    const seen: CaseId[] = [];
    for (const id of raw) {
      if ((CASE_IDS as readonly string[]).includes(id) && !seen.includes(id))
        seen.push(id);
    }
    return seen;
  } catch {
    return [];
  }
}

export function saveEarned(ids: readonly CaseId[]): void {
  try {
    localStorage.setItem(EARNED_KEY, JSON.stringify(ids));
  } catch {
    /* storage unavailable: earned state lasts for this visit only */
  }
}

export function loadHomeY(): number {
  try {
    return Number(sessionStorage.getItem(HOME_Y_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function saveHomeY(y: number): void {
  try {
    sessionStorage.setItem(HOME_Y_KEY, String(y));
  } catch {
    /* ignore */
  }
}
