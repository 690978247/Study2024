const Mock = require('mockjs')

const result = Mock.mock({
  // "name|3-5": 'abc',
  // "number|1-100": 50,
  "datas|16": [{
    "id|+1":1,
    "name": "前端第 @id 期",
    openDate: "@date"
  }]
}).datas

const Class = require('../models/Class')

// 向数据库插入多条数据
Class.bulkCreate(result)

console.log(result);