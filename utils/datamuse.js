export const wordLengthOptions = [
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

export function getWordCount(options, option) {
  let wordCount;
  options.forEach((x, i) => {
    if (x.value === option) {
      wordCount = i + 1;
    }
  });
  return wordCount;
}

export function partOfSpeech(word) {
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
