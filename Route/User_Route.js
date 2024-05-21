const express = require("express");
const userController = require("../controller/User_Controller");
const router = express.Router();
const userImage = require("../middleware/userImage");

router.get("/", userController.getAllUsers);
router.post("/", userImage.single("image"), userController.createUser);
router.patch("/:id", userImage.single("image"), userController.updateUser);

module.exports = router;
