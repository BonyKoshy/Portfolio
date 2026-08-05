import { HomeHero } from "@/components/sections/HomeHero";
import { Expertise } from "@/components/sections/Expertise";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { HomeProjects } from "@/components/sections/HomeProjects";
import { HomeContact } from "@/components/sections/HomeContact";
import { TableOfContents, TOCItem } from "@/components/ui/TableOfContents";

const HOME_TOC_ITEMS: TOCItem[] = [
  { id: "hero", label: "01 // OVERVIEW" },
  { id: "expertise", label: "02 // EXPERTISE" },
  { id: "credentials", label: "03 // CREDENTIALS" },
  { id: "experience", label: "04 // EXPERIENCE" },
  { id: "projects", label: "05 // PROJECTS" },
  { id: "contact", label: "06 // CONTACT" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-bg-default text-fg-primary overflow-x-hidden flex flex-col justify-start pt-0 md:pt-4 lg:pt-8 pb-4 md:pb-6">
      {/* Floating Far-Left Table of Contents (Large Screens Only) */}
      <TableOfContents
        items={HOME_TOC_ITEMS}
        showLabels={false}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex"
      />

      <HomeHero />

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 02 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-divider" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
          [ SECTION 02 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <Expertise />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 03 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-divider" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
          [ SECTION 03 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <Credentials />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 04 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-divider" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
          [ SECTION 04 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <Experience />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 05 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-divider" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
          [ SECTION 05 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col">
        <HomeProjects />
      </div>

      {/* 0. SUBTLE SECTION SEPARATOR WITH TINY [ SECTION 06 ] BADGE */}
      <div className="relative w-[94%] max-w-6xl mx-auto flex items-center justify-center py-12 md:py-16">
        <div className="w-full h-px bg-divider" />
        <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
          [ SECTION 06 ]
        </span>
      </div>

      <div className="w-[94%] max-w-6xl mx-auto flex flex-col pt-8">
        <HomeContact />
      </div>
    </div>
  );
}
