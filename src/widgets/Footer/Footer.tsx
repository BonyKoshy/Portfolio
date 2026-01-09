import ThemeToggle from "../../features/theme/ui/ThemeToggle";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <footer className="mt-32 pb-8">
        {/* Separator inside container specifically for page width constraint */}
      <div className="mx-auto max-w-7xl px-6">
         <div className="border-t border-border-default mb-8 w-full"></div>

      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        
        {/* Left Side: Copyright | Privacy Policy */}
        <div className="flex flex-col items-center gap-4 text-sm text-fg-secondary sm:flex-row md:items-start">

          <span>© 2026 Bony Koshy. All rights reserved.</span>
          {/* Visual Separator */}
          <span className="hidden h-6 w-px bg-border-default sm:inline-block"></span>

          
            <Button 
                asChild
                variant="underline" 
                size="none"
                className="font-normal"
            >
                <Link to="/privacy">
                    Privacy Policy
                </Link>
            </Button>
        </div>

        {/* Right Side: Social Media | Theme Toggle */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-4">
                {/* Social Icons group */}
                <div className="flex gap-4">
                    <a href="https://github.com/BonyKoshy" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] text-fg-primary transition-colors border border-border-default/50">
                        <SiGithub size={18} />
                    </a>
                    <a href="https://linkedin.com/in/bonykoshy" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] text-fg-primary transition-colors border border-border-default/50">
                        <SiLinkedin size={18} />
                    </a>
                    <a href="https://x.com/Bony_Koshy" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] text-fg-primary transition-colors border border-border-default/50">
                        <SiX size={18} />
                    </a>
                </div>


                
                <span className="h-8 w-px bg-border-default"></span>


                 {/* Theme Toggle - Now inside the same gap-4 container */}
                <div className="flex h-10 w-10 items-center justify-center">
                    <ThemeToggle />
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
