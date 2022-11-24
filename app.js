var express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const mongoose = require("mongoose");
const config = require("./src/config/env.json");

var indexRouter = require("./src/routes/indexRoutes");
var chargesRouter = require("./src/routes/chargesRouter");
var balanceRouter = require("./src/routes/balanceRouter");
var authRouter = require("./src/routes/auth");

const app = express();

app.use(express.json());

app.use("/wallets-manager", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", indexRouter);
app.use("/charge", chargesRouter);
app.use("/balance", balanceRouter);
app.use("/auth", authRouter);

mongoose
  .connect(config.url)
  .then(
    app.listen(config.porta, () => {
      console.log("API esta truvando meno");
    })
  )
  .catch((error) => {
    console.log("Confere essa poha meno", error.message);
  });

module.exports = app;
