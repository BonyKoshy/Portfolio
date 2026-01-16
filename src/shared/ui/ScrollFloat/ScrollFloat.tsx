import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollFloatProps {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  // ease = 'back.inOut(2)', // Framer motion uses different easing strings
  stagger = 0.03,
}) => {
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "120%",
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: "50% 0%",
      transition: {
        duration: 0.8, // Optional: faster exit than entry?
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      scaleX: 1,
      transition: {
        duration: animationDuration,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier similar to back.inOut, or just standard easeOut
      },
    },
  };

  return (
    <motion.h2
      className={`my-5 overflow-hidden ${containerClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }} // Adjust viewport as needed
      variants={containerVariants}
    >
      <span
        className={`inline-block text-[clamp(2.5rem,8vw,6rem)] leading-none font-bold tracking-tighter ${textClassName}`}
      >
        {splitText.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.h2>
  );
};

export default ScrollFloat;
