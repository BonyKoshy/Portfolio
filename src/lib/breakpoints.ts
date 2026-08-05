/**
 * Single source of truth for all breakpoint values across the project.
 *
 * These values mirror the `--breakpoint-*` tokens defined in @theme in
 * `src/app/index.css` exactly. Any change here MUST be reflected there too.
 *
 * Tier guide:
 *  xs  (480)  — Phone portrait
 *  sm  (768)  — Phone landscape
 *  md  (834)  — Tablet portrait  (iPad Mini/Air)
 *  lg  (1024) — Tablet landscape / small laptop
 *  xl  (1440) — Laptop / desktop
 *  xxl (1600) — Wide desktop
 *  uhd (2560) — 4K / ultra-wide (Ultra HD)
 */
export const BREAKPOINTS = {
  xs: 480,
  sm: 768,
  md: 834,
  lg: 1024,
  xl: 1440,
  xxl: 1600,
  uhd: 2560,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
