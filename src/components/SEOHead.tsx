import { Helmet } from "react-helmet-async";

const SITE_URL = "https://thriveanalytics.co.uk";
const SITE_NAME = "Thrive Analytics Ltd";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Canonical path, e.g. "/" or "/services" */
  path: string;
}

const SEOHead = ({ title, description, path }: SEOHeadProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
