import { useEffect, useState } from "react";
import Container from "../../shared/ui/Container";
import Logo from "../../shared/ui/Logo/Logo";
import BlurText from "../../shared/ui/BlurText/BlurText";
import RotatingText from "../../shared/ui/RotatingText/RotatingText";

const Hero = () => {
  const [isHeroLogoVisible, setIsHeroLogoVisible] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsPageLoading(false);
    if (document.readyState === "complete") setIsPageLoading(false);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out quicker to allow navbar transition
      setIsHeroLogoVisible(window.scrollY < 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // "Place a bit higher": Reduced min-h to 80vh and added pb-32 to push content up visually
    <section className="flex min-h-[80vh] flex-col justify-center pt-24 pb-32">
      <Container>
        <div className="flex flex-col items-start space-y-10 max-w-5xl">
          {/* 1. Logo */}
          <div
            className={`transition-opacity duration-500 ${isHeroLogoVisible ? "opacity-100" : "opacity-0"}`}
          >
            <Logo
              className="h-20 w-auto md:h-24 lg:h-28 origin-left"
              isLoading={isPageLoading}
            />
          </div>

          {/* 2. Main Content */}
          <div className="space-y-4 w-full">
            {/* Name: "A bit larger in Desktop" -> Bumped to 8xl/9xl */}
            <div className="w-full">
              <BlurText
                text="Bony Koshy"
                animateBy="letters"
                direction="bottom"
                delay={100}
                className="text-[clamp(3.5rem,13vw,6rem)] leading-none font-bold tracking-tighter text-(--text-primary) md:text-8xl lg:text-9xl"
              />
            </div>

            {/* Tagline: Aligned & Sized */}
            <div className="flex flex-wrap items-center gap-3 text-xl font-light text-zinc-400 sm:text-2xl md:text-3xl lg:text-4xl">
              <span>Building</span>
              <RotatingText
                texts={[
                  "digital futures.",
                  "seamless UIs.",
                  "robust APIs.",
                  "next-gen apps.",
                ]}
                mainClassName="overflow-hidden bg-(--accent) text-white px-3 py-1 rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
          </div>

          {/* 3. Buttons: Scaled for Desktop */}
          <div className="flex flex-nowrap items-center gap-5 pt-4">
            <a
              href="/projects"
              className="whitespace-nowrap rounded-full bg-(--text-primary) px-8 py-4 text-base font-bold text-(--background) transition-transform hover:scale-105 active:scale-95 lg:text-lg lg:px-10 lg:py-5"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="whitespace-nowrap rounded-full border border-white/10 bg-(--panel-bg) px-8 py-4 text-base font-bold text-(--text-primary) transition-colors hover:border-(--accent) hover:text-(--accent) active:scale-95 lg:text-lg lg:px-10 lg:py-5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
