var React = require('react')


var Main = React.createClass({
  componentDidMount: function()
  {
    document.body.style.backgroundColor = "#90AFC5";
    
  },
  render: function () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;