const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,           

    },  
});

module.exports = Student;  // Export the model to be used in other parts of the application 