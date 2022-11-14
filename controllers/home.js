const fs = require("fs");
let list =  fs.readFileSync('./dictionary.txt', 'utf8').split(/\r?\n/);
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
};

