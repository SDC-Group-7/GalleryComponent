const app = require('../server/index.js'); // Link to your server file
const supertest = require('supertest');

const request = supertest(app);


it('Gets the images endpoint', async (done) => {
  const response = await request.get('/images');

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([{"image_url":"https://fechr.s3-us-west-1.amazonaws.com/4.jpg","product_id":2,"image_id":8},{"image_url":"https://fechr.s3-us-west-1.amazonaws.com/1.jpg","product_id":2,"image_id":4}]);
  done();
});
