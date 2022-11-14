const express = require("express");
const app = express();
// const session = require("express-session");
const methodOverride = require("method-override");
// const flash = require("express-flash");
// const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const fs = require("fs");

const list =  fs.readFileSync('./dictionary.txt', 'utf8').split(/\r?\n/);
const story = fs.readFileSync('./story.txt', 'utf8').split(" ");

// console.log(story);

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


//Connect To Database
// connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
// app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));


//Use flash messages for errors, info, ect...
// app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
