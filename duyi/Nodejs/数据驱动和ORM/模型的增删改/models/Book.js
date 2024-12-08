const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const Book = sequelize.define("Book", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishDate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  paranoid: true
})

module.exports = Book;