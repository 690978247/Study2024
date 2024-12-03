const base = require('./webpack.base')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')

module.exports = function(env) {
  if(env && env.prod) {
    console.log('生产')
    // 生产
    const config = {
      ...base,
      ...prod
    }
    config.plugins = [...base.plugins, ...prod.plugins]
    return config
  } else {
    console.log('开发')
    // 开发
    const config = {
      ...base,
      ...dev
    }
    config.plugins = [...base.plugins, ...dev.plugins]

    return config

  }
 
}