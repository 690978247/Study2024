### css-loader

将css 代码转换为js代码

原理：将css代码作为字符串导出 (简要说明)

``` css
.red {
  color: red
}

=>

module.exports = `
.red {
  color: red
}
`
``` 

### style-loader

由于css-loader仅提供了将css转换为字符串导出的能力，剩余的事情要交给其他loader或plugin来处理

style-loader 可以将 css-loader 转换后的代码进一步处理，将css-loader导出的字符串加入到页面的style元素中