const db = require('./index.js');
const { IMAGE_URL } = require('./AWS_S3_IMAGES.js');

// store S3 images
const buckets = [];

for (let i = 1; i <= 10; i += 1) {
  buckets.push(`${IMAGE_URL}/${i}.jpg`);
}


const randomIndex = Math.floor(Math.random() * 10);

for (let i = 1; i <= 100; i += 1) {
  db.query('INSERT INTO products (product_id) VALUES (?)', [i]);
  db.query('INSERT INTO images (image_url) VALUES (?)', [`${buckets[randomIndex]}`]);

  for (let k = 1; k < Math.floor(Math.random() * 10); k += 1) {
    db.query('INSERT INTO reference (prod_id, img_id) VALUES (?, ?)', [i, Math.floor(Math.random() * 10)]);
  }
}
