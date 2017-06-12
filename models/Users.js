var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({

  firstname	: { type: String },
  lastname	: { type: String },
  username	: { type: String },
  password	: { type: String },
  mobile_no	: { type: String },
  email		: { type: String },
  location	: { type: String },
  created_at: Date,
  updated_at: Date

});


// to add created date and updated date values
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

    this.created_at = currentDate;


next();

});


// create a model
var User = mongoose.model('User', userSchema);

// make this available to application
module.exports = User;
