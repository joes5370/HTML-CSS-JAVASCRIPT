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

app.get('/t', function(req, res) {
  res.sendfile("t.html");
});

app.get('/time', function(req, res) {
  res.sendfile("time.html");
});

////////////////////////////////////////////////////////////////////////////////////

app.get('/flightListPage', function(req, res) {
  res.sendfile("flightListPage.html");
});

app.get('/flightList', function(req, res) {
  var no = req.query.no
  var selectQuery = `select flightName, aircraftName, aircraftCode, departure, arrival, departTime, arrivalTime from flight`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/insertflightList', function(req, res) {
  res.sendfile("insertflightList.html");
});

app.get('/insertList', function(req, res) {
  var name = req.query.name;
  var code = req.query.code;
  var depart = req.query.depart;
  var arrive = req.query.arrive;
  var departTime = req.query.departTime;
  var arriveTime = req.query.arriveTime;

  var insertQuery = `insert into flight (flightName, aircraftCode, departure, arrival, departTime, arrivalTime) values ("${name}","${code}","${depart}","${arrive}","${departTime}","${arriveTime}")`;
  console.log(insertQuery);

  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});


app.get('/insertflightPage', function(req, res) {
  res.sendfile("insertflightPage.html");
});

app.get('/insertflight', function(req, res) {
  var code = req.query.code;
  var name = req.query.name;
  var seats = req.query.seats;

  var insertQuery = `insert into aircraft (aircraftCode, aircraftName, seats) values ("${code}","${name}","${seats}")`;
  console.log(insertQuery);

  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});


app.get('/delete', function(req, res) {
  var dno = req.query.no;
  var deleteQuery = `DELETE FROM aircraft WHERE no="${dno}"`;
  console.log(deleteQuery);

  connection.query(deleteQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/delete1', function(req, res) {
  var dno = req.query.no;
  var deleteQuery = `DELETE FROM flight WHERE no="${dno}"`;
  console.log(deleteQuery);

  connection.query(deleteQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/insertflightSelect', function(req, res) {
  var no = req.query.no
  var selectQuery = `select no, aircraftCode, aircraftName, seats from aircraft`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/insertListSelect', function(req, res) {
  var no = req.query.no
  var selectQuery = `select no, flightName, aircraftCode, departure, arrival, departTime, arrivalTime from flight`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/joinSelect', function(req, res) {
  var no = req.query.no
  var selectQuery = `select * from flight f, aircraft a where f.aircraftCode = a.aircraftCode`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
});
