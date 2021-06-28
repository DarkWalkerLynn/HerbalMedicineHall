var express = require('express');
var app = express();
var fs = require("fs");

//添加的新用户数据
app.get('/addUser', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
   // 读取已存在的数据
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
	   var newUser=JSON.parse(req.query["user"]);
       data = JSON.parse( data );
       // data[newUser["itemName"]] = newUser["user"];
	   data.push(newUser);
       data_write=data;
	   console.log( data );
	   fs.writeFile("user.json",JSON.stringify(data)+'','utf8',function(err, data){
			if (err) throw err;
		    console.log('The file has been saved!');
	   });
       res.end( JSON.stringify(data));
	   // console.log(JSON.parse(req.query["user"]));
   });
})

app.get('/listUsers', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/id:id', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
	   var result="0";
	   for(var item in data){
		   // console.log(data[item]);
		   if(data[item].id==req.params.id){
			   result=JSON.stringify(data[item]);
		   }
	   }
       // var user = data["user" + req.params.id] 
       // console.log( user );
	   // console.log(result);
       res.end(result);
   });
})

app.get('/phoneNumber:phoneNumber', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
	   var result="0";
	   for(var item in data){
		   // console.log(data[item]);
		   if(data[item].phoneNumber==req.params.phoneNumber){
			   result=JSON.stringify(data[item]);
		   }
	   }
       // var user = data["user" + req.params.id] 
       // console.log( user );
	   // console.log(result);
       res.end(result);
   });
})

app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})