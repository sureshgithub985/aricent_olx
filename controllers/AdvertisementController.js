//grab the Advertisement model
var Advertisement = require('../models/Advertisement');

//define crud operation

module.exports = {
  getAllAdvertisement: function(params, callback){
    console.log('AdvertisementController: getAllAdvertisement()');
    Advertisement.find(params, function(err, Advertisements){
      if(err){
        console.log("AdvertisementController: getAllAdvertisement(-): ERROR while retrieving all Advertisement");
        callback(err, null);
        return;
      }
      callback(null, Advertisements);
      console.log("AdvertisementController: getAllAdvertisement(-): Advertisements retrieved successfuly!!");
    });
  },

  createAdvertisement: function(params, callback){
    console.log('AdvertisementController: saveAdvertisement(-)');
    Advertisement.create(params, function(err, Advertisement){
      if(err){
        console.log("AdvertisementController: createAdvertisement(-): ERROR while creating Advertisement");
        callback(err, null);
        return;
      }
      callback(null, Advertisement);
      console.log("AdvertisementController: createAdvertisement(-): Advertisement created successfuly!! Advertisement = "+Advertisement);
    });
  },

  updateAdvertisement: function(params, callback){
    console.log('AdvertisementController: updateAdvertisement(-): params = '+JSON.stringify(params));
    var query = {created_at:params.created_at};
    Advertisement.findOneAndUpdate(query, params, function(err, Advertisement){
      if(err){
        console.log("AdvertisementController: updateAdvertisement(-): ERROR while updating Advertisement");
        callback(err, null);
        return;
      }
      callback(null, Advertisement);
      console.log("AdvertisementController: updateAdvertisement(-): Advertisement updated successfuly!!");
    });
  },

  deleteAdvertisement: function(advertisementId, callback){
    console.log('AdvertisementController: deleteAdvertisement(-) params'+JSON.stringify(advertisementId));
    //get the Advertisement with given AdvertisementId and delete it
    console.log("advertisementId "+advertisementId);
    var query = {_id:advertisementId}
    Advertisement.findOneAndRemove(query, function(err, response){
      if(err){
        console.log("AdvertisementController: deleteAdvertisement(-): ERROR while deleting Advertisement with AdvertisementId: "+advertisementId);
          callback(err, null);
          return;
      }
       callback(null, response);
        console.log("AdvertisementController: deleteAdvertisement(-): Advertisement got deleted successfully with response: "+JSON.stringify(response));

    });
  }
}
