const ErrorModel = require("../Model/ErrorModel");
const roles = require("../Model/Role");

const getAllRoles = async (req, res, next) => {
  let Roles;
  try {
    Roles = await roles.find();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  if (!Roles || Roles.length === 0) {
    return next(new ErrorModel("No Roles found", 404));
  }

  res.json({
    roles: Roles.map((obj) => obj.toObject({ getters: true })),
  });
};

const createRole = async (req, res, next) => {
  const { Role, inactive } = req.body;
  const newRole = new roles({
    Role,
    inactive,
  });
  try {
    await newRole.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "Role Created",
    role: newRole.toObject({ getters: true }),
  });
};

const updateRole = async (req, res, next) => {
  const id = req.params.id;
  const { Role, inactive } = req.body;
  let identified;
  try {
    identified = await roles.findById(id);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  if (!identified || identified.length === 0) {
    return next(new ErrorModel("could not find the role", 404));
  }

  identified.Role = Role;
  identified.inactive = inactive;

  try {
    await identified.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "Role Updated",
    role: identified.toObject({ getters: true }),
  });
};

exports.getAllRoles = getAllRoles;
exports.createRole = createRole;
exports.updateRole = updateRole;
