const express = require("express");
const loginController = require("../controller/Login_controller");
const router = express.Router();

router.post("/", loginController.userLogin);

module.exports = router;
