const fs = require("fs");
// for comparison math
const levenshtein = require('js-levenshtein');
var list =  fs.readFileSync('./dictionary.txt', 'utf8').split(/\r?\n/);


module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },

  getDictionary: (req, res) => {
    res.render("dictionary.ejs", { list: list });
  },

  postDictionary: (req, res) =>{
    list.push(req.body.word);
    let i = 0;
    //compare for duplicates
    while (i < list.length-1){
      if (list[i] == req.body.word){
        list.pop();
        console.error("Duplicate entry")
        break;
      } else{
        i++
      }}
    // prepare for rewritind dictionary.txt
    list.sort()
    let txtList = list.join("\n");
    fs.writeFile('./dictionary.txt', txtList, err => {
      if (err) {
        console.error(err);
      }
    });
    res.redirect("/dictionary");
  },

  deleteDictionary:(req, res) =>{
      //check word is in list
    let deletePosition = list.indexOf(req.body.word)
    if (deletePosition === -1){
      console.error("Entry not found")
    }else{
      list.splice(deletePosition, 1)
      // prepare for rewriting dictionary.txt
      let txtList = list.join("\n");
      fs.writeFile('./dictionary.txt', txtList, err => {
        if (err) {
          console.error(err);
        }
      });
    }
    res.redirect("/dictionary");
  },

  postStory: (req, res) =>{
      const story = req.body.story;
        //convert story to array without punctuation
      let storyArray = story
          .replace(/['!"#$%&\\'()\*+,.\/:;<=>?@\[\\\]\^_`{|}~']/g,"")
          .toLowerCase()
          .split(" ");
      let notListWords = [];
      let unmachedKey = [];
      let unmachedValue = [];

        //check if word is in dictionary list
      storyArray.forEach(el => {
        if(list.indexOf(el) === -1){ 
          notListWords.push(el)
        };
      });
        //determine "closest match"
      notListWords.forEach(el => {
          //46 chosen because longest word in English is 46 letters long, anything else would be smaller
        let currentLnum = 46;
        let currentWord = " ";
        list.forEach(dictWord =>   { 
          if ( (num = levenshtein(el, dictWord) )  < currentLnum){ 
            currentLnum = num; 
            currentWord = dictWord
          } 
        })
        unmachedKey.push(el) ;
        unmachedValue.push(currentWord)
      })

        //build keyvalue pairs
      let unmachedWords = Object.assign(...unmachedKey.map((k, i) => ({[k]: unmachedValue[i]})))

      res.render("./story.ejs", { unmachedWords : unmachedWords})
    
  },


};