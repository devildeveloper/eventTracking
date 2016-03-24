'use strict'
const prefix = '/';
module.exports=[
	{
		method  :  'GET',
		path    :  prefix,
		handler :  function(req,reply){
			return reply('hello world');
		}
	}
];
