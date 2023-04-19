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

console.log(nameMixer("GODWILL", "YVETTE"));
