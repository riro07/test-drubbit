const { DataTypes } = require('sequelize');
const dbConnection = require('../database/connection');

const DataSession = dbConnection.define('DataSession', {
    idSession: {
        type: DataTypes.STRING
    },
    visit: {
        type: DataTypes.NUMBER
    },
});


module.exports = DataSession;