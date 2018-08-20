import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  boxLayout: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px'
  },
  boxDivider: {
    margin: '8px 0 16px'
  },
  boxContent: {
    minHeight: '200px',
    fontSize: '18px'
  },
  button: {
    backgroundColor: theme.colors.blue,
    color: '#fff',
    border: '1px solid #27597E',
    width: 260,
    height: 'auto',
    borderWidth: 0,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: theme.colors.lightBlue
    }
  },
  boxFooter: {
    marginTop: '32px',
    textAlign: 'center'
  }
})

function BoxLayout (props) {
  const { classes, headline, content, buttonText, buttonAction, buttonDisabled } = props
  return (
    <div>
      <Paper elevation={4} className={classes.boxLayout}>
        <div className={classes.boxHeader}>
          <Typography variant='headline' component='h3'>
            {headline}
          </Typography>
        </div>
        <Divider className={classes.boxDivider} />
        <div className={classes.boxContent}>
          {content}
        </div>
        <div className={classes.boxFooter}>
          {props.loading ? <LinearProgress />
            : buttonAction
              ? <Button variant='raised' disabled={buttonDisabled} className={classes.button} onClick={buttonAction}>
                {buttonText}
              </Button>
              : ''
          }
        </div>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(BoxLayout)
