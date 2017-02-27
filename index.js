var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static('.'))


app.get('*', function(req, res) {
  res.sendFile(path.resolve('./index.html'));
});

var users = []
var userObj = {}

io.on('connection', function(socket){
  
  socket.emit('setUsers', users);
  
  socket.on('chat message', function(msg){
    var message = msg[0];
    var usermsg = msg[1];
    var generatedMsg = usermsg + ": " + message;
    io.emit('chat message', generatedMsg);
  });
  
  socket.on('add user', function(user){
    users.push(user)
    
    io.emit('setUsers', users)
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});



