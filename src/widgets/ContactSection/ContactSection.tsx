import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/shared/ui/Button/Button";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Calendar } from "@/shared/ui/Calendar/Calendar";
import { cn } from "@/shared/lib/utils";
import { homeContent } from "@/shared/config/content";

export function ContactSection() {
  const email = homeContent.contact.email;
  const [copied, setCopied] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-10 px-4 md:px-6 flex items-center justify-center min-[320px]:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full group"
      >
        {/* Card Container with Gradient Depth Effect */}
        <div className="relative p-px rounded-[2.5rem] overflow-hidden">
          {/* Animated Gradient Border/Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent opacity-100 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary),transparent_80%)] opacity-20 dark:opacity-40 blur-xl pointer-events-none" />

          <div
            className="relative bg-bg-paper rounded-[2.5rem] p-6 md:p-12 lg:p-16 border border-white/10 dark:border-white/5 overflow-hidden flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20 box-border shadow-2xl shadow-black/5"
            style={{ maxHeight: "max(80vh, 600px)" }}
          >
            {/* Inner Depth Highlight */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none mix-blend-overlay" />

            {/* Left Column: Heading & Text */}
            <div className="relative z-10 flex flex-col justify-center w-full lg:max-w-2xl space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-fg-primary text-balance text-left leading-tight drop-shadow-xs">
                  {homeContent.contact.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-fg-secondary max-w-xl leading-relaxed text-left font-medium">
                  {homeContent.contact.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto items-center sm:items-stretch">
                {/* Primary Button - Matches Hero Style EXACTLY */}
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link to="/contact">
                    {homeContent.contact.cta}
                    <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>

                <button
                  onClick={handleCopy}
                  className="group w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-bg-surface border border-border-default hover:border-fg-tertiary transition-all duration-300 text-fg-primary font-medium hover:bg-bg-subtle"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-fg-secondary group-hover:text-fg-primary" />
                  )}
                  <span className="truncate">{email}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Calendar (Hidden < 1024px) */}
            <div className="relative z-10 hidden lg:flex w-auto justify-end shrink-0">
              <div className="bg-bg-surface/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl ring-1 ring-white/20 dark:ring-white/5">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border-none p-0"
                  classNames={{
                    head_cell:
                      "text-fg-tertiary font-medium text-[0.8rem] uppercase tracking-wider pb-2",
                    cell: "text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: cn(
                      "h-10 w-10 p-0 font-bold aria-selected:opacity-100 hover:bg-bg-paper rounded-full transition-all duration-200 text-fg-primary opacity-90"
                    ),
                    day_selected:
                      "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white shadow-lg shadow-primary/30 scale-110 font-black",
                    day_today:
                      "bg-accent text-accent-foreground font-extrabold ring-2 ring-primary/20",
                    day_outside:
                      "text-fg-tertiary opacity-20 font-normal hover:bg-transparent hover:text-fg-tertiary cursor-default",
                    day_disabled: "text-fg-tertiary opacity-10",
                    day_range_middle:
                      "aria-selected:bg-accent aria-selected:text-accent-foreground",
                    day_hidden: "invisible",
                    nav_button:
                      "border border-border-default hover:bg-bg-paper rounded-full shadow-xs transition-colors",
                    caption:
                      "flex justify-center pt-1 relative items-center mb-4 text-fg-primary font-bold",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
