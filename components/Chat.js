var React = require('react')
var ChatInterface = require('./ChatInterface')
var ChatInput = require('./ChatInput')
var Chat = React.createClass({
    
    componentDidMount : function()
    {
        var socket = io();
        socket.on('chat message', function(msg){
            this.addMessage(msg)});
        socket.on('add user', function(user){
            this.addUser(user)});
        socket.emit('chat message', "hey");
        
    },
    
    addUser : function(user)
    {
        var currentusers = this.state.users;
        currentusers.push(user);
        this.setState({users: currentusers})
    },
    
    addMessage : function(msg)
    {
        var currentmessages = this.state.messages;
        currentmessages.push(msg);
        this.setState({messages: currentmessages})
    },
    getInitialState : function()
    {
       return {messages: [], currentMessage: ""};
    },
    
    handleSubmitMessage : function()
    {
      socket.emit('chat message', this.state.currentMessage);
      this.setState({currentMessage: ""});
    },
    
    handleUpdateMessage: function (event) {
        this.setState({
            currentMessage: event.target.value
        });
    },
    render : function()
    {
        
        return (
            <div className="container">
                <ChatInterface />
                <ChatInput />
            </div>
            )
       
    }
});

module.exports = Chat;