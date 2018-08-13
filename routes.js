'use strict'

var express = require('express')
var router = express.Router()
const axios = require('axios')
const validateSubscribeInput = require('./utilities/subscribe')

const User = require('./models/user')

router.post('/idcheck', handleIdentityCheck)
function handleIdentityCheck (req, res) {
  axios
    .post(`https://lab.selified.com/api/request/facematch-id`,
      {
        type: 'sms',
        mobile: req.body.phone
      },
      {
        headers: {
          Authorization: 'Bearer 1hfeZ9IsV345H6SdrksAle',
          'Content-Type': 'application/json'
        }
      }
    ).then(result => {
      console.log('success: ', result.data)
      res.json(result.data)
    }).catch(err => {
      console.log('SELIFIED ERROR', err)
      res.status(400).json({message: 'ERROR: ' + err.message, err})
    })
}

router.get('/test', handleApiTest)

function handleApiTest (req, res) {
  // res.status(400).json({message: 'Missing Data', err: {status_code: 400, code: 'BAD_REQUEST'}})
  res.json({success: true})
}
router.post('/users/subscribe', handleNewUser)

async function handleNewUser (req, res) {
  var data = req.body
  res.contentType('application/json')
  var errorMessage = validateSubscribeInput(data)
  if (errorMessage) {
    return res.status(400).json({message: errorMessage, err: {status_code: 400, code: 'BAD_REQUEST'}})
  }
  try {
    const user = await User.findOne({ address: data.address })
    if (user) {
      res.status(400).json({message: 'Ethereum Address already exists.', err: {status_code: 400, code: 'ACCOUNT_EXISTS'}})
    } else {
      console.log('here comes the phone number', data.phone)
      const newUser = new User({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address
      })
      const result = await newUser.save()
      res.json(result)
    }
  } catch (e) {
    res.status(400).json({message: 'Something went wrong. ' + e.message, err: e})
  }
}

module.exports = router
