/**
 * 需求：
 * 新建一个文件，文件写入.txt,写入内容，三人行，则必有我师焉
 * */

const fs = require('fs');

// 异步写入文件
fs.writeFile('Node-Code/FS模块相关内容/文件写入.txt', '三人行，则必有我师焉', (err) => {
  if (err) throw err;
  console.log('异步写入成功');
});

// 同步写入文件
try {
  fs.writeFileSync('Node-Code/FS模块相关内容/文件写入.txt', '三人行，则必有我师焉（同步写入）');
  console.log('同步写入成功');
} catch (err) {
  console.error('同步写入失败：', err);
}