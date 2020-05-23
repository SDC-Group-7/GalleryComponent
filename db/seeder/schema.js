const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lego-gallery', {useMongoClient: true});

let Product = mongoose.model('Product', {
  product_id: Number,
  product_title: String,
  images: [Image]
});

let Image = mongoose.model('Image', {
  image_id: Number,
  image_url: String,
  image_alttext: String
})