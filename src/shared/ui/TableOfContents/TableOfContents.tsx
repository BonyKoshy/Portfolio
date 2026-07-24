import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";

export type TOCItem = {
  id: string;
  label?: string;
};

export interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
  autoDetectActive?: boolean;
}

export function TableOfContents({
  items,
  className,
  autoDetectActive = true,
}: TableOfContentsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-detect active section index on scroll
  useEffect(() => {
    if (!autoDetectActive) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = items.findIndex((item) => item.id === entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items, autoDetectActive]);

  const scrollToSection = (id: string, index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Scroll Progress Telemetry"
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn(
        "flex flex-col items-start gap-2.5 p-1 transition-all duration-300 select-none",
        className
      )}
    >
      {items.map((item, index) => {
        const isCurrent = activeIndex === index;
        const isTravelled = index <= activeIndex;
        const isHovered = hoveredIndex === index;

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            aria-label={`Scroll to section ${item.id}`}
            className="group relative flex items-center py-1 cursor-pointer focus:outline-none"
          >
            {/* Pure Minimalist Sharp Indicator Bar */}
            <motion.div
              animate={{
                width: isHovered ? 24 : isCurrent ? 20 : isTravelled ? 14 : 10,
                backgroundColor:
                  isHovered || isCurrent
                    ? "var(--color-fg-primary, #ffffff)"
                    : isTravelled
                    ? "var(--color-fg-secondary, #888888)"
                    : "var(--color-border-default, #333333)",
                opacity: isHovered || isCurrent ? 1 : isTravelled ? 0.7 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-[2px] rounded-none shrink-0"
            />
          </button>
        );
      })}
    </nav>
  );
}
