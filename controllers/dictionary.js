const Dictionary = require("../models/Dictionary");


module.exports = {
    getDictionary: (req, res) => {
        const words = Dictionary.list
        res.render("dictionary.ejs", {words : words} );
    },
}

//router.get("/dictionary", dictionaryController.getDictionary);
// router.post("/dictionary", dictionaryController.postDictionary);
// router.delete("/dictionary", dictionaryController.deleteDictionary);