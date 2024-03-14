const path = require('path');

module.exports = {
  mode: 'development', // 指定Webpack的工作模式是开发模式
  entry: './src/index.js', // 指定Webpack的入口文件
  output: {
    filename: 'dist.js', // 指定Webpack输出的文件名
    path: path.resolve(__dirname, 'dist') // 指定Webpack输出的目录路径
  },
  module: { // 配置Webpack的模块处理规则
    rules: [
      {
        test: /\.css$/, // 匹配处理以.css结尾的文件
        use: ['style-loader', 'css-loader'] // 指定使用的loader，用于处理CSS文件
      }
    ]
  }
};
