const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// HEROKU
app.use(
  cors({
    credentials: true,
    origin: "https://infallible-agnesi-f06595.netlify.app",
  })
);

// LOCAL
// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./index");
const searchRouter = require("./routes/search");
const initRouter = require("./routes/initData");
const usersRouter = require("./routes/users");
const countriesRouter = require("./routes/countries");
const citiesRouter = require("./routes/cities");
const mailRouter = require("./routes/mail");
const genreRouter = require("./routes/genre");
const subGenreRouter = require("./routes/sub_genre");
const professionRouter = require("./routes/profession");
const authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/search", searchRouter);
app.use("/initData", initRouter);
app.use("/users", usersRouter);
app.use("/countries", countriesRouter);
app.use("/cities", citiesRouter);
app.use("/mail", mailRouter);
app.use("/genre", genreRouter);
app.use("/sub_genre", subGenreRouter);
app.use("/profession", professionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log("APP ERROR HANDLER");
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

module.exports = app;
