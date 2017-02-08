var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('.'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res){
    res.sendFile(__dirname + '/test.html');

});
var users = []
io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});



