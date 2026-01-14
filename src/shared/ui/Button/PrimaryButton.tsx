import React from "react";
import { cn } from "@/shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const primaryButtonVariants = cva(
  "group inline-flex items-center justify-center font-medium transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none disabled:opacity-50 gap-2 whitespace-nowrap bg-primary text-primary-fg rounded-full hover:bg-primary-hover",
  {
    variants: {
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  withHoverAnimation?: boolean;
  hideText?: boolean;
  asChild?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      className,
      size,
      icon,
      iconPosition = "right",
      withHoverAnimation = true,
      hideText = false,
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
          className={cn(primaryButtonVariants({ size, className }))}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(primaryButtonVariants({ size, className }))}
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
        {!hideText && children}

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

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton, primaryButtonVariants };
