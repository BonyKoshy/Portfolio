"use client";
import React, { MouseEvent, useState } from "react";
import { cn } from "@/shared/lib";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
}

export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ className, children, rippleColor = "rgba(255, 255, 255, 0.5)", onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 1000);
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-white transition-transform active:scale-95",
          className
        )}
        onMouseDown={handleClick}
        onClick={onClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute animate-ping rounded-full bg-white opacity-75"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              transform: "translate(-50%, -50%)",
              backgroundColor: rippleColor,
            }}
          />
        ))}
      </button>
    );
  }
);
RippleButton.displayName = "RippleButton";
