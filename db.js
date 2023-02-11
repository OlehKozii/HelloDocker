const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:test@postgres:5432/Test")

module.exports = sequelize