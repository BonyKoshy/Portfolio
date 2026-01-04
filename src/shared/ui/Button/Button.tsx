import React from "react";
import { cn } from "@/shared/lib";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "underline" | "ghost"; // Keep ghost for internal use if needed
  size?: "sm" | "md" | "lg" | "none";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "down";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, iconPosition = "left", children, ...props }, ref) => {
    // Base styles
    const baseStyles = "group inline-flex items-center justify-center font-medium transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none disabled:opacity-50 gap-2";
    
    // Variant styles
    const variants = {
      primary: "bg-primary text-primary-fg rounded-full hover:bg-primary-hover",
      underline: "relative text-fg-secondary hover:text-fg-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 p-0",
      ghost: "text-fg-secondary rounded-full hover:text-fg-primary hover:bg-action-hover",

    };

    // Size styles - Size 'none' for underline or custom
    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-base",
      none: "",
    };

    // If variant is underline, force size to none to avoid padding/height issues usually
    const currentSize = variant === "underline" ? sizes.none : sizes[size];

    const iconTransformClass = 
      iconPosition === "left" ? "group-hover:-translate-x-1" :
      iconPosition === "right" ? "group-hover:translate-x-1" :
      iconPosition === "down" ? "group-hover:translate-y-1" :
      "";

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], currentSize, className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className={cn("flex-shrink-0 transition-transform duration-300", iconTransformClass)}>
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className={cn("flex-shrink-0 transition-transform duration-300", iconTransformClass)}>
            {icon}
          </span>
        )}
        {icon && iconPosition === "down" && (
          <span className={cn("flex-shrink-0 transition-transform duration-300", iconTransformClass)}>
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
