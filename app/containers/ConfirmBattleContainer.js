var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  // use contextTypes to get access to the router
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
   }
  },

  // after component renders, fetch data for the two usernames via Github api
  componentDidMount: function() {
    var query = this.props.location.query;

  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo} />
    );
  }

});

module.exports = ConfirmBattleContainer;
