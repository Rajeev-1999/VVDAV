const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    name :{
        type: DataTypes.STRING,
        allowNull: false,       
    },
    email :{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },  
    password :{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role :{
        type: DataTypes.STRING,
        allowNull: false,
    },      
});


module.exports = User;  // Export the model to be used in other parts of the application