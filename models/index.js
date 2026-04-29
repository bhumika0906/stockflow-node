const Product = require("./Product");
const Inventory = require("./Inventory");

Product.hasMany(Inventory, { foreignKey: "product_id" });
Inventory.belongsTo(Product, { foreignKey: "product_id" });

module.exports = { Product, Inventory };