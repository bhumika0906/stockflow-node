const express = require("express");
const router = express.Router();
const { Product, Inventory } = require("../models");

router.get("/companies/:company_id/alerts/low-stock", async (req, res) => {
  const alerts = [];

  const items = await Inventory.findAll({ include: Product });

  items.forEach((item) => {
    if (item.quantity < item.Product.threshold) {
      alerts.push({
        product_id: item.Product.id,
        product_name: item.Product.name,
        current_stock: item.quantity,
        threshold: item.Product.threshold,
      });
    }
  });

  res.json({
    alerts,
    total_alerts: alerts.length,
  });
});

module.exports = router;