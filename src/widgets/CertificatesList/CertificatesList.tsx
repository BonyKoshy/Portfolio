import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import { useOutsideClick } from "@/shared/lib";

interface CardData {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

const cards: CardData[] = [
  {
    description: "Google",
    title: "Google IT Support Professional Certificate",
    src: "/certs/google.png",
    ctaText: "View",
    ctaLink: "https://coursera.org/verify/0RDHEIUBYOV3",
    content: () => (
      <p>
        Currently pursuing this 6-course professional certificate on Coursera.
        It covers the fundamentals of IT support, including troubleshooting,
        networking, operating systems, system administration, and security.
      </p>
    ),
  },
  {
    description: "IBM",
    title: "IBM Java Developer Professional Certificate",
    src: "/certs/ibm.png",
    ctaText: "View",
    ctaLink: "https://coursera.org/verify/G6AK17EELULT",
    content: () => (
      <p>
        In progress (currently on course 10 of 14) of this comprehensive program
        on Coursera. This series focuses on building job-ready skills in Java,
        Spring Framework, database integration, and cloud-native development.
      </p>
    ),
  },
  {
    description: "Microsoft",
    title: "Microsoft Azure Data Fundamentals",
    src: "/certs/microsoft.png",
    ctaText: "View",
    ctaLink: "https://learn.microsoft.com/en-us/users/bonykoshy-6243/",
    content: () => (
      <p>
        Completed a series of modules covering foundational knowledge of core
        data concepts, relational data, non-relational data, and data analytics
        on Microsoft Azure.
      </p>
    ),
  },
  {
    description: "Be10x",
    title: "AI Tools and ChatGPT Workshop",
    src: "/certs/Be10x.png",
    ctaText: "View",
    ctaLink:
      "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997380787",
    content: () => (
      <p>
        A workshop focused on leveraging AI for practical tasks. Gained skills
        in creating presentations, analyzing data, and debugging code
        efficiently using modern AI tools.
      </p>
    ),
  },
  {
    description: "TrendUp & CMS College",
    title: "Full-Stack Development with Python",
    src: "/certs/VAP.jpeg",
    ctaText: "View",
    ctaLink: "https://www.linkedin.com/in/bonykoshy/details/certifications/",
    content: () => (
      <p>
        Completed a value-added program in association with TrendUp at CMS
        College of Science & Commerce, covering the principles and practices of
        full-stack web development using Python.
      </p>
    ),
  },
];

const CertificatesList: React.FC = () => {
  const [active, setActive] = useState<CardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section id="certificates" className="w-full max-w-7xl mx-auto px-4 py-[60px] text-(--text-primary)">
      <SectionTitle title="Certificates" />
      <div className="flex flex-col w-full mx-auto">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setActive(null)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 grid place-items-center z-50 p-4">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-[80%] max-h-[90vh] bg-(--panel-bg) rounded-2xl overflow-hidden flex flex-col p-6 gap-6 relative"
              >
                <button
                  className="absolute top-4 right-4 bg-transparent border-none cursor-pointer p-2 flex flex-col justify-center items-center gap-[6px] z-50 group max-[768px]:hidden"
                  onClick={() => setActive(null)}
                  aria-label="Close certificate details"
                >
                  <span className="w-6 h-[2px] bg-(--text-secondary) rounded-sm transform rotate-45 translate-y-[4px] transition-colors duration-200 group-hover:bg-(--accent)"></span>
                  <span className="w-6 h-[2px] bg-(--text-secondary) rounded-sm transform -rotate-45 translate-y-[-4px] transition-colors duration-200 group-hover:bg-(--accent)"></span>
                </button>

                <div className="flex items-start gap-4 max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center">
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      src={active.src}
                      alt={active.title}
                      className="w-20 h-20 rounded-xl object-contain shrink-0 bg-(--prelayer-1)"
                    />
                  </motion.div>
                  <div className="flex-grow">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-[1.25rem] font-bold m-0 text-(--text-primary)"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[0.9rem] text-(--text-secondary) mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="flex flex-col flex-grow min-h-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.15 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >
                  <div className="text-[1rem] leading-[1.7] text-(--text-secondary) overflow-y-auto pr-2 flex-grow">
                    {active.content()}
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-(--accent) text-white font-semibold no-underline transition-transform duration-200 mt-6 self-end hover:scale-105 max-[768px]:w-full"
                  >
                    {active.ctaText}
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <ul className="list-none p-0 m-0 flex flex-col gap-4">
          {cards.map((card) => (
            <motion.li
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="flex flex-wrap justify-between items-center p-4 rounded-xl bg-(--panel-bg) cursor-pointer transition-all duration-200 shadow-sm hover:translate-y-[-2px] hover:bg-(--prelayer-2)"
            >
              <div className="flex items-center gap-6 mb-2 sm:mb-0 w-full sm:w-auto max-[640px]:w-full max-[640px]:mb-4">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img src={card.src} alt={card.title} className="w-[60px] h-[60px] rounded-[10px] object-contain" />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-semibold text-(--text-primary)"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-(--text-secondary) text-[0.9rem]"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.a
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 rounded-[10px] bg-(--accent) text-white font-semibold text-[1.1rem] border-none cursor-pointer max-[640px]:w-full max-[640px]:text-center"
              >
                {card.ctaText}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/bonykoshy/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-2 w-full sm:w-auto px-4 py-3 bg-(--panel-bg) text-(--text-secondary) rounded-full no-underline font-semibold transition-all duration-300 mt-8 shadow-sm self-end hover:bg-(--prelayer-2) lg:w-auto lg:px-4 lg:py-2 lg:mt-8 lg:self-end"
        >
          <Linkedin className="transition-transform duration-300 hover:scale-110" size={20} />
          <span>View More on LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default CertificatesList;
