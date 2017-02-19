import express from 'express';
var index = express.Router();

index.get('/', function (req, res, next) {
  res.sendFile('index.html', {
    root: global["appRoot"] + '/public/'
  });
});

export { index };
