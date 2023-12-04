const fs = require('fs');

/**
 * 新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 * 
 * 程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。
 * 流式写入方式适用于大文件写入或者频繁写入的场景，writeFile适合于写入频率较低的场景
 */

// 创建可写流
const writable = fs.createWriteStream('Node-Code/FS模块相关内容/流式写入.txt');

// 当流写入缓冲区时，触发'drain'事件
writable.on('drain', () => {
  // 写入缓冲区时触发的事件
  console.log('数据已经被写入缓冲区');
});

// 当流关闭时，触发'finish'事件
writable.on('finish', () => {
  // 流关闭时触发的事件
  console.log('所有数据已被写入座右铭.txt');
});

// 流式写入内容
writable.write('三人行，则必有我师焉', 'utf8', () => {
  // 写入成功时的回调函数
  console.log('第一行数据写入成功');
});

writable.write('\n学海无涯，回头是岸', 'utf8', () => {
  // 写入成功时的回调函数
  console.log('第二行数据写入成功');
});

writable.write('\n学而不厌，诲人不倦', 'utf8', () => {
  // 写入成功时的回调函数
  console.log('第三行数据写入成功');
});

// 结束流写入
writable.end(() => {
  // 流写入结束时的回调函数
  console.log('写入完成');
});


// 第一行数据写入成功
// 第二行数据写入成功
// 第三行数据写入成功
// 写入完成
// 所有数据已被写入座右铭.txt