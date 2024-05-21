const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const ErrorModel = require("./Model/ErrorModel");
const loginRoute = require("./Route/Login_Route");
const tableGroupRouter = require("./Route/TableGroup_Route");
const TableRouter = require("./Route/Table_Route");
const categoryRouter = require("./Route/Category_Route");
const GroupRouter = require("./Route/Group_Route");
const itemRouter = require("./Route/Item_Route");
const orderRouter = require("./Route/Order_Route");
const roleRouter = require("./Route/Role_Route");
const userRouter = require("./Route/User_Route");
const Auth = require("./middleware/Auth");

const app = express();
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: path.resolve(__dirname, envFile) });

const config = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lnwugki.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`; // .env file ku move pnanum

app.use("/upload/images", express.static(path.join("upload", "images")));
app.use("/upload/userimage", express.static(path.join("upload", "userimage")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT"
  );

  next();
});

app.use(bodyParser.json());

app.use("/Login", loginRoute);

// /** protect the below routes by using token, the roures are accessble only with valid token, can use it in Route files -- router.use(Auth) */
// app.use(Auth);

app.use("/TableGroup", tableGroupRouter);
app.use("/Table", TableRouter);
app.use("/Category", categoryRouter);
app.use("/Group", GroupRouter);
app.use("/Items", itemRouter);
app.use("/Order", orderRouter);
app.use("/Role", roleRouter);
app.use("/User", userRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.use((req, res, next) => {
//   return next(new ErrorModel("Cloud not find the route", 404));
// });

/** handling errors */

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message } || { message: "unknown error" });
});

mongoose
  .connect(config)
  .then(() => {
    app.listen(5000, () => {
      console.log("Listening to port 5000 with mongoose");
      console.log(process.env.NODE_ENV);
    });
  })
  .catch((reason) => console.log(reason));
