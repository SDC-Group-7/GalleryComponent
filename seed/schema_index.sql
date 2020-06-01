\c gallery;

ALTER TABLE products ADD PRIMARY KEY (product_id);

ALTER TABLE images ADD PRIMARY KEY (image_id);

ALTER TABLE reference ADD PRIMARY KEY (reference_id);

ALTER TABLE reference ADD FOREIGN KEY (prod_id) REFERENCES products(product_id);

ALTER TABLE reference ADD FOREIGN KEY (img_id) REFERENCES images(image_id);

CREATE INDEX ON reference (prod_id, img_id);
