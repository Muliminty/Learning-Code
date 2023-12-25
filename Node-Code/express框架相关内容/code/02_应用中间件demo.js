const express = require('express');
const fs = require('fs');
const app = express();

// 访问信息记录中间件
const loggerMiddleware = (req, res, next) => {
  const ip = req.ip; // 获取客户端的 IP 地址
  const route = req.originalUrl; // 获取请求的路由路径
  const timestamp = new Date().toLocaleString(); // 获取当前时间

  const logMessage = `IP: ${ip} - Route: ${route} - Time: ${timestamp}\n`;

  // 将访问信息同步追加到 access.log 文件
  try {
    fs.appendFileSync('access.log', logMessage);
  } catch (err) {
    console.error('Failed to write access log:', err);
  }
  // 执行后续的路由回调
  next();
};

// 应用级中间件
app.use(loggerMiddleware);

// 路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
