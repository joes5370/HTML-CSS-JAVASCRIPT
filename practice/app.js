var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용


app.get('/practice', function (req, res) {
  res.sendfile("bb.html");
});

app.get('/practice2', function (req, res) {
  res.sendfile("aa.html");
});

app.get('/practice3', function (req, res) {
  res.sendfile("bbb.html");
});


app.get('/practice4', function (req, res) {
  res.sendfile("Test(JUNGHYUNGSUK).html");
});

app.get('/test', function (req, res) {
  res.sendfile("Test.html");
});

app.get('/testFun', function (req, res) {
  var inputN = Number(req.query.inputN);
  var result = "구매불가"
  var priceTable = [{name:"item1", price : 1000},{name:"item2",price:5000},
  {name:"item3",price:10000},{name:"item4",price:30000},{name:"item5",price:50000},
  {name:"item6",price:100000},{name:"item7",price:500000}];

  for(var i = 0; i < priceTable.length; i++){
    if(priceTable[i].price <= inputN){
      result = priceTable[i].name;
    }
  }

  res.send(result);
});
