const fs = require('fs');
const path = require('path');

const mock_products_json = require('./mock_products_mongo.js');
const products_json = path.join(__dirname, 'mongo_products.json');
const SEED_MULTIPLE = 250000;

//Generate json file
const genjson = function(n){
  let mock_products_length = mock_products_json.length;
  let productsWriter = fs.createWriteStream(products_json);

  //products
  let id = 0;
  function genProductJSON(callback) {
    let i = n;
    write();
    function write() {
      let productSeed = mock_products_json.map( p => {
        p.product_id = id++;
        return JSON.stringify(p);
      });
      let mockProducts = productSeed.join('\n') + '\n';
      let ok = true;
      do {
        i--;
        if(i === 0){
          productsWriter.write(mockProducts, 'utf8', callback);
        } else {
          ok = productsWriter.write(mockProducts, 'utf8');
        }
      } while ( i > 0 && ok );

      if(i > 0) {
        productsWriter.once('drain', write);
      }
    }
  }
  console.time('gen_product_json');
  genProductJSON( () => {
    productsWriter.end();
    console.timeEnd('gen_product_json');
  } );
}

genjson(SEED_MULTIPLE);
