var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();

/* OSÄKER PÅ VAD DETTA GÖR */
router.get('/', function(req, res){
  res.send('layout')
});

router.get('/download', function(req, res){
  res.send('download')
});

router.get('/register', function(req, res){
  res.send('register')
});

router.get('/login', function(req, res){
  res.send('login')
});

module.exports = router;
