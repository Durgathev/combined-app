const ErrorModel = require("../Model/ErrorModel");
const users = require("../Model/User");
const role = require("../Model/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  const { username, password } = req.body;
  let identifiedUser;

  try {
    identifiedUser = await users
      .findOne({ username: username, inactive: 0 })
      .populate({
        path: "roleid",
        match: { inactive: 0 },
        select: "Role",
      });
  } catch (err) {
    return next(new ErrorModel("Logging in failed", 500));
  }

  if (!identifiedUser || identifiedUser.length === 0) {
    return next(new ErrorModel("Invalid Credentials", 403));
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
  } catch (err) {
    return next(new ErrorModel("Invalid Credentials", 403));
  }

  if (!isValidPassword) {
    return next(new ErrorModel("Invalid Credentials", 403));
  }

  let token;

  try {
    token = jwt.sign(
      {
        userId: identifiedUser.id,
        username: identifiedUser.username,
        role: identifiedUser.roleid.Role,
        urlpath: identifiedUser.urlpath,
      },
      "SuperSecret",
      { expiresIn: "1h" }
    );
  } catch {
    return next(new httpError("Token generation failed", 500));
  }

  res.json({
    message: "Logged In",
    token: token,
    expiresIn: 1,
    user: {
      userId: identifiedUser.id,
      username: identifiedUser.username,
      role: identifiedUser.roleid.Role,
      urlpath: identifiedUser.urlpath,
    },
  });
};

exports.userLogin = userLogin;
