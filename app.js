const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const alertRoutes = require("./routes/alertRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", productRoutes);
app.use("/api", alertRoutes);

sequelize.sync().then(() => {
  console.log("Database ready");
  app.listen(5000, () => console.log("Server running on port 5000"));
});