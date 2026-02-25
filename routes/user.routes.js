const express = require("express");
const {
  registerUser,
  loginUser,
  fetchUsers,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/", fetchUsers);


module.exports = router;
