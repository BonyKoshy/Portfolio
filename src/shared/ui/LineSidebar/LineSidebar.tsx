import { useRef, useState, useCallback, useEffect, CSSProperties } from "react";
import "./LineSidebar.css";

const FALLOFF_CURVES: Record<string, (p: number) => number> = {
  linear: (p) => p,
  smooth: (p) => p * p * (3 - 2 * p),
  sharp: (p) => p * p * p,
};

const DEFAULT_ITEMS = [
  "Overview",
  "Components",
  "Animations",
  "Backgrounds",
  "Showcase",
  "Playground",
  "Templates",
  "Changelog",
  "Community",
  "Resources",
  "Documentation",
  "Support",
];

export interface LineSidebarItem {
  label: string;
  isHeader?: boolean;
  id?: string;
}

export interface LineSidebarProps {
  items?: (string | LineSidebarItem)[];
  accentColor?: string;
  textColor?: string;
  markerColor?: string;
  showIndex?: boolean;
  showMarker?: boolean;
  proximityRadius?: number;
  maxShift?: number;
  falloff?: "linear" | "smooth" | "sharp";
  markerLength?: number;
  markerGap?: number;
  tickScale?: number;
  scaleTick?: boolean;
  itemGap?: number;
  fontSize?: number;
  smoothing?: number;
  defaultActive?: number | null;
  activeIndex?: number | null;
  isHovered?: boolean;
  onItemClick?: (index: number, label: string) => void;
  className?: string;
}

export const LineSidebar = ({
  items = DEFAULT_ITEMS,
  accentColor = "#A855F7",
  textColor = "#c4c4c4",
  markerColor = "#6c6c6c",
  showIndex = true,
  showMarker = true,
  proximityRadius = 100,
  maxShift = 30,
  falloff = "smooth",
  markerLength = 60,
  markerGap = 0,
  tickScale = 0.5,
  scaleTick = true,
  itemGap = 20,
  fontSize = 1.1,
  smoothing = 100,
  defaultActive = null,
  activeIndex: controlledActiveIndex,
  isHovered = false,
  onItemClick,
  className = "",
}: LineSidebarProps) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const targetsRef = useRef<number[]>([]);
  const currentRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);

  const [internalActive, setInternalActive] = useState<number | null>(
    defaultActive
  );
  const activeIndex =
    controlledActiveIndex !== undefined
      ? controlledActiveIndex
      : internalActive;

  const activeRef = useRef(activeIndex);
  const smoothingRef = useRef(smoothing);

  useEffect(() => {
    activeRef.current = activeIndex;
    smoothingRef.current = smoothing;
  }, [activeIndex, smoothing]);

  // Single rAF loop that eases every item's --effect toward its target using
  // frame-rate independent exponential smoothing, so color, shift and scale
  // all move together without staggering CSS transitions.
  const runFrame = useCallback(function frame(now: number) {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = Math.max(smoothingRef.current, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;
    const itemEls = itemRefs.current;
    for (let i = 0; i < itemEls.length; i++) {
      const el = itemEls[i];
      if (!el) continue;
      const target = Math.max(
        targetsRef.current[i] || 0,
        activeRef.current === i ? 1 : 0
      );
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      currentRef.current[i] = value;
      el.style.setProperty("--effect", value.toFixed(4));
      el.style.setProperty("--effect-pct", `${(value * 100).toFixed(2)}%`);
      if (!settled) moving = true;
    }

    rafRef.current = moving ? requestAnimationFrame(frame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) return;
    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  // Global mouse/pointer listener for proximity physics across the entire screen
  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      const list = listRef.current;
      if (!list) return;
      const listRect = list.getBoundingClientRect();

      // Check proximity area around the sidebar list
      const isNearX =
        e.clientX >= listRect.left - 120 && e.clientX <= listRect.right + 250;
      const isNearY =
        e.clientY >= listRect.top - 120 && e.clientY <= listRect.bottom + 120;

      if (isNearX && isNearY) {
        const easeFunc =
          falloff && FALLOFF_CURVES[falloff]
            ? FALLOFF_CURVES[falloff]
            : (p: number) => p;
        const itemEls = itemRefs.current;
        for (let i = 0; i < itemEls.length; i++) {
          const el = itemEls[i];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const distance = Math.abs(e.clientY - center);
          if (easeFunc) {
            targetsRef.current[i] = easeFunc(
              Math.max(0, 1 - distance / proximityRadius)
            );
          }
        }
        startLoop();
      } else {
        // Reset targets when pointer moves away
        if (targetsRef.current.some((v) => v > 0)) {
          targetsRef.current = targetsRef.current.map(() => 0);
          startLoop();
        }
      }
    };

    window.addEventListener("pointermove", handleGlobalPointerMove);
    return () =>
      window.removeEventListener("pointermove", handleGlobalPointerMove);
  }, [falloff, proximityRadius, startLoop]);

  const handleClick = useCallback(
    (index: number, label: string) => {
      setInternalActive(index);
      onItemClick?.(index, label);
    },
    [onItemClick]
  );

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  useEffect(
    () => () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  const customStyle: CSSProperties = {
    "--accent-color": accentColor,
    "--text-color": textColor,
    "--marker-color": markerColor,
    "--marker-length": `${markerLength}px`,
    "--marker-gap": `${markerGap}px`,
    "--tick-scale": tickScale,
    "--max-shift": `${maxShift}px`,
    "--item-gap": `${itemGap}px`,
    "--font-size": `${fontSize}rem`,
    "--smoothing": `${smoothing}ms`,
  } as CSSProperties;

  return (
    <nav
      className={`line-sidebar${showMarker ? " line-sidebar--markers" : ""}${
        scaleTick ? " line-sidebar--scale-tick" : ""
      }${isHovered ? " line-sidebar--hovered" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={customStyle}
    >
      <ul ref={listRef} className="line-sidebar__list">
        {items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const isHeader = typeof item === "object" && item.isHeader;

          return (
            <li
              key={`${label}-${index}`}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`line-sidebar__item ${isHeader ? "line-sidebar__item--header" : ""}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => {
                if (!isHeader) handleClick(index, label);
              }}
            >
              {!isHeader && showMarker && (
                <span className="line-sidebar__marker" aria-hidden="true" />
              )}
              <span className="line-sidebar__label">
                {!isHeader && showIndex && (
                  <span className="line-sidebar__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="line-sidebar__text">{label}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LineSidebar;
