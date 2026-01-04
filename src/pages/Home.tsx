import { Hero } from "@/widgets/Hero";
import { HomeBentoSection } from "@/widgets/HomeBentoSection";

const Home = () => {
  return (
    <main id="main-content" className="text-text-primary selection:bg-accent selection:text-white">
      {/* Hero Section: Full screen for impact */}
      <section className="relative h-screen flex flex-col justify-center">
        <Hero />
      </section>

      {/* Bento Section: At a glance summary */}
      <section className="min-h-screen lg:h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">

        <HomeBentoSection />
      </section>
    </main>
  );
};

export default Home;