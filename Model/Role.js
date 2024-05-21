const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  Role: { type: String, require: true, unique: true },
  inactive: { type: Number, require: true, default: 0 },
});

RoleSchema.plugin(mongooseValidator);

module.exports = mongoose.model("Role", RoleSchema);
