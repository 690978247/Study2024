const sequelize = require('./db')
const { DataTypes } = require('sequelize')

// 创建一个模型对象
const Admin = sequelize.define('Admin', {
  // 在这里定义模型属性
  loginId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
},{
  // 其他配置
  // freezeTableName: true
  // tableName: 'Admin'
  // 不想要 createdAt
  // createdAt: false,
  // 想要 updatedAt 但是希望名称叫做 updateTimestamp
  // updatedAt: 'updateTimestamp'
  paranoid: true, // 从此以后，该表的数据不会真正的删除，而是增加一列deletedAt,记录删除的时间
});

// (async function() {
//   await Admin.sync({
//     alter: true,
//   })

//   console.log('Amdin 同步完成');
// })()

module.exports = Admin