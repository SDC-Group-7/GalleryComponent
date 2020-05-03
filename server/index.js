const db = require("../db/index.js");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Controller = require("./controller.js");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

//app.get('/images', Controller.getImages);

app.get("/images", async (req, res) => {
  await db.query(
    "select image_url, product_id, image_id from images inner join reference on image_id = reference.img_id inner join products on product_id = reference.prod_id where prod_id = 2;",
    (error, data) => {
      if (error) {
        res.status(400).end();
      } else {
        res.status(200).json(data);
      }
    },
  );
});

app.get("/test", async (req, res) => {
  res.json({ message: "pass" });
});

module.exports = app;
