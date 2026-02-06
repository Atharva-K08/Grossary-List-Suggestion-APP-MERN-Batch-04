const productModel = require("../models/product.model");

module.exports.productCreateSrv = async (data) => {
  return await productModel.create(data);
};

module.exports.productFetchOneSrv = async (email) => {
  return await productModel.findOne({ email });
};

module.exports.productFetchOneSrvWithID = async (id) => {
  return await productModel.findById(id);
};

module.exports.productsFetchSrv = async () => {
  return await productModel.find();
};

module.exports.productUpdateSrv = async (id, data) => {
  return await productModel.findByIdAndUpdate(id, data, { new: true });
};

module.exports.productDeleteSrv = async (id) => {
  return await productModel.findByIdAndDelete(id);
};
