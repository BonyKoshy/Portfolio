import { BentoGrid, BentoCard } from "@/shared/ui/BentoGrid";
import { AspectRatio } from "@/shared/ui/AspectRatio/AspectRatio";
import { cn } from "@/shared/lib/utils";
import {
  User,
  FileText,
  Code,
  FileBadge,
  Globe as GlobeIcon,
} from "lucide-react";
import DottedMap from "@/shared/ui/DottedMap/DottedMap";
import LogoLoop, { LogoItem } from "@/shared/ui/LogoLoop/LogoLoop";
import { SiAccenture } from "react-icons/si";
import { techLogos } from "@/entities/technology/model/techStack";
import { homeContent } from "@/shared/config/content";

const features = [
  {
    Icon: User,
    name: homeContent.bento.profile.title,
    description: homeContent.bento.profile.description,
    href: "/about",
    cta: homeContent.bento.profile.cta,
    className: "row-span-2 sm:col-span-2 sm:row-span-2",
    background: (
      <img
        src="/profile-image.webp"
        alt="Bony Koshy"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale pointer-coarse:grayscale-0 [@media(hover:hover)]:group-hover:grayscale-0 group-focus-visible:grayscale-0 opacity-40 pointer-coarse:opacity-60 [@media(hover:hover)]:group-hover:opacity-60 group-focus-visible:opacity-60"
      />
    ),
  },
  {
    Icon: SiAccenture,
    name: homeContent.bento.accenture.title,
    description: homeContent.bento.accenture.description,
    href: "/about#experience",
    cta: homeContent.bento.accenture.cta,
    minimalCTA: true,
    ctaLayout: "side" as const,
    className: "row-start-3 sm:col-span-2 sm:row-start-3",

    background: (
      <div className="absolute inset-0 pointer-events-none">
        {/* Static Accenture Brand color hint */}
        <div className="absolute inset-0 bg-[#A100FF]/2" />
        {/* Animated Gradient on Hover - Increased blending and coverage */}
        <div className="absolute inset-0 bg-linear-to-br from-[#A100FF]/60 via-[#A100FF]/10 to-transparent opacity-0 transition-opacity duration-500 pointer-coarse:opacity-100 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
    ),
  },
  {
    Icon: FileText,
    name: homeContent.bento.resume.title,
    description: homeContent.bento.resume.description,
    href: "/resume.pdf",
    target: "_blank",
    cta: homeContent.bento.resume.cta,
    minimalCTA: true,
    ctaLayout: "side" as const,

    className: "row-start-4 sm:col-span-2 sm:row-start-4",

    background: (
      <div className="absolute inset-0 pointer-events-none">
        {/* Static Blue hint */}
        <div className="absolute inset-0 bg-blue-500/2" />
        {/* Animated Gradient on Hover */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/60 via-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 pointer-coarse:opacity-100 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
    ),
  },
  {
    Icon: Code,
    name: homeContent.bento.skills.title,
    description: homeContent.bento.skills.description,
    href: "/about#skills",
    cta: homeContent.bento.skills.cta,
    className:
      "row-span-2 row-start-5 sm:col-span-4 sm:row-span-2 sm:col-start-3 sm:row-start-1",
    background: (
      <div className="absolute inset-0 flex items-start pt-12 md:pt-20 justify-center opacity-30 pointer-coarse:opacity-80 [@media(hover:hover)]:group-hover:opacity-80 group-focus-visible:opacity-80 transition-opacity duration-500">
        <LogoLoop
          logos={techLogos}
          speed={40}
          logoHeight={45}
          gap={30}
          scaleOnHover
          renderItem={(item: LogoItem) => {
            if ("node" in item) {
              return (
                <div className="text-fg-primary transition-colors text-6xl">
                  {item.node}
                </div>
              );
            }
            return null;
          }}
        />
      </div>
    ),
  },
  {
    Icon: GlobeIcon,
    name: homeContent.bento.languages.title,
    description: homeContent.bento.languages.description,
    href: "/about",
    cta: homeContent.bento.languages.cta,
    className:
      "row-span-2 row-start-7 sm:col-span-2 sm:row-span-2 sm:col-start-3 sm:row-start-3",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-35%] right-[-50%] w-[300%] sm:w-[170%] sm:top-[-25%] sm:right-[-5%] md:w-[300%] md:top-[-35%] md:right-[-50%] lg:w-[170%] lg:top-[-25%] lg:right-[-5%] opacity-50 transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105">
          <DottedMap
            markers={[{ lat: 10.8505, lng: 76.2711, size: 0.6 }]}
            markerColor="#3b82f6"
          />
        </div>
      </div>
    ),
  },
  {
    Icon: FileBadge,
    name: homeContent.bento.certificates.title,
    description: homeContent.bento.certificates.description,
    href: "/certificates",
    cta: homeContent.bento.certificates.cta,
    className:
      "row-span-2 row-start-9 sm:col-span-2 sm:row-span-2 sm:col-start-5 sm:row-start-3",
    background: (
      <div className="absolute inset-x-0 top-0 p-4 grid grid-cols-2 gap-2 xs:flex xs:justify-between sm:grid sm:grid-cols-2 lg:flex lg:justify-between overflow-hidden opacity-60 transition-opacity duration-300 pointer-coarse:opacity-100 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100">
        {["aws", "google", "ibm", "microsoft"].map((cert, i) => (
          <div
            key={i}
            className="aspect-square w-full rounded-2xl bg-border-default/50 p-4 flex items-center justify-center border border-border-default/50"
          >
            <AspectRatio ratio={1}>
              <img
                src={`/certs/${cert}.webp`}
                alt={cert}
                loading="lazy"
                className={cn(
                  "w-full h-full object-contain grayscale transition-all duration-300 pointer-coarse:grayscale-0 [@media(hover:hover)]:group-hover:grayscale-0 group-focus-visible:grayscale-0"
                )}
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    ),
  },
];

/** Renders a grid of bento cards highlighting key features and links. */
export function HomeBentoSection() {
  return (
    <BentoGrid className="grid-cols-1 grid-rows-10 sm:grid-cols-6 sm:grid-rows-4 h-auto sm:min-h-175 sm:h-[calc(100vh-12rem)] sm:max-h-225 gap-4">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
