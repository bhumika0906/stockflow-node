# Part 2: Database Design

## Schema
```sql
-- Companies
CREATE TABLE companies (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Warehouses
CREATE TABLE warehouses (
    id INT PRIMARY KEY,
    company_id INT,
    name VARCHAR(255),
    location TEXT
);

-- Products
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    sku VARCHAR(100) UNIQUE,
    price DECIMAL(10,2),
    threshold INT DEFAULT 10
);
-- Inventory
CREATE TABLE inventory (
    id INT PRIMARY KEY,
    product_id INT,
    warehouse_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);

-- Inventory Logs
CREATE TABLE inventory_logs (
    id INT PRIMARY KEY,
    product_id INT,
    warehouse_id INT,
    change INT,
    created_at DATETIME
);

-- Suppliers
CREATE TABLE suppliers (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    contact_email VARCHAR(255)
);

-- Product-Supplier Mapping
CREATE TABLE product_suppliers (
    product_id INT,
    supplier_id INT,
    PRIMARY KEY(product_id, supplier_id)
);

-- Bundles
CREATE TABLE bundles (
    bundle_id INT,
    product_id INT,
    quantity INT
);

## Design Decisions

- Separated **Product** and **Inventory** tables to support multiple warehouses storing the same product.
- Used **SKU as a unique field** to avoid duplicate product entries across the platform.
- Introduced **Inventory table** as a bridge between product and warehouse for scalable stock management.
- Added **foreign key relationships** to maintain data integrity.
- Designed schema keeping scalability in mind for future features like analytics and reporting.

---

## Assumptions

- Each product has a default low-stock threshold (10 if not specified).
- A product can exist in multiple warehouses with different quantities.
- Each warehouse belongs to one company.
- Initial implementation assumes one supplier per product (can be extended later).
- Inventory updates happen through controlled API operations.

---

## Missing Requirements / Questions

- What defines "low stock"? Is it fixed or dynamic per product?
- What is considered "recent sales activity"? (7 days / 30 days?)
- Can a product have multiple suppliers?
- Can inventory be transferred between warehouses?
- Should we track who made inventory changes (user/system)?
- Can bundles contain other bundles (nested bundles)?

---

## Indexing Strategy (Performance Optimization)

- Created indexes on frequently queried fields:
  - `product_id` in inventory table
  - `warehouse_id` in inventory table

```sql
CREATE INDEX idx_inventory_product ON inventory(product_id);
CREATE INDEX idx_inventory_warehouse ON inventory(warehouse_id);