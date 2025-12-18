// src/components/About/AccordionCard/AccordionCard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AccordionCard.css";

// The content for your accordion sections
const accordionData = [
  {
    id: "item-1",
    title: "Background",
    content:
      "am a Bachelor of Computer Applications (BCA) graduate from Kerala, India, with a strong foundation in software development and a confirmed placement at Accenture. My academic journey and project experience have equipped me with the ability to approach challenges with both technical expertise and creative thinking.",
  },
  {
    id: "item-2",
    title: "Strengths",
    content:
      "I excel in problem-solving, writing clean and maintainable code, and building user-focused applications. My skill set spans across front-end and back-end technologies, enabling me to create solutions that are both functional and intuitive. I am also committed to continuous learning, ensuring that I stay updated with emerging tools and frameworks.",
  },
  {
    id: "item-3",
    title: "Beyond Work",
    content:
      "Outside of professional development, I am deeply interested in design, photography, and creative experimentation with new technologies. These passions often influence my approach to building digital experiences, helping me combine technical precision with visual creativity.",
  },
];

// Reusable Accordion Item Component
const AccordionItem = ({ item, expanded, setExpanded }) => {
  const isOpen = item.id === expanded;
  return (
    <div className="accordion-item">
      <motion.header
        className="accordion-trigger"
        onClick={() => setExpanded(isOpen ? false : item.id)}
      >
        {item.title}
        <motion.div
          className="accordion-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="accordion-content"
          >
            <p>{item.content}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Card Component
function AccordionCard() {
  // Check window width once on initial render
  const isDesktop = window.innerWidth > 768;
  // This state ensures only one item is open at a time
  const [expanded, setExpanded] = useState(isDesktop ? "item-1" : false);

  return (
    <div className="accordion-card">
      <div className="accordion-image-container">
        <img
          src="/profile-image.jpg"
          alt="Bony Koshy"
          className="profile-image"
        />
      </div>
      <div className="accordion-container">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionCard;
