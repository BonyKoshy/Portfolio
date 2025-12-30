import { NavLink } from "react-router-dom";
import { GradualBlur } from "@/shared/ui/GradualBlur";
import { BubbleMenu } from "@/shared/ui/BubbleMenu";

const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 w-full">
      {/* Background Blur Logic */}
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

      <div className="mx-auto flex h-full max-w-7xl items-center justify-end px-6">
        {/* DESKTOP NAV: Standard Text Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) => `
                relative text-sm font-medium transition-colors hover:text-accent
                ${isActive ? "text-accent" : "text-zinc-400"}
                /* Active Indicator */
                after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full 
                after:bg-accent after:transition-transform after:duration-300
                ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* MOBILE NAV: BubbleMenu Overlay */}
        <div className="lg:hidden">
          <BubbleMenu items={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


