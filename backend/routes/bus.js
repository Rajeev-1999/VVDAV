const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');
const { default: mongoose } = require('mongoose');

// Get bus details for a parent 
router.get('/:busId', async (req, res) => {
    const bus = await Bus.findByPk(req.params.busId, {
        include: [{ model: Student}, { model: Routes }]
        });
        res.json(bus);
    });

    // Update bus location (MongoDB)

    router.post('/location', async (req, res) => {
        const { busId, latitude, longitude } = req.body;
        await mongoose.connection.db.collection('bus_locations').insertOne({
            busId,
            coordinates: [latitude, longitude],
            timestamp: new Date(),
        });
         res.sendStatus(200);
    });

    module.exports = router;