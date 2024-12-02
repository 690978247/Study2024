var fileListPlugin = require('./plugins/FileListPlugin')

module.exports = {
  mode: "development",
  devtool: 'source-map',
  plugins:[
    new fileListPlugin()
  ]
}