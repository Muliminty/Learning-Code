const fs = require('fs');

/**
 * 使用 fs.rename 方法移动或重命名文件或文件夹
 * @param {string} oldPath - 旧的文件或文件夹路径
 * @param {string} newPath - 新的文件或文件夹路径
 * @param {Function} callback - 回调函数
 */
function moveOrRenameFileOrFolderUsingRename(oldPath, newPath, callback) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

// 调用函数
moveOrRenameFileOrFolderUsingRename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) {
    console.error('移动或重命名文件出错：', err);
  } else {
    console.log('文件移动或重命名成功');
  }
});




const fs = require('fs');

/**
 * 使用 fs.renameSync 方法移动或重命名文件或文件夹
 * @param {string} oldPath - 旧的文件或文件夹路径
 * @param {string} newPath - 新的文件或文件夹路径
 */
function moveOrRenameFileOrFolderUsingRenameSync(oldPath, newPath) {
  try {
    fs.renameSync(oldPath, newPath);
    console.log('文件移动或重命名成功');
  } catch (err) {
    console.error('移动或重命名文件出错：', err);
  }
}

// 调用函数
moveOrRenameFileOrFolderUsingRenameSync('oldFile.txt', 'newFile.txt');


// 优缺点比较
// rename
// 优点：使用回调函数处理异步操作，适合处理大文件或大量文件，不会阻塞事件循环。
// 缺点：需要嵌套回调，可读性较差，容易出现回调地狱。
// renameSync
// 优点：简单直观，可以处理同步操作，代码结构清晰。
// 缺点：使用同步操作会阻塞事件循环，不适合处理大文件或大量文件。
// 总结
// 使用 rename 方法适合处理大文件或大量文件，并且能够避免阻塞事件循环，但代码结构较为复杂。
// 使用 renameSync 方法简单直观，但会阻塞事件循环，不适合处理大文件或大量文件。