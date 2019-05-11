var express = require('express');
//express를 가져다(require) 쓰겠다
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// 80번 포트를 쓰겠다. ---서버를 만듬
// 81번 포트사용시 :포트번호 를 사용



app.get('/item', function (req, res) {
  res.sendfile("p.html");
});

///////////////////////////////////////////////////////
app.get('/getitem', function (req, res) {
  var inputPriceNumber = req.query.price;
  var result = "구매불가";
  var priceTable = [{name:"item1", price : 1000},{name:"item2",price:5000},
  {name:"item3",price:10000},{name:"item4",price:30000},{name:"item5",price:50000},
  {name:"item6",price:100000},{name:"item7",price:500000}];

  for(var i = 0; i < priceTable.length; i++){
    if(priceTable[i].price <= inputPriceNumber){
      result = priceTable[i].name;
    }
  }
  res.send(result);
});
////////////////////////////////////////////
app.get('/te', function (req, res) {
  res.sendfile("two.html");
});

///////////////////////////////////////////////

app.get('/send', function (req, res) {
  res.sendfile("car.html");
});

app.get('/carsend', function(req,res){
    var inputCar = Number(req.query.carBox)
    var inputColor = Number(req.query.colorBox)

    var carPrice = [2100,1300,1500,3500,3200]
    var colorPrice = [100,120,200,130,80]

    var result = (carPrice[inputCar]+colorPrice[inputColor])+"만원"

    res.send(result)
})


app.get('/return', function (req, res) {
  res.sendfile("test.html");
});
