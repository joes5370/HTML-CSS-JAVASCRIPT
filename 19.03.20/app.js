var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용


app.get('/practice3', function(req, res) {
  res.sendfile("writingReal.html");
});

app.get('/table', function(req, res) {
  res.sendfile("table.html");
});


app.get('/css', function(req, res) {
  res.sendfile("css.html");
});

app.get('/css1', function(req, res) {
  res.sendfile("css실습.html");
});

app.get('/practice4', function(req, res) {
  res.sendfile("practice.html");
});

app.get('/review', function(req, res){
  res.sendfile("review.html");
});
