var React = require('react');
var ReactDom = require('react-dom');

// save the result of React.createClass into HelloWorld
var HelloWorld = React.createClass ({
  // every component must have render
  render: function() {
    return (
      <div>Hello World!</div>
    )
  }
});

// you usually only have to use ReactDOM.render once in your application
// because by rendering the most parent component, all child components
// will be rendered as well.
ReactDom.render(<HelloWorld />, document.getElementById('app'));
