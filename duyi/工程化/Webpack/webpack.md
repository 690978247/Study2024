### webpack4 更新 webpack 变化

#### 清除输入目录

```

webpack4: clean-webpack-plugin
webpack5: 内置
  output{
    clean: true
  }

```

#### top-level-await

实验性功能？ 自动在顶层添加 async

```
experiments: {
  topLevelAwait: true
}

```

#### 打包体积优化

webpack5 对模块的合并，作用域提升， tree shaking 等处理更加智能


#### 打包缓存开箱即用

打包速度太慢

webpack4: 开启cache-loader 缓存打包结果以优化之后的打包性能

webpack5: 默认开启打包缓存，无须在安装cache-loader

默认情况下，webpack5是将模块的打包结果缓存到内存中，可以通过 cache 配置进行更改

#### 资源模块

在 webpack4 中，针对资源文件我们通常使用 file-loader、url-loader、raw-loader 进行处理

由于大部分前端项目都会用到资源型文件，因此 webpack5 原生支持了资源型模块


#### 模块联邦


### npm 模块安装机制

1. npm 会检查本地的 node_modules 目录中是否已经安装过该模块，如果已经安，则不在重新安装

2. npm 检查缓存中是否存有相同的模块，如果有，直接从缓存中读取安装

3. 如果本地和缓存中均不存在，npm 会从 registry 指定的地址下载安装包，然后将其写入到本地的 node_modules 目录中，同时缓存起来