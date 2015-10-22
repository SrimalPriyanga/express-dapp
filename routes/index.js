var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('partials/partial1', function(req, res, next) {
  //var name = req.params.name;
  res.render('partials/partial1');
});

module.exports = router;
