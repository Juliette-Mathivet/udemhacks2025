const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const clientRoutes = require('./clientRoutes');


const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api', clientRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});