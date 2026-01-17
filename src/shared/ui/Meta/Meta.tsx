import { Helmet } from "react-helmet-async";

interface MetaProps {
  title?: string;
  description?: string;
  schema?: Record<string, any>;
}

/** Manages document head metadata such as Title, Description, and JSON-LD schema. */
export const Meta = ({ title, description, schema }: MetaProps) => {
  const siteTitle = "Bony Koshy | Portfolio";
  const defaultDescription =
    "Personal portfolio of Bony Koshy, a passionate Full-Stack Developer specializing in creating beautiful and functional digital experiences.";

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bony Koshy",
    url: "https://bonykoshy.netlify.app",
    image: "/profile-image.jpg",
    sameAs: [
      "https://github.com/BonyKoshy",
      "https://linkedin.com/in/bonykoshy",
      "https://x.com/Bony_Koshy",
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <Helmet defer={false}>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
