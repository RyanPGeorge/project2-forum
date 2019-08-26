var Post = require('../models/user');

module.exports = {
  index,
  create
};

function index(req, res) {
  Post.find({}, function(err, posts) {
    res.render('posts/index', { title: 'All Posts', posts });
  });
}

function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    post.comment.push(req.body);
    post.save(function(err) {
      res.redirect(`/posts/${post._id}`);
    });
  });
}