const welcome = require("./routes/welcome.routes");
const auth = require("./routes/auth.routes");

const counter = require("./middlewares/counter");
const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(counter);
app.use(welcome);
app.use(auth);

module.exports = app;
