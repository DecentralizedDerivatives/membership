import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    fontSize: '18px'
  }
})

function DoneBox (props) {
  const { classes, action } = props
  const content = (
    <Typography className={classes.content} component='div'>
      Thank You
    </Typography>
  )
  return (
    <BoxLayout
      headline='Registration Complete'
      content={content}
      buttonText='Agree'
      buttonAction={action} />
  )
}

export default withStyles(styles)(DoneBox)
