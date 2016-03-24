'use strict'
let Mongo = require('./mongo');
let Jwt   = require('hapi-auth-jwt2');
module.exports = (server)=>{
	server.register([Mongo,Jwt],
		(err)=>{
			if(err){
				console.log(err);
				throw err;
			}else{
				server.auth.strategy('jwt','jwt',{
					key          : 'kittykay',
					validateFunc : require('./jwt'),
					verifyOptions: {
						algorithms:['HS256']
					}
				});
				server.auth.default('jwt');
				
				server.start(function(err){
					console.log(`server running on ${server.info.uri}`);
				})
			}
	})
}
