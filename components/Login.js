var React = require('react');


      
var Login = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function()
    {
        return {user: ""}
    }, 
    onSubmitUser : function()
    {
        this.context.router.push('/chat/' + this.state.user);
    },
    handleUpdateUser: function (event) {
        this.setState({
            user: event.target.value
        });
    },
    render : function()
    {
      
        return (
            <div className="login-page">
                <div className="form">
                    <form onSubmit={this.onSubmitUser} class="login-form">
                    Sign in to chat
                    <input type="text" onChange={this.handleUpdateUser} placeholder="username" className="form-control" />
                    <button type="submit">login</button>
                    </form>
                </div>
            </div>
        )
    }
})


module.exports = Login