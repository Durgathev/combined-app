const Tables = require("../Model/Tables");
const tableGroups = require("../Model/TableGroup");
const ErrorModel = require("../Model/ErrorModel");

const createTable = async (req, res, next) => {
  const { Tablename, GroupId, capacity, inactive } = req.body;
  const newTable = new Tables({
    Tablename,
    GroupId,
    capacity,
    inactive,
  });

  let group;
  try {
    group = await tableGroups.findById(GroupId);
  } catch {
    return next(new ErrorModel("creating new table failed, try again", 500));
  }

  if (!group) {
    return next(new ErrorModel("Provided Group not found", 404));
  }

  try {
    await newTable.save();
  } catch {
    return next(new ErrorModel("creating new table failed, try again", 500));
  }

  res.status(201).json({
    message: "Table Created ",
    table: newTable.toObject({ getters: true }),
  });
};

const getById = async (req, res, next) => {
  const tid = req.params.id;
  let identifiedTable;
  try {
    identifiedTable = await Tables.findById(tid);
  } catch {
    return next(new ErrorModel("Something Went Wrong", 500));
  }

  if (!identifiedTable || identifiedTable.length === 0) {
    return next(
      new ErrorModel("Cloud not find the table for provided id", 404)
    );
  }

  res.json({ table: identifiedTable });
};

const getAllTables = async (req, res, next) => {
  let identifiedTable;
  try {
    identifiedTable = await Tables.find();
  } catch {
    return next(new ErrorModel("Something Went Wrong", 500));
  }

  if (!identifiedTable || identifiedTable.length === 0) {
    return next(new ErrorModel("no records found", 404));
  }

  res.json({
    table: identifiedTable.map((tb) => tb.toObject({ getters: true })),
  });
};

const updateTableStatus = async (req, res, next) => {
  const tableid = req.params.id;
  let table;
  try {
    table = await Tables.findById(tableid);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  table.status = "A";
  try {
    await table.save();
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  res.json({ message: "updated", id: tableid, code: "200" });
};

const updateTable = async (req, res, next) => {
  const tableid = req.params.id;
  const { Tablename, GroupId, capacity, inactive } = req.body;
  let table;
  try {
    table = await Tables.findById(tableid);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  table.Tablename = Tablename;
  table.GroupId = GroupId;
  table.capacity = capacity;
  table.inactive = inactive;

  try {
    await table.save();
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  res.json({
    message: "Table Updated",
    table: table.toObject({ getters: true }),
  });
};

exports.createTable = createTable;
exports.getById = getById;
exports.getAllTables = getAllTables;
exports.updateTableStatus = updateTableStatus;
exports.updateTable = updateTable;
