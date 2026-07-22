import { useState, useEffect } from "react";
import { BREAKPOINTS, BreakpointKey } from "./breakpoints";

type AboveBelow = "above" | "below";
type Between = "between";

/**
 * Reactive, SSR-safe breakpoint hook backed by `window.matchMedia`.
 *
 * Unlike a plain `window.innerWidth` check at render time, this hook:
 * - Reacts to window resize via the browser's native MediaQueryList API
 * - Is safe to use in SSR environments (returns `false` on the server)
 * - Re-renders the component only when the matched state changes
 *
 * @example
 * // true when viewport is BELOW 768px (phone portrait)
 * const isPhone = useBreakpoint("below", "sm");
 *
 * // true when viewport is AT OR ABOVE 1024px (tablet landscape+)
 * const isDesktop = useBreakpoint("above", "lg");
 *
 * // true between tablet portrait and tablet landscape
 * const isTablet = useBreakpoint("between", "md", "lg");
 */
function buildQuery(mode: AboveBelow, key: BreakpointKey): string;
function buildQuery(
  mode: Between,
  lower: BreakpointKey,
  upper: BreakpointKey
): string;
function buildQuery(
  mode: AboveBelow | Between,
  key: BreakpointKey,
  upper?: BreakpointKey
): string {
  if (mode === "between" && upper) {
    return `(min-width: ${BREAKPOINTS[key]}px) and (max-width: ${BREAKPOINTS[upper] - 1}px)`;
  }
  if (mode === "above") {
    return `(min-width: ${BREAKPOINTS[key]}px)`;
  }
  // "below"
  return `(max-width: ${BREAKPOINTS[key] - 1}px)`;
}

export function useBreakpoint(mode: AboveBelow, key: BreakpointKey): boolean;
export function useBreakpoint(
  mode: Between,
  lower: BreakpointKey,
  upper: BreakpointKey
): boolean;
export function useBreakpoint(
  mode: AboveBelow | Between,
  key: BreakpointKey,
  upper?: BreakpointKey
): boolean {
  const query =
    mode === "between" && upper
      ? buildQuery("between", key, upper)
      : buildQuery(mode as AboveBelow, key);

  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    // Sync immediately in case it changed between render and effect
    setMatches(mql.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
