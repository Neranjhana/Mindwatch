// controllers/safeLocationController.js
exports.isWithinSafeZone = (req, res) => {
    const { latitude, longitude } = req.body;

    // Simulated safe location check (you can implement your logic here)
    const safeZone = {
        lat: 34.0522,  // Replace with actual safe zone coordinates
        lon: -118.2437,
        radius: 1000,  // in meters
    };

    try {
        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Coordinates are required.' });
        }

        // Calculate distance (simplified for demonstration)
        const distance = Math.sqrt(
            Math.pow(latitude - safeZone.lat, 2) + Math.pow(longitude - safeZone.lon, 2)
        );

        if (distance <= safeZone.radius) {
            return res.json({ safe: true });
        } else {
            return res.json({ safe: false });
        }
    } catch (error) {
        console.error('Error in isWithinSafeZone:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

