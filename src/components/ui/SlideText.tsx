import { motion, AnimatePresence } from "framer-motion";

export interface SlideTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  staggerDuration?: number;
}

export function SlideText({
  text,
  className = "",
  staggerDelay = 0.03,
  staggerDuration = 0.35,
}: SlideTextProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`inline-flex overflow-hidden relative ${className}`}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}-${text}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: staggerDuration,
                delay: i * staggerDelay,
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: {
                duration: staggerDuration * 0.7,
                delay: i * (staggerDelay * 0.5),
                ease: [0.33, 1, 0.68, 1],
              },
            }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
