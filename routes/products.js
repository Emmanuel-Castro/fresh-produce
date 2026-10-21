const express = require('express');
const path = require('path');
const router = express.Router();
const pool = require('../database');


// Route #1: Display the renderized HTML Page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'products.html'));
});


// Route #2: Provide the data from the database via backend
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, price, measure FROM products');
    
    res.json(result.rows);

  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ error: 'Server error loading products' });
  }
});


module.exports = router;