import { ComponentPropsWithoutRef, ReactNode, ElementType } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/shared/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
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
  ...props
}: BentoCardProps & { minimalCTA?: boolean; ctaIcon?: ReactNode }) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // theme styles
      "bg-panel [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles (keep specific shadows if needed, or rely on theme but user liked specific details previously. Let's keep the shadows but ensure bg is panel)
      "dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className={cn(
      "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300",
      minimalCTA ? "lg:p-6" : "lg:p-6 lg:group-hover:-translate-y-12"
    )}>
      <Icon className={cn(
        "origin-left transform-gpu text-text-primary transition-all duration-300 ease-in-out",
        minimalCTA ? "h-8 w-8" : "h-8 w-8 lg:h-12 lg:w-12 group-hover:scale-75"
      )} />
      <h3 className="text-xl font-semibold text-text-primary">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-text-secondary">{description}</p>
    </div>

    {/* Desktop Hover CTA */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex",
        minimalCTA && "justify-end"
      )}
    >
      {minimalCTA ? (
        <a href={href} className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
            {ctaIcon || <FaArrowRight className="h-4 w-4" />}
        </a>
      ) : (
        <a href={href} className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
          <span>{cta}</span>
          <FaArrowRight className="h-3 w-3" />
        </a>
      )}
    </div>

    {/* Mobile Persistent CTA */}
    <div className="absolute bottom-4 right-4 lg:hidden pointer-events-auto">
      <a href={href} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm text-neutral-700 dark:text-neutral-300">
        {ctaIcon || <FaArrowRight className="h-4 w-4" />}
      </a>
    </div>

    {/* Gradient Overlay: Always visible on touch (default), hover on desktop (lg:group-hover) */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
