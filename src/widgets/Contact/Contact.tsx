import React, { useOptimistic } from "react";
import { useActionState } from "react"; // React 19
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import { RippleButton } from "@/shared/ui/magicui/ripple-button";
import { useNotification } from "@/features/notifications/NotificationContext";
import { z } from "zod";

// --- Types ---
interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface NavLink {
  name: string;
  href: string;
}

// --- Validation Schema ---
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  "bot-field": z.string().optional(),
});

// --- Action State Type ---
type ActionState = {
  success?: boolean;
  error?: string;
  validationErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
} | null;

// --- Data ---
const socialLinks: SocialLink[] = [
  { icon: <SiGithub />, href: "https://github.com/BonyKoshy", label: "GitHub" },
  {
    icon: <SiLinkedin />,
    href: "https://www.linkedin.com/in/bonykoshy/",
    label: "LinkedIn",
  },
  {
    icon: <SiInstagram />,
    href: "https://www.instagram.com/bonn_i.e/",
    label: "Instagram",
  },
  {
    icon: <SiX />,
    href: "https://x.com/Bony_Koshy",
    label: "X (Twitter)",
  },
];

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
];

const Contact: React.FC = () => {
  const { addNotification } = useNotification();

  // --- React 19 Action ---
  const submitAction = async (
    _prevState: ActionState,
    formData: FormData
  ): Promise<ActionState> => {
    // 1. Bot Protection
    if (formData.get("bot-field")) {
      return { success: true }; // Silently succeed
    }

    // 2. Validate Input with Zod
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validated = ContactSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        error: "Validation Failed",
        validationErrors: validated.error.flatten().fieldErrors,
      };
    }

    // 3. Perform Submission (Mock or Fetch)
    try {
      // Re-construct FormData for the Netlify/Fetch call
      // In a real Server Action, we would call the email service directly here.
      // Since this runs on client (for now), we proxy to fetch.
      const submissionData = new URLSearchParams();
      submissionData.append("form-name", "contact");
      Object.entries(rawData).forEach(([key, val]) => {
        if (val) submissionData.append(key, val as string);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submissionData.toString(),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      addNotification("Message sent successfully!", "success");
      return { success: true };
    } catch (error) {
      console.error(error);
      addNotification("Failed to send message.", "error");
      return { error: "Failed to send message. Please try again." };
    }
  };

  const [state, formAction, isPending] = useActionState(submitAction, null);

  // Optimistic UI for button label (optional, as isPending covers it, but demonstrated for completeness)
  const [optimisticLabel, setOptimisticLabel] = useOptimistic(
    "Send",
    (_cur, pending: boolean) => (pending ? "Sending..." : "Send")
  );

  return (
    <section
      id="contact"
      className="relative pt-30 pb-8 px-8 min-h-[90vh] flex flex-col overflow-hidden text-(--text-primary)"
    >
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none bg-[linear-gradient(to_top,var(--background)_70%,transparent_100%)]" />

      <div className="relative z-1 max-w-7xl mx-auto w-full grow flex flex-col">
        <SectionTitle title="Get In Touch" />
        <div className="grid grid-cols-1 gap-16 grow items-end lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div className="text-left flex flex-col justify-end">
            <h2 className="text-[2rem] font-bold">BONY KOSHY</h2>
            <a
              href="mailto:bonykoshy@gmail.com"
              className="inline-flex items-center gap-1 text-(--text-secondary) no-underline font-medium mt-2 relative w-fit group"
            >
              bonykoshy@gmail.com
              <ArrowUpRight
                className="opacity-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={20}
              />
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-(--text-secondary) scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
            <p className="text-[1rem] text-(--text-secondary) max-w-100 my-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious team. Feel free to reach
              out.
            </p>
            <ul className="flex flex-row justify-start gap-4 list-none p-0 text-[1.5rem] w-fit">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--text-secondary) transition-all duration-200 hover:text-(--accent) hover:scale-110 block"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end">
            <div className="hidden justify-end gap-8 mb-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="no-underline text-(--text-secondary) font-medium transition-colors duration-200 hover:text-(--accent)"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="bg-(--panel-bg) p-8 rounded-2xl flex flex-col max-h-[80vh] h-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <form
                  action={async (formData) => {
                    setOptimisticLabel(true);
                    await formAction(formData);
                    setOptimisticLabel(false);
                  }}
                  className="flex flex-col gap-4 grow"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <input name="bot-field" />
                  </p>

                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="bg-(--prelayer-1) border border-(--prelayer-2) p-3 rounded-lg text-(--text-primary) font-inherit aria-invalid:border-red-500"
                      aria-invalid={!!state?.validationErrors?.name}
                    />
                    {state?.validationErrors?.name && (
                      <span className="text-sm text-red-500">
                        {state.validationErrors.name[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="bg-(--prelayer-1) border border-(--prelayer-2) p-3 rounded-lg text-(--text-primary) font-inherit aria-invalid:border-red-500"
                      aria-invalid={!!state?.validationErrors?.email}
                    />
                    {state?.validationErrors?.email && (
                      <span className="text-sm text-red-500">
                        {state.validationErrors.email[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 grow">
                    <textarea
                      name="message"
                      placeholder="Write a message"
                      required
                      className="bg-(--prelayer-1) border border-(--prelayer-2) p-3 rounded-lg text-(--text-primary) font-inherit min-h-px resize-y grow aria-invalid:border-red-500"
                      aria-invalid={!!state?.validationErrors?.message}
                    ></textarea>
                    {state?.validationErrors?.message && (
                      <span className="text-sm text-red-500">
                        {state.validationErrors.message[0]}
                      </span>
                    )}
                  </div>

                  <RippleButton
                    type="submit"
                    disabled={isPending}
                    className="bg-(--accent) text-(--background) border-none p-3 rounded-lg font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
                  >
                    {optimisticLabel}
                  </RippleButton>

                  {state?.success && (
                    <p className="text-green-500 text-center">
                      Message sent successfully!
                    </p>
                  )}
                  {state?.error && (
                    <p className="text-red-500 text-center">{state.error}</p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        <footer className="flex justify-between items-center mt-16 pt-8 border-t border-(--prelayer-2) text-(--text-secondary) text-[0.9rem] relative max-[768px]:flex-col max-[768px]:gap-4">
          <div className="flex-1 text-left">
            <span>© 2025 Bony Koshy. All rights reserved.</span>
          </div>
          <div className="flex-1 text-right max-[768px]:text-center">
            <a
              href="/privacy"
              className="no-underline text-(--text-secondary) transition-all duration-200 hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
