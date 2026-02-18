import { useEffect, lazy, Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HomeHero } from "@/widgets/HomeHero";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll";
import { HomeSkeleton } from "@/widgets/Skeletons/HomeSkeleton";

const HomeBentoSection = lazy(() =>
  import("@/widgets/HomeBentoSection").then((module) => ({
    default: module.HomeBentoSection,
  }))
);
const HomeProjectsSection = lazy(() =>
  import("@/widgets/HomeProjectsSection").then((module) => ({
    default: module.HomeProjectsSection,
  }))
);
const HomeContactSection = lazy(() =>
  import("@/widgets/HomeContactSection/HomeContactSection").then((module) => ({
    default: module.HomeContactSection,
  }))
);

/** Renders the landing page with hero, bento grid, projects, and contact sections. */
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        "/profile-image.webp",
        "/certs/aws.webp",
        "/certs/google.webp",
        "/certs/ibm.webp",
        "/certs/microsoft.webp",
      ];

      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);

      // Delay slightly for cinematic effect
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    };

    preloadImages();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 pointer-events-none"
          >
            <HomeSkeleton />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        id="main-content"
        tabIndex={-1}
        className="relative text-text-primary selection:bg-accent selection:text-white"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in",
        }}
      >
        <section
          id="hero"
          className="relative h-screen flex flex-col justify-center"
        >
          <HomeHero />
        </section>

        <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">
          <Suspense fallback={<div className="min-h-screen" />}>
            <HomeBentoSection />
          </Suspense>
        </section>

        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20"
        >
          <Suspense fallback={<div className="min-h-screen" />}>
            <HomeProjectsSection />
          </Suspense>
        </section>

        <section className="flex flex-col justify-center mx-auto max-w-7xl px-6 w-full pb-20 border-t border-border-default/40">
          <RevealOnScroll width="100%">
            <Suspense fallback={<div className="min-h-[50vh]" />}>
              <HomeContactSection />
            </Suspense>
          </RevealOnScroll>
        </section>
      </main>
    </>
  );
};

export default Home;
