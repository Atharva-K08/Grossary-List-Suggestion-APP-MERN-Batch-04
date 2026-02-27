const express = require("express");
const {
  registerUser,
  loginUser,
  fetchUsers,
  getUserProfile,
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile);
// router.get("/", fetchUsers);

module.exports = router;
