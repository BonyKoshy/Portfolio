import { Hero } from "@/widgets/Hero";


const Home = () => {
  return (
    <main className="min-h-screen text-text-primary selection:bg-accent selection:text-white">
      {/* ... (Existing Hero, Projects, Bento code) ... */}

      <section className="relative pt-20">
        <Hero />
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* ... (Keep your Projects and Bento sections exactly as they were) ... */}

        {/* REPLACED FOOTER SECTION */}

      </div>
    </main>
  );
};

export default Home;


