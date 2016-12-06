var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');	
var un = null;
var pw = null;
var register = null;

router.post('/', function(req, res) {
	console.log('startoflogin');
	un = req.body.username;
	pw = req.body.password;
	fs.readFile('./public/files/highscore.txt', 'utf8', function(err, data) {
		register = data;
	});
	console.log('endoflogin');
});
module.exports = router;