# my-study2024

<!-- 开启文件大小写 -->
git config core.ignorecase false

<!-- JWT  -->
由三部分组成：
1. header: 头部消息，是一个对象（转为了base64,）{  alg:"HS256"/"RS256"  type:'JWT' }

```
字符串转base64 atob('')
base64 转字符串 btoa('')
```
2. payload: 携带的用户信息，一个对象， 可自定义

3. signature: 加密算法，根据header alg 算法对 header+ payload 加密的结果

<!-- js 循环 -->

for (var i = 1; i <=100; i++) {}  在循环体中，i 的值从 1 变化到100
for (var i = 1；i < 100; i++) {}  在循环体中，i 的值从 1 变化到99
