import React, { Component } from 'react'
import withRoot from './withRoot'
import web3 from '../../utilities/web3Provider.js'
import SimpleAppBar from '../components/simpleAppBar.js'
import WelcomeBox from '../components/welcomeBox.js'
import AgreementBox from '../components/agreementBox.js'
import TermsBox from '../components/termsBox.js'
import InformationBox from '../components/informationBox.js'
import DoneBox from '../components/doneBox.js'

const STEP_WELCOME = 'welcome'
const STEP_AGREEMENT = 'agreement'
const STEP_TERMS = 'terms'
const STEP_INFORMATION = 'information'
const STEP_DONE = 'done'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      step: STEP_WELCOME,
      connected: true,
      connectionMessage: '',
      ethAddress: ''
    }
  }
  // parcel bundler requires babel transforms to get async / await to work
  // Heroku doesn't like babel transforms
  // so you end up with this mess.
  componentDidMount () {
    var self = this
    web3.eth.getAccounts(function (error, accounts) {
      if (error) { self.setState({ connected: false }); return }
      web3.eth.net.getId(function (err, id) {
        if (err) { self.setState({ connected: false }); return }
        if (!accounts.length || id !== 4) {
          self.setState({ connected: false, connectionMessage: 'Ethereum Rinkeby Testnet required.' })
        } else {
          self.setState({ ethAddress: accounts[0] })
        }
      })
    })
  }
  handleButtonClick (action, e) {
    if (e && e.preventDefault) { e.preventDefault() }
    this.setState({ step: action })
  }
  getStepElement (step) {
    switch (step) {
      case STEP_AGREEMENT:
        return (<AgreementBox action={this.handleButtonClick.bind(this, STEP_TERMS)} />)
      case STEP_TERMS:
        return (<TermsBox action={this.handleButtonClick.bind(this, STEP_INFORMATION)} />)
      case STEP_INFORMATION:
        return (<InformationBox address={this.state.ethAddress} action={this.handleButtonClick.bind(this, STEP_DONE)} />)
      case STEP_DONE:
        return (<DoneBox />)
      default:
        return (<WelcomeBox action={this.handleButtonClick.bind(this, STEP_AGREEMENT)} />)
    }
  }
  render () {
    return (
      <div className='main'>
        <SimpleAppBar
          connected={this.state.connected}
          connectionMessage={this.state.connectionMessage} />
        <div style={{margin: '50px auto'}}>
          {this.getStepElement(this.state.step)}
        </div>
      </div>
    )
  }
}

export default withRoot(Main)
