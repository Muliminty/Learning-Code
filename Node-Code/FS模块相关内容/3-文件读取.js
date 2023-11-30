const fs = require('fs');

// 异步读取文件
fs.readFile('Node-Code/FS模块相关内容/文件读取.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('异步读取文件内容：', data);
});

// 同步读取文件
try {
  const data = fs.readFileSync('Node-Code/FS模块相关内容/文件读取.txt', 'utf8');
  console.log('同步读取文件内容：', data);
} catch (err) {
  console.error('同步读取文件出错：', err);
}
