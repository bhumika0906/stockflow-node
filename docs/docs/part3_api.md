# Part 3: Low Stock Alerts API

## Overview

This API returns low-stock alerts for products across all warehouses of a company.  
It helps businesses identify products that need restocking.

---

## Endpoint

GET /api/companies/{company_id}/alerts/low-stock

---

## Logic / Approach

1. Fetch all inventory items for the company’s warehouses.
2. Join inventory with product data.
3. Check if product has recent sales activity.
4. Compare current stock with product threshold.
5. If stock is below threshold → generate alert.
6. Include supplier information for reordering.

---

## Sample Response

```json
{
  "alerts": [
    {
      "product_id": 1,
      "product_name": "Laptop",
      "sku": "LAP123",
      "warehouse_id": 1,
      "warehouse_name": "Main Warehouse",
      "current_stock": 5,
      "threshold": 10,
      "days_until_stockout": 12,
      "supplier": {
        "id": 1,
        "name": "ABC Supplier",
        "contact_email": "orders@abc.com"
      }
    }
  ],
  "total_alerts": 1
}