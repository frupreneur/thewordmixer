var words = require("an-array-of-english-words");
var trie = require("trie-prefix-tree");

export default async function handler(req, res) {
  // function wordMixer(word) {
  //   var myTrie = trie(words);
  //   const anagram = myTrie.getSubAnagrams(word);

  //   let temp = [];

  //   anagram.forEach((x) => {
  //     if (x.length > 2 && word.includes(x)) {
  //       temp.push(x);
  //     }
  //   });

  //   // return result;
  //   if (temp.length > 0) return temp;
  //   return [word];
  // }

  // async function wordMixerFunc(x, y) {
  //   let xWords = wordMixer(x.toLowerCase());
  //   let yWords = wordMixer(y.toLowerCase());

  //   let tempX = [];
  //   let tempY = [];

  //   xWords.forEach((a) => {
  //     yWords.forEach((b) => {
  //       tempX.push(
  //         a.charAt(0).toUpperCase() +
  //           a.slice(1) +
  //           b.charAt(0).toUpperCase() +
  //           b.slice(1)
  //       );
  //     });
  //   });

  //   yWords.forEach((a) => {
  //     xWords.forEach((b) => {
  //       tempY.push(
  //         a.charAt(0).toUpperCase() +
  //           a.slice(1) +
  //           b.charAt(0).toUpperCase() +
  //           b.slice(1)
  //       );
  //     });
  //   });

  //   if ([...tempX, ...tempY].length > 0) return [...tempX, ...tempY];

  //   return [
  //     x.charAt(0).toUpperCase() +
  //       x.slice(1) +
  //       y.charAt(0).toUpperCase() +
  //       y.slice(1),
  //   ];
  // }

  function nameMixer(name1, name2) {
    const name1Array = name1.split("");
    const name2Array = name2.split("");
    const mixedNames = [];

    for (let i = 0; i < name1Array.length; i++) {
      for (let j = 0; j < name2Array.length; j++) {
        mixedNames.push(
          name1Array.slice(0, i + 1).join("") + name2Array.slice(j).join("")
        );
        mixedNames.push(
          name2Array.slice(0, j + 1).join("") + name1Array.slice(i + 1).join("")
        );
      }
    }

    return mixedNames;
  }

  const { wordOne, wordTwo } = req.body;
  const results = nameMixer(wordOne, wordTwo);

  res.status(200).json(results);
}
