import React from "react";
import { Certificate } from "@/entities/certificate/model/types";
import { GlareHover } from "@/shared/ui/GlareHover";

import { Tooltip } from "@/shared/ui/Tooltip";
import { cn } from "@/shared/lib/utils";
import { Award, ArrowUpRight } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
  onClick?: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onClick,
}) => {
  const isOngoing = certificate.date === "Ongoing";

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative w-full h-full cursor-pointer rounded-2xl p-4 transition-all duration-300",
        "bg-bg-surface shadow-sm hover:shadow-md",
        isOngoing ? "grayscale hover:grayscale-0" : ""
      )}
    >
      <div className="flex flex-col gap-4 h-full">
        {/* Header: Provider & Date */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-medium text-fg-secondary uppercase tracking-wider">
            {certificate.issuer}
          </span>
          <span className="text-xs font-medium text-fg-secondary">
            {certificate.date}
          </span>
        </div>

        {/* Thumbnail Image */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-sm bg-bg-subtle aspect-video">
          <GlareHover
            className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl"
            glareOpacity={0.3}
          >
            <img
              src={certificate.thumbnail}
              alt={certificate.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </GlareHover>

          {/* Overlays */}
          {/* Arrow Icon */}
          <div className="absolute top-2 right-2 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 touch-manipulation">
            <ArrowUpRight className="w-5 h-5 text-fg-primary drop-shadow-sm" />
          </div>

          {/* Specialization Badge */}
          {certificate.isSpecialization && (
            <div className="absolute top-0 left-0 z-30">
              <Tooltip
                content={
                  <span className="font-medium text-fg-primary">
                    Specialization Bundle
                  </span>
                }
              >
                <div className="p-2 bg-primary text-primary-fg rounded-br-xl shadow-md cursor-help hover:bg-primary-hover transition-colors">
                  <Award className="w-4 h-4" />
                </div>
              </Tooltip>
            </div>
          )}
        </div>

        {/* Footer: Title */}
        <div className="flex-1 flex flex-col justify-end">
          <h3 className="font-semibold text-lg leading-tight text-fg-primary transition-colors line-clamp-2">
            {certificate.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
