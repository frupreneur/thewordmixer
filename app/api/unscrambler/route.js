import { NextResponse } from "next/server";

function unScramble(word, words, trie) {
  var myTrie = trie(words);
  const anagram = myTrie.getSubAnagrams(word);

  let result = {};

  for (const x of anagram) {
    if (x.length > 1) {
      if (result[`${x.length}`]) {
        result[`${x.length}`] = [...result[`${x.length}`], x];
      } else {
        result[`${x.length}`] = [x];
      }
    }
  }

  return result;
}

export async function POST(request) {
  const words = (await import("an-array-of-english-words")).default;
  const trie = (await import("trie-prefix-tree")).default;

  const { word } = await request.json();
  const results = unScramble(word, words, trie);
  return NextResponse.json(results);
}
