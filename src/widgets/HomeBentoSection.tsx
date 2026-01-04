import { BentoGrid, BentoCard } from "@/shared/ui/BentoGrid";
import { cn } from "@/shared/lib/utils";
import { User, FileText, Code, FileBadge, Download, Globe as GlobeIcon } from "lucide-react";
import DottedMap from "@/shared/ui/DottedMap/DottedMap";
import LogoLoop from "@/shared/ui/LogoLoop/LogoLoop";
import { SiAccenture } from "react-icons/si";
import { techLogos } from "../shared/config/techStack"; // Recommended to move data to config

export function HomeBentoSection() {
  const features = [
    {
      Icon: User,
      name: "Profile",
      description: "Creative Full-stack Developer.",
      href: "/about",
      cta: "About Me",
      className: "row-span-2 md:col-span-2 md:row-span-2",
      background: (
        <img
          src="/profile-image.jpg"
          alt="Bony Koshy"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
        />
      ),
    },
    {
      Icon: SiAccenture,
      name: "Accenture",
      description: "Associate Software Engineer",
      href: "/about#experience",
      cta: "Experience",
      minimalCTA: true,
      className: "row-start-3 md:col-span-2 md:row-start-3",
      background: (
        <div className="absolute inset-0 pointer-events-none">
          {/* Static Accenture Brand color hint */}
          <div className="absolute inset-0 bg-[#A100FF]/[0.02]" />
          {/* Animated Gradient on Hover - Increased blending and coverage */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A100FF]/60 via-[#A100FF]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      ),
    },
    {
      Icon: FileText,
      name: "Resume",
      description: "Download handcrafted CV.",
      href: "/resume.pdf",
      cta: "CV",
      minimalCTA: true,
      ctaIcon: <Download className="h-4 w-4" />,
      className: "row-start-4 md:col-span-2 md:row-start-4",
      background: (
        <div className="absolute inset-0 pointer-events-none">
          {/* Static Blue hint */}
          <div className="absolute inset-0 bg-blue-500/[0.02]" />
          {/* Animated Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      ),
    },
    {
      Icon: Code,
      name: "Skills",
      description: "Curated stack for precision.",
      href: "/about#skills",
      cta: "Deep Dive",
      className: "row-span-2 row-start-5 md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1",
      background: (
        <div className="absolute inset-0 flex items-start pt-12 md:pt-20 justify-center opacity-30 group-hover:opacity-80 transition-opacity duration-500">
             <LogoLoop
              logos={techLogos}
              speed={40}
              logoHeight={45} // Scaled down for mobile
              gap={30} // Reduced gap for mobile
              scaleOnHover
              renderItem={(item: any) => (
                 <div className="text-black dark:text-white transition-colors text-6xl">
                    {item.node}
                 </div>
              )}
            />
        </div>
      ),
    },
    {
      Icon: GlobeIcon,
      name: "Languages",
      description: "English, Hindi, Malayalam.",
      href: "/about",
      cta: "Get in touch",
      className: "row-span-2 row-start-7 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3",
      background: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-35%] right-[-50%] w-[300%] sm:w-[170%] sm:top-[-25%] sm:right-[-5%] md:w-[300%] md:top-[-35%] md:right-[-50%] lg:w-[170%] lg:top-[-25%] lg:right-[-5%] opacity-50">
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
      name: "Certificates",
      description: "Industry verified learning.",
      href: "/certificates",
      cta: "View All",
      className: "row-span-2 row-start-9 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3",
      background: (
        <div className="absolute inset-x-0 top-0 p-4 grid grid-cols-2 gap-2 min-[375px]:flex min-[375px]:justify-between md:grid md:grid-cols-2 lg:flex lg:justify-between overflow-hidden opacity-60 transition-opacity duration-300 group-hover:opacity-100">
           {['aws', 'google', 'ibm', 'microsoft'].map((cert, i) => (
             <div key={i} className="aspect-square w-full rounded-2xl bg-black/5 dark:bg-white/5 p-4 flex items-center justify-center">
                <img 
                  src={`/certs/${cert}.png`} 
                  alt={cert}
                  className={cn(
                    "w-full h-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0",
                    cert === 'aws' && "brightness-0 dark:brightness-100"
                  )}
                />
             </div>
           ))}
        </div>
      ),
    },
  ];

  return (
    <BentoGrid className="grid-cols-1 grid-rows-10 md:grid-cols-6 md:grid-rows-4 h-auto md:min-h-[700px] md:h-[calc(100vh-12rem)] md:max-h-[900px] gap-4">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}