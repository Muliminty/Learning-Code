# Express 应用程序实例方法

Express 应用程序实例 `app` 提供了许多方法来定义路由、中间件和其他功能。

## app.METHOD(path, [callback, ...] callback)

用于定义不同 HTTP 方法（GET、POST、PUT、DELETE 等）的路由。

```javascript
// 处理 GET 请求
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 处理 POST 请求
app.post('/users', (req, res) => {
  // 处理用户提交的数据
});

// 处理 PUT 请求
app.put('/users/:id', (req, res) => {
  // 更新指定 ID 的用户数据
});

// 处理 DELETE 请求
app.delete('/users/:id', (req, res) => {
  // 删除指定 ID 的用户数据
});
```

## app.all(path, callback)

用于定义可以匹配所有 HTTP 方法的路由。

```javascript
// 匹配所有 HTTP 方法
app.all('/users', (req, res) => {
  // 处理请求
});
```

## app.use([path,] callback [, callback...])

将中间件函数绑定到应用程序的特定路径。可以用于处理请求、响应和应用程序的状态。

```javascript
// 使用中间件函数处理所有请求
app.use((req, res, next) => {
  // 在此处进行通用处理
  next(); // 调用 next() 将控制权传递给下一个中间件或路由处理程序
});

// 使用中间件函数处理特定路径的请求
app.use('/users', (req, res, next) => {
  // 处理 /users 路径的请求
  next();
});
```

## app.param(name, callback)

用于在路由中捕获特定参数，并执行预处理操作。

```javascript
// 在路由中捕获用户 ID 参数
app.param('id', (req, res, next, id) => {
  // 在此处处理用户 ID 参数
  req.user = getUserById(id); // 假设有一个函数获取指定 ID 的用户数据
  next();
});

// 使用捕获到的参数进行处理
app.get('/users/:id', (req, res) => {
  const user = req.user; // 使用之前捕获到的用户数据
  res.send(user);
});
```

## app.set(setting, value)

用于设置应用程序的参数，例如视图引擎、端口号等。

```javascript
// 设置视图引擎
app.set('view engine', 'ejs');

// 设置端口号
app.set('port', 3000);

// 获取设置的参数值
const viewEngine = app.get('view engine');
const port = app.get('port');
```

## app.get(setting)

用于获取应用程序的参数值。

```javascript
const viewEngine = app.get('view engine');
const port = app.get('port');
```

## app.engine(ext, callback)

定义模板引擎的回调函数。

```javascript
// 定义 ejs 模板引擎
app.engine('ejs', (filePath, options, callback) => {
  // 在此处渲染模板并调用回调函数
});

// 设置视图引擎为 ejs
app.set('view engine', 'ejs');
```

## app.render(view, [locals], callback)

渲染视图并将其发送给客户端。

```javascript
// 渲染视图并发送给客户端
app.get('/users', (req, res) => {
  const users = getUsers(); // 假设有一个函数获取用户数据
  res.render('users', { users });
});
```

## app.listen(port, [hostname], [backlog], [callback])

启动应用程序监听指定的端口和可选的主机名。

```javascript
// 启动服务器监听指定端口
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

## app.route(path)

返回一个新的路由对象，可以使用链式调用来为该路径定义多个 HTTP 方法的处理程序。

```javascript
// 定义 /users 路径的多个处理程序
app.route('/users')
  .get((req, res) => {
    // 处理 GET 请求
  })
  .post((req, res) => {
    // 处理 POST 请求
  })
  .put((req, res) => {
    // 处理 PUT 请求
  })
  .delete((req, res) => {
    // 处理 DELETE 请求
  });
```

以上是 Express 应用程序实例 `app` 的常用方法的详细介绍和示例代码

请注意，示例代码中的函数和变量名（如 `getUserById()`、`getUsers()`）是占位符，你需要根据你的实际需求来实现这些功能。此外，确保在使用 Express 之前，先通过 `npm install express` 安装 Express 模块。
