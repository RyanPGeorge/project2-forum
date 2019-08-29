var express = require('express');
var router = express.Router();
var commentCtrl = require('../controllers/comments');


router.post('/posts/:id/comments', isLoggedIn, commentCtrl.create);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;