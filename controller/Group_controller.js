const ErrorModel = require("../Model/ErrorModel");
const Groups = require("../Model/Group");

const getAllGroup = async (req, res, next) => {
  let allgroup;
  try {
    // allgroup = await Groups.find({ inactive: 0 });
    allgroup = await Groups.find();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  if (!allgroup || allgroup.length === 0) {
    return next(new ErrorModel("No Group found", 404));
  }

  res.json({ group: allgroup.map((g) => g.toObject({ getters: true })) });
};

const createGroup = async (req, res, next) => {
  const { Group, CategoryId, inactive } = req.body;
  const newGroup = new Groups({
    Group,
    CategoryId,
    inactive,
  });
  try {
    await newGroup.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res
    .status(201)
    .json({
      message: "ItemGroup Created",
      itemgroup: newGroup.toObject({ getters: true }),
    });
};

const updateGrouup = async (req, res, next) => {
  const id = req.params.id;
  const { Group, CategoryId, inactive } = req.body;
  let identified;
  try {
    identified = await Groups.findById(id);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  if (!identified || identified.length === 0) {
    return next(new ErrorModel("could not find Group", 404));
  }

  identified.Group = Group;
  identified.CategoryId = CategoryId;
  identified.inactive = inactive;

  try {
    await identified.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "ItemGroup Updated",
    itemgroup: identified.toObject({ getters: true }),
  });
};

exports.getAllGroup = getAllGroup;
exports.createGroup = createGroup;
exports.updateGrouup = updateGrouup;
