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
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion/Accordion";

import { homeContent } from "@/shared/config/content";

import { useScrollToAnchor } from "@/shared/lib/useScrollToAnchor";

const SocialIconsMap: Record<string, React.ElementType> = {
  SiGithub,
  SiLinkedin,
  SiX,
  SiPinterest,
  SiDribbble,
  SiBehance,
  SiDiscord,
  SiWhatsapp,
  SiLeetcode,
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = useScrollToAnchor();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("/", "hero");
  };

  const socialLinks =
    homeContent.socialLinks?.filter((link) =>
      ["GitHub", "LinkedIn", "X (Twitter)"].includes(link.label)
    ) || [];

  return (
    <footer className="mt-32 pb-8">
      {/* Separator inside container specifically for page width constraint */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Split Separator / Trigger */}
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

        {/* Collapsible Content */}
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
                {/* Column 1: Explore */}
                <div className="w-full">
                  {/* Mobile Accordion */}
                  <div className="block lg:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="explore" className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-medium text-fg-primary decoration-transparent hover:no-underline">
                          {homeContent.footer.sections.explore}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-3 pl-2 pt-2">
                            <Link
                              to="/"
                              onClick={handleHomeClick}
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Home
                            </Link>
                            <Link
                              to="/about"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              About
                            </Link>
                            <Link
                              to="/contact"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Contact
                            </Link>
                            <Link
                              to="/sitemap"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Sitemap
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-fg-primary">
                      {homeContent.footer.sections.explore}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/"
                        onClick={handleHomeClick}
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Home
                      </Link>
                      <Link
                        to="/about"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Contact
                      </Link>
                      <a
                        href="/sitemap.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Sitemap
                      </a>
                    </div>
                  </div>
                </div>

                {/* Column 2: Work */}
                <div className="w-full">
                  {/* Mobile Accordion */}
                  <div className="block lg:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="work" className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-medium text-fg-primary decoration-transparent hover:no-underline">
                          {homeContent.footer.sections.work}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-3 pl-2 pt-2">
                            <Link
                              to="/projects"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Projects
                            </Link>
                            <Link
                              to="/certificates"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Certificates
                            </Link>
                            <a
                              href="/resume.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Resume
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-fg-primary">
                      {homeContent.footer.sections.work}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/projects"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Projects
                      </Link>
                      <Link
                        to="/certificates"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Certificates
                      </Link>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </div>

                {/* Column 3: Socials */}
                <div className="w-full">
                  {/* Mobile Accordion */}
                  <div className="block lg:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="socials" className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-medium text-fg-primary decoration-transparent hover:no-underline">
                          {homeContent.footer.sections.socials}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-3 pl-2 pt-2">
                            <a
                              href="https://x.com/Bony_Koshy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              X (Twitter)
                            </a>
                            <a
                              href="https://www.linkedin.com/in/bonykoshy/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              LinkedIn
                            </a>
                            <a
                              href="https://in.pinterest.com/bonykoshy/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Pinterest
                            </a>
                            <a
                              href="https://dribbble.com/bonykoshy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Dribbble
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-fg-primary">
                      {homeContent.footer.sections.socials}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://x.com/Bony_Koshy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        X (Twitter)
                      </a>
                      <a
                        href="https://www.linkedin.com/in/bonykoshy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://in.pinterest.com/bonykoshy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Pinterest
                      </a>
                      <a
                        href="https://dribbble.com/bonykoshy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Dribbble
                      </a>
                    </div>
                  </div>
                </div>

                {/* Column 4: Connect */}
                <div className="w-full">
                  {/* Mobile Accordion */}
                  <div className="block lg:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="connect" className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-medium text-fg-primary decoration-transparent hover:no-underline">
                          {/* @ts-ignore */}
                          {homeContent.footer.sections.connect}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-3 pl-2 pt-2">
                            <a
                              href="https://www.behance.net/bonykoshy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Behance
                            </a>
                            <a
                              href="https://discordapp.com/users/bonykoshy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Discord
                            </a>
                            <a
                              href="https://wa.me/919447132399"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Whatsapp
                            </a>
                            <a
                              href="https://leetcode.com/u/Bonykoshy/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                            >
                              Leetcode
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-fg-primary">
                      {/* @ts-ignore */}
                      {homeContent.footer.sections.connect}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.behance.net/bonykoshy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Behance
                      </a>
                      <a
                        href="https://discordapp.com/users/bonykoshy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Discord
                      </a>
                      <a
                        href="https://wa.me/919447132399"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Whatsapp
                      </a>
                      <a
                        href="https://leetcode.com/u/Bonykoshy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary transition-colors hover:text-fg-primary w-fit"
                      >
                        Leetcode
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Separator (Visible only when expanded) */}
              <div className="border-t border-border-default mb-8 w-full"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        {/* Left Side: Copyright | Privacy Policy */}
        <div className="flex flex-col items-center gap-4 text-sm text-fg-secondary sm:flex-row md:items-start">
          <span>{homeContent.footer.copyright}</span>
          {/* Visual Separator */}
          <span className="hidden h-6 w-px bg-border-default sm:inline-block"></span>

          <SecondaryButton asChild variant="default" className="font-normal">
            <Link to="/privacy">Privacy Policy</Link>
          </SecondaryButton>
        </div>

        {/* Right Side: Social Media | Theme Toggle */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-4">
            {/* Social Icons group */}
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
