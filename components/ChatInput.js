var React = require('react')

var ChatInput = React.createClass({
    
    render : function()
    {
        return (
        <div className="row">
            <div className="col-md-10" >
            <form onSubmit={this.props.submitFunction}>
            <input onChange={this.props.changeFunction} className="chatforminput" id="m" autocomplete="off" value={this.props.value} /><button type="submit">Send</button>
            </form>
        </div>
        </div>
	    )
    }
})

module.exports = ChatInput;