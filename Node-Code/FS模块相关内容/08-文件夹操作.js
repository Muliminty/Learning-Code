/**
 * 创建文件夹（异步）
 * @param {string} path - 要创建的文件夹路径
 * @param {Object} options - 可选参数，包括recursive属性，表示是否创建多层目录
 * @param {Function} callback - 回调函数，当文件夹创建完成时调用，参数为可能的错误对象
 */
fs.mkdir(path, options, callback);

/**
 * 创建文件夹（同步）
 * @param {string} path - 要创建的文件夹路径
 * @param {Object} options - 可选参数，包括recursive属性，表示是否创建多层目录
 */
fs.mkdirSync(path, options);


/**
 * 读取文件夹内容（异步）
 * @param {string} path - 要读取的文件夹路径
 * @param {Object} options - 可选参数，包括withFileTypes属性，若为true，则返回的数组包含fs.Dirent对象
 * @param {Function} callback - 回调函数，当文件夹内容读取完成时调用，参数为可能的错误对象和一个包含文件名的数组（或fs.Dirent对象）
 */
fs.readdir(path, options, callback);

/**
 * 读取文件夹内容（同步）
 * @param {string} path - 要读取的文件夹路径
 * @param {Object} options - 可选参数，包括withFileTypes属性，若为true，则返回的数组包含fs.Dirent对象
 * @returns {Array<fs.Dirent | string>} - 包含文件名的数组（或fs.Dirent对象）
 */
fs.readdirSync(path, options);

/**
 * 删除文件夹（异步） 推荐使用 rm
 * @param {string} path - 要删除的文件夹路径
 * @param {Object} options - 可选参数，包括recursive属性，表示是否递归删除目录及其内容
 * @param {Function} callback - 回调函数，当文件夹删除完成时调用，参数为可能的错误对象
 */
fs.rmdir(path, options, callback);

fs.rm(path, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('文件或目录已删除');
});

/**
 * 删除文件夹（同步）
 * @param {string} path - 要删除的文件夹路径
 * @param {Object} options - 可选参数，包括recursive属性，表示是否递归删除目录及其内容
 */
fs.rmdirSync(path, options);
