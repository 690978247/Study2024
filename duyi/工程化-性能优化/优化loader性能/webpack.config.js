module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /lodash/,
        use: [
          // {
          //   loader: "cache-loader",
          //   options:{
          //     cacheDirectory: "./cache"
          //   }
          // },
          // {
          //   loader: 'cache-loader',
          //   options: {
          //     cacheDirectory: './cache'
          //   }
          // },
          "thread-loader",
          "babel-loader"
        ]
      }
    ]
  }
};