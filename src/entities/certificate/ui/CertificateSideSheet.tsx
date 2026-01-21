import React from "react";
import { Certificate } from "@/entities/certificate/model/types";
import {
  SideSheet,
  SideSheetContent,
  SideSheetClose,
  SideSheetHeader,
  SideSheetTitle,
  SideSheetFooter,
} from "@/shared/ui/SideSheet";
import { AspectRatio } from "@/shared/ui/AspectRatio";
import { Button } from "@/shared/ui/Button/Button";
import { ArrowUpRight, X, Award } from "lucide-react";
import { SiCoursera } from "react-icons/si";

interface CertificateSideSheetProps {
  selectedCert: Certificate | null;
  onClose: () => void;
  onSwitchCert: (certId: string) => void;
}

export const CertificateSideSheet: React.FC<CertificateSideSheetProps> = ({
  selectedCert,
  onClose,
  onSwitchCert,
}) => {
  const isOpen = !!selectedCert;

  // We need to determine if we should show the Coursera logo.
  // The requirement mentions 'IBM GOOGLE AWS courses'.
  const isCourseraPartner =
    selectedCert &&
    ["IBM", "Google", "Amazon Web Services"].some((provider) =>
      selectedCert.issuer.includes(provider)
    );

  return (
    <SideSheet
      width="600px"
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
    >
      <SideSheetContent className="overflow-y-auto sm:overscroll-contain">
        {/* Close Button - Exact match to ProjectDetailsSheet */}
        <SideSheetClose className="absolute right-6 top-6 z-50 p-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-text-primary transition-all hover:bg-white/20 dark:hover:bg-white/10 active:scale-95 focus:outline-hidden">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </SideSheetClose>

        {selectedCert && (
          <>
            <SideSheetHeader className="pt-8 px-1 pb-2 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <span>{selectedCert.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border-default" />
                  <span>{selectedCert.category}</span>
                </div>
                <SideSheetTitle className="text-3xl font-bold tracking-tight text-text-primary">
                  {selectedCert.title}
                </SideSheetTitle>
              </div>
            </SideSheetHeader>

            <div className="mt-4 px-1 space-y-8 pb-28">
              {/* 1. Intersecting Circle with Text */}
              {isCourseraPartner && (
                <div className="flex items-center gap-3 h-8">
                  <div className="flex items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white border border-bg-paper shadow-sm flex items-center justify-center overflow-hidden z-10 relative">
                      <img
                        src={selectedCert.thumbnail}
                        alt={selectedCert.issuer}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0056D2] border border-bg-paper shadow-sm flex items-center justify-center overflow-hidden -ml-2 z-0 relative">
                      <SiCoursera className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-xs font-medium text-text-secondary leading-none">
                    Provided by {selectedCert.issuer} via Coursera
                  </p>
                </div>
              )}

              {/* 2. Image */}
              <div className="rounded-2xl overflow-hidden border border-border-default bg-bg-subtle shadow-sm relative group">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={selectedCert.thumbnail}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                  />
                </AspectRatio>
              </div>

              {/* 3. Specialization Alert */}
              {selectedCert.isSpecialization && (
                <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 flex items-center gap-2 text-xs text-text-primary overflow-hidden">
                  <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="font-medium whitespace-nowrap">
                    Specialized Certificate
                  </span>
                  <span className="text-text-secondary truncate hidden sm:inline-block">
                    - Professional training program
                  </span>
                </div>
              )}

              {/* 4. Skills */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2 pl-3 border-l border-border-subtle ml-0.5">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-fg-secondary bg-bg-subtle rounded-full border border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Description */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Overview
                </h4>
                <p className="text-base leading-relaxed text-text-secondary pl-3 border-l border-border-subtle ml-0.5">
                  {selectedCert.description}
                </p>
              </div>

              {/* 6. Sub Certs */}
              {selectedCert.subCertificates &&
                selectedCert.subCertificates.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full"></span>
                      Curriculum
                    </h4>
                    <div className="grid grid-cols-1 gap-2 pl-3 border-l border-border-subtle ml-0.5">
                      {selectedCert.subCertificates.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => onSwitchCert(sub.certId)}
                          className="w-full flex items-start gap-3 p-3 rounded-xl border border-border-default bg-bg-subtle/30 hover:bg-bg-subtle hover:border-primary/30 transition-all text-left group/card"
                        >
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-border-default text-[10px] font-bold text-text-secondary group-hover/card:bg-primary group-hover/card:text-white transition-colors shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-text-primary leading-snug group-hover/card:text-primary transition-colors">
                              {sub.title}
                            </p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-text-secondary opacity-0 group-hover/card:opacity-100 transition-opacity shrink-0 mt-0.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Footer */}
            <SideSheetFooter className="absolute bottom-0 left-0 right-0 p-6 bg-bg-paper/80 backdrop-blur-xl border-t border-border-default flex flex-col sm:flex-row gap-4 sm:justify-between items-center z-40">
              {selectedCert.credentialUrl && (
                <div className="w-full">
                  <Button
                    variant="primary"
                    className="w-full h-11 text-base shadow-lg shadow-primary/20 gap-2"
                    onClick={() =>
                      window.open(selectedCert.credentialUrl, "_blank")
                    }
                  >
                    Show Credential
                    <ArrowUpRight size={18} />
                  </Button>
                </div>
              )}
            </SideSheetFooter>
          </>
        )}
      </SideSheetContent>
    </SideSheet>
  );
};
