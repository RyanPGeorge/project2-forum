var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user, title: 'The Conversation'});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/login', passport.authenticate(
  'google',
  {
    successRedirect : '/index',
    failureRedirect : '/error'
  }
));


module.exports = router;
