var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
	fs.readFile('D:/evergreen2/trunk/website/public/files/highscore.txt', 'utf8', function(err, contents) {
	console.log(contents);
	console.log('File Read');
});});
module.exports = router;