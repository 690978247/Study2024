import $ from 'jquery';

export default function (container) {
  const p = $('<p>').appendTo(container).text(new Date().toLocaleString());
  setInterval(function () {
    p.text(new Date().toLocaleString());
  }, 1000);
}

// // src/bootstrap.js
// import $ from 'jquery';
// import now from './now';

// // 生成首页标题
// $('<h1>').text('首页').appendTo(document.body);

// // 首页中有一个显示当前时间的区域
// now($('<div>').appendTo(document.body));

// // src/index.js
// import('./bootstrap')