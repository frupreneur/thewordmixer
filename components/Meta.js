import React from "react";
import Head from "next/head";

export default function Meta({
  title = `Word Mixer - Combine words in one click!`,
  description = "A Word mixer that you can use for combining words or names in just one click. This tool generates creative, readable & amazing combinations. Visit now!",
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
