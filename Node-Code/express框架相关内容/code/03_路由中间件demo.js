// 针对/admin /setting的请求，
// 要求URL携带code=521参数，如未携带提示『暗号错误」

const express = require('express');
const app = express();

// 路由中间件
const adminSettingMiddleware = (req, res, next) => {
  const code = req.query.code; // 获取 URL 参数 code 的值

  if (code !== '521') {
    return res.status(400).send('暗号错误'); // 如果 code 不等于 521，则返回错误提示
  }

  // 如果 code 等于 521，则继续处理请求
  next();
};

// 应用级中间件
app.use(express.json()); // 解析请求体中的 JSON 数据
app.use(express.urlencoded({ extended: true })); // 解析请求体中的 URL 编码数据

// 使用路由中间件来处理具体路由
app.get('/admin', adminSettingMiddleware, (req, res) => {
  // 在这里处理 /admin 的请求
  res.send('设置页面admin');
});
app.get('/setting', adminSettingMiddleware, (req, res) => {
  // 在这里处理 /setting 的请求
  res.send('设置页面setting');
});
// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
