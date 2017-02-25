var React = require('react')

var ChatInput = React.createClass({
    
    render : function()
    {
        return (
        <div className="row">
            <div className="col-md-10" >
            <form action="">
            <input className="chatforminput" id="m" autocomplete="off" /><button>Send</button>
            </form>
        </div>
        </div>
	    )
    }
})

module.exports = ChatInput;