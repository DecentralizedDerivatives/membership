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
      height: '80px',
      marginRight: '20px'
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
    lens: {
      color: theme.colors.green
    },
    lensOff: {
      color: theme.colors.red
    }
  }
}
function SimpleAppBar (props) {
  const { classes, connected } = props
  return (
    <AppBar className={classes.appBar}>
      <Grid container direction='row' alignItems='stretch' justify='space-between'>
        <Grid item>
          <Link to={'/'}>
            <div className='logo'>
              <img
                src={logo}
                width='70'
                alt='Logo'
                height='70'
                className={classes.logo}
              />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Grid container className={classes.connectedContainer} direction='row' alignItems='center'>
            <Grid item>
              <Typography className={classes.connectedText}>Connected</Typography>
            </Grid>
            <Grid item>
              <Lens className={`${classes.connectedLens} ${connected ? classes.lens : classes.lensOff}`} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default withStyles(styles)(SimpleAppBar)
