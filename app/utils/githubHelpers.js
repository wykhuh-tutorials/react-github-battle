var axios = require('axios');
var githubConfig = require('../config/githubConfig');

var clientId = githubConfig.clientId;
var clientSecret = githubConfig.clientSecret;
var param = '?client_id=' + clientId + "&client_secret" + clientSecret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
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
  }
}

module.exports = helpers;
