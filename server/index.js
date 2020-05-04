const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Controller = require('./controller.js');
const middleware = require('./middleware.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(middleware);
app.get('/api/images/:id', Controller.getProductImages);


module.exports = app;
