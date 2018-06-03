import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  welcomeMessage: {
    fontSize: '22px'
  }
})

function WelcomeBox (props) {
  const { classes, action } = props
  const content = (
    <Typography className={classes.welcomeMessage} component='div'>
      Welcome to DDA!
      <div>This webpage</div>
      <p>Once complete</p>
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
