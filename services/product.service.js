const productModel = require("../models/product.model");

module.exports.productCreateSrv = async (data) => {
  return await productModel.create(data);
};

module.exports.productFetchOneSrv = async (productName) => {
  return await productModel.findOne({ productName });
};

module.exports.productFetchOneSrvWithID = async (id) => {
  return await productModel.findOne({_id: id});
};

module.exports.productsFetchSrv = async (userId) => {
  return await productModel.find({userId});
};

module.exports.productUpdateSrv = async (id, data) => {
  return await productModel.findByIdAndUpdate(id, data, { new: true });
};

module.exports.productDeleteSrv = async (id) => {
  return await productModel.findByIdAndDelete(id);
};
