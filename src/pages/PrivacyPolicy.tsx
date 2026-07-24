import React from "react";
import { Meta } from "@/shared/ui/Meta/Meta";

/** Renders the Privacy Policy legal document. */
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-4 md:pt-8 pb-12 px-6 bg-bg-default">
      <Meta
        title="Privacy Policy"
        description="Privacy Policy for Bony Koshy's portfolio website. Learn how your data is handled."
      />
      <div id="main-content" className="max-w-3xl mx-auto font-jetbrains-mono">
        <div className="animate-in fade-in duration-700 slide-in-from-bottom-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-fg-primary tracking-tight font-sans uppercase">
            Privacy Policy
          </h1>
          <p className="text-fg-tertiary mb-10 text-xs sm:text-sm uppercase tracking-widest font-medium border-b border-border-default pb-6 inline-block w-full">
            Effective Date: August 2026
          </p>

          <div className="prose prose-lg prose-zinc dark:prose-invert leading-relaxed text-fg-secondary">
            <p className="mb-8 text-fg-secondary">
              This Privacy Policy describes how personal information is
              collected, used, and protected when you interact with this
              website. By using the contact form provided on this site, you
              agree to the practices outlined below.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Information Collected
            </h2>

            <p className="mb-4 text-fg-secondary">
              When you submit a message through the contact form, the following
              information may be collected:
            </p>
            <ul className="list-disc pl-5 mb-8 space-y-2 marker:text-primary text-fg-secondary">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Use of Information
            </h2>
            <p className="mb-8 text-fg-secondary">
              The information you provide is used solely for the purpose of
              responding to your inquiry. It will not be used for unsolicited
              marketing, newsletters, or promotional purposes.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Data Sharing & Disclosure
            </h2>
            <p className="mb-8 text-fg-secondary">
              Your information will not be sold, rented, or shared with third
              parties. It may, however, be processed and temporarily stored
              through third-party services (such as Netlify), which are
              necessary to deliver form functionality.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Data Security
            </h2>
            <p className="mb-8 text-fg-secondary">
              Reasonable technical and organizational measures are implemented
              to protect your personal data. While every effort is made to
              safeguard your information, no method of electronic transmission
              or storage is completely secure.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Data Retention & Your Rights
            </h2>
            <p className="mb-4 text-fg-secondary">
              Submitted information is retained only as long as necessary to
              respond to your inquiry. You have the right to request deletion of
              your data at any time by contacting:
            </p>
            <p className="font-medium text-primary mb-8 hover:underline">
              <a href="mailto:bonykoshy@gmail.com">bonykoshy@gmail.com</a>
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Updates to This Policy
            </h2>
            <p className="mb-8 text-fg-secondary">
              This Privacy Policy may be updated periodically to reflect changes
              in practices or services. The “Effective Date” above will always
              indicate the latest version.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fg-primary mt-10 font-sans uppercase tracking-tight">
              Contact
            </h2>
            <p className="mb-2 text-fg-secondary">
              If you have any questions or concerns about this Privacy Policy,
              please contact:
            </p>
            <p className="font-medium text-primary hover:underline">
              <a href="mailto:bonykoshy@gmail.com">bonykoshy@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
