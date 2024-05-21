const express = require("express");
const categoryController = require("../controller/Category_controller");
const router = express.Router();

router.get("/", categoryController.getAllCategory);
router.post("/", categoryController.createCategory);
router.patch("/:id", categoryController.updateCategory);

module.exports = router;
