const fs = require('fs');

/**
 * 使用 fs.writeFile 和 fs.readFile 实现文件复制
 * @param {string} sourceFilePath - 源文件路径
 * @param {string} destinationFilePath - 目标文件路径
 * @param {Function} callback - 回调函数
 */
function copyFileUsingWriteRead(sourceFilePath, destinationFilePath, callback) {
  // 读取源文件
  fs.readFile(sourceFilePath, (err, data) => {
    if (err) {
      return callback(err);
    }
    // 将数据写入目标文件
    fs.writeFile(destinationFilePath, data, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
}

// 调用函数
copyFileUsingWriteRead('sourceFile.txt', 'destinationFile.txt', (err) => {
  if (err) {
    console.error('文件复制出错：', err);
  } else {
    console.log('文件复制完成');
  }
});



const fs = require('fs');

/**
 * 使用 fs.writeFileSync 和 fs.readFileSync 实现文件复制
 * @param {string} sourceFilePath - 源文件路径
 * @param {string} destinationFilePath - 目标文件路径
 */
function copyFileUsingWriteFileSyncReadFileSync(sourceFilePath, destinationFilePath) {
  try {
    // 读取源文件
    const data = fs.readFileSync(sourceFilePath);
    // 将数据写入目标文件
    fs.writeFileSync(destinationFilePath, data);
    console.log('文件复制完成');
  } catch (err) {
    console.error('文件复制出错：', err);
  }
}

// 调用函数
copyFileUsingWriteFileSyncReadFileSync('sourceFile.txt', 'destinationFile.txt');


const fs = require('fs');

/**
 * 使用 fs.createWriteStream 和 fs.createReadStream 实现文件复制
 * @param {string} sourceFilePath - 源文件路径
 * @param {string} destinationFilePath - 目标文件路径
 */
function copyFileUsingCreateWriteStreamCreateReadStream(sourceFilePath, destinationFilePath) {
  // 创建可读流
  const readableStream = fs.createReadStream(sourceFilePath);
  // 创建可写流
  const writableStream = fs.createWriteStream(destinationFilePath);

  // 通过管道将可读流的数据写入到可写流
  readableStream.pipe(writableStream);

  // 监听可读流的结束事件
  readableStream.on('end', () => {
    console.log('文件复制完成');
  });

  // 监听错误事件
  readableStream.on('error', (err) => {
    console.error('文件复制出错：', err);
  });

  // 监听可写流的错误事件
  writableStream.on('error', (err) => {
    console.error('文件复制出错：', err);
  });
}

// 调用函数
copyFileUsingCreateWriteStreamCreateReadStream('sourceFile.txt', 'destinationFile.txt');


// 优缺点比较
// writeFile 和 readFile
// 优点：使用回调函数处理异步操作，适合处理大文件，不会阻塞事件循环。
// 缺点：需要嵌套回调，可读性较差，容易出现回调地狱。
// writeFileSync 和 readFileSync
// 优点：简单直观，可以处理同步操作，代码结构清晰。
// 缺点：使用同步操作会阻塞事件循环，不适合处理大文件或大量文件。
// createWriteStream 和 createReadStream
// 优点：通过流的方式逐块处理数据，适合处理大文件，不会阻塞事件循环。
// 缺点：代码较为复杂，需要处理流的事件和错误。
// 总结
// 使用 writeFile 和 readFile 的方式适合处理大文件，并且能够避免阻塞事件循环，但代码结构较为复杂。
// 使用 writeFileSync 和 readFileSync 的方式简单直观，但会阻塞事件循环，不适合处理大文件或大量文件。
// 使用 createWriteStream 和 createReadStream 的方式可以逐块处理数据，适合处理大文件，且不会阻塞事件循环，但需要处理流的事件和错误。
// 根据具体需求和场景选择合适的文件复制方式。