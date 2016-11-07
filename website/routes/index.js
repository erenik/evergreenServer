var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/download', function(req, res){
  res.render('download', {
    title: 'Download'
  });
});

router.get('/register', function(req, res){
  res.render('register', {
    title: 'Register'
  });
});

router.get('/login', function(req, res){
  res.render('login', {
    title: 'Login'
  });
});

module.exports = router;
