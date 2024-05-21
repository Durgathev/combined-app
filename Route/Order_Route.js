const express = require("express");
const orderController = require("../controller/Order_controller");
const router = express.Router();

router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.patch("/:id", orderController.updateOrder);

module.exports = router;
