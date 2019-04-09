var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용

app.get('/a', function(req, res) {
  res.sendfile("array.html");
});

app.get('/aa', function(req, res) {
  res.sendfile("arrayT.html");
});

app.get('/aaa', function(req,res){
  res.sendfile("array2.html")
});

app.get('/a4', function(req,res){
  res.sendfile("array3.html")
});
