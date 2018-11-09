import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BoxLayout from './boxLayout.js'

const styles = theme => ({
  content: {
    fontSize: '18px'
  }
})

function AgreementBox (props) {
  const { classes, action } = props
  const content = (
    <Typography className={classes.content} component='div'>
      <h4>Agreement to become a Member</h4>
      <div>
        I (We),
        <div style={{padding: '18px 0', width: '400px', display: 'table'}}>
          <span style={{display: 'table-cell', borderBottomWidth: 1, borderBottomColor: 'black', borderBottomStyle: 'solid'}} />
        </div>
        (hereafter “Joining Member”), hereby agree to
        purchase one Membership Interest in the Decentralized Derivatives Association (hereafter “DDA”),
        a Minnesota cooperative association incorporated under MN Statute 308B.
      </div>
      <h4>Acceptance and Payment</h4>
      <p>
      If the Cooperative accepts this Membership Agreement, I (we) agree to pay the Membership Fee defined in the Bylaws.
      The payment must be received in full before membership status is granted.
      The receipt of this fee does not guarantee that future payments will not be necessary to use certain services of the cooperative.
      Further payments or access to DDA applications or services may be determined as specified in the Bylaws by the Board of Directors and Membership.
      If the Cooperative does not accept this Membership Agreement in its sole discretion, then all the Cooperative’s
      rights and responsibilities as well as my rights and responsibilities will terminate, and I (we) will receive back all
      money that I (we) have paid to the Cooperative for this Membership Interest.
      </p>
      <p>
      Acceptance of this Membership Agreement on behalf of the cooperative is contingent upon compliance checks as specified
      in the Bylaws.  By purchasing a Patron membership in the cooperative, I (we) represent that we are in good standing and
      agree to comply with all applicable laws, rules, and regulations in doing so, as specified in the Terms and/or Bylaws.
      Once Membership status is granted, this payment is non-refundable.
      </p>
      <h4>Membership Interests</h4>
      <p>
      Upon acceptance of this agreement, I (we) understand that I (we) will enjoy all rights of membership long as I (we) remain
      current in my (our) obligations. I (We) understand that as a member(s), I (we) have a responsibility to participate in the
      management of the Cooperative. I (We) agree to abide by the Cooperative's Bylaws. I (We) understand and agree that the
      value of our Membership Interest, and other legal rights relating to the Membership Interest, will be governed by the
      Articles of Incorporation and the Bylaws of the Cooperative, current and future, as determined by the Cooperative's
      Board of Directors and Membership.
      </p>
      <h4>No Assignment or Transferable Value</h4>
      <p>
      I (We) understand and agree that the Membership Agreement, Membership Interest, and all rights created by such cannot
      be transferred, assigned, or given away to any other person or entity, except as specified in the Bylaws and as
      determined by the Cooperative's Board of Directors and Membership.  I (We) acknowledge that Membership Interest in DDA
      is not an investment and there is no expected return from this Membership.
      </p>
      <h4>No Other Representations</h4>
      <p>
      All understandings and agreements made between the Cooperative and the Joining Member(s) are contained in this Membership
      Agreement and the Cooperative's Articles of Incorporation, Bylaws, Rules and Policies. No other representations, oral or
      written, shall be considered a part of this Agreement. Any representation or terms stated in this Membership Agreement are
      governed by and can be superseded by the Cooperative’s Articles of Incorporation or Bylaws.  This Membership Agreement cannot
      be changed except when approved by the Cooperative's Board of Directors and the Members.
      </p>
    </Typography>
  )
  return (
    <BoxLayout
      headline='Daxia Membership Agreement'
      content={content}
      buttonText='Agree'
      buttonAction={action} />
  )
}

export default withStyles(styles)(AgreementBox)
