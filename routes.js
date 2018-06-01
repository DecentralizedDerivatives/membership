'use strict'

var express = require('express')
var router = express.Router()

// var config = require('config')
// var HealthcheckService = require('./services/healthcheck')
//
// router.get('/healthcheck', HealthcheckService.handleHealthcheck)
// // set middleware to require token (order of these operations is important)
// requireToken(router)

router.get('/', handleRoot)

function handleRoot (req, res) {
  res.json({ success: true, message: 'Welcome to the API!' })
}

module.exports = router
