import React, { Component } from 'react'
import axios from 'axios'
import web3 from '../../utilities/web3Provider.js'
import membershipAbi from '../../utilities/membershipAbi.js'
import InformationForm from './informationForm.js'

class InformationBox extends Component {
  constructor (props) {
    super()
    this.state = {
      name: '',
      email: '',
      address: props.address,
      errorMessage: null,
      loading: false
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
    var self = this
    axios
      .post('/api/users/subscribe', newUser)
      .then(res => {
        self.requestMembership(newUser.address)
        self.setState({ loading: true, errorMessage: null })
      })
      .catch(err => {
        console.log('CATCH ERROR', err)
        self.setState({ errorMessage: err.response.data.message, loading: false })
      })
  }
  async requestMembership (address) {
    var self = this
    try {
      var memberContract = await new web3.eth.Contract(membershipAbi, '0xde545ff27a2e83e4dc7827bc926bd03a9a7e75e9')
      var fee = await memberContract.methods.memberFee().call({from: address})
      var options = { from: address, value: fee }
      if (process.env.NODE_ENV === 'dev') {
        options.gas = 7652476
      }
      var receipt = await memberContract.methods.requestMembership().send(options)
      console.log('Receipt', receipt)
      self.props.action()
    } catch (e) {
      console.log('MEMBERSHIP ERROR', e)
      self.setState({ errorMessage: e.message, loading: false })
    }
  }
  render () {
    return (
      <InformationForm
        {...this.state}
        handleChange={this.handleChange}
        loading={this.state.loading}
        action={this.handleSubmit} />
    )
  }
}

export default InformationBox
