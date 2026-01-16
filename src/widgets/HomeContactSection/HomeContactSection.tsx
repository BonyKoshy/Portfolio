import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, ArrowRight } from "lucide-react";
import { ScrollFloat } from "@/shared/ui/ScrollFloat";
import { SecondaryButton } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/utils";
import { homeContent } from "@/shared/config/content";
import { Tooltip } from "@/shared/ui/Tooltip";
import { CompanyTooltipCard } from "@/entities/profile/ui/CompanyTooltipCard";

export const HomeContactSection = () => {
  const email = homeContent.contact.email;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* 1. Background Glow (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 2. The Hook (ScrollFloat Title) */}
      <div className="relative z-10 text-center mb-6">
        {/* Mobile View (<425px) - Split Text */}
        <div className="block min-[476px]:hidden">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            stagger={0.03}
            textClassName="text-fg-primary"
            containerClassName="my-0"
          >
            Let's stay
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            stagger={0.03}
            textClassName="text-fg-primary"
            containerClassName="my-0"
          >
            connected
          </ScrollFloat>
        </div>

        {/* Desktop View (>=425px) - Single Line */}
        <div className="hidden min-[476px]:block">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            stagger={0.03}
            textClassName="text-fg-primary"
          >
            Let's stay connected
          </ScrollFloat>
        </div>
      </div>

      {/* 3. Subtext (Non-Freelance Context) */}
      <div className="relative z-10 text-lg md:text-xl text-fg-secondary max-w-2xl text-center leading-relaxed mb-10">
        Locked in for{" "}
        <Tooltip
          content={<CompanyTooltipCard />}
          containerClassName="inline-block align-baseline"
          unstyled={true}
        >
          <SecondaryButton
            className="font-medium text-fg-primary px-0 h-auto"
            onClick={(e) => e.preventDefault()}
          >
            Accenture
          </SecondaryButton>
        </Tooltip>
        , but the learning never stops. Drop a line if you want to discuss
        bleeding-edge UI, optimize some render cycles, or just say hi.
      </div>

      {/* 4. Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {/* Primary Action: Copy Email */}
        <button
          onClick={handleCopy}
          className={cn(
            "group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto",
            "bg-fg-primary text-bg-default font-medium text-base",
            "hover:scale-[1.02] active:scale-95",
            "shadow-xl shadow-primary/10"
          )}
        >
          {copied ? (
            <>
              <Check size={18} className="text-green-500" />
              <span>Copied to clipboard</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>{email}</span>
            </>
          )}
        </button>

        {/* Secondary Action: Go to Full Contact Page */}
        <Link to="/contact" className="w-full sm:w-auto">
          <SecondaryButton
            className="w-full justify-center h-full py-4 text-base"
            tabIndex={-1}
            aria-hidden="true"
          >
            More options
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </SecondaryButton>
        </Link>
      </div>
    </section>
  );
};
