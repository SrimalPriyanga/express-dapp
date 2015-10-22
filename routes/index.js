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

router.get('/view1-tpl', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/test.html'));
});

router.get('/view2-tpl', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
