// Initializes Node.js packages
const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");

//  Initialize express.js and define port
const app = express();
const PORT = process.env.PORT || 3000

// set up the express app to handle data parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json);

// set up handlebars.js

app.engine("handlebars", exphbs9({ defaultLayout: "main"}));
app.set("view engine", "handlebars")
