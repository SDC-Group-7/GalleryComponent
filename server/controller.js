const model = require('../db/model.js');

module.exports = {
  getProductImages: async (req, res) => {
    await model.getProduct(req.params.id, res);
  },
};
