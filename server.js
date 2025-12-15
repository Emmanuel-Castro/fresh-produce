const express = require('express');
const path = require('path');
const pool = require('./database');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;


// Imported Routes
const menu = require('./routes/menu');
const products = require('./routes/products');

// Static Files Middleware
app.use(express.static(path.join(__dirname, '../public')));

// Endpoints
app.use('/', menu);
app.use('/products', products);


// E-Commerce Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});