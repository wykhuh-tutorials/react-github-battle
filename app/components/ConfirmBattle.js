var React = require('react');

function output (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
    return props.isLoading === true
      ? <p>Loading...</p>
      : <div>Confirm Battle: {output(props)}</div>
  }

module.exports = ConfirmBattle;
