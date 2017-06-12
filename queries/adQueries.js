var AdvertisementController = require('../controllers/AdvertisementController');

function getAllAdvertisement(req, res, next){
  console.log("getAllAdvertisement.get()");
  AdvertisementController.getAllAdvertisement(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'Success',
      results: results
    });
  });
}

function createAdvertisement(req, res, next){
  console.log("createAdvertisement)");
  AdvertisementController.createAdvertisement(req.body, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    console.log('api:post(): successful with response: '+ JSON.stringify(results));
    res.json({
      confirmation: 'Success',
      results: results
    });
  });
}

module.exports = {
  getAllAdvertisement: getAllAdvertisement,
  createAdvertisement: createAdvertisement
};
