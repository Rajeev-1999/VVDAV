const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Route = sequelize.define('Route', {
    route_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    waypoints: {
        type: DataTypes.STRING,
        allowNull: false,   
    },

    route_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    route_start: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    route_end: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    route_distance: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    route_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}); 

module.exports = Route;  // Export the model to be used in other parts of the application   