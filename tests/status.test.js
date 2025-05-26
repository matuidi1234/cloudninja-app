const request = require('supertest');
const app = require('../app'); // fichier principal

describe('GET /api/status', () => {
  it('should return status 200 and app status', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
  });
});
