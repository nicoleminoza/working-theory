import { CASE_IDS, type CaseId } from "../problems";

export type Route = "home" | CaseId;

/**
 * Maps a location hash to a route.
 * Returns null for any hash that is not a route (e.g. "#foo", "#/04"), so the
 * caller can ignore it instead of treating it as home.
 */
export function parseHash(hash: string): Route | null {
  if (hash === "" || hash === "#" || hash === "#/") return "home";
  const m = /^#\/(\d\d)$/.exec(hash);
  if (m && (CASE_IDS as readonly string[]).includes(m[1]))
    return m[1] as CaseId;
  return null;
}

export function hashFor(route: Route): string {
  return route === "home" ? "#/" : `#/${route}`;
}
