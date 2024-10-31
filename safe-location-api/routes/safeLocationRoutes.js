const express = require('express');
const router = express.Router();
const safeLocationController = require('../controllers/safeLocationController');

// POST endpoint to check if coordinates are within the safe zone
router.post('/check-safe-location', (req, res, next) => {
    console.log('Received request body:', req.body); // Log the request body
    next(); // Proceed to the controller
}, safeLocationController.isWithinSafeZone);

module.exports = router;

