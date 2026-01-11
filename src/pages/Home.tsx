import { Hero } from "@/widgets/Hero";
import { HomeBentoSection } from "@/widgets/HomeBentoSection";
import { HomeProjectsSection } from "@/widgets/HomeProjectsSection";
import { ContactSection } from "@/widgets/ContactSection";


const Home = () => {
  return (
    <main id="main-content" className="relative text-text-primary selection:bg-accent selection:text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center">
        <Hero />
      </section>

      {/* Bento Section */}
      <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">
        <HomeBentoSection />
      </section>

      {/* Projects Section - Placed under Bento */}
      <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20">
        <HomeProjectsSection />
      </section>

      {/* Contact Section */}
      <section className="flex flex-col justify-center mx-auto max-w-7xl px-6 w-full pb-20">
        <ContactSection />
      </section>
    </main>
  );
};

export default Home;