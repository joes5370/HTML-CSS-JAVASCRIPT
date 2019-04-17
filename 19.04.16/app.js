var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용

app.get('/369', function(req, res) {
  res.sendfile("369.html")
});

app.get('/2', function(req, res) {
  res.sendfile("two dimensions array.html")
});

app.get('/3', function(req, res) {
  res.sendfile("two issue.html")
});

app.get('/4', function(req, res) {
  res.sendfile("object.html")
});

app.get('/5', function(req, res) {
  res.sendfile("object2.html")
});

app.get('/6', function(req, res) {
  res.sendfile("object_issue.html")
});
