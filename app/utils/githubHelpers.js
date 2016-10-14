var axios = require('axios');
var githubConfig = require('../config/githubConfig');

var clientId = githubConfig.clientId;
var clientSecret = githubConfig.clientSecret;
var param = '?client_id=' + clientId + "&client_secret" + clientSecret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getPlayersData(player) {
  // player.login is the username
  return getRepos(player.login)
     // pass the repos from getRepos into getTotalStars
    .then(getTotalStars)
    .then(function(totalStars){
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function getRepos(username){
  return axios.get(
    'https://api.github.com/users/' + username + '/repos' + param + '&per_page=100'
  );
}

// get the sum of stars on all repos
function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count;
  }, 0);
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  battle: function(players) {
    return this.getPlayersInfo(players).then(function(playersInfo){
      return this.getScores(playersInfo).then(function(scores){
        return {players: playersInfo, scores: scores}
      });
    }.bind(this))
  },

  getPlayersInfo: function(players) {
    // axios.all takens an array of promises;
    // when all promises are resovled, then resolve axios.all
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function(info) {
      // only want the data property from the info github sends
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo.', err)
    })
  },

  getScores: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) { console.warn('Error in battle:', err)})
  }
}

module.exports = helpers;
