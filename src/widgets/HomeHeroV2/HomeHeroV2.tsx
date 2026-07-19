import { motion } from "framer-motion";

export function HomeHeroV2() {
  return (
    <section className="relative w-[94%] max-w-6xl mx-auto min-h-[calc(100vh-80px)] flex flex-col items-center justify-start pt-0 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full select-none"
      >
        <svg 
          viewBox="0 0 1000 460" 
          className="w-full h-auto overflow-visible block" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="430"
            fontSize="500"
            textLength="1000"
            lengthAdjust="spacing"
            className="font-normal uppercase fill-[#a1a1aa]"
            style={{ fontFamily: '"Six Caps", sans-serif' }}
          >
            BONY KOSHY
          </text>
        </svg>
        <div className="w-full flex justify-end -mt-1 sm:-mt-3 md:-mt-5 lg:-mt-6 xl:-mt-5 pr-[4%] md:pr-[4%] relative z-10">
          <p className="font-mono text-[10px] sm:text-xs md:text-sm text-fg-secondary tracking-[0.2em]">
            BASED IN INDIA, KERALA
          </p>
        </div>
      </motion.div>
    </section>
  );
}
