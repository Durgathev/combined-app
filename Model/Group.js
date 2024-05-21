const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const GroupSchema = new Schema({
  Group: { type: String, require: true, unique: true },
  inactive: { type: Number, require: true, default: 0 },
  CategoryId: { type: mongoose.Types.ObjectId, require: true, ref: "Category" },
});

GroupSchema.plugin(mongooseValidator);

module.exports = mongoose.model("Group", GroupSchema);
