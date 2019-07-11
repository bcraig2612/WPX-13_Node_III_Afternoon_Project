CREATE TABLE product(
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40),
    description VARCHAR(80),
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL
);

-- create a product table
-- product_id - Serial Primary Key
-- name - varchar(40)
-- description - varchar(80)
-- price - integer
-- image_url - text