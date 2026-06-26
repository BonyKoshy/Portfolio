import {
  Code2,
  Wrench,
  Compass,
  LucideIcon,
} from "lucide-react";
import { BentoGrid } from "@/shared/ui/BentoGrid";
import { DomainRings } from "@/shared/ui/DomainRings";
import { ToolkitCards } from "@/shared/ui/ToolkitCards";
import { ArchetypeRadar } from "@/shared/ui/ArchetypeRadar";
import { cn } from "@/shared/lib/utils";

interface SkillCardProps {
  name: string;
  Icon: LucideIcon;
  className?: string;
  children: React.ReactNode;
  visualClassName?: string;
}

/** 
 * A structured card for the About section where content and 
 * visualization are separate parts of the layout flow.
 */
function SkillCard({ name, Icon, className, children, visualClassName }: SkillCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[var(--radius-card)]",
        "bg-bg-paper border border-border-default shadow-sm group",
        className
      )}
    >
      {/* Header Section - Part of the flow */}
      <div className="p-6 pb-2 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-fg-primary tracking-tight">
            {name}
          </h3>
        </div>
      </div>

      {/* Visualization Section - Flex-1 with strict containment */}
      <div className={cn("relative flex-1 w-full min-h-0 overflow-hidden", visualClassName)}>
        {children}
      </div>
    </div>
  );
}

/**
 * AboutBentoSection
 *
 * 6-column × 4-row responsive bento grid showcasing technical skills.
 * Optimized to fit a single screen height on desktops and tablets.
 */
export function AboutBentoSection() {
  const emptyCardClasses = "bg-bg-paper border border-border-default rounded-[var(--radius-card)]";

  return (
    <BentoGrid
      className="grid-cols-1 sm:grid-cols-6 sm:grid-rows-4 h-auto sm:h-[calc(100vh-120px)] lg:h-[calc(100vh-160px)] gap-4 transition-all duration-500"
      aria-label="Skills bento grid"
    >
      {/* Card 1: Engineering Archetype (Top Left) */}
      <SkillCard
        name="Engineering Archetype"
        Icon={Compass}
        className="col-span-1 sm:col-span-2 sm:row-span-2 h-[400px] sm:h-full"
        visualClassName="p-4"
      >
        <ArchetypeRadar />
      </SkillCard>

      {/* Card 2: Specialized Toolkit */}
      <SkillCard
        name="Specialized Toolkit"
        Icon={Wrench}
        className="col-span-1 sm:col-span-2 sm:row-span-2 h-[400px] sm:h-full"
        visualClassName="p-4"
      >
        <div className="scale-90 lg:scale-100 origin-center h-full flex items-center justify-center">
          <ToolkitCards interval={1500} />
        </div>
      </SkillCard>

      {/* Card 3: Empty Placeholder (Top Right) */}
      <div className={cn(emptyCardClasses, "col-span-1 sm:col-span-2 sm:row-span-2 h-[300px] sm:h-full")} />

      {/* Card 4: Empty Placeholder (Bottom Left) */}
      <div className={cn(emptyCardClasses, "col-span-1 sm:col-span-3 sm:row-span-2 h-[300px] sm:h-full")} />

      {/* Card 5: Domain Focus */}
      <SkillCard
        name="Domain Focus"
        Icon={Code2}
        className="col-span-1 sm:col-span-3 sm:row-span-2 h-[400px] sm:h-full"
        visualClassName="flex items-center justify-center p-4 overflow-hidden"
      >
        <div className="scale-75 md:scale-90 lg:scale-110 origin-center">
          <DomainRings />
        </div>
      </SkillCard>
    </BentoGrid>
  );
}
