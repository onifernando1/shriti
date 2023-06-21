var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const paintingsRouter = require("./routes/paintings");
var app = express();
const cors = require("cors");
const mongoDb = process.env.SECRET_KEY;
mongoose.connect(mongoDb, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo connection error"));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:9000",
    credentials: true,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/paintings", paintingsRouter);

app.get("/config", (req, res) => {
  res.json({
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    public_key: process.env.PUBLIC_KEY,
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
