## `formidable`模块

`formidable`是一个Node.js模块，可以用来解析HTML表单数据，包括文件上传。 它可以让我们轻松地处理文件上传和其他表单数据，而无需手动解析`multipart/form-data`格式。

### 原理

当客户端通过HTTP POST请求提交表单数据时，服务器会接收到一个包含表单数据的请求体。如果表单中包含文件上传域，则请求体将以`multipart/form-data`格式发送。

`formidable`使用Node.js内置的`stream`模块读取请求体，并将其解析成对应的表单字段和文件。它还支持在解析过程中对文件进行流式处理，以节省内存和磁盘空间。

### 安装

在使用`formidable`之前，需要先将其安装为项目的依赖项，可以通过以下命令进行安装：

```sh
npm install formidable --save
```

### 使用方法

#### 1. 引入`formidable`模块

```javascript
const formidable = require('formidable');
```

#### 2. 创建`formidable.IncomingForm`实例

```javascript
const form = new formidable.IncomingForm();
```

该实例包含了处理表单数据所需的全部参数信息，可以在创建时进行配置。

#### 3. 解析表单数据

```javascript
form.parse(req, (err, fields, files) => {
  // 处理表单数据
});
```

`form.parse()`方法会从请求中读取表单数据，并将其解析成`fields`和`files`两个对象。其中，`fields`包含所有非文件字段的值，而`files`则包含所有上传的文件信息。

#### 4. 处理上传的文件

```javascript
const oldPath = files.upload.path;
const newPath = __dirname + '/../public/images/' + files.upload.name;

fs.rename(oldPath, newPath, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File uploaded successfully');
});
```

`files`对象包含了所有上传的文件信息，可以通过其属性访问到具体的文件。在处理文件时，我们需要将其从临时路径移动到指定的目标路径。这里使用了Node.js的`fs.rename()`方法来完成文件的移动。

### 配置参数

`formidable.IncomingForm`实例可以通过传递一个参数对象进行配置。以下是常用的配置参数：

- `encoding`：表单的编码格式，默认为utf-8。
- `uploadDir`：文件上传的临时目录，默认为os.tmpdir()。
- `keepExtensions`：是否保留上传文件的扩展名，默认为false。
- `maxFieldsSize`：最大允许的非文件字段的大小（字节），超出会抛出错误。默认为20MB。
- `maxFileSize`：最大允许的文件大小（字节），超出会抛出错误。默认为200MB。
- `multiples`：是否支持多文件上传，默认为false。

以下是一个完整的代码示例：

```javascript
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');

router.post('/upload', function (req, res) {
  // 创建formidable实例
  const form = new formidable.IncomingForm({
    encoding: 'utf-8',
    uploadDir: __dirname + '/../public/uploads/',
    keepExtensions: true,
    maxFieldsSize: 2 * 1024 * 1024,
    maxFileSize: 10 * 1024 * 1024,
    multiples: true
  });

  // 解析表单数据
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(fields); // 非文件字段
    console.log(files); // 文件信息

    // 处理上传的文件
    if (files.file) {
      const oldPath = files.file.path;
      const newPath = __dirname + '/../public/uploads/' + files.file.name;

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('File uploaded successfully');
      });
    }

    res.send('Upload succeeded');
  });
});

module.exports = router;
```

在上述代码中，我们创建了一个`formidable`实例，并将其用于处理表单数据。在处理文件上传时，我们将上传的文件从临时路径移动到指定的目录中。

