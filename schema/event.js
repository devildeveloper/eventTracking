'use strict'
const Joi   =  require('joi');
module.exports ={
	create : Joi.object().keys({
		eventName  :  Joi.string().required(),
		eventSteps :  Joi.array().min(1).unique().required(),
		eventDesc  :  Joi.string().optional()
	})
}
