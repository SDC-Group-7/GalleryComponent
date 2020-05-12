const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const middleware = require('./middleware.js');

const { getProductImages } = require('./controller.js');

const app = express();

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

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

module.exports = app;
