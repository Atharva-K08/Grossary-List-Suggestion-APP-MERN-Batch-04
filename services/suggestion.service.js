const suggestionModel = require("../models/suggestion.model");

module.exports.suggestionCreateSrv = async (data) => {
  return await suggestionModel.create(data);
};

module.exports.suggestionFetchOneSrv = async (email) => {
  return await suggestionModel.findOne({ email });
};

module.exports.suggestionFetchOneSrvWithID = async (id) => {
  return await suggestionModel.findById(id);
};

module.exports.suggestionsFetchSrv = async () => {
  return await suggestionModel.find();
};

module.exports.suggestionUpdateSrv = async (id, data) => {
  return await suggestionModel.findByIdAndUpdate(id, data, { new: true });
};

module.exports.suggestionDeleteSrv = async (id) => {
  return await suggestionModel.findByIdAndDelete(id);
};
