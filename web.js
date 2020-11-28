const express = require("express");
const syn = require("./main.js");
const synonyms = require("./synonyms.json");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/synonyms", (req, res) => {
  //console.log(req.body.text);

  let wordsArray = req.body.text.split(" ");

  console.log(wordsArray);

  for (let i = 0; i < wordsArray.length; i++) {
    console.log(this.findSynonym(wordsArray[i].toLowerCase()));
    if (this.findSynonym(wordsArray[i].toLowerCase())) {
      res.write(this.findSynonym(wordsArray[i].toLowerCase())[0] + " ");
    } else {
      res.write(wordsArray[i] + " ");
    }
  }
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port port!`));

exports.findSynonym = (word) => {
  var index = synonyms.findIndex(function (item, i) {
    return item.word == word;
  });
};
