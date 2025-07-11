const express = require('express');
const bugRoutes = require('./routes/bugRoutes');
const path = require('path');

const app = express();
app.use(express.json());

// API routes
app.use('/api/bugs', bugRoutes);

// Serve React client
app.use(express.static(path.join(__dirname, '../client/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = app;