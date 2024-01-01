# express-generator 工具

Express-generator 是一个官方提供的快速生成 Express 应用骨架的命令行工具。使用它可以快速地创建一个基本的 Express 应用，省去了手动搭建应用的繁琐过程。

### 原理和作用

Express-generator 的原理是基于模板引擎（template engine）和静态文件服务器（static file server）来快速生成一个包含常用功能和约定目录结构的 Express 应用。通过命令行工具，我们可以自定义生成的应用所需要的模板引擎、CSS 预处理器、静态文件服务器等相关配置。对于新手或者对 Express 不熟悉的开发者来说，使用 Express-generator 可以节省很多时间，让开发更加高效。****

### 安装

使用 npm 全局安装 express-generator：

```bash
npm install -g express-generator
```

安装完成后，就可以在命令行中使用 `express` 命令生成 Express 应用了。

### 使用方法

使用 `express` 命令可以快速生成一个 Express 应用：

```bash
express myapp

express -e myapp //  -e是指增加 ejs 模板引擎的支持
```

这会在当前目录下创建一个名为 `myapp` 的 Express 应用，应用的基本目录结构如下：

```
myapp/
├── bin/
│   └── www
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   └── users.js
├── views/
│   ├── error.ejs
│   └── index.ejs
├── app.js
├── package.json
└── README.md
```

其中，`bin/www` 是应用的启动文件，`public` 目录存放静态文件，`routes` 目录存放路由文件，`views` 目录存放模板文件。

除了基本的目录结构以外，使用 `express` 命令还可以设置一些参数来自定义生成的应用。例如，使用 `--view` 参数可以设置模板引擎，使用 `--css` 参数可以设置 CSS 预处理器。

以下是常用的参数列表：

| 参数           | 作用                                                         |
| :------------- | :----------------------------------------------------------- |
| `--view engine` | 设置模板引擎，支持以下几种：`jade`、`ejs`、`hbs`、`pug`、`twig` |
| `--css`        | 设置 CSS 预处理器，支持以下几种：`less`、`sass`、`stylus`   |
| `--help`       | 查看帮助信息                                                 |

例如，使用以下命令创建一个使用 EJS 模板引擎、Stylus CSS 预处理器的 Express 应用：

```bash
express --view=ejs --css=stylus myapp
```

这会在当前目录下创建一个名为 `myapp` 的 Express 应用，并使用 EJS 模板引擎、Stylus CSS 预处理器。

### 代码案例与注释

以下是一个使用 Express-generator 生成的基本应用代码示例：

```javascript
// 引入依赖模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建 Express 应用实例
var app = express();

// 设置模板引擎和静态文件目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// 使用中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 捕获 404 并转发到错误处理器
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理器
app.use(function(err, req, res, next) {
  // 设置本地变量，只在开发时提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

注释：

```javascript
// 引入依赖模块
var createError = require('http-errors'); // 用于创建 HTTP 错误对象
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // 日志中间件

// 引入路由模块
var indexRouter = require('./routes/index'); // 首页路由
var usersRouter = require('./routes/users'); // 用户路由

// 创建 Express 应用实例
var app = express();

// 设置模板引擎和静态文件目录
app.set('views', path.join(__dirname, 'views')); // 设置模板文件目录
app.set('view engine', 'ejs'); // 设置模板引擎为 EJS
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录为 public

// 使用中间件
app.use(logger('dev')); // 使用日志中间件，输出到控制台
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置路由
app.use('/', indexRouter); // 使用首页路由
app.use('/users', usersRouter); // 使用用户路由

// 捕获 404 并转发到错误处理器
app.use(function(req, res, next) {
  next(createError(404)); // 创建 HTTP 404 错误对象并转发给错误处理器
});

// 错误处理器
app.use(function(err, req, res, next) {
  // 设置本地变量，只在开发时提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500); // 设置错误状态码
  res.render('error'); // 渲染 error.ejs 模板
});

module.exports = app; // 导出应用实例
```

在上面的代码中，路由模块分别定义在 `routes/index.js` 和 `routes/users.js` 文件中。这两个文件的代码示例如下：

```javascript
// routes/index.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

```javascript
// routes/users.js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```

其中，`routes/index.js` 定义了首页路由，对应 URL 为 `/`。`routes/users.js` 定义了用户路由，对应 URL 为 `/users`。

以上就是使用 Express-generator 工具快速生成 Express 应用的方法和示例代码。

### express-generator 的常用参数及其作用

| 参数           | 简写 | 作用                                                         |
| :------------- | :--- | :----------------------------------------------------------- |
| `--version`    |      | 输出 express-generator 的版本号                               |
| `-e, --ejs`    |      | 添加对 EJS 模板引擎的支持                                     |
| `--pug`        |      | 添加对 Pug（原 Jade）模板引擎的支持                           |
| `--hbs`        |      | 添加对 Handlebars 模板引擎的支持                              |
| `-H, --hogan`  |      | 添加对 Hogan.js 模板引擎的支持                                |
| `-v, --view`   |      | 添加指定模板引擎的支持，可选值：dust、ejs、hbs、hjs、jade、pug、twig、vash，默认为 jade |
| `--no-view`    |      | 使用静态 HTML 而不是模板引擎                                 |
| `-c, --css`    |      | 添加指定 CSS 预处理器的支持，可选值：less、stylus、compass、sass，默认为 plain CSS |
| `--git`        |      | 添加 .gitignore 文件，将项目添加到 Git 版本控制                 |
| `-f, --force`  |      | 在非空目录中强制执行，覆盖已有文件                           |
| `-h, --help`   |      | 输出使用帮助信息                                             |

使用 express-generator 可以快速创建一个基本的 Express 应用，省去手动搭建应用的繁琐过程。你可以根据自己的需求选择合适的模板引擎和 CSS 预处理器来生成应用骨架。
