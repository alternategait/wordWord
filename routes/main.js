const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
// const storyController = require ("../controllers/story");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/dictionary", homeController.getDictionary);
router.post("/dictionary", homeController.postDictionary);
router.post("/dictionary/delete", homeController.deleteDictionary);
// router.post("/story", storyController.postStory);






module.exports = router;

