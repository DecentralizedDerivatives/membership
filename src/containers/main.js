import React, { Component } from 'react'
import withRoot from './withRoot'
import SimpleAppBar from '../components/simpleAppBar.js'
import WelcomeBox from '../components/welcomeBox.js'

const STEP_WELCOME = 'welcome'
const STEP_AGREEMENT = 'agreement'
const STEP_TERMS = 'terms'
const STEP_INFORMATION = 'information'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      step: STEP_WELCOME
    }
  }
  handleButtonClick (action, e) {
    e.preventDefault()
    console.log('action', action)
    this.setState({ step: action })
  }
  getStepElement (step) {
    switch (step) {
      case STEP_AGREEMENT:
        return 'agreement'
      case STEP_TERMS:
        return 'terms'
      case STEP_INFORMATION:
        return 'information'
      default:
        return (<WelcomeBox action={this.handleButtonClick.bind(this, STEP_AGREEMENT)} />)
    }
  }
  render () {
    return (
      <div className='main'>
        <SimpleAppBar />
        <div style={{marginTop: '50px'}}>
          {this.getStepElement(this.state.step)}
        </div>
      </div>
    )
  }
}

export default withRoot(Main)
