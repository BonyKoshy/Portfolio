import React from "react";
import { cn } from "@/shared/lib";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "none";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none disabled:opacity-50";
    
    // Variant styles
    const variants = {
      primary: "bg-text-primary text-background rounded-full hover:opacity-90",
      outline: "border-2 border-text-primary text-text-primary rounded-full hover:bg-text-primary hover:text-background",
      ghost: "text-zinc-500 rounded-full hover:text-text-primary hover:bg-zinc-100 dark:hover:bg-white/5",
      link: "relative text-zinc-500 hover:text-text-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100",
    };

    // Size styles
    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-base",
      none: "",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
