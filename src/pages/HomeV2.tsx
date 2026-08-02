import { HomeHeroV2 } from "@/widgets/HomeHeroV2";
import { Expertise } from "@/widgets/Expertise";
import { Credentials } from "@/widgets/Credentials";
import { Experience } from "@/widgets/Experience";
import { HomeProjectsV2 } from "@/widgets/HomeProjectsV2";
import { HomeContactV2 } from "@/widgets/HomeContactV2";
import { TableOfContents, TOCItem } from "@/shared/ui/TableOfContents";

const HOME_TOC_ITEMS: TOCItem[] = [
  { id: "hero", label: "01 // OVERVIEW" },
  { id: "expertise", label: "02 // EXPERTISE" },
  { id: "credentials", label: "03 // CREDENTIALS" },
  { id: "experience", label: "04 // EXPERIENCE" },
  { id: "projects", label: "05 // PROJECTS" },
  { id: "contact", label: "06 // CONTACT" },
];

export default function HomeV2() {
  return (
    <div className="relative min-h-screen w-full bg-bg-default text-fg-primary overflow-x-hidden flex flex-col justify-start pt-0 md:pt-4 lg:pt-8 pb-24 md:pb-32">
      {/* Floating Far-Left Table of Contents (Large Screens Only) */}
      <TableOfContents
        items={HOME_TOC_ITEMS}
        showLabels={false}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex"
      />

      <HomeHeroV2 />

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 02 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-border-default/60" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-[10px] text-fg-tertiary tracking-[0.2em] uppercase">
          [ SECTION 02 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <Expertise />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 03 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-border-default/60" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-[10px] text-fg-tertiary tracking-[0.2em] uppercase">
          [ SECTION 03 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <Credentials />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 04 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-border-default/60" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-[10px] text-fg-tertiary tracking-[0.2em] uppercase">
          [ SECTION 04 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <Experience />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 05 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-border-default/60" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-[10px] text-fg-tertiary tracking-[0.2em] uppercase">
          [ SECTION 05 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <HomeProjectsV2 />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 06 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-border-default/60" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-[10px] text-fg-tertiary tracking-[0.2em] uppercase">
          [ SECTION 06 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col pt-8">
        <HomeContactV2 />
      </div>
    </div>
  );
}
