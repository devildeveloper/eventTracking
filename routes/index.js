const home = require('./home.js');
const event= require('./event.js');
module.exports= Array.prototype.concat.call(home,event);
