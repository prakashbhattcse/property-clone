const express = require('express');
const app = express();

// Import your API routes here
// const propertyRoutes = require('./routes/property');
// const userRoutes = require('./routes/user');

// Use routes
// app.use('/properties', propertyRoutes);
// app.use('/users', userRoutes);

// Example route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

module.exports = app;