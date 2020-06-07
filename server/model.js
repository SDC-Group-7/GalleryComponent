const mongoose = require('../db/index.js');

const productSchema = {
  product_id: Number,
  product_sku: String,
  product_title: String,
  images: [String]
};
const Product = mongoose.model('Product', productSchema);

const getProduct = (id, callback) => {
  Product.find({product_id: id}, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getProduct,
};
