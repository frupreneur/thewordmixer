var words = require("an-array-of-english-words");
var trie = require("trie-prefix-tree");

function unScramble(word) {
  var myTrie = trie(words);
  const anagram = myTrie.getSubAnagrams(word);

  let result = {};

  for (const x of anagram) {
    // if exists
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

export default async function handler(req, res) {
  const { word } = req.body;
  const results = unScramble(word);
  res.status(200).json(results);
}
