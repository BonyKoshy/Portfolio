import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { ShinyText } from "@/shared/ui/ShinyText";
import { Button } from "@/shared/ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoad = () => setIsPageLoading(false);
    if (document.readyState === "complete") {
      setTimeout(() => setIsPageLoading(false), 100);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <section
      id="main-content"
      className="relative flex w-full flex-col justify-start overflow-hidden pt-32 pb-20"
    >
      <Container>
        <div className="flex flex-col items-start w-full">
          {/* 1. Logo */}
          <div className="mb-8 sm:mb-12">
            <Logo
              className="h-16 w-auto sm:h-20 md:h-24 origin-left"
              isLoading={isPageLoading}
            />
          </div>

          {/* 2. Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="hidden h-px w-20 bg-accent sm:block"></span>
            <span className="font-mono text-base font-medium uppercase tracking-widest">
              <ShinyText
                text="Creative Developer"
                disabled={false}
                speed={2}
                className="font-medium"
                color="var(--text-secondary)"
                shineColor="var(--text-primary)"
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
            <span className="block font-light text-zinc-500 dark:text-zinc-400">
              Designing the
            </span>
            <span className="block font-bold text-text-primary">
              future of intelligent web.
            </span>
          </h1>

          {/* 4. Subtext */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg md:text-xl">
            I am{" "}
            <span className="font-medium text-text-primary">Bony Koshy</span>,
            an Incoming Associate at{" "}
            <span className="font-medium text-text-primary">Accenture</span>. I
            bridge the gap between functional backend code and immersive user
            interfaces.
          </p>

          {/* 5. Actions */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-8">
            <Button
              variant="primary"
              size="lg"
              className="group w-full sm:w-auto"
              onClick={() => navigate("/projects")}
            >
              <span>View Selected Work</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="link"
              size="none"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
