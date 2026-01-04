import { NavLink, useLocation } from "react-router-dom";
import { GradualBlur } from "@/shared/ui/GradualBlur";
import { BubbleMenu } from "@/shared/ui/BubbleMenu";
import { Button } from "@/shared/ui/Button";
import { ArrowDown, ArrowLeft } from "lucide-react";



const Navbar = () => {
  const location = useLocation();
  const mainPaths = ["/", "/about", "/projects", "/contact"];
  const isSpecialPage = !mainPaths.includes(location.pathname);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const handleSkipToMain = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus({ preventScroll: true }); // Prevent redundant scroll if we use scrollIntoView, or just focus.
      mainContent.scrollIntoView({ behavior: "smooth" });
      // Remove tabIndex on blur to clean up? Optional, but -1 is fine to leave.
    }
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
       <div className="fixed top-4 left-4 z-[100] pointer-events-auto">
            <Button 
                variant="primary" 
                size="md" 
                onClick={handleSkipToMain}
                icon={<ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />}
                iconPosition="right"
                className="opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto transition-all duration-200 -translate-y-[200%] focus:translate-y-0 shadow-xl"
                tabIndex={0}
            >
                Skip to Main
            </Button>
       </div>

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 pointer-events-auto relative">
         {/* Top Left Slot: Back to Home (Conditional) */}
         <div className="absolute top-1/2 -translate-y-1/2 left-0 pl-6 z-50 flex items-center gap-4">
             {/* Back to Home - Only on Special Pages */}
             {isSpecialPage && (
                 <NavLink to="/" className={isSpecialPage ? "opacity-100 transition-opacity duration-300" : ""}>
                    <Button
                        variant="primary"
                        size="md"
                        icon={<ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />}
                        iconPosition="left"
                    >
                        Back to Home
                    </Button>
                </NavLink>
             )}
         </div>



        {/* DESKTOP NAV: Standard Text Links (Always Visible) */}
        <>
            <div className="hidden items-center gap-8 lg:flex ml-auto">
            {menuItems.map((item) => (
                <NavLink
                key={item.label}
                to={item.href}
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



            {/* MOBILE NAV: BubbleMenu Overlay */}
            <div className="lg:hidden ml-auto">
            <BubbleMenu items={menuItems} />
            </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;


