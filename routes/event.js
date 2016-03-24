'use strict'
const Ctrl      = require('../controllers');
const Schema    = require('../schema');
const Util      = require('../util');
const Joi       = require('joi');
module.exports=[
	{
		method  :  'POST',
		path    :  Util.Uri(__filename,'create') ,
		handler :  Ctrl.Event.create,
		config  :  {
			description : "event creation",
			notes : "only description payload is optional",
			tags  : ["api","event","create"],
			validate:{
				payload : Schema.Event.create,
				query   : Schema.Auth
			}
		}
	}
];
//Schema.Auth