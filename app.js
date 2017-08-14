require('dotenv').load();
var express = require('express');
var path = require('path');
var fs = require('fs');
var morgan     = require("morgan");
var bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","POST,GET");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

