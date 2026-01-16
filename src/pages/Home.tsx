import { useEffect } from "react";
import { Hero } from "@/widgets/Hero";
import { HomeBentoSection } from "@/widgets/HomeBentoSection";
import { HomeProjectsSection } from "@/widgets/HomeProjectsSection";
import { HomeContactSection } from "@/widgets/HomeContactSection/HomeContactSection";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll";

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
          img.onerror = resolve; // Continue even if one fails
        });
      });

      await Promise.all(promises);

      // Artificial delay to ensure layout is settled / prevent flash
    };

    preloadImages();
  }, []);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative text-text-primary selection:bg-accent selection:text-white"
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col justify-center"
      >
        <Hero />
      </section>

      {/* Bento Section */}
      <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">
        <HomeBentoSection />
      </section>

      {/* Projects Section - Placed under Bento */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20"
      >
        <HomeProjectsSection />
      </section>

      {/* Contact Section */}
      <section className="flex flex-col justify-center mx-auto max-w-7xl px-6 w-full pb-20 border-t border-border-default/40">
        <RevealOnScroll width="100%">
          <HomeContactSection />
        </RevealOnScroll>
      </section>
    </main>
  );
};

export default Home;
