const { fstat } = require("fs");
const svjson = require("./swe_eng.json");
const fs = require("fs");

fs.readFile("./linus.txt", "utf8", (err, data) => {
  let wordsArray = data.split(" ");
  let output = "";

  let swedish = 0;
  let english = 0;

  wordsArray.forEach((element) => {
    let word = findWord(element);

    if (word) {
      output += word + " ";
      english++;
    } else {
      output += element + " ";
      swedish++;
    }
  });

  console.log(output);
  console.log("English: " + english + " Swedish words: " + swedish);
  console.log(((english / (english + swedish)) * 100).toFixed(1) + "%");
});

function findWord(word) {
  let returnVar = false;
  svjson.dictionary.word.forEach((element) => {
    if (
      element.translation &&
      element.translation["@value"] &&
      !element.translation["@value"].includes(",")
    ) {
      if (element["@value"] == word) {
        returnVar = element.translation["@value"];
      }
    }
  });

  return returnVar;
}
