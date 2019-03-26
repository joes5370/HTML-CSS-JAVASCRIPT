var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용

app.get('/', function (req, res) {
  res.send("main page");
});
// "/"를 보내면(Request) main page라는 응답(Respones)을 주세요

app.get('/test', function (req, res) {
  res.send("hello world");
});
//  "/test라는 요청을 받으면 respons를 (hello world)보내겠다"

app.get('/file', function (req, res) {
  res.sendfile("hello.html");
});
// sendfile로 불러와야한다.

app.get('/file2', function (req, res) {
  res.sendfile("file/Rawfile");
});
//파일 다운로드

app.get('/image', function (req, res) {
  res.sendfile("image/image.jpg");
});
//이미지 다운 후 이미지폴더에서 불러오기

app.get('/practice1', function (req, res) {
  res.sendfile("Practice.html");
});

app.get('/practice2', function (req, res) {
  res.sendfile("oneMore.html");
});

app.get('/practice3', function (req, res) {
  res.sendfile("writing.html");
});
