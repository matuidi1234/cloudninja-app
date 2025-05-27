const request = require('supertest');
const app = require('../src/app'); // fichier principal

describe('GET /api/status', () => {
  it('should return status 200 and app status', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body).toHaveProperty('timestamp');
  });
});
