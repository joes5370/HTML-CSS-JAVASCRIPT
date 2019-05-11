var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용

//서버가 database와 쿼리를 날려서 받아온다는 선언
var connection = mysql.createConnection({
  host : 'localhost'
  , port : 3306
  , user : 'root'
  , password : 'root'
  , database : 'webui'
})


app.get('/select', function (req, res) {
  //여기에 쿼리만 바꾸면 database에 쿼리 치는 거랑 같다.
  var selectQuery = `select * from news`;
  connection.query(selectQuery,
  function(err, rows, fields) {
    if(err) throw err;
    console.log(rows);
    res.send(rows);
  }
  )

});
