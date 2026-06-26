import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

interface DomainData {
  label: string;
  sublabel: string;
  value: number;
  color: string;
  colorEnd: string;
  size: number;
}

const domains: DomainData[] = [
  {
    label: "Frontend",
    sublabel: "React 19 · Tailwind · Motion",
    value: 78,
    color: "#3b82f6",
    colorEnd: "#60a5fa",
    size: 200,
  },
  {
    label: "Backend",
    sublabel: "Spring Boot · Flask · Java · Python",
    value: 72,
    color: "#22c55e",
    colorEnd: "#4ade80",
    size: 156,
  },
  {
    label: "Systems",
    sublabel: "Linux · CI/CD · Databases",
    value: 58,
    color: "#a855f7",
    colorEnd: "#c084fc",
    size: 112,
  },
];

interface CircleRingProps {
  data: DomainData;
  index: number;
}

const CircleRing = ({ data, index }: CircleRingProps) => {
  const strokeWidth = 14;
  const radius = (data.size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dashoffset = ((100 - data.value) / 100) * circumference;
  const gradientId = `domain-gradient-${index}`;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: "easeOut" }}
    >
      <svg
        width={data.size}
        height={data.size}
        viewBox={`0 0 ${data.size} ${data.size}`}
        className="-rotate-90"
        aria-label={`${data.label} domain ring`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={data.color} stopOpacity={1} />
            <stop offset="100%" stopColor={data.colorEnd} stopOpacity={1} />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={data.size / 2}
          cy={data.size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-border-default/60"
        />

        {/* Progress arc */}
        <motion.circle
          cx={data.size / 2}
          cy={data.size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashoffset }}
          transition={{
            duration: 1.6,
            delay: index * 0.18 + 0.2,
            ease: "easeInOut",
          }}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

const DomainLegend = () => (
  <motion.div
    className="flex flex-col gap-4 ml-6"
    initial={{ opacity: 0, x: 16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {domains.map((d, i) => (
      <motion.div
        key={d.label}
        className="flex flex-col gap-0.5"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: d.color }}
          />
          <span
            className="text-sm font-semibold leading-none"
            style={{ color: d.color }}
          >
            {d.label}
          </span>
        </div>
        <p className="text-xs text-fg-secondary pl-4 leading-relaxed">
          {d.sublabel}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

interface DomainRingsProps {
  className?: string;
}

/** Renders three concentric domain-focus rings for Frontend, Backend & Systems. */
export function DomainRings({ className }: DomainRingsProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center h-full w-full px-4 py-6",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {/* Concentric ring canvas */}
        <div className="relative shrink-0 w-[200px] h-[200px]">
          {domains.map((domain, index) => (
            <CircleRing key={domain.label} data={domain} index={index} />
          ))}
        </div>

        {/* Legend */}
        <DomainLegend />
      </div>
    </div>
  );
}
