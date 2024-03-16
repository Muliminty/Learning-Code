在 Webpack 中，常用的用于压缩打包体积的插件是 `TerserPlugin`。`TerserPlugin` 是一个用于 JavaScript 压缩的 Webpack 插件，它可以帮助你在构建过程中对代码进行压缩优化，从而减小最终生成的 bundle 文件的体积。

以下是如何在 Webpack 中配置和使用 `TerserPlugin` 插件：

**1. 安装 `TerserPlugin`：**

首先，需要安装 `TerserPlugin` 插件：

```bash
npm install terser-webpack-plugin --save-dev
```

**2. 配置 Webpack：**

在 Webpack 配置文件中引入 `TerserPlugin`，并将其添加到 plugins 列表中：

```javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // 其他配置项
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

在上述配置中，我们通过 `TerserPlugin` 来进行代码压缩，并将其作为一个 minimizer 添加到 Webpack 的 optimization 配置中。这样在构建时就会对代码进行压缩处理。

**3. 运行 Webpack：**

运行 Webpack 构建命令，Webpack 将会在构建过程中使用 `TerserPlugin` 对 JavaScript 代码进行压缩优化，从而减小最终生成的 bundle 文件的体积。

通过以上步骤，你就成功地配置了 `TerserPlugin` 插件来压缩打包体积。这样可以有效减少前端项目的文件大小，提升页面加载速度和性能。

如果需要进一步的帮助或有其他问题，请随时告诉我！我很乐意协助你。