import React, {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  MessageSquare,
  TestTube2,
  Globe,
  FileText,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ToolkitCardContentProps {
  children: ReactNode;
  className?: string;
}

export function ToolkitCardContent({
  children,
  className = "",
  ...props
}: ToolkitCardContentProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const toolkitItems = [
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Intel OpenVINO",
    tag: "AI Inference",
    color: "#3b82f6",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "IBM Watson NLP",
    tag: "Natural Language",
    color: "#7c3aed",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: "Selenium WebDriver",
    tag: "Browser Automation",
    color: "#16a34a",
  },
  {
    icon: <TestTube2 className="w-5 h-5" />,
    label: "TestNG",
    tag: "Test Framework",
    color: "#ea580c",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: "ReportLab",
    tag: "PDF Generation",
    color: "#dc2626",
  },
];

// ─── Slot layout (position offsets relative to center) ───────────────────────

const slotMaxWidth = [
  "max-w-[82%]",
  "max-w-[88%]",
  "max-w-[96%]",
  "max-w-[88%]",
  "max-w-[82%]",
];

const slotOpacity = [0.45, 0.7, 1, 0.7, 0.45];

// ─── Public component ─────────────────────────────────────────────────────────

interface ToolkitCardsProps {
  interval?: number;
  className?: string;
}

/** Infinitely cycling motion cards for specialized toolkit items. */
export function ToolkitCards({ interval = 1400, className }: ToolkitCardsProps) {
  const [cards, setCards] = useState([0, 1, 2, 3, 4]);
  const [nextId, setNextId] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCards((prev) => {
        const rest = prev.slice(1);
        const newCard = nextId;
        setNextId((n) => n + 1);
        return [...rest, newCard];
      });
    }, interval);
    return () => clearInterval(id);
  }, [nextId, interval]);

  return (
    <div
      className={cn(
        "flex items-center justify-center relative h-full w-full overflow-hidden px-3",
        className
      )}
    >
      <div className="flex flex-col gap-2 w-full items-center justify-center max-w-sm mx-auto">
        <AnimatePresence initial={false} mode="popLayout">
          {cards.map((cardId, i) => {
            const isCenter = i === 2;
            const item = toolkitItems[cardId % toolkitItems.length] ?? toolkitItems[0]!;

            return (
              <motion.div
                key={cardId}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: slotOpacity[i] ?? 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{
                  duration: 0.75,
                  ease: "easeInOut",
                  layout: { duration: 0.75 },
                }}
                className={cn(
                  "relative w-full rounded-2xl px-4 py-3 overflow-hidden",
                  "flex items-center gap-3",
                  slotMaxWidth[i],
                  isCenter
                    ? "shadow-xl"
                    : "bg-bg-surface/70 border border-border-default/60 backdrop-blur-sm shadow-sm"
                )}
              >
                {/* Background color for center card */}
                {isCenter && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10"
                    initial={false}
                    animate={{
                      background: `linear-gradient(135deg, ${item.color}dd, ${item.color}88)`,
                    }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                  />
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "flex shrink-0 items-center justify-center w-9 h-9 rounded-xl",
                    isCenter
                      ? "bg-white/20 text-white"
                      : "text-fg-primary"
                  )}
                  style={
                    !isCenter ? { color: item.color } : undefined
                  }
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col min-w-0">
                  <span
                    className={cn(
                      "text-sm font-semibold leading-tight truncate",
                      isCenter ? "text-white" : "text-fg-primary"
                    )}
                  >
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      "text-xs leading-snug mt-0.5",
                      isCenter ? "text-white/75" : "text-fg-secondary"
                    )}
                  >
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
