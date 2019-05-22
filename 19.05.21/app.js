var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');

// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용

//post방식 추가
// var bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.ues(bodyParser.json());


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webui'
})

app.get('/newsList', function(req, res) {
  res.sendfile("newList.html");
});
