import StartingWithClient from "./starting-with-client";

export const metadata = {
  title: `Word Unscrambler ${new Date().getFullYear()} - Unscramble Words Quickly`,
  description:
    "Word Unscrambler is the best tool for players of popular word games such as Scrabble, Words with Friends, Wordle, Wordscapes, Wordfeud, TextTwist, Word Cookies, Anagrams and more. With our advanced algorithm, you can quickly and easily unscramble any word or phrase, and discover top-scoring words that will help you dominate your opponents.",
  openGraph: {
    title: "Words Starting With - The Word Mixer",
    type: "article",
    description:
      "Word Unscrambler is the best tool for players of popular word games.",
    url: "https://thewordmixer.com/words-that-start-with",
    images: ["https://thewordmixer.com"],
    siteName: "Rice Purity Testing",
  },
  robots: "index, follow",
};

export default function StartingWithPage() {
  return <StartingWithClient />;
}
