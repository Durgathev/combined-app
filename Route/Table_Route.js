const express = require("express");
const router = express.Router();
const tableController = require("../controller/Table_controller");

router.get("/", tableController.getAllTables);
router.post("/", tableController.createTable);
router.get("/:id", tableController.getById);
router.patch("/:id", tableController.updateTableStatus);
router.patch("/update/:id", tableController.updateTable);

module.exports = router;
