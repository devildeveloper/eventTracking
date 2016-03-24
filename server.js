'use strict'
const Hapi    = require('hapi');
const Routes  = require('./routes');
const server  = new Hapi.Server({
	connections:{
        routes:{
            cors : false
        }
    }
});
const Plugins = require('./plugins');

server.connection({
	host:'localhost',
	port:process.env.PORT || 8080
});

server.route(Routes);

//register plugins
Plugins(server);

