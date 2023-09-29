import React from "react";
import { useGlobalState } from "@/state";
import { useRouter } from "next/router";
import { RiFileWord2Line } from "react-icons/ri";

export default function WordMixer() {
  const { state, setState, DATABASE } = useGlobalState();
  const [error, setError] = React.useState(null);

  const wordOneRef = React.useRef(null);
  const wordTwoRef = React.useRef(null);

  React.useEffect(() => {
    if (wordOneRef.current) {
      wordOneRef.current.focus();
    }

    if (error) {
      setTimeout(() => setError(null), 1000);
    }
  }, [error]);

  const buttonHandler = async () => {
    if (wordOneRef.current.value && wordTwoRef.current.value) {
      const results = await (
        await fetch("/api/mixer", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({
            wordOne: wordOneRef.current.value,
            wordTwo: wordTwoRef.current.value,
          }),
        })
      ).json();

      setState((old) => ({
        ...old,
        mixedWords: results,
      }));

      wordOneRef.current.value = "";
      wordTwoRef.current.value = "";
    } else {
      setError("Error: Enter Word ");
    }
  };

  return (
    <div className="quizContainer">
      {
        <>
          <input
            ref={wordOneRef}
            type="text"
            name="wordOne"
            id="wordOne"
            placeholder="Enter Word 1"
          />

          <input
            ref={wordTwoRef}
            type="text"
            name="wordTwo"
            id="wordTwo"
            placeholder="Enter Word 2"
          />

          <button onClick={buttonHandler}>
            {!error && <RiFileWord2Line />}
            {error ? error : "MIX WORDS"}
          </button>
        </>
      }
    </div>
  );
}
