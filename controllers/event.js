'use strict'
const Event    =   require('../schema').Event;
const Joi      =   require('Joi');
const Boom     =   require('boom');
module.exports={
	create : function(request,reply){
		let eventDescription;
		if(request.payload.eventDesc){
			eventDescription = request.payload.eventDesc;
		}
		let db = request.server.plugins['hapi-mongodb'].db;
		db.collection('users')
			.update({
						authToken:request.query['authToken'],
						authSecret:request.query['authSecret']
					}
					,{$push: {
						events:{
							eventName   : request.payload.eventName
							,eventSteps : request.payload.eventDesc
							,eventDesc  : eventDescription
							,createdAt  : new Date
						}
					}}
					,function (err,result){
						if(err){
							return reply(Boom.badImplementation(err))
						}else{
							return reply(result);
						}
					})
	}
}
