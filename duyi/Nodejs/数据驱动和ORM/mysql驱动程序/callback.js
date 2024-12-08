// Get the client
const mysql = require('mysql2');

// 创建一个数据库连接

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'companydb',
});

// A simple SELECT query
// connection.query(
//   'SELECT * FROM `company`;',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// 新增
// connection.query("insert into company(`name`, location, buildDate) values('abbc', '阿斯顿', curdate());", 
//   (err, result) => {
//     console.log(result);
//   }
// )

// 修改
// connection.query("update company set `name`='bcd' where id=4 ", 
//   (err, result) => {
//     console.log(result);
//   }
// )

// 删除
connection.query("delete from company where id=4 ", 
  (err, result) => {
    console.log(result);
  }
)


// Using placeholders
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function (err, results) {
//     console.log(results);
//   }
// );