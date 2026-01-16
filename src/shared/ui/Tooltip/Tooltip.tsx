"use client";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/shared/lib/utils";

export const Tooltip = ({
  content,
  children,
  containerClassName,
  unstyled,
}: {
  content: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
  unstyled?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if device supports hover
  const isTouchDevice = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none)").matches;
  };

  const calculatePosition = (
    x: number,
    y: number,
    isKeyboard: boolean = false
  ) => {
    if (!contentRef.current) return { x: x + 12, y: y + 12 };

    const tooltip = contentRef.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let finalX = x;
    let finalY = y;

    if (isKeyboard && containerRef.current) {
      // Position relative to the trigger element for keyboard focus
      const rect = containerRef.current.getBoundingClientRect();
      finalX = rect.left + rect.width / 2 - tooltipWidth / 2;
      finalY = rect.bottom + 12; // Default to bottom
    } else {
      // Mouse positioning
      finalX = x + 12;
      finalY = y + 12;
    }

    // Boundary checks (same as before)
    if (finalX + tooltipWidth > viewportWidth) {
      finalX = isKeyboard
        ? viewportWidth - tooltipWidth - 12
        : x - tooltipWidth - 12;
    }
    if (finalX < 12) {
      finalX = 12;
    }
    if (finalY + tooltipHeight > viewportHeight) {
      finalY = isKeyboard
        ? containerRef.current!.getBoundingClientRect().top - tooltipHeight - 12
        : y - tooltipHeight - 12;
    }
    if (finalY < 12) {
      finalY = 12;
    }

    return { x: finalX, y: finalY };
  };

  const updatePosition = (
    x: number,
    y: number,
    isKeyboard: boolean = false
  ) => {
    if (isKeyboard) {
      // For keyboard, we pass 0,0 but the calculator will ignore them if isKeyboard is true and use containerRef
      const newPosition = calculatePosition(0, 0, true);
      setPosition(newPosition);
    } else {
      setMouse({ x, y });
      const newPosition = calculatePosition(x, y, false);
      setPosition(newPosition);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice()) return; // Disable on touch devices
    setIsVisible(true);
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isVisible || isTouchDevice()) return;
    updatePosition(e.clientX, e.clientY);
  };

  const handleFocus = () => {
    if (isTouchDevice()) return;
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  // Keyboard and ESC logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVisible && e.key === "Escape") {
        setIsVisible(false);
        // Optional: return focus to container? It's likely already focused.
      }
    };

    // Position update for keyboard focus needs to happen after visibility
    if (isVisible && !mouse.x && !mouse.y && containerRef.current) {
      // Assume keyboard if mouse is 0,0 or we rely on the implementation detail that we don't set mouse on focus
      const newPos = calculatePosition(0, 0, true);
      setPosition(newPos);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      // Removed touch handlers and onClick for mobile
    >
      {children}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isVisible && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.2,
                }}
                className={cn(
                  "pointer-events-none fixed z-9999 overflow-hidden",
                  !unstyled &&
                    "min-w-60 rounded-md border border-transparent bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-900 dark:shadow-white/10 dark:ring-white/5"
                )}
                style={{
                  top: position.y,
                  left: position.x,
                }}
              >
                <div
                  ref={contentRef}
                  className={cn(
                    "relative",
                    !unstyled &&
                      "p-2 text-sm text-neutral-600 md:p-4 dark:text-neutral-400"
                  )}
                >
                  {content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};
