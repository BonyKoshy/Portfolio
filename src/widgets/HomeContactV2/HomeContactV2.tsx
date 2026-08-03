import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle2, Quote } from "lucide-react";
import GlobeWireframe from "@/components/ui/globe-wireframe";
import { SlideText } from "@/shared/ui/SlideText";

export function HomeContactV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px 0px",
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData["bot-field"]) return; // Honeypot anti-spam check
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(false);

    const submitData = new FormData();
    submitData.append("form-name", "contact");
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(submitData as any).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "", "bot-field": "" });
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError(true);
        console.error(error);
        setTimeout(() => setSubmitError(false), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 md:scroll-mt-28 flex flex-col relative"
    >
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col gap-2 w-full mb-12 sm:mb-16">
        <span className="font-jetbrains-mono text-xs sm:text-sm text-primary font-bold tracking-widest uppercase">
          06 // GET IN TOUCH
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] -ml-[0.05em] text-fg-primary leading-none">
            CONTACT
          </h2>
          <a
            href="mailto:bonykoshy@gmail.com"
            className="group flex items-center gap-2 font-jetbrains-mono text-sm sm:text-base text-fg-primary hover:text-primary transition-colors duration-300 pb-1 md:pb-2"
          >
            <span className="relative inline-block">
              bonykoshy@gmail.com
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* 2. BENTO BOX FORM */}
      <div ref={containerRef} className="w-full relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Square Bento Box - Hidden on smaller screens */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex w-full min-h-[480px] h-full border border-border-default bg-bg-default rounded-sm relative overflow-hidden flex-col items-center justify-start p-8 group/globe"
          >
            {/* Top Middle Quote with Small Inline Quote Icons */}
            <div className="w-full flex items-center justify-center pt-4 z-10 text-center px-4">
              <p className="font-jetbrains-mono text-xs xl:text-sm text-fg-secondary uppercase tracking-widest leading-relaxed max-w-[340px] text-center">
                <Quote className="w-2.5 h-2.5 text-primary fill-primary inline-block align-top -mt-0.5 mr-1 rotate-180 opacity-80" />
                Local roots. Global systems. Endless learning.
                <Quote className="w-2.5 h-2.5 text-primary fill-primary inline-block align-top -mt-0.5 ml-1 opacity-80" />
              </p>
            </div>

            {/* Globe positioned to touch the left & right borders without top clipping */}
            <div className="absolute -bottom-[64%] xl:-bottom-[68%] left-1/2 -translate-x-1/2 w-full aspect-square flex items-center justify-center opacity-90 group-hover/globe:opacity-100 transition-opacity duration-700 cursor-grab active:cursor-grabbing">
              <GlobeWireframe
                autoRotate={false}
                enableInteraction={true}
                rotateToLocation={[-18, 77.5946]}
                markerLocation="bangalore"
                scale={1.112}
                className="w-full h-full"
                variant="solid"
                countryFillColor="var(--bg-tertiary, #3f3f46)"
                backgroundColor="var(--bg-default, #09090b)"
                strokeColor="var(--bg-default, #09090b)"
                graticuleColor="var(--border-subtle, #3f3f46)"
                sphereOutlineColor="var(--fg-tertiary, #71717a)"
                markerColor="var(--primary)"
              />
            </div>
          </motion.div>

          {/* Right Form block */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="w-full flex flex-col gap-1 h-full justify-between"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <input
                name="bot-field"
                value={formData["bot-field"]}
                onChange={(e) =>
                  setFormData({ ...formData, "bot-field": e.target.value })
                }
              />
            </p>

            <div className="w-full border border-border-default bg-bg-default rounded-sm p-4 sm:p-5 transition-colors duration-300 focus-within:border-primary group relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent outline-none font-jetbrains-mono text-sm text-fg-primary placeholder:text-fg-tertiary transition-colors"
                required
              />
              {errors.name && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-red-500 font-jetbrains-mono uppercase tracking-wider">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="w-full border border-border-default bg-bg-default rounded-sm p-4 sm:p-5 transition-colors duration-300 focus-within:border-primary group relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent outline-none font-jetbrains-mono text-sm text-fg-primary placeholder:text-fg-tertiary transition-colors"
                required
              />
              {errors.email && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-red-500 font-jetbrains-mono uppercase tracking-wider">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="w-full border border-border-default bg-bg-default rounded-sm p-4 sm:p-5 transition-colors duration-300 focus-within:border-primary group flex-grow relative">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-32 lg:h-full min-h-[120px] bg-transparent outline-none font-jetbrains-mono text-sm text-fg-primary placeholder:text-fg-tertiary resize-none transition-colors"
                required
              />
              {errors.message && (
                <span className="absolute right-4 bottom-4 text-[10px] text-red-500 font-jetbrains-mono uppercase tracking-wider">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full border border-border-default bg-bg-default text-fg-primary rounded-sm p-4 sm:p-5 font-jetbrains-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-primary hover:text-primary active:border-primary active:text-primary lg:hover:bg-primary/5 active:bg-primary/10 flex items-center justify-between group cursor-target disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <SlideText
                text={
                  isSubmitting
                    ? "SENDING..."
                    : isSuccess
                      ? "MESSAGE SENT"
                      : submitError
                        ? "ERROR SENDING"
                        : "SEND MESSAGE"
                }
              />
              {isSuccess ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              ) : (
                <Send
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${!isSubmitting && "group-hover:-translate-y-1 group-hover:translate-x-1"}`}
                />
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
