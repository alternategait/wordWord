const fs = require("fs");
let list =  fs.readFileSync('./dictionary.txt', 'utf8').split(/\r?\n/);
module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getDictionary: (req, res) => {
    res.render("dictionary.ejs", { list: list });
  },
};
