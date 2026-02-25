import TrendingPosts from "@/components/TrendingPosts";
import { partOfSpeech } from "@/utils/datamuse";

export async function generateMetadata({ params }) {
  const { word } = await params;
  const upperWord = word.trim().toUpperCase();
  return {
    title: `Words That Rhyme With ${upperWord} - The Word Mixer`,
    description: `Searching for words that rhyme with ${upperWord}? view results of words which rhyme with ${upperWord} and their meanings`,
    openGraph: {
      title: `Words That Rhyme With ${upperWord} - The Word Mixer`,
      type: "article",
      description: `Searching for words that rhyme with ${upperWord}? view results of words which rhyme with ${upperWord} and their meanings`,
      url: `https://thewordmixer.com/words-that-rhyme-with/${word.trim()}`,
      images: ["https://thewordmixer.com"],
      siteName: "Rice Purity Testing",
    },
    robots: "index, follow",
  };
}

async function fetchResults(word) {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?rel_rhy=${word}&md=d&max=100`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function WordsThatRhymeWithPage({ params }) {
  const { word: rawWord } = await params;
  const trimmedWord = rawWord.trim();
  const results = await fetchResults(trimmedWord);
  const word = trimmedWord.toUpperCase();

  const title = `Words That Rhyme With ${word}`;

  if (results.length <= 0) {
    return (
      <div className="site-wrap" id="site-wrap">
        <h1> {title}</h1>
        <h2>Error: Data Not Found</h2>
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
