const express = require("express");
const router = express.Router();
const { Product, Inventory } = require("../models");
const sequelize = require("../config/db");

router.post("/products", async (req, res) => {
  const data = req.body;

  if (!data.name || !data.sku) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const existing = await Product.findOne({ where: { sku: data.sku } });
  if (existing) {
    return res.status(400).json({ error: "SKU already exists" });
  }

  const t = await sequelize.transaction();

  try {
    const product = await Product.create(
      {
        name: data.name,
        sku: data.sku,
        price: data.price,
      },
      { transaction: t }
    );

    await Inventory.create(
      {
        product_id: product.id,
        warehouse_id: data.warehouse_id,
        quantity: data.initial_quantity || 0,
      },
      { transaction: t }
    );

    await t.commit();

    res.status(201).json({ message: "Product created", id: product.id });
  } catch (err) {
    await t.rollback();
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;