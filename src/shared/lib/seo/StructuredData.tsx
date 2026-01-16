import { Helmet } from "react-helmet-async";

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://bonykoshy.netlify.app/#person",
        name: "Bony Koshy",
        url: "https://bonykoshy.netlify.app/",
        jobTitle: "Senior Frontend Engineer",
        sameAs: [
          "https://github.com/BonyKoshy",
          "https://linkedin.com/in/bonykoshy",
        ],
        image: "https://bonykoshy.netlify.app/avatar.jpg",
        description:
          "Senior Frontend Engineer specializing in React, Next.js, and high-performance web applications.",
      },
      {
        "@type": "WebSite",
        "@id": "https://bonykoshy.netlify.app/#website",
        url: "https://bonykoshy.netlify.app/",
        name: "Bony Koshy | Portfolio",
        description: "Portfolio of Bony Koshy, a Senior Frontend Engineer.",
        publisher: {
          "@id": "https://bonykoshy.netlify.app/#person",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
