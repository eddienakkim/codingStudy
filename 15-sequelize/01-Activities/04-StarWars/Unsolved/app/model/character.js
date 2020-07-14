const Sequelize = require('sequalize');

const sequelize = require('../config/connection.js')

let character = sequelize.define("character",{
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INT,
    forcePoints: Sequelize.INT,
})

character.sync()

module.exports = character;