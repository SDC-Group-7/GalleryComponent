DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

\c gallery;

CREATE TABLE products (
  product_id SERIAL NOT NULL, 
  product_sku VARCHAR(10),
  product_title VARCHAR(255),
  product_price VARCHAR(10)
);

CREATE TABLE images (
  image_id SERIAL NOT NULL,
  image_url VARCHAR(255)
);

CREATE TABLE reference (
  reference_id SERIAL NOT NULL,
  prod_id BIGINT,
  img_id BIGINT
);

\COPY products ( product_sku, product_title, product_price ) FROM 'products.csv' DELIMITER ',';

\COPY images ( image_url ) FROM 'images.csv' DELIMITER ',';

\COPY reference ( prod_id, img_id ) FROM 'reference.csv' DELIMITER ',';

ALTER TABLE products ADD PRIMARY KEY (product_id);

ALTER TABLE images ADD PRIMARY KEY (image_id);

ALTER TABLE reference ADD PRIMARY KEY (reference_id);

ALTER TABLE reference ADD FOREIGN KEY (prod_id) REFERENCES products(product_id);

ALTER TABLE reference ADD FOREIGN KEY (img_id) REFERENCES images(image_id);

CREATE INDEX ON reference (prod_id, img_id);
