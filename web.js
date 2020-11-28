const express = require("express");
const synonyms = require("./synonyms.json");
const app = express();
const port = 9837;

app.use(express.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/synonyms", async (req, res) => {
  //console.log(req.body.text);

  let wordsArray = req.body.text.split(" ");

  createSynList(wordsArray, res);
});

app.listen(port, () => console.log(`Example app listening on port port!`));

async function createSynList(words, res) {
  let wordsProsessed = "";
  /*for (let i = 0; i < words.length; i++) {
    let syn = findSynonym(words[i].toLowerCase());
    if (syn) {
      wordsProsessed += syn + " ";
    } else {
      wordsProsessed += words[i] + " ";
    }
  }*/

  
  let i = 0;
  asyncLoop(res, wordsProsessed);
  

  function asyncLoop(res, wordsProsessed) {
    setTimeout(() => {
      if (i < words.length) {
        console.log(i);
        let syn = findSynonym(words[i].toLowerCase());
        if (syn) {
          wordsProsessed += syn + " ";
        } else {
          wordsProsessed += words[i] + " ";
        }
        i++;
        setTimeout(function(){
            asyncLoop(res, wordsProsessed);
        }, 0);
      } else {
        console.log(i);
        res.send(wordsProsessed) ;
      }
    }, 0);
  }
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
