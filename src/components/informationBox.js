import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    fontSize: '18px'
  }
})

function InformationBox (props) {
  const { classes, action } = props
  const content = (
    <Typography className={classes.content} component='div'>
      Gather Information
    </Typography>
  )
  return (
    <BoxLayout
      headline='Information'
      content={content}
      buttonText='Submit'
      buttonAction={action} />
  )
}

export default withStyles(styles)(InformationBox)
