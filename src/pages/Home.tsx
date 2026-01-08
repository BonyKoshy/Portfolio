import { Hero } from "@/widgets/Hero";
import { HomeBentoSection } from "@/widgets/HomeBentoSection";
import HomeProjectsSection from "@/widgets/HomeProjectsSection";


const Home = () => {
  return (
    <main id="main-content" className="relative text-text-primary selection:bg-accent selection:text-white">
      {/* Background Ripple Effect */}
      {/* Background Ripple Effect */}


      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center pointer-events-none">
        <Hero />
      </section>

      {/* Bento Section */}
      <section className="min-h-screen lg:h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">
        <HomeBentoSection />
      </section>

      {/* Projects Section - Placed under Bento */}
      <section className="flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20">
        <HomeProjectsSection />
      </section>
    </main>
  );
};

export default Home;