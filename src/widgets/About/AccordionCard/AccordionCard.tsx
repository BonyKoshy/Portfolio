import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelImage } from "@/shared/ui/magicui/pixel-image";

// Interface for the data structure
interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

// The content for your accordion sections
const accordionData: AccordionItemData[] = [
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

// Props interface for the AccordionItem component
interface AccordionItemProps {
  item: AccordionItemData;
  expanded: string | false;
  setExpanded: (id: string | false) => void;
}

// Reusable Accordion Item Component
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  expanded,
  setExpanded,
}) => {
  const isOpen = item.id === expanded;
  return (
    <div className="border-b border-prelayer-2 last:border-b-0">
      <motion.header
        className="flex justify-between items-center w-full py-4 text-lg font-semibold text-text-primary cursor-pointer bg-none border-none"
        onClick={() => setExpanded(isOpen ? false : item.id)}
      >
        {item.title}
        <motion.div
          className="text-accent"
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
            className="overflow-hidden"
          >
            <p className="pb-4 text-text-secondary leading-relaxed">
              {item.content}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Card Component
const AccordionCard: React.FC = () => {
  // Initialize state with false safely
  const [expanded, setExpanded] = useState<string | false>(false);

  // Set initial state based on window width after mount to avoid hydration mismatch
  useEffect(() => {
    if (window.innerWidth > 768) {
      setExpanded("item-1");
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 h-full w-full md:flex-row">
      <div className="w-full shrink-0 md:w-[35%]">
        <PixelImage
          src="/profile-image.jpg"
          alt="Bony Koshy"
          className="w-full h-full aspect-square rounded-xl"
        />
      </div>
      <div className="w-full flex flex-col">
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
};

export default AccordionCard;

