import React, { Component } from 'react'
import SimpleAppBar from '../components/simpleAppBar.js'
import withRoot from './withRoot'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <SimpleAppBar />
      </div>
    )
  }
}

export default withRoot(Main)
