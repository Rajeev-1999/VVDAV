// backend/config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('schoolbus' , 'postgres', 'Santa@123!', {
    host: 'localhost',
    dialect: 'postgres',            
});


module.exports = sequelize;

