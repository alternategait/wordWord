const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/dictionary", homeController.getDictionary);
router.post("/dictionary", homeController.postDictionary);
router.delete("/dictionary", homeController.deleteDictionary);
router.post("/story", homeController.postStory);

module.exports = router;

