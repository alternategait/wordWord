const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
// const storyController = require ("../controllers/story");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/dictionary", homeController.getDictionary);
router.post("/dictionary", homeController.postDictionary);
router.delete("/dictionary", homeController.deleteDictionary);
// router.get("/story", homeController.getStory);
router.post("/story", homeController.postStory);






module.exports = router;

