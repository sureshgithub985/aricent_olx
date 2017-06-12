// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var advertisementSchema = new Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String, default:''},
  location: {type: String, default: 'Gurgaon'},
  postedBy: {type: Number, default: ''},
  Images:{
    image1: {type: String, default: ''},
    image2: {type: String, default: ''},
    image3: {type: String, default: ''},
    image4: {type: String, default: ''}
  },
  Category:{
    categoryName: {type: String, default: ''},
    condition: {type: String, default: ''},
    price: {type: Number, default: 0.0},
    brand: {type: String, default: ''},
    fuelType: {type: String, default: ''},
    kmDriven: {type: Number, default: ''}
  },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

// the schema is useless so far
// we need to create a model using it
var Advertisement = mongoose.model('Advertisement', advertisementSchema);

// on every save, add the date
advertisementSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
// make this available to our users in our Node applications
module.exports = Advertisement;
