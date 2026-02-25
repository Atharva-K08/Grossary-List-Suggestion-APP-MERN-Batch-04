const jwt = require("jsonwebtoken");
module.exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing",
      success: false,
    });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Token missing",
      success: false,
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.PrivateKey);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log("Token verification failed:", err);
    return res.status(401).json({
      message: "Invalid token",
      success: false,
    });
  }
};
