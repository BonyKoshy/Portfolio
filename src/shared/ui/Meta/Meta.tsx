import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
}

export const Meta = ({ title, description }: MetaProps) => {
  const siteTitle = "Bony Koshy | Portfolio";
  const defaultDescription = "Personal portfolio of Bony Koshy, a passionate Full-Stack Developer specializing in creating beautiful and functional digital experiences.";

  return (
    <Helmet defer={false}>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};
