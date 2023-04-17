import React from "react";
import { WordSearch, Meta, TrendingPosts } from "@/components";
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
        title={`Word Search ${new Date().getFullYear()} - Find Words Quickly`}
        description="Whether you are searching for other words for a particular
        term, words starting with a specific letter, words ending with a
        particular suffix, or words that rhyme with a particular word, our
        tool has got you covered."
      />

      <div className="site-wrap" id="site-wrap">
        <h1 style={{ marginTop: "0 !important" }}>{`Word Search`}</h1>
        <p className="intro">
          Introducing the ultimate word tool for writers, poets, and language
          enthusiasts! Whether you are searching for other words for a
          particular term, words starting with a specific letter, words ending
          with a particular suffix, or words that rhyme with a particular word,
          our tool has got you covered. With a vast database of words and a
          user-friendly interface, finding the perfect word for your writing has
          never been easier. Simply enter your search query, and let our tool do
          the rest. 
        </p>
        <WordSearch />
        <TrendingPosts></TrendingPosts>
      </div>
    </>
  );
}
