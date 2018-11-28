//model/build.js
//import dependency
var mongoose = require(‘mongoose’);
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var BuildSchema = new Schema({
 hero: String,
 feats: [{name:String,info:String,image:String}],
 perks:[{name:String,level:Number,info:String,image:String}],
 title:String,
 about:String,
});
//export our module to use in server.js
module.exports = mongoose.model(Build, BuildSchema);
