//model/build.js
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var UserSchema = new Schema({
 firstName: String,
 lastName: name:String,,
 email:String,
 password:String,
 isDeleted:{
   type: Boolean,
   default:false
 },
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}
User.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}
//export our module to use in server.js
module.exports = mongoose.model('User', UserSchema);
