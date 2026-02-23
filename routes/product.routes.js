const express = require("express");
const {
  createProductController,
  getProductsController,
  updateProductController,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProductController);
router.get("/", getProductsController);
router.put("/:id", updateProductController);

module.exports = router;
