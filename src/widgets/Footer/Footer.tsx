import ThemeToggle from "../../features/theme/ui/ThemeToggle";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-12 pb-12 mt-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Left: Copyright */}
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Bony Koshy. Built with React & Tailwind.
        </div>

        {/* Right: Socials & Toggle */}
        <div className="flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="#"
              className="text-zinc-400 hover:text-(--accent) transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-(--accent) transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-(--accent) transition-colors"
            >
              Email
            </a>
          </div>

          {/* The Toggle - Distinctly placed */}
          <div className="pl-8 border-l border-white/10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
