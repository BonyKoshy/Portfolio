import { useState, useId, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/lib/certificateData";
import { Certificate } from "@/types/certificate";
import { useOutsideClick } from "@/hooks/use-outside-click";

const CREDENTIAL_IDS = [
  "ibm-java-professional",
  "google-it-support-specialization",
  "aws-cloud-technical-essentials",
];

export function Credentials() {
  const [active, setActive] = useState<Certificate | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const credentials = CREDENTIAL_IDS.map((certId) =>
    certificates.find((c) => c.id === certId)!
  ).filter(Boolean);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const activeIndex =
    active && typeof active === "object"
      ? credentials.findIndex((c) => c.id === active.id)
      : -1;

  const justifyClass =
    activeIndex === 0
      ? "justify-center md:justify-start"
      : activeIndex === 2
        ? "justify-center md:justify-end"
        : "justify-center";

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-bg-overlay cursor-zoom-out pointer-events-auto"
            />

            {/* Inner Content bounds matching page container */}
            <div
              className={`relative z-10 w-[94%] max-w-6xl mx-auto flex items-center ${justifyClass} pointer-events-none`}
            >
              {/* Modal Wrapper for Button Positioning */}
              <div className="w-full max-w-125 flex flex-col items-end gap-2 pointer-events-auto">
                <button
                  onClick={() => setActive(null)}
                  className="text-fg-muted hover:text-fg-primary transition-colors cursor-target focus:outline-none text-xs tracking-widest uppercase font-jetbrains-mono"
                >
                  [ EXIT ]
                </button>

                <motion.div
                  layoutId={`card-${active.id}-${id}`}
                  ref={ref}
                  className="w-full flex flex-col bg-bg-default border border-border-default rounded-sm overflow-hidden shadow-2xl cursor-default"
                >
                  {/* Modal Header / Image */}
                  <div className="relative w-full bg-bg-surface overflow-hidden">
                    <img
                      src={active.thumbnail}
                      alt={active.title}
                      className="w-full h-auto object-contain block opacity-90"
                    />
                  </div>

                  {/* Modal Content */}
                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-jetbrains-mono text-xs font-bold text-fg-muted tracking-widest uppercase">
                        {active.issuer}
                      </span>
                      <div className="flex items-center gap-1.5 text-status-success">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="font-jetbrains-mono text-xs tracking-widest uppercase font-semibold">
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="font-jetbrains-mono text-lg sm:text-xl font-bold uppercase tracking-wide text-fg-primary mb-4"
                    >
                      {active.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-jetbrains-mono text-[13px] sm:text-sm text-fg-muted leading-relaxed mb-8"
                    >
                      {active.description}
                    </motion.div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-jetbrains-mono text-xs text-fg-muted uppercase tracking-widest">
                        {active.date === "Ongoing" ? "ACTIVE" : active.date}
                      </span>
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-fg-secondary hover:text-fg-primary transition-colors font-jetbrains-mono text-xs sm:text-xs uppercase tracking-widest font-semibold group cursor-target"
                      >
                        [ VIEW CREDENTIAL{" "}
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent-primary ml-1 mr-1" />{" "}
                        ]
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <section
        id="credentials"
        className="w-full scroll-mt-24 md:scroll-mt-28 flex flex-col"
      >
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col gap-2 w-full mb-8 sm:mb-10">
          <span className="font-jetbrains-mono text-xs sm:text-sm text-accent-primary font-bold tracking-widest uppercase">
            03 // VERIFIED CREDENTIALS
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] ml-[-0.05em] text-fg-primary">
            CREDENTIALS
          </h2>
        </div>

        {/* 2. THREE EQUAL CERTIFICATE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full group/grid">
          {credentials.map((cert) => (
            <motion.div
              layoutId={`card-${cert.id}-${id}`}
              key={cert.id}
              onClick={() => setActive(cert)}
              className="group/card relative border border-border-default bg-bg-default rounded-sm px-5 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 flex flex-col h-full transition-none cursor-pointer cursor-target hover:border-fg-primary hover:bg-bg-surface group-hover/grid:opacity-40 hover:opacity-100!"
            >
              {/* Top Row: Issuer */}
              <div className="flex items-center justify-between mb-8 sm:mb-10">
                <span className="font-jetbrains-mono text-xs sm:text-xs font-bold text-fg-muted group-hover/card:text-fg-primary transition-colors tracking-widest uppercase">
                  {cert.issuer}
                </span>
              </div>

              {/* Middle: Title */}
              <div className="flex flex-col gap-3 mb-8 flex-1">
                <motion.h3
                  layoutId={`title-${cert.id}-${id}`}
                  className="font-jetbrains-mono text-sm sm:text-base font-bold uppercase tracking-wide text-fg-primary transition-colors pr-6"
                >
                  {cert.title}
                </motion.h3>
              </div>

              {/* Top Right Hover Icon */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                <ArrowUpRight className="w-4 h-4 text-accent-primary md:text-fg-muted md:group-hover/card:text-accent-primary transition-colors" />
              </div>

              {/* Bottom Row: Date / Verification */}
              <div className="flex items-center justify-between pt-5 border-t border-border-subtle mt-auto">
                <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-muted uppercase tracking-widest">
                  {cert.date === "Ongoing" ? "ACTIVE" : cert.date}
                </span>
                <div className="flex items-center gap-1.5 text-status-success group-hover/card:text-status-success transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-jetbrains-mono text-xs tracking-widest uppercase font-semibold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. RIGHT-ALIGNED VIEW ALL BUTTON */}
        <div className="w-full flex justify-end mt-4 sm:mt-5">
          <Link
            to="/certificates"
            className="flex items-center text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer cursor-target font-jetbrains-mono text-xs lg:text-xs font-semibold tracking-wider uppercase group px-2 py-1"
          >
            [ VIEW ALL CERTIFICATIONS{" "}
            <span className="text-accent-primary font-jetbrains-mono ml-1 mr-1">
              &gt;
            </span>{" "}
            ]
          </Link>
        </div>
      </section>
    </>
  );
}
