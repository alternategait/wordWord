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
    // let cleanedEntities = storyArray.forEach(
    // console.log(storyArray, unmachedWords)
    function punctuationFilter(unmatchedEntry){
      let i = 0;
      let dotFilter = [];
      let bangFilter = [];
      let questionFilter = [];
      let frontQuoteFilter = [];
      let backQuoteFilter = [];
      let frontApostropheFilter = [];
      let backApostropheFilter = [];
      let colonFilter = [];
      let semiColonFilter = [];
      let atTheEnd = []
      while(i < unmatchedEntry.length){
        console.log(unmatchedEntry[i])
          // strip out .
        if (unmatchedEntry[i].endsWith('.')){
          dotFilter = unmatchedEntry[i].split('');
          dotFilter.pop();
          atTheEnd.push(dotFilter.join(""));
          // strip out !
        }else if(unmatchedEntry[i].endsWith('!')){
          bangFilter = unmatchedEntry[i].split('');
          bangFilter.pop();
          atTheEnd.push(bangFilter.join(""));
            // strip out ?
        }else if(unmatchedEntry[i].endsWith('!')){
          questionFilter = unmatchedEntry[i].split('');
          questionFilter.pop();
          atTheEnd.push(questionFilter.join(""));
            // strip out "
        }else if(unmatchedEntry[i].endsWith('"')){
          backQuoteFilter = unmatchedEntry[i].split('');
          backQuoteFilter.pop();
          atTheEnd.push(backQuoteFilter.join(""));
        }else if(unmatchedEntry[i].startsWith('"')){
          frontQuoteFilter = unmatchedEntry[i].split('');
          frontQuoteFilter.shift();
          atTheEnd.push(frontQuoteFilter.join(""));
          // strip out '
        }else if(unmatchedEntry[i].startsWith("'")){
          frontApostropheFilter = unmatchedEntry[i].split('');
          frontApostropheFilter.shift();
          atTheEnd.push(frontApostropheFilter.join(""));
        }else if(unmatchedEntry[i].endsWith("'")){
          backApostropheFilter = unmatchedEntry[i].split('');
          backApostropheFilter.pop();
          atTheEnd.push(backApostropheFilter.join(""));
          // strip out :
        }else if(unmatchedEntry[i].endsWith(":")){
          colonFilter = unmatchedEntry[i].split('');
          colonFilter.pop();
          atTheEnd.push(colonFilter.join(""));
          // strip out ;
        }else if(unmatchedEntry[i].endsWith(";")){
          semiColonFilter = unmatchedEntry[i].split('');
          semiColonFilter.pop();
          atTheEnd.push(semiColonFilter.join(""));
        }else{ atTheEnd.push(unmatchedEntry[i])}
      i++
      }
      atTheEnd.forEach(el => {
        if(list.indexOf(el) == -1){ 
          unpuncuateNotListWords.push(el)
        };
      });
          console.log(unmatchedEntry, atTheEnd, unpuncuateNotListWords);
    };

    punctuationFilter(notListWords);


    res.render("./story.ejs")
  },

};


