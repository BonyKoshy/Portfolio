import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  label: string;
  href: string;
};

export type BubbleMenuProps = {
  items: MenuItem[];
  className?: string;
};

export default function BubbleMenu({ items, className }: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // GSAP Animation
  useEffect(() => {
    const overlay = overlayRef.current;
    const menuItems = itemsRef.current.filter(Boolean);

    if (!overlay || !menuItems.length) return;

    if (isMenuOpen) {
      // Open
      gsap.set(overlay, { display: "flex", autoAlpha: 1 });
      gsap.fromTo(
        menuItems,
        { x: 50, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.2)",
          clearProps: "transform",
        }
      );
    } else {
      // Close
      gsap.to(menuItems, {
        x: 50,
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });
      gsap.to(overlay, {
        autoAlpha: 0,
        duration: 0.2,
        delay: 0.1,
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <div className={`relative ${className}`}>
      {/* 1. Toggle Button */}
      <button
        onClick={toggleMenu}
        className="group relative z-1003 flex h-12 w-12 flex-col items-center justify-center gap-1.5 p-2 outline-none"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-6 origin-center rounded-full transition-transform duration-300 ${
            isMenuOpen
              ? "bg-white translate-y-2 rotate-45"
              : "bg-text-primary group-hover:bg-accent"
          }`}
        />
        <span
          className={`h-0.5 w-6 origin-center rounded-full transition-transform duration-300 ${
            isMenuOpen
              ? "bg-white translate-y-0 -rotate-45"
              : "bg-text-primary group-hover:bg-accent"
          }`}
        />
      </button>

      {/* 2. Menu Overlay */}
      <div ref={overlayRef} className="fixed inset-0 z-1002 hidden">
        {/* Backdrop with Heavy Blur */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-3xl transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* 3. Navigation Layouts */}
        <nav
          className="relative z-10 flex h-full w-full flex-col
            /* Mobile: Center everything */
            items-center justify-center gap-6 px-8
            /* Tablet: Top Right positioning */
            md:absolute md:top-20 md:right-6 md:h-auto md:w-64 md:items-end md:justify-start md:gap-3 md:px-0"
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              className="
                group relative flex w-full items-center justify-center
                rounded-full
                bg-panel/80 backdrop-blur-md
                px-6 py-4 text-lg font-medium text-text-primary
                shadow-lg transition-all
                hover:bg-panel hover:text-accent
                active:scale-95
                /* Tablet specific adjustments */
                md:w-full md:py-3 md:text-base
              "
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}



