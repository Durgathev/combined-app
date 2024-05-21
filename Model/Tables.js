const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  Tablename: { type: String, require: true, unique: true },
  GroupId: { type: mongoose.Types.ObjectId, require: true, ref: "TableGroup" },
  capacity: { type: Number, require: true },
  inactive: { type: Number, require: true, default: 0 },
  status: { type: String, require: true, default: "A" },
});

TableSchema.plugin(mongooseValidator);

module.exports = mongoose.model("Table", TableSchema);
