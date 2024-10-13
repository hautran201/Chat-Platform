const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routers
app.get("/", (req, res) => {
  console.log("Welcome to Chat-Dino.");
  return res.status(200).json({
    status: "200",
    message: "Welcome to Chat-Dino.",
    metaData: req.body,
  });
});

// handle error
app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  error.code = "404";
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;

  return res.status(statusCode).json({
    status: "Error",
    code: err.code || "xxx",
    message: err.message || "Internal Server Error",
    // stack: err.stack,
  });
});

module.exports = app;
