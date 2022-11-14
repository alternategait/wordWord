const fs = require("fs");
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
    while (i < list.length-1){
      if (list[i] == req.body.word){
        list.pop();
        console.error("Duplicate entry")
        break;
      } else{
        i++
      }}
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
    let deletePosition = list.indexOf(req.body.word)
    console.log(deletePosition)
    if (deletePosition === -1){
      console.error("Entry not found")
    }else{
      list.splice(deletePosition, 1)
      let txtList = list.join("\n");
      fs.writeFile('./dictionary.txt', txtList, err => {
        if (err) {
          console.error(err);
        }
      });
    }
    res.redirect("/dictionary");
  },

  postStory:(req, res) =>{
    let story = req.body.story;
    let storyArray = story.toLowerCase().split(" ");
    let unmachedWords = [];
    let notListWords = [];
    let unpuncuateNotListWords = [];

    storyArray.forEach(el => {if(list.indexOf(el) == -1){ notListWords.push(el)};});
    
    function punctuationFilter(unmatchedEntry){
      let stripPunctuation = notListWords.map(el => el.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,""));
      stripPunctuation.forEach(el => {
        if(list.indexOf(el) == -1){ 
          unpuncuateNotListWords.push(el)};
        })
        
    };

    punctuationFilter(notListWords);



    res.render("./story.ejs")
  },

};


