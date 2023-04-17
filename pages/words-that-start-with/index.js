import React from "react";
import { StartingWith, Meta } from "@/components";
import { DATABASE, testimonials } from "@/db";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "@/state";

const resultsArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function StartingWithPage(props) {
  const { state, setState } = useGlobalState();

  return (
    <>
      <Meta
        title={`Word Unscrambler ${new Date().getFullYear()} - Unscramble Words Quickly`}
        description="Word Unscrambler is the best tool for players of popular word games
        such as Scrabble, Words with Friends, Wordle, Wordscapes, Wordfeud,
        TextTwist, Word Cookies, Anagrams and more. With our advanced
        algorithm, you can quickly and easily unscramble any word or phrase,
        and discover top-scoring words that will help you dominate your
        opponents."
        url="https://thewordmixer.com/word-unscrambler"
      />

      <div className="site-wrap" id="site-wrap">
        <h1 style={{ marginTop: "0 !important" }}>{`Words Starting With`}</h1>
        <p className="intro">
          Word Unscrambler is the best tool for players of popular word games
          such as Scrabble, Words with Friends, Wordle, Wordscapes, Wordfeud,
          TextTwist, Word Cookies, Anagrams and more. With our advanced
          algorithm, you can quickly and easily unscramble any word or phrase,
          and discover top-scoring words that will help you dominate your
          opponents.
        </p>
        <StartingWith />

        {state.unScrambledWords.length > 0 && (
          <article className="articleHome" id="unScrambledWords">
            <h2>{`Words Results From ${state.unScrambledWords[1]}`} </h2>

            {resultsArr.map((r, i) => {
              if (state.unScrambledWords[0][r]) {
                return (
                  <div key={i}>
                    <h3> {`Results With ${r} Letters`}</h3>
                    <div className="resultsContainer">
                      {state.unScrambledWords[0][r].map((x, i) => (
                        <span key={i}> {x}, </span>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
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
