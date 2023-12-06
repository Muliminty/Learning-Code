const fs = require('fs');

// unlink和unlinkSync都是Node.js中用于删除文件的方法，它们的使用方法和功能类似，但是有一些区别。
// unlink是一个异步方法，需要传入文件路径和一个回调函数作为参数。当文件删除成功删除时，回调函数会被调用。unlink方法的语法如下：

fs.unlink('Node-Code/FS模块相关内容/aa.txt', (err) => {
  if (err) throw err;
  console.log('文件已删除');
});


// unlinkSync是一个同步方法，也需要传入文件路径作为参数。当文件成功删除时，该方法会返回undefined；若删除失败，则会抛出一个错误。unlinkSync方法的语法如下：

try {
  fs.unlinkSync(path);
  console.log('文件已删除');
} catch (err) {
  console.error('文件删除失败', err);
}

// 优点：
// 1. 异步unlink方法不会阻塞其他代码的执行，适合用于删除文件的场景。
// 2. 同步unlinkSync方法可以更方便地处理删除文件时可能出现的错误。

// 缺点：
// 1. 异步unlink方法需要通过回调函数来处理删除文件后的逻辑，可能会导致回调地狱问题。
// 2. 同步unlinkSync方法会阻塞其他代码的执行，如果处理大量文件删除操作时，可能影响程序的性能。

// 总体来说，根据实际需求和场景的不同，我们可以选择使用unlink或unlinkSync来删除文件。





// 在Node.js中，也可以使用`fs.rm`方法来删除文件或目录。`fs.rm`方法是在Node.js 14.14.0版本中引入的，用于替代`fs.unlink`和`fs.rmdir`方法。它可以删除指定的文件或目录，语法如下：

fs.rm(path, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('文件或目录已删除');
});

// `fs.rm`方法接受两个参数，第一个参数是要删除的文件或目录的路径，第二个参数是一个配置对象，其中`recursive`属性表示是否递归删除目录及其内容。当`recursive`属性设置为`true`时，可以删除非空目录；当`recursive`属性设置为`false`或未指定时，只能删除空目录。

// 优点：
// 1. `fs.rm`方法整合了删除文件和目录的功能，使用更加方便。
// 2. 可以通过配置对象指定是否递归删除目录及其内容。

// 缺点：
// 1. `fs.rm`方法是异步方法，需要通过回调函数来处理删除后的逻辑。

// 总体来说，`fs.rm`方法是一个功能更加全面的文件删除方法，适用于删除文件和目录，并且可以通过配置对象进行更灵活的控制。