var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');


router.get('/', postCtrl.index);
router.post('/', postCtrl.create);
router.get('/posts/new', postCtrl.new);

router.get('/:id', postCtrl.show);
router.delete('/:id', postCtrl.delete);




module.exports = router;