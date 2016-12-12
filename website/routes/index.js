var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();
var downloadEG = require('./downloadOne');

/* OSÄKER PÅ VAD DETTA GÖR */
/*
router.get('/', function(req, res){
  res.render('/layout', function(err, html)
  {
    res.send('layout')	
  });
});

router.get('/download', function(req, res){
  res.render('/download', function(err, html)
  {
  res.send('download')
  });
});

router.get('/register', function(req, res){
  res.render('/register', function(err, html)
  {
  res.send('register')
  });
});

router.get('/login', function(req, res){
  res.render('/login', function(err, html)
  {
  res.send('login')
  });
});

*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/download', function(req, res, next) {
   res.render('download', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/highscore', function(req, res, next) {
  res.render('highscore', { title: 'Express' });
});

router.get('/loggedin', function(req, res, next) {
  res.render('loggedin', { title: 'Express' });
});

module.exports = router;
