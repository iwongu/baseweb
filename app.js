var express = require('express');
var app = express();

app.use('/bower_components', express.static('bower_components'));
app.use('/build', express.static('build'));
app.use('/src', express.static('src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/helloworld.html');
});

app.listen(3000);
