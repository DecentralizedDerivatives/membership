import React, { Component } from 'react'
import InformationForm from './informationForm.js'

class InformationBox extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (field, evt) {
    this.setState({
      [field]: evt.target.value
    })
  }
  handleSubmit (e) {
    if (e && e.preventDefault) { e.preventDefault() }
    window.alert(JSON.stringify(this.state))
    this.props.action()
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
