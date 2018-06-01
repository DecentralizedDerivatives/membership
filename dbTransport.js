'use strict'

var util = require('util')
var winston = require('winston')
var Logger = require('./utilities/logger')

var dbTransport = function () {
}

util.inherits(dbTransport, winston.Transport)

dbTransport.prototype.log = function (level, message, meta) {
  process.nextTick(function () {
    if (meta && meta.req) {
      meta.message = message
      meta.level = level
      Logger.logApiCall(meta)
    }
  })
}

module.exports = dbTransport
