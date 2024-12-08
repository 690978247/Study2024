const mysql = require('mysql2/promise');

async function test() {
  // 创建一个数据库连接
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'companydb',
  });

  const [result,fields] = await connection.query('select * from company;')
  console.log(result, fields);
  connection.end()
}

test()
