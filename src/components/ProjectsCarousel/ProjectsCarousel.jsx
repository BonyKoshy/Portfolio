import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll } from "framer-motion";
import { Github } from "lucide-react";
import './ProjectsCarousel.css';

export const Carousel = ({ items, onCardClick }) => {
    const carouselRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: carouselRef });
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const scroll = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const cardWidth = carousel.scrollWidth / items.length;
        carousel.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        
        const handleScroll = () => {
            const atStart = carousel.scrollLeft < 50;
            const atEnd = carousel.scrollWidth - carousel.scrollLeft - carousel.clientWidth < 50;
            setIsAtStart(atStart);
            setIsAtEnd(atEnd);
        };
        
        handleScroll(); // Check initial state
        carousel.addEventListener('scroll', handleScroll);
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, [items.length]);

    const cards = useMemo(() => items.map((card, index) => (
        <motion.div
            key={card.title}
            className="carousel-item"
            onClick={() => onCardClick(card)}
        >
            <Card card={card} />
        </motion.div>
    )), [items, onCardClick]);

    return (
        <>
            <div className="carousel-wrapper">
                <div className="carousel-container" ref={carouselRef}>
                    {cards}
                </div>
            </div>
            <div className="carousel-controls">
                <a href="https://github.com/BonyKoshy?tab=repositories" target="_blank" rel="noopener noreferrer" className="more-projects-btn">
                    <Github size={18} />
                    <span>More Projects</span>
                </a>
                <div className="nav-buttons">
                    <button onClick={() => scroll(-1)} disabled={isAtStart}>&larr;</button>
                    <button onClick={() => scroll(1)} disabled={isAtEnd}>&rarr;</button>
                </div>
            </div>
        </>
    );
};

export const Card = ({ card }) => {
    return (
        <motion.div
            layoutId={`card-${card.title}`}
            className="card-content"
        >
            <div className="card-image-container">
                <motion.img 
                    layoutId={`card-image-${card.title}`}
                    src={card.src} 
                    alt={card.title} 
                    className="card-image" 
                />
            </div>
            <div className="card-details">
                <motion.p layoutId={`card-category-${card.title}`} className="card-category">{card.category}</motion.p>
                <motion.h2 layoutId={`card-title-${card.title}`} className="card-title">{card.title}</motion.h2>
            </div>
        </motion.div>
    );
};