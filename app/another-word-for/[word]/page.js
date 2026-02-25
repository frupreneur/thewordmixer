import TrendingPosts from "@/components/TrendingPosts";
import { partOfSpeech } from "@/utils/datamuse";

export async function generateMetadata({ params }) {
  const { word } = await params;
  const upperWord = word.trim().toUpperCase();
  return {
    title: `What is Another Word For ${upperWord} - The Word Mixer`,
    description: `What is another word for ${upperWord}? view results of more than 100 words with same meaning as ${upperWord}`,
    openGraph: {
      title: `What is Another Word For ${upperWord} - The Word Mixer`,
      type: "article",
      description: `What is another word for ${upperWord}? view results of more than 100 words with same meaning as ${upperWord}`,
      url: `https://thewordmixer.com/another-word-for/${word.trim()}`,
      images: ["https://thewordmixer.com"],
      siteName: "Rice Purity Testing",
    },
    robots: "index, follow",
  };
}

async function fetchResults(word) {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?ml=${word}&md=d&max=100`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function AnotherWordForPage({ params }) {
  const { word: rawWord } = await params;
  const trimmedWord = rawWord.trim();
  const results = await fetchResults(trimmedWord);
  const word = trimmedWord.toUpperCase();

  if (results.length <= 0) {
    return (
      <div className="site-wrap" id="site-wrap">
        <h1> Another Word For {word}</h1>
        <h2>Error: Data Not Found</h2>
        <TrendingPosts />
      </div>
    );
  }

  return (
    <div className="site-wrap" id="site-wrap">
      <h1 style={{ paddingLeft: "1rem" }}>Another Word For {word}</h1>
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
