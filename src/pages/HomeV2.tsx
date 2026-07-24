import { HomeHeroV2 } from "@/widgets/HomeHeroV2";
import { CoreExpertise } from "@/widgets/CoreExpertise";
import { Capabilities } from "@/widgets/Capabilities";
import { TableOfContents, TOCItem } from "@/shared/ui/TableOfContents";

const HOME_TOC_ITEMS: TOCItem[] = [
  { id: "hero", label: "01 // OVERVIEW" },
  { id: "expertise", label: "02 // EXPERTISE" },
  { id: "capabilities", label: "03 // CAPABILITIES" },
];

export default function HomeV2() {
  return (
    <div className="relative min-h-screen w-full bg-bg-default text-fg-primary overflow-x-hidden flex flex-col justify-start pt-0 md:pt-4 lg:pt-8 pb-24 md:pb-32">
      {/* Floating Far-Left Table of Contents (Large Screens Only) */}
      <TableOfContents
        items={HOME_TOC_ITEMS}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex"
      />

      <HomeHeroV2 />
      <div className="w-[94%] max-w-6xl mx-auto mt-12 md:mt-16 flex flex-col gap-12 md:gap-16">
        <CoreExpertise />
        <Capabilities />
      </div>
    </div>
  );
}
