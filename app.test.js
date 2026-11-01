const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return status 200 and success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, Cloud CI/CD Pipeline is Live and updated!');
  });
});