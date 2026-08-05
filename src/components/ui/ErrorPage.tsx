import React from "react";
import { Link } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";
import { Meta } from "@/components/ui/Meta";

export interface ErrorPageProps {
  errorCode: string;
  title: string;
  message: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  title,
  message,
}) => {
  return (
    <div
      id="main-content"
      className="w-full grow flex flex-col items-center justify-center p-4 py-16"
    >
      <Meta title={`${errorCode} - ERROR`} description={message} />

      {/* Container Tile */}
      <div className="bg-bg-paper border border-border-default rounded-sm p-8 md:p-12 max-w-2xl w-full flex flex-col gap-8 relative overflow-hidden group hover:border-primary transition-colors duration-0">
        {/* Top Header / Motif */}
        <div className="flex items-center gap-3 text-fg-secondary font-mono text-sm border-b border-border-subtle pb-4">
          <Terminal size={16} />
          <span>SYSTEM_EXCEPTION_THROWN</span>
          <span className="ml-auto opacity-50 hidden sm:inline-block">
            ERROR_CODE: 0x000{errorCode}
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2 relative z-10">
          <h1 className="font-['Anton'] text-[6rem] sm:text-[8rem] md:text-[10rem] leading-none text-fg-primary m-0 tracking-widest">
            {errorCode}
          </h1>
          <h2 className="font-['Anton'] text-xl sm:text-2xl md:text-3xl text-fg-secondary tracking-wide uppercase">
            {title}
          </h2>
        </div>

        {/* Technical Data */}
        <div className="bg-bg-surface border border-border-default p-4 rounded-sm font-mono text-xs sm:text-sm text-fg-primary space-y-3 relative z-10">
          <div className="flex gap-3 items-start">
            <span className="text-primary shrink-0">&gt;</span>
            <p className="m-0 leading-relaxed text-fg-secondary">{message}</p>
          </div>
        </div>

        {/* Action */}
        <div className="pt-2 relative z-10">
          <Link
            to="/"
            className="cursor-target inline-flex items-center gap-3 bg-bg-surface border border-border-default text-fg-primary px-6 py-3 font-mono text-sm hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-0"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO ORIGIN</span>
          </Link>
        </div>

        {/* Decorative Grid Lines in Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{
            backgroundImage: `linear-gradient(to right, var(--fg-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--fg-primary) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
    </div>
  );
};
