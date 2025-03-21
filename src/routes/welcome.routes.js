const Welcomer = require("../controllers/welcome.controller");
const express= require("express");
const route = express.Router();

route.get("/", Welcomer.index);
route.get("/count", Welcomer.count);

module.exports = route;
