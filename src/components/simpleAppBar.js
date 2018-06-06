import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Lens from '@material-ui/icons/Lens'
import { Link } from 'react-router-dom'
import logo from '../../images/dda-logo.png'

var styles = function (theme) {
  return {
    appBar: {
      backgroundColor: theme.colors.blue,
      height: '80px',
      position: 'static',
      color: 'default',
      padding: '0 16px'
    },
    logo: {
      marginTop: '7%'
    },
    connectedContainer: {
      marginRight: '20px',
      marginTop: '28px',
      textAlign: 'right'
    },
    connectedText: {
      color: theme.colors.white,
      fontSize: theme.fonts.size.header,
      fontWeight: theme.fonts.weight.medium,
      letterSpacing: '1px'
    },
    connectedLens: {
      position: 'relative',
      marginLeft: '6px',
      top: '2px',
      height: '13px',
      width: '13px'
    },
    connectionMessage: {
      fontSize: '10px',
      color: theme.colors.white,
      fontWeight: theme.fonts.weight.light
    },
    lens: {
      color: theme.colors.green
    },
    lensOff: {
      color: theme.colors.red
    }
  }
}
function SimpleAppBar (props) {
  const { classes, connected, connectionMessage } = props
  return (
    <AppBar className={classes.appBar}>
      <Grid container direction='row' alignItems='stretch' justify='space-between'>
        <Grid item>
          <Link to={'/'}>
            <div className='logo'>
              <img src={logo} width='70' alt='Logo' height='70' className={classes.logo} />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Grid container spacing={0} className={classes.connectedContainer} direction='row' justify='flex-end' alignItems='center'>
            <Grid item>
              <Typography className={classes.connectedText}>Connected</Typography>
            </Grid>
            <Grid item>
              <Lens className={`${classes.connectedLens} ${connected ? classes.lens : classes.lensOff}`} />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.connectionMessage}>{connectionMessage}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default withStyles(styles)(SimpleAppBar)
