const ErrorModel = require("../Model/ErrorModel");
const Order = require("../Model/Order");
const Item = require("../Model/Item");
const Table = require("../Model/Tables");
const { default: mongoose } = require("mongoose");

const getOrderById = async (req, res, next) => {
  const orderid = req.params.id;
  let identifiedOrder;
  try {
    identifiedOrder = await Order.findById(orderid).populate(tems.id).populate({
      path: "Table.id",
      select: "-inactive",
    });
  } catch {
    return next(new ErrorModel("Something went wrong", 500));
  }

  if (!identifiedOrder || identifiedOrder.length === 0) {
    return next(new ErrorModel("could not find the order", 404));
  }

  res.json({ order: identifiedOrder });
};

const createOrder = async (req, res, next) => {
  const { customername, tableid, paid, paymentMode, items, totalamount, Date } =
    req.body;
  const newOrder = new Order({
    customername,
    table: tableid,
    paid,
    paymentMode,
    totalamount,
    Date,
    items: items.map((item) => {
      return { item: item.id, quantity: item.quantity };
    }),
  });
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newOrder.save({ session: sess });
    await Table.findByIdAndUpdate(tableid, { status: "O" }, { session: sess });
    await sess.commitTransaction();
    sess.endSession();
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  let obj;
  try {
    obj = await Order.findById(newOrder._id)
      .populate({
        path: "items.item",
        select: "item price id urlpath",
      })
      .populate({
        path: "table",
        select: "Tablename id",
      });
  } catch (err) {
    return next(new ErrorModel(err, 404));
  }

  res.status(201).json({
    message: "Order placed",
    orderId: newOrder.id,
    Order: obj.toObject({ getters: true }),
  });
};

const updateOrder = async (req, res, next) => {
  const orderId = req.params.id;

  const { paid, paymentMode } = req.body;
  let identifiedOrder;
  try {
    identifiedOrder = await Order.findById(orderId);
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }
  if (!identifiedOrder || identifiedOrder.length === 0) {
    return next(new ErrorModel("could not find the order", 404));
  }

  identifiedOrder.paid = paid;
  identifiedOrder.paymentMode = paymentMode;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await identifiedOrder.save({ session: sess });
    await Table.findByIdAndUpdate(
      identifiedOrder.table,
      { status: "S" },
      { session: sess }
    );
    await sess.commitTransaction();
    sess.endSession();
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  let obj;
  try {
    obj = await Order.findById(identifiedOrder._id)
      .populate({
        path: "items.item",
        select: "item price id urlpath",
      })
      .populate({
        path: "table",
        select: "Tablename id",
      });
  } catch (err) {
    return next(new ErrorModel(err, 404));
  }

  res.json({
    message: "Payment Success",
    order: obj.toObject({ getters: true }),
  });
};

const getAllOrder = async (req, res, next) => {
  let identifiedOrder;
  try {
    identifiedOrder = await Order.find()
      .populate({
        path: "items.item",
        select: "-inactive",
      })
      .populate({
        path: "table",
        select: "-inactive",
      });
  } catch (err) {
    return next(new ErrorModel(err, 500));
  }

  if (!identifiedOrder || identifiedOrder.length === 0) {
    return next(new ErrorModel("could not find the order", 404));
  }

  res.json({
    message: "Success",
    order: identifiedOrder.map((ord) => ord.toObject({ getters: true })),
  });
};

exports.getOrderById = getOrderById;
exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.getAllOrder = getAllOrder;
