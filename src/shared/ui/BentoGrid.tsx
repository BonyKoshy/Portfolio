import { ComponentPropsWithoutRef, ReactNode, ElementType, useRef, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
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
}

const BentoCard = ({
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
        "z-10 flex transform-gpu flex-col p-6 pr-16 lg:pr-6 transition-all duration-300 mt-auto",
        !minimalCTA ? "gap-4 lg:group-hover:-translate-y-10" : "gap-1" // Use gap-4 for non-minimal (standard) cards
      )}>
        <Icon className={cn(
          "origin-left transform-gpu text-black dark:text-white transition-all duration-300 ease-in-out",
          minimalCTA ? "h-8 w-8" : "h-8 w-8 lg:h-12 lg:w-12 group-hover:scale-75"
        )} />
        <h3 className="text-xl font-semibold text-black dark:text-white tracking-tight">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-black/80 dark:text-white/80 leading-relaxed">{description}</p>
      </div>

      {/* Action Area */}
      <div
        className={cn(
          "absolute bottom-0 w-full transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden lg:flex",
          minimalCTA && "justify-end"
        )}
      >
        {minimalCTA ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white">
              {ctaIcon || <FaArrowRight className="h-4 w-4" />}
          </div>
        ) : (
          <div className="flex w-full items-center justify-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-4 py-2 text-sm font-medium text-black dark:text-white backdrop-blur-sm">
            <span>{cta}</span>
            <FaArrowRight className="h-3 w-3" />
          </div>
        )}
      </div>

      {/* Mobile Indicator */}
      <div className="absolute bottom-4 right-4 lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white">
          {ctaIcon || <FaArrowRight className="h-4 w-4" />}
        </div>
      </div>
    </>
  );

  const containerClasses = cn(
    "group relative flex flex-col justify-between overflow-hidden rounded-3xl", // Using 3xl for Apple-style radius
    "bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10",
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

export { BentoCard, BentoGrid }