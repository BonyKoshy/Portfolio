"use client";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
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

  const calculatePosition = (mouseX: number, mouseY: number) => {
    // If tooltip content ref is not ready, default to mouse position
    if (!contentRef.current) return { x: mouseX + 12, y: mouseY + 12 };

    const tooltip = contentRef.current;
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get dynamic tooltip dimensions
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    // Initial position (offset from mouse)
    let finalX = mouseX + 12;
    let finalY = mouseY + 12;

    // Check right edge
    if (finalX + tooltipWidth > viewportWidth) {
      finalX = mouseX - tooltipWidth - 12;
    }

    // Check left edge (if flipping to left pushes it offscreen)
    // If still offscreen, pin to left
    if (finalX < 0) {
      finalX = 12; // mild padding from left
    }

    // Check bottom edge
    if (finalY + tooltipHeight > viewportHeight) {
      finalY = mouseY - tooltipHeight - 12;
    }

    // Check top edge
    if (finalY < 0) {
      finalY = 12; // mild padding from top
    }

    return { x: finalX, y: finalY };
  };

  const updateMousePosition = (mouseX: number, mouseY: number) => {
    setMouse({ x: mouseX, y: mouseY });
    const newPosition = calculatePosition(mouseX, mouseY);
    setPosition(newPosition);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsVisible(true);
    // Use client coordinates directly for fixed positioning
    updateMousePosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    // Optional: reset mouse/position, but keeping it might be smoother for re-entry
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isVisible) return;
    updateMousePosition(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    updateMousePosition(touch.clientX, touch.clientY);
    setIsVisible(true);
  };

  const handleTouchEnd = () => {
    // Delay hiding to allow for tap interaction
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Toggle visibility on click for mobile devices
    if (window.matchMedia("(hover: none)").matches) {
      // Don't prevent default always, might be a link
      if (isVisible) {
        setIsVisible(false);
      } else {
        e.preventDefault(); // Prevent link nav if opening tooltip
        updateMousePosition(e.clientX, e.clientY);
        setIsVisible(true);
      }
    }
  };

  // Recalculate position if content dimensions change while visible
  useEffect(() => {
    if (isVisible && contentRef.current) {
      const newPosition = calculatePosition(mouse.x, mouse.y);
      setPosition(newPosition);
    }
  }, [isVisible, mouse.x, mouse.y]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
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
                  duration: 0.2
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
