import { Link } from "react-router-dom";
import Container from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { ShinyText } from "@/shared/ui/ShinyText";
import { Button } from "@/shared/ui/Button";
import { homeContent } from "@/shared/config/content";
import { ArrowRight } from "lucide-react";

const Hero = () => {


  return (
    <section
      // Removed id="main-content" (it's already on <main> in Home.tsx)
      className="relative flex w-full flex-col justify-start overflow-hidden pt-32 pb-20 outline-none"
    >
      <Container className="">
        <div className="relative z-10 flex flex-col items-start w-full">
          {/* 1. Logo */}
          <div className="mb-8 sm:mb-12">
            <Logo
              className="h-16 w-auto sm:h-20 md:h-24 origin-left"
              isLoading={false}
            />
          </div>

          {/* 2. Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="hidden h-px w-20 bg-primary sm:block"></span>
            <span className="font-mono text-base font-medium uppercase tracking-widest">
              <ShinyText
                text={homeContent.hero.eyebrow}
                disabled={false}
                speed={2}
                className="font-medium"
                color="var(--fg-secondary)"
                shineColor="var(--fg-primary)"
                spread={90}
                yoyo={false}
                pauseOnHover={true}
                direction="left"
                delay={0}
              />
            </span>
          </div>

          {/* 3. Headline */}
          <h1 className="mb-6 w-full max-w-5xl text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block font-light text-fg-secondary">
              {homeContent.hero.headline.part1}
            </span>
            <span className="block font-bold text-fg-primary">
              {homeContent.hero.headline.part2}
            </span>
          </h1>

          {/* 4. Subtext */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-fg-secondary sm:text-lg md:text-xl">
            {homeContent.hero.subtext.prefix}{" "}
            <span className="font-medium text-fg-primary">{homeContent.hero.subtext.name}</span>,
            {homeContent.hero.subtext.role}{" "}
            <span className="font-medium text-fg-primary">{homeContent.hero.subtext.company}</span>
            {homeContent.hero.subtext.description}
          </p>

          {/* 5. Actions */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-8">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/projects">
                {homeContent.hero.cta.primary}
                <span className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                   <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="underline"
              size="none"
            >
              <Link to="/contact">
                {homeContent.hero.cta.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
