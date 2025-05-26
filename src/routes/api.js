const express = require('express');
const router = express.Router();

const services = [
  { id: 1, name: 'Stockage Cloud' },
  { id: 2, name: 'Sécurité Réseau' },
  { id: 3, name: 'Sauvegarde Automatique' }
];

// GET /api/services
router.get('/services', (req, res) => {
  res.json(services);
});

// GET /api/status
router.get('/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

describe('GET /api/services', () => {
  it('should return a list of services', async () => {
    const res = await request(app).get('/api/services');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

module.exports = router;
