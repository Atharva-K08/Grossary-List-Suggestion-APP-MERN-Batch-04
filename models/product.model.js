const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
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
