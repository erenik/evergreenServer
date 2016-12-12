var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var hs = null;

router.get('/', function(req, res) {
	req.body.highscore = '0';
	console.log('startingtoread');
	fs.readFile('./public/files/highscore.txt', 'utf8', function(err, data) {
		console.log('wrote: \n' + data);
	});
});
module.exports = router;