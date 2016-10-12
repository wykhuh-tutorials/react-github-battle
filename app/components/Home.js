var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainWrapper = require('./MainWrapper');

function Home () {
  return (
    <MainWrapper>
      <h1>Github Battle</h1>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainWrapper>
  )
}
module.exports = Home;
