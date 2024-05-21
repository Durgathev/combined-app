const express = require("express");
const {
  getTableGroup,
  createGroup,
  getById,
  updateTableGroup,
} = require("../controller/TableGroup_controller");

const router = express.Router();

router.get("/", getTableGroup);
router.post("/", createGroup);
router.get("/:id", getById);
router.patch("/:id", updateTableGroup);

module.exports = router;
