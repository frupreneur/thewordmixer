import WordSearch from "@/components/WordSearch";
import TrendingPosts from "@/components/TrendingPosts";

export const metadata = {
  title: `Word Search ${new Date().getFullYear()} - Find Words Quickly`,
  description:
    "Whether you are searching for other words for a particular term, words starting with a specific letter, words ending with a particular suffix, or words that rhyme with a particular word, our tool has got you covered.",
  openGraph: {
    title: "Word Search - Find Words Quickly",
    type: "article",
    description:
      "Whether you are searching for other words for a particular term, words starting with a specific letter, words ending with a particular suffix, or words that rhyme with a particular word, our tool has got you covered.",
    url: "https://thewordmixer.com/word-search",
    images: ["https://thewordmixer.com"],
    siteName: "Rice Purity Testing",
  },
  robots: "index, follow",
};

export default function WordSearchPage() {
  return (
    <div className="site-wrap" id="site-wrap">
      <h1 style={{ marginTop: "0 !important" }}>{`Word Search`}</h1>
      <p className="intro">
        Introducing the ultimate word tool for writers, poets, and language
        enthusiasts! Whether you are searching for other words for a
        particular term, words starting with a specific letter, words ending
        with a particular suffix, or words that rhyme with a particular word,
        our tool has got you covered. With a vast database of words and a
        user-friendly interface, finding the perfect word for your writing has
        never been easier. Simply enter your search query, and let our tool do
        the rest.
      </p>
      <WordSearch />
      <TrendingPosts />
    </div>
  );
}
