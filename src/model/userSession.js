//model/build.js
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var UserSessionSchema = new Schema({
 userId:{
   type:Number,
   default:-1
 },
 timestamp:{
   type:Date,
   default:Date.now();
 },
 isDeleted:{
   type:Boolean,
   default:false
 }
});

//export our module to use in server.js
module.exports = mongoose.model('UserSession', UserSessionSchema);
