const jwt = require("jsonwebtoken");
const ErrorModel = require("../Model/ErrorModel");

const Auth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authorization failed");
    }
    const decodedtoken = jwt.decode(token, "SuperSecret");
    req.userData = {
      userId: decodedtoken.userId,
      username: decodedtoken.username,
      role: decodedtoken.role,
    };
    next();
  } catch {
    return next(new ErrorModel("Authorization Failed", 403));
  }
};

module.exports = Auth;
