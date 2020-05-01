DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

USE gallery;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY ( product_id )
);

CREATE TABLE images (
  image_id INT NOT NULL,
  image_url VARCHAR(255)
);
