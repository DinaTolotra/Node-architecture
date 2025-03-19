const Welcome = require("./controllers/welcome.controller");
const express = require("express");
const app = express();

app.use(Welcome.index);

module.exports = app;
