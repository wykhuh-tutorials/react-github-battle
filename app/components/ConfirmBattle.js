var React = require('react');
var PropTypes = React.PropTypes;

function output (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
    return props.isLoading === true
      ? <p>Loading...</p>
      : <div>Confirm Battle: {output(props)}</div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
