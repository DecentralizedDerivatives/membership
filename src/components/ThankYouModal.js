import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

function ThankYouModal (props) {
    const {showModal} = props;

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={showModal}>
          <DialogTitle id="simple-dialog-title">Thanks for becoming a member!</DialogTitle>
          <DialogContent>
            <p>
                You will soon be receiving a text with instructions on completing the KYC/AML requirements of membership.
            </p>
            <p>
                Once completed, it usually takes about 24 hours to fully activate your account.  If you have any questions, please don’t hesitate to reach out to us at:
                <a href="mailto:info@daxia.us">info@daxia.us</a>
            </p>
            <p>
                In the meantime, feel free to <a href="https://dapp.daxia.us">head to our dApp </a>or read some articles on our <a href="https://medium.com/@nfett"> Medium.</a>
            </p>
            <p>
                Welcome to the revolution.
            </p>
            <p>-Daxia Team</p>
          </DialogContent>
        </Dialog>
    )
}
export default ThankYouModal
