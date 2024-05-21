const express = require("express");
const itemController = require("../controller/Item_controller");
const fileupload = require("../middleware/upload");
const router = express.Router();

router.get("/", itemController.getAllItems);
router.post("/", fileupload.single("image"), itemController.createItem);
router.patch("/:id", itemController.updateItem);

module.exports = router;
