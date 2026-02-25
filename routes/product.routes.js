const express = require("express");
const {
  createProductController,
  getProductsController,
  updateProductController,
  deleteProductController,
} = require("../controllers/product.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, createProductController);
router.get("/", authMiddleware, getProductsController);
router.put("/:id", authMiddleware, updateProductController);
router.delete("/:id", authMiddleware, deleteProductController);

module.exports = router;
