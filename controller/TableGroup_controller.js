const mongoose = require("mongoose");
const TableGroups = require("../Model/TableGroup");
const ErrorModel = require("../Model/ErrorModel");

const getTableGroup = async (req, res, next) => {
  let tableGrps;
  try {
    tableGrps = await TableGroups.find({});
  } catch {
    return next(new ErrorModel("Something Went Wrong", 500));
  }

  if (!tableGrps || tableGrps.length === 0) {
    return next(new ErrorModel("No records found", 404));
  }

  res.json({
    TableGroup: tableGrps.map((tg) => tg.toObject({ getters: true })),
  });
};

const createGroup = async (req, res, next) => {
  const { Groupname, inactive } = req.body;

  const newGroup = new TableGroups({
    Groupname,
    inactive,
  });

  try {
    await newGroup.save();
  } catch {
    return next(new ErrorModel("Something Went Wrong", 500));
  }
  res.status(201).json({
    message: "Table Group Created",
    tablegroup: newGroup.toObject({ getters: true }),
  });
};

const updateTableGroup = async (req, res, next) => {
  const { Groupname, inactive } = req.body;
  const id = req.params.id;

  let identifiedTablegroup;

  try {
    identifiedTablegroup = await TableGroups.findById(id);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  if (!identifiedTablegroup || identifiedTablegroup.length === 0) {
    return next(
      new ErrorModel("Could not find the table group for the provided id", 404)
    );
  }

  identifiedTablegroup.Groupname = Groupname;
  identifiedTablegroup.inactive = inactive;
  try {
    await identifiedTablegroup.save();
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  res.json({
    message: "Table Group Updated",
    tablegroup: identifiedTablegroup.toObject({ getters: true }),
  });
};

const getById = async (req, res, next) => {
  Gpid = req.params.id;
  let identifiedGroup;
  try {
    identifiedGroup = await TableGroups.findById(Gpid);
  } catch {
    return next(new ErrorModel("Something Went Wrong", 500));
  }

  if (!identifiedGroup || identifiedGroup.length === 0) {
    return next(new ErrorModel("Cloud not find the grp", 404));
  }

  res.json({ identifiedGroup: identifiedGroup });
};

exports.getTableGroup = getTableGroup;
exports.createGroup = createGroup;
exports.getById = getById;
exports.updateTableGroup = updateTableGroup;
