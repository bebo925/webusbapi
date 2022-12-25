var fs = require('fs');
var http = require('http');
var https = require('https');

const express = require('express');
const app = express();
const port = 3000;

app.use('/encoder', express.static(__dirname + '/node_modules/esc-pos-encoder/dist/'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert'),
    },
    app
  )
  .listen(3000, function () {
    console.log('Example app listening on port 3000! Go to https://localhost:3000/');
  });
