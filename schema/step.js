'use strict'
const Joi = require('joi');

module.exports = {
	create : Joi.object().keys({
	        authToken  :  Joi.string().required(),
        	authSecret :  Joi.string().required(),
        	eventId    :  Joi.string().required(),
       		stepName   :  Joi.string().required(),
    		stepStatus :  Joi.boolean().default(true),
        	stepDesc   :  Joi.string().optional()
	})
}
