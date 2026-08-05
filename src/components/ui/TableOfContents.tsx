import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TOCItem = {
  id: string;
  label?: string;
};

export interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
  autoDetectActive?: boolean;
  showLabels?: boolean;
}

export function TableOfContents({
  items,
  className,
  autoDetectActive = true,
  showLabels = true,
}: TableOfContentsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-detect active section index on scroll
  useEffect(() => {
    if (!autoDetectActive) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const sorted = visibleEntries.sort((a, b) => {
            const distA = Math.abs(a.boundingClientRect.top - 120);
            const distB = Math.abs(b.boundingClientRect.top - 120);
            return distA - distB;
          });
          const topEntry = sorted[0];
          if (topEntry) {
            const index = items.findIndex(
              (item) => item.id === topEntry.target.id
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        }
      },
      { rootMargin: "-80px 0px -40% 0px", threshold: 0 }
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
        const isHovered = hoveredIndex === index;

        let indexText = String(index + 1).padStart(2, "0");
        let nameText = "";

        if (item.label) {
          if (item.label.includes("//")) {
            const parts = item.label.split("//");
            indexText = (parts[0] ?? "").trim();
            const rawName = parts[1] ?? "";
            nameText = rawName ? ` // ${rawName.trim()}` : "";
          } else {
            nameText = ` // ${item.label.trim()}`;
          }
        }

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
                width: isHovered ? 24 : isCurrent ? 20 : 14,
                backgroundColor:
                  isHovered || isCurrent
                    ? "var(--color-fg-primary, var(--accent-primary))"
                    : "var(--color-fg-secondary, var(--fg-muted))",
                opacity: isHovered || isCurrent ? 1 : 0.6,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-0.5 rounded-none shrink-0"
            />

            {showLabels && (
              <span
                className={cn(
                  "font-jetbrains-mono text-xs uppercase tracking-wider transition-colors whitespace-nowrap ml-2",
                  isCurrent || isHovered
                    ? "text-fg-primary font-semibold"
                    : "text-fg-muted/70 group-hover:text-fg-secondary"
                )}
              >
                <span>{indexText}</span>
                {nameText && (
                  <span className="hidden xl:inline">{nameText}</span>
                )}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
