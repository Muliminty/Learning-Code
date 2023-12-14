const http = require('http'); // 引入http模块
const fs = require('fs'); // 引入fs模块，用于文件操作
const path = require('path'); // 引入path模块，用于处理文件路径
const { URL } = require('url'); // 引入URL类，用于解析URL

// 创建一个HTTP服务器
const server = http.createServer((request, response) => {
  // 判断请求方法是否为GET
  if (request.method === 'GET') {
    // 使用URL类解析请求路径
    const url = new URL(request.url, `http://${request.headers.host}`);
    const urlPath = url.pathname;

    // 根据不同路径返回不同的页面
    let filePath = '';
    if (urlPath === '/login') {
      filePath = path.join(__dirname, 'login.html'); // 拼接出login.html的绝对路径
    } else if (urlPath === '/register') {
      filePath = path.join(__dirname, 'register.html'); // 拼接出register.html的绝对路径
    } else {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Not Found'); // 返回404错误
      return;
    }

    // 读取文件并返回响应
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error'); // 如果读取文件出错，返回500错误
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data); // 返回读取的文件内容
      }
    });
  } else {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end('Method Not Allowed'); // 如果请求方法不是GET，返回405错误
  }
});

// 监听3000端口
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
