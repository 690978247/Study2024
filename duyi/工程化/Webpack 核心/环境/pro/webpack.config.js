// module.exports = {
//   mode: "development"
// }

// 在开始构建时，webpack如果发现配置是一个函数，会调用该函数，将函数返回的对象作为配置内容，因此，开发者可以根据不同的环境返回不同的对象

// 在调用webpack函数时，webpack会向函数传入一个参数env，该参数的值来自于webpack命令中给env指定的值，例如

// npx webpack --env abc # env: "abc"

// npx webpack --env.abc # env: {abc:true}
// npx webpack --env.abc=1  # env： {abc:1}
// npx webpack --env.abc=1 --env.bcd=2 # env: {abc:1, bcd:2}

module.exports = function(env) {
  console.log('eeee', env)

  if(env && env.prod) {
    console.log('生产环境')
    // 生产环境
    return {
      mode: "production",
      output: {
        filename: '[name].[fullhash:6].js',
      }
    }
  } else {
    console.log('开发环境')
    // 开发环境
    return {
      mode: "development",
      devtool: "source-map",
      output: {
        filename: '[name].[fullhash:6].js',
      }
    }
  }

  // return {
  //   mode: 'development'
  // }
}