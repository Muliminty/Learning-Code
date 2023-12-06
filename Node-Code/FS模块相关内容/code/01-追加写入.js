/**
 * 需求：
 * 新建一个文件，文件写入.txt,写入内容，三人行，则必有我师焉
 * */

const fs = require('fs');

// 异步追加写入文件
fs.appendFile('Node-Code/FS模块相关内容/追加写入.txt', '\n学海无涯，回头是岸', (err) => {
  if (err) throw err;
  console.log('异步追加写入成功');
});

// 同步追加写入文件
try {
  fs.appendFileSync('Node-Code/FS模块相关内容/追加写入.txt', '\n学而不厌，诲人不倦（同步追加写入）');
  console.log('同步追加写入成功');
} catch (err) {
  console.error('同步追加写入失败：', err);
}

