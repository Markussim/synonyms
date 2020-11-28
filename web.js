const express = require("express");
const synonyms = require("./synonyms.json");
const app = express();
const port = 9837;

app.use(express.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/synonyms", (req, res) => {
  //console.log(req.body.text);

  let wordsArray = req.body.text.split(" ");

  res.send(createSynList(wordsArray));
});

app.listen(port, () => console.log(`Example app listening on port port!`));

function createSynList(words) {
  let wordsProsessed = "";
  for (let i = 0; i < words.length; i++) {
    let syn = findSynonym(words[i].toLowerCase());
    if (syn) {
      wordsProsessed += syn + " ";
    } else {
      wordsProsessed += words[i] + " ";
    }
  }

  return wordsProsessed;
}

function findSynonym(word) {
  var index = synonyms.findIndex(function (item, i) {
    return item.word == word;
  });

  if (synonyms[index]) {
    return synonyms[index].synonyms[0];
  } else {
    return false;
  }
}
