import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

export function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Animate the counter from 0 to 100 over 2.5 seconds
    const controls = animate(0, 100, {
      duration: 2.5,
      ease: [0.83, 0.05, 0.25, 0.98], // Custom ease from Framer
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      },
      onComplete: () => {
        // Wait a tiny bit, then trigger exit
        setTimeout(() => setIsVisible(false), 300);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence onExitComplete={() => onComplete?.()}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-default overflow-hidden"
          initial={{ borderRadius: "0%" }}
          exit={{
            borderRadius: "50%",
            scale: 0,
            opacity: 0,
            transition: { duration: 0.8, ease: [0.77, 0.02, 0.24, 1.02] },
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center w-[90vw] max-w-7xl"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Counter */}
            <div className="w-full flex justify-end mb-2 md:mb-4">
              <span className="font-mono text-6xl sm:text-7xl md:text-9xl text-fg-secondary tracking-tighter font-light">
                {displayCount}
                <span className="ml-1 md:ml-2">%</span>
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] md:h-[3px] bg-border-default relative overflow-hidden">
              {/* Progress Bar Fill (Accent color used minimally) */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: [0.83, 0.05, 0.25, 0.98],
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
