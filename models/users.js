var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  email:{type: String, unique: true, required: true},
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  proteinList: [String],
  carbList: [String],
  dairyList: [String],
  vegList: [String],
  fruitList: [String],
  miscList:[String],
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
