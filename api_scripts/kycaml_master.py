'''
Here is the flow:
User submits information via membership website to selified API
Once complete, we need to be scanning the selified service for completed results:
If they do not pass, we need to send them an email and have them try again (or give refund).
If they do pass, we need to take their name and submit it to the comply API
If they do not pass, we pull birthdate from Selified information and resubmit (if we can get it)
	- if still no, two members of DDA will manually check the hits and entered user information
	-if still no pass, we need to send an email to deny them membership
If passing, we need to check if they have sent the Ether (it should be automatic, but maybe not)
If they did not send the Ether, we need to send them an email instructing them to send the Ether to our address from their entered Ethereum address to proceed
If they send the Ether, we need to send a confirmation email, and change the membership level for their ethereum address
'''


import json
import requests

_selfied_url = 'https://lab.selified.com/api/'
_selified_headers = {'authkey':'1hfeZ9IsV345H6SdrksAl'}


def manualSelifiedCall:
	pass

def complyCall:
	pass

def checkSelifiedState():
	pass

def checkComplyState():
	pass

def checkFundedMembership():
	pass

def changeEthereumMembershipLevel():
	pass

def selifiedCall(_endpoint,_data):
	pass
