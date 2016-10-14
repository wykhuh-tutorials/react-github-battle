var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      playersInfo: [],
      scores: []
    }
  },

  // playerInfo is being passed from ConfirmBattleContainer's router via
  // this.props.location.state.playersInfo
  componentDidMount: function() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        githubHelpers.battle(players)
          .then(function(scores){
            this.setState({
              scores: scores,
              isLoading: false,
              playersInfo: [players[0], players[1]]
            })
          }.bind(this))
      }.bind(this))
      .then(func)

  },

  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        scores={this.state.scores}/>
    );
  }

});

module.exports = ResultsContainer;
