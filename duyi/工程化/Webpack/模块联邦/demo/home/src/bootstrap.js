import $ from 'jquery';
import now from './now';
// 引入远程列表组件
import news from 'active/news'

// // 生成首页标题
$('<h1>').text('首页').appendTo(document.body);

// // 首页中有一个显示当前时间的区域
now($('<div>').appendTo(document.body));

// 远程列表
news($('<div>').appendTo(document.body));
