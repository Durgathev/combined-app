const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const TableGroupSchema = new Schema({
  Groupname: { type: String, require: true, unique: true },
  inactive: { type: Number, default: 0, require: true },
});

TableGroupSchema.plugin(mongooseValidator);

module.exports = mongoose.model("TableGroup", TableGroupSchema);
