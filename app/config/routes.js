
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// hashHistory, browserHistory, memoryHistory
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require("../containers/PromptContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='playerOne' header='Player One' component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
      {/* Home is active when none of the other routes match  */}
      <IndexRoute component={Home} />
    </Route>
  </Router>
);


module.exports = routes;
