/**
 * Created by dev on 19/03/16.
 */
'use strict'
const Config = require('../config');
const Path   = require('path');
let   prefix = Config.prefix;
module.exports = function(path,action){
    let fileName = Path.basename(path);
    return prefix + fileName.split('.')[0]+'/'+action;
}