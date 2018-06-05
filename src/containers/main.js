import React, { Component } from 'react'
import withRoot from './withRoot'
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
      step: STEP_WELCOME
    }
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
        return (<InformationBox action={this.handleButtonClick.bind(this, STEP_DONE)} />)
      case STEP_DONE:
        return (<DoneBox />)
      default:
        return (<WelcomeBox action={this.handleButtonClick.bind(this, STEP_AGREEMENT)} />)
    }
  }
  render () {
    return (
      <div className='main'>
        <SimpleAppBar />
        <div style={{margin: '50px auto'}}>
          {this.getStepElement(this.state.step)}
        </div>
      </div>
    )
  }
}

export default withRoot(Main)
