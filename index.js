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
io.on('connection', function(socket){
  
  socket.emit('setUsers', users);
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log(msg);
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



