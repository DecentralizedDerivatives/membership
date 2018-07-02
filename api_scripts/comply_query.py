'''Sample Comply Query'''



import json
import requests


_key = 'AwvXQVSSfDiVNqqKXvr7wsr42isKhWJe'
_url = 'https://api.complyadvantage.com/'
_headers = {'Authorization': 'Token ' + _key}

_name = '"Maurice Flurie"'
#Leave Birthdate blank if unknown
_birtDate = '""' 
_ID = "1"


def complyCall(_endpoint,_data,post_is_true):
	_url = "https://api.complyadvantage.com/" + _endpoint


	if(post_is_true):
		_submit = requests.post(_url,headers=_headers,data=_data);
	else:
		_submit = requests.get(_url,headers=_headers);

	print('Submit : ',_submit.json());

complyCall("users",{},False);

_newData = '{"search_term": '+ _name + ',"fuzziness": 0.2,"filters": {"types": ["sanction", "warning"],"birth_year":' + _birtDate + '}, "share_url":' + _ID +'}';

complyCall("searches",_newData,True)
