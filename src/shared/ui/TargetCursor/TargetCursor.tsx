import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useAnimation,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";
import "./TargetCursor.css";

interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
  cursorColor?: string;
  cursorColorOnTarget?: string;
}

const getContainingBlock = (
  element: HTMLElement | null
): HTMLElement | null => {
  let node = element?.parentElement;
  while (node && node !== document.documentElement) {
    const style = getComputedStyle(node);
    if (
      style.transform !== "none" ||
      style.perspective !== "none" ||
      style.filter !== "none" ||
      style.willChange.includes("transform") ||
      style.willChange.includes("perspective") ||
      style.willChange.includes("filter") ||
      /paint|layout|strict|content/.test(style.contain)
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
};

const getContainingBlockOffset = (
  block: HTMLElement | null
): { x: number; y: number } => {
  if (!block) return { x: 0, y: 0 };
  const rect = block.getBoundingClientRect();
  return { x: rect.left + block.clientLeft, y: rect.top + block.clientTop };
};

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
  cursorColor = "#ffffff",
  cursorColorOnTarget,
}: TargetCursorProps) => {
  const [isTouchMode, setIsTouchMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastTouchTime = 0;
    const onTouchStart = () => {
      lastTouchTime = Date.now();
      setIsTouchMode(true);
    };
    const onMouseMove = () => {
      if (Date.now() - lastTouchTime > 500) {
        setIsTouchMode(false);
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const containingBlockRef = useRef<HTMLElement | null>(null);

  // Core motion values
  const cursorX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const cursorY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  // Scaling
  const dotScale = useMotionValue(1);
  const cursorScale = useMotionValue(1);

  // Colors
  const activeColor = useMotionValue(cursorColor);

  // Rotation controls
  const controls = useAnimation();

  // 4 Corners Motion Values (x, y)
  const cx0 = useMotionValue(0);
  const cx1 = useMotionValue(0);
  const cx2 = useMotionValue(0);
  const cx3 = useMotionValue(0);
  const cornersX = useMemo<
    [
      MotionValue<number>,
      MotionValue<number>,
      MotionValue<number>,
      MotionValue<number>,
    ]
  >(() => [cx0, cx1, cx2, cx3], [cx0, cx1, cx2, cx3]);

  const cy0 = useMotionValue(0);
  const cy1 = useMotionValue(0);
  const cy2 = useMotionValue(0);
  const cy3 = useMotionValue(0);
  const cornersY = useMemo<
    [
      MotionValue<number>,
      MotionValue<number>,
      MotionValue<number>,
      MotionValue<number>,
    ]
  >(() => [cy0, cy1, cy2, cy3], [cy0, cy1, cy2, cy3]);

  // State refs for frame loop
  const isHoveringRef = useRef(false);
  const activeStrengthRef = useRef(0);
  const targetCornerPositionsRef = useRef<{ x: number; y: number }[] | null>(
    null
  );
  const activeTargetRef = useRef<HTMLElement | null>(null);

  const moveCursor = useCallback(
    (x: number, y: number) => {
      const { x: offsetX, y: offsetY } = getContainingBlockOffset(
        containingBlockRef.current
      );
      animate(cursorX, x - offsetX, { duration: 0.1, ease: "easeOut" });
      animate(cursorY, y - offsetY, { duration: 0.1, ease: "easeOut" });
    },
    [cursorX, cursorY]
  );

  // Initializing idle corners
  const setIdleCorners = useCallback(() => {
    const { cornerSize } = constants;
    const positions = [
      { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
      { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
      { x: cornerSize * 0.5, y: cornerSize * 0.5 },
      { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
    ];
    positions.forEach((pos, i) => {
      animate(cornersX[i as 0 | 1 | 2 | 3], pos.x, {
        duration: 0.3,
        ease: [0.215, 0.61, 0.355, 1],
      });
      animate(cornersY[i as 0 | 1 | 2 | 3], pos.y, {
        duration: 0.3,
        ease: [0.215, 0.61, 0.355, 1],
      });
    });
  }, [constants, cornersX, cornersY]);

  // Frame Loop (replaces GSAP ticker for corners)
  useAnimationFrame(() => {
    if (!isHoveringRef.current || !targetCornerPositionsRef.current) return;
    const strength = activeStrengthRef.current;
    if (strength === 0) return;

    const cx = cursorX.get();
    const cy = cursorY.get();

    for (let i = 0; i < 4; i++) {
      const idx = i as 0 | 1 | 2 | 3;
      const currentX = cornersX[idx].get();
      const currentY = cornersY[idx].get();

      const targetX = targetCornerPositionsRef.current[idx]!.x - cx;
      const targetY = targetCornerPositionsRef.current[idx]!.y - cy;

      const finalX = currentX + (targetX - currentX) * strength;
      const finalY = currentY + (targetY - currentY) * strength;

      const lerpFactor = parallaxOn && strength >= 0.99 ? 0.2 : 0.4;
      cornersX[idx].set(currentX + (finalX - currentX) * lerpFactor);
      cornersY[idx].set(currentY + (finalY - currentY) * lerpFactor);
    }
  });

  useEffect(() => {
    if (isTouchMode) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = "none";

    containingBlockRef.current = getContainingBlock(containerRef.current);

    const { cornerSize } = constants;
    cornersX[0].set(-cornerSize * 1.5);
    cornersY[0].set(-cornerSize * 1.5);
    cornersX[1].set(cornerSize * 0.5);
    cornersY[1].set(-cornerSize * 1.5);
    cornersX[2].set(cornerSize * 0.5);
    cornersY[2].set(cornerSize * 0.5);
    cornersX[3].set(-cornerSize * 1.5);
    cornersY[3].set(cornerSize * 0.5);

    controls.start({
      rotate: 360,
      transition: { duration: spinDuration, ease: "linear", repeat: Infinity },
    });

    let currentLeaveHandler: (() => void) | null = null;
    let unmountCheckInterval: ReturnType<typeof setInterval> | null = null;

    const cleanupTarget = (target: HTMLElement) => {
      if (currentLeaveHandler)
        target.removeEventListener("mouseleave", currentLeaveHandler);
      currentLeaveHandler = null;
    };

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const checkStillOverTarget = () => {
      if (!activeTargetRef.current || !currentLeaveHandler) return;

      // If it was completely removed from DOM
      if (!document.contains(activeTargetRef.current)) {
        currentLeaveHandler();
        return;
      }

      // Check if something else (like a modal or overlay) is now on top
      const { x: offsetX, y: offsetY } = getContainingBlockOffset(
        containingBlockRef.current
      );
      const mX = cursorX.get() + offsetX;
      const mY = cursorY.get() + offsetY;
      const elementUnderMouse = document.elementFromPoint(
        mX,
        mY
      ) as HTMLElement;
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTargetRef.current ||
          elementUnderMouse.closest(targetSelector) ===
            activeTargetRef.current);

      if (!isStillOverTarget) {
        currentLeaveHandler();
      }
    };

    const scrollHandler = () => checkStillOverTarget();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    const mouseDownHandler = () => {
      animate(dotScale, 0.7, { duration: 0.3, ease: "easeOut" });
      animate(cursorScale, 0.9, { duration: 0.2, ease: "easeOut" });
    };

    const mouseUpHandler = () => {
      animate(dotScale, 1, { duration: 0.3, ease: "easeOut" });
      animate(cursorScale, 1, { duration: 0.2, ease: "easeOut" });
      setTimeout(checkStillOverTarget, 50);
    };

    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as HTMLElement;
      let current: HTMLElement | null = directTarget;
      let target: HTMLElement | null = null;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          target = current;
          break;
        }
        current = current.parentElement;
      }
      if (!target) return;
      if (activeTargetRef.current === target) return;

      if (activeTargetRef.current) cleanupTarget(activeTargetRef.current);
      if (unmountCheckInterval) {
        clearInterval(unmountCheckInterval);
        unmountCheckInterval = null;
      }

      activeTargetRef.current = target;
      isHoveringRef.current = true;

      controls.stop();
      controls.set({ rotate: 0 });

      if (cursorColorOnTarget) {
        animate(activeColor, cursorColorOnTarget, {
          duration: 0.15,
          ease: "easeOut",
        });
      }

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const { x: offsetX, y: offsetY } = getContainingBlockOffset(
        containingBlockRef.current
      );

      targetCornerPositionsRef.current = [
        {
          x: rect.left - borderWidth - offsetX,
          y: rect.top - borderWidth - offsetY,
        },
        {
          x: rect.right + borderWidth - cornerSize - offsetX,
          y: rect.top - borderWidth - offsetY,
        },
        {
          x: rect.right + borderWidth - cornerSize - offsetX,
          y: rect.bottom + borderWidth - cornerSize - offsetY,
        },
        {
          x: rect.left - borderWidth - offsetX,
          y: rect.bottom + borderWidth - cornerSize - offsetY,
        },
      ];

      unmountCheckInterval = setInterval(checkStillOverTarget, 100);

      animate(0, 1, {
        duration: hoverDuration,
        ease: "easeOut",
        onUpdate: (v) => (activeStrengthRef.current = v),
      });

      const leaveHandler = () => {
        if (unmountCheckInterval) {
          clearInterval(unmountCheckInterval);
          unmountCheckInterval = null;
        }

        isHoveringRef.current = false;
        activeStrengthRef.current = 0;
        targetCornerPositionsRef.current = null;
        activeTargetRef.current = null;

        if (cursorColorOnTarget) {
          animate(activeColor, cursorColor, {
            duration: 0.15,
            ease: "easeOut",
          });
        }

        setIdleCorners();

        controls.start({
          rotate: 360,
          transition: {
            duration: spinDuration,
            ease: "linear",
            repeat: Infinity,
          },
        });

        cleanupTarget(target!);
      };

      currentLeaveHandler = leaveHandler;
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    const resizeHandler = () => {
      containingBlockRef.current = getContainingBlock(containerRef.current);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      if (activeTargetRef.current) cleanupTarget(activeTargetRef.current);
      if (unmountCheckInterval) clearInterval(unmountCheckInterval);
      document.body.style.cursor = originalCursor;
    };
  }, [
    targetSelector,
    spinDuration,
    moveCursor,
    constants,
    hideDefaultCursor,
    isTouchMode,
    hoverDuration,
    parallaxOn,
    cursorColor,
    cursorColorOnTarget,
    activeColor,
    controls,
    cornersX,
    cornersY,
    cursorX,
    cursorY,
    setIdleCorners,
    dotScale,
    cursorScale,
  ]);

  useEffect(() => {
    if (isTouchMode || isHoveringRef.current) return;
    controls.start({
      rotate: 360,
      transition: { duration: spinDuration, ease: "linear", repeat: Infinity },
    });
  }, [spinDuration, isTouchMode, controls]);

  if (isTouchMode) return null;

  return (
    <motion.div
      ref={containerRef}
      className="target-cursor-wrapper"
      style={{ x: cursorX, y: cursorY, scale: cursorScale }}
      animate={controls}
    >
      <motion.div
        className="target-cursor-dot"
        style={{
          backgroundColor: activeColor,
          scale: dotScale,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="target-cursor-corner"
        style={{
          borderColor: activeColor,
          x: cornersX[0],
          y: cornersY[0],
          borderRight: "none",
          borderBottom: "none",
        }}
      />
      <motion.div
        className="target-cursor-corner"
        style={{
          borderColor: activeColor,
          x: cornersX[1],
          y: cornersY[1],
          borderLeft: "none",
          borderBottom: "none",
        }}
      />
      <motion.div
        className="target-cursor-corner"
        style={{
          borderColor: activeColor,
          x: cornersX[2],
          y: cornersY[2],
          borderLeft: "none",
          borderTop: "none",
        }}
      />
      <motion.div
        className="target-cursor-corner"
        style={{
          borderColor: activeColor,
          x: cornersX[3],
          y: cornersY[3],
          borderRight: "none",
          borderTop: "none",
        }}
      />
    </motion.div>
  );
};

export default TargetCursor;
