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


app.get('/js', function(req, res) {
  res.sendfile("JavaScript.html");
});


app.get('/js1', function(req, res) {
  res.sendfile("js.html");
});

app.get('/jsif', function(req, res) {
  res.sendfile("js_if.html");
});


app.get('/jsb', function(req, res) {
  res.sendfile("js_button.html");
});

app.get('/jsbbb', function(req, res) {
  res.sendfile("jsb_event.html");
});

app.get('/jsfor', function(req, res) {
  res.sendfile("jsfor.html");
});
