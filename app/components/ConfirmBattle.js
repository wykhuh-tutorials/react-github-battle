var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var Loading = require('./Loading');
var styles = require('../styles');


function ConfirmBattle (props) {
    return props.isLoading === true
      ? <Loading />
      : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className="col-sm-6">
            <p className="lead">Player 1</p>
            <UserDetails info={props.playersInfo[0]} />
          </div>
          <div className="col-sm-6">
            <p className="lead">Player 2</p>
            <UserDetails info={props.playersInfo[1]} />
          </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
              Intitiate Battle
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            {/* react router has <Link> will allows use to form a link to a path */}
            <Link to='/playerOne'>
              <button type='button' className="btn btn-lg btn-danger">
                Reselect Players
              </button>
            </Link>
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
