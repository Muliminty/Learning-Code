const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function (req, res, next) {
  res.render('portrait');
});

router.post('/portrait', function (req, res, next) {
  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: __dirname + '/../public/images/',
    keepExtensions: true // 保持文件扩展名
  });

  // 解析表单数据
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request');
      return;
    }

    console.log('fields: ', files);
    let url = `/images/${files.avatar[0].newFilename}`// 保存数据库

    res.send(url)
  });
});

module.exports = router;
