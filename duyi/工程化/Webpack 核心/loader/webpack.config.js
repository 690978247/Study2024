module.exports = {
  mode: 'development',
  module: {
    rules: [ //模块的匹配规则
      // { // 规则1
      //   test: /index\.js$/, // 正则表达式,匹配模块的路径
      //   use: [ // 匹配到了之后,使用哪些加载器, 
      //     // 每个加载器的使用是一个对象
      //       {
      //         // loader: './loaders/test-loader?changeVar=未知数', // 加载器的路径
      //         loader: './loaders/test-loader', // 加载器的路径
      //         options: {
      //           changeVar: '未知数'
      //         }
      //       }
      //   ]
      // },

      // [loader1 loader2 loader3 loader4]
      // 从后往前运行 输出loader4 loader3 loader2 loader1
      { // 规则1
        test: /index\.js$/,
        use: ['./loaders/loader1.js','./loaders/loader2.js',]
      },

      { // 规则2
        test: /\.js$/,
        use: ['./loaders/loader3.js','./loaders/loader4.js',]
      },

    ], 
    // noParse: [] // 是否不要解析某些模块
  },
}