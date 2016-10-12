var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
}

function Loading() {
  return (
    <div style={styles.container}>
      <p style={styles.content}>Loading...</p>
    </div>
  );
}

module.exports = Loading;
