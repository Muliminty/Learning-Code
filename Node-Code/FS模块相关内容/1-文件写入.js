/**
 * 需求：
 * 新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 * */

// 1. 导入fs模块
const fs = require('fs');

// 2. 写入文件

fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', (err) => {
  //写入失败的话 err就是错误对象 写入成功的话就是 null
  console.log('err: ', err);
  if (err) throw err;

  console.log('写入成功');
});