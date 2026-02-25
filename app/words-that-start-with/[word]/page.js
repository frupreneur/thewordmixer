import TrendingPosts from "@/components/TrendingPosts";
import {
  partOfSpeech,
  getWordCount,
  wordLengthOptions,
} from "@/utils/datamuse";

export async function generateMetadata({ params, searchParams }) {
  const { word } = await params;
  const { option } = await searchParams;
  const upperWord = word.trim().toUpperCase();
  const wordCount = getWordCount(wordLengthOptions, option);

  const title =
    wordCount == 1
      ? `Words That Start With ${upperWord}`
      : `${wordCount} Letter Words That Start With ${upperWord}`;

  return {
    title: title + " - The Word Mixer",
    description: `Searching words that start with ${upperWord}? view results of over 100 words starting with ${upperWord}`,
    openGraph: {
      title: title + " - The Word Mixer",
      type: "article",
      description: `Searching words that start with ${upperWord}? view results of over 100 words starting with ${upperWord}`,
      url: `https://thewordmixer.com/words-that-start-with/${word.trim()}`,
      images: ["https://thewordmixer.com"],
      siteName: "Rice Purity Testing",
    },
    robots: "index, follow",
  };
}

async function getStartingWithWords(wordCount, trimmedWord) {
  let url;
  if (wordCount === 1) {
    url = `https://api.datamuse.com/words?sp=${trimmedWord}*&md=d&max=100`;
  } else {
    let questionMarkCount = "";
    for (let i = 0; i < wordCount - trimmedWord.length; i++) {
      questionMarkCount += "?";
    }
    url = `https://api.datamuse.com/words?sp=${trimmedWord}${questionMarkCount}&md=d&max=100`;
  }

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export default async function StartingWithDynamicPage({
  params,
  searchParams,
}) {
  const { word: rawWord } = await params;
  const { option } = await searchParams;
  const trimmedWord = rawWord.trim();
  const wordCount = getWordCount(wordLengthOptions, option);

  let results;
  try {
    results = await getStartingWithWords(wordCount, trimmedWord);
  } catch (error) {
    results = [];
  }

  const word = trimmedWord.toUpperCase();
  const title =
    wordCount == 1
      ? `Words That Start With ${word}`
      : `${wordCount} Letter Words That Start With ${word}`;

  if (results.length <= 0) {
    return (
      <div className="site-wrap" id="site-wrap">
        <h1>Error: Data Not Found</h1>
      </div>
    );
  }

  return (
    <div className="site-wrap" id="site-wrap">
      <h1 style={{ paddingLeft: "1rem" }}>{title}</h1>
      {results.map((item) => (
        <div key={item.word} style={{ paddingLeft: "1rem" }}>
          <h2>{item.word}</h2>
          {item.defs && (
            <>
              {item.defs[0] && (
                <p>
                  {` ${partOfSpeech(item.defs[0])} : ${item.defs[0]?.slice(
                    item.defs[0].search("\t") + 1,
                    -1
                  )}`}
                </p>
              )}
              {item.defs[1] && (
                <p>
                  {` ${partOfSpeech(item.defs[1])} : ${item.defs[1]?.slice(
                    item.defs[1].search("\t") + 1,
                    -1
                  )}`}
                </p>
              )}
              {item.defs[2] && (
                <p>
                  {` ${partOfSpeech(item.defs[2])} : ${item.defs[2]?.slice(
                    item.defs[2].search("\t") + 1,
                    -1
                  )}`}
                </p>
              )}
            </>
          )}
        </div>
      ))}
      <TrendingPosts />
    </div>
  );
}
