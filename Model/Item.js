const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: { type: String, require: true, unique: true },
  price: { type: Number, require: true, default: 100.0 },
  inactive: { type: Number, require: true, defalut: 0 },
  gpid: { type: mongoose.Types.ObjectId, require: true, ref: "Group" },
  urlpath: { type: String, require: true },
});

mongoose.plugin(mongooseValidator);

module.exports = mongoose.model("Item", itemSchema);
