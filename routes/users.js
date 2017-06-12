var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var UserController = require('../controllers/UserController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Register', function(req, res, next) {
	console.log('Register.......');
  res.render('RegUser', { title: 'Aricent OLX' });
});

router.post('/RegUser', function(req, res, next) {
  //res.send(req.body);

	UserController.registerUser(req.body);
	//res.send("Suceess.");
	res.render('index', { title: 'Express' });


});

router.get('/Posting', function(req, res, next) {
	console.log('PostAd.......');
  res.render('PostAd', { title: 'Aricent OLX' });
});



module.exports = router;
