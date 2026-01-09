import React from "react";
import { cn } from "@/shared/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "underline" | "ghost"; // Keep ghost for internal use if needed
  size?: "sm" | "md" | "lg" | "none";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "down";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, iconPosition = "left", asChild = false, children, ...props }, ref) => {
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

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], currentSize, className)}
        {...props}
      >
        {/* If asChild is true, Slot manages children. We just pass local children. 
            However, Slot expects a single child. If we have icon logic, we need to wrap content.
            BUT: Slot merges props onto the child. If we render icons here, they become part of the content.
            Ideally, when using asChild, the consumer provides the children structure.
            But we want to preserve the icon logic. 
            
            Solution: We can't easily reuse the internal icon logic with Slot if the user passes a Link as child.
            The Link will replace the Comp (button).
            
            If we use plain Slot:
            <Slot><Link>...</Link></Slot>
            The Link receives the className.
            The content inside Link is what we see.
            
            So if we want icons, we should render them inside the children passed to Button?
            Or we manually construct the children.
            
            If asChild is true, we assume the child is the root element (e.g. Link).
            We effectively wrap the children content.
            
            Let's handle the content composition.
        */}
        {asChild ? (
            children
        ) : (
            <>
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
            </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
