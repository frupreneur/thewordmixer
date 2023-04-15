import React from "react";
import { useGlobalState } from "@/state";
import { useRouter } from "next/router";
import { RiFileWord2Line } from "react-icons/ri";

export default function WordUnscrambler() {
  const { state, setState } = useGlobalState();
  const [error, setError] = React.useState(null);
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
      const results = await (
        await fetch("/api/unscrambler", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({
            word: wordRef.current.value,
          }),
        })
      ).json();

      setState((old) => ({
        ...old,
        unScrambledWords: [results, wordRef.current.value],
      }));

      router.push("#unScrambledWords");
      
      wordRef.current.value = "";
    } else {
      setError("Error: Enter Words ");
    }
  };

  return (
    <div className="quizContainer">
      {
        <>
          <input
            ref={wordRef}
            type="text"
            name="word"
            id="word"
            placeholder="Enter Word"
          />

          <button onClick={buttonHandler}>
            {!error && <RiFileWord2Line />}
            {error ? error : "Unscramble Word"}
          </button>
        </>
      }
    </div>
  );
}
