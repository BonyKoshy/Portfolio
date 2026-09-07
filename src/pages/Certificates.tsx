import { useState } from "react";
import { CheckCircle2, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/lib/certificateData";
import { Meta } from "@/components/ui/Meta";
import { cn } from "@/lib/utils";

const Certificates = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedCert(expandedCert === id ? null : id);
  };

  return (
    <div className="w-[94%] max-w-6xl mx-auto text-fg-primary pt-4 sm:pt-6 pb-24 relative min-h-screen flex flex-col">
      <Meta
        title="Verified Credentials // Certifications"
        description="Official certifications and verified credentials."
      />

      {/* HEADER */}
      <div className="flex flex-col gap-2 w-full mb-12 sm:mb-16">
        <span className="font-jetbrains-mono text-xs sm:text-sm text-accent-primary font-bold tracking-widest uppercase">
          03 // VERIFIED CREDENTIALS
        </span>
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] ml-[-0.05em] text-fg-primary">
          CREDENTIALS
        </h1>
      </div>

      {/* VERTICAL LIST OF HORIZONTAL CARDS */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="w-full grid grid-cols-1 sm:grid-cols-5 gap-1"
          >
            {/* 1 for Image (Left Side) - col-span-2 */}
            <motion.div
              layoutId={`cert-image-container-${cert.id}`}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              onClick={() => setSelectedImageId(cert.id)}
              className="sm:col-span-2 relative w-full h-full min-h-[160px] sm:min-h-full overflow-hidden bg-bg-default border border-border-default rounded-sm flex items-center justify-center cursor-target group/certimg"
            >
              <motion.img
                layoutId={`cert-image-${cert.id}`}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                src={cert.thumbnail}
                alt={cert.title}
                className="w-full h-full object-contain block opacity-90 grayscale md:group-hover/certimg:grayscale-0 transition-[filter] duration-300"
              />
            </motion.div>

            {/* 2 for Content (Right Side) - col-span-3 */}
            <div className="sm:col-span-3 flex flex-col bg-bg-default border border-border-default rounded-sm p-5 sm:p-6 md:p-8 min-w-0">
              <div className="flex items-center justify-between mb-4">
                <span className="font-jetbrains-mono text-[10px] sm:text-xs font-bold text-fg-muted tracking-widest uppercase truncate pr-2">
                  {cert.issuer}
                </span>
                <div className="flex items-center gap-1.5 text-status-success shrink-0">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="font-jetbrains-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
                    {cert.status ? cert.status.toUpperCase() : "VERIFIED"}
                  </span>
                </div>
              </div>

              <h3 className="font-jetbrains-mono text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-fg-primary mb-3 sm:mb-4">
                {cert.title}
              </h3>

              <div className="font-jetbrains-mono text-xs sm:text-[13px] md:text-sm text-fg-muted leading-relaxed">
                {cert.description}
              </div>

              {/* Bottom aligned wrapper for Skills + Footer */}
              <div className="mt-auto flex flex-col pt-6">
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="font-jetbrains-mono text-[9px] sm:text-[10px] text-fg-secondary border border-border-default bg-bg-surface px-2 py-1 rounded-sm uppercase tracking-widest shrink-0"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-border-default">
                  <span className="font-jetbrains-mono text-[10px] sm:text-xs text-fg-muted uppercase tracking-widest">
                    {cert.date === "Ongoing" ? "ACTIVE" : cert.date}
                  </span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-fg-secondary hover:text-fg-primary transition-colors font-jetbrains-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold group cursor-target"
                    >
                      [ VIEW CREDENTIAL{" "}
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-primary ml-1 mr-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />{" "}
                      ]
                    </a>
                  ) : (
                    <span className="font-jetbrains-mono text-[10px] sm:text-[11px] text-fg-muted uppercase tracking-widest">
                      [ VERIFIED TRACK ]
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 3 for Expandable Part (Accordion) - col-span-5 full width */}
            {cert.modules && cert.modules.length > 0 && (
              <div className="col-span-1 sm:col-span-5 flex flex-col border border-border-default bg-bg-default rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion(cert.id)}
                  className="w-full px-5 py-4 sm:px-8 bg-bg-surface flex items-center justify-between hover:bg-bg-surface/80 transition-colors group focus:outline-none cursor-target"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold text-fg-secondary group-hover:text-fg-primary transition-colors">
                      MODULES / COURSES
                    </span>
                    <span className="font-jetbrains-mono text-[10px] text-accent-primary border border-accent-primary/30 px-1.5 py-0.5 rounded-sm">
                      {cert.modules.length}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-fg-muted group-hover:text-fg-primary transition-all duration-300",
                      expandedCert === cert.id ? "rotate-180" : ""
                    )}
                  />
                </button>
                <AnimatePresence>
                  {expandedCert === cert.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col border-t border-border-default">
                        {cert.modules.map((module) => (
                          <div
                            key={module.id}
                            className="px-5 py-4 sm:px-8 border-b border-border-subtle last:border-b-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 hover:bg-bg-surface/30 transition-colors"
                          >
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="font-jetbrains-mono text-xs sm:text-[13px] font-bold text-fg-primary uppercase tracking-wide truncate">
                                {module.title}
                              </span>
                              <span className="font-jetbrains-mono text-[10px] sm:text-xs text-fg-muted uppercase tracking-widest">
                                {module.date}
                              </span>
                            </div>
                            {module.credentialUrl && (
                              <a
                                href={module.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center shrink-0 text-fg-secondary hover:text-fg-primary transition-colors font-jetbrains-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold group/btn cursor-target"
                              >
                                [ VERIFY{" "}
                                <ArrowUpRight className="w-3 h-3 text-accent-primary ml-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />{" "}
                                ]
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Morphed Image Modal */}
      <AnimatePresence>
        {selectedImageId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImageId(null)}
              className="absolute inset-0 bg-bg-overlay cursor-zoom-out"
            />

            {/* Modal Wrapper for Button Positioning */}
            <div className="relative z-10 w-[90vw] max-w-4xl flex flex-col items-end gap-2">
              <button
                onClick={() => setSelectedImageId(null)}
                className="text-fg-muted hover:text-fg-primary transition-colors cursor-target focus:outline-none text-xs tracking-widest uppercase font-jetbrains-mono"
              >
                [ EXIT ]
              </button>

              {/* Modal Content */}
              {(() => {
                const activeCert = certificates.find(
                  (c) => c.id === selectedImageId
                );
                if (!activeCert) return null;
                return (
                  <motion.div
                    layoutId={`cert-image-container-${activeCert.id}`}
                    className="relative inline-flex bg-bg-default border border-border-default overflow-hidden rounded-xl shadow-2xl cursor-default"
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                  >
                    <motion.img
                      src={activeCert.thumbnail}
                      alt={activeCert.title}
                      layoutId={`cert-image-${activeCert.id}`}
                      className="max-w-full max-h-[80vh] w-auto h-auto object-contain block"
                      transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.3,
                      }}
                    />
                  </motion.div>
                );
              })()}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
