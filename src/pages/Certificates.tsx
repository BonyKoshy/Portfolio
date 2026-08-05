import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { certificates } from "@/lib/certificateData";
import { useBreakpoint } from "@/lib/useBreakpoint";
import Footer from "@/components/layout/Footer";

// ----------------------------------------------------------------------
// Reusable Card Component
// ----------------------------------------------------------------------
const CertCard = ({ cert }: { cert: any }) => (
  <div className="w-full shrink-0 flex flex-col bg-bg-default border border-border-default rounded-sm overflow-hidden cursor-default h-full">
    {/* Image Container - Natural height based on width without cropping */}
    <div className="relative w-full bg-bg-surface flex items-center justify-center overflow-hidden shrink-0">
      <img
        src={cert.thumbnail}
        alt={cert.title}
        className="w-full h-auto object-contain block opacity-90"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col p-4 sm:p-5 flex-1">
      <div className="flex items-center justify-between mb-3">
        <span className="font-jetbrains-mono text-[10px] sm:text-[11px] font-bold text-fg-tertiary tracking-widest uppercase">
          {cert.issuer}
        </span>
        <div className="flex items-center gap-1.5 text-green-500">
          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="font-jetbrains-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold">
            VERIFIED
          </span>
        </div>
      </div>

      <h3 className="font-jetbrains-mono text-sm sm:text-base font-bold uppercase tracking-wide text-fg-primary mb-3">
        {cert.title}
      </h3>

      <div className="font-jetbrains-mono text-[9px] sm:text-[10px] text-fg-secondary/90 leading-relaxed mb-5">
        {cert.description}
      </div>

      {/* Footer with Separator */}
      <div className="mt-auto flex flex-col pt-4 border-t border-border-default gap-4">
        <div className="flex items-center justify-between">
          <span className="font-jetbrains-mono text-[10px] sm:text-[11px] text-fg-secondary/70 uppercase tracking-widest">
            {cert.date === "Ongoing" ? "ACTIVE" : cert.date}
          </span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-fg-secondary hover:text-fg-primary transition-colors font-jetbrains-mono text-[10px] uppercase tracking-widest font-semibold group cursor-target"
          >
            [ VIEW CREDENTIAL{" "}
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary ml-1 mr-1" />{" "}
            ]
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// Desktop: Full-viewport layout with horizontal scroll body
// Navbar (handled by App) | Header | ← Horizontal Track → | Footer
// The page locks to the viewport. Wheel scroll moves cards horizontally.
// ----------------------------------------------------------------------
const DesktopLayout = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // Smooth scroll state
  const targetX = useRef(0);
  const isScrolling = useRef(false);

  // Map vertical wheel events → horizontal scroll on the track
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!trackRef.current) return;

    const el = trackRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;

    // If there's room to scroll horizontally, consume the event
    if (maxScroll > 0) {
      // Use whichever axis has the larger delta
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // Initialize targetX to current scrollLeft if not already animating
      if (!isScrolling.current) {
        targetX.current = el.scrollLeft;
      }

      // Calculate new target bounded by min/max scroll
      targetX.current = Math.max(
        0,
        Math.min(targetX.current + delta * 2, maxScroll)
      ); // multiply delta for speed

      const atStart = el.scrollLeft <= 0 && delta < 0;
      const atEnd = el.scrollLeft >= maxScroll - 1 && delta > 0;

      // Allow native scroll to pass through only at the ends
      if (atStart || atEnd) {
        return;
      }

      e.preventDefault();

      // Start smooth animation loop if not running
      if (!isScrolling.current) {
        isScrolling.current = true;

        const animate = () => {
          if (!trackRef.current) {
            isScrolling.current = false;
            return;
          }

          const currentX = trackRef.current.scrollLeft;
          const diff = targetX.current - currentX;

          if (Math.abs(diff) < 0.5) {
            trackRef.current.scrollLeft = targetX.current;
            isScrolling.current = false;
          } else {
            // Lerp towards target
            trackRef.current.scrollLeft = currentX + diff * 0.15;
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }
  }, []);

  // Update edge fade visibility based on scroll position
  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setShowLeftFade(scrollLeft > 5);
    setShowRightFade(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Passive: false so we can call preventDefault on wheel
    window.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial state

    return () => {
      window.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
    };
  }, [handleWheel, handleScroll]);

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col overflow-hidden bg-bg-default">
      {/* STATIC: Header */}
      <div className="w-[94%] max-w-6xl mx-auto flex flex-col gap-2 pt-4 pb-6 shrink-0">
        <span className="font-jetbrains-mono text-sm text-primary font-bold tracking-widest uppercase">
          03 // VERIFIED CREDENTIALS
        </span>
        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] ml-[-0.05em] text-fg-primary">
          CREDENTIALS
        </h2>
      </div>

      {/* SCROLLABLE: Horizontal card track inside margins */}
      <div className="relative flex-1 w-[94%] max-w-6xl mx-auto overflow-hidden">
        {/* Edge Fades */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-bg-default to-transparent z-10 transition-opacity duration-300 ${
            showLeftFade ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-bg-default to-transparent z-10 transition-opacity duration-300 ${
            showRightFade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Horizontally scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-1 h-full overflow-x-auto overflow-y-hidden items-stretch hide-scrollbar py-2"
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="w-[min(375px,75vw)] shrink-0 h-full">
              <CertCard cert={cert} />
            </div>
          ))}
        </div>
      </div>

      {/* STATIC: Footer */}
      <div className="shrink-0 pt-8">
        <Footer />
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Tablet/Mobile: Standard Vertical Grid Layout
// ----------------------------------------------------------------------
const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-bg-default flex flex-col pt-2 sm:pt-4 pb-16">
      <div className="w-[94%] md:max-w-4xl lg:max-w-6xl mx-auto flex flex-col shrink-0">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full mb-10">
          <span className="font-jetbrains-mono text-xs sm:text-sm text-primary font-bold tracking-widest uppercase">
            03 // VERIFIED CREDENTIALS
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-[-0.04em] ml-[-0.05em] text-fg-primary">
            CREDENTIALS
          </h2>
        </div>

        {/* Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
          {certificates.map((cert) => (
            <div key={cert.id} className="w-full">
              <CertCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Page Component
// ----------------------------------------------------------------------
const Certificates = () => {
  const isDesktop = useBreakpoint("above", "lg");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default Certificates;
