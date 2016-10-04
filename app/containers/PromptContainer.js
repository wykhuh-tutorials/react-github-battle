var React = require('react');
var transparentBg = require('../styles').transparentBg;

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
  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  onSubmitUser: function(e) {
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
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={this.onUpdateUser}
                value={this.state.username}
                placeholder="Github Username"/>
            </div>
            <div className="form-group col-sm-3 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = PromptContainer
