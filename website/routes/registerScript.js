var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
	fs.appendFile('./public/files/register.txt','Hej på dig asdtest\n', function(err){
    if(err){console.log(err)}
	});
});
module.exports = router;