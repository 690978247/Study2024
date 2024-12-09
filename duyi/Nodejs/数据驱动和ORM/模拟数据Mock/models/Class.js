const sequelize = require('./db')
const { DataTypes } = require('sequelize')
const Student = require('./Student')

const Class = sequelize.define("Class", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  openDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  createdAt: false,
  updatedAt: false,
  paranoid: true
})

// 建立一对多关系
// Class.hasMany(Student)

module.exports = Class;