'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var expressWinston = require('express-winston')
var winston = require('winston')
// var connection = require('./connection')
var routes = require('./routes')
var helmet = require('helmet')
var DbTransport = require('./dbTransport')

var app = express()

// help secure Express apps with various HTTP headers
app.use(helmet())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var nodeEnv = process.env.NODE_ENV

// use winston for logging
// express winston intercepts api requests and logs them to custom db logger
if (nodeEnv !== 'test') {
  expressWinston.requestWhitelist.push('body')
  expressWinston.responseWhitelist.push('body')
  app.use(expressWinston.logger({
    transports: [
      new (DbTransport)({
        level: 'warn',
        json: true
      })
    ]
  }))
}

app.use(express.static('public'))

// initialize db connection pool
// winston.info('Initialize database pool')
// connection.init()

// configure routes
winston.info('Set routes')
app.use('/api/v1', routes)

winston.info('Environment is ' + nodeEnv)

// express-winston errorLogger makes sense AFTER the router.
if (nodeEnv !== 'test') {
  expressWinston.requestWhitelist.push('body')
  expressWinston.responseWhitelist.push('body')
  app.use(expressWinston.errorLogger({
    transports: [
      new DbTransport()
    ]
  }))
}

// error handlers
// development error handler
// will print stacktrace
if (nodeEnv === 'dev') {
  app.use(function (err, req, res, next) {
    res.status(err.code || 500)
      .json({
        status: 'error',
        message: err
      })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message
    })
})

var port = process.env.PORT || 5678

app.listen(port, function () {
  winston.info('Server Started on port %d in %s mode', port, nodeEnv)
  winston.info(new Date().toLocaleString())
})
