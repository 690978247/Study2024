const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'companydb',
  multipleStatements: true,
});

// 创建一个数据库连接
// async function test(id) {
//   // const connection = await mysql.createConnection({
//   //   host: 'localhost',
//   //   user: 'root',
//   //   password: '12345678',
//   //   database: 'companydb',
//   //   multipleStatements: true,
//   // });

//   // const [result,fields] = await connection.query(`select * from employee where id=${id};`)
//   const sql = `select * from employee where id=?;`
//   const [result,fields] = await connection.execute(sql, [id])
//   console.log(result, fields);
//   connection.end()
// }

// 使用数据库连接池
async function test(id) {
  // const sql = `select * from employee where id=?;`
  // const sql = `select * from employee where \`name\` like '%?%'; `  // '%?%' => concat('%', ?, '%')
  const sql = `select * from employee where \`name\` like concat('%', ?, '%');`
  const [result,fields] = await pool.execute(sql, [id])
  console.log(result, fields);
}


// test(`'';delete from company where id = 5`) // sql注入
// test(`''; insert into company (\`name\`, location, buildDate) values('aaa', 'asdasdas', curdate()) `)
test('徐')
