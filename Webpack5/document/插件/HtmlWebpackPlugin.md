要使用 HtmlWebpackPlugin，需要按照以下步骤进行配置和使用：

1. 首先，确保已经在项目中安装了 `webpack` 和 `html-webpack-plugin` 这两个依赖。

   ```
   npm install webpack html-webpack-plugin --save-dev
   ```

2. 在 Webpack 配置文件中引入 `html-webpack-plugin`。

   ```javascript
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   ```

3. 在 plugins 属性中添加 HtmlWebpackPlugin 的实例。

   ```javascript
   module.exports = {
     // ...其他配置项
     plugins: [
       new HtmlWebpackPlugin({
         template: 'src/index.html', // 指定模板文件路径
         filename: 'index.html', // 指定生成的 HTML 文件名
       }),
     ],
   };
   ```

   在上面的示例中，我们指定了一个模板文件 `src/index.html`，并将生成的 HTML 文件命名为 `index.html`。你可以根据实际情况自定义模板文件的路径和生成的文件名。

4. 运行 Webpack 构建命令，生成 HTML 文件。

   ```
   npx webpack
   ```

   或者，如果有全局安装 Webpack 的话，可以直接运行 `webpack` 命令。

5. 构建完成后，在输出目录中会生成一个新的 HTML 文件，并且自动将打包生成的 JS 文件引入其中。

这样就完成了 HtmlWebpackPlugin 的基本配置和使用。你可以根据需要自定义更多的配置选项，例如设置页面标题、注入额外的代码等。

希望这些步骤能够帮助到你！如果还有其他问题，请随时提问。