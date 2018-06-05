import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    marginTop: '-12px',
    fontSize: '18px'
  },
  textField: {
    width: '100%',
    marginBottom: '8px'
  },
  reviewNote: {
    marginTop: '12px'
  },
  errorMessage: {
    marginTop: '12px',
    fontWeight: 'bold'
  }
})

function InformationForm (props) {
  const { name, email, address, errorMessage, handleChange, action, classes } = props
  const content = (
    <div className={classes.content}>
      <div>
        <TextField
          id='name'
          label='Name'
          className={classes.textField}
          value={name}
          onChange={handleChange.bind(this, 'name')} />
      </div>
      <div>
        <TextField
          id='email'
          label='Email'
          className={classes.textField}
          value={email}
          onChange={handleChange.bind(this, 'email')} />
      </div>
      <div>
        <TextField
          id='address'
          label='Ethereum Address'
          className={classes.textField}
          value={address}
          onChange={handleChange.bind(this, 'address')} />
      </div>
      <Typography className={classes.reviewNote} component='div'>
        ** Note by clicking "Submit" you will be asked to pay the fee of .025 Ether.  You will also be sent a link for further KYC / AML verification.
      </Typography>
      { errorMessage
        ? <Typography className={classes.errorMessage} component='div'>
          <span style={{color: 'red'}}>*</span>{errorMessage}
        </Typography>
        : ''
      }
    </div>
  )
  return (
    <BoxLayout
      headline='Information'
      content={content}
      buttonText='Submit'
      buttonAction={action} />
  )
}

export default withStyles(styles)(InformationForm)
