
/* 练习1 */
var obj = {
  name: 'xy',
  age: 18,
  sayHi: function () {
    // 完成方法 打印姓名和年龄
    console.log(this.name, this.age)
  }
}

obj.sayHi()

/* 练习2 */
// 1. 为所有方法添加print方法, 打印对用的键值对
Object.prototype.print = function() {
  for(let key in this) {
    const value = this[key]

    // hasOwnProperty 判断属性是不是属于对象本身，而不是在隐式原型上
    // 属性名 in 对象 判断 属性名 是否在对象自身以及其隐式原型上
    if(this.hasOwnProperty(key)) {
      console.log(key, value)
    }
  }

}

const obj1 = {
  name:'xy',
  age: 18
}

obj1.print()

const obj2 = {
  name: 'xulk',
  age: 28
}

obj2.print()

/* 练习3 */
// 能否不使用new, 通过User函数创建对象（不能更改User函数）
function User(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = firstName + lastName
}

const user1 = /* User('xu', 'lk') */ {}

User.apply(user1, ['xu', 'lk'])


console.log(user1)
