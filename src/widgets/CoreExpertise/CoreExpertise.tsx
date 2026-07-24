import React from "react";
import { FaWindows, FaAws } from "react-icons/fa6";
import { SiNetapp } from "react-icons/si";

function RubrikIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1538 1530" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        d="m779.9 0.5q1.8 0.6 3.5 1.4 1.7 0.8 3.3 1.8 1.6 1 3.1 2.2 1.4 1.1 2.8 2.5l210.3 209.7c3.1 3.1 5.6 6.7 7.2 10.8 1.7 4 2.6 8.3 2.6 12.7 0 4.3-0.9 8.6-2.6 12.7-1.6 4-4.1 7.6-7.2 10.7l-210.3 209.8c-3.1 3-6.8 5.5-10.8 7.2-4 1.6-8.4 2.5-12.7 2.5-4.4 0-8.7-0.9-12.7-2.5-4.1-1.7-7.7-4.2-10.8-7.2l-210.7-209.8c-3.1-3.1-5.6-6.7-7.3-10.7-1.6-4.1-2.5-8.4-2.5-12.7 0-4.4 0.9-8.7 2.5-12.7 1.7-4.1 4.2-7.7 7.3-10.8l210.7-209.7q1.3-1.4 2.8-2.5 1.5-1.2 3.1-2.2 1.6-1 3.3-1.8 1.7-0.8 3.4-1.4zm-29.4 1051.5q2.7-1.8 5.7-3.1 3-1.3 6.2-1.9 3.2-0.6 6.5-0.6 3.3-0.1 6.5 0.6 3.3 0.6 6.3 1.9 3.1 1.2 5.8 3.1 2.8 1.9 5.1 4.2l210.3 209.8c3.1 3 5.5 6.6 7.2 10.6 1.7 4 2.5 8.3 2.5 12.6 0 4.4-0.8 8.6-2.5 12.6-1.7 4-4.1 7.6-7.2 10.7l-210.3 210.1q-1.1 1.1-2.3 2-1.1 1-2.4 1.8-1.2 0.8-2.5 1.6-1.3 0.7-2.7 1.3h-27.2q-1.4-0.6-2.7-1.3-1.3-0.8-2.6-1.6-1.2-0.8-2.4-1.8-1.1-0.9-2.2-2l-210.8-210.1c-3-3.1-5.5-6.7-7.1-10.7-1.7-4-2.6-8.2-2.6-12.6 0-4.3 0.9-8.6 2.6-12.6 1.6-4 4.1-7.6 7.1-10.6l210.8-209.8q2.2-2.3 4.9-4.2zm519.6-520.9q2.3-2.3 5.1-4 2.7-1.8 5.8-3 3-1.3 6.3-1.9 3.2-0.6 6.5-0.5 3.2 0 6.4 0.6 3.1 0.6 6.1 1.8 3 1.2 5.7 3 2.7 1.8 5.1 4l210.3 209.8c3.2 3 5.7 6.7 7.4 10.8 1.7 4 2.6 8.4 2.6 12.8 0 4.4-0.9 8.8-2.6 12.8-1.7 4.1-4.2 7.8-7.4 10.9l-210 209.3c-3 3.1-6.7 5.5-10.7 7.2-4.1 1.7-8.4 2.5-12.7 2.5-4.4 0-8.7-0.8-12.7-2.5-4.1-1.7-7.7-4.1-10.8-7.2l-210.8-209.7c-3-3.2-5.3-6.8-6.9-10.8-1.7-4.1-2.5-8.4-2.5-12.7 0-4.3 0.8-8.6 2.5-12.6 1.6-4 3.9-7.7 6.9-10.8l210.8-209.4zm-789.7 785.7q1.3-1.5 2.8-2.8 1.6-1.3 3.4-2.3 1.7-0.9 3.7-1.5 1.9-0.6 3.9-0.9c5.9 0 9.9 5.9 9.9 17v143.1c0.5 3.8-0.1 7.7-1.6 11.2-1.6 3.6-4.2 6.6-7.4 8.7-3.2 2.2-7 3.3-10.8 3.4-3.9 0.1-7.7-0.8-11-2.8l-79-39.4c-3.7-1.6-6.9-4-9.4-7.2-2.5-3.2-4.1-6.9-4.7-10.9-0.6-3.9-0.1-8 1.3-11.7 1.4-3.8 3.8-7.1 6.9-9.7l93.6-94.2zm552.1 7.9c0-11 3.9-16.9 9.8-16.9q2 0.2 3.9 0.8 1.9 0.6 3.6 1.6 1.7 1 3.2 2.2 1.5 1.3 2.8 2.8l93.5 93.1c3.1 2.5 5.5 5.8 7 9.5 1.4 3.7 1.9 7.8 1.4 11.7-0.6 4-2.2 7.8-4.6 10.9-2.4 3.2-5.6 5.7-9.3 7.3l-80.9 39.4c-3.3 1.9-7.1 2.8-10.9 2.6-3.8-0.1-7.5-1.3-10.6-3.5-3.2-2.1-5.7-5.1-7.3-8.5-1.5-3.5-2.1-7.3-1.6-11.1zm224.9-297.2c4.4 0 8.6 0.8 12.6 2.5 4 1.6 7.7 4 10.7 7 3.1 3.1 5.6 6.7 7.2 10.6 1.7 4 2.6 8.3 2.7 12.6v189.2c-0.1 4.5-1 9-2.8 13.1-1.8 4.1-4.5 7.9-7.7 10.9-3.3 3.1-7.2 5.5-11.4 7.1-4.2 1.6-8.7 2.3-13.2 2h-189.9c-4.3 0-8.6-0.9-12.6-2.6-4-1.7-7.6-4.1-10.7-7.2-3.1-3-5.5-6.7-7.2-10.7-1.7-4-2.6-8.2-2.6-12.6v-189.2c0-4.3 0.9-8.6 2.6-12.6 1.7-3.9 4.2-7.5 7.2-10.6 3.1-3 6.7-5.4 10.7-7 4-1.7 8.3-2.5 12.6-2.5zm159.1-641.4l-1.2 1.1q0 0 0 0.1zm-1.1 1.1q1.6-1.8 3.6-3.3 2.1-1.5 4.4-2.6 2.3-1 4.7-1.6 2.5-0.6 5-0.7c2.2 0 4.4 0.4 6.6 1.1 2.1 0.7 4.2 1.7 6 2.9 1.9 1.3 3.6 2.8 5.1 4.5 1.4 1.7 2.6 3.6 3.6 5.6l39.4 78.9c1.9 3.3 2.7 7.1 2.6 10.9-0.2 3.8-1.4 7.5-3.5 10.6-2.1 3.2-5.1 5.7-8.5 7.4-3.5 1.6-7.3 2.2-11.1 1.8h-140.9c-18.1 0-22.5-10.6-9.8-23.2zm-381.3-324.4c-0.4-2.8-0.2-5.7 0.6-8.4 0.8-2.7 2.2-5.2 4.1-7.4 1.9-2.1 4.2-3.8 6.8-5 2.6-1.1 5.4-1.7 8.2-1.7q1.1-0.2 2.3-0.2 1.1-0.1 2.3-0.1 1.1 0.1 2.2 0.3 1.2 0.1 2.3 0.4l80.9 39.4c3.7 1.6 6.9 4.1 9.3 7.3 2.5 3.2 4 6.9 4.6 10.9 0.5 4 0.1 8-1.4 11.7-1.5 3.7-3.9 7-7 9.6l-93.5 93.4c-13 12.6-23.3 8.3-23.3-9.9v-140.3zm-948.1 323.5c1.4-1.7 3.1-3.3 4.9-4.5 1.9-1.3 3.9-2.2 6-2.9 2.2-0.7 4.4-1.1 6.6-1.1q2.6 0.1 5.1 0.6 2.5 0.6 4.8 1.7 2.4 1.1 4.4 2.6 2.1 1.5 3.9 3.4l93.5 91.8c13 12.6 8.7 23.3-9.9 23.3h-141.7c-3.8 0.5-7.7 0-11.2-1.6-3.5-1.6-6.6-4.1-8.7-7.4-2.1-3.2-3.3-6.9-3.4-10.8-0.1-3.8 0.9-7.7 2.8-11l39.5-78.8c0.9-1.7 2-3.6 3.4-5.3zm386.5-139.4c4.3 0 8.6 0.9 12.6 2.6 4 1.7 7.7 4.1 10.7 7.2 3.1 3.1 5.5 6.7 7.2 10.7 1.7 4 2.6 8.3 2.7 12.6v189.2c-0.1 4.4-1 8.7-2.7 12.7-1.7 3.9-4.1 7.6-7.2 10.6-3 3.1-6.7 5.6-10.7 7.2-4 1.7-8.3 2.6-12.6 2.7h-189.8c-4.4-0.1-8.7-1-12.6-2.7-4-1.6-7.6-4.1-10.8-7.2-3-3-5.5-6.7-7.1-10.6-1.7-4-2.6-8.3-2.7-12.7v-189.2c0.1-4.3 1-8.6 2.7-12.6 1.6-4 4.1-7.6 7.1-10.7 3.1-3.1 6.8-5.5 10.8-7.2 3.9-1.7 8.2-2.6 12.6-2.6zm3.9-204.2q1.3-0.6 2.7-1 1.3-0.4 2.7-0.7 1.4-0.3 2.8-0.5 1.5-0.2 2.9-0.2c2.8 0.1 5.6 0.7 8.1 1.9 2.6 1.1 4.9 2.8 6.7 5 1.9 2.1 3.3 4.6 4.1 7.3 0.9 2.7 1.1 5.5 0.8 8.3v142.3c0 18.1-10.6 22.5-23.7 9.9l-93.5-93.5c-3.1-2.5-5.5-5.8-6.9-9.6-1.5-3.7-1.9-7.8-1.3-11.8 0.6-3.9 2.2-7.7 4.7-10.8 2.5-3.2 5.7-5.7 9.4-7.2l78.9-39.4zm856 986.3h142.5c3.8-0.4 7.6 0.1 11.1 1.7 3.5 1.6 6.4 4.1 8.5 7.2 2.2 3.2 3.4 6.8 3.5 10.6 0.2 3.8-0.7 7.6-2.6 10.9l-39.4 78.8c-1.6 3.7-4.2 6.8-7.3 9.2-3.2 2.4-6.9 4-10.8 4.6-4 0.6-8 0.2-11.7-1.2-3.7-1.4-7.1-3.6-9.7-6.6l-93.9-93.5c-12.6-13-8.3-23.2 9.8-23.2zm-859.9-1.6c4.3 0 8.6 0.8 12.6 2.5 4 1.6 7.6 4 10.7 7.1 3.1 3 5.5 6.6 7.2 10.6 1.7 3.9 2.6 8.2 2.6 12.5v189.2c0 4.4-0.9 8.7-2.6 12.7-1.7 4-4.1 7.6-7.2 10.6-3 3.1-6.7 5.6-10.7 7.2-4 1.7-8.3 2.6-12.6 2.7h-189.8c-4.4-0.1-8.7-1-12.7-2.7-4-1.6-7.6-4.1-10.7-7.2-3-3-5.5-6.6-7.2-10.6-1.6-4-2.5-8.3-2.6-12.7v-189.2c0.1-4.3 1-8.6 2.7-12.5 1.6-4 4.1-7.6 7.2-10.6 3-3.1 6.7-5.5 10.7-7.1 4-1.7 8.2-2.5 12.6-2.5zm-407.7-1.6h142.1c18.5 0 22.9 10.3 9.8 23.3l-93.5 93.4c-2.6 3.1-5.9 5.5-9.6 6.9-3.8 1.5-7.8 1.9-11.8 1.3-4-0.6-7.7-2.2-10.9-4.7-3.2-2.5-5.6-5.7-7.2-9.4l-39.4-78.9c-1.9-3.3-2.8-7-2.6-10.8 0.1-3.8 1.3-7.5 3.5-10.6 2.1-3.2 5.1-5.7 8.5-7.3 3.5-1.5 7.3-2.1 11.1-1.6zm1190.7-779c4.3 0 8.6 0.9 12.6 2.6 4 1.7 7.6 4.1 10.7 7.2 3.1 3.1 5.5 6.7 7.2 10.7 1.7 4 2.6 8.3 2.6 12.6v189.2c0 4.4-0.9 8.7-2.6 12.7-1.7 3.9-4.1 7.6-7.2 10.6-3.1 3.1-6.7 5.6-10.7 7.2-4 1.7-8.3 2.6-12.6 2.7h-189.9c-4.3-0.1-8.6-1-12.6-2.7-4-1.6-7.6-4.1-10.7-7.2-3.1-3-5.5-6.7-7.2-10.6-1.7-4-2.6-8.3-2.6-12.7v-189.2c0-4.3 0.9-8.6 2.6-12.6 1.7-4 4.1-7.6 7.2-10.7 3.1-3.1 6.7-5.5 10.7-7.2 4-1.7 8.3-2.6 12.6-2.6zm-1029.7 280.6q2.7-1.8 5.7-3 3-1.2 6.1-1.8 3.2-0.6 6.4-0.6 3.3-0.1 6.5 0.5 3.3 0.6 6.3 1.9 3.1 1.2 5.8 3 2.8 1.7 5.1 4l210.4 209.4c3.1 3 5.5 6.7 7.2 10.7 1.7 4 2.5 8.4 2.5 12.7 0 4.4-0.8 8.7-2.5 12.7-1.7 4-4.1 7.7-7.2 10.8l-210.4 209.7c-3.1 3.1-6.7 5.5-10.8 7.2-4 1.7-8.3 2.5-12.7 2.5-4.3 0-8.6-0.8-12.7-2.5-4.1-1.7-7.7-4.1-10.7-7.2l-210.8-209.7c-3.1-3.1-5.5-6.8-7.2-10.8-1.7-4-2.5-8.3-2.5-12.7 0-4.3 0.8-8.7 2.5-12.7 1.7-4 4.1-7.7 7.2-10.7l210.8-209.4q2.3-2.2 5-4z"
      />
    </svg>
  );
}

function EverpureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1543 1393" className={className} fill="currentColor">
      <path d="m1070.39 0h-597.73c-61.87 0-119.02 33.04-149.96 86.53l-299.39 518.67c-30.93 53.49-30.93 119.57 0 173.06l304.11 528.63c30.94 53.5 90.19 85.49 152.06 85.49h297.81l-404.25-700.65 199.24-345.08h398.49l198.72 345.08-240.14 416.4h400.06l190.33-329.87c30.93-53.49 30.93-119.57 0-173.06l-299.39-518.67c-30.94-53.49-88.09-86.53-149.96-86.53z" />
    </svg>
  );
}

type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
  skills: string[];
  icon?: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  imageSizeClass?: string;
  hoverColor?: string;
};

const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    number: "01",
    title: "Windows Server",
    description:
      "Active Directory architecture, GPO security enforcement, and Hyper-V virtualization.",
    skills: [
      "Active Directory",
      "GPO Security",
      "Hyper-V",
      "DNS / DHCP",
      "PowerShell",
    ],
    icon: FaWindows,
    hoverColor: "group-hover:text-[#00188F]",
  },
  {
    number: "02",
    title: "NetApp",
    description:
      "Unified SAN/NAS storage, FlexClone snapshots, and SnapMirror replication.",
    skills: ["ONTAP OS", "SAN / NAS", "SnapMirror", "FlexClone", "StorageGRID"],
    icon: SiNetapp,
    hoverColor: "group-hover:text-[#005691]",
  },
  {
    number: "03",
    title: "NetBackup",
    description:
      "Veritas NetBackup data protection, DR automation, and cloud archiving.",
    skills: [
      "Veritas NBU",
      "Disaster Recovery",
      "Cloud Archiving",
      "VADP Backup",
      "Deduplication",
    ],
    imageSrc: "/NetBackup.png",
    imageSizeClass: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10",
    hoverColor: "group-hover:text-[#AF1225]",
  },
  {
    number: "04",
    title: "Rubrik",
    description:
      "Zero Trust Data Security, ransomware recovery, and immutable vaults.",
    skills: [
      "Zero Trust Data",
      "Ransomware Recovery",
      "API Automation",
      "Immutable Vaults",
      "SLA Engine",
    ],
    icon: RubrikIcon,
    hoverColor: "group-hover:text-[#0AC9BB]",
  },
  {
    number: "05",
    title: "Everpure",
    description:
      "Storage array lifecycle management, maintenance, and health telemetry.",
    skills: [
      "Array Lifecycle",
      "Telemetry",
      "Hardware Maintenance",
      "Performance Tuning",
    ],
    icon: EverpureIcon,
    hoverColor: "group-hover:text-[#FE5000]",
  },
  {
    number: "06",
    title: "AWS",
    description:
      "Cloud infrastructure, EC2/S3 provisioning, and IAM security policies.",
    skills: [
      "EC2 / S3",
      "IAM Security",
      "VPC Networking",
      "CloudWatch",
      "Route 53",
    ],
    icon: FaAws,
    hoverColor: "group-hover:text-[#FF9900]",
  },
];

export function CoreExpertise() {
  return (
    <div id="expertise" className="w-full scroll-mt-24 md:scroll-mt-28">
      <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.06em] text-fg-primary mb-4 sm:mb-6">
        Core Expertise
      </h2>

      {/* Telemetry Focus Stack Wrapper */}
      <div className="group/table flex flex-col gap-1 w-full">
        {EXPERTISE_DATA.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.number}
              className="group w-full border border-border-default bg-bg-default rounded-sm flex flex-col md:flex-row items-stretch overflow-hidden hover:border-fg-secondary transition-all duration-300 cursor-default md:hover:opacity-100! md:group-hover/table:opacity-40 min-h-24 md:h-22 lg:h-24"
            >
              {/* Header Row for Mobile & Desktop (Number + Icon + Title) */}
              <div className="flex items-center w-full md:w-auto shrink-0 border-b md:border-b-0 border-border-default">
                {/* 1. Square for Number */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 aspect-square bg-bg-default flex items-center justify-center font-jetbrains-mono text-xs sm:text-sm md:text-base font-bold text-primary transition-colors">
                  {item.number}
                </div>

                {/* Inset Divider (Number & Icon) */}
                <div className="w-px h-6 sm:h-8 md:h-12 bg-border-default my-auto shrink-0" />

                {/* 2. Standard Background Square for Icon (bg-bg-default) */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 aspect-square bg-bg-default text-fg-tertiary transition-all duration-300 flex items-center justify-center">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className={`${
                        item.imageSizeClass ||
                        "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                      } object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300`}
                    />
                  ) : IconComponent ? (
                    <IconComponent
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-fg-tertiary transition-colors duration-300 ${item.hoverColor}`}
                    />
                  ) : null}
                </div>

                {/* Inset Divider (Icon & Name) */}
                <div className="w-px h-6 sm:h-8 md:h-12 bg-border-default my-auto shrink-0" />

                {/* Title (JetBrains Mono) */}
                <div className="flex-1 md:w-56 lg:w-60 px-4 md:px-6 flex items-center">
                  <h3 className="font-jetbrains-mono text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-fg-primary transition-colors whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Inset Divider (Name & Description - Desktop only) */}
              <div className="w-px h-6 sm:h-8 md:h-12 bg-border-default my-auto shrink-0 hidden md:block" />

              {/* Description & Top Skills Chips Section */}
              <div className="w-full flex-1 p-3.5 sm:p-4 md:px-6 flex flex-col justify-center gap-1.5 bg-bg-default overflow-hidden">
                {/* Line 1: Ultra-compact description */}
                <p className="font-jetbrains-mono text-[10px] sm:text-[11px] md:text-xs text-fg-secondary group-hover:text-fg-primary transition-colors leading-relaxed">
                  {item.description}
                </p>

                {/* Line 2: Skill Chips (Max 3 on mobile to prevent overflow/scrollbar, all on sm+ desktop) */}
                <div className="flex items-center gap-1.5 overflow-hidden py-0.5">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className={`px-2 py-0.5 rounded-xs text-[10px] sm:text-[10px] md:text-[11px] font-jetbrains-mono bg-bg-surface border border-border-default text-fg-secondary group-hover:border-fg-secondary/50 group-hover:text-fg-primary transition-colors whitespace-nowrap shrink-0 ${
                        idx >= 3 ? "hidden sm:inline-flex" : "inline-flex"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
