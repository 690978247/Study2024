// 增加
// const Admin = require('./models/admin')

/* 1 */
// 同步方法，构建一个模型实例
// const ins = Admin.build(
//   {
//     loginId: 'abc',
//     loginPwd: '123'
//   }
// )

// ins.save().then(() => {
//   console.log('新建管理员成功');
// })

/* 2 */
// Admin.create({
//   loginId: 'xy',
//   loginPwd: 'xulk'
// }).then(res => {
//   console.log(res.id, res.loginId, res.loginPwd);
// })

/*  */
const adminServ = require('./services/adminService')

// 新增
// adminServ.addAdmin({
//   loginId: 'abcddd',
//   loginPwd: 'xy'
// })

// 删除
// adminServ.deleteAdmin(4).then(res => {
//   console.log('ddddd', res);  
// })

// 修改
adminServ.updateAdmin(1, {
  loginId: 'xxxxxxxxyYYYY!!!'
}).then(res => {
  console.log('rrrrrrrrr', res);
})