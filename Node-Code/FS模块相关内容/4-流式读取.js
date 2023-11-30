const fs = require('fs');

// 创建可读流
const readableStream = fs.createReadStream('Node-Code/static/周杰伦 - 斗牛.mp3', 'utf8');

// 使用 'data' 事件读取数据
readableStream.on('data', (chunk) => {
  console.log('读取到数据：', chunk.length);
});

// 使用 'end' 事件结束读取
readableStream.on('end', () => {
  console.log('已读取到文件末尾');
});

// 使用 'error' 事件处理错误
readableStream.on('error', (err) => {
  console.error('读取文件出错：', err);
});
