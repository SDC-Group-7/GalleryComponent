const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const client = new Client();

const mock_products = require('./mock_products.js');
const mock_images = require('./mock_images.js');
const mock_reference = require('./mock_reference.js');

const products_csv = path.join(__dirname, 'products.csv');
const images_csv = path.join(__dirname, 'images.csv');
const reference_csv = path.join(__dirname, 'reference.csv');

const SEED_MULTIPLE = 400000;

// Method 1 : use INSERT line by line
const seed = async function(){
  await client.connect();

  let title = 'lego title ';    

  console.time('seed');
  for(let i = 0; i < SEED_MULTIPLE; i++){
    await client.query(`INSERT INTO products ( product_title ) VALUES ( '${title} ${i}' )`);
  }

  await client.end(); 
  console.timeEnd('seed');
  process.exit();
};

// Method 2 : generate csv and use COPY
const seedcsv = function(n){
  gencsv(n);
  loadcsv();
}

//Generate csv file
const gencsv = function(n){
  console.time('gencsv');

  let mock_products_length = mock_products.length;
  let mock_images_length = mock_images.length;
  let mock_reference_length = mock_reference.length;

  let productsWriter = fs.createWriteStream(products_csv);
  let imagesWriter = fs.createWriteStream(images_csv);
  let referenceWriter = fs.createWriteStream(reference_csv);

  for(let i = 0; i < n; i++){
    //products
    let productSeed = mock_products.map( p => `${p.product_sku},${p.product_title},${p.product_price}` );
    productsWriter.write(productSeed.join('\n') + '\n', 'utf8');
    // fs.appendFileSync(products_csv, productSeed.join('\n') + '\n');

    //images
    let imageSeed = mock_images.map( i => `${i.image_url}` );
    imagesWriter.write(imageSeed.join('\n') + '\n', 'utf8');
    // fs.appendFileSync(images_csv, imageSeed.join('\n') + '\n');

    //reference
    let referenceSeed = mock_reference.map( r => `${r.prod_id + mock_products_length * i},${r.img_id + mock_images_length * i}` );
    referenceWriter.write(referenceSeed.join('\n') + '\n', 'utf8');
    // fs.appendFileSync(reference_csv, referenceSeed.join('\n') + '\n');
  }

  productsWriter.end();
  imagesWriter.end();
  referenceWriter.end();

  console.timeEnd('gencsv');
}

//load csv file
const loadcsv = async function(){
  console.time('loadcsv');
  await client.connect();
  await client.query(`COPY products ( product_sku, product_title, product_price ) FROM '${products_csv}' DELIMITER ','`);
  await client.query(`COPY images ( image_url ) FROM '${images_csv}' DELIMITER ','`);
  await client.query(`COPY reference ( prod_id, img_id ) FROM '${reference_csv}' DELIMITER ','`);
  await client.end();
  console.timeEnd('loadcsv');
}

seedcsv(SEED_MULTIPLE);