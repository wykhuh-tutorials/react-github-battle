var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function output (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
    return props.isLoading === true
      ? <p>Loading...</p>
      : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className="col-sm-6">
            <p className="lead">Player 1</p>
            {output(props.playersInfo[0])}
          </div>
          <div className="col-sm-6">
            <p className="lead">Player 2</p>
            {output(props.playersInfo[1])}
          </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            initiate battle button
          </div>
          <div className='col-sm-12' style={styles.space}>
            Link to playerOne
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
