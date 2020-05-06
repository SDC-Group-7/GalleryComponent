const supertest = require('supertest');
const app = require('../server/server.js');
const db = require('../db/index.js');

const request = supertest(app);

describe('Testing images GET Request', () => {
  afterAll(async (done) => {
    db.end();
    done();
  });

  it('Should get images of a product', async (done) => {
    const productImage = [
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/7.jpg',
        product_id: 10,
        image_id: 5,
      },
    ];
    const response = await request.get(`/api/images/${productImage[0].product_id}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(productImage);
    done();
  });

  it('should respond with a 404 product id does not exist', async (done) => {
    const response = await request.get('/api/images/null');
    expect(response.statusCode).toEqual(404);
    done();
  });
});
