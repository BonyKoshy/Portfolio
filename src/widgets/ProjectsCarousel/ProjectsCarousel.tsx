import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, ArrowLeft, ArrowRight } from "lucide-react";

export interface ProjectCardData {
  title: string;
  category: string;
  year: number;
  src: string;
  githubLink: string;
  liveLink: string;
  linkType: string;
  content: {
    imageSrc: string;
    description: string;
    tech: string[];
  };
  key?: string;
}

interface CarouselProps {
  items: ProjectCardData[];
  onCardClick: (card: ProjectCardData) => void;
}

interface CardProps {
  card: ProjectCardData;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <motion.div layoutId={`card-${card.title}`} className="h-full w-full rounded-4xl overflow-hidden relative bg-(--panel-bg) shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          layoutId={`card-image-${card.title}`}
          src={card.src}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-400"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-(--text-primary) bg-[linear-gradient(to_top,var(--background)_30%,transparent)]">
        <motion.p
          layoutId={`card-category-${card.title}`}
          className="text-[0.9rem] font-medium text-(--text-secondary)"
        >
          {card.category}
        </motion.p>
        <motion.h2 layoutId={`card-title-${card.title}`} className="text-[1.5rem] font-bold mt-1 text-(--text-primary)">
          {card.title}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({ items, onCardClick }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cardWidth = carousel.scrollWidth / items.length;
    carousel.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const atStart = carousel.scrollLeft < 50;
      const atEnd =
        carousel.scrollWidth - carousel.scrollLeft - carousel.clientWidth < 50;
      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    };

    handleScroll(); // Check initial state
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  const cards = useMemo(
    () =>
      items.map((card) => (
        <motion.div
          key={card.title}
          className="flex-none w-[320px] h-120 snap-center cursor-pointer max-[768px]:w-70 max-[768px]:h-105 group"
          onClick={() => onCardClick(card)}
        >
          <div className="h-full w-full rounded-4xl overflow-hidden relative bg-(--panel-bg) shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
             <div className="absolute inset-0 w-full h-full"> 
               <motion.img
                 layoutId={`card-image-${card.title}`}
                 src={card.src}
                 alt={card.title}
                 className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
               />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-8 text-(--text-primary) bg-[linear-gradient(to_top,var(--background)_30%,transparent)]">
               <motion.p
                 layoutId={`card-category-${card.title}`}
                 className="text-[0.9rem] font-medium text-(--text-secondary)"
               >
                 {card.category}
               </motion.p>
               <motion.h2 layoutId={`card-title-${card.title}`} className="text-[1.5rem] font-bold mt-1 text-(--text-primary)">
                 {card.title}
               </motion.h2>
             </div>
           </div>
        </motion.div>
      )),
    [items, onCardClick]
  );

  return (
    <>
      <div className="py-8">
        <div className="flex gap-4 overflow-x-auto p-4 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden" ref={carouselRef}>
          {cards}
        </div>
      </div>
      <div className="flex justify-center items-center px-8 pt-4 pb-0 gap-4 min-[769px]:justify-end">
        <a
          href="https://github.com/BonyKoshy?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--prelayer-1) text-(--text-secondary) font-semibold no-underline transition-all duration-200 hover:bg-(--accent) hover:text-(--background)"
        >
          <Github size={18} />
          <span>More Projects</span>
        </a>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => scroll(-1)} 
            disabled={isAtStart}
            className="bg-(--prelayer-1) text-(--text-primary) border-none w-10 h-10 rounded-full p-0 cursor-pointer transition-all duration-200 hover:bg-(--accent) hover:text-(--background) disabled:opacity-40 disabled:cursor-not-allowed grid place-items-center"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => scroll(1)} 
            disabled={isAtEnd}
             className="bg-(--prelayer-1) text-(--text-primary) border-none w-10 h-10 rounded-full p-0 cursor-pointer transition-all duration-200 hover:bg-(--accent) hover:text-(--background) disabled:opacity-40 disabled:cursor-not-allowed grid place-items-center"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
};
