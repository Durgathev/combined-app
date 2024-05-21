const ErrorModel = require("../Model/ErrorModel");
const Categorys = require("../Model/Category");

const getAllCategory = async (req, res, next) => {
  let allCatrgory;
  try {
    // allCatrgory = await Categorys.find({ inactive: 0 });
    allCatrgory = await Categorys.find();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  if (!allCatrgory || allCatrgory.length === 0) {
    return next(new ErrorModel("No categories found", 404));
  }

  res.json({
    Category: allCatrgory.map((obj) => obj.toObject({ getters: true })),
  });
};

const createCategory = async (req, res, next) => {
  const { Category, inactive } = req.body;
  const newCategory = new Categorys({
    Category,
    inactive,
  });
  try {
    await newCategory.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "Category Created",
    category: newCategory.toObject({ getters: true }),
  });
};

const updateCategory = async (req, res, next) => {
  const id = req.params.id;
  const { Category, inactive } = req.body;
  let identified;
  try {
    identified = await Categorys.findById(id);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  if (!identified || identified.length === 0) {
    return next(new ErrorModel("could not find the category", 404));
  }

  identified.Category = Category;
  identified.inactive = inactive;

  try {
    await identified.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "Category Updated",
    category: identified.toObject({ getters: true }),
  });
};

exports.getAllCategory = getAllCategory;
exports.createCategory = createCategory;
exports.updateCategory = updateCategory;
