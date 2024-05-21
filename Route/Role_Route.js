const express = require("express");
const roleController = require("../controller/Role_controller");
const router = express.Router();

router.get("/", roleController.getAllRoles);
router.post("/", roleController.createRole);
router.patch("/:id", roleController.updateRole);

module.exports = router;
