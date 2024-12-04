const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  // devtool: 'source-map',
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js'
  },
  output: {
    clean: true,
    filename: '[name].[fullhash:5].js'
  },
  optimization: {
    // SplitChunksPlugin
    splitChunks: {
      /* 分包策略  全局*/
      chunks: 'all',
      // maxSize: 6000,
      // automaticNameDelimiter: '-', // 控制分割符号
      // minChunks: 1,  // 最小chunk引用数
      // minSize: 0, // 当分包达到多少字节后才允许被真正的拆分 默认值 30000 30Kb

      /* 分包策略 缓存组 局部 */
      // cacheGroups: {
      //   // 属性名是缓存组名称，会影响到分包的chunk名
      //   // 属性值是缓存组的配置，缓存组继承所有的全局配置，也有自己特殊的配置
      //   vendors: { 
      //     test: /[\\/]node_modules[\\/]/, // 当匹配到相应模块时，将这些模块进行单独打包
      //     priority: -10 // 缓存组优先级，优先级越高，该策略越先进行处理，默认值为0
      //   },
      //   default: {
      //     minChunks: 2,  // 覆盖全局配置，将最小chunk引用数改为2
      //     priority: -20, // 优先级
      //     reuseExistingChunk: true // 重用已经被分离出去的chunk
      //   }
      // }

      cacheGroups: {
        styles: {
          minSize: 0,
          test: /.css$/,
          minChunks: 2
        }
      }

    }
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ["page1"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
      chunkFilename: "common.[hash:5].css"
    })
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false
  }
}