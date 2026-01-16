import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useAnimate } from "framer-motion";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: React.ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  customClass?: string;
  as?: React.ElementType;
  [key: string]: any;
}

// Wrapper for the user's Card component
// Note: We need to forward ref if we were using direct refs, but useAnimate scopes by selector usually.
// However, the original code used refs. We can use data-index.
export const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ customClass, as: Component = "div", ...rest }, ref) => (
    <Component
      ref={ref as any}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-(--radius-card) border border-border-default bg-bg-surface transform-3d backface-hidden ${
        customClass ?? ""
      } ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const [scope, animate] = useAnimate();
  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );

  // Logic state
  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );
  const intervalRef = useRef<number>(0);
  const isHovered = useRef(false);

  // Initial placement
  useEffect(() => {
    if (!scope.current) return;
    const total = childArr.length;

    // Set initial styles for all cards
    order.current.forEach((originalIndex, i) => {
      const slot = makeSlot(i, cardDistance, verticalDistance, total);
      const selector = `[data-index='${originalIndex}']`;
      animate(
        selector,
        {
          x: `calc(-50% + ${slot.x}px)`,
          y: `calc(-50% + ${slot.y}px)`,
          z: slot.z,
          zIndex: slot.zIndex,
          rotateX: 0,
          rotateY: 0,
          skewY: skewAmount,
          opacity: 1,
        } as any,
        { duration: 0 }
      );
    });
  }, [
    childArr.length,
    cardDistance,
    verticalDistance,
    skewAmount,
    animate,
    scope,
  ]);

  // Swap Loop
  useEffect(() => {
    const config =
      easing === "elastic"
        ? {
            ease: "backOut",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "easeInOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          };

    const swap = async () => {
      // Safety check for array length
      if (order.current.length < 2) return;
      if (pauseOnHover && isHovered.current) return;

      const currentOrder = order.current;
      const front = currentOrder[0];
      const rest = currentOrder.slice(1);

      if (front === undefined) return;

      const frontSelector = `[data-index='${front}']`;

      // 1. Drop Front Card
      // We ignore the return promise variable to avoid "unused var" warnings,
      // but we await it implicitly or let it run.
      animate(frontSelector, { y: `calc(-50% + 500px)` } as any, {
        duration: config.durDrop,
        ease: config.ease as any,
      });

      // 2. Promote Overlap - Animate others
      const overlapTime = config.durDrop * (1 - config.promoteOverlap) * 1000;

      await new Promise((r) => setTimeout(r, Math.max(0, overlapTime)));

      // Animate Rest
      rest.forEach((idx, i) => {
        const slot = makeSlot(
          i,
          cardDistance,
          verticalDistance,
          childArr.length
        );
        const selector = `[data-index='${idx}']`;

        // Z-Index update is instant
        animate(selector, { zIndex: slot.zIndex } as any, { duration: 0 });

        // Staggered move
        animate(
          selector,
          {
            x: `calc(-50% + ${slot.x}px)`,
            y: `calc(-50% + ${slot.y}px)`,
            z: slot.z,
          } as any,
          {
            duration: config.durMove,
            ease: config.ease as any,
            delay: i * 0.15,
          }
        );
      });

      // 3. Return Front Card
      const backSlot = makeSlot(
        childArr.length - 1,
        cardDistance,
        verticalDistance,
        childArr.length
      );

      const returnDelay = config.durMove * config.returnDelay * 1000;
      await new Promise((r) => setTimeout(r, Math.max(0, returnDelay)));

      // Now animate front card return
      animate(frontSelector, { zIndex: backSlot.zIndex } as any, {
        duration: 0,
      });

      await animate(
        frontSelector,
        {
          x: `calc(-50% + ${backSlot.x}px)`,
          y: `calc(-50% + ${backSlot.y}px)`,
          z: backSlot.z,
        } as any,
        { duration: config.durReturn, ease: config.ease as any }
      );

      // Update Order Ref
      order.current = [...rest, front];
    };

    intervalRef.current = window.setInterval(swap, delay);
    return () => clearInterval(intervalRef.current);
  }, [
    delay,
    cardDistance,
    verticalDistance,
    easing,
    animate,
    childArr.length,
    skewAmount,
    pauseOnHover,
  ]);

  return (
    <div
      ref={scope}
      className="relative perspective-[900px] overflow-visible"
      style={{ width, height }}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {childArr.map((child, i) =>
        cloneElement(child as React.ReactElement<any>, {
          key: i,
          "data-index": i, // Uses original index as stable ID
          onClick: (e: any) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
          // Ensure Card has stable ref internally if needed, or just standard props
          // We set style here to ensure consistent sizing
          style: { width: "100%", height: "100%" },
        })
      )}
    </div>
  );
};

export default CardSwap;
