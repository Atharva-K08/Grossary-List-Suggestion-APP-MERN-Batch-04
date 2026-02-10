const {
  userFetchOneSrv,
  userCreateSrv,
  usersFetchSrv,
} = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const exist = await userFetchOneSrv(email);
    if (exist) {
      throw new Error("This Email is already associated with another User");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const db_res = await userCreateSrv({
      name,
      email,
      phone,
      password: hashPassword,
    });

    res.status(201).json({
      message: "user created successfully",
      success: true,
      created_user: db_res,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const db_user = await userFetchOneSrv(email);
    if (!db_user) {
      throw new Error("invalid credentials!");
    }
    const match = await bcrypt.compare(password, db_user.password);
    if (!match) {
      throw new Error("invalid credentials!");
    }
    const token = jwt.sign({ id: db_user._id }, process.env.PrivateKey);
    res.status(200).json({
      message: "login successfull",
      success: true,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.fetchUsers = async (req, res, next) => {
  try {
    const userlist = await usersFetchSrv();
    if (userlist.length == 0) {
      throw new Error("Users not Found")
    }
    res.status(200).json({
      message: "Users Found",
      success: true,
      users: userlist,
    });
  } catch (err) {
    next(err);
  }
};
