import { Meta } from "@/shared/ui/Meta/Meta";
import { Container } from "@/shared/ui/Container";

import { Link } from "react-router-dom";
import { ShinyText } from "@/shared/ui/ShinyText";
import { PrimaryButton, SecondaryButton } from "@/shared/ui/Button";
import { ArrowRight } from "lucide-react";

import { Tooltip } from "@/shared/ui/Tooltip";
import { CompanyTooltipCard } from "@/entities/profile/ui/CompanyTooltipCard";

/** Renders the main Home Hero section. */
const HomeHero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden outline-none">
      <Meta
        title="Portfolio | Bony Koshy"
        description="Personal portfolio of Bony Koshy, a passionate Full-Stack Developer specializing in modern web technologies, React, and system architecture."
      />
      <Container className="relative z-10 h-full w-full flex flex-col justify-center items-center">
        {/* Eyebrow Pill - Centered */}
        <div className="mb-6 flex items-center justify-center w-full">
          <div className="flex items-center gap-3 rounded-full border border-border-default bg-bg-paper/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-reduce:animate-none"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-fg-secondary">
              <ShinyText
                text="Creative Developer"
                disabled={false}
                speed={3}
                className="font-medium"
              />
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="w-full text-center relative z-10 mb-6">
          {/* Mobile Title (< 768px — phone portrait/landscape) */}
          <h1 className="block sm:hidden font-sixcaps font-normal uppercase tracking-wide leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-fg-primary via-fg-primary via-50% to-transparent select-none cursor-default text-[72vw] xs:text-[60vw]">
            BONY
          </h1>

          {/* Tablet Title (768px – 1023px — tablet portrait/landscape) */}
          <h1 className="hidden sm:block lg:hidden font-sixcaps font-normal uppercase tracking-wide leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-fg-primary via-fg-primary via-50% to-transparent select-none cursor-default text-[22vw]">
            BONYKOSHY
          </h1>

          {/* Desktop Title (≥ 1024px — laptop, desktop, wide, 4K) */}
          <h1 className="hidden lg:block font-sixcaps font-normal uppercase tracking-wide leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-fg-primary via-fg-primary via-50% to-transparent select-none cursor-default text-[18vw] xl:text-[20vw] xxl:text-[22vw] uhd:text-[20vw]">
            BONY KOSHY
          </h1>
        </div>

        {/* Description */}
        <div className="mb-8 w-full max-w-2xl text-base leading-relaxed text-fg-secondary sm:text-lg lg:text-xl text-center relative z-20">
          <p className="mb-2">Engineering the fabric of the modern web.</p>
          <p>
            A Versatile Developer and incoming{" "}
            <Tooltip
              content={<CompanyTooltipCard />}
              containerClassName="inline-block align-baseline"
              unstyled={true}
            >
              <span className="text-fg-primary font-medium cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">
                Accenture
              </span>
            </Tooltip>{" "}
            Associate.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex w-full flex-col gap-4 xs:w-auto xs:flex-row xs:items-center xs:gap-8 justify-center relative z-20">
          <PrimaryButton asChild size="lg" className="w-full xs:w-auto">
            <Link to="/projects">
              View Selected Work
              <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                <ArrowRight className="h-4 w-4 ml-2" />
              </span>
            </Link>
          </PrimaryButton>

          <SecondaryButton asChild variant="default">
            <Link to="/contact">Contact Me</Link>
          </SecondaryButton>
        </div>

      </Container>
    </section>
  );
};

export default HomeHero;
