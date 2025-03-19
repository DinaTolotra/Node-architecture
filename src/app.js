const Welcome = require("./controllers/welcome.controller");
const counter = require("./middlewares/counter");
const express = require("express");
const app = express();

app.use(counter);
app.get("/", Welcome.index);
app.get("/count", Welcome.count);

module.exports = app;
