const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customername: { type: String, require: true },
  table: { type: mongoose.Types.ObjectId, require: true, ref: "Table" },
  paid: { type: Boolean, require: true },
  totalamount: { type: Number, require: true },
  paymentMode: { type: String, require: true },
  Date: { type: String, require: true },
  items: [
    {
      item: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Item",
      },
      quantity: Number,
    },
  ],
});

OrderSchema.plugin(mongooseValidator);
module.exports = mongoose.model("Order", OrderSchema);
