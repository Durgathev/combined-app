const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  Category: { type: String, require: true, unique: true },
  inactive: { type: Number, require: true, default: 0 },
});

CategorySchema.plugin(mongooseValidator);

module.exports = mongoose.model("Category", CategorySchema);
