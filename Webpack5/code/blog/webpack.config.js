const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development', // 指定Webpack的工作模式是开发模式
  entry: './src/index.js', // 指定Webpack的入口文件
  output: {
    filename: 'dist.js', // 指定Webpack输出的文件名
    path: path.resolve(__dirname, 'dist') // 指定Webpack输出的目录路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo', // 指定生成的HTML文件的标题
      // template: 'src/index.html', // 指定模板文件路径
      filename: 'index.html', // 指定生成的 HTML 文件名
    }),
  ],
  module: { // 配置Webpack的模块处理规则
    rules: [
      {
        test: /\.css$/, // 匹配处理以.css结尾的文件
        use: ['style-loader', 'css-loader'] // 指定使用的loader，用于处理CSS文件
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 匹配处理图片文件
        // use: ['file-loader'] // 指定使用的loader，用于处理图片文件
        type: 'asset/resource'// 指定使用的loader，用于处理图片文件
      }
    ]
  },

};
