const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // 引入压缩插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;// 引入打包分析插件

module.exports = {
  mode: 'development', // 指定Webpack的工作模式是开发模式
  devtool: 'inline-source-map', // 指定source map的类型 也就是将 source map 直接包含在输出的 bundle 文件中，而不是单独生成一个 .map 文件。
  entry: './src/index.js', // 指定Webpack的入口文件
  output: {
    filename: 'dist.js',
    // filename: '[name].[contenthash].js', // 指定Webpack输出的文件名 [name] 代表入口文件的名称 [contenthash] 代表文件内容的 hash 值
    path: path.resolve(__dirname, 'dist') // 指定Webpack输出的目录路径
  },
  // 其他配置项
  optimization: { // 优化项
    minimize: true, // 是否开启代码压缩
    minimizer: [new TerserPlugin()], // 使用 TerserPlugin 压缩代码
  },
  // 开发服务器配置
  devServer: {
    static: './dist', // 指定静态文件目录
    port: 8080 // 服务器端口号
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo', // 指定生成的HTML文件的标题
      // template: 'src/index.html', // 指定模板文件路径
      filename: 'index.html', // 指定生成的 HTML 文件名
    }),
    new BundleAnalyzerPlugin(),// 使用打包分析插件
  ],
  resolve: {// 配置Webpack如何寻找模块所对应的文件
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),// 配置别名
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,// 排除 node_modules 目录下的文件 不需要转换
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ]
  },

};
