const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  inactive: { type: Number, require: true, defalut: 0 },
  roleid: { type: mongoose.Types.ObjectId, require: true, ref: "Role" },
  urlpath: { type: String, require: true },
});

mongoose.plugin(mongooseValidator);

module.exports = mongoose.model("User", userSchema);
