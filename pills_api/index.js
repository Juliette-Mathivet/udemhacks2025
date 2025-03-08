const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();



const clientRoutes = require('./routes/clientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const medicineRoutes = require('./routes/medecineRoutes');
const cors = require('cors')
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
// app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use client routes
app.use('/api', clientRoutes);

// Use doctor routes
app.use('/api', doctorRoutes);

// Use medicine routes
app.use('/api', medicineRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});