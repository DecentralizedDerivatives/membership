import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    fontSize: '18px'
  }
})

function WelcomeBox (props) {
  const { classes, action } = props
  const content = (
    <Typography className={classes.content} component='div'>
      Welcome to DDA!
      <div>This webpage will take your basic info and the membership fee (be sure that metamask is installed on the mainnet!)</div>
      <p>Once complete, you will be asked to do KYC/AML validation in an email sent to you.  Once approved, you will be an official member of DDA!</p>
    </Typography>
  )
  return (
    <BoxLayout
      headline='DDA Membership Signup'
      content={content}
      buttonText='Begin'
      buttonAction={action} />
  )
}
export default withStyles(styles)(WelcomeBox)
