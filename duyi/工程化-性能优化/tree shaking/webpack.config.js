// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require('terser-webpack-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const path = require('path')
const globAll = require('glob-all');
const srcAbs = path.resolve(__dirname, "src")
const htmlPath = path.resolve(__dirname, "public/index.html")

const paths = globAll.sync([
  `${srcAbs}**/*.js`,
  htmlPath
])

console.log(paths);

// path.resolve(__dirname, "public/index.html"), 
//         path.resolve(__dirname, "src/index.js")

module.exports = {
  mode: "production",
  // devtool: 'source-map',
  // entry: {
  //   page1: './src/index.js',
  // }, 
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // css tree shaking
    new PurgeCSSPlugin({
      paths
    })
  ]
  // stats: {
  //   colors: true,
  //   chunks: false,
  //   modules: false
  // }
}