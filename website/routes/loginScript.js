var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');	
var un = null;
var pw = null;
var register = null;
var lines = null;
var accounts = null;
var exists = false;

router.post('/', function(req, res) {
	un = req.body.username;
	pw = req.body.password;
	console.log('Username: '+un);
	console.log('Password: '+pw);
	fs.readFile('./public/files/register.txt', 'utf8', function(err, data) {	
		register = data;
		register = register.replace(/(\r\n|\n|\r)/gm,"");
		accounts = register.split(';');
		for(i = 0; i < accounts.length; i++)
		{
			var username;
			var password;
			var account = accounts[i];
			console.log('\nParsing account: ' + account);
			account = account.split(':');
			username = account[0];
			password = account[1];
			console.log('Username: '+username + ' Password: ' + password);
			if(un == username && pw == password)
			{
				exists = true;
				console.log('Logged in');
				res.redirect('/loggedin');
				break;
			}
		}
		if(exists == false)
		{
			res.redirect(req.get('referer'));
		}
	});
});
module.exports = router;