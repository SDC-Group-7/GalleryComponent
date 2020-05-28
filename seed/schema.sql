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

