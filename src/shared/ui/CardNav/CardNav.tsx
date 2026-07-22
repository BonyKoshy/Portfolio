import React, { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardNav.css";

interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: { label: string; href: string }[];
}

interface CardNavProps {
  isOpen: boolean;
  items: CardNavItem[];
  onClose: () => void;
}

const CardNav: React.FC<CardNavProps> = ({ isOpen, items, onClose }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  useLayoutEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    gsap.set(navEl, { height: 0, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: "auto",
      duration: 0.4,
      ease: "power3.out",
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", stagger: 0.08 },
      "-=0.2"
    );

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [items]);

  useEffect(() => {
    if (!tlRef.current) return;
    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <div ref={navRef} className={`card-nav ${isOpen ? "open" : ""}`}>
      <div className="card-nav-content" aria-hidden={!isOpen}>
        {items.map((item, idx) => (
          <div
            key={item.label}
            className="nav-card"
            ref={setCardRef(idx)}
            style={{ backgroundColor: item.bgColor, color: item.textColor }}
          >
            <div
              className="nav-card-label"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {item.label}
            </div>
            <div className="nav-card-links">
              {item.links.map((lnk) => (
                <Link
                  key={lnk.label}
                  to={lnk.href}
                  className="nav-card-link"
                  onClick={onClose}
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  <ArrowUpRight className="nav-card-link-icon" size={16} />
                  {lnk.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNav;
