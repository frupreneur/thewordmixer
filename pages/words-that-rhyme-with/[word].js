import { Meta, TrendingPosts } from "@/components";

export default function WordsThatRhymeWithPage({ word, results }) {
  word = word.toUpperCase();

  const title = `Words That Rhyme With ${word}`;

  if (results.length <= 0)
    return (
      <div className="site-wrap" id="site-wrap">
        <h1> {title}</h1>
        <h2>Error: Data Not Found</h2>
      </div>
    );

  return (
    <div className="site-wrap" id="site-wrap">
      <Meta
        title={title + " - The Word Mixer"}
        description={`Searching for words that rhyme with ${word}? view results of words which rhyme with ${word} and their meanings`}
      />

      <h1
        style={{
          paddingLeft: "1rem",
        }}
      >
        {title}
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
        `https://api.datamuse.com/words?rel_rhy=${trimmedWord}&md=d&max=100`
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
