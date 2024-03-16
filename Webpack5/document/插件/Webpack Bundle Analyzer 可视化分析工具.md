当使用 Webpack Bundle Analyzer 时，你需要按照以下步骤进行安装和配置：

1. **安装 Webpack Bundle Analyzer**:
   首先，确保你的项目中已经安装了 Webpack 和相应的构建工具。然后，可以通过 npm 或 yarn 进行安装：
   ```
   npm install --save-dev webpack-bundle-analyzer
   ```
   或
   ```
   yarn add -D webpack-bundle-analyzer
   ```

2. **Webpack 配置**:
   在你的 Webpack 配置文件中，添加对 Bundle Analyzer 插件的引用和配置。在这里我假设你是使用的是 `webpack.config.js` 文件作为配置文件。在该文件中，修改或添加如下配置：

   ```javascript
   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

   module.exports = {
     // 其他配置...
     plugins: [
       // 其他插件...
       new BundleAnalyzerPlugin()
     ]
   };
   ```

   通过以上配置，我们在 Webpack 构建过程中引入了 BundleAnalyzerPlugin 插件，并在构建完成后会自动打开一个可视化分析页面。

3. **运行构建**:
   确保你已经完成了以上配置，并且已经保存了你的 Webpack 配置文件。接下来，在命令行中执行构建命令，比如：
   ```
   npx webpack --config webpack.config.js
   ```
或者
```
   npx webpack
```
4. **查看分析结果**:
   构建完成后，Webpack Bundle Analyzer 会自动启动一个本地服务器，并打开一个可视化分析页面。通常情况下，它会显示一个 URL 地址，你可以通过浏览器访问该地址来查看分析结果。
