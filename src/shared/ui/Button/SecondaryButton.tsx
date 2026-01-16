import React from "react";
import { cn } from "@/shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const secondaryButtonVariants = cva(
  "group inline-flex items-center justify-center font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 outline-none disabled:opacity-50 gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "relative text-fg-secondary hover:text-fg-primary after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 p-0",
        ghost:
          "text-fg-secondary rounded-full hover:text-fg-primary hover:bg-action-hover p-2", // Optional, if needed for some contexts
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof secondaryButtonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  withHoverAnimation?: boolean;
  asChild?: boolean;
}

const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(
  (
    {
      className,
      variant,
      icon,
      iconPosition = "right",
      withHoverAnimation = true,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const iconTransformClass = withHoverAnimation
      ? iconPosition === "left"
        ? "group-hover:-translate-x-1"
        : "group-hover:translate-x-1"
      : "";

    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(secondaryButtonVariants({ variant, className }))}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(secondaryButtonVariants({ variant, className }))}
        {...props}
      >
        {/* Left Icon */}
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

        {/* Text */}
        {children}

        {/* Right Icon */}
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
      </Comp>
    );
  }
);

SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton, secondaryButtonVariants };
