var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용


app.get('/jq', function (req, res) {
  res.sendfile("jquery.html");
});


app.get('/test', function (req, res) {
  console.log(req.query.a, req.query.b);
  res.send("helloWorld");
});

/////////////////////////////////////////////////

app.get('/sumform', function (req, res) {
  res.sendfile("sum.html");
});

app.get('/sum', function (req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  console.log(num1,num2);
  res.send(`sum is ${num1+num2}`);
});

app.get('/multi', function (req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  console.log(num1,num2,num3);
  res.send(`multifle is ${num1*num2*num3}`);
});

//////////////////////////////////////////////////

app.get('/practice', function (req, res) {
  res.sendfile("practice.html");
});

app.get('/pracSum', function (req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  console.log(num1,num2,num3);
  res.send(`allSum is ${num1+num2+num3}`);
});





/////////////////////////////////////////////

app.get('/itemForm', function (req, res) {
  res.sendfile("itemForm.html");
});

app.get('/item', function (req, res) {
  var inputN = Number(req.query.inputN);
  var result = "구매불가";
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
