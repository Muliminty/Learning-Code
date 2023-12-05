const path = require('path');

// 使用 path.resolve 将路径或路径片段的序列解析为绝对路径
const resolvedPath = path.resolve('path', 'to', 'file.txt');
console.log('Resolved Path:', resolvedPath);

// 获取平台特定的路径片段分隔符
console.log('Path Separator:', path.sep);

// 使用 path.parse 解析路径
const parsedPath = path.parse('/path/to/file.txt');
console.log('Parsed Path:', parsedPath);

// 使用 path.basename 获取路径的最后一部分
const basename = path.basename('/path/to/file.txt');
console.log('Basename:', basename);

// 使用 path.dirname 获取路径的目录名
const dirname = path.dirname('/path/to/file.txt');
console.log('Dirname:', dirname);

// 使用 path.extname 获取路径的扩展名
const extname = path.extname('/path/to/file.txt');
console.log('Extname:', extname);


/**
运行上述代码将输出：

Resolved Path: /path/to/file.txt
Path Separator: /
Parsed Path: {
  root: '/',
  dir: '/path/to',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
Basename: file.txt
Dirname: /path/to
Extname: .txt



 * */
