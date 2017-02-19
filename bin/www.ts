#!/usr/bin/env node

/**
 * As this is the entrypoint for the application, set a global variable for 
 * the root path of the server. This makes it a little easier to serve static
 * files as their path is relative to the root instead of the file that is 
 * trying to serve them.
 */

var path = require('path');
(<any>global).appRoot = path.join(__dirname, './..');

/**
 * Module dependencies.
 */

import App from '../app';
import debug from 'debug';
import http from 'http';

/**
 * Instantiate the application as it's a class now
 */

const application = new App();

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
application.app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(application.app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
