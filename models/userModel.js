const {DataTypes} = require("sequelize");
const sequelize = require("../db")

const user = sequelize.define("user", {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING, unique:true}
})

module.exports = user
