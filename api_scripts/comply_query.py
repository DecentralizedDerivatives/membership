'''Sample Comply Query'''



import json
import requests


_key = 'AwvXQVSSfDiVNqqKXvr7wsr42isKhWJe'
_url = 'https://api.complyadvantage.com/'
_headers = {'Authorization': 'Token ' + _key}


def complyCall(_endpoint,_data,post_is_true):
	_url = "https://api.complyadvantage.com/" + _endpoint


	if(post_is_true):
		_submit = requests.post(_url,headers=_headers,data=_data);
	else:
		_submit = requests.get(_url,headers=_headers);

	print('Submit : ',_submit.json());
	print(_submit.status_code,_submit.reason)


complyCall("users",{},False);
_newData = '{"search_term": "Robert Mugabe","fuzziness": 0.2,"filters": {"types": ["sanction", "warning"]}, "share_url": 1}';

complyCall("searches",_newData,True)