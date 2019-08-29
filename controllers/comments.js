var Post = require('../models/post');

module.exports = {
  create
};

function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    post.comments.user = req.body.user;
    post.comments.push(req.body, req.params.id);
    post.save(function(err) {
      res.redirect(`/posts/${post._id}`);
    });
  });
}




