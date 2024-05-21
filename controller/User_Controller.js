const ErrorModel = require("../Model/ErrorModel");
const users = require("../Model/User");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res, next) => {
  let Users;
  try {
    Users = await users.find({}, "-password");
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  if (!Users || Users.length === 0) {
    return next(new ErrorModel("No Users found", 404));
  }

  res.json({
    users: Users.map((obj) => obj.toObject({ getters: true })),
  });
};

const createUser = async (req, res, next) => {
  const { username, inactive, roleid, password } = req.body;
  const urlpath = req.file.path;

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new httpError(err, 500));
  }

  const newUser = new users({
    username,
    password: hashedPassword,
    roleid,
    inactive,
    urlpath,
  });

  try {
    await newUser.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  const returnUser = {
    _id: newUser._id,
    username: newUser.username,
    inactive: newUser.inactive,
    urlpath: newUser.urlpath,
    roleid: newUser.roleid,
  };

  res.status(201).json({
    message: "User Created",
    user: returnUser,
  });
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { username, inactive, roleid, password } = req.body;
  let identified;
  try {
    identified = await users.findById(id);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  if (!identified || identified.length === 0) {
    return next(new ErrorModel("could not find the user", 404));
  }

  let hashedPassword;
  let isValidPassword = false;
  try {
    isValidPassword = bcrypt.compare(password, identified.password);
    if (!isValidPassword) {
      hashedPassword = bcrypt.hash(password, 12);
    }
  } catch (err) {
    return next(new httpError("Invalid Credentials", 403));
  }

  if (!isValidPassword) {
    identified.password = hashedPassword;
  }
  identified.username = username;
  identified.roleid = roleid;
  identified.inactive = inactive;

  try {
    await identified.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  const returnUser = {
    _id: newUser._id,
    username: newUser.username,
    inactive: newUser.inactive,
    urlpath: newUser.urlpath,
  };

  res.status(201).json({
    message: "User Updated",
    user: returnUser,
  });
};

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.updateUser = updateUser;
