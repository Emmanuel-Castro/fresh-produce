const express = require('express');
const path = require('path');
const router = express.Router();
const pool = require('../database');


// Get all products
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('<h1>Query Error</h1>');
  }
});

module.exports = router;