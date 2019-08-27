var Comment = require('../models/user');

module.exports = {
  create
};

function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    post.comment.push(req.body);
    post.save(function(err) {
      res.redirect(`/posts/${post._id}`);
    });
  });
}