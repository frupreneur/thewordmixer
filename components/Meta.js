import React from "react";
import Head from "next/head";

export default function Meta({
  title = `Word Mixer - Word Combiner - Combine words generator!`,
  description = "A Word mixer / word combiner that you can use to combine words or names for free. This combine words generator generates creative, readable & amazing combinations. Visit now!",
  url = "https://thewordmixer.com",
  index = "index, follow",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https:/thewordmixer.com" />
      <meta property="og:site_name" content="Rice Purity Testing" />
      <meta name="robots" content={index} />
    </Head>
  );
}
