const express = require("express");
const logger = require("./middleware/logger");
const apiRoutes = require("./routes/api");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(logger);
app.use(express.static("public"));

app.use(apiRoutes);

module.exports = app;
