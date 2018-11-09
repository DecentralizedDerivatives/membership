import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    fontSize: '18px'
  },
  warning: {
    color: 'red',
    textAlign: 'center',
    width: '100%'
  }
})

function WelcomeBox (props) {
  const { classes, action, message } = props
  const content = (
    <Typography className={classes.content} component='div'>
      Welcome to Daxia!
      <div>This webpage will take your basic info and the membership fee (about a buck to make sure you're real, be sure that metamask is installed on the mainnet!)</div>
      <p>Once complete, you will be asked to do KYC/AML validation in an email sent to you.  Once approved, you will be an official member of Daxia!</p>
      {message ? <div className={classes.warning}>{message}</div> : ''}
    </Typography>
  )
  return (
    <BoxLayout
      headline='Daxia Alliance Signup'
      content={content}
      buttonText='Begin'
      buttonDisabled={message !== ''}
      buttonAction={action} />
  )
}
export default withStyles(styles)(WelcomeBox)
