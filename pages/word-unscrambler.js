import React from "react";
import { WordUnscrambler, Meta, TrendingPosts } from "@/components";
import { DATABASE, testimonials } from "@/db";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "@/state";

const resultsArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function UnscramblerPage(props) {
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
        <h1 style={{ marginTop: "0 !important" }}>{`Word Unscrambler`}</h1>
        <p className="intro">
          Word Unscrambler is the best tool for players of popular word games
          such as Scrabble, Words with Friends, Wordle, Wordscapes, Wordfeud,
          TextTwist, Word Cookies, Anagrams and more. With our advanced
          algorithm, you can quickly and easily unscramble any word or phrase,
          and discover top-scoring words that will help you dominate your
          opponents.
        </p>
        <WordUnscrambler />
        {/* <QuizContainer /> */}
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
        <TrendingPosts></TrendingPosts>
      </div>
    </>
  );
}
