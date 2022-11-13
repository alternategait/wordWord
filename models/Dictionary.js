module.exports = {
    Dictionary: (req, res) => {
        const words = Dictionary.list
        res.render("dictionary.ejs", {words : words} );
    },
}
