var Comment = require('../models/user');

module.exports = {
  create,
  newCommentForm
};

function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    post.comment.push(req.body);
    post.save(function(err) { //post.comment.save?
      res.redirect(`/posts/${post._id}`);
    });
  });
}

function newCommentForm(req, res) {
  res.render('posts/newcomment', {user: req.user, title: 'New Comment'})
}



