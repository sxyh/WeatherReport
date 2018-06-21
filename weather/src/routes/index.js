var express = require('express');
var router = express.Router();
var remote = require('./remote.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req, res, next) {
	var city = req.query.city;
	var url = 'https://www.sojson.com/open/api/weather/json.shtml?city=' + encodeURI(city);
	console.log(url);
	remote(url, res);
});

module.exports = router;
