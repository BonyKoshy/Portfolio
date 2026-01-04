import { Hero } from "@/widgets/Hero";
import { HomeBentoSection } from "@/widgets/HomeBentoSection";


const Home = () => {
  return (
    <main id="main-content" className="min-h-screen text-text-primary selection:bg-accent selection:text-white">
      <section className="relative min-h-screen flex flex-col justify-center">
        <Hero />
      </section>

      <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6">
        <HomeBentoSection />
      </section>
    </main>
  );
};

export default Home;
