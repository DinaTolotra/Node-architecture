const Welcome = require("./controllers/welcome.controller");
const counter = require("./middlewares/counter");
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json());
app.use(counter);
app.get("/", Welcome.index);
app.get("/count", Welcome.count);
app.post("/recupere", Welcome.recupere)
app.post("/verifierotp", Welcome.verifierotp)

module.exports = app;
