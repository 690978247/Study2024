const HtmlWebpackPlugin = require('html-webpack-plugin');

// 模块联邦
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
  },
  output: {
    clean: true,
  },
  // module: {
  //   rules: [
  //     {
  //       test: '/\.css$/',
  //       use: ['style-loader', 'css-loader']
  //     }
  //   ]
  // },
  plugins: [ new HtmlWebpackPlugin(),   new ModuleFederationPlugin({
    name: 'active',
    filename: 'active-entry.js',
    exposes: {
      './news': './src/news.js'
    },

    // 远程使用其他项目暴露的模块
    remotes: {
      // key: 自定义远程暴露的联邦名
      // 比如为 abc， 则之后引用该联邦的模块则使用 import "abc/模块名"
      // value: 模块联邦名@模块联邦访问地址
      // 远程访问时，将从下面的地址加载
      home: 'home@http://localhost:8080/home-entry.js',
    },

     // 配置共享模块
     shared: {
      // jquery为共享模块
      jquery: {
        singleton: true, // 全局唯一
      },
    }
  })]
};