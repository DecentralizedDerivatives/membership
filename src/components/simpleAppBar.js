import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import logo from '../../images/dda-logo.png'

var styles = function (theme) {
  return {
    appBar: {
      backgroundColor: theme.colors.blue,
      height: '80px',
      position: 'static',
      color: 'default'
    },
    logo: {
      marginTop: '7%'
    }
  }
}
function SimpleAppBar (props) {
  const { classes } = props
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(SimpleAppBar)
