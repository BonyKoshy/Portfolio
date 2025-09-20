// src/components/About/AccordionCard/AccordionCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AccordionCard.css';

// The content for your accordion sections
const accordionData = [
  {
    id: 'item-1',
    title: 'Who I Am',
    content: "I'm a final-year Computer Applications student from Kerala, India. My passion lies in turning complex ideas into beautiful, functional, and user-centric digital experiences. I'm a lifelong learner, always excited by new technologies and the creative challenges they present."
  },
  {
    id: 'item-2',
    title: 'What I Do',
    content: "I specialize in full-stack development, comfortable with both front-end and back-end technologies. From designing intuitive user interfaces with React to building robust server-side logic and APIs, I enjoy every stage of the development lifecycle."
  },
  {
    id: 'item-3',
    title: 'What I Love',
    content: "Beyond coding, I'm passionate about creative problem-solving, exploring new tech trends, and collaborating with others. I also enjoy photography and graphic design, which often inspire my approach to building visually appealing web applications."
  }
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
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
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
  // This state ensures only one item is open at a time
  const [expanded, setExpanded] = useState('item-1'); // Default open item

  return (
    <div className="accordion-card">
      <div className="accordion-image-container">
        <img src="/profile-image.jpg" alt="Bony Koshy" className="profile-image" />
      </div>
      <div className="accordion-container">
        {accordionData.map(item => (
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