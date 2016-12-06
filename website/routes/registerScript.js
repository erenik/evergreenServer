var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');	
var un = null;
var pw = null;

router.post('/', function(req, res) {
	console.log('startofregister');
	un = req.body.username;
	pw = req.body.password;
	fs.appendFile('./public/files/register.txt',un+':'+pw+';'+'\n', function(err){
    if(err){console.log(err)}
	});
	console.log('endofregister');
});
module.exports = router;