import { ComponentPropsWithoutRef, ReactNode, ElementType, useRef, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {

  return (
    <div
      className={cn(
        "grid w-full gap-4", // Removed hardcoded cols/rows
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ElementType;
  description: string;
  href: string;
  cta: string;
  minimalCTA?: boolean;
  ctaIcon?: ReactNode;
  spotlightColor?: string;
  ctaLayout?: "bottom" | "side"; 
}


export const BentoCard = ({

  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  minimalCTA = false,
  ctaIcon,
  spotlightColor = "rgba(255, 255, 255, 0.15)",
  ctaLayout = "bottom",
}: BentoCardProps) => {


  const isExternal = href.startsWith('http') || href.endsWith('.pdf');
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const content = (
    <>
      {/* Background layer with pointer-events-none to prevent blocking interactions */}
      <div className="absolute inset-0 pointer-events-none">{background}</div>
      
      {/* Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />

      <div className={cn(
        "z-10 flex transform-gpu transition-all duration-300 mt-auto flex-col p-6",
        ctaLayout === "side" ? "md:flex-row md:items-center md:justify-between md:gap-4" : "gap-2"
      )}>

        
        {/* Content Section */}
        <div className={cn("flex flex-col gap-2", ctaLayout === "side" && "basis-1/2")}>
            <Icon className={cn(
               "origin-left transform-gpu text-fg-primary transition-all duration-300 ease-in-out",
               minimalCTA ? "h-8 w-8" : "h-8 w-8 md:h-12 md:w-12 [@media(hover:hover)]:group-hover:scale-75"
            )} />

            <h3 className="text-xl font-semibold text-fg-primary tracking-tight">
               {name}
            </h3>
            <p className={cn(
              "max-w-lg text-sm text-fg-secondary leading-relaxed",
              "pr-12 pointer-fine:md:pr-0" // Padding always present on touch, removed only for desktop mouse
            )}>
              {description}
            </p>
        </div>
        
        {/* Action Area - Mouse Hover Reveal (Hidden on Touch) */}
        <div
          className={cn(
             "hidden pointer-fine:md:flex transform-gpu transition-all duration-500 ease-in-out",
             "pointer-coarse:hidden", // Explicitly hide on touch
             // Standard Bottom Layout: Reveal by expanding in flow
             ctaLayout === "bottom" && "max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 overflow-hidden",
             // Side Layout: Reveal by sliding/fading in from right
             ctaLayout === "side" && "opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 shrink-0"
          )}
        >
          {minimalCTA ? (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-border-default backdrop-blur-sm text-fg-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
                {ctaIcon || <FaArrowRight className="h-4 w-4" />}
            </div>
          ) : (
            <div className="flex w-full items-center justify-center gap-2 rounded-full bg-border-default px-4 py-2 text-sm font-medium text-fg-primary backdrop-blur-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <span>{cta}</span>
              <FaArrowRight className="h-3 w-3" />
            </div>
          )}
        </div>
      </div>





      {/* Permanent Indicator for Touch Devices & Mobile Mouse */}
      <div className="absolute bottom-6 right-6 pointer-coarse:block pointer-fine:md:hidden">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-border-default backdrop-blur-sm text-fg-primary">
          {ctaIcon || <FaArrowRight className="h-4 w-4" />}
        </div>
      </div>

    </>


  );

  const containerClasses = cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-3xl", // Using 3xl for Apple-style radius
    "bg-bg-paper border border-border-default",
    "transition-all duration-300",

    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={containerClasses}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </Link>
  );
}

