import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import Home from "./home/Home";
import Case01 from "./cases/Case01";
import Case02 from "./cases/Case02";
import Case03 from "./cases/Case03";
import { Header } from "./shell/Header";
import { Footer } from "./shell/Footer";
import { BackNav } from "./shell/BackNav";
import { hashFor, parseHash, type Route } from "./shell/router";
import { loadHomeY, saveHomeY } from "./shell/storage";
import { useEarned } from "./shell/useEarned";
import type { CaseId } from "./problems";

const CASES: Record<CaseId, ComponentType> = {
  "01": Case01,
  "02": Case02,
  "03": Case03,
};

const FADE_OUT_MS = 140;
const FADE_IN_MS = 200;
// A theory is earned once this much of the final ending is in view.
const EARN_THRESHOLD = 0.1;

type Fade = { opacity: number; ms: number };

function initialRoute(): Route {
  const route = parseHash(window.location.hash);
  if (route === null) {
    // Unknown hash on first load: show home and tidy the URL.
    window.history.replaceState(null, "", hashFor("home"));
    return "home";
  }
  return route;
}

export default function App() {
  const [route, setRoute] = useState<Route>(initialRoute);
  const [fade, setFade] = useState<Fade>({ opacity: 1, ms: FADE_IN_MS / 1000 });
  const { earned, earn } = useEarned();

  const routeRef = useRef(route);
  const homeY = useRef(loadHomeY());
  const timer = useRef<number>(0);
  const pendingScroll = useRef<number | null>(null);
  const firstRender = useRef(true);

  const commit = useCallback((next: Route, immediate: boolean) => {
    routeRef.current = next;
    pendingScroll.current = next === "home" ? homeY.current : 0;
    // From a case the old view is replaced at once, then fades back in.
    if (immediate) setFade({ opacity: 0, ms: 0 });
    setRoute(next);
  }, []);

  const go = useCallback(
    (next: Route) => {
      window.clearTimeout(timer.current);
      const current = routeRef.current;
      if (next === current) {
        // Cancels a fade-out that was waiting to swap routes.
        setFade({ opacity: 1, ms: FADE_IN_MS / 1000 });
        return;
      }
      if (current === "home") {
        homeY.current = window.scrollY;
        saveHomeY(homeY.current);
        setFade({ opacity: 0, ms: FADE_OUT_MS / 1000 });
        timer.current = window.setTimeout(
          () => commit(next, false),
          FADE_OUT_MS,
        );
      } else {
        commit(next, true);
      }
    },
    [commit],
  );

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash(window.location.hash);
      if (next === null) {
        // Not a route (a stray anchor, an unknown id): stay where we are.
        window.history.replaceState(null, "", hashFor(routeRef.current));
        return;
      }
      go(next);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.clearTimeout(timer.current);
    };
  }, [go]);

  // After a route swap: position instantly (no smooth scroll), then fade in.
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const top = pendingScroll.current ?? 0;
    pendingScroll.current = null;
    window.scrollTo({ top, left: 0, behavior: "instant" });
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        setFade({ opacity: 1, ms: FADE_IN_MS / 1000 }),
      ),
    );
    return () => cancelAnimationFrame(id);
  }, [route]);

  // Earn the theory when the active case's ending comes into view.
  useEffect(() => {
    if (route === "home") return;
    const el = document.querySelector(`[data-wt-ending="${route}"]`);
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) earn(route);
      },
      { threshold: EARN_THRESHOLD },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [route, earn]);

  const isCase = route !== "home";
  const ActiveCase = isCase ? CASES[route] : null;

  return (
    <>
      <Header isCase={isCase} />
      <div
        style={{
          opacity: fade.opacity,
          transition: `opacity ${fade.ms}s ease`,
        }}
      >
        {ActiveCase ? <ActiveCase /> : <Home earned={earned} />}
        {isCase && <BackNav />}
      </div>
      <Footer />
    </>
  );
}
