//Sample Selified Query
//DDA Token - 1hfeZ9IsV345H6SdrksAle



/*
Facematch + ID details:
{
mobile	string($phone)
example: 441234567890
end user mobile to send sms to

email	string($email)
example: foo@example.com
end user email to send email to

type*	string
example: sms
type of delivery to use (sms,email)

resurl	string($url)
example: https://www.example.com/response
subscriber url to asynchronously submit results to

}
*/


//curl -X POST "https://lab.selified.com/api/api/request/facematch-id" -H "accept: application/json" -H "content-type: application/json" -d "{ \"mobile\": 3306083646, \"email\": \"nfett@decentralizedderivatives.org\", \"type\": \"sms\", \"resurl\": \"https://www.example.com/response\"}"




import json
import requests

_base_url = 'lab.selified.com/api'

def selifiedCall(_endpoint,_data):
	_url = _base_url + _endpoint
	_submit = requests.post(_url,data=_data);
	print('Submit : ',_submit.json());
	print(_submit.status_code,_submit.reason)


_newData = '{ "mobile": 3306083646,,"email": "nfett@decentralizedderivatives.org","type": "sms"}';

complyCall("request/facematch-id",_newData)