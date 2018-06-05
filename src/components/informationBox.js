import React, { Component } from 'react'
import InformationForm from './informationForm.js'
import axios from 'axios'

class InformationBox extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      address: '',
      errorMessage: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (field, evt) {
    this.setState({
      [field]: evt.target.value,
      errorMessage: null
    })
  }
  handleSubmit (e) {
    if (e && e.preventDefault) { e.preventDefault() }
    var newUser = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address
    }
    axios
      .post('/api/users/subscribe', newUser)
      .then(res => {
        // console.log('res', res)
        this.props.action()
      })
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message })
      })
  }
  render () {
    return (
      <InformationForm
        {...this.state}
        handleChange={this.handleChange}
        action={this.handleSubmit} />
    )
  }
}

export default InformationBox
