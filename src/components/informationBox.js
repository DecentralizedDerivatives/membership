import React, { Component } from 'react'
import axios from 'axios'
import web3 from '../../utilities/web3Provider.js'
import membershipAbi from '../../utilities/membershipAbi.js'
import InformationForm from './informationForm.js'
import ThankYouModal from './ThankYouModal'

class InformationBox extends Component {
  constructor (props) {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: props.address,
      errorMessage: null,
      loading: false,
      showModal: false
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
      phone: this.state.phone,
      address: this.state.address
    }
    var self = this
    self.requestMembership(newUser.address)

    axios
      .post('/api/users/subscribe', newUser)
      .then(res => {
        self.requestMembership(newUser.address)
        self.setState({ loading: true, errorMessage: null })
      })
      .catch(err => {
        console.log('CATCH ERROR', err)
        self.setState({ errorMessage: err.message, loading: false })
      })

    self.setState({ showModal: true })

    axios
      .post('/api/idcheck', { phone: this.state.phone })
      .then(res => {
        self.setState({loading: false, showModal: true})
      })
      .catch(err => {
        console.log('CATCH ERROR', err)
        self.setState({ errorMessage: err.message, loading: false })
      })
  }
  async requestMembership (address) {
    var self = this
    try {
      var memberContract = await new web3.eth.Contract(membershipAbi, '0xd33615c5ea5d703f06d237f6c56ff2400b564c77')
      var fee = await memberContract.methods.memberFee().call({from: address})
      var options = { from: address, value: fee }
      if (process.env.NODE_ENV === 'dev') {
        options.gas = 7652476
      }
      await memberContract.methods.requestMembership().send(options)
      self.props.action()
    } catch (e) {
      console.log('MEMBERSHIP ERROR', e)
      self.setState({ errorMessage: e.message, loading: false })
    }
  }
  render () {
    return (
      <div>
        <InformationForm
          {...this.state}
          handleChange={this.handleChange}
          loading={this.state.loading}
          action={this.handleSubmit} />
        <ThankYouModal showModal={this.state.showModal} />
      </div>
    )
  }
}

export default InformationBox
