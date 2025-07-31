import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = "AI comic generator, text to comic, manga creator, comic strip maker, AI storytelling",
  image = "/og-image.png",
  url = window.location.href 
}: SEOHeadProps) => {
  const { t } = useTranslation();

  const defaultTitle = t('hero.title');
  const defaultDescription = t('hero.description');
  
  const finalTitle = title ? `${title} | Comic AI` : `${defaultTitle} | Comic AI`;
  const finalDescription = description || defaultDescription;

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Comic AI" />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Comic AI" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};