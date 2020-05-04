const db = require('./index.js');

module.exports = {
  getProduct: (id, res) => {
    db.query(`select image_url, product_id, image_id from images inner join reference on image_id = reference.img_id inner join products on product_id = reference.prod_id where prod_id = ${id}`, (error, data) => {
      if (error) {
        res.status(400).end();
      } else {
        res.status(200).json(data);
      }
    });
  },
};
