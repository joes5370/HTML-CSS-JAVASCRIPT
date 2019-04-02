var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용

app.get('/h', function(req, res) {
  res.sendfile("js.html");
});

app.get('/h1', function(req, res) {
  res.sendfile("view.html");
});

app.get('/h2', function(req, res) {
  res.sendfile("for.html");
});

app.get('/h3', function(req, res) {
  res.sendfile("for2.html");
});

app.get('/h4', function(req, res) {
  res.sendfile("control.html");
});
