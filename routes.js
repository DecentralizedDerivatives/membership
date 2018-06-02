'use strict'

var express = require('express')
var router = express.Router()

router.get('/', handleRoot)

function handleRoot (req, res) {
  res.json({ success: true, message: 'Welcome to the API!' })
}

router.post('/user', handleNewUser)

function handleNewUser (req, res) {
  var data = req.body
  res.contentType('application/json')
  if (!data || !data.email) {
    res.status(400).json({message: 'Missing Data', err: {status_code: 400, code: 'BAD_REQUEST'}})
    return
  }
  // do something?
  res.status(200).json(data)
}

module.exports = router
