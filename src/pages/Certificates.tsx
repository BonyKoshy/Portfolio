import React, { useState, useEffect } from "react";
import ShinyText from "@/shared/ui/ShinyText/ShinyText";
import { ParallaxScroll } from "@/shared/ui/ParallaxScroll";
import { CertificateSideSheet } from "@/entities/certificate/ui/CertificateSideSheet";
import { CertificatesSkeleton } from "@/widgets/Skeletons/CertificatesSkeleton";
import { certificates } from "@/entities/certificate/model/data";
import { CertificateCard } from "@/entities/certificate/ui/CertificateCard";
import { Certificate } from "@/entities/certificate/model/types";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll/RevealOnScroll";
import {
  LayoutGrid,
  Code2,
  Cloud,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { CertificateCategory } from "@/entities/certificate/model/types";

// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isSmallMobile, setIsSmallMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallMobile(window.innerWidth < 425);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile, isSmallMobile };
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    CertificateCategory | "all"
  >("all");
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile, isSmallMobile } = useIsMobile();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CertificatesSkeleton />;
  }

  // Filter Logic
  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter((c) =>
          Array.isArray(c.category)
            ? c.category.includes(activeCategory)
            : c.category === activeCategory
        );

  // For ParallaxScroll, it expects { id, content }.
  const parallaxItems = filteredCertificates.map((cert) => ({
    id: cert.id,
    content: (
      <CertificateCard
        certificate={cert}
        onClick={() => setSelectedCert(cert)}
      />
    ),
  }));

  const categories: {
    id: CertificateCategory | "all";
    label: string;
    icon: React.ReactNode;
  }[] = [
    { id: "all", label: "All", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "software", label: "Software", icon: <Code2 className="w-4 h-4" /> },
    { id: "cloud", label: "Cloud", icon: <Cloud className="w-4 h-4" /> },
    {
      id: "security",
      label: "Security",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      id: "ai",
      label: "AI & Data",
      icon: <BrainCircuit className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-20 container mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 space-y-6">
        <RevealOnScroll>
          <ShinyText
            text="CERTIFICATIONS"
            className="text-4xl sm:text-6xl md:text-8xl font-thin tracking-tight uppercase"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg font-light leading-relaxed">
            A collection of professional credentials, specializations, and
            technical milestones validating my expertise across domains.
          </p>
        </RevealOnScroll>

        {/* Centered Filter Pills (Scrollable on mobile) */}
        <RevealOnScroll delay={0.2} width="100%">
          <div className="flex justify-center w-full overflow-x-auto pb-2 no-scrollbar">
            <div className="flex items-center gap-2 p-1.5 bg-black/20 backdrop-blur-xl border border-white/5 rounded-full supports-backdrop-filter:bg-black/10">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                // On small mobile: if active, show Icon + Text. If inactive, show Only Icon.
                // On larger screens: always show Icon + Text.
                const showText = !isSmallMobile || isActive;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full transition-all duration-300 ease-out whitespace-nowrap",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 px-5 py-2.5 font-medium"
                        : "hover:bg-white/5 text-muted-foreground hover:text-foreground px-3 py-2.5"
                    )}
                  >
                    {cat.icon}
                    {showText && (
                      <span
                        className={cn(
                          "text-sm",
                          isSmallMobile && isActive
                            ? "animate-in fade-in slide-in-from-left-2 duration-200"
                            : ""
                        )}
                      >
                        {cat.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Grid Content */}
      {isMobile ? (
        <div className="flex flex-col gap-6">
          {filteredCertificates.map((cert, index) => (
            <RevealOnScroll key={cert.id} delay={index * 0.1} width="100%">
              <div className="h-auto aspect-4/3 w-full">
                <CertificateCard
                  certificate={cert}
                  onClick={() => setSelectedCert(cert)}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <ParallaxScroll items={parallaxItems} className="w-full" />
      )}

      {/* Detail View SideSheet */}
      <CertificateSideSheet
        selectedCert={selectedCert}
        onClose={() => setSelectedCert(null)}
        onSwitchCert={(certId) => {
          const cert = certificates.find((c) => c.id === certId);
          if (cert) setSelectedCert(cert);
        }}
      />
    </div>
  );
};

export default Certificates;
