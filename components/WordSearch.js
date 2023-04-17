import React from "react";
import { useGlobalState } from "@/state";
import { useRouter } from "next/router";
import { RiFileWord2Line } from "react-icons/ri";
import Select from "react-select";

const wordTypeOptions = [
  { value: "another-word-for", label: "Another Word For" },
  { value: "words-that-start-with", label: "Words Starting With" },
  { value: "words-ending-in", label: "Words Ending In" },
  { value: "words-that-rhyme-with", label: "Rhymes With" },
];
const wordLengthOptions = [
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

export default function WordSearch() {
  const { state, setState } = useGlobalState();
  const [error, setError] = React.useState(null);
  const [wordLength, setWordLength] = React.useState(wordLengthOptions[0]);
  const [wordType, setWordType] = React.useState(wordTypeOptions[0]);
  const router = useRouter();

  const wordRef = React.useRef(null);

  React.useEffect(() => {
    if (wordRef.current) {
      wordRef.current.focus();
    }

    if (error) {
      setTimeout(() => setError(null), 1000);
    }
  }, [error]);

  const buttonHandler = async () => {
    if (wordRef.current.value) {
      if (
        wordType.value == "words-that-start-with" ||
        wordType.value == "words-ending-in"
      ) {
        router.push(
          `/${wordType.value}/${wordRef.current.value.trim()}?option=${
            wordLength.value
          }`
        );
      } else {
        router.push(`/${wordType.value}/${wordRef.current.value.trim()}`);
      }

      //   if (wordLength.value === "all-words") {
      //     router.push(`/${wordType.value}/${wordRef.current.value.trim()}`);
      //   } else {
      //     router.push(
      //       `/${wordType.value}/${wordRef.current.value.trim()}?option=${
      //         wordLength.value
      //       }`
      //     );
      //   }
      wordRef.current.value = "";
    } else {
      setError("Error: Enter Words ");
    }
  };

  return (
    <div className="quizContainer">
      {
        <>
          <Select
            className="selectInput"
            options={wordTypeOptions}
            defaultValue={wordType}
            onChange={setWordType}
            instanceId="select-box"
          />

          <input
            ref={wordRef}
            type="text"
            name="word"
            id="wordInput"
            placeholder="Enter Word"
          />

          {(wordType.value == "words-that-start-with" ||
            wordType.value == "words-ending-in") && (
            <Select
              className="selectInput"
              options={wordLengthOptions}
              defaultValue={wordLength}
              onChange={setWordLength}
              instanceId="select-box"
            />
          )}

          <button onClick={buttonHandler}>
            {!error && <RiFileWord2Line />}
            {error ? error : "Search For Words"}
          </button>
        </>
      }
    </div>
  );
}
