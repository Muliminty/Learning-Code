const ejs = require('ejs'); // 引入ejs模块
const fs = require('fs'); // 引入fs模块（文件系统模块）

// 读取模板文件
const template = fs.readFileSync('template.ejs', 'utf-8'); // 使用fs模块的readFileSync方法读取模板文件的内容，并指定编码为utf-8

// 渲染模板
const data = {
  title: 'EJS Template', // 定义一个title变量
  message: 'Hello EJS!', // 定义一个message变量
  showItems: true, // 定义一个showItems变量
  items: ['Item 1', 'Item 2', 'Item 3'] // 定义一个items数组变量
};
const html = ejs.render(template, data); // 使用ejs模块的render方法渲染模板，传入模板内容和数据对象，并返回渲染后的HTML结果

// 输出结果
console.log(html); // 打印渲染后的HTML结果
