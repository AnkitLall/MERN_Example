var http = require('http');
var express = require('express');
var app = express();
var cors = require('cors');
var data = require('./DataManipulator');

app.use(cors());
app.use('/data',data);

app.listen(8080);