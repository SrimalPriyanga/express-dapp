var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// define the home page route only for this router
router.get('/', function(req, res) {
	res.send('Birds home page');
});

// define the about route under the birds
router.get('/about', function(req, res) {
	res.send('About birds');
});

module.exports = router;