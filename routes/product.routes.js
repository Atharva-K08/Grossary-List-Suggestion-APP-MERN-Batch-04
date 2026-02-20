const express = require("express");
const {
  createProductController,
  getProductsController,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProductController);
router.get("/", getProductsController);

module.exports = router;
