var http = require('http');
var express = require('express');
var app = express();
var index = require('./Controllers/index')
index.init(app);
var server = http.createServer(app);
server.listen(3000);