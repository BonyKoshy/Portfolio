import { Meta } from "@/shared/ui/Meta/Meta";

/** Renders the Contact page with ways to get in touch. */
const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-6 max-w-7xl mx-auto">
      <Meta
        title="Contact Bony"
        description="Get in touch with Bony Koshy for collaboration, job opportunities, or just to say hi."
      />
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
    </div>
  );
};

export default Contact;
