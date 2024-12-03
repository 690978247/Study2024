const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: 'source-map',   
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', /* "css-loader?modules" */ "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]                                                         
}