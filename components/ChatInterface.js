var React = require('react')

var ChatInterface = React.createClass({
    
    render : function()
    {
        return (
        <div>
        <div className="row">
            <div className="col-md-10">
    	        <h2> Chat </h2>
        </div>
        <div className="col-md-2">
            <h2> Users </h2>
		</div>
	    </div>
	    <div className="row">
            <div className="col-md-10">
                <div className="content" id="style-2">
                    <ul id="messages">
              
                    </ul>
            </div>
        </div>
            <div className="col-md-2">
                <div className="content" id="style-2">
                <ul id="users">
                </ul>
            
                </div>
            </div>
        </div>
        </div>
	    )
    }
})

module.exports = ChatInterface;