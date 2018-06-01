'use strict'

var winston = require('winston') // for logging
var config = require('config')

var app = require('./server')

var port = config.get('apiPort')
var mode = config.util.getEnv('NODE_ENV')

app.listen(port, function () {
  winston.info('Server Started on port %d in %s mode', port, mode)
  winston.info(new Date().toLocaleString())
})
