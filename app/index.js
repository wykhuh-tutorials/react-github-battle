var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');



// you usually only have to use ReactDOM.render once in your application
// because by rendering the most parent component, all child components
// will be rendered as well.
ReactDom.render(routes, document.getElementById('app'));
