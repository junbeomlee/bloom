var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

var app = express();

app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cookieParser());

mongoose.connect('mongodb://localhost/bloom');

//define

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("bd is connected");
});

require('./route.js').route(app);



app.listen(3000,function(){
	console.log('asd');
});