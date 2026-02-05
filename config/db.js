const { mongoose } = require("mongoose");

const connect_DB = () => {
  mongoose
    .connect(
      "mongodb+srv://atharvakumbhar08:k4ywPyRcdZEfUYJi@cluster0.6u1nu.mongodb.net/grossarylist",
    )
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch(() => {
      console.log("Error Occured! Connection Failed at DB");
    });
};

module.exports = connect_DB;
