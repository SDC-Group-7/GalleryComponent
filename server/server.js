const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const middleware = require('./middleware.js');

const { getProductImages } = require('./controller.js');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(middleware);


app.get('/api/images/:id', (req, res) => {
  getProductImages(req.params.id, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else if (results.length === 0) {
      res.status(404).send('Product does not exist');
    } else {
      res.status(200).send(results);
    }
  });
});

// app.get('/api/images', (req, res) => {
//   const dummyData = [
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/20.jpg',
//       product_id: 1,
//       image_id: 17,
//       reference_id: 1,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 5,
//       reference_id: 2,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/16.jpg',
//       product_id: 1,
//       image_id: 4,
//       reference_id: 3,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/20.jpg',
//       product_id: 1,
//       image_id: 17,
//       reference_id: 4,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 6,
//       reference_id: 5,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 5,
//       reference_id: 6,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/20.jpg',
//       product_id: 1,
//       image_id: 17,
//       reference_id: 7,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/20.jpg',
//       product_id: 1,
//       image_id: 17,
//       reference_id: 8,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/10.jpg',
//       product_id: 1,
//       image_id: 14,
//       reference_id: 9,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 3,
//       reference_id: 10,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 3,
//       reference_id: 11,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 5,
//       reference_id: 12,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/6.jpg',
//       product_id: 1,
//       image_id: 1,
//       reference_id: 13,
//     },
//     {
//       image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
//       product_id: 1,
//       image_id: 3,
//       reference_id: 14,
//     },
//   ];

//   res.send(dummyData);
// });

module.exports = app;
