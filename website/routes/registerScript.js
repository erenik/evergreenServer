var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');	
var un = null;
var pw = null;
var exists = false;

router.post('/', function(req, res) {
	un = req.body.username;
	pw = req.body.password;
	fs.readFile('./public/files/register.txt', 'utf8', function(err, data) {	
		register = data;
		register = register.replace(/(\r\n|\n|\r)/gm,"");
		accounts = register.split(';');
		console.log(accounts);
		for(i = 0; i < accounts.length; i++)
		{
			var username;
			var account = accounts[i];
			console.log('\nParsing account: ' + account);
			account = account.split(':');
			username = account[0];
			if(un == username)
			{
				exists = true;
				console.log('Already exists');
				res.redirect(req.get('referer'));
				break;
			}
		}
		console.log(exists);
		if(exists == false)
		{
			console.log('trying to register');
			fs.appendFile('./public/files/register.txt',un+':'+pw+';'+'\n', function(err){
				if(err){console.log(err)}
				res.redirect('/registered');
			});
		}
		exists = false;
	});
});
module.exports = router;