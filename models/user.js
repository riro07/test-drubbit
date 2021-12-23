const { DataTypes } = require('sequelize');
const dbConnection = require('../database/connection');

const DataSession = dbConnection.define('DataSession', {
    idSession: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.STRING
    },
});


module.exports = DataSession;