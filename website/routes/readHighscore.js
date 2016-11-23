var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
	fs.readFile('./public/files/highscore.txt', 'utf8', function(err, contents) {
	console.log(contents);
	console.log('File Read');
	return;
});});
module.exports = router;