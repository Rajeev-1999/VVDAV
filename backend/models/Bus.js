const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Bus = sequelize.define('Bus', {
    bus_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    driver_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conductor_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },   
});



module.exports = Bus;  // Export the model to be used in other parts of the application 