import React from "react";
import { cn } from "@/shared/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "group inline-flex items-center justify-center font-medium transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none disabled:opacity-50 gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg rounded-full hover:bg-primary-hover",
        underline:
          "relative text-fg-secondary hover:text-fg-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 p-0",
        ghost:
          "text-fg-secondary rounded-full hover:text-fg-primary hover:bg-action-hover",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Added for Calendar compatibility if needed, though mostly ghost used
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        ifinite: "p-0", // For underline where size shouldn't apply
        icon: "h-10 w-10",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "down";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      iconPosition = "left",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    // Logic to force no size for underline variant to behave as text link
    const effectiveSize = variant === "underline" ? "none" : size;

    const iconTransformClass =
      iconPosition === "left"
        ? "group-hover:-translate-x-1"
        : iconPosition === "right"
        ? "group-hover:translate-x-1"
        : iconPosition === "down"
        ? "group-hover:translate-y-1"
        : "";

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size: effectiveSize, className })
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span
                className={cn(
                  "shrink-0 transition-transform duration-300",
                  iconTransformClass
                )}
              >
                {icon}
              </span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span
                className={cn(
                  "shrink-0 transition-transform duration-300",
                  iconTransformClass
                )}
              >
                {icon}
              </span>
            )}
            {icon && iconPosition === "down" && (
              <span
                className={cn(
                  "shrink-0 transition-transform duration-300",
                  iconTransformClass
                )}
              >
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

export { Button, buttonVariants };
