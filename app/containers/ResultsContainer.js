var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      scores: []
    }
  },

  // playerInfo is being passed from ConfirmBattleContainer's router via
  // this.props.location.state.playersInfo
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },

  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}/>
    );
  }

});

module.exports = ResultsContainer;
