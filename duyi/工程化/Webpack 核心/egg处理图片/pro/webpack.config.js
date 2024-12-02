module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: ['./loaders/img-loader.js']
      }
    ]
  }
}