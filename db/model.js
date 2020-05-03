const db = require('./index.js');

module.exports = {
  gettingProduct: async (res) => {
    await db.query('select image_url, product_id, image_id from images inner join reference on image_id = reference.img_id inner join products on product_id = reference.prod_id where prod_id = 66;', (error, data) => {
      if (error) {
        res.status(400).end();
      } else {
        res.status(200).json(data);
      }
    });
  },
};
