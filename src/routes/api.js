const express = require("express");

const router = express.Router();

const services = [
  { id: 1, name: "Stockage Cloud" },
  { id: 2, name: "Sécurité Réseau" },
  { id: 3, name: "Sauvegarde Automatique" },
];

// GET /api/services
router.get("/services", (req, res) => {
  console.log("GET /api/services");
  res.json(services);
});

// GET /api/status
router.get("/status", (req, res) => {
  console.log("GET /api/status");
  res.json({ status: "ok", timestamp: new Date() });
});

/**
 * GET /api/items
 * Récupère la liste des items
 * @returns {Array} Liste des items
 */
app.get('/api/items', (req, res) => {
  // code...
});

module.exports = router;
