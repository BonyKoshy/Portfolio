import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GradualBlur } from "@/shared/ui/GradualBlur";
import { NavLink } from "react-router-dom";
import { useOutsideClick } from "@/shared/lib/use-outside-click";

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
  onClick?: () => void;
};

export type BubbleMenuProps = {
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string; // Not used directly in framer map, simplified
  animationDuration?: number;
  staggerDelay?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "var(--primary)", textColor: "var(--primary-fg)" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "var(--primary)", textColor: "var(--primary-fg)" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Documentation",
    rotation: 8,
    hoverStyles: { bgColor: "var(--primary)", textColor: "var(--primary-fg)" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "var(--primary)", textColor: "var(--primary-fg)" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "var(--primary)", textColor: "var(--primary-fg)" },
  },
];

export default function BubbleMenu({
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "var(--bg-surface)",
  menuContentColor = "var(--fg-primary)",
  useFixedPosition = false,
  items,
  animationDuration = 0.5,
  staggerDelay = 0.1,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(listRef, (e) => {
    if (toggleRef.current && toggleRef.current.contains(e.target as Node))
      return;
    if (isMenuOpen) handleToggle();
  });

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    "left-0 right-0 top-0 h-20",
    "flex items-center justify-end",
    "gap-4 px-6",
    "pointer-events-none",
    "z-[1001]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: animationDuration,
      },
    },
  };

  const labelVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {/* Retaining Styles for layout */}
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }

        @media (max-width: 1023px) {
          .bubble-menu-items {
            padding-top: 120px;
            align-items: flex-start;
          }
          .bubble-menu-items .pill-list {
            row-gap: 16px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
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
          type="button"
          className={[
            "bubble toggle-bubble menu-btn",
            isMenuOpen ? "open" : "",
            "inline-flex flex-col items-center justify-center",
            "rounded-full",
            "pointer-events-auto",
            "w-12 h-12 md:w-14 md:h-14",
            "border-0 cursor-pointer p-0",
            "will-change-transform",
          ].join(" ")}
          ref={toggleRef}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <span
            className="menu-line block mx-auto rounded-xs"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="menu-line short block mx-auto rounded-xs"
            style={{
              marginTop: "6px",
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen
                ? "translateY(-4px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={[
              "bubble-menu-items",
              useFixedPosition ? "fixed" : "absolute",
              "inset-0",
              "flex items-center justify-center",
              "pointer-events-auto",
              "z-1000",
            ].join(" ")}
            style={{
              backgroundColor: "var(--overlay)", // Keep tint
            }}
            aria-hidden={!isMenuOpen}
          >
            <div className="absolute inset-0 pointer-events-none">
              <GradualBlur
                position="top"
                height="100%"
                strength={1}
                opacity={1}
                zIndex={0}
                curve="ease-out"
                target="parent"
              />
            </div>

            <motion.ul
              ref={listRef}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={[
                "pill-list",
                "relative z-10", // Ensure above blur
                "list-none m-0 px-6",
                "w-full max-w-400 mx-auto",
                "flex flex-wrap",
                "gap-x-0 gap-y-1",
                "pointer-events-auto",
              ].join(" ")}
              role="menu"
              aria-label="Menu links"
            >
              {menuItems.map((item, idx) => {
                const isDesktop =
                  typeof window !== "undefined" && window.innerWidth >= 1024;
                const rotation = isDesktop ? item.rotation ?? 0 : 0;

                return (
                  <li
                    key={idx}
                    role="none"
                    className={[
                      "pill-col",
                      "flex justify-center items-stretch",
                      "flex-[0_0_calc(100%/3)]",
                      "box-border",
                    ].join(" ")}
                  >
                    <motion.div
                      variants={itemVariants}
                      className="w-full h-full flex justify-center"
                    >
                      <NavLink
                        to={item.href}
                        aria-label={item.ariaLabel || item.label}
                        onClick={() => {
                          item.onClick?.();
                          handleToggle();
                        }}
                        className={[
                          "pill-link",
                          "w-full",
                          "rounded-[999px]",
                          "no-underline",
                          "bg-white",
                          "dark:bg-(--bg-paper)",
                          "text-inherit",
                          "shadow-[0_4px_14px_rgba(0,0,0,0.10)]",
                          "flex items-center justify-center",
                          "relative",
                          "transition-[background,color] duration-300 ease-in-out",
                          "box-border",
                          "whitespace-nowrap overflow-hidden",
                        ].join(" ")}
                        style={
                          {
                            ["--pill-bg"]: menuBg,
                            ["--pill-color"]: menuContentColor,
                            ["--hover-bg"]:
                              item.hoverStyles?.bgColor || "#f3f4f6",
                            ["--hover-color"]:
                              item.hoverStyles?.textColor || menuContentColor,
                            background: "var(--pill-bg)",
                            color: "var(--pill-color)",
                            minHeight: "var(--pill-min-h, 160px)",
                            padding: "clamp(1.5rem, 3vw, 8rem) 0",
                            fontSize: "clamp(1.5rem, 4vw, 4rem)",
                            fontWeight: 400,
                            lineHeight: 0,
                            willChange: "transform",
                            height: 10,
                          } as CSSProperties
                        }
                        // Apply rotation via frame motion animate prop to be safe or just style?
                        // Using style is fine as it's static per item mostly, but we have resize listener in old code.
                        // We can just rely on CSS for rotation if we set the var.
                      >
                        <motion.span
                          className="pill-link-inner block w-full h-full absolute inset-0 rounded-[999px]"
                          // To recreate hover effect if needed, but CSS handles hover.
                          // Just need to apply rotation.
                          style={{ transform: `rotate(${rotation}deg)` }}
                          whileHover={{
                            scale: 1.06,
                            rotate: rotation,
                            backgroundColor: "var(--hover-bg)",
                            color: "var(--hover-color)",
                          }}
                          whileTap={{ scale: 0.94 }}
                          transition={{ duration: 0.2 }}
                        />

                        <motion.span
                          variants={labelVariants}
                          className="pill-label inline-block relative z-10 pointers-events-none"
                          style={{
                            // transform: `rotate(${rotation}deg)` // Text shouldn't rotate?
                            // Original code rotated the whole bubble.
                            pointerEvents: "none",
                          }}
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
