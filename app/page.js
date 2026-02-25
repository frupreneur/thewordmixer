import HomeClient from "./home-client";

export const metadata = {
  title: "Word Mixer - Word Combiner - Combine words generator!",
  description:
    "A Word mixer / word combiner that you can use to combine words or names for free. This combine words generator generates creative, readable & amazing combinations. Visit now!",
  openGraph: {
    title: "Word Mixer - Word Combiner - Combine words generator!",
    type: "article",
    description:
      "A Word mixer / word combiner that you can use to combine words or names for free. This combine words generator generates creative, readable & amazing combinations. Visit now!",
    url: "https://thewordmixer.com",
    images: ["https://thewordmixer.com"],
    siteName: "Rice Purity Testing",
  },
  robots: "index, follow",
};

export default function Home() {
  return <HomeClient />;
}
