import { Meta, TrendingPosts } from "@/components";

export default function AnotherWordForPage({ word, results }) {
  word = word.toUpperCase();

  if (results.length <= 0)
    return (
      <div className="site-wrap" id="site-wrap">
        <h1> Another Word For {word}</h1>
        <h2>Error: Data Not Found</h2>
        <TrendingPosts />
      </div>
    );

  return (
    <div className="site-wrap" id="site-wrap">
      <Meta
        title={`What is Another Word For ${word}` + " - The Word Mixer"}
        description={`What is another word for ${word}? view results of more than 100 words with same meaning as ${word}  `}
      />
      <h1
        style={{
          paddingLeft: "1rem",
        }}
      >
        Another Word For {word}
      </h1>
      {results.map((word) => (
        <div
          key={word.word}
          style={{
            paddingLeft: "1rem",
          }}
        >
          <h2>{word.word}</h2>
          {word.defs && (
            <>
              {word.defs[0] && (
                <p>
                  {` ${partOfSpeech(word.defs[0])} : ${word.defs[0]?.slice(
                    word.defs[0].search("\t") + 1,
                    -1
                  )}`}
                </p>
              )}
              {word.defs[1] && (
                <p>
                  {` ${partOfSpeech(word.defs[1])} : ${word.defs[1]?.slice(
                    word.defs[1].search("\t") + 1,
                    -1
                  )}`}
                </p>
              )}
              {word.defs[2] && (
                <p>
                  {` ${partOfSpeech(word.defs[2])} : ${word.defs[2]?.slice(
                    word.defs[2].search("\t") + 1,
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

export async function getServerSideProps(context) {
  const { word } = context.query;
  let trimmedWord = word.trim();

  try {
    const results = await (
      await fetch(
        `https://api.datamuse.com/words?ml=${trimmedWord}&md=d&max=100`
      )
    ).json();

    return {
      props: {
        word: trimmedWord,
        results,
      },
    };
  } catch (error) {
    return {
      props: {
        word: trimmedWord,

        results: [],
      },
    };
  }
}

//utils

function partOfSpeech(word) {
  if (word) {
    if (
      word
        .toLowerCase()
        .slice(0, word.toLowerCase().search("\t") + 1)
        .includes("v")
    )
      return "Verb";
    if (
      word
        .toLowerCase()
        .slice(0, word.toLowerCase().search("\t") + 1)
        .includes("n")
    )
      return "Noun";
    if (
      word
        .toLowerCase()
        .slice(0, word.toLowerCase().search("\t") + 1)
        .includes("adj")
    )
      return "Adjective";
    if (
      word
        .toLowerCase()
        .slice(0, word.toLowerCase().search("\t") + 1)
        .includes("adv")
    )
      return "Adverb";
  }

  return null;
}
