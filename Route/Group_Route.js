const express = require("express");
const groupController = require("../controller/Group_controller");

const router = express.Router();

router.get("/", groupController.getAllGroup);
router.post("/", groupController.createGroup);
router.patch("/:id", groupController.updateGrouup);

module.exports = router;
