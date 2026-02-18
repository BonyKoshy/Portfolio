import { Meta } from "@/shared/ui/Meta/Meta";
import { AboutHero } from "@/widgets/AboutHero";
import { AboutSkeleton } from "@/widgets/Skeletons/AboutSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Renders the About page with biography information. */
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading or preload images if necessary
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
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
            <AboutSkeleton />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="min-h-screen"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in",
        }}
      >
        <Meta
          title="About Bony"
          description="Learn more about Bony Koshy, a Full-Stack Developer with experience in system architecture, AI, and modern web development."
        />
        <AboutHero isLoaded={isLoaded} />
      </div>
    </>
  );
};

export default About;
