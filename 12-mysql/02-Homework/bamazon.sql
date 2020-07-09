DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales DECIMAL(10, 2),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, stock_quantity) VALUES
('iPad Pro 12.9', 899.99, 23),
('iPad Air', 599.00, 56),
('iPad Pro 10.9', 699.99, 200),
('Apple Watch Series 5', 469.95, 48),
('Apple Watch Series 4', 350.00, 143),
('Apple Watch Series 3', 250.99, 78),
('iPhone 11 64gb', 799.99, 56),
('iPhone 11 Pro 64gb', 999.99, 30),
('iPhone 11 Pro Max 128gb', 1199.99, 77),
('Apple Magic Mouse 2', 119.99, 60);

select * from products