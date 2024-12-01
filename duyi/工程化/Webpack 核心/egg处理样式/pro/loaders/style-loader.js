module.exports = function (sourceCode) {
  // node 环境
  // var style = document.createElement("style")
  // style.innerHTML = sourceCode
  // document.head.appendChild(style)

  const code =  `var style = document.createElement("style");
  style.innerHTML = \`${sourceCode}\`;
  document.head.appendChild(style);
  module.exports = \`${sourceCode}\``

  console.log(code)

  return code
}