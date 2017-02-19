import express from 'express';
var users = express.Router();

users.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

export { users };
