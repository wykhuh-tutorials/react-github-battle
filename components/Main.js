var React = require('react');

var Main = React.createClass({
  render: function() {
    // this component will render "Hello from Main" and  whatever tag
    // (e.g. <Route></Route>) is between
    // its <tag></tag>
    return(
      <div>
        Hello from Main
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
