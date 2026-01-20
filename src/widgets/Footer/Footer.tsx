import { useState } from "react";
import ThemeToggle from "../../features/theme/ui/ThemeToggle";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiPinterest,
  SiDribbble,
  SiBehance,
  SiDiscord,
  SiWhatsapp,
  SiLeetcode,
} from "react-icons/si";
import { SecondaryButton } from "@/shared/ui/Button";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useScrollToAnchor } from "@/shared/lib/useScrollToAnchor";
import { homeContent } from "@/shared/config/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion/Accordion";

// Map for dynamic icon rendering
const SocialIconsMap: Record<string, React.ElementType> = {
  SiGithub: SiGithub,
  SiLinkedin: SiLinkedin,
  SiX: SiX,
  SiPinterest: SiPinterest,
  SiDribbble: SiDribbble,
  SiBehance: SiBehance,
  SiDiscord: SiDiscord,
  SiWhatsapp: SiWhatsapp,
  SiLeetcode: SiLeetcode,
};

/** Renders the global footer with quick links, social icons, and copyright. */
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollToAnchor();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("/", "hero");
  };

  const socialLinks =
    homeContent.socialLinks?.filter((link) =>
      ["GitHub", "LinkedIn", "X (Twitter)"].includes(link.label)
    ) || [];

  const columns = homeContent.footer.columns;
  const columnKeys = ["explore", "work", "profiles", "connect"] as const;

  // Define valid routes where the standard footer margin should appear
  const validRoutes = [
    "/",
    "/about",
    "/projects",
    "/contact",
    "/certificates",
    "/privacy",
    "/privacy-policy",
  ];

  // Normalize path (remove trailing slash for consistency)
  const pathname = location.pathname.replace(/\/$/, "") || "/";

  // If the current path is NOT in validRoutes, assume it's a 404 page and remove top margin
  const is404 = !validRoutes.includes(pathname);
  const marginTopClass = is404 ? "mt-0" : "mt-32";

  return (
    <footer className={`${marginTopClass} pb-8`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-8 w-full">
          <div className="h-px bg-border-default flex-1"></div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors group"
          >
            {homeContent.footer.quickLinks}
            <ChevronDown
              className={`nav-link w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className="h-px bg-border-default flex-1"></div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 pt-4">
                {columnKeys.map((key) => {
                  const column = columns[key];
                  return (
                    <div key={key} className="w-full">
                      <div className="block lg:hidden">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value={key} className="border-b-0">
                            <AccordionTrigger className="py-2 text-base font-medium text-fg-primary decoration-transparent hover:no-underline">
                              {column.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-3 pl-2 pt-2">
                                {column.links.map((link: any) => (
                                  <FooterLink
                                    key={link.label}
                                    link={link}
                                    handleHomeClick={handleHomeClick}
                                  />
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="hidden lg:flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-fg-primary">
                          {column.title}
                        </h3>
                        <div className="flex flex-col gap-3">
                          {column.links.map((link: any) => (
                            <FooterLink
                              key={link.label}
                              link={link}
                              handleHomeClick={handleHomeClick}
                              className="w-fit"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-border-default mb-8 w-full"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-4 text-sm text-fg-secondary sm:flex-row md:items-start">
          <span>{homeContent.footer.copyright}</span>
          <span className="hidden h-6 w-px bg-border-default sm:inline-block"></span>

          <SecondaryButton asChild variant="default" className="font-normal">
            <Link to="/privacy">Privacy Policy</Link>
          </SecondaryButton>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = SocialIconsMap[link.icon as string] || SiGithub;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] text-fg-primary transition-colors border border-border-default/50"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <span className="h-8 w-px bg-border-default"></span>

            <div className="flex h-10 w-10 items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/** Helper component for rendering individual footer links. */
const FooterLink = ({
  link,
  handleHomeClick,
  className = "",
}: {
  link: { label: string; href: string; isExternal?: boolean };
  handleHomeClick: (e: React.MouseEvent) => void;
  className?: string;
}) => {
  const baseClasses = `text-sm text-fg-secondary transition-colors hover:text-fg-primary ${className}`;

  if (link.isExternal) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      to={link.href}
      onClick={link.href === "/" ? handleHomeClick : undefined}
      className={baseClasses}
    >
      {link.label}
    </Link>
  );
};

export default Footer;
