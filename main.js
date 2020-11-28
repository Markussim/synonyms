const synonyms = require("./synonyms.json");
const fs = require("fs");

//let wordsString = "An internet satellite constellation is a large number of satellites orbiting the earth, communicating with devices or base stations on the ground, to provide internet connectivity to said devices. There are currently several companies planning on launching internet satellite constellations.";

/*fs.readFile("./anton.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let wordsArray = data.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    if (this.findSynonym(wordsArray[i].toLowerCase())) {
      process.stdout.write(
        this.findSynonym(wordsArray[i].toLowerCase())[0] + " "
      );
    } else {
      process.stdout.write(wordsArray[i] + " ");
    }
  }
});*/

this.createSynList(["hello", "there"]);

exports.createSynList = (words) => {
  let wordsProsessed = "";
  for (let i = 0; i < words.length; i++) {
    if (this.findSynonym(words[i].toLowerCase())) {
      wordsProsessed += this.findSynonym(words[i].toLowerCase())[0] + " ";
    } else {
      wordsProsessed += words[i] + " ";
    }
  }

  return wordsProsessed;
};

//console.log(findSynonym("hello")[0])

exports.findSynonym = (word) => {
  var index = synonyms.findIndex(function (item, i) {
    return item.word == word;
  });
};
