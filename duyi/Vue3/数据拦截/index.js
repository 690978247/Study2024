/*  vue2.x Object.defineProperty */

// function Student() {
//   let stuName = '张三'
//   Object.defineProperty(this, "name", {
//     get() {
//       return stuName
//     },
//     set(value) {
//       if(!isNaN(value)) {
//         stuName = '张三'
//       } else {
//         stuName = value
//       }
//     }
//   })
// }

// const stu = new Student()
// console.log(stu.name)
// stu.name = '李四'
// console.log(stu.name)
// stu.name = 100
// console.log(stu.name)

/* vue3 Proxy */
function Student() {
  const obj = {
    name: "张三",
  }
  return new Proxy(obj, {
    get(obj, prop) {
      return obj[prop] + "是个好学生";
    },
    set(obj, prop, value) {
      if (!isNaN(value)) {
        obj[prop] = "张三";
      } else {
        obj[prop] = value;
      }
    },
  })
}

const stu = new Student(); // stu 拿到的就是代理对象
console.log(stu, stu.name);

stu.name = "李四";
console.log(stu, stu.name);

stu.name = 100;
console.log(stu.name); // 张三是个好学生
