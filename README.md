# 📦 StockFlow – Inventory Management System (B2B SaaS)

## 🚀 Overview

StockFlow is a backend system designed for small and medium businesses to manage inventory across multiple warehouses and suppliers.

This project was built as part of a case study and focuses on:

* Reliable product creation
* Scalable database design
* Intelligent low-stock alerting system

---

## 🎯 Features

* ✅ Create and manage products with unique SKUs
* 🏢 Multi-warehouse inventory tracking
* ⚠️ Low stock alert system
* 🔗 Scalable relational database design
* 🧠 Business logic with real-world assumptions

---

## 🧩 Tech Stack

* **Backend:** Node.js + Express.js
* **Database:** SQLite
* **ORM:** Sequelize
* **API Testing:** Postman

---

## 📂 Project Structure

```
stockflow/
│
├── app.js
├── package.json
├── README.md
├── .gitignore
│
├── config/
│   └── db.js
│
├── models/
│   ├── Product.js
│   ├── Inventory.js
│   └── index.js
│
├── routes/
│   ├── productRoutes.js
│   └── alertRoutes.js
│
├── docs/
│   ├── part1_code_review.md
│   ├── part2_database_design.md
│   └── part3_api.md
```

---

## ▶️ How to Run Locally

```bash
git clone https://github.com/your-username/stockflow
cd stockflow

npm install
node app.js
```

Server will start at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🟢 Create Product

```
POST /api/products
```

**Request Body:**

```json
{
  "name": "Laptop",
  "sku": "LAP123",
  "price": 50000,
  "warehouse_id": 1,
  "initial_quantity": 5
}
```

---

### 🔵 Low Stock Alerts

```
GET /api/companies/{company_id}/alerts/low-stock
```

**Response Example:**

```json
{
  "alerts": [
    {
      "product_id": 1,
      "product_name": "Laptop",
      "current_stock": 5,
      "threshold": 10
    }
  ],
  "total_alerts": 1
}
```

---

## 🧠 Key Design Decisions

* **Separated Product & Inventory**
  → Supports multiple warehouses per product

* **Unique SKU Constraint**
  → Prevents duplication and ensures consistency

* **Transaction Handling**
  → Avoids partial writes (data integrity maintained)

* **Modular Structure**
  → Scalable and maintainable codebase

---

## ⚠️ Assumptions

* Default low-stock threshold = 10
* Recent sales logic assumed (not fully implemented)
* Each product is linked to at least one warehouse
* Supplier logic is simplified for this implementation

---

## 🚧 Future Improvements

* Add supplier integration in API response
* Implement inventory logs (audit trail)
* Add authentication (JWT-based)
* Optimize queries using joins
* Add pagination and filtering

---

## 📚 Documentation

Detailed explanations are available in:

* 📄 `docs/part1_code_review.md`
* 📄 `docs/part2_database_design.md`
* 📄 `docs/part3_api.md`

---

## 👤 Author

**Bhumika Sinha**

---

## ⭐ Final Note

This project demonstrates backend fundamentals including:

* API design
* Database modeling
* Error handling
* Scalability thinking

Built with a focus on real-world system design rather than just functionality.
