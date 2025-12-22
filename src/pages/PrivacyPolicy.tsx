// src/pages/PrivacyPolicy.tsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StaggeredMenu from "@/shared/ui/StaggeredMenu/StaggeredMenu";
import ThemeToggle from "@/features/theme/ui/ThemeToggle";
import GradualBlur from "@/shared/ui/GradualBlur/GradualBlur";

interface MenuItem {
  label: string;
  link: string;
}

const PrivacyPolicy: React.FC = () => {
  const menuRef = useRef<{ toggleMenu: () => void }>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/#about" },
    { label: "Certificates", link: "/#certificates" },
    { label: "Projects", link: "/#projects" },
    { label: "Contact", link: "/#contact" },
  ];

  const socialItems: MenuItem[] = [
    { label: "LinkedIn", link: "https://linkedin.com/in/bonykoshy" },
    { label: "GitHub", link: "https://github.com/BonyKoshy" },
  ];

  const handleMenuToggle = () => {
    menuRef.current?.toggleMenu();
  };

  return (
    <>
      <GradualBlur
        preset="header"
        target="page"
        strength={3}
        height="120px"
        zIndex={40} // Below header (50) but above content
      />
      {/* Fixed Navbar similar to Header widget but customized */}
      {/* REMOVED: mix-blend-difference */}
      <header className="fixed top-0 left-0 w-full px-4 md:px-8 py-6 flex justify-between items-center z-[200] pointer-events-none">
        
        {/* Left: Back to Home (Replcaing Clock) */}
        <div className="pointer-events-auto">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-(--text-primary) hover:text-(--accent) transition-colors duration-300 font-medium no-underline group"
          >
            <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm uppercase tracking-wider font-bold">Back to Home</span>
          </Link>
        </div>

        {/* Right: Theme Toggle & Menu */}
        <div className="flex items-center gap-6 pointer-events-auto">
          <ThemeToggle />
          
          {/* Menu Button - Exact replica of Header.css styles using Tailwind */}
          <button
            className={`
              relative w-12 h-12 rounded-full border-none cursor-pointer flex flex-col justify-center items-center gap-[5px] z-[1001]
              bg-(--panel-bg) shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] transition-colors duration-300
              ${isMenuOpen ? "is-open" : ""}
            `}
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {/* Line 1 */}
            <span 
              className={`
                block w-[22px] h-[2px] bg-(--text-primary) rounded-[2px] transition-all duration-300 ease-out origin-center
                ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
            ></span>
            
            {/* Line 2 */}
            <span 
               className={`
                block w-[22px] h-[2px] bg-(--text-primary) rounded-[2px] transition-all duration-300 ease-out origin-center
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            ></span>
            
            {/* Line 3 */}
            <span 
               className={`
                block w-[22px] h-[2px] bg-(--text-primary) rounded-[2px] transition-all duration-300 ease-out origin-center
                ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            ></span>
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

      {/* Main Content */}
      <div className="min-h-screen pt-32 pb-12 px-6 bg-(--background) text-(--text-primary)">
        <div className="max-w-3xl mx-auto bg-(--panel-bg) backdrop-blur-md rounded-2xl p-10 md:p-14 border border-(--prelayer-1) shadow-xl animate-in fade-in duration-700 slide-in-from-bottom-8">
            {/* Title - Removed subtitle effect, just clean typography */}
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-(--text-primary) tracking-tight">Privacy Policy</h1>
            <p className="text-(--text-secondary) mb-10 text-sm uppercase tracking-widest font-medium border-b border-(--prelayer-2) pb-6 inline-block w-full">
              Effective Date: September 2025
            </p>

            <div className="prose prose-lg prose-invert text-(--text-secondary) leading-relaxed">
              <p className="mb-8">
                This Privacy Policy describes how personal information is collected,
                used, and protected when you interact with this website. By using
                the contact form provided on this site, you agree to the practices
                outlined below.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Information Collected</h2>
              <p className="mb-4">
                When you submit a message through the contact form, the following
                information may be collected:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 marker:text-(--accent)">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message content</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Use of Information</h2>
              <p className="mb-8">
                The information you provide is used solely for the purpose of
                responding to your inquiry. It will not be used for unsolicited
                marketing, newsletters, or promotional purposes.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Data Sharing & Disclosure</h2>
              <p className="mb-8">
                Your information will not be sold, rented, or shared with third
                parties. It may, however, be processed and temporarily stored
                through third-party services (such as Netlify), which are necessary
                to deliver form functionality.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Data Security</h2>
              <p className="mb-8">
                Reasonable technical and organizational measures are implemented to
                protect your personal data. While every effort is made to safeguard
                your information, no method of electronic transmission or storage is
                completely secure.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Data Retention & Your Rights</h2>
              <p className="mb-4">
                Submitted information is retained only as long as necessary to
                respond to your inquiry. You have the right to request deletion of
                your data at any time by contacting:
              </p>
              <p className="font-medium text-(--accent) mb-8 hover:underline">
                 <a href="mailto:bonykoshy@gmail.com">bonykoshy@gmail.com</a>
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Updates to This Policy</h2>
              <p className="mb-8">
                This Privacy Policy may be updated periodically to reflect changes
                in practices or services. The “Effective Date” above will always
                indicate the latest version.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-(--text-primary) mt-10">Contact</h2>
              <p className="mb-2">
                If you have any questions or concerns about this Privacy Policy,
                please contact:
              </p>
               <p className="font-medium text-(--accent) hover:underline">
                 <a href="mailto:bonykoshy@gmail.com">bonykoshy@gmail.com</a>
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
