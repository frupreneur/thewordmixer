import { Meta, TrendingPosts } from "@/components";

export default function WordsEndingInPage({ word, results, wordCount }) {
  word = word.toUpperCase();

  const title =
    wordCount == 1
      ? `Words Ending In ${word}`
      : `${wordCount} Letter Words Ending in ${word}`;

  if (results.length <= 0)
    return (
      <div className="site-wrap" id="site-wrap">
        <h1> Words Ending In {word}</h1>
        <h2>Error: Data Not Found</h2>
      </div>
    );

  return (
    <div className="site-wrap" id="site-wrap">
      <Meta
        title={title + " - The Word Mixer"}
        description={` Searching words ending in ${word}? view results of over 100 words that end in ${word}`}
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
          <h2>{word.word.search(" ") == -1 ? word.word : word.word}</h2>
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

const options = [
  { value: "all-words", label: "All Words" },
  { value: "2-letter-words", label: "2 Letter Words" },
  { value: "3-letter-words", label: "3 Letter Words" },
  { value: "4-letter-words", label: "4 Letter Words" },
  { value: "5-letter-words", label: "5 Letter Words" },
  { value: "6-letter-words", label: "6 Letter Words" },
  { value: "7-letter-words", label: "7 Letter Words" },
  { value: "8-letter-words", label: "8 Letter Words" },
  { value: "9-letter-words", label: "9 Letter Words" },
  { value: "10-letter-words", label: "10 Letter Words" },
];

export async function getServerSideProps(context) {
  const { word, option } = context.query;
  let trimmedWord = word.trim();
  let wordCount = getWordCount(options, option);

  try {
    const results = await getStartingWithWords(wordCount, trimmedWord);

    return {
      props: {
        word: trimmedWord,
        results,
        wordCount,
      },
    };
  } catch (error) {
    return {
      props: {
        word: trimmedWord,
        results: [],
        wordCount,
      },
    };
  }
}

//utils

async function getStartingWithWords(wordCount, trimmedWord) {
  let results;

  if (wordCount === 1) {
    results = await (
      await fetch(
        `https://api.datamuse.com/words?sp=*${trimmedWord}&md=d&max=100`
      )
    ).json();
  } else {
    let questionMarkCount = "";

    for (let i = 0; i < wordCount - trimmedWord.length; i++) {
      questionMarkCount += "?";
    }

    results = await (
      await fetch(
        `https://api.datamuse.com/words?sp=${questionMarkCount}${trimmedWord}&md=d&max=100`
      )
    ).json();
  }

  return results;
}

function getWordCount(options, option) {
  let wordCount;
  options.forEach((x, i) => {
    if (x.value === option) {
      wordCount = i + 1;
    }
  });
  return wordCount;
}

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
