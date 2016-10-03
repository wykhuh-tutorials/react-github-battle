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

var Link = React.createClass({
  changeUrl: function() {
    window.location.replace(this.props.href)
  },

  render: function() {
    // this.props.children lets us access the stuff between the parent compoent tag
    // <Parent>stuff</Parent>
    return (
      <span style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
})


var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
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
        <Link />

      </div>
    )
  }
})



// you usually only have to use ReactDOM.render once in your application
// because by rendering the most parent component, all child components
// will be rendered as well.
ReactDom.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
