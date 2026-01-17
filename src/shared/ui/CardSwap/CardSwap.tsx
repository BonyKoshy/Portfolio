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

/** 3D card swapping animation component that cycles through children. */
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

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );
  const intervalRef = useRef<number>(0);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!scope.current) return;
    const total = childArr.length;

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
      if (order.current.length < 2) return;
      if (pauseOnHover && isHovered.current) return;

      const currentOrder = order.current;
      const front = currentOrder[0];
      const rest = currentOrder.slice(1);

      if (front === undefined) return;

      const frontSelector = `[data-index='${front}']`;

      // Drops the front card out of view.
      animate(frontSelector, { y: `calc(-50% + 500px)` } as any, {
        duration: config.durDrop,
        ease: config.ease as any,
      });

      const overlapTime = config.durDrop * (1 - config.promoteOverlap) * 1000;

      await new Promise((r) => setTimeout(r, Math.max(0, overlapTime)));

      // Moves the rest of the cards up the stack.
      rest.forEach((idx, i) => {
        const slot = makeSlot(
          i,
          cardDistance,
          verticalDistance,
          childArr.length
        );
        const selector = `[data-index='${idx}']`;

        animate(selector, { zIndex: slot.zIndex } as any, { duration: 0 });

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

      const backSlot = makeSlot(
        childArr.length - 1,
        cardDistance,
        verticalDistance,
        childArr.length
      );

      const returnDelay = config.durMove * config.returnDelay * 1000;
      await new Promise((r) => setTimeout(r, Math.max(0, returnDelay)));

      // Returns the original front card to the back of the stack.
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
          "data-index": i,
          onClick: (e: any) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
          style: { width: "100%", height: "100%" },
        })
      )}
    </div>
  );
};

export default CardSwap;
