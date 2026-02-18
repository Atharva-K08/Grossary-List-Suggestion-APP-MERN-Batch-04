const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  productCategory: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productUnit: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
