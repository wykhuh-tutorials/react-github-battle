var USER_DATA = {
  name: "Wai-Yin Kwan",
  username: 'wykhuh',
  image: "https://avatars0.githubusercontent.com/u/6968611?v=3&s=466"
}

var React = require('react');
var ReactDom = require('react-dom');

// save the result of React.createClass into HelloWorld
var ProfilePic = React.createClass({
  // every component must have render
  render: function() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
    )
  }
})

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
})

var ProfileName = React.createClass({
  render: function() {
    return(
      <div>{this.props.name}</div>
    )
  }
})

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})



// you usually only have to use ReactDOM.render once in your application
// because by rendering the most parent component, all child components
// will be rendered as well.
ReactDom.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
