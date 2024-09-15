// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

function rateLimitter(req,res,next){
  const username = req.query.user-id;
  if(!(Object.keys(numberOfRequestsForUser).find((key)=>numberOfRequestsForUser[key]===username)))
  {
    next()
  }
  else{
    res.status(404).json({
      message : "Too many requests"
    })
    console.log("Too many requests");
  }
}

app.use(rateLimitter());
app.get('/user', function(req, res) {
  const username = req.query.username
  numberOfRequestsForUser.push({username : username})
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;