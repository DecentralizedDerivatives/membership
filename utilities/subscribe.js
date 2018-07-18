const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateSubscribeInput (data) {
  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''
  data.address = !isEmpty(data.address) ? data.address : ''
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    return 'Name must be between 2 and 30 characters'
  }
  if (Validator.isEmpty(data.name)) {
    return 'Name is required'
  }
  if (Validator.isEmpty(data.email)) {
    return 'Email is required'
  }
  if (Validator.isEmpty(data.address)) {
    return 'Ethereum Address is required'
  }
  if (!Validator.isEmail(data.email)) {
    return 'Email is invalid'
  }
  if (Validator.isEmpty(data.phone)){
    return 'Phone number is required'
  }
    
  if (!Validator.isLength(data.phone.replace(/\D/g,''), {min: 6, max: 30})){
    return 'Phone number is invalid'
  }
  return ''
}
