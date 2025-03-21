const UserController = require("../controllers/user.controller");
const express = require("express");
const route = express.Router();

route.post("/auth", UserController.auth);
route.post("/auth/OTP", UserController.verif);

module.exports = route;
