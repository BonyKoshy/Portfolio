import { NavLink } from "react-router-dom";
import GradualBlur from "../../shared/ui/GradualBlur/GradualBlur";
import BubbleMenu from "../../shared/ui/BubbleMenu/BubbleMenu";
import { ArrowDown } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 w-full">
      {/* --- SKIP TO CONTENT (A11Y) --- 
          - Hidden by default (-translate-y-[150%])
          - Slides in on Focus (focus:translate-y-0)
          - Styled like your primary buttons
      */}
      <a
        href="#main-content"
        className="
          absolute left-6 top-5 z-100
          flex h-10 items-center justify-center rounded-full 
          bg-(--text-primary) px-6 text-sm font-medium text-(--background)
          shadow-lg ring-offset-2 focus:ring-2 ring-black/50
          transform transition-transform duration-300 ease-out
          -translate-y-[250%] focus:translate-y-0
        "
      >
        <span>Skip to Content</span>
        <ArrowDown className="ml-2 h-4 w-4" />
      </a>

      {/* Background Blur */}
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
        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-10 lg:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) => `
                relative text-sm font-medium transition-colors hover:text-(--accent)
                ${isActive ? "text-(--accent)" : "text-zinc-400"}
                after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full 
                after:origin-left after:scale-x-0 after:bg-(--accent) 
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* MOBILE/TABLET MENU */}
        <div className="lg:hidden">
          <BubbleMenu items={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
