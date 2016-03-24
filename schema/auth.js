/**
 * Created by dev on 19/03/16.
 */
'use strict'
const Joi         = require('joi');
const MongoClient = require('mongodb').MongoClient;
const Url         = require('../mongo/config').url;
const Assert      = require('assert');
let auth = {
    authToken  :  Joi.string().required(),
    authSecret :  Joi.string().required()
}
function authentication(db,val,next){
    db.collection('users')
        .findOne({authToken:val.authToken, authSecret:val.authSecret}
            ,function(qerr, qresult){
                if(qerr){
                    next(qerr, val)
                }else if(qresult){
                    next(null, val)
                }else{
                    console.log('noti');
                    next({error:'invalid credentials'}, null)
                }
            })
}
module.exports = function(val,opts,next){
    Joi.validate(val,auth,(err,result)=> {
        if(err){
            next(err, val);
        }else{
            MongoClient.connect(Url, function(dberr, db) {
                Assert.equal(null, dberr);
                next(err, val);
                authentication(db,val,next);
            });
        }
    })
};