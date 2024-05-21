const ErrorModel = require("../Model/ErrorModel");
const items = require("../Model/Item");
const fileupload = require("../middleware/upload");
const fs = require("fs");

const getAllItems = async (req, res, next) => {
  let allItems;
  try {
    allItems = await items.find();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  if (!allItems || allItems.length === 0) {
    return next(new ErrorModel("No Items found", 404));
  }

  res.json({ Items: allItems.map((itm) => itm.toObject({ getters: true })) });
};

const updateItem = async (req, res, next) => {
  const id = req.params.id;
  const { item, price, gpid, inactive } = req.body;
  // const urlpath = req.file.path;
  let identified;

  try {
    identified = await items.findById(id);
  } catch (err) {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  if (!identified || identified.length === 0) {
    return next(new ErrorModel("Could not find the Item", 404));
  }

  // if (!urlpath || urlpath !== null) {
  //   fs.unlink(identified.urlpath, (err) => {
  //     console.log(err);
  //   });
  //   identified.urlpath = urlpath;
  // }

  identified.item = item;
  identified.inactive = inactive;
  identified.gpid = gpid;
  identified.price = price;

  try {
    await identified.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "Item updated",
    item: identified.toObject({ getters: true }),
  });
};
const createItem = async (req, res, next) => {
  const { item, price, gpid, inactive } = req.body;
  const urlpath = req.file.path;
  const newItem = new items({
    item,
    price,
    gpid,
    urlpath,
    inactive,
  });
  try {
    await newItem.save();
  } catch {
    return next(new ErrorModel("Something went Wrong", 500));
  }

  res.status(201).json({
    message: "Item Created",
    item: newItem.toObject({ getters: true }),
  });
};

exports.getAllItems = getAllItems;
exports.createItem = createItem;
exports.updateItem = updateItem;
