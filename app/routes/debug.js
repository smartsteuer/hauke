var express = require('express');
var router = express.Router();

/* GET debug listing. */
router.get('/', function(req, res, next) {
	res.render('debug', { title: 'Debug' });
});

module.exports = router;
