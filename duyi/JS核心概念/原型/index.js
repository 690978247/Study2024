function User(name, age) {
  this.name = name
  this.age = age

  // this.sayHi = function() {
  //   console.log(`你好，我是${this.name}, 今年${this.age}岁了`)
  // }
}

User.prototype.sayHi = function() {
  console.log(`你好，我是${this.name}, 今年${this.age}岁了`)
}

var u1 = new User('徐扬', 18)
var u2 = new User('徐来柯', 27)
  
u1.sayHi()
u2.sayHi()

console.log(u1.sayHi === u2.sayHi)