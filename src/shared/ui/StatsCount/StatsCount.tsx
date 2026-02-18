"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "motion/react";
import { cn } from "@/shared/lib/utils";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

interface StatsCountProps {
  stats?: StatItem[];
  title?: string;
  showDividers?: boolean;
  className?: string;
  startAnimation?: boolean;
}

const defaultStats: StatItem[] = [
  {
    value: 50,
    suffix: "+",
    label: "Handcrafted animated components",
    duration: 5,
  },
  {
    value: 12,
    suffix: "K+",
    label: "Developers building with ScrollX-UI",
    duration: 6,
  },
  {
    value: 99,
    suffix: "%",
    label: "Performance optimized for web",
    duration: 5.5,
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  delay = 0,
  label,
  startAnimation = true,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  label: string;
  startAnimation?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px", once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 50,
    mass: 1,
  });

  const rounded = useTransform(springValue, (latest) =>
    Number(latest.toFixed(value % 1 === 0 ? 0 : 1))
  );

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isInView && startAnimation) {
      motionValue.set(0);
      timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 300);
    }
    return () => clearTimeout(timeout);
  }, [isInView, value, motionValue, delay, startAnimation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView && startAnimation
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.8,
        delay: delay * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      className={cn(
        "text-center flex-1 min-w-0 flex flex-col justify-center h-full"
      )}
    >
      <motion.div
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 whitespace-nowrap text-fg-primary"
        )}
        initial={{ scale: 0.8 }}
        animate={isInView && startAnimation ? { scale: 1 } : { scale: 0.8 }}
        transition={{
          duration: 0.6,
          delay: delay * 0.2 + 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        {displayValue}
        {suffix}
      </motion.div>
      <motion.p
        className={cn(
          "text-fg-secondary text-xs sm:text-sm leading-relaxed px-1 sm:px-2 hyphens-auto wrap-break-word"
        )}
        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        initial={{ opacity: 0 }}
        animate={isInView && startAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay * 0.2 + 0.6, duration: 0.6 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function StatsCount({
  stats = defaultStats,
  title,
  showDividers = true,
  className = "",
  startAnimation = true,
}: StatsCountProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px", once: true });

  return (
    <motion.section
      ref={containerRef}
      className={cn("py-8 w-full overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={isInView && startAnimation ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title && (
        <motion.div
          className={cn("text-center mb-8 sm:mb-12 lg:mb-16")}
          initial={{ opacity: 0, y: -20 }}
          animate={
            isInView && startAnimation
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className={cn(
              "text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide px-4 text-fg-primary"
            )}
          >
            <span>{title}</span>
          </h2>
        </motion.div>
      )}

      <div className={cn("w-full max-w-6xl mx-auto")}>
        <div
          className={cn(
            "flex flex-row items-stretch justify-between gap-2 sm:gap-4 lg:gap-8 w-full"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative flex-1 min-w-0 flex flex-col justify-center h-full"
              )}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix ?? ""}
                duration={stat.duration ?? 1}
                delay={index}
                label={stat.label}
                startAnimation={startAnimation}
              />
              {index < stats.length - 1 && showDividers && (
                <motion.div
                  className={cn(
                    "absolute -right-1 sm:-right-2 lg:-right-4 top-1/2 transform -translate-y-1/2 h-12 sm:h-16 lg:h-20 w-px bg-border-default"
                  )}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={
                    isInView && startAnimation
                      ? { opacity: 1, scaleY: 1 }
                      : { opacity: 0, scaleY: 0 }
                  }
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
