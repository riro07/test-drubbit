const Sequelize = require('sequelize');

const dbConnection = new Sequelize( process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
})

module.exports = dbConnection;