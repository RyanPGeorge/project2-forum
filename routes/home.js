var express = require('express');
var router = express.Router();
var passport = require('passport');
var homeCtrl = require('../controllers/home');


router.get('/', homeCtrl.index);


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/posts',
    failureRedirect : '/users'
  }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
