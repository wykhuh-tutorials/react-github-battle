var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var Loading = require('./Loading');
var styles = require('../styles');

// create separate private stateless function to avoid duplicate code
function StartOver () {
  return(
    <div className="col-sm-12" style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>
          Start over
        </button>
      </Link>
    </div>
  )
}

function Results (props) {
  if(props.isLoading === true) {
    return(
      <Loading />
    )
  }

  // if it is a tie, render this view
  if(props.scores[0] === props.scores[1] ) {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>It's a tie</h1>
        <StartOver />
      </div>
    )
  }

  // if it is not a tie, render this view
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="lead">Winner</p>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
        </div>
        <div className="col-sm-6">
          <p className="lead">Loser</p>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
        </div>
      </div>
      <StartOver />
    </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
