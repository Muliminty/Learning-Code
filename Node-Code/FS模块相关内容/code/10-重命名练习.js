// 导入fs模块
const fs = require('fs');

// 读取code文件夹
const files = fs.readdirSync('./code');

// 遍历文件夹中的文件
files.forEach((item) => {

  // 根据'-'分割文件名
  let data = item.split('-')

  // 解构赋值得到编号和名称
  let [num, name] = data

  // 如果编号小于10，给编号补零
  if (Number(num) < 10) {
    num = '0' + num
  }

  // 拼接新的文件名
  let newName = num + '-' + name;

  // 打印新的文件名
  console.log('newName: ', newName);

  // 重命名文件
  // fs.renameSync(`./ code / ${item} `, `./ code / ${newName} `);
})

// 这段代码首先通过`fs.readdirSync`同步地读取了指定目录下的文件列表，然后遍历每个文件名。对于每个文件名，它首先使用`split`方法将文件名按照`-`进行分割，然后根据特定逻辑对编号进行处理，接着将编号和名称重新拼接成新的文件名，最后使用`fs.renameSync`方法进行文件重命名。

// 优点：
// 1. 简单直观，易于理解。
// 2. 使用的是同步的`fs`模块，适用于一次性的操作。

// 缺点：
// 1. 使用了同步的`fs`方法，如果文件较多或者文件较大，会阻塞事件循环，影响性能。
// 2. 没有对文件是否存在进行判断，可能会导致文件重名或者文件不存在的错误。