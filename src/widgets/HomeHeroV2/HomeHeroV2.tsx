import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FileText, Mail } from "lucide-react";

export function HomeHeroV2() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
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
            <defs>
              <linearGradient id="textFade" x1="0" y1="0" x2="0" y2="1">
                {/* Opaque from top (0%) down to 80% */}
                <stop offset="50%" stopColor="#a1a1aa" stopOpacity="1" />
                {/* Fades to transparent at the very bottom (100%) */}
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="430"
              fontSize="500"
              textLength="1000"
              lengthAdjust="spacing"
              className="font-normal uppercase"
              fill="url(#textFade)"
              style={{ fontFamily: '"Six Caps", sans-serif' }}
            >
              BONY KOSHY
            </text>
          </svg>

          {/* Anchor Row */}
          <div className="w-full flex justify-end -mt-1 sm:-mt-3 md:-mt-5 lg:-mt-6 xl:-mt-5 pr-[4%] md:pr-[4%] relative z-10">
            <p className="font-mono text-[10px] sm:text-xs md:text-sm text-fg-secondary tracking-[0.2em]">
              BASED IN INDIA, <span className="text-primary">BENGALURU</span>
            </p>
          </div>
        </motion.div>

        {/* Theme-Aware Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-[2px] w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-6">
          {/* 1. LinkedIn (Interactive; 1/3 of Tile 4 height in vertical, square on desktop) */}
          <a
            href="https://linkedin.com/in/bonykoshy"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-1 row-start-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:aspect-square h-full w-full border border-border-default bg-bg-default flex items-center justify-center gap-2 lg:flex-col lg:gap-1.5 text-fg-secondary hover:border-fg-primary hover:text-fg-primary hover:bg-bg-surface transition-none cursor-pointer cursor-target font-jetbrains-mono text-xs sm:text-sm px-2 lg:p-0 group"
          >
            <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-colors shrink-0" />
            <span>[LINKEDIN]</span>
          </a>

          {/* 2. GitHub (Interactive; 1/3 of Tile 4 height in vertical) */}
          <a
            href="https://github.com/BonyKoshy"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 h-full w-full border border-border-default bg-bg-default flex items-center justify-center gap-2 text-fg-secondary hover:border-fg-primary hover:text-fg-primary hover:bg-bg-surface transition-none cursor-pointer cursor-target font-jetbrains-mono text-xs sm:text-sm px-2 lg:p-0 group"
          >
            <FiGithub className="w-4 h-4 transition-colors shrink-0" />
            <span>[GITHUB]</span>
          </a>

          {/* 3. X (Interactive; 1/3 of Tile 4 height in vertical) */}
          <a
            href="https://x.com/Bony_Koshy"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-1 row-start-3 lg:col-start-2 lg:row-start-2 h-full w-full border border-border-default bg-bg-default flex items-center justify-center gap-2 text-fg-secondary hover:border-fg-primary hover:text-fg-primary hover:bg-bg-surface transition-none cursor-pointer cursor-target font-jetbrains-mono text-xs sm:text-sm px-2 lg:p-0 group"
          >
            <FaXTwitter className="w-4 h-4 transition-colors shrink-0" />
            <span>[X]</span>
          </a>

          {/* 4. My Image (Interactive Morphed Modal) */}
          <motion.div
            className="col-start-2 row-start-1 row-span-3 lg:col-start-3 lg:row-start-1 lg:row-span-2 aspect-square w-full border border-border-default bg-bg-default overflow-hidden relative cursor-target"
            onClick={() => setIsImageOpen(true)}
            layoutId="profile-image-container"
          >
            <motion.img
              src="/dp.jpg"
              alt="Bony Koshy"
              className="w-full h-full object-cover object-top"
              layoutId="profile-image"
            />
          </motion.div>

          {/* 5. Description (Col span 2 on row 4 in vertical layout, col span 2 across 2 rows on desktop) */}
          <div className="col-span-2 row-start-4 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-2 border border-border-default rounded-sm p-4 sm:p-5 bg-bg-default flex flex-col justify-center cursor-default">
            <p className="font-jetbrains-mono text-[11px] sm:text-xs text-fg-secondary leading-relaxed tracking-wider uppercase">
              SYSTEMS INFRASTRUCTURE &amp; STORAGE ADMINISTRATION. ARCHITECTING
              HIGH-AVAILABILITY DATA BACKUP AND DISASTER RECOVERY SOLUTIONS FOR{" "}
              <span className="text-primary font-semibold whitespace-nowrap">
                ᐳ ACCENTURE
              </span>
              .
            </p>
          </div>

          {/* 6. Resume (Interactive; size matches tiles 1, 2, 3 in vertical layout) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-1 row-start-5 lg:col-start-6 lg:row-start-1 aspect-[3/1] lg:aspect-auto h-full w-full border border-border-default px-3 lg:p-4 rounded-sm bg-bg-default flex items-center justify-between text-fg-secondary hover:border-fg-primary hover:text-fg-primary hover:bg-bg-surface transition-none cursor-pointer cursor-target font-jetbrains-mono text-xs sm:text-sm group"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-fg-secondary group-hover:text-fg-primary transition-colors shrink-0" />
              <span className="font-jetbrains-mono text-fg-secondary group-hover:text-fg-primary transition-colors">
                RESUME
              </span>
            </div>
            <span className="text-primary font-jetbrains-mono">&gt;</span>
          </a>

          {/* 7. Contact (Interactive; size matches tiles 1, 2, 3 in vertical layout) */}
          <Link
            to="/contact"
            className="col-start-2 row-start-5 lg:col-start-6 lg:row-start-2 aspect-[3/1] lg:aspect-auto h-full w-full border border-border-default px-3 lg:p-4 rounded-sm bg-bg-default flex items-center justify-between text-fg-secondary hover:border-fg-primary hover:text-fg-primary hover:bg-bg-surface transition-none cursor-pointer cursor-target font-jetbrains-mono text-xs sm:text-sm group"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-fg-secondary group-hover:text-fg-primary transition-colors shrink-0" />
              <span className="font-jetbrains-mono text-fg-secondary group-hover:text-fg-primary transition-colors">
                CONTACT
              </span>
            </div>
            <span className="text-primary font-jetbrains-mono">&gt;</span>
          </Link>
        </div>
      </section>

      {/* Morphed Image Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsImageOpen(false)}
              className="absolute inset-0 bg-bg-default/90 cursor-zoom-out"
            />

            {/* Modal Wrapper for Button Positioning */}
            <div className="relative z-10 w-[90vw] max-w-2xl flex flex-col items-end gap-2">
              <button
                onClick={() => setIsImageOpen(false)}
                className="text-fg-tertiary hover:text-fg-primary transition-colors cursor-target focus:outline-none text-xs tracking-widest uppercase font-mono"
              >
                [ EXIT ]
              </button>

              {/* Modal Content */}
              <motion.div
                layoutId="profile-image-container"
                className="relative w-full aspect-square md:aspect-auto md:h-[80vh] bg-bg-default border border-border-default overflow-hidden rounded-xl shadow-2xl flex items-center justify-center cursor-default"
              >
                <motion.img
                  src="/dp.jpg"
                  alt="Bony Koshy"
                  layoutId="profile-image"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
