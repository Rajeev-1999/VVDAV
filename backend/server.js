const express = require('express');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const busRoutes = require('./routes/bus');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Connect to PostgreSQL (using Sequelize) and MongoDB
mongoose.connect('mongodb://localhost:27017/schoolbus', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Error:', err);
    });

    app.use(cors());
    app.use(express.json());

    //Routes
    app.use('/auth', authRoutes);
    app.use('/bus', busRoutes);

    // Socket.io for real-time tracking
    io.on('connection', (socket) => {
        console.log('New client connected');
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        }); 
    });

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });

    