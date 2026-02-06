const { userFetchOneSrv, userCreateSrv } = require("../services/user.service");
const bcrypt = require("bcrypt");

module.exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const exist = await userFetchOneSrv(email);
    if (exist) {
      throw new Error("This Email is already associated with another User");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const db_res = await userCreateSrv({name, email, phone, password:hashPassword})

    res.status(201).json({
        message:"user created successfully",
        success: true,
        created_user: db_res
    })

  } catch (err) {
    next(err);
  }
};
