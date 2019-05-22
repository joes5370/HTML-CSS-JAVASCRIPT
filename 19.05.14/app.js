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

app.get('/news', function(req, res) {
  var no = req.query.no
  var selectQuery = `select no, title, text, writer from news`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});


app.get('/form', function(req, res) {
  res.sendfile("selectHtml.html");
});

app.get('/dbSelectTest', function(req, res) {
  var selectQuery = `select * from news`;

  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows[0]);
    });
});

app.get('/insert', function(req, res) {
  res.sendfile("insertNew.html");
});

app.get('/insertNews', function(req, res) {
  var title = req.query.title;
  var text = req.query.text;
  var writer = req.query.writer;

  var insertQuery = `insert into news (title, text, writer) values ("${title}","${text}","${writer}")`;
  console.log(insertQuery);

  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

//  POST방식 사용하기
// app.post('/insertPost', function (req, res) {
//   var title = req.body.title;
//   var text = req.body.text;
//
//   var selectQuery = `insert into news (title, text) values ("${title}","${text}")`;
//
//   connection.query(selectQuery,
//     function(err, rows, fields){
//       res.send(rows);
//   });
// });


app.get('/dd', function(req, res) {
  res.sendfile("delete.html");
});

app.get('/delete', function(req, res) {
  var dtitle = req.query.dtitle;
  var deleteQuery = `DELETE FROM news WHERE  title="${dtitle}"`;
  console.log(deleteQuery);

  connection.query(deleteQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/all', function(req, res) {
  res.sendfile("allDeletehtml.html");
});

app.get('/allDelete', function(req, res) {

  var alldeleteQuery = `truncate table news `;
  console.log(alldeleteQuery);

  connection.query(alldeleteQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});


app.get('/delete1', function(req, res) {
  var dno = req.query.no;
  var deleteQuery = `DELETE FROM news WHERE no="${dno}"`;
  console.log(deleteQuery);

  connection.query(deleteQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/updateNews', function(req, res) {
  var uTitle = req.query.title;
  var uText = req.query.text;
  var uNo = req.query.no
  var uWriter = req.query.writer
  var updateQuery = `update news set title= '${uTitle}', text = '${uText}', writer = '${uWriter}' where no = ${uNo}`;
  console.log(updateQuery);

  connection.query(updateQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/update', function(req, res) {
  res.sendfile("update.html");
});

app.get('/getNews', function(req, res) {
  var no = req.query.no
  var updateQuery = `select * from news where no=${no}`;
  connection.query(updateQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});
