var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');


router.post('/', postCtrl.create);
router.post('/:id').postCtrl.show);
router.delete('/:id', postCtrl.delete);
router.get('/', postCtrl.index);
router.get('/new', postCtrl.new);


module.exports = router;