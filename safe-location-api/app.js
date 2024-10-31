const express = require('express');
const bodyParser = require('body-parser');
const safeLocationRoutes = require('./routes/safeLocationRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the safe location routes
app.use('/api', safeLocationRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('Global Error:', err.stack);
    res.status(500).json({ error: 'An unexpected error occurred!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

