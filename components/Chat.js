var React = require('react')
var ChatInterface = require('./ChatInterface')
var ChatInput = require('./ChatInput')
var Chat = React.createClass({
  
    componentDidMount : function()
    {
        this.socket = io();
        this.currentUser = this.props.routeParams.usern;
        var self = this;
        
        this.socket.on('chat message', function(msg){
            self.addMessage(msgArray)});
            
        this.socket.on('setUsers', function(user){
            self.setUsers(user)});
        
        this.socket.emit('add user', this.currentUser);
        
    },
    
    setUsers : function(currentUsers)
    {
        
        this.setState({users: currentUsers});
    },
    
    addMessage : function(msg)
    {   
        var currentmessages = this.state.messages;
        currentmessages.push(msg);
        this.setState({messages: currentmessages})
    },
    
    getInitialState : function()
    {
       return {messages: [], currentMessage: "", users: []};
    },
    
    handleSubmitMessage : function(event)
    {
      event.preventDefault();
      var msgArray = [this.state.currentMessage, this.currentUser]
      this.socket.emit('chat message', msgArray);
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
                <ChatInterface messages={this.state.messages}
                                users={this.state.users}/>
                <ChatInput changeFunction={this.handleUpdateMessage}
                            submitFunction={this.handleSubmitMessage}
                            value={this.state.currentMessage}
                            />
            </div>
            )
       
    }
});

module.exports = Chat;