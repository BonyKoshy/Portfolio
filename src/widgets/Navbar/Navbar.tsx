import { NavLink, useLocation } from "react-router-dom";
import { GradualBlur } from "@/shared/ui/GradualBlur";
import { BubbleMenu } from "@/shared/ui/BubbleMenu";
import { PrimaryButton } from "@/shared/ui/Button";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { homeContent } from "@/shared/config/content";
import { useScrollToAnchor } from "@/shared/lib/useScrollToAnchor";

const Navbar = () => {
  const location = useLocation();
  const scrollTo = useScrollToAnchor();

  const mainPaths = ["/", "/about", "/projects", "/contact"];
  // Normalize path by removing trailing slash (unless it's just root)
  const normalizedPath =
    location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");
  const isSpecialPage = !mainPaths.includes(normalizedPath);

  const menuItems = [
    { label: homeContent.navbar.links.home, href: "/" },
    { label: homeContent.navbar.links.about, href: "/about" },
    { label: homeContent.navbar.links.projects, href: "/projects" },
    { label: homeContent.navbar.cta, href: "/contact" },
  ];

  const handleSkipToMain = () => {
    scrollTo("/", "main-content");
    // Ensure focus management if needed after navigation/scroll
    setTimeout(() => {
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus({ preventScroll: true });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 w-full pointer-events-none">
      {/* Background Blur Logic */}
      <div className="absolute inset-0 -z-10">
        <GradualBlur
          position="top"
          height="4rem"
          strength={1}
          opacity={1}
          curve="ease-out"
          target="parent"
        />
      </div>

      {/* Skip to Main - Fixed & Accessible */}
      <div className="fixed top-4 left-4 z-100 pointer-events-auto">
        <PrimaryButton
          size="md"
          onClick={handleSkipToMain}
          icon={
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          }
          iconPosition="right"
          className="opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto transition-all duration-200 -translate-y-[200%] focus:translate-y-0 shadow-xl"
          tabIndex={0}
        >
          {homeContent.navbar.skipToMain}
        </PrimaryButton>
      </div>

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 pointer-events-auto relative">
        {/* Top Left Slot: Back to Home (Conditional) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 pl-6 z-50 flex items-center gap-4">
          {/* Back to Home - Only on Special Pages */}
          {isSpecialPage && (
            <PrimaryButton
              asChild
              size="md"
              icon={
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              }
              iconPosition="left"
            >
              <NavLink
                to="/"
                className={
                  isSpecialPage
                    ? "opacity-100 transition-opacity duration-300"
                    : ""
                }
              >
                {homeContent.navbar.backToHome}
              </NavLink>
            </PrimaryButton>
          )}
        </div>

        {/* DESKTOP NAV: Standard Text Links */}
        <div className="hidden items-center gap-8 lg:flex ml-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={(e) => {
                if (item.href === "/") {
                  e.preventDefault();
                  scrollTo("/", "hero");
                }
              }}
              className={({ isActive }) => `
                    relative text-sm font-medium transition-colors hover:text-primary
                    ${isActive ? "text-primary" : "text-fg-tertiary"}
                    /* Active Indicator */
                    after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full 
                    after:bg-primary after:transition-transform after:duration-300
                    ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
                `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* MOBILE NAV: BubbleMenu Overlay (< 1024px) */}
        <div className="lg:hidden ml-auto">
          <BubbleMenu
            items={[
              {
                label: homeContent.navbar.links.home,
                href: "/",
                onClick: () => scrollTo("/", "hero"),
              },
              { label: homeContent.navbar.links.about, href: "/about" },
              { label: homeContent.navbar.links.projects, href: "/projects" },
              { label: homeContent.navbar.cta, href: "/contact" },
            ]}
            useFixedPosition={true}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
