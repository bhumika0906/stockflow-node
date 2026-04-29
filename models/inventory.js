const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inventory = sequelize.define("Inventory", {
  product_id: DataTypes.INTEGER,
  warehouse_id: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
});

module.exports = Inventory;