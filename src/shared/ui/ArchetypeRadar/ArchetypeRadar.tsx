import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/shared/lib/utils";

// Data mapping the Full-Stack Engineering Archetype
const data = [
  { subject: "Frontend UI", A: 85, fullMark: 100 },
  { subject: "Systems Architecture", A: 90, fullMark: 100 },
  { subject: "Data Persistence", A: 80, fullMark: 100 },
  { subject: "AI & Edge Integration", A: 75, fullMark: 100 },
  { subject: "DevOps & CI", A: 70, fullMark: 100 },
];

export interface ArchetypeRadarProps {
  className?: string;
}

/**
 * Visualizes the Full-Stack Engineering Archetype as a Radar (Spider) Chart.
 * Purely visual setup: stripped of tooltips and radius axes.
 * Strictly uses CSS variables for theme compatibility.
 */
export function ArchetypeRadar({ className }: ArchetypeRadarProps) {
  return (
    <div className={cn("w-full h-full min-h-[200px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          {/* Subtle background web mapping to border color */}
          <PolarGrid stroke="var(--border-default)" />

          {/* Outer text labels adapting to foreground theme */}
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "var(--fg-primary)", fontSize: 12, fontWeight: 500 }}
          />

          {/* The Polygon (Radar) using primary theme color */}
          <Radar
            name="Archetype"
            dataKey="A"
            stroke="var(--primary)"
            strokeWidth={2}
            fill="var(--primary)"
            fillOpacity={0.25}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
