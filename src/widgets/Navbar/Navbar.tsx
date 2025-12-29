import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import GradualBlur from "../../shared/ui/GradualBlur/GradualBlur";
import BubbleMenu from "../../shared/ui/BubbleMenu/BubbleMenu";
import Logo from "../../shared/ui/Logo/Logo";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [showNavbarLogo, setShowNavbarLogo] = useState(!isHome);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsPageLoading(false);
    if (document.readyState === "complete") setIsPageLoading(false);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setShowNavbarLogo(true);
      return;
    }

    const handleScroll = () => {
      // Appear after Hero logo fades out (approx > 100px)
      setShowNavbarLogo(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 w-full">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <GradualBlur
          position="top"
          height="4rem"
          strength={1}
          opacity={1}
          curve="ease-out"
          target="parent"
        />
      </div>

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* LOGO AREA - LEFT ALIGNED */}
        <div
          className={`transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) ${
            showNavbarLogo
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-110 pointer-events-none"
          }`}
        >
          <NavLink to="/" aria-label="Home">
            <Logo className="h-10 w-auto" isLoading={isPageLoading} />
          </NavLink>
        </div>

        {/* RIGHT SIDE: Navigation */}
        <div className="flex items-center gap-12">
          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-12 lg:flex">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) => `
                  relative text-sm font-medium transition-colors hover:text-(--accent)
                  ${isActive ? "text-(--accent)" : "text-zinc-400"}
                  after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full 
                  after:origin-left after:scale-x-0 after:bg-(--accent) 
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <BubbleMenu items={menuItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
