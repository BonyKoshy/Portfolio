import { useEffect, lazy, Suspense } from "react";
import { Hero } from "@/widgets/Hero";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll";

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
    };

    preloadImages();
  }, []);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative text-text-primary selection:bg-accent selection:text-white"
    >
      <section
        id="hero"
        className="relative h-screen flex flex-col justify-center"
      >
        <Hero />
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
  );
};

export default Home;
