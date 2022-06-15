let path = require("path");

// var fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");

//static folder path
app.use(express.static(path.resolve(__dirname, "public")));

const user = require("./router/user");
const admin = require("./router/admin");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());

app.use("/api/user", user);
app.use("/api/admin", admin);

module.exports = app;
