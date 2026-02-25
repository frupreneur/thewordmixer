"use client";

import React from "react";
import { WordMixer, TrendingPosts } from "@/components";
import { useGlobalState } from "@/state";

export default function HomeClient() {
  const { state } = useGlobalState();

  return (
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

      {state.mixedWords.length > 0 && (
        <article
          className="articleHome resultsContainer"
          id="mixedWordsResults"
        >
          <h2>Mixed Words Results</h2>
          {state.mixedWords.map((x, i) => (
            <span key={i}> {x}, </span>
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
        <h2>Frequently Asked Questions about Word Mixer</h2>
        <h3>How to mix word or names?</h3>
        <p>
          There are many different ways to mix words and names. Some of these
          methods include generating a portmanteau (a word which takes the
          beginning sounds or syllables from two other words), combining
          existing singular nouns into plural forms, or playing with spelling
          variations like switching vowels for consonants (/i/ for /j/, etc.).
        </p>
        <h3>Why mixing word or names?</h3>
        <p>
          There are many reasons to mix words. Perhaps you wanted a new word
          for an invention, or maybe it is just your personal style! Or,
          perhaps the result of mixing two different names would be more
          meaningful than either one on their own? No matter what reason
          drives this process, there can always be something unique and
          interesting about a hybrid name. Mixing words makes it possible to
          create new concepts; these ideas can come from combining surnames
          with first names that have meanings both in mechanics (how they
          combine) as well as in the results (what is generated). This
          personalized approach could also serve as the perfect way to honor
          someone by blending parts of their identity into yours--or even
          creating a proper tribute if desired. There will never end
        </p>
        <h3>What is it called when you combine two words?</h3>
        <p>
          {`Portmanteau word: Portmanteaus are the perfect way to describe your
          love for two things. For example, "frozen yogurt" is a portmanteau
          that combines "ice cream," and its iced counterpart: frozen custard
          or gelato. You will never run out of new words with these fun
          combinations! Portmantuieas combine parts from different other words
          to create something new - like blended ice creams, but more cleverly
          put together than you could ever make on your own.`}
        </p>
      </article>

      <TrendingPosts />
    </div>
  );
}
