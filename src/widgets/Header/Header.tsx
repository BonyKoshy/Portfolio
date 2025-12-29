import React, { useRef, useState } from "react";
import StaggeredMenu from "@/shared/ui/StaggeredMenu/StaggeredMenu";
// Clock import removed
import ThemeToggle from "@/features/theme/ui/ThemeToggle";

// Define interface for the StaggeredMenu ref if available, otherwise use basic method
interface StaggeredMenuRef {
  toggleMenu: () => void;
}

const Header: React.FC = () => {
  const menuRef = useRef<StaggeredMenuRef>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Defined but passed to StaggeredMenu, keeping strict types
  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Certificates", link: "#certificates" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ];

  const socialItems = [
    { label: "LinkedIn", link: "https://linkedin.com/in/bonykoshy" },
    { label: "GitHub", link: "https://github.com/BonyKoshy" },
    { label: "Instagram", link: "https://instagram.com" },
    { label: "X", link: "https://x.com" },
  ];

  const handleMenuToggle = () => {
    menuRef.current?.toggleMenu();
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-60 pointer-events-none max-[768px]:p-4">
        <div className="flex items-center gap-6 pointer-events-auto max-[768px]:flex">
          {/* Clock removed */}
        </div>
        <div className="flex items-center gap-6 relative z-60 pointer-events-auto">
          <ThemeToggle />
          <button
            className={`relative w-12 h-12 bg-(--panel-bg) border-none rounded-full cursor-pointer grid place-items-center z-[1001] transition-colors duration-300 shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] ${
              isMenuOpen ? "is-open" : ""
            } group`}
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-[18px]">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-(--text-primary) rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 h-0.5 w-6 bg-(--text-primary) rounded-full -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 h-0.5 w-6 bg-(--text-primary) rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      <StaggeredMenu
        ref={menuRef}
        items={menuItems}
        socialItems={socialItems}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
