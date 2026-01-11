import { homeContent } from "@/shared/config/content";
import { SiAccenture } from "react-icons/si";

export const CompanyTooltipCard = () => (
  <div className="relative flex aspect-3/1 w-52.5 flex-row items-center gap-3 rounded-xl border border-border-default bg-bg-surface px-4 shadow-2xl">
    <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-transparent" />
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A100FF] text-white shadow-md">
      <SiAccenture size={20} />
    </div>
    <div className="relative text-left">
      <p className="text-sm font-bold leading-none text-fg-primary">
        {homeContent.hero.tooltips.company.name}
      </p>
      <p className="text-[10px] font-medium uppercase tracking-wider text-fg-secondary mt-1">
        {homeContent.hero.tooltips.company.role}
      </p>
    </div>
  </div>
);
