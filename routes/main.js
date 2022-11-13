const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const dictionaryController = require("../controllers/dictionary.js");
// const storyController = require ("../controllers/story");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
// router.get("/dictionary", dictionaryController.getDictionary);
// router.post("/dictionary", dictionaryController.postDictionary);
// router.delete("/dictionary", dictionaryController.deleteDictionary);
// router.post("/story", storyController.postStory);





// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);

module.exports = router;

