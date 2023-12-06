
/**
 * 获取文件或目录的详细信息（异步）
 * @param {string} path - 要查询的文件或目录的路径
 * @param {function(Error, fs.Stats)} callback - 查询完成后的回调函数，第一个参数为可能的错误，第二个参数为文件或目录的详细信息
 * @returns {void}
 */
fs.stat(path, callback);

/**
 * 获取文件或目录的详细信息（同步）
 * @param {string} path - 要查询的文件或目录的路径
 * @returns {fs.Stats} - 文件或目录的详细信息
 */
const stats = fs.statSync(path);


const fs = require('fs');

// 异步方式获取文件或目录详细信息
const filePath = 'example.txt';
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error('获取文件信息失败', err);
  } else {
    console.log('文件信息:', stats);
  }
});

// 同步方式获取文件或目录详细信息
try {
  const statsSync = fs.statSync(filePath);
  console.log('文件信息（同步）:', statsSync);
} catch (err) {
  console.error('获取文件信息失败（同步）', err);
}


// `fs.stat`和`fs.statSync`方法都可以用来获取文件或目录的详细信息。
// `fs.stat`是异步方法，需要传入一个回调函数来处理查询结果或错误；
// 而`fs.statSync`是同步方法，会阻塞程序直到查询完成并返回文件或目录的详细信息。