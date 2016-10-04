var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  // context allow you to pass items without going to props;
  // contextTypes doesn't scale well so only use it sparignly;
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // use getInitialState to give a component state;
  // getInitialState returns on object that has all the state properties
  getInitialState: function() {
    return {
      // username is whatever the user types into input
      username: ''
    }
  },

  // when input value changes, update this.state.username
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    // cache this.state.username so user doesn't get old this.state.username
    // if they hit the back button
    var username = this.state.username;

    // reset username after submit
    this.setState({
      username: ''
    })

    // if the url has a playerOne route params go to /battle
    // i.e. we are on /playerTwo/:playerOne
    if(this.props.routeParams.playerOne) {
      // can pass either an object or a path to router.push
      this.context.router.push({
        // /battle?playerOne=xxx&playerTwo=xxx
        pathname: '/battle',
        // pass data to /battle route
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    // else go to /playerTwo
    // i.e. we are on /playerOne
    } else {
      // /playerTwo/xxx
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
})

module.exports = PromptContainer
