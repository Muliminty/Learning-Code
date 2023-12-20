// 1. 导入 express
const express = require('express');
// 2. 创建应用对象
const app = express();

// 3. 创建路由
app.get('/home', (req, res) => {
  // res.send('Hello World!');
  res.end('Hello express!');
});

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.end('home!');
});

// 4. 监听端口,启动服务
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});