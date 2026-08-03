import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CardNav.css";

export interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: { label: string; href: string }[];
}

interface CardNavProps {
  isOpen: boolean;
  items: CardNavItem[];
  onClose: () => void;
  onLinkClick?: (href: string, e: React.MouseEvent) => void;
}

const containerVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25 },
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
      opacity: { duration: 0.3 },
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.42, 0, 1, 1] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const CardNav: React.FC<CardNavProps> = ({
  isOpen,
  items,
  onClose,
  onLinkClick,
}) => {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    onClose();
    if (onLinkClick) {
      onLinkClick(href, e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="card-nav open"
        >
          <div className="card-nav-content" aria-hidden={!isOpen}>
            {items.map((item) => (
              <motion.div
                key={item.label}
                variants={cardVariants}
                className="nav-card"
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                <div
                  className="nav-card-label text-xs uppercase tracking-widest font-mono text-fg-tertiary"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {item.label}
                </div>
                <div className="nav-card-links">
                  {item.links.map((lnk) => {
                    const isExternal =
                      lnk.href.startsWith("http://") ||
                      lnk.href.startsWith("https://");

                    if (isExternal) {
                      return (
                        <a
                          key={lnk.label}
                          href={lnk.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-card-link text-sm font-jetbrains-mono hover:text-primary transition-colors"
                          onClick={onClose}
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                        >
                          <ArrowUpRight
                            className="nav-card-link-icon"
                            size={16}
                          />
                          {lnk.label}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={lnk.label}
                        to={lnk.href}
                        className="nav-card-link text-sm font-jetbrains-mono hover:text-primary transition-colors"
                        onClick={(e) => handleLinkClick(lnk.href, e)}
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        <ArrowUpRight
                          className="nav-card-link-icon"
                          size={16}
                        />
                        {lnk.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardNav;
