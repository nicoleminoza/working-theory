import { useCallback, useRef, useState } from "react";
import type { CaseId } from "../problems";
import { loadEarned, saveEarned } from "./storage";

/** Earned theories, in earned order, persisted to localStorage. */
export function useEarned() {
  const [earned, setEarned] = useState<CaseId[]>(loadEarned);
  const latest = useRef(earned);

  const earn = useCallback((id: CaseId) => {
    if (latest.current.includes(id)) return;
    const next = [...latest.current, id];
    latest.current = next;
    saveEarned(next);
    setEarned(next);
  }, []);

  return { earned, earn };
}
