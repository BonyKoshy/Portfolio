import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useOutsideClick } from "@/shared/lib/use-outside-click";

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  onClick?: () => void;
};

export type BubbleMenuProps = {
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string; // Kept for compatibility but unused in favor of semantic CSS
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
};

const DEFAULT_ITEMS: MenuItem[] = [
  { label: "home", href: "#", rotation: -8 },
  { label: "about", href: "#", rotation: 8 },
  { label: "projects", href: "#", rotation: 8 },
  { label: "blog", href: "#", rotation: 8 },
  { label: "contact", href: "#", rotation: -8 },
];

/**
 * Circular menu with bubble animation.
 * Refactored for stability, zero-flicker, and "backOut" smoothness.
 */
export default function BubbleMenu({
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  useFixedPosition = false,
  items,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  // Toggle Handler - Simple & Robust
  const handleToggle = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      onMenuClick?.(next);
      return next;
    });
  };

  // Outside Click - Only active when open
  useOutsideClick(listRef, (e) => {
    // If not open, do nothing
    if (!isMenuOpen) return;

    // If clicking toggle button, let handleToggle handle it
    if (toggleRef.current?.contains(e.target as Node)) return;

    // Otherwise close
    handleToggle();
  });

  // Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Framer Motion Variants matches GSAP "back.out(1.5)" feel
  const overlayVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: { delay: 0.2, duration: 0.2 }, // Wait for bubbles to close before fading overlay
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  const listVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const bubbleVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20, // Bouncy but controlled
        mass: 0.8,
      },
    },
  };

  const labelVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3 },
    },
  };

  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    "left-0 right-0 top-0 h-20",
    "flex items-center justify-end",
    "gap-4 px-6",
    "pointer-events-none",
    "z-[10001]", // Z-Index higher than overlay (9999)
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, background-color 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (max-width: 1023px) {
          .bubble-menu-items { padding-top: 120px; align-items: flex-start; }
          .bubble-menu-items .pill-list { row-gap: 16px; }
          .bubble-menu-items .pill-col { flex: 0 0 100% !important; margin-left: 0 !important; }
          .bubble-menu-items .pill-link { 
            font-size: clamp(1.2rem, 3vw, 4rem); 
            padding: clamp(1rem, 2vw, 2rem) 0; 
            min-height: 80px !important; 
          }
        }
      `}</style>

      <nav
        className={containerClassName}
        style={style}
        aria-label="Main navigation"
      >
        <button
          ref={toggleRef}
          type="button"
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          className={[
            "bubble toggle-bubble menu-btn",
            "inline-flex flex-col items-center justify-center",
            "rounded-full w-12 h-12 md:w-14 md:h-14",
            "pointer-events-auto cursor-pointer border-0 p-0",
            "transition-transform active:scale-95 touch-manipulation", // Responsive touch
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          ].join(" ")}
          style={{ background: "transparent" }}
        >
          <span
            className="menu-line block mx-auto rounded-full bg-fg-primary"
            style={{
              width: 26,
              height: 2,
              transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="menu-line block mx-auto rounded-full bg-fg-primary"
            style={{
              marginTop: "6px",
              width: 26,
              height: 2,
              transform: isMenuOpen
                ? "translateY(-4px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className={[
              "fixed inset-0 z-9999",
              "flex items-center justify-center",
              "bg-black/60",
              "pointer-events-auto",
            ].join(" ")}
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)", // Safari support
              willChange: "opacity, backdrop-filter",
            }}
          >
            <motion.ul
              ref={listRef}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative z-10 w-full max-w-2xl px-4 flex flex-col items-center gap-y-3 list-none m-0"
            >
              {menuItems.map((item, idx) => {
                const isDesktop =
                  typeof window !== "undefined" && window.innerWidth >= 1024;
                const rotation = isDesktop ? (item.rotation ?? 0) : 0;

                return (
                  <li key={idx} className="pill-col flex justify-center w-full">
                    <motion.div
                      variants={bubbleVariants}
                      className="w-full flex justify-center"
                    >
                      <NavLink
                        to={item.href}
                        onClick={() => {
                          item.onClick?.();
                          handleToggle();
                        }}
                        className={[
                          "pill-link w-full rounded-full relative",
                          "flex items-center justify-center",
                          "bg-bg-paper text-fg-primary", // Semantic colors
                          "shadow-lg no-underline box-border overflow-hidden",
                          "transition-colors duration-200",
                        ].join(" ")}
                        style={{
                          minHeight: "80px",
                          padding: "0 2rem",
                          fontSize: "2rem",
                        }}
                      >
                        <motion.span
                          className="absolute inset-0 block w-full h-full rounded-full"
                          style={{ transform: `rotate(${rotation}deg)` }}
                          whileHover={{ scale: 1.05, rotate: rotation }}
                          whileTap={{ scale: 0.95 }}
                        />
                        <motion.span
                          variants={labelVariants}
                          className="relative z-10"
                        >
                          {item.label}
                        </motion.span>
                      </NavLink>
                    </motion.div>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
