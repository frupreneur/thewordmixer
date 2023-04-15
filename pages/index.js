import React from "react";
import { WordMixer, Meta } from "@/components";
import { DATABASE, testimonials } from "@/db";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "@/state";

export default function Home(props) {
  const { state, setState } = useGlobalState();

  return (
    <>
      <Meta />

      <div className="site-wrap" id="site-wrap">
        <h1
          style={{ marginTop: "0 !important" }}
        >{`Word Mixer - Word Combiner`}</h1>
        <p className="intro">
          A new way to combine words and make your own word combo! A Word mixer
          that you can use for combining words or names in just one click. This
          tool generates creative, readable & amazing combinations.
        </p>
        <WordMixer />
        {/* <QuizContainer /> */}
        {state.mixedWords.length > 0 && (
          <article className="articleHome" id="mixedWordsResults">
            <h2>Mixed Words Results</h2>
            {state.mixedWords.map((x, i) => (
              <p key={i}> {x} </p>
            ))}
          </article>
        )}
        <article className="articleHome">
          <h2>Word Combiner</h2>
          <p>
            This word combiner tool is quite an innovation in mixing words and
            giving you a new one that could be put to use for anything that
            suits your purpose. All you have to do is to provide two different
            words, and you will get a unique expression that could be used to
            name a fashion brand, for, eg. Clothes + beautiful = Cutiful would
            prove to be unique and eye-catchy for anyone to see or a gaming
            character. Try the Word Mixer now and fetch some fascinating and
            distinctive words.
          </p>
        </article>
      </div>
    </>
  );
}
