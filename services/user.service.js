const userModel = require("../models/user.model");

module.exports.userCreateSrv = async (data) => {
  return await userModel.create(data);
};

module.exports.userFetchOneSrv = async (email) => {
  return await userModel.findOne({ email }).select("+password");
};

module.exports.userFetchOneSrvWithID = async (id) => {
  return await userModel.findById(id);
};

module.exports.usersFetchSrv = async () => {
  return await userModel.find();
};

module.exports.userUpdateSrv = async (id, data) => {
  return await userModel.findByIdAndUpdate(id, data, { new: true });
};

module.exports.userDeleteSrv = async (id) => {
  return await userModel.findByIdAndDelete(id);
};
