import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, keywords, image, url, author }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="webcrawlers" content="all" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="target" content="all" />
      <meta name="author" content={author} />
      {/* Meta tags de redes sociais */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="article:publisher" content="https://www.facebook.com/horadatecnologia" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
