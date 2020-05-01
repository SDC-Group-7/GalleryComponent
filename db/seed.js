const db = require('./index.js');

// store S3 images in an array
const buckets = [];

const gettingBucket = () => {
  for (let i = 1; i <= 10; i += 1) {
    buckets.push(`https://fechr.s3-us-west-1.amazonaws.com/${i}.jpg`);
  }
};

gettingBucket();

// Inserting 10 different productIDs
const insertingProducts = () => {
  for (let i = 1; i <= 10; i += 1) {
    db.query('INSERT INTO products (product_id) VALUES (?)', [null], (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('success for product');
      }
    });
  }
};

insertingProducts();

// Assigning 10 images to eact productID
// These images are selected randomly from the images array
const insertingImages = () => {
  for (let i = 1; i <= 10; i += 1) {
    for (let k = 0; k < buckets.length; k += 1) {
      db.query('INSERT INTO images (image_id, image_url) VALUES (?, ?)', [Math.floor(Math.random() * 10), buckets[Math.floor(Math.random() * 10)]], (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('success for images');
        }
      });
    }
  }
};

insertingImages();
