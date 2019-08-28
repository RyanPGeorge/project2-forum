var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');


router.get('/', postCtrl.index);
router.post('/', isLoggedIn, postCtrl.create);
router.get('/new', isLoggedIn, postCtrl.newForm);

router.get('/update/:id', isLoggedIn, postCtrl.updateForm)
router.put('/:id', isLoggedIn, postCtrl.update)

router.get('/:id', isLoggedIn, postCtrl.show);
router.delete('/:id', isLoggedIn, postCtrl.delete);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;