import { Meta } from "@/shared/ui/Meta/Meta";

/** Renders the About page with biography information. */
const About = () => {
  return (
    <div className="min-h-screen pt-20 px-6 max-w-7xl mx-auto">
      <Meta
        title="About Bony"
        description="Learn more about Bony Koshy, a Full-Stack Developer with experience in system architecture, AI, and modern web development."
      />
      <h1 className="text-4xl font-bold mb-4">About</h1>
    </div>
  );
};

export default About;
