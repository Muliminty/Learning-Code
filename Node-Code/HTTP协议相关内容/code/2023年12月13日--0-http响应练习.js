const http = require('http'); // 引入http模块

// 创建一个HTTP服务器
const server = http.createServer((request, response) => {
  // 设置响应头
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // 构建HTML表格内容
  const tableContent = `
    <html>
    <head>
      <style>
        table {
          border-collapse: collapse;
          width: 50%;
        }
        table, th, td {
          border: 1px solid black;
        }
        th, td {
          padding: 10px;
          text-align: center;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        tr:nth-child(odd) {
          background-color: #ffffff;
        }
        td:hover {
          background-color: yellow;
        }
      </style>
    </head>
    <body>
      <table>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
        <tr>
          <td>Row 1 Col 1</td>
          <td>Row 1 Col 2</td>
          <td>Row 1 Col 3</td>
        </tr>
        <tr>
          <td>Row 2 Col 1</td>
          <td>Row 2 Col 2</td>
          <td>Row 2 Col 3</td>
        </tr>
        <tr>
          <td>Row 3 Col 1</td>
          <td>Row 3 Col 2</td>
          <td>Row 3 Col 3</td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // 返回HTML表格内容
  response.end(tableContent);
});

// 监听3000端口
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
